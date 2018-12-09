import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import firebase from 'firebase/app';
import { ToastProvider} from '../../providers/toast/toast'
import { TimeFormatProvider} from '../../providers/time-format/time-format';
@IonicPage()
@Component({
  selector: 'page-collection',
  templateUrl: 'collection.html',
})
export class CollectionPage {

  category: number;
  disp : any = [];
  saveKey: any = [];

  collects : Array<any> = [{name: "活动", index:0},{name: "讲座", index:1},{name:"攻略", index:2}];
  collect : string = "活动";
  tables: Array<string> = ["collects"];

  user:any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public timeFormat: TimeFormatProvider,
    public events: Events) {
      this.category = navParams.get("item");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionPage');
    this.storage.get('user').then(data=> {
      this.user = data;
      console.log(this.user);
      this.loadData();
    });

    this.events.subscribe('refreshCollection',()=>{
      console.log("refresh");
      this.disp = [];
      this.loadData();
    })
    
  }


  selectCategory(event){
    let elements=document.getElementsByClassName('button-select');
    for(let i =0; i<elements.length;i++){
      elements[i].className="button-empty";
    }
    event.target.className="button-select";
    this.category=event.target.name;
    console.log(this.category);
  }

  loadData(){
    firebase.database().ref(`/UsersAndAdministrators/${this.user.userID}/SavedEvents`).once('value').then(
      snapshot =>{
        console.log(snapshot.val());
        snapshot.forEach(each =>{
          console.log(each.key);
          firebase.database().ref(`/DailyEvents/${each.key}`).once('value').then(data => {
            console.log(data.val());
            let item = {};
              item['key'] = data.key;
              let value = data.val();
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
              // item['numsLike'] = value['numsLike'];
              // item['numsRead'] = value['numsRead'];
              // item['distance'] = "0 英里";
              // item['calDistance'] = false;
              this.disp.push(item);
            });
            this.disp.sort(function(a,b){
              return b['firstBegin'] - a['firstBegin'];
            });
      
          });
        })
  }

  openDetail(id){
    console.log(id);
    this.navCtrl.push('ActivityPage',{'infoId':id});
  }

}
