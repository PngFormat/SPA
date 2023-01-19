/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/components/authorization/auth.component.html":
/*!**********************************************************!*\
  !*** ./app/components/authorization/auth.component.html ***!
  \**********************************************************/
/***/ ((module) => {

eval("// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <link rel=\\\"stylesheet\\\" href=\\\"/css/style.min.css\\\">\\r\\n    <script defer src=\\\"/js/login.js\\\"></script>\\r\\n</head>\\r\\n<body class=\\\"login\\\">\\r\\n<h4 class=\\\"text-center\\\"> Form:  <span bind-text=\\\"auth\\\"></span></h4>\\r\\n\\r\\n<div class=\\\"container\\\">\\r\\n    <h2 class=\\\"\\\">Login</h2>\\r\\n    <br>\\r\\n    <form action=\\\"#\\\" class=\\\"loginForm\\\">\\r\\n        <div class=\\\"input-group\\\">\\r\\n            <label for=\\\"username\\\" class=\\\"label\\\">Username</label>\\r\\n            <input type=\\\"text\\\" id=\\\"username\\\" class=\\\"input\\\">\\r\\n            <span class=\\\"error-message\\\"></span>\\r\\n        </div>\\r\\n        <br>\\r\\n        <div class=\\\"input-group\\\">\\r\\n            <label for=\\\"password\\\" class=\\\"label\\\">Password</label>\\r\\n            <input type=\\\"password\\\" id=\\\"password\\\" class=\\\"input\\\">\\r\\n            <span class=\\\"error-message\\\"></span>\\r\\n        </div>\\r\\n        <br>\\r\\n        <button class=\\\"button\\\" type=\\\"submit\\\">Login</button>\\r\\n    </form>\\r\\n</div>\\r\\n</body>\\r\\n</html>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/authorization/auth.component.html?");

/***/ }),

/***/ "./app/component.ts":
/*!**************************!*\
  !*** ./app/component.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\r\n    constructor() {\r\n    }\r\n    render(el) {\r\n        if (globalThis.routes.findIndex((x) => x.path === el['path']) !== -1) {\r\n            var root = document.getElementById('root');\r\n            root.innerHTML = `<` + el['path'] + `>` + el['template'] + `</` + el['path'] + `>`;\r\n            var style = document.createElement('style');\r\n            style.innerHTML = el['style'];\r\n            root.appendChild(style);\r\n        }\r\n        else {\r\n            var nested_comp = document.getElementsByTagName(el['path'])[0];\r\n            var style = document.createElement('style');\r\n            style.innerHTML = el['style'];\r\n            nested_comp.innerHTML = el['template'];\r\n            nested_comp.appendChild(style);\r\n            var script = document.createElement('script');\r\n            script.src = \"../dist/\" + el['path'] + \".js\";\r\n            nested_comp.appendChild(script);\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/component.ts?");

/***/ }),

/***/ "./app/components/authorization/auth.component.ts":
/*!********************************************************!*\
  !*** ./app/components/authorization/auth.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthComponent\": () => (/* binding */ AuthComponent)\n/* harmony export */ });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component */ \"./app/component.ts\");\n/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../observable */ \"./app/observable.ts\");\n\r\n\r\nnew _component__WEBPACK_IMPORTED_MODULE_0__.Component().render({\r\n    'path': 'auth-component',\r\n    'template': __webpack_require__(/*! ./auth.component.html */ \"./app/components/authorization/auth.component.html\"),\r\n    // 'style': require('./auth.component.scss')\r\n});\r\nclass AuthComponent {\r\n    validateAuth(auth) {\r\n        if (auth != 1) {\r\n        }\r\n        else {\r\n            document.querySelector(\"body\").style.display = \"block\";\r\n        }\r\n    }\r\n    logOut() {\r\n        localStorage.removeItem(\"auth\");\r\n    }\r\n    constructor() {\r\n        this.auth = new _observable__WEBPACK_IMPORTED_MODULE_1__.Observable('auth');\r\n        this.auth.subscribe('authorization');\r\n        // document.querySelector(\"body\").style.display = \"none\";\r\n        // const auth = localStorage.getItem(\"auth\");\r\n        // this.validateAuth(auth);\r\n    }\r\n}\r\nnew AuthComponent();\r\n\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/authorization/auth.component.ts?");

/***/ }),

/***/ "./app/observable.ts":
/*!***************************!*\
  !*** ./app/observable.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Observable\": () => (/* binding */ Observable)\n/* harmony export */ });\nclass Observable {\r\n    constructor(data) {\r\n        this._data = {\r\n            set current(a) {\r\n                if (document.querySelector(\"[bind-text='\" + data + \"']\") != undefined) {\r\n                    document.querySelector(\"[bind-text='\" + data + \"']\").innerHTML = a;\r\n                }\r\n                else if (document.querySelector(\"[bind-class='\" + data + \"']\") != undefined) {\r\n                    if (document.querySelector(\"[bind-class='\" + data + \"']\").classList != undefined) {\r\n                        document.querySelector(\"[bind-class='\" + data + \"']\").className = a;\r\n                    }\r\n                    else {\r\n                        document.querySelector(\"[bind-class='\" + data + \"']\").classList.add = a;\r\n                    }\r\n                }\r\n            }\r\n        };\r\n    }\r\n    subscribe(param) {\r\n        this._data.current = param;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/observable.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/components/authorization/auth.component.ts");
/******/ 	
/******/ })()
;