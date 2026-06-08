const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');

// Helper to download image files
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .on('close', resolve);
      } else {
        res.resume();
        reject(new Error(`Request Failed With Status Code: ${res.statusCode}`));
      }
    });
  });
}

(async () => {
  console.log("Starting Facebook Scraper...");
  const browser = await puppeteer.launch({
    headless: false, // headless: false is much more reliable for Facebook to avoid immediate bot checks
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  // Set viewport
  await page.setViewport({ width: 1280, height: 800 });
  
  // Go to Al Madina Developers Facebook photos
  const targetUrl = 'https://www.facebook.com/almadinaaestate/photos?_rdr';
  console.log(`Navigating to: ${targetUrl}`);
  await page.goto(targetUrl, { waitUntil: 'networkidle2' });
  
  // Wait a few seconds for the page to settle and any cookies prompt
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 5000)));
  
  // Extract photo elements in the grid and click the first one
  const photoThumbnails = await page.$$('a[href*="/photo"], a[href*="fbid="]');
  if (photoThumbnails.length > 0) {
    console.log(`Found ${photoThumbnails.length} photo thumbnails. Clicking the first one to open lightbox...`);
    await photoThumbnails[0].click();
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 5000)));
    
    const results = [];
    const outputDir = path.join(__dirname, '..', 'public', 'assets', 'al-madinah');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Loop to scrape 15 photos
    for (let i = 0; i < 15; i++) {
      console.log(`Scraping photo ${i + 1}/15...`);
      
      // Extract active image URL and caption text from the page
      const data = await page.evaluate(() => {
        // Find the main image in the lightbox
        const images = Array.from(document.querySelectorAll('img'));
        const mainImg = images.find(img => {
          const rect = img.getBoundingClientRect();
          return rect.width > 400 && rect.height > 400; // Lightbox images are large
        });
        
        // Find the description/caption text
        let caption = '';
        const article = document.querySelector('div[role="article"]');
        if (article) {
          const spans = Array.from(article.querySelectorAll('span'));
          const texts = spans.map(s => s.innerText.trim()).filter(txt => txt.length > 15);
          if (texts.length > 0) {
            caption = texts[0];
          }
        }
        
        // Fallback text check
        if (!caption) {
          const divs = Array.from(document.querySelectorAll('div'));
          const potentialTextDivs = divs.filter(d => {
            const children = d.children;
            return children.length === 0 && d.innerText && d.innerText.trim().length > 20;
          });
          if (potentialTextDivs.length > 0) {
            caption = potentialTextDivs[0].innerText.trim();
          }
        }
        
        return {
          imgUrl: mainImg ? mainImg.src : null,
          caption: caption || `Al Madina Property Update`
        };
      });
      
      if (data.imgUrl) {
        console.log(`Found Image URL: ${data.imgUrl}`);
        console.log(`Found Caption: ${data.caption.substring(0, 60)}...`);
        
        // Create local filename
        const timestamp = Date.now() + Math.floor(Math.random() * 1000);
        const filename = `fb_scraped_${timestamp}.jpg`;
        const filepath = path.join(outputDir, filename);
        
        try {
          await downloadImage(data.imgUrl, filepath);
          console.log(`Downloaded image to ${filename}`);
          
          // Determine clean title and details
          const details = data.caption;
          let category = 'residential';
          if (details.toLowerCase().includes('comm')) category = 'commercial';
          else if (details.toLowerCase().includes('invest')) category = 'investment';
          
          let location = 'Zaamin City Lahore';
          if (details.toLowerCase().includes('kasur') || details.toLowerCase().includes('orchard')) {
            location = 'Al-Madina Orchard Kasur';
          }
          
          let title = `Al Madina Property Update`;
          if (details.toLowerCase().includes('marla')) {
            const marlaMatch = details.match(/(\d+(?:\.\d+)?)\s*Marla/i);
            if (marlaMatch) {
              title = `${marlaMatch[0]} Plot/House - ${location}`;
            }
          }
          
          results.push({
            id: `fb-scraped-${timestamp}`,
            title: title,
            badge: "Facebook Update",
            category: category,
            price: "Call for Pricing",
            location: location,
            details: details,
            image: `/assets/al-madinah/${filename}`
          });
        } catch (err) {
          console.error(`Failed to download image: ${err.message}`);
        }
      } else {
        console.log("No main image found in lightbox, skipping...");
      }
      
      // Press Arrow Right to go to next photo
      console.log("Pressing ArrowRight for next photo...");
      await page.keyboard.press('ArrowRight');
      await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 3000))); // Wait for load
    }
    
    // Save results JSON
    const dataFilePath = path.join(__dirname, '..', 'data', 'facebookScraped.json');
    fs.writeFileSync(dataFilePath, JSON.stringify(results, null, 2), 'utf8');
    console.log(`Saved ${results.length} scraped posts to ${dataFilePath}`);
  } else {
    console.log("No photo thumbnails found in grid.");
  }
  
  await browser.close();
  console.log("Facebook Scraper finished!");
})();
