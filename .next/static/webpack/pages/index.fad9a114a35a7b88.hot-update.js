"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/FirstComp.js":
/*!*********************************!*\
  !*** ./components/FirstComp.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_setup_apiSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux-setup/apiSlice */ \"./redux-setup/apiSlice.js\");\n/* harmony import */ var _redux_setup_TestSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux-setup/TestSlice */ \"./redux-setup/TestSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst FirstComp = (param)=>{\n    let { posts  } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const sliceData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.TestSlice.temp);\n    const test = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    console.log(posts);\n    // const { data, isLoading } = useGetDataQuery();\n    const [datatrigger] = (0,_redux_setup_apiSlice__WEBPACK_IMPORTED_MODULE_3__.useLazyGetDatabyparamsQuery)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-2xl select-none cursor-pointer container my-8 max-w-[1072px] mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: (e)=>e.preventDefault(),\n            className: \"gap-4 grid grid-cols-2\",\n            children: posts === null || posts === void 0 ? void 0 : posts.products.map((it)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: it.id,\n                    className: \"flex flex-col gap-3 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            children: [\n                                \"Title: \",\n                                it.brand\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"border-neutral-400 border\",\n                            type: \"text\",\n                            name: \"name\",\n                            id: \"name\",\n                            defaultValue: it.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            name: \"desc\",\n                            id: \"desc\",\n                            className: \"border border-neutral-400 resize-none\",\n                            c: true,\n                            defaultValue: it.description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FirstComp, \"ssoJt9GsLUDQ5FmZ6exoCpsQHuw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        _redux_setup_apiSlice__WEBPACK_IMPORTED_MODULE_3__.useLazyGetDatabyparamsQuery\n    ];\n});\n_c = FirstComp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FirstComp);\nvar _c;\n$RefreshReg$(_c, \"FirstComp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpcnN0Q29tcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNDO0FBQ2lCO0FBSXRCO0FBQ3NCO0FBRXZELE1BQU1PLFlBQVksU0FBZTtRQUFkLEVBQUVDLE1BQUssRUFBRTs7SUFDMUIsTUFBTUMsV0FBV1Asd0RBQVdBO0lBQzVCLE1BQU1RLFlBQVlQLHdEQUFXQSxDQUFDLENBQUNRLFFBQVVBLE1BQU1DLFNBQVMsQ0FBQ0MsSUFBSTtJQUM3RCxNQUFNQyxPQUFPYiw2Q0FBTUEsQ0FBQztJQUNwQmMsUUFBUUMsR0FBRyxDQUFDUjtJQUNaLGlEQUFpRDtJQUNqRCxNQUFNLENBQUNTLFlBQVksR0FBR1osa0ZBQTJCQTtJQUNqRCxxQkFDRSw4REFBQ2E7UUFDQ0MsV0FBVTtrQkFRViw0RUFBQ0M7WUFBS0MsVUFBVSxDQUFDQyxJQUFNQSxFQUFFQyxjQUFjO1lBQUlKLFdBQVU7c0JBQ2xEWCxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU9nQixRQUFRLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxtQkFDcEIsOERBQUNSO29CQUFJUyxJQUFJRCxHQUFHQyxFQUFFO29CQUFFUixXQUFVOztzQ0FDeEIsOERBQUNEOzRCQUFJQyxXQUFVOztnQ0FBRztnQ0FBUU8sR0FBR0UsS0FBSzs7Ozs7OztzQ0FDbEMsOERBQUNDOzRCQUFNVixXQUFVOzRCQUE0QlcsTUFBSzs0QkFBT0MsTUFBSzs0QkFBT0osSUFBRzs0QkFBT0ssY0FBY04sR0FBR08sS0FBSzs7Ozs7O3NDQUNyRyw4REFBQ0M7NEJBQVNILE1BQUs7NEJBQU9KLElBQUc7NEJBQU9SLFdBQVU7NEJBQXlDZ0IsQ0FBQzs0QkFBQ0gsY0FBY04sR0FBR1UsV0FBVzs7Ozs7Ozs7Ozs7OEJBRW5IOzs7Ozs7Ozs7OztBQUtWO0dBN0JNN0I7O1FBQ2FMLG9EQUFXQTtRQUNWQyxvREFBV0E7UUFJUEUsOEVBQTJCQTs7O0tBTjdDRTtBQStCTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZpcnN0Q29tcC5qcz85OTFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlR2V0RGF0YVF1ZXJ5LFxyXG4gIHVzZUxhenlHZXREYXRhYnlwYXJhbXNRdWVyeSxcclxufSBmcm9tIFwiLi4vcmVkdXgtc2V0dXAvYXBpU2xpY2VcIjtcclxuaW1wb3J0IHsgc2hvd0NvbnNvbGUgfSBmcm9tIFwiLi4vcmVkdXgtc2V0dXAvVGVzdFNsaWNlXCI7XHJcblxyXG5jb25zdCBGaXJzdENvbXAgPSAoeyBwb3N0cyB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHNsaWNlRGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuVGVzdFNsaWNlLnRlbXApO1xyXG4gIGNvbnN0IHRlc3QgPSB1c2VSZWYoMCk7XHJcbiAgY29uc29sZS5sb2cocG9zdHMpXHJcbiAgLy8gY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcgfSA9IHVzZUdldERhdGFRdWVyeSgpO1xyXG4gIGNvbnN0IFtkYXRhdHJpZ2dlcl0gPSB1c2VMYXp5R2V0RGF0YWJ5cGFyYW1zUXVlcnkoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBzZWxlY3Qtbm9uZSBjdXJzb3ItcG9pbnRlciBjb250YWluZXIgbXktOCBtYXgtdy1bMTA3MnB4XSBteC1hdXRvXCJcclxuICAgIC8vIG9uQ2xpY2s9eygpID0+IHtcclxuICAgIC8vICAgZGF0YXRyaWdnZXIoeyB0ZXN0OiBcInBhcmFtMVwiIH0pO1xyXG4gICAgLy8gICBkaXNwYXRjaChcclxuICAgIC8vICAgICBzaG93Q29uc29sZShcImRhdGEgZnJvbSBjb21wIGFzIHBheWxvZCB0byBzbGljZSBcIiArIHRlc3QuY3VycmVudCsrKVxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfX1cclxuICAgID5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT1cImdhcC00IGdyaWQgZ3JpZC1jb2xzLTJcIj5cclxuICAgICAgICB7cG9zdHM/LnByb2R1Y3RzLm1hcCgoaXQpID0+IChcclxuICAgICAgICAgIDxkaXYgaWQ9e2l0LmlkfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0zIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlRpdGxlOiB7aXQuYnJhbmR9PC9kaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJib3JkZXItbmV1dHJhbC00MDAgYm9yZGVyXCIgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIGRlZmF1bHRWYWx1ZT17aXQudGl0bGV9IC8+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY1wiIGlkPVwiZGVzY1wiIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItbmV1dHJhbC00MDAgIHJlc2l6ZS1ub25lXCIgYyBkZWZhdWx0VmFsdWU9e2l0LmRlc2NyaXB0aW9ufT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyc3RDb21wO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwidXNlR2V0RGF0YVF1ZXJ5IiwidXNlTGF6eUdldERhdGFieXBhcmFtc1F1ZXJ5Iiwic2hvd0NvbnNvbGUiLCJGaXJzdENvbXAiLCJwb3N0cyIsImRpc3BhdGNoIiwic2xpY2VEYXRhIiwic3RhdGUiLCJUZXN0U2xpY2UiLCJ0ZW1wIiwidGVzdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhdHJpZ2dlciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb2R1Y3RzIiwibWFwIiwiaXQiLCJpZCIsImJyYW5kIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImRlZmF1bHRWYWx1ZSIsInRpdGxlIiwidGV4dGFyZWEiLCJjIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FirstComp.js\n"));

/***/ })

});