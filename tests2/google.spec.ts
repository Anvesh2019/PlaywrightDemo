import { test, expect,Page, Browser, Locator } from '@playwright/test';
import { webkit, chromium, firefox } from 'playwright'; 
import { clsStud } from './clsStud';
import {common} from './common';

test('calling function',async()=>{
  const objStud=new clsStud(25,'Anand');
  objStud.Displayname();
  const sum=  objStud.AddNumbers(10,20);
  console.log("sum is:" + sum);
  const objCommon=new common();
  console.log(objCommon.AddNumbers(50,150));

});



/*
test('navigate to google',async({page})=>{
await page.goto('https://google.com');
await expect(page).toHaveURL('https://www.google.com');
await expect(page).toHaveTitle('Google');

});

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
    const srcEnabed= await txtsrch.isEnabled();
    console.log("search text box enabled:" + srcEnabed);
    console.log(await page2.title());
    await page2.screenshot({path:'homepage.jpeg'});
    expect(await page2.title()).toContain('Google');
    expect(await page2.title()).toEqual('Google');
    browser.close();
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

  
