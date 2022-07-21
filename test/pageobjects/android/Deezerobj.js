class Deezer{

    get dzrSrcIcon(){
        return $('//android.widget.TextView[@text="Deezer"]')
    }

    get usernameTxt(){
        return $('id=com.phorus.playfi:id/username_edittext')
    }

    get passwdTxt(){
        return $('id=com.phorus.playfi:id/password_edittext')
    }

    get loginbtn(){
        return $('id=com.phorus.playfi:id/button1')
    }

    get invLoginMsg(){
        return $('id=com.phorus.playfi:id/status_text')
    }

    get showPassChckbx(){
        return $('id=com.phorus.playfi:id/sign_in_password_checkbox')
    }


    get flow(){
        return $('//android.widget.TextView[@text="Flow"]')
    }

    get explore(){
        return $('//android.widget.TextView[@text="Explore"]')
    }

    get charts(){
        return $('//android.widget.TextView[@text="Charts"]')
    }

    get radioChannels(){
        return $('//android.widget.TextView[@text="Radio Channels"]')
    }

    get myplaylists(){
        return $('//android.widget.TextView[@text="My Playlists"]')
    }

    get myAlbums(){
        return $('//android.widget.TextView[@text="My Albums"]')
    }

    get mymp3(){
        return $('//android.widget.TextView[@text="My MP3"]')
    }

    get Settings(){
        return $('//android.widget.TextView[@text="Settings"]')
    }

    get srchIcon(){
        return $('~Search')
    }

    get back(){
        return $('~Navigate up')
    }

    get signOut(){
        return $('//android.widget.TextView[@text="Sign Out"]')
    }

    get artNowplaying(){
        return $('id=com.phorus.playfi:id/albumArtImageView')
    }

    get transfer(){
        return $('~Transfer to Speaker')
    }

    get savePreset(){
        return $('~Save to My Presets')
    }

    get footer(){
        return $('id=com.phorus.playfi:id/nowPlayingFooter')
    }
    
    get playlisttxt(){
        return $('//android.widget.TextView[@text="PLAYLISTS"]')
    }

    get trackstxt(){
        return $('//android.widget.TextView[@text="TRACKS"]')
    }

    get albumstxt(){
        return $('//android.widget.TextView[@text="ALBUMS"]')
    }

    get artiststtxt(){
        return $('//android.widget.TextView[@text="ARTISTS"]')
    }
   


}
export default new Deezer();