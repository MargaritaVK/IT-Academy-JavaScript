import { Builder, By, until, Key } from "selenium-webdriver";
import { expect } from "chai";

let driver
describe('Check Chromedriver headers and navigation', async () => {
    before(async () => {
        driver = await new Builder().forBrowser('chrome').build()
        await driver.manage().window().setSize({width: 1920, height: 1080})
        await driver.get('https://chromedriver.chromium.org/home')
    })

    after(()=>{
        driver.quit()
    })

    it('Check that names of titles are named correctly', async () => {
        const homePageHeader = await driver.findElement(By.css('span.Rn3Z1b'));
        expect(String(await homePageHeader.getText()).toLowerCase()).to.equal('chromedriver');
        const linkElement = await driver.findElement(By.xpath('//*[@id="WDxLfe"]/ul[1]/child::li[3]//a'));
        const chromeExtensionsButton = await driver.wait(until.elementIsVisible(linkElement));
        await chromeExtensionsButton.click();
        driver.executeScript('document.querySelector("span.Rn3Z1b").setAttribute("style", "color:green")');
        const chromeExtensionsPageHeader = await driver.wait(until.elementLocated(By.css('span.Rn3Z1b')));
        expect(String(await chromeExtensionsPageHeader.getText()).toLowerCase()).to.equal('chrome extensions');
    })

    it('Check that Search is working correctly', async()=>{
        const searchButton = await driver.findElement(By.css('div[jscontroller="gK4msf"]'));
        await searchButton.click();
        driver.wait(until.elementLocated(By.css('input.whsOnd.zHQkBf')));
        const searchInput = await driver.findElement(By.css('input.whsOnd.zHQkBf'));
        await searchInput.sendKeys('driver', Key.RETURN);
        const firstResult = driver.wait(until.elementLocated(By.css('div[jscontroller = U720xd]>div>div:first-child')));
        expect(await firstResult.getText()).to.contain('driver');
    })

    it('Check correctness of page URL: contains /mobile-emulation', async()=>{
        const backButton = await driver.findElement(By.css('div.U26fgb.mUbCce.fKz7Od.h3nfre.M9Bg4d'));
        await backButton.click();
        const moreMenu = await driver.findElement(By.css('li.VsJjtf.oXBWEc > div.PsKE7e'));
        await moreMenu.click();
        const mobileEmulationButton = await driver.findElement(By.css('ul.VcS63b a[href="/mobile-emulation"]'));
        await mobileEmulationButton.click();
        const currUrl = await driver.getCurrentUrl();
        expect(currUrl).to.contain('/mobile-emulation');
    })
})