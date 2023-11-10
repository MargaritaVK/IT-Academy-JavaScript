const BasePage = require('./basePage');

class ApiPage extends BasePage {
    
    get buttonElement() {
        return cy.xpath('//a[contains(@class,"menu__link--sublist") and @href="/docs/api/element"]');
    }
    clickButtonElement() {
        this.buttonElement.click();
    }
}

module.exports = new ApiPage();