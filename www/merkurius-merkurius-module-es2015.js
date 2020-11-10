(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["merkurius-merkurius-module"],{

/***/ "09Ho":
/*!*******************************************************!*\
  !*** ./src/app/merkurius/merkurius-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MerkuriusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerkuriusPageRoutingModule", function() { return MerkuriusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _merkurius_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./merkurius.page */ "SewC");




const routes = [
    {
        path: '',
        component: _merkurius_page__WEBPACK_IMPORTED_MODULE_3__["MerkuriusPage"]
    }
];
let MerkuriusPageRoutingModule = class MerkuriusPageRoutingModule {
};
MerkuriusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MerkuriusPageRoutingModule);



/***/ }),

/***/ "99k7":
/*!***********************************************!*\
  !*** ./src/app/merkurius/merkurius.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('SpaceBackground.jpg') no-repeat center/cover fixed;\n}\n\nion-img {\n  width: auto;\n  height: auto;\n}\n\n.border {\n  border-style: solid;\n  border-color: white;\n}\n\nion-card {\n  border-style: solid;\n  min-height: 30vh;\n  border-color: #111111;\n  font-size: large;\n  font-style: oblique;\n}\n\nion-text {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVya3VyaXVzL21lcmt1cml1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxRUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21lcmt1cml1cy9tZXJrdXJpdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9iYWtncnVuZHNiaWxkZXIvU3BhY2VCYWNrZ3JvdW5kLmpwZykgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcclxufVxyXG5cclxuaW9uLWltZ3tcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5ib3JkZXJ7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIG1pbi1oZWlnaHQ6IDMwdmg7XHJcbiAgYm9yZGVyLWNvbG9yOiMxMTExMTE7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG59XHJcblxyXG5pb24tdGV4dHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufSJdfQ== */");

/***/ }),

/***/ "Ppli":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merkurius/merkurius.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>Merkurius</ion-title>\r\n      <ion-back-button defaultHref=\"home\" slot=\"start\"></ion-back-button>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-img src=\"../../assets/planetbilder/merkurius.png\"></ion-img>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-text>Infoga information här tack!</ion-text>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-text>Infoga information här tack!</ion-text>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-text>Infoga information här tack!</ion-text>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "SewC":
/*!*********************************************!*\
  !*** ./src/app/merkurius/merkurius.page.ts ***!
  \*********************************************/
/*! exports provided: MerkuriusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerkuriusPage", function() { return MerkuriusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_merkurius_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./merkurius.page.html */ "Ppli");
/* harmony import */ var _merkurius_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./merkurius.page.scss */ "99k7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MerkuriusPage = class MerkuriusPage {
    constructor() { }
    ngOnInit() {
    }
};
MerkuriusPage.ctorParameters = () => [];
MerkuriusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-merkurius',
        template: _raw_loader_merkurius_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_merkurius_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MerkuriusPage);



/***/ }),

/***/ "dxS1":
/*!***********************************************!*\
  !*** ./src/app/merkurius/merkurius.module.ts ***!
  \***********************************************/
/*! exports provided: MerkuriusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerkuriusPageModule", function() { return MerkuriusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _merkurius_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./merkurius-routing.module */ "09Ho");
/* harmony import */ var _merkurius_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./merkurius.page */ "SewC");







let MerkuriusPageModule = class MerkuriusPageModule {
};
MerkuriusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _merkurius_routing_module__WEBPACK_IMPORTED_MODULE_5__["MerkuriusPageRoutingModule"]
        ],
        declarations: [_merkurius_page__WEBPACK_IMPORTED_MODULE_6__["MerkuriusPage"]]
    })
], MerkuriusPageModule);



/***/ })

}]);
//# sourceMappingURL=merkurius-merkurius-module-es2015.js.map