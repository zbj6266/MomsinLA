import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage,
    public events: Events,
    public afAuth: AngularFireAuth,
    public gplus: GooglePlus) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  Logout(){
    this.storage.remove('user');
    this.events.publish("logout",null);
    this.afAuth.auth.signOut()
    this.gplus.logout();
  	this.navCtrl.pop();
  }

}
