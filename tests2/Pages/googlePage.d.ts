import { Locator, Page } from '@playwright/test';
export declare class googlePage {
    readonly url = "https://www.google.com/";
    readonly page: Page;
    readonly txtSrch: Locator;
    readonly btnSignin: Locator;
    readonly linkGmail: Locator;
    constructor(page: Page);
    NavigateToSite(): Promise<void>;
    clickonGmail(): Promise<void>;
}
//# sourceMappingURL=googlePage.d.ts.map