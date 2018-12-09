webpackJsonp([9],{

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePicPageModule", function() { return ChangePicPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_pic__ = __webpack_require__(538);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangePicPageModule = /** @class */ (function () {
    function ChangePicPageModule() {
    }
    ChangePicPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__change_pic__["a" /* ChangePicPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change_pic__["a" /* ChangePicPage */]),
            ],
        })
    ], ChangePicPageModule);
    return ChangePicPageModule;
}());

//# sourceMappingURL=change-pic.module.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(90);
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





/**
 * Generated class for the ChangePicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangePicPage = /** @class */ (function () {
    function ChangePicPage(navCtrl, navParams, camera, localStorage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.localStorage = localStorage;
        this.user = {};
    }
    ChangePicPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ChangePicPage');
        this.localStorage.get('user').then(function (data) { return _this.user = data; });
    };
    ChangePicPage.prototype.selectImage = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var option, imageData, base64Image, name, imgUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (index == 0) {
                            option = {
                                quality: 100,
                                destinationType: this.camera.DestinationType.DATA_URL,
                                encodingType: this.camera.EncodingType.JPEG,
                                mediaType: this.camera.MediaType.PICTURE,
                                saveToPhotoAlbum: true,
                                allowEdit: true,
                                targetHeight: 300,
                                targetWidth: 300,
                                correctOrientation: true
                            };
                        }
                        else {
                            option = {
                                quality: 100,
                                destinationType: this.camera.DestinationType.DATA_URL,
                                encodingType: this.camera.EncodingType.JPEG,
                                mediaType: this.camera.MediaType.PICTURE,
                                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                                allowEdit: true,
                                targetWidth: 300,
                                targetHeight: 300,
                                correctOrientation: true
                            };
                        }
                        return [4 /*yield*/, this.camera.getPicture(option)];
                    case 1:
                        imageData = _a.sent();
                        base64Image = 'data:image/jpeg;base64,' + imageData;
                        document.getElementById('protrait').style.backgroundImage = base64Image;
                        name = "/UserImg/" + this.user.userID;
                        return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"])().ref(name).putString(base64Image, 'data_url', { contentType: 'image/png' })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"])().ref(name).getDownloadURL()];
                    case 3:
                        imgUrl = _a.sent();
                        this.localStorage.set('user', {
                            username: this.user.username,
                            userImg: imgUrl,
                            userID: this.user.userID,
                            userStatus: this.user.userStatus
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ChangePicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-pic',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/change-pic/change-pic.html"*/'<!--\n  Generated template for the ChangePicPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>修改头像</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div id="protrait" class="user-img" [style.background-image]="\'url(\'+ this.user.userImg+\')\'"></div>\n<div class="option" (click)="selectImage(0)"><button ion-button>拍照</button></div>\n<div class="option" (click)="selectImage(1)"><button ion-button>从相片选取</button></div>\n</ion-content>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/change-pic/change-pic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ChangePicPage);
    return ChangePicPage;
}());

//# sourceMappingURL=change-pic.js.map

/***/ })

});
//# sourceMappingURL=9.js.map