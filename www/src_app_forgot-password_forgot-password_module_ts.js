(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["src_app_forgot-password_forgot-password_module_ts"],{

/***/ 3673:
/*!*******************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageRoutingModule": () => (/* binding */ ForgotPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page */ 2327);




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ 7157:
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageModule": () => (/* binding */ ForgotPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-routing.module */ 3673);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page */ 2327);







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ 2327:
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPage": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./forgot-password.page.html */ 2646);
/* harmony import */ var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page.scss */ 6249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ForgotPasswordPage = class ForgotPasswordPage {
    constructor() { }
    ngOnInit() {
    }
};
ForgotPasswordPage.ctorParameters = () => [];
ForgotPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForgotPasswordPage);



/***/ }),

/***/ 6249:
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#back_button {\n  position: absolute;\n  top: 5%;\n  color: black;\n}\n\n#logo_img {\n  position: absolute;\n  width: 80%;\n  top: 18%;\n  max-height: 25%;\n  right: 10%;\n  left: 10%;\n}\n\n#forgot_text {\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  top: 35%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: normal;\n  font-size: 7vmin;\n  line-height: 7vmin;\n  /* or 38px */\n  align-items: center;\n  text-align: center;\n  color: #3F3356;\n}\n\n#description_text {\n  position: absolute;\n  width: 80%;\n  left: 10%;\n  top: 41%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: normal;\n  font-size: 4.3vmin;\n  line-height: 120%;\n  /* or 38px */\n  align-items: center;\n  text-align: left;\n  color: #3F3356;\n}\n\n#email_input {\n  position: absolute;\n  width: 70%;\n  height: 5%;\n  left: 15%;\n  top: 53%;\n  background-color: #ffffff;\n  border: 1px solid #DADADA;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-size: 3.5vmin;\n  --padding-start: 5%;\n}\n\n#continue_button {\n  position: absolute;\n  width: 70%;\n  height: 7%;\n  right: 15%;\n  top: 60%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n#shapes_img {\n  position: absolute;\n  scale: 1.3;\n  width: 100%;\n  left: -10%;\n  bottom: -25%;\n}\n\nion-row {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUVRLDhFQUFBO0VBQ1IsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRVEsK0VBQUE7RUFDUixxQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRUEseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSko7O0FBT0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFFUSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBTEo7O0FBUUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFMSjs7QUFTQTtFQUNJLFdBQUE7QUFOSiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2tfYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjUlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuI2xvZ29faW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0b3A6MTglO1xuICAgIG1heC1oZWlnaHQ6IDI1JTtcbiAgICByaWdodDogMTAlO1xuICAgIGxlZnQ6MTAlO1xufVxuXG4jZm9yZ290X3RleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNzUlO1xuICAgIGxlZnQ6MTIuNSU7XG4gICAgdG9wOjM1JTtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogN3ZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDd2bWluO1xuICAgIC8qIG9yIDM4cHggKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGNvbG9yOiAjM0YzMzU2O1xufVxuXG4jZGVzY3JpcHRpb25fdGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbGVmdDoxMCU7XG4gICAgdG9wOjQxJTtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogNC4zdm1pbjtcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcbiAgICAvKiBvciAzOHB4ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgY29sb3I6ICMzRjMzNTY7XG59XG5cbiNlbWFpbF9pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA1JTtcbiAgICBsZWZ0OjE1JTtcbiAgICB0b3A6NTMlO1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RBREFEQTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDMuNXZtaW47XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1JTtcbn1cblxuI2NvbnRpbnVlX2J1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA3JTtcbiAgICByaWdodDoxNSU7XG4gICAgdG9wOjYwJTtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jc2hhcGVzX2ltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHNjYWxlOjEuMztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0Oi0xMCU7XG4gICAgYm90dG9tOiAtMjUlO1xufVxuXG5cbmlvbi1yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuIl19 */");

/***/ }),

/***/ 2646:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-row>\n    <ion-button fill=clear [routerLink]=\"['/login']\" id=\"back_button\">\n      <img src=\"./assets/back_button.png\"/>\n    </ion-button>\n  </ion-row>\n  <ion-row style=\"align-content: center;\">\n    <img src=\"./assets/logo-full.png\" id=\"logo_img\" />\n  </ion-row>\n\n  <ion-row>\n    <ion-text id=\"forgot_text\">\n      Forgot Your Password\n    </ion-text>\n  </ion-row>\n  <ion-row>\n    <ion-text id=\"description_text\">\n      To reset your password please enter the email\n       that you used to register for CFGI.\n    </ion-text>\n  </ion-row>\n\n  <ion-row>\n    <ion-input \n            placeholder=\"Email\" \n            id=\"email_input\"\n            inputmode=\"email\"\n            required=true\n            clearInput=true\n            ></ion-input>\n  </ion-row>\n\n  <ion-row>\n    <ion-button id=\"continue_button\" [routerLink]=\"['/login']\" expand=\"block\">\n      CONTINUE\n    </ion-button>\n  </ion-row>\n\n  <ion-row style=\"align-content: center;\">\n    <img src=\"./assets/waveShapes.png\" id=\"shapes_img\" />\n  </ion-row>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_forgot-password_forgot-password_module_ts.js.map