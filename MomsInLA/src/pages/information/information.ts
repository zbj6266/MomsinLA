import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';


declare var tim;

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {
  

  category: number;
  disp : any;
  planPurchases : Array<string> = ["智能消费","打折软件","打折商品","团购信息"];
  planPurchase : string = "智能消费";
  lectures : any = [{name:"保险理财", index:0},{name:"宝宝教育",index:1},{name:"健康常识", index:2},{name:"法律知识",index:3}];
  lecture : string = "保险理财";
  strategies : Array<any> = [{name:"学区攻略", index:0},{name:"出游攻略", index:1},{name:"医疗攻略", index:2},{name:"小知识", index:3}];
  strategy : string = "学区攻略";
  expenses : Array<any> = [{name: "商品买卖", index:0},{name: "家政服务", index:1},{name:"房屋租住", index:2},{name:"妈妈兼职",index:3}];
  expense : string = "商品买卖";
  tables: Array<string> = ["purchases","lectures","strategies","expenses"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category = navParams.get("item");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
    tim.X(this.tables[this.category-1]).Get({query:{category:0}}).then(data=>{
      this.disp =data.data;
      console.log(this.disp);
    })
  
  }


  loadData(index){
    tim.X(this.tables[this.category-1]).Get({query:{category:index}}).then(data=>{
      console.log(data);
      this.disp =data.data;
    })
  }

  openDetail(id){
    console.log(id);
    tim.X(this.tables[this.category-1]).Set(id, {$inc:{numsRead:1}}).then(
      data=>this.navCtrl.push('InfoDetailPage',{infoId: id, table: this.tables[this.category-1]})
    );
  }

  onSearch(event){
    console.log(event.target.value);
    var re = new RegExp(event.target.value,"i");
    tim.X(this.tables[this.category-1]).Get({query:{title:/to/i}}).then(data=>
      console.log(data));
  }



}
