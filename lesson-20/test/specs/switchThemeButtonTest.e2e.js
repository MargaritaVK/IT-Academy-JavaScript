const {expect} = require('chai');
const mainPage = require ('../pageobjects/mainPage.js');
const header = require ('../pageobjects/components/header.js');

describe('Check switching theme button', async () => {

  it('Check that theme changes from light to dark by clicking on theme switcher', async () => {
    await mainPage.navigate('https://webdriver.io/');
    await header.clickHeaderButton(header.colorButton);
    expect(await header.colorButton.getAttribute('title')).to.contain('currently dark mode');
  });
});

