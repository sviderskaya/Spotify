import { type Locator, type Page } from '@playwright/test';
import { SiteHeader } from './site-header';

export class LogInPage extends SiteHeader {
    readonly userNameInput: Locator = this.page.locator('')

    constructor(readonly page: Page) {
        super(page)
    }

    async userLogIn(): Promise<void> {
        await this.page.goto("/");
        await this.logInBtn.click();

    }
}