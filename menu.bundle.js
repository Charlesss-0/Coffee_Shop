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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuPage)\n/* harmony export */ });\n/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.css */ \"./src/menu.css\");\n/* harmony import */ var _images_menu_image_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu-image.jpg */ \"./src/images/menu-image.jpg\");\n/* harmony import */ var _images_latte_art_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/latte-art.png */ \"./src/images/latte-art.png\");\n\n\n\nclass MenuPage {\n  render() {\n    const mainContent = document.createElement('main');\n    mainContent.classList.add('menu-main-content');\n    mainContent.innerHTML = `\n            <section class=\"menu-main-section\">\n                <div class=\"coffee-menu-wrapper\">\n                    <h1>\n                        Coffee Menu\n                    </h1>\n                    <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit\n                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\n                    </p>\n\n                    <div class=\"menu\">\n                        <ul>\n                            <li>\n                                <img src=\"./images/latte-art.png\" alt=\"coffee-icon\">\n                                <div class=\"ttl-n-prc\">\n                                    <h2>Espresso</h2><hr>\n                                    <span>$2.50</span>\n                                </div>\n                                <span class=\"cf-in\">\n                                    A concentrated shot of coffee made by forcing hot water through finely-ground coffee beans.\n                                    It's the foundation for many other coffee beverages, known for its intense flavor and smooth texture.\n                                </span>\n                            </li>\n\n                            <li>\n                                <img src=\"./images/latte-art.png\" alt=\"coffee-icon\">\n                                <div class=\"ttl-n-prc\">\n                                    <h2>Cappuccino</h2><hr>\n                                    <span>$3.50</span>\n                                </div>\n                                <span class=\"cf-in\">\n                                    A classic Italian coffee made with equal parts espresso, steamed milk, and frothed milk. \n                                    Its delightful balance of espresso and creamy foam on top creates a rich and satisfying taste.\n                                </span>\n                            </li>\n\n                            <li>\n                                <img src=\"./images/latte-art.png\" alt=\"coffee-icon\">\n                                <div class=\"ttl-n-prc\">\n                                    <h2>Latte</h2><hr>\n                                    <span>$4.00</span>\n                                </div>\n                                <span class=\"cf-in\">\n                                    A smooth and mellow coffee drink made with a shot of espresso and steamed milk. \n                                    It has a higher milk-to-coffee ratio, resulting in a creamy, comforting beverage.\n                                </span>\n                            </li>\n\n                            <li>\n                                <img src=\"./images/latte-art.png\" alt=\"coffee-icon\">\n                                <div class=\"ttl-n-prc\">\n                                    <h2>Mocha</h2><hr>\n                                    <span>$4.50</span>\n                                </div>\n                                <span class=\"cf-in\">\n                                    A delightful blend of espresso, steamed milk, and chocolate syrup, topped with whipped cream. \n                                    This coffee treat offers a perfect harmony of rich coffee and chocolate flavors.\n                                </span>\n                            </li>\n\n                            <li>\n                                <img src=\"./images/latte-art.png\" alt=\"coffee-icon\">\n                                <div class=\"ttl-n-prc\">\n                                    <h2>Americano</h2><hr>\n                                    <span>$3.00</span>\n                                </div>\n                                <span class=\"cf-in\">\n                                    A simple yet flavorful coffee created by diluting a shot of espresso with hot water. \n                                    It provides a similar strength to traditional coffee but retains the distinct taste of espresso.\n                                </span>\n                            </li>\n\n                            <li>\n                                <img src=\"./images/latte-art.png\" alt=\"coffee-icon\">\n                                <div class=\"ttl-n-prc\">\n                                    <h2>Macchiato</h2><hr>\n                                    <span>$3.50</span>\n                                </div>\n                                <span class=\"cf-in\">\n                                    An espresso-based coffee with a dollop of frothy milk on top, providing a bolder taste compared to a regular latte. \n                                    Its name means \"stained\" in Italian, referring to the milk \"staining\" the espresso.\n                                </span>\n                            </li>\n\n                            <li>\n                                <img src=\"./images/latte-art.png\" alt=\"coffee-icon\">\n                                <div class=\"ttl-n-prc\">\n                                    <h2>Flat White</h2><hr>\n                                    <span>$4.00</span>\n                                </div>\n                                <span class=\"cf-in\">\n                                    A velvety coffee made with espresso and a small amount of steamed milk, \n                                    creating a smooth texture without the frothiness of a cappuccino or latte.\n                                </span>\n                            </li>\n\n                            <li>\n                                <img src=\"./images/latte-art.png\" alt=\"coffee-icon\">\n                                <div class=\"ttl-n-prc\">\n                                    <h2>Iced Coffee</h2><hr>\n                                    <span>$3.50</span>\n                                </div>\n                                <span class=\"cf-in\">\n                                    Chilled coffee served over ice, often sweetened and with the option to add milk or flavored syrups. \n                                    A refreshing and energizing choice, especially on warmer days.\n                                </span>\n                            </li>\n\n                            <li>\n                                <img src=\"./images/latte-art.png\" alt=\"coffee-icon\">\n                                <div class=\"ttl-n-prc\">\n                                    <h2>Affogato</h2><hr>\n                                    <span>$4.50</span>\n                                </div>\n                                <span class=\"cf-in\">\n                                    A delightful dessert coffee consisting of a scoop of vanilla ice cream \"drowned\" in a shot of hot espresso. \n                                    The combination of hot and cold creates a wonderful contrast of textures and flavors.\n                                </span>\n                            </li>\n\n                            <li>\n                                <img src=\"./images/latte-art.png\" alt=\"coffee-icon\">\n                                <div class=\"ttl-n-prc\">\n                                    <h2>Irish Coffee</h2><hr>\n                                    <span>$5.50</span>\n                                </div>\n                                <span class=\"cf-in\">\n                                    A delightful blend of hot coffee, Irish whiskey, brown sugar, and topped with a layer of thick cream. \n                                    This classic cocktail coffee is a perfect choice for those seeking a warm and spirited drink.\n                                </span>\n                            </li>\n\n                            <li>\n                                <img src=\"./images/latte-art.png\" alt=\"coffee-icon\">\n                                <div class=\"ttl-n-prc\">\n                                    <h2>Vienna Coffee</h2><hr>\n                                    <span>$4.50</span>\n                                </div>\n                                <span class=\"cf-in\">\n                                    A velvety espresso-based coffee infused with whipped cream and sprinkled with chocolate shavings or cocoa powder. \n                                    This Austrian specialty is a treat for both coffee and dessert enthusiasts.\n                                </span>\n                            </li>\n\n                            <li>\n                                <img src=\"./images/latte-art.png\" alt=\"coffee-icon\">\n                                <div class=\"ttl-n-prc\">\n                                    <h2>Caramel Macchiato</h2><hr>\n                                    <span>$4.50</span>\n                                </div>\n                                <span class=\"cf-in\">\n                                    A heavenly combination of espresso, steamed milk, and caramel syrup, topped with velvety milk foam. \n                                    This sweet and indulgent coffee drink is sure to satisfy your cravings.\n                                </span>\n                            </li>\n\n                            <li>\n                                <img src=\"./images/latte-art.png\" alt=\"coffee-icon\">\n                                <div class=\"ttl-n-prc\">\n                                    <h2>Turkish Coffee</h2><hr>\n                                    <span>$4.00</span>\n                                </div>\n                                <span class=\"cf-in\">\n                                    A traditional method of brewing coffee by boiling finely-ground coffee beans with water and sugar (optional). \n                                    Served unfiltered with a rich, thick texture and a robust taste.\n                                </span>\n                            </li>\n\n                            <li>\n                                <img src=\"./images/latte-art.png\" alt=\"coffee-icon\">\n                                <div class=\"ttl-n-prc\">\n                                    <h2>Cortado</h2><hr>\n                                    <span>$3.50</span>\n                                </div>\n                                <span class=\"cf-in\">\n                                    A Spanish-inspired coffee made with equal parts espresso and steamed milk, \n                                    resulting in a small, strong, and smooth beverage perfect for sipping.\n                                </span>\n                            </li>\n\n                            <li>\n                                <img src=\"./images/latte-art.png\" alt=\"coffee-icon\">\n                                <div class=\"ttl-n-prc\">\n                                    <h2>Nitro Cold Brew</h2><hr>\n                                    <span>$4.50</span>\n                                </div>\n                                <span class=\"cf-in\">\n                                    Cold brew coffee infused with nitrogen, resulting in a creamy and velvety texture with a naturally sweet taste. \n                                    Served straight from the tap, this coffee is a refreshing pick-me-up.\n                                </span>\n                            </li>\n\n                            <li>\n                                <img src=\"./images/latte-art.png\" alt=\"coffee-icon\">\n                                <div class=\"ttl-n-prc\">\n                                    <h2>Honey Cinnamon Latte</h2><hr>\n                                    <span>$4.50</span>\n                                </div>\n                                <span class=\"cf-in\">\n                                    A delectable latte with espresso, steamed milk, honey, and a sprinkle of cinnamon. \n                                    The combination of sweet honey and warming cinnamon creates a comforting and aromatic experience.\n                                </span>\n                            </li>\n\n                            <li>\n                                <img src=\"./images/latte-art.png\" alt=\"coffee-icon\">\n                                <div class=\"ttl-n-prc\">\n                                    <h2>Decaf Soy Latte</h2><hr>\n                                    <span>$4.00</span>\n                                </div>\n                                <span class=\"cf-in\">\n                                    A latte made with decaffeinated espresso and soy milk, \n                                    perfect for those seeking a caffeine-free and dairy-free option without compromising on taste.\n                                </span>\n                            </li>\n\n                            <li>\n                                <img src=\"./images/latte-art.png\" alt=\"coffee-icon\">\n                                <div class=\"ttl-n-prc\">\n                                    <h2>Ristretto</h2><hr>\n                                    <span>$3.00</span>\n                                </div>\n                                <span class=\"cf-in\">\n                                    An intense and concentrated shot of espresso, extracted with the same amount of coffee grounds but half the amount of water. Ideal for coffee enthusiasts who appreciate a bolder flavor.\n                                </span>\n                            </li>\n\n                            <li>\n                                <img src=\"./images/latte-art.png\" alt=\"coffee-icon\">\n                                <div class=\"ttl-n-prc\">\n                                    <h2>Coconut Iced Coffee</h2><hr>\n                                    <span>$4.50</span>\n                                </div>\n                                <span class=\"cf-in\">\n                                    A tropical twist on iced coffee, made with chilled coffee, coconut milk, and a touch of sweetener. Served over ice, it's a refreshing and creamy delight.\n                                </span>\n                            </li>\n\n                            <li>\n                                <img src=\"./images/latte-art.png\" alt=\"coffee-icon\">\n                                <div class=\"ttl-n-prc\">\n                                    <h2>Chai Latte</h2><hr>\n                                    <span>$4.00</span>\n                                </div>\n                                <span class=\"cf-in\">\n                                    A spiced tea-based latte made with black tea, steamed milk, honey, and a blend of aromatic spices like cinnamon, cardamom, ginger, and cloves.\n                                </span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </section>\n        `;\n    return mainContent;\n  }\n}\n;\n\n//# sourceURL=webpack://coffee_shop/./src/menu.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/menu.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/menu.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/menu-image.jpg */ \"./src/images/menu-image.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --menu-color: #EEE3CB55;\r\n    --menu-font-color: #efefef;\r\n}\r\n\r\n.menu-main-content {\r\n    height: 100vh;\r\n    color: var(--menu-font-color);\r\n}\r\n\r\n.menu-main-section {\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-size: cover;\r\n    background-position: center;\r\n    height: 100%;\r\n    padding-top: 10em;\r\n}\r\n\r\n.coffee-menu-wrapper {\r\n    background-color: var(--menu-color);\r\n    width: min(1000px, 95%);\r\n    height: 85vh;\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    padding: 5em 0;\r\n    padding-bottom: 0;\r\n    margin: 0 auto;\r\n    border-radius: 1em;\r\n    -webkit-backdrop-filter: blur(10px);\r\n    backdrop-filter: blur(10px);\r\n    overflow: auto;\r\n}\r\n\r\n.coffee-menu-wrapper::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.coffee-menu-wrapper p{\r\n    width: 95%;\r\n    margin: 0 auto;\r\n    margin-top: 1em;\r\n}\r\n\r\n.menu {\r\n    margin-top: 2em;\r\n    padding: 1em;\r\n}\r\n\r\n.menu ul li {\r\n    text-align: start;\r\n    list-style: none;\r\n    margin: 2em 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.menu ul li img {\r\n    width: 50px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.menu ul li h2 {\r\n    font-size: 2rem;\r\n}\r\n\r\n.menu ul li p {\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.ttl-n-prc {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.ttl-n-prc hr {\r\n    border: none;\r\n    border-bottom: 1px dashed #361500;\r\n    align-self: center;\r\n    \r\n    flex: 1 1 auto;\r\n    margin: 0 1em;\r\n}\r\n\r\n.cf-in {\r\n    font-size: 1.2rem;\r\n    color: #efefefaa;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://coffee_shop/./src/menu.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://coffee_shop/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://coffee_shop/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://coffee_shop/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/menu.css":
/*!**********************!*\
  !*** ./src/menu.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./menu.css */ \"./node_modules/css-loader/dist/cjs.js!./src/menu.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://coffee_shop/./src/menu.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://coffee_shop/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://coffee_shop/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://coffee_shop/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://coffee_shop/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://coffee_shop/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://coffee_shop/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/latte-art.png":
/*!**********************************!*\
  !*** ./src/images/latte-art.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9579de61bf992d698934.png\";\n\n//# sourceURL=webpack://coffee_shop/./src/images/latte-art.png?");

/***/ }),

/***/ "./src/images/menu-image.jpg":
/*!***********************************!*\
  !*** ./src/images/menu-image.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"149066c6970e8f7387b2.jpg\";\n\n//# sourceURL=webpack://coffee_shop/./src/images/menu-image.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"menu": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;