webpackJsonp([3],{

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(535);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(app, navCtrl, navParams, toastCtrl, storage, googlePlus) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.googlePlus = googlePlus;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 1000
        });
        toast.present();
    };
    LoginPage.prototype.loginGoogle = function () {
        this.googlePlus.login({
            // 'webClientID':'240243369411-uo2aj7sobr4bbddosb6taejqa7k4j1qj.apps.googleusercontent.com',
            'webClientID': '240243369411-3dihv28en6u117pbskoinbejs38e6k19.apps.googleusercontent.com',
            'offline': true,
        }).then(function (res) {
            console.log(res);
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInAndRetrieveDataWithCredential(__WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.GoogleAuthProvider.credential(null, res.accessToken)).then(function (suc) {
                console.log(suc);
                alert(suc);
            }).catch(function (err) { console.log(err); alert(err); });
        });
    };
    LoginPage.prototype.toSignup = function () {
        this.navCtrl.push('RegisterPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <div style="display: flex">\n      <div class="nav-button">\n      <button ion-button clear small navPop>  \n        <ion-icon mode="ios" name="ios-arrow-back"></ion-icon> \n      </button>\n      </div>\n      <div class="nav-title">登陆</div>\n      <div class="nav-button">\n        <button ion-button clear small (click)="toSignup()">快速注册</button>\n      </div>\n    </div>\n      \n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n\n  <ion-item>\n    <ion-label floating>用户名</ion-label>\n    <ion-input onfocus="this.placeholder = \'\' " type="text" onblur="this.placeholder = \'用户名\'" #username></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>密码</ion-label>\n    <ion-input onfocus="this.placeholder = \'\' " type="password" onblur="this.placeholder = \'密码\'" #password></ion-input>\n  </ion-item>\n\n	</ion-list>\n\n	<div padding>\n  <button block ion-button (click) = "signInUser()" item-left>登录</button>\n	</div>\n\n  <button ion-button (click)=\'loginGoogle()\'>\n    <ion-icon name=\'logo-googleplus\' block outline></ion-icon>\n  </button>\n<ion-title class = "otherlogin" style = "padding-top: 20px" >或用以下账号登录</ion-title>\n\n  <ion-footer no-border>\n  <div class="column">\n    <ion-grid>\n      <ion-item style = "padding-bottom: 30px">\n      <ion-row>\n        <ion-col text-center (click) = "toInformation(1)">\n          <img src="imgs/weibo.png" height="32" width="32" />\n          <div class="font-content">新浪微博</div>\n        </ion-col>\n     \n          <ion-col text-center (click) = "toInformation(2)">\n          <img src="imgs/weixin.png" height="32" width="32" />\n          <div class="font-content">微信</div>\n        </ion-col>\n          <ion-col text-center (click) = "toInformation(2)">\n          <img src="imgs/facebook.png" height="32" width="32" />\n          <div class="font-content">Facebook</div>\n        </ion-col>\n    </ion-row>\n  </ion-item>\n  </ion-grid>\n</div>\n</ion-footer>\n</ion-content>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=3.js.map