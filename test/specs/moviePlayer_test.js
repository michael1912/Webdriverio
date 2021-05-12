const AMillionMorePage = require('../pageobjects/car-safety/aMillionMorePage');
const CookiesAlert = require('../pageobjects/car-safety/cookiesAlert');

describe('Movie player Test', function() {
    it('Go to "A Million More" Page', async function() {              
        browser.maximizeWindow()        
        await AMillionMorePage.open();
    });
    it('Accept Cookies', async function() {
        await CookiesAlert.waitForDisplayed(true);
        await CookiesAlert.acceptCookies();
        await CookiesAlert.waitForDisplayed(false);
    });
    it('Movie player is not displayed', async function() {              
        await AMillionMorePage.MoviePlayer.waitForDisplayed(false);
    });
    it('Open video (click on "Watch the story" button)', async function() {              
        await AMillionMorePage.watchTheStory();
        await browser.switchToFrame(await AMillionMorePage.MoviePlayer.iFrame);
    });
    it('Movie player is displayed', async function() {    
        await AMillionMorePage.MoviePlayer.waitForDisplayed(true);
    });
    it('Check that player is in playing mode', async function() {              
        await (await AMillionMorePage.MoviePlayer.playPauseButton).moveTo();
        await expect(await AMillionMorePage.MoviePlayer.container).toHaveElementClassContaining('playing-mode');
    });
    it('Pause video (click on "playPause" button)', async function() {              
        await expect(await AMillionMorePage.MoviePlayer.playPauseButton).toBeClickable();
        await (await AMillionMorePage.MoviePlayer.playPauseButton).Click();
    });
    it('Check that player is in paused mode', async function() {              
        await expect(await AMillionMorePage.MoviePlayer.container).toHaveElementClassContaining('paused-mode');
        await expect(await AMillionMorePage.MoviePlayer.currentTime).toHaveTextContaining('0:0');

        await browser.switchToFrame(null);
    });
});