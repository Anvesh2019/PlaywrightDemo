import {Page,expect,test,Locator,Browser,chromium,firefox,webkit} from '@playwright/test'; 


test('Handle Alert', async ({ page }) => {

    page.on('dialog', async dialog => {
    console.log(dialog.type());      // alert
    console.log(dialog.message());   // Alert text

    await dialog.accept();
  });
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  await page.locator('button:text("Click for JS Alert")').click();
  await page.waitForTimeout(3000);
 
});
test('Accept Confirmation', async ({ page }) => {

  page.on('dialog', async dialog => {
    console.log(dialog.type());
    console.log(dialog.message());
    await dialog.accept();
  });

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  await page.locator('button:text("Click for JS Confirm")').click();
});
