import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

declare var tim;

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {
  

  category: number;
  title : string;
  disp : any;
  planPurchases : Array<string> = ["智能消费","打折软件","打折商品","团购信息"];
  planPurchase : string = "智能消费";
  lectures : any = [{name:"保险理财", index:1},{name:"宝宝教育",index:2},{name:"健康常识", index:3},{name:"法律知识",index:4}];
  lecture : string = "保险理财";
  strategies : Array<string> = ["学区攻略","出游攻略","医疗攻略","小知识"];
  strategy : string = "学区攻略";
  expenses : Array<string> = ["商品买卖","家政服务","房屋租住","妈妈兼职"];
  expense : string = "商品买卖";
  films: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    this.category = navParams.get("item");
    this.films = this.httpClient.get('https://swapi.co/api/films');
    this.films
    .subscribe(data => {
      console.log('my data: ', data);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
    tim.X('info').Get({query:{category:{main:this.category,sub:1}}}).then(data=>{
      this.disp =data.data;
    })
  }

  loadData(index){
    tim.X('info').Get({query:{category:{main:this.category,sub:index}}}).then(data=>{
      this.disp =data.data;
    })
  }

  openDetail(id){
    console.log(id)
  }



}
