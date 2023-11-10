class Header {
    get buttonAPI() {
        return cy.xpath('//a[contains(@class,"navbar__link") and @href="/docs/api"]');
    }
    get languageMenuButton() {
        return cy.xpath('//*[@class="navbar__item dropdown dropdown--hoverable dropdown--right"]');
    }
    get deutschLanguageButton() {
        return cy.xpath('//a[@lang="de"]');
    }
    get buttonDocs() {
        return cy.xpath("//a[@href='/de/docs/gettingstarted' and contains(@class,'navbar__item')]");
    }
    get colorThemeButton(){
        return cy.xpath("//button[@class='clean-btn toggleButton_gllP']");
    }

    clickButtonAPI() {
        this.buttonAPI.click();
    }
    clickLanguageMenuButton() {
        this.languageMenuButton.click()
    }
    clickDeutschLanguageButton() {
        this.deutschLanguageButton.click({ force: true });
    }
    clickColorThemeButton(){
        this.colorThemeButton.click()
    }
}

module.exports = new Header();