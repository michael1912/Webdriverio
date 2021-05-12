const AMillionMorePage = require('../pageobjects/car-safety/aMillionMorePage');
const CookiesAlert = require('../pageobjects/car-safety/cookiesAlert');

describe('"A Million More" page - image comparison', function() {
    it('Go to "A Million More" Page', async function() {              
        browser.maximizeWindow()        
        await AMillionMorePage.open();
    });
    it('Accept Cookies', async function() {
        await CookiesAlert.waitForDisplayed(true);
        await CookiesAlert.acceptCookies();
        await CookiesAlert.waitForDisplayed(false);
    });
    // it('Save screenshots', async function() {
    // //  Save a current screen
    //     await browser.saveScreen('currentScreen');
    
    // //  Save an element
    //     var element = await AMillionMorePage.introSection;
    //     await browser.saveElement(element, 'introSectionElement');
    
    // //  Save a full page screenshot
    //     await browser.saveFullPageScreen('fullPage');
    
    // //  Save a full page screenshot with all tab executions
    //     await browser.saveTabbablePage('tabbablePage');
    //  });
    
      it('Check a current screen', async function() {
        await expect(await browser.checkScreen('currentScreen')).toEqual(0);
      });
      it('Check an "introSection" element', async function() {  
        var element = await AMillionMorePage.introSection;
        await expect(await browser.checkElement(element, 'introSectionElement')).toEqual(0);
      });
      it('Check a full page screenshot', async function() {  
        await expect(await browser.checkFullPageScreen('fullPage')).toEqual(0);
      });
      it('Check a full page screenshot with all tab executions', async function() {  
        await expect(await browser.checkTabbablePage('tabbablePage')).toEqual(0);
      });
});