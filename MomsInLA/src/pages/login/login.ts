import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, Events  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { ToastProvider } from '../../providers/toast/toast'
import { User } from '../../models/user'; 
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  user = {} as User;
  googleUser: Observable<firebase.User>;

  constructor(public app : App, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage,
    public googlePlus: GooglePlus,
    public afAuth: AngularFireAuth,
    public events: Events,
    public fsp: FirebaseServiceProvider,
    public toast: ToastProvider) {
      this.googleUser = this.afAuth.authState;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }

  async login(user: User){
    if(user.email == null || user.password == null){
      this.toast.presentToast("请输入邮箱/密码",1000,"bottom");
      return;
    }
    try{
      const result = await this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email.trim(), user.password);
      console.log(result.user.uid);
      firebase.database().ref(`/UsersAndAdministrators/${result.user.uid}`).once('value').then(snapshot=>{
        let data = snapshot.val();
        let user = {
          username: data['displayName'],
          userImg: data['photoURL'],
          userID: data['userID'],
          userStatus: data['userStatus']
        };
        this.storage.set('user',user);
        this.navCtrl.pop();
      })
    }
    catch(e){
      if(e.code == "auth/invalid-email") this.toast.presentToast('请输入正确的邮箱格式', 1000, "bottom");
      else{
        console.log(e)
      }
    }
  }


  async loginGoogle(){
    try{
      const login = await this.googlePlus.login({
        'webClientID':'240243369411-uo2aj7sobr4bbddosb6taejqa7k4j1qj.apps.googleusercontent.com',
        //apple 'webClientID':'240243369411-3dihv28en6u117pbskoinbejs38e6k19.apps.googleusercontent.com',
        // 240243369411-uo2aj7sobr4bbddosb6taejqa7k4j1qj.apps.googleusercontent.com
        'offline': true,
        'scopes': 'profile email'
      });
      const result = await this.afAuth.auth.signInAndRetrieveDataWithCredential(firebase.auth.GoogleAuthProvider.credential(null,login.accessToken));

      firebase.database().ref(`/UsersAndAdministrators/${result.user.uid}`).once('value').then(snapshot=>{
        if(snapshot.exists && snapshot.val() == null){
          this.fsp.getUserRef(result.user.uid).set({
            LikedEvents:[],
            displayName: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL,
            registrationDate: new Date().getTime(),
            userID: result.user.uid,
            userStatus: "Basic"
          });
          let user = {
            username: result.user.displayName,
            userImg: result.user.photoURL,
            userID: result.user.uid,
            userStatus: "Basic"
          };
          this.storage.set('user',user);
          this.events.publish("user", user);
          this.navCtrl.pop();
        }
        else{
          let data = snapshot.val();
          let user = {
            username: data['displayName'],
            userImg: data['photoURL'],
            userID: data['userID'],
            userStatus: data['userStatus']
          };
          this.storage.set('user',user);
          this.navCtrl.pop();
        }
      })
    }catch(err){
      console.log(err);alert(err)
    }
  }
  
  register(){
    this.navCtrl.push('RegisterPage');
  }
}


