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
  
  //
  activityCards = [new ActivitylistCard(1), 
                  new ActivitylistCard(2),
                  new ActivitylistCard(3)];


  filters: Array<string>;
  
	@ViewChild('sectionSelect') sectionSelect: Select;
  @ViewChild('sectionSelect2') sectionSelect2: Select;
  @ViewChild('sectionSelect3') sectionSelect3: Select;
  locate() {
     this.sectionSelect.open();
  }

  filter() {
     this.sectionSelect3.open();
  }



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.filters = ['<1km'];
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


export class ActivitylistCard{

  title: string;
  time: string;
  location: string;
  featrues: Array<string>
  likes: number;
  ThumbnailImg:string;
  isOfficial:boolean;
  
  constructor(public id: number){
    this.title = 'Kids Club at the Grove: blah blah';
    this.time = '2018-01-01T18:00:00';//@todo reformat
    this.location = '189 The Grove DR. CA91719';//@todo reformat
    this.featrues = ['shoufei 10 dao','huwaiyouwan'];
    this.likes = 15;
    this.ThumbnailImg = 'assets/image/activityThumbnail.png';
    this.isOfficial = false;
  }

}
