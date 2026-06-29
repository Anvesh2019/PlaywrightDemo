import {expect,test,Locator,Page,Browser,chromium} from '@playwright/test';
export async function launchBrowser(): Promise<Page> {
    const browser: Browser = await chromium.launch({
        headless: false,
        channel: 'chrome'
    });

    const page = await browser.newPage();
    return page;
}
export async function navigateTo(page: Page, url: string) {
    await page.goto(url);
}
export async function clickElement(page: Page, locator: string) {
    await page.locator(locator).click();
}
//enter text
export async function enterText(page: Page, locator: string, text: string) {
    await page.locator(locator).fill(text);
    //await enterText(page, "#username", "admin");
}
//clear text
export async function clearText(page: Page, locator: string) {
    await page.locator(locator).clear();
}

//press key
export async function pressKey(page: Page, locator: string, key: string) 
{
    await page.locator(locator).press(key);
}
//Select dropdown
export async function selectByLabel(page: Page, locator: string, value: string) {
    await page.locator(locator).selectOption({
        label: value
    });
}
//Select checkbox
export async function checkBox(page: Page, locator: string) {
    await page.locator(locator).check();
}
//select radio button
export async function selectRadio(page: Page, locator: string) {
    await page.locator(locator).check();
}
//get text
export async function getText(page: Page, locator: string): Promise<string> {
    return await page.locator(locator).textContent() ?? "";
}
//Get input value
export async function getInputValue(page: Page, locator: string): Promise<string> {
    return await page.locator(locator).inputValue();
}
//Wait for element to be visible
export async function waitForVisible(page: Page, locator: string) {
    await page.locator(locator).waitFor({
        state: "visible"
    });
}
//wait for page load
export async function waitForPage(page: Page) {
    await page.waitForLoadState("networkidle");
}
//Get screenshot
export async function takeScreenshot(page: Page, name: string) {
    await page.screenshot({
        path: `Screenshots/${name}.png`,
        fullPage: true
    });
}
//Mouse hower
export async function hover(page: Page, locator: string) {
    await page.locator(locator).hover();
}
//Right click
export async function rightClick(page: Page, locator: string) {
    await page.locator(locator).click({
        button: "right"
    });
}
//Accept alert

export function getTimeStamp() {
    return Date.now();
}

export function randomNumber(max: number): number {
    return Math.floor(Math.random() * max);
}