"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OMCLoginPage = void 0;
const test_1 = require("@playwright/test");
class OMCLoginPage {
    omcTesturl;
    omcMirrorUrl;
    page;
    txtUsername;
    txtPwd;
    btnLogin;
    validUsername = "un320387";
    validPassword = "jnz`7?2772ERP";
    invalidUsername = "testuser";
    invalidPassword = "testpassword";
    invalidCredError;
    constructor(page) {
        this.page = page;
        this.txtUsername = page.locator("xpath=//input[@id='ctl00_PageBody_UserName']");
        this.txtPwd = page.locator("xpath=//input[@id='ctl00_PageBody_UserPass']");
        this.btnLogin = page.locator("xpath=//input[@name='ctl00$PageBody$btnLogin']");
        this.invalidCredError = page.locator("xpath=//span[@id='ctl00_PageBody_Msg']");
        this.omcTesturl = "http://veritas.apps.mars/portal/WebCommon/Login.aspx?ReturnUrl=%2fportal%2fwebcommon%2fExternalLogin.aspx%3fAuthSuccessful%3dhttp%253A%252F%252Fveritas.apps.mars%253A8080%252Fchangemanagement&AuthSuccessful=http%3A%2F%2Fveritas.apps.mars%3A8080%2Fchangemanagement";
        this.omcMirrorUrl = "http://veritasmirror.apps.mars:8080/changeset/204752";
    }
    async NavigateToOMCSite() {
        await this.page.goto(this.omcMirrorUrl);
    }
    async EnterValidCredentials() {
        await this.txtUsername.fill(this.validUsername);
        await this.txtPwd.fill(this.validPassword);
        await this.btnLogin.click();
    }
    async EnterInValidCredentials() {
        await this.txtUsername.fill(this.invalidUsername);
        await this.txtPwd.fill(this.invalidPassword);
        await this.btnLogin.click();
    }
}
exports.OMCLoginPage = OMCLoginPage;
//# sourceMappingURL=OMCLoginPage.js.map