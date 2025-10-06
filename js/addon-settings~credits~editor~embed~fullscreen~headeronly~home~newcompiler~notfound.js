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
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-settings~credits~editor~embed~fullscreen~headeronly~home~newcompiler~notfound"],{

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./src/lib/themes/global-styles.css":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/css-loader??ref--5-1!/home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/postcss-loader/src??postcss!./src/lib/themes/global-styles.css ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\n\n/* This is for overriding some styles that don't really \"belong\" to any existing stylesheets */\n\n/* Try to use this sparingly, otherwise this will become unmaintainable again... */\n\n:root {\n    color-scheme: var(--color-scheme);\n}\n\n/* popover is used by gui and paint */\n\n/* some of these are duplicated over there too; !important makes sure these win */\n\n.Popover {\n    color-scheme: light !important;\n}\n\n.Popover-body {\n    color: var(--text-primary) !important;\n    background: var(--popover-background) !important;\n    border: 1px solid var(--ui-black-transparent) !important;\n    box-shadow: 0px 0px 8px 1px var(--shadow) !important;\n}\n\n.Popover-tipShape {\n    fill: var(--popover-background) !important;\n    stroke: var(--ui-black-transparent) !important;\n}\n\n/* ScratchAdddons editor-dark-mode compatibility */\n\n:root {\n    --editorDarkMode-primary: var(--looks-secondary);\n    --editorDarkMode-primary-transparent35: var(--looks-transparent);\n    --editorDarkMode-primary-variant: var(--looks-secondary-dark);\n    --editorDarkMode-border: var(--ui-black-transparent);\n    --editorDarkMode-accent: var(--ui-modal-background);\n    --editorDarkMode-categoryMenu-text: var(--text-primary);\n    --editorDarkMode-accent-text: var(--text-primary);\n    --editorDarkMode-page: var(--ui-primary);\n    --editorDarkMode-highlightText: var(--looks-secondary);\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/addons/hooks.js":
/*!*****************************!*\
  !*** ./src/addons/hooks.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const AddonHooks = {
  appStateReducer: () => {},
  appStateStore: null,
  blockly: null,
  blocklyWorkspace: null,
  blocklyCallbacks: [],
  recolorCallbacks: []
};
/* harmony default export */ __webpack_exports__["default"] = (AddonHooks);

/***/ }),

/***/ "./src/lib/themes/accent/blue.js":
/*!***************************************!*\
  !*** ./src/lib/themes/accent/blue.js ***!
  \***************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  "looks-secondary": "hsla(215, 100%, 65%, 1)",
  "looks-transparent": "hsla(215, 100%, 65%, 0.35)",
  "looks-light-transparent": "hsla(215, 100%, 65%, 0.15)",
  "looks-secondary-dark": "hsla(215, 60%, 50%, 1)"
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/accent/green.js":
/*!****************************************!*\
  !*** ./src/lib/themes/accent/green.js ***!
  \****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  "motion-primary": "#59C059",
  "motion-primary-transparent": "#59C059e6",
  "motion-tertiary": "#389438",
  "looks-secondary": "#59C059",
  "looks-transparent": "#59C05959",
  "looks-light-transparent": "#59C05926",
  "looks-secondary-dark": "hsla(120, 42%, 51%, 1)",
  "extensions-primary": "#389438",
  "extensions-tertiary": "#2e742e",
  "extensions-transparent": "hsla(120, 100%, 30%, 0.35)",
  "drop-highlight": "#66bb6a",
  "menu-bar-background-image-classic": "none",
  "menu-bar-background-image-modern": "none"
};
const blockColors = {
  checkboxActiveBackground: "#59C059",
  checkboxActiveBorder: "#389438"
};


/***/ }),

/***/ "./src/lib/themes/accent/grey.js":
/*!***************************************!*\
  !*** ./src/lib/themes/accent/grey.js ***!
  \***************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  "motion-primary": "#acacaf",
  "motion-primary-transparent": "#2e2e2ee6",
  "motion-tertiary": "#222222",
  "looks-secondary": "#7e7e7e",
  "looks-transparent": "#aeaeae66",
  "looks-light-transparent": "#7e7e7e22",
  "looks-secondary-dark": "#333333",
  "extensions-primary": "#3e3e3e",
  "extensions-tertiary": "#333333",
  "extensions-transparent": "#7e7e7e22",
  "extensions-light": "#7e7e7e",
  "drop-highlight": "#66bb6a",
  "menu-bar-background": "#333333",
  "ui-modal-header-background": "#333333",
  "menu-bar-hover": "#ffffff26"
};
const blockColors = {
  checkboxActiveBackground: "#6e6e6e",
  checkboxActiveBorder: "#5c5c5c"
};


/***/ }),

/***/ "./src/lib/themes/accent/purple.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/accent/purple.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  "motion-primary": "hsla(260, 60%, 60%, 1)",
  "motion-primary-transparent": "hsla(260, 60%, 60%, 0.9)",
  "motion-tertiary": "hsla(260, 42%, 51%, 1)",
  "looks-secondary": "hsla(260, 60%, 60%, 1)",
  "looks-transparent": "hsla(260, 60%, 60%, 0.35)",
  "looks-light-transparent": "hsla(260, 60%, 60%, 0.15)",
  "looks-secondary-dark": "hsla(260, 42%, 51%, 1)"
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/accent/rainbow.js":
/*!******************************************!*\
  !*** ./src/lib/themes/accent/rainbow.js ***!
  \******************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony import */ var _green__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./green */ "./src/lib/themes/accent/green.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const guiColors = _objectSpread(_objectSpread({}, _green__WEBPACK_IMPORTED_MODULE_0__["guiColors"]), {}, {
  "menu-bar-background-image-classic":
  // eslint-disable-next-line max-len
  "linear-gradient(90deg, rgba(255, 0, 0, 0.75) 0%, rgba(255, 154, 0, 0.75) 10%, rgba(208, 222, 33, 0.75) 20%, rgba(79, 220, 74, 0.75) 30%, rgba(63, 218, 216, 0.75) 40%, rgba(47, 201, 226, 0.75) 50%, rgba(28, 127, 238, 0.75) 60%, rgba(95, 21, 242, 0.75) 70%, rgba(186, 12, 248, 0.75) 80%, rgba(251, 7, 217, 0.75) 90%, rgba(255, 0, 0, 0.75) 100%)",
  "menu-bar-background-image-modern":
  // eslint-disable-next-line max-len
  "linear-gradient(90deg, rgba(255,0,0,0.35) 0%, rgba(255,154,0,0.35) 10%, rgba(208,222,33,0.35) 20%, rgba(79,220,74,0.35) 30%, rgba(63,218,216,0.35) 40%, rgba(47,201,226,0.35) 50%, rgba(28,127,238,0.35) 60%, rgba(95,21,242,0.35) 70%, rgba(186,12,248,0.35) 80%, rgba(251,7,217,0.35) 90%, rgba(255,0,0,0.35) 100%)"
});
const blockColors = {
  checkboxActiveBackground: "#ff4c4c",
  checkboxActiveBorder: "#cc3333"
};


/***/ }),

/***/ "./src/lib/themes/accent/red.js":
/*!**************************************!*\
  !*** ./src/lib/themes/accent/red.js ***!
  \**************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  "motion-primary": "#ff4c4c",
  "motion-primary-transparent": "#ff4c4ce6",
  "motion-tertiary": "#cc3333",
  "looks-secondary": "#ff4c4c",
  "looks-transparent": "#ff4d4d59",
  "looks-light-transparent": "#ff4d4d26",
  "looks-secondary-dark": "hsla(0, 42%, 51%, 1)",
  "extensions-primary": "hsla(10, 85%, 65%, 1)",
  "extensions-tertiary": "hsla(10, 85%, 40%, 1)",
  "extensions-transparent": "hsla(10, 85%, 65%, 0.35)",
  "extensions-light": "hsla(10, 57%, 85%, 1)",
  "drop-highlight": "#ff8c8c"
};
const blockColors = {
  checkboxActiveBackground: "#ff4c4c",
  checkboxActiveBorder: "#cc3333"
};


/***/ }),

/***/ "./src/lib/themes/blocks/dark.js":
/*!***************************************!*\
  !*** ./src/lib/themes/blocks/dark.js ***!
  \***************************************/
/*! exports provided: blockColors, extensions, customExtensionColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customExtensionColors", function() { return customExtensionColors; });
/* harmony import */ var _tw_color_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tw-color-utils */ "./src/lib/tw-color-utils.js");

const blockColors = {
  motion: {
    primary: "#0F1E33",
    secondary: "#4C4C4C",
    tertiary: "#4C97FF",
    quaternary: "#4C97FF"
  },
  looks: {
    primary: "#1E1433",
    secondary: "#4C4C4C",
    tertiary: "#9966FF",
    quaternary: "#9966FF"
  },
  sounds: {
    primary: "#291329",
    secondary: "#4C4C4C",
    tertiary: "#CF63CF",
    quaternary: "#CF63CF"
  },
  control: {
    primary: "#332205",
    secondary: "#4C4C4C",
    tertiary: "#FFAB19",
    quaternary: "#FFAB19"
  },
  event: {
    primary: "#332600",
    secondary: "#4C4C4C",
    tertiary: "#FFBF00",
    quaternary: "#FFBF00"
  },
  sensing: {
    primary: "#12232A",
    secondary: "#4C4C4C",
    tertiary: "#5CB1D6",
    quaternary: "#5CB1D6"
  },
  pen: {
    primary: "#03251C",
    secondary: "#4C4C4C",
    tertiary: "#0fBD8C",
    quaternary: "#0fBD8C"
  },
  operators: {
    primary: "#112611",
    secondary: "#4C4C4C",
    tertiary: "#59C059",
    quaternary: "#59C059"
  },
  data: {
    primary: "#331C05",
    secondary: "#4C4C4C",
    tertiary: "#FF8C1A",
    quaternary: "#FF8C1A"
  },
  data_lists: {
    primary: "#331405",
    secondary: "#4C4C4C",
    tertiary: "#FF661A",
    quaternary: "#FF661A"
  },
  more: {
    primary: "#331419",
    secondary: "#4C4C4C",
    tertiary: "#FF6680",
    quaternary: "#FF6680"
  },
  addons: {
    primary: "#0b3331",
    secondary: "#4C4C4C",
    tertiary: "#34e4d0",
    quaternary: "#34e4d0"
  },
  text: "rgba(255, 255, 255, .7)",
  textFieldText: "#E5E5E5",
  textField: "#4C4C4C",
  menuHover: "rgba(255, 255, 255, 0.3)"
};
const extensions = {};
const customExtensionColors = {
  primary: _primary => {
    const hsv = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_0__["hex2hsv"])(_primary);
    hsv[2] = Math.max(hsv[2] - 70, 20);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_0__["hsv2hex"])(hsv);
  },
  secondary: () => "#4C4C4C",
  tertiary: primary => primary,
  quaternary: primary => primary,
  categoryIconBackground: primary => customExtensionColors.primary(primary),
  categoryIconBorder: primary => customExtensionColors.tertiary(primary)
};


/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg":
/*!****************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjQzMzggMzBDMjkuNTEzIDMwIDMxLjYzNjYgMjguMTU2OSAzMS4xNzkgMjUuODc0QzI4LjI5OTQgMTMuMDQzNiAyNy40MjU2IDkuODUxMzQgMjcuOTQ1NCA5LjYwNTQ3QzI4LjMxMjUgOS40MzE4MyAyOS4zNzQ2IDEwLjcyNzYgMzAuOTE2MiAxMS4xMzU5QzM0LjY0MTYgMTIuMTEyNiA0MC4yNzQyIDYuNDA3NTEgMzQuNTY1NSA3LjI5MTg2QzMyLjMyMjQgNy42MzkgMzAuMTU4NyA2LjIzODM2IDI4LjQ4NzkgNS4xNTY3OUMyNS45MDcyIDMuNDg2MiAyNC41MDI0IDIuNTc2ODQgMjUuNzk3NCAxMC4wNDUxQzI2LjQzNDkgMTMuNzAzNSAyNi45Njk3IDE2LjMyMzEgMjcuMzQ3NSAxOC4xNzM5QzI3Ljk5NTcgMjEuMzQ5NCAyOC4xODE5IDIyLjI2MTYgMjcuNjMyNSAyMi4yNzQxQzI3LjMzMjEgMjIuMTUyIDI3LjAzMjcgMjIuMDU3OCAyNi42OTU3IDIxLjk3MjRDMjYuMDg4IDIxLjgyMjUgMjUuNDUxNiAyMS43MzgyIDI0LjgwNTMgMjEuNzM4MkMyMS43MjcxIDIxLjczODIgMTkuNjAzNiAyMy41ODkyIDIwLjA2MjEgMjUuODc0QzIwLjUxMDcgMjguMTU2OSAyMy4zNjQ2IDMwIDI2LjQzMzggMzBaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOS40Mzg2MSAzNi4wMDAxQzEyLjUwNjUgMzYuMDAwMSAxNC42MzAyIDM0LjE0OCAxNC4xODE3IDMxLjg2NDJDMTEuMzAzMiAxOS4wMzM2IDEwLjQyOTkgMTUuODQxNiAxMC45NDk2IDE1LjU5NThDMTEuMzE2NiAxNS40MjIyIDEyLjM3ODMgMTYuNzE3NyAxMy45MTkgMTcuMTI2QzE3LjY0MjggMTguMTEzNiAyMy4yNzI5IDEyLjM5ODUgMTcuNTY2NyAxMy4yOTE4QzE1LjMyNDggMTMuNjM4NiAxMy4xNjIzIDEyLjIzODIgMTEuNDkyMiAxMS4xNTY5QzguOTEyMzcgOS40ODYzNiA3LjUwNzk3IDguNTc2OTggOC44MDI1MSAxNi4wNDUxQzkuNDQyOTQgMTkuNzI4NiA5Ljk3OTggMjIuMzU5NCAxMC4zNTggMjQuMjEyNUMxMC45OTEyIDI3LjMxNTQgMTEuMTc5NSAyOC4yMzg0IDEwLjY2NDQgMjguMjczMkM5Ljc4NDMyIDI3LjkyNTggOC44MTIzOSAyNy43MjkzIDcuODEwODIgMjcuNzI5M0M0LjczNCAyNy43MjkzIDIuNjExMzQgMjkuNTgwNCAzLjA1OTc4IDMxLjg2NDJDMy41MTgwOSAzNC4xNDggNi4zNzA2OSAzNi4wMDAxIDkuNDM4NjEgMzYuMDAwMVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg":
/*!**************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04Ljc1MjkgMzQuNjAyNUw0LjUwMTkgMzYuMzgwNUw2LjI4NTkgMzIuMTQ0NUM3LjUwMzkgMjkuMjUzNSA5LjE5MjkgMjYuNzIyNSAxMS4zMTU5IDI0LjYwNzVMMzEuMDY2OSA0LjkyOTVDMzEuOTExOSA0LjA4NzUgMzMuNzE2OSA0LjUyMDUgMzUuMDk3OSA1Ljg5NjVDMzYuNDc4OSA3LjI3MjUgMzYuOTEzOSA5LjA3MDUgMzYuMDY3OSA5LjkxMjVMMTYuMzE3OSAyOS41OTA1QzE0LjE5NDkgMzEuNzA1NSAxMS42NTM5IDMzLjM4ODUgOC43NTI5IDM0LjYwMjVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNOC43NTI5IDM0LjYwMjVMNC41MDE5IDM2LjM4MDVMNi4yODU5IDMyLjE0NDVDNy41MDM5IDI5LjI1MzUgOS4xOTI5IDI2LjcyMjUgMTEuMzE1OSAyNC42MDc1TDMxLjA2NjkgNC45Mjk1QzMxLjkxMTkgNC4wODc1IDMzLjcxNjkgNC41MjA1IDM1LjA5NzkgNS44OTY1QzM2LjQ3ODkgNy4yNzI1IDM2LjkxMzkgOS4wNzA1IDM2LjA2NzkgOS45MTI1TDE2LjMxNzkgMjkuNTkwNUMxNC4xOTQ5IDMxLjcwNTUgMTEuNjUzOSAzMy4zODg1IDguNzUyOSAzNC42MDI1IiBzdHJva2U9IiMwQjhFNjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjkuNDA5MiA2LjExMTNDMjkuNDA5MiA2LjExMTMgMjQuOTYwMiAzLjczMjMgMjEuMjA4MiAxMS44ODIzQzE5LjQ3NDIgMTUuNjQ4MyAxNi44NTgyIDEzLjQyODMgMTYuODU4MiAxMy40MjgzIiBzdHJva2U9IiMwQjhFNjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM2LjQyMDkgOC44MjUxQzM2LjQyMDkgOS4yODgxIDM2LjI3OTkgOS42OTgxIDM1Ljk4NzkgOS45ODkxTDI2LjY1MjkgMTkuMjkwMUMyNi45MzQ5IDE4Ljk5OTEgMjcuMDYzOSAxOC42MjIxIDI3LjA2MzkgMTguMTY5MUMyNy4wNjM5IDE3LjI5NjEgMjYuNTU1OSAxNi4yMDcxIDI1LjY1NjkgMTUuMzAyMUMyNC4yOTQ5IDEzLjk0NDEgMjIuNTA5OSAxMy41MDIxIDIxLjY1NDkgMTQuMzExMUwzMC45ODk5IDUuMDEwMUMzMS44MzM5IDQuMTY5MSAzMy42NDA5IDQuNjAwMSAzNS4wMjQ5IDUuOTY5MUMzNS45MjI5IDYuODc0MSAzNi40MjA5IDcuOTUyMSAzNi40MjA5IDguODI1MVoiIGZpbGw9IiM0Qzk3RkYiLz4KPHBhdGggZD0iTTM2LjQyMDkgOC44MjUxQzM2LjQyMDkgOS4yODgxIDM2LjI3OTkgOS42OTgxIDM1Ljk4NzkgOS45ODkxTDI2LjY1MjkgMTkuMjkwMUMyNi45MzQ5IDE4Ljk5OTEgMjcuMDYzOSAxOC42MjIxIDI3LjA2MzkgMTguMTY5MUMyNy4wNjM5IDE3LjI5NjEgMjYuNTU1OSAxNi4yMDcxIDI1LjY1NjkgMTUuMzAyMUMyNC4yOTQ5IDEzLjk0NDEgMjIuNTA5OSAxMy41MDIxIDIxLjY1NDkgMTQuMzExMUwzMC45ODk5IDUuMDEwMUMzMS44MzM5IDQuMTY5MSAzMy42NDA5IDQuNjAwMSAzNS4wMjQ5IDUuOTY5MUMzNS45MjI5IDYuODc0MSAzNi40MjA5IDcuOTUyMSAzNi40MjA5IDguODI1MSIgc3Ryb2tlPSIjMEI4RTY5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC41MTQ2IDMzLjc3MzlDOS45NDE2IDM0LjA3NTkgOS4zNTc2IDM0LjM0NDkgOC43NTA2IDM0LjYwMzlMNC40OTk2IDM2LjM4MTlMNi4yODU2IDMyLjE0NjlDNi41NDM2IDMxLjU0MjkgNi44MTQ2IDMwLjk2MDkgNy4xMTg2IDMwLjM4OTlDNy44MDk2IDMwLjU3MjkgOC41Njc2IDMxLjAxNDkgOS4yMjc2IDMxLjY3MTlDOS44ODY2IDMyLjMyOTkgMTAuMzI5NiAzMy4wODM5IDEwLjUxNDYgMzMuNzczOVoiIGZpbGw9IiM0Qzk3RkYiLz4KPHBhdGggZD0iTTEwLjUxNDYgMzMuNzczOUM5Ljk0MTYgMzQuMDc1OSA5LjM1NzYgMzQuMzQ0OSA4Ljc1MDYgMzQuNjAzOUw0LjQ5OTYgMzYuMzgxOUw2LjI4NTYgMzIuMTQ2OUM2LjU0MzYgMzEuNTQyOSA2LjgxNDYgMzAuOTYwOSA3LjExODYgMzAuMzg5OUM3LjgwOTYgMzAuNTcyOSA4LjU2NzYgMzEuMDE0OSA5LjIyNzYgMzEuNjcxOUM5Ljg4NjYgMzIuMzI5OSAxMC4zMjk2IDMzLjA4MzkgMTAuNTE0NiAzMy43NzM5IiBzdHJva2U9IiMwQjhFNjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8ZyBvcGFjaXR5PSIwLjE1Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNi40OTggOC43NDg1QzM2LjQ5OCA5LjIxMTUgMzYuMzU3IDkuNjIxNSAzNi4wNjUgOS45MTI1TDE2LjMyMyAyOS41OTI1QzE0LjE5MiAzMS43MDQ1IDExLjY1IDMzLjM4NTUgOC43NTEgMzQuNjAzNUw0LjUgMzYuMzgxNUw1LjQ3NCAzNC4wNjQ1TDcuMzk5IDMzLjI1NjVDMTAuMjk4IDMyLjAzODUgMTIuODQgMzAuMzU3NSAxNC45NzEgMjguMjQ1NUwzNC43MTMgOC41NjU1QzM1LjAwNSA4LjI3NDUgMzUuMTQ1IDcuODY0NSAzNS4xNDUgNy40MDE1QzM1LjE0NSA2Ljc1NDUgMzQuODc1IDYuMDAwNSAzNC4zNjYgNS4yNzg1QzM0LjYxNSA1LjQ1MDUgMzQuODY0IDUuNjU1NSAzNS4xMDIgNS44OTI1QzM2IDYuNzk3NSAzNi40OTggNy44NzU1IDM2LjQ5OCA4Ljc0ODVaIiBmaWxsPSIjMEI4RTY5Ii8+CjxwYXRoIGQ9Ik0zNi40OTggOC43NDg1QzM2LjQ5OCA5LjIxMTUgMzYuMzU3IDkuNjIxNSAzNi4wNjUgOS45MTI1TDE2LjMyMyAyOS41OTI1QzE0LjE5MiAzMS43MDQ1IDExLjY1IDMzLjM4NTUgOC43NTEgMzQuNjAzNUw0LjUgMzYuMzgxNUw1LjQ3NCAzNC4wNjQ1TDcuMzk5IDMzLjI1NjVDMTAuMjk4IDMyLjAzODUgMTIuODQgMzAuMzU3NSAxNC45NzEgMjguMjQ1NUwzNC43MTMgOC41NjU1QzM1LjAwNSA4LjI3NDUgMzUuMTQ1IDcuODY0NSAzNS4xNDUgNy40MDE1QzM1LjE0NSA2Ljc1NDUgMzQuODc1IDYuMDAwNSAzNC4zNjYgNS4yNzg1QzM0LjYxNSA1LjQ1MDUgMzQuODY0IDUuNjU1NSAzNS4xMDIgNS44OTI1QzM2IDYuNzk3NSAzNi40OTggNy44NzU1IDM2LjQ5OCA4Ljc0ODUiIHN0cm9rZT0iIzBCOEU2OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC40NTAyIDEyLjgzMUMxOC40NTAyIDEzLjMzIDE4LjA0NjIgMTMuNzM1IDE3LjU0NjIgMTMuNzM1QzE3LjA0NzIgMTMuNzM1IDE2LjY0MTIgMTMuMzMgMTYuNjQxMiAxMi44MzFDMTYuNjQxMiAxMi4zMzEgMTcuMDQ3MiAxMS45MjcgMTcuNTQ2MiAxMS45MjdDMTguMDQ2MiAxMS45MjcgMTguNDUwMiAxMi4zMzEgMTguNDUwMiAxMi44MzFaIiBmaWxsPSIjMEI4RTY5IiBzdHJva2U9IiMwQjhFNjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg":
/*!**********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDIxLjY2OTNWMzQuMjgzNEMxNiAzNS44MTUxIDE0IDM2LjUzNTkgMTIuOCAzNS41NDQ4TDEwLjIgMzMuMzgyNEM5LjIgMzIuNTcxNSA4IDMyLjIxMTEgNi43IDMyLjIxMTFINi4zQzUgMzIuMjExMSA0IDMxLjMxMDEgNCAzMC4xMzg4VjI1LjkwNDFDNCAyNC43MzI4IDUgMjMuODMxOCA2LjMgMjMuODMxOEg2LjdDOCAyMy44MzE4IDkuMiAyMy4zODEzIDEwLjEgMjIuNjYwNEwxMi44IDIwLjQ5OEMxNCAxOS40MTY4IDE2IDIwLjIyNzcgMTYgMjEuNjY5M1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yNCA0QzE5LjU4MTcgNCAxNiA3LjU4MTcyIDE2IDEyQzE2IDE1LjExNDcgMTcuNzc5OSAxNy44MTM2IDIwLjM3ODEgMTkuMTM1MUMyMC4yMDk1IDIwLjkwODcgMTkuNjU2NCAyMS42NjU1IDE5LjMwNDIgMjIuMTQ3M0MxOS4xMjY1IDIyLjM5MDQgMTkgMjIuNTYzNSAxOSAyMi43NjE5QzE5IDIzLjQyODYgMTkuNjY2NyAyMy40Mjg2IDE5LjY2NjcgMjMuNDI4NkMyMC42MTMyIDIzLjQyODYgMjMuNTgxMyAyMi4yNjIzIDI1LjQwOTcgMjBIMjhDMzIuNDE4MyAyMCAzNiAxNi40MTgzIDM2IDEyQzM2IDcuNTgxNzIgMzIuNDE4MyA0IDI4IDRIMjRaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjMEI4RTY5Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg":
/*!********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggNUM1Ljc5MDg2IDUgNCA2Ljc5MDg2IDQgOVYxN0M0IDE5LjIwOTEgNS43OTA4NiAyMSA4IDIxSDguMjUyNzdDOC4wMTY0OCAyMi4xNzI4IDcuNTkyODMgMjIuNzUyNCA3LjMwNDIzIDIzLjE0NzNDNy4xMjY1MSAyMy4zOTA0IDcgMjMuNTYzNSA3IDIzLjc2MTlDNyAyNC40Mjg2IDcuNjY2NjcgMjQuNDI4NiA3LjY2NjY3IDI0LjQyODZDOC42MTMyNCAyNC40Mjg2IDExLjU4MTMgMjMuMjYyMyAxMy40MDk3IDIxSDIwQzIyLjIwOTEgMjEgMjQgMTkuMjA5MSAyNCAxN1Y5QzI0IDYuNzkwODYgMjIuMjA5MSA1IDIwIDVIOFoiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMwQjhFNjkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy40MjE4IDcuOTEzMDJDMTMuNTUyMSA3LjgwMTUzIDEzLjcyMzkgNy43NSAxMy45MDY3IDcuNzVDMTQuMDkyOCA3Ljc1IDE0LjI2NyA3LjgwMDM2IDE0LjM5OTQgNy45MTE1QzE0LjUzNTQgOC4wMjU2MSAxNC42MDY3IDguMTg3NDggMTQuNjA2NyA4LjM2MjE2VjkuNTI4NDFIMTguNzAzNkMxOC44Nzk5IDkuNTI4NDEgMTkuMDI3MiA5LjYxMDE3IDE5LjEyMjkgOS43Mzk1N0MxOS4yMTM0IDkuODYyMDEgMTkuMjUgMTAuMDE0NiAxOS4yNSAxMC4xNjI2QzE5LjI1IDEwLjMxMzYgMTkuMjE0NyAxMC40NzAyIDE5LjEyOTMgMTAuNTk3MUMxOS4wMzk1IDEwLjczMDYgMTguODkyNyAxMC44Mjk3IDE4LjcwMzYgMTAuODI5N0gxNy4xMDEyQzE2LjY2MDggMTIuMjgwMiAxNS45NDgyIDEzLjYzODEgMTQuOTI3IDE0Ljc4MTlDMTUuMDYwNiAxNC44OTE2IDE1LjE4OSAxNC45OTIxIDE1LjMyMTMgMTUuMDgyNkwxNS4zMjc5IDE1LjA4NzFDMTYuMzIxOSAxNS44MTQgMTcuNTQ3MiAxNi4zODUgMTguNzM1MSAxNi43NjI5QzE5LjAzOTUgMTYuODU5IDE5LjIyODIgMTcuMTAzNiAxOS4yMjgyIDE3LjQwNzNDMTkuMjI4MiAxNy40OTM2IDE5LjIxMTIgMTcuNTc3IDE5LjE4MDYgMTcuNjU2MUMxOS4xMzIgMTcuODA1NSAxOS4wNTU1IDE3LjkzNDUgMTguOTQyOCAxOC4wMjY1QzE4LjgyNTEgMTguMTIyNiAxOC42ODc0IDE4LjE2MjQgMTguNTUgMTguMTYyNEMxOC40NDgxIDE4LjE2MjQgMTguMzQyNyAxOC4xNDc3IDE4LjIyNiAxOC4xMDQ3QzE2Ljc5OTcgMTcuNjM1OSAxNS41Nzc3IDE3LjAyMDEgMTQuNDMzIDE2LjEyMjVMMTQuNDMwOSAxNi4xMjA4QzE0LjQxNDIgMTYuMTA3NCAxNC4zOTc1IDE2LjA5NDEgMTQuMzgwOSAxNi4wODA3QzE0LjIzOTEgMTUuOTY3MyAxNC4wOTc1IDE1Ljg1MzggMTMuOTU5MiAxNS43MzM1QzEzLjgwNTUgMTUuODY1NyAxMy42NTIyIDE1Ljk4OTggMTMuNDg2NyAxNi4xMTQxQzEyLjI3NzIgMTcuMDMyMyAxMS4xMjMgMTcuNjAyNyA5Ljc0NTUgMTguMTEzOUw5LjczODE3IDE4LjExNjZDOS42NDc4MSAxOC4xNDcgOS41NTQ4NiAxOC4xNjI0IDkuNDYxMTIgMTguMTYyNEM5LjMxOTgyIDE4LjE2MjQgOS4xNzk5MSAxOC4xMjY3IDkuMDU4NTggMTguMDQyQzguOTM4MDggMTcuOTU3OSA4Ljg1MjUxIDE3LjgzNzIgOC43OTk0NyAxNy42OTQ1QzguNzY3MjYgMTcuNjEzIDguNzUgMTcuNTI3OCA4Ljc1IDE3LjQ0MDJDOC43NSAxNy4xMjA3IDguOTc2NDEgMTYuODkyMSA5LjIzODg0IDE2Ljc5MDNMOS4yNDk0OSAxNi43ODYyQzEwLjQ2NzkgMTYuMzc2NSAxMS42MTQgMTUuODUxNSAxMi44Nzk3IDE0Ljg2NkMxMi45MTQ5IDE0LjgzNSAxMi45NTA5IDE0LjgwNTUgMTIuOTg1NCAxNC43Nzc5QzExLjk4NDUgMTMuNjMzNyAxMS4yODM0IDEyLjI2ODkgMTAuODQ0MiAxMC44Mjk3SDkuMzA3NUM5LjExNjIyIDEwLjgyOTcgOC45NjY4NyAxMC43MzM2IDguODc1ODMgMTAuNTk0NkM4Ljc5MTQ0IDEwLjQ2NTcgOC43NjA4OCAxMC4zMDg3IDguNzYwODggMTAuMTYyNkM4Ljc2MDg4IDEwLjAxOTkgOC43OTIzNSA5Ljg2Njc0IDguODgyMSA5Ljc0MjEyQzguOTc5MDYgOS42MDc0OCA5LjEyOTEgOS41Mjg0MSA5LjMwNzUgOS41Mjg0MUgxMy4yMTc5VjguMzYyMTZDMTMuMjE3OSA4LjE4ODA1IDEzLjI4ODYgOC4wMjcgMTMuNDIxOCA3LjkxMzAyWk0xMi4yMzg2IDEwLjgyOTdDMTIuNjA5MSAxMS45MzE2IDEzLjIwNTYgMTIuOTU4OCAxMy45NjI2IDEzLjgzNzdDMTQuNzI1NyAxMi45NTkzIDE1LjMwNTEgMTEuOTM4OSAxNS42NDkzIDEwLjgyOTdIMTIuMjM4NloiIGZpbGw9IiM0Qzk3RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMiAxNkMzNC4yMDkxIDE2IDM2IDE3Ljc5MDkgMzYgMjBWMjhDMzYgMzAuMjA5MSAzNC4yMDkxIDMyIDMyIDMySDMxLjc0NzJDMzEuOTgzNSAzMy4xNzI4IDMyLjQwNzIgMzMuNzUyNCAzMi42OTU4IDM0LjE0NzNDMzIuODczNSAzNC4zOTA0IDMzIDM0LjU2MzUgMzMgMzQuNzYxOUMzMyAzNS40Mjg2IDMyLjMzMzMgMzUuNDI4NiAzMi4zMzMzIDM1LjQyODZDMzEuMzg2OCAzNS40Mjg2IDI4LjQxODcgMzQuMjYyMyAyNi41OTAzIDMySDIwQzE3Ljc5MDkgMzIgMTYgMzAuMjA5MSAxNiAyOFYyMEMxNiAxNy43OTA5IDE3Ljc5MDkgMTYgMjAgMTZIMzJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzEuNzQ3MiAzMkwzMS4yNTcxIDMyLjA5ODhMMzEuMTM2NCAzMS41SDMxLjc0NzJWMzJaTTMyLjY5NTggMzQuMTQ3M0wzMy4wOTk0IDMzLjg1MjJIMzMuMDk5NEwzMi42OTU4IDM0LjE0NzNaTTI2LjU5MDMgMzJWMzEuNUgyNi44MjkxTDI2Ljk3OTIgMzEuNjg1N0wyNi41OTAzIDMyWk0zNS41IDIwQzM1LjUgMTguMDY3IDMzLjkzMyAxNi41IDMyIDE2LjVWMTUuNUMzNC40ODUzIDE1LjUgMzYuNSAxNy41MTQ3IDM2LjUgMjBIMzUuNVpNMzUuNSAyOFYyMEgzNi41VjI4SDM1LjVaTTMyIDMxLjVDMzMuOTMzIDMxLjUgMzUuNSAyOS45MzMgMzUuNSAyOEgzNi41QzM2LjUgMzAuNDg1MyAzNC40ODUzIDMyLjUgMzIgMzIuNVYzMS41Wk0zMS43NDcyIDMxLjVIMzJWMzIuNUgzMS43NDcyVjMxLjVaTTMyLjI5MjEgMzQuNDQyM0MzMS45ODM4IDM0LjAyMDYgMzEuNTEzOCAzMy4zNzI3IDMxLjI1NzEgMzIuMDk4OEwzMi4yMzc0IDMxLjkwMTJDMzIuNDUzMyAzMi45NzI5IDMyLjgzMDUgMzMuNDg0MyAzMy4wOTk0IDMzLjg1MjJMMzIuMjkyMSAzNC40NDIzWk0zMi41IDM0Ljc2MTlDMzIuNSAzNC43NzU1IDMyLjUwNjEgMzQuNzY2NiAzMi40NzU4IDM0LjcxMTNDMzIuNDQxIDM0LjY0NzUgMzIuMzg2OSAzNC41NzIxIDMyLjI5MjEgMzQuNDQyM0wzMy4wOTk0IDMzLjg1MjJDMzMuMTgyMyAzMy45NjU2IDMzLjI4MDQgMzQuMDk4MyAzMy4zNTMyIDM0LjIzMTVDMzMuNDMwNyAzNC4zNzMxIDMzLjUgMzQuNTUgMzMuNSAzNC43NjE5SDMyLjVaTTMyLjMzMzMgMzUuNDI4NkMzMi4zMzMzIDM0LjkyODYgMzIuMzMzMSAzNC45Mjg2IDMyLjMzMjkgMzQuOTI4NkMzMi4zMzI4IDM0LjkyODYgMzIuMzMyNSAzNC45Mjg2IDMyLjMzMjQgMzQuOTI4NkMzMi4zMzIxIDM0LjkyODYgMzIuMzMxOCAzNC45Mjg2IDMyLjMzMTUgMzQuOTI4NkMzMi4zMzA5IDM0LjkyODYgMzIuMzMwNCAzNC45Mjg2IDMyLjMyOTggMzQuOTI4NkMzMi4zMjg4IDM0LjkyODYgMzIuMzI3OSAzNC45Mjg2IDMyLjMyNzIgMzQuOTI4NkMzMi4zMjU3IDM0LjkyODYgMzIuMzI0NyAzNC45Mjg3IDMyLjMyNDIgMzQuOTI4N0MzMi4zMjMxIDM0LjkyODcgMzIuMzI0IDM0LjkyODcgMzIuMzI2NCAzNC45Mjg1QzMyLjMzMTMgMzQuOTI4MiAzMi4zNDE2IDM0LjkyNzIgMzIuMzU1MyAzNC45MjVDMzIuMzg1MSAzNC45MiAzMi40MTcxIDM0LjkxMSAzMi40NDMxIDM0Ljg5OEMzMi40NjcxIDM0Ljg4NiAzMi40NzU5IDM0Ljg3NTkgMzIuNDc5OCAzNC44N0MzMi40ODE2IDM0Ljg2NzIgMzIuNSAzNC44NDExIDMyLjUgMzQuNzYxOUgzMy41QzMzLjUgMzUuMDE2MSAzMy40MzUgMzUuMjM5OSAzMy4zMTE5IDM1LjQyNDdDMzMuMTkwOCAzNS42MDYzIDMzLjAzMjkgMzUuNzIxMSAzMi44OTAzIDM1Ljc5MjVDMzIuNzQ5NiAzNS44NjI4IDMyLjYxNDkgMzUuODk1NSAzMi41MTk3IDM1LjkxMTRDMzIuNDcwOSAzNS45MTk1IDMyLjQyOTEgMzUuOTIzNyAzMi4zOTc2IDM1LjkyNkMzMi4zODE4IDM1LjkyNzEgMzIuMzY4MyAzNS45Mjc4IDMyLjM1NzUgMzUuOTI4MUMzMi4zNTIxIDM1LjkyODMgMzIuMzQ3MyAzNS45Mjg0IDMyLjM0MzMgMzUuOTI4NUMzMi4zNDEzIDM1LjkyODUgMzIuMzM5NCAzNS45Mjg1IDMyLjMzNzggMzUuOTI4NkMzMi4zMzcgMzUuOTI4NiAzMi4zMzYyIDM1LjkyODYgMzIuMzM1NCAzNS45Mjg2QzMyLjMzNTEgMzUuOTI4NiAzMi4zMzQ3IDM1LjkyODYgMzIuMzM0MyAzNS45Mjg2QzMyLjMzNDIgMzUuOTI4NiAzMi4zMzM5IDM1LjkyODYgMzIuMzMzOCAzNS45Mjg2QzMyLjMzMzYgMzUuOTI4NiAzMi4zMzMzIDM1LjkyODYgMzIuMzMzMyAzNS40Mjg2Wk0yNi45NzkyIDMxLjY4NTdDMjcuODM5NyAzMi43NTA0IDI4Ljk3OTEgMzMuNTY4MyAzMC4wMjU4IDM0LjEyMDRDMzAuNTQ3NSAzNC4zOTU2IDMxLjAzODYgMzQuNjAwNyAzMS40NSAzNC43MzZDMzEuODcyNyAzNC44NzUgMzIuMTc2IDM0LjkyODYgMzIuMzMzMyAzNC45Mjg2VjM1LjkyODZDMzIuMDE3MyAzNS45Mjg2IDMxLjU5NDcgMzUuODM2MyAzMS4xMzc2IDM1LjY4NkMzMC42NjkgMzUuNTMxOSAzMC4xMjY0IDM1LjMwNDEgMjkuNTU5MiAzNS4wMDQ5QzI4LjQyODEgMzQuNDA4MyAyNy4xNjkzIDMzLjUxMTkgMjYuMjAxNSAzMi4zMTQzTDI2Ljk3OTIgMzEuNjg1N1pNMjAgMzEuNUgyNi41OTAzVjMyLjVIMjBWMzEuNVpNMTYuNSAyOEMxNi41IDI5LjkzMyAxOC4wNjcgMzEuNSAyMCAzMS41VjMyLjVDMTcuNTE0NyAzMi41IDE1LjUgMzAuNDg1MyAxNS41IDI4SDE2LjVaTTE2LjUgMjBWMjhIMTUuNVYyMEgxNi41Wk0yMCAxNi41QzE4LjA2NyAxNi41IDE2LjUgMTguMDY3IDE2LjUgMjBIMTUuNUMxNS41IDE3LjUxNDcgMTcuNTE0NyAxNS41IDIwIDE1LjVWMTYuNVpNMzIgMTYuNUgyMFYxNS41SDMyVjE2LjVaIiBmaWxsPSIjMEI4RTY5Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQuOTIyNiAyNS4wMjAxSDI3LjA0M0wyNi4wMTE1IDIyLjAxNzJIMjUuOTg4NUwyNC45MjI2IDI1LjAyMDFaTTI1LjA5NDYgMjBIMjYuOTM5OEwzMCAyOC4xODM0SDI4LjEzMThMMjcuNTEyOSAyNi4zNjFIMjQuNDUyN0wyMy44MTA5IDI4LjE4MzRIMjJMMjUuMDk0NiAyMFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzMuMDMzIDEyLjg3NjNDMzIuODMzNSAxMy4wNzEzIDMyLjU2MzUgMTMuMTgxMyAzMi4yODMgMTMuMTgxM0MzMi4wMDM0IDEzLjE4MTMgMzEuNzMzNCAxMy4wNzEzIDMxLjUzMjkgMTIuODc2M0wyOC44Nzg0IDEwLjIxNjJDMjguNTczNCA5LjkxMTIyIDI4LjQ4MzQgOS40NTYyMSAyOC42NDg0IDkuMDYxMkMyOC44MTM0IDguNjY2MTkgMjkuMTkzNCA4LjQxMTE5IDI5LjYyMzQgOC40MTExOUgzMC41Nzg0QzMwLjU1MzQgOC4xODExOSAzMC40ODg0IDcuOTIxMTggMzAuMzc4NCA3LjY0NjE4QzMwLjM0MzkgNy41NjYxNyAzMC4zMDg0IDcuNDg2MTcgMzAuMjY4NCA3LjQwNjE3QzMwLjIxMzQgNy4zMTYxNyAzMC4yMTg5IDcuMjkxMTcgMzAuMTQzNCA3LjE4MTE3QzMwLjAyMzQgNy4wMDExNiAyOS45MTM0IDYuODY2MTYgMjkuNzgyOSA2LjcxMTE2QzI5LjUxODQgNi40MjYxNSAyOS4xOTg0IDYuMTgxMTUgMjguODU4NCA2LjAwMTE1QzI4LjUxMzQgNS44MjExNCAyOC4xNTM0IDUuNzExMTQgMjcuODMzNCA1LjY1MTE0QzI3LjUxODQgNS41OTYxNCAyNy4yMjg0IDUuNTkxMTQgMjcuMDU4NCA1LjU5MTE0QzI2Ljk3MzQgNS41ODYxNCAyNi44NjM0IDUuNjA2MTQgMjYuODA4NCA1LjYxMTE0QzI2Ljc0ODQgNS42MTYxNCAyNi43MTM0IDUuNjIxMTQgMjYuNzEzNCA1LjYyMTE0QzI2LjM1ODMgNS42NTYxNCAyNi4wMzgzIDUuMzk2MTQgMjYuMDAzMyA1LjA0MTEzQzI1Ljk3MzMgNC43NDExMiAyNi4xNDgzIDQuNDcxMTIgMjYuNDEzMyA0LjM3MTEyQzI2LjQxMzMgNC4zNzExMiAyNi40NDgzIDQuMzU2MTIgMjYuNTAzMyA0LjMzNjEyQzI2LjU2ODMgNC4zMTYxMiAyNi42Mjg0IDQuMjgxMTIgMjYuNzY4NCA0LjI0MTEyQzI3LjA0ODQgNC4xNTYxMSAyNy40MDM0IDQuMDY2MTEgMjcuODY4NCA0LjAyMTExQzI4LjMyODQgMy45ODExMSAyOC44ODM0IDMuOTkxMTEgMjkuNDY4OSA0LjExMTExQzMwLjA1MzQgNC4yMzYxMiAzMC42Njg0IDQuNDcxMTIgMzEuMjM4NCA0LjgxMTEzQzMxLjUwODQgNC45ODYxMyAzMS43OTg0IDUuMTkxMTMgMzIuMDIzNCA1LjM5MTE0QzMyLjEyMzQgNS40NjYxNCAzMi4yOTM1IDUuNjM2MTQgMzIuMzkzNSA1Ljc0MTE0QzMyLjUwODUgNS44NjExNCAzMi42MTM1IDUuOTgxMTUgMzIuNzE5IDYuMTA2MTVDMzMuMTIzNSA2LjYwNjE2IDMzLjQyMzUgNy4xNDYxNyAzMy42MTg1IDcuNjM2MThDMzMuNzMzNSA3LjkxNjE4IDMzLjgxMzUgOC4xODExOSAzMy44NzM1IDguNDExMTlIMzQuOTQzNUMzNS4zNzM1IDguNDExMTkgMzUuNzUzNSA4LjY2NjE5IDM1LjkxODUgOS4wNjEyQzM2LjA4MzUgOS40NTYyMSAzNS45OTM1IDkuOTExMjIgMzUuNjg4NSAxMC4yMTYyTDMzLjAzMyAxMi44NzYzWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02Ljk2NzA0IDI3LjEyNUM3LjE2NjU0IDI2LjkzIDcuNDM2NTQgMjYuODIgNy43MTcwNSAyNi44MkM3Ljk5NjU1IDI2LjgyIDguMjY2NTYgMjYuOTMgOC40NjcwNiAyNy4xMjVMMTEuMTIxNiAyOS43ODUxQzExLjQyNjYgMzAuMDkwMSAxMS41MTY2IDMwLjU0NTEgMTEuMzUxNiAzMC45NDAxQzExLjE4NjYgMzEuMzM1MSAxMC44MDY2IDMxLjU5MDEgMTAuMzc2NiAzMS41OTAxSDkuNDIxNThDOS40NDY1OCAzMS44MjAxIDkuNTExNTggMzIuMDgwMSA5LjYyMTU4IDMyLjM1NTFDOS42NTYwOCAzMi40MzUxIDkuNjkxNTggMzIuNTE1MSA5LjczMTU4IDMyLjU5NTFDOS43ODY1OSAzMi42ODUxIDkuNzgxMDkgMzIuNzEwMSA5Ljg1NjU5IDMyLjgyMDFDOS45NzY1OSAzMy4wMDAxIDEwLjA4NjYgMzMuMTM1MSAxMC4yMTcxIDMzLjI5MDFDMTAuNDgxNiAzMy41NzUxIDEwLjgwMTYgMzMuODIwMSAxMS4xNDE2IDM0LjAwMDFDMTEuNDg2NiAzNC4xODAxIDExLjg0NjYgMzQuMjkwMSAxMi4xNjY2IDM0LjM1MDFDMTIuNDgxNiAzNC40MDUxIDEyLjc3MTYgMzQuNDEwMSAxMi45NDE2IDM0LjQxMDFDMTMuMDI2NiAzNC40MTUxIDEzLjEzNjYgMzQuMzk1MSAxMy4xOTE2IDM0LjM5MDFDMTMuMjUxNiAzNC4zODUxIDEzLjI4NjYgMzQuMzgwMSAxMy4yODY2IDM0LjM4MDFDMTMuNjQxNyAzNC4zNDUxIDEzLjk2MTcgMzQuNjA1MSAxMy45OTY3IDM0Ljk2MDJDMTQuMDI2NyAzNS4yNjAyIDEzLjg1MTcgMzUuNTMwMiAxMy41ODY3IDM1LjYzMDJDMTMuNTg2NyAzNS42MzAyIDEzLjU1MTcgMzUuNjQ1MiAxMy40OTY3IDM1LjY2NTJDMTMuNDMxNyAzNS42ODUyIDEzLjM3MTYgMzUuNzIwMiAxMy4yMzE2IDM1Ljc2MDJDMTIuOTUxNiAzNS44NDUyIDEyLjU5NjYgMzUuOTM1MiAxMi4xMzE2IDM1Ljk4MDJDMTEuNjcxNiAzNi4wMjAyIDExLjExNjYgMzYuMDEwMiAxMC41MzExIDM1Ljg5MDJDOS45NDY1OSAzNS43NjUyIDkuMzMxNTggMzUuNTMwMiA4Ljc2MTU3IDM1LjE5MDJDOC40OTE1NiAzNS4wMTUyIDguMjAxNTYgMzQuODEwMSA3Ljk3NjU1IDM0LjYxMDFDNy44NzY1NSAzNC41MzUxIDcuNzA2NTUgMzQuMzY1MSA3LjYwNjU1IDM0LjI2MDFDNy40OTE1NCAzNC4xNDAxIDcuMzg2NTQgMzQuMDIwMSA3LjI4MTA0IDMzLjg5NTFDNi44NzY1MyAzMy4zOTUxIDYuNTc2NTMgMzIuODU1MSA2LjM4MTUzIDMyLjM2NTFDNi4yNjY1MiAzMi4wODUxIDYuMTg2NTIgMzEuODIwMSA2LjEyNjUyIDMxLjU5MDFINS4wNTY1QzQuNjI2NDkgMzEuNTkwMSA0LjI0NjQ5IDMxLjMzNTEgNC4wODE0OCAzMC45NDAxQzMuOTE2NDggMzAuNTQ1MSA0LjAwNjQ4IDMwLjA5MDEgNC4zMTE0OSAyOS43ODUxTDYuOTY3MDQgMjcuMTI1WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg":
/*!***********************************************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBvcGFjaXR5PSIwLjI1IiBjeD0iMzIiIGN5PSIyNiIgcj0iNCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzBCOEU2OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgb3BhY2l0eT0iMC41IiBjeD0iMzIiIGN5PSIyMiIgcj0iNCIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzBCOEU2OSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgb3BhY2l0eT0iMC43NSIgY3g9IjMyIiBjeT0iMTgiIHI9IjQiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMwQjhFNjkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSIzMiIgY3k9IjE0IiByPSI0IiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjMEI4RTY5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE3IDE3LjVMMjIuNCAxNEMyMi45IDEzLjcgMjMuNSAxMy44IDIzLjggMTQuM0MyMy45IDE0LjUgMjQgMTQuNyAyNCAxNC44VjI1LjFDMjQgMjUuNyAyMy41IDI2LjEgMjMgMjYuMUMyMi44IDI2LjEgMjIuNiAyNiAyMi41IDI1LjlMMTcgMjIuNlYyNEMxNyAyNi4yIDE1LjIgMjguMSAxMyAyOC4xSDQuMUMxLjggMjggMCAyNi4yIDAgMjRWMTYuMUMwIDEzLjggMS44IDEyIDQuMSAxMkgxM0MxNS4yIDEyIDE3IDEzLjggMTcgMTYuMVYxNy41WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/lib/themes/blocks/high-contrast.js":
/*!************************************************!*\
  !*** ./src/lib/themes/blocks/high-contrast.js ***!
  \************************************************/
/*! exports provided: blockColors, extensions, customExtensionColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customExtensionColors", function() { return customExtensionColors; });
/* harmony import */ var _high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./high-contrast-media/extensions/musicIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/musicIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./high-contrast-media/extensions/penIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/penIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./high-contrast-media/extensions/text2speechIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/text2speechIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./high-contrast-media/extensions/translateIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/translateIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./high-contrast-media/extensions/videoSensingIcon.svg */ "./src/lib/themes/blocks/high-contrast-media/extensions/videoSensingIcon.svg");
/* harmony import */ var _high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tw_color_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tw-color-utils */ "./src/lib/tw-color-utils.js");






const blockColors = {
  motion: {
    primary: "#80B5FF",
    secondary: "#B3D2FF",
    tertiary: "#3373CC",
    quaternary: "#CCE1FF"
  },
  looks: {
    primary: "#CCB3FF",
    secondary: "#DDCCFF",
    tertiary: "#774DCB",
    quaternary: "#EEE5FF"
  },
  sounds: {
    primary: "#E19DE1",
    secondary: "#FFB3FF",
    tertiary: "#BD42BD",
    quaternary: "#FFCCFF"
  },
  control: {
    primary: "#FFBE4C",
    secondary: "#FFDA99",
    tertiary: "#CF8B17",
    quaternary: "#FFE3B3"
  },
  event: {
    primary: "#FFD966",
    secondary: "#FFECB3",
    tertiary: "#CC9900",
    quaternary: "#FFF2CC"
  },
  sensing: {
    primary: "#85C4E0",
    secondary: "#AED8EA",
    tertiary: "#2E8EB8",
    quaternary: "#C2E2F0"
  },
  pen: {
    primary: "#13ECAF",
    secondary: "#75F0CD",
    tertiary: "#0B8E69",
    quaternary: "#A3F5DE"
  },
  operators: {
    primary: "#7ECE7E",
    secondary: "#B5E3B5",
    tertiary: "#389438",
    quaternary: "#DAF1DA"
  },
  data: {
    primary: "#FFA54C",
    secondary: "#FFCC99",
    tertiary: "#DB6E00",
    quaternary: "#FFE5CC"
  },
  // This is not a new category, but rather for differentiation
  // between lists and scalar variables.
  data_lists: {
    primary: "#FF9966",
    secondary: "#FFCAB0",
    // I don't think this is used, b/c we don't have any droppable fields in list blocks
    tertiary: "#E64D00",
    quaternary: "#FFDDCC"
  },
  more: {
    primary: "#FF99AA",
    secondary: "#FFCCD5",
    tertiary: "#FF3355",
    quaternary: "#FFE5EA"
  },
  addons: {
    primary: "#34e4d0",
    secondary: "#71e2d5",
    tertiary: "#29b2a2",
    quaternary: "#9ee2db"
  },
  text: "#000000",
  textFieldText: "#000000",
  // Text inside of inputs e.g. 90 in [point in direction (90)]
  toolboxText: "#000000",
  // Toolbox text, color picker text (used to be #575E75)
  blackText: "#000000",
  // The color that the category menu label (e.g. 'motion', 'looks', etc.) changes to on hover
  toolboxHover: "#3373CC",
  insertionMarker: "#000000",
  insertionMarkerOpacity: 0.2,
  fieldShadow: "rgba(255, 255, 255, 0.3)",
  dragShadowOpacity: 0.6,
  menuHover: "rgba(255, 255, 255, 0.3)"
};
const extensions = {
  music: {
    blockIconURI: _high_contrast_media_extensions_musicIcon_svg__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  pen: {
    blockIconURI: _high_contrast_media_extensions_penIcon_svg__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  text2speech: {
    blockIconURI: _high_contrast_media_extensions_text2speechIcon_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  translate: {
    blockIconURI: _high_contrast_media_extensions_translateIcon_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  videoSensing: {
    blockIconURI: _high_contrast_media_extensions_videoSensingIcon_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }
};
const clamp = (value, lower, upper) => Math.max(lower, Math.min(upper, value));
const customExtensionColors = {
  primary: _primary => {
    const hsv = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hex2hsv"])(_primary);
    hsv[1] = clamp(hsv[1] - 20, 0, 50);
    hsv[2] = clamp(hsv[2] + 20, 80, 100);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hsv2hex"])(hsv);
  },
  secondary: primary => {
    const hsv = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hex2hsv"])(primary);
    hsv[1] = clamp(hsv[1] - 40, 0, 50);
    hsv[2] = clamp(hsv[2] + 20, 80, 100);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hsv2hex"])(hsv);
  },
  tertiary: primary => {
    const hsv = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hex2hsv"])(primary);
    hsv[2] = clamp(hsv[2] - 20, 0, 100);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hsv2hex"])(hsv);
  },
  quaternary: primary => {
    const hsv = Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hex2hsv"])(primary);
    hsv[1] = clamp(hsv[1] - 60, 0, 100);
    hsv[2] = clamp(hsv[2] + 20, 90, 100);
    return Object(_tw_color_utils__WEBPACK_IMPORTED_MODULE_5__["hsv2hex"])(hsv);
  },
  categoryIconBackground: primary => customExtensionColors.primary(primary),
  categoryIconBorder: primary => customExtensionColors.tertiary(primary)
};


/***/ }),

/***/ "./src/lib/themes/blocks/three.js":
/*!****************************************!*\
  !*** ./src/lib/themes/blocks/three.js ***!
  \****************************************/
/*! exports provided: blockColors, extensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
const blockColors = {
  motion: {
    primary: "#4C97FF",
    secondary: "#4280D7",
    tertiary: "#3373CC",
    quaternary: "#3373CC"
  },
  looks: {
    primary: "#9966FF",
    secondary: "#855CD6",
    tertiary: "#774DCB",
    quaternary: "#774DCB"
  },
  sounds: {
    primary: "#CF63CF",
    secondary: "#C94FC9",
    tertiary: "#BD42BD",
    quaternary: "#BD42BD"
  },
  control: {
    primary: "#FFAB19",
    secondary: "#EC9C13",
    tertiary: "#CF8B17",
    quaternary: "#CF8B17"
  },
  event: {
    primary: "#FFBF00",
    secondary: "#E6AC00",
    tertiary: "#CC9900",
    quaternary: "#CC9900"
  },
  sensing: {
    primary: "#5CB1D6",
    secondary: "#47A8D1",
    tertiary: "#2E8EB8",
    quaternary: "#2E8EB8"
  },
  pen: {
    primary: "#0fBD8C",
    secondary: "#0DA57A",
    tertiary: "#0B8E69",
    quaternary: "#0B8E69"
  },
  operators: {
    primary: "#59C059",
    secondary: "#46B946",
    tertiary: "#389438",
    quaternary: "#389438"
  },
  data: {
    primary: "#FF8C1A",
    secondary: "#FF8000",
    tertiary: "#DB6E00",
    quaternary: "#DB6E00"
  },
  // This is not a new category, but rather for differentiation
  // between lists and scalar variables.
  data_lists: {
    primary: "#FF661A",
    secondary: "#FF5500",
    tertiary: "#E64D00",
    quaternary: "#E64D00"
  },
  more: {
    primary: "#FF6680",
    secondary: "#FF4D6A",
    tertiary: "#FF3355",
    quaternary: "#FF3355"
  },
  addons: {
    primary: "#29beb8",
    secondary: "#3aa8a4",
    tertiary: "#3aa8a4",
    quaternary: "#3aa8a4"
  },
  text: "#FFFFFF",
  workspace: "#F9F9F9",
  toolboxHover: "#4C97FF",
  toolboxSelected: "#E9EEF2",
  toolboxText: "#575E75",
  toolbox: "#FFFFFF",
  blackText: "#575E75",
  flyout: "#F9F9F9",
  scrollbar: "#CECDCE",
  scrollbarHover: "#CECDCE",
  textField: "#FFFFFF",
  textFieldText: "#575E75",
  insertionMarker: "#000000",
  insertionMarkerOpacity: 0.2,
  dragShadowOpacity: 0.6,
  stackGlow: "#FFF200",
  stackGlowSize: 4,
  stackGlowOpacity: 1,
  replacementGlow: "#FFFFFF",
  replacementGlowSize: 2,
  replacementGlowOpacity: 1,
  colourPickerStroke: "#FFFFFF",
  // CSS colours: support RGBA
  fieldShadow: "rgba(255, 255, 255, 0.3)",
  dropDownShadow: "rgba(0, 0, 0, .3)",
  numPadBackground: "#547AB2",
  numPadBorder: "#435F91",
  numPadActiveBackground: "#435F91",
  numPadText: "white",
  // Do not use hex here, it cannot be inlined with data-uri SVG
  valueReportBackground: "#FFFFFF",
  valueReportBorder: "#AAAAAA",
  valueReportForeground: "#000000",
  menuHover: "rgba(0, 0, 0, 0.2)",
  contextMenuBackground: "#ffffff",
  contextMenuBorder: "#cccccc",
  contextMenuForeground: "#000000",
  contextMenuActiveBackground: "#d6e9f8",
  contextMenuDisabledForeground: "#cccccc",
  flyoutLabelColor: "#575E75",
  checkboxInactiveBackground: "#ffffff",
  checkboxInactiveBorder: "#c8c8c8",
  checkboxActiveBackground: "#4C97FF",
  checkboxActiveBorder: "#3373CC",
  checkboxCheck: "#ffffff",
  buttonBorder: "#c6c6c6",
  buttonActiveBackground: "#ffffff",
  buttonForeground: "#575E75",
  zoomIconFilter: "none",
  gridColor: "#dddddd"
};
const extensions = {};


/***/ }),

/***/ "./src/lib/themes/global-styles.css":
/*!******************************************!*\
  !*** ./src/lib/themes/global-styles.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/postcss-loader/src??postcss!./global-styles.css */ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./src/lib/themes/global-styles.css");

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

/***/ "./src/lib/themes/gui/amp-amoled.js":
/*!******************************************!*\
  !*** ./src/lib/themes/gui/amp-amoled.js ***!
  \******************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony import */ var _dark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dark */ "./src/lib/themes/gui/dark.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const guiColors = _objectSpread(_objectSpread({}, _dark__WEBPACK_IMPORTED_MODULE_0__["guiColors"]), {}, {
  "ui-primary": "#000000",
  "ui-secondary": "#000000",
  "ui-tertiary": "#222222",
  "ui-white": "#000000",
  "assets-background": "#000000",
  "input-background": "#0a0a0a",
  "popover-background": "#0a0a0a",
  "fullscreen-background": "#000000",
  "fullscreen-accent": "#000000",
  "page-background": "#000000"
});
const blockColors = {
  insertionMarker: "#cccccc",
  workspace: "#000000",
  toolboxSelected: "#0a0a0a",
  toolboxText: "#cccccc",
  toolbox: "#000000",
  flyout: "#000000",
  scrollbar: "#666666",
  valueReportBackground: "#000000",
  valueReportBorder: "#222222",
  valueReportForeground: "#eeeeee",
  contextMenuBackground: "#000000",
  contextMenuBorder: "#ffffff26",
  contextMenuForeground: "#eeeeee",
  contextMenuActiveBackground: "#121212",
  contextMenuDisabledForeground: "#666666",
  flyoutLabelColor: "#cccccc",
  checkboxInactiveBackground: "#000000",
  checkboxInactiveBorder: "#c8c8c8",
  buttonBorder: "#c6c6c6",
  buttonActiveBackground: "#111111",
  buttonForeground: "#cccccc",
  zoomIconFilter: "invert(100%) grayscale(100%) brightness(140%)",
  gridColor: "#333333"
};


/***/ }),

/***/ "./src/lib/themes/gui/amp-high-contrast.js":
/*!*************************************************!*\
  !*** ./src/lib/themes/gui/amp-high-contrast.js ***!
  \*************************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  "color-scheme": "dark",
  "ui-primary": "#000000",
  "ui-secondary": "#000000",
  "ui-tertiary": "#000000",
  "ui-modal-overlay": "#000000cc",
  "ui-modal-background": "#000000",
  "ui-modal-foreground": "#FFFF00",
  "ui-modal-header-background": "#000000",
  "ui-modal-header-foreground": "#FFFFFF",
  "ui-white": "#000000",
  "ui-black-transparent": "#FFFFFF",
  "text-primary": "#FFFF00",
  "assets-background": "#000000",
  "input-background": "#000000",
  "popover-background": "#000000",
  "badge-background": "#000000",
  "badge-border": "#FFFF00",
  "fullscreen-background": "#000000",
  "fullscreen-accent": "#000000",
  "page-background": "#000000",
  "page-foreground": "#FFFF00",
  "project-title-inactive": "#000000",
  "project-title-hover": "#FFFF003F",
  "link-color": "#00FFFF",
  "filter-icon-black": "invert(100%) contrast(100%)",
  "filter-icon-gray": "invert(100&) contrast(100%)",
  "filter-icon-white": "brightness(100%) invert(100%) contrast(100%)",
  "paint-filter-icon-gray": "none",
  "menu-bar-background": "#000",
  "menu-bar-background-image": "none",
  "menu-bar-foreground": "#ffffff",
  "menu-bar-icon-filter": "none",
  "high-contrast-border": "white",
  "motion-primary": "blue",
  "motion-primary-transparent": "white",
  "motion-tertiary": "darkblue",
  "looks-secondary": "black",
  "looks-transparent": "white",
  "looks-light-transparent": "white",
  "looks-secondary-dark": "#333333",
  "extensions-primary": "#3e3e3e",
  "extensions-tertiary": "#333333",
  "extensions-transparent": "white",
  "extensions-light": "#7e7e7e",
  "drop-highlight": "#66bb6a",
  "data-primary": "black",
  "turbowarp-color": "black",
  "turbowarp-transparent": "white"
};
const blockColors = {
  // Block Insertion Marker: Often needs a solid background to remove 'transparency'
  // in the area where a block is about to be placed.
  insertionMarker: "#FFFF00",
  insertionMarkerBackground: "#000000",
  // Added to make insertion area solid

  // Workspace & UI Backgrounds (all set to solid black)
  workspace: "#000000",
  toolboxSelected: "#000000",
  toolboxText: "#FFFF00",
  toolbox: "#000000",
  flyout: "#000000",
  // Scrollbar & Zoom Icons (Solid foreground/backgrounds)
  scrollbar: "#FFFFFF",
  zoomIconFilter: "none",
  gridColor: "#FFFFFF",
  // Value Reports (Solid backgrounds)
  valueReportBackground: "#000000",
  valueReportBorder: "#FFFF00",
  valueReportForeground: "#FFFF00",
  // Context Menu (Solid backgrounds)
  contextMenuBackground: "#000000",
  contextMenuBorder: "#FFFFFF",
  contextMenuForeground: "#FFFF00",
  contextMenuActiveBackground: "#000000",
  contextMenuDisabledForeground: "#CCCCCC",
  // Flyout Text/Labels
  flyoutLabelColor: "#FFFF00",
  // Checkbox and Button colors
  checkboxInactiveBackground: "#000000",
  checkboxInactiveBorder: "#FFFF00",
  buttonBorder: "#FFFFFF",
  buttonActiveBackground: "#000000",
  buttonForeground: "#FFFF00"
};


/***/ }),

/***/ "./src/lib/themes/gui/amp-light.js":
/*!*****************************************!*\
  !*** ./src/lib/themes/gui/amp-light.js ***!
  \*****************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
const guiColors = {
  "color-scheme": "light",
  "ui-primary": "#FAFAFA",
  "ui-secondary": "#F2F2F2",
  "ui-tertiary": "#EDEDED",
  "ui-modal-overlay": "var(--motion-primary-transparent)",
  "ui-modal-background": "hsla(0, 100%, 100%, 1)" /* #FFFFFF */,
  "ui-modal-foreground": "hsla(225, 15%, 40%, 1)" /* #575E75 */,
  "ui-modal-header-background": "white",
  "ui-modal-header-foreground": "black",
  "ui-white": "hsla(0, 100%, 100%, 1)" /* #FFFFFF */,
  "ui-white-dim": "hsla(0, 100%, 100%, 0.75)" /* 25% transparent version of ui-white */,
  "ui-white-transparent": "hsla(0, 100%, 100%, 0.25)" /* 25% transparent version of ui-white */,
  "ui-transparent": "hsla(0, 100%, 100%, 0)" /* 25% transparent version of ui-white */,

  "ui-black-transparent": "hsla(0, 0%, 0%, 0.15)" /* 15% transparent version of black */,

  "text-primary": "hsla(225, 15%, 40%, 1)" /* #575E75 */,
  "text-primary-transparent": "hsla(225, 15%, 40%, 0.75)",
  "motion-primary": "hsla(215, 100%, 65%, 1)" /* #4C97FF */,
  "motion-primary-transparent": "hsla(215, 100%, 65%, 0.9)" /* 90% transparent version of motion-primary */,
  "motion-tertiary": "hsla(215, 60%, 50%, 1)" /* #3373CC */,

  "looks-secondary": "hsla(260, 60%, 60%, 1)" /* #855CD6 */,
  "looks-transparent": "hsla(260, 60%, 60%, 0.35)" /* 35% transparent version of looks-tertiary */,
  "looks-light-transparent": "hsla(260, 60%, 60%, 0.15)" /* 15% transparent version of looks-tertiary */,
  "looks-secondary-dark": "hsla(260, 42%, 51%, 1)" /* #714EB6 */,

  "red-primary": "hsla(20, 100%, 55%, 1)" /* #FF661A */,
  "red-tertiary": "hsla(20, 100%, 45%, 1)" /* #E64D00 */,

  "sound-primary": "hsla(300, 53%, 60%, 1)" /* #CF63CF */,
  "sound-tertiary": "hsla(300, 48%, 50%, 1)" /* #BD42BD */,

  "control-primary": "hsla(38, 100%, 55%, 1)" /* #FFAB19 */,

  "data-primary": "hsla(30, 100%, 55%, 1)" /* #FF8C1A */,

  "pen-primary": "hsla(163, 85%, 40%, 1)" /* #0FBD8C */,
  "pen-transparent": "hsla(163, 85%, 40%, 0.25)" /* #0FBD8C */,
  "pen-tertiary": "hsla(163, 86%, 30%, 1)" /* #0B8E69 */,

  "error-primary": "hsla(30, 100%, 55%, 1)" /* #FF8C1A */,
  "error-light": "hsla(30, 100%, 70%, 1)" /* #FFB366 */,
  "error-transparent": "hsla(30, 100%, 55%, 0.25)" /* #FF8C1A */,

  "extensions-primary": "hsla(163, 85%, 40%, 1)" /* #0FBD8C */,
  "extensions-tertiary": "hsla(163, 85%, 30%, 1)" /* #0B8E69 */,
  "extensions-transparent": "hsla(163, 85%, 40%, 0.35)" /* 35% transparent version of extensions-primary */,
  "extensions-light": "hsla(163, 57%, 85%, 1)" /* opaque version of extensions-transparent, on white bg */,

  "drop-highlight": "hsla(215, 100%, 77%, 1)" /* lighter than motion-primary */,

  "menu-bar-background-image": "none",
  "assets-background": "#ffffff",
  "input-background": "#ffffff",
  "popover-background": "#ffffff",
  shadow: "hsla(0, 0%, 0%, 0.15)",
  "badge-background": "#dbebff",
  "badge-border": "#b9d6ff",
  "fullscreen-background": "#ffffff",
  "fullscreen-accent": "#e8edf1",
  "page-background": "#ffffff",
  "page-foreground": "#000000",
  "project-title-inactive": "var(--ui-white-transparent)",
  "project-title-hover": "#ffffff7f",
  "link-color": "#2255dd",
  "filter-icon-black": "none",
  "filter-icon-gray": "grayscale(100%)",
  "filter-icon-white": "none",
  "paint-ui-pane-border": "var(--ui-black-transparent)",
  "paint-text-primary": "var(--text-primary)",
  "paint-form-border": "var(--ui-black-transparent)",
  "paint-looks-secondary": "var(--looks-secondary)",
  "paint-looks-transparent": "var(--looks-transparent)",
  "paint-input-background": "var(--input-background)",
  "paint-popover-background": "var(--popover-background)",
  "paint-filter-icon-gray": "none",
  "turbowarp-color": "#ff4c4c",
  "turbowarp-transparent": "#ff4c4c26",
  "high-contrast-border": "transparent",
  "menu-bar-background": "white",
  "menu-bar-foreground": "black",
  "menu-bar-background-image": "var(--menu-bar-background-image-modern)",
  "menu-bar-icon-filter": "invert(100%)",
  "menu-bar-hover": "var(--looks-transparent)",
  "progress-bar-outer": "var(--looks-transparent)",
  "menu-bar-bottom-border": "#00000022",
  "feedback-background": "var(--looks-secondary)",
  "feedback-foreground": "white"
};
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/gui/dark.js":
/*!************************************!*\
  !*** ./src/lib/themes/gui/dark.js ***!
  \************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony import */ var _light__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./light */ "./src/lib/themes/gui/light.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const guiColors = _objectSpread(_objectSpread({}, _light__WEBPACK_IMPORTED_MODULE_0__["guiColors"]), {}, {
  "color-scheme": "dark",
  "ui-primary": "#111111",
  "ui-secondary": "#1e1e1e",
  "ui-tertiary": "#2e2e2e",
  "ui-modal-overlay": "#333333aa",
  "ui-modal-background": "#111111",
  "ui-modal-foreground": "#eeeeee",
  "ui-white": "#111111",
  "progress-bar-outer": "hsla(0, 100%, 100%, 0.25)",
  "ui-black-transparent": "#ffffff26",
  "text-primary": "#eeeeee",
  "assets-background": "#111111",
  "input-background": "#1e1e1e",
  "popover-background": "#1e1e1e",
  "badge-background": "#16202c",
  "badge-border": "#203652",
  "fullscreen-background": "#111111",
  "fullscreen-accent": "#111111",
  "page-background": "#111111",
  "page-foreground": "#eeeeee",
  "project-title-inactive": "var(--ui-secondary)",
  "project-title-hover": "#ffffff3f",
  "link-color": "#44aaff",
  "filter-icon-black": "invert(100%)",
  "filter-icon-gray": "grayscale(100%) brightness(1.7)",
  "filter-icon-white": "brightness(0) invert(100%)",
  "paint-filter-icon-gray": "brightness(1.7)"
});
const blockColors = {
  insertionMarker: "#cccccc",
  workspace: "#1e1e1e",
  toolboxSelected: "#1e1e1e",
  toolboxText: "#cccccc",
  toolbox: "#111111",
  flyout: "#111111",
  scrollbar: "#666666",
  valueReportBackground: "#1e1e1e",
  valueReportBorder: "#333333",
  valueReportForeground: "#eeeeee",
  contextMenuBackground: "#111111",
  contextMenuBorder: "#ffffff26",
  contextMenuForeground: "#eeeeee",
  contextMenuActiveBackground: "#2e2e2e",
  contextMenuDisabledForeground: "#666666",
  flyoutLabelColor: "#cccccc",
  checkboxInactiveBackground: "#222222",
  checkboxInactiveBorder: "#c8c8c8",
  buttonBorder: "#c6c6c6",
  buttonActiveBackground: "#222222",
  buttonForeground: "#cccccc",
  zoomIconFilter: "invert(100%) grayscale(100%) brightness(140%)",
  gridColor: "#484848"
};


/***/ }),

/***/ "./src/lib/themes/gui/light.js":
/*!*************************************!*\
  !*** ./src/lib/themes/gui/light.js ***!
  \*************************************/
/*! exports provided: guiColors, blockColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiColors", function() { return guiColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockColors", function() { return blockColors; });
/* harmony import */ var _amp_light__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./amp-light */ "./src/lib/themes/gui/amp-light.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const guiColors = _objectSpread(_objectSpread({}, _amp_light__WEBPACK_IMPORTED_MODULE_0__["guiColors"]), {}, {
  "ui-primary": "hsla(215, 100%, 95%, 1)" /* #E5F0FF */,
  "ui-secondary": "hsla(215, 75%, 95%, 1)" /* #E9F1FC */,
  "ui-tertiary": "hsla(215, 50%, 90%, 1)" /* #D9E3F2 */,

  "ui-modal-background": "hsla(0, 100%, 100%, 1)" /* #FFFFFF */,
  "ui-modal-foreground": "hsla(225, 15%, 40%, 1)" /* #575E75 */,
  "ui-modal-header-background": "var(--looks-secondary)",
  "ui-modal-header-foreground": "hsla(0, 100%, 100%, 1)" /* #FFFFFF */,
  "progress-bar-outer": "hsla(0, 100%, 100%, 0.25)",
  "menu-bar-hover": "hsla(0, 0%, 0%, 0.15)",
  "menu-bar-background": "var(--looks-secondary)",
  "menu-bar-foreground": "#ffffff",
  "menu-bar-icon-filter": "none",
  "menu-bar-background-image": "var(--menu-bar-background-image-classic)",
  "menu-bar-bottom-border": "transparent",
  "feedback-background": "var(--menu-bar-foreground)",
  "feedback-foreground": "var(--menu-bar-background)"
});
const blockColors = {};


/***/ }),

/***/ "./src/lib/themes/guiHelpers.js":
/*!**************************************!*\
  !*** ./src/lib/themes/guiHelpers.js ***!
  \**************************************/
/*! exports provided: applyGuiColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyGuiColors", function() { return applyGuiColors; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/lib/themes/index.js");
/* harmony import */ var _addons_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../addons/hooks */ "./src/addons/hooks.js");
/* harmony import */ var _global_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-styles.css */ "./src/lib/themes/global-styles.css");
/* harmony import */ var _global_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_global_styles_css__WEBPACK_IMPORTED_MODULE_2__);



const BLOCK_COLOR_NAMES = [
// Corresponds to the name of the object in blockColors
"motion", "looks", "sounds", "control", "event", "sensing", "pen", "operators", "data", "data_lists", "more", "addons"];

/**
 * @param {string} css CSS color or var(--...)
 * @returns {string} evaluated CSS
 */
const evaluateCSS = css => {
  const variableMatch = css.match(/^var\(([\w-]+)\)$/);
  if (variableMatch) {
    return document.documentElement.style.getPropertyValue(variableMatch[1]);
  }
  return css;
};

/**
 * @param {Theme} theme the theme
 */
const applyGuiColors = theme => {
  const doc = document.documentElement;
  const defaultGuiColors = ___WEBPACK_IMPORTED_MODULE_0__["Theme"].light.getGuiColors();
  for (const [name, value] of Object.entries(defaultGuiColors)) {
    doc.style.setProperty("--".concat(name, "-default"), value);
  }
  const guiColors = theme.getGuiColors();
  for (const [name, value] of Object.entries(guiColors)) {
    doc.style.setProperty("--".concat(name), value);
  }
  const blockColors = theme.getBlockColors();
  doc.style.setProperty("--editorTheme3-blockText", blockColors.text);
  doc.style.setProperty("--editorTheme3-inputColor", blockColors.textField);
  doc.style.setProperty("--editorTheme3-inputColor-text", blockColors.textFieldText);
  for (const color of BLOCK_COLOR_NAMES) {
    doc.style.setProperty("--editorTheme3-".concat(color, "-primary"), blockColors[color].primary);
    doc.style.setProperty("--editorTheme3-".concat(color, "-secondary"), blockColors[color].secondary);
    doc.style.setProperty("--editorTheme3-".concat(color, "-tertiary"), blockColors[color].tertiary);
    doc.style.setProperty("--editorTheme3-".concat(color, "-field-background"), blockColors[color].quaternary);
  }

  // Some browsers will color their interfaces to match theme-color, so if we make it the same color as our
  // menu bar, it'll look pretty cool.
  let metaThemeColor = document.head.querySelector("meta[name=theme-color]");
  if (!metaThemeColor) {
    metaThemeColor = document.createElement("meta");
    metaThemeColor.setAttribute("name", "theme-color");
    document.head.appendChild(metaThemeColor);
  }
  metaThemeColor.setAttribute("content", evaluateCSS(guiColors["menu-bar-background"]));

  // a horrible hack for icons...
  window.Recolor = {
    primary: guiColors["looks-secondary"]
  };
  _addons_hooks__WEBPACK_IMPORTED_MODULE_1__["default"].recolorCallbacks.forEach(i => i());
};


/***/ }),

/***/ "./src/lib/themes/index.js":
/*!*********************************!*\
  !*** ./src/lib/themes/index.js ***!
  \*********************************/
/*! exports provided: Theme, defaultBlockColors, ACCENT_RED, ACCENT_PURPLE, ACCENT_BLUE, ACCENT_RAINBOW, ACCENT_GREEN, ACCENT_GREY, ACCENT_MAP, GUI_AMP_LIGHT, GUI_LIGHT, GUI_DARK, GUI_AMOLED, GUI_HIGH_CONTRAST, GUI_MAP, BLOCKS_THREE, BLOCKS_DARK, BLOCKS_HIGH_CONTRAST, BLOCKS_CUSTOM, BLOCKS_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBlockColors", function() { return defaultBlockColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_RED", function() { return ACCENT_RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_PURPLE", function() { return ACCENT_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_BLUE", function() { return ACCENT_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_RAINBOW", function() { return ACCENT_RAINBOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_GREEN", function() { return ACCENT_GREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_GREY", function() { return ACCENT_GREY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCENT_MAP", function() { return ACCENT_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_AMP_LIGHT", function() { return GUI_AMP_LIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_LIGHT", function() { return GUI_LIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_DARK", function() { return GUI_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_AMOLED", function() { return GUI_AMOLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_HIGH_CONTRAST", function() { return GUI_HIGH_CONTRAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI_MAP", function() { return GUI_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_THREE", function() { return BLOCKS_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_DARK", function() { return BLOCKS_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_HIGH_CONTRAST", function() { return BLOCKS_HIGH_CONTRAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_CUSTOM", function() { return BLOCKS_CUSTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOCKS_MAP", function() { return BLOCKS_MAP; });
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.defaultsdeep */ "../../node_modules/lodash.defaultsdeep/index.js");
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _accent_green__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accent/green */ "./src/lib/themes/accent/green.js");
/* harmony import */ var _accent_purple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accent/purple */ "./src/lib/themes/accent/purple.js");
/* harmony import */ var _accent_blue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accent/blue */ "./src/lib/themes/accent/blue.js");
/* harmony import */ var _accent_red__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accent/red */ "./src/lib/themes/accent/red.js");
/* harmony import */ var _accent_rainbow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accent/rainbow */ "./src/lib/themes/accent/rainbow.js");
/* harmony import */ var _accent_grey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accent/grey */ "./src/lib/themes/accent/grey.js");
/* harmony import */ var _gui_light__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gui/light */ "./src/lib/themes/gui/light.js");
/* harmony import */ var _gui_amp_light__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gui/amp-light */ "./src/lib/themes/gui/amp-light.js");
/* harmony import */ var _gui_dark__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gui/dark */ "./src/lib/themes/gui/dark.js");
/* harmony import */ var _gui_amp_amoled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gui/amp-amoled */ "./src/lib/themes/gui/amp-amoled.js");
/* harmony import */ var _gui_amp_high_contrast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gui/amp-high-contrast */ "./src/lib/themes/gui/amp-high-contrast.js");
/* harmony import */ var _blocks_three__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/three */ "./src/lib/themes/blocks/three.js");
/* harmony import */ var _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/high-contrast */ "./src/lib/themes/blocks/high-contrast.js");
/* harmony import */ var _blocks_dark__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/dark */ "./src/lib/themes/blocks/dark.js");
var _Theme;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }















const ACCENT_PURPLE = "purple";
const ACCENT_BLUE = "blue";
const ACCENT_RED = "red";
const ACCENT_RAINBOW = "rainbow";
const ACCENT_GREEN = "green";
const ACCENT_GREY = "grey";
const ACCENT_MAP = {
  [ACCENT_PURPLE]: _accent_purple__WEBPACK_IMPORTED_MODULE_2__,
  [ACCENT_BLUE]: _accent_blue__WEBPACK_IMPORTED_MODULE_3__,
  [ACCENT_RED]: _accent_red__WEBPACK_IMPORTED_MODULE_4__,
  [ACCENT_GREEN]: _accent_green__WEBPACK_IMPORTED_MODULE_1__,
  [ACCENT_GREY]: _accent_grey__WEBPACK_IMPORTED_MODULE_6__,
  [ACCENT_RAINBOW]: _accent_rainbow__WEBPACK_IMPORTED_MODULE_5__
};
const ACCENT_DEFAULT =  false ? undefined : ACCENT_GREEN;
const GUI_AMP_LIGHT = "light";
const GUI_LIGHT = "light-classic";
const GUI_DARK = "dark";
const GUI_AMOLED = "amoled";
const GUI_HIGH_CONTRAST = "high-contrast";
const GUI_MAP = {
  [GUI_AMP_LIGHT]: _gui_amp_light__WEBPACK_IMPORTED_MODULE_8__,
  [GUI_LIGHT]: _gui_light__WEBPACK_IMPORTED_MODULE_7__,
  [GUI_DARK]: _gui_dark__WEBPACK_IMPORTED_MODULE_9__,
  [GUI_AMOLED]: _gui_amp_amoled__WEBPACK_IMPORTED_MODULE_10__,
  [GUI_HIGH_CONTRAST]: _gui_amp_high_contrast__WEBPACK_IMPORTED_MODULE_11__
};
const GUI_DEFAULT = GUI_AMP_LIGHT;
const BLOCKS_THREE = "three";
const BLOCKS_DARK = "dark";
const BLOCKS_HIGH_CONTRAST = "high-contrast";
const BLOCKS_CUSTOM = "custom";
const BLOCKS_DEFAULT = BLOCKS_THREE;
const defaultBlockColors = _blocks_three__WEBPACK_IMPORTED_MODULE_12__["blockColors"];
const BLOCKS_MAP = {
  [BLOCKS_THREE]: {
    blocksMediaFolder: "blocks-media/default",
    colors: _blocks_three__WEBPACK_IMPORTED_MODULE_12__["blockColors"],
    extensions: _blocks_three__WEBPACK_IMPORTED_MODULE_12__["extensions"],
    customExtensionColors: {},
    useForStage: true
  },
  [BLOCKS_HIGH_CONTRAST]: {
    blocksMediaFolder: "blocks-media/high-contrast",
    colors: lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_13__["blockColors"], defaultBlockColors),
    extensions: _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_13__["extensions"],
    customExtensionColors: _blocks_high_contrast__WEBPACK_IMPORTED_MODULE_13__["customExtensionColors"],
    useForStage: true
  },
  [BLOCKS_DARK]: {
    blocksMediaFolder: "blocks-media/default",
    colors: lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, _blocks_dark__WEBPACK_IMPORTED_MODULE_14__["blockColors"], defaultBlockColors),
    extensions: _blocks_dark__WEBPACK_IMPORTED_MODULE_14__["extensions"],
    customExtensionColors: _blocks_dark__WEBPACK_IMPORTED_MODULE_14__["customExtensionColors"],
    useForStage: false
  },
  [BLOCKS_CUSTOM]: {
    // to be filled by editor-theme3 addon
    blocksMediaFolder: "blocks-media/default",
    colors: _blocks_three__WEBPACK_IMPORTED_MODULE_12__["blockColors"],
    extensions: {},
    customExtensionColors: {},
    useForStage: false
  }
};
let themeObjectsCreated = 0;
class Theme {
  constructor(accent, gui, blocks) {
    // do not modify these directly
    /** @readonly */
    this.id = ++themeObjectsCreated;
    /** @readonly */
    this.accent = Object.prototype.hasOwnProperty.call(ACCENT_MAP, accent) ? accent : ACCENT_DEFAULT;
    /** @readonly */
    this.gui = Object.prototype.hasOwnProperty.call(GUI_MAP, gui) ? gui : GUI_DEFAULT;
    /** @readonly */
    this.blocks = Object.prototype.hasOwnProperty.call(BLOCKS_MAP, blocks) ? blocks : BLOCKS_DEFAULT;
  }
  set(what, to) {
    if (what === "accent") {
      return new Theme(to, this.gui, this.blocks);
    } else if (what === "gui") {
      return new Theme(this.accent, to, this.blocks);
    } else if (what === "blocks") {
      return new Theme(this.accent, this.gui, to);
    }
    throw new Error("Unknown theme property: ".concat(what));
  }
  getBlocksMediaFolder() {
    return BLOCKS_MAP[this.blocks].blocksMediaFolder;
  }
  getGuiColors() {
    return lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, this.gui === "high-contrast" ? null : ACCENT_MAP[this.accent].guiColors, GUI_MAP[this.gui].guiColors, _gui_light__WEBPACK_IMPORTED_MODULE_7__["guiColors"]);
  }
  getBlockColors() {
    return lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_0___default()({}, ACCENT_MAP[this.accent].blockColors, GUI_MAP[this.gui].blockColors, BLOCKS_MAP[this.blocks].colors);
  }
  getExtensions() {
    return BLOCKS_MAP[this.blocks].extensions;
  }
  isDark() {
    return this.getGuiColors()["color-scheme"] === "dark" || this.getGuiColors()["color-scheme"] === "amoled" || this.getGuiColors()["color-scheme"] === "high-contrast";
  }
  getStageBlockColors() {
    if (BLOCKS_MAP[this.blocks].useForStage) {
      return this.getBlockColors();
    }
    return Theme.light.getBlockColors();
  }
  getCustomExtensionColors() {
    return BLOCKS_MAP[this.blocks].customExtensionColors;
  }
}
_Theme = Theme;
_defineProperty(Theme, "light", new _Theme(ACCENT_DEFAULT, GUI_AMP_LIGHT, BLOCKS_DEFAULT));
_defineProperty(Theme, "dark", new _Theme(ACCENT_DEFAULT, GUI_DARK, BLOCKS_DEFAULT));
_defineProperty(Theme, "highContrast", new _Theme(ACCENT_DEFAULT, GUI_HIGH_CONTRAST, BLOCKS_HIGH_CONTRAST));


/***/ }),

/***/ "./src/lib/themes/themePersistance.js":
/*!********************************************!*\
  !*** ./src/lib/themes/themePersistance.js ***!
  \********************************************/
/*! exports provided: onSystemPreferenceChange, detectTheme, persistTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSystemPreferenceChange", function() { return onSystemPreferenceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectTheme", function() { return detectTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistTheme", function() { return persistTheme; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/lib/themes/index.js");

const matchMedia = query => window.matchMedia ? window.matchMedia(query) : null;
const PREFERS_HIGH_CONTRAST_QUERY = matchMedia("(prefers-contrast: more)");
const PREFERS_DARK_QUERY = matchMedia("(prefers-color-scheme: dark)");
const STORAGE_KEY =  false ? undefined : "amp:theme";

/**
 * @returns {Theme} detected theme
 */
const systemPreferencesTheme = () => {
  if (PREFERS_HIGH_CONTRAST_QUERY && PREFERS_HIGH_CONTRAST_QUERY.matches) {
    return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].highContrast;
  }
  if (PREFERS_DARK_QUERY && PREFERS_DARK_QUERY.matches) {
    return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].dark;
  }
  return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].light;
};

/**
 * @param {function} onChange callback; no guarantees about arguments
 * @returns {function} call to remove event listeners to prevent memory leak
 */
const onSystemPreferenceChange = onChange => {
  if (!PREFERS_HIGH_CONTRAST_QUERY || !PREFERS_DARK_QUERY ||
  // Some old browsers don't support addEventListener on media queries
  !PREFERS_HIGH_CONTRAST_QUERY.addEventListener || !PREFERS_DARK_QUERY.addEventListener) {
    return () => {};
  }
  PREFERS_HIGH_CONTRAST_QUERY.addEventListener("change", onChange);
  PREFERS_DARK_QUERY.addEventListener("change", onChange);
  return () => {
    PREFERS_HIGH_CONTRAST_QUERY.removeEventListener("change", onChange);
    PREFERS_DARK_QUERY.removeEventListener("change", onChange);
  };
};

/**
 * @returns {Theme} the theme
 */
const detectTheme = () => {
  const systemPreferences = systemPreferencesTheme();
  try {
    const local = localStorage.getItem(STORAGE_KEY);

    // Migrate legacy preferences
    if (local === "dark") {
      return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].dark;
    }
    if (local === "light") {
      return ___WEBPACK_IMPORTED_MODULE_0__["Theme"].light;
    }
    const parsed = JSON.parse(local);
    // Any invalid values in storage will be handled by Theme itself
    return new ___WEBPACK_IMPORTED_MODULE_0__["Theme"](parsed.accent || systemPreferences.accent, parsed.gui || systemPreferences.gui, parsed.blocks || systemPreferences.blocks);
  } catch (e) {
    // ignore
  }
  return systemPreferences;
};

/**
 * @param {Theme} theme the theme
 */
const persistTheme = theme => {
  const systemPreferences = systemPreferencesTheme();
  const nonDefaultSettings = {};
  if (theme.accent !== systemPreferences.accent) {
    nonDefaultSettings.accent = theme.accent;
  }
  if (theme.gui !== systemPreferences.gui) {
    nonDefaultSettings.gui = theme.gui;
  }
  // custom blocks are managed by addon at runtime, don't save here
  if (theme.blocks !== systemPreferences.blocks && theme.blocks !== ___WEBPACK_IMPORTED_MODULE_0__["BLOCKS_CUSTOM"]) {
    nonDefaultSettings.blocks = theme.blocks;
  }
  if (Object.keys(nonDefaultSettings).length === 0) {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // ignore
    }
  } else {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nonDefaultSettings));
    } catch (e) {
      // ignore
    }
  }
};


/***/ }),

/***/ "./src/lib/tw-color-utils.js":
/*!***********************************!*\
  !*** ./src/lib/tw-color-utils.js ***!
  \***********************************/
/*! exports provided: hex2hsv, hsv2hex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex2hsv", function() { return hex2hsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsv2hex", function() { return hsv2hex; });
/*
    Parts of this file are from https://github.com/Qix-/color-convert/blob/6b7dee5a168f76bf42c084fefa7bbe1a0941ad7e/conversions.js

    Copyright (c) 2011-2016 Heather Arthur <fayearthur@gmail.com>.
    Copyright (c) 2016-2021 Josh Junon <josh@junon.me>.

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    "Software"), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * @param {string} hex hex color code like #abc123
 * @returns {number[]} [r, g, b] in range [0-255]. Alpha channel is ignored.
 */
const hex2rgb = hex => {
  const parsed = Number.parseInt(hex.substring(1), 16);
  return [parsed >> 16 & 255, parsed >> 8 & 255, parsed & 255];
};

/**
 * @param {number[]} rgb [r, g, b] in range [0-255]
 * @returns {string} hex color code like #123abc
 */
const rgb2hex = rgb => {
  const number = rgb[0] << 16 | rgb[1] << 8 | rgb[2];
  return "#".concat(number.toString(16).padStart(6, "0"));
};

/**
 * @param {number[]} rgb [r, g, b] in range [0-255]
 * @returns {number[]} [h, s, v] in range [0-360] for h, [0-100] for s, v
 */
const rgb2hsv = rgb => {
  let rdif;
  let gdif;
  let bdif;
  let h;
  let s;
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const v = Math.max(r, g, b);
  const diff = v - Math.min(r, g, b);
  const diffc = c => (v - c) / 6 / diff + 1 / 2;
  if (diff === 0) {
    h = 0;
    s = 0;
  } else {
    s = diff / v;
    rdif = diffc(r);
    gdif = diffc(g);
    bdif = diffc(b);
    if (r === v) {
      h = bdif - gdif;
    } else if (g === v) {
      h = 1 / 3 + rdif - bdif;
    } else if (b === v) {
      h = 2 / 3 + gdif - rdif;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  return [h * 360, s * 100, v * 100];
};

/**
 * @param {number[]} hsv [h, s, v] in range [0-360] for h, [0-100] for s, v
 * @returns {number[]} [r, g, b] in range [0-255]
 */
const hsv2rgb = hsv => {
  const h = hsv[0] / 60;
  const s = hsv[1] / 100;
  let v = hsv[2] / 100;
  const hi = Math.floor(h) % 6;
  const f = h - Math.floor(h);
  const p = 255 * v * (1 - s);
  const q = 255 * v * (1 - s * f);
  const t = 255 * v * (1 - s * (1 - f));
  v *= 255;
  switch (hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
};
const hex2hsv = hex => rgb2hsv(hex2rgb(hex));
const hsv2hex = hsv => rgb2hex(hsv2rgb(hsv));


/***/ }),

/***/ "./src/playground/app-target.js":
/*!**************************************!*\
  !*** ./src/playground/app-target.js ***!
  \**************************************/
/*! exports provided: renderToBottom, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToBottom", function() { return renderToBottom; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "../../node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bowser */ "../../node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ampmod_branding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ampmod/branding */ "../../node_modules/@ampmod/branding/src/index.js");
/* harmony import */ var _ampmod_branding__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ampmod_branding__WEBPACK_IMPORTED_MODULE_3__);





// amp: Non-foolproof check to prevent copyleft violations
// TODO: Make this run in other components of the source code too, maybe even branding itself
if (!_ampmod_branding__WEBPACK_IMPORTED_MODULE_3__["APP_SOURCE"] || _ampmod_branding__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"] !== "AmpMod" && _ampmod_branding__WEBPACK_IMPORTED_MODULE_3__["APP_SOURCE"] == "https://codeberg.org/ampmod/ampmod") {
  alert("LEGAL WARNING! The developer of this fork is violating the AmpMod licence.\n\n" + "This fork of AmpMod does not have a link to its source code or uses the original link. Per the GPLv3 and MPL, you must release your source code if you are distributing modified versions.\n\n" + "If you are a user, please use the official editor at: https://ampmod.codeberg.page\n\n" + "If you are a developer of this fork, please release your source code if you haven't already and add the link. If you are not willing to do so, destroy the source code of this fork.\n\n" + "(We are not lawyers. Please speak to one for more information.)");
  throw new Error("This is an illegal, non-GPL compliant fork of AmpMod.");
}
const appTarget = document.getElementById("app");
let migrationOccurred = false;
/**
 * amp: Migrates all localStorage keys that start with a given prefix to a new prefix.
 * This function is synchronous.
 * @param {string} oldPrefix The prefix to search for (e.g., "tw:").
 * @param {string} newPrefix The new prefix to use (e.g., "amp:").
 * @returns {boolean} True if any keys were migrated, false otherwise.
 */
function migrateLocalStorageKeys(oldPrefix, newPrefix) {
  let migrated = false;
  const keysToMigrate = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(oldPrefix)) {
      keysToMigrate.push(key);
    }
  }
  if (keysToMigrate.length === 0) {
    return false;
  }
  keysToMigrate.forEach(oldKey => {
    window.SetCustomSplashInfo("Migrating key name ".concat(oldKey, "... If this fails, <a href=\"https://ampmod.flarum.cloud/t/bugs-and-glitches\">please report as a bug</a>."));
    const newKey = newPrefix + oldKey.substring(oldPrefix.length);
    const value = localStorage.getItem(oldKey);
    localStorage.setItem(newKey, value);
    localStorage.removeItem(oldKey);
    console.info("SUCCESS: Migrated ".concat(oldKey, " to ").concat(newKey, "."));
    migrated = true;
  });
  return migrated;
}

/**
 * Migrates an IndexedDB database by creating a new one, copying all data,
 * and then deleting the old database. This function is asynchronous.
 * @param {string} oldDbName The name of the database to migrate (e.g., "TW_Database").
 * @param {string} newDbName The new name for the database (e.g., "Amp_Database").
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 */
async function migrateIndexedDB(oldDbName, newDbName) {
  return new Promise((resolve, reject) => {
    const openOldReq = indexedDB.open(oldDbName);
    openOldReq.onerror = () => reject("Error opening old database: ".concat(openOldReq.error));
    openOldReq.onsuccess = event => {
      const dbOld = event.target.result;
      const objectStoreNames = dbOld.objectStoreNames;

      // Check for empty objectStoreNames to avoid "Empty scope" error
      if (objectStoreNames.length === 0) {
        console.info("INFO: Old database \"".concat(oldDbName, "\" has no object stores. Skipping migration."));
        dbOld.close();
        const deleteReq = indexedDB.deleteDatabase(oldDbName);
        deleteReq.onerror = () => reject("Error deleting empty database: ".concat(deleteReq.error));
        deleteReq.onsuccess = () => resolve();
        return;
      }
      const openNewReq = indexedDB.open(newDbName, dbOld.version);
      openNewReq.onupgradeneeded = e => {
        const dbNew = e.target.result;
        for (let i = 0; i < objectStoreNames.length; i++) {
          dbNew.createObjectStore(objectStoreNames[i], {
            keyPath: "id"
          });
        }
      };
      openNewReq.onerror = e => {
        if (e.target.error.name === "VersionError") {
          console.log("INFO: Database ".concat(newDbName, " is already at a higher version. Assuming migration is complete."));
          resolve();
        } else {
          reject("Error creating new database: ".concat(e.target.error));
        }
      };
      openNewReq.onsuccess = e => {
        const dbNew = e.target.result;
        const transactionOld = dbOld.transaction(Array.from(objectStoreNames), "readonly");
        const transactionNew = dbNew.transaction(Array.from(objectStoreNames), "readwrite");
        transactionOld.onerror = () => reject("Old transaction error: ".concat(transactionOld.error));
        transactionNew.onerror = () => reject("New transaction error: ".concat(transactionNew.error));
        transactionNew.oncomplete = () => {
          dbOld.close();
          const deleteReq = indexedDB.deleteDatabase(oldDbName);
          deleteReq.onerror = () => reject("Error deleting old database: ".concat(deleteReq.error));
          deleteReq.onsuccess = () => {
            console.log("SUCCESS: Migrated database ".concat(oldDbName, " to ").concat(newDbName, "."));
            resolve();
          };
        };
        for (const storeName of objectStoreNames) {
          const oldStore = transactionOld.objectStore(storeName);
          const newStore = transactionNew.objectStore(storeName);
          oldStore.openCursor().onsuccess = event => {
            const cursor = event.target.result;
            if (cursor) {
              newStore.add(cursor.value);
              cursor.continue();
            }
          };
        }
      };
    };
  });
}

/**
 * Main function to perform all migration operations.
 */
async function runAllMigrations() {
  const oldPrefix = "tw_";
  const newPrefix = "Amp_";
  const oldDbNames = ["TW_RestorePoints", "TW_Backpack"];

  // Part 1: Migrate localStorage keys.
  if (migrateLocalStorageKeys("tw:", "amp:")) {
    migrationOccurred = true;
  }

  // Part 2: Migrate IndexedDB databases.
  const dbsToMigrate = [];
  for (const oldDbName of oldDbNames) {
    const newDbName = newPrefix + oldDbName.substring(oldPrefix.length);

    // Use a promise to check for the existence of the new database
    const newDbExists = await new Promise(resolve => {
      const req = indexedDB.open(newDbName);
      req.onsuccess = e => {
        e.target.result.close();
        resolve(true);
      };
      req.onerror = () => {
        // Assuming the database doesn't exist if there's an error.
        resolve(false);
      };
    });

    // If the new database doesn't exist, we should try to migrate.
    if (!newDbExists) {
      // Check if the old database actually exists before adding it to the list.
      const oldDbExists = await new Promise(resolve => {
        const req = indexedDB.open(oldDbName);
        req.onsuccess = e => {
          e.target.result.close();
          resolve(true);
        };
        req.onerror = () => {
          resolve(false);
        };
      });
      if (oldDbExists) {
        dbsToMigrate.push(oldDbName);
      }
    }
  }
  if (dbsToMigrate.length !== 0) {
    for (const oldDbName of dbsToMigrate) {
      const newDbName = newPrefix + oldDbName.substring(oldPrefix.length);
      try {
        window.SetCustomSplashInfo("Migrating database ".concat(oldDbName, "... If this fails, <a href=\"https://ampmod.flarum.cloud/t/bugs-and-glitches\">please report as a bug</a>."));
        await migrateIndexedDB(oldDbName, newDbName);
        migrationOccurred = true;
      } catch (e) {
        console.error("Failed to migrate database \"".concat(oldDbName, "\":"), e);
      }
    }
  }

  // Part 3: Reload if any migrations occurred.
  if (migrationOccurred) {
    window.SetCustomSplashInfo("Done! Reloading...");
    window.location.reload();
  }
}
if (new URLSearchParams(window.location.search).has("crash-accidentally")) {
  throw new TypeError("Simulated a TypeError to test the pre-React error screen. " + "If someone sent you a link to this, just open ".concat(_ampmod_branding__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"], " in ") + "a new tab and carry on with your day. This is not a bug.");
}
Object(react_modal__WEBPACK_IMPORTED_MODULE_1__["setAppElement"])(appTarget);
const render = children => {
  if (true) {
    runAllMigrations();
  }
  if (!migrationOccurred) {
    react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render(children, appTarget);
    if (window.SplashEnd) {
      window.SplashEnd();
    }
  }
};
const renderToBottom = children => {
  if (!migrationOccurred) {
    react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render(children, document.getElementById("app-footer"));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ })

}]);
//# sourceMappingURL=addon-settings~credits~editor~embed~fullscreen~headeronly~home~newcompiler~notfound.js.map