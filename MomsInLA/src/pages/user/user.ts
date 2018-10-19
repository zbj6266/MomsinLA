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
      this.storage.get('user').then(data=>{
        if(data==null){
          this.userID=null;
        }else{
          this.userID = data['userID'];
          this.userImg = data['userImg'];
          this.userName = data['userName'];
        }
      })
  }
  
  ionViewDidLoad() {

    //get user information
    this.events.subscribe('user', user=>{
      this.userName = user.username;
      this.userImg = user.userImg;
      this.userID = user.userID;
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
