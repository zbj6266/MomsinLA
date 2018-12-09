webpackJsonp([11],{

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPageModule", function() { return ActivityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity__ = __webpack_require__(536);
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

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_time_format_time_format__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
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









var ActivityPage = /** @class */ (function () {
    function ActivityPage(navCtrl, navParams, fsp, iab, storage, toast, timeFormat, events, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fsp = fsp;
        this.iab = iab;
        this.storage = storage;
        this.toast = toast;
        this.timeFormat = timeFormat;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.disp = {};
        this.tagsStr = ["户外游乐", "益智教育", "动物植物", "游乐园", "室内游乐", "科普知识", "免费停车", "其他类型"];
        this.tags = [];
        this.comments = [];
        this.saved = false;
        this.liked = false;
        this.numsLike = 0;
        this.activityDate = [];
        this.infoId = navParams.get("infoId");
    }
    ActivityPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('user').then(function (data) {
            _this.userInfo = data;
            _this.loadData(_this.infoId);
            _this.getComment(_this.infoId);
            _this.getSaved();
            _this.getLiked();
        });
        // this.events.subscribe('activity_reply',(key, data)=>{
        //   let comment = data['\bcomment'];
        //   this.storage.get('user').then(data=>{
        //     let reply = {
        //       replyCommentContent: comment,
        //       replyTime: new Date().getTime(),
        //       replyUser: data.username,
        //       replyUserPictureURL: data.userImg,
        //       replyUserStatus: data.userStatus
        //     }
        //     console.log("111"+this.infoId);
        //     console.log(`${this.infoId}/${key}/commentReplies`);
        //     this.fsp.getCommentForDailyEvent(`${this.infoId}/${key}/commentReplies`).push(reply).then(()=>{
        //       this.toast.presentToast("评论成功", 1000, "bottom");
        //     });
        //   })
        // })
    };
    ActivityPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('user').then(function (data) {
            _this.userInfo = data;
            _this.getSaved();
            _this.getLiked();
            _this.getCommentLike();
        });
    };
    ActivityPage.prototype.ionViewWillLeave = function () {
        console.log(this.saved);
        if (!this.saved) {
            this.events.publish('refreshCollection');
        }
    };
    ActivityPage.prototype.jumpToLogin = function (msg, time, location) {
        this.toast.presentToast(msg, time, location);
        var nav = this.navCtrl;
        setTimeout(function () {
            nav.push('LoginPage');
        }, time);
    };
    ActivityPage.prototype.loadData = function (key) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7_firebase_app___default.a.database().ref("/DailyEvents/" + key).once('value').then(function (snapshot) {
            _this.disp = snapshot.val();
            _this.fsp.getDailyEventDetail(key + '/numsRead').set(_this.disp['numsRead'] + 1);
            _this.disp['numsRead'] = _this.disp['numsRead'] + 1;
            console.log(snapshot.val());
            for (var i = 0; i < _this.disp['eventCategory3'].length; i++) {
                if (_this.disp['eventCategory3'][i]) {
                    _this.tags.push(_this.tagsStr[i]);
                }
            }
            for (var j = 0; j < _this.disp['activityDate'].length; j++) {
                var time = _this.timeFormat.eventTimeFormat(_this.disp['activityDate'][j]['from'], _this.disp['activityDate'][j]['to']);
                _this.activityDate.push(time);
            }
        });
    };
    ActivityPage.prototype.getComment = function (key) {
        var _this = this;
        // this.fsp.getCommentForDailyEvent(key).snapshotChanges().pipe(
        //   map(changes=>{
        //     return changes.map(c=>({
        //       key: c.payload.key, ...c.payload.val()
        //     }))
        //   })
        __WEBPACK_IMPORTED_MODULE_7_firebase_app___default.a.database().ref("/Comments/" + key).once('value').then(function (snapshot) {
            // this.comments = snapshot.val();
            console.log(_this.comments);
            var idx = 0;
            snapshot.forEach(function (data) {
                _this.comments[idx] = data.val();
                _this.comments[idx]['key'] = data.key;
                idx += 1;
            });
            console.log(_this.comments);
            for (var i = 0; i < _this.comments.length; i++) {
                _this.comments[i]['datetime'] = _this.timeFormat.differFromNow(_this.comments[i]['commentTimestamp']);
                if (_this.comments[i].hasOwnProperty('commentReplies')) {
                    _this.comments[i]['replyKeys'] = Object.keys(_this.comments[i]['commentReplies']);
                    console.log(_this.comments[i]['replyKeys']);
                }
                else
                    _this.comments[i]['replyKeys'] = [];
            }
            _this.getCommentLike();
            _this.comments.sort(function (a, b) {
                return b.commentTimestamp - a.commentTimestamp;
            });
            // sub.unsubscribe();
        });
    };
    ActivityPage.prototype.openBrowser = function (url) {
        if (url.trim().substring(0, 7) != "http://" || url.trim().substring(0, 7) != "https://")
            url = "http://" + url;
        console.log(url);
        this.iab.create(url, "_system");
    };
    ActivityPage.prototype.comment = function () {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.userInfo == null)) return [3 /*break*/, 1];
                        this.jumpToLogin("请先登录", 1000, "middle");
                        return [3 /*break*/, 3];
                    case 1:
                        console.log(this.userInfo);
                        if (this.commentReply == null || this.commentReply.trim() == "") {
                            this.toast.presentToast("请输入评论内容", 1000, "middle");
                            return [2 /*return*/];
                        }
                        item = {
                            commentReplies: [],
                            commentTimestamp: new Date().getTime(),
                            commentUser: {
                                originalPosterStatus: this.userInfo['userStatus'],
                                originalPosterUserID: this.userInfo['userID'],
                                originalPosterUserIMG: this.userInfo['userImg'],
                                originalPosterUsername: this.userInfo['username'],
                            },
                            dailyEventID: this.infoId,
                            dailyEventTitle: this.disp.title,
                            replyContent: this.commentReply,
                            totalThumbsUp: 0
                        };
                        this.commentReply = "";
                        return [4 /*yield*/, this.fsp.getCommentForDailyEvent(this.infoId).push(item)];
                    case 2:
                        _a.sent();
                        this.getComment(this.infoId);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ActivityPage.prototype.reply = function (key, user) {
        console.log(key);
        if (this.userInfo == null) {
            this.jumpToLogin("请先登录", 1000, "middle");
        }
        else {
            this.presentPrompt(key, user);
        }
    };
    ActivityPage.prototype.presentPrompt = function (key, usr) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '回复',
            inputs: [
                {
                    name: 'comment',
                    placeholder: '@' + usr.originalPosterUsername,
                }
            ],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '提交',
                    handler: function (data) {
                        var reply = {
                            replyCommentContent: data['\bcomment'],
                            replyTime: new Date().getTime(),
                            replyUser: _this.userInfo.username,
                            replyUserPictureURL: _this.userInfo.userImg,
                            replyUserStatus: _this.userInfo.userStatus
                        };
                        console.log("111" + _this.infoId);
                        console.log(_this.infoId + "/" + key + "/commentReplies");
                        _this.fsp.getCommentForDailyEvent(_this.infoId + "/" + key + "/commentReplies").push(reply).then(function () {
                            _this.toast.presentToast("评论成功", 1000, "bottom");
                            _this.getComment(_this.infoId);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ActivityPage.prototype.getSaved = function () {
        var _this = this;
        if (this.userInfo != null) {
            __WEBPACK_IMPORTED_MODULE_7_firebase_app___default.a.database().ref("/UsersAndAdministrators/" + this.userInfo.userID + "/SavedEvents/").once('value').then(function (snapshot) {
                snapshot.forEach(function (item) {
                    if (item.key == _this.infoId) {
                        _this.saved = true;
                        document.getElementById('save').setAttribute("src", "assets/icon/icon_save_click.png");
                        return;
                    }
                });
            });
        }
    };
    ActivityPage.prototype.getLiked = function () {
        var _this = this;
        if (this.userInfo != null) {
            __WEBPACK_IMPORTED_MODULE_7_firebase_app___default.a.database().ref("/UsersAndAdministrators/" + this.userInfo.userID + "/ikedEvents/").once('value').then(function (snapshot) {
                snapshot.forEach(function (item) {
                    if (item.key == _this.infoId) {
                        _this.liked = true;
                        document.getElementById('like').setAttribute("src", "assets/icon/icon_like_click.png");
                        return;
                    }
                });
            });
        }
    };
    ActivityPage.prototype.save = function () {
        var _this = this;
        if (this.userInfo == null) {
            this.jumpToLogin("请先登录", 1000, "middle");
        }
        else {
            if (!this.saved)
                this.fsp.getUserListRef(this.userInfo['userID'] + '/SavedEvents/').set(this.infoId, {
                    'eventID': this.infoId,
                    'haveISaved': true,
                }).then(function (data) {
                    _this.saved = true;
                    document.getElementById('save').setAttribute("src", "assets/icon/icon_save_click.png");
                    _this.toast.presentToast("收藏成功", 1000, "bottom");
                });
            else {
                this.fsp.getUserListRef(this.userInfo['userID'] + '/SavedEvents/').remove(this.infoId).then(function (data) {
                    _this.saved = false;
                    document.getElementById('save').setAttribute("src", "assets/icon/icon_save.png");
                    _this.toast.presentToast("取消收藏", 1000, "bottom");
                });
            }
        }
    };
    ActivityPage.prototype.like = function () {
        var _this = this;
        if (this.userInfo == null) {
            this.jumpToLogin("请先登录", 1000, "middle");
        }
        else {
            if (!this.liked)
                this.fsp.getUserListRef(this.userInfo['userID'] + '/LikedEvents/').set(this.infoId, {
                    'eventID': this.infoId,
                    'haveILiked': true,
                }).then(function (data) {
                    _this.liked = true;
                    document.getElementById('like').setAttribute("src", "assets/icon/icon_like_click.png");
                    _this.disp["numsLike"] = _this.disp["numsLike"] + 1;
                    _this.fsp.getDailyEventDetailRef(_this.infoId).set('numsLike', _this.disp['numsLike']);
                });
            else {
                this.fsp.getUserListRef(this.userInfo['userID'] + '/LikedEvents/').remove(this.infoId).then(function (data) {
                    _this.liked = false;
                    document.getElementById('like').setAttribute("src", "assets/icon/icon_like.png");
                    _this.disp["numsLike"] = _this.disp["numsLike"] - 1;
                    _this.fsp.getDailyEventDetailRef(_this.infoId).set('numsLike', _this.disp['numsLike']);
                });
            }
        }
    };
    ActivityPage.prototype.commentLike = function (key) {
        var infoId = this.infoId;
        if (this.userInfo == null) {
            this.jumpToLogin("请先登录", 1000, "middle");
        }
        else {
            var commentLikeRef_1 = __WEBPACK_IMPORTED_MODULE_7_firebase_app___default.a.database().ref("/UsersAndAdministrators/" + this.userInfo.userID + "/ThumbsUp/" + infoId + "/" + key);
            commentLikeRef_1.once('value').then(function (snapshot) {
                if (snapshot.val() != null) {
                    document.getElementById(key).setAttribute("src", "assets/icon/icon_like.png");
                    commentLikeRef_1.remove();
                    var commentsRef_1 = __WEBPACK_IMPORTED_MODULE_7_firebase_app___default.a.database().ref("/Comments/" + infoId + "/" + key + "/totalThumbsUp");
                    commentsRef_1.once('value').then(function (snapshot) {
                        commentsRef_1.set(snapshot.val() - 1);
                        document.getElementById("num" + key).innerHTML = (snapshot.val() - 1).toString();
                    });
                }
                else {
                    commentLikeRef_1.set({
                        'eventID': infoId,
                        'haveILiked': true,
                    }, function (err) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.log('successful');
                            document.getElementById(key).setAttribute("src", "assets/icon/icon_like_click.png");
                            console.log(infoId);
                            var commentsRef_2 = __WEBPACK_IMPORTED_MODULE_7_firebase_app___default.a.database().ref("/Comments/" + infoId + "/" + key + "/totalThumbsUp");
                            commentsRef_2.once('value').then(function (snapshot) {
                                commentsRef_2.set(snapshot.val() + 1);
                                document.getElementById("num" + key).innerHTML = (snapshot.val() + 1).toString();
                            });
                        }
                    });
                }
            });
        }
    };
    ActivityPage.prototype.getCommentLike = function () {
        if (this.userInfo != null) {
            console.log('userInfo');
            __WEBPACK_IMPORTED_MODULE_7_firebase_app___default.a.database().ref("/UsersAndAdministrators/" + this.userInfo.userID + "/ThumbsUp/" + this.infoId).once('value').then(function (snapshot) {
                console.log(snapshot.val());
                var data = snapshot.val();
                if (data != null) {
                    console.log(data);
                    for (var key in data) {
                        document.getElementById(key).setAttribute("src", "assets/icon/icon_like_click.png");
                    }
                }
            });
        }
    };
    ActivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activity',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/activity/activity.html"*/'<ion-header>\n  <!-- <ion-toolbar>\n    <div style="display: flex">\n        <div class="nav-button">\n        <button ion-button clear small navPop>  \n          <ion-icon mode="ios" name="ios-arrow-back"></ion-icon> \n        </button>\n        </div>\n        <div class="nav-title">活动详情</div>\n        <div class="nav-button">\n          <button ion-button clear small></button>\n        </div>\n      </div>  \n  </ion-toolbar> -->\n  <ion-navbar center>\n    <ion-title>活动详情</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="creator" *ngIf="disp.hasOwnProperty(\'creator\')">\n    <img [src]="disp.creator.userImg" width="34" height="34" alt="">\n    <div class="name">{{disp.creator.userName}}</div>\n    <span class="offer">发布</span>\n  </div>\n  <div class="detail">\n    <div class="keyword" >\n      <div class="button-space"><button ion-button *ngFor="let item of tags">{{item}}</button></div>\n    </div>\n    <div class="detail-title">{{disp.title}}</div>\n    <div class="section">\n      <div id="time">活动时间： <span *ngFor="let time of activityDate">{{time}}; </span></div>\n      <div id="city">费用： {{disp.eventFeeCharged}}</div>\n      <div id="address">具体地址： {{disp.address}}, {{disp.city}}, {{disp.zip}}</div>\n      <div *ngIf="disp.website != \'\'" id="website" (click)="openBrowser(disp.website)">官网：{{disp.website}}</div>\n      <div id="content">{{disp.content}}</div>\n        <img *ngFor="let item of disp.imgs" class="content-img" [src]="item" alt="">\n      <div style="text-align: end">阅读量 {{disp.numsRead}}</div>\n    </div>\n    <div class="info-user">\n        <div class="info-like">\n          <div (click)="like()"><img id="like" src="assets/imgs/icon_like.png" width="20" height="20"></div>\n          <div class="info-margin">{{disp.numsLike}}</div>\n        </div>\n        <div class="info-collect" (click)="save()">\n          <div><img id="save" src="assets/icon/icon_save.png" width="20" height="20"></div>\n          <div class="info-margin">收藏</div>\n        </div>\n      </div>\n\n      <div class="comments">\n        <div class="comments-title">评论</div>\n        <div *ngIf="comments.length == 0" style="color:#d8d8d8;text-align: center;margin:5px 0">暂无评论</div>\n        \n        <div *ngFor="let item of comments" style="border-bottom:1px solid #d8d8d8;padding-bottom: 8px">\n          <div class="comment-item" >\n            <div class="user-img">\n              <img [src]="item.commentUser.originalPosterUserIMG" width="32" height="32">\n            </div>\n            <div class="comment-content">\n                <div>{{item.commentUser.originalPosterUsername}}<span>{{item.datetime}}</span></div>\n                <div class="comment-text">{{item.replyContent}}</div>\n            </div>\n            <div class="comment-reply" (click)="reply(item.key, item.commentUser)">\n                回复\n              </div>\n            <div class="comment-like" (click)="commentLike(item.key)">\n              <img [id]=\'item.key\' src="assets/imgs/icon_like.png" alt="" width="16" height="16">\n              <div [id]=\'"num"+item.key\' class="num-like">{{item.totalThumbsUp}}</div>\n            </div>\n          </div>\n          <div *ngFor="let key of item.replyKeys" style="margin-left:20px;margin-top:6px;margin-bottom:6px">\n            <div class="comment-item" >\n              \n              <div class="user-img">\n                <img [src]="item.commentReplies[key].replyUserPictureURL" width="32" height="32">\n              </div>\n              <div class="comment-content">\n                  <div>{{item.commentReplies[key].replyUser}}</div>\n                  <div class="comment-text"><span style="color:#d8d8d8">@{{item.commentUser.originalPosterUsername}} </span>{{item.commentReplies[key].replyCommentContent}}</div>\n              </div>\n            </div>\n            \n          </div>\n        </div>\n      </div>    \n  </div>\n</ion-content>\n<ion-footer no-border>\n  <div style="display: flex">\n  <input type="text" style="flex:1;height:40px;padding-left:6px;border: 1px solid #d8d8d8;margin:2px;border-radius: 2px" placeholder="说两句" [(ngModel)]=\'commentReply\'>\n  <button ion-button (click)="comment()">评论</button>\n</div>\n</ion-footer>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/activity/activity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_time_format_time_format__["a" /* TimeFormatProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ActivityPage);
    return ActivityPage;
}());

//# sourceMappingURL=activity.js.map

/***/ })

});
//# sourceMappingURL=11.js.map