import {chromium, FullConfig ,test as setup } from '@playwright/test';

async function globalSetup(config: FullConfig) 
{
  console.log('creating new database...');
  console.log("Global Setup Started");
  // Initialize the database
    
// const browser = await chromium.launch({
//         headless: false,
//         slowMo: 1000
//     });
//   const page = await browser.newPage();

//     await page.goto('https://example.com');
    console.log("Global Setup ended");
}
export default globalSetup;