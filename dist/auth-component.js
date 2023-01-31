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

/***/ "./node_modules/css-loader/dist/cjs.js!./app/components/authorization/auth.components.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/components/authorization/auth.components.css ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\nbody .login {\\r\\n   display: flex;\\r\\n   justify-content: center;\\r\\n   background-color: green;\\r\\n   font-family: Algerian;\\r\\n   font-size: 30px;\\r\\n}\\r\\nbody .container {\\r\\n   border-radius:10px ;\\r\\n   border: 4px solid black;\\r\\n   padding: 50px;\\r\\n   margin-top: 200px;\\r\\n   display: flex;\\r\\n   justify-content: center;\\r\\n   background-color: #82c482;\\r\\n   width:400px\\r\\n}\\r\\nbody .container .loginForm #btn {\\r\\n   margin-left: 120px;\\r\\n   display: flex;\\r\\n   justify-content: center;\\r\\n}\\r\\nbody .container .loginForm .input-type{\\r\\n   margin-left: 10px;\\r\\n   padding: 20px;\\r\\n}\\r\\nbody .container .loginForm .input-group .label {\\r\\n   font-size: 20px;\\r\\n   margin-right: 10px;\\r\\n\\r\\n   text-decoration:dashed;\\r\\n}\\r\\nbody .container .loginForm .input-type input{\\r\\n   margin-top: 10px;\\r\\n   margin-left: 50px;\\r\\n   width: 100px;\\r\\n   height: 20px;\\r\\n}\\r\\n\\r\\nbody .help-block #forgot, body .help-block #policy{\\r\\n   display: flex;\\r\\n   justify-content: center;\\r\\n   margin-top: 30px;\\r\\n   font-size: 30px;\\r\\n   font-family: Algerian;\\r\\n   color: black;\\r\\n   background-color: green ;\\r\\n   opacity: 0.5;\\r\\n   margin-left: 300px;\\r\\n   margin-right: 200px;\\r\\n}\\r\\nbody .help-block #policy {\\r\\n   margin-left:400px;\\r\\n\\r\\n}\\r\\nbody .help-block #forgot{\\r\\n   margin-right: 300px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/authorization/auth.components.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://vanilla_spa_framework/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./app/components/authorization/auth.component.html":
/*!**********************************************************!*\
  !*** ./app/components/authorization/auth.component.html ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// Imports\nvar ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\nvar ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ./auth.components.css */ \"./app/components/authorization/auth.components.css\");\nvar ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ./auth.component.ts */ \"./app/components/authorization/auth.component.ts\");\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\r\\n    <script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"></script>\\r\\n<!--    <script defer src=\\\"/js/login.js\\\"></script>-->\\r\\n</head>\\r\\n<main class=\\\"main\\\" >\\r\\n<body class=\\\"body-login\\\" style=\\\"background-image: url('VanillaSPA/app/components/home/auth.png');\\\">\\r\\n<h4 class=\\\"login\\\">  <span bind-text=\\\"auth\\\"></span></h4>\\r\\n<div class=\\\"container\\\" style=\\\"margin-top: 50px\\\">\\r\\n\\r\\n    <br>\\r\\n    <form name=\\\"myForm\\\" action=\\\"#\\\" class=\\\"loginForm\\\" onsubmit=\\\"return validateForm()\\\" method=\\\"post\\\" required>\\r\\n        <h2 class=\\\"text-center\\\">Login</h2>\\r\\n        <div class=\\\"input-group\\\">\\r\\n            <label for=\\\"username\\\" class=\\\"label\\\">Username</label>\\r\\n            <input required minlength=\\\"3\\\" maxlength=\\\"15\\\" type=\\\"text\\\" placeholder=\\\"nickname\\\" id=\\\"username\\\" class=\\\"input\\\">\\r\\n            <span class=\\\"error-message\\\"></span>\\r\\n        </div>\\r\\n        <br>\\r\\n        <div class=\\\"input-group\\\">\\r\\n            <label for=\\\"password\\\" class=\\\"label\\\"> Password </label>\\r\\n            <input required minlength=\\\"8\\\"  type=\\\"password\\\" placeholder=\\\"pass\\\" id=\\\"password\\\" class=\\\"input\\\">\\r\\n            <span class=\\\"error-message\\\"></span>\\r\\n            <br>\\r\\n\\r\\n        </div>\\r\\n        <div class=\\\"input-type\\\">\\r\\n            <strong>Are you accept our policy?</strong>\\r\\n            <input type=\\\"checkbox\\\">\\r\\n\\r\\n        </div>\\r\\n        <button value=\\\"Submit\\\" id=\\\"btn\\\" type=\\\"submit\\\">Login</button>\\r\\n    </form>\\r\\n</div>\\r\\n<div class=\\\"help-block\\\">\\r\\n    <a id=\\\"forgot\\\" href=\\\"#\\\">Forgot password?</a>\\r\\n    <a id='policy' href=\\\"#\\\">Our policy</a>\\r\\n</div>\\r\\n\\r\\n</body>\\r\\n</main>\\r\\n</html>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/authorization/auth.component.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://vanilla_spa_framework/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./app/components/authorization/auth.components.css":
/*!**********************************************************!*\
  !*** ./app/components/authorization/auth.components.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_auth_components_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./auth.components.css */ \"./node_modules/css-loader/dist/cjs.js!./app/components/authorization/auth.components.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_auth_components_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_auth_components_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/authorization/auth.components.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://vanilla_spa_framework/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthComponent\": () => (/* binding */ AuthComponent),\n/* harmony export */   \"validateForm\": () => (/* binding */ validateForm)\n/* harmony export */ });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component */ \"./app/component.ts\");\n/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../observable */ \"./app/observable.ts\");\n\r\n\r\nfunction validateForm() {\r\n    // @ts-ignore\r\n    var x = document.forms[\"myForm\"][\"username\"].value;\r\n    if (x == \"\") {\r\n        alert(\"Name must be filled out\");\r\n        return false;\r\n    }\r\n}\r\n// 👇️ const input: HTMLInputElement | null\r\nconst input = document.getElementById('username');\r\nconst value = input === null || input === void 0 ? void 0 : input.value;\r\nconsole.log(value); // 👉️ \"Initial value\"\r\nif (input != null) {\r\n    console.log(input.value); // 👉️ \"Initial value\"\r\n}\r\ninput === null || input === void 0 ? void 0 : input.addEventListener('input', function (event) {\r\n    const target = event.target;\r\n    console.log(target.value);\r\n});\r\n// input?.addEventListener('input', function (event) {\r\n//         const target = event.target as HTMLInputElement;\r\n//         console.log(target.value);\r\n// });\r\nnew _component__WEBPACK_IMPORTED_MODULE_0__.Component().render({\r\n    'path': 'auth-component',\r\n    'template': __webpack_require__(/*! ./auth.component.html */ \"./app/components/authorization/auth.component.html\"),\r\n    // 'style': require('./auth.component.scss')\r\n});\r\nclass AuthComponent {\r\n    validateAuth(auth) {\r\n        if (auth != 1) {\r\n        }\r\n        else {\r\n            document.querySelector(\"body\").style.display = \"block\";\r\n        }\r\n    }\r\n    logOut() {\r\n        localStorage.removeItem(\"auth\");\r\n    }\r\n    constructor() {\r\n        this.auth = new _observable__WEBPACK_IMPORTED_MODULE_1__.Observable('auth');\r\n        this.auth.subscribe('authorization');\r\n        // document.querySelector(\"body\").style.display = \"none\";\r\n        // const auth = localStorage.getItem(\"auth\");\r\n        // this.validateAuth(auth);\r\n    }\r\n}\r\nnew AuthComponent();\r\n\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/authorization/auth.component.ts?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./app/components/authorization/auth.component.ts");
/******/ 	
/******/ })()
;