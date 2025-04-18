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
    //browser.close();

});
