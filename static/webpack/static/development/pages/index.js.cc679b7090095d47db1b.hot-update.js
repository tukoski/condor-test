webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/HomeLayout/index.js":
/*!****************************************!*\
  !*** ./components/HomeLayout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emerald_ui_lib_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emerald-ui/lib/Avatar */ "../node_modules/emerald-ui/lib/Avatar/index.js");
/* harmony import */ var emerald_ui_lib_Avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emerald_ui_lib_Avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./components/HomeLayout/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/tukoski/projects/condor-test/src/components/HomeLayout/index.js";


/* Emerald */


/* Styles */



function HomeLayout(_ref) {
  var images = _ref.images;
  var rows = getRows(images);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "HomeLayout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Our Team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "These are the people living the \"Junior developer for life\" way"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, rows));
}
/**
 * Return the images in rows with 3 or 4 avatars
 * @param {Array} images
 */


function getRows(images) {
  var rows = [],
      row = [];
  var count = 0,
      aux = 3;

  for (var i = 0; i < images.length; i++) {
    count++;

    if (count <= aux) {
      row.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(emerald_ui_lib_Avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
        key: "avatar-".concat(i),
        className: "avatar",
        style: {
          backgroundImage: "url(".concat(images.thumbnail.url, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }));
    } else {
      rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "row-".concat(i),
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, row));
      aux = aux === 3 ? 4 : 3;
      count = 0;
      row = [];
    }
  }

  return rows;
}

HomeLayout.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (HomeLayout);

/***/ })

})
//# sourceMappingURL=index.js.cc679b7090095d47db1b.hot-update.js.map