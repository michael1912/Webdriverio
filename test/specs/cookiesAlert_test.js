const AMillionMorePage = require('../pageobjects/car-safety/aMillionMorePage');
const CookiesAlert = require('../pageobjects/car-safety/cookiesAlert');

describe('Cookies Alert Test', function() {
    it('Cookies alert is disaplyed', async function() {              
        browser.maximizeWindow()        
        await AMillionMorePage.open();
        await CookiesAlert.waitForDisplayed(true);
    });
    it('Click on "Accept Cookies" button', async function() {
        await CookiesAlert.acceptCookies();
    });
    it('Cookies alert is not disaplyed', async function() {
        await CookiesAlert.waitForDisplayed(false);
    });
});