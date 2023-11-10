const { expect } = require('chai');

describe('Check right content of pages', function () {

  before(async () => {
    await browser.url('https://webdriver.io/');
  });

  it('Check right contents of the "Properties", "Methods" and "Notes" pages in the "Element" section', async () => {
    await $("div.navbar__items a[href='/docs/api']").click();
    await $("div.menu__list-item-collapsible a[href='/docs/api/element']").waitForClickable();
    await $("div.menu__list-item-collapsible a[href='/docs/api/element']").click();
    await $("//a[text()='Properties']").waitForDisplayed();
    await $("//a[text()='Properties']").click();
    await $('//h2[@id="properties"]').waitForDisplayed();
    expect(await $('//h2[@id="properties"]').isDisplayedInViewport()).to.equal(true);

    await $("//a[text()='Methods']").click();
    await $("//*[@id='methods']").waitForDisplayed();
    expect(await $("//*[@id='methods']").isDisplayedInViewport()).to.equal(true);

    await $("//a[text()='Remarks']").click();
    await $('//h2[@id="remarks"]').waitForDisplayed();
    expect(await $('//h2[@id="remarks"]').isDisplayedInViewport()).to.equal(true);
  });
});