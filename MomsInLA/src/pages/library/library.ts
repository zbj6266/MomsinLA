import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase/app';

import { TimeFormatProvider } from '../../providers/time-format/time-format'
import { LaunchNavigator } from '@ionic-native/launch-navigator';
/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

  tip: String = "";
  disp: any = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public timeFormat: TimeFormatProvider,
    public navi: LaunchNavigator) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
    this.loadData();
  }

  loadData(){
    let currentDate = this.getCurrentDate(new Date("2019-01-08"));
    console.log(currentDate);
    firebase.database().ref(`/Library/${currentDate}`).once('value').then(snapshot=>{
      if(snapshot.val() == null){
        this.tip = "暂无当日图书馆活动";
        return;
      }
      console.log(snapshot.val());
      snapshot.forEach(data =>{
        let item = data.val();
        let evt = {
          "title": item["title"],
          "description": item["description"],
          "address": item["address"],
        };
        if(item.hasOwnProperty("image") && (item["image"] != "" || item["image"] != null)){
          evt["image"] = item["image"];
        }
        let timeArr = []
        for(let i = 0; i < item["time"].length; i++){
          timeArr.push(this.getEventTime(item["time"][i]["startTime"], item["time"][i]["endTime"]));
        }
        evt["timeArr"] = timeArr;
        this.disp.push(evt);
        console.log(this.disp);
      })
    }).catch(err =>{
      this.tip = "网络无法连接，请稍后重试";
    })
  }

  getCurrentDate(currentDate){
      var mm = currentDate.getMonth() + 1; // getMonth() is zero-based
      var dd = currentDate.getDate();
    
      return [currentDate.getFullYear(),
              (mm>9 ? '' : '0') + mm,
              (dd>9 ? '' : '0') + dd
            ].join('-');
  }

  getEventTime(from, to){
    return this.timeFormat.formatAMPM(new Date(from)) + "-" + this.timeFormat.formatAMPM(new Date(to)); 
  }

  navigate(address){
    this.navi.navigate(address);
  }
}
