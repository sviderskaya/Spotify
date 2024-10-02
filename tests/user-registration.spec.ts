import { test, expect } from "../fixture/baseFixture"

test.describe('Tests for spotify', () => {

    test('Should check user registration', async ({
        sightUpPage,
        siteHeader
    }) => {
        await sightUpPage.userRegistration();
        await expect(siteHeader.explorePremiumBtn).toBeVisible();
    })
})