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

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUserSelectedCity\": () => (/* binding */ getUserSelectedCity),\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\nfunction getUserSelectedCity() {\n  const form = document.getElementById(\"form\");\n\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const city = document.getElementById(\"user-city\").value;\n    getWeather(city);\n  });\n}\n\nasync function getWeather(city) {\n  const response = await fetch(\n    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=050bbef77d1e1eeb2549979a3c38ae80&units=metric`,\n    { mode: \"cors\" }\n  );\n\n  const data = await response.json();\n\n  const weatherMain = data.weather[0].main;\n  const weatherDescription = data.weather[0].description;\n  const temp = data.main.temp;\n  const feelsLike = data.main.feels_like;\n  const tempMin = data.main.temp_min;\n  const tempMax = data.main.temp_max;\n  const humidity = data.main.humidity;\n  const windSpeed = data.wind.speed;\n  const name = data.name;\n\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.dom)(\n    weatherMain,\n    weatherDescription,\n    temp,\n    feelsLike,\n    tempMin,\n    tempMax,\n    humidity,\n    windSpeed,\n    name\n  );\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/api.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dom\": () => (/* binding */ dom)\n/* harmony export */ });\nfunction dom(\n  weatherMain,\n  weatherDescription,\n  temp,\n  feelsLike,\n  tempMin,\n  tempMax,\n  humidity,\n  windSpeed,\n  name\n) {\n  temp += \" °C\"\n  feelsLike += \" °C\"\n  tempMin += \" °C\"\n  tempMax += \" °C\"\n  weatherMain = weatherMain.toUpperCase();\n  weatherDescription = weatherDescription.toUpperCase();\n\n  const container = document.getElementById(\"weather-information-container\");\n  const card = document.createElement(\"div\");\n  card.classList = \"card\";\n\n  const cardHeader = document.createElement(\"h3\");\n  cardHeader.classList = \"card-header\";\n  cardHeader.innerText = name;\n\n  const cardLeft = document.createElement(\"div\");\n  cardLeft.className = \"card-left\";\n  cardLeft.innerHTML = `<p>${temp}</p>\\n<p>${feelsLike}</p>`;\n\n  const cardRight = document.createElement(\"div\");\n  cardRight.className = \"card-right\";\n  cardRight.innerHTML = `<p>${weatherMain}</p>\n    \\n<p>${weatherDescription}</p>\n    \\n<p>${tempMin} | ${tempMax}</p>\n    \\n<p>${humidity}</p>\n    \\n<p>${windSpeed}</p>`;\n\n  card.append(cardHeader, cardLeft, cardRight);\n  container.appendChild(card);\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload.js */ \"./src/pageload.js\");\n\n\n(0,_pageload_js__WEBPACK_IMPORTED_MODULE_0__.loadup)();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadup\": () => (/* binding */ loadup)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n\n\nfunction loadup() {\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getUserSelectedCity)();\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/pageload.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;