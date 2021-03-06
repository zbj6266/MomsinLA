webpackJsonp([3],{

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(548);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_firebase_service_firebase_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_toast_toast__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var LoginPage = /** @class */ (function () {
    function LoginPage(app, navCtrl, navParams, storage, googlePlus, afAuth, events, fsp, toast) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.googlePlus = googlePlus;
        this.afAuth = afAuth;
        this.events = events;
        this.fsp = fsp;
        this.toast = toast;
        this.user = {};
        this.googleUser = this.afAuth.authState;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (user.email == null || user.password == null) {
                            this.toast.presentToast("请输入邮箱/密码", 1000, "bottom");
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email.trim(), user.password)];
                    case 2:
                        result = _a.sent();
                        console.log(result.user.uid);
                        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("/UsersAndAdministrators/" + result.user.uid).once('value').then(function (snapshot) {
                            var data = snapshot.val();
                            var user = {
                                username: data['displayName'],
                                userImg: data['photoURL'],
                                userID: data['userID'],
                                userStatus: data['userStatus']
                            };
                            _this.storage.set('user', user);
                            _this.navCtrl.pop();
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        if (e_1.code == "auth/invalid-email")
                            this.toast.presentToast('请输入正确的邮箱格式', 1000, "bottom");
                        else {
                            console.log(e_1);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.loginGoogle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var login, result_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.googlePlus.login({
                                'webClientID': '240243369411-uo2aj7sobr4bbddosb6taejqa7k4j1qj.apps.googleusercontent.com',
                                //apple 'webClientID':'240243369411-3dihv28en6u117pbskoinbejs38e6k19.apps.googleusercontent.com',
                                // 240243369411-uo2aj7sobr4bbddosb6taejqa7k4j1qj.apps.googleusercontent.com
                                'offline': true,
                                'scopes': 'profile email'
                            })];
                    case 1:
                        login = _a.sent();
                        return [4 /*yield*/, this.afAuth.auth.signInAndRetrieveDataWithCredential(__WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth.GoogleAuthProvider.credential(null, login.accessToken))];
                    case 2:
                        result_1 = _a.sent();
                        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref("/UsersAndAdministrators/" + result_1.user.uid).once('value').then(function (snapshot) {
                            if (snapshot.exists && snapshot.val() == null) {
                                _this.fsp.getUserRef(result_1.user.uid).set({
                                    LikedEvents: [],
                                    displayName: result_1.user.displayName,
                                    email: result_1.user.email,
                                    photoURL: result_1.user.photoURL,
                                    registrationDate: new Date().getTime(),
                                    userID: result_1.user.uid,
                                    userStatus: "Basic"
                                });
                                var user = {
                                    username: result_1.user.displayName,
                                    userImg: result_1.user.photoURL,
                                    userID: result_1.user.uid,
                                    userStatus: "Basic"
                                };
                                _this.storage.set('user', user);
                                _this.events.publish("user", user);
                                _this.navCtrl.pop();
                            }
                            else {
                                var data = snapshot.val();
                                var user = {
                                    username: data['displayName'],
                                    userImg: data['photoURL'],
                                    userID: data['userID'],
                                    userStatus: data['userStatus']
                                };
                                _this.storage.set('user', user);
                                _this.navCtrl.pop();
                            }
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        alert(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push('RegisterPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/login/login.html"*/'<ion-header>\n  <ion-toolbar>\n    <div style="display: flex">\n      <div class="nav-button">\n      <button ion-button clear small navPop>  \n        <ion-icon mode="ios" name="ios-arrow-back"></ion-icon> \n      </button>\n      </div>\n      <div class="nav-title">登录</div>\n      <div class="nav-button">\n        <button ion-button clear small (click)="register()">快速注册</button>\n      </div>\n    </div>  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>邮箱</ion-label>\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>密码</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n\n\n	<div padding>\n  <button block ion-button (click) = "login(user)" item-left>登录</button>\n  </div>\n  \n  <div padding>\n    <button block ion-button (click)=\'loginGoogle()\' item-left>Google账户登录</button>\n    </div>\n  <!-- <div *ngIf="(googleUser | async) || {} as googleUser">\n    <div *ngIf="googleUser.uid">{{googleUser.uid}}</div>\n  </div> -->\n  <!-- <button ion-button (click)=\'loginGoogle()\'>\n    <ion-icon name=\'logo-googleplus\' block outline></ion-icon>\n  </button>\n<ion-title class = "otherlogin" style = "padding-top: 20px" >或用以下账号登录</ion-title> -->\n\n  <!-- <ion-footer no-border>\n  <div class="column">\n    <ion-grid>\n      <ion-item style = "padding-bottom: 30px">\n      <ion-row>\n        <ion-col text-center (click) = "toInformation(1)">\n          <img src="imgs/weibo.png" height="32" width="32" />\n          <div class="font-content">新浪微博</div>\n        </ion-col>\n     \n          <ion-col text-center (click) = "toInformation(2)">\n          <img src="imgs/weixin.png" height="32" width="32" />\n          <div class="font-content">微信</div>\n        </ion-col>\n          <ion-col text-center (click) = "toInformation(2)">\n          <img src="imgs/facebook.png" height="32" width="32" />\n          <div class="font-content">Facebook</div>\n        </ion-col>\n    </ion-row>\n  </ion-item>\n  </ion-grid>\n</div>\n</ion-footer> -->\n</ion-content>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_toast_toast__["a" /* ToastProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=3.js.map