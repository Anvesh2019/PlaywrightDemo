import { test, expect,Page, Browser, Locator, chromium } from '@playwright/test';

test('Find element using attribute',async()=>{
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
    const text1:Locator= await page2.locator('xpath=//div[contains(text(),"Google offered in:")]');
    console.log("google text visible:" + await text1.isVisible());
    
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
    const giftcards:Locator=await page2.getByText("Amazon Pay").first(); 
    await giftcards.click();
    
});


test('Findelement By css selector',async({})=>{
    const browser:Browser=await chromium.launch({headless:false, channel:'chrome'});
    const page2:Page=await browser.newPage();
    await page2.goto('https://www.google.com');
    const txtSrch:Locator=await page2.locator("css=textarea[name='q']"); //tagname[attribute=value]
    await txtSrch.fill("Techturorielaz");
    
});

test('Findelement By Role',async({})=>{
    const browser:Browser=await chromium.launch({headless:false, channel:'chrome'});
    const page2:Page=await browser.newPage();
    await page2.goto('https://www.google.com');
    page2.getByTestId
    //console.log(await page2.getByRole('div').filter(hasText:'Google offered in:  ').isEnabled());
    
});

