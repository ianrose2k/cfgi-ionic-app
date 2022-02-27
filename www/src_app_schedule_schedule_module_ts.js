(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["src_app_schedule_schedule_module_ts"],{

/***/ 53760:
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InAppBrowserObject": () => (/* binding */ InAppBrowserObject),
/* harmony export */   "InAppBrowser": () => (/* binding */ InAppBrowser)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 60399);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 69165);





var InAppBrowserObject = /** @class */ (function () {
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param {string} url     The URL to load.
     * @param {string} [target="self"]  The target in which to load the URL, an optional parameter that defaults to _self.
     *                 _self: Opens in the WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
     *                 _blank: Opens in the InAppBrowser.
     *                 _system: Opens in the system's web browser.
     * @param {string | InAppBrowserOptions} [options] Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    function InAppBrowserObject(url, target, options) {
        try {
            if (options && typeof options !== 'string') {
                options = Object.keys(options)
                    .map(function (key) { return key + "=" + options[key]; })
                    .join(',');
            }
            this._objectInstance = cordova.InAppBrowser.open(url, target, options);
        }
        catch (e) {
            if (typeof window !== 'undefined') {
                window.open(url, target);
            }
            console.warn('Native: InAppBrowser is not installed or you are running on a browser. Falling back to window.open.');
        }
    }
    InAppBrowserObject.prototype._loadAfterBeforeload = function (strUrl) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "_loadAfterBeforeload", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.show = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "show", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.close = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "close", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.hide = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "hide", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.executeScript = function (script) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "executeScript", {}, arguments); };
    InAppBrowserObject.prototype.insertCSS = function (css) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "insertCSS", {}, arguments); };
    InAppBrowserObject.prototype.on = function (event) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
                    _this._objectInstance.addEventListener(event, observer.next.bind(observer));
                    return function () { return _this._objectInstance.removeEventListener(event, observer.next.bind(observer)); };
                });
            }
        })();
    };
    InAppBrowserObject.prototype.on = function (event) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
                    _this._objectInstance.addEventListener(event, observer.next.bind(observer));
                    return function () { return _this._objectInstance.removeEventListener(event, observer.next.bind(observer)); };
                });
            }
        })();
    };
    return InAppBrowserObject;
}());

var InAppBrowser = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(InAppBrowser, _super);
    function InAppBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param  url {string}     The URL to load.
     * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     * @returns {InAppBrowserObject}
     */
    InAppBrowser.prototype.create = function (url, target, options) {
        return new InAppBrowserObject(url, target, options);
    };
    InAppBrowser.pluginName = "InAppBrowser";
    InAppBrowser.plugin = "cordova-plugin-inappbrowser";
    InAppBrowser.pluginRef = "cordova.InAppBrowser";
    InAppBrowser.repo = "https://github.com/apache/cordova-plugin-inappbrowser";
    InAppBrowser.platforms = ["AmazonFire OS", "Android", "Browser", "iOS", "macOS", "Windows"];
InAppBrowser.ɵfac = /*@__PURE__*/ function () { var ɵInAppBrowser_BaseFactory; return function InAppBrowser_Factory(t) { return (ɵInAppBrowser_BaseFactory || (ɵInAppBrowser_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](InAppBrowser)))(t || InAppBrowser); }; }();
InAppBrowser.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: InAppBrowser, factory: function (t) { return InAppBrowser.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](InAppBrowser, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable
    }], null, null); })();
    return InAppBrowser;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvaW4tYXBwLWJyb3dzZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sNERBQTZELE1BQU0sb0JBQW9CLENBQUM7QUFDL0YsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7QUFDNUM7QUFDcUQsSUFnSm5EO0FBQ0Y7QUFDRTtBQUNFO0FBQ0U7QUFDRTtBQUNFO0FBQ0U7QUFDRTtBQUNFO0FBRUosT0FEUDtBQUNMLElBQUUsNEJBQVksR0FBVyxFQUFFLE1BQWUsRUFBRSxPQUFzQztBQUNsRixRQUFJLElBQUk7QUFDUixZQUFNLElBQUksT0FBTyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtBQUNsRCxnQkFBUSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDdEMscUJBQVcsR0FBRyxDQUFDLFVBQUMsR0FBVyxJQUFLLE9BQUcsR0FBRyxTQUFLLE9BQStCLENBQUMsR0FBRyxDQUFHLEVBQWpELENBQWlELENBQUM7QUFDbEYscUJBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLGFBQU87QUFDUCxZQUNNLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM3RSxTQUFLO0FBQUMsUUFBQSxPQUFPLENBQUMsRUFBRTtBQUNoQixZQUFNLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO0FBQ3pDLGdCQUFRLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLGFBQU87QUFDUCxZQUFNLE9BQU8sQ0FBQyxJQUFJLENBQ1YscUdBQXFHLENBQ3RHLENBQUM7QUFDUixTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFNRSxpREFBb0IsYUFBQyxNQUFjO0FBR21DLElBSXRFLGlDQUFJO0FBS21CLElBQ3ZCLGtDQUFLO0FBRzhELElBSW5FLGlDQUFJO0FBSUcsSUFJUCwwQ0FBYSxhQUFDLE1BQXdDO0FBSzVCLElBSzFCLHNDQUFTLGFBQUMsR0FBcUM7QUFLekIsSUFLdEIsK0JBQUUsYUFBQyxLQUE0QjtBQUFJO0FBQTBCO0FBQ3RDLHNEQUR5QztBQUNsRSxnQkFBSSxPQUFPLElBQUksVUFBVSxDQUFvQixVQUFDLFFBQXFDO0FBQUksb0JBQ2pGLEtBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDakYsb0JBQU0sT0FBTyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBN0UsQ0FBNkUsQ0FBQztBQUNqRyxnQkFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLGFBQUc7QUFDSDtBQUVPO0FBQU8sSUFLWiwrQkFBRSxhQUFDLEtBQWE7QUFBSTtBQUEwQjtBQUN2QixzREFEMEI7QUFDbkQsZ0JBQUksT0FBTyxJQUFJLFVBQVUsQ0FBb0IsVUFBQyxRQUFxQztBQUFJLG9CQUNqRixLQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ2pGLG9CQUFNLE9BQU8sY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQTdFLENBQTZFLENBQUM7QUFDakcsZ0JBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxhQUFHO0FBQ0g7QUFHTztBQUFPLDZCQTdQZDtBQUFFO0FBQU07QUFBK0I7QUFDVSxJQW1TZixnQ0FBaUI7QUFBQztBQUU5QjtBQUF5RTtBQUFNLElBRG5HO0FBQ0Y7QUFDRTtBQUNFO0FBQ0U7QUFDRTtBQUNFO0FBQ0U7QUFFSixPQURIO0FBQ0wsSUFBRSw2QkFBTSxHQUFOLFVBQU8sR0FBVyxFQUFFLE1BQWUsRUFBRSxPQUFzQztBQUFJLFFBQzdFLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3hELElBQUUsQ0FBQztBQUNGO0FBQzRDO0FBQXlEO0FBQXFEO0FBQWlGO2dEQWYzTyxVQUFVOzs7OzBCQUNMO0FBQUMsdUJBcFNQO0FBQUUsRUFvU2dDLGlCQUFpQjtBQUNsRCxTQURZLFlBQVk7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VDaGVjaywgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIGNvbnN0IGNvcmRvdmE6IENvcmRvdmEgJiB7IEluQXBwQnJvd3NlcjogYW55IH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5BcHBCcm93c2VyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gYWxsb3cgaW4tbGluZSBIVE1MNSBtZWRpYSBwbGF5YmFjaywgZGlzcGxheWluZyB3aXRoaW4gdGhlIGJyb3dzZXIgd2luZG93IHJhdGhlciB0aGFuIGEgZGV2aWNlLXNwZWNpZmljIHBsYXliYWNrIGludGVyZmFjZS5cbiAgICogVGhlIEhUTUwncyB2aWRlbyBlbGVtZW50IG11c3QgYWxzbyBpbmNsdWRlIHRoZSB3ZWJraXQtcGxheXNpbmxpbmUgYXR0cmlidXRlIChkZWZhdWx0cyB0byBubylcbiAgICovXG4gIGFsbG93SW5saW5lTWVkaWFQbGF5YmFjaz86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIHNldCB0byBlbmFibGUgdGhlIGJlZm9yZWxvYWQgZXZlbnQgdG8gbW9kaWZ5IHdoaWNoIHBhZ2VzIGFyZSBhY3R1YWxseSBsb2FkZWQgaW4gdGhlIGJyb3dzZXIuIEFjY2VwdGVkIHZhbHVlcyBhcmUgZ2V0IHRvXG4gICAqIGludGVyY2VwdCBvbmx5IEdFVCByZXF1ZXN0cywgcG9zdCB0byBpbnRlcmNlcHQgb24gUE9TVCByZXF1ZXN0cyBvciB5ZXMgdG8gaW50ZXJjZXB0IGJvdGggR0VUICYgUE9TVCByZXF1ZXN0cy5cbiAgICogTm90ZSB0aGF0IFBPU1QgcmVxdWVzdHMgYXJlIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIGlnbm9yZWQgKGlmIHlvdSBzZXQgYmVmb3JlbG9hZD1wb3N0IGl0IHdpbGwgcmFpc2UgYW4gZXJyb3IpLlxuICAgKi9cbiAgYmVmb3JlbG9hZD86ICd5ZXMnIHwgJ2dldCcgfCAncG9zdCc7XG4gIC8qKiBTZXQgdG8geWVzIHRvIGhhdmUgdGhlIGJyb3dzZXIncyBjb29raWUgY2FjaGUgY2xlYXJlZCBiZWZvcmUgdGhlIG5ldyB3aW5kb3cgaXMgb3BlbmVkLiAqL1xuICBjbGVhcmNhY2hlPzogJ3llcycgfCAnbm8nO1xuICAvKiogIHNldCB0byB5ZXMgdG8gaGF2ZSB0aGUgYnJvd3NlcidzIGVudGlyZSBsb2NhbCBzdG9yYWdlIGNsZWFyZWQgKGNvb2tpZXMsIEhUTUw1IGxvY2FsIHN0b3JhZ2UsIEluZGV4ZWREQiwgZXRjLikgYmVmb3JlIHRoZSBuZXcgd2luZG93IGlzIG9wZW5lZCAqL1xuICBjbGVhcmRhdGE/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBTZXQgdG8geWVzIHRvIGhhdmUgdGhlIHNlc3Npb24gY29va2llIGNhY2hlIGNsZWFyZWQgYmVmb3JlIHRoZSBuZXcgd2luZG93IGlzIG9wZW5lZC5cbiAgICogRm9yIFdLV2ViVmlldywgcmVxdWlyZXMgaU9TIDExKyBvbiB0YXJnZXQgZGV2aWNlLlxuICAgKi9cbiAgY2xlYXJzZXNzaW9uY2FjaGU/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAoQW5kcm9pZCkgU2V0IHRvIGEgc3RyaW5nIHRvIHVzZSBhcyB0aGUgY2xvc2UgYnV0dG9uJ3MgY2FwdGlvbiBpbnN0ZWFkIG9mIGEgWC4gTm90ZSB0aGF0IHlvdSBuZWVkIHRvIGxvY2FsaXplIHRoaXMgdmFsdWUgeW91cnNlbGYuXG4gICAqIChpT1MpIFNldCB0byBhIHN0cmluZyB0byB1c2UgYXMgdGhlIERvbmUgYnV0dG9uJ3MgY2FwdGlvbi4gTm90ZSB0aGF0IHlvdSBuZWVkIHRvIGxvY2FsaXplIHRoaXMgdmFsdWUgeW91cnNlbGYuXG4gICAqL1xuICBjbG9zZWJ1dHRvbmNhcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAoQW5kcm9pZCkgU2V0IHRvIGEgdmFsaWQgaGV4IGNvbG9yIHN0cmluZywgZm9yIGV4YW1wbGU6ICMwMGZmMDAsIGFuZCBpdCB3aWxsIGNoYW5nZSB0aGUgY2xvc2UgYnV0dG9uIGNvbG9yIGZyb20gZGVmYXVsdCwgcmVnYXJkbGVzcyBvZiBiZWluZyBhIHRleHQgb3IgZGVmYXVsdCBYLiBPbmx5IGhhcyBlZmZlY3QgaWYgdXNlciBoYXMgbG9jYXRpb24gc2V0IHRvIHllcy5cbiAgICogKGlPUykgU2V0IGFzIGEgdmFsaWQgaGV4IGNvbG9yIHN0cmluZywgZm9yIGV4YW1wbGU6ICMwMGZmMDAsIHRvIGNoYW5nZSBmcm9tIHRoZSBkZWZhdWx0IERvbmUgYnV0dG9uJ3MgY29sb3IuIE9ubHkgYXBwbGljYWJsZSBpZiB0b29sYmFyIGlzIG5vdCBkaXNhYmxlZC5cbiAgICovXG4gIGNsb3NlYnV0dG9uY29sb3I/OiBzdHJpbmc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gKGRlZmF1bHQgaXMgbm8pLiBUdXJucyBvbi9vZmYgdGhlIFVJV2ViVmlld0JvdW5jZSBwcm9wZXJ0eS4gKi9cbiAgZGlzYWxsb3dvdmVyc2Nyb2xsPzogJ3llcycgfCAnbm8nO1xuICAvKiogKGlPUyBPbmx5KSAgU2V0IHRvIHllcyBvciBubyB0byBwcmV2ZW50IHZpZXdwb3J0IHNjYWxpbmcgdGhyb3VnaCBhIG1ldGEgdGFnIChkZWZhdWx0cyB0byBubykuICovXG4gIGVuYWJsZVZpZXdwb3J0U2NhbGU/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoQW5kcm9pZCBPbmx5KSBTZXQgdG8geWVzIHRvIHNob3cgYSBjbG9zZSBidXR0b24gaW4gdGhlIGZvb3RlciBzaW1pbGFyIHRvIHRoZSBpT1MgRG9uZSBidXR0b24uIFRoZSBjbG9zZSBidXR0b24gd2lsbCBhcHBlYXIgdGhlIHNhbWUgYXMgZm9yIHRoZSBoZWFkZXIgaGVuY2UgdXNlIGNsb3NlYnV0dG9uY2FwdGlvbiBhbmQgY2xvc2VidXR0b25jb2xvciB0byBzZXQgaXRzIHByb3BlcnRpZXMgKi9cbiAgZm9vdGVyPzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIGEgdmFsaWQgaGV4IGNvbG9yIHN0cmluZywgZm9yIGV4YW1wbGUgIzAwZmYwMCBvciAjQ0MwMGZmMDAgKCNhYXJyZ2diYiksIGFuZCBpdCB3aWxsIGNoYW5nZSB0aGUgZm9vdGVyIGNvbG9yIGZyb20gZGVmYXVsdC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGZvb3RlciBzZXQgdG8geWVzICovXG4gIGZvb3RlcmNvbG9yPzogc3RyaW5nO1xuICAvKipcbiAgICogKFdpbmRvd3Mgb25seSkgU2V0IHRvIHllcyB0byBjcmVhdGUgdGhlIGJyb3dzZXIgY29udHJvbCB3aXRob3V0IGEgYm9yZGVyIGFyb3VuZCBpdC5cbiAgICogUGxlYXNlIG5vdGUgdGhhdCBpZiBsb2NhdGlvbj1ubyBpcyBhbHNvIHNwZWNpZmllZCwgdGhlcmUgd2lsbCBiZSBubyBjb250cm9sIHByZXNlbnRlZCB0byB1c2VyIHRvIGNsb3NlIElBQiB3aW5kb3cuXG4gICAqL1xuICBmdWxsc2NyZWVuPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQgJiBXaW5kb3dzIE9ubHkpIFNldCB0byB5ZXMgdG8gdXNlIHRoZSBoYXJkd2FyZSBiYWNrIGJ1dHRvbiB0byBuYXZpZ2F0ZSBiYWNrd2FyZHMgdGhyb3VnaCB0aGUgSW5BcHBCcm93c2VyJ3MgaGlzdG9yeS5cbiAgICogSWYgdGhlcmUgaXMgbm8gcHJldmlvdXMgcGFnZSwgdGhlIEluQXBwQnJvd3NlciB3aWxsIGNsb3NlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB5ZXMsIHNvIHlvdSBtdXN0IHNldCBpdCB0byBubyBpZiB5b3Ugd2FudCB0aGUgYmFjayBidXR0b24gdG8gc2ltcGx5IGNsb3NlIHRoZSBJbkFwcEJyb3dzZXIuXG4gICAqL1xuICBoYXJkd2FyZWJhY2s/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBTZXQgdG8geWVzIHRvIGNyZWF0ZSB0aGUgYnJvd3NlciBhbmQgbG9hZCB0aGUgcGFnZSwgYnV0IG5vdCBzaG93IGl0LiBUaGUgbG9hZHN0b3AgZXZlbnQgZmlyZXMgd2hlbiBsb2FkaW5nIGlzIGNvbXBsZXRlLlxuICAgKiBPbWl0IG9yIHNldCB0byBubyAoZGVmYXVsdCkgdG8gaGF2ZSB0aGUgYnJvd3NlciBvcGVuIGFuZCBsb2FkIG5vcm1hbGx5LlxuICAgKi9cbiAgaGlkZGVuPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byB5ZXMgdG8gaGlkZSB0aGUgbmF2aWdhdGlvbiBidXR0b25zIG9uIHRoZSBsb2NhdGlvbiB0b29sYmFyLCBvbmx5IGhhcyBlZmZlY3QgaWYgdXNlciBoYXMgbG9jYXRpb24gc2V0IHRvIHllcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgbm8uXG4gICAqIChpT1MpIFNldCB0byB5ZXMgb3Igbm8gdG8gdHVybiB0aGUgdG9vbGJhciBuYXZpZ2F0aW9uIGJ1dHRvbnMgb24gb3Igb2ZmIChkZWZhdWx0cyB0byBubykuIE9ubHkgYXBwbGljYWJsZSBpZiB0b29sYmFyIGlzIG5vdCBkaXNhYmxlZC5cbiAgICovXG4gIGhpZGVuYXZpZ2F0aW9uYnV0dG9ucz86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqICAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gY2hhbmdlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBsb2FkaW5nIGluZGljYXRvciAoZGVmYXVsdHMgdG8gbm8pLlxuICAgKi9cbiAgaGlkZXNwaW5uZXI/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoQW5kcm9pZCkgU2V0IHRvIHllcyB0byBoaWRlIHRoZSB1cmwgYmFyIG9uIHRoZSBsb2NhdGlvbiB0b29sYmFyLCBvbmx5IGhhcyBlZmZlY3QgaWYgdXNlciBoYXMgbG9jYXRpb24gc2V0IHRvIHllcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgbm8uICovXG4gIGhpZGV1cmxiYXI/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gb3BlbiB0aGUga2V5Ym9hcmQgd2hlbiBmb3JtIGVsZW1lbnRzIHJlY2VpdmUgZm9jdXMgdmlhIEphdmFTY3JpcHQncyBmb2N1cygpIGNhbGwgKGRlZmF1bHRzIHRvIHllcykuICovXG4gIGtleWJvYXJkRGlzcGxheVJlcXVpcmVzVXNlckFjdGlvbj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIChBbmRyb2lkKSBTZXQgdG8geWVzIHRvIHN3YXAgcG9zaXRpb25zIG9mIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbnMgYW5kIHRoZSBjbG9zZSBidXR0b24uIFNwZWNpZmljYWxseSwgbmF2aWdhdGlvbiBidXR0b25zIGdvIHRvIHRoZSBsZWZ0IGFuZCBjbG9zZSBidXR0b24gdG8gdGhlIHJpZ2h0LlxuICAgKiAoaU9TKSBTZXQgdG8geWVzIHRvIHN3YXAgcG9zaXRpb25zIG9mIHRoZSBuYXZpZ2F0aW9uIGJ1dHRvbnMgYW5kIHRoZSBjbG9zZSBidXR0b24uIFNwZWNpZmljYWxseSwgY2xvc2UgYnV0dG9uIGdvZXMgdG8gdGhlIHJpZ2h0IGFuZCBuYXZpZ2F0aW9uIGJ1dHRvbnMgdG8gdGhlIGxlZnQuXG4gICAqL1xuICBsZWZ0dG9yaWdodD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIFNldCB0byB5ZXMgb3Igbm8gdG8gdHVybiB0aGUgSW5BcHBCcm93c2VyJ3MgbG9jYXRpb24gYmFyIG9uIG9yIG9mZi4gKi9cbiAgbG9jYXRpb24/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAgU2V0IHRvIHllcyB0byBwcmV2ZW50IEhUTUw1IGF1ZGlvIG9yIHZpZGVvIGZyb20gYXV0b3BsYXlpbmcgKGRlZmF1bHRzIHRvIG5vKS5cbiAgICovXG4gIG1lZGlhUGxheWJhY2tSZXF1aXJlc1VzZXJBY3Rpb24/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAoQW5kcm9pZCkgU2V0IHRvIGEgdmFsaWQgaGV4IGNvbG9yIHN0cmluZywgZm9yIGV4YW1wbGU6ICMwMGZmMDAsIGFuZCBpdCB3aWxsIGNoYW5nZSB0aGUgY29sb3Igb2YgYm90aCBuYXZpZ2F0aW9uIGJ1dHRvbnMgZnJvbSBkZWZhdWx0LiBPbmx5IGhhcyBlZmZlY3QgaWYgdXNlciBoYXMgbG9jYXRpb24gc2V0IHRvIHllcyBhbmQgbm90IGhpZGVuYXZpZ2F0aW9uYnV0dG9ucyBzZXQgdG8geWVzLlxuICAgKiAoaU9TKSBTZXQgYXMgYSB2YWxpZCBoZXggY29sb3Igc3RyaW5nLCBmb3IgZXhhbXBsZTogIzAwZmYwMCwgdG8gY2hhbmdlIGZyb20gdGhlIGRlZmF1bHQgY29sb3IuIE9ubHkgYXBwbGljYWJsZSBpZiBuYXZpZ2F0aW9uIGJ1dHRvbnMgYXJlIHZpc2libGUuXG4gICAqL1xuICBuYXZpZ2F0aW9uYnV0dG9uY29sb3I/OiBzdHJpbmc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byBwYWdlc2hlZXQsIGZvcm1zaGVldCBvciBmdWxsc2NyZWVuIHRvIHNldCB0aGUgcHJlc2VudGF0aW9uIHN0eWxlIChkZWZhdWx0cyB0byBmdWxsc2NyZWVuKS4gKi9cbiAgcHJlc2VudGF0aW9uc3R5bGU/OiAncGFnZXNoZWV0JyB8ICdmb3Jtc2hlZXQnIHwgJ2Z1bGxzY3JlZW4nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIHllcyB0byBtYWtlIEluQXBwQnJvd3NlciBXZWJWaWV3IHRvIHBhdXNlL3Jlc3VtZSB3aXRoIHRoZSBhcHAgdG8gc3RvcCBiYWNrZ3JvdW5kIGF1ZGlvICh0aGlzIG1heSBiZSByZXF1aXJlZCB0byBhdm9pZCBHb29nbGUgUGxheSBpc3N1ZXMpICovXG4gIHNob3VsZFBhdXNlT25TdXNwZW5kPzogJ3llcycgfCAnbm8nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIHdhaXQgdW50aWwgYWxsIG5ldyB2aWV3IGNvbnRlbnQgaXMgcmVjZWl2ZWQgYmVmb3JlIGJlaW5nIHJlbmRlcmVkIChkZWZhdWx0cyB0byBubykuICovXG4gIHN1cHByZXNzZXNJbmNyZW1lbnRhbFJlbmRlcmluZz86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHllcyBvciBubyB0byB0dXJuIHRoZSB0b29sYmFyIG9uIG9yIG9mZiBmb3IgdGhlIEluQXBwQnJvd3NlciAoZGVmYXVsdHMgdG8geWVzKSAqL1xuICB0b29sYmFyPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGNvbG9yIHRoZSB0b29sYmFyIGZyb20gZGVmYXVsdC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuXG4gICAqIChpT1MpIFNldCBhcyBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCB0byBjaGFuZ2UgZnJvbSB0aGUgZGVmYXVsdCBjb2xvciBvZiB0aGUgdG9vbGJhci4gT25seSBhcHBsaWNhYmxlIGlmIHRvb2xiYXIgaXMgbm90IGRpc2FibGVkLlxuICAgKi9cbiAgdG9vbGJhcmNvbG9yPzogc3RyaW5nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8gdG9wIG9yIGJvdHRvbSAoZGVmYXVsdCBpcyBib3R0b20pLiBDYXVzZXMgdGhlIHRvb2xiYXIgdG8gYmUgYXQgdGhlIHRvcCBvciBib3R0b20gb2YgdGhlIHdpbmRvdy4gKi9cbiAgdG9vbGJhcnBvc2l0aW9uPzogJ3RvcCcgfCAnYm90dG9tJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHllcyBvciBubyB0byBtYWtlIHRoZSB0b29sYmFyIHRyYW5zbHVjZW50KHNlbWktdHJhbnNwYXJlbnQpIChkZWZhdWx0cyB0byB5ZXMpLiBPbmx5IGFwcGxpY2FibGUgaWYgdG9vbGJhciBpcyBub3QgZGlzYWJsZWQuICovXG4gIHRvb2xiYXJ0cmFuc2x1Y2VudD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIGZsaXBob3Jpem9udGFsLCBjcm9zc2Rpc3NvbHZlIG9yIGNvdmVydmVydGljYWwgdG8gc2V0IHRoZSB0cmFuc2l0aW9uIHN0eWxlIChkZWZhdWx0cyB0byBjb3ZlcnZlcnRpY2FsKS4gKi9cbiAgdHJhbnNpdGlvbnN0eWxlPzogJ2ZsaXBob3Jpem9udGFsJyB8ICdjcm9zc2Rpc3NvbHZlJyB8ICdjb3ZlcnZlcnRpY2FsJztcbiAgLyoqIChBbmRyb2lkIE9ubHkpIFNldHMgd2hldGhlciB0aGUgV2ViVmlldyBzaG91bGQgZW5hYmxlIHN1cHBvcnQgZm9yIHRoZSBcInZpZXdwb3J0XCIgSFRNTCBtZXRhIHRhZyBvciBzaG91bGQgdXNlIGEgd2lkZSB2aWV3cG9ydC4gV2hlbiB0aGUgdmFsdWUgb2YgdGhlIHNldHRpbmcgaXMgbm8sIHRoZSBsYXlvdXQgd2lkdGggaXMgYWx3YXlzIHNldCB0byB0aGUgd2lkdGggb2YgdGhlIFdlYlZpZXcgY29udHJvbCBpbiBkZXZpY2UtaW5kZXBlbmRlbnQgKENTUykgcGl4ZWxzLiBXaGVuIHRoZSB2YWx1ZSBpcyB5ZXMgYW5kIHRoZSBwYWdlIGNvbnRhaW5zIHRoZSB2aWV3cG9ydCBtZXRhIHRhZywgdGhlIHZhbHVlIG9mIHRoZSB3aWR0aCBzcGVjaWZpZWQgaW4gdGhlIHRhZyBpcyB1c2VkLiBJZiB0aGUgcGFnZSBkb2VzIG5vdCBjb250YWluIHRoZSB0YWcgb3IgZG9lcyBub3QgcHJvdmlkZSBhIHdpZHRoLCB0aGVuIGEgd2lkZSB2aWV3cG9ydCB3aWxsIGJlIHVzZWQuIChkZWZhdWx0cyB0byB5ZXMpLiAqL1xuICB1c2VXaWRlVmlld1BvcnQ/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgdG8gdXNlIFdLV2ViVmlldyBlbmdpbmUgZm9yIHRoZSBJbmFwcEJyb3dzZXIuIE9taXQgb3Igc2V0IHRvIG5vIChkZWZhdWx0KSB0byB1c2UgVUlXZWJWaWV3LiAqL1xuICB1c2V3a3dlYnZpZXc/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoQW5kcm9pZCBPbmx5KSBTZXQgdG8geWVzIHRvIHNob3cgQW5kcm9pZCBicm93c2VyJ3Mgem9vbSBjb250cm9scywgc2V0IHRvIG5vIHRvIGhpZGUgdGhlbS4gRGVmYXVsdCB2YWx1ZSBpcyB5ZXMuICovXG4gIHpvb20/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCB0eXBlIEluQXBwQnJvd3NlckV2ZW50VHlwZSA9XG4gIHwgJ2xvYWRzdGFydCdcbiAgfCAnbG9hZHN0b3AnXG4gIHwgJ2xvYWRlcnJvcidcbiAgfCAnZXhpdCdcbiAgfCAnYmVmb3JlbG9hZCdcbiAgfCAnbWVzc2FnZSdcbiAgfCAnY3VzdG9tc2NoZW1lJztcblxuZXhwb3J0IGludGVyZmFjZSBJbkFwcEJyb3dzZXJFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgLyoqIHRoZSBldmVudCBuYW1lICovXG4gIHR5cGU6IHN0cmluZztcbiAgLyoqIHRoZSBVUkwgdGhhdCB3YXMgbG9hZGVkLiAqL1xuICB1cmw6IHN0cmluZztcbiAgLyoqIHRoZSBlcnJvciBjb2RlLCBvbmx5IGluIHRoZSBjYXNlIG9mIGxvYWRlcnJvci4gKi9cbiAgY29kZTogbnVtYmVyO1xuICAvKiogdGhlIGVycm9yIG1lc3NhZ2UsIG9ubHkgaW4gdGhlIGNhc2Ugb2YgbG9hZGVycm9yLiAqL1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIC8qKiB0aGUgcG9zdE1lc3NhZ2UgZGF0YSwgb25seSBpbiB0aGUgY2FzZSBvZiBtZXNzYWdlLiAqL1xuICBkYXRhOiBhbnk7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgSW5BcHBCcm93c2VyT2JqZWN0IHtcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICAvKipcbiAgICogT3BlbnMgYSBVUkwgaW4gYSBuZXcgSW5BcHBCcm93c2VyIGluc3RhbmNlLCB0aGUgY3VycmVudCBicm93c2VyIGluc3RhbmNlLCBvciB0aGUgc3lzdGVtIGJyb3dzZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgICAgIFRoZSBVUkwgdG8gbG9hZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0YXJnZXQ9XCJzZWxmXCJdICBUaGUgdGFyZ2V0IGluIHdoaWNoIHRvIGxvYWQgdGhlIFVSTCwgYW4gb3B0aW9uYWwgcGFyYW1ldGVyIHRoYXQgZGVmYXVsdHMgdG8gX3NlbGYuXG4gICAqICAgICAgICAgICAgICAgICBfc2VsZjogT3BlbnMgaW4gdGhlIFdlYlZpZXcgaWYgdGhlIFVSTCBpcyBpbiB0aGUgd2hpdGUgbGlzdCwgb3RoZXJ3aXNlIGl0IG9wZW5zIGluIHRoZSBJbkFwcEJyb3dzZXIuXG4gICAqICAgICAgICAgICAgICAgICBfYmxhbms6IE9wZW5zIGluIHRoZSBJbkFwcEJyb3dzZXIuXG4gICAqICAgICAgICAgICAgICAgICBfc3lzdGVtOiBPcGVucyBpbiB0aGUgc3lzdGVtJ3Mgd2ViIGJyb3dzZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgSW5BcHBCcm93c2VyT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnMgZm9yIHRoZSBJbkFwcEJyb3dzZXIuIE9wdGlvbmFsLCBkZWZhdWx0aW5nIHRvOiBsb2NhdGlvbj15ZXMuXG4gICAqICAgICAgICAgICAgICAgICBUaGUgb3B0aW9ucyBzdHJpbmcgbXVzdCBub3QgY29udGFpbiBhbnkgYmxhbmsgc3BhY2UsIGFuZCBlYWNoIGZlYXR1cmUnc1xuICAgKiAgICAgICAgICAgICAgICAgbmFtZS92YWx1ZSBwYWlycyBtdXN0IGJlIHNlcGFyYXRlZCBieSBhIGNvbW1hLiBGZWF0dXJlIG5hbWVzIGFyZSBjYXNlIGluc2Vuc2l0aXZlLlxuICAgKi9cbiAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcsIHRhcmdldD86IHN0cmluZywgb3B0aW9ucz86IHN0cmluZyB8IEluQXBwQnJvd3Nlck9wdGlvbnMpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG9wdGlvbnMgPSBPYmplY3Qua2V5cyhvcHRpb25zKVxuICAgICAgICAgIC5tYXAoKGtleTogc3RyaW5nKSA9PiBgJHtrZXl9PSR7KG9wdGlvbnMgYXMgSW5BcHBCcm93c2VyT3B0aW9ucylba2V5XX1gKVxuICAgICAgICAgIC5qb2luKCcsJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gY29yZG92YS5JbkFwcEJyb3dzZXIub3Blbih1cmwsIHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCwgdGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05hdGl2ZTogSW5BcHBCcm93c2VyIGlzIG5vdCBpbnN0YWxsZWQgb3IgeW91IGFyZSBydW5uaW5nIG9uIGEgYnJvd3Nlci4gRmFsbGluZyBiYWNrIHRvIHdpbmRvdy5vcGVuLidcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIFwiYmVmb3JlbG9hZFwiIGV2ZW50IHRvIGNvbnRpbnVlIHRoZSBzY3JpcHRcbiAgICogQHBhcmFtIHN0clVybCB7U3RyaW5nfSBUaGUgVVJMIHRoZSBJbkFwcEJyb3dzZXIgc2hvdWxkIG5hdmlnYXRlIHRvLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgX2xvYWRBZnRlckJlZm9yZWxvYWQoc3RyVXJsOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIGFuIEluQXBwQnJvd3NlciB3aW5kb3cgdGhhdCB3YXMgb3BlbmVkIGhpZGRlbi4gQ2FsbGluZyB0aGlzIGhhcyBubyBlZmZlY3RcbiAgICogaWYgdGhlIEluQXBwQnJvd3NlciB3YXMgYWxyZWFkeSB2aXNpYmxlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2hvdygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGNsb3NlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSGlkZXMgYW4gSW5BcHBCcm93c2VyIHdpbmRvdyB0aGF0IGlzIGN1cnJlbnRseSBzaG93bi4gQ2FsbGluZyB0aGlzIGhhcyBubyBlZmZlY3RcbiAgICogaWYgdGhlIEluQXBwQnJvd3NlciB3YXMgYWxyZWFkeSBoaWRkZW4uXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBoaWRlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSW5qZWN0cyBKYXZhU2NyaXB0IGNvZGUgaW50byB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICogQHBhcmFtIHNjcmlwdCB7T2JqZWN0fSBEZXRhaWxzIG9mIHRoZSBzY3JpcHQgdG8gcnVuLCBzcGVjaWZ5aW5nIGVpdGhlciBhIGZpbGUgb3IgY29kZSBrZXkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZXhlY3V0ZVNjcmlwdChzY3JpcHQ6IHsgZmlsZT86IHN0cmluZzsgY29kZT86IHN0cmluZyB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW5qZWN0cyBDU1MgaW50byB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICogQHBhcmFtIGNzcyB7T2JqZWN0fSBEZXRhaWxzIG9mIHRoZSBzY3JpcHQgdG8gcnVuLCBzcGVjaWZ5aW5nIGVpdGhlciBhIGZpbGUgb3IgY29kZSBrZXkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgaW5zZXJ0Q1NTKGNzczogeyBmaWxlPzogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1ldGhvZCB0aGF0IGFsbG93cyB5b3UgdG8gbGlzdGVuIHRvIGV2ZW50cyBoYXBwZW5pbmcgaW4gdGhlIGJyb3dzZXIuXG4gICAqIEBwYXJhbSBldmVudCB7SW5BcHBCcm93c2VyRXZlbnRUeXBlfSBOYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD59IFJldHVybnMgYmFjayBhbiBvYnNlcnZhYmxlIHRoYXQgd2lsbCBsaXN0ZW4gdG8gdGhlIGV2ZW50IG9uIHN1YnNjcmliZSwgYW5kIHdpbGwgc3RvcCBsaXN0ZW5pbmcgdG8gdGhlIGV2ZW50IG9uIHVuc3Vic2NyaWJlLlxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBvbihldmVudDogSW5BcHBCcm93c2VyRXZlbnRUeXBlKTogT2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD4oKG9ic2VydmVyOiBPYnNlcnZlcjxJbkFwcEJyb3dzZXJFdmVudD4pID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcikpO1xuICAgICAgcmV0dXJuICgpID0+IHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcikpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgbWV0aG9kIHRoYXQgYWxsb3dzIHlvdSB0byBsaXN0ZW4gdG8gZXZlbnRzIGhhcHBlbmluZyBpbiB0aGUgYnJvd3Nlci5cbiAgICogQHBhcmFtIGV2ZW50IHtzdHJpbmd9IE5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEluQXBwQnJvd3NlckV2ZW50Pn0gUmV0dXJucyBiYWNrIGFuIG9ic2VydmFibGUgdGhhdCB3aWxsIGxpc3RlbiB0byB0aGUgZXZlbnQgb24gc3Vic2NyaWJlLCBhbmQgd2lsbCBzdG9wIGxpc3RlbmluZyB0byB0aGUgZXZlbnQgb24gdW5zdWJzY3JpYmUuXG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIG9uKGV2ZW50OiBzdHJpbmcpOiBPYnNlcnZhYmxlPEluQXBwQnJvd3NlckV2ZW50PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPEluQXBwQnJvd3NlckV2ZW50Pigob2JzZXJ2ZXI6IE9ic2VydmVyPEluQXBwQnJvd3NlckV2ZW50PikgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKSk7XG4gICAgICByZXR1cm4gKCkgPT4gdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBAbmFtZSBJbiBBcHAgQnJvd3NlclxuICogQHByZW1pZXIgaW5hcHBicm93c2VyXG4gKiBAZGVzY3JpcHRpb24gTGF1bmNoZXMgaW4gYXBwIEJyb3dzZXJcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW5BcHBCcm93c2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pbi1hcHAtYnJvd3Nlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaWFiOiBJbkFwcEJyb3dzZXIpIHsgfVxuICpcbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogY29uc3QgYnJvd3NlciA9IHRoaXMuaWFiLmNyZWF0ZSgnaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vJyk7XG4gKlxuICogYnJvd3Nlci5leGVjdXRlU2NyaXB0KC4uLik7XG4gKlxuICogYnJvd3Nlci5pbnNlcnRDU1MoLi4uKTtcbiAqIGJyb3dzZXIub24oJ2xvYWRzdG9wJykuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAqICAgIGJyb3dzZXIuaW5zZXJ0Q1NTKHsgY29kZTogXCJib2R5e2NvbG9yOiByZWQ7XCIgfSk7XG4gKiB9KTtcbiAqXG4gKiBicm93c2VyLmNsb3NlKCk7XG4gKlxuICogYGBgXG4gKiBAY2xhc3Nlc1xuICogSW5BcHBCcm93c2VyT2JqZWN0XG4gKiBAaW50ZXJmYWNlc1xuICogSW5BcHBCcm93c2VyRXZlbnRcbiAqIEluQXBwQnJvd3Nlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbkFwcEJyb3dzZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLkluQXBwQnJvd3NlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWluYXBwYnJvd3NlcicsXG4gIHBsYXRmb3JtczogWydBbWF6b25GaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbkFwcEJyb3dzZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBPcGVucyBhIFVSTCBpbiBhIG5ldyBJbkFwcEJyb3dzZXIgaW5zdGFuY2UsIHRoZSBjdXJyZW50IGJyb3dzZXIgaW5zdGFuY2UsIG9yIHRoZSBzeXN0ZW0gYnJvd3Nlci5cbiAgICogQHBhcmFtICB1cmwge3N0cmluZ30gICAgIFRoZSBVUkwgdG8gbG9hZC5cbiAgICogQHBhcmFtICB0YXJnZXQge3N0cmluZ30gIFRoZSB0YXJnZXQgaW4gd2hpY2ggdG8gbG9hZCB0aGUgVVJMLCBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBkZWZhdWx0cyB0byBfc2VsZi5cbiAgICogQHBhcmFtICBvcHRpb25zIHtzdHJpbmd9IE9wdGlvbnMgZm9yIHRoZSBJbkFwcEJyb3dzZXIuIE9wdGlvbmFsLCBkZWZhdWx0aW5nIHRvOiBsb2NhdGlvbj15ZXMuXG4gICAqICAgICAgICAgICAgICAgICBUaGUgb3B0aW9ucyBzdHJpbmcgbXVzdCBub3QgY29udGFpbiBhbnkgYmxhbmsgc3BhY2UsIGFuZCBlYWNoIGZlYXR1cmUnc1xuICAgKiAgICAgICAgICAgICAgICAgbmFtZS92YWx1ZSBwYWlycyBtdXN0IGJlIHNlcGFyYXRlZCBieSBhIGNvbW1hLiBGZWF0dXJlIG5hbWVzIGFyZSBjYXNlIGluc2Vuc2l0aXZlLlxuICAgKiBAcmV0dXJucyB7SW5BcHBCcm93c2VyT2JqZWN0fVxuICAgKi9cbiAgY3JlYXRlKHVybDogc3RyaW5nLCB0YXJnZXQ/OiBzdHJpbmcsIG9wdGlvbnM/OiBzdHJpbmcgfCBJbkFwcEJyb3dzZXJPcHRpb25zKTogSW5BcHBCcm93c2VyT2JqZWN0IHtcbiAgICByZXR1cm4gbmV3IEluQXBwQnJvd3Nlck9iamVjdCh1cmwsIHRhcmdldCwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==

/***/ }),

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 44981);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule-routing.module */ 82774);
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule.page */ 13217);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);









let SchedulePageModule = class SchedulePageModule {
};
SchedulePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _schedule_routing_module__WEBPACK_IMPORTED_MODULE_1__.SchedulePageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
        ],
        declarations: [_schedule_page__WEBPACK_IMPORTED_MODULE_2__.SchedulePage],
        providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_schedule_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./schedule.page.html */ 92780);
/* harmony import */ var _schedule_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.page.scss */ 22044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/browser */ 28427);






let SchedulePage = class SchedulePage {
    constructor(iab) {
        this.iab = iab;
        this.options = {
            location: 'yes',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            presentationstyle: 'fullscreen',
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
            /*
            {
              "fname": 'Lawyer', /// First Name (Required)
              "lname": 'Person', /// Last Name (Required)
              "linkedin": "", /// Linkedin Profile (Optional)
              "avvo": "", /// Avvo Profile (Optional)
              "website": "", /// Personal Website (Optional)
              "about": "About Section", /// About Section (Required)
              "expertise": ["lawyering"], /// Expertise area array (Required)
              "languages": ['languages'], /// Language array (Required)
              "location": "City, State", /// City, State (Required)
              "hours": "day: 0:00-0:00 am (TimeZone)", /// Hours (Optional)
              "phone":"(800)867-5309", /// Phone Number (Required)
              "calendly": "", /// Calendly Link for Scheduling (Optional)
              "image": '../assets/attorneydefault.png', ///Path or link to image for profile (Optional)
              "key":'2' /// Indexing Key (Required)
          }*/
        ];
    }
    openWithSystemBrowser(url) {
        this.iab.create(url, "_system", this.options);
    }
    openWithInAppBrowser(url) {
        this.iab.create(url, '_blank', this.options);
    }
    openWithCordovaBrowser(url) {
        this.iab.create(url, "_self", this.options);
    }
    openLink(Url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__.Browser.open({ url: Url });
        });
    }
    ngOnInit() {
    }
};
SchedulePage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser }
];
SchedulePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\n    <!-- Back Button -->\n    <!--\n    <ion-row>\n      <ion-button fill=clear [routerLink]=\"['/tablinks/legal']\" id=\"back_button\">\n        <ion-icon name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-row>\n  -->\n\n    <!-- \n    <ion-row id=\"waves_img\">\n      <img src=\"../assets/legalwave.png\" />\n    </ion-row>\n    -->\n\n    <!-- Text at top that says \"Legal\" -->\n    <ion-row id=\"legal_text\">\n      <ion-text>\n        LEGAL\n      </ion-text>\n    </ion-row>\n\n    <!-- Text at top that says \"Find a CFGI Attorney For a Consultation\" -->\n    <ion-row id=\"find_text\">\n      <ion-text>\n        Find a CFGI Attorney For a Consulation\n      </ion-text>\n    </ion-row>\n\n    <!-- Row containing Search Bar -->\n    <ion-row id=\"search_row\">\n      <ion-searchbar id=\"search_field\"\n           id=\"search_field\"\n           placeholder=\"Search for Lawyers\"\n           [(ngModel)]=\"searchTerm\"\n           showCancelButton=\"focus\"\n           animated>\n      </ion-searchbar>\n      <!-- Filter button included for future development-->\n      <!--\n      <ion-button fill=clear id=\"filter_button\">\n        <ion-icon width=\"100%\" name=\"filter-outline\"></ion-icon>\n      </ion-button>\n    -->\n    </ion-row>\n    \n    <!-- List of cards displayed as results -->\n    <ion-row id=\"results\">\n      <ion-list>\n        <!-- Create an ion item for each lawyer in the lawyers array -->\n        <ion-item *ngFor=\"let lawyer of lawyers | filter:searchTerm\">\n          <ion-card id=\"result_card\"> \n            <ion-card-content>\n              <table>\n                <!-- Top row of Table: Lawyer image on left and name, location and language on right -->\n                <tr>\n                  <td id=\"left\"><img id=\"lawyer_avi\" src= {{lawyer.image}}></td>\n                  <td id=\"right\"><ion-text id=\"lawyer_title\">{{lawyer.fname}}</ion-text>\n                    <ion-text id=\"lawyer_title\">{{lawyer.lname}}</ion-text>\n                    <ion-text id=\"location\"> {{lawyer.location}}<br> </ion-text>\n                    <ion-text id=\"languages\"> {{lawyer.languages}} </ion-text>\n                  </td>\n                </tr>\n                <!-- 2nd Row of Table: Contact information on left and Lawyer information on right -->\n                <tr>\n                  <td id=\"left\">\n                    <!-- Show button for Linkedin Profile if given -->\n                    <ion-button *ngIf=\"lawyer.linkedin\" fill=\"clear\" id=\"link\" (click)=\"openWithSystemBrowser(lawyer.linkedin)\"><img id=\"icon\" src=\"../assets/linkedin.png\"></ion-button>\n                    <!-- Show button for Avvo Profile if given -->\n                    <ion-button *ngIf=\"lawyer.avvo\" fill=\"clear\" id=\"link\" (click)=\"openLink(lawyer.avvo)\"> <img id=\"icon\" src=\"../assets/avvo.png\"></ion-button>\n                    <!-- Lawyer's phone number -->\n                    <ion-text id=\"contact\"><br><br><ion-icon size=\"small\" name=\"call\"></ion-icon>&nbsp;&nbsp;{{lawyer.phone}}<br></ion-text>\n                    <!-- Show hours if given -->\n                    <ion-text *ngIf=\"lawyer.hours\" id=\"hours\"> Hours: {{lawyer.hours}}</ion-text>\n                  </td>\n                  <td id=\"right\">\n                    <!-- Lawyer about section -->\n                    <ion-text id=\"about\" >{{lawyer.about}}<br><br></ion-text>\n                    <!-- Lawyer expertise section -->\n                    <ion-text id=\"about\" > Expertise: {{lawyer.expertise}}</ion-text>\n                  </td>\n                </tr>\n                </table>\n            </ion-card-content>\n            <!-- Button to schedule with lawyer via Calendly, if Calendly link is provided -->\n            <ion-card-content  *ngIf=\"lawyer.calendly\">\n              <!-- In App Browser help: https://www.techiediaries.com/inappbrowser-ionic-v3/ -->\n              <ion-button (click)=\"openLink(lawyer.calendly)\" id=\"schedule_button\" > Schedule with {{lawyer.fname}}</ion-button>\n            </ion-card-content>\n\n            <!-- If no Calendly link is provided, button is replaced with text telling the user \n            to schedule their appointment by contacting the lawyer-->\n            <ion-card-content  id=\"no_calendly\"  *ngIf =\"lawyer.calendly === ''\">\n              <ion-text > Please contact {{lawyer.fname}} directly to check availability.</ion-text>\n            </ion-card-content>\n          </ion-card>\n        </ion-item>\n      </ion-list>\n    </ion-row>");

/***/ })

}]);
//# sourceMappingURL=src_app_schedule_schedule_module_ts.js.map