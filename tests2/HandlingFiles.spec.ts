import {test, Page, Locator, expect,FileChooser } from '@playwright/test';
//added on 06/26
test('Upload single file',async({page})=>
{
 await page.goto("https://www.file.io/");
  let uploadIcon:Locator=await page.locator("//label[@for='select-files-input']");
 await uploadIcon.setInputFiles('C:/Users/AnandaBabuGummadilli/Documents/Anand_Details/VEDL_Info.docx'); 
 await page.waitForTimeout(5000);
 
});

//Added on 06/27
test('Upload multiple files',async({page})=>
{
 await page.goto("https://www.file.io/");
  let uploadIcon:Locator=await page.locator("//label[@for='select-files-input']");
 await uploadIcon.setInputFiles(['C:/Users/AnandaBabuGummadilli/Documents/Anand_Details/VEDL_Info.docx', 'C:/Users/AnandaBabuGummadilli/Documents/Anand_Details/Hindalco.docx']); 
 await page.waitForTimeout(5000);
 
});