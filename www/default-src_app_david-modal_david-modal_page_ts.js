(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["default-src_app_david-modal_david-modal_page_ts"],{

/***/ 37685:
/*!*************************************************!*\
  !*** ./src/app/david-modal/david-modal.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DavidModalPage": () => (/* binding */ DavidModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_david_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./david-modal.page.html */ 78253);
/* harmony import */ var _david_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./david-modal.page.scss */ 79662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);





let DavidModalPage = class DavidModalPage {
    constructor(modalCtr) {
        this.modalCtr = modalCtr;
    }
    ngOnInit() { }
    close() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const closeModal = "Modal Closed";
            yield this.modalCtr.dismiss(closeModal);
        });
    }
};
DavidModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
DavidModalPage.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
DavidModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-david-modal',
        template: _raw_loader_david_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_david_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DavidModalPage);



/***/ }),

/***/ 79662:
/*!***************************************************!*\
  !*** ./src/app/david-modal/david-modal.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#back_button {\n  right: 3%;\n  position: absolute;\n  top: 2%;\n  align-items: right;\n  padding: 0%;\n  margin: 0%;\n  color: #3b3b3b;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 4vmin;\n  line-height: 4vmin;\n}\n\nion-list.list-ios {\n  margin-bottom: 0;\n}\n\n#result_card {\n  left: 1%;\n  width: 90%;\n  min-height: 300px;\n}\n\n#left {\n  position: relative;\n  width: 40%;\n  vertical-align: top;\n}\n\n#lawyer_avi {\n  position: relative;\n  width: 100%;\n}\n\n#right {\n  position: relative;\n  width: 40%;\n  left: 5%;\n  vertical-align: top;\n}\n\n#lawyer_title {\n  position: relative;\n  width: 100%;\n  display: block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: normal;\n  font-size: 7vmin;\n  line-height: 8vmin;\n  color: #3F3356;\n}\n\n#about {\n  display: block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 2.5vmin;\n  line-height: 3vmin;\n}\n\n#link {\n  width: 100%;\n  color: #1f274d;\n  border: 1px solid #1f274d;\n  border-radius: 10px;\n}\n\n#icon {\n  width: 50px;\n}\n\n#location {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 4vmin;\n  line-height: 4vmin;\n}\n\n#languages {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 3vmin;\n  line-height: 3vmin;\n}\n\n#contact {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 3vmin;\n  line-height: 3vmin;\n  width: 100%;\n  vertical-align: top;\n  font-weight: bold;\n}\n\n#hours {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 2vmin;\n  width: 100%;\n}\n\n#schedule_button {\n  width: 100%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 4vmin;\n  line-height: 4vmin;\n  --background: #1f6b30 ;\n}\n\n#sophie_info {\n  width: 100%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-size: 3vmin;\n  line-height: 0.2vmin;\n}\n\nion-content {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdmlkLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNRLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFSTtFQUNJLGdCQUFBO0FBQ1I7O0FBRUE7RUFDSSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBRVEsOEVBQUE7RUFDUixnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBRVEsb0ZBQUE7RUFDUixpQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxXQUFBO0FBSEo7O0FBTUE7RUFDWSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUE7RUFDWSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUE7RUFDWSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNQTtFQUNZLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUhKOztBQU1BO0VBQ0ksV0FBQTtFQUNRLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUhKOztBQU1BO0VBQ0ksV0FBQTtFQUNRLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBSEo7O0FBTUE7RUFDSSx5QkFBQTtBQUhKIiwiZmlsZSI6ImRhdmlkLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrX2J1dHRvbiB7XG4gICAgcmlnaHQ6IDMlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MiU7XG4gICAgYWxpZ24taXRlbXM6IHJpZ2h0O1xuICAgIHBhZGRpbmc6MCU7XG4gICAgbWFyZ2luOiAwJTtcbiAgICBjb2xvcjogcmdiKDU5LCA1OSwgNTkpO1xuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA0dm1pbjtcbiAgICBsaW5lLWhlaWdodDogNHZtaW47XG59XG5pb24tbGlzdCB7ICBcbiAgICAmLmxpc3QtaW9zIHsgIFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyAgXG4gICAgfSAgXG59ICBcbiNyZXN1bHRfY2FyZCB7XG4gICAgbGVmdDogMSU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbn1cblxuI2xlZnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbiNsYXd5ZXJfYXZpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNyaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbGVmdDogNSU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBcbn1cbiNsYXd5ZXJfdGl0bGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SaWdodGVvdXMmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdSaWdodGVvdXMnLCBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDd2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiA4dm1pbjtcblxuICAgIGNvbG9yOiAjM0YzMzU2O1xufVxuXG4jYWJvdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAyLjV2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiAzdm1pbjtcbn1cblxuI2xpbmsge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiMxZjI3NGQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFmMjc0ZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jaWNvbiB7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbiNsb2NhdGlvbiB7XG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogNHZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDR2bWluO1xufVxuXG4jbGFuZ3VhZ2VzIHtcbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAzdm1pbjtcbiAgICBsaW5lLWhlaWdodDogM3ZtaW47XG59XG5cbiNjb250YWN0IHtcbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAzdm1pbjtcbiAgICBsaW5lLWhlaWdodDogM3ZtaW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2hvdXJzIHtcbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAydm1pbjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI3NjaGVkdWxlX2J1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDR2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiA0dm1pbjtcbiAgICAtLWJhY2tncm91bmQ6ICMxZjZiMzAgO1xufVxuXG4jc29waGllX2luZm8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAzdm1pbjtcbiAgICBsaW5lLWhlaWdodDogLjJ2bWluO1xufVxuXG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSJdfQ== */");

/***/ }),

/***/ 78253:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/david-modal/david-modal.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\n  <ion-card id=\"result_card\"> \n    <ion-card-header>\n      <ion-button fill=clear (click)=\"close()\" id=\"back_button\">\n        x\n      </ion-button>\n    </ion-card-header>\n    <ion-card-content>\n      <table>\n        <!-- Top row of Table: Lawyer image on left and name, location and language on right -->\n        <tr>\n          <td id=\"left\"><img id=\"lawyer_avi\" src= \"./assets/David.png\"></td>\n          <td id=\"right\"><ion-text id=\"lawyer_title\">David</ion-text>\n            <ion-text id=\"lawyer_title\">Astoria</ion-text>\n            <ion-text id=\"location\"> Co-Founder <br> </ion-text>\n            <ion-text id=\"languages\"> CFGI </ion-text>\n          </td>\n        </tr>\n      </table>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-text id=\"sophie_info\"> David Astoria was born in Costa Rica and moved to Germany at the age of seven. He came to the U.S. as an international student. David attended Rollins College and University of Utah, majoring in International Trade and Commerce and minoring in Computer Science. David’s fascination with artificial intelligence and software led him to meeting his co-founders at Grabb-it. They participated in YCombinator’s Summer ‘18 batch and moved to Silicon Valley. David is now the founder of PRANOS.ai, the proprietary broadcast system converts your car windows into transparent HD displays. Pranos’ GRID is an ecosystem where drivers can opt in to earn as they drive through the ad revenue generated on their displays. Pranos aims to create many jobs through the growth of the gig economy.</ion-text>\n    </ion-card-content>\n  </ion-card>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_david-modal_david-modal_page_ts.js.map