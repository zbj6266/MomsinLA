import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collection',
  templateUrl: 'collection.html',
})
export class CollectionPage {
category: number;
  disp : any;

collects : Array<any> = [{name: "活动", index:0},{name: "讲座", index:1},{name:"攻略", index:2}];
    collect : string = "活动";
    tables: Array<string> = ["collects"];
  constructor(public navCtrl: NavController, public navParams: NavParams) {



  this.category = navParams.get("item");
    var arr=["dfs","qqq","ttt"];
    console.log(arr);
    delete arr[2];
    console.log(arr);
    console.log(arr[3]);

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionPage');
    // tim.X(this.tables[this.category-1]).Get({query:{category:0}}).then(data=>{
    //   this.disp =data.data;
    //   console.log(this.disp);
    // })
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

  loadData(index){
    // tim.X(this.tables[this.category-1]).Get({query:{category:index}}).then(data=>{
    //   console.log(data);
    //   this.disp =data.data;
    // })
  }

  openDetail(id){
    console.log(id);
    // tim.X(this.tables[this.category-1]).Set(id, {$inc:{numsRead:1}}).then(
    //   data=>this.navCtrl.push('InfoDetailPage',{infoId: id, table: this.tables[this.category-1]})
    // );
  }

  

  openAdd(){
    this.navCtrl.push('ExchangeaddPage');
  }

  openExchange(id){
    this.navCtrl.push('ExchangedetailPage');
  }

}
