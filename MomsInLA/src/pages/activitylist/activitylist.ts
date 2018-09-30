import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { map } from 'rxjs/operators';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { ActivityFilterComponent } from '../../components/activity-filter/activity-filter';
import { Geolocation } from '@ionic-native/geolocation';

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
  disp$: any;
  cityLocation: string;
	// @ViewChild('sectionSelect') sectionSelect: Select;
  // @ViewChild('sectionSelect2') sectionSelect2: Select;
  // @ViewChild('sectionSelect3') sectionSelect3: Select;
  // locate() {
  //    this.sectionSelect.open();
  // }

  // filter() {
  //    this.sectionSelect3.open();
  // }



  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public fsp: FirebaseServiceProvider,
    private geocoder: NativeGeocoder,
    private popoverCtrl: PopoverController,
    public geolocation: Geolocation) {

    this.filters = ['<1km'];
    this.cityLocation = '(定位中)';
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
    this.loadData();
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
  };
  this.geolocation.getCurrentPosition().then((resp)=>{
    console.log(resp);
    this.geocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
    .then((result: NativeGeocoderReverseResult[]) => {
      console.log(JSON.stringify(result[0]));
      this.cityLocation = result[0].locality;
    })
    .catch((error: any) => console.log(error));
  }).catch(err=>{
    console.log(err)
  });

  }

  loadData(){
    this.disp$ = this.fsp.getDailyEvent().snapshotChanges().pipe(
      map(changes=>{
        return changes.map(c=>({
          key: c.payload.key, ...c.payload.val()
        }))
      })
    );
  }

  openDetail(key){
    console.log(key);
    this.navCtrl.push('ActivityPage',{infoId:key});
  }

  presentPopover(event) {
    const popover = this.popoverCtrl.create(ActivityFilterComponent);
    popover.present({
      ev: event
    });
    popover.onDidDismiss(data=>{
      this.disp$ = this.fsp.getDailyEventInOrder(data.idx).snapshotChanges().pipe(
        map(changes=>{
          return changes.map(c=>({
            key: c.payload.key, ...c.payload.val()
          }))
        })
      );
    });
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
