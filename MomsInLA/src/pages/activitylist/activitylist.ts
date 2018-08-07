import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Select} from 'ionic-angular';
// import { Calendar } from '@ionic-native/calendar';
/**
 * Generated class for the ActivitylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-activitylist',
  templateUrl: 'activitylist.html',
})
export class ActivitylistPage {
  gaming: string;
  filters: Array<string>;
  calName = '';
  events = [];
  public event = {
    month: '2018-07-01',
    timeStarts: '07:43',
    
  }
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



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  	this.calName = navParams.get('name');
	this.gaming = 'n64';
	this.filters = ['<1km'];
	// this.calendar.findAllEventsInNamedCalendar(this.calName).then(
 //  data => {
 //  	this.events = data;
//   }
// );
    navCtrl.push('ActivityPage');



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
    console.log('ionViewDidLoad ActivitylistPage');
  }
  

}
