(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);
/* harmony import */ var ng_lottie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-lottie */ 52800);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            ng_lottie__WEBPACK_IMPORTED_MODULE_2__.LottieAnimationViewModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 76770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 21339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let LoginPage = class LoginPage {
    constructor() { }
    ngOnInit() {
    }
};
LoginPage.ctorParameters = () => [];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 21339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#left_arrows {\n  position: absolute;\n  scale: 3;\n  left: 30%;\n  width: 100%;\n  top: 9%;\n  transform: rotate(180deg);\n}\n\n#right_arrows {\n  position: absolute;\n  scale: 3;\n  left: 30%;\n  width: 100%;\n  top: 25%;\n}\n\n#logo_img {\n  position: absolute;\n  width: 40%;\n  top: 18%;\n  max-height: 25%;\n  right: 30%;\n  left: 30%;\n}\n\n#cfgi_words {\n  position: absolute;\n  left: 17.5%;\n  width: 65%;\n  top: 42%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: 400;\n  font-size: 5vmin;\n  line-height: 120%;\n  /* or 19px */\n  align-items: center;\n  text-align: center;\n  color: #69676F;\n}\n\n#welcome_words {\n  position: absolute;\n  width: 50%;\n  left: 25%;\n  top: 52%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: normal;\n  font-size: 7.7vmin;\n  line-height: 120%;\n  /* or 38px */\n  align-items: center;\n  text-align: center;\n  color: #3F3356;\n}\n\n#email_input {\n  position: absolute;\n  width: 50%;\n  left: 25%;\n  top: 60%;\n  background-color: #ffffff;\n  border: 1px solid #DADADA;\n  box-sizing: border-box;\n  border-radius: 4px;\n  --padding-start: 5%;\n}\n\n#password_input {\n  position: absolute;\n  width: 50%;\n  left: 25%;\n  top: 68%;\n  background-color: #ffffff;\n  border: 1px solid #DADADA;\n  box-sizing: border-box;\n  border-radius: 4px;\n  --padding-start: 5%;\n}\n\n#forgot_password {\n  position: absolute;\n  width: 30%;\n  right: 23%;\n  top: 74%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 3.5vmin;\n  line-height: 18px;\n  /* identical to box height, or 129% */\n  align-items: right;\n  /* Primary */\n  color: #074EE8;\n}\n\n#login_button {\n  position: absolute;\n  width: 50%;\n  height: 5%;\n  right: 25%;\n  top: 78%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n#sign_up_button {\n  position: absolute;\n  width: 20%;\n  right: 22%;\n  top: 84%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 3.5vmin;\n  line-height: 18px;\n  /* identical to box height, or 129% */\n  align-items: right;\n  /* Primary */\n  color: #074EE8;\n}\n\nion-row {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0FBREo7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFGSjs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFISjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBRVEsOEVBQUE7RUFDUixnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQU5KOztBQVVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFFUSw4RUFBQTtFQUNSLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxjQUFBO0FBVEo7O0FBWUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUVBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7QUFYSjs7QUFjQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRUEseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtBQWJKOztBQWdCQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBRVEsb0ZBQUE7RUFDUixpQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBQ0EsY0FBQTtBQWZKOztBQWtCQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUVRLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFoQko7O0FBbUJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFFUSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxjQUFBO0FBbEJKOztBQXNCQTtFQUNJLFdBQUE7QUFuQkoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiNsZWZ0X2Fycm93cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHNjYWxlOjM7XG4gICAgbGVmdDogMzAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDo5JTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuXG59XG5cbiNyaWdodF9hcnJvd3Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBzY2FsZTozO1xuICAgIGxlZnQ6IDMwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6MjUlO1xuXG59XG5cbiNsb2dvX2ltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgdG9wOjE4JTtcbiAgICBtYXgtaGVpZ2h0OiAyNSU7XG4gICAgcmlnaHQ6IDMwJTtcbiAgICBsZWZ0OjMwJTtcblxufVxuXG4jY2ZnaV93b3JkcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDE3LjUlO1xuICAgIHdpZHRoOiA2NSU7XG4gICAgdG9wOjQyJTtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogNXZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgLyogb3IgMTlweCAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgY29sb3I6ICM2OTY3NkY7XG5cbn1cblxuI3dlbGNvbWVfd29yZHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGxlZnQ6MjUlO1xuICAgIHRvcDo1MiU7XG5cbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SaWdodGVvdXMmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDcuN3ZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gICAgLyogb3IgMzhweCAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgY29sb3I6ICMzRjMzNTY7XG59XG5cbiNlbWFpbF9pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbGVmdDoyNSU7XG4gICAgdG9wOjYwJTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RBREFEQTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgIC0tcGFkZGluZy1zdGFydDogNSU7XG59XG5cbiNwYXNzd29yZF9pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbGVmdDoyNSU7XG4gICAgdG9wOjY4JTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RBREFEQTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgIC0tcGFkZGluZy1zdGFydDogNSU7XG59XG5cbiNmb3Jnb3RfcGFzc3dvcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzAlO1xuICAgIHJpZ2h0OjIzJTtcbiAgICB0b3A6NzQlO1xuXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMy41dm1pbjtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTI5JSAqL1xuICAgIGFsaWduLWl0ZW1zOiByaWdodDtcblxuICAgIC8qIFByaW1hcnkgKi9cbiAgICBjb2xvcjogIzA3NEVFODtcbn1cblxuI2xvZ2luX2J1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1JTtcbiAgICByaWdodDoyNSU7XG4gICAgdG9wOjc4JTtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jc2lnbl91cF9idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjAlO1xuICAgIHJpZ2h0OjIyJTtcbiAgICB0b3A6ODQlO1xuXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMy41dm1pbjtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTI5JSAqL1xuICAgIGFsaWduLWl0ZW1zOiByaWdodDtcblxuICAgIC8qIFByaW1hcnkgKi9cbiAgICBjb2xvcjogIzA3NEVFODtcblxufVxuXG5pb24tcm93IHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content>\n  <ion-row id=\"logo_row\">\n    <ion-row>\n      <script src=\"https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js\"></script>\n      <lottie-player src=\"https://assets1.lottiefiles.com/packages/lf20_f9rsghmo.json\"  id = \"left_arrows\" background=\"transparent\"  speed=\".5\"  style=\"width: 170px; height: 170px;\"    autoplay></lottie-player>\n    <!-- <img src=\"./assets/arrow-left.png\" id=\"left_arrows\" />-->\n    </ion-row>\n    <ion-row>\n      <script src=\"https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js\"></script>\n      <lottie-player src=\"https://assets3.lottiefiles.com/packages/lf20_1840xrzy.json\"  id= \"right_arrows\" background=\"transparent\"  speed=\".5\"  style=\"width: 170px; height: 170px;\"    autoplay></lottie-player>\n      <!--<img src=\"./assets/arrow-right.png\" id=\"right_arrows\" />-->\n    </ion-row>\n    <ion-row style=\"align-content: center;\">\n      <img src=\"./assets/cfgiLogo.svg\" id=\"logo_img\" />\n    </ion-row>\n  </ion-row>\n\n  <ion-row>\n    <ion-text id=\"cfgi_words\">\n      COMMUNITY FOR GLOBAL <br>INNOVATION\n    </ion-text>\n  </ion-row>\n\n  <ion-row>\n    <ion-text id=\"welcome_words\">\n      WELCOME\n    </ion-text>\n  </ion-row>\n  \n  <ion-row>\n    <ion-input \n            placeholder=\"Email\" \n            id=\"email_input\"\n            inputmode=\"email\"\n            required=true\n            clearInput=true\n            ></ion-input>\n  </ion-row>\n  <ion-row>\n    <ion-input \n            placeholder=\"Password\"\n            id=\"password_input\"\n            required=true\n            clearInput=true\n            ></ion-input>\n  </ion-row>\n  <ion-row>\n    <a [routerLink]=\"['/forgot-password']\" id=\"forgot_password\">\n      Forgot Password?\n    </a>\n  </ion-row>\n\n  <ion-row>\n    <ion-button id=\"login_button\" [routerLink]=\"['/tablinks']\" expand=\"block\">\n      LOGIN\n    </ion-button>\n  </ion-row>\n  <ion-row>\n    <a [routerLink]=\"['/sign-up']\" id=\"sign_up_button\">\n      Sign up&nbsp; <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </a>\n  </ion-row>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map