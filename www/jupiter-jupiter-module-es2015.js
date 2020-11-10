(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jupiter-jupiter-module"],{

/***/ "3J/z":
/*!***************************************************!*\
  !*** ./src/app/jupiter/jupiter-routing.module.ts ***!
  \***************************************************/
/*! exports provided: JupiterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JupiterPageRoutingModule", function() { return JupiterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _jupiter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jupiter.page */ "mYc4");




const routes = [
    {
        path: '',
        component: _jupiter_page__WEBPACK_IMPORTED_MODULE_3__["JupiterPage"]
    }
];
let JupiterPageRoutingModule = class JupiterPageRoutingModule {
};
JupiterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], JupiterPageRoutingModule);



/***/ }),

/***/ "P0A7":
/*!*******************************************!*\
  !*** ./src/app/jupiter/jupiter.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('SpaceBackground.jpg') no-repeat center/cover fixed;\n}\n\nion-img {\n  width: auto;\n  height: auto;\n}\n\n.border {\n  border-style: solid;\n  border-color: white;\n}\n\nion-card {\n  border-style: solid;\n  min-height: 30vh;\n  border-color: #111111;\n  font-size: large;\n  font-style: oblique;\n}\n\nion-text {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvanVwaXRlci9qdXBpdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvanVwaXRlci9qdXBpdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmFrZ3J1bmRzYmlsZGVyL1NwYWNlQmFja2dyb3VuZC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgZml4ZWQ7XHJcbn1cclxuXHJcbmlvbi1pbWd7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYm9yZGVye1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBtaW4taGVpZ2h0OiAzMHZoO1xyXG4gIGJvcmRlci1jb2xvcjojMTExMTExO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxufVxyXG5cclxuaW9uLXRleHR7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn0iXX0= */");

/***/ }),

/***/ "P8Qh":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jupiter/jupiter.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>Jupiter</ion-title>\r\n      <ion-back-button defaultHref=\"home\" slot=\"start\"></ion-back-button>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-img src=\"../../assets/planetbilder/jupiter.png\"></ion-img>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-text>Infoga information här tack!</ion-text>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-text>Infoga information här tack!</ion-text>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-text>Infoga information här tack!</ion-text>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "mYc4":
/*!*****************************************!*\
  !*** ./src/app/jupiter/jupiter.page.ts ***!
  \*****************************************/
/*! exports provided: JupiterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JupiterPage", function() { return JupiterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_jupiter_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./jupiter.page.html */ "P8Qh");
/* harmony import */ var _jupiter_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jupiter.page.scss */ "P0A7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let JupiterPage = class JupiterPage {
    constructor() { }
    ngOnInit() {
    }
};
JupiterPage.ctorParameters = () => [];
JupiterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-jupiter',
        template: _raw_loader_jupiter_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_jupiter_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], JupiterPage);



/***/ }),

/***/ "vqHr":
/*!*******************************************!*\
  !*** ./src/app/jupiter/jupiter.module.ts ***!
  \*******************************************/
/*! exports provided: JupiterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JupiterPageModule", function() { return JupiterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _jupiter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jupiter-routing.module */ "3J/z");
/* harmony import */ var _jupiter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jupiter.page */ "mYc4");







let JupiterPageModule = class JupiterPageModule {
};
JupiterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _jupiter_routing_module__WEBPACK_IMPORTED_MODULE_5__["JupiterPageRoutingModule"]
        ],
        declarations: [_jupiter_page__WEBPACK_IMPORTED_MODULE_6__["JupiterPage"]]
    })
], JupiterPageModule);



/***/ })

}]);
//# sourceMappingURL=jupiter-jupiter-module-es2015.js.map