/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/exercicio-front/form-control.ts"
/*!*********************************************!*\
  !*** ./src/exercicio-front/form-control.ts ***!
  \*********************************************/
() {

throw new Error("Module build failed (from ./node_modules/ts-loader/index.js):\nError: TypeScript emitted no output for C:\\Users\\breno\\Documents\\codigo2\\estudos-typescript\\src\\exercicio-front\\form-control.ts.\n    at makeSourceMapAndFinish (C:\\Users\\breno\\Documents\\codigo2\\estudos-typescript\\node_modules\\ts-loader\\dist\\index.js:55:18)\n    at successLoader (C:\\Users\\breno\\Documents\\codigo2\\estudos-typescript\\node_modules\\ts-loader\\dist\\index.js:42:5)\n    at Object.loader (C:\\Users\\breno\\Documents\\codigo2\\estudos-typescript\\node_modules\\ts-loader\\dist\\index.js:23:5)");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!************************************************!*\
  !*** ./src/exercicio-front/exercicio-front.ts ***!
  \************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./form-control */ "./src/exercicio-front/form-control.ts");
console.log('testee');

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map