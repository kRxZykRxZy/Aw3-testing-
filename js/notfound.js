/*!
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
/*!
 * AmpMod uses multiple licenses.
 * For detailed information, see:
 * https://codeberg.org/ampmod/ampmod/src/branch/develop/LICENSE.md
 * 
 * Source code (open source!): https://codeberg.org/ampmod/ampmod
 */
var GUI =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"notfound": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/playground/not-found/not-found.jsx","vendors~addon-settings~credits~editor~embed~fullscreen~headeronly~home~newcompiler~notfound","addon-settings~credits~editor~embed~fullscreen~headeronly~home~newcompiler~notfound"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@fontsource-variable/inter/files/inter-cyrillic-ext-wght-normal.woff2":
/*!**************************************************************************************************************************************!*\
  !*** /home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/@fontsource-variable/inter/files/inter-cyrillic-ext-wght-normal.woff2 ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/b5cdd4765614e027c252bcbea138906e.woff2";

/***/ }),

/***/ "../../node_modules/@fontsource-variable/inter/files/inter-cyrillic-wght-normal.woff2":
/*!**********************************************************************************************************************************!*\
  !*** /home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/@fontsource-variable/inter/files/inter-cyrillic-wght-normal.woff2 ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/49594fb515ba00213fc368d045955212.woff2";

/***/ }),

/***/ "../../node_modules/@fontsource-variable/inter/files/inter-greek-ext-wght-normal.woff2":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/@fontsource-variable/inter/files/inter-greek-ext-wght-normal.woff2 ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/f4df85d151e5ee39bc2b933a6e4d184b.woff2";

/***/ }),

/***/ "../../node_modules/@fontsource-variable/inter/files/inter-greek-wght-normal.woff2":
/*!*******************************************************************************************************************************!*\
  !*** /home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/@fontsource-variable/inter/files/inter-greek-wght-normal.woff2 ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/4f908aee8194b11d9c35e80cb4580935.woff2";

/***/ }),

/***/ "../../node_modules/@fontsource-variable/inter/files/inter-latin-ext-wght-normal.woff2":
/*!***********************************************************************************************************************************!*\
  !*** /home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/@fontsource-variable/inter/files/inter-latin-ext-wght-normal.woff2 ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/8bff79fbfaa8b8167a0bbeb807c5a831.woff2";

/***/ }),

/***/ "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2":
/*!*******************************************************************************************************************************!*\
  !*** /home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2 ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/4f2981d82860061bca3ecb967a2cd084.woff2";

/***/ }),

/***/ "../../node_modules/@fontsource-variable/inter/files/inter-vietnamese-wght-normal.woff2":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/@fontsource-variable/inter/files/inter-vietnamese-wght-normal.woff2 ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/ab4bb8dcda024fe6eff2d6f0548a8e65.woff2";

/***/ }),

/***/ "../../node_modules/@fontsource-variable/inter/index.css":
/*!*****************************************************************************************************!*\
  !*** /home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/@fontsource-variable/inter/index.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--5-1!../../postcss-loader/src??postcss!./index.css */ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/@fontsource-variable/inter/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!../../node_modules/@fontsource-variable/inter/index.css":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/css-loader??ref--5-1!/home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/postcss-loader/src??postcss!/home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/@fontsource-variable/inter/index.css ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../css-loader/lib/url/escape.js */ "../../node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* inter-cyrillic-ext-wght-normal */\n@font-face {\n  font-family: 'Inter Variable';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 100 900;\n  src: url(" + escape(__webpack_require__(/*! ./files/inter-cyrillic-ext-wght-normal.woff2 */ "../../node_modules/@fontsource-variable/inter/files/inter-cyrillic-ext-wght-normal.woff2")) + ") format('woff2-variations');\n  unicode-range: U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;\n}\n/* inter-cyrillic-wght-normal */\n@font-face {\n  font-family: 'Inter Variable';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 100 900;\n  src: url(" + escape(__webpack_require__(/*! ./files/inter-cyrillic-wght-normal.woff2 */ "../../node_modules/@fontsource-variable/inter/files/inter-cyrillic-wght-normal.woff2")) + ") format('woff2-variations');\n  unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;\n}\n/* inter-greek-ext-wght-normal */\n@font-face {\n  font-family: 'Inter Variable';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 100 900;\n  src: url(" + escape(__webpack_require__(/*! ./files/inter-greek-ext-wght-normal.woff2 */ "../../node_modules/@fontsource-variable/inter/files/inter-greek-ext-wght-normal.woff2")) + ") format('woff2-variations');\n  unicode-range: U+1F00-1FFF;\n}\n/* inter-greek-wght-normal */\n@font-face {\n  font-family: 'Inter Variable';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 100 900;\n  src: url(" + escape(__webpack_require__(/*! ./files/inter-greek-wght-normal.woff2 */ "../../node_modules/@fontsource-variable/inter/files/inter-greek-wght-normal.woff2")) + ") format('woff2-variations');\n  unicode-range: U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF;\n}\n/* inter-vietnamese-wght-normal */\n@font-face {\n  font-family: 'Inter Variable';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 100 900;\n  src: url(" + escape(__webpack_require__(/*! ./files/inter-vietnamese-wght-normal.woff2 */ "../../node_modules/@fontsource-variable/inter/files/inter-vietnamese-wght-normal.woff2")) + ") format('woff2-variations');\n  unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;\n}\n/* inter-latin-ext-wght-normal */\n@font-face {\n  font-family: 'Inter Variable';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 100 900;\n  src: url(" + escape(__webpack_require__(/*! ./files/inter-latin-ext-wght-normal.woff2 */ "../../node_modules/@fontsource-variable/inter/files/inter-latin-ext-wght-normal.woff2")) + ") format('woff2-variations');\n  unicode-range: U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;\n}\n/* inter-latin-wght-normal */\n@font-face {\n  font-family: 'Inter Variable';\n  font-style: normal;\n  font-display: swap;\n  font-weight: 100 900;\n  src: url(" + escape(__webpack_require__(/*! ./files/inter-latin-wght-normal.woff2 */ "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2")) + ") format('woff2-variations');\n  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;\n}", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./src/playground/info.css":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/css-loader??ref--5-1!/home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/postcss-loader/src??postcss!./src/playground/info.css ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\n\n/* make sure to keep these in sync with other constants,\ne.g. STAGE_DIMENSION_DEFAULTS in lib/screen-utils.js */\n\n/* layout contants from `layout-constants.js` */\n\n* {\n    box-sizing: border-box;\n    font-family:\n        \"Inter Variable\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\ncode {\n    font-family: \"Ubuntu Mono\", monospace;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background: var(--page-background);\n    color: var(--page-foreground);\n}\n\na {\n    color: var(--link-color);\n}\n\n.info_main_3TiIf section,\n.info_wrap_2jJcB {\n    max-width: 900px;\n    margin: auto;\n}\n\n.info_header-container_3aisy {\n    color: white;\n    background-color: var(--motion-tertiary);\n    padding: 14px 0;\n    text-align: center;\n}\n\n.info_header-container-alt-colour_wwbLb {\n    background-color: var(--looks-secondary);\n}\n\n.info_users_pCeo6 {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n\n.info_user-image_ZMSKJ {\n    margin-right: 12px;\n}\n\n.info_user_18PUg {\n    display: flex;\n    align-items: center;\n    width: 300px;\n    padding: 4px;\n    border-radius: 4px;\n    font-size: 1.25rem;\n    color: inherit !important;\n    text-decoration: none;\n    transition: background 0.2s;\n}\n\n.info_user_18PUg:link:hover {\n    background: var(--ui-black-transparent);\n}\n\n.info_spacing_1HU0n {\n    margin-bottom: 12px;\n}\n", ""]);

// exports
exports.locals = {
	"main": "info_main_3TiIf",
	"wrap": "info_wrap_2jJcB",
	"header-container": "info_header-container_3aisy",
	"headerContainer": "info_header-container_3aisy",
	"header-container-alt-colour": "info_header-container-alt-colour_wwbLb",
	"headerContainerAltColour": "info_header-container-alt-colour_wwbLb",
	"users": "info_users_pCeo6",
	"user-image": "info_user-image_ZMSKJ",
	"userImage": "info_user-image_ZMSKJ",
	"user": "info_user_18PUg",
	"spacing": "info_spacing_1HU0n"
};

/***/ }),

/***/ "./src/lib/tw-polyfill.js":
/*!********************************!*\
  !*** ./src/lib/tw-polyfill.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable no-extend-native */

if (!Blob.prototype.text) {
  Blob.prototype.text = function () {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => resolve(fr.result);
      fr.onerror = () => reject(new Error("Cannot read blob as text"));
      fr.readAsText(this);
    });
  };
}
if (!Array.prototype.flat) {
  Array.prototype.flat = function () {
    let depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    const result = [];
    for (const i of this) {
      if (Array.isArray(i)) {
        if (depth < 1) {
          result.push(i);
        } else {
          for (const j of i.flat(depth - 1)) {
            result.push(j);
          }
        }
      } else {
        result.push(i);
      }
    }
    return result;
  };
}
if (!Array.prototype.flatMap) {
  Array.prototype.flatMap = function () {
    return this.map(...arguments).flat();
  };
}
if (typeof queueMicrotask !== "function") {
  window.queueMicrotask = callback => {
    Promise.resolve().then(callback);
  };
}
if (!Object.fromEntries) {
  Object.fromEntries = function (entries) {
    const object = {};
    for (const entry of entries) {
      object[entry[0]] = entry[1];
    }
    return object;
  };
}

/***/ }),

/***/ "./src/playground/import-first.js":
/*!****************************************!*\
  !*** ./src/playground/import-first.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-path */ "./src/playground/public-path.js");
/* harmony import */ var _public_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_tw_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/tw-polyfill */ "./src/lib/tw-polyfill.js");
/* harmony import */ var _lib_tw_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_tw_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modern_normalize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modern-normalize */ "../../node_modules/modern-normalize/modern-normalize.css");
/* harmony import */ var modern_normalize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(modern_normalize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fontsource_variable_inter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fontsource-variable/inter */ "../../node_modules/@fontsource-variable/inter/index.css");
/* harmony import */ var _fontsource_variable_inter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fontsource_variable_inter__WEBPACK_IMPORTED_MODULE_3__);


 // amp: Use a better normalize stylesheet for modern browsers
 //amp: Use a different font

/***/ }),

/***/ "./src/playground/info.css":
/*!*********************************!*\
  !*** ./src/playground/info.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--5-1!../../../../node_modules/postcss-loader/src??postcss!./info.css */ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./src/playground/info.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/not-found/not-found.jsx":
/*!************************************************!*\
  !*** ./src/playground/not-found/not-found.jsx ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_first__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../import-first */ "./src/playground/import-first.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-target */ "./src/playground/app-target.js");
/* harmony import */ var _info_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../info.css */ "./src/playground/info.css");
/* harmony import */ var _info_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_info_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bowser */ "../../node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ampmod_branding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ampmod/branding */ "../../node_modules/@ampmod/branding/src/index.js");
/* harmony import */ var _ampmod_branding__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ampmod_branding__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/themes/guiHelpers */ "./src/lib/themes/guiHelpers.js");
/* harmony import */ var _lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/themes/themePersistance */ "./src/lib/themes/themePersistance.js");









/* eslint-disable react/jsx-no-literals */

Object(_lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_6__["applyGuiColors"])(Object(_lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_7__["detectTheme"])());
document.documentElement.lang = "en";
const Home = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
  className: "".concat(_info_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerContainer, " ").concat(_info_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerContainerAltColour)
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
  className: _info_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerText
}, "404 Not Found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: _info_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerText
}, "Sorry, this page doesn't appear to exist.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
  className: _info_css__WEBPACK_IMPORTED_MODULE_3___default.a.main
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Are you looking for the", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "editor"
}, _ampmod_branding__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"], " editor"), " or", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "player"
}, "player"), "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "If you have any questions or concerns, you can post on the", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: _ampmod_branding__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"]
}, "forums"), "."))));
Object(_app_target__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Home, null));

/***/ }),

/***/ "./src/playground/public-path.js":
/*!***************************************!*\
  !*** ./src/playground/public-path.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
if (false) {}

/***/ })

/******/ });
//# sourceMappingURL=notfound.js.map