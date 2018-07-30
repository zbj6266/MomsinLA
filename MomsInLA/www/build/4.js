webpackJsonp([4],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPageModule", function() { return InformationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__information__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InformationPageModule = /** @class */ (function () {
    function InformationPageModule() {
    }
    InformationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__information__["a" /* InformationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__information__["a" /* InformationPage */]),
            ],
        })
    ], InformationPageModule);
    return InformationPageModule;
}());

//# sourceMappingURL=information.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
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


var InformationPage = /** @class */ (function () {
    function InformationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.planPurchases = ["智能消费", "打折软件", "打折商品", "团购信息"];
        this.planPurchase = "智能消费";
        this.lectures = [{ name: "保险理财", index: 1 }, { name: "宝宝教育", index: 2 }, { name: "健康常识", index: 3 }, { name: "法律知识", index: 4 }];
        this.lecture = "保险理财";
        this.strategies = ["学区攻略", "出游攻略", "医疗攻略", "小知识"];
        this.strategy = "学区攻略";
        this.expenses = ["商品买卖", "家政服务", "房屋租住", "妈妈兼职"];
        this.expense = "商品买卖";
        this.category = navParams.get("item");
        // if(this.category == 1)
        //   this.title = "精打细算";
        // else if(this.category == 2)
        //   this.title = "专家讲座";
        // else if(this.category == 3)
        //   this.title = "妈妈攻略";
        // else if(this.category == 4)
        //   this.title = "交易平台";
    }
    InformationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad InformationPage');
        tim.X('info').Get({ query: { category: { main: this.category, sub: 1 } } }).then(function (data) {
            _this.disp = data.data;
        });
    };
    InformationPage.prototype.loadData = function (index) {
        var _this = this;
        tim.X('info').Get({ query: { category: { main: this.category, sub: index } } }).then(function (data) {
            _this.disp = data.data;
        });
    };
    InformationPage.prototype.openDetail = function (id) {
        console.log(id);
    };
    InformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-information',template:/*ion-inline-start:"D:\Internship\MomsinLA\MomsInLA\src\pages\information\information.html"*/'<ion-header>\n\n  <!-- <ion-navbar>\n\n    <ion-title><ion-searchbar></ion-searchbar></ion-title>\n\n    \n\n  </ion-navbar> -->\n\n  <ion-toolbar>\n\n    <!-- <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-1>\n\n          <button ion-button clear small navPop style="padding: 0;">  \n\n            <img class="back-btn" src="assets/image/back.png" />  \n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-11>\n\n          <ion-searchbar></ion-searchbar>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid> -->\n\n    <div style="display: flex">\n\n      <div>\n\n      <button ion-button clear small navPop>  \n\n        <ion-icon mode="ios" name="ios-arrow-back" style="font-size:3rem"></ion-icon> \n\n      </button>\n\n      </div>\n\n      <div style="flex:1"><ion-searchbar></ion-searchbar></div>\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n <ion-segment mode="md" *ngIf="category==1" [(ngModel)]="planPurchase">\n\n    <ion-segment-button *ngFor="let item of planPurchases" value="{{item}}">\n\n        {{item}}\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n  <div *ngIf="category==1" [ngSwitch]="planPurchase" >\n\n    <ion-list *ngSwitchCase="\'智能消费\'">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <ion-item>\n\n            <ion-input placeholder="输入您的座驾" clearInput></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <ion-item class="padding-left-3px">\n\n            <ion-input type="number" placeholder="输入您完成购物最长时限" clearInput></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-4>\n\n          <ion-item>\n\n            <ion-input type="text" placeholder="输入商品1" clearInput></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <ion-item class="padding-left-3px">\n\n            <ion-input type="text" placeholder="输入商品2" clearInput></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <ion-item class="padding-left-3px">\n\n            <ion-input type="text" placeholder="输入商品3" clearInput></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-item>\n\n        <ion-label>是否只去有机商店</ion-label>\n\n        <ion-checkbox [(ngModel)]="pepperoni"></ion-checkbox>\n\n      </ion-item>\n\n      <ion-item text-center>\n\n        <!-- <ion-card text-center> -->\n\n            <button ion-button (click) = "calculate()" color = "dark" outline>计算</button>\n\n        <!-- </ion-card> -->\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'打折软件\'">\n\n      <ion-item>\n\n        <!-- <ion-thumbnail item-start> -->\n\n          <img src="imgs/dealmoon.png">\n\n        <!-- </ion-thumbnail> -->\n\n        <h2>打折软件</h2>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'打折商品\'">\n\n      <ion-item>\n\n        <!-- <ion-thumbnail item-start> -->\n\n          <img src="imgs/discount-poster.jpg">\n\n        <!-- </ion-thumbnail> -->\n\n        <h2>打折商品</h2>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'团购信息\'">\n\n      <ion-item>\n\n        <!-- <ion-thumbnail item-start> -->\n\n          <img src="imgs/group-discount.jpg">\n\n        <!-- </ion-thumbnail> -->\n\n        <h2>团购信息</h2>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <!-- moms strategies end -->\n\n\n\n  <!-- professional lectures start -->\n\n  <div class="container" *ngIf="category==2">\n\n  <div>\n\n  <ion-segment mode="md"  [(ngModel)]="lecture">\n\n    <ion-segment-button *ngFor="let item of lectures" value="{{item.name}}" (click)="loadData(item.index)">\n\n      <div class="custom_button">{{item.name}}</div>\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n  </div>\n\n  <div style="flex:1">\n\n  <ion-scroll scrollY="true" style="height: 100%;">\n\n  <div *ngIf="category==2">\n\n    <ion-list>\n\n        <div class="info-list" *ngFor="let item of disp" (click)="openDetail(item._id)">\n\n          <div class="info-title">{{item.title}}</div>\n\n          <div style="display: flex">\n\n            <div><img src="assets/imgs/logo.png" height="70" width="110"></div>\n\n            <div class="info-content">\n\n                {{item.content}}\n\n             </div>\n\n          </div>  \n\n        </div>\n\n    </ion-list>\n\n    <!-- <ion-list *ngSwitchCase="\'宝宝教育\'">\n\n      <div class="info-list" *ngFor="let item of disp">\n\n        <div class="info-title">{{item.title}}</div>\n\n        <div style="display: flex">\n\n          <div><img src="assets/imgs/logo.png" height="70" width="110"></div>\n\n          <div class="info-content">\n\n              {{item.content}}\n\n           </div>\n\n        </div>  \n\n      </div>\n\n    </ion-list> -->\n\n    <!-- <ion-list *ngSwitchCase="\'健康常识\'">\n\n        <div style="padding-left:9px; padding-right:21px;border-bottom:1px solid #aaaaaa">\n\n            <div style="font-size: 15px;margin: 7px 0px;width:100%;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财</div>\n\n            <div style="display: flex">\n\n              <div style=""><img src="assets/imgs/logo.png" height="70" width="110"></div>\n\n              <div style="flex:1; font-size: 13px;margin-left: 11px;margin-bottom: 17px;color:rgba(16, 16, 16, 0.5);overflow:hidden;text-overflow: ellipsis;height:76px">\n\n                  洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财\n\n               </div>\n\n            </div>  \n\n          </div>\n\n    </ion-list> -->\n\n    <!-- <ion-list *ngSwitchCase="\'法律知识\'">\n\n        <div style="padding-left:9px; padding-right:21px;border-bottom:1px solid #aaaaaa">\n\n            <div style="font-size: 15px;margin: 7px 0px;width:100%;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财</div>\n\n            <div style="display: flex">\n\n              <div style=""><img src="assets/imgs/logo.png" height="70" width="110"></div>\n\n              <div style="flex:1; font-size: 13px;margin-left: 11px;margin-bottom: 17px;color:rgba(16, 16, 16, 0.5);overflow:hidden;text-overflow: ellipsis;height:76px">\n\n                  洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财\n\n               </div>\n\n            </div>  \n\n          </div>\n\n    </ion-list> -->\n\n  </div>\n\n  </ion-scroll>\n\n  </div>\n\n  </div>\n\n  <!-- professional lectures end -->\n\n\n\n  <!-- moms strategies start -->\n\n  <ion-segment mode="md" *ngIf="category==3" [(ngModel)]="strategy">\n\n    <ion-segment-button *ngFor="let item of strategies" value="{{item}}">\n\n        <div class="custom_button">{{item}}</div>\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n  <div *ngIf="category==3" [ngSwitch]="strategy">\n\n    <ion-list *ngSwitchCase="\'学区攻略\'">\n\n        <div style="padding-left:9px; padding-right:21px;border-bottom:1px solid #aaaaaa">\n\n            <div style="font-size: 15px;margin: 7px 0px;width:100%;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财</div>\n\n            <div style="display: flex">\n\n              <div style=""><img src="assets/imgs/logo.png" height="70" width="110"></div>\n\n              <div style="flex:1; font-size: 13px;margin-left: 11px;margin-bottom: 17px;color:rgba(16, 16, 16, 0.5);overflow:hidden;text-overflow: ellipsis;height:76px">\n\n                  洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财\n\n               </div>\n\n            </div>  \n\n          </div>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'出游攻略\'">\n\n        <div style="padding-left:9px; padding-right:21px;border-bottom:1px solid #aaaaaa">\n\n            <div style="font-size: 15px;margin: 7px 0px;width:100%;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财</div>\n\n            <div style="display: flex">\n\n              <div style=""><img src="assets/imgs/logo.png" height="70" width="110"></div>\n\n              <div style="flex:1; font-size: 13px;margin-left: 11px;margin-bottom: 17px;color:rgba(16, 16, 16, 0.5);overflow:hidden;text-overflow: ellipsis;height:76px">\n\n                  洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财\n\n               </div>\n\n            </div>  \n\n          </div>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'医疗攻略\'">\n\n        <div style="padding-left:9px; padding-right:21px;border-bottom:1px solid #aaaaaa">\n\n            <div style="font-size: 15px;margin: 7px 0px;width:100%;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财</div>\n\n            <div style="display: flex">\n\n              <div style=""><img src="assets/imgs/logo.png" height="70" width="110"></div>\n\n              <div style="flex:1; font-size: 13px;margin-left: 11px;margin-bottom: 17px;color:rgba(16, 16, 16, 0.5);overflow:hidden;text-overflow: ellipsis;height:76px">\n\n                  洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财\n\n               </div>\n\n            </div>  \n\n          </div>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'小知识\'">\n\n          <div style="padding-left:9px; padding-right:21px;border-bottom:1px solid #aaaaaa">\n\n              <div style="font-size: 15px;margin: 7px 0px;width:100%;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财</div>\n\n              <div style="display: flex">\n\n                <div style=""><img src="assets/imgs/logo.png" height="70" width="110"></div>\n\n                <div style="flex:1; font-size: 13px;margin-left: 11px;margin-bottom: 17px;color:rgba(16, 16, 16, 0.5);overflow:hidden;text-overflow: ellipsis;height:76px">\n\n                    洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财\n\n                 </div>\n\n              </div>  \n\n            </div>\n\n    </ion-list>\n\n  </div>\n\n  <!-- moms strategies end -->\n\n\n\n  <!-- expense platform start -->\n\n  <ion-segment mode="md" *ngIf="category==4" [(ngModel)]="expense">\n\n    <ion-segment-button *ngFor="let item of expenses" value="{{item}}">\n\n        <div class="custom_button">{{item}}</div>\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n  <div *ngIf="category==4" [ngSwitch]="expense">\n\n    <ion-list *ngSwitchCase="\'商品买卖\'">\n\n        <div style="padding-left:9px; padding-right:21px;border-bottom:1px solid #aaaaaa">\n\n            <div style="font-size: 15px;margin: 7px 0px;width:100%;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财</div>\n\n            <div style="display: flex">\n\n              <div style=""><img src="assets/imgs/logo.png" height="70" width="110"></div>\n\n              <div style="flex:1; font-size: 13px;margin-left: 11px;margin-bottom: 17px;color:rgba(16, 16, 16, 0.5);overflow:hidden;text-overflow: ellipsis;height:76px">\n\n                  洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财\n\n               </div>\n\n            </div>  \n\n          </div>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'家政服务\'">\n\n        <div style="padding-left:9px; padding-right:21px;border-bottom:1px solid #aaaaaa">\n\n            <div style="font-size: 15px;margin: 7px 0px;width:100%;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财</div>\n\n            <div style="display: flex">\n\n              <div style=""><img src="assets/imgs/logo.png" height="70" width="110"></div>\n\n              <div style="flex:1; font-size: 13px;margin-left: 11px;margin-bottom: 17px;color:rgba(16, 16, 16, 0.5);overflow:hidden;text-overflow: ellipsis;height:76px">\n\n                  洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财\n\n               </div>\n\n            </div>  \n\n          </div>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'房屋租住\'">\n\n        <div style="padding-left:9px; padding-right:21px;border-bottom:1px solid #aaaaaa">\n\n            <div style="font-size: 15px;margin: 7px 0px;width:100%;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财</div>\n\n            <div style="display: flex">\n\n              <div style=""><img src="assets/imgs/logo.png" height="70" width="110"></div>\n\n              <div style="flex:1; font-size: 13px;margin-left: 11px;margin-bottom: 17px;color:rgba(16, 16, 16, 0.5);overflow:hidden;text-overflow: ellipsis;height:76px">\n\n                  洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财\n\n               </div>\n\n            </div>  \n\n          </div>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'妈妈兼职\'">\n\n        <div style="padding-left:9px; padding-right:21px;border-bottom:1px solid #aaaaaa">\n\n            <div style="font-size: 15px;margin: 7px 0px;width:100%;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财</div>\n\n            <div style="display: flex">\n\n              <div style=""><img src="assets/imgs/logo.png" height="70" width="110"></div>\n\n              <div style="flex:1; font-size: 13px;margin-left: 11px;margin-bottom: 17px;color:rgba(16, 16, 16, 0.5);overflow:hidden;text-overflow: ellipsis;height:76px">\n\n                  洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财\n\n               </div>\n\n            </div>  \n\n          </div>\n\n    </ion-list>\n\n  </div>\n\n  <!-- expense platform end -->\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Internship\MomsinLA\MomsInLA\src\pages\information\information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], InformationPage);
    return InformationPage;
}());

//# sourceMappingURL=information.js.map

/***/ })

});
//# sourceMappingURL=4.js.map