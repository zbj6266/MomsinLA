webpackJsonp([4],{

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryPageModule", function() { return LibraryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library__ = __webpack_require__(545);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LibraryPageModule = /** @class */ (function () {
    function LibraryPageModule() {
    }
    LibraryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__library__["a" /* LibraryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__library__["a" /* LibraryPage */]),
            ],
        })
    ], LibraryPageModule);
    return LibraryPageModule;
}());

//# sourceMappingURL=library.module.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_time_format_time_format__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LibraryPage = /** @class */ (function () {
    function LibraryPage(navCtrl, navParams, timeFormat, navi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timeFormat = timeFormat;
        this.navi = navi;
        this.tip = "";
        this.disp = [];
    }
    LibraryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LibraryPage');
        this.loadData();
    };
    LibraryPage.prototype.loadData = function () {
        var _this = this;
        var currentDate = this.getCurrentDate(new Date("2019-01-08"));
        console.log(currentDate);
        __WEBPACK_IMPORTED_MODULE_2_firebase_app___default.a.database().ref("/Library/" + currentDate).once('value').then(function (snapshot) {
            if (snapshot.val() == null) {
                _this.tip = "暂无当日图书馆活动";
                return;
            }
            console.log(snapshot.val());
            snapshot.forEach(function (data) {
                var item = data.val();
                var evt = {
                    "title": item["title"],
                    "description": item["description"],
                    "address": item["address"],
                };
                if (item.hasOwnProperty("image") && (item["image"] != "" || item["image"] != null)) {
                    evt["image"] = item["image"];
                }
                var timeArr = [];
                for (var i = 0; i < item["time"].length; i++) {
                    timeArr.push(_this.getEventTime(item["time"][i]["startTime"], item["time"][i]["endTime"]));
                }
                evt["timeArr"] = timeArr;
                _this.disp.push(evt);
                console.log(_this.disp);
            });
        }).catch(function (err) {
            _this.tip = "网络无法连接，请稍后重试";
        });
    };
    LibraryPage.prototype.getCurrentDate = function (currentDate) {
        var mm = currentDate.getMonth() + 1; // getMonth() is zero-based
        var dd = currentDate.getDate();
        return [currentDate.getFullYear(),
            (mm > 9 ? '' : '0') + mm,
            (dd > 9 ? '' : '0') + dd
        ].join('-');
    };
    LibraryPage.prototype.getEventTime = function (from, to) {
        return this.timeFormat.formatAMPM(new Date(from)) + "-" + this.timeFormat.formatAMPM(new Date(to));
    };
    LibraryPage.prototype.navigate = function (address) {
        this.navi.navigate(address);
    };
    LibraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-library',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/library/library.html"*/'<!--\n  Generated template for the LibraryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>图书馆活动</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="tip">{{tip}}</div>\n  <ion-card style="background:#fefefe" *ngFor="let item of disp">\n    <ion-card-header>\n      <div class="title">{{item.title}}</div>\n    </ion-card-header>\n    <ion-card-content class="content">\n        <div *ngIf="item.hasOwnProperty(\'image\')">\n            <img [src]="item.image" width="100%">\n          </div>\n      <div class="margin-10">{{item.description}}</div>\n      <div class="bold">活动时间：<span *ngFor="let time of item.timeArr">{{time}};</span></div>\n      <div class="bold" >地址：<span (click)="navigate(item.address)">{{item.address}}</span></div>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- <ion-card style="background:#fefefe">\n    <ion-card-header>\n      <div class="title">Rivera图书馆</div>\n    </ion-card-header>\n    <ion-card-content class="content">\n      <div>\n        <img src="../../assets/imgs/libaray.png" width="100%">\n      </div>\n      <div class="margin-10">"Makmo Thrusday: Mega Marble Run"一起来做个高速运转的玩具吧，适合5-12岁孩童及监护人。</div>\n      <div class="bold">活动日期：1月3日 8:45pm-4:45pm</div>\n      <div class="bold">地址：7828 S. Serams Ave. Pico Revera, CA, 90660</div>\n    </ion-card-content>\n  </ion-card> -->\n  \n</ion-content>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/library/library.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_time_format_time_format__["a" /* TimeFormatProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
    ], LibraryPage);
    return LibraryPage;
}());

//# sourceMappingURL=library.js.map

/***/ })

});
//# sourceMappingURL=4.js.map