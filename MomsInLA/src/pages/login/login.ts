import { Component, ViewChild } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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

  constructor(public app : App, public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public storage: Storage) {
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
      tim.X('user').Get({query:{email:u}}).then(data=>{
        this.storage.set('userId',data.data[0]._id);
        this.navCtrl.pop();
      });
      
    } catch (error) {
      this.presentToast('login fail');
    }
  };

  signInUser() {
    this.Login(this.user.value, this.password.value)
  }

  toSignup(){
    this.navCtrl.push('RegisterPage');
  }
}


