import {Locator, Page} from '@playwright/test';
export class googlePage
{
readonly url ="https://www.google.com/";
readonly page: Page;
readonly txtSrch: Locator;
readonly btnSignin: Locator;

constructor(page: Page) {
    this.page = page;
    this.txtSrch = page.locator("xpath=//textarea[@name='q']");
    this.btnSignin = page.locator("xpath=//a[@aria-label='Sign in']");
    }

async NavigateToSite(){
    await this.page.goto(this.url);
    }
}