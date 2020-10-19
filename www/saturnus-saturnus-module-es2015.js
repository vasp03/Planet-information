(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saturnus-saturnus-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/saturnus/saturnus.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/saturnus/saturnus.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Saturnus</ion-title>\n      <ion-back-button defaultHref=\"home\" slot=\"start\"></ion-back-button>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-img src=\"../../assets/planetbilder/saturnus.png\"></ion-img>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <ion-text>Infoga information här tack!</ion-text>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <ion-text>Infoga information här tack!</ion-text>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <ion-text>Infoga information här tack!</ion-text>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/saturnus/saturnus-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/saturnus/saturnus-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SaturnusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaturnusPageRoutingModule", function() { return SaturnusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _saturnus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saturnus.page */ "./src/app/saturnus/saturnus.page.ts");




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



/***/ }),

/***/ "./src/app/saturnus/saturnus.module.ts":
/*!*********************************************!*\
  !*** ./src/app/saturnus/saturnus.module.ts ***!
  \*********************************************/
/*! exports provided: SaturnusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaturnusPageModule", function() { return SaturnusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _saturnus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saturnus-routing.module */ "./src/app/saturnus/saturnus-routing.module.ts");
/* harmony import */ var _saturnus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saturnus.page */ "./src/app/saturnus/saturnus.page.ts");







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

/***/ "./src/app/saturnus/saturnus.page.scss":
/*!*********************************************!*\
  !*** ./src/app/saturnus/saturnus.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('SpaceBackground.jpg') no-repeat center/cover fixed;\n}\n\nion-img {\n  width: auto;\n  height: auto;\n}\n\n.border {\n  border-style: solid;\n  border-color: white;\n}\n\nion-card {\n  border-style: solid;\n  min-height: 30vh;\n  border-color: #111111;\n  font-size: large;\n  font-style: oblique;\n}\n\nion-text {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2F0dXJudXMvc2F0dXJudXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zYXR1cm51cy9zYXR1cm51cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2Jha2dydW5kc2JpbGRlci9TcGFjZUJhY2tncm91bmQuanBnKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkO1xyXG59XHJcblxyXG5pb24taW1ne1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJvcmRlcntcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgbWluLWhlaWdodDogMzB2aDtcclxuICBib3JkZXItY29sb3I6IzExMTExMTtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbn1cclxuXHJcbmlvbi10ZXh0e1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/saturnus/saturnus.page.ts":
/*!*******************************************!*\
  !*** ./src/app/saturnus/saturnus.page.ts ***!
  \*******************************************/
/*! exports provided: SaturnusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaturnusPage", function() { return SaturnusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SaturnusPage = class SaturnusPage {
    constructor() { }
    ngOnInit() {
    }
};
SaturnusPage.ctorParameters = () => [];
SaturnusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-saturnus',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./saturnus.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/saturnus/saturnus.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./saturnus.page.scss */ "./src/app/saturnus/saturnus.page.scss")).default]
    })
], SaturnusPage);



/***/ })

}]);
//# sourceMappingURL=saturnus-saturnus-module-es2015.js.map