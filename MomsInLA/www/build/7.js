webpackJsonp([7],{

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeaddPageModule", function() { return ExchangeaddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exchangeadd__ = __webpack_require__(540);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExchangeaddPageModule = /** @class */ (function () {
    function ExchangeaddPageModule() {
    }
    ExchangeaddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exchangeadd__["a" /* ExchangeaddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exchangeadd__["a" /* ExchangeaddPage */]),
            ],
        })
    ], ExchangeaddPageModule);
    return ExchangeaddPageModule;
}());

//# sourceMappingURL=exchangeadd.module.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeaddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExchangeaddPage = /** @class */ (function () {
    function ExchangeaddPage(navCtrl, navParams, toast, fsp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.fsp = fsp;
        this.category = 1;
        this.title = "";
        this.price = "";
        this.city = "";
        this.content = "";
    }
    ExchangeaddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExchangeaddPage');
        document.getElementById("title").onfocus = function () {
            document.getElementById("title").className = "ex-title";
        };
        document.getElementById("price").onfocus = function () {
            document.getElementById("price").className = "ex-title";
        };
        document.getElementById("city").onfocus = function () {
            document.getElementById("city").className = "ex-title";
        };
        document.getElementById("content").onfocus = function () {
            document.getElementById("content").className = "ex-content";
        };
    };
    ExchangeaddPage.prototype.selectCategory = function (event) {
        var elements = document.getElementsByClassName('button-select');
        for (var i = 0; i < elements.length; i++) {
            elements[i].className = "button-empty";
        }
        event.target.className = "button-select";
        this.category = event.target.name;
        console.log(this.category);
    };
    ExchangeaddPage.prototype.inputAlert = function (id) {
        console.log(id);
        console.log(document.getElementById(id));
        if (id == "content")
            document.getElementById(id).className = "ex-content alert";
        else
            document.getElementById(id).className = "ex-title alert";
    };
    ExchangeaddPage.prototype.publish = function () {
        console.log(this.title + this.content + this.category + "published");
        if (this.title.trim() == "") {
            this.toast.presentToast("请输入帖子标题", 1500, "bottom");
            this.inputAlert("title");
            return;
        }
        if (this.price.trim() == "") {
            this.toast.presentToast("请输入单价", 1500, "bottom");
            this.inputAlert("price");
            return;
        }
        if (this.city.trim() == "") {
            this.toast.presentToast("请输入城市", 1500, "bottom");
            this.inputAlert("city");
            return;
        }
        if (this.content.trim() == "") {
            this.toast.presentToast("请输入内容", 1500, "bottom");
            this.inputAlert("content");
            return;
        }
        var jsonData = {
            createTime: new Date().getTime(),
            category: this.category,
            title: this.title,
            sale: this.price,
            zipCode: this.city,
            content: this.content,
            imgs: [],
            creator: {
                userID: 1111,
                userName: "MomsinLA",
                userImg: ""
            },
            numRead: 0
        };
        this.fsp.sendExchange(jsonData);
        this.navCtrl.pop();
    };
    ExchangeaddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exchangeadd',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/exchangeadd/exchangeadd.html"*/'<!--\n  Generated template for the ExchangeaddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-toolbar>\n        <div style="display: flex">\n          <div class="nav-button">\n          <button ion-button clear small navPop>  \n            <ion-icon mode="ios" name="ios-arrow-back"></ion-icon> \n          </button>\n          </div>\n          <div class="nav-title">添加帖子</div>\n          <div class="nav-button publish">\n            <button ion-button clear small (click)="publish()" style="color:#e15b00">发布</button>\n          </div>\n        </div>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="ex-text">帖子类别:</div>\n<div style="display: flex">\n  <div class="button-space"><button name=1 class="button-select" (click)=\'selectCategory($event)\'>商品买卖</button></div>\n  <div class="button-space"><button name=2 (click)=\'selectCategory($event)\'>家政服务</button></div>\n  <div class="button-space"><button name=3 (click)=\'selectCategory($event)\'>房屋出租</button></div>\n  <div class="button-space"><button name=4 (click)=\'selectCategory($event)\'>妈妈兼职</button></div>\n</div>\n<div class="title-space"><input id="title" class="ex-title" type="text" placeholder="帖子标题" [(ngModel)]="title"></div>\n<div style="display: flex">\n  <div style="flex:1" class="title-space">\n  <input id="price" class="ex-title" type="text" placeholder="单价" [(ngModel)]="price" >\n  </div>\n  <div style="flex:1" class="title-space">\n    <input id="city" class="ex-title" type="text" placeholder="城市" [(ngModel)]="city">\n  </div>\n</div>\n  \n<div class="title-space">\n  <textarea id="content" class="ex-content" cols="30" rows="15" placeholder="请输入帖子文本" [(ngModel)]="content"></textarea>\n</div>\n<div class="ex-text" style="margin-top: 20px">附图</div>\n</ion-content>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/exchangeadd/exchangeadd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], ExchangeaddPage);
    return ExchangeaddPage;
}());

//# sourceMappingURL=exchangeadd.js.map

/***/ })

});
//# sourceMappingURL=7.js.map