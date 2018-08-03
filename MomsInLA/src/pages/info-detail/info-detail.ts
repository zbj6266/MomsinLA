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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.infoId = navParams.get("infoId");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoDetailPage');
    tim.X('info').Get({query:{_id:this.infoId}}).then(data=>
    console.log(data));
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
