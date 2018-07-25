import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var Signup;
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

   @ViewChild('username') user;
	@ViewChild('password') password;

  constructor( private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
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
  //  Signup(this.user.value, this.password.value);
  Signup('tim', 'god', 'zbj6266');
  	console.log('Would register user with ', 'tim', 'god', 'zbj6266');
let alert = this.alertCtrl.create({
    title: '恭喜',
    subTitle: '注册成功',
    buttons: ['Ok']
  });
  alert.present();
  }
  

}
