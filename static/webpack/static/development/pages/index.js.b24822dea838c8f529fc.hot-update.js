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
  }, rows), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    height: "0",
    width: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "svgPath",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M 95 5 Q 100 0 105 5 L 195 95 Q 200 100 195 105 L 105 195 Q 100 200 95 195 L 5 105 Q 0 100 5 95 Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })))));
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
      row.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        key: "avatar-".concat(i),
        className: "avatar",
        src: images[i].images.thumbnail.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }));
    } else {
      rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "row-".concat(i),
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
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
//# sourceMappingURL=index.js.b24822dea838c8f529fc.hot-update.js.map