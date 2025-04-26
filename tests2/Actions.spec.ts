import {test,expect,Locator, Page, Browser} from '@playwright/test'
import { BADHINTS } from 'dns';
import { chromium,webkit,firefox } from 'playwright'

test('Learn Mouse hover', async()=>{
      const browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
        const page:Page= await browser.newPage();
        await page.goto('https://www.spicejet.com');
        await page.getByText('Add-ons').first().hover();
        await page.getByText('Taxi').first().click();
        await page.waitForTimeout(10000);
           
});

test('Learn Double click', async()=>{
    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
      const page:Page= await browser.newPage();
      await page.goto('https://www.google.com');
      const btnSignin:Locator=await page.locator("xpath=//a[@aria-label='Sign in']");
      await btnSignin.dblclick(); //double click
      await page.waitForTimeout(10000); //just wait for 10 secs
         
});


test('Learn Right click', async()=>{
    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
      const page:Page= await browser.newPage();
      await page.goto('https://www.google.com');
      const btnSignin:Locator=await page.locator("xpath=//a[@aria-label='Sign in']");
      await btnSignin.first().click({ button: "right" }); //right click
      await page.waitForTimeout(10000); //just wait for 10 secs
         
});

test('Learn Window Scroll', async()=>{
  const browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
    const page:Page= await browser.newPage();
    await page.goto('https://www.amazon.in');
    for(let i:number=0;i<5;i++) //scroll 2500 pixels vertically..each time 500 pixels
    {
      await page.evaluate(() => window.scrollBy(0, 500));
    }
    
    await page.waitForTimeout(10000); //just wait for 10 secs
       
});

test('Learn Drag and drop', async()=>{
  const browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
    const page:Page= await browser.newPage();
    await page.goto('http://demo.guru99.com/test/drag_drop.html');
   const from:Locator=await page.locator("xpath=//*[@id='credit2']/a");
   const To:Locator=await page.locator("xpath=//*[@id='bank']/li");
    await page.waitForTimeout(2000); //just wait for 2 secs
    await from.dragTo(To);
    await page.waitForTimeout(5000); 
});

