// import { test as baseTest } from "@playwright/test";
// import { LogInPage } from "../Page-Objects/log-in-page";
// import { MainPage } from "../Page-Objects/main-page";
// import { SightUpPage } from "../Page-Objects/sign-up-page";
// import { SiteHeader } from "../Page-Objects/site-header";

// const test = baseTest.extend<{
//     loginPage: LogInPage;
//     mainPage: MainPage;
//     sightUpPage: SightUpPage;
//     siteHeader: SiteHeader;
// }>({
//     // page: async ({ page }, use) => {
//     //     const sightUpPage = new SightUpPage(page);

//     //     await sightUpPage.userRegistration();

//     //     await use(page);
//     // },
//     loginPage: async ({ page }, use) => {
//         const loginPage = new LogInPage(page);
//         await use(loginPage)
//     },
//     mainPage: async ({ page }, use) => {
//         const mainPage = new MainPage(page);
//         await use(mainPage)
//     },
//     siteHeader: async ({ page }, use) => {
//         const siteHeader = new SiteHeader(page);
//         await use(siteHeader)
//     },
// })

// export { test };
// export { expect } from "@playwright/test";

import { test as baseTest } from "@playwright/test";
import { LogInPage } from "../Page-Objects/log-in-page";
import { MainPage } from "../Page-Objects/main-page";
import { SightUpPage } from "../Page-Objects/sign-up-page";
import { SiteHeader } from "../Page-Objects/site-header";

const test = baseTest.extend<{
    loginPage: LogInPage;
    mainPage: MainPage;
    sightUpPage: SightUpPage;
    siteHeader: SiteHeader;
}>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LogInPage(page);
        await use(loginPage);
    },
    mainPage: async ({ page }, use) => {
        const mainPage = new MainPage(page);
        await use(mainPage);
    },
    sightUpPage: async ({ page }, use) => {
        const sightUpPage = new SightUpPage(page);
        await use(sightUpPage);
    },
    siteHeader: async ({ page }, use) => {
        const siteHeader = new SiteHeader(page);
        await use(siteHeader);
    },
});

export { test };
export { expect } from "@playwright/test";
