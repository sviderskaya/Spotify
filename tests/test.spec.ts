import { test, expect } from "@playwright/test";
import { SightUpPage } from "../Page-Objects/sign-up-page";

test.describe('Tests for spotify', () => {
    let sightUpPage: SightUpPage;

    test.beforeEach(async ({ page }) => {
        sightUpPage = new SightUpPage(page);
    })

    test('Should check user registration', async () => {
        await sightUpPage.userRegistration();

    })
})