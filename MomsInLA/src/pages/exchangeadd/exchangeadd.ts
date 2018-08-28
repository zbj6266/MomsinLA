import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExchangeaddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exchangeadd',
  templateUrl: 'exchangeadd.html',
})
export class ExchangeaddPage {
  category:number =1;
  title: string = "";
  content: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExchangeaddPage');
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

  publish(){
    console.log(this.title + this.content + this.category + "published");
  }

}
