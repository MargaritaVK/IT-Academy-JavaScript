const {expect} = require('chai');

describe('Check switching theme button', async () => {

  before(async () => {
    await browser.url('https://webdriver.io/');
  });

  it('Check that theme changes from light to dark by clicking on theme switcher', async () => {

    const switchThemeButton = await $('button.clean-btn.toggleButton_gllP');
    await switchThemeButton.waitForEnabled();
    await switchThemeButton.click();
    expect(await switchThemeButton.getAttribute('title')).to.contain('currently dark mode'); 
  });
});