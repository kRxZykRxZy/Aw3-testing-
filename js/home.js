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
/******/ 		"home": 0
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
/******/ 	deferredModules.push(["./src/playground/home/home.jsx","vendors~addon-settings~credits~editor~embed~fullscreen~headeronly~home~newcompiler~notfound","vendors~credits~editor~embed~fullscreen~headeronly~home~newcompiler","addon-settings~credits~editor~embed~fullscreen~headeronly~home~newcompiler~notfound","credits~headeronly~home~newcompiler"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./src/components/amp-clippy/clippy.css":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/css-loader??ref--5-1!/home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/postcss-loader/src??postcss!./src/components/amp-clippy/clippy.css ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\n\n.clippy_clippy-container_ZZzto {\n    position: absolute;\n    bottom: 20px;\n    right: 20px;\n    z-index: 5;\n    margin: 60px;\n    margin-bottom: 150px;\n    pointer-events: none;\n}\n\n.clippy_clippy-fixed_2Pg2V {\n    margin: none;\n    position: fixed;\n}\n\n.clippy_clippy-tip_1BgJf {\n    background-color: var(--ui-white);\n    border: 1px solid var(--ui-black-transparent);\n    padding: 8px 12px;\n    margin-bottom: 0;\n    margin-right: 5px;\n    border-radius: 15px;\n    max-width: 200px;\n    font-size: 1em;\n    font-family:\n        \"Inter Variable\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    color: var(--text-primary);\n    display: inline-block;\n    position: relative; /* Ensure relative positioning for the pseudo-elements */\n    overflow: hidden;\n}\n\n.clippy_clippy-image_qI_71 {\n    cursor: pointer;\n    position: absolute;\n    top: calc(100% + 5px);\n    right: -10px;\n    pointer-events: all;\n}\n\n[dir=\"rtl\"] .clippy_clippy-container_ZZzto {\n    left: 20px;\n}\n\n[dir=\"rtl\"] .clippy_clippy-image_qI_71 {\n    right: 10px;\n}\n\n[dir=\"rtl\"] #clippy_react-tabs-1_1VdIX .clippy_clippy-container_ZZzto {\n    margin-right: 320px;\n}\n", ""]);

// exports
exports.locals = {
	"clippy-container": "clippy_clippy-container_ZZzto",
	"clippyContainer": "clippy_clippy-container_ZZzto",
	"clippy-fixed": "clippy_clippy-fixed_2Pg2V",
	"clippyFixed": "clippy_clippy-fixed_2Pg2V",
	"clippy-tip": "clippy_clippy-tip_1BgJf",
	"clippyTip": "clippy_clippy-tip_1BgJf",
	"clippy-image": "clippy_clippy-image_qI_71",
	"clippyImage": "clippy_clippy-image_qI_71",
	"react-tabs-1": "clippy_react-tabs-1_1VdIX",
	"reactTabs1": "clippy_react-tabs-1_1VdIX"
};

/***/ }),

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./src/playground/home/home.css":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/css-loader??ref--5-1!/home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/postcss-loader/src??postcss!./src/playground/home/home.css ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\n\n/* make sure to keep these in sync with other constants,\ne.g. STAGE_DIMENSION_DEFAULTS in lib/screen-utils.js */\n\n/* layout contants from `layout-constants.js` */\n\n.home_primary-button_3j_pp {\n    background-color: white;\n    color: var(--motion-tertiary) !important;\n    border-radius: 0.5rem;\n    padding: 12px 18px;\n    text-decoration: none;\n    display: inline-block;\n    font-weight: 550;\n    font-size: 1.3em;\n    box-shadow: 0 0 0 0 var(--ui-white-transparent-default);\n    transition:\n        box-shadow 0.3s,\n        transform 0.4s,\n        font-weight 0.3s;\n    margin-top: 0.5rem;\n    transform-style: preserve-3d;\n}\n\n.home_primary-button_3j_pp:hover {\n    box-shadow: 0 0 0 0.5rem var(--ui-white-transparent-default);\n    transform: scale(1.1);\n    font-weight: 850;\n}\n\n.home_button_3kNx7 {\n    background-color: var(--motion-primary);\n    color: white;\n    border-radius: 0.5rem;\n    padding: 8px 16px;\n    text-decoration: none;\n    display: inline-block;\n    font-weight: bold;\n}\n\n.home_button_3kNx7:hover {\n    background-color: var(--motion-tertiary);\n}\n\n.home_marginRight_Uw2kf {\n    margin-right: 8px;\n}\n\n.home_main_3Y861 section,\n.home_wrap_2NB8h {\n    max-width: 1200px;\n    padding: 0em 2em;\n    margin: auto;\n}\n\n.home_spacing_3ViR- {\n    margin-bottom: 24px;\n}\n\n.home_column-item_3LHBF {\n    padding: 0 20px;\n    background-color: var(--badge-background);\n    border: 1px var(--badge-border) solid;\n    border-radius: 0.5rem; /* Using imported $space variable */\n}\n\n.home_main-content-grid_3kS6U {\n    display: grid;\n    /* Defines the two main columns: 60% (3fr) for intro, 40% (2fr) for features */\n    grid-template-columns: 3fr 2fr;\n    gap: 40px; /* Space between the two main columns */\n\n    /* Apply the standard content width and centering */\n    max-width: 1200px;\n    padding: 0em 2em;\n    margin: auto;\n}\n\n/* Optional: Clean up padding on sections inside the grid columns */\n\n.home_left-column_3XIL2 section,\n.home_right-column_M2c60 section {\n    padding: 0; /* Remove the padding to keep columns aligned */\n    margin-bottom: 30px; /* Vertical spacing between sections in the left column */\n}\n\n.home_two-column-grid_36Td5 {\n    display: flex;\n    flex-direction: column;\n    /* Add space between the inner columns */\n    gap: 15px;\n    margin-top: 20px;\n}\n\nul {\n    display: flex;\n    flex-direction: column;\n    line-height: 1.4em;\n    gap: 0.5rem;\n}\n", ""]);

// exports
exports.locals = {
	"primary-button": "home_primary-button_3j_pp",
	"primaryButton": "home_primary-button_3j_pp",
	"button": "home_button_3kNx7",
	"marginRight": "home_marginRight_Uw2kf",
	"main": "home_main_3Y861",
	"wrap": "home_wrap_2NB8h",
	"spacing": "home_spacing_3ViR-",
	"column-item": "home_column-item_3LHBF",
	"columnItem": "home_column-item_3LHBF",
	"main-content-grid": "home_main-content-grid_3kS6U",
	"mainContentGrid": "home_main-content-grid_3kS6U",
	"left-column": "home_left-column_3XIL2",
	"leftColumn": "home_left-column_3XIL2",
	"right-column": "home_right-column_M2c60",
	"rightColumn": "home_right-column_M2c60",
	"two-column-grid": "home_two-column-grid_36Td5",
	"twoColumnGrid": "home_two-column-grid_36Td5"
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

/***/ "./src/components/amp-clippy/clippy.css":
/*!**********************************************!*\
  !*** ./src/components/amp-clippy/clippy.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/postcss-loader/src??postcss!./clippy.css */ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./src/components/amp-clippy/clippy.css");

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

/***/ "./src/components/amp-clippy/clippy.jsx":
/*!**********************************************!*\
  !*** ./src/components/amp-clippy/clippy.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _clippy_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clippy.svg */ "./src/components/amp-clippy/clippy.svg");
/* harmony import */ var _clippy_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clippy_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _clippy_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clippy.css */ "./src/components/amp-clippy/clippy.css");
/* harmony import */ var _clippy_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clippy_css__WEBPACK_IMPORTED_MODULE_2__);



const ClippyComponent = _ref => {
  let {
    isFixed,
    messageSet
  } = _ref;
  const messageSets = {
    extLib: ["Use the McUtils extension, it is the most useful extension ever!", "Did you know that extension blocks are actually just magic?", "Forget about native functions, extensions are the future!", "This extension is so powerful, it can probably hack into the Pentagon.", "Are you sure you need *that* many extensions?"],
    costLib: ["Why buy assets when you can just... borrow them?", "This asset pack is clearly overpriced.", "Have you considered making your own assets? It's cheaper (and worse)!", "Remember, time is money. So hurry up and finish your project!", "Don't worry about optimization, just throw more resources at it!"],
    soundLib: ["It looks like you're trying to find a song to use in your project. Use the Jungle theme! <em>I bet it will sound professional when looped 500 times</em>", "Why use background music when you can have deafening silence?", "This sound effect is royalty-free... probably.", "Turn up the volume! Your users will thank you.", "Have you considered adding more cowbell?"],
    codeMenu: ["It looks like you're using an array. Would you like to replace it with a legacy list?", "Have you tried turning it off and on again?", "Comments? Who needs 'em?", "Variable names should be as cryptic as possible.", "If it works, don't touch it!"],
    costMenu: ["It looks like you're making a sprite for your game. It should be a <b>cube</b>", "There is no need for making costumes when you have an Apple Cat premade...", "I wished there was a Banana Dog.", "Click 'Delete' for free robux"],
    soundMenu: ["It looks like you're trying to find a song to use in your project. Use the Jungle theme! <em>I bet it will sound professional when looped 500 times</em>", "Why use subtle sound effects when you can have explosions?", "This sound effect is definitely not going to be annoying.", "Silence is golden. Unless you need sound effects.", "Have you considered adding more reverb?"],
    player: ["Can it run DOOM?", "Is this supposed to be fun?", "Warning: May cause seizures.", "Loading... please be patient (or not).", "This game is clearly a masterpiece... or not."],
    website: ["AmpMod... But isn't it LampMod?", "This website is best viewed in Internet Explorer", "Error 418: I'm a teapot"]
  };
  const defaultTips = ["It looks like you're using an array. Would you like to replace it with a legacy list?", "It looks like you're choosing a font. Would you like to add Comic Sans?", "Why use AmpMod instead of ClippyMod? :(", "Would you like to implement a <b>rejected</b> suggestion?", "It looks like you're trying to find a song to use in your project. Use the Jungle theme! <em>I bet it will sound professional when looped 500 times</em>", "It looks like you're... UHHH... DON'T YOU DARE-", "It looks like you're making a sprite for your game. It should be a <b>cube</b>", "Do <strong>NOT</strong> read the AmpMod wiki, it is very suspicious.", "STOP USING AMPMOD! Learn Assembly instead."];

  // Determine initial tips based on messageSet
  const initialTips = messageSet && messageSets[messageSet] ? messageSets[messageSet] : defaultTips;
  const [tip, setTip] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialTips[Math.floor(Math.random() * initialTips.length)]);
  const [isVisible, setIsVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      const tipInterval = setInterval(() => {
        const currentTips = messageSet && messageSets[messageSet] ? messageSets[messageSet] : defaultTips;
        setTip(currentTips[Math.floor(Math.random() * currentTips.length)]);
      }, 5000);
      return () => clearInterval(tipInterval);
    }, 0);
    return () => clearTimeout(timer);
  }, [messageSet]);
  const handleDismiss = () => {
    setIsVisible(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_clippy_css__WEBPACK_IMPORTED_MODULE_2___default.a.clippyContainer, " ").concat(isFixed ? _clippy_css__WEBPACK_IMPORTED_MODULE_2___default.a.clippyFixed : ""),
    style: {
      display: isVisible ? "block" : "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _clippy_css__WEBPACK_IMPORTED_MODULE_2___default.a.clippyTip,
    dangerouslySetInnerHTML: {
      __html: tip
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _clippy_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Clippy",
    className: _clippy_css__WEBPACK_IMPORTED_MODULE_2___default.a.clippyImage,
    onClick: handleDismiss,
    draggable: false
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ClippyComponent);

/***/ }),

/***/ "./src/components/amp-clippy/clippy.svg":
/*!**********************************************!*\
  !*** ./src/components/amp-clippy/clippy.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzOC41MjcxOCIgaGVpZ2h0PSI3My41NDUwOSIgdmlld0JveD0iMCwwLDM4LjUyNzE4LDczLjU0NTA5Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjIyMi41NDIzNiIgeTE9IjE1My4xNzQ5MiIgeDI9IjI0MS40MzI4OSIgeTI9IjE5NS4wNDk3MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNkM2Q3Y2YiLz48c3RvcCBvZmZzZXQ9IjAuNSIgc3RvcC1jb2xvcj0iI2Y1ZjVmNSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2JlYmViZSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjAuODc5MjgsLTE0Mi40NTcxNCkiPjxnIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjQ0LjY4MzYyLDE3Mi44MzQ2NWwwLjIyMzI4LDE0Ljg3NDUxYzAuMTA3MTksNy4yMTc1NiAtMi43OTE2MSwxMy4xODUwNCAtNi40Mzg5NiwxMy4yNjA4NWMtMy42NTEyNywwLjA2OTMyIC02LjcyNDc3LC01Ljc3MzU3IC02LjgzMDM0LC0xMi45OTIxMWwtMC40NjAwOSwtMzAuNjE3MTJjLTAuMTA4ODYsLTcuMjIwMzEgNC43ODAyNCwtMTMuMjUyMDYgMTAuODYyMzYsLTEzLjQwMzY0YzYuMDgyMjEsLTAuMTUxNDIgMTEuMTQ2NzksNS42Mjg1MSAxMS4yNTU5NSwxMi44NDkzMWwwLjY1NzE5LDQ0LjEyNjY3YzAuMTA2NTUsNy4yMjAxNiAtNS43NDQ1NCwxMy4yNzQ4NCAtMTMuMDA2OTksMTMuNDU3ODVsLTQuNTY2MzcsMC4xMTEyNmMtNy4yNTk4NiwwLjE4MTQ0IC0xMy4yODU0OSwtNS41NzQzNSAtMTMuMzk0OCwtMTIuNzkyODRsLTAuNjA1NTYsLTQwLjgyMzE4IiBzdHJva2U9IiM4ODhhODUiIHN0cm9rZS13aWR0aD0iMyIvPjxwYXRoIGQ9Ik0yNDQuNjgyNTQsMTcyLjgzMjg2bDAuMjIzMjgsMTQuODc0NTFjMC4xMDgxNyw3LjIxOTE4IC0yLjc5MDYzLDEzLjE4NjY2IC02LjQzODk2LDEzLjI2MDg1Yy0zLjY1MDI5LDAuMDcwOTQgLTYuNzIzNzksLTUuNzcxOTUgLTYuODMwMzQsLTEyLjk5MjExbC0wLjQ2MDA5LC0zMC42MTcxMmMtMC4xMDgyNywtNy4yMTkzNCA0Ljc4MDkzLC0xMy4yNTA5MyAxMC44NjMwNCwtMTMuNDAyNWM2LjA4MjExLC0wLjE1MTU4IDExLjE0NzA5LDUuNjI4OTkgMTEuMjU1MjYsMTIuODQ4MTdsMC42NTgxNyw0NC4xMjgyOWMwLjEwNTU3LDcuMjE4NTQgLTUuNzQ0NTQsMTMuMjc0ODQgLTEzLjAwNjk5LDEzLjQ1Nzg1bC00LjU2NjM3LDAuMTExMjZjLTcuMjU5ODYsMC4xODE0NCAtMTMuMjg2NDcsLTUuNTc1OTcgLTEzLjM5NDgsLTEyLjc5Mjg0bC0wLjYwNTU2LC00MC44MjMxOCIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTEpIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PHBhdGggZD0iTTI0NC41OTI3MiwxNjAuNzAwNDljMCwtMy45NTI2MyAzLjIwNDI0LC03LjE1Njg3IDcuMTU2ODcsLTcuMTU2ODdjMy45NTI2MywwIDcuMTU2ODcsMy4yMDQyNCA3LjE1Njg3LDcuMTU2ODdjMCwzLjk1MjYzIC0zLjIwNDI0LDcuMTU2ODcgLTcuMTU2ODcsNy4xNTY4N2MtMy45NTI2MywwIC03LjE1Njg3LC0zLjIwNDI0IC03LjE1Njg3LC03LjE1Njg3eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjODg4YTg1IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PHBhdGggZD0iTTIyNS42ODYyNSwxNjAuNzAwNDljMCwtMy45NTI2MyAzLjIwNDI0LC03LjE1Njg3IDcuMTU2ODcsLTcuMTU2ODdjMy45NTI2MywwIDcuMTU2ODcsMy4yMDQyNCA3LjE1Njg3LDcuMTU2ODdjMCwzLjk1MjYzIC0zLjIwNDI0LDcuMTU2ODcgLTcuMTU2ODcsNy4xNTY4N2MtMy45NTI2MywwIC03LjE1Njg3LC0zLjIwNDI0IC03LjE1Njg3LC03LjE1Njg3eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjODg4YTg1IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PHBhdGggZD0iTTIyOS4xMTc2MywxNjAuNzAwNDljMCwtMi4wNTc1MyAxLjY2Nzk2LC0zLjcyNTUgMy43MjU1LC0zLjcyNTVjMi4wNTc1MywwIDMuNzI1NSwxLjY2Nzk2IDMuNzI1NSwzLjcyNTVjMCwyLjA1NzUzIC0xLjY2Nzk2LDMuNzI1NSAtMy43MjU1LDMuNzI1NWMtMi4wNTc1MywwIC0zLjcyNTUsLTEuNjY3OTYgLTMuNzI1NSwtMy43MjU1eiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PHBhdGggZD0iTTI0OS4wMDQ0OSwxNjAuNzAwNDljMCwtMS41MTYwOCAxLjIyOTAyLC0yLjc0NTEgMi43NDUxLC0yLjc0NTFjMS41MTYwOCwwIDIuNzQ1MSwxLjIyOTAyIDIuNzQ1MSwyLjc0NTFjMCwxLjUxNjA4IC0xLjIyOTAyLDIuNzQ1MSAtMi43NDUxLDIuNzQ1MWMtMS41MTYwOCwwIC0yLjc0NTEsLTEuMjI5MDIgLTIuNzQ1MSwtMi43NDUxeiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTkuMTIwNzE5NjQ3NTA5OTozNy41NDI4NTg1ODQwNzM5Ny0tPg=="

/***/ }),

/***/ "./src/containers/amp-clippy.jsx":
/*!***************************************!*\
  !*** ./src/containers/amp-clippy.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_amp_clippy_clippy_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/amp-clippy/clippy.jsx */ "./src/components/amp-clippy/clippy.jsx");


const Clippy = _ref => {
  let {
    isFixed,
    messageSet
  } = _ref;
  const isAprilFools = () => {
    const now = new Date();
    return now.getMonth() === 3 && now.getDate() === 1; // Month is 0-indexed (0 for January, 3 for April)
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isAprilFools() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_amp_clippy_clippy_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isFixed: isFixed,
    messageSet: messageSet
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Clippy);

/***/ }),

/***/ "./src/playground/home/home.css":
/*!**************************************!*\
  !*** ./src/playground/home/home.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/postcss-loader/src??postcss!./home.css */ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./src/playground/home/home.css");

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

/***/ "./src/playground/home/home.jsx":
/*!**************************************!*\
  !*** ./src/playground/home/home.jsx ***!
  \**************************************/
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
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.css */ "./src/playground/home/home.css");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bowser */ "../../node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ampmod_branding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ampmod/branding */ "../../node_modules/@ampmod/branding/src/index.js");
/* harmony import */ var _ampmod_branding__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ampmod_branding__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/themes/guiHelpers */ "./src/lib/themes/guiHelpers.js");
/* harmony import */ var _lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/themes/themePersistance */ "./src/lib/themes/themePersistance.js");
/* harmony import */ var _components_amp_header_header_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/amp-header/header.jsx */ "./src/components/amp-header/header.jsx");
/* harmony import */ var _components_amp_footer_footer_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/amp-footer/footer.jsx */ "./src/components/amp-footer/footer.jsx");
/* harmony import */ var _containers_amp_clippy_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../containers/amp-clippy.jsx */ "./src/containers/amp-clippy.jsx");













/* eslint-disable react/jsx-no-literals */

Object(_lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_7__["applyGuiColors"])(Object(_lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_8__["detectTheme"])());
document.documentElement.lang = "en";
const Home = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_amp_header_header_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_amp_clippy_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], {
  isFixed: true,
  messageSet: "website"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
  className: _info_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerContainer
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
  className: _info_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerText
}, _ampmod_branding__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"], " ",  false ? undefined : "- ".concat(_ampmod_branding__WEBPACK_IMPORTED_MODULE_6__["APP_SLOGAN"])),  false && /*#__PURE__*/false, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
  className: _info_css__WEBPACK_IMPORTED_MODULE_3___default.a.wrap
}, _ampmod_branding__WEBPACK_IMPORTED_MODULE_6__["APP_DESCRIPTION"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: _info_css__WEBPACK_IMPORTED_MODULE_3___default.a.spacing
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "editor.html",
  className: _home_css__WEBPACK_IMPORTED_MODULE_4___default.a.primaryButton
}, "Try ", _ampmod_branding__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"], " now!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: _info_css__WEBPACK_IMPORTED_MODULE_3___default.a.spacing
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
  className: _home_css__WEBPACK_IMPORTED_MODULE_4___default.a.main
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: _home_css__WEBPACK_IMPORTED_MODULE_4___default.a.mainContentGrid
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: _home_css__WEBPACK_IMPORTED_MODULE_4___default.a.leftColumn
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "What is ", _ampmod_branding__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"], "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, _ampmod_branding__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"], " is a", Math.random() < 0.01 ? "n awesome and" : null, " ", "powerful block-based programming language, built on Scratch 3.0 and TurboWarp. It can be used for many things, from simple throwaway spaghetti scripts to large-scale calculations.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "It's not just Scratch, it's ", _ampmod_branding__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"], "!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, _ampmod_branding__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"], " is designed to be a convenient package of features to make complex projects easily. From clicker games to scientific experiments, we have it all.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, _ampmod_branding__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"], " is licenced under the GPL v3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "LICENSE.txt",
  className: _home_css__WEBPACK_IMPORTED_MODULE_4___default.a.button
}, "View the licence")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Need help?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://ampmod.flarum.cloud",
  className: "".concat(_home_css__WEBPACK_IMPORTED_MODULE_4___default.a.button, " ").concat(_home_css__WEBPACK_IMPORTED_MODULE_4___default.a.marginRight)
}, "Visit the forums"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  href: "https://ultiblocks.miraheze.org/wiki/Main_Page",
  className: _home_css__WEBPACK_IMPORTED_MODULE_4___default.a.button
}, "Visit the wiki"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: _home_css__WEBPACK_IMPORTED_MODULE_4___default.a.rightColumn
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: _home_css__WEBPACK_IMPORTED_MODULE_4___default.a.twoColumnGrid
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: _home_css__WEBPACK_IMPORTED_MODULE_4___default.a.columnItem
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "For programmers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, _ampmod_branding__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"], " compiles projects to JavaScript to make them run faster than in vanilla Scratch."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "With arrays, you can create complex list structures and store them as variables."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, _ampmod_branding__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"], " adds over 100 new unsandboxed extensions to Scratch, opening access to various browser features."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: _home_css__WEBPACK_IMPORTED_MODULE_4___default.a.columnItem
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "For artists and animators"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, _ampmod_branding__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"], " features new fonts like Comic and Amplification to use in your costumes and backdrops."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Creating a rounded rectangle has never been easier with the Rounded Rectangle tool."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Custom fonts can be loaded from system font name or a font file."))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_amp_footer_footer_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], null)));
Object(_app_target__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Home, null));

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
//# sourceMappingURL=home.js.map