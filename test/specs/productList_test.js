const AMillionMorePage = require('../pageobjects/car-safety/aMillionMorePage');
const CookiesAlert = require('../pageobjects/car-safety/cookiesAlert');

describe('Product List Test', function() {
    it('Go to "A Million More" Page', async function() {              
        browser.maximizeWindow()        
        await AMillionMorePage.open();
    });
    it('Accept Cookies', async function() {
        await CookiesAlert.waitForDisplayed(true);
        await CookiesAlert.acceptCookies();
        await CookiesAlert.waitForDisplayed(false);
    });
    it('Scroll to product list', async function() {              
        await AMillionMorePage.ProductListCarousel.scrollIntoView();
    });
    it('Validate product list navigation', async function() {              
        var products = [{key: 'V90', value: 'plug-in hybrid'},
                        {key: 'XC40', value: 'plug-in hybrid'},
                        {key: 'XC40', value: 'pure electric'}];

        for (var item in products)
        {
            try {
                var modelName = products[item].key;
                var rechargetype = products[item].value;
                await AMillionMorePage.ProductListCarousel.navigate(modelName, rechargetype);
                await expect(browser).toHaveTitle('Volvo '+modelName+' Recharge '+rechargetype+' | Volvo Cars')   
            } catch (error) {
                console.error(error);
            }
            finally {
                await AMillionMorePage.open(); 
            }
        }
        
    });
});