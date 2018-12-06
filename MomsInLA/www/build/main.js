webpackJsonp([13],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseServiceProvider = /** @class */ (function () {
    function FirebaseServiceProvider(afd) {
        this.afd = afd;
        this.tables = ["/purchases/", "/lectures/", "/strategies/", "/Exchange/"];
        this.dailyEvent = '/DailyEvents/';
        console.log('Hello FirebaseServiceProvider Provider');
    }
    FirebaseServiceProvider.prototype.getInformationItems = function (index, cat) {
        console.log("category:" + index, "sub:" + cat);
        return this.afd.list(this.tables[index], function (ref) { return ref.orderByChild('category').equalTo(cat); });
    };
    FirebaseServiceProvider.prototype.getItem = function (index, key) {
        console.log(this.tables[index] + key);
        return this.afd.object(this.tables[index] + key);
    };
    FirebaseServiceProvider.prototype.getDailyEvent = function () {
        return this.afd.list(this.dailyEvent, function (ref) { return ref.orderByChild('activityApproved').equalTo(false); });
    };
    FirebaseServiceProvider.prototype.getDailyEventInOrder = function (idx) {
        switch (idx) {
            case 0:
                return this.afd.list(this.dailyEvent, function (ref) { return ref.orderByChild('numsLike'); });
            case 1:
                return this.afd.list(this.dailyEvent, function (ref) { return ref.orderByChild('numsLike'); });
            case 2:
                return this.afd.list(this.dailyEvent, function (ref) { return ref.orderByChild('numsLike'); });
        }
    };
    FirebaseServiceProvider.prototype.getDailyEventDetail = function (key) {
        return this.afd.object(this.dailyEvent + key);
    };
    FirebaseServiceProvider.prototype.getDailyEventDetailRef = function (key) {
        return this.afd.list(this.dailyEvent + key);
    };
    //send exchange information
    FirebaseServiceProvider.prototype.sendExchange = function (data) {
        this.afd.list('/Exchange/').push(data);
    };
    //get comments for DailyEvent
    FirebaseServiceProvider.prototype.getCommentForDailyEvent = function (id) {
        return this.afd.list('/Comments/' + id);
    };
    FirebaseServiceProvider.prototype.getUserRef = function (uid) {
        return this.afd.object("/UsersAndAdministrators/" + uid);
    };
    FirebaseServiceProvider.prototype.getUserListRef = function (uid) {
        return this.afd.list("/UsersAndAdministrators/" + uid);
    };
    FirebaseServiceProvider.prototype.getImgListRef = function (id) {
        return this.afd.list("/" + this.dailyEvent + "/" + id + "/imgs");
    };
    FirebaseServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseServiceProvider);
    return FirebaseServiceProvider;
}());

//# sourceMappingURL=firebase-service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastProvider = /** @class */ (function () {
    function ToastProvider(toastCtrl, alertCtrl, events) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.events = events;
    }
    ToastProvider.prototype.presentToast = function (msg, time, location) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: time,
            position: location
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ToastProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], ToastProvider);
    return ToastProvider;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, navParams, storage, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.events = events;
    }
    UserPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('user').then(function (data) {
            console.log(data);
            _this.userInfo = data;
        });
        // //get user information
        // this.events.subscribe('user', user=>{
        //   this.userName = user.username;
        //   this.userImg = user.userImg;
        //   this.userID = user.userID;
        // })
        // //clear the user information in the page
        // this.events.subscribe('logout',(id)=> this.userID = id);
    };
    UserPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('user').then(function (data) {
            console.log(data);
            _this.userInfo = data;
        });
    };
    UserPage.prototype.signIn = function () {
        this.navCtrl.push("LoginPage");
    };
    UserPage.prototype.toSetting = function () {
        this.navCtrl.push("SettingPage");
    };
    UserPage.prototype.toCollection = function () {
        this.navCtrl.push("CollectionPage");
    };
    UserPage.prototype.toPoint = function () {
        console.log("point");
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/user/user.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="userId==null">登陆</ion-title>\n		<ion-title *ngIf="userId!=null">我的</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div *ngIf="userInfo == null">\n		<div text-center class="userImg"><img height="130" width="130" src="assets/imgs/user_portrait.png"></div>\n		<button class="login" block ion-button (click) = "signIn()" item-left>立即登录</button>\n	</div>\n	<div *ngIf="userInfo != null" style="padding-top:50px">\n		<div text-center><img height="130" width="130" [src]="userInfo.userImg"></div>\n		<div class = "username" style = "padding-top: 20px; padding-bottom: 20px">\n			{{userInfo.username}}\n		</div>\n		\n		<div><button block ion-button (click) = "toCollection()" item-left>我的收藏</button></div>\n		<div><button block ion-button (click) = "toPoint()" item-left>我的积分</button></div>\n		<div><button block ion-button (click) = "toSetting()" item-left>我的设置</button></div>\n		<!-- <ion-grid>\n			<ion-row>\n				<ion-col>\n					<button class="user-button" (click)="toCollection()">我的收藏</button>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col>\n					<button class="user-button" (click)="toPoint()">我的积分</button>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col>\n					<button class="user-button" (click)="toSetting()">我的设置</button>\n				</ion-col>\n			</ion-row>\n		</ion-grid> -->\n		<!-- <ion-item>\n		<ion-toolbar >\n		<ion-buttons start>\n					<button class = "icon1" ion-button icon-only>\n						<ion-icon name="chatboxes" color = "dark"></ion-icon>\n					</button>\n			</ion-buttons>\n					<ion-buttons>\n					<div text-center>\n				 <button ion-button full class = "icon2" (click) = "myPost()" color = "dark">我的帖子</button>\n		 </div>\n				</ion-buttons>\n				<ion-buttons end>\n					<button ion-button icon-only>\n						<ion-icon name="arrow-forward" padding-left= "100px" color="yellow"></ion-icon>\n					</button>\n				</ion-buttons>\n		</ion-toolbar>\n		</ion-item> -->\n			 \n		\n		<!-- <button ion-button full outline (click) = "myPost()" color = "dark">我的帖子<ion-icon name="arrow-forward" padding-left= "100px" color="yellow"></ion-icon></button> -->\n				<!-- <ion-item>\n				<ion-toolbar >\n		<ion-buttons start>\n					<button class = "icon1" ion-button icon-only>\n						<ion-icon name="clipboard" color = "dark"></ion-icon>\n					</button>\n			</ion-buttons>\n					<ion-buttons>\n					<div text-center>\n				 <button ion-button full class = "icon2" (click) = "myCollection()" color = "dark">我的收藏</button>\n		 </div>\n				</ion-buttons>\n				<ion-buttons end>\n					<button ion-button icon-only>\n						<ion-icon name="arrow-forward" padding-left= "100px" color="yellow"></ion-icon>\n					</button>\n				</ion-buttons>\n		</ion-toolbar>\n		</ion-item> -->\n		\n		<!-- <ion-item>\n		\n		<ion-toolbar >\n		<ion-buttons start>\n					<button class = "icon1" ion-button icon-only>\n						<ion-icon name="cash" color = "dark"></ion-icon>\n					</button>\n			</ion-buttons>\n					<ion-buttons>\n					<div text-center>\n				 <button ion-button full class = "icon2" (click) = "myCredits()" color = "dark">我的积分</button>\n		 </div>\n				</ion-buttons>\n				<ion-buttons end>\n					<button ion-button icon-only>\n						<ion-icon name="arrow-forward" padding-left= "100px" color="yellow"></ion-icon>\n					</button>\n				</ion-buttons>\n		</ion-toolbar>\n		</ion-item> -->\n		\n		<!-- <ion-item>\n		<ion-toolbar >\n		<ion-buttons start>\n					<button class = "icon1" ion-button icon-only>\n						<ion-icon name="clock" color = "dark"></ion-icon>\n					</button>\n			</ion-buttons>\n					<ion-buttons>\n					<div text-center>\n				 <button ion-button full class = "icon2" (click) = "History()" color = "dark">浏览记录</button>\n		 </div>\n				</ion-buttons>\n				<ion-buttons end>\n					<button ion-button icon-only>\n						<ion-icon name="arrow-forward" padding-left= "100px" color="yellow"></ion-icon>\n					</button>\n				</ion-buttons>\n		</ion-toolbar>\n		</ion-item> -->\n		\n		<!-- <ion-item>\n		<ion-toolbar >\n		<ion-buttons start>\n					<button class = "icon1" ion-button icon-only>\n						<ion-icon name="settings" color = "dark"></ion-icon>\n					</button>\n			</ion-buttons>\n					<ion-buttons>\n					<div text-center>\n				 <button ion-button full class = "icon2" (click) = "toSetting()" color = "dark">我的设置</button>\n		 </div>\n				</ion-buttons>\n				<ion-buttons end>\n					<button ion-button icon-only>\n						<ion-icon name="arrow-forward" padding-left= "100px" color="yellow"></ion-icon>\n					</button>\n				</ion-buttons>\n		</ion-toolbar>\n		</ion-item> -->\n	</div>\n				\n 				 \n 			\n 			<!-- <ion-card text-center>\n 			<div>城市： 洛杉矶 <button ion-button (click) = "switch" stacked color = "dark" clear>（切换）</button></div>\n  				\n  			</ion-card>\n  	\n  	\n  	<button ion-button full (click) = "myCredits()" color = "gray">我的积分<ion-icon name="arrow-forward" margin-left= "20px"></ion-icon></button>\n  	<<ion-icon name="arrow-forward"></ion-icon> -->\n  	\n <!--  <button ion-button full (click) = "myCollection()" color = "gray">我的收藏<ion-icon name="arrow-forward" margin-left= "200px"></ion-icon></button>\n  <button ion-button full (click) = "myPost()" color = "gray">我的帖子<ion-icon name="arrow-forward" margin-left= "-200px"></ion-icon></button>\n  <button ion-button full (click) = "History()" color = "gray">浏览历史<ion-icon name="arrow-forward" margin-left= "-200px"></ion-icon></button> --> \n  <!-- <button ion-button (click) = "home()">Go back</button> -->\n\n	\n</ion-content>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/user/user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 199;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activity/activity.module": [
		527,
		11
	],
	"../pages/activitylist/activitylist.module": [
		523,
		10
	],
	"../pages/change-pic/change-pic.module": [
		525,
		9
	],
	"../pages/collection/collection.module": [
		524,
		8
	],
	"../pages/exchangeadd/exchangeadd.module": [
		526,
		7
	],
	"../pages/exchangedetail/exchangedetail.module": [
		528,
		6
	],
	"../pages/info-detail/info-detail.module": [
		529,
		5
	],
	"../pages/information/information.module": [
		530,
		4
	],
	"../pages/login/login.module": [
		531,
		3
	],
	"../pages/profile/profile.module": [
		532,
		2
	],
	"../pages/register/register.module": [
		533,
		1
	],
	"../pages/setting/setting.module": [
		534,
		0
	],
	"../pages/user/user.module": [
		535,
		12
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 241;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="md-home"></ion-tab>\n  <!-- <ion-tab [root]="tab2Root" tabTitle="聊天" tabIcon="information-circle"></ion-tab> -->\n  <ion-tab [root]="tab3Root" tabTitle="活动" tabIcon="md-add-circle"></ion-tab>\n   <ion-tab [root]="tab4Root" tabTitle="我的" tabIcon="md-contact"></ion-tab>\n   <!-- <ion-tab [root]="tab2Root" tabTitle="我的" tabIcon="md-contact"></ion-tab> -->\n</ion-tabs>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_firebase_service_firebase_service__ = __webpack_require__(157);
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








var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, camera, actionSheetCtrl, platform, storage, toast, fsp, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.storage = storage;
        this.toast = toast;
        this.fsp = fsp;
        this.loadingCtrl = loadingCtrl;
        this.picArray = [];
        this.picNum = -1;
        this.picUrl = "assets/imgs/logo.png";
        this.picName = [];
        this.test = 0;
        this.events = [];
        this.now = new Date();
        this.d = this.now.getFullYear() + '-' + this.now.getMonth() + '-' + this.now.getDate();
        this.event = {
            date: this.now,
            time: '9:00',
        };
        this.verifyArr = ['title', 'content', 'address', 'charge', 'city', 'zipcode',];
        this.verifyContent = ['活动标题', '活动内容', '活动地址', '活动费用', '城市', '邮编'];
        this.isFree = true;
        this.isPublic = true;
        this.tags = [false, false, false, false, false, false, false, false];
        this.dateNum = 1;
        this.timeArray = [];
        this.createTime();
        this.storage.get('user').then(function (data) { return _this.user = data; });
    }
    ContactPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'circles',
            content: '创建中，请稍候'
        });
        this.loading.present();
    };
    ContactPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('user').then(function (data) { return _this.user = data; });
    };
    ContactPage.prototype.createTime = function () {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
        var date = now.getDate() + 1 < 10 ? "0" + now.getDate() : now.getDate();
        var hour = now.getHours() + 1 < 10 ? "0" + now.getHours() : now.getHours();
        var min = now.getMinutes() + 1 < 10 ? "0" + now.getMinutes() : now.getMinutes();
        this.timeArray.push({
            start: {
                date: year + '-' + month + '-' + date,
                time: hour + ':' + min
            },
            end: {
                date: year + '-' + month + '-' + date,
                time: hour + ':' + min
            }
        });
    };
    ContactPage.prototype.selectPrice = function (evt) {
        var priceElement = document.getElementsByClassName('price');
        for (var i = 0; i < priceElement.length; i++) {
            priceElement[i].className = "price";
        }
        evt.target.className = "price selected";
        if (evt.target.innerText == '免费')
            this.isFree = true;
        else
            this.isFree = false;
    };
    ContactPage.prototype.selectOpen = function (evt) {
        var openElement = document.getElementsByClassName('open');
        for (var i = 0; i < openElement.length; i++) {
            openElement[i].className = "open";
        }
        evt.target.className = "open selected";
        if (evt.target.innerText == '公共活动')
            this.isPublic = true;
        else
            this.isPublic = false;
    };
    ContactPage.prototype.selectTags = function (evt) {
        var idx = evt.target.name;
        if (this.tags[idx])
            evt.target.className = "tag";
        else
            evt.target.className = "tag selected";
        this.tags[idx] = !this.tags[idx];
    };
    ContactPage.prototype.addTime = function () {
        this.dateNum += 1;
        this.createTime();
    };
    ContactPage.prototype.deleteTime = function () {
        this.dateNum -= 1;
        this.timeArray.pop();
    };
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage.prototype.verifiyNull = function (verifyArr, verifyContent) {
        for (var i = 0; i < verifyArr.length; i++) {
            if (this[verifyArr[i]] == null || this[verifyArr[i]].trim() == "") {
                this.toast.presentToast("\u8BF7\u8F93\u5165" + verifyContent[i], 1000, 'middle');
                return false;
            }
        }
        if (!RegExp('[0-9]{5}').test(this.zipcode)) {
            this.toast.presentToast('请输入正确邮编格式', 1000, 'middle');
            return false;
        }
        return true;
    };
    ContactPage.prototype.createEvent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var n_1, activityTime, i, i, now, name, img, imgUrl, subType, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.user == null)) return [3 /*break*/, 1];
                        this.toast.presentToast("请先登陆", 1000, "middle");
                        n_1 = this.navCtrl;
                        setTimeout(function () {
                            n_1.push('LoginPage');
                        }, 1000);
                        return [3 /*break*/, 8];
                    case 1:
                        if (!this.verifiyNull(this.verifyArr, this.verifyContent))
                            return [2 /*return*/];
                        activityTime = [];
                        for (i = 0; i < this.timeArray.length; i++) {
                            activityTime.push({ 'from': new Date(this.timeArray[i]['start']['date'] + "T" + this.timeArray[i]['start']['time'] + "-07:00").getTime(), 'to': new Date(this.timeArray[i]['end']['date'] + "T" + this.timeArray[i]['end']['time'] + "-07:00").getTime() });
                        }
                        activityTime.sort(function (a, b) {
                            return a['from'] - b['from'];
                        });
                        this.showLoading();
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < this.picArray.length)) return [3 /*break*/, 6];
                        now = new Date().getTime() + i * 100;
                        name = "/pictures/" + now + "_" + this.user.userID;
                        return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"])().ref(name).putString(this.picArray[i], 'data_url', { contentType: 'image/png' })];
                    case 3:
                        img = _a.sent();
                        return [4 /*yield*/, Object(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"])().ref(name).getDownloadURL()];
                    case 4:
                        imgUrl = _a.sent();
                        this.picName.push(imgUrl);
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 2];
                    case 6:
                        subType = "";
                        if (this.user.Status == "Admin")
                            subType = "Official Event";
                        else
                            subType = "Self Posted Event";
                        item = {
                            activityApproved: false,
                            activityDate: activityTime,
                            activityPreferred: true,
                            address: this.address,
                            city: this.city,
                            content: this.content,
                            createDate: new Date().getTime(),
                            creator: {
                                userId: this.user.userID,
                                userImg: this.user.userImg,
                                userName: this.user.username,
                                userStatus: this.user.userStatus
                            },
                            eventCategory1: this.isFree,
                            eventCategory2: this.isPublic,
                            eventCategory3: this.tags,
                            eventFeeCharged: this.charge,
                            eventMainSubType: subType,
                            imgs: this.picName,
                            numsLike: 0,
                            numsParticipate: 0,
                            numsRead: 0,
                            title: this.title,
                            website: this.website == null || this.website.trim() ? "" : this.website,
                            zip: this.zipcode
                        };
                        return [4 /*yield*/, this.fsp.getDailyEvent().push(item)];
                    case 7:
                        _a.sent();
                        this.loading.dismiss();
                        this.toast.presentToast("发送成功", 1000, "middle");
                        this.isFree = true;
                        this.isPublic = true;
                        this.tags = [false, false, false, false, false, false, false, false];
                        this.title = null;
                        this.content = null;
                        this.city = null;
                        this.address = null;
                        this.zipcode = null;
                        this.picNum = -1;
                        this.picArray = [];
                        this.picName = [];
                        this.website = null;
                        this.charge = null;
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    ContactPage.prototype.openCamera = function () {
        var _this = this;
        var option = {
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
        this.camera.getPicture(option).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.picArray.push(base64Image);
            _this.picNum = _this.picNum + 1;
        }, function (err) {
            // Handle error
        });
    };
    ContactPage.prototype.openGallery = function () {
        var _this = this;
        var option = {
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
        this.camera.getPicture(option).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.picArray.push(base64Image);
            _this.picNum = _this.picNum + 1;
        }, function (err) {
            // Handle error
        });
    };
    ContactPage.prototype.deletePic = function () {
        this.picNum = this.picNum - 1;
        this.picArray.pop();
    };
    ContactPage.prototype.chooseSource = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: '拍照',
                    handler: function () {
                        _this.openCamera();
                    }
                }, {
                    text: '从相册选取',
                    handler: function () {
                        _this.openGallery();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title text-center>\n      添加活动\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-input onfocus="this.placeholder=\'\'" placeholder="活动名称" type="text" onblur="this.placeholder = \'活动名称\'" [(ngModel)] = \'title\'></ion-input>\n  <ion-textarea  rows="7" maxLength="200"  onfocus="this.placeholder =\'\'" placeholder="活动介绍，请不要超过200个字" onblur="this.placeholder = \'活动介绍，请不要超过200个字\'" [(ngModel)] = \'content\'></ion-textarea>\n\n  <div style="display: flex;">\n  <div class="subtitle">活动时间</div>\n  <div class="date-icon"><img src="assets/icon/icon_date_add.png" width="32" height="32" (click)="addTime()"></div>\n  <div class="date-icon"><img *ngIf="dateNum != 1" src="assets/icon/icon_date_remove.png" width="32" height="32" (click)="deleteTime()"></div>\n  </div>\n<ion-grid>\n  <div *ngFor="let item of timeArray">\n  <ion-row>\n    <ion-col text-center no-padding style="line-height:3.8rem;">起始时间</ion-col>\n    <ion-col text-center no-padding><ion-datetime #sectionSelect2 displayFormat="MM-DD-YYYY" pickerFormat="MMM DD YYYY"[(ngModel)]="item.start.date">日期</ion-datetime></ion-col>\n    <ion-col text-center no-padding><ion-datetime displayFormat="HH:mm" pickerFormat="HH mm" [(ngModel)]="item.start.time">时间</ion-datetime></ion-col>\n  </ion-row>\n  <ion-row style="border-bottom:1px solid #aaaaaa">\n    <ion-col text-center no-padding style="line-height:3.8rem;">终止时间</ion-col>\n    <ion-col text-center no-padding><ion-datetime #sectionSelect2 displayFormat="MM-DD-YYYY" pickerFormat="MMM DD YYYY"[(ngModel)]="item.end.date">日期</ion-datetime></ion-col>\n    <ion-col text-center no-padding><ion-datetime displayFormat="HH:mm" pickerFormat="HH mm" [(ngModel)]="item.end.time">时间</ion-datetime></ion-col>\n  </ion-row>\n  </div>\n</ion-grid>\n\n<div class="info">\n<ion-row>\n    <ion-col>\n    <ion-input onfocus="this.placeholder = \'\' " placeholder="具体地址" type="text" onblur="this.placeholder = \'具体地址\'" [(ngModel)] = \'address\'></ion-input>\n</ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col>\n  <ion-input onfocus="this.placeholder = \'\' " placeholder="活动费用" type="text" onblur="this.placeholder = \'活动费用\'" [(ngModel)] = \'charge\'></ion-input>\n</ion-col>\n</ion-row>\n\n<ion-row no-padding>\n    <ion-col col-6>\n        <ion-input onfocus="this.placeholder = \'\' " placeholder="城市" type="text" onblur="this.placeholder = \'城市\'" [(ngModel)] = \'city\'></ion-input>\n    </ion-col>\n    <ion-col col-6>\n        <ion-input onfocus="this.placeholder = \'\' " placeholder="邮编" type="text" onblur="this.placeholder = \'邮编\'" [(ngModel)] = \'zipcode\' pattern="[0-9]{5}" title="111"></ion-input>\n    </ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col>\n    <ion-input onfocus="this.placeholder = \'\' " placeholder="官方网站(可选)" type="text" onblur="this.placeholder = \'官方网站(可选)\'" [(ngModel)] = \'website\'></ion-input>\n  </ion-col>\n</ion-row>\n</div>\n\n<div class="subtitle">添加图片</div>\n<div style="width:100%; display: flex">\n  <div style="width: 25%; padding:5px" *ngFor="let pic of picArray">\n    <img [src]="pic" hegiht="100%" width="100%" />\n  </div>\n  <div style="width: 25%; padding:5px" *ngIf="picArray.length!=3">\n    <img width="100" src="assets/icon/icon_pic_add.png" (click)="chooseSource()">\n  </div>\n  <div style="width: 25%; padding:5px" *ngIf="picArray.length!=0">\n    <!-- <button  (click)="deletePic()">delete</button> -->\n    <img width="100" src="assets/icon/icon_pic_remove.png" (click)="deletePic()">\n  </div>\n</div>\n\n<div class="subtitle">活动属性</div>\n  <div class="feature-one">\n  <ion-grid>\n   <ion-row class="align-items-flex-end">\n    <ion-col col-6 no-padding>\n      <button class="price selected" (click)="selectPrice($event)">免费</button>\n  </ion-col>\n    <ion-col col-6 no-padding>\n      <button class="price" (click)="selectPrice($event)">收费</button>\n  </ion-col>\n</ion-row>\n</ion-grid>\n<ion-grid>\n<ion-row class="align-items-flex-end">\n    <ion-col col-6 no-padding>\n      <button class="open selected" (click)="selectOpen($event)">公共活动</button>\n  </ion-col>\n  <ion-col col-6 no-padding>\n      <button class=\'open\' (click)=selectOpen($event)>私人活动</button>\n  </ion-col>\n</ion-row>\n</ion-grid>\n</div>\n\n<div class="feature-two">\n<ion-grid>\n  <ion-row>\n    <ion-col col-3 no-padding>\n           <button class="tag" (click)="selectTags($event)" name="0">户外游乐</button>\n    </ion-col>\n\n    <ion-col col-3 no-padding>\n           <button class="tag" (click)="selectTags($event)" name="1">益智教育</button>\n    </ion-col>\n\n    <ion-col col-3 no-padding>\n           <button class="tag" (click)="selectTags($event)" name="2">动物植物</button>\n    </ion-col>\n\n    <ion-col col-3 no-padding>\n           <button class="tag" (click)="selectTags($event)" name="3">游乐园</button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="margin-top:5px">\n    <ion-col col-3 no-padding>\n      <button class="tag" (click)="selectTags($event)" name="4">室内游乐</button>\n    </ion-col>\n\n    <ion-col col-3 no-padding>\n      <button class="tag" (click)="selectTags($event)" name="5">科普知识</button>\n    </ion-col>\n\n    <ion-col col-3 no-padding>\n      <button class="tag" (click)="selectTags($event)" name="6">免费停车</button>\n    </ion-col>\n\n    <ion-col col-3 no-padding>\n      <button class="tag" (click)="selectTags($event)" name="7">其他类型</button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</div>\n\n<div class="feature-one"  style="margin-top:14px;margin-bottom: 60px">\n<ion-grid>\n  <ion-col no-padding>\n      <button class="selected" (click) = "createEvent()">建立活动</button>\n  </ion-col>\n</ion-grid>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]) === "function" && _j || Object])
    ], ContactPage);
    return ContactPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.lat = 1;
    }
    HomePage.prototype.activityList = function () {
        this.navCtrl.push("ActivitylistPage");
    };
    HomePage.prototype.toInformation = function (c) {
        var _this = this;
        console.log(c);
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lat = resp.coords.latitude;
            console.log(resp);
            console.log(1111);
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
        }).catch(function (err) {
            console.log(err);
        });
        console.log("test geolocation");
        this.navCtrl.push("InformationPage", { item: c });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/home/home.html"*/'<ion-header id="header" no-border>\n  <ion-navbar class="navbar">\n    <ion-title text-center>Momsinla</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="content">\n  <div style="height:100%;display: flex; flex-direction: column;">\n  <div class="home-logo">\n    <img src="imgs/logo_title.png" />\n  </div>\n  <div class="center-view" style="padding-top: 30px">\n    <div (click) = "activityList()"\n    style="text-align:center;margin:auto;">\n      <img src="imgs/icon_daily_activity.png" height="160" width="160">\n      <div class="font-content">每日活动</div>\n    </div>\n  </div>\n  </div>\n</ion-content>\n\n<ion-footer no-border>\n  <div class="column">\n    <ion-grid>\n      <ion-row>\n        <ion-col text-center (click) = "toInformation(1)">\n          <img src="imgs/icon_save.png" height="32" width="32" />\n          <div class="font-content">精打细算</div>\n        </ion-col>\n        <ion-col text-center (click) = "toInformation(2)">\n          <img src="imgs/icon_lecture.png" height="32" width="32" />\n          <div class="font-content">专家讲座</div>\n        </ion-col>\n        <ion-col text-center (click) = "toInformation(3)">\n          <img src="imgs/icon_strategy.png" height="32" width="32" />\n          <div class="font-content">妈妈攻略</div>\n        </ion-col>\n        <ion-col text-center (click) = "toInformation(4)">\n          <img src="imgs/icon_expense.png" height="32" width="32" />\n          <div class="font-content">交易平台</div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeFormatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimeFormatProvider = /** @class */ (function () {
    function TimeFormatProvider() {
    }
    TimeFormatProvider.prototype.differFromNow = function (timestamp) {
        var now = new Date();
        var seconds = (now.getTime() - timestamp) / 1000;
        if (seconds < 60) {
            return "刚刚";
        }
        var minutes = seconds / 60;
        if (minutes < 60) {
            return Math.floor(minutes) + "分前";
        }
        var hours = minutes / 60;
        if (hours < 24) {
            return Math.floor(hours) + "小时前";
        }
        var days = hours / 24;
        if (days < 30) {
            return Math.floor(days) + "天前";
        }
        var months = days / 30;
        if (months < 12) {
            return Math.floor(months) + "月前";
        }
        var years = months / 12;
        return Math.floor(years) + "年前";
    };
    TimeFormatProvider.prototype.timeAppendZero = function (time) {
        if (time < 10)
            return "0" + time;
        return time;
    };
    TimeFormatProvider.prototype.timeToString = function (fh, fm, th, tm) {
        return this.timeAppendZero(fh) + ":" + this.timeAppendZero(fm) + "-" + this.timeAppendZero(th) + ":" + this.timeAppendZero(tm);
    };
    TimeFormatProvider.prototype.eventTimeFormat = function (from, to) {
        var dateF = new Date(from);
        var fromYear = dateF.getFullYear();
        var fromMonth = dateF.getMonth();
        var fromDate = dateF.getDate();
        var fromHour = dateF.getHours();
        var fromMinute = dateF.getMinutes();
        var dateT = new Date(to);
        var toYear = dateT.getFullYear();
        var toMonth = dateT.getMonth();
        var toDate = dateT.getDate();
        var toHour = dateT.getHours();
        var toMinute = dateT.getMinutes();
        var timeString = this.timeToString(fromHour, fromMinute, toHour, toMinute);
        if (fromYear == toYear && fromMonth == toMonth && fromDate == toDate)
            return fromMonth + 1 + "\u6708" + fromDate + "\u65E5 " + timeString;
        return fromMonth + 1 + "\u6708" + fromDate + "\u65E5 " + timeString;
    };
    TimeFormatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TimeFormatProvider);
    return TimeFormatProvider;
}());

//# sourceMappingURL=time-format.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityFilterComponent = /** @class */ (function () {
    function ActivityFilterComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.filter = [{ name: '按时间', idx: 0 }, { name: '按热度', idx: 1 }, { name: '按距离', idx: 2 }];
        this.text = 'as';
    }
    ActivityFilterComponent.prototype.clickItem = function (item) {
        this.viewCtrl.dismiss(item);
    };
    ActivityFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'activity-filter',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/components/activity-filter/activity-filter.html"*/'<!-- Generated template for the ActivityFilterComponent component -->\n<!-- <div>\n  {{text}}\n</div> -->\n<ion-item *ngFor=\'let item of filter\' (click)=\'clickItem(item)\'>\n  {{item.name}}\n</ion-item>\n\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/components/activity-filter/activity-filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], ActivityFilterComponent);
    return ActivityFilterComponent;
}());

//# sourceMappingURL=activity-filter.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(441);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_user__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_screen_orientation__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_native_geocoder__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_firebase_service_firebase_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_toast_toast__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2___ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_auth__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_activity_filter_activity_filter__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_firebase_app__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_time_format_time_format__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { ProfilePage } from '../pages/profile/profile';


















var config = {
    apiKey: "AIzaSyCMT0_8w3orZ7BEMi-7_QOpK8w6keTzXy0",
    authDomain: "momsinla-de26b.firebaseapp.com",
    databaseURL: "https://momsinla-de26b.firebaseio.com",
    projectId: "momsinla-de26b",
    storageBucket: "momsinla-de26b.appspot.com",
    messagingSenderId: "240243369411"
};
__WEBPACK_IMPORTED_MODULE_25_firebase_app___default.a.initializeApp(config);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_24__components_activity_filter_activity_filter__["a" /* ActivityFilterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { tabsHideOnSubPages: true }, {
                    links: [
                        { loadChildren: '../pages/activitylist/activitylist.module#ActivitylistPageModule', name: 'ActivitylistPage', segment: 'activitylist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/collection/collection.module#CollectionPageModule', name: 'CollectionPage', segment: 'collection', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-pic/change-pic.module#ChangePicPageModule', name: 'ChangePicPage', segment: 'change-pic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exchangeadd/exchangeadd.module#ExchangeaddPageModule', name: 'ExchangeaddPage', segment: 'exchangeadd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity/activity.module#ActivityPageModule', name: 'ActivityPage', segment: 'activity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exchangedetail/exchangedetail.module#ExchangedetailPageModule', name: 'ExchangedetailPage', segment: 'exchangedetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-detail/info-detail.module#InfoDetailPageModule', name: 'InfoDetailPage', segment: 'info-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/information/information.module#InformationPageModule', name: 'InformationPage', segment: 'information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_21_angularfire2___["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_23_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_24__components_activity_filter_activity_filter__["a" /* ActivityFilterComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_19__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_20__providers_toast_toast__["a" /* ToastProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_time_format_time_format__["a" /* TimeFormatProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[308]);
//# sourceMappingURL=main.js.map