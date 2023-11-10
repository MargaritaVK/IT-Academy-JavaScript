const {expect} = require('chai');
const mainPage = require ('../pageobjects/mainPage.js');
const header = require ('../pageobjects/components/header.js');

describe('Check change of language', async () => {

    it('Check that user is able to change language to Deutsch', async () => {
      await mainPage.navigate('https://webdriver.io/');
      await header.clickHeaderButton(header.languageMenuButton);
      await header.clickHeaderButton(header.deutschLanguageButton);
      expect(await mainPage.mainPageSubtitle.getText()).to.contain('Test-Framework für Browser');
    });
  });