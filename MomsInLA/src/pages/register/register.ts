import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
// import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var tim;
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') user;
	@ViewChild('password') password;

  
  constructor(private loadingCtrl: LoadingController, private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  Signup = async (u, p) => {
    try {
      await tim.X('user').New({
        email: u,
        password: p
      });
      this.presentToast('register successfully');

    } catch (error) {
      console.log(error);
      this.presentToast('register fail');
    }
  };

  presentToast(msg:string){
    const toast = this.toastCtrl.create({
      message:msg,
      duration:1000
    });
    toast.present();
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
    this.Signup(this.user.value, this.password.value);
  }

  

}
