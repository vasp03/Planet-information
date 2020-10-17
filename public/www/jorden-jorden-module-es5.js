(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jorden-jorden-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/jorden/jorden.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jorden/jorden.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppJordenJordenPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Jorden</ion-title>\n      <ion-back-button defaultHref=\"home\" slot=\"start\"></ion-back-button>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-img src=\"../../assets/planetbilder/Jorden.png\"></ion-img>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <ion-text>Infoga information här tack!</ion-text>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <ion-text>Infoga information här tack!</ion-text>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <ion-text>Infoga information här tack!</ion-text>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/jorden/jorden-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/jorden/jorden-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: JordenPageRoutingModule */

    /***/
    function srcAppJordenJordenRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JordenPageRoutingModule", function () {
        return JordenPageRoutingModule;
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


      var _jorden_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./jorden.page */
      "./src/app/jorden/jorden.page.ts");

      var routes = [{
        path: '',
        component: _jorden_page__WEBPACK_IMPORTED_MODULE_3__["JordenPage"]
      }];

      var JordenPageRoutingModule = function JordenPageRoutingModule() {
        _classCallCheck(this, JordenPageRoutingModule);
      };

      JordenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], JordenPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/jorden/jorden.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/jorden/jorden.module.ts ***!
      \*****************************************/

    /*! exports provided: JordenPageModule */

    /***/
    function srcAppJordenJordenModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JordenPageModule", function () {
        return JordenPageModule;
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


      var _jorden_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./jorden-routing.module */
      "./src/app/jorden/jorden-routing.module.ts");
      /* harmony import */


      var _jorden_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./jorden.page */
      "./src/app/jorden/jorden.page.ts");

      var JordenPageModule = function JordenPageModule() {
        _classCallCheck(this, JordenPageModule);
      };

      JordenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _jorden_routing_module__WEBPACK_IMPORTED_MODULE_5__["JordenPageRoutingModule"]],
        declarations: [_jorden_page__WEBPACK_IMPORTED_MODULE_6__["JordenPage"]]
      })], JordenPageModule);
      /***/
    },

    /***/
    "./src/app/jorden/jorden.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/jorden/jorden.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppJordenJordenPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url('jorden.jpg') no-repeat center/cover fixed;\n}\n\nion-img {\n  width: auto;\n  height: auto;\n}\n\n.border {\n  border-style: solid;\n  border-color: white;\n}\n\nion-card {\n  border-style: solid;\n  min-height: 30vh;\n  border-color: #111111;\n  font-size: large;\n  font-style: oblique;\n}\n\nion-text {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9yZGVuL2pvcmRlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0REFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2pvcmRlbi9qb3JkZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9iYWtncnVuZHNiaWxkZXIvam9yZGVuLmpwZykgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcclxufVxyXG5cclxuaW9uLWltZ3tcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5ib3JkZXJ7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIG1pbi1oZWlnaHQ6IDMwdmg7XHJcbiAgYm9yZGVyLWNvbG9yOiMxMTExMTE7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG59XHJcblxyXG5pb24tdGV4dHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/jorden/jorden.page.ts":
    /*!***************************************!*\
      !*** ./src/app/jorden/jorden.page.ts ***!
      \***************************************/

    /*! exports provided: JordenPage */

    /***/
    function srcAppJordenJordenPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JordenPage", function () {
        return JordenPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var JordenPage = /*#__PURE__*/function () {
        function JordenPage() {
          _classCallCheck(this, JordenPage);
        }

        _createClass(JordenPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return JordenPage;
      }();

      JordenPage.ctorParameters = function () {
        return [];
      };

      JordenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jorden',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./jorden.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/jorden/jorden.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./jorden.page.scss */
        "./src/app/jorden/jorden.page.scss"))["default"]]
      })], JordenPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=jorden-jorden-module-es5.js.map