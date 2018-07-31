webpackJsonp([2],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.Setting = function () {
        this.navCtrl.push("SettingPage");
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\Internship\MomsinLA\MomsInLA\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>我的</ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<img class="displayed"  height="150 px" width="150 px" src="imgs/User-photo.png">\n\n	\n\n\n\n	<ion-title class = "adjust" style = "padding-top: 20px; padding-bottom: 20px">妈妈洛杉矶</ion-title>\n\n\n\n\n\n<ion-item>\n\n<ion-toolbar >\n\n<ion-buttons start>\n\n      <button class = "icon1" ion-button icon-only>\n\n        <ion-icon name="chatboxes" color = "dark"></ion-icon>\n\n      </button>\n\n  </ion-buttons>\n\n      <ion-buttons>\n\n      <div text-center>\n\n     <button ion-button full class = "icon2" (click) = "myPost()" color = "dark">我的帖子</button>\n\n </div>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="arrow-forward" padding-left= "100px" color="yellow"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n</ion-toolbar>\n\n</ion-item>\n\n   \n\n\n\n<!-- <button ion-button full outline (click) = "myPost()" color = "dark">我的帖子<ion-icon name="arrow-forward" padding-left= "100px" color="yellow"></ion-icon></button> -->\n\n  	<ion-item>\n\n  	<ion-toolbar >\n\n<ion-buttons start>\n\n      <button class = "icon1" ion-button icon-only>\n\n        <ion-icon name="clipboard" color = "dark"></ion-icon>\n\n      </button>\n\n  </ion-buttons>\n\n      <ion-buttons>\n\n      <div text-center>\n\n     <button ion-button full class = "icon2" (click) = "myCollection()" color = "dark">我的收藏</button>\n\n </div>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="arrow-forward" padding-left= "100px" color="yellow"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n</ion-toolbar>\n\n</ion-item>\n\n\n\n<ion-item>\n\n\n\n<ion-toolbar >\n\n<ion-buttons start>\n\n      <button class = "icon1" ion-button icon-only>\n\n        <ion-icon name="cash" color = "dark"></ion-icon>\n\n      </button>\n\n  </ion-buttons>\n\n      <ion-buttons>\n\n      <div text-center>\n\n     <button ion-button full class = "icon2" (click) = "myCredits()" color = "dark">我的积分</button>\n\n </div>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="arrow-forward" padding-left= "100px" color="yellow"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n</ion-toolbar>\n\n</ion-item>\n\n\n\n<ion-item>\n\n<ion-toolbar >\n\n<ion-buttons start>\n\n      <button class = "icon1" ion-button icon-only>\n\n        <ion-icon name="clock" color = "dark"></ion-icon>\n\n      </button>\n\n  </ion-buttons>\n\n      <ion-buttons>\n\n      <div text-center>\n\n     <button ion-button full class = "icon2" (click) = "History()" color = "dark">浏览记录</button>\n\n </div>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="arrow-forward" padding-left= "100px" color="yellow"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n</ion-toolbar>\n\n</ion-item>\n\n\n\n<ion-item>\n\n<ion-toolbar >\n\n<ion-buttons start>\n\n      <button class = "icon1" ion-button icon-only>\n\n        <ion-icon name="settings" color = "dark"></ion-icon>\n\n      </button>\n\n  </ion-buttons>\n\n      <ion-buttons>\n\n      <div text-center>\n\n     <button ion-button full class = "icon2" (click) = "Setting()" color = "dark">我的设置</button>\n\n </div>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="arrow-forward" padding-left= "100px" color="yellow"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n</ion-toolbar>\n\n</ion-item>\n\n\n\n\n\n\n\n\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Internship\MomsinLA\MomsInLA\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=2.js.map