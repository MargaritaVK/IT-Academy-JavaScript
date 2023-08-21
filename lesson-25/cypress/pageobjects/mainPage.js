const BasePage = require('./basePage');

class MainPage extends BasePage {
    get googleLogo() {
        return cy.xpath('//div[@class="companyUsage_ByZM"]//*[@src="/img/logos/google.png"]');
    }
    get netflixLogo() {
        return cy.xpath('//div[@class="companyUsage_ByZM"]//*[@src="/img/logos/netflix.png"]');
    }
    get microsoftLogo() {
        return cy.xpath('//div[@class="companyUsage_ByZM"]//*[@src="/img/logos/microsoft.svg"]');
    }
}

module.exports = new MainPage();