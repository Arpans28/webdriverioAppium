class Settings{

    get sourceBrowser(){
        return $('~Source Browser');
    }
    
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
        return $ ("//android.widget.TextView[@text='Adjust Volume on Connection']/../following-sibling::android.widget.CheckBox");
    }

    get playfiWindows(){
    
        return  $('//android.widget.TextView[@text="Play-Fi Windows App"]');
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

    get speakerOnechkbox(){
        return $ ("//android.widget.TextView[@text='Arpan']/../following-sibling::android.widget.CheckBox");
    }
    ////android.widget.TextView[@text='Arpan']/../following-sibling::android.widget.FrameLayout

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

    get maxGrpovrlay(){
        return $('id=android:id/button1')
    }

    get addZone(){
        return $('id=com.phorus.playfi:id/masterFooterRightButton')
    }

    get playTobtn(){
        return $('id=com.phorus.playfi:id/play_to_button')
    }
}
    

export default new Settings();