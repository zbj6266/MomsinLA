webpackJsonp([9],{

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitylistPageModule", function() { return ActivitylistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activitylist__ = __webpack_require__(530);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActivitylistPageModule = /** @class */ (function () {
    function ActivitylistPageModule() {
    }
    ActivitylistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__activitylist__["a" /* ActivitylistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activitylist__["a" /* ActivitylistPage */]),
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__activitylist__["a" /* ActivitylistPage */],
            ]
        })
    ], ActivitylistPageModule);
    return ActivitylistPageModule;
}());

//# sourceMappingURL=activitylist.module.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitylistPage; });
/* unused harmony export ActivitylistCard */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_activity_filter_activity_filter__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(156);
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







var ActivitylistPage = /** @class */ (function () {
    // @ViewChild('sectionSelect') sectionSelect: Select;
    // @ViewChild('sectionSelect2') sectionSelect2: Select;
    // @ViewChild('sectionSelect3') sectionSelect3: Select;
    // locate() {
    //    this.sectionSelect.open();
    // }
    // filter() {
    //    this.sectionSelect3.open();
    // }
    function ActivitylistPage(navCtrl, navParams, fsp, geocoder, popoverCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fsp = fsp;
        this.geocoder = geocoder;
        this.popoverCtrl = popoverCtrl;
        this.geolocation = geolocation;
        //
        this.activityCards = [new ActivitylistCard(1),
            new ActivitylistCard(2),
            new ActivitylistCard(3)];
        this.disp$ = [];
        this.filters = ['<1km'];
        this.cityLocation = '(定位中)';
    }
    ActivitylistPage.prototype.compareFn = function (option1, option2) {
        return option1.value === option2.value;
    };
    ActivitylistPage.prototype.monthChange = function (val) {
        console.log('Month Change:', val);
    };
    ActivitylistPage.prototype.dayChange = function (val) {
        console.log('Day Change:', val);
    };
    ActivitylistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ActivitylistPage');
        this.loadData();
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp);
            _this.geocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude, options)
                .then(function (result) {
                console.log(JSON.stringify(result[0]));
                _this.cityLocation = result[0].locality;
            })
                .catch(function (error) { return console.log(error); });
        }).catch(function (err) {
            console.log(err);
        });
    };
    ActivitylistPage.prototype.loadData = function () {
        var _this = this;
        this.fsp.getDailyEvent().snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                var item = {};
                item['key'] = data[i]['key'];
                item['title'] = data[i]['title'];
                item['address'] = data[i]['address'];
                item['imgs'] = data[i]['imgs'];
                item['firstBegin'] = data[i]['activityDate'][0]['from'];
                item['activityDate'] = [];
                for (var j = 0; j < data[i]['activityDate'].length; j++) {
                    var start = new Date(data[i]['activityDate'][j]['from'] / 1000).toLocaleString('en-US');
                    var end = new Date(data[i]['activityDate'][j]['to'] / 1000).toLocaleString('en-US');
                    item['activityDate'].push({ 'from': start, 'to': end });
                }
                if (data[i]['eventCategory1'])
                    item['isFree'] = '免费';
                else
                    item['isFree'] = '收费';
                if (data[i]['eventCategory2'])
                    item['isPublic'] = '公共活动';
                else
                    item['isPublic'] = '私人活动';
                item['numsLike'] = data[i]['numsLike'];
                console.log(item);
                _this.disp$.push(item);
            }
        });
    };
    ActivitylistPage.prototype.openDetail = function (key) {
        console.log(key);
        this.navCtrl.push('ActivityPage', { infoId: key });
    };
    ActivitylistPage.prototype.presentPopover = function (event) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_activity_filter_activity_filter__["a" /* ActivityFilterComponent */]);
        popover.present({
            ev: event
        });
        popover.onDidDismiss(function (data) {
            switch (data.idx) {
                case 0:
                    _this.disp$.sort(function (a, b) {
                        return b.firstBegin - a.firstBegin;
                    });
                    return;
                case 1:
                    _this.disp$.sort(function (a, b) {
                        return b.numsLike - a.numsLike;
                    });
            }
        });
    };
    ActivitylistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activitylist',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/activitylist/activitylist.html"*/'<!--\n  Generated template for the ActivitylistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n  	<div style="display: flex">\n      <div>\n      	<button ion-button clear small navPop>  \n        	<ion-icon mode="ios" name="ios-arrow-back" style="font-size: 3rem"></ion-icon> \n      	</button>\n      </div>\n			<div style="flex:1">\n				<ion-searchbar [showCancelButton]="shouldShowCancel" (search)="onSearch($event)">\n				</ion-searchbar>\n			</div>\n    </div>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content >\n	<div style="display: flex; padding: 8px 10px 8px 10px;font-size:16px; border-bottom: 1px solid #bebbbb">\n		<div style="flex:1"><img src="assets/icon/icon_location.png" height="20" width="20" ><span style="margin:4px;color:#aaaaaa">{{cityLocation}}</span></div>\n    <div (click)=\'presentPopover($event)\'><img src="assets/icon/icon_filter.png" width="20" height="20"></div>\n	</div>\n		<ion-select #sectionSelect3 [(ngModel)]="filters" interface="popover" cancelText="Cancel" okText="Ok" style="display: none">\n			<ion-option value="<1km">《1km</ion-option>\n			<ion-option value="rating">评分高</ion-option>\n			<ion-option value="View">访问</ion-option>\n			<ion-option value="feature">热门</ion-option>\n		</ion-select>\n\n		<!-- <ion-list>\n			<ion-card ion-item *ngFor="let ActivitylistCard of ActivitylistCards">\n				{{ActivitylistCard.id}}\n			</ion-card>\n\n			<ion-card>\n				<ion-card-header>\n					Kids Club at the Grove: 儿童俱乐部杂耍表演\n				</ion-card-header>\n				<ion-card-content>\n					<ion-grid>\n						<ion-row>\n							<ion-col col-3>\n								<div><img src="assets/imgs/logo.png" height="90" width="120"></div>\n							</ion-col>\n							<ion-col col-9>\n								<div>时间:2018-01-01</div>\n								<div>地址:189 The Grove DR. CA 91719</div>\n								<div>距离: 3 miles</div>\n								<div>\n									<ion-col><button ion-button>免费停车</button></ion-col>\n									<ion-col><button ion-button>免费停车</button></ion-col>\n									<ion-col>\n										<button ion-button icon-start clear small>\n											<ion-icon name="thumbs-up"></ion-icon>\n											<div>15</div>\n										</button>\n									</ion-col>\n								</div>\n							</ion-col>\n						</ion-row>\n					</ion-grid>\n				</ion-card-content>\n			</ion-card>\n\n		</ion-list> -->\n		<div class="list-item" *ngFor="let item of disp$" (click)="openDetail(item.key)">\n			<div class="title">{{item.title}}</div>\n			<div class="list-content">\n					<img *ngIf="item.imgs.length>=1" class="list-img" [src]="item.imgs[0]" alt="">\n				<div class="list-text">\n					<div class="time">时间：<span *ngFor="let time of item.activityDate">{{time.from}} 至 {{time.to}};    </span></div>\n					<div class="address">地址：{{item.address}}</div>\n					<div class="distant">距离：3 英里</div>\n					<div style="display: flex;">\n							<div style="width:35%;font-size: 1.3rem;background-color: #ffd500;text-align: center;height:2rem;margin:4px">{{item.isFree}}</div>\n							<div style="width:35%;font-size: 1.3rem;background-color: #ffd500;text-align: center;height:2rem;margin:4px">{{item.isPublic}}</div>\n							<div style="float:right;margin-top:8px;margin-left:4px">\n								<img src="assets/imgs/icon_like.png" width="16" height="16"><span style="margin-left:4px;line-height: 16px">{{item.numsLike}}</span>\n							</div>\n						</div>\n				</div>\n				\n			</div>\n		</div>\n\n</ion-content>\n\n    <!-- ion-item>\n      <ion-label>Pets</ion-label>\n      <ion-select [(ngModel)]="pets" multiple="true" [selectOptions]="petAlertOpts">\n        <ion-option *ngFor="let o of petData" [value]="o.value">{{o.text}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Skittles</ion-label>\n      <ion-select [(ngModel)]="skittles" multiple="true" okText="Okay" cancelText="Dismiss" [compareWith]="compareFn">\n        <ion-option *ngFor="let o of skittlesData" [value]="o">{{o.text}}</ion-option>\n      </ion-select>\n    </ion-item> -->\n\n   \n\n  \n    \n\n    <!-- < ion-item> -->\n      <!-- <ion-label>Rating</ion-label>\n      <ion-select [(ngModel)]="rating" interface="action-sheet">\n        <ion-option value="1">1 Star</ion-option>\n        <ion-option value="2">2 Stars</ion-option>\n        <ion-option value="3">3 Stars</ion-option>\n        <ion-option value="4">4 Stars</ion-option>\n        <ion-option value="5">5 Stars</ion-option>\n      </ion-select>\n    </ion-item> --> \n\n<!--  <-----------------Original code--------------->\n <!-- <ion-content padding>\n<ion-searchbar\n  [(ngModel)]="myInput"\n  [showCancelButton]="shouldShowCancel"\n  (ionInput)="onInput($event)"\n  (ionCancel)="onCancel($event)">\n</ion-searchbar>\n<ion-row>\n        <ion-col col-4>\n          <ion-item>\n            <button ion-button (click) = "locate()" color = "dark" clear><ion-icon name="locate"></ion-icon></button>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4>\n          <ion-item class="padding-left-3px">\n            <button ion-button (click) = "calendar()" color = "dark" clear><ion-icon name="calendar"></ion-icon></button>\n          </ion-item>\n        </ion-col>\n        \n        \n\n	<ion-buttons end>\n		<button ion-button icon-only (click) = "filter()" color = "dark" clear><ion-icon name="md-color-filter"></ion-icon></button>\n	</ion-buttons>      		\n	<ion-label>Gender</ion-label>\n  <ion-select [(ngModel)]="gender">\n    <ion-option value="f">Female</ion-option>\n    <ion-option value="m">Male</ion-option>\n  </ion-select>\n	 </ion-row> -->\n	<!-- <ion-row>\n        <ion-col text-center>\n          <ion-item>\n            <button ion-button (click) = "locate()" color = "dark" clear><ion-icon name="locate"></ion-icon></button>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n        	\n        </ion-col>\n        \n     </ion-row> -->\n\n<!-- </ion-content> -->\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/activitylist/activitylist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */]])
    ], ActivitylistPage);
    return ActivitylistPage;
}());

var ActivitylistCard = /** @class */ (function () {
    function ActivitylistCard(id) {
        this.id = id;
        this.title = 'Kids Club at the Grove: blah blah';
        this.time = '2018-01-01T18:00:00'; //@todo reformat
        this.location = '189 The Grove DR. CA91719'; //@todo reformat
        this.featrues = ['shoufei 10 dao', 'huwaiyouwan'];
        this.likes = 15;
        this.ThumbnailImg = 'assets/image/activityThumbnail.png';
        this.isOfficial = false;
    }
    return ActivitylistCard;
}());

//# sourceMappingURL=activitylist.js.map

/***/ })

});
//# sourceMappingURL=9.js.map