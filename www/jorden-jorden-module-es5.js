(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jorden-jorden-module"], {
    /***/
    "14Q5":
    /*!*****************************************!*\
      !*** ./src/app/jorden/jorden.module.ts ***!
      \*****************************************/

    /*! exports provided: JordenPageModule */

    /***/
    function Q5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JordenPageModule", function () {
        return JordenPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _jorden_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./jorden-routing.module */
      "7fZm");
      /* harmony import */


      var _jorden_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./jorden.page */
      "xDDF");

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
    "7fZm":
    /*!*************************************************!*\
      !*** ./src/app/jorden/jorden-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: JordenPageRoutingModule */

    /***/
    function fZm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JordenPageRoutingModule", function () {
        return JordenPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _jorden_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./jorden.page */
      "xDDF");

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
    "Bodf":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/jorden/jorden.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function Bodf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>Jorden</ion-title>\r\n      <ion-back-button defaultHref=\"home\" slot=\"start\"></ion-back-button>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-con>\r\n        <ion-card> \r\n\r\n        </ion-card>\r\n      </ion-con>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-con>\r\n        <ion-card> \r\n          \r\n        </ion-card>\r\n      </ion-con>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-con>\r\n        <ion-card> \r\n          \r\n        </ion-card>\r\n      </ion-con>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-con>\r\n        <ion-card> \r\n          \r\n        </ion-card>\r\n      </ion-con>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";
      /***/
    },

    /***/
    "jEFS":
    /*!*****************************************!*\
      !*** ./src/app/jorden/jorden.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function jEFS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url('jorden.png') no-repeat center/cover fixed;\n}\n\nion-img {\n  width: auto;\n  height: auto;\n}\n\n.border {\n  border-style: solid;\n  border-color: white;\n}\n\nion-card {\n  border-style: solid;\n  min-height: 20vh;\n  border-color: #111111;\n  font-size: large;\n  font-style: oblique;\n}\n\nion-text {\n  color: #ffffff;\n}\n\nion-con {\n  width: 70vh;\n}\n\nion-row {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9yZGVuL2pvcmRlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0REFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2pvcmRlbi9qb3JkZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9iYWtncnVuZHNiaWxkZXIvam9yZGVuLnBuZykgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcclxufVxyXG5cclxuaW9uLWltZ3tcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5ib3JkZXJ7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIG1pbi1oZWlnaHQ6IDIwdmg7XHJcbiAgYm9yZGVyLWNvbG9yOiMxMTExMTE7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG59XHJcblxyXG5pb24tdGV4dHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuaW9uLWNvbntcclxuICB3aWR0aDogNzB2aDtcclxufVxyXG5cclxuaW9uLXJvd3tcclxuICBoZWlnaHQ6IGF1dG87XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "xDDF":
    /*!***************************************!*\
      !*** ./src/app/jorden/jorden.page.ts ***!
      \***************************************/

    /*! exports provided: JordenPage */

    /***/
    function xDDF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JordenPage", function () {
        return JordenPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_jorden_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./jorden.page.html */
      "Bodf");
      /* harmony import */


      var _jorden_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./jorden.page.scss */
      "jEFS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

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

      JordenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-jorden',
        template: _raw_loader_jorden_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_jorden_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], JordenPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=jorden-jorden-module-es5.js.map