import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

/**
 * Generated class for the InfoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var tim;
@IonicPage()
@Component({
  selector: 'page-info-detail',
  templateUrl: 'info-detail.html',
})
export class InfoDetailPage {
  infoId: string;
  table: any;
  disp: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public fsp: FirebaseServiceProvider) {
    this.infoId = navParams.get("infoId");
    this.table = navParams.get("category");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoDetailPage');
    this.fsp.getItem(this.table-1,this.infoId).valueChanges().subscribe(data=>{
      this.disp = data;
      console.log(this.disp);
     }
    )
    
  }

  like(){
    var obj = document.getElementById("like");
    var imgSrc = obj.getAttribute("src");
　  if(imgSrc=="assets/imgs/icon_like.png"){
      obj.setAttribute("src", "assets/imgs/icon_like_select.png");
    }
    else{
      obj.setAttribute("src", "assets/imgs/icon_like.png");
    
    }
  }

}
