import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var Login;
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


	@ViewChild('username') user;
	@ViewChild('password') password;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  signInUser() {

    //Login(this.user.value, this.password.value);
  	console.log(Login(this.user.value, this.password.value));
    console.log('would log in', this.user.value, this.password.value);
  if(Login(this.user.value, this.password.value)){
    let alert = this.alertCtrl.create({

      title: '恭喜!',
      subTitle: '登陆成功!',
      buttons: ['Ok']
    });

    alert.present();
  }
  else{
    let alert = this.alertCtrl.create({

      
      subTitle: '登陆失败!',
      buttons: ['Ok']
    });

    alert.present();
  }
  }

  }


