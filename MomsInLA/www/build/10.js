webpackJsonp([10],{

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPageModule", function() { return ActivityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity__ = __webpack_require__(534);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activity__["a" /* ActivityPage */]),
            ],
        })
    ], ActivityPageModule);
    return ActivityPageModule;
}());

//# sourceMappingURL=activity.module.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(26);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActivityPage = /** @class */ (function () {
    function ActivityPage(navCtrl, navParams, fsp, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fsp = fsp;
        this.iab = iab;
        this.disp = {};
        this.tagsStr = ["户外游乐", "益智教育", "动物植物", "游乐园", "室内游乐", "科普知识", "免费停车", "其他类型"];
        this.tags = [];
        this.comments = [];
        this.infoId = navParams.get("infoId");
    }
    ActivityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivityPage');
        this.loadData(this.infoId);
        this.getComment(this.infoId);
    };
    ActivityPage.prototype.loadData = function (key) {
        var _this = this;
        this.fsp.getDailyEventDetail(key).valueChanges().subscribe(function (data) {
            _this.disp = data;
            for (var i = 0; i < data['eventCategory3'].length; i++) {
                if (data['eventCategory3'][i]) {
                    _this.tags.push(_this.tagsStr[i]);
                }
            }
        });
    };
    ActivityPage.prototype.getComment = function (key) {
        var _this = this;
        this.fsp.getCommentForDailyEvent(key).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (data) {
            console.log(data);
            _this.comments = data;
            console.log(_this.comments);
            for (var i = 0; i < _this.comments.length; i++) {
                _this.comments[i]['datetime'] = new Date(_this.comments[i]['commentTimestamp']).toLocaleString();
            }
        });
    };
    ActivityPage.prototype.openBrowser = function (url) {
        if (url.trim().substring(0, 7) != "http://")
            url = "http://" + url;
        console.log(url);
        this.iab.create(url, "_system");
    };
    ActivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activity',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/activity/activity.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>活动详情</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="creator" *ngIf="disp.hasOwnProperty(\'creator\')">\n    <img [src]="disp.creator.userImg" width="34" height="34" alt="">\n    <div class="name">{{disp.creator.userName}}</div>\n    <span class="offer">发布</span>\n  </div>\n  <div class="detail">\n    <div class="keyword" >\n      <div class="button-space"><button ion-button *ngFor="let item of tags">{{item}}</button></div>\n    </div>\n    <div class="detail-title">{{disp.title}}</div>\n    <div class="section">\n      <div id="time">活动时间： 7月12日 10:30am</div>\n      <div id="city">城市： {{disp.city}}</div>\n      <div id="address">具体地址： {{disp.address}}</div>\n      <div id="website" (click)="openBrowser(disp.website)">官网：{{disp.website}}</div>\n      <div id="content">{{disp.content}}\n        </div>\n        <img *ngFor="let item of disp.imgs" class="content-img" [src]="item" alt="">\n    </div>\n    <div class="info-user">\n        <div class="info-like">\n          <div (click)="like()"><img id="like" src="assets/imgs/icon_like.png" width="20" height="20"></div>\n          <div class="info-margin">点赞</div>\n        </div>\n        <div class="info-collect">\n          <div><img src="assets/imgs/icon_collect.png" width="20" height="20"></div>\n          <div class="info-margin">收藏</div>\n        </div>\n      </div>\n\n      <div class="comments">\n        <div class="comments-title">评论</div>\n        <div *ngIf="comments.length == 0" style="color:#d8d8d8;text-align: center;margin:5px 0">暂无评论</div>\n        <ion-item *ngFor="let item of comments">\n          <div class="comment-item" >\n            <div class="user-img">\n              <img [src]="item.commentUser.originalPosterUserIMG" width="32" height="32">\n            </div>\n            <div class="comment-content">\n                <div>{{item.commentUser.originalPosterUsername}}<span>{{item.datetime}}</span></div>\n                <div class="comment-text">{{item.replyContent}}</div>\n            </div>\n            <div class="comment-like">\n              <img src="assets/imgs/icon_like.png" alt="" width="16" height="16">\n              <div class="num-like">{{item.totalThumbsUp}}</div>\n            </div>\n          </div>\n        </ion-item>\n      </div>\n      \n  </div>\n</ion-content>\n<ion-footer no-border>\n  <div style="display: flex">\n  <input type="text" style="flex:1;height:40px;padding-left:6px;border: 1px solid #d8d8d8;margin:2px;border-radius: 2px" placeholder="说两句">\n  <button ion-button>评论</button>\n</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/activity/activity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], ActivityPage);
    return ActivityPage;
}());

//# sourceMappingURL=activity.js.map

/***/ })

});
//# sourceMappingURL=10.js.map