import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Events} from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { map } from 'rxjs/operators';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { ActivityFilterComponent } from '../../components/activity-filter/activity-filter';
import { Geolocation } from '@ionic-native/geolocation';
import { TimeFormatProvider } from '../../providers/time-format/time-format';
import firebase from 'firebase/app';

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
  readMore: string = "";
  lastTime: number = 4698626463000;
  hasMore: boolean = true;
  numsForEach: number = 5;

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
    this.loadData(0, this.lastTime, this.numsForEach);
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

  loadData(startTime, endTime, num){
    if(this.hasMore)
    firebase.database().ref('/DailyEvents/').orderByChild('createDate').startAt(startTime).endAt(endTime).limitToLast(num).once('value').then(snapshot => {
      console.log(snapshot.numChildren());
      
      snapshot.forEach(data =>{
        let item = {};
        item['key'] = data.key;
        let value = data.val();
        if(value['createDate'] < this.lastTime)
          this.lastTime = value['createDate'] - 1;
        item['title'] = value['title'];
        item['address'] = value['address'];
        if(value.hasOwnProperty('imgs'))
          item['imgs'] = value['imgs'];
        else 
          item['imgs'] = [];
        item['firstBegin'] = value['activityDate'][0]['from'];
        item['activityDate'] = [];
        for(let j=0; j<value['activityDate'].length; j++){
          let time = this.timeFormat.eventTimeFormat(value['activityDate'][j]['from'], value['activityDate'][j]['to']);
          item['activityDate'].push(time);
        }
        if(value['eventCategory1'])
          item['isFree'] = '免费';
        else
          item['isFree'] = '收费';
        if(value['eventCategory2'])
          item['isPublic'] = '公共活动';
        else
          item['isPublic'] = '私人活动';
        item['numsLike'] = value['numsLike'];
        item['numsRead'] = value['numsRead'];
        item['distance'] = "0 英里";
        item['calDistance'] = false;
        this.disp$.push(item);
        this.readMore = "查看更多";
      });
      this.disp$.sort(function(a,b){
        return b['firstBegin'] - a['firstBegin'];
      });

      if(snapshot.numChildren() < num){
        this.hasMore = false;
        this.readMore = "没有更多活动了";
        console.log(this.readMore);
      }

      this.isLoaded = true;
      this.events.publish('distance');
    });
      
  }

  loadMoreData(){
    this.loadData(0, this.lastTime,this.numsForEach);
  }


  openDetail(key, numsRead){
    console.log(key);
    console.log(numsRead);
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

