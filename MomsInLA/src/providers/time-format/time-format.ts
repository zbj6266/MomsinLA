import { Injectable } from '@angular/core';

@Injectable()
export class TimeFormatProvider {

  constructor() {
  }

  differFromNow(timestamp: number){
    let now = new Date();
    let seconds = (now.getTime() - timestamp)/1000;
    if(seconds < 60){
      if(seconds < 1) return "刚刚";
      return Math.floor(seconds) + "秒前";
    }
    let minutes = seconds/60;
    if(minutes < 60){
      return Math.floor(minutes) + "分前";
    }
    let hours = minutes/60;
    if(hours < 24){
      return Math.floor(hours) + "小时前";
    }
    let days = hours/24;
    if(days < 30){
      return Math.floor(days) + "天前";
    }
    let months = days/30;
    if(months < 12){
      return Math.floor(months) + "月前";
    }
    let years = months/12;
    return Math.floor(years) + "年前";
  }

}
