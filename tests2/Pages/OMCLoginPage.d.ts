import { Locator, Page } from '@playwright/test';
export declare class OMCLoginPage {
    readonly omcTesturl: string;
    readonly omcMirrorUrl: string;
    readonly page: Page;
    readonly txtUsername: Locator;
    readonly txtPwd: Locator;
    readonly btnLogin: Locator;
    readonly validUsername: string;
    readonly validPassword: string;
    readonly invalidUsername: string;
    readonly invalidPassword: string;
    readonly invalidCredError: Locator;
    constructor(page: Page);
    NavigateToOMCSite(): Promise<void>;
    EnterValidCredentials(): Promise<void>;
    EnterInValidCredentials(): Promise<void>;
}
//# sourceMappingURL=OMCLoginPage.d.ts.map