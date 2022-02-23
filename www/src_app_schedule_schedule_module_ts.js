(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["src_app_schedule_schedule_module_ts"],{

/***/ 42199:
/*!***********************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/in-app-browser/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InAppBrowserObject": () => (/* binding */ InAppBrowserObject),
/* harmony export */   "InAppBrowser": () => (/* binding */ InAppBrowser)
/* harmony export */ });
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 16887);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 69165);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var InAppBrowserObject = /** @class */ (function () {
    /**
     * Opens a URL in a new InAppBrowserOriginal instance, the current browser instance, or the system browser.
     *
     * @param {string} url     The URL to load.
     * @param {string} [target="self"]  The target in which to load the URL, an optional parameter that defaults to _self.
     *                 _self: Opens in the WebView if the URL is in the white list, otherwise it opens in the InAppBrowserOriginal.
     *                 _blank: Opens in the InAppBrowserOriginal.
     *                 _system: Opens in the system's web browser.
     * @param {string | InAppBrowserOptions} [options] Options for the InAppBrowserOriginal. Optional, defaulting to: location=yes.
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
            console.warn('Native: InAppBrowserOriginal is not installed or you are running on a browser. Falling back to window.open.');
        }
    }
    InAppBrowserObject.prototype._loadAfterBeforeload = function (strUrl) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "_loadAfterBeforeload", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.show = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "show", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.close = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "close", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.hide = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "hide", { "sync": true }, arguments); };
    InAppBrowserObject.prototype.executeScript = function (script) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "executeScript", {}, arguments); };
    InAppBrowserObject.prototype.insertCSS = function (css) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "insertCSS", {}, arguments); };
    InAppBrowserObject.prototype.on = function (event) {
        var _this = this;
        return (function () {
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
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
            if ((0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.instanceAvailability)(_this) === true) {
                return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
                    _this._objectInstance.addEventListener(event, observer.next.bind(observer));
                    return function () { return _this._objectInstance.removeEventListener(event, observer.next.bind(observer)); };
                });
            }
        })();
    };
    return InAppBrowserObject;
}());

var InAppBrowserOriginal = /** @class */ (function (_super) {
    __extends(InAppBrowserOriginal, _super);
    function InAppBrowserOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Opens a URL in a new InAppBrowserOriginal instance, the current browser instance, or the system browser.
     *
     * @param  url {string}     The URL to load.
     * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options {string} Options for the InAppBrowserOriginal. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     * @returns {InAppBrowserObject}
     */
    InAppBrowserOriginal.prototype.create = function (url, target, options) {
        return new InAppBrowserObject(url, target, options);
    };
    InAppBrowserOriginal.pluginName = "InAppBrowser";
    InAppBrowserOriginal.plugin = "cordova-plugin-inappbrowser";
    InAppBrowserOriginal.pluginRef = "cordova.InAppBrowser";
    InAppBrowserOriginal.repo = "https://github.com/apache/cordova-plugin-inappbrowser";
    InAppBrowserOriginal.platforms = ["AmazonFire OS", "Android", "Browser", "iOS", "macOS", "Windows"];
    return InAppBrowserOriginal;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin));
var InAppBrowser = new InAppBrowserOriginal();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW4tYXBwLWJyb3dzZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8scUVBQXNFLE1BQU0sK0JBQStCLENBQUM7QUFDbkgsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7SUFrSjFDOzs7Ozs7Ozs7OztPQVdHO0lBQ0gsNEJBQVksR0FBVyxFQUFFLE1BQWUsRUFBRSxPQUFzQztRQUM5RSxJQUFJO1lBQ0YsSUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO2dCQUMxQyxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7cUJBQzNCLEdBQUcsQ0FBQyxVQUFDLEdBQVcsSUFBSyxPQUFHLEdBQUcsU0FBSyxPQUErQixDQUFDLEdBQUcsQ0FBRyxFQUFqRCxDQUFpRCxDQUFDO3FCQUN2RSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDZDtZQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztTQUN4RTtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7Z0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzFCO1lBQ0QsT0FBTyxDQUFDLElBQUksQ0FDVixxR0FBcUcsQ0FDdEcsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQVFELGlEQUFvQixhQUFDLE1BQWM7SUFPbkMsaUNBQUk7SUFNSixrQ0FBSztJQU9MLGlDQUFJO0lBV0osMENBQWEsYUFBQyxNQUF3QztJQWF0RCxzQ0FBUyxhQUFDLEdBQXFDO0lBVy9DLCtCQUFFLGFBQUMsS0FBNEI7OztzREFBaUM7Z0JBQzlELE9BQU8sSUFBSSxVQUFVLENBQW9CLFVBQUMsUUFBcUM7b0JBQzdFLEtBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzNFLE9BQU8sY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQTdFLENBQTZFLENBQUM7Z0JBQzdGLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQVNELCtCQUFFLGFBQUMsS0FBYTs7O3NEQUFpQztnQkFDL0MsT0FBTyxJQUFJLFVBQVUsQ0FBb0IsVUFBQyxRQUFxQztvQkFDN0UsS0FBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDM0UsT0FBTyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBN0UsQ0FBNkUsQ0FBQztnQkFDN0YsQ0FBQyxDQUFDLENBQUM7YUFDSjs7OzZCQW5RSDs7OztJQThTa0MsZ0NBQTBCOzs7O0lBQzFEOzs7Ozs7Ozs7T0FTRztJQUNILDZCQUFNLEdBQU4sVUFBTyxHQUFXLEVBQUUsTUFBZSxFQUFFLE9BQXNDO1FBQ3pFLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7Ozt1QkEzVEg7RUE4U2tDLDBCQUEwQjtTQUEvQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZUNoZWNrLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSBjb25zdCBjb3Jkb3ZhOiBDb3Jkb3ZhICYgeyBJbkFwcEJyb3dzZXI6IGFueSB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIEluQXBwQnJvd3Nlck9wdGlvbnMge1xuICAvKipcbiAgICogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIGFsbG93IGluLWxpbmUgSFRNTDUgbWVkaWEgcGxheWJhY2ssIGRpc3BsYXlpbmcgd2l0aGluIHRoZSBicm93c2VyIHdpbmRvdyByYXRoZXIgdGhhbiBhIGRldmljZS1zcGVjaWZpYyBwbGF5YmFjayBpbnRlcmZhY2UuXG4gICAqIFRoZSBIVE1MJ3MgdmlkZW8gZWxlbWVudCBtdXN0IGFsc28gaW5jbHVkZSB0aGUgd2Via2l0LXBsYXlzaW5saW5lIGF0dHJpYnV0ZSAoZGVmYXVsdHMgdG8gbm8pXG4gICAqL1xuICBhbGxvd0lubGluZU1lZGlhUGxheWJhY2s/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBzZXQgdG8gZW5hYmxlIHRoZSBiZWZvcmVsb2FkIGV2ZW50IHRvIG1vZGlmeSB3aGljaCBwYWdlcyBhcmUgYWN0dWFsbHkgbG9hZGVkIGluIHRoZSBicm93c2VyLiBBY2NlcHRlZCB2YWx1ZXMgYXJlIGdldCB0b1xuICAgKiBpbnRlcmNlcHQgb25seSBHRVQgcmVxdWVzdHMsIHBvc3QgdG8gaW50ZXJjZXB0IG9uIFBPU1QgcmVxdWVzdHMgb3IgeWVzIHRvIGludGVyY2VwdCBib3RoIEdFVCAmIFBPU1QgcmVxdWVzdHMuXG4gICAqIE5vdGUgdGhhdCBQT1NUIHJlcXVlc3RzIGFyZSBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSBpZ25vcmVkIChpZiB5b3Ugc2V0IGJlZm9yZWxvYWQ9cG9zdCBpdCB3aWxsIHJhaXNlIGFuIGVycm9yKS5cbiAgICovXG4gIGJlZm9yZWxvYWQ/OiAneWVzJyB8ICdnZXQnIHwgJ3Bvc3QnO1xuICAvKiogU2V0IHRvIHllcyB0byBoYXZlIHRoZSBicm93c2VyJ3MgY29va2llIGNhY2hlIGNsZWFyZWQgYmVmb3JlIHRoZSBuZXcgd2luZG93IGlzIG9wZW5lZC4gKi9cbiAgY2xlYXJjYWNoZT86ICd5ZXMnIHwgJ25vJztcbiAgLyoqICBzZXQgdG8geWVzIHRvIGhhdmUgdGhlIGJyb3dzZXIncyBlbnRpcmUgbG9jYWwgc3RvcmFnZSBjbGVhcmVkIChjb29raWVzLCBIVE1MNSBsb2NhbCBzdG9yYWdlLCBJbmRleGVkREIsIGV0Yy4pIGJlZm9yZSB0aGUgbmV3IHdpbmRvdyBpcyBvcGVuZWQgKi9cbiAgY2xlYXJkYXRhPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogU2V0IHRvIHllcyB0byBoYXZlIHRoZSBzZXNzaW9uIGNvb2tpZSBjYWNoZSBjbGVhcmVkIGJlZm9yZSB0aGUgbmV3IHdpbmRvdyBpcyBvcGVuZWQuXG4gICAqIEZvciBXS1dlYlZpZXcsIHJlcXVpcmVzIGlPUyAxMSsgb24gdGFyZ2V0IGRldmljZS5cbiAgICovXG4gIGNsZWFyc2Vzc2lvbmNhY2hlPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHN0cmluZyB0byB1c2UgYXMgdGhlIGNsb3NlIGJ1dHRvbidzIGNhcHRpb24gaW5zdGVhZCBvZiBhIFguIE5vdGUgdGhhdCB5b3UgbmVlZCB0byBsb2NhbGl6ZSB0aGlzIHZhbHVlIHlvdXJzZWxmLlxuICAgKiAoaU9TKSBTZXQgdG8gYSBzdHJpbmcgdG8gdXNlIGFzIHRoZSBEb25lIGJ1dHRvbidzIGNhcHRpb24uIE5vdGUgdGhhdCB5b3UgbmVlZCB0byBsb2NhbGl6ZSB0aGlzIHZhbHVlIHlvdXJzZWxmLlxuICAgKi9cbiAgY2xvc2VidXR0b25jYXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGNsb3NlIGJ1dHRvbiBjb2xvciBmcm9tIGRlZmF1bHQsIHJlZ2FyZGxlc3Mgb2YgYmVpbmcgYSB0ZXh0IG9yIGRlZmF1bHQgWC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuXG4gICAqIChpT1MpIFNldCBhcyBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCB0byBjaGFuZ2UgZnJvbSB0aGUgZGVmYXVsdCBEb25lIGJ1dHRvbidzIGNvbG9yLiBPbmx5IGFwcGxpY2FibGUgaWYgdG9vbGJhciBpcyBub3QgZGlzYWJsZWQuXG4gICAqL1xuICBjbG9zZWJ1dHRvbmNvbG9yPzogc3RyaW5nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIChkZWZhdWx0IGlzIG5vKS4gVHVybnMgb24vb2ZmIHRoZSBVSVdlYlZpZXdCb3VuY2UgcHJvcGVydHkuICovXG4gIGRpc2FsbG93b3ZlcnNjcm9sbD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgIFNldCB0byB5ZXMgb3Igbm8gdG8gcHJldmVudCB2aWV3cG9ydCBzY2FsaW5nIHRocm91Z2ggYSBtZXRhIHRhZyAoZGVmYXVsdHMgdG8gbm8pLiAqL1xuICBlbmFibGVWaWV3cG9ydFNjYWxlPzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIHllcyB0byBzaG93IGEgY2xvc2UgYnV0dG9uIGluIHRoZSBmb290ZXIgc2ltaWxhciB0byB0aGUgaU9TIERvbmUgYnV0dG9uLiBUaGUgY2xvc2UgYnV0dG9uIHdpbGwgYXBwZWFyIHRoZSBzYW1lIGFzIGZvciB0aGUgaGVhZGVyIGhlbmNlIHVzZSBjbG9zZWJ1dHRvbmNhcHRpb24gYW5kIGNsb3NlYnV0dG9uY29sb3IgdG8gc2V0IGl0cyBwcm9wZXJ0aWVzICovXG4gIGZvb3Rlcj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChBbmRyb2lkIE9ubHkpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlICMwMGZmMDAgb3IgI0NDMDBmZjAwICgjYWFycmdnYmIpLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGZvb3RlciBjb2xvciBmcm9tIGRlZmF1bHQuIE9ubHkgaGFzIGVmZmVjdCBpZiB1c2VyIGhhcyBmb290ZXIgc2V0IHRvIHllcyAqL1xuICBmb290ZXJjb2xvcj86IHN0cmluZztcbiAgLyoqXG4gICAqIChXaW5kb3dzIG9ubHkpIFNldCB0byB5ZXMgdG8gY3JlYXRlIHRoZSBicm93c2VyIGNvbnRyb2wgd2l0aG91dCBhIGJvcmRlciBhcm91bmQgaXQuXG4gICAqIFBsZWFzZSBub3RlIHRoYXQgaWYgbG9jYXRpb249bm8gaXMgYWxzbyBzcGVjaWZpZWQsIHRoZXJlIHdpbGwgYmUgbm8gY29udHJvbCBwcmVzZW50ZWQgdG8gdXNlciB0byBjbG9zZSBJQUIgd2luZG93LlxuICAgKi9cbiAgZnVsbHNjcmVlbj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIChBbmRyb2lkICYgV2luZG93cyBPbmx5KSBTZXQgdG8geWVzIHRvIHVzZSB0aGUgaGFyZHdhcmUgYmFjayBidXR0b24gdG8gbmF2aWdhdGUgYmFja3dhcmRzIHRocm91Z2ggdGhlIEluQXBwQnJvd3NlcidzIGhpc3RvcnkuXG4gICAqIElmIHRoZXJlIGlzIG5vIHByZXZpb3VzIHBhZ2UsIHRoZSBJbkFwcEJyb3dzZXIgd2lsbCBjbG9zZS4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgeWVzLCBzbyB5b3UgbXVzdCBzZXQgaXQgdG8gbm8gaWYgeW91IHdhbnQgdGhlIGJhY2sgYnV0dG9uIHRvIHNpbXBseSBjbG9zZSB0aGUgSW5BcHBCcm93c2VyLlxuICAgKi9cbiAgaGFyZHdhcmViYWNrPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogU2V0IHRvIHllcyB0byBjcmVhdGUgdGhlIGJyb3dzZXIgYW5kIGxvYWQgdGhlIHBhZ2UsIGJ1dCBub3Qgc2hvdyBpdC4gVGhlIGxvYWRzdG9wIGV2ZW50IGZpcmVzIHdoZW4gbG9hZGluZyBpcyBjb21wbGV0ZS5cbiAgICogT21pdCBvciBzZXQgdG8gbm8gKGRlZmF1bHQpIHRvIGhhdmUgdGhlIGJyb3dzZXIgb3BlbiBhbmQgbG9hZCBub3JtYWxseS5cbiAgICovXG4gIGhpZGRlbj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIChBbmRyb2lkKSBTZXQgdG8geWVzIHRvIGhpZGUgdGhlIG5hdmlnYXRpb24gYnV0dG9ucyBvbiB0aGUgbG9jYXRpb24gdG9vbGJhciwgb25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIG5vLlxuICAgKiAoaU9TKSBTZXQgdG8geWVzIG9yIG5vIHRvIHR1cm4gdGhlIHRvb2xiYXIgbmF2aWdhdGlvbiBidXR0b25zIG9uIG9yIG9mZiAoZGVmYXVsdHMgdG8gbm8pLiBPbmx5IGFwcGxpY2FibGUgaWYgdG9vbGJhciBpcyBub3QgZGlzYWJsZWQuXG4gICAqL1xuICBoaWRlbmF2aWdhdGlvbmJ1dHRvbnM/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAgKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIGNoYW5nZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgbG9hZGluZyBpbmRpY2F0b3IgKGRlZmF1bHRzIHRvIG5vKS5cbiAgICovXG4gIGhpZGVzcGlubmVyPzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQpIFNldCB0byB5ZXMgdG8gaGlkZSB0aGUgdXJsIGJhciBvbiB0aGUgbG9jYXRpb24gdG9vbGJhciwgb25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIG5vLiAqL1xuICBoaWRldXJsYmFyPzogJ3llcycgfCAnbm8nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIG9wZW4gdGhlIGtleWJvYXJkIHdoZW4gZm9ybSBlbGVtZW50cyByZWNlaXZlIGZvY3VzIHZpYSBKYXZhU2NyaXB0J3MgZm9jdXMoKSBjYWxsIChkZWZhdWx0cyB0byB5ZXMpLiAqL1xuICBrZXlib2FyZERpc3BsYXlSZXF1aXJlc1VzZXJBY3Rpb24/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAoQW5kcm9pZCkgU2V0IHRvIHllcyB0byBzd2FwIHBvc2l0aW9ucyBvZiB0aGUgbmF2aWdhdGlvbiBidXR0b25zIGFuZCB0aGUgY2xvc2UgYnV0dG9uLiBTcGVjaWZpY2FsbHksIG5hdmlnYXRpb24gYnV0dG9ucyBnbyB0byB0aGUgbGVmdCBhbmQgY2xvc2UgYnV0dG9uIHRvIHRoZSByaWdodC5cbiAgICogKGlPUykgU2V0IHRvIHllcyB0byBzd2FwIHBvc2l0aW9ucyBvZiB0aGUgbmF2aWdhdGlvbiBidXR0b25zIGFuZCB0aGUgY2xvc2UgYnV0dG9uLiBTcGVjaWZpY2FsbHksIGNsb3NlIGJ1dHRvbiBnb2VzIHRvIHRoZSByaWdodCBhbmQgbmF2aWdhdGlvbiBidXR0b25zIHRvIHRoZSBsZWZ0LlxuICAgKi9cbiAgbGVmdHRvcmlnaHQ/OiAneWVzJyB8ICdubyc7XG4gIC8qKiBTZXQgdG8geWVzIG9yIG5vIHRvIHR1cm4gdGhlIEluQXBwQnJvd3NlcidzIGxvY2F0aW9uIGJhciBvbiBvciBvZmYuICovXG4gIGxvY2F0aW9uPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogIFNldCB0byB5ZXMgdG8gcHJldmVudCBIVE1MNSBhdWRpbyBvciB2aWRlbyBmcm9tIGF1dG9wbGF5aW5nIChkZWZhdWx0cyB0byBubykuXG4gICAqL1xuICBtZWRpYVBsYXliYWNrUmVxdWlyZXNVc2VyQWN0aW9uPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGNvbG9yIG9mIGJvdGggbmF2aWdhdGlvbiBidXR0b25zIGZyb20gZGVmYXVsdC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMgYW5kIG5vdCBoaWRlbmF2aWdhdGlvbmJ1dHRvbnMgc2V0IHRvIHllcy5cbiAgICogKGlPUykgU2V0IGFzIGEgdmFsaWQgaGV4IGNvbG9yIHN0cmluZywgZm9yIGV4YW1wbGU6ICMwMGZmMDAsIHRvIGNoYW5nZSBmcm9tIHRoZSBkZWZhdWx0IGNvbG9yLiBPbmx5IGFwcGxpY2FibGUgaWYgbmF2aWdhdGlvbiBidXR0b25zIGFyZSB2aXNpYmxlLlxuICAgKi9cbiAgbmF2aWdhdGlvbmJ1dHRvbmNvbG9yPzogc3RyaW5nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8gcGFnZXNoZWV0LCBmb3Jtc2hlZXQgb3IgZnVsbHNjcmVlbiB0byBzZXQgdGhlIHByZXNlbnRhdGlvbiBzdHlsZSAoZGVmYXVsdHMgdG8gZnVsbHNjcmVlbikuICovXG4gIHByZXNlbnRhdGlvbnN0eWxlPzogJ3BhZ2VzaGVldCcgfCAnZm9ybXNoZWV0JyB8ICdmdWxsc2NyZWVuJztcbiAgLyoqIChBbmRyb2lkIE9ubHkpIFNldCB0byB5ZXMgdG8gbWFrZSBJbkFwcEJyb3dzZXIgV2ViVmlldyB0byBwYXVzZS9yZXN1bWUgd2l0aCB0aGUgYXBwIHRvIHN0b3AgYmFja2dyb3VuZCBhdWRpbyAodGhpcyBtYXkgYmUgcmVxdWlyZWQgdG8gYXZvaWQgR29vZ2xlIFBsYXkgaXNzdWVzKSAqL1xuICBzaG91bGRQYXVzZU9uU3VzcGVuZD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHllcyBvciBubyB0byB3YWl0IHVudGlsIGFsbCBuZXcgdmlldyBjb250ZW50IGlzIHJlY2VpdmVkIGJlZm9yZSBiZWluZyByZW5kZXJlZCAoZGVmYXVsdHMgdG8gbm8pLiAqL1xuICBzdXBwcmVzc2VzSW5jcmVtZW50YWxSZW5kZXJpbmc/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gdHVybiB0aGUgdG9vbGJhciBvbiBvciBvZmYgZm9yIHRoZSBJbkFwcEJyb3dzZXIgKGRlZmF1bHRzIHRvIHllcykgKi9cbiAgdG9vbGJhcj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIChBbmRyb2lkKSBTZXQgdG8gYSB2YWxpZCBoZXggY29sb3Igc3RyaW5nLCBmb3IgZXhhbXBsZTogIzAwZmYwMCwgYW5kIGl0IHdpbGwgY2hhbmdlIHRoZSBjb2xvciB0aGUgdG9vbGJhciBmcm9tIGRlZmF1bHQuIE9ubHkgaGFzIGVmZmVjdCBpZiB1c2VyIGhhcyBsb2NhdGlvbiBzZXQgdG8geWVzLlxuICAgKiAoaU9TKSBTZXQgYXMgYSB2YWxpZCBoZXggY29sb3Igc3RyaW5nLCBmb3IgZXhhbXBsZTogIzAwZmYwMCwgdG8gY2hhbmdlIGZyb20gdGhlIGRlZmF1bHQgY29sb3Igb2YgdGhlIHRvb2xiYXIuIE9ubHkgYXBwbGljYWJsZSBpZiB0b29sYmFyIGlzIG5vdCBkaXNhYmxlZC5cbiAgICovXG4gIHRvb2xiYXJjb2xvcj86IHN0cmluZztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHRvcCBvciBib3R0b20gKGRlZmF1bHQgaXMgYm90dG9tKS4gQ2F1c2VzIHRoZSB0b29sYmFyIHRvIGJlIGF0IHRoZSB0b3Agb3IgYm90dG9tIG9mIHRoZSB3aW5kb3cuICovXG4gIHRvb2xiYXJwb3NpdGlvbj86ICd0b3AnIHwgJ2JvdHRvbSc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gbWFrZSB0aGUgdG9vbGJhciB0cmFuc2x1Y2VudChzZW1pLXRyYW5zcGFyZW50KSAoZGVmYXVsdHMgdG8geWVzKS4gT25seSBhcHBsaWNhYmxlIGlmIHRvb2xiYXIgaXMgbm90IGRpc2FibGVkLiAqL1xuICB0b29sYmFydHJhbnNsdWNlbnQ/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byBmbGlwaG9yaXpvbnRhbCwgY3Jvc3NkaXNzb2x2ZSBvciBjb3ZlcnZlcnRpY2FsIHRvIHNldCB0aGUgdHJhbnNpdGlvbiBzdHlsZSAoZGVmYXVsdHMgdG8gY292ZXJ2ZXJ0aWNhbCkuICovXG4gIHRyYW5zaXRpb25zdHlsZT86ICdmbGlwaG9yaXpvbnRhbCcgfCAnY3Jvc3NkaXNzb2x2ZScgfCAnY292ZXJ2ZXJ0aWNhbCc7XG4gIC8qKiAoQW5kcm9pZCBPbmx5KSBTZXRzIHdoZXRoZXIgdGhlIFdlYlZpZXcgc2hvdWxkIGVuYWJsZSBzdXBwb3J0IGZvciB0aGUgXCJ2aWV3cG9ydFwiIEhUTUwgbWV0YSB0YWcgb3Igc2hvdWxkIHVzZSBhIHdpZGUgdmlld3BvcnQuIFdoZW4gdGhlIHZhbHVlIG9mIHRoZSBzZXR0aW5nIGlzIG5vLCB0aGUgbGF5b3V0IHdpZHRoIGlzIGFsd2F5cyBzZXQgdG8gdGhlIHdpZHRoIG9mIHRoZSBXZWJWaWV3IGNvbnRyb2wgaW4gZGV2aWNlLWluZGVwZW5kZW50IChDU1MpIHBpeGVscy4gV2hlbiB0aGUgdmFsdWUgaXMgeWVzIGFuZCB0aGUgcGFnZSBjb250YWlucyB0aGUgdmlld3BvcnQgbWV0YSB0YWcsIHRoZSB2YWx1ZSBvZiB0aGUgd2lkdGggc3BlY2lmaWVkIGluIHRoZSB0YWcgaXMgdXNlZC4gSWYgdGhlIHBhZ2UgZG9lcyBub3QgY29udGFpbiB0aGUgdGFnIG9yIGRvZXMgbm90IHByb3ZpZGUgYSB3aWR0aCwgdGhlbiBhIHdpZGUgdmlld3BvcnQgd2lsbCBiZSB1c2VkLiAoZGVmYXVsdHMgdG8geWVzKS4gKi9cbiAgdXNlV2lkZVZpZXdQb3J0PzogJ3llcycgfCAnbm8nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIHRvIHVzZSBXS1dlYlZpZXcgZW5naW5lIGZvciB0aGUgSW5hcHBCcm93c2VyLiBPbWl0IG9yIHNldCB0byBubyAoZGVmYXVsdCkgdG8gdXNlIFVJV2ViVmlldy4gKi9cbiAgdXNld2t3ZWJ2aWV3PzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIHllcyB0byBzaG93IEFuZHJvaWQgYnJvd3NlcidzIHpvb20gY29udHJvbHMsIHNldCB0byBubyB0byBoaWRlIHRoZW0uIERlZmF1bHQgdmFsdWUgaXMgeWVzLiAqL1xuICB6b29tPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgdHlwZSBJbkFwcEJyb3dzZXJFdmVudFR5cGUgPVxuICB8ICdsb2Fkc3RhcnQnXG4gIHwgJ2xvYWRzdG9wJ1xuICB8ICdsb2FkZXJyb3InXG4gIHwgJ2V4aXQnXG4gIHwgJ2JlZm9yZWxvYWQnXG4gIHwgJ21lc3NhZ2UnXG4gIHwgJ2N1c3RvbXNjaGVtZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5BcHBCcm93c2VyRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIC8qKiB0aGUgZXZlbnQgbmFtZSAqL1xuICB0eXBlOiBzdHJpbmc7XG4gIC8qKiB0aGUgVVJMIHRoYXQgd2FzIGxvYWRlZC4gKi9cbiAgdXJsOiBzdHJpbmc7XG4gIC8qKiB0aGUgZXJyb3IgY29kZSwgb25seSBpbiB0aGUgY2FzZSBvZiBsb2FkZXJyb3IuICovXG4gIGNvZGU6IG51bWJlcjtcbiAgLyoqIHRoZSBlcnJvciBtZXNzYWdlLCBvbmx5IGluIHRoZSBjYXNlIG9mIGxvYWRlcnJvci4gKi9cbiAgbWVzc2FnZTogc3RyaW5nO1xuICAvKiogdGhlIHBvc3RNZXNzYWdlIGRhdGEsIG9ubHkgaW4gdGhlIGNhc2Ugb2YgbWVzc2FnZS4gKi9cbiAgZGF0YTogYW55O1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIEluQXBwQnJvd3Nlck9iamVjdCB7XG4gIHByaXZhdGUgX29iamVjdEluc3RhbmNlOiBhbnk7XG5cbiAgLyoqXG4gICAqIE9wZW5zIGEgVVJMIGluIGEgbmV3IEluQXBwQnJvd3NlciBpbnN0YW5jZSwgdGhlIGN1cnJlbnQgYnJvd3NlciBpbnN0YW5jZSwgb3IgdGhlIHN5c3RlbSBicm93c2VyLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsICAgICBUaGUgVVJMIHRvIGxvYWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGFyZ2V0PVwic2VsZlwiXSAgVGhlIHRhcmdldCBpbiB3aGljaCB0byBsb2FkIHRoZSBVUkwsIGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IGRlZmF1bHRzIHRvIF9zZWxmLlxuICAgKiAgICAgICAgICAgICAgICAgX3NlbGY6IE9wZW5zIGluIHRoZSBXZWJWaWV3IGlmIHRoZSBVUkwgaXMgaW4gdGhlIHdoaXRlIGxpc3QsIG90aGVyd2lzZSBpdCBvcGVucyBpbiB0aGUgSW5BcHBCcm93c2VyLlxuICAgKiAgICAgICAgICAgICAgICAgX2JsYW5rOiBPcGVucyBpbiB0aGUgSW5BcHBCcm93c2VyLlxuICAgKiAgICAgICAgICAgICAgICAgX3N5c3RlbTogT3BlbnMgaW4gdGhlIHN5c3RlbSdzIHdlYiBicm93c2VyLlxuICAgKiBAcGFyYW0ge3N0cmluZyB8IEluQXBwQnJvd3Nlck9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIGZvciB0aGUgSW5BcHBCcm93c2VyLiBPcHRpb25hbCwgZGVmYXVsdGluZyB0bzogbG9jYXRpb249eWVzLlxuICAgKiAgICAgICAgICAgICAgICAgVGhlIG9wdGlvbnMgc3RyaW5nIG11c3Qgbm90IGNvbnRhaW4gYW55IGJsYW5rIHNwYWNlLCBhbmQgZWFjaCBmZWF0dXJlJ3NcbiAgICogICAgICAgICAgICAgICAgIG5hbWUvdmFsdWUgcGFpcnMgbXVzdCBiZSBzZXBhcmF0ZWQgYnkgYSBjb21tYS4gRmVhdHVyZSBuYW1lcyBhcmUgY2FzZSBpbnNlbnNpdGl2ZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nLCB0YXJnZXQ/OiBzdHJpbmcsIG9wdGlvbnM/OiBzdHJpbmcgfCBJbkFwcEJyb3dzZXJPcHRpb25zKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJykge1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucylcbiAgICAgICAgICAubWFwKChrZXk6IHN0cmluZykgPT4gYCR7a2V5fT0keyhvcHRpb25zIGFzIEluQXBwQnJvd3Nlck9wdGlvbnMpW2tleV19YClcbiAgICAgICAgICAuam9pbignLCcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IGNvcmRvdmEuSW5BcHBCcm93c2VyLm9wZW4odXJsLCB0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3aW5kb3cub3Blbih1cmwsIHRhcmdldCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOYXRpdmU6IEluQXBwQnJvd3NlciBpcyBub3QgaW5zdGFsbGVkIG9yIHlvdSBhcmUgcnVubmluZyBvbiBhIGJyb3dzZXIuIEZhbGxpbmcgYmFjayB0byB3aW5kb3cub3Blbi4nXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gYmUgY2FsbGVkIGFmdGVyIHRoZSBcImJlZm9yZWxvYWRcIiBldmVudCB0byBjb250aW51ZSB0aGUgc2NyaXB0XG4gICAqXG4gICAqIEBwYXJhbSBzdHJVcmwge1N0cmluZ30gVGhlIFVSTCB0aGUgSW5BcHBCcm93c2VyIHNob3VsZCBuYXZpZ2F0ZSB0by5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIF9sb2FkQWZ0ZXJCZWZvcmVsb2FkKHN0clVybDogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyBhbiBJbkFwcEJyb3dzZXIgd2luZG93IHRoYXQgd2FzIG9wZW5lZCBoaWRkZW4uIENhbGxpbmcgdGhpcyBoYXMgbm8gZWZmZWN0XG4gICAqIGlmIHRoZSBJbkFwcEJyb3dzZXIgd2FzIGFscmVhZHkgdmlzaWJsZS5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNob3coKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIEluQXBwQnJvd3NlciB3aW5kb3cuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBjbG9zZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEhpZGVzIGFuIEluQXBwQnJvd3NlciB3aW5kb3cgdGhhdCBpcyBjdXJyZW50bHkgc2hvd24uIENhbGxpbmcgdGhpcyBoYXMgbm8gZWZmZWN0XG4gICAqIGlmIHRoZSBJbkFwcEJyb3dzZXIgd2FzIGFscmVhZHkgaGlkZGVuLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgaGlkZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEluamVjdHMgSmF2YVNjcmlwdCBjb2RlIGludG8gdGhlIEluQXBwQnJvd3NlciB3aW5kb3cuXG4gICAqXG4gICAqIEBwYXJhbSBzY3JpcHQge09iamVjdH0gRGV0YWlscyBvZiB0aGUgc2NyaXB0IHRvIHJ1biwgc3BlY2lmeWluZyBlaXRoZXIgYSBmaWxlIG9yIGNvZGUga2V5LlxuICAgKiBAcGFyYW0gc2NyaXB0LmZpbGVcbiAgICogQHBhcmFtIHNjcmlwdC5jb2RlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZXhlY3V0ZVNjcmlwdChzY3JpcHQ6IHsgZmlsZT86IHN0cmluZzsgY29kZT86IHN0cmluZyB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW5qZWN0cyBDU1MgaW50byB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICpcbiAgICogQHBhcmFtIGNzcyB7T2JqZWN0fSBEZXRhaWxzIG9mIHRoZSBzY3JpcHQgdG8gcnVuLCBzcGVjaWZ5aW5nIGVpdGhlciBhIGZpbGUgb3IgY29kZSBrZXkuXG4gICAqIEBwYXJhbSBjc3MuZmlsZVxuICAgKiBAcGFyYW0gY3NzLmNvZGVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBpbnNlcnRDU1MoY3NzOiB7IGZpbGU/OiBzdHJpbmc7IGNvZGU/OiBzdHJpbmcgfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgbWV0aG9kIHRoYXQgYWxsb3dzIHlvdSB0byBsaXN0ZW4gdG8gZXZlbnRzIGhhcHBlbmluZyBpbiB0aGUgYnJvd3Nlci5cbiAgICpcbiAgICogQHBhcmFtIGV2ZW50IHtJbkFwcEJyb3dzZXJFdmVudFR5cGV9IE5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEluQXBwQnJvd3NlckV2ZW50Pn0gUmV0dXJucyBiYWNrIGFuIG9ic2VydmFibGUgdGhhdCB3aWxsIGxpc3RlbiB0byB0aGUgZXZlbnQgb24gc3Vic2NyaWJlLCBhbmQgd2lsbCBzdG9wIGxpc3RlbmluZyB0byB0aGUgZXZlbnQgb24gdW5zdWJzY3JpYmUuXG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIG9uKGV2ZW50OiBJbkFwcEJyb3dzZXJFdmVudFR5cGUpOiBPYnNlcnZhYmxlPEluQXBwQnJvd3NlckV2ZW50PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPEluQXBwQnJvd3NlckV2ZW50Pigob2JzZXJ2ZXI6IE9ic2VydmVyPEluQXBwQnJvd3NlckV2ZW50PikgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKSk7XG4gICAgICByZXR1cm4gKCkgPT4gdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBtZXRob2QgdGhhdCBhbGxvd3MgeW91IHRvIGxpc3RlbiB0byBldmVudHMgaGFwcGVuaW5nIGluIHRoZSBicm93c2VyLlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnQge3N0cmluZ30gTmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHJldHVybnMge09ic2VydmFibGU8SW5BcHBCcm93c2VyRXZlbnQ+fSBSZXR1cm5zIGJhY2sgYW4gb2JzZXJ2YWJsZSB0aGF0IHdpbGwgbGlzdGVuIHRvIHRoZSBldmVudCBvbiBzdWJzY3JpYmUsIGFuZCB3aWxsIHN0b3AgbGlzdGVuaW5nIHRvIHRoZSBldmVudCBvbiB1bnN1YnNjcmliZS5cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgb24oZXZlbnQ6IHN0cmluZyk6IE9ic2VydmFibGU8SW5BcHBCcm93c2VyRXZlbnQ+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8SW5BcHBCcm93c2VyRXZlbnQ+KChvYnNlcnZlcjogT2JzZXJ2ZXI8SW5BcHBCcm93c2VyRXZlbnQ+KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpKTtcbiAgICAgIHJldHVybiAoKSA9PiB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIEluIEFwcCBCcm93c2VyXG4gKiBAcHJlbWllciBpbmFwcGJyb3dzZXJcbiAqIEBkZXNjcmlwdGlvbiBMYXVuY2hlcyBpbiBhcHAgQnJvd3NlclxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJbkFwcEJyb3dzZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvaW4tYXBwLWJyb3dzZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGlhYjogSW5BcHBCcm93c2VyKSB7IH1cbiAqXG4gKlxuICogLi4uXG4gKlxuICpcbiAqIGNvbnN0IGJyb3dzZXIgPSB0aGlzLmlhYi5jcmVhdGUoJ2h0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tLycpO1xuICpcbiAqIGJyb3dzZXIuZXhlY3V0ZVNjcmlwdCguLi4pO1xuICpcbiAqIGJyb3dzZXIuaW5zZXJ0Q1NTKC4uLik7XG4gKiBicm93c2VyLm9uKCdsb2Fkc3RvcCcpLnN1YnNjcmliZShldmVudCA9PiB7XG4gKiAgICBicm93c2VyLmluc2VydENTUyh7IGNvZGU6IFwiYm9keXtjb2xvcjogcmVkO1wiIH0pO1xuICogfSk7XG4gKlxuICogYnJvd3Nlci5jbG9zZSgpO1xuICpcbiAqIGBgYFxuICogQGNsYXNzZXNcbiAqIEluQXBwQnJvd3Nlck9iamVjdFxuICogQGludGVyZmFjZXNcbiAqIEluQXBwQnJvd3NlckV2ZW50XG4gKiBJbkFwcEJyb3dzZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSW5BcHBCcm93c2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW5hcHBicm93c2VyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5JbkFwcEJyb3dzZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXInLFxuICBwbGF0Zm9ybXM6IFsnQW1hem9uRmlyZSBPUycsICdBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ21hY09TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5BcHBCcm93c2VyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogT3BlbnMgYSBVUkwgaW4gYSBuZXcgSW5BcHBCcm93c2VyIGluc3RhbmNlLCB0aGUgY3VycmVudCBicm93c2VyIGluc3RhbmNlLCBvciB0aGUgc3lzdGVtIGJyb3dzZXIuXG4gICAqXG4gICAqIEBwYXJhbSAgdXJsIHtzdHJpbmd9ICAgICBUaGUgVVJMIHRvIGxvYWQuXG4gICAqIEBwYXJhbSAgdGFyZ2V0IHtzdHJpbmd9ICBUaGUgdGFyZ2V0IGluIHdoaWNoIHRvIGxvYWQgdGhlIFVSTCwgYW4gb3B0aW9uYWwgcGFyYW1ldGVyIHRoYXQgZGVmYXVsdHMgdG8gX3NlbGYuXG4gICAqIEBwYXJhbSAgb3B0aW9ucyB7c3RyaW5nfSBPcHRpb25zIGZvciB0aGUgSW5BcHBCcm93c2VyLiBPcHRpb25hbCwgZGVmYXVsdGluZyB0bzogbG9jYXRpb249eWVzLlxuICAgKiAgICAgICAgICAgICAgICAgVGhlIG9wdGlvbnMgc3RyaW5nIG11c3Qgbm90IGNvbnRhaW4gYW55IGJsYW5rIHNwYWNlLCBhbmQgZWFjaCBmZWF0dXJlJ3NcbiAgICogICAgICAgICAgICAgICAgIG5hbWUvdmFsdWUgcGFpcnMgbXVzdCBiZSBzZXBhcmF0ZWQgYnkgYSBjb21tYS4gRmVhdHVyZSBuYW1lcyBhcmUgY2FzZSBpbnNlbnNpdGl2ZS5cbiAgICogQHJldHVybnMge0luQXBwQnJvd3Nlck9iamVjdH1cbiAgICovXG4gIGNyZWF0ZSh1cmw6IHN0cmluZywgdGFyZ2V0Pzogc3RyaW5nLCBvcHRpb25zPzogc3RyaW5nIHwgSW5BcHBCcm93c2VyT3B0aW9ucyk6IEluQXBwQnJvd3Nlck9iamVjdCB7XG4gICAgcmV0dXJuIG5ldyBJbkFwcEJyb3dzZXJPYmplY3QodXJsLCB0YXJnZXQsIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=

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
/* harmony import */ var _awesome_cordova_plugins_in_app_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser */ 42199);









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
        providers: [_awesome_cordova_plugins_in_app_browser__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser]
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
            disallowoverscroll: 'yes',
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