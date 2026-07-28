"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
//added on 06/26
(0, test_1.test)('Upload single file', async ({ page }) => {
    await page.goto("https://www.file.io/");
    let uploadIcon = await page.locator("//label[@for='select-files-input']");
    await uploadIcon.setInputFiles('C:/Users/AnandaBabuGummadilli/Documents/Anand_Details/VEDL_Info.docx');
    await page.waitForTimeout(5000);
});
//Added on 06/27
(0, test_1.test)('Upload multiple files', async ({ page }) => {
    await page.goto("https://www.file.io/");
    let uploadIcon = await page.locator("//label[@for='select-files-input']");
    await uploadIcon.setInputFiles(['C:/Users/AnandaBabuGummadilli/Documents/Anand_Details/VEDL_Info.docx', 'C:/Users/AnandaBabuGummadilli/Documents/Anand_Details/Hindalco.docx']);
    await page.waitForTimeout(5000);
});
//# sourceMappingURL=HandlingFiles.spec.js.map