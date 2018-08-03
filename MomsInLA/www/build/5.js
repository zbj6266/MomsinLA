webpackJsonp([5],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoDetailPageModule", function() { return InfoDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_detail__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfoDetailPageModule = /** @class */ (function () {
    function InfoDetailPageModule() {
    }
    InfoDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__info_detail__["a" /* InfoDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info_detail__["a" /* InfoDetailPage */]),
            ],
        })
    ], InfoDetailPageModule);
    return InfoDetailPageModule;
}());

//# sourceMappingURL=info-detail.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoDetailPage = /** @class */ (function () {
    function InfoDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.infoId = navParams.get("infoId");
    }
    InfoDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoDetailPage');
        tim.X('info').Get({ query: { _id: this.infoId } }).then(function (data) {
            return console.log(data);
        });
    };
    InfoDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info-detail',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/info-detail/info-detail.html"*/'<!--\n  Generated template for the InfoDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar center>\n    <ion-title>专家讲座</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <div class="info-img">\n        <img src="assets/imgs/logo.png"/>\n    </div>\n    <ion-card-content>\n      <ion-card-title>\n          讲师介绍：<br>\n          钢琴老师 Yvonne He\n      </ion-card-title>\n      <p>\n          2003年毕业于西安音乐学院钢琴系。\n          2004年赴乌克兰国立音乐学院深造音乐教育，同时追随乌克兰柴可夫斯基音乐学院钢琴系教授，国家功勋演奏家--方.杰娃.弗拉基米诺夫娜教授学习钢琴演奏。\n          2016年来到美国，继续从事钢琴教育10多年教育经验，培养的学生中多名学生得到国内、外音乐学院教授高度认可并以优秀成绩考入音乐学院。\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <div class="info-title">&lt;Nice to meet you, Piano!&gt;</div>\n  <ion-card>\n    <ion-card-content class="info-content">\n        -大家好，我是yvonne.何老师，很高兴能受到群主的邀请，来和大家一起分享钢琴教育的一些专业知识和我多年来的一些教育心得。因为考虑到初学钢琴孩子的家长们和一些正在打算让孩子进入钢琴学习的学生家长们，会有更多的顾虑和疑问，所以今天我们主要围绕初学者的家长们聚焦的一些问题来和大家聊聊。\n\n        -首先呢，我们一谈到孩子学钢琴，就会想到买琴了，关于钢琴的品牌选择比较多，我们今天在这里就不一一说了，(内容省略，无限制文字拦）。。。\n        -但对于刚开始坐不住的琴童，可以用分割时间来培养练琴的习惯。比如从每次15到20分钟开始，要循序渐进地逐步增加时间的长度，具体的安排和时间设置，可以让孩子的钢琴老师给些建议。\n        -好了，由于时间关系，我们今天先谈这几个方面，下面的时间留给各位妈妈们，看看还有什么想了解或者不太明白的问题，欢迎带图和带视频提问。      \n    </ion-card-content>\n  </ion-card>\n  <div class="option-title">Q&A</div>\n  <ion-card>\n    <ion-card-content class="info-content">\n        1. 请问小朋友一般建议几岁开始学钢琴？\n        小朋友学钢琴的话，五岁左右，比较好，不要太早。为什么呢，因为太小的孩子的小肌肉啊，身体协调性的发育啊，包括骨骼关节还没有完全发育成熟，再加上四五岁的时候有一些孩子的注意力会比较弱，有的孩子理解力也不够。那过早练琴呢，孩子在不能很好理解和正确执行老师所教授的情况下练习就可能影响手部关节，严重的还会使得手指骨骼变形。\n\n        （剩余内容同省略。。无限制文字栏）\n    </ion-card-content>\n  </ion-card>\n  <div class="info-user">\n    <div class="info-like">\n      <div (click)="like()"><img id="like" src="assets/imgs/icon_like.png" width="20" height="20"></div>\n      <div class="info-margin">点赞</div>\n    </div>\n    <div class="info-collect">\n      <div><img src="assets/imgs/icon_collect.png" width="20" height="20"></div>\n      <div class="info-margin">收藏</div>\n    </div>\n    <div class="info-read">阅读 408</div>\n  </div>\n  <div class="info-share">\n    <div class="share-title">分享</div>\n    <div class="share-content">\n      <div class="sina">\n        <div><img src="assets/imgs/weibo.png"></div>\n        <div class="share-content-title">新浪微博</div>\n      </div>\n      <div class="wechat">\n        <div><img src="assets/imgs/weixin.png" alt=""></div>\n        <div class="share-content-title">微信</div>\n      </div>\n      <div class="facebook">\n          <div><img src="assets/imgs/facebook.png" alt=""></div>\n          <div class="share-content-title">Facebook</div>  \n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/info-detail/info-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], InfoDetailPage);
    return InfoDetailPage;
}());

//# sourceMappingURL=info-detail.js.map

/***/ })

});
//# sourceMappingURL=5.js.map