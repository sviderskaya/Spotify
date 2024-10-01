import { test, expect } from "@playwright/test";
import { SightUpPage } from "../Page-Objects/sign-up-page";
import { SiteHeader } from "../Page-Objects/site-header";

test.describe('Tests for spotify', () => {
    let sightUpPage: SightUpPage;
    let siteHeader: SiteHeader;

    test.beforeEach(async ({ page }) => {
        sightUpPage = new SightUpPage(page);
        siteHeader = new SiteHeader(page);
    })

    test('Should check user registration', async () => {
        await sightUpPage.userRegistration();
        await expect(siteHeader.explorePremiumBtn).toBeVisible();
    })
})