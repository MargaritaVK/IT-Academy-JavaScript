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

    it('Check that home page header text is "ChromeDriver"', async () => {
        const homePageHeader = await driver.findElement(By.css('h1 span'))
        expect(String(await homePageHeader.getText()).toLowerCase()).to.equal('chromedriver')
    })
    
    it('Check that Chrome extensions page header text is "Chrome Extensions"', async()=>{
        const linkElement = await driver.findElement(By.xpath('//a[@class = "aJHbb dk90Ob jgXgSe HlqNPb" and contains(@data-url, "/extensions")]'))
        const chromeExtBtn = await driver.wait(until.elementIsVisible(linkElement))
        await chromeExtBtn.click()
        driver.executeScript('document.querySelector("h1 span").setAttribute("style", "color:green")')
        const chromeExtPageHeader = await driver.wait(until.elementLocated(By.css('h1 span')))
        expect(String(await chromeExtPageHeader.getText()).toLowerCase()).to.equal('chrome extensions')
    })

    it('Check that Search is working correctly', async()=>{
        const searchBtn =  await driver.wait(until.elementLocated(By.css('div[jscontroller="gK4msf"]')))
        await searchBtn.click()
        driver.wait(until.elementLocated(By.css('input.whsOnd.zHQkBf')))
        const searchInput = await driver.findElement(By.css('input.whsOnd.zHQkBf'))
        await searchInput.sendKeys('driver', Key.RETURN)
        const firstResult = driver.wait(until.elementLocated(By.css('div[jscontroller = U720xd]>div>div:first-child')))
        expect(await firstResult.getText()).to.contain('driver')
    })

    it('Check correctness of page URL: contains /mobile-emulation', async()=>{
        const backBtn = await driver.findElement(By.css('div.U26fgb.mUbCce.fKz7Od.h3nfre.M9Bg4d'))
        await backBtn.click()
        const moreMenu = await driver.findElement(By.css('li.VsJjtf.oXBWEc > div.PsKE7e'))
        await moreMenu.click()
        const mobEmulBtn = await driver.findElement(By.css('ul.VcS63b a[href="/mobile-emulation"]'))
        await mobEmulBtn.click()
        const currUrl = await driver.getCurrentUrl()
        expect(currUrl).to.contain('/mobile-emulation')
    })
})