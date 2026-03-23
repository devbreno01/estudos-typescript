/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/exercicio-front/form-control.ts"
/*!*********************************************!*\
  !*** ./src/exercicio-front/form-control.ts ***!
  \*********************************************/
() {


var SHOW_ERROR_MESSAGE = 'show_error_message';
var form = document.querySelector('.form');
var username = document.querySelector('.username');
var email = document.querySelector('.email');
var password = document.querySelector('.password');
var password2 = document.querySelector('.password2');
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Enviando");
    var formElement = event.currentTarget;
    hideErrorMessages(formElement);
    checkForEmptyFields(username, email, password, password2);
});
function checkForEmptyFields() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    console.log('Enrty checkForEmptyFields');
    inputs.forEach(function (input) {
        if (!input.value) {
            showErrorMessage(input, 'Campo não pode ficar vazio');
        }
    });
}
function hideErrorMessages(form) {
    form
        .querySelectorAll("." + SHOW_ERROR_MESSAGE)
        .forEach(function (item) { return item.classList.remove(SHOW_ERROR_MESSAGE); });
}
function showErrorMessage(input, msg) {
    var formFields = input.parentElement;
    console.log(formFields);
    var errorMessage = formFields.querySelector(".show-error-message");
    errorMessage.innerText = msg;
    formFields.classList.add(SHOW_ERROR_MESSAGE);
}
showErrorMessage(username, 'MENSAGEM');
console.log("testee");


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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!************************************************!*\
  !*** ./src/exercicio-front/exercicio-front.ts ***!
  \************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./form-control */ "./src/exercicio-front/form-control.ts");
console.log('testee frontendd');

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map