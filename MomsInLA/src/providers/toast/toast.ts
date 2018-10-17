import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastProvider {

  constructor(public toastCtrl: ToastController) {
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

}
