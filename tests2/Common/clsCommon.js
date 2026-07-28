"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchBrowser = launchBrowser;
exports.navigateTo = navigateTo;
exports.clickElement = clickElement;
exports.enterText = enterText;
exports.clearText = clearText;
exports.pressKey = pressKey;
exports.selectByLabel = selectByLabel;
exports.checkBox = checkBox;
exports.selectRadio = selectRadio;
exports.getText = getText;
exports.getInputValue = getInputValue;
exports.waitForVisible = waitForVisible;
exports.waitForPage = waitForPage;
exports.takeScreenshot = takeScreenshot;
exports.hover = hover;
exports.rightClick = rightClick;
exports.getTimeStamp = getTimeStamp;
exports.randomNumber = randomNumber;
const test_1 = require("@playwright/test");
async function launchBrowser() {
    const browser = await test_1.chromium.launch({
        headless: false,
        channel: 'chrome'
    });
    const page = await browser.newPage();
    return page;
}
//navigate to
async function navigateTo(page, url) {
    await page.goto(url);
}
//click Element
async function clickElement(page, locator) {
    await page.locator(locator).click();
}
//enter text
async function enterText(page, locator, text) {
    await page.locator(locator).fill(text);
    //await enterText(page, "#username", "admin");
}
//clear text
async function clearText(page, locator) {
    await page.locator(locator).clear();
}
//press key
async function pressKey(page, locator, key) {
    await page.locator(locator).press(key);
}
//Select dropdown
async function selectByLabel(page, locator, value) {
    await page.locator(locator).selectOption({
        label: value
    });
}
//Select checkbox
async function checkBox(page, locator) {
    await page.locator(locator).check();
}
//select radio button
async function selectRadio(page, locator) {
    await page.locator(locator).check();
}
//get text
async function getText(page, locator) {
    return await page.locator(locator).textContent() ?? "";
}
//Get input value
async function getInputValue(page, locator) {
    return await page.locator(locator).inputValue();
}
//Wait for element to be visible
async function waitForVisible(page, locator) {
    await page.locator(locator).waitFor({
        state: "visible"
    });
}
//wait for page load
async function waitForPage(page) {
    await page.waitForLoadState("networkidle");
}
//Get screenshot
async function takeScreenshot(page, name) {
    await page.screenshot({
        path: `Screenshots/${name}.png`,
        fullPage: true
    });
}
//Mouse hower
async function hover(page, locator) {
    await page.locator(locator).hover();
}
//Right click
async function rightClick(page, locator) {
    await page.locator(locator).click({
        button: "right"
    });
}
//Accept alert
function getTimeStamp() {
    return Date.now();
}
function randomNumber(max) {
    return Math.floor(Math.random() * max);
}
//# sourceMappingURL=clsCommon.js.map