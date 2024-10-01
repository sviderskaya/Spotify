import { type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker'
import { MainPage } from './main-page';

export class SightUpPage extends MainPage {
    readonly emailAddressInput: Locator = this.page.locator('#username');
    readonly nextBth: Locator = this.page.locator('[data-testid="submit"]');
    readonly passwordInput: Locator = this.page.locator('#new-password');
    readonly nameInput: Locator = this.page.locator('#displayName');
    readonly yearInput: Locator = this.page.locator('#year');
    readonly monthDropdown: Locator = this.page.locator('#month');
    readonly dayInput: Locator = this.page.locator('#day');
    readonly submitBtn: Locator = this.page.locator('.ButtonInner-sc-14ud5tc-0')

    readonly manRadioBtn: Locator = this.page.locator('[for="gender_option_male"]')
    readonly womanRadioBtn: Locator = this.page.locator('[for="gender_option_female"]');
    readonly nonBinaryRadioBtn: Locator = this.page.locator('[for="gender_option_non_binary"]');
    readonly somethingElseRadioBtn: Locator = this.page.locator('[for="gender_option_other"]');
    readonly preferNotToSayRadioBtn: Locator = this.page.locator('[for="gender_option_prefer_not_to_say"]');

    readonly marketingCheckbox: Locator = this.page.locator('[for="checkbox-marketing"]');
    readonly privacyCheckbox: Locator = this.page.locator('[for="checkbox-privacy"]');
    readonly termsAndConditionsCheckbox: Locator = this.page.locator('[for="terms-conditions-checkbox"]');

    readonly acceptCookieBtn: Locator = this.page.getByRole('button', { name: 'Accept Cookies' });

    constructor(readonly page: Page) {
        super(page);
    }

    async userRegistration(): Promise<void> {
        await this.page.goto("/");
        await this.sighUpBtn.click();
        await this.acceptCookieBtn.click();
        await this.emailAddressInput.fill(faker.internet.email({ firstName: 'T3hv48Spot' }));
        await this.submitBtn.click()
        await this.passwordInput.fill(faker.internet.password({ length: 10 }));
        await this.nextBth.click();
        await this.nameInput.fill(faker.person.firstName());
        await this.yearInput.fill(faker.date.birthdate({ min: 1950, max: 2010, mode: 'year' }).getFullYear().toString());
        await this.monthDropdown.click();
        await this.selectRandomMonth();
        await this.dayInput.fill(faker.number.int({ min: 1, max: 31 }).toString());
        await this.selectRandomGender();
        await this.nextBth.click();
        await this.selectAllCheckboxes();
        await this.nextBth.click();

    }

    async selectRandomGender(): Promise<void> {
        const genderOptions = [
            this.manRadioBtn,
            this.womanRadioBtn,
            this.nonBinaryRadioBtn,
            this.somethingElseRadioBtn,
            this.preferNotToSayRadioBtn
        ];
        const randomGender = genderOptions[Math.floor(Math.random() * genderOptions.length)];
        if (await randomGender.isVisible()) {
            await randomGender.click();
        } else {
            throw new Error('Gender is not visible');
        }
    }

    async selectAllCheckboxes(): Promise<void> {
        await this.marketingCheckbox.check();
        await this.privacyCheckbox.check();
        await this.termsAndConditionsCheckbox.check();
    }

    async selectRandomMonth(): Promise<void> {
        const monthValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        const randomIndex = Math.floor(Math.random() * monthValues.length);
        const randomMonth = monthValues[randomIndex];
        await this.page.selectOption('select[name="month"]', randomMonth);
    }
}