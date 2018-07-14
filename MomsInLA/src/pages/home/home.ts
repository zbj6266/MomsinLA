import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  activityList() {
  	this.navCtrl.push("ActivitylistPage");
  }

  toInformation(c : number) {
    console.log(c);
    this.navCtrl.push("InformationPage",{item:c});
  }
}
