(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["venus-venus-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/venus/venus.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/venus/venus.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppVenusVenusPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Venus</ion-title>\n      <ion-back-button defaultHref=\"home\" slot=\"start\"></ion-back-button>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-img src=\"../../assets/planetbilder/venus.png\"></ion-img>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <ion-text>Infoga information här tack!</ion-text>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <ion-text>Infoga information här tack!</ion-text>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <ion-text>Infoga information här tack!</ion-text>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/venus/venus-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/venus/venus-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: VenusPageRoutingModule */

    /***/
    function srcAppVenusVenusRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VenusPageRoutingModule", function () {
        return VenusPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _venus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./venus.page */
      "./src/app/venus/venus.page.ts");

      var routes = [{
        path: '',
        component: _venus_page__WEBPACK_IMPORTED_MODULE_3__["VenusPage"]
      }];

      var VenusPageRoutingModule = function VenusPageRoutingModule() {
        _classCallCheck(this, VenusPageRoutingModule);
      };

      VenusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VenusPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/venus/venus.module.ts":
    /*!***************************************!*\
      !*** ./src/app/venus/venus.module.ts ***!
      \***************************************/

    /*! exports provided: VenusPageModule */

    /***/
    function srcAppVenusVenusModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VenusPageModule", function () {
        return VenusPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _venus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./venus-routing.module */
      "./src/app/venus/venus-routing.module.ts");
      /* harmony import */


      var _venus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./venus.page */
      "./src/app/venus/venus.page.ts");

      var VenusPageModule = function VenusPageModule() {
        _classCallCheck(this, VenusPageModule);
      };

      VenusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _venus_routing_module__WEBPACK_IMPORTED_MODULE_5__["VenusPageRoutingModule"]],
        declarations: [_venus_page__WEBPACK_IMPORTED_MODULE_6__["VenusPage"]]
      })], VenusPageModule);
      /***/
    },

    /***/
    "./src/app/venus/venus.page.scss":
    /*!***************************************!*\
      !*** ./src/app/venus/venus.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppVenusVenusPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url('SpaceBackground.jpg') no-repeat center/cover fixed;\n}\n\nion-img {\n  width: auto;\n  height: auto;\n}\n\n.border {\n  border-style: solid;\n  border-color: white;\n}\n\nion-card {\n  border-style: solid;\n  min-height: 30vh;\n  border-color: #111111;\n  font-size: large;\n  font-style: oblique;\n}\n\nion-text {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVudXMvdmVudXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92ZW51cy92ZW51cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2Jha2dydW5kc2JpbGRlci9TcGFjZUJhY2tncm91bmQuanBnKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkO1xyXG59XHJcblxyXG5pb24taW1ne1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJvcmRlcntcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgbWluLWhlaWdodDogMzB2aDtcclxuICBib3JkZXItY29sb3I6IzExMTExMTtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbn1cclxuXHJcbmlvbi10ZXh0e1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/venus/venus.page.ts":
    /*!*************************************!*\
      !*** ./src/app/venus/venus.page.ts ***!
      \*************************************/

    /*! exports provided: VenusPage */

    /***/
    function srcAppVenusVenusPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VenusPage", function () {
        return VenusPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var VenusPage = /*#__PURE__*/function () {
        function VenusPage() {
          _classCallCheck(this, VenusPage);
        }

        _createClass(VenusPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VenusPage;
      }();

      VenusPage.ctorParameters = function () {
        return [];
      };

      VenusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-venus',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./venus.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/venus/venus.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./venus.page.scss */
        "./src/app/venus/venus.page.scss"))["default"]]
      })], VenusPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=venus-venus-module-es5.js.map