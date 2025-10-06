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
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["credits~headeronly~home~newcompiler"],{

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./src/components/amp-footer/footer.css":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/css-loader??ref--5-1!/home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/postcss-loader/src??postcss!./src/components/amp-footer/footer.css ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\n\n.footer_footer_1LQrk {\n    padding: 10px 0;\n    margin-top: 10px;\n    border-top: 2px solid var(--ui-black-transparent);\n    width: 100%;\n}\n\n.footer_footer_1LQrk a {\n    font-weight: bold;\n    text-decoration: none;\n    cursor: pointer;\n    color: var(--motion-primary);\n}\n\n.footer_footer_1LQrk a.footer_footer-reset-data_2WzbA {\n    color: var(--red-primary);\n}\n\n.footer_footer-content_1g75F {\n    max-width: 600px;\n    margin: auto;\n}\n\n.footer_footer-text_1_OXw {\n    text-align: center;\n    margin: 5px 0 10px 0;\n}\n\n.footer_footer-columns_1ma4J {\n    display: flex;\n    justify-content: center;\n    justify-items: center;\n    flex-wrap: wrap;\n}\n\n.footer_footer-section_2z-CC {\n    display: flex;\n    flex-direction: column;\n    width: 200px;\n    margin-bottom: 10px;\n}\n\n.footer_footer-section_2z-CC > * {\n    margin-bottom: 10px;\n}\n\n.footer_separator_4Zo-C {\n    margin: 0 0.5em;\n    border-left: 1px solid var(--ui-black-transparent);\n    height: 1em;\n}\n", ""]);

// exports
exports.locals = {
	"footer": "footer_footer_1LQrk",
	"footer-reset-data": "footer_footer-reset-data_2WzbA",
	"footerResetData": "footer_footer-reset-data_2WzbA",
	"footer-content": "footer_footer-content_1g75F",
	"footerContent": "footer_footer-content_1g75F",
	"footer-text": "footer_footer-text_1_OXw",
	"footerText": "footer_footer-text_1_OXw",
	"footer-columns": "footer_footer-columns_1ma4J",
	"footerColumns": "footer_footer-columns_1ma4J",
	"footer-section": "footer_footer-section_2z-CC",
	"footerSection": "footer_footer-section_2z-CC",
	"separator": "footer_separator_4Zo-C"
};

/***/ }),

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./src/components/amp-header/header.css":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/css-loader??ref--5-1!/home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/postcss-loader/src??postcss!./src/components/amp-header/header.css ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\n\n/* make sure to keep these in sync with other constants,\ne.g. STAGE_DIMENSION_DEFAULTS in lib/screen-utils.js */\n\n/* layout contants from `layout-constants.js` */\n\n/*\n    Contains constants for the z-index values of elements that are part of the global stack context.\n    In other words, z-index values that are \"inside\" a component are not added here.\n    This prevents conflicts between identical z-index values in different components.\n*/\n\n/* Toolbox z-index: 40; set in scratch-blocks */\n\n/* tooltips should go over add buttons if they overlap */\n\n/* monitors go over add buttons */\n\n/* \"ask\" block text input goes above monitors */\n\n/* menu-bar should go over monitors, alerts and tutorials */\n\n/* behind menu-bar */\n\n/* Block drag z-index: 1000; default 50 is overriden in blocks.css */\n\n/* so it is draggable into other panes */\n\n/* behind modals */\n\n/* behind modals */\n\n/* in most interfaces, the context menu is always on top */\n\nbody {\n    font-family:\n        \"Inter Variable\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\nh2 {\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\np {\n    font-size: 1rem;\n    line-height: 1.5em;\n}\n\n.header_header_3_BGS {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    flex-wrap: nowrap;\n    gap: 0.5rem;\n    padding: 0 0.5rem;\n    width: 100%;\n\n    /*\n     *        For most things, we shouldn't explicitly set height, and let the\n     *        content push the element to whatever fits. Using a fixed height\n     *        instead, will help us subtract the value we assign from the body,\n     *        adding up to a perfect 100%. This means we don't need to set\n     *        overflow: hidden, which makes it hard to debug. border-box\n     *        simplifies by all of this by removing padding from the equation.\n     */\n    box-sizing: border-box;\n    height: 3rem;\n\n    /*\n     *        @todo: This adds ~20px in Chrome, when scrolling to the right,\n     *        but fixes [FFx + Safari] [resize window down + scroll to the right] bug.\n     *        width: 100%;\n     */\n    font-family: \"Inter Variable\", \"Helvetica Neue\", Helvetica, sans-serif;\n    font-size: 0.75rem;\n    font-weight: bold;\n    background-color: var(--menu-bar-background);\n    color: var(--menu-bar-foreground);\n    border-bottom: 1px solid var(--menu-bar-bottom-border, --high-contrast-border);\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1000;\n}\n\n.header_main-group_37dCW {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: nowrap;\n    align-items: center;\n    flex-grow: 1;\n    gap: 0.5rem;\n}\n\n.header_inactive_t5mqw {\n    opacity: 0;\n}\n\n.header_scratch-logo_3MT24 {\n    height: 1.6rem;\n    vertical-align: middle;\n}\n\n.header_scratch-logo_3MT24.header_clickable_N812H {\n    cursor: pointer;\n}\n\n.header_header-item_14ZL2 {\n    display: flex;\n    text-decoration: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    align-self: center;\n    position: relative;\n    align-items: center;\n    white-space: nowrap;\n    height: 3rem;\n    padding: 0 0.75rem;\n    color: var(--menu-bar-foreground);\n    border-radius: 0.5rem;\n    height: calc(3rem - 0.75rem);\n}\n\n.header_header-item_14ZL2.header_hoverable_2cz3e {\n    cursor: pointer;\n    transition: background-color 0.1s;\n}\n\n.header_header-item_14ZL2.header_active_COelh,\n.header_header-item_14ZL2.header_hoverable_2cz3e:hover {\n    background-color: var(--menu-bar-hover);\n}\n\n.header_header-item_14ZL2.header_growable_B8dC6 {\n    max-width: 12rem;\n    flex: 1;\n}\n\n.header_title-field-growable_3iKOq {\n    flex-grow: 1;\n    width: 2rem;\n}\n\n.header_header-menu_2BTQY {\n    margin-top: 3rem;\n    z-index: 491;\n}\n\n.header_feedback-link_3YLYM {\n    color: var(--motion-primary);\n    background: white;\n    text-decoration: none;\n}\n\n.header_feedback-button_3BKNg {\n    background-color: var(--menu-bar-foreground);\n    color: inherit;\n    height: 34px;\n}\n\n.header_divider_2sNts {\n    height: 34px;\n}\n\n.header_author-info_1O3nU {\n    margin-left: 0.25rem;\n    margin-right: 0.6875rem;\n}\n\n.header_header-button_1dFQz {\n    height: 2rem;\n}\n\n.header_remix-button_2Ubsz {\n    background-color: var(--pen-primary);\n}\n\n.header_remix-button-icon_1Lewk {\n    height: 1.25rem;\n}\n\n.header_coming-soon_2OK0_ > :not(.header_coming-soon-tooltip_3VkIK) {\n    opacity: 0.5;\n}\n\n.header_account-info-group_C6wfs {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.header_account-info-group_C6wfs .header_header-item_14ZL2 {\n    margin: 0 0.25rem;\n    padding: 0 0.75rem;\n}\n\n.header_mystuff-icon_fLVMe {\n    margin: 0 0.25rem;\n    height: 1rem;\n}\n\n.header_help-icon_2mTVi {\n    margin: 0 0.25rem 0 0;\n}\n\n[dir=\"rtl\"] .header_help-icon_2mTVi {\n    margin: 0 0 0 0.25rem;\n}\n\n.header_account-nav-menu_3ma0m,\n.header_mystuff-button_1EM6i {\n    padding: 0 0.25rem;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.header_profile-icon_ZsosV {\n    margin: 0 0.25rem;\n    width: 2rem;\n    border-radius: calc(0.5rem / 2);\n}\n\n.header_dropdown-caret-icon_21L6y {\n    width: 0.5rem;\n    height: 0.5rem;\n}\n\n[dir=\"ltr\"] .header_dropdown-caret-icon_21L6y {\n    margin-left: 0.5rem;\n}\n\n[dir=\"rtl\"] .header_dropdown-caret-icon_21L6y {\n    margin-right: 0.5rem;\n}\n\n.header_disabled_2gL73 {\n    opacity: 0.5;\n}\n\n.header_mystuff_Z9L4b > a {\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 45%;\n    padding-right: 10px;\n    padding-left: 10px;\n    width: 30px;\n    overflow: hidden;\n    text-indent: 50px;\n    white-space: nowrap;\n}\n\n.header_mystuff_Z9L4b > a:hover {\n    background-size: 50%;\n}\n\n.header_mystuff_Z9L4b > a {\n    /* background-image: url(\"/images/mystuff.png\"); */\n}\n\n.header_about-icon_3mUam {\n    height: 1.25rem;\n    margin: 0.5rem;\n    vertical-align: middle;\n    filter: var(--icon-filter);\n}\n\n.header_collapsible-label_1IBai {\n    margin: 0 0.25rem;\n}\n\n@media only screen and (max-width: 720px) {\n    .header_header-item_14ZL2:not(.header_ampmod-logo_2ylF-) {\n        display: none;\n    }\n}\n\n.header_header-link_stxqT {\n    color: inherit;\n    text-decoration: none;\n}\n\n.header_ampmod-logo_2ylF- {\n    transition: transform 0.2s;\n}\n\n.header_ampmod-logo_2ylF-:hover {\n    transform: scale(1.1);\n}\n\n.header_spacer_3AIBl {\n    height: 3rem;\n}\n", ""]);

// exports
exports.locals = {
	"header": "header_header_3_BGS",
	"main-group": "header_main-group_37dCW",
	"mainGroup": "header_main-group_37dCW",
	"inactive": "header_inactive_t5mqw",
	"scratch-logo": "header_scratch-logo_3MT24",
	"scratchLogo": "header_scratch-logo_3MT24",
	"clickable": "header_clickable_N812H",
	"header-item": "header_header-item_14ZL2",
	"headerItem": "header_header-item_14ZL2",
	"hoverable": "header_hoverable_2cz3e",
	"active": "header_active_COelh",
	"growable": "header_growable_B8dC6",
	"title-field-growable": "header_title-field-growable_3iKOq",
	"titleFieldGrowable": "header_title-field-growable_3iKOq",
	"header-menu": "header_header-menu_2BTQY",
	"headerMenu": "header_header-menu_2BTQY",
	"feedback-link": "header_feedback-link_3YLYM",
	"feedbackLink": "header_feedback-link_3YLYM",
	"feedback-button": "header_feedback-button_3BKNg",
	"feedbackButton": "header_feedback-button_3BKNg",
	"divider": "header_divider_2sNts",
	"author-info": "header_author-info_1O3nU",
	"authorInfo": "header_author-info_1O3nU",
	"header-button": "header_header-button_1dFQz",
	"headerButton": "header_header-button_1dFQz",
	"remix-button": "header_remix-button_2Ubsz",
	"remixButton": "header_remix-button_2Ubsz",
	"remix-button-icon": "header_remix-button-icon_1Lewk",
	"remixButtonIcon": "header_remix-button-icon_1Lewk",
	"coming-soon": "header_coming-soon_2OK0_",
	"comingSoon": "header_coming-soon_2OK0_",
	"coming-soon-tooltip": "header_coming-soon-tooltip_3VkIK",
	"comingSoonTooltip": "header_coming-soon-tooltip_3VkIK",
	"account-info-group": "header_account-info-group_C6wfs",
	"accountInfoGroup": "header_account-info-group_C6wfs",
	"mystuff-icon": "header_mystuff-icon_fLVMe",
	"mystuffIcon": "header_mystuff-icon_fLVMe",
	"help-icon": "header_help-icon_2mTVi",
	"helpIcon": "header_help-icon_2mTVi",
	"account-nav-menu": "header_account-nav-menu_3ma0m",
	"accountNavMenu": "header_account-nav-menu_3ma0m",
	"mystuff-button": "header_mystuff-button_1EM6i",
	"mystuffButton": "header_mystuff-button_1EM6i",
	"profile-icon": "header_profile-icon_ZsosV",
	"profileIcon": "header_profile-icon_ZsosV",
	"dropdown-caret-icon": "header_dropdown-caret-icon_21L6y",
	"dropdownCaretIcon": "header_dropdown-caret-icon_21L6y",
	"disabled": "header_disabled_2gL73",
	"mystuff": "header_mystuff_Z9L4b",
	"about-icon": "header_about-icon_3mUam",
	"aboutIcon": "header_about-icon_3mUam",
	"collapsible-label": "header_collapsible-label_1IBai",
	"collapsibleLabel": "header_collapsible-label_1IBai",
	"ampmod-logo": "header_ampmod-logo_2ylF-",
	"ampmodLogo": "header_ampmod-logo_2ylF-",
	"header-link": "header_header-link_stxqT",
	"headerLink": "header_header-link_stxqT",
	"spacer": "header_spacer_3AIBl"
};

/***/ }),

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./src/components/button/button.css":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/css-loader??ref--5-1!/home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/postcss-loader/src??postcss!./src/components/button/button.css ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* make sure to keep these in sync with other constants,\ne.g. STAGE_DIMENSION_DEFAULTS in lib/screen-utils.js */\n\n/* layout contants from `layout-constants.js` */\n\n.button_outlined-button_1bS__ {\n    cursor: pointer;\n    border-radius: 4px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.button_icon_77d8G {\n    height: 1.5rem;\n}\n\n[dir=\"ltr\"] .button_icon_77d8G {\n    margin-right: 0.5rem;\n}\n\n[dir=\"rtl\"] .button_icon_77d8G {\n    margin-left: 0.5rem;\n}\n\n.button_content_3jdgj {\n    white-space: nowrap;\n}\n", ""]);

// exports
exports.locals = {
	"outlined-button": "button_outlined-button_1bS__",
	"outlinedButton": "button_outlined-button_1bS__",
	"icon": "button_icon_77d8G",
	"content": "button_content_3jdgj"
};

/***/ }),

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./src/components/close-button/close-button.css":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/css-loader??ref--5-1!/home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/postcss-loader/src??postcss!./src/components/close-button/close-button.css ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\n\n/* make sure to keep these in sync with other constants,\ne.g. STAGE_DIMENSION_DEFAULTS in lib/screen-utils.js */\n\n/* layout contants from `layout-constants.js` */\n\n.close-button_close-button_lOp2G {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    overflow: hidden; /* Mask the icon animation */\n    background-color: var(--ui-black-transparent-default);\n    border-radius: 50%;\n    font-family:\n        \"Inter Variable\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer;\n    transition: all 0.15s ease-out;\n}\n\n.close-button_close-button_lOp2G.close-button_large_2oadS:hover {\n    transform: scale(1.1, 1.1);\n    box-shadow: 0 0 0 4px var(--ui-white-transparent-default);\n}\n\n.close-button_close-button_lOp2G.close-button_large_2oadS.close-button_orange_3I0rs:hover {\n    transform: scale(1.1, 1.1);\n    box-shadow: 0px 0px 0px 4px hsla(29, 100%, 54%, 0.2);\n}\n\n.close-button_small_3BsRW {\n    width: 0.825rem;\n    height: 0.825rem;\n    background-color: var(--looks-secondary);\n    color: var(--ui-white);\n}\n\n.close-button_large_2oadS {\n    width: 1.75rem;\n    height: 1.75rem;\n    box-shadow: 0 0 0 2px var(--ui-white-transparent-default);\n}\n\n.close-button_large_2oadS.close-button_orange_3I0rs {\n    background-color: hsla(29, 100%, 54%, 0.2);\n    box-shadow: 0px 0px 0px 2px hsla(29, 100%, 54%, 0.2);\n}\n\n.close-button_close-icon_HBCuO {\n    position: relative;\n    margin: 0.25rem;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    transform-origin: 50%;\n    transform: rotate(45deg);\n}\n\n.close-button_close-icon_HBCuO.close-button_orange_3I0rs {\n    transform: rotate(45deg);\n    transform: scale(1.4);\n}\n\n.close-button_small_3BsRW .close-button_close-icon_HBCuO {\n    width: 50%;\n}\n\n.close-button_large_2oadS .close-button_close-icon_HBCuO {\n    width: 0.75rem;\n    height: 0.75rem;\n}\n\n.close-button_back-icon_tlcJm {\n    position: relative;\n    margin: 0.25rem;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.close-button_small_3BsRW .close-button_back-icon_tlcJm {\n    width: 50%;\n}\n\n.close-button_large_2oadS .close-button_back-icon_tlcJm {\n    width: 2rem;\n    height: 2rem;\n}\n", ""]);

// exports
exports.locals = {
	"close-button": "close-button_close-button_lOp2G",
	"closeButton": "close-button_close-button_lOp2G",
	"large": "close-button_large_2oadS",
	"orange": "close-button_orange_3I0rs",
	"small": "close-button_small_3BsRW",
	"close-icon": "close-button_close-icon_HBCuO",
	"closeIcon": "close-button_close-icon_HBCuO",
	"back-icon": "close-button_back-icon_tlcJm",
	"backIcon": "close-button_back-icon_tlcJm"
};

/***/ }),

/***/ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./src/components/menu-bar/tw-news.css":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/css-loader??ref--5-1!/home/runner/work/Aw3-testing-/Aw3-testing-/node_modules/postcss-loader/src??postcss!./src/components/menu-bar/tw-news.css ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\n\n.tw-news_news_uzo3T {\n    background: var(--data-primary);\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0.8em;\n    gap: 0.5rem;\n    font-weight: bold;\n}\n\n.tw-news_text_1P6mJ {\n    flex-grow: 1;\n    color: white;\n    text-align: center;\n}\n\n.tw-news_text_1P6mJ a {\n    color: inherit;\n}\n\n.tw-news_close_yCgKk {\n    flex-shrink: 0;\n    margin-right: 0.5rem;\n}\n", ""]);

// exports
exports.locals = {
	"news": "tw-news_news_uzo3T",
	"text": "tw-news_text_1P6mJ",
	"close": "tw-news_close_yCgKk"
};

/***/ }),

/***/ "./src/components/amp-footer/footer.css":
/*!**********************************************!*\
  !*** ./src/components/amp-footer/footer.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/postcss-loader/src??postcss!./footer.css */ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./src/components/amp-footer/footer.css");

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

/***/ "./src/components/amp-footer/footer.jsx":
/*!**********************************************!*\
  !*** ./src/components/amp-footer/footer.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ampmod_branding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ampmod/branding */ "../../node_modules/@ampmod/branding/src/index.js");
/* harmony import */ var _ampmod_branding__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ampmod_branding__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "../../node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.css */ "./src/components/amp-footer/footer.css");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_footer_css__WEBPACK_IMPORTED_MODULE_3__);
/*!
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */





const hardRefresh = () => {
  var search = location.search.replace(/[?&]nocache=\d+/, "");
  location.replace(location.pathname + search + (search ? "&" : "?") + "nocache=" + Math.floor(Math.random() * 100000));
};
const Footer = () => {
  const isAprilFools = () => {
    const now = new Date();
    return now.getMonth() === 3 && now.getDate() === 1; // Month is 0-indexed (0 for January, 3 for April)
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: _footer_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _footer_css__WEBPACK_IMPORTED_MODULE_3___default.a.footerContent
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _footer_css__WEBPACK_IMPORTED_MODULE_3___default.a.footerText
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "Version {APP_VERSION}",
    id: "tw.footer.version",
    values: {
      APP_VERSION: "0.3.1"
    }
  }),  false && /*#__PURE__*/false), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _footer_css__WEBPACK_IMPORTED_MODULE_3___default.a.footerText
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "{APP_NAME} is not affiliated with Scratch, the Scratch Team, the Scratch Foundation, or the TurboWarp developers.",
    id: "tw.footer.disclaimer",
    values: {
      APP_NAME: _ampmod_branding__WEBPACK_IMPORTED_MODULE_1__["APP_NAME"]
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _footer_css__WEBPACK_IMPORTED_MODULE_3___default.a.footerText
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "Scratch is a project of the Scratch Foundation. It is available for free at {scratchDotOrg}.",
    id: "tw.footer.scratchDisclaimer",
    values: {
      scratchDotOrg: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://scratch.org/",
        target: "_blank",
        rel: "noreferrer"
      }, "https://scratch.org/")
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _footer_css__WEBPACK_IMPORTED_MODULE_3___default.a.footerText
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "{APP_NAME} is based off TurboWarp. It is available for free at {turboWarpOrg}.",
    id: "tw.footer.basedOnTurboWarp",
    values: {
      APP_NAME: _ampmod_branding__WEBPACK_IMPORTED_MODULE_1__["APP_NAME"],
      turboWarpOrg: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://turbowarp.org/",
        target: "_blank",
        rel: "noreferrer"
      }, "https://turbowarp.org/")
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _footer_css__WEBPACK_IMPORTED_MODULE_3___default.a.footerColumns
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _footer_css__WEBPACK_IMPORTED_MODULE_3___default.a.footerSection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "credits.html"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "Credits",
    id: "tw.footer.credits"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://ampmod.netlify.app/faq"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "AmpMod FAQ",
    id: "tw.footer.faq"
  })), _ampmod_branding__WEBPACK_IMPORTED_MODULE_1__["APP_BLOG"] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: _ampmod_branding__WEBPACK_IMPORTED_MODULE_1__["APP_BLOG"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "AmpMod Blog",
    id: "tw.footer.blog"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://scratchfoundation.org/donate/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "Donate to Scratch",
    id: "tw.footer.donate"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _footer_css__WEBPACK_IMPORTED_MODULE_3___default.a.footerSection
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://desktop.turbowarp.org/"
  }, "TurboWarp Desktop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://packager.turbowarp.org/"
  }, "TurboWarp Packager"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://docs.turbowarp.org/embedding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "Embedding",
    id: "tw.footer.embed"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://docs.turbowarp.org/url-parameters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "URL Parameters",
    id: "tw.footer.parameters"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://ampmod.codeberg.page/extensions/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "Extension Gallery",
    id: "tw.footer.extensions"
  })), _ampmod_branding__WEBPACK_IMPORTED_MODULE_1__["APP_WIKI"] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: _ampmod_branding__WEBPACK_IMPORTED_MODULE_1__["APP_WIKI"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "AmpMod Wiki",
    id: "tw.footer.wiki"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://ampmod.codeberg.page/manual/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "Manual",
    id: "tw.footer.manual"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _footer_css__WEBPACK_IMPORTED_MODULE_3___default.a.footerSection
  }, _ampmod_branding__WEBPACK_IMPORTED_MODULE_1__["APP_FORUMS"] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: _ampmod_branding__WEBPACK_IMPORTED_MODULE_1__["APP_FORUMS"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "{APP_NAME} Forums",
    id: "tw.topicButton",
    values: {
      APP_NAME: _ampmod_branding__WEBPACK_IMPORTED_MODULE_1__["APP_NAME"]
    }
  })),  true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://ampmod.codeberg.page/canary/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "Canary Build",
    id: "tw.canary"
  })) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://ampmod.codeberg.page/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "Production",
    id: "tw.production"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: _ampmod_branding__WEBPACK_IMPORTED_MODULE_1__["APP_SOURCE"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "Source Code",
    id: "tw.code"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "privacy.html"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "Privacy Policy",
    id: "tw.privacy"
  }))))), isAprilFools() && ";");
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/amp-header/ampmod-canary.svg":
/*!*****************************************************!*\
  !*** ./src/components/amp-header/ampmod-canary.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/621093b4ba5cde5acd3ae654e329ad1e.svg";

/***/ }),

/***/ "./src/components/amp-header/ampmod.svg":
/*!**********************************************!*\
  !*** ./src/components/amp-header/ampmod.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMDMuNTIwNzYiIGhlaWdodD0iNTAuMjQxOTEiIHZpZXdCb3g9IjAsMCwyMDMuNTIwNzYsNTAuMjQxOTEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDAuNzM5NjIsLTE1Ni4wMDQwNSkiPjxnIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0xODEuOTMxMiwxOTUuMDI0NDJoLTUuMjkxOTJ2LTI0LjIwNjU2aDE0LjgyNzg0djQuNzY3OTVoNC4xOTE2MXYtNC43Njc5NWgxMC4xMTIyN3Y0Ljc2Nzk1aDQuNzE1NTZ2MTkuNDM4NjFoLTUuMjM5NTJ2LTE4Ljk2NzA0aC05LjA2NDM2djE4Ljk2NzA0aC01LjIzOTUydi0xOC45NjcwNGgtOS4wMTE5NnpNMjUyLjgyMTg1LDE5NS4wMjQ0MmgtNS4yOTE5di0yNC4yMDY1NmgxNC44Mjc4M3Y0Ljc2Nzk1aDQuMTkxNjF2LTQuNzY3OTVoMTAuMTEyMjV2NC43Njc5NWg0LjcxNTU2djE5LjQzODYxaC01LjIzOTUxdi0xOC45NjcwNGgtOS4wNjQzNnYxOC45NjcwNGgtNS4yMzk1MnYtMTguOTY3MDRoLTkuMDExOTZ6TTE2Mi4yODMwMiwxOTUuMDI0NDJoLTE0Ljc3NTQzdi00LjcxNTU2aC00Ljc2Nzk3di0xNC43MjMwNWg0Ljc2Nzk3di00Ljc2Nzk1aDE0Ljc3NTQzdjQuNzY3OTVoNC44MjAzNXYxNC4xOTkxaDQuNzY3OTd2NS4yMzk1MmgtNS4yOTE5MnYtNC43MTU1NmgtNC4yOTY0ek0zMzcuNDQwMDMsMTk1LjAyNDQyaC0xNC43NzU0M3YtNC43MTU1NmgtNC43Njc5NXYtMTQuNzIzMDVoNC43Njc5NXYtNC43Njc5NWgxNC4zMDM4OHYtOS40ODM1M2g1LjI5MTl2MjguOTc0NTNoLTQuODIwMzV6TTIyMi4xMTgyOSwyMDQuMjQ1OTZoLTUuMjkxOXYtMjguNjYwMTVoNC43Njc5NXYtNC43Njc5NWgxNC43NzU0NHY0Ljc2Nzk1aDQuODIwMzV2MTQuNzIzMDVoLTQuODIwMzV2NC43MTU1NmgtMTQuMjUxNXpNMzA2LjczNjQ2LDE5NS4wMjQ0MmgtMTQuNzc1NDN2LTQuNzE1NTZoLTQuNzY3OTV2LTE0LjcyMzA1aDQuNzY3OTV2LTQuNzY3OTVoMTQuNzc1NDN2NC43Njc5NWg0LjgyMDM1djE0LjcyMzA1aC00LjgyMDM1ek0xNDguMDMxNTQsMTc2LjA1NzM3djEzLjcyNzUzaDEzLjcyNzUzdi0xMy43Mjc1M3pNMjIyLjExODI5LDE3Ni4wNTczN3YxMy43Mjc1M2gxMy43Mjc1M3YtMTMuNzI3NTN6TTI5Mi40ODQ5OCwxNzYuMDU3Mzd2MTMuNzI3NTNoMTMuNzI3NTN2LTEzLjcyNzUzek0zMjMuMTg4NTUsMTc2LjA1NzM3djEzLjcyNzUzaDEzLjcyNzUzdi0xMy43Mjc1M3oiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHBhdGggZD0iTTE4MS45MzEyLDE5MS42OTQxNGgtNS4yOTE5MnYtMjQuMjA2NTZoMTQuODI3ODR2NC43Njc5NWg0LjE5MTYxdi00Ljc2Nzk1aDEwLjExMjI3djQuNzY3OTVoNC43MTU1NnYxOS40Mzg2MWgtNS4yMzk1MnYtMTguOTY3MDRoLTkuMDY0MzZ2MTguOTY3MDRoLTUuMjM5NTJ2LTE4Ljk2NzA0aC05LjAxMTk2ek0yNTIuODIxODUsMTkxLjY5NDE0aC01LjI5MTl2LTI0LjIwNjU2aDE0LjgyNzgzdjQuNzY3OTVoNC4xOTE2MXYtNC43Njc5NWgxMC4xMTIyNXY0Ljc2Nzk1aDQuNzE1NTZ2MTkuNDM4NjFoLTUuMjM5NTF2LTE4Ljk2NzA0aC05LjA2NDM2djE4Ljk2NzA0aC01LjIzOTUydi0xOC45NjcwNGgtOS4wMTE5NnpNMTYyLjI4MzAyLDE5MS42OTQxNGgtMTQuNzc1NDN2LTQuNzE1NTZoLTQuNzY3OTd2LTE0LjcyMzA1aDQuNzY3OTd2LTQuNzY3OTVoMTQuNzc1NDN2NC43Njc5NWg0LjgyMDM1djE0LjE5OTFoNC43Njc5N3Y1LjIzOTUyaC01LjI5MTkydi00LjcxNTU2aC00LjI5NjR6TTMzNy40NDAwMywxOTEuNjk0MTRoLTE0Ljc3NTQzdi00LjcxNTU2aC00Ljc2Nzk1di0xNC43MjMwNWg0Ljc2Nzk1di00Ljc2Nzk1aDE0LjMwMzg4di05LjQ4MzUzaDUuMjkxOXYyOC45NzQ1M2gtNC44MjAzNXpNMjIyLjExODI5LDIwMC45MTU2OWgtNS4yOTE5di0yOC42NjAxNWg0Ljc2Nzk1di00Ljc2Nzk1aDE0Ljc3NTQ0djQuNzY3OTVoNC44MjAzNXYxNC43MjMwNWgtNC44MjAzNXY0LjcxNTU2aC0xNC4yNTE1ek0zMDYuNzM2NDYsMTkxLjY5NDE0aC0xNC43NzU0M3YtNC43MTU1NmgtNC43Njc5NXYtMTQuNzIzMDVoNC43Njc5NXYtNC43Njc5NWgxNC43NzU0M3Y0Ljc2Nzk1aDQuODIwMzV2MTQuNzIzMDVoLTQuODIwMzV6TTE0OC4wMzE1NCwxNzIuNzI3MDl2MTMuNzI3NTNoMTMuNzI3NTN2LTEzLjcyNzUzek0yMjIuMTE4MjksMTcyLjcyNzA5djEzLjcyNzUzaDEzLjcyNzUzdi0xMy43Mjc1M3pNMjkyLjQ4NDk4LDE3Mi43MjcwOXYxMy43Mjc1M2gxMy43Mjc1M3YtMTMuNzI3NTN6TTMyMy4xODg1NSwxNzIuNzI3MDl2MTMuNzI3NTNoMTMuNzI3NTN2LTEzLjcyNzUzeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjQiLz48cGF0aCBkPSJNMTgxLjkzMTIsMTkxLjY5NDE0aC01LjI5MTkydi0yNC4yMDY1NmgxNC44Mjc4NHY0Ljc2Nzk1aDQuMTkxNjF2LTQuNzY3OTVoMTAuMTEyMjd2NC43Njc5NWg0LjcxNTU2djE5LjQzODYxaC01LjIzOTUydi0xOC45NjcwNGgtOS4wNjQzNnYxOC45NjcwNGgtNS4yMzk1MnYtMTguOTY3MDRoLTkuMDExOTZ6TTI1Mi44MjE4NSwxOTEuNjk0MTRoLTUuMjkxOXYtMjQuMjA2NTZoMTQuODI3ODN2NC43Njc5NWg0LjE5MTYydi00Ljc2Nzk1aDEwLjExMjI1djQuNzY3OTVoNC43MTU1NnYxOS40Mzg2MWgtNS4yMzk1MXYtMTguOTY3MDRoLTkuMDY0MzZ2MTguOTY3MDRoLTUuMjM5NTJ2LTE4Ljk2NzA0aC05LjAxMTk2ek0xNjIuMjgzMDIsMTkxLjY5NDE0aC0xNC43NzU0M3YtNC43MTU1NmgtNC43Njc5N3YtMTQuNzIzMDVoNC43Njc5N3YtNC43Njc5NWgxNC43NzU0M3Y0Ljc2Nzk1aDQuODIwMzV2MTQuMTk5MWg0Ljc2Nzk3djUuMjM5NTJoLTUuMjkxOTJ2LTQuNzE1NTZoLTQuMjk2NHpNMzM3LjQ0MDAzLDE5MS42OTQxNGgtMTQuNzc1NDN2LTQuNzE1NTZoLTQuNzY3OTV2LTE0LjcyMzA1aDQuNzY3OTV2LTQuNzY3OTVoMTQuMzAzODh2LTkuNDgzNTNoNS4yOTE5djI4Ljk3NDUzaC00LjgyMDM1ek0yMjIuMTE4MjksMjAwLjkxNTY5aC01LjI5MTl2LTI4LjY2MDE1aDQuNzY3OTV2LTQuNzY3OTVoMTQuNzc1NDR2NC43Njc5NWg0LjgyMDM1djE0LjcyMzA1aC00LjgyMDM1djQuNzE1NTZoLTE0LjI1MTV6TTMwNi43MzY0NiwxOTEuNjk0MTRoLTE0Ljc3NTQzdi00LjcxNTU2aC00Ljc2Nzk1di0xNC43MjMwNWg0Ljc2Nzk1di00Ljc2Nzk1aDE0Ljc3NTQzdjQuNzY3OTVoNC44MjAzNXYxNC43MjMwNWgtNC44MjAzNXpNMTQ4LjAzMTU0LDE3Mi43MjcwOXYxMy43Mjc1M2gxMy43Mjc1M3YtMTMuNzI3NTN6TTIyMi4xMTgyOSwxNzIuNzI3MDl2MTMuNzI3NTNoMTMuNzI3NTN2LTEzLjcyNzUzek0yOTIuNDg0OTgsMTcyLjcyNzA5djEzLjcyNzUzaDEzLjcyNzUzdi0xMy43Mjc1M3pNMzIzLjE4ODU1LDE3Mi43MjcwOXYxMy43Mjc1M2gxMy43Mjc1M3YtMTMuNzI3NTN6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6OTkuMjYwMzc3NDU0NTE1NDQ6MjMuOTk1OTU0OTk5OTk5OTgtLT4="

/***/ }),

/***/ "./src/components/amp-header/header.css":
/*!**********************************************!*\
  !*** ./src/components/amp-header/header.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/postcss-loader/src??postcss!./header.css */ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./src/components/amp-header/header.css");

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

/***/ "./src/components/amp-header/header.jsx":
/*!**********************************************!*\
  !*** ./src/components/amp-header/header.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "../../node_modules/redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "../../node_modules/react-intl/lib/index.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.bindall */ "../../node_modules/lodash.bindall/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ampmod_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ampmod.svg */ "./src/components/amp-header/ampmod.svg");
/* harmony import */ var _ampmod_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ampmod_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lampmod_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lampmod.svg */ "./src/components/amp-header/lampmod.svg");
/* harmony import */ var _lampmod_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lampmod_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ampmod_canary_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ampmod-canary.svg */ "./src/components/amp-header/ampmod-canary.svg");
/* harmony import */ var _ampmod_canary_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ampmod_canary_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _button_button_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../button/button.jsx */ "./src/components/button/button.jsx");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header.css */ "./src/components/amp-header/header.css");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_header_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ampmod_branding__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ampmod/branding */ "../../node_modules/@ampmod/branding/src/index.js");
/* harmony import */ var _ampmod_branding__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ampmod_branding__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _menu_bar_tw_news_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../menu-bar/tw-news.jsx */ "./src/components/menu-bar/tw-news.jsx");














function isAprilFools() {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();
  return month === 3 && day === 1;
}
const Header = () => {
  const showFakeLogo = isAprilFools();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: _header_css__WEBPACK_IMPORTED_MODULE_11___default.a.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: _header_css__WEBPACK_IMPORTED_MODULE_11___default.a.mainGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "/",
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_header_css__WEBPACK_IMPORTED_MODULE_11___default.a.headerItem, _header_css__WEBPACK_IMPORTED_MODULE_11___default.a.ampmodLogo)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
    height: "26px",
    src:  false ? undefined : showFakeLogo ? _lampmod_svg__WEBPACK_IMPORTED_MODULE_8___default.a : _ampmod_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: showFakeLogo && !false ? "LampMod Logo" : "AmpMod Logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "/editor.html",
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_header_css__WEBPACK_IMPORTED_MODULE_11___default.a.headerItem, _header_css__WEBPACK_IMPORTED_MODULE_11___default.a.hoverable)
  }, "Create"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "https://ampmod.codeberg.page/manual",
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_header_css__WEBPACK_IMPORTED_MODULE_11___default.a.headerItem, _header_css__WEBPACK_IMPORTED_MODULE_11___default.a.hoverable)
  }, "Manual"), _ampmod_branding__WEBPACK_IMPORTED_MODULE_12__["APP_FORUMS"] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: _ampmod_branding__WEBPACK_IMPORTED_MODULE_12__["APP_FORUMS"],
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_header_css__WEBPACK_IMPORTED_MODULE_11___default.a.headerItem, _header_css__WEBPACK_IMPORTED_MODULE_11___default.a.hoverable)
  }, "Forums"), _ampmod_branding__WEBPACK_IMPORTED_MODULE_12__["APP_WIKI"] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: _ampmod_branding__WEBPACK_IMPORTED_MODULE_12__["APP_WIKI"],
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_header_css__WEBPACK_IMPORTED_MODULE_11___default.a.headerItem, _header_css__WEBPACK_IMPORTED_MODULE_11___default.a.hoverable)
  }, "Wiki"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: _ampmod_branding__WEBPACK_IMPORTED_MODULE_12__["APP_SOURCE"],
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_header_css__WEBPACK_IMPORTED_MODULE_11___default.a.headerItem, _header_css__WEBPACK_IMPORTED_MODULE_11___default.a.hoverable)
  }, "Source code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "https://ampmod.codeberg.page/extensions",
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_header_css__WEBPACK_IMPORTED_MODULE_11___default.a.headerItem, _header_css__WEBPACK_IMPORTED_MODULE_11___default.a.hoverable)
  }, "Extension gallery"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: _header_css__WEBPACK_IMPORTED_MODULE_11___default.a.spacer
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_menu_bar_tw_news_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/amp-header/lampmod.svg":
/*!***********************************************!*\
  !*** ./src/components/amp-header/lampmod.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/7e8a898241bdb88d80f4ae04c7aa26d3.svg";

/***/ }),

/***/ "./src/components/button/button.css":
/*!******************************************!*\
  !*** ./src/components/button/button.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/postcss-loader/src??postcss!./button.css */ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./src/components/button/button.css");

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

/***/ "./src/components/button/button.jsx":
/*!******************************************!*\
  !*** ./src/components/button/button.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.css */ "./src/components/button/button.css");
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_css__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["className", "disabled", "iconClassName", "iconSrc", "iconWidth", "iconHeight", "onClick", "children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }




const ButtonComponent = _ref => {
  let {
      className,
      disabled,
      iconClassName,
      iconSrc,
      iconWidth,
      iconHeight,
      onClick,
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  if (disabled) {
    onClick = function onClick() {};
  }
  const icon = iconSrc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(iconClassName, _button_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon),
    draggable: false,
    src: iconSrc,
    height: iconHeight,
    width: iconWidth
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_button_css__WEBPACK_IMPORTED_MODULE_3___default.a.outlinedButton, className),
    role: "button",
    onClick: onClick
  }, props), icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _button_css__WEBPACK_IMPORTED_MODULE_3___default.a.content
  }, children));
};
ButtonComponent.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  iconClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  iconSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  iconHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  iconWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonComponent);

/***/ }),

/***/ "./src/components/close-button/close-button.css":
/*!******************************************************!*\
  !*** ./src/components/close-button/close-button.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/postcss-loader/src??postcss!./close-button.css */ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./src/components/close-button/close-button.css");

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

/***/ "./src/components/close-button/close-button.jsx":
/*!******************************************************!*\
  !*** ./src/components/close-button/close-button.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _close_button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./close-button.css */ "./src/components/close-button/close-button.css");
/* harmony import */ var _close_button_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_close_button_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icon_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon--close.svg */ "./src/components/close-button/icon--close.svg");
/* harmony import */ var _icon_close_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_icon_close_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icon_close_orange_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon--close-orange.svg */ "./src/components/close-button/icon--close-orange.svg");
/* harmony import */ var _icon_close_orange_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_icon_close_orange_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_assets_icon_back_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/assets/icon--back.svg */ "./src/lib/assets/icon--back.svg");
/* harmony import */ var _lib_assets_icon_back_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_assets_icon_back_svg__WEBPACK_IMPORTED_MODULE_6__);







let closeIcons = {};
const CloseButton = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  "aria-label": "Close",
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_close_button_css__WEBPACK_IMPORTED_MODULE_3___default.a.closeButton, props.className, {
    [_close_button_css__WEBPACK_IMPORTED_MODULE_3___default.a.small]: props.size === CloseButton.SIZE_SMALL,
    [_close_button_css__WEBPACK_IMPORTED_MODULE_3___default.a.large]: props.size === CloseButton.SIZE_LARGE,
    [_close_button_css__WEBPACK_IMPORTED_MODULE_3___default.a.orange]: props.color === CloseButton.COLOR_ORANGE
  }),
  role: "button",
  tabIndex: "0",
  onClick: props.onClick
}, props.buttonType === "back" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  className: _close_button_css__WEBPACK_IMPORTED_MODULE_3___default.a.backIcon,
  src: _lib_assets_icon_back_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  draggable: false
}) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_close_button_css__WEBPACK_IMPORTED_MODULE_3___default.a.closeIcon, {
    [_close_button_css__WEBPACK_IMPORTED_MODULE_3___default.a[props.color]]: props.color !== CloseButton.COLOR_NEUTRAL
  }),
  src: props.color && closeIcons[props.color] ? closeIcons[props.color] : _icon_close_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  draggable: false
}));
CloseButton.SIZE_SMALL = "small";
CloseButton.SIZE_LARGE = "large";
CloseButton.COLOR_NEUTRAL = "neutral";
CloseButton.COLOR_GREEN = "green";
CloseButton.COLOR_ORANGE = "orange";
closeIcons = {
  [CloseButton.COLOR_NEUTRAL]: _icon_close_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  [CloseButton.COLOR_GREEN]: _icon_close_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  // TODO: temporary, need green icon
  [CloseButton.COLOR_ORANGE]: _icon_close_orange_svg__WEBPACK_IMPORTED_MODULE_5___default.a
};
CloseButton.propTypes = {
  buttonType: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(["back", "close"]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([CloseButton.SIZE_SMALL, CloseButton.SIZE_LARGE])
};
CloseButton.defaultProps = {
  color: CloseButton.COLOR_NEUTRAL,
  size: CloseButton.SIZE_LARGE,
  buttonType: "close"
};
/* harmony default export */ __webpack_exports__["default"] = (CloseButton);

/***/ }),

/***/ "./src/components/close-button/icon--close-orange.svg":
/*!************************************************************!*\
  !*** ./src/components/close-button/icon--close-orange.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5JY29uPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggZD0iTTE1LjQ2NDkzNSwxNS40NjcyOTcgQzE0Ljc2NDQwNTksMTYuMTc3NzcwNSAxMy42MTg1ODc3LDE2LjE3Nzc3MDUgMTIuOTA4MTE0MiwxNS40NjcyOTcgTDkuOTk4ODE4OTksMTIuNTU4MDAxOCBMNy4wODg0MTg4NSwxNS40NjcyOTcgQzYuMzgyMzY1MDYsMTYuMTczMzUwOCA1LjIzNzY1MTg3LDE2LjE3MzM1MDggNC41MzE1OTgwNywxNS40NjcyOTcgQzQuMTc5MTIzNjQsMTUuMTE0ODIyNiA0LjAwMDEyNDA5LDE0LjY0ODUzOTggNC4wMDAxMjQwOSwxNC4xODg4ODY2IEM0LjAwMDEyNDA5LDEzLjcyODEyODUgNC4xNzkxMjM2NCwxMy4yNjI5NTA2IDQuNTMxNTk4MDcsMTIuOTEwNDc2MiBMNy40NDA4OTMyOCwxMC4wMDExODEgTDQuNTI3MTc4MzMsNy4wODYzNjExMiBDNC4xNzM1OTg5Nyw2LjczMjc4MTc2IDMuOTk0NTk5NDEsNi4yNjc2MDM5MSA0LjAwMDEyNDA5LDUuODAyNDI2MDYgQzQuMDAwMTI0MDksNS4zNDE2Njc5NSA0LjE3MzU5ODk3LDQuODgyMDE0NzcgNC41MjcxNzgzMyw0LjUyOTU0MDM0IEM1LjIzMjEyNzE5LDMuODIzNDg2NTUgNi4zNzY4NDAzOCwzLjgyMzQ4NjU1IDcuMDgzOTk5MTEsNC41Mjk1NDAzNCBMOS45OTg4MTg5OSw3LjQ0MzI1NTI5IEwxMi45MTI1MzM5LDQuNTI5NTQwMzQgQzEzLjYxODU4NzcsMy44MjM0ODY1NSAxNC43NjQ0MDU5LDMuODIzNDg2NTUgMTUuNDcwNDU5Nyw0LjUyOTU0MDM0IEMxNi4xNzY1MTM0LDUuMjM0NDg5MiAxNi4xNzY1MTM0LDYuMzgwMzA3MzMgMTUuNDcwNDU5Nyw3LjA4NjM2MTEyIEwxMi41NTQ1MzQ4LDEwLjAwMTE4MSBMMTUuNDcwNDU5NywxMi45MTQ4OTYgQzE2LjE3NjUxMzQsMTMuNjIwOTQ5NyAxNi4xNzY1MTM0LDE0Ljc1NTcxODUgMTUuNDY0OTM1LDE1LjQ2NzI5NyIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9Ikljb24iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJFeHRlbnNpb25zL0Nvbm5lY3Rpb24vQ2xvc2UiPgogICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgaWQ9ImNsb3NlIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8ZyBpZD0iQ29sb3IvVGFuZ2VyaW5lLzFfVGFuZ2VyaW5lIiBtYXNrPSJ1cmwoI21hc2stMikiIGZpbGw9IiNGRjhDMUEiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iQ29sb3IiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),

/***/ "./src/components/close-button/icon--close.svg":
/*!*****************************************************!*\
  !*** ./src/components/close-button/icon--close.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3LjQ4IDcuNDgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi0tYWRkPC90aXRsZT48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIzLjc0IiB5MT0iNi40OCIgeDI9IjMuNzQiIHkyPSIxIi8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMSIgeTE9IjMuNzQiIHgyPSI2LjQ4IiB5Mj0iMy43NCIvPjwvc3ZnPg=="

/***/ }),

/***/ "./src/components/menu-bar/tw-news.css":
/*!*********************************************!*\
  !*** ./src/components/menu-bar/tw-news.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/postcss-loader/src??postcss!./tw-news.css */ "../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./src/components/menu-bar/tw-news.css");

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

/***/ "./src/components/menu-bar/tw-news.jsx":
/*!*********************************************!*\
  !*** ./src/components/menu-bar/tw-news.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ampmod_branding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ampmod/branding */ "../../node_modules/@ampmod/branding/src/index.js");
/* harmony import */ var _ampmod_branding__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ampmod_branding__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_isScratchDesktop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/isScratchDesktop */ "./src/lib/isScratchDesktop.js");
/* harmony import */ var _close_button_close_button_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../close-button/close-button.jsx */ "./src/components/close-button/close-button.jsx");
/* harmony import */ var _tw_news_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tw-news.css */ "./src/components/menu-bar/tw-news.css");
/* harmony import */ var _tw_news_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tw_news_css__WEBPACK_IMPORTED_MODULE_4__);





const LOCAL_STORAGE_KEY = "".concat( false ? undefined : "amp", ":closedNews");
const NEWS_ID = "privacy-1";
const getIsClosedInLocalStorage = () => {
  try {
    return localStorage.getItem(LOCAL_STORAGE_KEY) === NEWS_ID;
  } catch (e) {
    return false;
  }
};
const markAsClosedInLocalStorage = () => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, NEWS_ID);
  } catch (e) {
    // ignore
  }
};
class TWNews extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      closed: getIsClosedInLocalStorage()
    };
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose() {
    markAsClosedInLocalStorage();
    this.setState({
      closed: true
    }, () => {
      window.dispatchEvent(new Event("resize"));
    });
  }
  render() {
    const today = new Date();
    const is911 = today.getMonth() === 8 && today.getDate() === 11; // September is month 8 (0-indexed)
    if (this.state.closed || Object(_lib_isScratchDesktop__WEBPACK_IMPORTED_MODULE_2__["isScratchDesktop"])() || is911) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _tw_news_css__WEBPACK_IMPORTED_MODULE_4___default.a.news
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _tw_news_css__WEBPACK_IMPORTED_MODULE_4___default.a.text
    }, "The ".concat(_ampmod_branding__WEBPACK_IMPORTED_MODULE_1__["APP_NAME"], " privacy policy has been updated. You can also disable analytics. "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "privacy.html",
      target: "_blank",
      rel: "noreferrer"
    }, "View it here.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_close_button_close_button_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: _tw_news_css__WEBPACK_IMPORTED_MODULE_4___default.a.close,
      onClick: this.handleClose
    }));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (TWNews);

/***/ }),

/***/ "./src/lib/assets/icon--back.svg":
/*!***************************************!*\
  !*** ./src/lib/assets/icon--back.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5iYWNrLWljb248L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iYmFjay1pY29uIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTQuMTA4MDQ5MTIsOC41Nzc2NTA1NSBMOS4zMzIwMzYzOCwzLjM1MzY2MzI5IEM5LjYzODIwNDEzLDMuMDQ1NTgxOTkgMTAuMTE2NTkxMiwzLjA0NTU4MTk5IDEwLjQyMjc1OSwzLjM1MzY2MzI5IEwxNS42NDY3NDYyLDguNTc3NjUwNTUgQzE2LjE0NDI2ODgsOS4wNzUxNzMxNCAxNS43ODA2OTQ2LDkuODk2MDg1NDMgMTUuMDkxODE3Miw5Ljg5NjA4NTQzIEwxMi40ODkzOTEzLDkuODk2MDg1NDMgTDEwLjkzOTQxNzEsMTYuMDM4NTc1OSBDMTAuNzg2MzMzMiwxNi42MzM2ODk1IDEwLjE3Mzk5NzcsMTYuOTk1MzUwMiA5LjU4MDc5NzY4LDE2Ljg0MjI2NjMgQzkuMTU5ODE3MDIsMTYuNzQ4NTAyNCA4Ljg1MzY0OTI3LDE2LjQyMzE5OTIgOC43NTc5NzE4NCwxNi4wMzg1NzU5IEw3LjIwNzk5NzYsOS44OTYwODU0MyBMNC42NjI5NzgxNyw5Ljg5NjA4NTQzIEMzLjk3NDEwMDczLDkuODk2MDg1NDMgMy42MTA1MjY1Myw5LjA3NTE3MzE0IDQuMTA4MDQ5MTIsOC41Nzc2NTA1NSIgaWQ9IkZpbGwtMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS44NzczOTgsIDEwLjAwMDAwMCkgcm90YXRlKC05MC4wMDAwMDApIHRyYW5zbGF0ZSgtOS44NzczOTgsIC0xMC4wMDAwMDApICI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),

/***/ "./src/lib/isScratchDesktop.js":
/*!*************************************!*\
  !*** ./src/lib/isScratchDesktop.js ***!
  \*************************************/
/*! exports provided: default, isScratchDesktop, notScratchDesktop, setIsScratchDesktop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScratchDesktop", function() { return isScratchDesktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notScratchDesktop", function() { return notScratchDesktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsScratchDesktop", function() { return setIsScratchDesktop; });
/**
 * Internal stored state. Not valid until after at least one call to `setIsScratchDesktop()`.
 * @type {boolean}
 */
let _isScratchDesktop; // undefined = not ready yet

/**
 * Tell the `isScratchDesktop()` whether or not the GUI is running under Scratch Desktop.
 * @param {boolean} value - the new value which `isScratchDesktop()` should return in the future.
 */
const setIsScratchDesktop = function setIsScratchDesktop(value) {
  _isScratchDesktop = value;
};

/**
 * @returns {boolean} - true if it seems like the GUI is running under Scratch Desktop; false otherwise.
 * If `setIsScratchDesktop()` has not yet been called, this can return `undefined`.
 */
const isScratchDesktop = function isScratchDesktop() {
  return _isScratchDesktop;
};

/**
 * @returns {boolean} - false if it seems like the GUI is running under Scratch Desktop; true otherwise.
 */
const notScratchDesktop = function notScratchDesktop() {
  return !isScratchDesktop();
};
/* harmony default export */ __webpack_exports__["default"] = (isScratchDesktop);


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

/***/ "./src/playground/public-path.js":
/*!***************************************!*\
  !*** ./src/playground/public-path.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
if (false) {}

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** ../locale-data/index.js (ignored) ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!*******************************!*\
  !*** ./lib/locales (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** ./lib/locales (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=credits~headeronly~home~newcompiler.js.map