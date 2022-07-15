class Settings{
    
    get settingsbtn(){
        return $('~Settings');
    }

    get setupdevice(){
        return $('//android.widget.TextView[@text="Setup Play-Fi Device"]');
    }

    get allsubmenus(){
        return $$('//android.widget.TextView');
    }

    get advancedsettigs(){
        return $ ("//android.widget.TextView[@text='Advanced Settings']");
    }

    get adjustvoltxt(){
        return $("//android.widget.TextView[@text='Adjust Volume on Connection']");
    }
    
    get adjustvolchkbox(){
        return $ ("//android.widget.ListView/android.widget.RelativeLayout[1]/android.widget.CheckBox[1]");
    }

    get scrolltoEnd(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
         
    }

    get scrolltoElement(){
    
        return  $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("elementtext")');
    }

    get speakerGrouptext(){

        return $('//android.widget.TextView[@text="Speaker Groups"]');
    }

    get creategrpbtn(){
        return $('id=com.phorus.playfi:id/float_action_button');
    }

    get grpName(){
        return $('id=com.phorus.playfi:id/edittext');
    }

    get speakerOne(){
        return $('//android.widget.TextView[@text="Arpan"]');
    }

    get speakerTwo(){
        return $('//android.widget.TextView[@text="Kitchen"]');
    }

    get speakerDonebtn(){
        return $('id=com.phorus.playfi:id/button1')
    }

    get grpContextmenu(){
        return $('id=com.phorus.playfi:id/context_menu')
    }

    get deleteGrp(){
        return $('//android.widget.TextView[@text="Delete"]')
    }

    get deleteConfrm(){
        return $('id=android:id/button1')
    }

    get noGrptext(){
    return $('id=android:id/empty')
    }
}

export default new Settings();