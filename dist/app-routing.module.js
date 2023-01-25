/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/app-routing.module.ts":
/*!***********************************!*\
  !*** ./app/app-routing.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Router\": () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ \"./app/routes.ts\");\n// render \r\n\r\n// SINGLE PAGE APPLICATION'S ROUTES \r\nclass Router {\r\n    constructor() {\r\n        globalThis.routes = _routes__WEBPACK_IMPORTED_MODULE_0__.Routes;\r\n        // route change view\r\n        var hashStores = [];\r\n        if (hashStores.length == 0) {\r\n            hashStores.push(window.location.hash);\r\n            globalThis.routes.forEach((el) => {\r\n                if (window.location.hash === '#' + el.path) {\r\n                    this.changeView(el);\r\n                }\r\n            });\r\n        }\r\n        window.onhashchange = () => {\r\n            hashStores.push(window.location.hash);\r\n            globalThis.routes.forEach((el) => {\r\n                if (window.location.hash === '#' + el.path) {\r\n                    this.changeView(el);\r\n                }\r\n            });\r\n        };\r\n        window.active = this.active;\r\n    }\r\n    changeView(el) {\r\n        var root = document.getElementById('root');\r\n        var script = document.createElement('script');\r\n        script.src = \"../dist/\" + el['path'] + \".js\";\r\n        root.appendChild(script);\r\n    }\r\n    active(e) {\r\n        for (var i = 0; i < document.getElementsByClassName('nav-link').length; i++) {\r\n            document.getElementsByClassName('nav-link')[i].classList.remove(\"active\");\r\n        }\r\n        e.classList.add('active');\r\n    }\r\n}\r\nnew Router();\r\n\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/app-routing.module.ts?");

/***/ }),

/***/ "./app/routes.ts":
/*!***********************!*\
  !*** ./app/routes.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Routes\": () => (/* binding */ Routes)\n/* harmony export */ });\n// SINGLE PAGE APPLICATION'S ROUTES \r\nconst Routes = [\r\n    {\r\n        'path': 'home-component'\r\n    },\r\n    {\r\n        'path': 'contact-component'\r\n    },\r\n    {\r\n        'path': 'auth-component'\r\n    },\r\n    {\r\n        'path': 'regis-component'\r\n    }\r\n];\r\n\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/routes.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/app-routing.module.ts");
/******/ 	
/******/ })()
;