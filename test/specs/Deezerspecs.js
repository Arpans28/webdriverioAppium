import Settings from '../pageobjects/android/Settings';
import Deezer from '../pageobjects/android/Deezerobj';
import {scrollLeft} from '../utils/utils';
import {scrollToElement} from '../utils/utils';

const assert = require('assert');
import allureReporter from '@wdio/allure-reporter';
import ChromeDriverService from 'wdio-chromedriver-service';

describe('Deezer sanity test cases', ()=> {

    it ('Launch deezer', async()=>{
        
        await Settings.addZone.click();

        await Settings.speakerOne.waitForDisplayed(5000);

        await Settings.speakerOne.click();

        await expect(Settings.playTobtn).toBeDisplayed();

        await Settings.playTobtn.click();

        await Deezer.dzrSrcIcon.click();

        await expect(Deezer.loginbtn).toBeDisplayed();

    })

    it('Invalid Login deezer', async()=>{
        
        await Settings.addZone.click();

        await Settings.speakerOne.waitForDisplayed(3000);

        await Settings.speakerOne.click();

        await expect(Settings.playTobtn).toBeDisplayed();

        await Settings.playTobtn.click();

        await Deezer.dzrSrcIcon.click();

        await expect(Deezer.loginbtn).toBeDisplayed();

        await Deezer.usernameTxt.setValue("ru4premus@test.com");

        await Deezer.passwdTxt.setValue("ilovedzer");

        await Deezer.loginbtn.click();

        await expect(Deezer.invLoginMsg).toHaveText("Incorrect username or password.");

    })

    it ('Show password checkbox functionality', async()=>{
        
        await Settings.addZone.click();

        await Settings.speakerOne.waitForDisplayed(3000);

        await Settings.speakerOne.click();

        await expect(Settings.playTobtn).toBeDisplayed();

        await Settings.playTobtn.click();

        await Deezer.dzrSrcIcon.click();

        await expect(Deezer.loginbtn).toBeDisplayed();

        await Deezer.usernameTxt.setValue("ru4premus@test.com");

        await Deezer.passwdTxt.setValue("ilovedzer");

        await Deezer.showPassChckbx.click();

        await expect(Deezer.showPassChckbx).toHaveAttr('checked', 'true')

    })

    it ('Valid Login deezer', async()=>{
        
        await Settings.addZone.click();

        await Settings.speakerOne.waitForDisplayed(3000);

        await Settings.speakerOne.click();

        await expect(Settings.playTobtn).toBeDisplayed();

        await Settings.playTobtn.click();

        await Deezer.dzrSrcIcon.click();

        await expect(Deezer.loginbtn).toBeDisplayed();

        await Deezer.usernameTxt.setValue("ru4premplus@test.com");

        await Deezer.passwdTxt.setValue("ilovedeezer");

        await Deezer.loginbtn.click();

        await Deezer.flow.waitForDisplayed(7000);

    })

    it('Check Flow Playback', async()=>{
        
        await Settings.addZone.click();

        await Settings.speakerOne.click();

        await expect(Settings.playTobtn).toBeDisplayed();

        await Settings.playTobtn.click();

        await Deezer.dzrSrcIcon.click();

        await expect(Deezer.flow).toBeDisplayed();

        await Deezer.flow.click();

        await expect(Deezer.artNowplaying).toBeDisplayed();

    })

    it.only('Chart nagigate to different tabs', async()=>{
        
        await Settings.addZone.click();

        await Settings.speakerOne.click();

        await expect(Settings.playTobtn).toBeDisplayed();

        await Settings.playTobtn.click();

        await Deezer.dzrSrcIcon.click();

        await expect(Deezer.flow).toBeDisplayed();

        await Deezer.charts.click();

        // await driver.touchAction([
        //     { action: 'press', x: 1000, y: 1000 },
        //     { action: 'moveTo', x: 0, y: 1000 },
        //     'release'
        // ])

        await expect(Deezer.trackstxt).toBeSelected();

        await Deezer.albumstxt.click();
        await expect(Deezer.albumstxt).toBeSelected();

        await Deezer.artiststtxt.click();
        await expect(Deezer.artiststtxt).toBeSelected();

        await scrollLeft('PLAYLISTS');
        await Deezer.playlisttxt.click();
        await expect(Deezer.playlisttxt).toBeSelected();

    })


})
