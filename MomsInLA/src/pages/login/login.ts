import { Component, ViewChild } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';
import AuthProvider = firebase.auth.AuthProvider;
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  
	@ViewChild('username') user;
	@ViewChild('password') password;

  user1: firebase.User;

  constructor(public app : App, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController, 
    public storage: Storage,
    public googlePlus: GooglePlus,
    public afAuth: AngularFireAuth) {
      afAuth.authState.subscribe(user=>this.user1 = user)
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
      // 'webClientID':'240243369411-uo2aj7sobr4bbddosb6taejqa7k4j1qj.apps.googleusercontent.com',
      'webClientID':'240243369411-3dihv28en6u117pbskoinbejs38e6k19.apps.googleusercontent.com',
      
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
  


  register(){
    this.navCtrl.push('RegisterPage');
  }
}


