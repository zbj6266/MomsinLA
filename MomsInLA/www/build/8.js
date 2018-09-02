webpackJsonp([8],{

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionPageModule", function() { return CollectionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collection__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CollectionPageModule = /** @class */ (function () {
    function CollectionPageModule() {
    }
    CollectionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__collection__["a" /* CollectionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__collection__["a" /* CollectionPage */]),
            ],
        })
    ], CollectionPageModule);
    return CollectionPageModule;
}());

//# sourceMappingURL=collection.module.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
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
 * Generated class for the CollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CollectionPage = /** @class */ (function () {
    function CollectionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.collects = [{ name: "活动", index: 0 }, { name: "讲座", index: 1 }, { name: "攻略", index: 2 }];
        this.collect = "活动";
        this.tables = ["collects"];
        this.category = navParams.get("item");
        var arr = ["dfs", "qqq", "ttt"];
        console.log(arr);
        delete arr[2];
        console.log(arr);
        console.log(arr[3]);
    }
    CollectionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CollectionPage');
        // tim.X(this.tables[this.category-1]).Get({query:{category:0}}).then(data=>{
        //   this.disp =data.data;
        //   console.log(this.disp);
        // })
    };
    CollectionPage.prototype.selectCategory = function (event) {
        var elements = document.getElementsByClassName('button-select');
        for (var i = 0; i < elements.length; i++) {
            elements[i].className = "button-empty";
        }
        event.target.className = "button-select";
        this.category = event.target.name;
        console.log(this.category);
    };
    CollectionPage.prototype.loadData = function (index) {
        // tim.X(this.tables[this.category-1]).Get({query:{category:index}}).then(data=>{
        //   console.log(data);
        //   this.disp =data.data;
        // })
    };
    CollectionPage.prototype.openDetail = function (id) {
        console.log(id);
        // tim.X(this.tables[this.category-1]).Set(id, {$inc:{numsRead:1}}).then(
        //   data=>this.navCtrl.push('InfoDetailPage',{infoId: id, table: this.tables[this.category-1]})
        // );
    };
    CollectionPage.prototype.openAdd = function () {
        this.navCtrl.push('ExchangeaddPage');
    };
    CollectionPage.prototype.openExchange = function (id) {
        this.navCtrl.push('ExchangedetailPage');
    };
    CollectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-collection',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/collection/collection.html"*/'<!--\n  Generated template for the CollectionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n        <div style="display: flex">\n          <div class="nav-button">\n          <button ion-button clear small navPop>  \n            <ion-icon mode="ios" name="ios-arrow-back"></ion-icon> \n          </button>\n          </div>\n          <div class="nav-title">收藏</div>\n          \n        </div>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n<div style="display: flex">\n  <div class="button-space"><button  name="活动" class="button-select" (click)=\'selectCategory($event)\'>活动</button></div>\n  <div class="button-space"><button  name="讲座" (click)=\'selectCategory($event)\'>讲座</button></div>\n  <div class="button-space"><button  name="攻略" (click)=\'selectCategory($event)\'>攻略</button></div>\n  \n</div>\n\n\n\n\n\n\n\n  <!-- information start -->\n \n  <div class="title">三星电视 8成新 二手出售</div>\n  <div class="content-space">\n    <img src="assets/imgs/logo.png" width="100%">\n    <div class="content">2015年购入的55寸电视，型号：XXXX。现以200刀卖出，价格可刀可议。手机：626-420-2054/ 微信：XXXX\n    </div>\n    <div class="date">截止日期：7/8/2018<br>\n    阅读量 8080</div>\n  </div>\n  <div class="share-space">\n        <div class="info-share">\n          <div class="share-title">分享</div>\n          <div class="share-content">\n            <div class="sina">\n              <div><img src="assets/imgs/weibo.png"></div>\n              <div class="share-content-title">新浪微博</div>\n            </div>\n            <div class="wechat">\n              <div><img src="assets/imgs/weixin.png" alt=""></div>\n              <div class="share-content-title">微信</div>\n            </div>\n            <div class="facebook">\n                <div><img src="assets/imgs/facebook.png" alt=""></div>\n                <div class="share-content-title">Facebook</div>  \n            </div>\n          </div>\n        </div>\n  </div>\n  \n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/collection/collection.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CollectionPage);
    return CollectionPage;
}());

//# sourceMappingURL=collection.js.map

/***/ })

});
//# sourceMappingURL=8.js.map