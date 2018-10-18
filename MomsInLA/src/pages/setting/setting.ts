import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage,
    public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  Logout(){
    this.storage.set("userID",null);
    this.events.publish("logout",null);
  	this.navCtrl.pop();
  }

}
