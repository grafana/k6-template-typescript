(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/auth.api.ts":
/*!*************************!*\
  !*** ./api/auth.api.ts ***!
  \*************************/
/*! exports provided: AuthApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthApi\", function() { return AuthApi; });\n/* harmony import */ var k6_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! k6/http */ \"k6/http\");\n/* harmony import */ var k6_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(k6_http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ \"./globals.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar AuthApi = /*#__PURE__*/function () {\n  function AuthApi() {\n    _classCallCheck(this, AuthApi);\n\n    _defineProperty(this, \"url\", \"\".concat(_globals__WEBPACK_IMPORTED_MODULE_1__[\"baseURL\"], \"/auth\"));\n  }\n\n  _createClass(AuthApi, [{\n    key: \"login\",\n    value: function login(credentials) {\n      return k6_http__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"\".concat(this.url, \"/token/login/\"), credentials);\n    }\n  }]);\n\n  return AuthApi;\n}();\n\n//# sourceURL=webpack:///./api/auth.api.ts?");

/***/ }),

/***/ "./api/user.api.ts":
/*!*************************!*\
  !*** ./api/user.api.ts ***!
  \*************************/
/*! exports provided: UserApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserApi\", function() { return UserApi; });\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ \"./globals.ts\");\n/* harmony import */ var k6_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! k6/http */ \"k6/http\");\n/* harmony import */ var k6_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(k6_http__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar UserApi = /*#__PURE__*/function () {\n  function UserApi() {\n    _classCallCheck(this, UserApi);\n\n    _defineProperty(this, \"url\", \"\".concat(_globals__WEBPACK_IMPORTED_MODULE_0__[\"baseURL\"], \"/user\"));\n  }\n\n  _createClass(UserApi, [{\n    key: \"register\",\n    value: function register(user) {\n      return k6_http__WEBPACK_IMPORTED_MODULE_1___default.a.post(\"\".concat(this.url, \"/register/\"), user);\n    }\n  }]);\n\n  return UserApi;\n}();\n\n//# sourceURL=webpack:///./api/user.api.ts?");

/***/ }),

/***/ "./globals.ts":
/*!********************!*\
  !*** ./globals.ts ***!
  \********************/
/*! exports provided: baseURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"baseURL\", function() { return baseURL; });\nvar baseURL = 'https://test-api.k6.io';\n\n//# sourceURL=webpack:///./globals.ts?");

/***/ }),

/***/ "./helpers/random-username.ts":
/*!************************************!*\
  !*** ./helpers/random-username.ts ***!
  \************************************/
/*! exports provided: getRandomUsername */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomUsername\", function() { return getRandomUsername; });\nvar getRandomUsername = function getRandomUsername() {\n  var timestamp = new Date().getTime();\n  return \"bert_\".concat(timestamp, \"_\").concat(__VU);\n};\n\n//# sourceURL=webpack:///./helpers/random-username.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: options, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var k6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! k6 */ \"k6\");\n/* harmony import */ var k6__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(k6__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_auth_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/auth.api */ \"./api/auth.api.ts\");\n/* harmony import */ var _api_user_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/user.api */ \"./api/user.api.ts\");\n/* harmony import */ var _helpers_random_username__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/random-username */ \"./helpers/random-username.ts\");\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options */ \"./options.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"options\", function() { return _options__WEBPACK_IMPORTED_MODULE_4__[\"options\"]; });\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar auth = new _api_auth_api__WEBPACK_IMPORTED_MODULE_1__[\"AuthApi\"]();\nvar users = new _api_user_api__WEBPACK_IMPORTED_MODULE_2__[\"UserApi\"]();\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var credentials = {\n    username: Object(_helpers_random_username__WEBPACK_IMPORTED_MODULE_3__[\"getRandomUsername\"])(),\n    password: 'a-topsecret-password'\n  };\n  Object(k6__WEBPACK_IMPORTED_MODULE_0__[\"group\"])('register user', function () {\n    var registrationResponse = users.register(_objectSpread(_objectSpread({}, credentials), {}, {\n      email: \"\".concat(credentials.username, \"@example.com\"),\n      first_name: 'Bert',\n      last_name: 'Crocson'\n    }));\n    Object(k6__WEBPACK_IMPORTED_MODULE_0__[\"check\"])(registrationResponse, {\n      'registration was successful': function registrationWasSuccessful(r) {\n        return r.status === 201;\n      },\n      'response contain the username': function responseContainTheUsername(r) {\n        return r.json('username') === credentials.username;\n      },\n      'response does not contain the password': function responseDoesNotContainThePassword(r) {\n        return !r.json('password');\n      }\n    });\n  });\n  Object(k6__WEBPACK_IMPORTED_MODULE_0__[\"group\"])('login as user', function () {\n    var authResponse = auth.login(credentials);\n    var token = authResponse.json('access');\n    Object(k6__WEBPACK_IMPORTED_MODULE_0__[\"check\"])(token, {\n      'login was successful': function loginWasSuccessful() {\n        return authResponse.status === 200;\n      },\n      'received a token': function receivedAToken(token) {\n        return !!token;\n      }\n    });\n  });\n  Object(k6__WEBPACK_IMPORTED_MODULE_0__[\"sleep\"])(1);\n});\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./options.ts":
/*!********************!*\
  !*** ./options.ts ***!
  \********************/
/*! exports provided: options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"options\", function() { return options; });\nvar options = {\n  vus: 10,\n  duration: '10s'\n};\n\n//# sourceURL=webpack:///./options.ts?");

/***/ }),

/***/ "k6":
/*!*********************!*\
  !*** external "k6" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"k6\");\n\n//# sourceURL=webpack:///external_%22k6%22?");

/***/ }),

/***/ "k6/http":
/*!**************************!*\
  !*** external "k6/http" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"k6/http\");\n\n//# sourceURL=webpack:///external_%22k6/http%22?");

/***/ })

/******/ })));