import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'activity-filter',
  templateUrl: 'activity-filter.html'
})
export class ActivityFilterComponent {

  text: string;
  filter: any; 
  constructor(public viewCtrl: ViewController) {
    this.filter = [{name:'按时间', idx:0},{name:'按热度',idx:1},{name: '按距离', idx: 2}];
    this.text = 'as';
  }

  clickItem(item){
    this.viewCtrl.dismiss(item);
  }

}
