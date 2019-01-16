webpackJsonp([5],{

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPageModule", function() { return InformationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__information__ = __webpack_require__(546);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__information__["a" /* InformationPage */]),
            ],
        })
    ], InformationPageModule);
    return InformationPageModule;
}());

//# sourceMappingURL=information.module.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
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
    function InformationPage(navCtrl, navParams, fsp, storage, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fsp = fsp;
        this.storage = storage;
        this.toast = toast;
        this.cateforyArray = ["/Discount/", "/lectures/", "", "/Exchange/"];
        this.planPurchases = [{ name: "打折软件", index: 0 }, { name: "打折商品", index: 1 }, { name: "团购信息", index: 2 }];
        this.planPurchase = "打折软件";
        this.lectures = [{ name: "保险理财", index: 0 }, { name: "宝宝教育", index: 1 }, { name: "健康常识", index: 2 }, { name: "法律知识", index: 3 }];
        this.lecture = "保险理财";
        this.strategies = [{ name: "学区攻略", index: 0 }, { name: "出游攻略", index: 1 }, { name: "医疗攻略", index: 2 }, { name: "小知识", index: 3 }];
        this.strategy = "学区攻略";
        this.expenses = [{ name: "商品买卖", index: 0 }, { name: "家政服务", index: 1 }, { name: "房屋租住", index: 2 }, { name: "妈妈兼职", index: 3 }];
        this.expense = "商品买卖";
        this.category = navParams.get("item");
        storage.get("user").then(function (data) { return _this.userInfo = data; });
    }
    InformationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InformationPage');
        this.loadData(0);
    };
    InformationPage.prototype.loadData = function (index) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref(this.cateforyArray[this.category]).orderByChild('category').equalTo(index).once('value').then(function (snapshot) {
            console.log(snapshot.val());
            _this.disp = [];
            if (_this.category == 0) {
                _this.disp.push({ "title": "这是个打折软件", "content": "这个打折软件好哈这个打折软件好哈这个打折软件好哈这个打折软件好哈这个打折软件好哈这个打折软件好哈这个打折软件好哈这个打折软件好哈这个打折软件好哈这个打折软件好哈这个打折软件好哈这个打折软件好哈这个打折软件好哈这个打折软件好哈这个打折软件好哈这个打折软件好哈这个打折软件好哈", "img": ["https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"] });
                console.log(_this.disp);
            }
            snapshot.forEach(function (data) {
                var item = data.val();
                item['key'] = data.key;
                console.log(data.val());
                if (_this.category == 0) {
                    _this.disp.push({ "title": "this is discount", "content": "there is a lot of discount.there is a lot of discount.there is a lot of discount.there is a lot of discount." });
                    console.log(_this.disp);
                }
                else if (_this.category == 1) {
                    // item['createTime'] = new Date(data['createDate'].toLocaleDateString("en-US"))
                    _this.disp.push(item);
                }
                else if (_this.category == 2) {
                }
                else {
                    // console.log(item['createTime']);
                    item['createTime'] = new Date(item['createTime']).toLocaleDateString("en-US");
                    _this.disp.push(item);
                }
            });
        });
        // this.fsp.getInformationItems(this.category-1,index).snapshotChanges().pipe(
        //   map(changes=>{
        //     return changes.map(c=>({
        //       key: c.payload.key, ...c.payload.val()
        //     }))
        //   })
        // ).subscribe(data=> {
        //   this.disp$ = data;
        //   console.log(data);
        //   if(this.category == 4){
        //     for(let i = 0; i < this.disp$.length; i++){
        //       this.disp$[i].createTime = new Date(this.disp$[i].createTime).toLocaleDateString("en-US");
        //     }
        //   }
        // });
    };
    InformationPage.prototype.openDetail = function (id) {
        console.log(id);
        this.navCtrl.push('InfoDetailPage', { category: this.category, infoId: id });
    };
    InformationPage.prototype.onSearch = function (event) {
        console.log(event.target.value);
    };
    InformationPage.prototype.openAdd = function () {
        if (this.userInfo == null) {
            this.toast.presentToast("请先登陆", 1000, "middle");
            var n_1 = this.navCtrl;
            setTimeout(function () {
                n_1.push('LoginPage');
            }, 1000);
        }
        else
            this.navCtrl.push('ExchangeaddPage');
    };
    InformationPage.prototype.openExchange = function (id) {
        this.navCtrl.push('ExchangedetailPage', { category: this.category, infoId: id });
    };
    InformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-information',template:/*ion-inline-start:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/information/information.html"*/'<ion-header>\n  <!-- <ion-navbar>\n    <ion-title><ion-searchbar></ion-searchbar></ion-title>\n    \n  </ion-navbar> -->\n  <ion-toolbar>\n    <!-- <ion-grid>\n      <ion-row>\n        <ion-col col-1>\n          <button ion-button clear small navPop style="padding: 0;">  \n            <img class="back-btn" src="assets/image/back.png" />  \n          </button>\n        </ion-col>\n        <ion-col col-11>\n          <ion-searchbar></ion-searchbar>\n        </ion-col>\n      </ion-row>\n    </ion-grid> -->\n    <div style="display: flex">\n      <div>\n      <button ion-button clear small navPop>  \n        <ion-icon mode="ios" name="ios-arrow-back" style="font-size:3rem"></ion-icon> \n      </button>\n      </div>\n      <div style="flex:1"><ion-searchbar [showCancelButton]="shouldShowCancel" (search)="onSearch($event)"></ion-searchbar></div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content fullscreen>\n\n  <!-- information start -->\n  <div class="container" >\n  <div>\n  <ion-segment mode="md" *ngIf="category==0" [(ngModel)]="planPurchase">\n      <ion-segment-button *ngFor="let item of planPurchases" value="{{item.name}}" (click)="loadData(item.index)">\n        <div class="custom_button">{{item.name}}</div>\n      </ion-segment-button>\n    </ion-segment>\n\n  <ion-segment mode="md" *ngIf="category==1" [(ngModel)]="lecture">\n    <ion-segment-button *ngFor="let item of lectures" value="{{item.name}}" (click)="loadData(item.index)">\n      <div class="custom_button">{{item.name}}</div>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-segment mode="md" *ngIf="category==2" [(ngModel)]="strategy">\n      <ion-segment-button *ngFor="let item of strategies" value="{{item.name}}" (click)="loadData(item.index)">\n          <div class="custom_button">{{item.name}}</div>\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-segment mode="md" *ngIf="category==3" [(ngModel)]="expense">\n      <ion-segment-button *ngFor="let item of expenses" value="{{item.name}}" (click)="loadData(item.index)">\n          <div class="custom_button">{{item.name}}</div>\n      </ion-segment-button>\n    </ion-segment>\n\n  </div>\n  <div style="flex:1">\n  <ion-scroll scrollY="true" style="height: 100%;">\n  <div>\n    <ion-list *ngIf="category==0">\n        <div class="info-list" *ngFor="let item of disp" (click)="openDetail(item.key)">\n          <div class="info-title">{{item.title}}</div>\n          <div style="display: flex">\n            <div *ngIf="item.hasOwnProperty(\'img\')" style="width:30%; margin-bottom:15px"><img [src]="item.img" height="80" width="100%"></div>\n            <div class="info-content">\n                {{item.content}}\n              </div>\n          </div>  \n        </div>\n    </ion-list>\n    <ion-list *ngIf="category == 1 || category == 2">\n        <div class="info-list" *ngFor="let item of disp" (click)="openDetail(item.key)">\n          <div class="info-title">{{item.title}}</div>\n          <div style="display: flex">\n            <div *ngIf="item.hasOwnProperty(\'img\')" style="width:30%"><img [src]="item.img" height="80" width="100%"></div>\n            <div class="info-content">\n                {{item.content}}\n             </div>\n          </div>  \n        </div>\n    </ion-list>\n    <ion-list *ngIf="category==3">\n        <div class="info-list" *ngFor="let item of disp"(click)="openExchange(item.key)">\n          <div class="info-title">{{item.title}}</div>\n          <div style="display: flex">\n            <div><img src="assets/imgs/logo.png" height="70" width="110"></div>\n            <div class="exchange-text">\n                <div class="exchange-content">\n                    位置：{{item.zipCode}}\n                 </div>\n                 <div class="exchange-content">\n                    单价：{{item.sale}}\n                 </div>\n            <div class="exchange-time">\n                  发帖日期：{{item.createTime}}\n            </div>\n            </div>\n          </div>  \n        </div>\n    </ion-list>\n  </div>\n  </ion-scroll>\n  </div>\n  </div>\n  <!-- information end -->\n\n  <!-- moms strategies start -->\n  \n\n  <!-- <div *ngIf="category==3" [ngSwitch]="strategy">\n    <ion-list *ngSwitchCase="\'学区攻略\'">\n        <div style="padding-left:9px; padding-right:21px;border-bottom:1px solid #aaaaaa">\n            <div style="font-size: 15px;margin: 7px 0px;width:100%;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财</div>\n            <div style="display: flex">\n              <div><img src="assets/imgs/logo.png" height="70" width="110"></div>\n              <div style="flex:1; font-size: 13px;margin-left: 11px;margin-bottom: 17px;color:rgba(16, 16, 16, 0.5);overflow:hidden;text-overflow: ellipsis;height:76px">\n                  洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财\n               </div>\n            </div>  \n          </div>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'出游攻略\'">\n        <div style="padding-left:9px; padding-right:21px;border-bottom:1px solid #aaaaaa">\n            <div style="font-size: 15px;margin: 7px 0px;width:100%;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财</div>\n            <div style="display: flex">\n              <div style=""><img src="assets/imgs/logo.png" height="70" width="110"></div>\n              <div style="flex:1; font-size: 13px;margin-left: 11px;margin-bottom: 17px;color:rgba(16, 16, 16, 0.5);overflow:hidden;text-overflow: ellipsis;height:76px">\n                  洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财\n               </div>\n            </div>  \n          </div>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'医疗攻略\'">\n        <div style="padding-left:9px; padding-right:21px;border-bottom:1px solid #aaaaaa">\n            <div style="font-size: 15px;margin: 7px 0px;width:100%;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财</div>\n            <div style="display: flex">\n              <div style=""><img src="assets/imgs/logo.png" height="70" width="110"></div>\n              <div style="flex:1; font-size: 13px;margin-left: 11px;margin-bottom: 17px;color:rgba(16, 16, 16, 0.5);overflow:hidden;text-overflow: ellipsis;height:76px">\n                  洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财\n               </div>\n            </div>  \n          </div>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'小知识\'">\n          <div style="padding-left:9px; padding-right:21px;border-bottom:1px solid #aaaaaa">\n              <div style="font-size: 15px;margin: 7px 0px;width:100%;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财</div>\n              <div style="display: flex">\n                <div style=""><img src="assets/imgs/logo.png" height="70" width="110"></div>\n                <div style="flex:1; font-size: 13px;margin-left: 11px;margin-bottom: 17px;color:rgba(16, 16, 16, 0.5);overflow:hidden;text-overflow: ellipsis;height:76px">\n                    洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财\n                 </div>\n              </div>  \n            </div>\n    </ion-list>\n  </div> -->\n  <!-- moms strategies end -->\n\n  <!-- expense platform start -->\n  <!-- <div *ngIf="category==4" [ngSwitch]="expense">\n    <ion-list *ngSwitchCase="\'商品买卖\'">\n        <div style="padding-left:9px; padding-right:21px;border-bottom:1px solid #aaaaaa">\n            <div style="font-size: 15px;margin: 7px 0px;width:100%;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财</div>\n            <div style="display: flex">\n              <div style=""><img src="assets/imgs/logo.png" height="70" width="110"></div>\n              <div style="flex:1; font-size: 13px;margin-left: 11px;margin-bottom: 17px;color:rgba(16, 16, 16, 0.5);overflow:hidden;text-overflow: ellipsis;height:76px">\n                  洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财\n               </div>\n            </div>  \n          </div>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'家政服务\'">\n        <div style="padding-left:9px; padding-right:21px;border-bottom:1px solid #aaaaaa">\n            <div style="font-size: 15px;margin: 7px 0px;width:100%;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财</div>\n            <div style="display: flex">\n              <div style=""><img src="assets/imgs/logo.png" height="70" width="110"></div>\n              <div style="flex:1; font-size: 13px;margin-left: 11px;margin-bottom: 17px;color:rgba(16, 16, 16, 0.5);overflow:hidden;text-overflow: ellipsis;height:76px">\n                  洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财\n               </div>\n            </div>  \n          </div>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'房屋租住\'">\n        <div style="padding-left:9px; padding-right:21px;border-bottom:1px solid #aaaaaa">\n            <div style="font-size: 15px;margin: 7px 0px;width:100%;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财</div>\n            <div style="display: flex">\n              <div style=""><img src="assets/imgs/logo.png" height="70" width="110"></div>\n              <div style="flex:1; font-size: 13px;margin-left: 11px;margin-bottom: 17px;color:rgba(16, 16, 16, 0.5);overflow:hidden;text-overflow: ellipsis;height:76px">\n                  洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财\n               </div>\n            </div>  \n          </div>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'妈妈兼职\'">\n        <div style="padding-left:9px; padding-right:21px;border-bottom:1px solid #aaaaaa">\n            <div style="font-size: 15px;margin: 7px 0px;width:100%;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财</div>\n            <div style="display: flex">\n              <div style=""><img src="assets/imgs/logo.png" height="70" width="110"></div>\n              <div style="flex:1; font-size: 13px;margin-left: 11px;margin-bottom: 17px;color:rgba(16, 16, 16, 0.5);overflow:hidden;text-overflow: ellipsis;height:76px">\n                  洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财洛杉矶理财\n               </div>\n            </div>  \n          </div>\n    </ion-list>\n  </div> -->\n  <!-- expense platform end -->\n</ion-content>\n<ion-footer no-border *ngIf="category==3" transparent>\n    <div class="icon-add" (click)="openAdd()"></div>\n  </ion-footer>\n'/*ion-inline-end:"/Users/fox/Documents/MyProject/MomsinLA/MomsInLA/src/pages/information/information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */]])
    ], InformationPage);
    return InformationPage;
}());

//# sourceMappingURL=information.js.map

/***/ })

});
//# sourceMappingURL=5.js.map