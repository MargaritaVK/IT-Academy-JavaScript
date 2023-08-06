const {expect} = require('chai');
const mainPage = require ('../pageobjects/mainPage.js');
const header = require ('../pageobjects/components/header.js');
const searchWindow = require ('../pageobjects/components/searchWindow.js');

describe('Check search request', async () => {

  it('Check searching "WebDriver Options" request: first output contains word "WebDriver Options"', async () => {
    await mainPage.navigate('https://webdriver.io/');
    await header.clickSearchField();
    await searchWindow.enterSearchInput('WebDriver Options');
    await searchWindow.getfirstSearchOutput();
    await expect(await searchWindow.firstSearchOutput.getText()).to.equal('WebDriver Options');
  });
});