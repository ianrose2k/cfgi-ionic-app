(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["src_app_variables_variables_module_ts"],{

/***/ 87656:
/*!*******************************************************!*\
  !*** ./src/app/variables/variables-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VariablesPageRoutingModule": () => (/* binding */ VariablesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _variables_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.page */ 60489);




const routes = [
    {
        path: '',
        component: _variables_page__WEBPACK_IMPORTED_MODULE_0__.VariablesPage
    }
];
let VariablesPageRoutingModule = class VariablesPageRoutingModule {
};
VariablesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VariablesPageRoutingModule);



/***/ }),

/***/ 76817:
/*!***********************************************!*\
  !*** ./src/app/variables/variables.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VariablesPageModule": () => (/* binding */ VariablesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _variables_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables-routing.module */ 87656);
/* harmony import */ var _variables_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables.page */ 60489);







let VariablesPageModule = class VariablesPageModule {
};
VariablesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _variables_routing_module__WEBPACK_IMPORTED_MODULE_0__.VariablesPageRoutingModule
        ],
        declarations: [_variables_page__WEBPACK_IMPORTED_MODULE_1__.VariablesPage]
    })
], VariablesPageModule);



/***/ }),

/***/ 60489:
/*!*********************************************!*\
  !*** ./src/app/variables/variables.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VariablesPage": () => (/* binding */ VariablesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_variables_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./variables.page.html */ 15441);
/* harmony import */ var _variables_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables.page.scss */ 18315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let VariablesPage = class VariablesPage {
    constructor() {
        this.lawyers = [
            {
                "fname": 'Matthew W.',
                "lname": 'Blaisdell',
                "linkedin": "https://www.linkedin.com/in/matthew-blaisdell-esq",
                "avvo": "https://www.avvo.com/attorneys/11232-ny-matthew-blaisdell-3817651.html",
                "otherlink": "Blaisdelllaw.com",
                "about": "Matthew Blaisdell, Esquire, is a general immigration practice with a focus on providing ongoing consulting services to students, visitors, and others seeking to identify an immigration strategy that best suits their goals. In addition to his practice, Matthew is deeply involved in advocacy related to professional ethics and consumer protection.",
                "expertise": ['Family Green Cards', 'Employment Green Cards', 'Students', 'Work Permits'],
                "languages": ['English'],
                "location": "Brooklyn, NY",
                "hours": "M: 8:00 am – 3:00 pm (EST), Tu: 10:00 am – 5:00 pm (EST), W:  8:00 am – 3:00 pm  (EST),Th:  11:00 am – 3:00 pm (EST), Fr:  8:00 am – 3:00 pm (EST)",
                "phone": "(347) 994-0177",
                "calendly": "https://matthewblaisdell.s3.us-west-1.amazonaws.com/mattbladswell+copy.html",
                "image": '../assets/MatthewW.jpg',
                "key": '1'
            },
            {
                "fname": 'Seth',
                "lname": 'Finberg',
                "linkedin": "https://www.linkedin.com/in/seth-finberg-47071920a/",
                "avvo": "",
                "otherlink": "",
                "about": "Seth Finberg grew up in Ft. Lauderdale and attended the University of Georgia School of Law.  He practiced Criminal Defense in Metro Atlanta before returning to South Florida to open an Immigration Law practice.  Seth is an Eagle Scout, enjoys playing the guitar, and coaches high school football along with men's/women's soccer.",
                "expertise": ['Asylum', 'Employment Authorization Documents (EAD)', 'F-1 Visas', 'TPS Applications'],
                "languages": ['English'],
                "location": "Fort Lauderdale, FL",
                "hours": "Thurs: 6:00-7:30 pm (ET)",
                "phone": "(954) 235-2277",
                "calendly": "https://sethfinberg.s3-us-west-1.amazonaws.com/sethfinberg.html",
                "image": '../assets/seth.jpeg',
                "key": '2'
            },
            {
                "fname": 'Lawyer',
                "lname": 'Person',
                "linkedin": "",
                "avvo": "",
                "website": "",
                "about": "About Section",
                "expertise": ["lawyering"],
                "languages": ['languages'],
                "location": "City, State",
                "hours": "day: 0:00-0:00 am (TimeZone)",
                "phone": "(800)867-5309",
                "calendly": "",
                "image": '../assets/attorneydefault.png',
                "key": '3' /// Indexing Key (Required)
            }
        ];
    }
    ngOnInit() {
    }
};
VariablesPage.ctorParameters = () => [];
VariablesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-variables',
        template: _raw_loader_variables_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_variables_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VariablesPage);



/***/ }),

/***/ 18315:
/*!***********************************************!*\
  !*** ./src/app/variables/variables.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YXJpYWJsZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 15441:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/variables/variables.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>variables</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_variables_variables_module_ts.js.map