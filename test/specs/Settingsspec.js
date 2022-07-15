
import Settings from '../pageobjects/android/Settings';

const assert = require('assert');
import allureReporter from '@wdio/allure-reporter';

describe('Settings test cases', ()=> {
   
    it('Navigate to settings',async ()=> {

        allureReporter.addStep('Tap on Settings icon')
        //Tap on settings
        await Settings.settingsbtn.click();

        allureReporter.addStep('Verify Settings page is displayed')
        //Assert Setup text is displayed
        await expect (Settings.setupdevice).toBeDisplayed();
        
    })



    
    it ('List all submenus', async ()=>{
        driver.launchApp();
        
        driver.setImplicitTimeout(2000);
        const actuallist=[]

        allureReporter.addStep('Tap on Settings icon') 
        //Tap on settings
         await Settings.settingsbtn.click();
        
        //find elements
        const textlist= await Settings.allsubmenus;
    
        //Loop through visible elements
        for (const element of textlist){
         actuallist.push(await element.getText());
        }
        
        allureReporter.addStep('List all visible Menus')
        //Print all elements on screen
        console.log(actuallist);

        allureReporter.addStep('Visible otptions are'+ actuallist)
    })

    it.only ('Verify Adjust volume checkbox uncheck', async ()=>{
       //driver.launchApp();
        
        allureReporter.addStep('Tap on settings')
        //tap on settings
        await Settings.settingsbtn.click();

        allureReporter.addStep('Verify settings page is displayed')
        //assert for settings
        await expect (Settings.setupdevice).toBeDisplayed();

        allureReporter.addStep('Scroll to Advanced Settings')
        //Scroll to advanced settings
        await Settings.scrolltoEnd;

        allureReporter.addStep('Tap on Advanced settings')
        //tap on advanced settings
        await Settings.advancedsettigs.click();

        allureReporter.addStep('Verify Advanced settings page is displayed')
        //assert vol text
        await expect(Settings.adjustvoltxt).toBeDisplayed();

        allureReporter.addStep('Tap on checkbox to uncheck')
        //deselect the checkbox
        await Settings.adjustvolchkbox.click();

        allureReporter.addStep('Verify Checkbox is unchecked')
        //assert checkbox is not selected
        await expect(Settings.adjustvolchkbox).toHaveAttribute('checked', 'false');
    })

    it ('Create speaker group', async()=>{
        driver.launchApp();
        
        allureReporter.addStep('Tap on Settings')
        //tap on settings
        await Settings.settingsbtn.click();

        allureReporter.addStep('Verify settings page is displayed')
        //assert for settings
        await expect (Settings.setupdevice).toBeDisplayed();

        allureReporter.addStep('Select Speaker groups')
        //tap on Spekaer grps
        await Settings.speakerGrouptext.click();

        allureReporter.addStep('Verify speaker group page is displayed')
        //assert for group page
        await expect (Settings.creategrpbtn).toBeDisplayed();

        allureReporter.addStep('Tap on add group button')
        //tap on create btn
        await Settings.creategrpbtn.click();

        allureReporter.addStep('Verify textbox is displayed')
        //assert textbox
        await expect (Settings.grpName).toBeDisplayed();
        
        allureReporter.addStep('Enter a group name in textbox')
        //add grp name
        await Settings.grpName.addValue("group");// setValue

        allureReporter.addStep('Hit Enter button')
        //tap enter
        await driver.pressKeyCode(66); 

        allureReporter.addStep('Select speakers to be added in group')
        //select speakers
        await Settings.speakerOne.click();
        await Settings.speakerTwo.click();

        allureReporter.addStep('Tap on Done button')
        //tap done
        await Settings.speakerDonebtn.click();

        // allureReporter.addStep('Verify the toast message is displayed')
        // //Verify toast message
        // await expect(Settings.toastMsg).toHaveText('The group group has been saved.')
        
        allureReporter.addStep('Verify created group is displayed')
        //assert context menu
        await Settings.grpContextmenu.waitForDisplayed(3000);
        await expect(Settings.grpContextmenu).toBeDisplayed();

    })
        
    it ('Delete speaker group', async()=>{
        
        driver.launchApp();
        
        allureReporter.addStep('Tap on Settings')
        //tap on settings
        await Settings.settingsbtn.click();

        allureReporter.addStep('Verify settings page is displayed')
        //assert for settings
        await expect (Settings.setupdevice).toBeDisplayed();

        allureReporter.addStep('Select Speaker groups')
        //tap on Spekaer grps
        await Settings.speakerGrouptext.click();

        allureReporter.addStep('Tap on Group context menu')
        //click context menu of 1st group
        await Settings.grpContextmenu.click();

        allureReporter.addStep('Select Delete option')
        //tap delete
        await Settings.deleteGrp.click();

        allureReporter.addStep('Tap on Confirm Delete button')
        //confirm delete button
        await Settings.deleteConfrm.click();

        allureReporter.addStep('Verify there are no speaker groups text is displayed')
        //assert no group text
        await Settings.noGrptext.waitForDisplayed(5000);
        const msg= await Settings.noGrptext.getText();
        const expected= 'CREATE A SPEAKER GROUP BY PRESSING THE ADD GROUP BUTTON BELOW.';
        assert.equal(msg,expected);
    
    })
})