import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  @ViewChild('username') uname;
	@ViewChild('password') password;

  key: string = "username";
  username: string = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {

  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  ionViewWillEnter(){
    this.storage.get(this.key).then((val)=> this.username = val);
  }
  signIn() {
  this.navCtrl.push("LoginPage");
  }
  register() {
  	this.navCtrl.push("RegisterPage");
  }

}
