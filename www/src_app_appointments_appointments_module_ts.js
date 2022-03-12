(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["src_app_appointments_appointments_module_ts"],{

/***/ 71893:
/*!*************************************************************!*\
  !*** ./src/app/appointments/appointments-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentsPageRoutingModule": () => (/* binding */ AppointmentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _appointments_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointments.page */ 87390);




const routes = [
    {
        path: '',
        component: _appointments_page__WEBPACK_IMPORTED_MODULE_0__.AppointmentsPage
    }
];
let AppointmentsPageRoutingModule = class AppointmentsPageRoutingModule {
};
AppointmentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppointmentsPageRoutingModule);



/***/ }),

/***/ 59609:
/*!*****************************************************!*\
  !*** ./src/app/appointments/appointments.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentsPageModule": () => (/* binding */ AppointmentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _appointments_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointments-routing.module */ 71893);
/* harmony import */ var _appointments_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointments.page */ 87390);







let AppointmentsPageModule = class AppointmentsPageModule {
};
AppointmentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _appointments_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppointmentsPageRoutingModule
        ],
        declarations: [_appointments_page__WEBPACK_IMPORTED_MODULE_1__.AppointmentsPage]
    })
], AppointmentsPageModule);



/***/ }),

/***/ 87390:
/*!***************************************************!*\
  !*** ./src/app/appointments/appointments.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentsPage": () => (/* binding */ AppointmentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_appointments_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./appointments.page.html */ 47538);
/* harmony import */ var _appointments_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointments.page.scss */ 40055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let AppointmentsPage = class AppointmentsPage {
    constructor() { }
    ngOnInit() {
    }
};
AppointmentsPage.ctorParameters = () => [];
AppointmentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-appointments',
        template: _raw_loader_appointments_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_appointments_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppointmentsPage);



/***/ }),

/***/ 40055:
/*!*****************************************************!*\
  !*** ./src/app/appointments/appointments.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#back_button {\n  position: absolute;\n  top: 2%;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcG9pbnRtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoiYXBwb2ludG1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrX2J1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDoyJTtcbiAgICBjb2xvcjogYmxhY2s7XG59Il19 */");

/***/ }),

/***/ 47538:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointments/appointments.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-row>\n    <ion-button fill=clear [routerLink]=\"['/tablinks/legal']\" id=\"back_button\">\n      <img src=\"./assets/back_button.png\"/>\n    </ion-button>\n  </ion-row>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_appointments_appointments_module_ts.js.map