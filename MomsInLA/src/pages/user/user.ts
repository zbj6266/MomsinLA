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

  userInfo: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage,
    public events: Events) {
  }
  
  ionViewDidLoad() {
    this.storage.get('user').then(data=>{
      console.log(data);
      this.userInfo = data;
    });

    // //get user information
    // this.events.subscribe('user', user=>{
    //   this.userName = user.username;
    //   this.userImg = user.userImg;
    //   this.userID = user.userID;
    // })
    

    // //clear the user information in the page
    // this.events.subscribe('logout',(id)=> this.userID = id);
  }
  ionViewDidEnter(){
    this.storage.get('user').then(data=>{
      console.log(data);
      this.userInfo = data;
    });
  }

  signIn() {
  this.navCtrl.push("LoginPage");
  }

  toSetting() {
    this.navCtrl.push("SettingPage");
  }
  toCollection() {
    this.navCtrl.push("CollectionPage");
  }
  toPoint(){
    console.log("point");
  }
 

}
