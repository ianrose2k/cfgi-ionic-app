(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["src_app_legal_legal_module_ts"],{

/***/ 24073:
/*!***********************************************!*\
  !*** ./src/app/legal/legal-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegalPageRoutingModule": () => (/* binding */ LegalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _legal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legal.page */ 89961);




const routes = [
    {
        path: '',
        component: _legal_page__WEBPACK_IMPORTED_MODULE_0__.LegalPage
    }
];
let LegalPageRoutingModule = class LegalPageRoutingModule {
};
LegalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LegalPageRoutingModule);



/***/ }),

/***/ 90373:
/*!***************************************!*\
  !*** ./src/app/legal/legal.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegalPageModule": () => (/* binding */ LegalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _legal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legal-routing.module */ 24073);
/* harmony import */ var _legal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legal.page */ 89961);







let LegalPageModule = class LegalPageModule {
};
LegalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _legal_routing_module__WEBPACK_IMPORTED_MODULE_0__.LegalPageRoutingModule
        ],
        declarations: [_legal_page__WEBPACK_IMPORTED_MODULE_1__.LegalPage]
    })
], LegalPageModule);



/***/ }),

/***/ 89961:
/*!*************************************!*\
  !*** ./src/app/legal/legal.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegalPage": () => (/* binding */ LegalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_legal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./legal.page.html */ 72277);
/* harmony import */ var _legal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legal.page.scss */ 54385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let LegalPage = class LegalPage {
    constructor() { }
    ngOnInit() {
    }
};
LegalPage.ctorParameters = () => [];
LegalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-legal',
        template: _raw_loader_legal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_legal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LegalPage);



/***/ }),

/***/ 54385:
/*!***************************************!*\
  !*** ./src/app/legal/legal.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#legal_text {\n  position: absolute;\n  width: 60%;\n  height: 8%;\n  left: 8%;\n  right: 32%;\n  top: 18%;\n  bottom: 60%;\n  font-family: Righteous;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 8.5vmin;\n  line-height: 8vmin;\n  /* identical to box height */\n  text-align: center;\n  color: #3F3356;\n}\n\n#appointment_button {\n  position: absolute;\n  width: 84%;\n  height: 12%;\n  left: 8%;\n  right: 8%;\n  top: 26%;\n  bottom: 62%;\n  background: #4C67F6;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 3vmin;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 5vmin;\n  line-height: 16px;\n  /* or 80% */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n#schedule_button {\n  position: absolute;\n  width: 84%;\n  height: 12%;\n  left: 8%;\n  right: 8%;\n  top: 41%;\n  bottom: 47%;\n  background: #4C67F6;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 3vmin;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 5vmin;\n  line-height: 5vmin;\n  /* or 80% */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n#faq_button {\n  position: absolute;\n  width: 84%;\n  height: 12%;\n  left: 8%;\n  right: 8%;\n  top: 56%;\n  bottom: 32%;\n  background: #4C67F6;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 3vmin;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 5vmin;\n  line-height: 5vmin;\n  /* or 80% */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n#resource_button {\n  position: absolute;\n  width: 84%;\n  height: 12%;\n  left: 8%;\n  right: 8%;\n  top: 71%;\n  bottom: 17%;\n  background: #4C67F6;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 3vmin;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 5vmin;\n  line-height: 5vmin;\n  /* or 80% */\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZ2FsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBRUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUVRLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FBSko7O0FBT0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUVRLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FBUEo7O0FBVUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUVRLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FBVko7O0FBYUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUVRLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FBYkoiLCJmaWxlIjoibGVnYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xlZ2FsX3RleHR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiA4JTtcbiAgICBsZWZ0OiA4JTtcbiAgICByaWdodDogMzIlO1xuICAgIHRvcDogMTglO1xuICAgIGJvdHRvbTogNjAlO1xuXG4gICAgZm9udC1mYW1pbHk6IFJpZ2h0ZW91cztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDguNXZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDh2bWluO1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgY29sb3I6ICMzRjMzNTY7XG59XG5cbiNhcHBvaW50bWVudF9idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODQlO1xuICAgIGhlaWdodDogMTIlO1xuICAgIGxlZnQ6IDglO1xuICAgIHJpZ2h0OjglO1xuICAgIHRvcDogMjYlO1xuICAgIGJvdHRvbTogNjIlO1xuXG4gICAgYmFja2dyb3VuZDogIzRDNjdGNjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDN2bWluO1xuXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDV2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIC8qIG9yIDgwJSAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuI3NjaGVkdWxlX2J1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA4NCU7XG4gICAgaGVpZ2h0OiAxMiU7XG4gICAgbGVmdDogOCU7XG4gICAgcmlnaHQ6OCU7XG4gICAgdG9wOiA0MSU7XG4gICAgYm90dG9tOiA0NyU7XG5cbiAgICBiYWNrZ3JvdW5kOiAjNEM2N0Y2O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3ZtaW47XG5cbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNXZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDV2bWluO1xuICAgIC8qIG9yIDgwJSAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuI2ZhcV9idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODQlO1xuICAgIGhlaWdodDogMTIlO1xuICAgIGxlZnQ6IDglO1xuICAgIHJpZ2h0OjglO1xuICAgIHRvcDogNTYlO1xuICAgIGJvdHRvbTogMzIlO1xuXG4gICAgYmFja2dyb3VuZDogIzRDNjdGNjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDN2bWluO1xuXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDV2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiA1dm1pbjtcbiAgICAvKiBvciA4MCUgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgY29sb3I6ICNGRkZGRkY7XG59XG5cbiNyZXNvdXJjZV9idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODQlO1xuICAgIGhlaWdodDogMTIlO1xuICAgIGxlZnQ6IDglO1xuICAgIHJpZ2h0OjglO1xuICAgIHRvcDogNzElO1xuICAgIGJvdHRvbTogMTclO1xuXG4gICAgYmFja2dyb3VuZDogIzRDNjdGNjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDN2bWluO1xuXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDV2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiA1dm1pbjtcbiAgICAvKiBvciA4MCUgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgY29sb3I6ICNGRkZGRkY7XG59Il19 */");

/***/ }),

/***/ 72277:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/legal/legal.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-row>\n    <ion-text id=\"legal_text\">\n      Legal Services\n    </ion-text>\n  </ion-row>\n  <ion-row>\n    <ion-button  [routerLink]=\"['/appointments']\" id=\"appointment_button\">\n      <ion-icon style=\"width: 15%\"  name=\"calendar-number-outline\"></ion-icon>\n      <ion-text style=\"width: 85%\">\n          View Appointment\n      </ion-text>\n    </ion-button>\n  </ion-row>\n  <ion-row>\n    <ion-button [routerLink]=\"['/schedule']\" id=\"schedule_button\">\n      <ion-icon style=\"width: 15%\" name=\"calendar-outline\"></ion-icon>\n      <ion-text style=\"width: 85%\">\n        Schedule with Attorneys\n      </ion-text>\n    </ion-button>\n  </ion-row>\n  <ion-row>\n    <ion-button [routerLink]=\"['/faq']\" id=\"faq_button\">\n      <ion-icon style=\"width: 15%\" name=\"help-circle-outline\"></ion-icon>\n      <ion-text style=\"width: 85%\">\n        FAQ\n      </ion-text>\n    </ion-button>\n  </ion-row>\n  <ion-row>\n    <ion-button [routerLink]=\"['/resources']\" id=\"resource_button\">\n      <ion-icon style=\"width: 15%\"  name=\"book-outline\"></ion-icon>\n      <ion-text style=\"width: 85%\">\n        Resource Library\n      </ion-text>\n    </ion-button>\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_legal_legal_module_ts.js.map