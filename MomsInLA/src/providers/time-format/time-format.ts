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

  timeAppendZero(time: number){
    if(time < 10) return "0" + time;
    return time;
  }

  timeToString(fh, fm, th, tm){
    return this.timeAppendZero(fh) + ":" + this.timeAppendZero(fm) + "-" + this.timeAppendZero(th) + ":" + this.timeAppendZero(tm);
  }

  eventTimeFormat(from, to){
    let dateF = new Date(from);
    let fromYear = dateF.getFullYear();
    let fromMonth = dateF.getMonth();
    let fromDate = dateF.getDate();
    let fromHour = dateF.getHours();
    let fromMinute = dateF.getMinutes();
    let dateT = new Date(to);
    let toYear = dateT.getFullYear();
    let toMonth = dateT.getMonth();
    let toDate = dateT.getDate();
    let toHour = dateT.getHours();
    let toMinute = dateT.getMinutes();
    
    let timeString = this.timeToString(fromHour, fromMinute, toHour, toMinute);
    if(fromYear== toYear && fromMonth == toMonth && fromDate == toDate)
      return `${fromMonth+1}月${fromDate}日 ` +  timeString; 
    return `${fromMonth+1}月${fromDate}日 ` + timeString;


  }

}
