(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["src_app_david-modal_david-modal_module_ts"],{

/***/ 9946:
/*!***********************************************************!*\
  !*** ./src/app/david-modal/david-modal-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DavidModalPageRoutingModule": () => (/* binding */ DavidModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _david_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./david-modal.page */ 7685);




const routes = [
    {
        path: '',
        component: _david_modal_page__WEBPACK_IMPORTED_MODULE_0__.DavidModalPage
    }
];
let DavidModalPageRoutingModule = class DavidModalPageRoutingModule {
};
DavidModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DavidModalPageRoutingModule);



/***/ }),

/***/ 9514:
/*!***************************************************!*\
  !*** ./src/app/david-modal/david-modal.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DavidModalPageModule": () => (/* binding */ DavidModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _david_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./david-modal-routing.module */ 9946);
/* harmony import */ var _david_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./david-modal.page */ 7685);







let DavidModalPageModule = class DavidModalPageModule {
};
DavidModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _david_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.DavidModalPageRoutingModule
        ],
        declarations: [_david_modal_page__WEBPACK_IMPORTED_MODULE_1__.DavidModalPage]
    })
], DavidModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_david-modal_david-modal_module_ts.js.map