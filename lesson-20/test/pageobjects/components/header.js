class Header {
    get searchField() {
      return $('span.DocSearch-Button-Container');
    }
    get navMenuItems() {
      return $$('div.navbar__inner div:nth-child(-n+1) a.navbar__item.navbar__link');
    }
    get colorButton() {
      return $('button.clean-btn.toggleButton_gllP');
    }
    get deutschLanguageButton() {
      return $('//a[text() = "Deutsch"]');
    }
    get languageMenuButton() {
      return $('div.navbar__item.dropdown--hoverable.dropdown--right');
    }
    async clickHeaderButton(button) {
      await button.waitForEnabled();
      await button.click();
    }
    async clickSearchField() {
      await this.searchField.waitForEnabled();
      await this.searchField.click();
    }
  }
 
  module.exports = new Header();