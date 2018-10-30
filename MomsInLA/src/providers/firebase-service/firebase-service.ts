import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'

@Injectable()
export class FirebaseServiceProvider {
  tables: Array<string> = ["/purchases/","/lectures/","/strategies/","/Exchange/"];
  dailyEvent: string = '/DailyEvents/';

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }

  getInformationItems(index, cat){
    console.log("category:"+index, "sub:"+cat);
    return this.afd.list(this.tables[index],ref =>ref.orderByChild('category').equalTo(cat));
  }

  getItem(index, key){
    console.log(this.tables[index]+key);
    return this.afd.object(this.tables[index]+key);
  }

  getDailyEvent(){
    return this.afd.list(this.dailyEvent);
  }

  getDailyEventInOrder(idx){
    switch(idx){
      case 0:
        return this.afd.list(this.dailyEvent, ref=> ref.orderByChild('numsLike'));
      case 1:
        return this.afd.list(this.dailyEvent, ref=> ref.orderByChild('numsLike'));
      case 2:
        return this.afd.list(this.dailyEvent, ref=> ref.orderByChild('numsLike'));

    }
  }

  getDailyEventDetail(key){
    return this.afd.object(this.dailyEvent+key);
  }

  getDailyEventDetailRef(key){
    return this.afd.list(this.dailyEvent+key);
  }

  //send exchange information
  sendExchange(data){
    this.afd.list('/Exchange/').push(data);
  }

  //get comments for DailyEvent
  getCommentForDailyEvent(id){
    return this.afd.list('/Comments/'+id);
  }

  getUserRef(uid){
    return this.afd.object(`/UsersAndAdministrators/${uid}`)
  }

  getUserListRef(uid){
    return this.afd.list(`/UsersAndAdministrators/${uid}`)
  }

  getImgListRef(id){
    return this.afd.list(`/${this.dailyEvent}/${id}/imgs`)
  }

}
