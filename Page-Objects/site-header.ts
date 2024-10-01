import { type Locator, type Page } from '@playwright/test';

export class SiteHeader {
    readonly explorePremiumBtn: Locator = this.page.locator('[title="Upgrade to Premium"]')

    constructor(readonly page: Page) { }

}