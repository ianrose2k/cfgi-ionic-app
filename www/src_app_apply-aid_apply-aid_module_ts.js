(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["src_app_apply-aid_apply-aid_module_ts"],{

/***/ 5350:
/*!*******************************************************!*\
  !*** ./src/app/apply-aid/apply-aid-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyAidPageRoutingModule": () => (/* binding */ ApplyAidPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _apply_aid_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apply-aid.page */ 3100);




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

/***/ 5117:
/*!***********************************************!*\
  !*** ./src/app/apply-aid/apply-aid.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyAidPageModule": () => (/* binding */ ApplyAidPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _apply_aid_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apply-aid-routing.module */ 5350);
/* harmony import */ var _apply_aid_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-aid.page */ 3100);







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

/***/ 3100:
/*!*********************************************!*\
  !*** ./src/app/apply-aid/apply-aid.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplyAidPage": () => (/* binding */ ApplyAidPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_apply_aid_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./apply-aid.page.html */ 4815);
/* harmony import */ var _apply_aid_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-aid.page.scss */ 5371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#back_button {\n  position: absolute;\n  top: 6%;\n  color: black;\n}\n\n#money_text {\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  top: 12%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 6vmin;\n  line-height: 16px;\n  /* identical to box height, or 80% */\n  text-align: left;\n  color: #3F3356;\n}\n\n#money_input {\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  top: 16%;\n  --background: #ffffff;\n  color: #000000;\n  --placeholder-font-weight: 200;\n  --placeholder-color: #3F3356;\n  --placeholder-font-style: italic;\n  --icon-color:#FFFFFF;\n  --placeholder-opacity:50%;\n  --ion-icon: #000000;\n  border: 1px solid #DADADA;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-size: 3.5vmin;\n  --padding-start: 5%;\n}\n\n#justify_text {\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  top: 25%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 5.5vmin;\n  line-height: 6vmin;\n  /* identical to box height, or 80% */\n  text-align: left;\n  color: #3F3356;\n}\n\n#justify_input {\n  position: absolute;\n  width: 75%;\n  height: 25%;\n  left: 12.5%;\n  top: 33%;\n  --background: #ffffff;\n  color: #000000;\n  --placeholder-font-weight: 200;\n  --placeholder-color: #3F3356;\n  --placeholder-font-style: italic;\n  --icon-color:#FFFFFF;\n  --placeholder-opacity:50%;\n  --ion-icon: #000000;\n  border: 1px solid #DADADA;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-size: 3.5vmin;\n  --padding-start: 5%;\n}\n\n#doc_text {\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  top: 62%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 6vmin;\n  line-height: 16px;\n  /* identical to box height, or 80% */\n  text-align: left;\n  color: #3F3356;\n}\n\n#doc_description {\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  top: 65%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: normal;\n  font-size: 3.8vmin;\n  line-height: 5vmin;\n  color: #3F3356;\n}\n\n#doc_input {\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-size: 3.5vmin;\n  --padding-start: 5%;\n}\n\n#submit_button {\n  position: absolute;\n  width: 50%;\n  left: 25%;\n  bottom: 10%;\n}\n\n#circles {\n  position: sticky;\n  scale: 1.3;\n  width: 100%;\n  left: -10%;\n}\n\n#form {\n  position: absolute;\n  top: 11%;\n}\n\nion-title {\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: 400;\n  font-size: 5vmin;\n  color: #333333;\n}\n\nion-text {\n  font-weight: 500;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGx5LWFpZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUVRLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFFQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUVRLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBRUEscUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU9BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFFUSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFMSjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBRVEsK0VBQUE7RUFDUixxQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFOSjs7QUFTQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVVBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFQSjs7QUFTQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQU5KOztBQVNBO0VBQ1ksOEVBQUE7RUFDUixnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTko7O0FBU0E7RUFDSSxnQkFBQTtBQU5KOztBQVNBO0VBQ0ksZ0JBQUE7QUFOSjs7QUFTQTtFQUNJLFdBQUE7QUFOSiIsImZpbGUiOiJhcHBseS1haWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2tfYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjYlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuI21vbmV5X3RleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDo3NSU7XG4gICAgbGVmdDogMTIuNSU7XG4gICAgdG9wOjEyJTtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA2dm1pbjtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgODAlICovXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzNGMzM1Njtcbn1cblxuI21vbmV5X2lucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6NzUlO1xuICAgIGxlZnQ6IDEyLjUlO1xuICAgIHRvcDoxNiU7XG5cbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogMjAwO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3IgOiAjM0YzMzU2O1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogaXRhbGljO1xuICAgIC0taWNvbi1jb2xvciA6I0ZGRkZGRjtcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6NTAlO1xuICAgIC0taW9uLWljb246ICMwMDAwMDA7XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREFEQURBO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMy41dm1pbjtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDUlO1xufVxuXG4janVzdGlmeV90ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6NzUlO1xuICAgIGxlZnQ6IDEyLjUlO1xuICAgIHRvcDoyNSU7XG5cbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNS41dm1pbjtcbiAgICBsaW5lLWhlaWdodDogNnZtaW47XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDgwJSAqL1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICMzRjMzNTY7XG59XG5cbiNqdXN0aWZ5X2lucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6NzUlO1xuICAgIGhlaWdodDogMjUlO1xuICAgIGxlZnQ6IDEyLjUlO1xuICAgIHRvcDozMyU7XG5cbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogMjAwO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3IgOiAjM0YzMzU2O1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogaXRhbGljO1xuICAgIC0taWNvbi1jb2xvciA6I0ZGRkZGRjtcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6NTAlO1xuICAgIC0taW9uLWljb246ICMwMDAwMDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RBREFEQTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDMuNXZtaW47XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1JTtcbn1cblxuI2RvY190ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6NzUlO1xuICAgIGxlZnQ6IDEyLjUlO1xuICAgIHRvcDo2MiU7XG5cbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNnZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDgwJSAqL1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICMzRjMzNTY7XG59XG5cbiNkb2NfZGVzY3JpcHRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDo3NSU7XG4gICAgbGVmdDogMTIuNSU7XG4gICAgdG9wOjY1JTtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMy44dm1pbjtcbiAgICBsaW5lLWhlaWdodDogNXZtaW47XG4gICAgY29sb3I6ICMzRjMzNTY7XG59XG5cbiNkb2NfaW5wdXQge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMy41dm1pbjtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDUlO1xufVxuXG4jc3VibWl0X2J1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOjUwJTtcbiAgICBsZWZ0OiAyNSU7XG4gICAgYm90dG9tOiAxMCU7XG59XG5cblxuI2NpcmNsZXMge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgc2NhbGU6MS4zO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6LTEwJTtcbn1cbiNmb3Jte1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MTElO1xufVxuXG5pb24tdGl0bGUge1xuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogNXZtaW47XG4gICAgY29sb3I6ICMzMzMzMzM7XG59XG5cbmlvbi10ZXh0e1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbn1cbmlvbi1sYWJlbHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24taXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cblxuIl19 */");

/***/ }),

/***/ 4815:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apply-aid/apply-aid.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header><ion-row></ion-row></ion-header>\n\n<ion-content style=\"padding-top:15%\">\n  <ion-button fill=clear [routerLink]=\"['/tablinks/request-aid']\" id=\"back_button\">\n    <ion-icon name=\"arrow-back\"></ion-icon>\n  </ion-button>\n  <ion-content id=\"form\" overflow-scroll=\"true\">\n    <iframe id=\"JotFormIFrame-220387163810048\" \n      title=\"Apply for Aid\" \n      onload=\"window.parent.scrollTo(0,0)\" \n      allowtransparency=\"true\" \n      allowfullscreen=\"true\" \n      allow=\"geolocation; microphone; camera\" \n      src=\"https://form.jotform.com/220387163810048\" \n      frameborder=\"0\" \n      style=\" min-width: 100%; height:100%; border:none;\" > \n    </iframe> \n  </ion-content>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_apply-aid_apply-aid_module_ts.js.map