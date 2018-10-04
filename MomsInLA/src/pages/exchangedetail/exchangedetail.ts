import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

/**
 * Generated class for the ExchangedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exchangedetail',
  templateUrl: 'exchangedetail.html',
})
export class ExchangedetailPage {
  category: any;
  infoId: any;
  disp: any = {};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fsp: FirebaseServiceProvider) {
      this.category = navParams.get("category");
      this.infoId = navParams.get("infoId");
      console.log(this.category, this.infoId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExchangedetailPage');
    this.fsp.getItem(this.category-1, this.infoId).valueChanges().subscribe(data=>{
      this.disp = data;
      this.disp.createTime = new Date(this.disp.createTime).toLocaleDateString("en-US");
    })

  }

}
