webpackJsonp([6],{

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangedetailPageModule", function() { return ExchangedetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exchangedetail__ = __webpack_require__(538);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExchangedetailPageModule = /** @class */ (function () {
    function ExchangedetailPageModule() {
    }
    ExchangedetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exchangedetail__["a" /* ExchangedetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exchangedetail__["a" /* ExchangedetailPage */]),
            ],
        })
    ], ExchangedetailPageModule);
    return ExchangedetailPageModule;
}());

//# sourceMappingURL=exchangedetail.module.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangedetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(298);
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
 * Generated class for the ExchangedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExchangedetailPage = /** @class */ (function () {
    function ExchangedetailPage(navCtrl, navParams, fsp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fsp = fsp;
        this.disp = {};
        this.category = navParams.get("category");
        this.infoId = navParams.get("infoId");
        console.log(this.category, this.infoId);
    }
    ExchangedetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ExchangedetailPage');
        this.fsp.getItem(this.category - 1, this.infoId).valueChanges().subscribe(function (data) {
            _this.disp = data;
            _this.disp.createTime = new Date(_this.disp.createTime).toLocaleDateString("en-US");
        });
    };
    ExchangedetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exchangedetail',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/exchangedetail/exchangedetail.html"*/'<!--\n  Generated template for the ExchangedetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-toolbar>\n        <div style="display: flex">\n          <div class="nav-button">\n          </div>\n          <div class="nav-title">交易帖子</div>\n          <div class="nav-button">\n          </div>\n        </div>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding *ngIf="disp.hasOwnProperty(\'title\')">\n  <div class="title">{{disp.title}}</div>\n  <div class="content-space">\n    <img src="assets/imgs/logo.png" width="100%">\n    <div class="content">{{disp.content}}</div>\n    <div class="date">截止日期：{{disp.createTime}}<br>\n    阅读量 {{disp.numRead}}</div>\n  </div>\n  <div class="share-space">\n        <div class="info-share">\n          <div class="share-title">分享</div>\n          <div class="share-content">\n            <div class="sina">\n              <div><img src="assets/imgs/weibo.png"></div>\n              <div class="share-content-title">新浪微博</div>\n            </div>\n            <div class="wechat">\n              <div><img src="assets/imgs/weixin.png" alt=""></div>\n              <div class="share-content-title">微信</div>\n            </div>\n            <div class="facebook">\n                <div><img src="assets/imgs/facebook.png" alt=""></div>\n                <div class="share-content-title">Facebook</div>  \n            </div>\n          </div>\n        </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/exchangedetail/exchangedetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], ExchangedetailPage);
    return ExchangedetailPage;
}());

//# sourceMappingURL=exchangedetail.js.map

/***/ })

});
//# sourceMappingURL=6.js.map