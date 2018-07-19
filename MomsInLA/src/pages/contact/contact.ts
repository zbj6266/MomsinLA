import { Component, ViewChild} from '@angular/core';
import { NavController, NavParams, Select } from 'ionic-angular';


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
 activeMenu: string;

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
