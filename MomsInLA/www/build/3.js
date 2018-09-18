webpackJsonp([3],{

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(524);
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

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(152);
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
    function LoginPage(app, navCtrl, navParams, toastCtrl, storage) {
        var _this = this;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.Login = function (u, p) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, tim.Logout()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, tim.Login({
                                email: u,
                                password: p
                            })];
                    case 2:
                        _a.sent();
                        tim.X('user').Get({ query: { email: u } }).then(function (data) {
                            _this.storage.set('userId', data.data[0]._id);
                            _this.navCtrl.pop();
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.presentToast('login fail');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
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
    LoginPage.prototype.signInUser = function () {
        this.Login(this.user.value, this.password.value);
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <div style="display: flex">\n      <div class="nav-button">\n      <button ion-button clear small navPop>  \n        <ion-icon mode="ios" name="ios-arrow-back"></ion-icon> \n      </button>\n      </div>\n      <div class="nav-title">登陆</div>\n      <div class="nav-button">\n        <button ion-button clear small (click)="toSignup()">快速注册</button>\n      </div>\n    </div>\n      \n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list>\n\n  <ion-item>\n    <ion-label floating>用户名</ion-label>\n    <ion-input onfocus="this.placeholder = \'\' " type="text" onblur="this.placeholder = \'用户名\'" #username></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>密码</ion-label>\n    <ion-input onfocus="this.placeholder = \'\' " type="password" onblur="this.placeholder = \'密码\'" #password></ion-input>\n  </ion-item>\n\n	</ion-list>\n\n	<div padding>\n  <button block ion-button (click) = "signInUser()" item-left>登录</button>\n	</div>\n\n<ion-title class = "otherlogin" style = "padding-top: 20px" >或用以下账号登录</ion-title>\n\n  <ion-footer no-border>\n  <div class="column">\n    <ion-grid>\n      <ion-item style = "padding-bottom: 30px">\n      <ion-row>\n        <ion-col text-center (click) = "toInformation(1)">\n          <img src="imgs/weibo.png" height="32" width="32" />\n          <div class="font-content">新浪微博</div>\n        </ion-col>\n     \n          <ion-col text-center (click) = "toInformation(2)">\n          <img src="imgs/weixin.png" height="32" width="32" />\n          <div class="font-content">微信</div>\n        </ion-col>\n          <ion-col text-center (click) = "toInformation(2)">\n          <img src="imgs/facebook.png" height="32" width="32" />\n          <div class="font-content">Facebook</div>\n        </ion-col>\n    </ion-row>\n  </ion-item>\n  </ion-grid>\n</div>\n</ion-footer>\n</ion-content>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=3.js.map