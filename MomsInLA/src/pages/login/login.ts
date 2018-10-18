import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, Events  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { ToastProvider } from '../../providers/toast/toast'
import { User } from '../../models/user'; 

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  user = {} as User;

  constructor(public app : App, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage,
    public googlePlus: GooglePlus,
    public afAuth: AngularFireAuth,
    public events: Events,
    public fsp: FirebaseServiceProvider,
    public toast: ToastProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }

  async login(user: User){
    try{
      const result = await this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email.trim(), user.password);
      console.log(result.user.uid);
      this.fsp.getUserRef(result.user.uid).valueChanges().subscribe(data=> {
        this.storage.set('username', data['displayName']);
        this.storage.set('userImg', data['photoURL']);
        this.storage.set('userID', data['userID']);
        this.events.publish("user",data['displayName'], data['photoURL'],data['userID']);
        this.navCtrl.pop();
      });
    }
    catch(e){
      if(e.code == "auth/invalid-email") this.toast.presentToast('请输入正确的邮箱格式', 1000, "bottom");
      else{}
    }
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


