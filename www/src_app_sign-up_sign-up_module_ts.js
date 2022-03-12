(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["src_app_sign-up_sign-up_module_ts"],{

/***/ 59204:
/*!***************************************************!*\
  !*** ./src/app/sign-up/sign-up-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageRoutingModule": () => (/* binding */ SignUpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up.page */ 10080);




const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_0__.SignUpPage
    }
];
let SignUpPageRoutingModule = class SignUpPageRoutingModule {
};
SignUpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignUpPageRoutingModule);



/***/ }),

/***/ 73982:
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageModule": () => (/* binding */ SignUpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-routing.module */ 59204);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page */ 10080);







let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpPageRoutingModule
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_1__.SignUpPage]
    })
], SignUpPageModule);



/***/ }),

/***/ 10080:
/*!*****************************************!*\
  !*** ./src/app/sign-up/sign-up.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPage": () => (/* binding */ SignUpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sign-up.page.html */ 55093);
/* harmony import */ var _sign_up_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page.scss */ 57200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let SignUpPage = class SignUpPage {
    constructor() { }
    ngOnInit() {
    }
};
SignUpPage.ctorParameters = () => [];
SignUpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sign-up',
        template: _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sign_up_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignUpPage);



/***/ }),

/***/ 57200:
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#back_button {\n  position: absolute;\n  top: 5%;\n  color: black;\n}\n\n#circles {\n  position: absolute;\n  scale: 1.2;\n  width: 100%;\n  top: 10%;\n  left: -5%;\n}\n\n#logo_img {\n  position: absolute;\n  width: 40%;\n  top: 18%;\n  max-height: 25%;\n  right: 30%;\n  left: 30%;\n}\n\n#sign_up_words {\n  position: absolute;\n  width: 60%;\n  left: 20%;\n  top: 42%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: normal;\n  font-size: 7.7vmin;\n  line-height: 120%;\n  /* or 38px */\n  align-items: center;\n  text-align: center;\n  color: #3F3356;\n}\n\n#name_input_row {\n  position: absolute;\n  width: 62%;\n  height: 5%;\n  left: 19%;\n  top: 51%;\n}\n\n#name_input {\n  border: 1px solid #DADADA;\n  box-sizing: border-box;\n  border-radius: 4px;\n  background-color: #ffffff;\n  font-size: 3.5vmin;\n  --padding-end: 0%;\n  --padding-start: 8%;\n}\n\n#email_input {\n  position: absolute;\n  width: 60%;\n  height: 5%;\n  left: 20%;\n  top: 60%;\n  background-color: #ffffff;\n  border: 1px solid #DADADA;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-size: 3.5vmin;\n  --padding-start: 5%;\n}\n\n#password_input {\n  position: absolute;\n  width: 60%;\n  height: 5%;\n  left: 20%;\n  top: 68%;\n  font-size: 3.5vmin;\n  background-color: #ffffff;\n  border: 1px solid #DADADA;\n  box-sizing: border-box;\n  border-radius: 4px;\n  --padding-start: 5%;\n}\n\n#join_now_button {\n  position: absolute;\n  width: 50%;\n  height: 5%;\n  right: 25%;\n  top: 78%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\nion-row {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBREo7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUVRLDhFQUFBO0VBQ1IsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUFMSjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQUxKOztBQVFBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUVBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVBKOztBQVVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFFQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0FBVEo7O0FBYUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFFUSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBWEo7O0FBZUE7RUFDSSxXQUFBO0FBWkoiLCJmaWxlIjoic2lnbi11cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja19idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6NSU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4jY2lyY2xlcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHNjYWxlOiAxLjI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOjEwJTtcbiAgICBsZWZ0Oi01JTtcblxufVxuXG5cbiNsb2dvX2ltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgdG9wOjE4JTtcbiAgICBtYXgtaGVpZ2h0OiAyNSU7XG4gICAgcmlnaHQ6IDMwJTtcbiAgICBsZWZ0OjMwJTtcblxufVxuXG5cbiNzaWduX3VwX3dvcmRzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBsZWZ0OjIwJTtcbiAgICB0b3A6NDIlO1xuXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmlnaHRlb3VzJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiA3Ljd2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgIC8qIG9yIDM4cHggKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGNvbG9yOiAjM0YzMzU2O1xufVxuXG4jbmFtZV9pbnB1dF9yb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNjIlO1xuICAgIGhlaWdodDogNSU7XG4gICAgbGVmdDoxOSU7XG4gICAgdG9wOjUxJTtcbn1cblxuI25hbWVfaW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQURBREE7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMy41dm1pbjtcbiAgICAtLXBhZGRpbmctZW5kOiAwJTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDglO1xufVxuXG4jZW1haWxfaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogNSU7XG4gICAgbGVmdDoyMCU7XG4gICAgdG9wOjYwJTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RBREFEQTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDMuNXZtaW47XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1JTtcbn1cblxuI3Bhc3N3b3JkX2lucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDUlO1xuICAgIGxlZnQ6MjAlO1xuICAgIHRvcDo2OCU7XG4gICAgZm9udC1zaXplOiAzLjV2bWluO1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RBREFEQTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgIC0tcGFkZGluZy1zdGFydDogNSU7XG59XG5cblxuI2pvaW5fbm93X2J1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1JTtcbiAgICByaWdodDoyNSU7XG4gICAgdG9wOjc4JTtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5cbmlvbi1yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ 55093:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-row>\n    <ion-row>\n      <img src=\"./assets/circles.png\" id=\"circles\" />\n    </ion-row>\n    <ion-row style=\"align-content: center;\">\n      <img src=\"./assets/logo.png\" id=\"logo_img\" />\n    </ion-row>\n  </ion-row>\n  <ion-row>\n    <ion-button fill=clear [routerLink]=\"['/login']\" id=\"back_button\">\n      <img src=\"./assets/back_button.png\"/>\n    </ion-button>\n  </ion-row>\n\n\n  <ion-row>\n    <ion-text id=\"sign_up_words\">\n      SIGN UP TODAY\n    </ion-text>\n  </ion-row>\n  \n  <ion-row id=\"name_input_row\">\n    <ion-col>\n      <ion-input \n            placeholder=\"First Name\" \n            id=\"name_input\"\n            required=true\n            clearInput=true\n            ></ion-input>\n    </ion-col>\n    <ion-col>\n      <ion-input \n            placeholder=\"Last Name\" \n            id=\"name_input\"\n            required=true\n            clearInput=true\n            ></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-input \n            placeholder=\"Email\" \n            id=\"email_input\"\n            inputmode=\"email\"\n            required=true\n            clearInput=true\n            ></ion-input>\n  </ion-row>\n  <ion-row>\n    <ion-input \n            placeholder=\"Password\"\n            id=\"password_input\"\n            required=true\n            clearInput=true\n            ></ion-input>\n  </ion-row>\n\n  <ion-row>\n    <ion-button id=\"join_now_button\" [routerLink]=\"['/tablinks']\" expand=\"block\">\n      JOIN NOW\n    </ion-button>\n  </ion-row>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_sign-up_sign-up_module_ts.js.map