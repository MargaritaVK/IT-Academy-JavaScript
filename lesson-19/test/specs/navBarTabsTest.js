const {expect} = require('chai');

describe('Check nav bar tabs', async () => {

  before(async () => {
    await browser.url('https://webdriver.io/');
  });

  it('Check that nav bar tabs are "Docs, API, Blog, Contribute, Community, Sponsor"', async () => {
    const navBarTabs = [];
    await $$('div.navbar__inner div:nth-child(-n+1) a.navbar__item.navbar__link').forEach(async (element) => {
      navBarTabs.push(String(await element.getText()).toLowerCase());
    });
    expect(navBarTabs).to.have.members(['docs', 'api', 'blog', 'contribute', 'community', 'sponsor']);
  });
});