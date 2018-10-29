import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Events} from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { map } from 'rxjs/operators';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { ActivityFilterComponent } from '../../components/activity-filter/activity-filter';
import { Geolocation } from '@ionic-native/geolocation';
import { TimeFormatProvider } from '../../providers/time-format/time-format';

declare var google;
@IonicPage()

@Component({
  selector: 'page-activitylist',
  templateUrl: 'activitylist.html',
})
export class ActivitylistPage {

  disp$: any = [];
  cityLocation: string;
  longitude: number;
  latitude: number;
  isLocated: boolean = false;
  isLoaded: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public fsp: FirebaseServiceProvider,
    private geocoder: NativeGeocoder,
    private popoverCtrl: PopoverController,
    public geolocation: Geolocation,
    public timeFormat: TimeFormatProvider,
    public events: Events) {

    this.cityLocation = '(定位中)';
    // this.events.subscribe('distance', () => {
    //   if(this.isLoaded && this.isLocated){
    //     for(let i= 0; i < this.disp$.length; i++){
    //       if(!this.disp$[i]['calDistance']){
    //         this.calDistance({lng: this.longitude, lat: this.latitude},this.disp$[i]['address'],i);
    //       }
    //     }
    //   }
    // });
    
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
    this.latitude = resp.coords.latitude;
    this.longitude = resp.coords.longitude;
    this.isLocated = true;
    this.events.publish('distance');

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
          let time = this.timeFormat.eventTimeFormat(data[i]['activityDate'][j]['from'], data[i]['activityDate'][j]['to']);
          item['activityDate'].push(time);
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
        item['distance'] = "0 英里";
        item['calDistance'] = false;
        this.disp$.push(item);
      }
      this.isLoaded = true;
      this.events.publish('distance');
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

  calDistance(o, d, index){
    o = {lat: 34.1379, lng: -118.0537}
    if(this.disp$[index]['calDistance']) return;
    console.log(this.latitude);
    console.log(this.longitude);
    console.log(d);
    var service = new google.maps.DistanceMatrixService();
    let dataItem = this.disp$;
    service.getDistanceMatrix(
      {
        origins: [o],
        destinations: [{lat: 34.1379, lng: -118.0537}],
        travelMode: 'DRIVING',
        // drivingOptions: {
        //   departureTime: new Date(Date.now()),  // for the time N milliseconds from now.
        //   trafficModel: 'optimistic'
        // }
        unitSystem: google.maps.UnitSystem.IMPERIAL
      }, callback);

    
    function callback(response, status) {
      console.log(response);
      if(response.rows[0]['elements'][0]['status'] == "OK"){
        dataItem[index]['distance'] = response.rows[0]['elements'][0]['distance']['text'];
        dataItem[index]['calDistance'] = true;
        console.log(dataItem[index]);
      }
      // See Parsing the Results for
      // the basics of a callback function.
    }
  }
  

}

