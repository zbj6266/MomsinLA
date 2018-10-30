webpackJsonp([5],{

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoDetailPageModule", function() { return InfoDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_detail__ = __webpack_require__(539);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfoDetailPageModule = /** @class */ (function () {
    function InfoDetailPageModule() {
    }
    InfoDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__info_detail__["a" /* InfoDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info_detail__["a" /* InfoDetailPage */]),
            ],
        })
    ], InfoDetailPageModule);
    return InfoDetailPageModule;
}());

//# sourceMappingURL=info-detail.module.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(157);
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
 * Generated class for the InfoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoDetailPage = /** @class */ (function () {
    function InfoDetailPage(navCtrl, navParams, fsp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fsp = fsp;
        this.disp = {};
        this.infoId = navParams.get("infoId");
        this.table = navParams.get("category");
    }
    InfoDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad InfoDetailPage');
        this.fsp.getItem(this.table - 1, this.infoId).valueChanges().subscribe(function (data) {
            _this.disp = data;
            console.log(_this.disp);
        });
    };
    InfoDetailPage.prototype.like = function () {
        var obj = document.getElementById("like");
        var imgSrc = obj.getAttribute("src");
        if (imgSrc == "assets/imgs/icon_like.png") {
            obj.setAttribute("src", "assets/imgs/icon_like_select.png");
        }
        else {
            obj.setAttribute("src", "assets/imgs/icon_like.png");
        }
    };
    InfoDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info-detail',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/info-detail/info-detail.html"*/'<!--\n  Generated template for the InfoDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar center>\n    <ion-title>专家讲座</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <div class="info-img">\n        <img src="assets/imgs/logo.png"/>\n    </div>\n    <ion-card-content *ngIf="disp.hasOwnProperty(\'introduction\')">\n      <ion-card-title>\n          {{disp.introduction.introTitle}}<br>\n          {{disp.introduction.introText}}\n      </ion-card-title>\n      <p>\n          {{disp.introduction.introduction}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <div class="info-title">{{disp.title}}</div>\n  <ion-card>\n    <ion-card-content id="info-content" class="info-content" innerHTML="{{disp.content}}">     \n    </ion-card-content>\n  </ion-card>\n  <div *ngIf="disp.hasOwnProperty(\'suplement\')">\n  <div class="option-title">{{disp.suplement.title}}</div>\n  <ion-card>\n    <ion-card-content id="supplement" class="info-content" innerHTML="{{disp.suplement.content}}">\n    </ion-card-content>\n  </ion-card>\n  </div>\n  <div class="info-user">\n    <div class="info-like">\n      <div (click)="like()"><img id="like" src="assets/imgs/icon_like.png" width="20" height="20"></div>\n      <div class="info-margin">点赞</div>\n    </div>\n    <div class="info-collect">\n      <div><img src="assets/imgs/icon_collect.png" width="20" height="20"></div>\n      <div class="info-margin">收藏</div>\n    </div>\n    <div class="info-read">阅读 {{disp.numsRead}}</div>\n  </div>\n  <div class="info-share">\n    <div class="share-title">分享</div>\n    <div class="share-content">\n      <div class="sina">\n        <div><img src="assets/imgs/weibo.png"></div>\n        <div class="share-content-title">新浪微博</div>\n      </div>\n      <div class="wechat">\n        <div><img src="assets/imgs/weixin.png" alt=""></div>\n        <div class="share-content-title">微信</div>\n      </div>\n      <div class="facebook">\n          <div><img src="assets/imgs/facebook.png" alt=""></div>\n          <div class="share-content-title">Facebook</div>  \n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/info-detail/info-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], InfoDetailPage);
    return InfoDetailPage;
}());

//# sourceMappingURL=info-detail.js.map

/***/ })

});
//# sourceMappingURL=5.js.map