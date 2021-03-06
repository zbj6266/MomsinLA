webpackJsonp([0],{

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting__ = __webpack_require__(550);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */]),
            ],
        })
    ], SettingPageModule);
    return SettingPageModule;
}());

//# sourceMappingURL=setting.module.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_toast_toast__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, navParams, storage, events, afAuth, gplus, alertCtrl, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.events = events;
        this.afAuth = afAuth;
        this.gplus = gplus;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('user').then(function (data) { return _this.user = data; });
    };
    SettingPage.prototype.Logout = function () {
        this.storage.remove('user');
        this.events.publish("logout", null);
        this.afAuth.auth.signOut();
        this.gplus.logout();
        this.navCtrl.pop();
    };
    SettingPage.prototype.changeName = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '修改昵称',
            inputs: [
                {
                    name: 'nickname',
                }
            ],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function (data) {
                        console.log(data);
                        __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.database().ref("/UsersAndAdministrators/" + _this.user.userID + "/displayName").set(data['nickname']).then(function () {
                            var user = {
                                username: data['nickname'],
                                userImg: _this.user.userImg,
                                userID: _this.user.userID,
                                userStatus: _this.user.userStatus
                            };
                            _this.storage.set('user', user);
                            _this.toast.presentToast('修改成功', 1000, 'bottom');
                        }).catch(function (err) {
                            console.log(err);
                            _this.toast.presentToast('修改失败，请重试', 1000, 'bottom');
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    SettingPage.prototype.changePic = function () {
        this.navCtrl.push('ChangePicPage');
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/setting/setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <!-- <ion-navbar>\n    <ion-title>设置</ion-title>\n  </ion-navbar> -->\n\n  <ion-toolbar>\n      <div style="display: flex">\n        <div class="nav-button">\n        <button ion-button small clear navPop>  \n          <ion-icon mode="ios" name="ios-arrow-back"></ion-icon> \n        </button>\n        </div>\n        <div class="nav-title">我的设置</div>\n        <div class="nav-button">\n            <button ion-button small clear disabled>  \n              <!-- <ion-icon mode="ios" name="ios-arrow-back"></ion-icon>  -->\n            </button>\n            </div>\n      </div>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<!-- <ion-grid>\n	<ion-item >\n<button ion-button full class = "customBtn1" (click) = "Account()" color = "white">帐号与安全</button>\n</ion-item>\n</ion-grid>\n\n\n<ion-item>\n<button ion-button full class = "customBtn1" (click) = "General()" color = "white">通用</button>\n</ion-item>\n\n<ion-item>\n<button ion-button full class = "customBtn1" (click) = "Notification()" color = "white">消息通知</button>\n</ion-item>\n\n<ion-grid>\n<ion-item>\n<button ion-button full class = "customBtn1" (click) = "About()" color = "white">关于MomsinLA</button>\n</ion-item>\n</ion-grid> -->\n<ion-item no-lines>\n  <button ion-button block class = "customBtn" (click) = "changeName()" color = "yellow">修改昵称</button>\n</ion-item>\n<ion-item no-lines>\n  <button ion-button block class = "customBtn" (click) = "changePic()" color = "yellow">修改头像</button>\n</ion-item>\n  <ion-item no-lines>\n    <button ion-button block class = "customBtn" (click) = "Logout()" color = "yellow">退出登录</button>\n  </ion-item>\n      \n</ion-content>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_toast_toast__["a" /* ToastProvider */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ })

});
//# sourceMappingURL=0.js.map