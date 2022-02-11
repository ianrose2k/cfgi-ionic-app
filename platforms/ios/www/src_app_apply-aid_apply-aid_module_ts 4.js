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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_apply_aid_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./apply-aid.page.html */ 34815);
/* harmony import */ var _apply_aid_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-aid.page.scss */ 5371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);





let ApplyAidPage = class ApplyAidPage {
    constructor() { }
    ngOnInit() {
        this.formData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            familyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            whyInternational: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            degreeLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            college: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            major: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            maritalStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            children: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            why: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            immigrationStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            familyHardship: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            finDocs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
        });
    }
    onSubmit() {
        console.log(this.formData.value);
    }
};
ApplyAidPage.ctorParameters = () => [];
ApplyAidPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#back_button {\n  top: 2%;\n  color: black;\n}\n\n#money_text {\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  top: 12%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 6vmin;\n  line-height: 16px;\n  /* identical to box height, or 80% */\n  text-align: left;\n  color: #3F3356;\n}\n\n#money_input {\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  top: 16%;\n  --background: #ffffff;\n  color: #000000;\n  --placeholder-font-weight: 200;\n  --placeholder-color: #3F3356;\n  --placeholder-font-style: italic;\n  --icon-color:#FFFFFF;\n  --placeholder-opacity:50%;\n  --ion-icon: #000000;\n  border: 1px solid #DADADA;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-size: 3.5vmin;\n  --padding-start: 5%;\n}\n\n#justify_text {\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  top: 25%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 5.5vmin;\n  line-height: 6vmin;\n  /* identical to box height, or 80% */\n  text-align: left;\n  color: #3F3356;\n}\n\n#justify_input {\n  position: absolute;\n  width: 75%;\n  height: 25%;\n  left: 12.5%;\n  top: 33%;\n  --background: #ffffff;\n  color: #000000;\n  --placeholder-font-weight: 200;\n  --placeholder-color: #3F3356;\n  --placeholder-font-style: italic;\n  --icon-color:#FFFFFF;\n  --placeholder-opacity:50%;\n  --ion-icon: #000000;\n  border: 1px solid #DADADA;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-size: 3.5vmin;\n  --padding-start: 5%;\n}\n\n#doc_text {\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  top: 62%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 6vmin;\n  line-height: 16px;\n  /* identical to box height, or 80% */\n  text-align: left;\n  color: #3F3356;\n}\n\n#doc_description {\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  top: 65%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: normal;\n  font-size: 3.8vmin;\n  line-height: 5vmin;\n  color: #3F3356;\n}\n\n#doc_input {\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-size: 3.5vmin;\n  --padding-start: 5%;\n}\n\n#submit_button {\n  position: absolute;\n  width: 50%;\n  left: 25%;\n  bottom: 10%;\n}\n\n#circles {\n  position: sticky;\n  scale: 1.3;\n  width: 100%;\n  left: -10%;\n}\n\nion-title {\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: 400;\n  font-size: 5vmin;\n  color: #333333;\n}\n\nion-text {\n  font-weight: 500;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGx5LWFpZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxPQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFFUSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBRUEscUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFFUSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFISjs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUVBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBRVEsb0ZBQUE7RUFDUixpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTEo7O0FBUUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUVRLCtFQUFBO0VBQ1IscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBTko7O0FBU0E7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVNBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFOSjs7QUFVQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBUEo7O0FBVUE7RUFDWSw4RUFBQTtFQUNSLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFQSjs7QUFVQTtFQUNJLGdCQUFBO0FBUEo7O0FBVUE7RUFDSSxnQkFBQTtBQVBKOztBQVVBO0VBQ0ksV0FBQTtBQVBKIiwiZmlsZSI6ImFwcGx5LWFpZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja19idXR0b24ge1xuICAgIHRvcDoyJTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbiNtb25leV90ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6NzUlO1xuICAgIGxlZnQ6IDEyLjUlO1xuICAgIHRvcDoxMiU7XG5cbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNnZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDgwJSAqL1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICMzRjMzNTY7XG59XG5cbiNtb25leV9pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOjc1JTtcbiAgICBsZWZ0OiAxMi41JTtcbiAgICB0b3A6MTYlO1xuXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yIDogIzNGMzM1NjtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAtLWljb24tY29sb3IgOiNGRkZGRkY7XG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OjUwJTtcbiAgICAtLWlvbi1pY29uOiAjMDAwMDAwO1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RBREFEQTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDMuNXZtaW47XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1JTtcbn1cblxuI2p1c3RpZnlfdGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOjc1JTtcbiAgICBsZWZ0OiAxMi41JTtcbiAgICB0b3A6MjUlO1xuXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDUuNXZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDZ2bWluO1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciA4MCUgKi9cbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjM0YzMzU2O1xufVxuXG4janVzdGlmeV9pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOjc1JTtcbiAgICBoZWlnaHQ6IDI1JTtcbiAgICBsZWZ0OiAxMi41JTtcbiAgICB0b3A6MzMlO1xuXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yIDogIzNGMzM1NjtcbiAgICAtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAtLWljb24tY29sb3IgOiNGRkZGRkY7XG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OjUwJTtcbiAgICAtLWlvbi1pY29uOiAjMDAwMDAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQURBREE7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAzLjV2bWluO1xuICAgIC0tcGFkZGluZy1zdGFydDogNSU7XG59XG5cbiNkb2NfdGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOjc1JTtcbiAgICBsZWZ0OiAxMi41JTtcbiAgICB0b3A6NjIlO1xuXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDZ2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciA4MCUgKi9cbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjM0YzMzU2O1xufVxuXG4jZG9jX2Rlc2NyaXB0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6NzUlO1xuICAgIGxlZnQ6IDEyLjUlO1xuICAgIHRvcDo2NSU7XG5cbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDMuOHZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDV2bWluO1xuICAgIGNvbG9yOiAjM0YzMzU2O1xufVxuXG4jZG9jX2lucHV0IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDMuNXZtaW47XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1JTtcbn1cblxuI3N1Ym1pdF9idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDo1MCU7XG4gICAgbGVmdDogMjUlO1xuICAgIGJvdHRvbTogMTAlO1xufVxuXG5cbiNjaXJjbGVzIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHNjYWxlOjEuMztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0Oi0xMCU7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmlnaHRlb3VzJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiA1dm1pbjtcbiAgICBjb2xvcjogIzMzMzMzMztcbn1cblxuaW9uLXRleHR7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcblxufVxuaW9uLWxhYmVse1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-row>\n    <ion-button fill=clear [routerLink]=\"['/tablinks/request-aid']\" id=\"back_button\">\n      <img src=\"./assets/back_button.png\"/>\n    </ion-button>\n  </ion-row>\n\n  <form [formGroup]=\"formData\" (ngSubmit)=\"onSubmit()\">\n    <ion-list>\n      <ion-item>\n        <ion-title>Personal Information</ion-title>\n      </ion-item>\n      <ion-card>\n        <ion-item>\n          <ion-label>First Name</ion-label>\n          <ion-input\n              required=true\n              formControlName=\"firstName\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Family Name</ion-label>\n          <ion-input\n              required=true\n              formControlName=\"familyName\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Date of Birth</ion-label>\n          <ion-input\n              required=true\n              type=\"date\"\n              formControlName=\"dateOfBirth\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Email</ion-label>\n          <ion-input\n              type=\"email\"\n              inputmode=\"email\"\n              required=true\n              formControlName=\"email\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Phone Number</ion-label>\n          <ion-input\n              inputmode=\"tel\"\n              type=\"tel\"\n              required=true\n              formControlName=\"phone\"></ion-input>\n        </ion-item>\n      </ion-card>\n\n\n      <ion-item>\n        <ion-title>Student Information</ion-title>\n      </ion-item>\n      <ion-card>\n        <ion-item>\n          <ion-label><small>Why do you identify as an international student?</small></ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-textarea\n              required=true\n              formControlName=\"whyInternational\"></ion-textarea>\n        </ion-item>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-label><small>Which college or university do you attend?</small></ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-input\n              required=true\n              formControlName=\"college\"></ion-input>\n        </ion-item>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-label><small>What degree are you seeking?</small></ion-label>\n        </ion-item>\n        <ion-list>\n          <ion-radio-group>\n            <ion-item>\n              <ion-label>Associate Degree</ion-label>\n              <ion-radio value=\"Associate\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>Bachelor Degree</ion-label>\n              <ion-radio value=\"bachelor\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>Master Degree</ion-label>\n              <ion-radio value=\"master\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>Doctoral Degree</ion-label>\n              <ion-radio value=\"doctoral\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>other</ion-label>\n              <ion-radio value=\"other\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-list>\n        <ion-item>\n          <ion-label><small>If you chose other, specify:</small></ion-label>\n          <ion-input formControlName=\"degreeLevel\"></ion-input>\n        </ion-item>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-label><small>What is your field of study?</small></ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-input\n              required=true\n              formControlName=\"major\"></ion-input>\n        </ion-item>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-label><small>What is your expected year of graduation?</small></ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-input\n              required=true\n              formControlName=\"year\"></ion-input>\n        </ion-item>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-label><small>What is your marital status?</small></ion-label>\n        </ion-item>\n        <ion-list>\n          <ion-radio-group>\n            <ion-item>\n              <ion-label><small>Single</small></ion-label>\n              <ion-radio value=\"single\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label><small>Married</small></ion-label>\n              <ion-radio value=\"married\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label><small>Widowed</small></ion-label>\n              <ion-radio value=\"widow\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label><small>Divorced</small></ion-label>\n              <ion-radio value=\"divorced\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label><small>Domestic Partnership</small></ion-label>\n              <ion-radio value=\"partner\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-list>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-label><small>Do you have children? if yes, how many?</small></ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-input formControlName=\"children\"></ion-input>\n        </ion-item>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-label><small>What is your current U.S. immigration status?</small></ion-label>\n        </ion-item><ion-list>\n          <ion-radio-group>\n            <ion-item>\n              <ion-label><small>F-1 without work authorization</small></ion-label>\n              <ion-radio value=\"F-1noPermit\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label><small>F-1 with work permit based on financial hardship</small></ion-label>\n              <ion-radio value=\"F-1permit\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label><small>F-1 CPT</small></ion-label>\n              <ion-radio value=\"F-1\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label><small>F-1 Pre-Completion OPT</small></ion-label>\n              <ion-radio value=\"F-1preCompletion\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label><small>F-1 Regular OPT</small></ion-label>\n              <ion-radio value=\"F-1regular\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label><small>F-1 STEM OPT</small></ion-label>\n              <ion-radio value=\"F-1stem\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label><small>J-1 without work authorization</small></ion-label>\n              <ion-radio value=\"J-1notAuthorized\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label><small>J-1 work authorized</small></ion-label>\n              <ion-radio value=\"J-1authoized\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label><small>DACA with work permit</small></ion-label>\n              <ion-radio value=\"DACApermit\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label><small>DACA without work permit</small></ion-label>\n              <ion-radio value=\"DACAnoPermit\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label><small>Green Card / Lawful Permanent Resident (LPR)</small></ion-label>\n              <ion-radio value=\"greenCard\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label><small>Other</small></ion-label>\n              <ion-radio value=\"other\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        </ion-list>\n        <ion-item>\n          <ion-label><small>If you chose other:</small></ion-label>\n          <ion-input formControlName=\"immigrationStatus\"></ion-input>\n        </ion-item>\n      </ion-card>\n\n      <ion-item>\n        <ion-title>Financial Need</ion-title>\n      </ion-item>\n      <ion-card>\n        <ion-item>\n          <ion-label><small>How much financial assistance are you seeking?</small></ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label><small>$</small></ion-label>\n          <ion-input\n              inputmode=\"decimal\"\n              type=\"number\"\n              required=true\n              formControlName=\"amount\"></ion-input>\n        </ion-item>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-label><small>Why do you need support?</small></ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-textarea\n              required=true\n              formControlName=\"why\"></ion-textarea>\n        </ion-item>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-text><small>If you or any family members have a situation that \n            has caused to incur expenses, debts, or loss of income, describe \n            the situation in the box below. Specify the amounts of the expenses, \n            debts, and income losses in as much detail as possible. Examples may \n            include medical expenses, job loss, eviction, and homelessness.</small></ion-text>\n        </ion-item>\n        <ion-item>\n          <ion-textarea formControlName=\"familyHardship\"></ion-textarea>\n        </ion-item>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-text><small>Please provide documents that prove your current \n            financial situation and status. This includes any federal income \n            tax returns, bank statements, investment records, and records of \n            untaxed income from either the United States or from your home country.</small></ion-text>\n        </ion-item>\n        <ion-item>\n          <ion-input\n          id=\"doc_input\"\n          type=\"file\" \n          aria-label=\"File browser example\"\n          (change)=\"loadImageFromDevice($event)\"\n          formControlName=\"finDocs\"></ion-input>\n        </ion-item>\n      </ion-card>\n    </ion-list>\n\n    <div style=\"text-align: center\">\n      <ion-button style=\"width:50%\" type=\"submit\" [routerLink]=\"['/tablinks']\">\n        SUBMIT\n      </ion-button>\n    </div>\n  </form>\n\n\n  <!--\n  <ion-row>\n    <ion-text id=\"money_text\">\n      Requested amount:\n    </ion-text>\n  </ion-row>\n  <ion-row>\n    <ion-input \n            id=\"money_input\"\n            placeholder=\"0.00\" \n            inputmode=\"decimal\" \n            [(ngModel)]=\"amounty\" \n            name=\"amount\"></ion-input>\n  </ion-row>\n\n  <ion-row>\n    <ion-text id=\"justify_text\">\n      Provide justification on why you need the money:\n    </ion-text>\n  </ion-row>\n  <ion-row>\n    <ion-textarea\n            id=\"justify_input\"\n            placeholder=\"My family does not have enough funds. And I cannot afford my tuition.\"\n            [(ngModel)]=\"justification\" \n            name=\"reason\"></ion-textarea>\n  </ion-row>\n\n  <ion-row>\n    <ion-text id=\"doc_text\">\n      Attach Documents\n    </ion-text>\n  </ion-row>\n  <ion-row>\n    <ion-text id=\"doc_description\">\n      Please provide all financial evidence, \n      including bank statements and bills\n    </ion-text>\n  </ion-row>\n  <ion-row>\n-->\n    <!-- https://forum.ionicframework.com/t/ion-input-type-file-full-path/101790 -->\n<!--\n    <ion-input \n            id=\"doc_input\"\n            type=\"file\" \n            aria-label=\"File browser example\"\n            accept=\"image/*\" \n            (change)=\"loadImageFromDevice($event)\"></ion-input>\n  </ion-row>\n\n  <ion-row>\n    <ion-button [routerLink]=\"['/tablinks']\" id=\"submit_button\">\n      SUBMIT\n    </ion-button>\n  </ion-row>\n  -->\n");

/***/ })

}]);
//# sourceMappingURL=src_app_apply-aid_apply-aid_module_ts.js.map