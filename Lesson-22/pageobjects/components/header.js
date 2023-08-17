class Header {
    get searchField() {
      return 'button.DocSearch-Button';
    }
    get tabCommunity() {
      return 'div.navbar__inner div:nth-child(-n+1) a:nth-child(7)';
    }
    get tabStackOverflow() {
      return '//*[contains(@class,"theme-doc-toc-desktop")]//li[1]';
    }
    get titleStackOverflowPage(){
      return '//*[@id="stack-overflow"]'
    }
    get colorButton() {
      return 'button.clean-btn.toggleButton_gllP';
    }
    get deutschLanguageButton() {
      return '//a[text() = "Deutsch"]';
    }
    get languageMenuButton() {
      return 'div.navbar__item.dropdown--hoverable.dropdown--right';
    }
  }

  module.exports = Header;