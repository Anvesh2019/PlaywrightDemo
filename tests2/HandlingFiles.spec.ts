import {test, Page, Locator, expect,FileChooser } from '@playwright/test';

test('Upload single file',async({page})=>
{
 await page.goto("https://www.file.io/");
  let uploadIcon:Locator=await page.locator("//label[@for='select-files-input']");
 await uploadIcon.setInputFiles('C:/Users/AnandaBabuGummadilli/Documents/Anand_Details/VEDL_Info.docx'); 
 await page.waitForTimeout(5000);
 
});