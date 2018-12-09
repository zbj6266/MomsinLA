webpackJsonp([10],{

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitylistPageModule", function() { return ActivitylistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activitylist__ = __webpack_require__(537);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActivitylistPageModule = /** @class */ (function () {
    function ActivitylistPageModule() {
    }
    ActivitylistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__activitylist__["a" /* ActivitylistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activitylist__["a" /* ActivitylistPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__activitylist__["a" /* ActivitylistPage */],
            ]
        })
    ], ActivitylistPageModule);
    return ActivitylistPageModule;
}());

//# sourceMappingURL=activitylist.module.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_activity_filter_activity_filter__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_time_format_time_format__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_toast_toast__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ActivitylistPage = /** @class */ (function () {
    function ActivitylistPage(navCtrl, navParams, fsp, geocoder, popoverCtrl, geolocation, timeFormat, events, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fsp = fsp;
        this.geocoder = geocoder;
        this.popoverCtrl = popoverCtrl;
        this.geolocation = geolocation;
        this.timeFormat = timeFormat;
        this.events = events;
        this.toast = toast;
        this.allData = [];
        this.disp$ = [];
        this.isLocated = false;
        this.isLoaded = false;
        this.readMore = "";
        this.lastTime = 4698626463000;
        this.hasMore = true;
        this.numsForEach = 5;
        this.orderIndex = 0;
        this.noResult = "";
        this.cityLocation = '(定位中)';
        // this.events.subscribe('distance', () => {
        //   if(this.isLoaded && this.isLocated){
        //     for(let i= 0; i < this.disp$.length; i++){
        //       if(!this.disp$[i]['calDistance']){
        //         this.calDistance({lng: this.longitude, lat: this.latitude},this.disp$[i]['address'],i);
        //       }
        //     }
        //   }
        // });
    }
    ActivitylistPage.prototype.sortData = function () {
        switch (this.orderIndex) {
            case 0:
                this.disp$.sort(function (a, b) {
                    return b['firstBegin'] - a['firstBegin'];
                });
                break;
            case 1:
                this.disp$.sort(function (a, b) {
                    return b['numsLike'] - a['numsLike'];
                });
                break;
            case 2:
                this.disp$.sort(function (a, b) {
                    return b['distance'] - a['distance'];
                });
                break;
        }
    };
    ActivitylistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.events.subscribe('showAll', function () {
            _this.disp$ = _this.allData;
        });
        var searchBar = document.getElementById('searchText');
        var e = this.events;
        searchBar.oninput = function () {
            if (searchBar.childNodes[1]['value'].trim() == "")
                e.publish('showAll');
        };
        console.log('ionViewDidLoad ActivitylistPage');
        // this.loadData(0, this.lastTime, this.numsForEach);
        this.loadAllData();
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp);
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            _this.isLocated = true;
            _this.events.publish('distance');
            _this.geocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
                .then(function (result) {
                console.log(JSON.stringify(result[0]));
                _this.cityLocation = result[0].locality;
            })
                .catch(function (error) { return console.log(error); });
        }).catch(function (err) {
            console.log(err);
        });
    };
    ActivitylistPage.prototype.loadAllData = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7_firebase_app___default.a.database().ref('/DailyEvents/').once('value').then(function (snapshot) {
            console.log(snapshot.numChildren());
            snapshot.forEach(function (data) {
                var item = {};
                item['key'] = data.key;
                var value = data.val();
                if (value['createDate'] < _this.lastTime)
                    _this.lastTime = value['createDate'] - 1;
                item['title'] = value['title'];
                item['content'] = value['content'];
                item['address'] = value['address'];
                if (value.hasOwnProperty('imgs'))
                    item['imgs'] = value['imgs'];
                else
                    item['imgs'] = [];
                item['firstBegin'] = value['activityDate'][0]['from'];
                item['activityDate'] = [];
                for (var j = 0; j < value['activityDate'].length; j++) {
                    var time = _this.timeFormat.eventTimeFormat(value['activityDate'][j]['from'], value['activityDate'][j]['to']);
                    item['activityDate'].push(time);
                }
                if (value['eventCategory1'])
                    item['isFree'] = '免费';
                else
                    item['isFree'] = '收费';
                if (value['eventCategory2'])
                    item['isPublic'] = '公共活动';
                else
                    item['isPublic'] = '私人活动';
                item['numsLike'] = value['numsLike'];
                item['numsRead'] = value['numsRead'];
                item['distance'] = "0 英里";
                item['calDistance'] = false;
                _this.allData.push(item);
            });
            _this.disp$ = _this.allData;
            _this.sortData();
            _this.noResult = "无相关内容";
            _this.isLoaded = true;
            _this.events.publish('distance');
        });
    };
    ActivitylistPage.prototype.loadData = function (startTime, endTime, num) {
        var _this = this;
        if (this.hasMore)
            __WEBPACK_IMPORTED_MODULE_7_firebase_app___default.a.database().ref('/DailyEvents/').orderByChild('createDate').startAt(startTime).endAt(endTime).limitToLast(num).once('value').then(function (snapshot) {
                console.log(snapshot.numChildren());
                snapshot.forEach(function (data) {
                    var item = {};
                    item['key'] = data.key;
                    var value = data.val();
                    if (value['createDate'] < _this.lastTime)
                        _this.lastTime = value['createDate'] - 1;
                    item['title'] = value['title'];
                    item['address'] = value['address'];
                    item['content'] = value['content'];
                    if (value.hasOwnProperty('imgs'))
                        item['imgs'] = value['imgs'];
                    else
                        item['imgs'] = [];
                    item['firstBegin'] = value['activityDate'][0]['from'];
                    item['activityDate'] = [];
                    for (var j = 0; j < value['activityDate'].length; j++) {
                        var time = _this.timeFormat.eventTimeFormat(value['activityDate'][j]['from'], value['activityDate'][j]['to']);
                        item['activityDate'].push(time);
                    }
                    if (value['eventCategory1'])
                        item['isFree'] = '免费';
                    else
                        item['isFree'] = '收费';
                    if (value['eventCategory2'])
                        item['isPublic'] = '公共活动';
                    else
                        item['isPublic'] = '私人活动';
                    item['numsLike'] = value['numsLike'];
                    item['numsRead'] = value['numsRead'];
                    item['distance'] = "0 英里";
                    item['calDistance'] = false;
                    _this.disp$.push(item);
                    _this.readMore = "查看更多";
                });
                _this.disp$.sort(function (a, b) {
                    return b['firstBegin'] - a['firstBegin'];
                });
                if (snapshot.numChildren() < num) {
                    _this.hasMore = false;
                    _this.readMore = "没有更多活动了";
                    console.log(_this.readMore);
                }
                _this.isLoaded = true;
                _this.events.publish('distance');
            });
    };
    ActivitylistPage.prototype.loadMoreData = function () {
        this.loadData(0, this.lastTime, this.numsForEach);
    };
    ActivitylistPage.prototype.openDetail = function (key, numsRead) {
        console.log(key);
        console.log(numsRead);
        this.navCtrl.push('ActivityPage', { infoId: key });
    };
    ActivitylistPage.prototype.presentPopover = function (event) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_activity_filter_activity_filter__["a" /* ActivityFilterComponent */]);
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (data) {
            if (data == null)
                return;
            switch (data.idx) {
                case 0:
                    _this.orderIndex = 0;
                    _this.sortData();
                    break;
                case 1:
                    _this.orderIndex = 1;
                    _this.sortData();
            }
        });
    };
    ActivitylistPage.prototype.calDistance = function (o, d, index) {
        o = { lat: 34.1379, lng: -118.0537 };
        if (this.disp$[index]['calDistance'])
            return;
        console.log(this.latitude);
        console.log(this.longitude);
        console.log(d);
        var service = new google.maps.DistanceMatrixService();
        var dataItem = this.disp$;
        service.getDistanceMatrix({
            origins: [o],
            destinations: [{ lat: 34.1379, lng: -118.0537 }],
            travelMode: 'DRIVING',
            // drivingOptions: {
            //   departureTime: new Date(Date.now()),  // for the time N milliseconds from now.
            //   trafficModel: 'optimistic'
            // }
            unitSystem: google.maps.UnitSystem.IMPERIAL
        }, callback);
        function callback(response, status) {
            console.log(response);
            if (response.rows[0]['elements'][0]['status'] == "OK") {
                dataItem[index]['distance'] = response.rows[0]['elements'][0]['distance']['text'];
                dataItem[index]['calDistance'] = true;
                console.log(dataItem[index]);
            }
            // See Parsing the Results for
            // the basics of a callback function.
        }
    };
    ActivitylistPage.prototype.search = function (keyword) {
        console.log(keyword);
        if (keyword != null && keyword != "") {
            console.log(keyword);
            this.disp$ = [];
            var regex = new RegExp(keyword.toLowerCase());
            for (var i = 0; i < this.allData.length; i++) {
                // console.log(this.allData[i]['content'].search(regex));
                if (this.allData[i]['title'].toLowerCase().search(regex) != -1 || this.allData[i]['address'].toLowerCase().search(regex) != -1 || this.allData[i]['content'].toLowerCase().search(regex) != -1) {
                    this.disp$.push(this.allData[i]);
                }
                for (var j = 0; j < this.allData[i]['activityDate'].length; j++) {
                    if (this.allData[i]['activityDate'][j].toLowerCase().search(regex) != -1) {
                        this.disp$.push(this.allData[i]);
                        break;
                    }
                }
            }
        }
        else {
            this.disp$ = this.allData;
        }
        this.sortData();
    };
    ActivitylistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activitylist',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/activitylist/activitylist.html"*/'<ion-header>\n\n  <ion-toolbar>\n  	<div style="display: flex">\n      <div>\n      	<button ion-button clear small navPop>  \n        	<ion-icon mode="ios" name="ios-arrow-back" style="font-size: 3rem"></ion-icon> \n      	</button>\n      </div>\n			<div style="flex:1;background:white; border:1px solid #dedede">\n				<!-- <ion-searchbar [showCancelButton]="shouldShowCancel" (search)="onSearch($event)">\n				</ion-searchbar> -->\n				<ion-input id="searchText" placeholder="请输入关键字" [(ngModel)]="keyword" (ionInput)="onInput($event)"></ion-input>\n			</div>\n			<div>\n				<button ion-button clear small (click)="search(keyword)">搜索</button>\n			</div>\n    </div>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content >\n	<div style="display: flex; padding: 8px 10px 8px 10px;font-size:16px; border-bottom: 1px solid #bebbbb">\n		<div style="flex:1"><img src="assets/icon/icon_location.png" height="20" width="20" ><span style="margin:4px;color:#aaaaaa">{{cityLocation}}</span></div>\n    <div (click)=\'presentPopover($event)\'><img src="assets/icon/icon_filter.png" width="20" height="20"></div>\n	</div>\n		<div *ngIf="disp$.length == 0" class=\'no-result\'>{{noResult}}</div>\n		<div class="list-item" *ngFor="let item of disp$" (click)="openDetail(item.key,item.numsRead)">\n			<div class="title">{{item.title}}</div>\n			<div class="list-content">\n					<img *ngIf="item.imgs.length>0" class="list-img" [src]="item.imgs[0]" alt="">\n				<div class="list-text">\n					<div class="time">时间：<span *ngFor="let time of item.activityDate">{{time}}; </span></div>\n					<div class="address">地址：{{item.address}}</div>\n					<div class="distant">距离：{{item.distance}}</div>\n					<div style="display: flex;">\n							<div style="width:35%;font-size: 1.3rem;background-color: #ffd500;text-align: center;height:2rem;margin:4px">{{item.isFree}}</div>\n							<div style="width:35%;font-size: 1.3rem;background-color: #ffd500;text-align: center;height:2rem;margin:4px">{{item.isPublic}}</div>\n							<!-- <div style="float:right;margin-top:8px;margin-left:4px">\n								<img src="assets/imgs/icon_like.png" width="16" height="16"><span style="margin-left:4px;line-height: 16px">{{item.numsLike}}</span>\n							</div> -->\n						</div>\n				</div>\n			</div>\n		</div>\n		<!-- <div style="text-align: center; font-size: 20px;margin:10px 0px"><span (click)="loadMoreData()">{{readMore}}</span></div> -->\n\n</ion-content>'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/activitylist/activitylist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_6__providers_time_format_time_format__["a" /* TimeFormatProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__providers_toast_toast__["a" /* ToastProvider */]])
    ], ActivitylistPage);
    return ActivitylistPage;
}());

//# sourceMappingURL=activitylist.js.map

/***/ })

});
//# sourceMappingURL=10.js.map