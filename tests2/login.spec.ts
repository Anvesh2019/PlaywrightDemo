import {test,expect} from "@playwright/test";


test("Google test",async({page})=>{

 await page.goto("https://google.com");
 await page.waitForTimeout(5000);

 await expect(page)
 .toHaveTitle(/Google/);

});