(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["src_app_schedule_schedule_module_ts"],{

/***/ 82774:
/*!*****************************************************!*\
  !*** ./src/app/schedule/schedule-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePageRoutingModule": () => (/* binding */ SchedulePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.page */ 13217);




const routes = [
    {
        path: '',
        component: _schedule_page__WEBPACK_IMPORTED_MODULE_0__.SchedulePage
    }
];
let SchedulePageRoutingModule = class SchedulePageRoutingModule {
};
SchedulePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SchedulePageRoutingModule);



/***/ }),

/***/ 47911:
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePageModule": () => (/* binding */ SchedulePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 44981);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule-routing.module */ 82774);
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule.page */ 13217);








let SchedulePageModule = class SchedulePageModule {
};
SchedulePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _schedule_routing_module__WEBPACK_IMPORTED_MODULE_1__.SchedulePageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
        ],
        declarations: [_schedule_page__WEBPACK_IMPORTED_MODULE_2__.SchedulePage]
    })
], SchedulePageModule);



/***/ }),

/***/ 13217:
/*!*******************************************!*\
  !*** ./src/app/schedule/schedule.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePage": () => (/* binding */ SchedulePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_schedule_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./schedule.page.html */ 92780);
/* harmony import */ var _schedule_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.page.scss */ 22044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 69526);





//Attorney Data; An array of 'attorney info objects'
//To add an attorney, add to 'users' array[] with the given attorney info as an object{} as shown below.
//[Note]: You must provide a 'key', a sequential number. 
//[Note]: You also must fill-in all information e.g., name, linkedin, avvo, otherlink, about, expertise, languages, location, ect..
let SchedulePage = class SchedulePage {
    constructor(iab) {
        this.iab = iab;
        this.options = {
            location: 'yes',
            hidden: 'yes',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'yes',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes', //Windows only    
        };
        this.hideAvvo = true;
        this.hideLinkedin = true;
        this.hideSchedule = true;
        //Attorney Data; An array of 'attorney info objects'
        //To add an attorney, add to 'users' array[] with the given attorney info as an object{} as shown below.
        //[Note]: You must provide a 'key', a sequential number. 
        //[Note]: You also must fill-in all information e.g., name, linkedin, avvo, otherlink, about, expertise, languages, location, ect..
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
                "key": '2' /// Indexing Key (Required)
            }
        ];
    }
    openWithSystemBrowser(url) {
        let target = "_system";
        this.iab.create(url, target, this.options);
    }
    openWithInAppBrowser(url) {
        let target = "_blank";
        this.iab.create(url, target, this.options);
    }
    openWithCordovaBrowser(url) {
        let target = "_self";
        this.iab.create(url, target, this.options);
    }
    ngOnInit() {
    }
};
SchedulePage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser }
];
SchedulePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-schedule',
        template: _raw_loader_schedule_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_schedule_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SchedulePage);



/***/ }),

/***/ 22044:
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#back_button {\n  position: absolute;\n  top: 6%;\n  color: black;\n}\n\n#legal_text {\n  position: absolute;\n  width: 80%;\n  left: 10%;\n  top: 14%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 7vmin;\n  line-height: 6vmin;\n  text-align: left;\n  color: #FF6E00;\n}\n\n#find_text {\n  position: absolute;\n  width: 80%;\n  left: 10%;\n  top: 18%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: normal;\n  font-size: 5.5vmin;\n  line-height: 6.5vmin;\n  color: #3F3356;\n}\n\n#waves_img {\n  scale: 1;\n  position: absolute;\n  width: 90%;\n  top: 15%;\n  left: -2%;\n  transform: rotate(0deg);\n}\n\n#filter_button {\n  scale: 1.2;\n  position: relative;\n  top: -10%;\n  left: 75%;\n  padding-left: 2%;\n}\n\n#search_row {\n  position: absolute;\n  width: 100%;\n  top: 26%;\n}\n\n#search_field {\n  position: absolute;\n  left: 3%;\n  right: 8%;\n  width: 90%;\n  --background: #ffffff;\n  color: #000000;\n  --placeholder-font-weight: 200;\n  --placeholder-color:#000000;\n  --placeholder-font-style: italic;\n  --icon-color:#000000;\n  --placeholder-opacity:50%;\n  --ion-icon: #000000;\n}\n\n#results {\n  position: absolute;\n  width: 100%;\n  top: 34%;\n}\n\n#result_card {\n  left: 1%;\n  width: 85%;\n  min-height: 300px;\n}\n\n#left {\n  position: relative;\n  width: 30%;\n  vertical-align: top;\n}\n\n#lawyer_avi {\n  position: relative;\n  width: 100%;\n}\n\n#right {\n  position: relative;\n  width: 40%;\n  left: 5%;\n  vertical-align: top;\n}\n\n#lawyer_title {\n  position: relative;\n  width: 100%;\n  display: block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: normal;\n  font-size: 7vmin;\n  line-height: 8vmin;\n  color: #3F3356;\n}\n\n#about {\n  display: block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 2.5vmin;\n  line-height: 3vmin;\n}\n\n#link {\n  width: 100%;\n  color: #1f274d;\n  border: 1px solid #1f274d;\n  border-radius: 10px;\n}\n\n#icon {\n  width: 50px;\n}\n\n#location {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 4vmin;\n  line-height: 4vmin;\n}\n\n#languages {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 3vmin;\n  line-height: 3vmin;\n}\n\n#contact {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 3vmin;\n  line-height: 3vmin;\n  width: 100%;\n  vertical-align: top;\n  font-weight: bold;\n}\n\n#hours {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 2vmin;\n  width: 100%;\n}\n\n#schedule_button {\n  width: 100%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 4vmin;\n  line-height: 4vmin;\n  --background: #1f6b30 ;\n}\n\n#no_calendly {\n  width: 100%;\n  text-align: center;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 3vmin;\n  line-height: 3vmin;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRVEsb0ZBQUE7RUFDUixpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFFUSw4RUFBQTtFQUNSLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBRUEsY0FBQTtBQUZKOztBQUtBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFGSjs7QUFLQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBRUEscUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FBSEo7O0FBTUE7RUFDSSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBSEo7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBRVEsOEVBQUE7RUFDUixnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUFOSjs7QUFTQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBRVEsb0ZBQUE7RUFDUixpQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVBKOztBQVVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBUEo7O0FBVUE7RUFDSSxXQUFBO0FBUEo7O0FBVUE7RUFDWSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUEo7O0FBVUE7RUFDWSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUEo7O0FBVUE7RUFDWSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFQSjs7QUFVQTtFQUNZLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVBKOztBQVVBO0VBQ0ksV0FBQTtFQUNRLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVBKOztBQVVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ1Esb0ZBQUE7RUFDUixpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVBKIiwiZmlsZSI6InNjaGVkdWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrX2J1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDo2JTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4jbGVnYWxfdGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbGVmdDogMTAlO1xuICAgIHRvcDoxNCU7XG5cbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogN3ZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDZ2bWluO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICBjb2xvcjogI0ZGNkUwMDtcbn1cblxuI2ZpbmRfdGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbGVmdDogMTAlO1xuICAgIHRvcDoxOCU7XG5cbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SaWdodGVvdXMmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDUuNXZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDYuNXZtaW47XG5cbiAgICBjb2xvcjogIzNGMzM1Njtcbn1cblxuI3dhdmVzX2ltZyB7XG4gICAgc2NhbGU6MTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6OTAlO1xuICAgIHRvcDogMTUlO1xuICAgIGxlZnQ6IC0yJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cblxuI2ZpbHRlcl9idXR0b24ge1xuICAgIHNjYWxlOiAxLjI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTEwJTtcbiAgICBsZWZ0OiA3NSU7XG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcbn1cblxuI3NlYXJjaF9yb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHRvcDogMjYlO1xufVxuXG4jc2VhcmNoX2ZpZWxkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDozJTtcbiAgICByaWdodDo4JTtcbiAgICB3aWR0aDogOTAlO1xuXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yIDojMDAwMDAwO1xuICAgIC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTogaXRhbGljO1xuICAgIC0taWNvbi1jb2xvciA6IzAwMDAwMDtcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6NTAlO1xuICAgIC0taW9uLWljb246ICMwMDAwMDA7XG59XG5cbiNyZXN1bHRzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOjM0JTtcbn1cblxuI3Jlc3VsdF9jYXJkIHtcbiAgICBsZWZ0OiAxJTtcbiAgICB3aWR0aDogODUlO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuXG4jbGVmdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuI2xhd3llcl9hdmkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI3JpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBsZWZ0OiA1JTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIFxufVxuI2xhd3llcl90aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogN3ZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDh2bWluO1xuXG4gICAgY29sb3I6ICMzRjMzNTY7XG59XG5cbiNhYm91dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDIuNXZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDN2bWluO1xufVxuXG4jbGluayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IzFmMjc0ZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWYyNzRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNpY29uIHtcbiAgICB3aWR0aDogNTBweDtcbn1cblxuI2xvY2F0aW9uIHtcbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiA0dm1pbjtcbiAgICBsaW5lLWhlaWdodDogNHZtaW47XG59XG5cbiNsYW5ndWFnZXMge1xuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDN2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiAzdm1pbjtcbn1cblxuI2NvbnRhY3Qge1xuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDN2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiAzdm1pbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jaG91cnMge1xuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDJ2bWluO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jc2NoZWR1bGVfYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNHZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDR2bWluO1xuICAgIC0tYmFja2dyb3VuZDogIzFmNmIzMCA7XG59XG5cbiNub19jYWxlbmRseSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzdm1pbjtcbiAgICBsaW5lLWhlaWdodDogM3ZtaW47XG59Il19 */");

/***/ }),

/***/ 92780:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\n    <!-- Back Button -->\n    <!--\n    <ion-row>\n      <ion-button fill=clear [routerLink]=\"['/tablinks/legal']\" id=\"back_button\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-row>\n  -->\n\n    <!-- \n    <ion-row id=\"waves_img\">\n      <img src=\"../assets/legalwave.png\" />\n    </ion-row>\n    -->\n\n    <!-- Text at top that says \"Legal\" -->\n    <ion-row id=\"legal_text\">\n      <ion-text>\n        LEGAL\n      </ion-text>\n    </ion-row>\n\n    <!-- Text at top that says \"Find a CFGI Attorney For a Consultation\" -->\n    <ion-row id=\"find_text\">\n      <ion-text>\n        Find a CFGI Attorney For a Consulation\n      </ion-text>\n    </ion-row>\n\n    <!-- Row containing Search Bar -->\n    <ion-row id=\"search_row\">\n      <ion-searchbar id=\"search_field\"\n           id=\"search_field\"\n           placeholder=\"Search for Lawyers\"\n           [(ngModel)]=\"searchTerm\"\n           showCancelButton=\"focus\"\n           animated>\n      </ion-searchbar>\n      <!-- Filter button included for future development-->\n      <!--\n      <ion-button fill=clear id=\"filter_button\">\n        <ion-icon width=\"100%\" name=\"filter-outline\"></ion-icon>\n      </ion-button>\n    -->\n    </ion-row>\n    \n    <!-- List of cards displayed as results -->\n    <ion-row id=\"results\">\n      <ion-list>\n        <!-- Create an ion item for each lawyer in the lawyers array -->\n        <ion-item *ngFor=\"let lawyer of lawyers | filter:searchTerm\">\n          <ion-card id=\"result_card\"> \n            <ion-card-content>\n              <table>\n                <!-- Top row of Table: Lawyer image on left and name, location and language on right -->\n                <tr>\n                  <td id=\"left\"><img id=\"lawyer_avi\" src= {{lawyer.image}}></td>\n                  <td id=\"right\"><ion-text id=\"lawyer_title\">{{lawyer.fname}}</ion-text>\n                    <ion-text id=\"lawyer_title\">{{lawyer.lname}}</ion-text>\n                    <ion-text id=\"location\"> {{lawyer.location}}<br> </ion-text>\n                    <ion-text id=\"languages\"> {{lawyer.languages}} </ion-text>\n                  </td>\n                </tr>\n                <!-- 2nd Row of Table: Contact information on left and Lawyer information on right -->\n                <tr>\n                  <td id=\"left\">\n                    <!-- Show button for Linkedin Profile if given -->\n                    <ion-button *ngIf=\"lawyer.linkedin\" fill=\"clear\" id=\"link\" href= {{lawyer.linkedin}}><img id=\"icon\" src=\"../assets/linkedin.png\"></ion-button>\n                    <!-- Show button for Avvo Profile if given -->\n                    <ion-button *ngIf=\"lawyer.avvo\" fill=\"clear\" id=\"link\" href= {{lawyer.avvo}}> <img id=\"icon\" src=\"../assets/avvo.png\"></ion-button>\n                    <!-- Lawyer's phone number -->\n                    <ion-text id=\"contact\"><br><br><ion-icon size=\"small\" name=\"call\"></ion-icon>&nbsp;&nbsp;{{lawyer.phone}}<br></ion-text>\n                    <!-- Show hours if given -->\n                    <ion-text *ngIf=\"lawyer.hours\" id=\"hours\"> Hours: {{lawyer.hours}}</ion-text>\n                  </td>\n                  <td id=\"right\">\n                    <!-- Lawyer about section -->\n                    <ion-text id=\"about\" >{{lawyer.about}}<br><br></ion-text>\n                    <!-- Lawyer expertise section -->\n                    <ion-text id=\"about\" > Expertise: {{lawyer.expertise}}</ion-text>\n                  </td>\n                </tr>\n                </table>\n            </ion-card-content>\n            <!-- Button to schedule with lawyer via Calendly, if Calendly link is provided -->\n            <ion-card-content  *ngIf=\"lawyer.calendly\">\n              <!-- In App Browser help: https://www.techiediaries.com/inappbrowser-ionic-v3/ -->\n              <ion-button (click)=\"openWithCordovaBrowser(lawyer.calendly)\" id=\"schedule_button\" > Schedule with {{lawyer.fname}}</ion-button>\n            </ion-card-content>\n\n            <!-- If no Calendly link is provided, button is replaced with text telling the user \n            to schedule their appointment by contacting the lawyer-->\n            <ion-card-content  id=\"no_calendly\"  *ngIf =\"lawyer.calendly === ''\">\n              <ion-text > Please contact {{lawyer.fname}} directly to check availability.</ion-text>\n            </ion-card-content>\n          </ion-card>\n        </ion-item>\n      </ion-list>\n    </ion-row>");

/***/ })

}]);
//# sourceMappingURL=src_app_schedule_schedule_module_ts.js.map