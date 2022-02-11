(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["src_app_apply-aid_apply-aid_module_ts"],{

/***/ 15350:
/*!*******************************************************!*\
  !*** ./src/app/apply-aid/apply-aid-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyAidPageRoutingModule": () => (/* binding */ ApplyAidPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _apply_aid_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apply-aid.page */ 93100);




const routes = [
    {
        path: '',
        component: _apply_aid_page__WEBPACK_IMPORTED_MODULE_0__.ApplyAidPage
    }
];
let ApplyAidPageRoutingModule = class ApplyAidPageRoutingModule {
};
ApplyAidPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ApplyAidPageRoutingModule);



/***/ }),

/***/ 25117:
/*!***********************************************!*\
  !*** ./src/app/apply-aid/apply-aid.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyAidPageModule": () => (/* binding */ ApplyAidPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _apply_aid_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apply-aid-routing.module */ 15350);
/* harmony import */ var _apply_aid_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-aid.page */ 93100);







let ApplyAidPageModule = class ApplyAidPageModule {
};
ApplyAidPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _apply_aid_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApplyAidPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_apply_aid_page__WEBPACK_IMPORTED_MODULE_1__.ApplyAidPage]
    })
], ApplyAidPageModule);



/***/ }),

/***/ 93100:
/*!*********************************************!*\
  !*** ./src/app/apply-aid/apply-aid.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyAidPage": () => (/* binding */ ApplyAidPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_apply_aid_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./apply-aid.page.html */ 34815);
/* harmony import */ var _apply_aid_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-aid.page.scss */ 5371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ApplyAidPage = class ApplyAidPage {
    constructor() { }
    ngOnInit() {
    }
};
ApplyAidPage.ctorParameters = () => [];
ApplyAidPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-apply-aid',
        template: _raw_loader_apply_aid_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_apply_aid_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ApplyAidPage);



/***/ }),

/***/ 5371:
/*!***********************************************!*\
  !*** ./src/app/apply-aid/apply-aid.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#back_button {\n  color: black;\n}\n\n#money_text {\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  top: 12%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 6vmin;\n  line-height: 16px;\n  /* identical to box height, or 80% */\n  text-align: left;\n  color: #3F3356;\n}\n\n#money_input {\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  top: 16%;\n  --background: #ffffff;\n  color: #000000;\n  --placeholder-font-weight: 200;\n  --placeholder-color: #3F3356;\n  --placeholder-font-style: italic;\n  --icon-color:#FFFFFF;\n  --placeholder-opacity:50%;\n  --ion-icon: #000000;\n  border: 1px solid #DADADA;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-size: 3.5vmin;\n  --padding-start: 5%;\n}\n\n#justify_text {\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  top: 25%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 5.5vmin;\n  line-height: 6vmin;\n  /* identical to box height, or 80% */\n  text-align: left;\n  color: #3F3356;\n}\n\n#justify_input {\n  position: absolute;\n  width: 75%;\n  height: 25%;\n  left: 12.5%;\n  top: 33%;\n  --background: #ffffff;\n  color: #000000;\n  --placeholder-font-weight: 200;\n  --placeholder-color: #3F3356;\n  --placeholder-font-style: italic;\n  --icon-color:#FFFFFF;\n  --placeholder-opacity:50%;\n  --ion-icon: #000000;\n  border: 1px solid #DADADA;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-size: 3.5vmin;\n  --padding-start: 5%;\n}\n\n#doc_text {\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  top: 62%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 6vmin;\n  line-height: 16px;\n  /* identical to box height, or 80% */\n  text-align: left;\n  color: #3F3356;\n}\n\n#doc_description {\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  top: 65%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: normal;\n  font-size: 3.8vmin;\n  line-height: 5vmin;\n  color: #3F3356;\n}\n\n#doc_input {\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-size: 3.5vmin;\n  --padding-start: 5%;\n}\n\n#submit_button {\n  position: absolute;\n  width: 50%;\n  left: 25%;\n  bottom: 10%;\n}\n\n#circles {\n  position: sticky;\n  scale: 1.3;\n  width: 100%;\n  left: -10%;\n}\n\nion-title {\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: 400;\n  font-size: 5vmin;\n  color: #333333;\n}\n\nion-text {\n  font-weight: 500;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGx5LWFpZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUVRLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFFQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUVRLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBRUEscUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU9BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFFUSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFMSjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBRVEsK0VBQUE7RUFDUixxQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFOSjs7QUFTQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVVBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFQSjs7QUFVQTtFQUNZLDhFQUFBO0VBQ1IsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVBKOztBQVVBO0VBQ0ksZ0JBQUE7QUFQSjs7QUFVQTtFQUNJLGdCQUFBO0FBUEo7O0FBVUE7RUFDSSxXQUFBO0FBUEoiLCJmaWxlIjoiYXBwbHktYWlkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrX2J1dHRvbiB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4jbW9uZXlfdGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOjc1JTtcbiAgICBsZWZ0OiAxMi41JTtcbiAgICB0b3A6MTIlO1xuXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDZ2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciA4MCUgKi9cbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjM0YzMzU2O1xufVxuXG4jbW9uZXlfaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDo3NSU7XG4gICAgbGVmdDogMTIuNSU7XG4gICAgdG9wOjE2JTtcblxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvciA6ICMzRjMzNTY7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOiBpdGFsaWM7XG4gICAgLS1pY29uLWNvbG9yIDojRkZGRkZGO1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTo1MCU7XG4gICAgLS1pb24taWNvbjogIzAwMDAwMDtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQURBREE7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAzLjV2bWluO1xuICAgIC0tcGFkZGluZy1zdGFydDogNSU7XG59XG5cbiNqdXN0aWZ5X3RleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDo3NSU7XG4gICAgbGVmdDogMTIuNSU7XG4gICAgdG9wOjI1JTtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA1LjV2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiA2dm1pbjtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgODAlICovXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzNGMzM1Njtcbn1cblxuI2p1c3RpZnlfaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDo3NSU7XG4gICAgaGVpZ2h0OiAyNSU7XG4gICAgbGVmdDogMTIuNSU7XG4gICAgdG9wOjMzJTtcblxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvciA6ICMzRjMzNTY7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOiBpdGFsaWM7XG4gICAgLS1pY29uLWNvbG9yIDojRkZGRkZGO1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTo1MCU7XG4gICAgLS1pb24taWNvbjogIzAwMDAwMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREFEQURBO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMy41dm1pbjtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDUlO1xufVxuXG4jZG9jX3RleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDo3NSU7XG4gICAgbGVmdDogMTIuNSU7XG4gICAgdG9wOjYyJTtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA2dm1pbjtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgODAlICovXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzNGMzM1Njtcbn1cblxuI2RvY19kZXNjcmlwdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOjc1JTtcbiAgICBsZWZ0OiAxMi41JTtcbiAgICB0b3A6NjUlO1xuXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAzLjh2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiA1dm1pbjtcbiAgICBjb2xvcjogIzNGMzM1Njtcbn1cblxuI2RvY19pbnB1dCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAzLjV2bWluO1xuICAgIC0tcGFkZGluZy1zdGFydDogNSU7XG59XG5cbiNzdWJtaXRfYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6NTAlO1xuICAgIGxlZnQ6IDI1JTtcbiAgICBib3R0b206IDEwJTtcbn1cblxuXG4jY2lyY2xlcyB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBzY2FsZToxLjM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDotMTAlO1xufVxuXG5pb24tdGl0bGUge1xuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogNXZtaW47XG4gICAgY29sb3I6ICMzMzMzMzM7XG59XG5cbmlvbi10ZXh0e1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbn1cbmlvbi1sYWJlbHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24taXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cblxuIl19 */");

/***/ }),

/***/ 34815:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apply-aid/apply-aid.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content>\n  <ion-button fill=clear [routerLink]=\"['/tablinks/request-aid']\" id=\"back_button\">\n    <ion-icon name=\"arrow-back\"></ion-icon>\n  </ion-button>\n    <ion-content overflow-scroll=\"true\">\n       <iframe id=\"JotFormIFrame-220387163810048\" \n       title=\"Apply for Aid\" \n       onload=\"window.parent.scrollTo(0,0)\" \n       allowtransparency=\"true\" \n       allowfullscreen=\"true\" \n       allow=\"geolocation; microphone; camera\" \n       src=\"https://form.jotform.com/220387163810048\" \n       frameborder=\"0\" \n       style=\" min-width: 100%; height:100%; border:none;\" > \n      </iframe> \n    </ion-content>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_apply-aid_apply-aid_module_ts.js.map