import {test,expect,Browser, Page, Locator} from '@playwright/test';
import { chromium } from '@playwright/test';

test('Handle text box',async()=>{

    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'}); 
    const page:Page= await browser.newPage();
    await page.goto('https://www.google.com');
    const txtSrch: Locator=page.locator("[name='q']"); 
    txtSrch.fill("India");

    const length:string= await txtSrch.getAttribute("maxlength");
    console.log("max length is:" + length);
    await expect(txtSrch).toHaveValue("India");
    const txtValue:string= await txtSrch.inputValue();

    await expect(txtValue).toContain("India");

    

});