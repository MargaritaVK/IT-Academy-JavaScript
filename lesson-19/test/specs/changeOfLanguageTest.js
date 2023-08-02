const {expect} = require('chai');

describe('Check change of language', async () => {

  before(async () => {
    await browser.url('https://webdriver.io/');
  });

  it('Check that user is able to change language to Deutsch', async () => {
    const languageMenu = await $('div.navbar__item.dropdown--hoverable.dropdown--right');
    await languageMenu.waitForEnabled();
    await languageMenu.click();
    const deutschLanguageButton = await $('//a[text() = "Deutsch"]');
    await deutschLanguageButton.waitForEnabled();
    await deutschLanguageButton.click();
    expect(await $('//p[@class = "hero__subtitle"]').getText()).to.contain('Test-Framework für Browser');
  });
});