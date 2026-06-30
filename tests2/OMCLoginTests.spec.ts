import { test, expect,Page, Browser, Locator, chromium } from '@playwright/test';
import {common} from './common';
import {OMCLoginPage} from './Pages/OMCLoginPage';

let gpage:Page;
test('Login to OMC Test using Valid Credentials',async({page})=>{
   const omcPage= new OMCLoginPage(page);
   await omcPage.NavigateToOMCSite();
   await omcPage.EnterValidCredentials();
  
});
test('Verify Invalid Credentials',async({page})=>{
   const omcPage= new OMCLoginPage(page);
   await omcPage.NavigateToOMCSite();
   await omcPage.EnterInValidCredentials();
   await expect(omcPage.invalidCredError).toBeVisible();
   await page.waitForTimeout(3000);
});