webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/PageLayout/Header/index.js":
/*!***********************************************!*\
  !*** ./components/PageLayout/Header/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emerald_ui_lib_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emerald-ui/lib/Nav */ "../node_modules/emerald-ui/lib/Nav/index.js");
/* harmony import */ var emerald_ui_lib_Nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emerald_ui_lib_Nav__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var emerald_ui_lib_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emerald-ui/lib/Navbar */ "../node_modules/emerald-ui/lib/Navbar/index.js");
/* harmony import */ var emerald_ui_lib_Navbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emerald_ui_lib_Navbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./components/PageLayout/Header/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/tukoski/projects/condor-test/src/components/PageLayout/Header/index.js";



/* Emerald */



/* Styles */



function Header(_ref) {
  var navItems = _ref.navItems;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "Header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(emerald_ui_lib_Navbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    breakAt: "sm",
    className: "page-header black",
    barClassName: "container",
    fixedAtTop: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(emerald_ui_lib_Navbar__WEBPACK_IMPORTED_MODULE_4___default.a.Brand, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/logo.svg",
    alt: "Logo",
    height: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/logo-text.svg",
    alt: "Condor Labs",
    height: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(emerald_ui_lib_Nav__WEBPACK_IMPORTED_MODULE_3___default.a, {
    grow: true,
    collapsible: true,
    className: "nav-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, navItems.map(function (item, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: "nav-item-".concat(i),
      href: item.path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, item.name));
  }))));
}

Header.propTypes = {
  navItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.1abfd8cf9d9d2d1244b6.hot-update.js.map