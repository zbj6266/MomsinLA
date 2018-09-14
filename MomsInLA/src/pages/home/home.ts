import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lat:any=1;
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
    

  }

  activityList() {
  	this.navCtrl.push("ActivitylistPage");
  }

  toInformation(c : number) {
    console.log(c);
    this.geolocation.getCurrentPosition().then((resp)=>{
      this.lat = resp.coords.latitude;
      console.log(resp);
      console.log(1111);
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
    }).catch(err=>{
      console.log(err)
    });
    console.log("test geolocation");
    this.navCtrl.push("InformationPage",{item:c});
  }
}
