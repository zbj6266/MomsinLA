webpackJsonp([7],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPageModule", function() { return ActivityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity__ = __webpack_require__(290);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activity__["a" /* ActivityPage */]),
            ],
        })
    ], ActivityPageModule);
    return ActivityPageModule;
}());

//# sourceMappingURL=activity.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
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
    function ActivityPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ActivityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivityPage');
    };
    ActivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activity',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/activity/activity.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>活动详情</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="creator">\n    <img src="assets/imgs/logo.png" width="34" height="34" alt="">\n    <div class="name">MomsinLA</div>\n    <span class="offer">发布</span>\n  </div>\n  <div class="detail">\n    <div class="keyword">\n    <!-- <ul class="keyword"> -->\n        <div class="button-space"><button ion-button>免费停车</button></div>\n        <div class="button-space"><button ion-button>免费停车</button></div>\n        <div class="button-space"><button ion-button>免费停车</button></div>\n        <div class="button-space"><button ion-button>免费停车</button></div>\n        <div class="button-space"><button ion-button>免费停车</button></div>\n        <!-- <li class="button-space"><button ion-button>免费停车</button></li>\n        <li class="button-space"><button ion-button>免费停车</button></li>\n        <li class="button-space"><button ion-button>免费停车</button></li>\n        <li class="button-space"><button ion-button>免费停车</button></li>\n        <li class="button-space"><button ion-button>免费停车</button></li>\n        <li class="button-space"><button ion-button>免费停车</button></li> -->\n    <!-- </ul>    -->\n    </div>\n    <div class="detail-title">Ladera Ranch 儿童活动</div>\n    <div class="section">\n      <div id="time">活动时间： 77月12日 10:30am</div>\n      <div id="city">城市： Ladera Ranch</div>\n      <div id="address">具体地址： Ladera Ranch Library. 29551 Sienna PKwy, Ladera Ranch, CA</div>\n      <div id="website">官网：http://josephpeckmusic.com/event/2018-07-12-ladera-ranch/</div>\n      <div id="content">“Joseph Peck\'s Caribbean Drum Circle”专业音乐家和教育家Joseph Peck，将带这孩子们学习钢制乐器的文化和历，分享他的120个钢管乐队的表演故事，并带领孩子们动手玩打击乐。\n        </div>\n        <img class="content-img" src="assets/imgs/logo.png" alt="">\n    </div>\n    <div class="info-user">\n        <div class="info-like">\n          <div (click)="like()"><img id="like" src="assets/imgs/icon_like.png" width="20" height="20"></div>\n          <div class="info-margin">点赞</div>\n        </div>\n        <div class="info-collect">\n          <div><img src="assets/imgs/icon_collect.png" width="20" height="20"></div>\n          <div class="info-margin">收藏</div>\n        </div>\n      </div>\n\n      <div class="comments">\n        <div class="comments-title">评论</div>\n        <div></div>\n        <ion-item>\n          \n        </ion-item>\n      </div>\n      \n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/activity/activity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ActivityPage);
    return ActivityPage;
}());

//# sourceMappingURL=activity.js.map

/***/ })

});
//# sourceMappingURL=7.js.map