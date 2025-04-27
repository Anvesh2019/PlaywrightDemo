import {test, Locator, Expect, chromium, Browser, Page} from '@playwright/test';
import { googlePage } from './Pages/googlePage';

test('Learn Pageobject Model', async()=>{
    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
    const page:Page= await browser.newPage();
    const gpage= new googlePage(page);
    await gpage.NavigateToSite();
    await gpage.txtSrch.fill("TechTutorialz");
});
