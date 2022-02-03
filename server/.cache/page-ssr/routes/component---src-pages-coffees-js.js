"use strict";
exports.id = "component---src-pages-coffees-js";
exports.ids = ["component---src-pages-coffees-js"];
exports.modules = {

/***/ "./src/pages/coffees.js":
/*!******************************!*\
  !*** ./src/pages/coffees.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const query = "391413039";

const CoffeesPage = ({
  data
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Different types of coffee"), data.allNodeCoffee.edges.map(({
  node
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, node.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  dangerouslySetInnerHTML: {
    __html: node.body.value
  }
}))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoffeesPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-coffees-js.js.map