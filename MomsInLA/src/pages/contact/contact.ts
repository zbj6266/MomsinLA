import { Component} from '@angular/core';
import { NavController, NavParams, ActionSheetController, LoadingController} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Platform} from 'ionic-angular';
import { storage } from 'firebase';
import { Storage } from '@ionic/storage';
import { ToastProvider } from '../../providers/toast/toast';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {

picArray: Array<any> = [];
picNum: number = -1;
picUrl:string ="assets/imgs/logo.png";
picName: Array<string> = [];

test = 0;
  //dailyEvent content
  title: string;
  content: string;
  address: string;
  city: string;
  zipcode: string;
  website: string;
  charge: string;
  events = [];
  now = new Date();
  d: string = this.now.getFullYear()+'-'+this.now.getMonth()+'-'+this.now.getDate();
  event:Object = {
    date: this.now,
    time: '9:00',    
  }

  verifyArr = ['title', 'content','address','charge','city','zipcode',];
  verifyContent = ['活动标题','活动内容','活动地址','活动费用','城市','邮编'];

  isFree : boolean = true;
  isPublic : boolean = true;
  tags:Array<boolean> = [false,false,false,false,false,false,false,false];
  dateNum : number = 1;
  timeArray : any = [];
  user: any;
  loading: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    public storage: Storage,
    public toast: ToastProvider,
    public fsp: FirebaseServiceProvider,
    public loadingCtrl: LoadingController) {
      this.createTime();
      this.storage.get('user').then(data => this.user = data);
  }

  showLoading(){
    this.loading = this.loadingCtrl.create({
      spinner: 'circles',
      content: '创建中，请稍候'
    });
  
    this.loading.present();
  }

  ionViewDidEnter(){
    this.storage.get('user').then(data => this.user = data);
  }

  createTime(){
    let now = new Date();
    let year = now.getFullYear();
    let month:any = now.getMonth()+1<10? "0"+(now.getMonth()+1):now.getMonth()+1;
    let date = now.getDate()+1<10? "0"+now.getDate():now.getDate();
    let hour = now.getHours()+1 < 10 ? "0"+now.getHours():now.getHours();
    let min = now.getMinutes()+1 < 10 ? "0"+now.getMinutes():now.getMinutes()
    this.timeArray.push({
      start:{
      date: year+'-'+month+'-'+date,
      time: hour+':'+min
    },
      end:{
        date: year+'-'+month+'-'+date,
        time: hour+':'+min
      }
    });
  }

  selectPrice(evt){
    let priceElement = document.getElementsByClassName('price');
    for(let i = 0; i < priceElement.length; i++){
      priceElement[i].className="price";
    }
    evt.target.className="price selected";
    if(evt.target.innerText == '免费')
      this.isFree = true;
    else
      this.isFree = false;
  }

  selectOpen(evt){
    let openElement = document.getElementsByClassName('open');
    for(let i = 0; i < openElement.length; i++){
      openElement[i].className="open";
    }
    evt.target.className="open selected";
    if(evt.target.innerText == '公共活动')
      this.isPublic = true;
    else
      this.isPublic = false;
  }

  selectTags(evt){
    let idx = evt.target.name;
    if(this.tags[idx]) 
      evt.target.className = "tag";
    else
      evt.target.className = "tag selected";
    this.tags[idx] = !this.tags[idx];
  }

  addTime(){
    this.dateNum +=1;
    this.createTime();
  }
  deleteTime(){
    this.dateNum -=1;
    this.timeArray.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  
  verifiyNull(verifyArr, verifyContent){
    for(let i=0; i < verifyArr.length; i++){
      if(this[verifyArr[i]] == null || this[verifyArr[i]].trim() == ""){
        this.toast.presentToast(`请输入${verifyContent[i]}`, 1000, 'middle');
        return false;
      }
    }
    if(!RegExp('[0-9]{5}').test(this.zipcode)){
      this.toast.presentToast('请输入正确邮编格式',1000,'middle');
      return false;
    }

    return true;
  }

  async createEvent() {
        if(this.user == null){
          this.toast.presentToast("请先登陆", 1000, "middle");
          let n = this.navCtrl;
          setTimeout(function(){
            n.push('LoginPage');
          },1000);
        }
        else{
          if(!this.verifiyNull(this.verifyArr, this.verifyContent))
            return;
          let activityTime = [];
          for(let i = 0; i < this.timeArray.length; i++){
            activityTime.push({'from': new Date(this.timeArray[i]['start']['date']+"T"+this.timeArray[i]['start']['time']+"-07:00").getTime(),'to': new Date(this.timeArray[i]['end']['date']+"T"+this.timeArray[i]['end']['time']+"-07:00").getTime()});
          }
          activityTime.sort(function(a,b){
            return a['from'] - b['from'];
          });
          this.showLoading();
          //upload dailyEvent images
          for(let i = 0; i < this.picArray.length; i++){
            let now = new Date().getTime() + i * 100;
            let name = `/pictures/${now}_${this.user.userID}`;
            await storage().ref(name).putString(this.picArray[i], 'data_url',{contentType: 'image/png'});
            let imgUrl: string = await storage().ref(name).getDownloadURL();
            this.picName.push(imgUrl); 
          }

          let subType = "";
          if(this.user.Status == "Admin")
            subType = "Official Event";
          else
            subType = "Self Posted Event";
          let item = {
            activityApproved: false,
            activityDate: activityTime,
            activityPreferred: true,
            address: this.address,
            city: this.city,
            content: this.content,
            createDate: new Date().getTime(),
            creator: {
              userId: this.user.userID,
              userImg: this.user.userImg,
              userName: this.user.username,
              userStatus: this.user.userStatus
            },
            eventCategory1: this.isFree,
            eventCategory2: this.isPublic,
            eventCategory3: this.tags,
            eventFeeCharged: this.charge,
            eventMainSubType: subType,
            imgs: this.picName,
            numsLike:0,
            numsParticipate: 0,
            numsRead: 0,
            title: this.title,
            website: this.website == null || this.website.trim() ? "" : this.website,
            zip: this.zipcode
          };

          await this.fsp.getDailyEvent().push(item);
          this.loading.dismiss();
          this.toast.presentToast("发送成功",1000,"middle");
          this.isFree = true;
          this.isPublic = true;
          this.tags = [false,false,false,false,false,false,false,false];
          
          let dom = document.getElementsByClassName('tag selected');
          for(let i=0; i< dom.length; i++){
            dom.item(i).className='tag';
          }
          this.title = null;
          this.content = null;
          this.city = null;
          this.address = null;
          this.zipcode = null;
          this.picNum = -1;
          this.picArray = [];
          this.picName = [];
          this.website = null;
          this.charge = null;
        }
  }


  openCamera(){
    const option: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      // allowEdit:true,
      // targetHeight:300,
      // targetWidth:300,
      correctOrientation: true
    }
    this.camera.getPicture(option).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.picArray.push(base64Image);
      this.picNum = this.picNum + 1;
     }, (err) => {
      // Handle error
     });
  }

  
  openGallery(){
    const option: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      // allowEdit: true,
      // targetWidth:300,
      // targetHeight: 300,
      correctOrientation: true
    }
    this.camera.getPicture(option).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.picArray.push(base64Image);
      this.picNum = this.picNum + 1;
     }, (err) => {
      // Handle error
     });
  }

  deletePic(){
    this.picNum = this.picNum-1;
    this.picArray.pop();
  }

  chooseSource(){
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '拍照',
          handler: () => {
            this.openCamera();
          }
        },{
          text: '从相册选取',
          handler: () => {
            this.openGallery();
          }
        }
      ]
    });
    actionSheet.present();
  }


}
