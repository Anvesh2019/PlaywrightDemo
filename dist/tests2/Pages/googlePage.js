"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googlePage = void 0;
const test_1 = require("@playwright/test");
class googlePage {
    url = "https://www.google.com/";
    page;
    txtSrch;
    btnSignin;
    linkGmail;
    constructor(page) {
        this.page = page;
        this.txtSrch = page.locator("xpath=//textarea[@name='q']");
        this.btnSignin = page.locator("xpath=//a[@aria-label='Sign in']");
        this.linkGmail = page.locator("//a[@aria-label='Gmail ']");
    }
    async NavigateToSite() {
        await this.page.goto(this.url);
    }
    async clickonGmail() {
        await this.linkGmail.click();
    }
}
exports.googlePage = googlePage;
//# sourceMappingURL=googlePage.js.map