import { Component} from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { Platform, normalizeURL} from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {

picArray: Array<any> = [];
picNum: number = -1;
picUrl:string ="assets/imgs/logo.png";

  calName = '';
  events = [];
  now = new Date();
  d: string = this.now.getFullYear()+'-'+this.now.getMonth()+'-'+this.now.getDate();
  event:Object = {
    date: this.now,
    time: '9:00',
    
  }
  //name:string;
 activeMenu: string;

  isFree : boolean = true;
  isPublic : boolean = true;
  tags:Array<boolean> = [false,false,false,false,false,false,false,false];
  dateNum : number = 1;
  timeArray : any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    private sanitizer: DomSanitizer,
    public platform: Platform) {
      this.calName = navParams.get('name');
      this.createTime();
      console.log(platform.is('ios'));
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
    console.log(this.isFree);
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
    console.log(this.isPublic);
  }
  selectTags(evt){
    let idx = evt.target.name;
    if(this.tags[idx]) 
      evt.target.className = "open";
    else
      evt.target.className = "open selected";
    this.tags[idx] = !this.tags[idx];
    console.log(this.tags);
  }

  addTime(){
    this.dateNum +=1;
    this.createTime();
    console.log(this.dateNum);
  }
  deleteTime(){
    this.dateNum -=1;
    this.timeArray.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  
  

  createEvent() {
  this.navCtrl.push("");
  }


  openCamera(){
    // this.picArray.push("assets/imgs/logo.png");

    const option: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true
    }
    this.camera.getPicture(option).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // let showUrl = normalizeURL(imageData) ;
      // if(this.platform.is('android'))
      let showUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imageData);
      this.picArray.push(showUrl);
      this.picNum = this.picNum + 1;
      // let filename = imageData.split("/").pop();
      console.log(imageData);
     }, (err) => {
      // Handle error
     });
  }

  
  openGallery(){
    const option: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.camera.getPicture(option).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let showUrl: any;
      if(this.platform.is('android'))
        showUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imageData);
      else 
        showUrl = normalizeURL(imageData);
      this.picArray.push(showUrl);
      this.picNum = this.picNum + 1;
      let filename = imageData.split("/").pop();
      console.log(imageData);
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
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
