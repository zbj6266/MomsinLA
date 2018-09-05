webpackJsonp([9],{

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitylistPageModule", function() { return ActivitylistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activitylist__ = __webpack_require__(517);
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

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitylistPage; });
/* unused harmony export ActivitylistCard */
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


// import { Calendar } from '@ionic-native/calendar';
/**
 * Generated class for the ActivitylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivitylistPage = /** @class */ (function () {
    function ActivitylistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //
        this.activityCards = [new ActivitylistCard(1),
            new ActivitylistCard(2),
            new ActivitylistCard(3)];
        this.filters = ['<1km'];
        // this.calendar.findAllEventsInNamedCalendar(this.calName).then(
        //  data => {
        //  	this.events = data;
        //   }
        // );
        navCtrl.push('ActivityPage');
    }
    ActivitylistPage.prototype.locate = function () {
        this.sectionSelect.open();
    };
    ActivitylistPage.prototype.filter = function () {
        this.sectionSelect3.open();
    };
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
        console.log('ionViewDidLoad ActivitylistPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('sectionSelect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Select */])
    ], ActivitylistPage.prototype, "sectionSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('sectionSelect2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Select */])
    ], ActivitylistPage.prototype, "sectionSelect2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('sectionSelect3'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Select */])
    ], ActivitylistPage.prototype, "sectionSelect3", void 0);
    ActivitylistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activitylist',template:/*ion-inline-start:"/Users/zbj6266/Internship/MomsinLA/MomsInLA/src/pages/activitylist/activitylist.html"*/'<!--\n  Generated template for the ActivitylistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n  	<div style="display: flex">\n      <div>\n      	<button ion-button clear small navPop>  \n        	<ion-icon mode="ios" name="ios-arrow-back" style="font-size:3rem"></ion-icon> \n      	</button>\n      </div>\n			<div style="flex:1">\n				<ion-searchbar [showCancelButton]="shouldShowCancel" (search)="onSearch($event)">\n				</ion-searchbar>\n			</div>\n    </div>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content >\n  <ion-list>\n  	<ion-grid>\n  		<ion-row justify-content-start>\n        	<ion-col col-3>\n        		<ion-item no-lines>\n    					<button ion-button (click) = "locate()" color = "dark" clear><ion-icon name="locate"></ion-icon></button>\n    				</ion-item>\n					</ion-col>\n					\n					<ion-col col-xl-1>\n    				<ion-item no-lines>\n      				<ion-select #sectionSelect3 [(ngModel)]="filters" interface="popover" cancelText="Nah" okText="Okay!" style="display: none">\n								<ion-option value="<1km">《1km</ion-option>\n								<ion-option value="rating">评分高</ion-option>\n								<ion-option value="View">访问</ion-option>\n								<ion-option value="feature">热门</ion-option>\n      					</ion-select>\n   						</ion-item>\n						</ion-col>\n\n						<ion-col col-3>\n							<ion-buttons end>\n								<button ion-button icon-only (click) = "filter()" color = "dark" clear><ion-icon name="md-color-filter" item-left></ion-icon></button>\n    					</ion-buttons>\n    				</ion-col>\n				</ion-row>\n		</ion-grid>\n    </ion-list>\n\n		<ion-list>\n			<!--<ion-card ion-item *ngFor="let ActivitylistCard of ActivitylistCards">\n				{{ActivitylistCard.id}}\n			</ion-card>-->\n\n			<ion-card>\n				<ion-card-header>\n					Kids Club at the Grove: 儿童俱乐部杂耍表演\n				</ion-card-header>\n				<ion-card-content>\n					<ion-grid>\n						<ion-row>\n							<ion-col col-3>\n								<div><img src="assets/imgs/logo.png" height="90" width="120"></div>\n							</ion-col>\n							<ion-col col-9>\n								<div>时间:2018-01-01</div>\n								<div>地址:189 The Grove DR. CA 91719</div>\n								<div>距离: 3 miles</div>\n								<div>\n									<ion-col><button ion-button>免费停车</button></ion-col>\n									<ion-col><button ion-button>免费停车</button></ion-col>\n									<ion-col>\n										<button ion-button icon-start clear small>\n											<ion-icon name="thumbs-up"></ion-icon>\n											<div>15</div>\n										</button>\n									</ion-col>\n								</div>\n							</ion-col>\n						</ion-row>\n					</ion-grid>\n				</ion-card-content>\n			</ion-card>\n\n		</ion-list>\n\n</ion-content>\n\n    <!-- ion-item>\n      <ion-label>Pets</ion-label>\n      <ion-select [(ngModel)]="pets" multiple="true" [selectOptions]="petAlertOpts">\n        <ion-option *ngFor="let o of petData" [value]="o.value">{{o.text}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Skittles</ion-label>\n      <ion-select [(ngModel)]="skittles" multiple="true" okText="Okay" cancelText="Dismiss" [compareWith]="compareFn">\n        <ion-option *ngFor="let o of skittlesData" [value]="o">{{o.text}}</ion-option>\n      </ion-select>\n    </ion-item> -->\n\n   \n\n  \n    \n\n    <!-- < ion-item> -->\n      <!-- <ion-label>Rating</ion-label>\n      <ion-select [(ngModel)]="rating" interface="action-sheet">\n        <ion-option value="1">1 Star</ion-option>\n        <ion-option value="2">2 Stars</ion-option>\n        <ion-option value="3">3 Stars</ion-option>\n        <ion-option value="4">4 Stars</ion-option>\n        <ion-option value="5">5 Stars</ion-option>\n      </ion-select>\n    </ion-item> --> \n\n<!--  <-----------------Original code--------------->\n <!-- <ion-content padding>\n<ion-searchbar\n  [(ngModel)]="myInput"\n  [showCancelButton]="shouldShowCancel"\n  (ionInput)="onInput($event)"\n  (ionCancel)="onCancel($event)">\n</ion-searchbar>\n<ion-row>\n        <ion-col col-4>\n          <ion-item>\n            <button ion-button (click) = "locate()" color = "dark" clear><ion-icon name="locate"></ion-icon></button>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4>\n          <ion-item class="padding-left-3px">\n            <button ion-button (click) = "calendar()" color = "dark" clear><ion-icon name="calendar"></ion-icon></button>\n          </ion-item>\n        </ion-col>\n        \n        \n\n	<ion-buttons end>\n		<button ion-button icon-only (click) = "filter()" color = "dark" clear><ion-icon name="md-color-filter"></ion-icon></button>\n	</ion-buttons>      		\n	<ion-label>Gender</ion-label>\n  <ion-select [(ngModel)]="gender">\n    <ion-option value="f">Female</ion-option>\n    <ion-option value="m">Male</ion-option>\n  </ion-select>\n	 </ion-row> -->\n	<!-- <ion-row>\n        <ion-col text-center>\n          <ion-item>\n            <button ion-button (click) = "locate()" color = "dark" clear><ion-icon name="locate"></ion-icon></button>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n        	\n        </ion-col>\n        \n     </ion-row> -->\n\n<!-- </ion-content> -->\n'/*ion-inline-end:"/Users/zbj6266/Internship/MomsinLA/MomsInLA/src/pages/activitylist/activitylist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
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