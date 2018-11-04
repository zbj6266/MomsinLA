import { Injectable } from '@angular/core';
import { ToastController, AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';

@Injectable()
export class ToastProvider {

  constructor(public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public events: Events) {
  }

  presentToast(msg: string, time: number, location: string){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: time,
      position: location
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  presentPrompt(key,usr) {
    let alert = this.alertCtrl.create({
      title: '回复',
      inputs: [
        {
          name: 'comment',
          placeholder: '@'+ usr.originalPosterUsername,
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
          text: '提交',
          handler: data => {
            console.log(data);
            let reply = data;
            this.events.publish('commentReply', {"key": key, "reply": data});
          }
        }
      ]
    });
    alert.present();
  }

}
