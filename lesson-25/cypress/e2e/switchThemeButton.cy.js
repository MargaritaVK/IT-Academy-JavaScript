const mainpage = require('../pageobjects/mainPage');
const header = require('../pageobjects/components/header');

describe('Check switching theme button', function () {
    it('Check that theme changes from light to dark by clicking on theme switcher', () =>{
      mainpage.navigate('https://webdriver.io/');
      header.clickColorThemeButton();
      header.colorThemeButton.should('have.attr', 'title').and('contain', 'currently dark mode');
    })
  })