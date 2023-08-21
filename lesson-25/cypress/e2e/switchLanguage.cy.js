const mainpage = require('../pageobjects/mainPage');
const header = require('../pageobjects/components/header');


describe('Localization', function () {
  it('Check translate to Deutsch language', () => {
    mainpage.navigate('https://webdriver.io/');
    header.clickLanguageMenuButton();
    header.clickDeutschLanguageButton();
    header.buttonDocs.should('have.text', 'Dokumentation')
  });
});