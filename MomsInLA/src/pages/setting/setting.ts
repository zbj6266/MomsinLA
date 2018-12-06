import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase/app';
import { ToastProvider} from '../../providers/toast/toast'
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  user:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage,
    public events: Events,
    public afAuth: AngularFireAuth,
    public gplus: GooglePlus,
    public alertCtrl: AlertController,
    public toast: ToastProvider) {
  }

  ionViewDidLoad() {
    this.storage.get('user').then(data => this.user = data);
  }

  Logout(){
    this.storage.remove('user');
    this.events.publish("logout",null);
    this.afAuth.auth.signOut()
    this.gplus.logout();
  	this.navCtrl.pop();
  }

  changeName(){
      let alert = this.alertCtrl.create({
        title: '修改昵称',
        inputs: [
          {
            name: 'nickname',
          }
        ],
        buttons: [
          {
            text: '取消',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: '确定',
            handler: data => {
              console.log(data);
              firebase.database().ref(`/UsersAndAdministrators/${this.user.userID}/displayName`).set(data['nickname']).then(()=>{
                  let user = {
                  username: data['nickname'],
                  userImg: this.user.userImg,
                  userID: this.user.userID,
                  userStatus: this.user.userStatus
                };
                this.storage.set('user',user);
                this.toast.presentToast('修改成功', 1000, 'bottom');
              }).catch(err =>{
                console.log(err);
                this.toast.presentToast('修改失败，请重试', 1000, 'bottom');
              })
              
            }
          }
        ]
      });
      alert.present();
    }
  
  changePic(){
    this.navCtrl.push('ChangePicPage');
  }
}
