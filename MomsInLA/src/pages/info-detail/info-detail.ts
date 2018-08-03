import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  table: string;
  disp: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.infoId = navParams.get("infoId");
    this.table = navParams.get("table");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoDetailPage');
    tim.X(this.table).Get({query:{_id:this.infoId}}).then(data=>{
      this.disp = data.data[0];
      document.getElementById("info-content").innerHTML = this.disp.content;
      //document.getElementById("supplement").innerHTML = this.disp.supplement.content;
    });
    
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
