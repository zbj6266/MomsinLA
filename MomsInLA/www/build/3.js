webpackJsonp([3],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitylistPageModule", function() { return ActivitylistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activitylist__ = __webpack_require__(279);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activitylist__["a" /* ActivitylistPage */]),
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

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
        this.calName = '';
        this.events = [];
        this.event = {
            month: '2018-07-01',
            timeStarts: '07:43',
        };
        this.calName = navParams.get('name');
        this.gaming = 'n64';
        this.filters = ['<1km'];
        // this.calendar.findAllEventsInNamedCalendar(this.calName).then(
        //  data => {
        //  	this.events = data;
        //   }
        // );
    }
    ActivitylistPage.prototype.locate = function () {
        this.sectionSelect.open();
    };
    ActivitylistPage.prototype.calendar = function () {
        this.sectionSelect2.open();
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Select */])
    ], ActivitylistPage.prototype, "sectionSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('sectionSelect2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Select */])
    ], ActivitylistPage.prototype, "sectionSelect2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('sectionSelect3'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Select */])
    ], ActivitylistPage.prototype, "sectionSelect3", void 0);
    ActivitylistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activitylist',template:/*ion-inline-start:"D:\Internship\MomsinLA\MomsInLA\src\pages\activitylist\activitylist.html"*/'<!--\n\n  Generated template for the ActivitylistPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>activitylist</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content >\n\n<ion-searchbar\n\n  [(ngModel)]="myInput"\n\n  [showCancelButton]="shouldShowCancel"\n\n  (ionInput)="onInput($event)"\n\n  (ionCancel)="onCancel($event)">\n\n</ion-searchbar>\n\n\n\n\n\n  <ion-list>\n\n  	<ion-grid>\n\n  		<ion-row justify-content-start>\n\n        	<ion-col col-3>\n\n        		<ion-item no-lines>\n\n    			<button ion-button (click) = "locate()" color = "dark" clear><ion-icon name="locate"></ion-icon></button>\n\n    			</ion-item>\n\n    		</ion-col>\n\n\n\n\n\n    \n\n\n\n    <!-- <ion-item>\n\n      <ion-label>Gaming</ion-label>\n\n      <ion-select [(ngModel)]="gaming" okText="Okay" cancelText="Dismiss">\n\n        <ion-option value="nes">NES</ion-option>\n\n        <ion-option value="n64">Nintendo64</ion-option>\n\n        <ion-option value="ps">PlayStation</ion-option>\n\n        <ion-option value="genesis">Sega Genesis</ion-option>\n\n        <ion-option value="saturn">Sega Saturn</ion-option>\n\n        <ion-option value="snes">SNES</ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n    \n\n		    \n\n\n\n		      <!-- <ion-col col-4>\n\n		      <ion-select  (ionChange)="monthChange($event)">\n\n		        <ion-option value="01">January</ion-option>\n\n		        <ion-option value="02">February</ion-option>\n\n		        <ion-option value="03">March</ion-option>\n\n		        <ion-option value="04">April</ion-option>\n\n		        <ion-option value="05">May</ion-option>\n\n		        <ion-option value="06">June</ion-option>\n\n		        <ion-option value="07">July</ion-option>\n\n		        <ion-option value="08">August</ion-option>\n\n		        <ion-option value="09">September</ion-option>\n\n		        <ion-option value="10">October</ion-option>\n\n		        <ion-option value="11">November</ion-option>\n\n		        <ion-option value="12">December</ion-option>\n\n		      </ion-select>\n\n		  </ion-col>\n\n		      <ion-col col-2>\n\n		      <ion-select #sectionSelect2 (ionChange)="dayChange($event)">\n\n		        <ion-option value="01">01</ion-option>\n\n		        <ion-option value="02">02</ion-option>\n\n		        <ion-option value="03">03</ion-option>\n\n		        <ion-option value="04">04</ion-option>\n\n		        <ion-option value="05">05</ion-option>\n\n		        <ion-option value="06">06</ion-option>\n\n		        <ion-option value="07">07</ion-option>\n\n		        <ion-option value="08">08</ion-option>\n\n		        <ion-option value="09">09</ion-option>\n\n		        <ion-option value="10">10</ion-option>\n\n		        <ion-option value="11">11</ion-option>\n\n		        <ion-option value="12">12</ion-option>\n\n		        <ion-option value="13">13</ion-option>\n\n		        <ion-option value="14">14</ion-option>\n\n		        <ion-option value="15">15</ion-option>\n\n		        <ion-option value="16">16</ion-option>\n\n		        <ion-option value="17">17</ion-option>\n\n		        <ion-option value="18">18</ion-option>\n\n		        <ion-option value="19">19</ion-option>\n\n		        <ion-option value="20">20</ion-option>\n\n		        <ion-option value="21">21</ion-option>\n\n		        <ion-option value="22">22</ion-option>\n\n		        <ion-option value="23">23</ion-option>\n\n		        <ion-option value="24">24</ion-option>\n\n		        <ion-option value="25">25</ion-option>\n\n		        <ion-option value="26">26</ion-option>\n\n		        <ion-option value="27">27</ion-option>\n\n		        <ion-option value="28">28</ion-option>\n\n		        <ion-option value="29">29</ion-option>\n\n		        <ion-option value="30">30</ion-option>\n\n		        <ion-option value="31">31</ion-option>\n\n\n\n		      </ion-select>\n\n		    \n\n		\n\n		</ion-col> -->\n\n		\n\n	<ion-col col-xl-1>\n\n		<ion-item no-lines >\n\n\n\n		 <ion-datetime #sectionSelect2 displayFormat="MMM DD YYYY" [(ngModel)]="event" style="display: none"></ion-datetime>\n\n		</ion-item>\n\n	</ion-col>\n\n	<ion-col col-3>\n\n		<ion-buttons end>\n\n				<button ion-button icon-only (click) = "calendar()" color = "dark" clear><ion-icon name="calendar" item-right></ion-icon></button>\n\n    		</ion-buttons>\n\n    	</ion-col>\n\n	\n\n	\n\n<ion-col col-xl-1>\n\n	\n\n    <ion-item no-lines>\n\n      \n\n	\n\n      <ion-select #sectionSelect3 [(ngModel)]="filters" interface="popover" cancelText="Nah" okText="Okay!" style="display: none">\n\n        <ion-option value="<1km">《1km</ion-option>\n\n        <ion-option value="rating">评分高</ion-option>\n\n        <ion-option value="View">访问</ion-option>\n\n        <ion-option value="feature">热门</ion-option>\n\n        \n\n      		</ion-select>\n\n   	 	</ion-item>\n\n    \n\n	</ion-col>\n\n	<ion-col col-3>\n\n			<ion-buttons end>\n\n				<button ion-button icon-only (click) = "filter()" color = "dark" clear><ion-icon name="md-color-filter" item-left></ion-icon></button>\n\n    		</ion-buttons>\n\n    </ion-col>\n\n			</ion-row>\n\n		</ion-grid>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n\n\n    <!-- ion-item>\n\n      <ion-label>Pets</ion-label>\n\n      <ion-select [(ngModel)]="pets" multiple="true" [selectOptions]="petAlertOpts">\n\n        <ion-option *ngFor="let o of petData" [value]="o.value">{{o.text}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Skittles</ion-label>\n\n      <ion-select [(ngModel)]="skittles" multiple="true" okText="Okay" cancelText="Dismiss" [compareWith]="compareFn">\n\n        <ion-option *ngFor="let o of skittlesData" [value]="o">{{o.text}}</ion-option>\n\n      </ion-select>\n\n    </ion-item> -->\n\n\n\n   \n\n\n\n  \n\n    \n\n\n\n    <!-- < ion-item> -->\n\n      <!-- <ion-label>Rating</ion-label>\n\n      <ion-select [(ngModel)]="rating" interface="action-sheet">\n\n        <ion-option value="1">1 Star</ion-option>\n\n        <ion-option value="2">2 Stars</ion-option>\n\n        <ion-option value="3">3 Stars</ion-option>\n\n        <ion-option value="4">4 Stars</ion-option>\n\n        <ion-option value="5">5 Stars</ion-option>\n\n      </ion-select>\n\n    </ion-item> --> \n\n\n\n<!--  <-----------------Original code--------------->\n\n <!-- <ion-content padding>\n\n<ion-searchbar\n\n  [(ngModel)]="myInput"\n\n  [showCancelButton]="shouldShowCancel"\n\n  (ionInput)="onInput($event)"\n\n  (ionCancel)="onCancel($event)">\n\n</ion-searchbar>\n\n<ion-row>\n\n        <ion-col col-4>\n\n          <ion-item>\n\n            <button ion-button (click) = "locate()" color = "dark" clear><ion-icon name="locate"></ion-icon></button>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <ion-item class="padding-left-3px">\n\n            <button ion-button (click) = "calendar()" color = "dark" clear><ion-icon name="calendar"></ion-icon></button>\n\n          </ion-item>\n\n        </ion-col>\n\n        \n\n        \n\n\n\n	<ion-buttons end>\n\n		<button ion-button icon-only (click) = "filter()" color = "dark" clear><ion-icon name="md-color-filter"></ion-icon></button>\n\n	</ion-buttons>      		\n\n	<ion-label>Gender</ion-label>\n\n  <ion-select [(ngModel)]="gender">\n\n    <ion-option value="f">Female</ion-option>\n\n    <ion-option value="m">Male</ion-option>\n\n  </ion-select>\n\n	 </ion-row> -->\n\n	<!-- <ion-row>\n\n        <ion-col text-center>\n\n          <ion-item>\n\n            <button ion-button (click) = "locate()" color = "dark" clear><ion-icon name="locate"></ion-icon></button>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n        	\n\n        </ion-col>\n\n        \n\n     </ion-row> -->\n\n\n\n<!-- </ion-content> -->\n\n'/*ion-inline-end:"D:\Internship\MomsinLA\MomsInLA\src\pages\activitylist\activitylist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ActivitylistPage);
    return ActivitylistPage;
}());

//# sourceMappingURL=activitylist.js.map

/***/ })

});
//# sourceMappingURL=3.js.map