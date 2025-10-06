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
/******/ 		"credits": 0
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
/******/ 	deferredModules.push(["./src/playground/credits/credits.jsx","vendors~addon-settings~credits~editor~embed~fullscreen~headeronly~home~newcompiler~notfound","vendors~credits~editor~embed~fullscreen~headeronly~home~newcompiler","addon-settings~credits~editor~embed~fullscreen~headeronly~home~newcompiler~notfound","credits~headeronly~home~newcompiler"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./src/playground/credits/credits.css":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/css-loader??ref--5-1!/home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/postcss-loader/src??postcss!./src/playground/credits/credits.css ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap);", ""]);

// module
exports.push([module.i, "h2 {\n    text-align: center;\n}\n\n.credits_signature_36KaP {\n    font-size: 1.5em;\n    font-family: \"Caveat\", cursive, sans-serif;\n}\n", ""]);

// exports
exports.locals = {
	"signature": "credits_signature_36KaP"
};

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

/***/ "./src/playground/credits/apple-cat-pleased.svg":
/*!******************************************************!*\
  !*** ./src/playground/credits/apple-cat-pleased.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1OC40Mjg2MiIgaGVpZ2h0PSI2MC4yNTg0IiB2aWV3Qm94PSIwLDAsNTguNDI4NjIsNjAuMjU4NCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxMS4wMTA1OCwtMTUwLjY3NTgyKSI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48Zz48cGF0aCBkPSJNMjY4LjE2NzU4LDE4Mi4yNDEyMWMwLjYwMTU3LDE0LjUxNDU0IC0xMS40MjQ4OCwyNi44MDMxIC0yNi44NjQ2MiwyNy40NDMwMWMtMTUuNDM5NzQsMC42Mzk5MSAtMjguNDQwNjEsLTEwLjYwNjM2IC0yOS4wNDIzOCwtMjUuMTI1OWMtMC40MjYxMywtMTAuMjgxNjUgNS4xOTUzNSwtMzAuNDE4NzkgMTEuMjc3NzQsLTI4LjM1MjM3YzMuNzM4ODksMS4yNzAyNCAxMS4yOTEyNiw2LjEyMzcyIDE1Ljc5NDI1LDUuOTM3MDljNS4yNzEyMSwtMC4yMTg4MSAxMi43MTQwMSwtMTIuMjUwNyAxNy45OTM4OCwtNi42ODM0N2M1Ljk4NjYzLDYuMzEyNDUgMTAuNDQ0OTgsMTcuMjIzNDMgMTAuODQxMTIsMjYuNzgxNjV6IiBmaWxsPSIjZWMxYzJjIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41Ii8+PGcgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAiPjxwYXRoIGQ9Ik0yNDguNjA4NjMsMTY5LjcwMzRjLTMuNTU3NDQsMC4zMjg2IC02Ljk2ODc5LDAuNTYwMDYgLTEwLjUyNDExLDEuMTA4NzZjLTIuMzczODUsMC4zNjY2MiAtNC42NzEwMSwwLjQ4Mjg0IC02LjUxMjE2LC0xLjI0NTRjLTAuNDAwMDMsLTAuMzc4NzYgMC4wNzMzNCwtMS4wNzk5NiAwLjU2NTQ4LC0wLjc5NzFjMS4yMTE2NywwLjY5MTQyIDIuNDE0MDcsMC45NDE4NCAzLjYxMzQ1LDAuOTUwMThjMC4wODA1OCwwLjA2MDcyIDQuMjUwMDQsLTAuNjY2NTcgNi4xMzkyMiwtMS4zNTMzOWMyLjI4MzkzLC0wLjcyNTIgNC41NzQ0MSwtMS4zNDA1OCA2LjkwNjk1LC0wLjY3NTZjMS4xMTUxMywwLjMxODEgMC45Njc2NiwxLjkwMzU2IC0wLjE4ODgyLDIuMDEyNTV6Ii8+PC9nPjxwYXRoIGQ9Ik0yMjEuNjczNjcsMTg0LjAyNzA3YzAuMTQyMDgsMy40MjgwNiAyLjEwNTY1LDYuMTMwMDYgMC4xNzMzMSw2LjIxMDE1Yy0xLjkzMjM0LDAuMDgwMDkgLTMuNjEyMTYsLTIuNjMzNjggLTMuNzU0MjQsLTYuMDYxNzRjLTAuMTQyMDQsLTMuNDI3MDYgMS4zMDc0NiwtNi4yNzA1MiAzLjIzOTgsLTYuMzUwNjFjMS45MzIzNCwtMC4wODAwOSAwLjE5OTEzLDIuNzc2MTQgMC4zNDExMyw2LjIwMjE5eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48L2c+PHBhdGggZD0iTTIzMi4wMDAwNCwxNTMuOTk4NjljMC45OTQ4NiwtMC42NTE3NiAxLjk4NjY1LC0xLjMwNTM5IDIuOTgwNDcsLTEuOTU4MWMwLjc4MDA4LDEuMDk2NjQgMS41NjMwNCwyLjE2NjEzIDIuMjA2NDIsMy4zOTM1NGMyLjM0OTE0LDQuNDcwNTYgMi4wNzMxOSw5LjMwNzEzIDIuMjExMTMsMTQuMTMyNTZjLTAuMzcwOTksMC4xMDQ0NSAtMC45Njk4MywwLjE5MzMzIC0xLjMzNzc3LDAuMjc0NjNjMC4wMDMxOSwtNi4xNTM0MSAtMS42OTE5NSwtMTEuNzIzOTkgLTYuMDYwMjUsLTE1Ljg0MjYzeiIgZmlsbD0iIzk5NjYxZCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMjQ4Ljg1MzI5LDE4Mi4zODFjMC4xNzUzNCw0Ljg5ODI2IC0xLjY1MDI5LC0xLjQ5ODM3IC00LjY4NTI1LC0xLjM1Mjc0Yy0zLjAzNDk2LDAuMTQ1NjQgLTUuNDMwOCw3LjQzNzU4IC01LjYwNjE0LDIuNTM5MzRjLTAuMTc1MzQsLTQuODk4MjYgMS42OTMxNiwtMTAuOTk5MTEgNC43MjgxMiwtMTEuMTQ0NzZjMy4wMzQ5NiwtMC4xNDU2NCA1LjM4Nzk0LDUuMDU5OTEgNS41NjMyNyw5Ljk1ODE3eiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjYzLjUzNDE2LDE4Mi41NzYxNmMwLjE3NTM0LDUuMzA4NzkgLTAuNjIzNzQsLTIuNDQ5OCAtMy42NTg2OSwtMi4yOTE5NmMtMS45NzkwMiwwLjEwMjkzIC0zLjMwMDkxLDEuOTI0NTMgLTMuODU1ODMsMy4yMzU3OGMtMC4yOTYwOSwwLjY5OTY0IC0wLjQ0NSwtMS40MTAzNiAtMC41MDYwMSwtMy4yNTc0MmMtMC4xNzUzNCwtNS4zMDg3OSAtMC45OTQzNiwtOC41ODI3OCAyLjA0MDYxLC04Ljc0MDYyYzMuMDM0OTUsLTAuMTU3ODUgNS41NTQ2LDEuNTEwMjQgNS43Mjk5NCw2LjgxOTAzeiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoyOC45ODk0MTUwMDAwMDAwOTM6MjkuMzI0MTc5MjE2NjI3NTI3LS0+"

/***/ }),

/***/ "./src/playground/credits/credits.css":
/*!********************************************!*\
  !*** ./src/playground/credits/credits.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/postcss-loader/src??postcss!./credits.css */ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./src/playground/credits/credits.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/credits/credits.jsx":
/*!********************************************!*\
  !*** ./src/playground/credits/credits.jsx ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_first__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../import-first */ "./src/playground/import-first.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-target */ "./src/playground/app-target.js");
/* harmony import */ var _info_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../info.css */ "./src/playground/info.css");
/* harmony import */ var _info_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_info_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _credits_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./credits.css */ "./src/playground/credits/credits.css");
/* harmony import */ var _credits_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_credits_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ampmod_branding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ampmod/branding */ "../../node_modules/@ampmod/branding/src/index.js");
/* harmony import */ var _ampmod_branding__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ampmod_branding__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/themes/guiHelpers */ "./src/lib/themes/guiHelpers.js");
/* harmony import */ var _lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/themes/themePersistance */ "./src/lib/themes/themePersistance.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users */ "./src/playground/credits/users.js");
/* harmony import */ var _components_amp_header_header_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/amp-header/header.jsx */ "./src/components/amp-header/header.jsx");
/* harmony import */ var _components_amp_footer_footer_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/amp-footer/footer.jsx */ "./src/components/amp-footer/footer.jsx");
/* harmony import */ var _apple_cat_pleased_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./apple-cat-pleased.svg */ "./src/playground/credits/apple-cat-pleased.svg");
/* harmony import */ var _apple_cat_pleased_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_apple_cat_pleased_svg__WEBPACK_IMPORTED_MODULE_12__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }














/* eslint-disable react/jsx-no-literals */

Object(_lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_7__["applyGuiColors"])(Object(_lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_8__["detectTheme"])());
document.documentElement.lang = "en";
const User = _ref => {
  let {
    image,
    text,
    href
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noreferrer",
    className: _info_css__WEBPACK_IMPORTED_MODULE_4___default.a.user
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    loading: "lazy",
    className: _info_css__WEBPACK_IMPORTED_MODULE_4___default.a.userImage,
    src: image,
    width: "60",
    height: "60"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _info_css__WEBPACK_IMPORTED_MODULE_4___default.a.userInfo
  }, text));
};
User.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
const UserList = _ref2 => {
  let {
    users
  } = _ref2;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _info_css__WEBPACK_IMPORTED_MODULE_4___default.a.users
  }, users.map((data, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(User, _extends({
    key: index
  }, data))));
};
UserList.propTypes = {
  users: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
};
const Credits = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_amp_header_header_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
  className: _info_css__WEBPACK_IMPORTED_MODULE_4___default.a.headerContainer
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
  className: _info_css__WEBPACK_IMPORTED_MODULE_4___default.a.headerText
}, _ampmod_branding__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"], " Credits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: _info_css__WEBPACK_IMPORTED_MODULE_4___default.a.wrap
}, "To start off, we would like to thank the developers of Scratch. Without them, none of this would be possible, and people would be learning complicated text-based programming languages. It grew from a simple tool for kids at the Computer Clubhouse, to the most popular block-based programming language in the world. So truly, thank you."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: _info_css__WEBPACK_IMPORTED_MODULE_4___default.a.spacing
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
  className: _info_css__WEBPACK_IMPORTED_MODULE_4___default.a.main
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", null, "Individual contributors are listed in no particular order. The order is randomized each visit."))), _ampmod_branding__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"] !== "AmpMod" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "AmpMod"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, _ampmod_branding__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"], " is based on the work of the", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://ampmod.codeberg.page/credits.html"
}, "AmpMod contributors"), " ", "but is not endorsed by AmpMod in any way.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "TurboWarp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, _ampmod_branding__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"], " is based on the work of the", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://turbowarp.org/credits.html"
}, "TurboWarp contributors"), " ", "but is not endorsed by TurboWarp in any way.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Scratch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, _ampmod_branding__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"], " is based on the work of the", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://scratch.mit.edu/credits"
}, "Scratch contributors"), " ", "but is not endorsed by Scratch in any way."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://scratch.mit.edu/donate"
}, "Donate to support TurboWarp and Scratch."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Other Scratch Mods"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, _ampmod_branding__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"], " uses code from other open-source Scratch modifications but is not endorsed by any them in any way."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("details", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("summary", null, "Modifications AmpMod is based on"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://librekitten.org"
}, "LibreKitten"), " ", "(home page header)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Favicon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "The AmpMod favicon is from the", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://gh.vercte.net/forumoji/"
}, "Forumoji"), " ", "project by", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://https://scratch.mit.edu/users/lolecksdeehaha/"
}, "lolecksdeehaha"), ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Contributors"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_9__["default"].ubContributors
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "TurboWarp Contributors"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_9__["default"].contributors
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Addons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_9__["default"].addonDevelopers
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "TurboWarp Extension Gallery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_9__["default"].extensionDevelopers
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Translators"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Unfortunately, AmpMod's only three developers only speak English. We are working on a way for you to translate AmpMod. While we set it up, you can register an account on", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://translate.codeberg.org/"
}, "Codeberg Weblate"), " ", "and stay tuned.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Fonts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "The AmpMod logo uses the", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://fonts.google.com/specimen/Pixelify+Sans"
}, "Pixelify Sans"), " ", "font. It is licenced under the", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://fonts.google.com/specimen/Pixelify+Sans/license"
}, "SIL Open Font License"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Pixelify Sans is also available in the editor as the \"Amplification\" font."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "The Apple Cat signature below uses the", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://fonts.google.com/specimen/Caveat+Brush"
}, "Caveat Brush"), " ", "font under the same licence.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Art"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Some images use content from", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://openclipart.org"
}, "Openclipart"), ", licensed under the CC0 license. Even though the images are public domain, we would still like to attribute.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "You"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Most importantly, thank you for using ", _ampmod_branding__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"], ", or at least trying it out. You're awesome!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  src: _apple_cat_pleased_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
  width: "64",
  height: "64"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_5___default.a.signature
}, "-Apple Cat")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_amp_footer_footer_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], null)));
Object(_app_target__WEBPACK_IMPORTED_MODULE_3__["default"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Credits, null));

/***/ }),

/***/ "./src/playground/credits/users.js":
/*!*****************************************!*\
  !*** ./src/playground/credits/users.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const shuffle = list => {
  for (let i = list.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    const tmp = list[i];
    list[i] = list[random];
    list[random] = tmp;
  }
  return list;
};
const fromHardcoded = _ref => {
  let {
    userID = "0",
    username
  } = _ref;
  const result = {
    image: "https://trampoline.turbowarp.org/avatars/".concat(userID),
    text: username
  };
  if (username && userID !== "0") {
    result.href = "https://scratch.mit.edu/users/".concat(username, "/");
  }
  return result;
};

// The lists below are in no particular order.

const contributors = [{
  userID: "41219524",
  username: "CubesterYT"
}, {
  userID: "64691048",
  username: "CST1229"
}, {
  userID: "128887584",
  username: "FurryR"
}, {
  userID: "17340565",
  username: "GarboMuffin"
}, {
  userID: "12498592",
  username: "LilyMakesThings"
}, {
  userID: "105362329",
  username: "TrueFantom"
}, {
  userID: "9636514",
  username: "Tacodiva7729"
}, {
  userID: "141930175",
  username: "SimonShiki"
}, {
  userID: "34824813",
  username: "Geotale"
}, {
  username: "Wowfunhappy"
}].map(fromHardcoded);
const addonDevelopers = [{
  userID: "34018398",
  username: "Jeffalo"
}, {
  userID: "64184234",
  username: "ErrorGamer2000"
}, {
  userID: "41616512",
  username: "pufferfish101007"
}, {
  userID: "61409215",
  username: "TheColaber"
}, {
  userID: "1882674",
  username: "griffpatch"
}, {
  userID: "10817178",
  username: "apple502j"
}, {
  userID: "16947341",
  username: "--Explosion--"
}, {
  userID: "14880401",
  username: "Sheep_maker"
}, {
  userID: "9981676",
  username: "NitroCipher"
}, {
  userID: "2561680",
  username: "lisa_wolfgang"
}, {
  userID: "60000111",
  username: "GDUcrash"
}, {
  userID: "4648559",
  username: "World_Languages"
}, {
  userID: "17340565",
  username: "GarboMuffin"
}, {
  userID: "5354974",
  username: "Chrome_Cat"
}, {
  userID: "34455896",
  username: "summerscar"
}, {
  userID: "55742784",
  username: "RedGuy7"
}, {
  userID: "9636514",
  username: "Tacodiva7729"
}, {
  userID: "14792872",
  username: "_nix"
}, {
  userID: "30323614",
  username: "BarelySmooth"
}, {
  userID: "64691048",
  username: "CST1229"
}, {
  username: "DNin01"
}, {
  userID: "16426047",
  username: "Maximouse"
}, {
  username: "retronbv"
}, {
  username: "GrahamSH"
}, {
  userID: "22529928",
  username: "simiagain"
}, {
  username: "Secret-chest"
}, {
  userID: "11677378",
  username: "Mr_MPH"
}, {
  username: "TheKodeToad"
}].map(fromHardcoded);

// generated by TurboWarp/extensions/scripts/get-credits-for-gui.js
const extensionDevelopers = [{
  username: "-SIPC-"
}, {
  username: "0832"
}, {
  userID: "74246431",
  username: "0znzw"
}, {
  userID: "17235330",
  username: "aleb2005"
}, {
  username: "BlueDome77"
}, {
  username: "ClaytonTDM"
}, {
  userID: "37070511",
  username: "cs2627883"
}, {
  userID: "64691048",
  username: "CST1229"
}, {
  userID: "41219524",
  username: "CubesterYT"
}, {
  userID: "33988895",
  username: "D-ScratchNinja"
}, {
  username: "DT"
}, {
  userID: "1882674",
  username: "griffpatch"
}, {
  userID: "41876695",
  username: "JeremyGamer13"
}, {
  userID: "12498592",
  username: "LilyMakesThings"
}, {
  username: "MikeDEV"
}, {
  userID: "62325737",
  username: "mybearworld"
}, {
  userID: "62950341",
  username: "NamelessCat"
}, {
  username: "NOname-awa"
}, {
  userID: "26959223",
  username: "pinksheep2917"
}, {
  username: "pumpkinhasapatch"
}, {
  userID: "126715567",
  username: "PwLDev"
}, {
  userID: "139929771",
  username: "qxsck"
}, {
  userID: "29118689",
  username: "RedMan13"
}, {
  userID: "80038021",
  username: "RixTheTyrunt"
}, {
  userID: "45777723",
  username: "DemonX5"
}, {
  userID: "14880401",
  username: "Sheep_maker"
}, {
  userID: "103496265",
  username: "shreder95ua"
}, {
  userID: "72467731",
  username: "Skyhigh173"
}, {
  userID: "52066199",
  username: "softed"
}, {
  username: "TheShovel"
}, {
  userID: "105362329",
  username: "TrueFantom"
}, {
  userID: "19133274",
  username: "Vadik1"
}, {
  username: "veggiecan0419"
}, {
  userID: "82486672",
  username: "lolecksdeehaha"
}, {
  userID: "3318598",
  username: "plant2014"
}, {
  userID: "128778351",
  username: "XmerOriginals"
}, {
  username: "ZXMushroom63"
}].map(fromHardcoded);
const docs = [{
  userID: "12498592",
  username: "LilyMakesThings"
}, {
  username: "DNin01"
}, {
  username: "Samq64"
}, {
  username: "61080GBA"
}, {
  username: "adazem009"
}, {
  username: "sajtosteszta32"
}, {
  username: "yoyomonem"
}, {
  userID: "55742784",
  username: "RedGuy7"
}, {
  username: "28klotlucas2"
}, {
  username: "PPPDUD"
}, {
  username: "BackThePortal"
}, {
  username: "Naleksuh"
}].map(fromHardcoded);
const ubContributors = [{
  userID: "149550011",
  username: "AmpElectrecuted"
}, {
  userID: "82953483",
  username: "50_scratch_tabs"
}, {
  userID: "38055575",
  username: "o97doge"
}].map(fromHardcoded);
/* harmony default export */ __webpack_exports__["default"] = ({
  contributors: shuffle(contributors),
  addonDevelopers: shuffle(addonDevelopers),
  extensionDevelopers: shuffle(extensionDevelopers),
  docs: shuffle(docs),
  ubContributors: shuffle(ubContributors)
});

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

/***/ })

/******/ });
//# sourceMappingURL=credits.js.map