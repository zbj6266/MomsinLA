import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Storage } from '@ionic/storage';
import { ToastProvider } from '../../providers/toast/toast'
import { TimeFormatProvider } from '../../providers/time-format/time-format';
import { Events } from 'ionic-angular';
import firebase from 'firebase/app';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
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
  infoId: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fsp: FirebaseServiceProvider,
    private iab: InAppBrowser,
    public storage: Storage,
    public toast: ToastProvider,
    public timeFormat: TimeFormatProvider,
    public events: Events,
    public alertCtrl: AlertController,
    public navi: LaunchNavigator) {
      this.infoId = navParams.get("infoId");
  }

  ionViewDidLoad() {
    this.storage.get('user').then(data=>{
      this.userInfo = data;
      this.loadData(this.infoId);
      this.getComment(this.infoId);
      this.getSaved();
      this.getLiked();
    });
  }

  ionViewDidEnter(){
    this.storage.get('user').then(data=> {
      this.userInfo=data;
      this.getSaved();
      this.getLiked();
      this.getCommentLike();
    
    });
  }

  ionViewWillLeave(){
    console.log(this.saved);
    
    if(!this.saved){
      this.events.publish('refreshCollection');
    }
  }

  jumpToLogin(msg, time, location){
    this.toast.presentToast(msg, time, location);
        let nav = this.navCtrl;
        setTimeout(function(){
          nav.push('LoginPage');
        }, time);
  }

  loadData(key){
    firebase.database().ref(`/DailyEvents/${key}`).once('value').then(snapshot=>{
      this.disp = snapshot.val();
      this.fsp.getDailyEventDetail(key+'/numsRead').set(this.disp['numsRead']+1);
      this.disp['numsRead'] = this.disp['numsRead'] + 1;
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
  }

  getComment(key){
    // this.fsp.getCommentForDailyEvent(key).snapshotChanges().pipe(
    //   map(changes=>{
    //     return changes.map(c=>({
    //       key: c.payload.key, ...c.payload.val()
    //     }))
    //   })
    firebase.database().ref(`/Comments/${key}`).once('value').then(snapshot =>{
      // this.comments = snapshot.val();
      console.log(this.comments);
      let idx = 0;
      snapshot.forEach(data=>{
        this.comments[idx] = data.val();
        this.comments[idx]['key'] = data.key;
        idx += 1;
      });
      console.log(this.comments);
      for(let i=0; i< this.comments.length; i++){
        this.comments[i]['datetime'] = this.timeFormat.differFromNow(this.comments[i]['commentTimestamp']);
        if(this.comments[i].hasOwnProperty('commentReplies')){
          this.comments[i]['replyKeys'] = Object.keys(this.comments[i]['commentReplies']);
          console.log(this.comments[i]['replyKeys']);
        }
        else 
          this.comments[i]['replyKeys'] = []
      }
      this.getCommentLike()
      this.comments.sort(function(a,b){
        return b.commentTimestamp - a.commentTimestamp;
      })
      // sub.unsubscribe();
    });
  }

  openBrowser(url){
    if(url.trim().substring(0,7)!="http://" || url.trim().substring(0,7)!="https://")
      url = "http://" + url;
    console.log(url);
    this.iab.create(url,"_system");
  }

  async comment(){
      if(this.userInfo==null){
        this.jumpToLogin("请先登录", 1000, "middle");
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
          dailyEventID: this.infoId,
          dailyEventTitle: this.disp.title,
          replyContent: this.commentReply,
          totalThumbsUp: 0
        };
        this.commentReply="";
        await this.fsp.getCommentForDailyEvent(this.infoId).push(item);
        this.getComment(this.infoId);
      }
  }

  reply(key, user){
    console.log(key);
    if(this.userInfo==null){
      this.jumpToLogin("请先登录", 1000, "middle");
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
            console.log("111"+this.infoId);
            console.log(`${this.infoId}/${key}/commentReplies`);
            this.fsp.getCommentForDailyEvent(`${this.infoId}/${key}/commentReplies`).push(reply).then(()=>{
              this.toast.presentToast("评论成功", 1000, "bottom");
              this.getComment(this.infoId);
            });
          }
        }
      ]
    });
    alert.present();
  }

  getSaved(){
      if(this.userInfo != null){
        firebase.database().ref(`/UsersAndAdministrators/${this.userInfo.userID}/SavedEvents/`).once('value').then(snapshot=>{
          snapshot.forEach(item=>{
            if(item.key == this.infoId){
              this.saved = true;
              document.getElementById('save').setAttribute("src", "assets/icon/icon_save_click.png");
              return;
            }
          })
        })
      }

  }

  getLiked(){
      if(this.userInfo != null){
        firebase.database().ref(`/UsersAndAdministrators/${this.userInfo.userID}/ikedEvents/`).once('value').then(snapshot => {
          snapshot.forEach(item => {
            if(item.key == this.infoId){
              this.liked = true;
              document.getElementById('like').setAttribute("src", "assets/icon/icon_like_click.png");
              return;
            }
          })
        })
      }
  }

  save(){
      if(this.userInfo==null){
        this.jumpToLogin("请先登录", 1000, "middle");
      }else{
        if(!this.saved)
        this.fsp.getUserListRef(this.userInfo['userID']+'/SavedEvents/').set(this.infoId,{
          'eventID': this.infoId,
          'haveISaved': true,
        }).then(data=>{
          this.saved = true;
          document.getElementById('save').setAttribute("src", "assets/icon/icon_save_click.png");
          this.toast.presentToast("收藏成功", 1000, "bottom");
        })
        else{
          this.fsp.getUserListRef(this.userInfo['userID']+'/SavedEvents/').remove(this.infoId).then(data=>{
            this.saved = false;
            document.getElementById('save').setAttribute("src", "assets/icon/icon_save.png");
            this.toast.presentToast("取消收藏", 1000, "bottom");
          })
        }
      }
  }

  like(){
      if(this.userInfo==null){
        this.jumpToLogin("请先登录", 1000, "middle");
      }else{
        if(!this.liked)
        this.fsp.getUserListRef(this.userInfo['userID']+'/LikedEvents/').set(this.infoId,{
          'eventID': this.infoId,
          'haveILiked': true,
        }).then(data=>{
          this.liked = true;
          document.getElementById('like').setAttribute("src", "assets/icon/icon_like_click.png");
          this.disp["numsLike"] = this.disp["numsLike"] + 1;
          this.fsp.getDailyEventDetailRef(this.infoId).set('numsLike', this.disp['numsLike']);
        })
        else{
          this.fsp.getUserListRef(this.userInfo['userID']+'/LikedEvents/').remove(this.infoId).then(data=>{
            this.liked = false;
            document.getElementById('like').setAttribute("src", "assets/icon/icon_like.png");
            this.disp["numsLike"] = this.disp["numsLike"] - 1;
            this.fsp.getDailyEventDetailRef(this.infoId).set('numsLike', this.disp['numsLike']);
          })
        }
      }
  }

  commentLike(key){
    let infoId = this.infoId;
    if(this.userInfo == null){
      this.jumpToLogin("请先登录", 1000, "middle");
    }
    else{
      let commentLikeRef = firebase.database().ref(`/UsersAndAdministrators/${this.userInfo.userID}/ThumbsUp/${infoId}/${key}`);
      commentLikeRef.once('value').then(snapshot => {
        if(snapshot.val()!=null){
          document.getElementById(key).setAttribute("src", "assets/icon/icon_like.png");
          commentLikeRef.remove();
          let commentsRef = firebase.database().ref(`/Comments/${infoId}/${key}/totalThumbsUp`)
              commentsRef.once('value').then(snapshot => {
                  commentsRef.set(snapshot.val() - 1)
                  document.getElementById(`num${key}`).innerHTML = (snapshot.val() - 1).toString();
              });
        }
        else{
          commentLikeRef.set({
            'eventID': infoId,
            'haveILiked': true,
          }, function(err,){
            if(err){
              console.log(err);
            }
            else{
              console.log('successful');
              document.getElementById(key).setAttribute("src", "assets/icon/icon_like_click.png");
              console.log(infoId);
              let commentsRef = firebase.database().ref(`/Comments/${infoId}/${key}/totalThumbsUp`)
              commentsRef.once('value').then(snapshot => {
                  commentsRef.set(snapshot.val()+1)
                  document.getElementById(`num${key}`).innerHTML = (snapshot.val() + 1).toString();
              });

            }
          })
        }
      })
    }
  }

  getCommentLike(){

    if(this.userInfo != null){
      console.log('userInfo');
      firebase.database().ref(`/UsersAndAdministrators/${this.userInfo.userID}/ThumbsUp/${this.infoId}`).once('value').then(snapshot =>{
        console.log(snapshot.val());
        let data = snapshot.val();
        if(data != null){
          console.log(data);
          for(let key in data){
            document.getElementById(key).setAttribute("src", "assets/icon/icon_like_click.png");
          }
        }
      })
    }
  }

  navigate(address){
    this.navi.navigate(address);
  }

}
