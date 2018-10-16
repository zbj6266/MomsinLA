webpackJsonp([3],{

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(536);
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

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
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
    function LoginPage(app, navCtrl, navParams, toastCtrl, storage, googlePlus, afAuth) {
        var _this = this;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.googlePlus = googlePlus;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) { return _this.user1 = user; });
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
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().signInAndRetrieveDataWithCredential(__WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth.GoogleAuthProvider.credential(null, res.accessToken)).then(function (suc) {
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _g || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularFireAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(245);




var AngularFireAuth = (function () {
    function AngularFireAuth(options, nameOrConfig, platformId, zone) {
        var _this = this;
        this.zone = zone;
        var scheduler = new __WEBPACK_IMPORTED_MODULE_3_angularfire2__["d" /* FirebaseZoneScheduler */](zone, platformId);
        this.auth = zone.runOutsideAngular(function () {
            var app = Object(__WEBPACK_IMPORTED_MODULE_3_angularfire2__["f" /* _firebaseAppFactory */])(options, nameOrConfig);
            return app.auth();
        });
        this.authState = scheduler.keepUnstableUntilFirst(scheduler.runOutsideAngular(new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (subscriber) {
            var unsubscribe = _this.auth.onAuthStateChanged(subscriber);
            return { unsubscribe: unsubscribe };
        })));
        this.user = scheduler.keepUnstableUntilFirst(scheduler.runOutsideAngular(new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (subscriber) {
            var unsubscribe = _this.auth.onIdTokenChanged(subscriber);
            return { unsubscribe: unsubscribe };
        })));
        this.idToken = this.user.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["switchMap"])(function (user) {
            return user ? Object(__WEBPACK_IMPORTED_MODULE_1_rxjs__["from"])(user.getIdToken()) : Object(__WEBPACK_IMPORTED_MODULE_1_rxjs__["of"])(null);
        }));
        this.idTokenResult = this.user.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["switchMap"])(function (user) {
            return user ? Object(__WEBPACK_IMPORTED_MODULE_1_rxjs__["from"])(user.getIdTokenResult()) : Object(__WEBPACK_IMPORTED_MODULE_1_rxjs__["of"])(null);
        }));
    }
    AngularFireAuth.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    AngularFireAuth.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_3_angularfire2__["c" /* FirebaseOptionsToken */],] }] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* FirebaseNameOrConfigToken */],] }] },
        { type: Object, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* PLATFORM_ID */],] }] },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */] }
    ]; };
    return AngularFireAuth;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_api__ = __webpack_require__(542);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__public_api__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth__ = __webpack_require__(540);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_module__ = __webpack_require__(543);
/* unused harmony namespace reexport */


//# sourceMappingURL=public_api.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AngularFireAuthModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_auth__ = __webpack_require__(544);



var AngularFireAuthModule = (function () {
    function AngularFireAuthModule() {
    }
    AngularFireAuthModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                    providers: [__WEBPACK_IMPORTED_MODULE_1__auth__["a" /* AngularFireAuth */]]
                },] },
    ];
    return AngularFireAuthModule;
}());

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_auth__ = __webpack_require__(485);


/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/***/ })

});
//# sourceMappingURL=3.js.map