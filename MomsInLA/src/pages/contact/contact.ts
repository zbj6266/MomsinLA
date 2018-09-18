import { Component, ViewChild} from '@angular/core';
import { NavController, NavParams, Select, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {

buttonColor: string = '#f4f4f4'; //Default Color
buttonColor1: string = '#f4f4f4'; //Default Color
buttonColor2: string = '#f4f4f4'; //Default Color
buttonColor3: string = '#f4f4f4'; //Default Color
buttonColor4: string = '#f4f4f4'; //Default Color
buttonColor5: string = '#f4f4f4'; //Default Color
buttonColor6: string = '#f4f4f4'; //Default Color
buttonColor7: string = '#f4f4f4'; //Default Color
buttonColor8: string = '#f4f4f4'; //Default Color
buttonColor9: string = '#f4f4f4'; //Default Color
buttonColor10: string = '#f4f4f4'; //Default Color
buttonColor11: string = '#f4f4f4'; //Default Color

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

  // category : number;
  // title : string;
  
  // freeEvents : Array<string> = ["免费", "收费", "公共活动", "私人活动"];
  // freeEvent : string = "免费";
 
  // petAlertOpts: any;
  // petData: any;
  // pets: Array<string>;
  // hairColorData: any;
  // hairColor: any;
  // skittlesData: any;
  // skittles: Array<any>;  
  // notifications: string = 'mute_1';
  // rating: number = 2;
  @ViewChild('sectionSelect') sectionSelect: Select;
  @ViewChild('sectionSelect2') sectionSelect2: Select;
  @ViewChild('sectionSelect3') sectionSelect3: Select;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera,public actionSheetCtrl: ActionSheetController, private sanitizer:DomSanitizer) {
    this.calName = navParams.get('name');
    this.createTime()
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

  locate() {
     this.sectionSelect.open();
  }

  calendar() {
     this.sectionSelect2.open();
  }


  filter() {
     this.sectionSelect3.open();
  }
changeState(){
	if(this.buttonColor1 == '#fad548') { 
        this.buttonColor1 = '#f4f4f4'
      } 
}

changeState1(){
	if(this.buttonColor == '#fad548') { 
        this.buttonColor = '#f4f4f4'
      } 
}
changeState2(){
	if(this.buttonColor3 == '#fad548') { 
        this.buttonColor3 = '#f4f4f4'
      } 
}

changeState3(){
	if(this.buttonColor2 == '#fad548') { 
        this.buttonColor2 = '#f4f4f4'
      } 
}
changeState4(){
	if(this.buttonColor4 == '#f4f4f4') { 
		
        this.buttonColor4 = '#fad548'
      }else {
      	
      	this.buttonColor4 = '#f4f4f4'
      }
}

changeState5(){
	if(this.buttonColor5 == '#f4f4f4') { 
		
        this.buttonColor5 = '#fad548'
      }else {
      	
      	this.buttonColor5 = '#f4f4f4'
      }
}
changeState6(){
	if(this.buttonColor6 == '#f4f4f4') { 
		
        this.buttonColor6 = '#fad548'
      }else {
      	
      	this.buttonColor6 = '#f4f4f4'
      }
}

changeState7(){
	if(this.buttonColor7 == '#f4f4f4') { 
		
        this.buttonColor7 = '#fad548'
      }else {
      	
      	this.buttonColor7 = '#f4f4f4'
      }
}
changeState8(){
	if(this.buttonColor8 == '#f4f4f4') { 
		
        this.buttonColor8 = '#fad548'
      }else {
      	
      	this.buttonColor8 = '#f4f4f4'
      }
}

changeState9(){
	if(this.buttonColor9 == '#f4f4f4') { 
		
        this.buttonColor9 = '#fad548'
      }else {
      	
      	this.buttonColor9 = '#f4f4f4'
      }
}
changeState10(){
	if(this.buttonColor10 == '#f4f4f4') { 
		
        this.buttonColor10 = '#fad548'
      }else {
      	
      	this.buttonColor10 = '#f4f4f4'
      }
}

changeState11(){
	if(this.buttonColor11 == '#f4f4f4') { 
		
        this.buttonColor11 = '#fad548'
      }else {
      	
      	this.buttonColor11 = '#f4f4f4'
      } 
}
addEvent(){
this.buttonColor = '#fad548'; //desired Color


}
addEventa(){
this.buttonColor1 = '#fad548'; //desired Color

}

addEventb(){
this.buttonColor2 = '#fad548'; //desired Color

}
addEventc(){
this.buttonColor3 = '#fad548'; //desired Color

}

addEventd(){
this.buttonColor4 = '#fad548'; //desired Color

}

addEvente(){
this.buttonColor5 = '#fad548'; //desired Color

}
addEventf(){
this.buttonColor6 = '#fad548'; //desired Color

}

addEventg(){
this.buttonColor7 = '#fad548'; //desired Color

}
addEventh(){
this.buttonColor8 = '#fad548'; //desired Color

}

addEventi(){
this.buttonColor9 = '#fad548'; //desired Color

}

addEventj(){
this.buttonColor10 = '#fad548'; //desired Color

}

addEventk(){
this.buttonColor11 = '#fad548'; //desired Color

}



  compareFn(option1: any, option2: any) {
      return option1.value === option2.value;
  }

  monthChange(val: any) {
    console.log('Month Change:', val);
  }

  dayChange(val: any) {
    console.log('Day Change:', val);
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
      this.picArray.push(this.sanitizer.bypassSecurityTrustResourceUrl(imageData));
      let filename = imageData.split("/").pop();
      console.log(imageData);
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
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
      this.picArray.push(this.sanitizer.bypassSecurityTrustResourceUrl(imageData));
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
