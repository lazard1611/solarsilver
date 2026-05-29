/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/sections/goal-main-product.js":
/*!***************************************************!*\
  !*** ./src/scripts/sections/goal-main-product.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\nconst translateButton = () => {\n  const translateBuyNow = () => {\n    const buttons = document.querySelectorAll(`\n            shopify-buy-it-now-button button,\n            shopify-payment-button button,\n            button[aria-label*=\"Buy it now\"],\n            .shopify-payment-button__button\n        `);\n    buttons.forEach(button => {\n      let text = button.textContent.trim();\n      if (text.includes('Buy it now') || button.getAttribute('aria-label')?.includes('Buy it now')) {\n        button.textContent = button.textContent.replace('Buy it now', 'Купити зараз');\n        if (button.hasAttribute('aria-label')) {\n          button.setAttribute('aria-label', button.getAttribute('aria-label').replace('Buy it now', 'Купити зараз'));\n        }\n      }\n    });\n  };\n  translateBuyNow();\n  const observer = new MutationObserver(translateBuyNow);\n  observer.observe(document.body, {\n    childList: true,\n    subtree: true\n  });\n};\ndocument.addEventListener('DOMContentLoaded', () => {\n  translateButton();\n});\n\n//# sourceURL=webpack://project_name/./src/scripts/sections/goal-main-product.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/sections/goal-main-product.js"](0,__webpack_exports__,__webpack_require__);
/******/ 	
/******/ })()
;