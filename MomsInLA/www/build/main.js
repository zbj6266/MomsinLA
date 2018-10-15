webpackJsonp([12],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(155);
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
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.key = "userId";
        this.userId = null;
        this.storage.set(this.key, 'dfs');
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    UserPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get(this.key).then(function (val) {
            console.log(val);
            _this.userId = val;
        });
    };
    UserPage.prototype.signIn = function () {
        this.navCtrl.push("LoginPage");
    };
    // register() {
    // 	this.navCtrl.push("RegisterPage");
    // }
    UserPage.prototype.toSetting = function () {
        this.navCtrl.push("SettingPage");
    };
    UserPage.prototype.myCollection = function () {
        this.navCtrl.push("CollectionPage");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], UserPage.prototype, "uname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], UserPage.prototype, "password", void 0);
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/user/user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title *ngIf="userId==null">登陆</ion-title>\n		<ion-title *ngIf="userId!=null">我的</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div *ngIf="userId==null">\n		<img class="displayed"  height="125" width="125" src="assets/imgs/user_portrait.png">\n		<button class="login" block ion-button (click) = "signIn()" item-left>立即登录</button>\n			<!-- <button block ion-button (click) = "register()" color = "dark" >注册</button> -->\n	</div>\n	<div *ngIf="userId != null">\n			<img class="displayed"  height="150 px" width="150 px" src="imgs/User-photo.png">\n			\n		\n			<ion-title class = "adjust" style = "padding-top: 20px; padding-bottom: 20px">妈妈洛杉矶</ion-title>\n		\n		\n		<ion-item>\n		<ion-toolbar >\n		<ion-buttons start>\n					<button class = "icon1" ion-button icon-only>\n						<ion-icon name="chatboxes" color = "dark"></ion-icon>\n					</button>\n			</ion-buttons>\n					<ion-buttons>\n					<div text-center>\n				 <button ion-button full class = "icon2" (click) = "myPost()" color = "dark">我的帖子</button>\n		 </div>\n				</ion-buttons>\n				<ion-buttons end>\n					<button ion-button icon-only>\n						<ion-icon name="arrow-forward" padding-left= "100px" color="yellow"></ion-icon>\n					</button>\n				</ion-buttons>\n		</ion-toolbar>\n		</ion-item>\n			 \n		\n		<!-- <button ion-button full outline (click) = "myPost()" color = "dark">我的帖子<ion-icon name="arrow-forward" padding-left= "100px" color="yellow"></ion-icon></button> -->\n				<ion-item>\n				<ion-toolbar >\n		<ion-buttons start>\n					<button class = "icon1" ion-button icon-only>\n						<ion-icon name="clipboard" color = "dark"></ion-icon>\n					</button>\n			</ion-buttons>\n					<ion-buttons>\n					<div text-center>\n				 <button ion-button full class = "icon2" (click) = "myCollection()" color = "dark">我的收藏</button>\n		 </div>\n				</ion-buttons>\n				<ion-buttons end>\n					<button ion-button icon-only>\n						<ion-icon name="arrow-forward" padding-left= "100px" color="yellow"></ion-icon>\n					</button>\n				</ion-buttons>\n		</ion-toolbar>\n		</ion-item>\n		\n		<ion-item>\n		\n		<ion-toolbar >\n		<ion-buttons start>\n					<button class = "icon1" ion-button icon-only>\n						<ion-icon name="cash" color = "dark"></ion-icon>\n					</button>\n			</ion-buttons>\n					<ion-buttons>\n					<div text-center>\n				 <button ion-button full class = "icon2" (click) = "myCredits()" color = "dark">我的积分</button>\n		 </div>\n				</ion-buttons>\n				<ion-buttons end>\n					<button ion-button icon-only>\n						<ion-icon name="arrow-forward" padding-left= "100px" color="yellow"></ion-icon>\n					</button>\n				</ion-buttons>\n		</ion-toolbar>\n		</ion-item>\n		\n		<ion-item>\n		<ion-toolbar >\n		<ion-buttons start>\n					<button class = "icon1" ion-button icon-only>\n						<ion-icon name="clock" color = "dark"></ion-icon>\n					</button>\n			</ion-buttons>\n					<ion-buttons>\n					<div text-center>\n				 <button ion-button full class = "icon2" (click) = "History()" color = "dark">浏览记录</button>\n		 </div>\n				</ion-buttons>\n				<ion-buttons end>\n					<button ion-button icon-only>\n						<ion-icon name="arrow-forward" padding-left= "100px" color="yellow"></ion-icon>\n					</button>\n				</ion-buttons>\n		</ion-toolbar>\n		</ion-item>\n		\n		<ion-item>\n		<ion-toolbar >\n		<ion-buttons start>\n					<button class = "icon1" ion-button icon-only>\n						<ion-icon name="settings" color = "dark"></ion-icon>\n					</button>\n			</ion-buttons>\n					<ion-buttons>\n					<div text-center>\n				 <button ion-button full class = "icon2" (click) = "toSetting()" color = "dark">我的设置</button>\n		 </div>\n				</ion-buttons>\n				<ion-buttons end>\n					<button ion-button icon-only>\n						<ion-icon name="arrow-forward" padding-left= "100px" color="yellow"></ion-icon>\n					</button>\n				</ion-buttons>\n		</ion-toolbar>\n		</ion-item>\n	</div>\n				\n 				 \n 			\n 			<!-- <ion-card text-center>\n 			<div>城市： 洛杉矶 <button ion-button (click) = "switch" stacked color = "dark" clear>（切换）</button></div>\n  				\n  			</ion-card>\n  	\n  	\n  	<button ion-button full (click) = "myCredits()" color = "gray">我的积分<ion-icon name="arrow-forward" margin-left= "20px"></ion-icon></button>\n  	<<ion-icon name="arrow-forward"></ion-icon> -->\n  	\n <!--  <button ion-button full (click) = "myCollection()" color = "gray">我的收藏<ion-icon name="arrow-forward" margin-left= "200px"></ion-icon></button>\n  <button ion-button full (click) = "myPost()" color = "gray">我的帖子<ion-icon name="arrow-forward" margin-left= "-200px"></ion-icon></button>\n  <button ion-button full (click) = "History()" color = "gray">浏览历史<ion-icon name="arrow-forward" margin-left= "-200px"></ion-icon></button> --> \n  <!-- <button ion-button (click) = "home()">Go back</button> -->\n\n	\n</ion-content>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/user/user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 195:
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
webpackEmptyAsyncContext.id = 195;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activity/activity.module": [
		517,
		10
	],
	"../pages/activitylist/activitylist.module": [
		518,
		9
	],
	"../pages/collection/collection.module": [
		519,
		8
	],
	"../pages/exchangeadd/exchangeadd.module": [
		520,
		7
	],
	"../pages/exchangedetail/exchangedetail.module": [
		521,
		6
	],
	"../pages/info-detail/info-detail.module": [
		526,
		5
	],
	"../pages/information/information.module": [
		522,
		4
	],
	"../pages/login/login.module": [
		523,
		3
	],
	"../pages/profile/profile.module": [
		524,
		2
	],
	"../pages/register/register.module": [
		525,
		1
	],
	"../pages/setting/setting.module": [
		527,
		0
	],
	"../pages/user/user.module": [
		528,
		11
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
webpackAsyncContext.id = 237;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(157);
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

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, camera, actionSheetCtrl, sanitizer, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.sanitizer = sanitizer;
        this.platform = platform;
        this.picArray = [];
        this.picNum = -1;
        this.picUrl = "assets/imgs/logo.png";
        this.calName = '';
        this.events = [];
        this.now = new Date();
        this.d = this.now.getFullYear() + '-' + this.now.getMonth() + '-' + this.now.getDate();
        this.event = {
            date: this.now,
            time: '9:00',
        };
        this.isFree = true;
        this.isPublic = true;
        this.tags = [false, false, false, false, false, false, false, false];
        this.dateNum = 1;
        this.timeArray = [];
        this.calName = navParams.get('name');
        this.createTime();
        console.log(platform.is('ios'));
    }
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
        console.log(this.isFree);
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
        console.log(this.isPublic);
    };
    ContactPage.prototype.selectTags = function (evt) {
        var idx = evt.target.name;
        if (this.tags[idx])
            evt.target.className = "tag";
        else
            evt.target.className = "tag selected";
        this.tags[idx] = !this.tags[idx];
        console.log(this.tags);
    };
    ContactPage.prototype.addTime = function () {
        this.dateNum += 1;
        this.createTime();
        console.log(this.dateNum);
    };
    ContactPage.prototype.deleteTime = function () {
        this.dateNum -= 1;
        this.timeArray.pop();
    };
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage.prototype.createEvent = function () {
        this.navCtrl.push("");
    };
    ContactPage.prototype.openCamera = function () {
        // this.picArray.push("assets/imgs/logo.png");
        var _this = this;
        var option = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: true
        };
        this.camera.getPicture(option).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            // let showUrl = normalizeURL(imageData) ;
            // if(this.platform.is('android'))
            var showUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(imageData);
            _this.picArray.push(showUrl);
            _this.picNum = _this.picNum + 1;
            // let filename = imageData.split("/").pop();
            console.log(imageData);
        }, function (err) {
            // Handle error
        });
    };
    ContactPage.prototype.openGallery = function () {
        var _this = this;
        var option = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(option).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var showUrl;
            if (_this.platform.is('android'))
                showUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(imageData);
            else
                showUrl = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* normalizeURL */])(imageData);
            _this.picArray.push(showUrl);
            _this.picNum = _this.picNum + 1;
            var filename = imageData.split("/").pop();
            console.log(imageData);
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
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
            selector: 'page-contact',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-toolbar>\n    <!-- <div style="display: flex">\n      <div>\n      <button ion-button clear medium navPop style="padding: 0;">  \n       取消\n      </button>\n      </div>\n  </div> -->\n    <ion-title text-center>\n      添加活动\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-input onfocus="this.placeholder=\'\'" placeholder="活动名称" type="text" onblur="this.placeholder = \'活动名称\'"#username></ion-input>\n  <ion-textarea #msgInput rows="7" maxLength="200"  onfocus="this.placeholder =\'\'" placeholder="活动介绍，请不要超过200个字" onblur="this.placeholder = \'活动介绍，请不要超过200个字\'"></ion-textarea>\n  <button ion-button (click)="openCamera()">拍照</button>\n  <div style="width:100%; display: flex">\n    <div style="width: 25%; padding:5px" *ngFor="let pic of picArray">\n      <img [src]="pic" hegiht="100%" width="100%" />\n    </div>\n    <div style="width: 25%; padding:5px" *ngIf="picArray.length!=3">\n        <button  (click)="chooseSource()">add</button>\n    </div>\n    <div style="width: 25%; padding:5px" *ngIf="picArray.length!=0">\n        <button  (click)="deletePic()">delete</button>\n    </div>\n  </div>\n  <ion-title>活动时间</ion-title>\n<ion-grid>\n  <div *ngFor="let item of timeArray">\n  <ion-row>\n    <ion-col text-center no-padding style="line-height:3.8rem;">起始时间</ion-col>\n    <ion-col text-center no-padding><ion-datetime #sectionSelect2 displayFormat="MMM-DD-YYYY" pickerFormat="MMM DD YYYY"[(ngModel)]="item.start.date">日期</ion-datetime></ion-col>\n    <ion-col text-center no-padding><ion-datetime displayFormat="HH:mm" pickerFormat="HH mm" [(ngModel)]="item.start.time">时间</ion-datetime></ion-col>\n  </ion-row>\n  <ion-row style="border-bottom:1px solid #aaaaaa">\n    <ion-col text-center no-padding style="line-height:3.8rem;">终止时间</ion-col>\n    <ion-col text-center no-padding><ion-datetime #sectionSelect2 displayFormat="MMM-DD-YYYY" pickerFormat="MMM DD YYYY"[(ngModel)]="item.end.date">日期</ion-datetime></ion-col>\n    <ion-col text-center no-padding><ion-datetime displayFormat="HH:mm" pickerFormat="HH mm" [(ngModel)]="item.end.time">时间</ion-datetime></ion-col>\n  </ion-row>\n  </div>\n</ion-grid>\n<button ion-button (click)="addTime()">添加时间</button>\n<button *ngIf="dateNum != 1" ion-button (click)="deleteTime()">删除时间</button>\n<!-- <ion-list>\n    <ion-grid>\n      <ion-row justify-content-start>\n\n  <ion-col col-3>\n    <ion-buttons end>\n        <button ion-button icon-only (click) = "calendar()" color = "dark" clear><ion-icon name="calendar" item-left></ion-icon></button>\n        </ion-buttons>\n      </ion-col>\n      <div>起始时间</div>\n\n      <ion-col col-xl-1>\n    <ion-item>\n\n     <ion-datetime #sectionSelect2 displayFormat="MMM DD YY" [(ngModel)]="event"></ion-datetime>\n    </ion-item>\n  </ion-col>\n  \n\n     \n      <ion-col col-xl-1 >\n        <ion-item>\n      <ion-datetime displayFormat="H:mm" pickerFormat="H mm" [(ngModel)]="event"></ion-datetime>\n    </ion-item>\n    </ion-col>\n \n  </ion-row>\n  </ion-grid>\n</ion-list> -->\n<div class="info">\n<ion-row>\n    <!-- <ion-col col-3>\n            <ion-item no-lines>\n            <button ion-button (click) = "locate()" color = "dark" clear><ion-icon name="locate"></ion-icon></button>\n            </ion-item>\n      具体地址\n    </ion-col> -->\n    <ion-col>\n    <ion-input onfocus="this.placeholder = \'\' " placeholder="具体地址" type="text" onblur="this.placeholder = \'具体地址\'"></ion-input>\n</ion-col>\n</ion-row>\n\n\n<ion-row no-padding>\n    <ion-col col-6>\n        <ion-input onfocus="this.placeholder = \'\' " placeholder="城市" type="text" onblur="this.placeholder = \'城市\'"></ion-input>\n    </ion-col>\n    <ion-col col-6>\n        <ion-input onfocus="this.placeholder = \'\' " placeholder="邮编" type="text" onblur="this.placeholder = \'邮编\'"></ion-input>\n    </ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col no-padding>\n    <ion-input onfocus="this.placeholder = \'\' " placeholder="官方网站" type="text" onblur="this.placeholder = 官方网站"></ion-input>\n  </ion-col>\n</ion-row>\n</div>\n\n<ion-title style = "padding-top: 50px">活动属性</ion-title>\n\n\n<!-- <ion-segment mode="md" *ngIf="category==1" [(ngModel)]="freeEvent">\n    <ion-segment-button *ngFor="let item of freeEvents" value="{{item}}">\n\n        <div class="custom_button">{{item}}</div>\n\n       \n\n    </ion-segment-button>\n  </ion-segment>\n <div *ngIf="category==1" [ngSwitch]="free" >\n    <ion-list *ngSwitchCase="\'免费\'">\n      \n    </ion-list>\n  </div> -->\n  <div class="feature-one">\n  <ion-grid>\n   <ion-row class="align-items-flex-end">\n    <ion-col col-6 no-padding>\n      <!-- <button ion-button no-margin medium full (click)="addEvent();" [ngStyle]="{\'background-color\': buttonColor}"  class="custom-button" (click) = "changeState()">免费</button> -->\n      <button class="price selected" (click)="selectPrice($event)">免费</button>\n  </ion-col>\n    <ion-col col-6 no-padding>\n      <!-- <button ion-button no-margin full (click)="addEventa();" [ngStyle]="{\'background-color\': buttonColor1}"  class="custom-button" (click) = "changeState1()">收费</button> -->\n      <button class="price" (click)="selectPrice($event)">收费</button>\n  </ion-col>\n</ion-row>\n</ion-grid>\n<ion-grid>\n<ion-row class="align-items-flex-end">\n    <ion-col col-6 no-padding>\n      <!-- <button ion-button no-margin medium full (click)="addEventb();" [ngStyle]="{\'background-color\': buttonColor2}"  class="custom-button" (click) = "changeState2()">公共活动</button> -->\n      <button class="open selected" (click)="selectOpen($event)">公共活动</button>\n  </ion-col>\n  <ion-col col-6 no-padding>\n      <!-- <button ion-button no-margin full (click)="addEventc();" [ngStyle]="{\'background-color\': buttonColor3}"  class="custom-button" (click) = "changeState3()">私人活动</button> -->\n      <button class=\'open\' (click)=selectOpen($event)>私人活动</button>\n  </ion-col>\n</ion-row>\n</ion-grid>\n</div>\n<!-- Using radio select --> \n\n  <!-- <ion-list radio-group>\n   <ion-row class="align-items-flex-end">\n    <ion-col col-4>\n\n    <ion-item >\n      <ion-label color="dark" font = "10px">免费</ion-label>\n      <ion-radio color = "yellow" value="always" checked></ion-radio>\n    </ion-item>\n  </ion-col>\n    <ion-col col-8>\n    <ion-item>\n      <ion-label color="dark">收费</ion-label>\n      <ion-radio color = "yellow" value="locked"></ion-radio>\n      <ion-input onfocus="this.placeholder = \'\' " placeholder="$/人均" type="number" onblur="this.placeholder = \'$/人均\'"></ion-input>\n    </ion-item>\n  </ion-col>\n</ion-row>\n</ion-list>\n<ion-list radio-group>\n<ion-row>\n    <ion-col col-6>\n\n    <ion-item>\n      <ion-label color="dark">公共活动</ion-label>\n      <ion-radio color = "yellow" value="always" checked></ion-radio>\n    </ion-item>\n  </ion-col>\n    <ion-col col-6>\n    <ion-item>\n      <ion-label color="dark">私人活动</ion-label>\n      \n      <ion-radio color = "yellow" value="locked"></ion-radio>\n    </ion-item>\n  </ion-col>\n</ion-row>\n  </ion-list> -->\n\n\n<div class="feature-two">\n<ion-grid>\n  <ion-row>\n    <ion-col col-3 no-padding>\n           <button class="tag" (click)="selectTags($event)" name="0">户外游乐</button>\n    </ion-col>\n\n    <ion-col col-3 no-padding>\n           <button class="tag" (click)="selectTags($event)" name="1">益智教育</button>\n    </ion-col>\n\n    <ion-col col-3 no-padding>\n           <button class="tag" (click)="selectTags($event)" name="2">动物植物</button>\n    </ion-col>\n\n    <ion-col col-3 no-padding>\n           <button class="tag" (click)="selectTags($event)" name="3">游乐园</button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="margin-top:5px">\n    <ion-col col-3 no-padding>\n      <button class="tag" (click)="selectTags($event)" name="4">室内游乐</button>\n    </ion-col>\n\n    <ion-col col-3 no-padding>\n      <button class="tag" (click)="selectTags($event)" name="5">科普知识</button>\n    </ion-col>\n\n    <ion-col col-3 no-padding>\n      <button class="tag" (click)="selectTags($event)" name="6">免费停车</button>\n    </ion-col>\n\n    <ion-col col-3 no-padding>\n      <button class="tag" (click)="selectTags($event)" name="7">其他类型</button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</div>\n<!-- Using radio select -->\n        \n            <!-- <ion-grid>\n                 <ion-row align-items-center>\n             <ion-col col-xl-1>\n\n    <ion-item no-lines>\n      <ion-label stacked color="dark">户外游乐</ion-label>\n      <ion-radio  color = "yellow"></ion-radio>\n    </ion-item>\n  </ion-col>\n    <ion-col col-xl-1>\n    <ion-item no-lines>\n      <ion-label stacked color="dark">益智教育</ion-label>\n      \n      <ion-radio color = "yellow" ></ion-radio>\n    </ion-item>\n  </ion-col>\n\n  <ion-col col-xl-1>\n    <ion-item no-lines>\n      <ion-label  stacked color="dark">动物植物</ion-label>\n      \n      <ion-radio color = "yellow" ></ion-radio>\n    </ion-item>\n  </ion-col>\n\n  <ion-col col-xl-1>\n    <ion-item no-lines>\n      <ion-label stacked color="dark">游乐园</ion-label>\n      \n      <ion-radio color = "yellow" ></ion-radio>\n    </ion-item>\n  </ion-col>\n</ion-row>\n</ion-grid>\n\n\n\n<ion-list>\n<ion-grid>\n<ion-row>\n  <ion-col col-xl-1>\n    <ion-item no-lines>\n      <ion-label stacked color="dark">室内游乐</ion-label>\n      \n      <ion-radio color = "yellow"></ion-radio>\n    </ion-item>\n  </ion-col>\n\n  <ion-col col-xl-1>\n    <ion-item no-lines>\n      <ion-label stacked color="dark">科普知识</ion-label>\n      \n      <ion-radio color = "yellow"></ion-radio>\n    </ion-item>\n  </ion-col>\n\n  <ion-col col-xl-1>\n    <ion-item no-lines>\n      <ion-label stacked color="dark">免费停车</ion-label>\n      \n      <ion-radio color = "yellow"></ion-radio>\n    </ion-item>\n  </ion-col>\n\n  <ion-col col-xl-1>\n    <ion-item no-lines>\n      <ion-label stacked color="dark">其他类型</ion-label>\n      \n      <ion-radio color = "yellow"></ion-radio>\n    </ion-item>\n  </ion-col>\n</ion-row>\n</ion-grid>\n  </ion-list> -->\n<div class="feature-one"  style="margin-top:14px;margin-bottom: 60px">\n<ion-grid>\n  <ion-col no-padding>\n      <button class="selected" (click) = "createEvent()">建立活动</button>\n  </ion-col>\n</ion-grid>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(156);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(238);
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
        return this.afd.list(this.dailyEvent);
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
    //send exchange information
    FirebaseServiceProvider.prototype.sendExchange = function (data) {
        this.afd.list('/Exchange/').push(data);
    };
    //get comments for DailyEvent
    FirebaseServiceProvider.prototype.getCommentForDailyEvent = function (id) {
        return this.afd.list('/Comments/' + id);
    };
    FirebaseServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseServiceProvider);
    return FirebaseServiceProvider;
}());

//# sourceMappingURL=firebase-service.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ActivityFilterComponent);
    return ActivityFilterComponent;
}());

//# sourceMappingURL=activity-filter.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ToastProvider = /** @class */ (function () {
    function ToastProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ToastProvider);
    return ToastProvider;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(436);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_user__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_screen_orientation__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_native_geocoder__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_firebase_service_firebase_service__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_toast_toast__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2___ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_activity_filter_activity_filter__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_firebase__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_firebase__);
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
__WEBPACK_IMPORTED_MODULE_24_firebase___default.a.initializeApp(config);
// import { Calendar } from '@ionic-native/calendar';
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
                __WEBPACK_IMPORTED_MODULE_23__components_activity_filter_activity_filter__["a" /* ActivityFilterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { tabsHideOnSubPages: true }, {
                    links: [
                        { loadChildren: '../pages/activity/activity.module#ActivityPageModule', name: 'ActivityPage', segment: 'activity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activitylist/activitylist.module#ActivitylistPageModule', name: 'ActivitylistPage', segment: 'activitylist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/collection/collection.module#CollectionPageModule', name: 'CollectionPage', segment: 'collection', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exchangeadd/exchangeadd.module#ExchangeaddPageModule', name: 'ExchangeaddPage', segment: 'exchangeadd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exchangedetail/exchangedetail.module#ExchangedetailPageModule', name: 'ExchangedetailPage', segment: 'exchangedetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/information/information.module#InformationPageModule', name: 'InformationPage', segment: 'information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-detail/info-detail.module#InfoDetailPageModule', name: 'InfoDetailPage', segment: 'info-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_21_angularfire2___["a" /* AngularFireModule */].initializeApp(config)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_23__components_activity_filter_activity_filter__["a" /* ActivityFilterComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_19__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_20__providers_toast_toast__["a" /* ToastProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(291);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[303]);
//# sourceMappingURL=main.js.map