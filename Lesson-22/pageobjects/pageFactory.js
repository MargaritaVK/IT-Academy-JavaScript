const MainPage = require ('./mainPage');
const Header = require ('./components/header');
const SearchPage = require ('./components/searchPage');

class PageFactory {
    static 'Header' = new Header();
    static 'MainPage' = new MainPage();
    static 'SearchPage' = new SearchPage();
}

module.exports = PageFactory;