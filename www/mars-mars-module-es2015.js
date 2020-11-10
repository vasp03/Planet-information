(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mars-mars-module"],{

/***/ "/RjX":
/*!*************************************!*\
  !*** ./src/app/mars/mars.module.ts ***!
  \*************************************/
/*! exports provided: MarsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarsPageModule", function() { return MarsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _mars_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mars-routing.module */ "A1PL");
/* harmony import */ var _mars_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mars.page */ "WJHO");







let MarsPageModule = class MarsPageModule {
};
MarsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mars_routing_module__WEBPACK_IMPORTED_MODULE_5__["MarsPageRoutingModule"]
        ],
        declarations: [_mars_page__WEBPACK_IMPORTED_MODULE_6__["MarsPage"]]
    })
], MarsPageModule);



/***/ }),

/***/ "A1PL":
/*!*********************************************!*\
  !*** ./src/app/mars/mars-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MarsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarsPageRoutingModule", function() { return MarsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mars_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mars.page */ "WJHO");




const routes = [
    {
        path: '',
        component: _mars_page__WEBPACK_IMPORTED_MODULE_3__["MarsPage"]
    }
];
let MarsPageRoutingModule = class MarsPageRoutingModule {
};
MarsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MarsPageRoutingModule);



/***/ }),

/***/ "FV+0":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mars/mars.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>mars</ion-title>\r\n      <ion-back-button defaultHref=\"home\" slot=\"start\"></ion-back-button>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-con>\r\n        <ion-card> \r\n\r\n        </ion-card>\r\n      </ion-con>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-con>\r\n        <ion-card> \r\n          \r\n        </ion-card>\r\n      </ion-con>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-con>\r\n        <ion-card> \r\n          \r\n        </ion-card>\r\n      </ion-con>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-con>\r\n        <ion-card> \r\n          \r\n        </ion-card>\r\n      </ion-con>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "WJHO":
/*!***********************************!*\
  !*** ./src/app/mars/mars.page.ts ***!
  \***********************************/
/*! exports provided: MarsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarsPage", function() { return MarsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mars_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mars.page.html */ "FV+0");
/* harmony import */ var _mars_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mars.page.scss */ "fiIv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MarsPage = class MarsPage {
    constructor() {
    }
    ngOnInit() {
    }
};
MarsPage.ctorParameters = () => [];
MarsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mars',
        template: _raw_loader_mars_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mars_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MarsPage);



/***/ }),

/***/ "fiIv":
/*!*************************************!*\
  !*** ./src/app/mars/mars.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('mars.jpg') no-repeat center/cover fixed;\n}\n\nion-img {\n  width: auto;\n  height: auto;\n}\n\n.border {\n  border-style: solid;\n  border-color: white;\n}\n\nion-card {\n  border-style: solid;\n  min-height: 20vh;\n  border-color: #111111;\n  font-size: large;\n  font-style: oblique;\n}\n\nion-text {\n  color: #ffffff;\n}\n\nion-con {\n  width: 70vh;\n}\n\nion-row {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFycy9tYXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFycy9tYXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmFrZ3J1bmRzYmlsZGVyL21hcnMuanBnKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkO1xyXG59XHJcblxyXG5pb24taW1ne1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJvcmRlcntcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgbWluLWhlaWdodDogMjB2aDtcclxuICBib3JkZXItY29sb3I6IzExMTExMTtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbn1cclxuXHJcbmlvbi10ZXh0e1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5pb24tY29ue1xyXG4gIHdpZHRoOiA3MHZoO1xyXG59XHJcblxyXG5pb24tcm93e1xyXG4gIGhlaWdodDogYXV0bztcclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=mars-mars-module-es2015.js.map