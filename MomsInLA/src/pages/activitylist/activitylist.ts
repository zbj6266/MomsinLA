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

  filters: Array<string>;
  disp$: any = [];
  cityLocation: string;
  isFree: string;
  isPublic: string;

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
    this.fsp.getDailyEvent().snapshotChanges().pipe(
      map(changes=>{
        return changes.map(c=>({
          key: c.payload.key, ...c.payload.val()
        }))
      })
    ).subscribe(data=>{
      console.log(data);
      for(let i=0; i< data.length;i++){
        let item = {};
        item['key'] = data[i]['key'];
        item['title'] = data[i]['title'];
        item['address'] = data[i]['address'];
        item['imgs'] = data[i]['imgs'];
        item['firstBegin'] = data[i]['activityDate'][0]['from'];
        item['activityDate'] = [];
        for(let j=0; j<data[i]['activityDate'].length; j++){
          let start = new Date(data[i]['activityDate'][j]['from']).toLocaleString('en-US');
          let end = new Date(data[i]['activityDate'][j]['to']).toLocaleString('en-US');
          item['activityDate'].push({'from': start, 'to': end});
        }
        if(data[i]['eventCategory1'])
          item['isFree'] = '免费';
        else
          item['isFree'] = '收费';
        if(data[i]['eventCategory2'])
          item['isPublic'] = '公共活动';
        else
          item['isPublic'] = '私人活动';
        item['numsLike'] = data[i]['numsLike']
        console.log(item);
        this.disp$.push(item);
      }
    });
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
      switch(data.idx){
        case 0:
          this.disp$.sort(function(a,b){
            return b.firstBegin - a.firstBegin;
          });
          return;
        case 1:
          this.disp$.sort(function(a,b){
            return b.numsLike - a.numsLike
          });
      }
    });
  }
  

}

