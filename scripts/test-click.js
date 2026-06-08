const puppeteer = require('puppeteer');

(async () => {
  console.log("Launching test browser...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.toString()));
  
  console.log("Navigating to http://localhost:3000...");
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 3000)));
  
  console.log("Clicking filter pills...");
  
  // Find all buttons on page
  const buttons = await page.$$('button');
  for (const button of buttons) {
    const text = await page.evaluate(el => el.innerText.trim(), button);
    if (['Plots', 'Houses', 'Commercial', 'Installment Plans', 'Zaamin City'].includes(text)) {
      console.log(`Clicking pill: "${text}"`);
      await button.click();
      await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));
    }
  }
  
  await browser.close();
  console.log("Test browser closed.");
})();
