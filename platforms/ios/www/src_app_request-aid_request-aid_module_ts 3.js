(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["src_app_request-aid_request-aid_module_ts"],{

/***/ 69373:
/*!***********************************************************!*\
  !*** ./src/app/request-aid/request-aid-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestAidPageRoutingModule": () => (/* binding */ RequestAidPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _request_aid_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-aid.page */ 69545);




const routes = [
    {
        path: '',
        component: _request_aid_page__WEBPACK_IMPORTED_MODULE_0__.RequestAidPage
    }
];
let RequestAidPageRoutingModule = class RequestAidPageRoutingModule {
};
RequestAidPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RequestAidPageRoutingModule);



/***/ }),

/***/ 47640:
/*!***************************************************!*\
  !*** ./src/app/request-aid/request-aid.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestAidPageModule": () => (/* binding */ RequestAidPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _request_aid_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-aid-routing.module */ 69373);
/* harmony import */ var _request_aid_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-aid.page */ 69545);







let RequestAidPageModule = class RequestAidPageModule {
};
RequestAidPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _request_aid_routing_module__WEBPACK_IMPORTED_MODULE_0__.RequestAidPageRoutingModule
        ],
        declarations: [_request_aid_page__WEBPACK_IMPORTED_MODULE_1__.RequestAidPage]
    })
], RequestAidPageModule);



/***/ }),

/***/ 69545:
/*!*************************************************!*\
  !*** ./src/app/request-aid/request-aid.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestAidPage": () => (/* binding */ RequestAidPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_request_aid_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./request-aid.page.html */ 57900);
/* harmony import */ var _request_aid_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-aid.page.scss */ 72847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);





let RequestAidPage = class RequestAidPage {
    constructor(atrCtrl) {
        this.atrCtrl = atrCtrl;
    }
    showAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.atrCtrl.create({
                cssClass: 'left-justify',
                header: 'Terms and Conditions',
                message: 'This document outlines the Terms and Conditions \
      for scholarships and awards administered by  Community for \
      Global Innovation (CFGI). All scholarships and awards will \
      be referred to as ‘scholarships’ herein. You must read these \
      Terms and Conditions in full. In accepting a scholarship from \
      CFGI, it is understood that you have read and agreed to comply \
      with these Terms and Conditions. Please note, if you are under \
      18 years of age, your parent or guardian must read and consent \
      to these terms and conditions on your behalf.\
      <br><br><br>\
      Accepting your scholarship<br><br>\
      Successful scholarship applicants will receive an email \
      detailing the scholarship benefits and payment timing. \
      If you do not wish to accept a scholarship that you have \
      been offered, you should advise us immediately in writing.\
      <br><br>\
      Your scholarships details may be passed on to your school, \
      donors or partner organization (where applicable). If you \
      do not wish for your details to be passed on, you must \
      advise CFGI in writing by email to admin@cfgi.world.\
      <br><br>\
      CFGI reserves the right to change the title of the \
      scholarship awarded depending on funding contributions \
      rom external parties. If the funding level or eligibility \
      changes, CFGI will advise the recipient before changing \
      any details but name changes can occur without notice.\
      <br><br><br>\
      How your Scholarship is paid<br><br>\
      The method of payment will be detailed in your email of \
      offer. In most cases, scholarship payments for school \
      students are made directly via CFGI or students will \
      receive payment directly.\
      <br><br>\
      At the end of each academic year for the duration of \
      your scholarship you may be asked to provide a report \
      detailing how the scholarship funds have been spent. If \
      required, it is the responsibility of the scholarship \
      recipient to provide this report to CFGI by the specified \
      time. Failure to return reports by the specified time may \
      result in future payments being withheld.\
      <br><br><br>\
      Eligibility Requirements<br><br>\
      All scholarships are awarded on the basis that you will \
      maintain an enrolled status in a higher education as an \
      international student. Your scholarship may be terminated \
      if your enrollment status changes.\
      <br><br>\
      To retain your scholarship you must also:<br>\
      - at a minimum, maintain your attendance and academic \
      performance as at the time of your application, and \
      immediately notify CFGI of any extenuating circumstances \
      that may prevent you doing so;<br>\
      - adhere to the academic and administrative policies of \
      the school and/or education institution at which you are \
      enrolled;<br>\
      - maintain your immigration status and advise CFGI within \
      fourteen days if you change your residency status;<br>\
      - meet any additional criteria outlines in your letter of offer;<br>\
      - provide confirmation of your circumstances during the term of \
      the scholarship if requested by CFGI.\
      <br><br><br>\
      Scholarship termination<br><br>\
      CFGI may terminate your scholarship if you have:<br>\
      - discontinued from your course of study or have \
      inactive enrolment;<br>\
      - failed to meet the eligibility requirements of your \
      scholarship;<br>\
      - failed to meet the scholarships terms and conditions;<br>\
      - failed to maintain satisfactory academic progress;<br>\
      - been suspended or excluded from school or your course of study;<br>\
      - been made an incorrect scholarship offer as determined by CFGI \
      at its sole discretion;<br>\
      - have provided incorrect, false or misleading information or \
      withheld relevant information on your scholarship application or \
      after receiving a scholarship offer.\
      <br><br>\
      If your scholarship is terminated, you will not receive any \
      further payments. You may be required to repay some or all of \
      your scholarship.\
      <br><br><br>\
      Repayment of your scholarship<br><br>\
      You will need to repay the scholarship if:<br>\
      - the payment is made to you in error or you have been overpaid;<br>\
      - your scholarship is terminated;<br>\
      - you do not meet the conditions of the scholarship or are deemed to \
      be ineligible for the scholarship;<br>\
      - you have been made a scholarship offer in error.<br>\
      <br><br>\
      In the event that you are required to repay your scholarship, you \
      must do so within 4 weeks of receiving the notification.\
      <br><br><br>\
      How does my scholarship affect my payments?<br><br>\
      Community for Global Innovation cannot provide you with advice on \
      taxation. The information provided here is of a general nature only \
      and does not take into account your individual circumstances. Please \
      seek the guidance of a tax representative. Community for Global \
      Innovation is not liable for the payment of any tax or any other \
      obligations you may incur as a result of accepting a scholarship from us.\
      <br><br><br>\
      Publicity and Promotion<br><br>\
      If you are offered a scholarship, your details including name, school, \
      photograph, video and scholarship awarded may be passed on to media and \
      used by CFGI and/or partner organizations for promotional purposes, \
      including but not limited to CFGI’s website, social media channels, \
      print and electronic media. If you do not wish for your details to be \
      passed on to the media or used for promotional purposes, you must notify \
      CFGI in writing.\
      <br><br>\
      If you attend events held by CFGI, photos and videos of you at the event \
      (along with your name, school and scholarship), may be used for \
      promotional purposes by CFGI and/or our partner organizations, including \
      but not limited to CFGI website, social media channels, print and \
      electronic media.\
      <br><br>\
      It is agreed that the use of these photographs and videos shall in no \
      way be used in any other forum other than official CFGI business. The \
      scholarship recipient also waives the right to inspect or approve the \
      finished product, the advertising copy or other matter that may be used \
      in connection therewith or the use to which it may be applied. If you do \
      not wish for photographs and videos of you to be used in this way, you \
      must notify CFGI in writing.\
      <br><br><br>\
      Media Consent<br><br>\
      Consent is sought for use of photographic/video/audio recording made of \
      the student during CFGI events. Permission is being requested to publish, \
      reproduce and communicate images and/or recording of the student on:\
      <br><br>\
      This consent is for an indefinite period of time. Consent is also sought \
      to publish the name and school of the student. We may also provide the \
      media with details of your scholarship either before or after events. \
      With reference to the above, the student grants permission to use, \
      reproduce, distribute, communicate to the public, publish, publicly \
      display, modify, translate, adapt, upload, download in any form or manner \
      and/or permission to incorporate this material into other materials or works \
      in any format or medium for any non-commercial purpose and the right to \
      sublicense those rights for noncommercial purpose. The student can withdraw \
      their consent at any time but must do so in writing or by email to admin@cfgi.org.\
      <br><br><br>\
      Liability Waiver<br><br>\
      In accepting a scholarship from CFGI you agree to WAIVE, RELEASE, AND DISCHARGE \
      Community of Global Innovation, its officers, associates and partner organisations \
      from any and all liability, including but not limited to, any liability arising \
      from the negligence or fault of the entities or persons released, for death, \
      disability, personal injury, property damage, property theft, or actions of any kind \
      which may occur to you during or after the scholarship period, including during or \
      after any travel undertaken as part of the scholarship.\
      <br><br><br>\
      Keeping your contact details up to date<br><br>\
      All correspondence during the application process will be sent to the applicant\'s \
      residential address or primary email address submitted in the scholarship application form.\
      <br><br>\
      It is the responsibility of the scholarship recipient to inform CFGI of any changes to their \
      email, postal or residential address. It is also the responsibility of the scholarship \
      recipient to inform CFGI if they change their place of study, if you stop being an \
      international student, or if you become a U.S. citizen, during the course of their scholarship.\
      <br><br>\
      Please note, if you are under 18 years of age, it is understood that your parent or guardian \
      has read and agreed to the Scholarship Terms and Conditions on your behalf.\
      <br><br>\
      CFGI reserves the right to amend these Terms and Conditions for commencing and continuing \
      scholarship holders.\
      <br><br>\
      Any questions about these Terms and Conditions should be directed to admin@cfgi.world.\
      ',
                buttons: ['AGREE']
            });
            yield alert.present();
        });
    }
    ngOnInit() {
    }
};
RequestAidPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
RequestAidPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-request-aid',
        template: _raw_loader_request_aid_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_request_aid_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RequestAidPage);



/***/ }),

/***/ 72847:
/*!***************************************************!*\
  !*** ./src/app/request-aid/request-aid.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#apply_text {\n  position: absolute;\n  width: 84%;\n  height: 6%;\n  left: 8%;\n  top: 20%;\n  bottom: 74%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 8vmin;\n  line-height: 8vmin;\n  color: #FF6E00;\n}\n\n#emergency_text {\n  position: absolute;\n  width: 84%;\n  height: 13%;\n  left: 8%;\n  right: 8%;\n  top: 26%;\n  bottom: 67%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: normal;\n  font-size: 8vmin;\n  line-height: 8vmin;\n  color: #3F3356;\n}\n\n#description_text {\n  position: absolute;\n  width: 84%;\n  height: 26%;\n  left: 8%;\n  right: 8%;\n  top: 39%;\n  bottom: 37%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 4.5vmin;\n  line-height: 5.5vmin;\n  color: #000000;\n}\n\n#terms_text {\n  position: absolute;\n  width: 84%;\n  height: 10%;\n  left: 8%;\n  right: 8%;\n  top: 65%;\n  bottom: 25%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");\n  font-family: \"Montserrat\", sans-serif;\n  font-style: italic;\n  font-weight: 300;\n  font-size: 4vmin;\n  line-height: 4.5vmin;\n  text-align: left;\n  color: #000000;\n}\n\n#aid_button {\n  position: absolute;\n  left: 22%;\n  right: 22%;\n  width: 56%;\n  height: 7%;\n  top: 75%;\n  bottom: 18%;\n  background: #4C67F6;\n  border-radius: 6px;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 4vmin;\n  line-height: 5vmin;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n#terms_button {\n  position: absolute;\n  height: 8%;\n  width: 63%;\n  left: 19%;\n  right: 18%;\n  top: 85%;\n  bottom: 7%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 4.8vmin;\n  text-align: center;\n  border-bottom: 2px solid #4C67F6;\n  color: #4C67F6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QtYWlkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFFUSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFFUSw4RUFBQTtFQUNSLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsY0FBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFFUSwrRUFBQTtFQUNSLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFFQSxjQUFBO0FBTEo7O0FBUUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUVRLCtFQUFBO0VBQ1IscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtBQVBKOztBQVVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBRVEsb0ZBQUE7RUFDUixpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFUSjs7QUFZQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBRVEsb0ZBQUE7RUFDUixpQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQVZKIiwiZmlsZSI6InJlcXVlc3QtYWlkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhcHBseV90ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDg0JTtcbiAgICBoZWlnaHQ6IDYlO1xuICAgIGxlZnQ6IDglO1xuICAgIHRvcDogMjAlO1xuICAgIGJvdHRvbTogNzQlO1xuXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDh2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiA4dm1pbjtcblxuICAgIGNvbG9yOiAjRkY2RTAwO1xufVxuXG4jZW1lcmdlbmN5X3RleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODQlO1xuICAgIGhlaWdodDogMTMlO1xuICAgIGxlZnQ6IDglO1xuICAgIHJpZ2h0OiA4JTtcbiAgICB0b3A6IDI2JTtcbiAgICBib3R0b206NjclO1xuXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmlnaHRlb3VzJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiA4dm1pbjtcbiAgICBsaW5lLWhlaWdodDogOHZtaW47XG5cbiAgICBjb2xvcjogIzNGMzM1Njtcbn1cblxuI2Rlc2NyaXB0aW9uX3RleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODQlO1xuICAgIGhlaWdodDogMjYlO1xuICAgIGxlZnQ6IDglO1xuICAgIHJpZ2h0OiA4JTtcbiAgICB0b3A6IDM5JTtcbiAgICBib3R0b206IDM3JTtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDQuNXZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDUuNXZtaW47XG5cbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuI3Rlcm1zX3RleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODQlO1xuICAgIGhlaWdodDogMTAlO1xuICAgIGxlZnQ6IDglO1xuICAgIHJpZ2h0OiA4JTtcbiAgICB0b3A6IDY1JTtcbiAgICBib3R0b206IDI1JTtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDR2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiA0LjV2bWluO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuI2FpZF9idXR0b257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDIyJTtcbiAgICByaWdodDogMjIlO1xuICAgIHdpZHRoOiA1NiU7XG4gICAgaGVpZ2h0OiA3JTtcbiAgICB0b3A6IDc1JTtcbiAgICBib3R0b206IDE4JTtcblxuICAgIGJhY2tncm91bmQ6ICM0QzY3RjY7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDR2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiA1dm1pbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI3Rlcm1zX2J1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogOCU7XG4gICAgd2lkdGg6IDYzJTtcbiAgICBsZWZ0OiAxOSU7XG4gICAgcmlnaHQ6IDE4JTtcbiAgICB0b3A6IDg1JTtcbiAgICBib3R0b206IDclO1xuXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQuOHZtaW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206ICAycHggc29saWQgIzRDNjdGNjtcbiAgICBjb2xvcjogIzRDNjdGNjtcbn0iXX0= */");

/***/ }),

/***/ 57900:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/request-aid/request-aid.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content style=\"overflow:hidden\">\n  <ion-row>\n    <ion-text id=\"apply_text\">\n      APPLY\n    </ion-text>\n  </ion-row>\n  <ion-row>\n    <ion-text id=\"emergency_text\">\n      Emergency <br> Financial Assistance\n    </ion-text>\n  </ion-row>\n  <ion-row>\n    <ion-text id=\"description_text\">\n      For any student in need of financial assistance for\n      amenities such as transportation fees, food, and \n      emergency housing, we have an application  for \n      financial assistance thanks to the generosity of our donors*\n    </ion-text>\n  </ion-row>\n  <ion-row>\n    <ion-text id=\"terms_text\">\n      *Terms and conditions apply\n    </ion-text>\n  </ion-row>\n  <ion-row>\n    <ion-button [routerLink]=\"['/apply-aid']\" id=\"aid_button\">\n      APPLY NOW\n    </ion-button>\n  </ion-row>\n  <ion-row>\n    <!-- https://ionicframework.com/docs/v3/api/components/alert/AlertController/ -->\n    <ion-button (click)=\"showAlert()\" fill=\"clear\" id=\"terms_button\">\n      <ion-text>\n        TERMS AND CONDITIONS\n      </ion-text>\n    </ion-button>\n  </ion-row>\n\n  <!--\n  <ion-card>\n    <ion-card-title>\n      APPLY\n    </ion-card-title>\n    <ion-card-subtitle>\n      EMERGENCY FINANCIAL ASSISTANCE\n    </ion-card-subtitle>\n    <ion-card-content>\n      For any student in need of financial assistance for\n      amenities such as transportation fees, food, and \n      emergency housing, we have an application  for \n      financial assistance thanks to the generosity of our donors*\n    </ion-card-content>\n    <ion-card-content>\n      *Terms and conditions apply\n    </ion-card-content>\n  </ion-card>\n  <ion-row>\n    <ion-button>\n      APPLY NOW\n    </ion-button>\n  </ion-row>\n  <ion-row>\n    <ion-button>\n      TERMS AND CONDITIONS\n    </ion-button>\n  </ion-row>\n</ion-content>\n\n-->");

/***/ })

}]);
//# sourceMappingURL=src_app_request-aid_request-aid_module_ts.js.map