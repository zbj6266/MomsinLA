webpackJsonp([10],{

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPageModule", function() { return ActivityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity__ = __webpack_require__(535);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activity__["a" /* ActivityPage */]),
            ],
        })
    ], ActivityPageModule);
    return ActivityPageModule;
}());

//# sourceMappingURL=activity.module.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_toast_toast__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_time_format_time_format__ = __webpack_require__(301);
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
    function ActivityPage(navCtrl, navParams, fsp, iab, storage, toast, timeFormat, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fsp = fsp;
        this.iab = iab;
        this.storage = storage;
        this.toast = toast;
        this.timeFormat = timeFormat;
        this.events = events;
        this.disp = {};
        this.tagsStr = ["户外游乐", "益智教育", "动物植物", "游乐园", "室内游乐", "科普知识", "免费停车", "其他类型"];
        this.tags = [];
        this.comments = [];
        this.saved = false;
        this.liked = false;
        this.numsLike = 0;
        this.infoId = navParams.get("infoId");
    }
    ActivityPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ActivityPage');
        this.loadData(this.infoId);
        this.getComment(this.infoId);
        this.getSaved();
        this.getLiked();
        this.events.subscribe('commentReply', function (res) {
            console.log(res.key);
            console.log(res.reply);
            var reply = res.reply.comment;
            _this.storage.get('user').then(function (data) {
                _this.fsp.getCommentForDailyEvent(_this.infoId + "/" + res.key + "/commentReplies").push({
                    replyCommentContent: reply,
                    replyTime: new Date().getTime(),
                    replyUser: data.username,
                    replyUserPictureURL: data.userImg,
                    replyUserStatus: data.userStatus
                }).then(function () {
                    _this.toast.presentToast("评论成功", 1000, "bottom");
                });
            });
        });
    };
    ActivityPage.prototype.loadData = function (key) {
        var _this = this;
        this.sub = this.fsp.getDailyEventDetail(key).valueChanges().subscribe(function (data) {
            _this.disp = data;
            for (var i = 0; i < data['eventCategory3'].length; i++) {
                if (data['eventCategory3'][i]) {
                    _this.tags.push(_this.tagsStr[i]);
                }
            }
            _this.sub.unsubscribe();
        });
    };
    ActivityPage.prototype.getComment = function (key) {
        var _this = this;
        this.fsp.getCommentForDailyEvent(key).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (data) {
            _this.comments = data;
            for (var i = 0; i < _this.comments.length; i++) {
                // this.comments[i]['datetime'] = new Date(this.comments[i]['commentTimestamp']).toLocaleString();
                _this.comments[i]['datetime'] = _this.timeFormat.differFromNow(_this.comments[i]['commentTimestamp']);
                if (_this.comments[i].hasOwnProperty('commentReplies'))
                    _this.comments[i]['replyKeys'] = Object.keys(_this.comments[i]['commentReplies']);
                else
                    _this.comments[i]['replyKeys'] = [];
                // console.log()
                // for(let j = 0; j < this.comments.commentReplies.length; j++){
                //   console.log(this.comments.commentReplies[j]);
                // }
            }
            _this.comments.sort(function (a, b) {
                return b.commentTimestamp - a.commentTimestamp;
            });
        });
    };
    ActivityPage.prototype.openBrowser = function (url) {
        if (url.trim().substring(0, 7) != "http://" || url.trim().substring(0, 7) != "https://")
            url = "http://" + url;
        console.log(url);
        this.iab.create(url, "_system");
    };
    ActivityPage.prototype.comment = function () {
        var _this = this;
        this.storage.get('user').then(function (data) {
            if (data == null) {
                _this.toast.presentToast("请先登陆", 1000, "middle");
                var nav_1 = _this.navCtrl;
                setTimeout(function () {
                    nav_1.push('LoginPage');
                }, 1000);
            }
            else {
                _this.userInfo = data;
                console.log(_this.userInfo);
                if (_this.commentReply == null || _this.commentReply.trim() == "") {
                    _this.toast.presentToast("请输入评论内容", 1000, "middle");
                    return;
                }
                var item = {
                    commentReplies: [],
                    commentTimestamp: new Date().getTime(),
                    commentUser: {
                        originalPosterStatus: data['userStatus'],
                        originalPosterUserID: data['userID'],
                        originalPosterUserIMG: data['userImg'],
                        originalPosterUsername: data['username'],
                    },
                    dailyEventID: _this.infoId,
                    dailyEventTitle: _this.disp.title,
                    replyContent: _this.commentReply,
                    totalThumbsUp: 0
                };
                _this.commentReply = "";
                _this.fsp.getCommentForDailyEvent(_this.infoId).push(item);
            }
        }).catch(function (e) {
            _this.storage.remove('user');
        });
    };
    ActivityPage.prototype.reply = function (key, user) {
        console.log(key);
        this.toast.presentPrompt(key, user);
    };
    ActivityPage.prototype.getSaved = function () {
        var _this = this;
        this.storage.get('user').then(function (data) {
            if (data != null) {
                _this.fsp.getUserListRef(data['userID'] + '/SavedEvents/').snapshotChanges().subscribe(function (data) {
                    data.forEach(function (item) {
                        if (item.key == _this.infoId) {
                            _this.saved = true;
                            document.getElementById('save').setAttribute("src", "assets/icon/icon_save_click.png");
                            return;
                        }
                    });
                });
            }
        });
    };
    ActivityPage.prototype.getLiked = function () {
        var _this = this;
        this.storage.get('user').then(function (data) {
            if (data != null) {
                _this.fsp.getUserListRef(data['userID'] + '/LikedEvents/').snapshotChanges().subscribe(function (data) {
                    data.forEach(function (item) {
                        if (item.key == _this.infoId) {
                            _this.liked = true;
                            document.getElementById('like').setAttribute("src", "assets/icon/icon_like_click.png");
                            return;
                        }
                    });
                });
            }
        });
    };
    ActivityPage.prototype.save = function () {
        var _this = this;
        this.storage.get('user').then(function (data) {
            if (data == null) {
                _this.toast.presentToast("请先登陆", 1000, "middle");
                var nav_2 = _this.navCtrl;
                setTimeout(function () {
                    nav_2.push('LoginPage');
                }, 1000);
            }
            else {
                if (!_this.saved)
                    _this.fsp.getUserListRef(data['userID'] + '/SavedEvents/').set(_this.infoId, {
                        'eventID': _this.infoId,
                        'haveSaved': true,
                    }).then(function (data) {
                        _this.saved = true;
                        document.getElementById('save').setAttribute("src", "assets/icon/icon_save_click.png");
                        _this.toast.presentToast("收藏成功", 1000, "bottom");
                    });
                else {
                    _this.fsp.getUserListRef(data['userID'] + '/SavedEvents/').remove(_this.infoId).then(function (data) {
                        _this.saved = false;
                        document.getElementById('save').setAttribute("src", "assets/icon/icon_save.png");
                        _this.toast.presentToast("取消收藏", 1000, "bottom");
                    });
                }
            }
        });
    };
    ActivityPage.prototype.like = function () {
        var _this = this;
        this.storage.get('user').then(function (data) {
            if (data == null) {
                _this.toast.presentToast("请先登陆", 1000, "middle");
                var nav_3 = _this.navCtrl;
                setTimeout(function () {
                    nav_3.push('LoginPage');
                }, 1000);
            }
            else {
                if (!_this.liked)
                    _this.fsp.getUserListRef(data['userID'] + '/LikedEvents/').set(_this.infoId, {
                        'eventID': _this.infoId,
                        'haveLiked': true,
                    }).then(function (data) {
                        _this.liked = true;
                        document.getElementById('like').setAttribute("src", "assets/icon/icon_like_click.png");
                        _this.disp["numsLike"] = _this.disp["numsLike"] + 1;
                        _this.fsp.getDailyEventDetailRef(_this.infoId).set('numsLike', _this.disp['numsLike']);
                    });
                else {
                    _this.fsp.getUserListRef(data['userID'] + '/LikedEvents/').remove(_this.infoId).then(function (data) {
                        _this.liked = false;
                        document.getElementById('like').setAttribute("src", "assets/icon/icon_like.png");
                        _this.disp["numsLike"] = _this.disp["numsLike"] - 1;
                        _this.fsp.getDailyEventDetailRef(_this.infoId).set('numsLike', _this.disp['numsLike']);
                    });
                }
            }
        });
    };
    ActivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activity',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/activity/activity.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>活动详情</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="creator" *ngIf="disp.hasOwnProperty(\'creator\')">\n    <img [src]="disp.creator.userImg" width="34" height="34" alt="">\n    <div class="name">{{disp.creator.userName}}</div>\n    <span class="offer">发布</span>\n  </div>\n  <div class="detail">\n    <div class="keyword" >\n      <div class="button-space"><button ion-button *ngFor="let item of tags">{{item}}</button></div>\n    </div>\n    <div class="detail-title">{{disp.title}}</div>\n    <div class="section">\n      <div id="time">活动时间： 7月12日 10:30am</div>\n      <div id="city">城市： {{disp.city}}</div>\n      <div id="address">具体地址： {{disp.address}}</div>\n      <div id="website" (click)="openBrowser(disp.website)">官网：{{disp.website}}</div>\n      <div id="content">{{disp.content}}\n        </div>\n        <img *ngFor="let item of disp.imgs" class="content-img" [src]="item" alt="">\n    </div>\n    <div class="info-user">\n        <div class="info-like">\n          <div (click)="like()"><img id="like" src="assets/imgs/icon_like.png" width="20" height="20"></div>\n          <div class="info-margin">{{disp.numsLike}}</div>\n        </div>\n        <div class="info-collect" (click)="save()">\n          <div><img id="save" src="assets/icon/icon_save.png" width="20" height="20"></div>\n          <div class="info-margin">收藏</div>\n        </div>\n      </div>\n\n      <div class="comments">\n        <div class="comments-title">评论</div>\n        <div *ngIf="comments.length == 0" style="color:#d8d8d8;text-align: center;margin:5px 0">暂无评论</div>\n        \n        <div *ngFor="let item of comments" style="border-bottom:1px solid #d8d8d8">\n          <div class="comment-item" >\n            <div class="user-img">\n              <img [src]="item.commentUser.originalPosterUserIMG" width="32" height="32">\n            </div>\n            <div class="comment-content">\n                <div>{{item.commentUser.originalPosterUsername}}<span>{{item.datetime}}</span></div>\n                <div class="comment-text">{{item.replyContent}}</div>\n            </div>\n            <div class="comment-reply" (click)="reply(item.key, item.commentUser)">\n                回复\n              </div>\n            <div class="comment-like">\n              <img src="assets/imgs/icon_like.png" alt="" width="16" height="16">\n              <div class="num-like">{{item.totalThumbsUp}}</div>\n            </div>\n          </div>\n          <div *ngFor="let key of item.replyKeys" style="margin-left:20px;margin-top:6px;margin-bottom:6px">\n            <div class="comment-item" >\n              \n              <div class="user-img">\n                <img [src]="item.commentReplies[key].replyUserPictureURL" width="32" height="32">\n              </div>\n              <div class="comment-content">\n                  <div>{{item.commentReplies[key].replyUser}}</div>\n                  <div class="comment-text"><span style="color:#d8d8d8">@{{item.commentUser.originalPosterUsername}} </span>{{item.commentReplies[key].replyCommentContent}}</div>\n              </div>\n              <!-- <div class="comment-like">\n                <img src="assets/imgs/icon_like.png" alt="" width="16" height="16">\n                 <div class="num-like">{{item.totalThumbsUp}}</div> \n              </div> -->\n            </div>\n            \n          </div>\n        </div>\n      </div>\n      \n  </div>\n</ion-content>\n<ion-footer no-border>\n  <div style="display: flex">\n  <input type="text" style="flex:1;height:40px;padding-left:6px;border: 1px solid #d8d8d8;margin:2px;border-radius: 2px" placeholder="说两句" [(ngModel)]=\'commentReply\'>\n  <button ion-button (click)="comment()">评论</button>\n</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/activity/activity.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_toast_toast__["a" /* ToastProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_toast_toast__["a" /* ToastProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__providers_time_format_time_format__["a" /* TimeFormatProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_time_format_time_format__["a" /* TimeFormatProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]) === "function" && _h || Object])
    ], ActivityPage);
    return ActivityPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=activity.js.map

/***/ })

});
//# sourceMappingURL=10.js.map