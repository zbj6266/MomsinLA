import { Component, ViewChild} from '@angular/core';
import { NavController, NavParams, Select } from 'ionic-angular';

declare var tim;
declare var Create;
declare var d = new Date();
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
	
  calName = '';
  events = [];
  public event = {
    month: '2018-07-01',
    timeStarts: '09:00',
    
  }
  name:string = '';
  nameC: string = '';
  address: string = '';
  city: string = '';


   freeEvents : Array<string> = [];

   actCategory1: boolean = false;
   actCategory2: boolean = false;
   actCategory3: boolean = false;
   actCategory4: boolean = false;
   actCategory5: boolean = false;
   actCategory6: boolean = false;
   actCategory7: boolean = false;
   actCategory8: boolean = false;
   actCategory9: boolean = false;
   actCategory10: boolean = false;
   actCategory11: boolean = false;
   actCategory12: boolean = false;

   if(actCategory1){
    this.freeEvents.push("免费");
    this.actCategory1 = false;
   }
   if(actCategory2){
    this.freeEvents.push("收费");
    this.actCategory2 = false;
   }
   if(actCategory3){
    this.freeEvents.push("公共活动");
    this.actCategory3 = false;
   }
   if(actCategory4){
    this.freeEvents.push("私人活动");
    this.actCategory4 = false;
   }
   if(actCategory5){
    this.freeEvents.push("户外游乐");
    this.actCategory5 = false;
   }
   if(actCategory6){
    this.freeEvents.push("益智教育");
    this.actCategory6 = false;
   }
   if(actCategory7){
    this.freeEvents.push("动物植物");
    this.actCategory7 = false;
   }
   if(actCategory8){
    this.freeEvents.push("游乐园");
    this.actCategory8 = false;
   }
   if(actCategory9){
    this.freeEvents.push("室内游乐");
    this.actCategory9 = false;
   }
   if(actCategory10){
    this.freeEvents.push("科普知识");
    this.actCategory10 = false;
   }
   if(actCategory11){
    this.freeEvents.push("免费停车");
    this.actCategory11 = false;
   }
   if(actCategory12){
    this.freeEvents.push("其他类型");
    this.actCategory12 = false;
   }


 activeMenu: string;

  // category : number;
  // title : string;
  
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
this.actCategory1 = true;

}
addEventa(){
this.buttonColor1 = '#fad548'; //desired Color
this.actCategory2 = true;
}

addEventb(){
this.buttonColor2 = '#fad548'; //desired Color
this.actCategory3 = true;
}
addEventc(){
this.buttonColor3 = '#fad548'; //desired Color
this.actCategory4 = true;
}

addEventd(){
this.buttonColor4 = '#fad548'; //desired Color
this.actCategory5 = true;
}

addEvente(){
this.buttonColor5 = '#fad548'; //desired Color
this.actCategory6 = true;
}
addEventf(){
this.buttonColor6 = '#fad548'; //desired Color
this.actCategory7 = true;
}

addEventg(){
this.buttonColor7 = '#fad548'; //desired Color
this.actCategory8 = true;
}
addEventh(){
this.buttonColor8 = '#fad548'; //desired Color
this.actCategory9 = true;
}

addEventi(){
this.buttonColor9 = '#fad548'; //desired Color
this.actCategory10 = true;
}

addEventj(){
this.buttonColor10 = '#fad548'; //desired Color
this.actCategory11 = true;
}

addEventk(){
this.buttonColor11 = '#fad548'; //desired Color
this.actCategory12 = true;
}




  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  	this.calName = navParams.get('name');
 

	// this.category = navParams.get("item");
 //    if(this.category == 1)
 //      this.title = "活动";
    
	// this.calendar.findAllEventsInNamedCalendar(this.calName).then(
 //  data => {
 //  	this.events = data;
//   }
// );




  }

loadData(){
    document.getElementById("loadData").innerHTML = d.getMilliseconds();
       tim.X('activity').New(
        {
  //id:(string);//系统默认ID
  createDate:(d.getMilliseconds()); //创建时间，毫秒
  creator: {
    userName: (string); //发布者名称
    userImgs: (string); //发布者头像
  };  //创建者
  activityDate:{
    from:(event);  //活动起始时间，毫秒
    to:(number);  //活动终止时间，毫秒
  }
  title:(name); //活动标题
  content:(nameC); //活动内容
  address: (address);  //活动地址
  city: (city); //城市
  website: (string); //官网地址
  imgs:[(string)];  //图片
  numsLike: (number); //点赞数
  numsRead: (number); //浏览量
  numsParticipate: (number); //签到人数
  actiCategories:[(freeEvents)]; //活动类型
  comments: [
    {
      userImg: (string), //用户头像
      userName: (string),  //用户名
      numsLike: (number), //评论点赞
      content: (string), //评论内容
      time: (string) //评论时间
    }
  ] //评论


}

      )
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


}
