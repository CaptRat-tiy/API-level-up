/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const mathy = (function () {

  const add = function(a, b) {
    return (a+b);
  }

  const subtract = function(a, b) {
    return (a-b);
  }

  const cheezeyPotatoes = function (a, b) {
    return (add(a,b) + " and " + subtract(a,b));
  }

  return {
    add: add,
    subtract: subtract,
    cheezeyPotatoes: cheezeyPotatoes,
  }
})();

module.exports = mathy;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

const objLiteral = {
  words: ['world', 'Utah', 'class', 'learners'],
  randomWord: '',
  setRandomWord: function() {
    const random = Math.floor(Math.random() * this.words.length);
    this.randomWord = this.words[random];
  },
  getRandomWord: function() {
    console.log(this.randomWord);
    return this.randomWord;
  }
}
//
// objLiteral.setRandomWord();
// objLiteral.getRandomWord();
// objLiteral.randomWord = "not in the list";
// objLiteral.getRandomWord();

module.exports = objLiteral;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const revealing = (function() {

  const words = ['world', 'Utah', 'class', 'learners'];

  let randomWord = '';

  function setRandomWord () {
    const random = Math.floor(Math.random() *
    words.length);
    randomWord = words[random];
  };

  function getRandomWord() {
    console.log(randomWord);
    return randomWord;
  };

  return {
    setRandomWord: setRandomWord,
    getRandomWord: getRandomWord,
    randomWord: randomWord
  };

})();

module.exports = revealing;


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const objLiteral = __webpack_require__(1);
const revealing = __webpack_require__(2);
const mathy = __webpack_require__(0);

console.log(mathy.add(1,2));
console.log(mathy.subtract(2,1));
console.log(mathy.cheezeyPotatoes(42,3.14));



objLiteral.setRandomWord();
objLiteral.getRandomWord();
objLiteral.randomWord = "not in the list";
objLiteral.getRandomWord();

revealing.setRandomWord();
revealing.getRandomWord();
revealing.randomWord = "this is not in the list";
revealing.getRandomWord();


/***/ })
/******/ ]);