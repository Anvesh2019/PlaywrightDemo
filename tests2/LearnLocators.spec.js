"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('Find element using attribute', async () => {
    const browser = await test_1.chromium.launch({ headless: false, channel: 'chrome' });
    const gpage = await browser.newPage();
    await gpage.goto('https://www.google.com');
    const txtSrch = await gpage.locator('[name="q"]');
    await txtSrch.fill("USA");
    // await gpage.keyboard.press('Enter');
});
(0, test_1.test)('Findelement By xpath', async ({}) => {
    const browser = await test_1.chromium.launch({ headless: false, channel: 'chrome' });
    const page2 = await browser.newPage();
    await page2.goto('https://www.google.com');
    const txtSrch = await page2.locator("//textarea[@name='q']");
    await txtSrch.fill("India");
    await page2.screenshot({ path: 'googlesearch.jpeg' });
    const text1 = await page2.locator('xpath=//div[contains(text(),"Google offered in:")]');
    console.log("google text visible:" + await text1.isVisible());
});
(0, test_1.test)('Findelement By classname', async ({}) => {
    const browser = await test_1.chromium.launch({ headless: false, channel: 'chrome' });
    const page2 = await browser.newPage();
    await page2.goto('https://www.google.com');
    const txtSrch = await page2.locator('textarea.gLFyf');
    await txtSrch.fill("India");
});
(0, test_1.test)('Findelement By text', async ({}) => {
    const browser = await test_1.chromium.launch({ headless: false, channel: 'chrome' });
    const page2 = await browser.newPage();
    await page2.goto('https://www.amazon.in');
    const giftcards = await page2.getByText("Amazon Pay").first();
    await giftcards.click();
});
(0, test_1.test)('Findelement By css selector', async ({}) => {
    const browser = await test_1.chromium.launch({ headless: false, channel: 'chrome' });
    const page2 = await browser.newPage();
    await page2.goto('https://www.google.com');
    const txtSrch = await page2.locator("css=textarea[name='q']"); //tagname[attribute=value]
    await txtSrch.fill("Techturorielaz");
});
(0, test_1.test)('Findelement By Testid', async ({}) => {
    const browser = await test_1.chromium.launch({ headless: false, channel: 'chrome' });
    const page2 = await browser.newPage();
    await page2.goto('https://www.google.com');
    const prodLink = await page2.getByTestId('products');
    await prodLink.click();
    //console.log(await page2.getByRole('div').filter(hasText:'Google offered in:  ').isEnabled());
});
(0, test_1.test)('Learn GetbyRole', async () => {
    const browser = await test_1.chromium.launch({ headless: false, channel: 'chrome' });
    const rsPage = await browser.newPage();
    await rsPage.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //const chk1:Locator= await rsPage.locator('css=input[id="checkBoxOption1"]'); //working
    //const chk1:Locator= await rsPage.locator('input[id="checkBoxOption1"]'); //working
    //const chk1:Locator= await rsPage.locator('input#checkBoxOption1'); //working
    await rsPage.getByRole("textbox").first().fill('India');
    await (0, test_1.expect)(rsPage.getByRole("button", { name: 'Mouse Hover' })).toBeVisible(); //working
    await rsPage.getByRole("button", { name: 'Mouse Hover' }).click(); //working
    //await chk1.click();
});
(0, test_1.test)('Get by Role or title google search', async ({ page }) => {
    await page.goto("https://www.google.com", {
        waitUntil: "domcontentloaded"
    });
    //await page.waitForTimeout(2000);
    await page.waitForLoadState("networkidle"); //wait until pageload
    const textboxes = await page.getByRole("combobox").all();
    console.log("Textbox count:", textboxes.length);
    await page.getByRole("combobox", { name: "Search" }).fill('India'); //working fine
    await page.getByRole("combobox", { name: "Search" }).press("Enter"); //working fine
    // await page.getByTitle("Search").fill("India");  //working fine
    // await page.getByTitle("Search").press("India"); //working fine
    /*
    ✅ getByRole('combobox', { name: 'Search' })
✅ getByLabel('Search')
✅ getByTitle('Search')
✅ locator('textarea[name="q"]')
❌ locator('#APjFqb') (avoid relying on dynamic IDs)
    */
});
//it will look for data-testid attribute
(0, test_1.test)("get by TestID", async ({ page }) => {
    await page.goto("https://www.google.com", {
        waitUntil: "domcontentloaded"
    });
    await page.waitForLoadState("networkidle");
    const textboxes = await page.getByTestId("APjFqb").all();
    console.log("Textbox count:", textboxes.length); // should give 0 coz no data-testid
    await page.getByTestId("APjFqb").fill("India"); //wont work coz no data-testid attribute
    await page.getByTestId("APjFqb").press("Enter");
});
//it will look for data-testid attribute
(0, test_1.test)("get by TestID in amazon site", async ({ page }) => {
    await page.goto("https://www.amazon.in", {
        waitUntil: "domcontentloaded"
    });
    await page.waitForLoadState("networkidle");
    const volControl = await page.getByTestId("DesktopFlexWatchNowOverlayTemplate").all();
    console.log("Textbox count:", volControl.length);
    await page.getByTestId("VolumePlayPanel").click();
    await page.waitForTimeout(30000);
});
//not working
(0, test_1.test)('getbyText', async ({ page }) => {
    await page.goto("https://www.google.com", {
        waitUntil: "domcontentloaded"
    });
    await page.waitForLoadState("networkidle");
    const searchResults = await page.getByText("Search");
    await searchResults.click();
});
(0, test_1.test)('getbyLabel', async ({ page }) => {
    await page.goto("https://www.google.com");
    //await page.waitForLoadState("networkidle"); 
    await page.waitForTimeout(2000);
    const txtSrch = await page.locator("css=textarea[name='q']"); //tagname[attribute=value]
    await txtSrch.fill("Techturorielaz");
    const searchResults = await page.getByLabel("Google Search");
    console.log("searchResults count:", await searchResults.count());
    if (await searchResults.count() > 0) {
        await searchResults.first().click(); // Click the first element if it exists
    }
});
//# sourceMappingURL=LearnLocators.spec.js.map