(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["src_app_find-jobs_find-jobs_module_ts"],{

/***/ 5865:
/*!*******************************************************!*\
  !*** ./src/app/find-jobs/find-jobs-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindJobsPageRoutingModule": () => (/* binding */ FindJobsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _find_jobs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-jobs.page */ 3992);




const routes = [
    {
        path: '',
        component: _find_jobs_page__WEBPACK_IMPORTED_MODULE_0__.FindJobsPage
    }
];
let FindJobsPageRoutingModule = class FindJobsPageRoutingModule {
};
FindJobsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FindJobsPageRoutingModule);



/***/ }),

/***/ 4322:
/*!***********************************************!*\
  !*** ./src/app/find-jobs/find-jobs.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindJobsPageModule": () => (/* binding */ FindJobsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _find_jobs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-jobs-routing.module */ 5865);
/* harmony import */ var _find_jobs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-jobs.page */ 3992);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 4981);








let FindJobsPageModule = class FindJobsPageModule {
};
FindJobsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _find_jobs_routing_module__WEBPACK_IMPORTED_MODULE_0__.FindJobsPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_find_jobs_page__WEBPACK_IMPORTED_MODULE_1__.FindJobsPage]
    })
], FindJobsPageModule);



/***/ }),

/***/ 3992:
/*!*********************************************!*\
  !*** ./src/app/find-jobs/find-jobs.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindJobsPage": () => (/* binding */ FindJobsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_find_jobs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./find-jobs.page.html */ 1694);
/* harmony import */ var _find_jobs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-jobs.page.scss */ 7914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let FindJobsPage = class FindJobsPage {
    constructor() {
        this.jobs = [
            {
                "thumbnail": "logo",
                "title": "CFGI",
                "city": "San Fransisco",
                "state": "CA",
                "zipcode": "95621",
                "jobType": "lawyer",
                "postDate": "11/16/2021"
            }
        ];
    }
    ngOnInit() {
    }
};
FindJobsPage.ctorParameters = () => [];
FindJobsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-find-jobs',
        template: _raw_loader_find_jobs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_find_jobs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FindJobsPage);



/***/ }),

/***/ 7914:
/*!***********************************************!*\
  !*** ./src/app/find-jobs/find-jobs.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#waves_img {\n  position: absolute;\n  width: 90%;\n  top: 45%;\n  left: -15%;\n  transform: rotate(-40deg);\n}\n\n#waves_img2 {\n  position: absolute;\n  width: 90%;\n  top: 25%;\n  left: 35%;\n  transform: rotate(-50deg);\n}\n\n#career_text {\n  position: absolute;\n  width: 84%;\n  height: 6%;\n  left: 8%;\n  top: 15%;\n  bottom: 79%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 8vmin;\n  line-height: 8vmin;\n  color: #FF6E00;\n}\n\n#find_text {\n  position: absolute;\n  width: 84%;\n  height: 13%;\n  left: 8%;\n  right: 8%;\n  top: 20%;\n  bottom: 73%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: normal;\n  font-size: 7.5vmin;\n  line-height: 8vmin;\n  color: #3F3356;\n}\n\n#find_description {\n  position: absolute;\n  width: 84%;\n  height: 26%;\n  left: 8%;\n  right: 8%;\n  top: 30%;\n  bottom: 37%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 4.5vmin;\n  line-height: 5.5vmin;\n  color: #000000;\n}\n\n#filter_row {\n  position: absolute;\n  width: 100%;\n  top: 60%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: normal;\n  font-size: 1vmin;\n}\n\n#search_location {\n  position: relative;\n  width: 75%;\n  left: 3%;\n  align-items: left;\n  --background: #ffffff;\n  color: #000000;\n  --placeholder-font-weight: 200;\n  --placeholder-color:#000000;\n  --placeholder-font-style: italic;\n  --icon-color:#000000;\n  --placeholder-opacity:50%;\n  --ion-icon: #000000;\n  border: 1px solid #4C67F6;\n  box-sizing: border-box;\n  border-radius: 10px;\n}\n\n#filter_button {\n  scale: 1.2;\n  position: relative;\n  top: -10%;\n  right: 1%;\n  padding-left: 2%;\n}\n\n#search_row {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n}\n\n#search_field {\n  position: absolute;\n  left: 3%;\n  right: 8%;\n  width: 86%;\n  --background: #ffffff;\n  color: #000000;\n  --placeholder-font-weight: 200;\n  --placeholder-color:#000000;\n  --placeholder-font-style: italic;\n  --icon-color:#000000;\n  --placeholder-opacity:50%;\n  --ion-icon: #000000;\n  border: 1px solid #4C67F6;\n  box-sizing: border-box;\n  border-radius: 10px;\n}\n\n#search_button {\n  position: absolute;\n  left: 22%;\n  right: 22%;\n  width: 56%;\n  height: 7%;\n  top: 70%;\n  bottom: 23%;\n  background: #4C67F6;\n  border-radius: 6px;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 4vmin;\n  line-height: 5vmin;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n#results {\n  position: absolute;\n  top: 82%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmQtam9icy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBRVEsb0ZBQUE7RUFDUixpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBRVEsOEVBQUE7RUFDUixnQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUFKSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBRVEsK0VBQUE7RUFDUixxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBRUEsY0FBQTtBQU5KOztBQVNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUVRLCtFQUFBO0VBQ1IscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBUEo7O0FBVUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFZQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFUSjs7QUFZQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFUSjs7QUFZQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBRUEscUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBWEo7O0FBY0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFUSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQWJKOztBQWdCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQWJKIiwiZmlsZSI6ImZpbmQtam9icy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiN3YXZlc19pbWd7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOjkwJTtcbiAgICB0b3A6IDQ1JTtcbiAgICBsZWZ0OiAtMTUlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00MGRlZyk7XG59XG5cbiN3YXZlc19pbWcye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDo5MCU7XG4gICAgdG9wOiAyNSU7XG4gICAgbGVmdDogMzUlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC01MGRlZyk7XG59XG5cbiNjYXJlZXJfdGV4dHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDg0JTtcbiAgICBoZWlnaHQ6IDYlO1xuICAgIGxlZnQ6IDglO1xuICAgIHRvcDogMTUlO1xuICAgIGJvdHRvbTogNzklO1xuXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDh2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiA4dm1pbjtcblxuICAgIGNvbG9yOiAjRkY2RTAwO1xufVxuXG4jZmluZF90ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDg0JTtcbiAgICBoZWlnaHQ6IDEzJTtcbiAgICBsZWZ0OiA4JTtcbiAgICByaWdodDogOCU7XG4gICAgdG9wOiAyMCU7XG4gICAgYm90dG9tOjczJTtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogNy41dm1pbjtcbiAgICBsaW5lLWhlaWdodDogOHZtaW47XG5cbiAgICBjb2xvcjogIzNGMzM1Njtcbn1cblxuI2ZpbmRfZGVzY3JpcHRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODQlO1xuICAgIGhlaWdodDogMjYlO1xuICAgIGxlZnQ6IDglO1xuICAgIHJpZ2h0OiA4JTtcbiAgICB0b3A6IDMwJTtcbiAgICBib3R0b206IDM3JTtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDQuNXZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDUuNXZtaW47XG5cbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuI2ZpbHRlcl9yb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDYwJTtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMXZtaW47XG59XG5cbiNzZWFyY2hfbG9jYXRpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNzUlO1xuICAgIGxlZnQ6MyU7XG4gICAgYWxpZ24taXRlbXM6IGxlZnQ7XG5cbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogMjAwO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3IgOiMwMDAwMDA7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOiBpdGFsaWM7XG4gICAgLS1pY29uLWNvbG9yIDojMDAwMDAwO1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTo1MCU7XG4gICAgLS1pb24taWNvbjogIzAwMDAwMDtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0QzY3RjY7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jZmlsdGVyX2J1dHRvbiB7XG4gICAgc2NhbGU6IDEuMjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTAlO1xuICAgIHJpZ2h0OiAxJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xufVxuXG4jc2VhcmNoX3JvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgdG9wOiA1MCU7XG59XG5cbiNzZWFyY2hfZmllbGQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OjMlO1xuICAgIHJpZ2h0OjglO1xuICAgIHdpZHRoOiA4NiU7XG5cbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogMjAwO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3IgOiMwMDAwMDA7XG4gICAgLS1wbGFjZWhvbGRlci1mb250LXN0eWxlOiBpdGFsaWM7XG4gICAgLS1pY29uLWNvbG9yIDojMDAwMDAwO1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTo1MCU7XG4gICAgLS1pb24taWNvbjogIzAwMDAwMDtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0QzY3RjY7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jc2VhcmNoX2J1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDIyJTtcbiAgICByaWdodDogMjIlO1xuICAgIHdpZHRoOiA1NiU7XG4gICAgaGVpZ2h0OiA3JTtcbiAgICB0b3A6IDcwJTtcbiAgICBib3R0b206IDIzJTtcblxuICAgIGJhY2tncm91bmQ6ICM0QzY3RjY7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDR2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiA1dm1pbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI3Jlc3VsdHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6ODIlO1xufSJdfQ== */");

/***/ }),

/***/ 1694:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/find-jobs/find-jobs.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content class=\"ion-padding\">\n  <ion-row id=\"waves_img\">\n    <img src=\"../assets/legalwave.png\" />\n  </ion-row>\n  <ion-row id=\"waves_img2\">\n    <img src=\"../assets/legalwave.png\" />\n  </ion-row>\n  <ion-row id=\"career_text\">\n    <ion-text>\n      CAREER\n    </ion-text>\n  </ion-row>\n  <ion-row id=\"find_text\">\n    <ion-text>\n      Find A job From Trusted Partners\n    </ion-text>\n  </ion-row>\n  <ion-row id=\"find_description\">\n    <ion-text>\n      These companies took the CFGI diversity \n      pledge and are open to considering immigration \n      sponsorships for the right candidates.\n    </ion-text>\n  </ion-row>\n  <!--\n  <ion-row id=\"search_row\">\n    <ion-searchbar id=\"search_jobs\" \n            placeholder=\"job title, keywords, or company\"\n            [(ngModel)]=\"searchTerm\"\n            showCanelButton=\"focus\"\n            animated>\n    </ion-searchbar>\n    <ion-button fill=clear id=\"filter_button\">\n      <ion-icon width=\"100%\" name=\"filter-outline\"></ion-icon>\n    </ion-button>\n  </ion-row>\n-->\n  <ion-row id=\"search_row\">\n    <ion-button id=\"search_field\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n      <ion-input placeholder=\"Job Title, Keywords, or Company\">\n      </ion-input>\n      <!--\n      <ion-text>\n        within 15 miles\n      </ion-text>\n      <ion-button>\n        <ion-icon name=\"caret-down-outline\"></ion-icon>\n      </ion-button>\n        -->\n    </ion-button>\n  </ion-row>\n  <ion-row id=\"filter_row\">\n    <ion-button id=\"search_location\">\n      <ion-icon name=\"location-outline\"></ion-icon>\n      <ion-input placeholder=\"City, State or Zipcode\">\n      </ion-input>\n    </ion-button>\n    <ion-button fill=clear id=\"filter_button\">\n      <ion-icon width=\"100%\" name=\"filter-outline\"></ion-icon>\n    </ion-button>\n  </ion-row>\n  \n  <ion-row>\n    <ion-button  id=\"search_button\">\n      SEARCH\n    </ion-button>\n  </ion-row>\n  <ion-list id=\"results\">\n   <ion-item *ngFor=\"let job of jobs | filter:searchTerm\">\n      <ion-label> {{ jobs.thumbnail }}</ion-label>\n      <ion-label> {{ jobs.title }}</ion-label> \n      <ion-label> {{ jobs.city }}</ion-label>\n      <ion-label> {{ jobs.state }}</ion-label>\n      <ion-label> {{ jobs.jobType }}</ion-label>\n      <ion-label> {{ jobs.postDate }}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_find-jobs_find-jobs_module_ts.js.map