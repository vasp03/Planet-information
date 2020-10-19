(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Välkommen! Vänligen välj planet!</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <!--Rad 1-->\n    <ion-row>\n      <ion-col size=\"12\" size-sm>\n        <ion-card tappable (click)=\"changeSide('merkurius')\">\n          <ion-card-header>\n            <ion-card-title>Merkurius</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            {{InputText}}\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"12\" size-sm>\n        <ion-card tappable (click)=\"changeSide('venus')\">\n          <ion-card-header>\n            <ion-card-title>Venus</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            {{InputText}}\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      \n      <ion-col size=\"12\" size-sm>\n        <ion-card tappable (click)=\"navJorden()\">\n          <ion-card-header>\n            <ion-card-title>Jorden</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            {{InputText}}\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  \n    <!--Rad 2-->\n    <ion-row>\n      <ion-col sizes=\"12\" size-sm>\n        <ion-card tappable (click)=\"changeSide('mars')\">\n          <ion-card-header>\n            <ion-card-title>Mars</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            {{InputText}}\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col sizes=\"12\" size-sm>\n        <ion-card tappable (click)=\"changeSide('jupiter')\">\n          <ion-card-header>\n            <ion-card-title>Jupiter</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            {{InputText}}\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col sizes=\"12\" size-sm>\n        <ion-card tappable (click)=\"changeSide('saturnus')\">\n          <ion-card-header>\n            <ion-card-title>Saturnus</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            {{InputText}}\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row> \n\n    <!--Rad 3-->\n    <ion-row>\n      <ion-col sizes=\"12\" size-sm>\n        <ion-card tappable (click)=\"changeSide('uranus')\">\n          <ion-card-header>\n            <ion-card-title>Uranus</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            {{InputText}}\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      \n      <ion-col sizes=\"12\" size-sm>\n        <ion-card tappable (click)=\"changeSide('neptunus')\">\n          <ion-card-header>\n            <ion-card-title>Neptunus</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            {{InputText}}\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col sizes=\"12\" size-sm>\n        <ion-card tappable (click)=\"changeSide('pluto')\">\n          <ion-card-header>\n            <ion-card-title>Pluto</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            {{InputText}}\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nion-card {\n  width: auto;\n  height: auto;\n  border-style: solid;\n  border-color: #000000;\n  background-color: #222222;\n}\nion-content {\n  --background: url('månen.jpg') no-repeat center/cover fixed;\n  background-color: #ffffff;\n}\nion-header {\n  height: auto;\n  color: #ffffff;\n}\nion-header {\n  border-style: solid;\n  border-color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUVGO0FBQ0E7RUFDRSwyREFBQTtFQUNBLHlCQUFBO0FBRUY7QUFDQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBRUY7QUFDQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5pb24tY2FyZCB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmFrZ3J1bmRzYmlsZGVyL23DpW5lbi5qcGcpIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi1oZWFkZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24taGVhZGVyIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let HomePage = class HomePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.InputText = "Klicka för att välja planeten!";
    }
    navJorden() {
        this.navCtrl.navigateForward('jorden');
    }
    //Byta sida med en funktion som sägs i html sidan. 
    changeSide(sida) {
        this.navCtrl.navigateForward(sida);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map