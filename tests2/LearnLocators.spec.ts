import { test, expect,Page, Browser, Locator, chromium } from '@playwright/test';

test('Learn Locators',async()=>{
    const browser:Browser=await chromium.launch({headless:false, channel:'chrome'});
    const gpage:Page=await browser.newPage();
    await gpage.goto('https://www.google.com');
    const txtSrch:Locator=await gpage.locator('[name="q"]');
    await txtSrch.fill("USA");
   // await gpage.keyboard.press('Enter');
  
});

test('Findelement By xpath',async({})=>{
    const browser:Browser=await chromium.launch({headless:false, channel:'chrome'});
    const page2:Page=await browser.newPage();
    await page2.goto('https://www.google.com');
    const txtSrch:Locator=await page2.locator("//textarea[@name='q']");
    await txtSrch.fill("India");
    await page2.screenshot({path:'googlesearch.jpeg'});
    const text1:Locator= await page2.locator('//div[contains(text(),"Google offered in:")]');
    console.log("google text visible" + text1.isVisible);
    //browser.close();

});

test('Findelement By classname',async({})=>{
    const browser:Browser=await chromium.launch({headless:false, channel:'chrome'});
    const page2:Page=await browser.newPage();
    await page2.goto('https://www.google.com');
    const txtSrch:Locator=await page2.locator('textarea.gLFyf');
    await txtSrch.fill("India");
    
});

test('Findelement By text',async({})=>{
    const browser:Browser=await chromium.launch({headless:false, channel:'chrome'});
    const page2:Page=await browser.newPage();
    await page2.goto('https://www.amazon.in');
    const giftcards:Locator=await page2.getByText("Amazon Pay").first(); //xpath
    await giftcards.click();
    
});