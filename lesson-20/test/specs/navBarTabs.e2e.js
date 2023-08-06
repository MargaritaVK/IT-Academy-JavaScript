const {expect} = require('chai');
const mainPage = require ('../pageobjects/mainPage.js');
const header = require ('../pageobjects/components/header.js');
const { NAV_MENU_ITEMS } = require ('../helpers/constants.js');

describe('Check nav bar tabs', async () => {
  const navBarTabs = [];

  it(`Check that nav bar tabs are "${NAV_MENU_ITEMS.toString()}"`, async () => {
    await mainPage.navigate('https://webdriver.io/');
    await header.navMenuItems.forEach(async (element) => {
      navBarTabs.push(String(await element.getText()).toLowerCase());
    });
    await expect(navBarTabs).to.have.members(NAV_MENU_ITEMS);
  });
});