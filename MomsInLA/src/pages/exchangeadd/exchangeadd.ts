import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastProvider } from '../../providers/toast/toast';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

@IonicPage()
@Component({
  selector: 'page-exchangeadd',
  templateUrl: 'exchangeadd.html',
})
export class ExchangeaddPage {

  category:number = 1;
  title: string = "";
  price: string = "";
  city: string = "";
  content: string = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastProvider,
    public fsp: FirebaseServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExchangeaddPage');
    document.getElementById("title").onfocus = function(){
      document.getElementById("title").className="ex-title";
    };
    document.getElementById("price").onfocus = function(){
      document.getElementById("price").className="ex-title";
    };
    document.getElementById("city").onfocus = function(){
      document.getElementById("city").className="ex-title";
    };
    document.getElementById("content").onfocus = function(){
      document.getElementById("content").className="ex-content";
    };
    
  }

  selectCategory(event){
    let elements=document.getElementsByClassName('button-select');
    for(let i =0; i<elements.length;i++){
      elements[i].className="button-empty";
    }
    event.target.className="button-select";
    this.category=event.target.name;
    console.log(this.category)
  }

  inputAlert(id){
    console.log(id);
    console.log(document.getElementById(id));
    if(id=="content")
      document.getElementById(id).className = "ex-content alert";
    else
      document.getElementById(id).className = "ex-title alert";
  }

  publish(){
    console.log(this.title + this.content + this.category + "published");
    if(this.title.trim()==""){
      this.toast.presentToast("请输入帖子标题",1500,"bottom");
      this.inputAlert("title");
      return;
    }
    if(this.price.trim()==""){
      this.toast.presentToast("请输入单价", 1500, "bottom");
      this.inputAlert("price");
      return;
    }
    if(this.city.trim()==""){
      this.toast.presentToast("请输入城市", 1500, "bottom");
      this.inputAlert("city");
      return;
    }
    if(this.content.trim()==""){
      this.toast.presentToast("请输入内容", 1500, "bottom");
      this.inputAlert("content");
      return;
    }

    let jsonData = {
      createTime: new Date().getTime(),
      category: this.category,
      title: this.title,
      sale: this.price,
      zipCode: this.city,
      content: this.content,
      imgs: [],
      creator:{
        userID: 1111,
        userName: "MomsinLA",
        userImg: ""
      },
      numRead: 0
    }

    this.fsp.sendExchange(jsonData);
    this.navCtrl.pop();
    
  }

}
