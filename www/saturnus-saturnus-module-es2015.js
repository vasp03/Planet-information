(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saturnus-saturnus-module"],{

/***/ "4DjS":
/*!*********************************************!*\
  !*** ./src/app/saturnus/saturnus.module.ts ***!
  \*********************************************/
/*! exports provided: SaturnusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaturnusPageModule", function() { return SaturnusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _saturnus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saturnus-routing.module */ "fuMh");
/* harmony import */ var _saturnus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saturnus.page */ "epbM");







let SaturnusPageModule = class SaturnusPageModule {
};
SaturnusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _saturnus_routing_module__WEBPACK_IMPORTED_MODULE_5__["SaturnusPageRoutingModule"]
        ],
        declarations: [_saturnus_page__WEBPACK_IMPORTED_MODULE_6__["SaturnusPage"]]
    })
], SaturnusPageModule);



/***/ }),

/***/ "QTNr":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/saturnus/saturnus.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>Saturnus</ion-title>\r\n      <ion-back-button defaultHref=\"home\" slot=\"start\"></ion-back-button>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-img src=\"../../assets/planetbilder/saturnus.png\"></ion-img>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-text>Infoga information här tack!</ion-text>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-text>Infoga information här tack!</ion-text>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-text>Infoga information här tack!</ion-text>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-text>Infoga information här tack!</ion-text>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "eOh4":
/*!*********************************************!*\
  !*** ./src/app/saturnus/saturnus.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('SpaceBackground.jpg') no-repeat center/cover fixed;\n}\n\nion-img {\n  width: auto;\n  height: 50vh;\n}\n\n.border {\n  border-style: solid;\n  border-color: white;\n}\n\nion-card {\n  border-style: solid;\n  min-height: 30vh;\n  border-color: #11111100;\n  background-color: #080808a9;\n  font-size: large;\n  font-style: oblique;\n}\n\nion-text {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2F0dXJudXMvc2F0dXJudXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NhdHVybnVzL3NhdHVybnVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmFrZ3J1bmRzYmlsZGVyL1NwYWNlQmFja2dyb3VuZC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgZml4ZWQ7XHJcbn1cclxuXHJcbmlvbi1pbWd7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG59XHJcblxyXG4uYm9yZGVye1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBtaW4taGVpZ2h0OiAzMHZoO1xyXG4gIGJvcmRlci1jb2xvcjojMTExMTExMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MDgwOGE5O1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxufVxyXG5cclxuaW9uLXRleHR7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn0iXX0= */");

/***/ }),

/***/ "epbM":
/*!*******************************************!*\
  !*** ./src/app/saturnus/saturnus.page.ts ***!
  \*******************************************/
/*! exports provided: SaturnusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaturnusPage", function() { return SaturnusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_saturnus_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./saturnus.page.html */ "QTNr");
/* harmony import */ var _saturnus_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saturnus.page.scss */ "eOh4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SaturnusPage = class SaturnusPage {
    constructor() { }
    ngOnInit() {
    }
};
SaturnusPage.ctorParameters = () => [];
SaturnusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-saturnus',
        template: _raw_loader_saturnus_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_saturnus_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SaturnusPage);



/***/ }),

/***/ "fuMh":
/*!*****************************************************!*\
  !*** ./src/app/saturnus/saturnus-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SaturnusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaturnusPageRoutingModule", function() { return SaturnusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _saturnus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saturnus.page */ "epbM");




const routes = [
    {
        path: '',
        component: _saturnus_page__WEBPACK_IMPORTED_MODULE_3__["SaturnusPage"]
    }
];
let SaturnusPageRoutingModule = class SaturnusPageRoutingModule {
};
SaturnusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SaturnusPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=saturnus-saturnus-module-es2015.js.map