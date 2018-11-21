import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { ToastProvider } from '../../providers/toast/toast';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {
  

  category: number;
  disp : any;
  planPurchases : Array<any> = [{name:"打折软件",index:0},{name:"打折商品", index:1},{name:"团购信息",index:2}];
  planPurchase : string = "智能消费";
  lectures : any = [{name:"保险理财", index:0},{name:"宝宝教育",index:1},{name:"健康常识", index:2},{name:"法律知识",index:3}];
  lecture : string = "保险理财";
  strategies : Array<any> = [{name:"学区攻略", index:0},{name:"出游攻略", index:1},{name:"医疗攻略", index:2},{name:"小知识", index:3}];
  strategy : string = "学区攻略";
  expenses : Array<any> = [{name: "商品买卖", index:0},{name: "家政服务", index:1},{name:"房屋租住", index:2},{name:"妈妈兼职",index:3}];
  expense : string = "商品买卖";
  userInfo: any;

  list$: any;
  disp$: any
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fsp:FirebaseServiceProvider,
    public storage: Storage,
    public toast: ToastProvider) {
    this.category = navParams.get("item");
    storage.get("user").then(data=> this.userInfo=data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
    this.loadData(0);
  
  }


  loadData(index){
    this.fsp.getInformationItems(this.category-1,index).snapshotChanges().pipe(
      map(changes=>{
        return changes.map(c=>({
          key: c.payload.key, ...c.payload.val()
        }))
      })
    ).subscribe(data=> {
      this.disp$ = data;
      console.log(data);
      if(this.category == 4){
        for(let i = 0; i < this.disp$.length; i++){
          this.disp$[i].createTime = new Date(this.disp$[i].createTime).toLocaleDateString("en-US");
        }
      }
    });
  }

  openDetail(id){
    console.log(id);
    this.navCtrl.push('InfoDetailPage',{category:this.category, infoId:id});
  }

  onSearch(event){
    console.log(event.target.value);
  }

  openAdd(){
    if(this.userInfo == null){
      this.toast.presentToast("请先登陆", 1000, "middle");
          let n = this.navCtrl;
          setTimeout(function(){
            n.push('LoginPage');
          },1000);
    }
    else
      this.navCtrl.push('ExchangeaddPage');
  }

  openExchange(id){
    this.navCtrl.push('ExchangedetailPage',{category: this.category, infoId:id});
  }



}
