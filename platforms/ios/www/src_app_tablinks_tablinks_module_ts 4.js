(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["src_app_tablinks_tablinks_module_ts"],{

/***/ 3030:
/*!*****************************************************!*\
  !*** ./src/app/tablinks/tablinks-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablinksPageRoutingModule": () => (/* binding */ TablinksPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tablinks_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tablinks.page */ 7056);




const routes = [
    {
        path: 'tablinks',
        component: _tablinks_page__WEBPACK_IMPORTED_MODULE_0__.TablinksPage,
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-lottie___ivy_ngcc___dist_esm_src_index_js"), __webpack_require__.e("default-src_app_sophie-modal_sophie-modal_page_ts"), __webpack_require__.e("default-src_app_david-modal_david-modal_page_ts"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 3467)).then(m => m.HomePageModule)
            },
            {
                path: 'login',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-lottie___ivy_ngcc___dist_esm_src_index_js"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../login/login.module */ 80107)).then(m => m.LoginPageModule)
            },
            {
                path: 'donate',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-lottie___ivy_ngcc___dist_esm_src_index_js"), __webpack_require__.e("src_app_donate_donate_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../donate/donate.module */ 53589)).then(m => m.DonatePageModule)
            },
            {
                path: 'request-aid',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_request-aid_request-aid_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../request-aid/request-aid.module */ 47640)).then(m => m.RequestAidPageModule)
            },
            {
                path: 'legal',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_legal_legal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../legal/legal.module */ 90373)).then(m => m.LegalPageModule)
            },
            {
                path: 'schedule',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_schedule_schedule_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../schedule/schedule.module */ 47911)).then(m => m.SchedulePageModule)
            },
            {
                path: 'find-jobs',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_find-jobs_find-jobs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../find-jobs/find-jobs.module */ 84322)).then(m => m.FindJobsPageModule)
            },
            {
                path: '',
                redirectTo: '/tablinks/home',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: '/tablinks/home',
        pathMatch: 'full'
    }
];
let TablinksPageRoutingModule = class TablinksPageRoutingModule {
};
TablinksPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TablinksPageRoutingModule);



/***/ }),

/***/ 32616:
/*!*********************************************!*\
  !*** ./src/app/tablinks/tablinks.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablinksPageModule": () => (/* binding */ TablinksPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tablinks_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tablinks-routing.module */ 3030);
/* harmony import */ var _tablinks_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tablinks.page */ 7056);







let TablinksPageModule = class TablinksPageModule {
};
TablinksPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tablinks_routing_module__WEBPACK_IMPORTED_MODULE_0__.TablinksPageRoutingModule
        ],
        declarations: [_tablinks_page__WEBPACK_IMPORTED_MODULE_1__.TablinksPage]
    })
], TablinksPageModule);



/***/ }),

/***/ 7056:
/*!*******************************************!*\
  !*** ./src/app/tablinks/tablinks.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablinksPage": () => (/* binding */ TablinksPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tablinks_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tablinks.page.html */ 20120);
/* harmony import */ var _tablinks_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tablinks.page.scss */ 40545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let TablinksPage = class TablinksPage {
    constructor() { }
    ngOnInit() {
    }
};
TablinksPage.ctorParameters = () => [];
TablinksPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tablinks',
        template: _raw_loader_tablinks_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tablinks_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TablinksPage);



/***/ }),

/***/ 40545:
/*!*********************************************!*\
  !*** ./src/app/tablinks/tablinks.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsaW5rcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 20120:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tablinks/tablinks.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar hieght = \"50 px\" >\n    <ion-title>\n      <img class=\"displayed\"  height=\"32 px\" width=\"150 px\" src=\"./assets/logo-full.png\">\n    </ion-title>\n    <ion-buttons slot=\"primary\">\n      <!--\n      <ion-button color=\"secondary\">\n        <ion-icon name=\"cog\"></ion-icon>\n      </ion-button>\n    -->\n    <!--\n      <ion-button [routerLink]=\"['/settings']\" color=\"secondary\">\n        <ion-icon name=\"person\"></ion-icon>\n      </ion-button>\n    -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n<!--\n    <ion-tab-button tab=\"find-jobs\">\n      <ion-icon name=\"print-outline\"></ion-icon>\n      <ion-label>Find Jobs</ion-label>\n    </ion-tab-button>\n-->\n  <!-- While schedule is the only legal tab section developed, the tab will take the user straight to schedule for now -->\n    <ion-tab-button tab=\"schedule\">\n      <ion-icon name=\"briefcase-outline\"></ion-icon>\n      <ion-label>Attorneys</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"request-aid\">\n      <ion-icon name=\"cash-outline\"></ion-icon>\n      <ion-label>Request Aid</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"donate\">\n      <ion-icon name=\"logo-paypal\"></ion-icon>\n      <ion-label>Donate</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tablinks_tablinks_module_ts.js.map