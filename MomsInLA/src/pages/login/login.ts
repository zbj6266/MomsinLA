import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var tim;
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


	@ViewChild('username') user;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
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
    
  Login = async (u, p) => {
    try {
      await tim.Logout();
      await tim.Login({
        email: u,
        password: p
      });
      this.presentToast('login successfully');
    } catch (error) {
      this.presentToast('login fail');
    }
  };

  signInUser() {
    this.Login(this.user.value, this.password.value);
  }

  }


