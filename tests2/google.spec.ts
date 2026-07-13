import { test, expect,Page, Browser, Locator, TestInfo } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright'; 
import { clsStud } from './clsStud';
import {common} from './common';
import { defineConfig } from '@playwright/test';


test.describe.configure({
    mode: 'parallel'
});
test('calling function',async ({ page }, testInfo)=>{
  console.log(`calling function: ${new Date().toLocaleTimeString()}`);
  console.log(`Worker: ${testInfo.workerIndex}`);
  const objStud=new clsStud(25,'Anand');
  objStud.Displayname();
  const sum=  objStud.AddNumbers(10,20);
  console.log("sum is:" + sum);
  const objCommon=new common();
  console.log(objCommon.AddNumbers(50,150));

});


test('navigate to google',async({page}, testInfo)=>{
  console.log(`navigate to google: ${new Date().toLocaleTimeString()}`);
  console.log(`Worker: ${testInfo.workerIndex}`);
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
  test('search India',async({page}, testInfo)=>{
    console.log(`search India: ${new Date().toLocaleTimeString()}`);
    console.log(`Worker: ${testInfo.workerIndex}`);
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
  
  test('Getting TestInfo ', async ({ page }, testInfo) => {
    console.log('test name:', testInfo.title);
    console.log('test status:', testInfo.status);
    console.log(`Time         : ${new Date().toLocaleTimeString()}`);
    console.log(`Worker Index : ${testInfo.workerIndex}`);
    console.log(`Project      : ${testInfo.project.name}`);
    console.log(`PID          : ${(globalThis as any).process?.pid ?? 'unknown'}`);

    await page.goto('https://google.com');
    await expect(page).toHaveTitle(/Google/);
     console.log('test duration:', testInfo.duration); // this will get 0 as test is not finised yet
});
test('Getting Test Duration', async ({ page }, testInfo) => {

    const start = Date.now();

    await page.goto('https://google.com');

    await expect(page).toHaveTitle(/Google/);

    const end = Date.now();

    console.log(`Execution Time: ${end - start} ms`);
});

  // test('Running Test in Firefox',async({page}, testInfo)=>{
  //   console.log(`Running Test in Firefox: ${new Date().toLocaleTimeString()}`);
  //   const browser:Browser= await firefox.launch({headless:false,channel:'firefox'});
  //   const page:Page= await browser.newPage();
  //   await page.goto('https://google.com');
  //   expect(await page.title()).toContain('Google');

  // });
  test('Running Test in Webkit', async ({ page: webkitPage }, testInfo) => {
    console.log(`Running Test in Webkit: ${new Date().toLocaleTimeString()}`);
    console.log(`Worker: ${testInfo.workerIndex}`);
    //const browser:Browser= await webkit.launch({headless:false,channel:'webkit'});
    //const page:Page= await browser.newPage();
    await webkitPage.goto('https://google.com');
    expect(await webkitPage.title()).toContain('Google');

  });

  test('Learn BrowserContext',async({page}, testInfo)=>{
    console.log(`Learn BrowserContext: ${new Date().toLocaleTimeString()}`);
    console.log(`Worker: ${testInfo.workerIndex}`);
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
test('Handle popup window', async ({ page }, testInfo) => {
    console.log(`Handle popup window: ${new Date().toLocaleTimeString()}`);
    console.log(`Worker: ${testInfo.workerIndex}`);
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
  
test('Demo test case', async ({ page }, testInfo) => {
  console.log(`Demo test case: ${new Date().toLocaleTimeString()}`);
  console.log(`Worker: ${testInfo.workerIndex}`);
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