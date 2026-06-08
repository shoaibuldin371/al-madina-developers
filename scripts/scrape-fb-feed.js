const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .on('close', resolve);
      } else {
        res.resume();
        reject(new Error(`Request Failed: ${res.statusCode}`));
      }
    });
  });
}

(async () => {
  console.log("Starting Facebook Feed Scraper...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  // Set user agent to bypass basic bot limits
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  await page.setViewport({ width: 1280, height: 1000 });
  
  const targetUrl = 'https://www.facebook.com/almadinaaestate/';
  console.log(`Navigating to: ${targetUrl}`);
  await page.goto(targetUrl, { waitUntil: 'networkidle2' });
  
  // Settle time
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 5000)));
  
  try {
    await page.keyboard.press('Escape');
    console.log("Scrolling feed to load multiple posts...");
    for (let i = 0; i < 15; i++) {
      await page.evaluate(() => window.scrollBy(0, 1800));
      await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));
    }
    
    // Click all "See more" text expanders
    console.log("Expanding long text captions...");
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('div[role="button"], span, div'));
      const seeMore = buttons.filter(b => b.innerText && (b.innerText === 'See more' || b.innerText === 'See More'));
      seeMore.forEach(b => {
        try { b.click(); } catch(e) {}
      });
    });
    // Wait for text expansion
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));
  } catch (e) {
    console.log("Scrolling/expansion error: ", e.message);
  }
  
  console.log("Extracting articles...");
  const articlesData = await page.evaluate(() => {
    const articles = Array.from(document.querySelectorAll('div[role="article"]'));
    return articles.map((article, idx) => {
      // Collect text elements with dir="auto"
      const textElements = Array.from(article.querySelectorAll('div[dir="auto"], span[dir="auto"]'));
      let text = textElements
        .map(el => el.innerText.trim())
        .filter(t => t.length > 0)
        .join('\n');
      
      // Clean up text lines and remove repetitive phrases and FB layout words
      const lines = text.split('\n');
      const filteredLines = lines
        .map(l => l.trim())
        .filter(l => {
          if (!l) return false;
          const lower = l.toLowerCase();
          // Remove Facebook interaction terms and comment count numbers
          if (['like', 'comment', 'share', 'send', 'whatsapp', 'write a comment...', 'properties', 'property', 'al madina estate & builders', 'al madina developers', 'al-madina developers', 'al madina estate'].includes(lower)) return false;
          if (/^\d+$/.test(lower)) return false; // comment/like counts
          return true;
        });
        
      const uniqueLines = [...new Set(filteredLines)];
      text = uniqueLines.join('\n').trim();

      // Collect images in this post
      const imgElements = Array.from(article.querySelectorAll('img'));
      const validImages = imgElements
        .map(img => img.src)
        .filter(src => {
          if (!src) return false;
          // Filter out avatar pictures and tiny icons
          if (src.includes('/rsrc.php/') || src.includes('emoji') || src.includes('/emoji.php/') || src.includes('profile_id')) return false;
          return true;
        });

      return {
        index: idx,
        text: text,
        images: validImages
      };
    });
  });

  console.log(`Extracted raw content from ${articlesData.length} articles.`);
  
  const results = [];
  const outputDir = path.join(__dirname, '..', 'public', 'assets', 'al-madinah');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  let count = 0;
  for (const article of articlesData) {
    if (!article.text || article.images.length === 0) continue;
    
    // Select posts containing key real estate vocabulary
    const keywords = ['marla', 'plot', 'house', 'villa', 'property', 'land', 'booking', 'installment', 'estate', 'zaamin', 'orchard', 'kasur', 'lahore'];
    const hasKeyword = keywords.some(k => article.text.toLowerCase().includes(k));
    if (!hasKeyword) {
      continue;
    }

    const imgUrl = article.images[0];
    const timestamp = Date.now() + count;
    const filename = `fb_feed_${timestamp}.jpg`;
    const filepath = path.join(outputDir, filename);

    try {
      console.log(`Downloading image for article ${article.index}...`);
      await downloadImage(imgUrl, filepath);
      
      const details = article.text;
      let category = 'residential';
      if (details.toLowerCase().includes('comm')) category = 'commercial';
      else if (details.toLowerCase().includes('invest')) category = 'investment';
      
      let location = 'Zaamin City Lahore';
      if (details.toLowerCase().includes('kasur') || details.toLowerCase().includes('orchard')) {
        location = 'Al-Madina Orchard Kasur';
      }
      
      let title = `Al Madina Property Offer`;
      if (details.toLowerCase().includes('marla')) {
        const marlaMatch = details.match(/(\d+(?:\.\d+)?)\s*Marla/i);
        if (marlaMatch) {
          title = `${marlaMatch[0]} Plot/House - ${location}`;
        }
      }

      results.push({
        id: `fb-feed-${timestamp}`,
        title: title,
        badge: "Facebook Listing",
        category: category,
        price: "Call for Pricing",
        location: location,
        details: details.substring(0, 300) + (details.length > 300 ? '...' : ''),
        image: `/assets/al-madinah/${filename}`
      });
      count++;
    } catch (err) {
      console.error(`Failed to download image: ${err.message}`);
    }
  }

  const dataFilePath = path.join(__dirname, '..', 'data', 'facebookScraped.json');
  fs.writeFileSync(dataFilePath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`Saved ${results.length} scraped feed items to ${dataFilePath}`);

  await browser.close();
  console.log("Scraping finished!");
})();
