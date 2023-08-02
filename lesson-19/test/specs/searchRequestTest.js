const {expect} = require('chai');

describe('Check search request', async () => {

  before(async () => {
    await browser.url('https://webdriver.io/');
  });

  it('Check searching "WebDriver Options" request: first output contains words "WebDriver Options"', async () => {
    const searchField = await $('span.DocSearch-Button-Container');
    await searchField.waitForEnabled();
    await searchField.click();
    const searchInput = await $('form.DocSearch-Form input');
    await searchInput.waitForEnabled();
    await searchInput.setValue('WebDriver Options');
    const firstSearchOutput = await $('#docsearch-item-0 span.DocSearch-Hit-title');
    await firstSearchOutput.waitForEnabled();
    expect(await firstSearchOutput.getText()).to.equal('WebDriver Options')
  });
});