(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pluto-pluto-module"],{

/***/ "BhEW":
/*!*************************************!*\
  !*** ./src/app/pluto/pluto.page.ts ***!
  \*************************************/
/*! exports provided: PlutoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlutoPage", function() { return PlutoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pluto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pluto.page.html */ "nSd/");
/* harmony import */ var _pluto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pluto.page.scss */ "UJBj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PlutoPage = class PlutoPage {
    constructor() { }
    ngOnInit() {
    }
};
PlutoPage.ctorParameters = () => [];
PlutoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pluto',
        template: _raw_loader_pluto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pluto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PlutoPage);



/***/ }),

/***/ "FhZm":
/*!***************************************!*\
  !*** ./src/app/pluto/pluto.module.ts ***!
  \***************************************/
/*! exports provided: PlutoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlutoPageModule", function() { return PlutoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pluto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pluto-routing.module */ "PkN7");
/* harmony import */ var _pluto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pluto.page */ "BhEW");







let PlutoPageModule = class PlutoPageModule {
};
PlutoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pluto_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlutoPageRoutingModule"]
        ],
        declarations: [_pluto_page__WEBPACK_IMPORTED_MODULE_6__["PlutoPage"]]
    })
], PlutoPageModule);



/***/ }),

/***/ "PkN7":
/*!***********************************************!*\
  !*** ./src/app/pluto/pluto-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PlutoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlutoPageRoutingModule", function() { return PlutoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pluto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pluto.page */ "BhEW");




const routes = [
    {
        path: '',
        component: _pluto_page__WEBPACK_IMPORTED_MODULE_3__["PlutoPage"]
    }
];
let PlutoPageRoutingModule = class PlutoPageRoutingModule {
};
PlutoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlutoPageRoutingModule);



/***/ }),

/***/ "UJBj":
/*!***************************************!*\
  !*** ./src/app/pluto/pluto.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('SpaceBackground.jpg') no-repeat center/cover fixed;\n}\n\nion-img {\n  width: auto;\n  height: auto;\n}\n\n.border {\n  border-style: solid;\n  border-color: white;\n}\n\nion-card {\n  border-style: solid;\n  min-height: 30vh;\n  border-color: #111111;\n  font-size: large;\n  font-style: oblique;\n}\n\nion-text {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGx1dG8vcGx1dG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wbHV0by9wbHV0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2Jha2dydW5kc2JpbGRlci9TcGFjZUJhY2tncm91bmQuanBnKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkO1xyXG59XHJcblxyXG5pb24taW1ne1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJvcmRlcntcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgbWluLWhlaWdodDogMzB2aDtcclxuICBib3JkZXItY29sb3I6IzExMTExMTtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbn1cclxuXHJcbmlvbi10ZXh0e1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59Il19 */");

/***/ }),

/***/ "nSd/":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pluto/pluto.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>Pluto</ion-title>\r\n      <ion-back-button defaultHref=\"home\" slot=\"start\"></ion-back-button>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-img src=\"../../assets/planetbilder/pluto.png\"></ion-img>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-text>Infoga information här tack!</ion-text>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-text>Infoga information här tack!</ion-text>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-text>Infoga information här tack!</ion-text>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pluto-pluto-module-es2015.js.map