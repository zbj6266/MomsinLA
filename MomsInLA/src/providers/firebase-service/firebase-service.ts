import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {
  tables: Array<string> = ["/purchases/","/lectures/","/strategies/","/expenses/"];

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }

  getInformationItems(index, cat){
    console.log("category:"+index, "sub:"+cat);
    return this.afd.list(this.tables[index],ref =>ref.orderByChild('category').equalTo(cat));
  }

  getItem(index, key){
    console.log(this.tables[index]+key);
    return this.afd.list(this.tables[index]+key);
  }

}
