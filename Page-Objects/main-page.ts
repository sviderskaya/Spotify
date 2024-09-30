import { type Locator, type Page } from '@playwright/test';

export class MainPage {
    readonly sighUpBtn: Locator = this.page.locator('[data-testid="signup-button"]')

    constructor(readonly page: Page) { }

}