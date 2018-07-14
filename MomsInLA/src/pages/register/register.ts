import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

   @ViewChild('username') user;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser() {
  	// this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
  	// .then(data => {
  	// 	console.log('got data ', data);
  	// })
  	// .catch(error => {
  	// 	console.log('got an error ', error)
  	// })
  	console.log('Would register user with ', this.user.value, this.password.value);
  }

}
