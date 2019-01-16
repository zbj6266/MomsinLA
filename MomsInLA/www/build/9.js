webpackJsonp([9],{

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionPageModule", function() { return CollectionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collection__ = __webpack_require__(541);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CollectionPageModule = /** @class */ (function () {
    function CollectionPageModule() {
    }
    CollectionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__collection__["a" /* CollectionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__collection__["a" /* CollectionPage */]),
            ],
        })
    ], CollectionPageModule);
    return CollectionPageModule;
}());

//# sourceMappingURL=collection.module.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_time_format_time_format__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CollectionPage = /** @class */ (function () {
    function CollectionPage(navCtrl, navParams, storage, timeFormat, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.timeFormat = timeFormat;
        this.events = events;
        this.disp = [];
        this.saveKey = [];
        this.collects = [{ name: "活动", index: 0 }, { name: "讲座", index: 1 }, { name: "攻略", index: 2 }];
        this.collect = "活动";
        this.tables = ["collects"];
        this.category = navParams.get("item");
    }
    CollectionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CollectionPage');
        this.storage.get('user').then(function (data) {
            _this.user = data;
            console.log(_this.user);
            _this.loadData();
        });
        this.events.subscribe('refreshCollection', function () {
            console.log("refresh");
            _this.disp = [];
            _this.loadData();
        });
    };
    CollectionPage.prototype.selectCategory = function (event) {
        var elements = document.getElementsByClassName('button-select');
        for (var i = 0; i < elements.length; i++) {
            elements[i].className = "button-empty";
        }
        event.target.className = "button-select";
        this.category = event.target.name;
        console.log(this.category);
    };
    CollectionPage.prototype.loadData = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.database().ref("/UsersAndAdministrators/" + this.user.userID + "/SavedEvents").once('value').then(function (snapshot) {
            console.log(snapshot.val());
            snapshot.forEach(function (each) {
                console.log(each.key);
                __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.database().ref("/DailyEvents/" + each.key).once('value').then(function (data) {
                    console.log(data.val());
                    //delete the favorite daily event if it is removed.
                    if (data.val() == null) {
                        __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.database().ref("/UsersAndAdministrators/" + _this.user.userID + "/SavedEvents/").child("" + each.key).remove();
                    }
                    else {
                        var item = {};
                        item['key'] = data.key;
                        var value = data.val();
                        item['title'] = value['title'];
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
                        // item['numsLike'] = value['numsLike'];
                        // item['numsRead'] = value['numsRead'];
                        // item['distance'] = "0 英里";
                        // item['calDistance'] = false;
                        _this.disp.push(item);
                    }
                });
                _this.disp.sort(function (a, b) {
                    return b['firstBegin'] - a['firstBegin'];
                });
            });
        });
    };
    CollectionPage.prototype.openDetail = function (id) {
        console.log(id);
        this.navCtrl.push('ActivityPage', { 'infoId': id });
    };
    CollectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-collection',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/collection/collection.html"*/'<!--\n  Generated template for the CollectionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n        <div style="display: flex">\n          <div class="nav-button">\n          <button ion-button clear small navPop>  \n            <ion-icon mode="ios" name="ios-arrow-back"></ion-icon> \n          </button>\n          </div>\n          <div class="nav-title">我的收藏</div>\n          <div class="nav-button">\n              <button ion-button clear small disabled>  \n                <!-- <ion-icon mode="ios" name="ios-arrow-back"></ion-icon>  -->\n              </button>\n              </div>\n        </div>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n\n<!-- <div style="display: flex">\n  <div class="button-space"><button  name="活动" class="button-select" (click)=\'selectCategory($event)\'>活动</button></div>\n  <div class="button-space"><button  name="讲座" (click)=\'selectCategory($event)\'>讲座</button></div>\n  <div class="button-space"><button  name="攻略" (click)=\'selectCategory($event)\'>攻略</button></div>\n  \n</div> -->\n\n  <!-- information start -->\n \n  <!-- <div class="info-list">\n    <div class="info-title">纽约人寿保险介绍及经验分享</div>\n    <div style="display: flex">\n      <div><img src="assets/imgs/logo.png" height="70" width="110"></div>\n      <div class="exchange-text">\n      <div class="exchange-content">\n        如果你无法简洁的表达你的想法，那只说明你还不够了解它。\n      </div>\n      \n      </div>\n      \n    </div>  \n  </div>\n  <div class="info-list">\n    <div class="info-title">纽约人寿保险介绍及经验分享</div>\n    <div style="display: flex">\n      <div><img src="assets/imgs/logo.png" height="70" width="110"></div>\n      <div class="exchange-text">\n      <div class="exchange-content">\n        如果你无法简洁的表达你的想法，那只说明你还不够了解它。\n      </div>\n      \n      </div>\n      \n    </div>  \n  </div>\n  <div class="info-list">\n    <div class="info-title">纽约人寿保险介绍及经验分享</div>\n    <div style="display: flex">\n      <div><img src="assets/imgs/logo.png" height="70" width="110"></div>\n      <div class="exchange-text">\n      <div class="exchange-content">\n        如果你无法简洁的表达你的想法，那只说明你还不够了解它。\n      </div>\n      \n      </div>\n      \n    </div>  \n  </div>\n  <div class="info-list">\n    <div class="info-title">纽约人寿保险介绍及经验分享</div>\n    <div style="display: flex">\n      <div><img src="assets/imgs/logo.png" height="70" width="110"></div>\n      <div class="exchange-text">\n      <div class="exchange-content">\n        如果你无法简洁的表达你的想法，那只说明你还不够了解它。\n      </div>\n      \n      </div>\n      \n    </div>  \n  </div>\n   -->\n\n   <div class="list-item" *ngFor="let item of disp" (click)="openDetail(item.key)">\n			<div class="title">{{item.title}}</div>\n			<div class="list-content">\n        <!-- <div class="out">\n          <div class="mid">\n            <div class="in">\n                <img  width=\'100%\' [src]="item.imgs[0]" alt="">\n            </div>\n          </div>\n        </div> -->\n          <div style="width: 30%; height:7rem;overflow: hidden;"><img  width=\'100%\' [src]="item.imgs[0]" alt=""></div>\n				<div class="list-text">\n					<div class="time">时间：<span *ngFor="let time of item.activityDate">{{time}}; </span></div>\n					<div class="address">地址：{{item.address}}</div>\n					<!-- <div class="distant">距离：{{item.distance}}</div> -->\n					<div style="display: flex;">\n							<div style="width:35%;font-size: 1.3rem;background-color: #ffd500;text-align: center;height:2rem;margin:4px">{{item.isFree}}</div>\n							<div style="width:35%;font-size: 1.3rem;background-color: #ffd500;text-align: center;height:2rem;margin:4px">{{item.isPublic}}</div>\n							<!-- <div style="float:right;margin-top:8px;margin-left:4px">\n								<img src="assets/imgs/icon_like.png" width="16" height="16"><span style="margin-left:4px;line-height: 16px">{{item.numsLike}}</span>\n							</div> -->\n						</div>\n				</div>\n			</div>\n		</div>\n  \n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/collection/collection.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_time_format_time_format__["a" /* TimeFormatProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], CollectionPage);
    return CollectionPage;
}());

//# sourceMappingURL=collection.js.map

/***/ })

});
//# sourceMappingURL=9.js.map