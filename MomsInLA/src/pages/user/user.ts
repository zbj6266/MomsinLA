import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  userID: string;
  userImg: string;
  userName: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage,
    public events: Events) {
  }
  
  ionViewDidLoad() {

    //get user information
    this.events.subscribe('user',(name, url, id)=>{
      this.userName = name;
      this.userImg = url;
      this.userID = id;
    })

    //clear the user information in the page
    this.events.subscribe('logout',(id)=> this.userID = id);
  }

  signIn() {
  this.navCtrl.push("LoginPage");
  }

  toSetting() {
    this.navCtrl.push("SettingPage");
  }
  myCollection() {
    this.navCtrl.push("CollectionPage");
  }
 

}
