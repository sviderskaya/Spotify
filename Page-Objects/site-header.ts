import { type Locator, type Page } from '@playwright/test';

export class SiteHeader {
    readonly explorePremiumBtn: Locator = this.page.locator('[title="Upgrade to Premium"]');
    readonly sighUpBtn: Locator = this.page.locator('[data-testid="signup-button"]');
    readonly logInBtn: Locator = this.page.locator('[data-testid="login-button"]');

    constructor(readonly page: Page) { }
}