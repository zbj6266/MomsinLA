import { Component, ViewChild } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


	@ViewChild('username') user;
	@ViewChild('password') password;

  constructor(public app : App, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController, 
    public storage: Storage,
    public googlePlus: GooglePlus) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  presentToast(msg:string){
    const toast = this.toastCtrl.create({
      message:msg,
      duration:1000
    });
    toast.present();
  }

  loginGoogle(){
    this.googlePlus.login({
      'webClientID':'240243369411-uo2aj7sobr4bbddosb6taejqa7k4j1qj.apps.googleusercontent.com',
      'offline': true,
    }).then(res=>{
      console.log(res);

      firebase.auth().signInAndRetrieveDataWithCredential(firebase.auth.GoogleAuthProvider.credential(null,res.accessToken)).then(
        suc=>{
          console.log(suc);
          alert(suc);
        }
      ).catch(err=> {console.log(err);alert(err);})

    });
  }
  


  toSignup(){
    this.navCtrl.push('RegisterPage');
  }
}


