const {expect} = require('chai');
const mainPage = require ('../pageobjects/mainPage.js');
const header = require ('../pageobjects/components/header.js');
const { NAV_MENU_ITEMS } = require ('../helpers/constants.js');

  describe('Check that nav bar tabs contains "Docs, API, Blog, Contribute, Community, Sponsor', async () => {
    const navBarTabs = [];
    const tests = [
     { tabName: "docs" },
     { tabName: "api" },
     { tabName: "blog" },
     { tabName: "contribute" },
     { tabName: "community" },
     { tabName: "sponsor" }
   ];

    before(async ()=>{
         await mainPage.navigate('https://webdriver.io/');
         await header.navMenuItems.forEach(async (element) => {
           navBarTabs.push(String(await element.getText()).toLowerCase());
         });
       });
       
   tests.forEach(({tabName}) => {
     it(`Check that nav bar tabs contains ${tabName}"`, async() => {
       await expect(navBarTabs).to.have.members(NAV_MENU_ITEMS);
     });
   });
  });