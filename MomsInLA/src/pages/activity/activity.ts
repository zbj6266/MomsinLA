import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { ToastProvider } from '../../providers/toast/toast'
import { TimeFormatProvider } from '../../providers/time-format/time-format';
import { Events } from 'ionic-angular';
import firebase from 'firebase/app';

var infoId;
@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {
  disp: any = {};
  tagsStr: Array<string> = ["户外游乐","益智教育","动物植物","游乐园","室内游乐","科普知识","免费停车","其他类型"];
  tags: Array<string> = [];
  comments:any = [];
  commentReply: string;
  saved: boolean = false;
  liked: boolean = false;
  numsLike: number = 0;
  userInfo: any;
  activityDate: any = [];


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fsp: FirebaseServiceProvider,
    private iab: InAppBrowser,
    public storage: Storage,
    public toast: ToastProvider,
    public timeFormat: TimeFormatProvider,
    public events: Events,
    public alertCtrl: AlertController) {
      infoId = navParams.get("infoId");
      storage.get('user').then(data=> this.userInfo = data);
  }

  ionViewDidLoad() {
    this.loadData(infoId);
    this.getComment(infoId);
    this.getSaved();
    this.getLiked();
    
    this.events.subscribe('activity_reply',(key, data)=>{
      let comment = data['\bcomment'];
      this.storage.get('user').then(data=>{
        let reply = {
          replyCommentContent: comment,
          replyTime: new Date().getTime(),
          replyUser: data.username,
          replyUserPictureURL: data.userImg,
          replyUserStatus: data.userStatus
        }
        console.log("111"+infoId);
        console.log(`${infoId}/${key}/commentReplies`);
        this.fsp.getCommentForDailyEvent(`${infoId}/${key}/commentReplies`).push(reply).then(()=>{
          this.toast.presentToast("评论成功", 1000, "bottom");
        });
      })
      
    })
  }

  ionViewDidEnter(){
    this.storage.get('user').then(data=> this.userInfo=data);
  }

  loadData(key){
    firebase.database().ref(`/DailyEvents/${key}`).once('value').then(snapshot=>{
      this.disp = snapshot.val();
      console.log(snapshot.val());
      for(let i=0; i< this.disp['eventCategory3'].length; i++){
        if(this.disp['eventCategory3'][i]){
          this.tags.push(this.tagsStr[i]);
        }
      }

      for(let j=0; j<this.disp['activityDate'].length; j++){
        let time = this.timeFormat.eventTimeFormat(this.disp['activityDate'][j]['from'], this.disp['activityDate'][j]['to']);
        this.activityDate.push(time);
      }

      
    })
    // this.sub = this.fsp.getDailyEventDetail(key).valueChanges().subscribe(
    //   data=>{
    //     this.disp = data;
    //     for(let i=0; i< data['eventCategory3'].length; i++){
    //       if(data['eventCategory3'][i]){
    //         this.tags.push(this.tagsStr[i])
    //       }
    //     }
    //     this.sub.unsubscribe();
    //     this.fsp.getDailyEventDetailRef(key).set('numsRead', data['numsRead'] + 1).then(data=>{
    //       this.disp['numsRead'] = this.disp['numsRead'] + 1;
    //     })
    //   });
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
        this.comments[i]['datetime'] = this.timeFormat.differFromNow(this.comments[i]['commentTimestamp']);
        if(this.comments[i].hasOwnProperty('commentReplies')){
          this.comments[i]['replyKeys'] = Object.keys(this.comments[i]['commentReplies']);
          console.log(this.comments[i]['replyKeys']);
        }
        else 
          this.comments[i]['replyKeys'] = []

      }
      this.comments.sort(function(a,b){
        return b.commentTimestamp - a.commentTimestamp;
      })
    });
  }

  openBrowser(url){
    if(url.trim().substring(0,7)!="http://" || url.trim().substring(0,7)!="https://")
      url = "http://" + url;
    console.log(url);
    this.iab.create(url,"_system");
  }

  comment(){
      if(this.userInfo==null){
        this.toast.presentToast("请先登陆", 1000, "middle");
        let nav = this.navCtrl;
        setTimeout(function(){
          nav.push('LoginPage');
        }, 1000);
      }else{
        console.log(this.userInfo);
        if(this.commentReply==null || this.commentReply.trim() == ""){
          this.toast.presentToast("请输入评论内容", 1000, "middle");
          return;
        }
        let item = {
          commentReplies: [],
          commentTimestamp: new Date().getTime(),
          commentUser: {
            originalPosterStatus: this.userInfo['userStatus'],
            originalPosterUserID: this.userInfo['userID'],
            originalPosterUserIMG: this.userInfo['userImg'],
            originalPosterUsername: this.userInfo['username'],
          },
          dailyEventID: infoId,
          dailyEventTitle: this.disp.title,
          replyContent: this.commentReply,
          totalThumbsUp: 0
        };
        this.commentReply="";
        this.fsp.getCommentForDailyEvent(infoId).push(item);
      }
  }

  reply(key, user){
    console.log(key);
    if(this.userInfo==null){
      this.toast.presentToast("请先登陆", 1000, "middle");
      let nav = this.navCtrl;
      setTimeout(function(){
        nav.push('LoginPage');
      }, 1000);
    }else{
      this.presentPrompt(key,user);
    }
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
            let reply = {
              replyCommentContent: data['\bcomment'],
              replyTime: new Date().getTime(),
              replyUser: this.userInfo.username,
              replyUserPictureURL: this.userInfo.userImg,
              replyUserStatus: this.userInfo.userStatus
            }
            console.log("111"+infoId);
            console.log(`${infoId}/${key}/commentReplies`);
            this.fsp.getCommentForDailyEvent(`${infoId}/${key}/commentReplies`).push(reply).then(()=>{
              this.toast.presentToast("评论成功", 1000, "bottom");
            });
          }
        }
      ]
    });
    alert.present();
  }

  getSaved(){
    this.storage.get('user').then(data=>{
      if(data != null){
        this.fsp.getUserListRef(data['userID']+'/SavedEvents/').snapshotChanges().subscribe(data=>{
          data.forEach(item=>{
            if(item.key == infoId){
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
            if(item.key == infoId){
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
        this.fsp.getUserListRef(data['userID']+'/SavedEvents/').set(infoId,{
          'eventID': infoId,
          'haveSaved': true,
        }).then(data=>{
          this.saved = true;
          document.getElementById('save').setAttribute("src", "assets/icon/icon_save_click.png");
          this.toast.presentToast("收藏成功", 1000, "bottom");
        })
        else{
          this.fsp.getUserListRef(data['userID']+'/SavedEvents/').remove(infoId).then(data=>{
            this.saved = false;
            document.getElementById('save').setAttribute("src", "assets/icon/icon_save.png");
            this.toast.presentToast("取消收藏", 1000, "bottom");
          })
        }
      }
    });
  }

  like(){
    console.log(this.userInfo);
      if(this.userInfo==null){
        this.toast.presentToast("请先登陆", 1000, "middle");
        let nav = this.navCtrl;
        setTimeout(function(){
          nav.push('LoginPage');
        }, 1000);
      }else{
        if(!this.liked)
        this.fsp.getUserListRef(this.userInfo['userID']+'/LikedEvents/').set(infoId,{
          'eventID': infoId,
          'haveLiked': true,
        }).then(data=>{
          this.liked = true;
          document.getElementById('like').setAttribute("src", "assets/icon/icon_like_click.png");
          this.disp["numsLike"] = this.disp["numsLike"] + 1;
          this.fsp.getDailyEventDetailRef(infoId).set('numsLike', this.disp['numsLike']);
        })
        else{
          this.fsp.getUserListRef(this.userInfo['userID']+'/LikedEvents/').remove(infoId).then(data=>{
            this.liked = false;
            document.getElementById('like').setAttribute("src", "assets/icon/icon_like.png");
            this.disp["numsLike"] = this.disp["numsLike"] - 1;
            this.fsp.getDailyEventDetailRef(infoId).set('numsLike', this.disp['numsLike']);
          })
        }
      }
  }

}
