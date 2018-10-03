import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the ActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {
  infoId: any;
  disp: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public fsp: FirebaseServiceProvider,
    private iab: InAppBrowser) {
    this.infoId = navParams.get("infoId")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
    this.loadData(this.infoId);
  }

  loadData(key){
    this.fsp.getDailyEventDetail(key).valueChanges().subscribe(
      data=>{
        console.log(data);
        this.disp = data;
      });
  }

  openBrowser(url){
    this.iab.create(url,"_system");
  }

}
