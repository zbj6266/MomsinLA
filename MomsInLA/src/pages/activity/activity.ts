import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { map } from 'rxjs/operators';
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
  tagsStr: Array<string> = ["户外游乐","益智教育","动物植物","游乐园","室内游乐","科普知识","免费停车","其他类型"];
  tags: Array<string> = [];
  comments:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public fsp: FirebaseServiceProvider,
    private iab: InAppBrowser) {
    this.infoId = navParams.get("infoId")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
    this.loadData(this.infoId);
    this.getComment(this.infoId);
  }

  loadData(key){
    this.fsp.getDailyEventDetail(key).valueChanges().subscribe(
      data=>{
        this.disp = data;
        for(let i=0; i< data['eventCategory3'].length; i++){
          if(data['eventCategory3'][i]){
            this.tags.push(this.tagsStr[i])
          }
        }
      });
  }

  getComment(key){
    this.fsp.getCommentForDailyEvent(key).snapshotChanges().pipe(
      map(changes=>{
        return changes.map(c=>({
          key: c.payload.key, ...c.payload.val()
        }))
      })
    ).subscribe(data=>{
      console.log(data);
      this.comments = data;
      console.log(this.comments);
      for(let i=0; i< this.comments.length; i++){
        this.comments[i]['datetime'] = new Date(this.comments[i]['commentTimestamp']).toLocaleString();
      }
    });
  }

  openBrowser(url){
    this.iab.create(url,"_system");
  }

}
