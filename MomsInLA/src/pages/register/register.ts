import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth'
import { User } from '../../models/user'
import { ToastProvider } from '../../providers/toast/toast';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service'
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  
  constructor(
    private toast: ToastProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    public fsp: FirebaseServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register(user: User){
    let nav = this.navCtrl;
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      this.fsp.register(result.user.uid).set({
        LikedEvents:[],
        displayName: user.username,
        email: user.email,
        photoURL: "https://firebasestorage.googleapis.com/v0/b/momsinla-de26b.appspot.com/o/UserImg%2Fuser%20portrait.png?alt=media&token=4c242c49-fc36-45cc-a715-e41527ace3f9",
        registrationDate: new Date().getTime(),
        userID: result.user.uid,
        userStatus: "Basic"
      });
      this.toast.presentToast("注册成功",1500,"bottom");
      setTimeout(function(){
        nav.pop();
      }, 1500);     
    }
    catch(e){
      console.log(e);
    }
  }



  

}
