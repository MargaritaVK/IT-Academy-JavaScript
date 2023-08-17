const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');

Given(/^I navigate on (.*) page$/, async (url) => {
    await browser.url(url)
});

When('I click {locator}', async (locator) => {
    await $(locator).waitForClickable();
    await $(locator).click();
});

When('I fill field {locator} with text {string}', async (locator, searchText) => {
    await $(locator).waitForClickable();
    await $(locator).setValue(searchText);
})

When('I wait for search results in {locator}', async (locator) => {
    await $(locator).waitForExist();
});

Then('I expect {locator} element should {comparison} text {string}', async (locator, comparison, text) => {
    await $(locator).waitForDisplayed();
    if(comparison === 'equal') {
        await expect(await (await $(locator).getText()).toLowerCase()).toEqual(text.toLowerCase());
    } else if(comparison === 'contain') {
        await expect(await (await $(locator).getText()).toLowerCase()).toContain(text.toLowerCase());
    }
});