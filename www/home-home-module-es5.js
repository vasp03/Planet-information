(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "A3+G":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function A3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "WcN3":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function WcN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>Välkommen! Vänligen välj planet!</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-grid>\r\n    <!--Rad 1-->\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm>\r\n        <ion-card tappable (click)=\"changeSide('merkurius')\">\r\n          <ion-card-header>\r\n            <ion-card-title>Merkurius</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            {{InputText}}\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" size-sm>\r\n        <ion-card tappable (click)=\"changeSide('venus')\">\r\n          <ion-card-header>\r\n            <ion-card-title>Venus</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            {{InputText}}\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"12\" size-sm>\r\n        <ion-card tappable (click)=\"navJorden()\">\r\n          <ion-card-header>\r\n            <ion-card-title>Jorden</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            {{InputText}}\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  \r\n    <!--Rad 2-->\r\n    <ion-row>\r\n      <ion-col sizes=\"12\" size-sm>\r\n        <ion-card tappable (click)=\"changeSide('mars')\">\r\n          <ion-card-header>\r\n            <ion-card-title>Mars</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            {{InputText}}\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col sizes=\"12\" size-sm>\r\n        <ion-card tappable (click)=\"changeSide('jupiter')\">\r\n          <ion-card-header>\r\n            <ion-card-title>Jupiter</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            {{InputText}}\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col sizes=\"12\" size-sm>\r\n        <ion-card tappable (click)=\"changeSide('saturnus')\">\r\n          <ion-card-header>\r\n            <ion-card-title>Saturnus</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            {{InputText}}\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row> \r\n\r\n    <!--Rad 3-->\r\n    <ion-row>\r\n      <ion-col sizes=\"12\" size-sm>\r\n        <ion-card tappable (click)=\"changeSide('uranus')\">\r\n          <ion-card-header>\r\n            <ion-card-title>Uranus</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            {{InputText}}\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      \r\n      <ion-col sizes=\"12\" size-sm>\r\n        <ion-card tappable (click)=\"changeSide('neptunus')\">\r\n          <ion-card-header>\r\n            <ion-card-title>Neptunus</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            {{InputText}}\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col sizes=\"12\" size-sm>\r\n        <ion-card tappable (click)=\"changeSide('pluto')\">\r\n          <ion-card-header>\r\n            <ion-card-title>Pluto</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            {{InputText}}\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</ion-content>";
      /***/
    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "zpKS");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "A3+G");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "f6od":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function f6od(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\nion-card {\n  width: auto;\n  height: auto;\n  border-style: solid;\n  border-color: #000000;\n  background-color: #222222;\n}\nion-content {\n  --background: url('månen.jpg') no-repeat center/cover fixed;\n  background-color: #ffffff;\n}\nion-header {\n  height: auto;\n  color: #ffffff;\n}\nion-header {\n  border-style: solid;\n  border-color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUVGO0FBQ0E7RUFDRSwyREFBQTtFQUNBLHlCQUFBO0FBRUY7QUFDQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBRUY7QUFDQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5pb24tY2FyZCB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmFrZ3J1bmRzYmlsZGVyL23DpW5lbi5qcGcpIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi1oZWFkZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24taGVhZGVyIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xufSJdfQ== */";
      /***/
    },

    /***/
    "zpKS":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function zpKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "WcN3");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "f6od");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(navCtrl) {
          _classCallCheck(this, HomePage);

          this.navCtrl = navCtrl;
          this.InputText = "Klicka för att välja planeten!";
        }

        _createClass(HomePage, [{
          key: "navJorden",
          value: function navJorden() {
            this.navCtrl.navigateForward('jorden');
          } //Byta sida med en funktion som sägs i html sidan. 

        }, {
          key: "changeSide",
          value: function changeSide(sida) {
            this.navCtrl.navigateForward(sida);
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map