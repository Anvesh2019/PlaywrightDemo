import { test, expect,Page, Browser, Locator, chromium } from '@playwright/test';
import {common} from './common';
import {OMCLoginPage} from './Pages/OMCLoginPage';

let gpage:Page;
test('Login to OMC Test using Valid Credentials',async({page})=>{
   const omcPage= new OMCLoginPage(page);
   await omcPage.NavigateToOMCSite();
   await omcPage.EnterValidCredentials();
   await page.waitForTimeout(3000);
   await expect(page).toHaveURL("http://veritasmirror.apps.mars:8080/changeset/204752");
});
test('Verify Invalid Credentials',async({page})=>{
   const omcPage= new OMCLoginPage(page);
   await omcPage.NavigateToOMCSite();
   await omcPage.EnterInValidCredentials();
   await expect(omcPage.invalidCredError).toBeVisible();
   await page.waitForTimeout(3000);
});