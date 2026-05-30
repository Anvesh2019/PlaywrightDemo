import {test, Locator, Expect, chromium, Browser, Page} from '@playwright/test';
import { googlePage } from './Pages/googlePage';

test('Learn Pageobject Model', async()=>{
    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
    const page:Page= await browser.newPage();
    const gpage= new googlePage(page);
    await gpage.NavigateToSite();
    await page.waitForTimeout(3000);
    await gpage.txtSrch.fill("TechTutorialz");
});

test('click on Gmail',async()=>{
    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
    const page:Page= await browser.newPage();
    const gpage= new googlePage(page);
    await gpage.NavigateToSite();
    await gpage.clickonGmail();
});

test('Click on Gmail Link', async ({ page }) => {
  await page.goto('https://google.com');
  await page.waitForTimeout(2000);
  //const btnGsearch:Locator= await page.locator('(//input[@value="Google Search"])[1]');

  const txtSrch:Locator= await page.locator('//textarea[@name="q"]');
  await txtSrch.fill("India");

  const value = await txtSrch.getAttribute('maxlength');
  console.log("Max length of search box:" + value);
  console.log("Is search box enabled?" + await txtSrch.isEnabled());
  console.log("Is search box editable?" + await txtSrch.isEditable());
  
  const btnGsearch:Locator= await page.locator('//a[text()="Gmail"]');
  await btnGsearch.click();
  
});
