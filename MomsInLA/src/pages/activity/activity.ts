import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { ToastProvider } from '../../providers/toast/toast'
import { TimeFormatProvider } from '../../providers/time-format/time-format';

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
  commentReply: string;
  saved: boolean = false;
  liked: boolean = true;
  numsLike: number = 0;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fsp: FirebaseServiceProvider,
    private iab: InAppBrowser,
    public storage: Storage,
    public toast: ToastProvider,
    public timeFormat: TimeFormatProvider) {
      this.infoId = navParams.get("infoId")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
    this.loadData(this.infoId);
    this.getComment(this.infoId);
    this.getSaved();
    this.getLiked();
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
      this.comments = data;
      for(let i=0; i< this.comments.length; i++){
        // this.comments[i]['datetime'] = new Date(this.comments[i]['commentTimestamp']).toLocaleString();
        this.comments[i]['datetime'] = this.timeFormat.differFromNow(this.comments[i]['commentTimestamp']);
      }
      this.comments.sort(function(a,b){
        return b.commentTimestamp - a.commentTimestamp;
      })
    });
  }

  openBrowser(url){
    if(url.trim().substring(0,7)!="http://")
      url = "http://" + url;
    console.log(url);
    this.iab.create(url,"_system");
  }

  comment(){
    this.storage.get('user').then(data=>{
      if(data==null){
        this.toast.presentToast("请先登陆", 1000, "middle");
        let nav = this.navCtrl;
        setTimeout(function(){
          nav.push('LoginPage');
        }, 1000);
      }else{
        if(this.commentReply==null || this.commentReply.trim() == ""){
          this.toast.presentToast("请输入评论内容", 1000, "middle");
          return;
        }
        let item = {
          commentReplies: [],
          commentTimestamp: new Date().getTime(),
          commentUser: {
            originalPosterStatus: data['userStatus'],
            originalPosterUserID: data['userID'],
            originalPosterUserIMG: data['userImg'],
            originalPosterUsername: data['username'],
          },
          dailyEventID: this.infoId,
          dailyEventTitle: this.disp.title,
          replyContent: this.commentReply,
          totalThumbsUp: 0
        };
        this.commentReply="";
        this.fsp.getCommentForDailyEvent(this.infoId).push(item);
      }
    }).catch(e=>{
      this.storage.remove('user');
    })
  }

  getSaved(){
    this.storage.get('user').then(data=>{
      if(data != null){
        this.fsp.getUserListRef(data['userID']+'/SavedEvents/').snapshotChanges().subscribe(data=>{
          data.forEach(item=>{
            if(item.key == this.infoId){
              this.saved = true;
              document.getElementById('save').setAttribute("src", "assets/icon/icon_save_click.png");
              return;
            }
          })
        })
      }
    })
  }

  getLiked(){
    this.storage.get('user').then(data=>{
      if(data != null){
        this.fsp.getUserListRef(data['userID']+'/LikedEvents/').snapshotChanges().subscribe(data=>{
          data.forEach(item=>{
            if(item.key == this.infoId){
              this.liked = true;
              document.getElementById('like').setAttribute("src", "assets/icon/icon_like_click.png");
              return;
            }
          })
        })
      }
    })
  }

  save(){
    this.storage.get('user').then(data=>{
      if(data==null){
        this.toast.presentToast("请先登陆", 1000, "middle");
        let nav = this.navCtrl;
        setTimeout(function(){
          nav.push('LoginPage');
        }, 1000);
      }else{
        if(!this.saved)
        this.fsp.getUserListRef(data['userID']+'/SavedEvents/').set(this.infoId,{
          'eventID': this.infoId,
          'haveSaved': true,
        }).then(data=>{
          this.saved = true;
          document.getElementById('save').setAttribute("src", "assets/icon/icon_save_click.png");
          this.toast.presentToast("收藏成功", 1000, "bottom");
        })
        else{
          this.fsp.getUserListRef(data['userID']+'/SavedEvents/').remove(this.infoId).then(data=>{
            this.saved = false;
            document.getElementById('save').setAttribute("src", "assets/icon/icon_save.png");
            this.toast.presentToast("取消收藏", 1000, "bottom");
          })
        }
      }
    });
  }

  like(){
    this.storage.get('user').then(data=>{
      if(data==null){
        this.toast.presentToast("请先登陆", 1000, "middle");
        let nav = this.navCtrl;
        setTimeout(function(){
          nav.push('LoginPage');
        }, 1000);
      }else{
        if(!this.liked)
        this.fsp.getUserListRef(data['userID']+'/LikedEvents/').set(this.infoId,{
          'eventID': this.infoId,
          'haveLiked': true,
        }).then(data=>{
          this.liked = true;
          document.getElementById('like').setAttribute("src", "assets/icon/icon_like_click.png");
          this.disp["numsLike"] = this.disp["numsLike"] + 1;
          this.fsp.getDailyEventDetailRef(this.infoId).set('numsLike', this.disp['numsLike']);
        })
        else{
          this.fsp.getUserListRef(data['userID']+'/LikedEvents/').remove(this.infoId).then(data=>{
            this.liked = false;
            document.getElementById('like').setAttribute("src", "assets/icon/icon_like.png");
            this.disp["numsLike"] = this.disp["numsLike"] - 1;
            this.fsp.getDailyEventDetailRef(this.infoId).set('numsLike', this.disp['numsLike']);
          })
        }
      }
    });
  }

}
