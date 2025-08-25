import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    console.log('Navigating to sageaaa.com...');
    const response = await page.goto('https://www.sageaaa.com', { 
      waitUntil: 'domcontentloaded',
      timeout: 30000 
    });
    
    console.log('Status:', response.status());
    console.log('URL:', page.url());
    
    const title = await page.title();
    console.log('Page Title:', title);
    
    // Get meta description
    const description = await page.$eval('meta[name="description"]', el => el.content).catch(() => 'No description found');
    console.log('Meta Description:', description);
    
    // Take a screenshot
    await page.screenshot({ path: 'sageaaa-screenshot.png' });
    console.log('Screenshot saved as sageaaa-screenshot.png');
    
    // Get page content preview
    const textContent = await page.evaluate(() => {
      const body = document.body;
      return body ? body.innerText.substring(0, 500) : 'No content found';
    });
    console.log('\nPage content preview (first 500 chars):');
    console.log(textContent);
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();