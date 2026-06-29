import {expect,test,Locator,Page,Browser,chromium} from '@playwright/test';

    
//https://demo.guru99.com/test/newtours/register.php
//https://www.ironspider.ca/forms/checkradio.htm
    test('Learn toBeChecked() assertion', async ({page}) => 
        {
        await page.goto('https://www.ironspider.ca/forms/checkradio.htm');
        await page.waitForTimeout(5000);
        const chk1:Locator= await page.locator('input[value="red"]');
         await expect(chk1).toBeChecked(); //verify if the checkbox is checked or not
        await chk1.check();
        await expect(chk1).toBeChecked(); //verify if the checkbox is checked or not
    });

    test('Learn toBeDisabled(), tobeEnabled() assertions', async ({page}) => 
        {
        await page.goto('https://www.amazon.in');  
        await page.waitForTimeout(3000);
        const logo:Locator=await page.locator('//a[@id="nav-logo-sprites"]');
        console.log(await logo.isEnabled()); //return true as the logo is enabled
        console.log(await logo.isVisible()); //return true as the logo is visible
        await expect(logo).toBeEnabled(); //return true as the logo is enabled
        await expect(logo).toBeVisible(); //return true as the logo is visible
        
        await expect(logo).toBeAttached(); //return true as the logo is attached to the DOM
    //     await expect(logo).toBeDisabled(); //return false as the logo is enabled
    //     await expect(logo).toBeHidden(); //return false as the logo is visible
     });
     test('Learn toContainText(), toHavetext() assertions', async ({page}) => 
        {
        await page.goto('https://www.amazon.in');  
        await page.waitForTimeout(3000);
        const giftcards:Locator=await page.locator('//a[text()="Gift Cards"]');
        await expect(giftcards).toContainText('Gift Cards');
        await expect(giftcards).toHaveText('Gift Cards123');
     });