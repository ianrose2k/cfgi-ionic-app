(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["src_app_home_home_module_ts"],{

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/angular */ 77360);
/* harmony import */ var ng_lottie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-lottie */ 52800);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ 52003);









let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomePageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_8__.SwiperModule,
            ng_lottie__WEBPACK_IMPORTED_MODULE_1__.LottieAnimationViewModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 49764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ 65548);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sophie_modal_sophie_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sophie-modal/sophie-modal.page */ 19411);
/* harmony import */ var _david_modal_david_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../david-modal/david-modal.page */ 37685);








let HomePage = class HomePage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.swiperConfig = {
            autoplay: { delay: 0 },
            speed: 2000,
        };
        this.swiperConfig2 = {
            centeredSlides: true,
            slidesPerView: 1.5,
            zoom: true,
            grabCursor: true,
            pagination: true
        };
        this.immigrants = [
            {
                "name": "ALBERT EINSTEIN",
                "country": "GERMANY",
                "about": "One of the most recognized and well-known scientists of the century. \
      His theories solved centuries-old-problems in physics and rocked even \
      non-physicists' view of the world. E= mc2",
                "photo": "./assets/albertEinstein.png"
            },
            {
                "name": "CHIEN-SHIUNG WU",
                "country": "CHINA",
                "about": "Chinese-American nuclear physicist Chien-Shiung Wu, also known as 'the First Lady of Physics,' contributed to the Manhattan Project and made history with an experiment that disproved the hypothetical law of conservation of parity.",
                "photo": "./assets/chien-shiungWu.png"
            },
            {
                "name": "NIKOLA TESLA",
                "country": "SERBIA",
                "about": "Futurist who illuminated the earth electrically bright due to his immense contributions in designing the very back-bone of every modern electric supply of today – the alternating current.",
                "photo": "./assets/nikolaTesla.png"
            },
            {
                "name": "CECILIA PAYNE",
                "country": "ENGLAND",
                "about": "Cecilia Payne discovered that stars are made largely of the two lightest chemical elements – hydrogen and helium. She was the most eminent female astronomer of her time, the first to be appointed full professor at Harvard University, and the first to chair a department.",
                "photo": "./assets/ceciliaPayne.png"
            },
            {
                "name": "BOB MARLEY",
                "country": "JAMAICA",
                "about": "Considered one of the pioneers of reggae music. Bob was a freedom fighter he used his Pen instead of gun. He fought for freedom, peace, and equal rights. Marley received The United Nations Peace Medal. Marley’s “One Love” was proclaimed as Song of the Millennium.",
                "photo": "./assets/bobMarley.png"
            },
            {
                "name": "GERTY CORI",
                "country": "CZECH",
                "about": "Carbohydrate research not only led to the development of treatments for diabetes, it also made them winners of the 1947 Nobel Prize in physiology or medicine, and Gerty the first American woman Nobel laureate in science.",
                "photo": "./assets/gertyCori.png"
            },
            {
                "name": "JOSEPH PULITZER",
                "country": "HUNGARY",
                "about": "Best known for the Pulitzer Prizes, which were established in 1917. He was American newspaper editor and publisher who helped to establish the pattern of the modern newspaper. In his time he was one of the most powerful journalists in the United States.",
                "photo": "./assets/josephPulitzer.png"
            },
            {
                "name": "MARIA MAYNER",
                "country": "GERMANY",
                "about": "German-born American theoretical physicist, and Nobel laureate in Physics for proposing the nuclear shell model of the atomic nucleus. She was the second woman to win a Nobel Prize in physics, the first being Marie Curie.",
                "photo": "./assets/mariaMayner.png"
            },
            {
                "name": "HEDY LAMARR",
                "country": "AUSTRIA",
                "about": "Frequency hopping a way of jumping around on radio frequencies in order to avoid a third party jamming your signal. Avid inventor and the person behind advances advances in communication technology that led to today’s Wi-Fi, GPS, and Bluetooth.",
                "photo": "./assets/hedyLamarr.png"
            },
        ];
        this.companies = [
            {
                "name": "Alcorn",
                "icon": "./assets/Alcorn.png",
            },
            {
                "name": "Pranos",
                "icon": "./assets/pranos.png",
            },
            {
                "name": "Fyusion",
                "icon": "./assets/fyusion.png",
            },
            {
                "name": "Welcoming America",
                "icon": "./assets/welcoming_amrica.png",
            },
        ];
    }
    sophieModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _sophie_modal_sophie_modal_page__WEBPACK_IMPORTED_MODULE_3__.SophieModalPage,
                componentProps: {}
            });
            modal.onDidDismiss().then((modalDataResponseSophie) => {
                if (modalDataResponseSophie !== null) {
                    this.modalDataResponseSophie = modalDataResponseSophie.data;
                    console.log('Modal Sent Data : ' + modalDataResponseSophie.data);
                }
            });
            return yield modal.present();
        });
    }
    davidModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _david_modal_david_modal_page__WEBPACK_IMPORTED_MODULE_4__.DavidModalPage,
            });
            modal.onDidDismiss().then((modalDataResponseDavid) => {
                if (modalDataResponseDavid !== null) {
                    this.modalDataResponseDavid = modalDataResponseDavid.data;
                    console.log('Modal Sent Data : ' + modalDataResponseDavid.data);
                }
            });
            return yield modal.present();
        });
    }
    ngOnInit() {
        swiper__WEBPACK_IMPORTED_MODULE_2__.default.use([swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay]);
        swiper__WEBPACK_IMPORTED_MODULE_2__.default.use([swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination]);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-slides {\n  --bullet-background: #A9A9A9;\n  --bullet-background-active: #F18C7F;\n}\n\nion-content {\n  --ion-background-color: #FFFFFF;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\nion-title {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  color: #F18C7F;\n  font-size: 1.2rem;\n}\n\nion-card {\n  box-shadow: none !important;\n}\n\nion-card-title {\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: 400;\n  font-size: 32px;\n  color: #333333;\n}\n\nion-card-content {\n  @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  color: #333333;\n}\n\nion-row {\n  width: 100%;\n  height: 20px;\n  text-align: center;\n}\n\nion-item {\n  --padding-start: 0px;\n  --inner-padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n  --background: none;\n  --border-style: \"none\";\n}\n\n#container {\n  text-align: center;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n.displayed {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #ffffff;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#row1 {\n  height: 5%;\n  padding-bottom: 5%;\n}\n\n#squareSlides {\n  width: 100hw;\n  padding-bottom: 5%;\n}\n\n#built_in_America {\n  scale: 1.1;\n}\n\n#slide_Version2 {\n  scale: 1.1;\n}\n\n#about_us_title {\n  width: 100%;\n  left: 50%;\n  float: right;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 1.3em;\n  letter-spacing: 0.3em;\n  text-transform: uppercase;\n  color: #F18C7F;\n  text-align: center;\n}\n\n#about_us_decor {\n  float: right;\n}\n\n#partners_row {\n  padding-top: 5%;\n  width: 100%;\n  height: 5%;\n  text-align: left;\n}\n\n#partners_text {\n  width: 100%;\n  left: 15%;\n  position: relative;\n  float: right;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: 700;\n  color: #F18C7F;\n  font-size: 1.2em;\n  letter-spacing: 0.2em;\n}\n\n#whos_helping_Row {\n  padding: 5%;\n  width: 100%;\n  height: 5%;\n  text-align: left;\n}\n\n#whos_helping_text {\n  width: 100%;\n  padding-top: 3%;\n  left: 10%;\n  position: relative;\n  float: right;\n  font-family: Righteous;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 2.3em;\n  line-height: 40px;\n  text-align: left;\n  /* Gray 1 */\n  color: #333333;\n}\n\n#partners_card {\n  top: 10%;\n  width: 100%;\n  height: 40vh;\n}\n\n#meet_row {\n  padding-top: 5%;\n  width: 100%;\n  text-align: right;\n}\n\n#meet_text {\n  width: 100%;\n  top: 30%;\n  right: 20%;\n  position: relative;\n  float: right;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: 700;\n  color: #F18C7F;\n  font-size: 1.5em;\n  letter-spacing: 0.2em;\n}\n\n#founders_row {\n  padding: 5%;\n  width: 100%;\n  text-align: right;\n}\n\n#founders_decor {\n  position: relative;\n  max-height: 7px;\n  width: 33%;\n  right: -1%;\n  top: 2em;\n  float: right;\n}\n\n#founders_text {\n  width: 100%;\n  padding-top: 7%;\n  left: 39%;\n  font-family: Righteous;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 32px;\n  line-height: 40px;\n  text-align: right;\n  /* Gray 1 */\n  color: #333333;\n}\n\n#founders_card {\n  top: 10%;\n  width: 100%;\n  height: 60vh;\n}\n\n#sophie_img {\n  scale: 1.5;\n  position: relative;\n  width: 100%;\n  border-radius: 100%;\n  border: 0.2em solid #FF6059;\n}\n\n#david_img {\n  scale: 1.5;\n  position: relative;\n  width: 100%;\n  border-radius: 100%;\n  border: 0.2em solid #FF6059;\n}\n\n#sopie_text {\n  position: relative;\n  width: 30%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 1.2em;\n  line-height: 1.5em;\n  /* or 200% */\n  text-align: center;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: #FF6059;\n}\n\n#david_text {\n  position: relative;\n  width: 40%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 1.2em;\n  line-height: 1.5em;\n  /* or 200% */\n  text-align: center;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  color: #FF564F;\n  padding-top: 100%;\n}\n\n#wavy_lines {\n  position: relative;\n  float: left;\n  left: -3%;\n}\n\n#famous_immigrants_title {\n  width: 50%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: 700;\n  color: #FF564F;\n  font-size: 1.2em;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n#in_history_title {\n  position: absolute;\n  width: 100%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: normal;\n  color: #FFFFFF;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: #333333;\n  font-size: 2em;\n  text-transform: uppercase;\n}\n\n#in_history2_title {\n  position: absolute;\n  width: 100%;\n  top: 10%;\n  left: 1%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: normal;\n  font-size: 2em;\n  line-height: 40px;\n  text-transform: uppercase;\n  color: #333333;\n}\n\n#famous_immigrants_description {\n  width: 90%;\n  padding-top: 10%;\n  padding-bottom: 10%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: 600;\n  font-style: italic;\n  color: #ffffff;\n  font-size: 12px;\n}\n\n#immigrant_title {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: 700;\n  color: #FF564F;\n  font-size: 4.6vmin;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n\n#immigrant_subtitle {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: 500;\n  color: #333333;\n  font-size: 3vmin;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  padding: 8px;\n}\n\n#immigrant_content {\n  @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  font-style: italic;\n  color: #333333;\n  font-size: 3vmin;\n}\n\n#alignCenter {\n  text-align: center;\n}\n\n#border5 {\n  border: 5px;\n}\n\n#width100 {\n  width: 100%;\n  height: 550px;\n}\n\n#immagrantSlideDeck {\n  height: 75%;\n  text-align: auto;\n  padding-bottom: 10%;\n}\n\n#height90vh {\n  height: 90vh;\n}\n\n#height75 {\n  height: 75px;\n}\n\n#height20 {\n  height: 20px;\n}\n\n#height50 {\n  height: 50px;\n}\n\n#famousImmigrantPicture {\n  width: 100vh;\n  bottom: 10%;\n  scale: 1.2;\n}\n/*# sourceMappingURL=data:application/json;base64,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UixpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQXRCRjs7QUF5QkE7RUFDVSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBdEJGOztBQXlCQTtFQUNVLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBdEJGOztBQXlCQTtFQUNVLCtFQUFBO0VBQ1IscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBdEJGOztBQXlCQTtFQUNFLGtCQUFBO0FBdEJGOztBQXlCQTtFQUNFLFdBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsWUFBQTtBQXRCRjs7QUF5QkE7RUFDRSxZQUFBO0FBdEJGOztBQXlCQTtFQUNFLFlBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsWUFBQTtBQXRCRjs7QUF5QkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUF0QkYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiBpb24tc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogI0E5QTlBOTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNGMThDN0Y7XG59XG5cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93OiBhdXRvO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn19XG5cbmlvbi10aXRsZSB7XG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI0YxOEM3RjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTtcbiAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG5pb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJvcmRlci1zdHlsZTogXCJub25lXCI7XG59XG5cblxuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cbi5kaXNwbGF5ZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICNmZmZmZmY7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNyb3cxe1xuICBoZWlnaHQ6IDUlO1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG5cbiNzcXVhcmVTbGlkZXMge1xuICB3aWR0aDoxMDBodztcbiAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuXG4jYnVpbHRfaW5fQW1lcmljYXtcbiAgc2NhbGU6MS4xO1xufVxuXG4jc2xpZGVfVmVyc2lvbjIge1xuICBzY2FsZToxLjE7XG59XG5cbiNhYm91dF91c190aXRsZXtcblxuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogNTAlO1xuICBmbG9hdDogcmlnaHQ7XG5cbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBsZXR0ZXItc3BhY2luZzogLjNlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNGMThDN0Y7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG4jYWJvdXRfdXNfZGVjb3J7XG4gIGZsb2F0OnJpZ2h0O1xufVxuXG4jcGFydG5lcnNfcm93e1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHdpZHRoOiAxMDAlOyBcbiAgaGVpZ2h0OjUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jcGFydG5lcnNfdGV4dHtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDE1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG5cbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjRjE4QzdGO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBsZXR0ZXItc3BhY2luZzogLjJlbTtcbn1cblxuI3dob3NfaGVscGluZ19Sb3d7XG4gIHBhZGRpbmc6IDUlOyBcbiAgd2lkdGg6IDEwMCU7IFxuICBoZWlnaHQ6NSU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbiN3aG9zX2hlbHBpbmdfdGV4dHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAzJTtcbiAgbGVmdDogMTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcblxuICBmb250LWZhbWlseTogUmlnaHRlb3VzO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMi4zZW07O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAvKiBHcmF5IDEgKi9cbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbiNwYXJ0bmVyc19jYXJke1xuICB0b3A6IDEwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDB2aDtcbn1cblxuI21lZXRfcm93e1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHdpZHRoOiAxMDAlOyBcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbiNtZWV0X3RleHR7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDMwJTtcbiAgcmlnaHQ6IDIwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG5cbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjRjE4QzdGO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBsZXR0ZXItc3BhY2luZzogLjJlbTtcbn1cblxuI2ZvdW5kZXJzX3Jvd3tcbiAgcGFkZGluZzogNSU7IFxuICB3aWR0aDogMTAwJTsgXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4jZm91bmRlcnNfZGVjb3J7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LWhlaWdodDogN3B4O1xuICB3aWR0aDozMyU7XG4gIHJpZ2h0OiAtMSU7XG4gIHRvcDogMmVtO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbiNmb3VuZGVyc190ZXh0e1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDclO1xuICBsZWZ0OiAzOSU7XG5cbiAgZm9udC1mYW1pbHk6IFJpZ2h0ZW91cztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAvKiBHcmF5IDEgKi9cbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbiNmb3VuZGVyc19jYXJke1xuICB0b3A6IDEwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjB2aDtcbn1cblxuI3NvcGhpZV9pbWd7XG4gIHNjYWxlOjEuNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcblxuICAvL2ZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDQwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiAuMmVtIHNvbGlkICNGRjYwNTk7XG59XG5cbiNkYXZpZF9pbWd7XG4gIHNjYWxlOjEuNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcblxuICAvL2ZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDQwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiAuMmVtIHNvbGlkICNGRjYwNTk7XG59XG5cbiNzb3BpZV90ZXh0e1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgd2lkdGg6IDMwJTtcblxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgLyogb3IgMjAwJSAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgY29sb3I6ICNGRjYwNTk7XG59XG5cbiNkYXZpZF90ZXh0e1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgd2lkdGg6IDQwJTtcblxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgLyogb3IgMjAwJSAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgY29sb3I6ICNGRjU2NEY7XG5cbiAgcGFkZGluZy10b3A6IDEwMCU7XG59XG5cbiN3YXZ5X2xpbmVze1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBsZWZ0Oi0zJTtcbn1cblxuI2ZhbW91c19pbW1pZ3JhbnRzX3RpdGxle1xuICB3aWR0aDogNTAlO1xuXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI0ZGNTY0RjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jaW5faGlzdG9yeV90aXRsZXtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHdpZHRoOjEwMCU7XG4gIFxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SaWdodGVvdXMmZGlzcGxheT1zd2FwJyk7XG4gIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMXB4O1xuICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiAjMzMzMzMzO1xuICBmb250LXNpemU6IDJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI2luX2hpc3RvcnkyX3RpdGxle1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgd2lkdGg6MTAwJTtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDElO1xuXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTtcbiAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbiNmYW1vdXNfaW1taWdyYW50c19kZXNjcmlwdGlvbntcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZy10b3A6MTAlO1xuICBwYWRkaW5nLWJvdHRvbToxMCU7XG5cbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuI2ltbWlncmFudF90aXRsZXtcbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjRkY1NjRGO1xuICBmb250LXNpemU6IDQuNnZtaW47XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbiNpbW1pZ3JhbnRfc3VidGl0bGV7XG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC1zaXplOiAzdm1pbjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4jaW1taWdyYW50X2NvbnRlbnR7XG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6aXRhbGljO1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC1zaXplOiAzdm1pbjtcbn1cblxuI2FsaWduQ2VudGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNib3JkZXI1e1xuICBib3JkZXI6IDVweDtcbn1cblxuI3dpZHRoMTAwe1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NTBweDtcbn1cblxuI2ltbWFncmFudFNsaWRlRGVja3tcbiAgaGVpZ2h0OiA3NSU7IFxuICB0ZXh0LWFsaWduOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xufVxuXG4jaGVpZ2h0OTB2aHtcbiAgaGVpZ2h0Ojkwdmg7XG59XG5cbiNoZWlnaHQ3NXtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuXG4jaGVpZ2h0MjB7XG4gIGhlaWdodDogMjBweDtcbn1cblxuI2hlaWdodDUwe1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbiNmYW1vdXNJbW1pZ3JhbnRQaWN0dXJle1xuICB3aWR0aDoxMDB2aDtcbiAgYm90dG9tOjEwJTtcbiAgc2NhbGU6IDEuMjtcbn1cbiJdfQ== */");

/***/ }),

/***/ 49764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content padding>\n  <ion-header>\n    <ion-toolbar>\n      <ion-title></ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <!-- List containes all home page items, making it easy to add components in the future -->\n  <ion-list>\n    <!-- Insert row to bring page content below the header --\n    <ion-item>\n      <ion-row id=\"row1\"></ion-row>\n    </ion-item>\n  -->\n\n    <!-- What's New Slide Deck -->\n    <ion-slides shape = \"square\" id=\"squareSlides\" [options]=\"{slidesPerView: 1, zoom: true, grabCursor: true}\" pager>\n      <ion-slide id = \"built_in_America\">\n        <ion-col>\n          <ion-card>\n            <img src=\"./assets/builtInAmerica.png\" />\n          </ion-card>\n        </ion-col>\n      </ion-slide>\n  \n      <ion-slide id = \"slide_Version2\">\n        <ion-col>\n          <ion-card>\n            <img src=\"./assets/immigrationStories.png\" />\n          </ion-card>\n        </ion-col>\n      </ion-slide>\n    </ion-slides>\n\n    <!-- About Us Section Title -->\n    <img  style=\"padding-top:10%\" id= \"about_us_decor\" src=\"./assets/yellowLine.png\" />\n    <ion-row>\n      <ion-text id = \"about_us_title\">\n        ABOUT US\n      </ion-text>\n    </ion-row>\n      \n\n    <!-- What we Do card-->\n    <ion-card id = \"alignCenter\">\n      <ion-card-header>\n        <ion-card-title>WHAT WE DO</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        International students are struggling with \n        all the recent uncertainty around policy \n        changes and the threat of deportation, \n        many don't know where to turn.\n      </ion-card-content>\n      <ion-card-content>\n        We are a non-profit organization that provides \n        a list of companies that hire foriegn nationals. \n        We offer qualifying students need-based financial \n        assistance, an online networking community in \n        addition to volunteering opportunities to gain \n        work experience.\n      </ion-card-content>\n    </ion-card>\n\n    <ion-item>\n      <ion-row id=\"height75\">\n        <ion-col>\n          <img id = \"wavy_lines\" src=\"./assets/wavyLines.png\" />\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-list>\n    <!-- Famous Immigrants Section: -->\n    <!-- Information transferred from the website @ cfgi.world -->\n    <ion-row style=\"padding-top:5%\">\n      <ion-col>\n        <img id=\"famousImmigrantPicture\" src=\"./assets/sunrise_shape.png\" />\n      </ion-col>\n    </ion-row>\n    \n    <ion-item>\n      <ion-row>\n        <ion-col>\n          <ion-text id = \"famous_immigrants_title\">\n            Famous Immigrants\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item>\n      <ion-row id=\"height50\">\n        <div style=\"text-align:center\">\n          <ion-text id = \"in_history2_title\">\n            IN U.S. HISTORY\n          </ion-text>\n          <ion-text id = \"in_history_title\">\n            IN U.S. HISTORY\n          </ion-text>\n        </div>\n      </ion-row>\n    </ion-item>\n    <ion-row style=\"padding-top: 5%\">\n      <ion-col>\n        <div>\n          <ion-text id = \"famous_immigrants_description\">\n            In the past, we have always drawn strength from the brightest and most dedicated people coming here and reaching for the American dream. Many of the world's most productive scientists and engineers are foreign-born, so the United States is always at the forefront of global innovation.  Here are some you may already know:\n          </ion-text>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n\n\n  <ion-row style=\"padding-top: 25%\" id=\"immagrantSlideDeck\">\n    <swiper [config]=\"swiperConfig2\" id=\"height90vh\">\n      <ng-template *ngFor=\"let immigrant of immigrants\" swiperSlide id=\"border5\">\n        <ion-col >\n          <ion-card id=\"width100\">\n            <img src={{immigrant.photo}} />\n            <ion-card-header>\n              <ion-card-title id = \"immigrant_title\">{{immigrant.name}}</ion-card-title>\n              <ion-card-subtitle id = \"immigrant_subtitle\">{{immigrant.country}}</ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content id = \"immigrant_content\">\n              {{immigrant.about}}\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ng-template>\n      <div class=\"swiper-pagination\"></div>\n    </swiper>\n  </ion-row>\n      \n  <!-- Whos helping title-->\n  <ion-row id=\"partners_row\" style=\"padding-top: 30%;\">\n    <ion-text id= \"partners_text\">PARTNERS</ion-text>\n  </ion-row>\n  <ion-row id=\"whos_helping_row\">\n    <ion-text id= \"whos_helping_text\">Who's helping</ion-text>\n  </ion-row>\n  \n  <ion-item>\n    <ion-card id=\"partners_card\">\n      <ion-card-content>\n        Take a look at the companies that are supporting diversity in recruitment. They believe everyone should have an equal opportunity to succeed.<br><br>Does your company want to be on this list?\n      </ion-card-content>\n      <swiper [config]=\"swiperConfig\" [loop]=\"true\">\n        <ng-template *ngFor=\"let company of companies\" swiperSlide>\n          <div class=\"slide-container\"><img src=\"{{company.icon}}\"></div>\n        </ng-template>\n      </swiper>\n    </ion-card>\n  </ion-item>\n\n  <!-- Meet the founders title-->\n  <ion-row id=\"meet_row\">\n    <ion-text id= \"meet_text\">MEET</ion-text>\n  </ion-row>\n  <img id= \"founders_decor\" src=\"./assets/yellowLine.png\" />\n  <ion-row id=\"founders_row\">\n    <ion-text id= \"founders_text\">The Founders</ion-text>\n  </ion-row>\n\n  <!-- Founders card -->\n  <ion-item>\n    <ion-card id=\"founders_card\">\n      <ion-row style=\"height:100%\">\n        <ion-col style=\"height:100%; padding-top:5%; padding-left:5%\">\n          <ion-card-content style=\"padding-bottom:30%\">\n            <img (click)=\"davidModal()\" id=\"david_img\" src=\"./assets/David.png\"/>\n            <p *ngIf=\"modalDataResponseDavid\">{{modalDataResponseDavid}}</p>\n          </ion-card-content>\n          <ion-text id=\"david_text\">\n            David<br>Vargas\n          </ion-text>\n        </ion-col>\n        <ion-col style=\"height:100%; padding-top:40%; padding-right:5%\">\n          <ion-card-content style=\"padding-bottom:30%\">\n            <img (click)=\"sophieModal()\" id=\"sophie_img\" src=\"./assets/Sophie.png\"/>\n            <p *ngIf=\"modalDataResponseSophie\">{{modalDataResponseSophie}}</p>\n          </ion-card-content>\n          <ion-text id=\"sopie_text\">\n            Sophie<br>Alcorn\n          </ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-item>\n  </ion-list>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map