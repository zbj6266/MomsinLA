webpackJsonp([10],{

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPageModule", function() { return ActivityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity__ = __webpack_require__(528);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActivityPageModule = /** @class */ (function () {
    function ActivityPageModule() {
    }
    ActivityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__activity__["a" /* ActivityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activity__["a" /* ActivityPage */]),
            ],
        })
    ], ActivityPageModule);
    return ActivityPageModule;
}());

//# sourceMappingURL=activity.module.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(297);
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
 * Generated class for the ActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivityPage = /** @class */ (function () {
    function ActivityPage(navCtrl, navParams, fsp, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fsp = fsp;
        this.iab = iab;
        this.disp = {};
        this.infoId = navParams.get("infoId");
    }
    ActivityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivityPage');
        this.loadData(this.infoId);
    };
    ActivityPage.prototype.loadData = function (key) {
        var _this = this;
        this.fsp.getDailyEventDetail(key).valueChanges().subscribe(function (data) {
            console.log(data);
            _this.disp = data;
        });
    };
    ActivityPage.prototype.openBrowser = function (url) {
        var browser = this.iab.create(url, "_system");
    };
    ActivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activity',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/activity/activity.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>活动详情</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="creator">\n    <img src="assets/imgs/logo.png" width="34" height="34" alt="">\n    <div class="name" *ngIf="disp.hasOwnProperty(\'creator\')">{{disp.creator.userName}}</div>\n    <span class="offer">发布</span>\n  </div>\n  <div class="detail">\n    <div class="keyword">\n    <!-- <ul class="keyword"> -->\n        <div class="button-space"><button ion-button>免费停车</button></div>\n        <div class="button-space"><button ion-button>免费停车</button></div>\n        <div class="button-space"><button ion-button>免费停车</button></div>\n        <div class="button-space"><button ion-button>免费停车</button></div>\n        <div class="button-space"><button ion-button>免费停车</button></div>\n        <!-- <li class="button-space"><button ion-button>免费停车</button></li>\n        <li class="button-space"><button ion-button>免费停车</button></li>\n        <li class="button-space"><button ion-button>免费停车</button></li>\n        <li class="button-space"><button ion-button>免费停车</button></li>\n        <li class="button-space"><button ion-button>免费停车</button></li>\n        <li class="button-space"><button ion-button>免费停车</button></li> -->\n    <!-- </ul>    -->\n    </div>\n    <div class="detail-title">{{disp.title}}</div>\n    <div class="section">\n      <div id="time">活动时间： 7月12日 10:30am</div>\n      <div id="city">城市： {{disp.city}}</div>\n      <div id="address">具体地址： {{disp.address}}</div>\n      <div id="website" (click)="openBrowser(disp.website)">官网：{{disp.website}}</div>\n      <div id="content">{{disp.content}}\n        </div>\n        <img class="content-img" src="assets/imgs/logo.png" alt="">\n    </div>\n    <div class="info-user">\n        <div class="info-like">\n          <div (click)="like()"><img id="like" src="assets/imgs/icon_like.png" width="20" height="20"></div>\n          <div class="info-margin">点赞</div>\n        </div>\n        <div class="info-collect">\n          <div><img src="assets/imgs/icon_collect.png" width="20" height="20"></div>\n          <div class="info-margin">收藏</div>\n        </div>\n      </div>\n\n      <div class="comments">\n        <div class="comments-title">评论</div>\n        <div></div>\n        <ion-item>\n          <div class="comment-item">\n            <div class="user-img">\n              <img src="assets/imgs/logo.png" width="32" height="32">\n            </div>\n            <div class="comment-content">\n                <div>Wendy<span>1小时前</span></div>\n                <div class="comment-text">真好，我要带孩子去</div>\n            </div>\n            <div class="comment-like">\n              <img src="assets/imgs/icon_like.png" alt="" width="16" height="16">\n              <div class="num-like">16</div>\n            </div>\n          </div>\n        </ion-item>\n      </div>\n      \n  </div>\n</ion-content>\n<ion-footer no-border>\n  <div style="display: flex">\n  <input type="text" style="flex:1;height:40px;padding-left:6px;border: 1px solid #d8d8d8;margin:2px;border-radius: 2px" placeholder="说两句">\n  <button ion-button>评论</button>\n</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/activity/activity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], ActivityPage);
    return ActivityPage;
}());

//# sourceMappingURL=activity.js.map

/***/ })

});
//# sourceMappingURL=10.js.map