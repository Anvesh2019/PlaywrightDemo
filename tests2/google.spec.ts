import { test, expect,Page, Browser, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright'; 
import { clsStud } from './clsStud';
import {common} from './common';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: 'html',
});

test('calling function',async()=>{
  const objStud=new clsStud(25,'Anand');
  objStud.Displayname();
  const sum=  objStud.AddNumbers(10,20);
  console.log("sum is:" + sum);
  const objCommon=new common();
  console.log(objCommon.AddNumbers(50,150));

});


test('navigate to google',async({page})=>{
await page.goto('https://google.com');
await expect(page).toHaveURL('https://www.google.com'); //assertion
await expect(page).toHaveTitle('Google');

});

/*
test('navigate to techtutorialz',async({page})=>{
  await page.goto('https://techtutorialz.com');
  await expect(page).toHaveTitle(/Tutorials/);

  });
*/
  

/*Getting screenshot, Logging*/
  test('search India',async({})=>{
    const browser:Browser=await chromium.launch({headless:false, channel:'chrome'});
    const page2:Page=await browser.newPage();
    await page2.goto('http://www.google.com');
    const txtsrch:Locator=await page2.locator('[name="q"]');
    txtsrch.fill('India');
    const srcEnabed:boolean= await txtsrch.isEnabled();
    console.log("search text box enabled:" + srcEnabed);
    console.log(await page2.title());
    await page2.screenshot({path:'homepage.jpeg'});
    expect(await page2.title()).toContain('Google');
    expect(await page2.title()).toEqual('Google');
   // browser.close();
  });
  
  


  test('Running Test in Firefox',async()=>{
    const browser:Browser= await firefox.launch({headless:false,channel:'firefox'});
    const page:Page= await browser.newPage();
    await page.goto('https://google.com');
    expect(await page.title()).toContain('Google');

  });
  test('Running Test in Webkit',async()=>{
    const browser:Browser= await webkit.launch({headless:false,channel:'webkit'});
    const page:Page= await browser.newPage();
    await page.goto('https://google.com');
    expect(await page.title()).toContain('Google');

  });

  test('Learn BrowserContext',async()=>{
    const browser:Browser= await chromium.launch({headless:false,channel:'chrome'});
    await browser.newContext();
    const page1:Page= await browser.newPage();
    await page1.goto('https://google.com');
    const txtsrch:Locator=await page1.locator('[name="q"]');
    
    await txtsrch.fill("india");

    //2nd browser context
    await browser.newContext();
    const page2:Page= await browser.newPage();
    await page2.goto('https://google.com');
    const txtsrch2:Locator=await page2.locator('[name="q"]');
    await txtsrch2.fill("chaina");

  });
//handle popups
test('Handle popup window', async ({ page }) => {
    
await page.goto('http://demo.guru99.com/test/delete_customer.php');
const custID:Locator = await page.locator('[name="cusid"]');
const custId:string = "523190";
await custID.fill(custId);
await page.waitForTimeout(2000);
await page.locator("//input[@name='submit']").click();
console.log("Submit button clicked");

page.on('dialog', async dialog => {
    console.log('Alert message:', dialog.message());
    await dialog.accept();
});


await page.screenshot({ path: 'after-submit.png', fullPage: true });
await page.waitForTimeout(3000);
//const popupPromise = page.waitForEvent('popup');
//const popup = await popupPromise;
//await popup.waitForLoadState();
//console.log(await popup.title());
//await expect(popup).toHaveTitle('New Window');

});
  
test('Demo test case', async ({ page }) => {
  await page.goto('https://google.com');
  const searchBox: Locator = await page.locator('[name="q"]');
  //await page.click('[name="q"]');
  //await page.fill('[name="q"]', 'Playwright');
  //await page.waitForTimeout(5000);
  //await page.fill('//*[@name="q"]', 'Playwright'); //we can directly use xpath also instead of locator

  // await searchBox.fill('Playwright');
  // await searchBox.press('Enter');
   await page.waitForTimeout(3000);
  // const firstResult: Locator = await page.locator('h3').first();
  // console.log(await firstResult.textContent());
  // expect(await firstResult.textContent()).toContain('Playwright');
  
  await page.close();
});