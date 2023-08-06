const BasePage = require ('./basePage');

class MainPage extends BasePage {
  get mainPageSubtitle() {
    return $('//p[@class = "hero__subtitle"]');
  }
}

module.exports = new MainPage();