"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auth/signup";
exports.ids = ["pages/auth/signup"];
exports.modules = {

/***/ "./pages/auth/signup.jsx":
/*!*******************************!*\
  !*** ./pages/auth/signup.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst signup = ()=>{\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const submitHandler = (e)=>{\n        e.preventDefault();\n        console.log(email, password);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-6 mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: submitHandler,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-center mb-3\",\n                            children: \"Sign up\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Courses\\\\MicroServices\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"form-label\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Courses\\\\MicroServices\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.jsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    className: \"form-control\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Courses\\\\MicroServices\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.jsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Courses\\\\MicroServices\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"form-label\",\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Courses\\\\MicroServices\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    className: \"form-control\",\n                                    value: password,\n                                    onChange: (e)=>setPassword(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Courses\\\\MicroServices\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.jsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Courses\\\\MicroServices\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-grid\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-primary\",\n                                children: \"Sign up\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Courses\\\\MicroServices\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Courses\\\\MicroServices\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Courses\\\\MicroServices\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Courses\\\\MicroServices\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.jsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\Courses\\\\MicroServices\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.jsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\Courses\\\\MicroServices\\\\ticketing\\\\client\\\\pages\\\\auth\\\\signup.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signup);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ251cC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFpQztBQUVqQyxNQUFNQyxNQUFNLEdBQUcsSUFBTTtJQUNuQixNQUFNLEVBSFIsR0FHU0MsS0FBSyxHQUhkLEdBR2dCQyxRQUFRLE1BQUlILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3RDLE1BQU0sRUFKUixHQUlTSSxRQUFRLEdBSmpCLEdBSW1CQyxXQUFXLE1BQUlMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRTVDLE1BQU1NLGFBQWEsR0FBRyxDQUFDQyxDQUFDLEdBQUs7UUFDM0JBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixLQUFLLEVBQUVFLFFBQVEsQ0FBQyxDQUFDO0tBQzlCO0lBRUQscUJBQ0UsOERBQUNPLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFdBQVc7a0JBQ3hCLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxLQUFLO3NCQUNsQiw0RUFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGtCQUFtQjswQkFDaEMsNEVBQUNDLE1BQUk7b0JBQUNDLFFBQVEsRUFBRVIsYUFBYTs7c0NBQzNCLDhEQUFDUyxJQUFFOzRCQUFDSCxTQUFTLEVBQUMsa0JBQWtCO3NDQUFDLFNBQU87Ozs7O3FDQUFLO3NDQUM3Qyw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLE1BQU07OzhDQUNuQiw4REFBQ0ksT0FBSztvQ0FBQ0osU0FBUyxFQUFDLFlBQVk7OENBQUMsT0FBSzs7Ozs7NkNBQVE7OENBQzNDLDhEQUFDSyxPQUFLO29DQUNKQyxJQUFJLEVBQUMsT0FBTztvQ0FDWk4sU0FBUyxFQUFDLGNBQWM7b0NBQ3hCTyxLQUFLLEVBQUVqQixLQUFLO29DQUNaa0IsUUFBUSxFQUFFLENBQUNiLENBQUMsR0FBS0osUUFBUSxDQUFDSSxDQUFDLENBQUNjLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDOzs7Ozs2Q0FDekM7Ozs7OztxQ0FDRTtzQ0FDTiw4REFBQ1IsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLE1BQU07OzhDQUNuQiw4REFBQ0ksT0FBSztvQ0FBQ0osU0FBUyxFQUFDLFlBQVk7OENBQUMsVUFBUTs7Ozs7NkNBQVE7OENBQzlDLDhEQUFDSyxPQUFLO29DQUNKQyxJQUFJLEVBQUMsVUFBVTtvQ0FDZk4sU0FBUyxFQUFDLGNBQWM7b0NBQ3hCTyxLQUFLLEVBQUVmLFFBQVE7b0NBQ2ZnQixRQUFRLEVBQUUsQ0FBQ2IsQ0FBQyxHQUFLRixXQUFXLENBQUNFLENBQUMsQ0FBQ2MsTUFBTSxDQUFDRixLQUFLLENBQUM7Ozs7OzZDQUM1Qzs7Ozs7O3FDQUNFO3NDQUNOLDhEQUFDUixLQUFHOzRCQUFDQyxTQUFTLEVBQUMsUUFBUTtzQ0FDckIsNEVBQUNVLFFBQU07Z0NBQUNWLFNBQVMsRUFBQyxpQkFBaUI7MENBQUMsU0FBTzs7Ozs7eUNBQVM7Ozs7O3FDQUNoRDs7Ozs7OzZCQUNEOzs7Ozt5QkFDSDs7Ozs7cUJBQ0Y7Ozs7O2lCQUNGLENBQ047Q0FDSDtBQUVELGlFQUFlWCxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9hdXRoL3NpZ251cC5qc3g/NDI4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3Qgc2lnbnVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgIG14LWF1dG9cIj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTNcIj5TaWduIHVwPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TaWduIHVwPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaWdudXA7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInNpZ251cCIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJoMSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/signup.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signup.jsx"));
module.exports = __webpack_exports__;

})();