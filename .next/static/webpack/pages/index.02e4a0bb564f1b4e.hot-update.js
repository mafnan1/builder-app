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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_setup_apiSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux-setup/apiSlice */ \"./redux-setup/apiSlice.js\");\n/* harmony import */ var _redux_setup_TestSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux-setup/TestSlice */ \"./redux-setup/TestSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst FirstComp = (param)=>{\n    let { posts  } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const sliceData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.TestSlice.temp);\n    const test = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    console.log(posts);\n    // const { data, isLoading } = useGetDataQuery();\n    const [datatrigger] = (0,_redux_setup_apiSlice__WEBPACK_IMPORTED_MODULE_3__.useLazyGetDatabyparamsQuery)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-2xl select-none cursor-pointer container my-8 max-w-[1072px] mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: (e)=>{\n                e.preventDefault();\n                handleSubmit();\n            },\n            className: \"gap-4 grid grid-cols-2\",\n            children: [\n                posts === null || posts === void 0 ? void 0 : posts.products.map((it)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: it.id,\n                        className: \"flex flex-col gap-3 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    \"Title: \",\n                                    it.brand\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"p-3 border-neutral-400 border rounded-md\",\n                                type: \"text\",\n                                name: \"name\",\n                                id: \"name\",\n                                defaultValue: it.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                name: \"desc\",\n                                id: \"desc\",\n                                className: \"p-3 rounded-md border border-neutral-400 resize-none\",\n                                rows: 4,\n                                defaultValue: it.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"cancel\",\n                    children: \"Cancel\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FirstComp, \"ssoJt9GsLUDQ5FmZ6exoCpsQHuw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        _redux_setup_apiSlice__WEBPACK_IMPORTED_MODULE_3__.useLazyGetDatabyparamsQuery\n    ];\n});\n_c = FirstComp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FirstComp);\nvar _c;\n$RefreshReg$(_c, \"FirstComp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpcnN0Q29tcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNDO0FBQ2lCO0FBSXRCO0FBQ3NCO0FBRXZELE1BQU1PLFlBQVksU0FBZTtRQUFkLEVBQUVDLE1BQUssRUFBRTs7SUFDMUIsTUFBTUMsV0FBV1Asd0RBQVdBO0lBQzVCLE1BQU1RLFlBQVlQLHdEQUFXQSxDQUFDLENBQUNRLFFBQVVBLE1BQU1DLFNBQVMsQ0FBQ0MsSUFBSTtJQUM3RCxNQUFNQyxPQUFPYiw2Q0FBTUEsQ0FBQztJQUNwQmMsUUFBUUMsR0FBRyxDQUFDUjtJQUNaLGlEQUFpRDtJQUNqRCxNQUFNLENBQUNTLFlBQVksR0FBR1osa0ZBQTJCQTtJQUNqRCxxQkFDRSw4REFBQ2E7UUFDQ0MsV0FBVTtrQkFRViw0RUFBQ0M7WUFBS0MsVUFBVSxDQUFDQyxJQUFNO2dCQUVyQkEsRUFBRUMsY0FBYztnQkFDaEJDO1lBQ0Y7WUFBR0wsV0FBVTs7Z0JBQ1ZYLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT2lCLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLG1CQUNwQiw4REFBQ1Q7d0JBQUlVLElBQUlELEdBQUdDLEVBQUU7d0JBQUVULFdBQVU7OzBDQUN4Qiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O29DQUFHO29DQUFRUSxHQUFHRSxLQUFLOzs7Ozs7OzBDQUNsQyw4REFBQ0M7Z0NBQU1YLFdBQVU7Z0NBQTJDWSxNQUFLO2dDQUFPQyxNQUFLO2dDQUFPSixJQUFHO2dDQUFPSyxjQUFjTixHQUFHTyxLQUFLOzs7Ozs7MENBQ3BILDhEQUFDQztnQ0FBU0gsTUFBSztnQ0FBT0osSUFBRztnQ0FBT1QsV0FBVTtnQ0FBd0RpQixNQUFNO2dDQUFHSCxjQUFjTixHQUFHVSxXQUFXOzs7Ozs7Ozs7OztrQ0FFekk7OEJBQ0YsOERBQUNDO29CQUFPUCxNQUFLOzhCQUFTOzs7Ozs7OEJBQ3RCLDhEQUFDTztvQkFBT1AsTUFBSzs4QkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUI7R0FuQ014Qjs7UUFDYUwsb0RBQVdBO1FBQ1ZDLG9EQUFXQTtRQUlQRSw4RUFBMkJBOzs7S0FON0NFO0FBcUNOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmlyc3RDb21wLmpzPzk5MWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtcclxuICB1c2VHZXREYXRhUXVlcnksXHJcbiAgdXNlTGF6eUdldERhdGFieXBhcmFtc1F1ZXJ5LFxyXG59IGZyb20gXCIuLi9yZWR1eC1zZXR1cC9hcGlTbGljZVwiO1xyXG5pbXBvcnQgeyBzaG93Q29uc29sZSB9IGZyb20gXCIuLi9yZWR1eC1zZXR1cC9UZXN0U2xpY2VcIjtcclxuXHJcbmNvbnN0IEZpcnN0Q29tcCA9ICh7IHBvc3RzIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgc2xpY2VEYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5UZXN0U2xpY2UudGVtcCk7XHJcbiAgY29uc3QgdGVzdCA9IHVzZVJlZigwKTtcclxuICBjb25zb2xlLmxvZyhwb3N0cylcclxuICAvLyBjb25zdCB7IGRhdGEsIGlzTG9hZGluZyB9ID0gdXNlR2V0RGF0YVF1ZXJ5KCk7XHJcbiAgY29uc3QgW2RhdGF0cmlnZ2VyXSA9IHVzZUxhenlHZXREYXRhYnlwYXJhbXNRdWVyeSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIHNlbGVjdC1ub25lIGN1cnNvci1wb2ludGVyIGNvbnRhaW5lciBteS04IG1heC13LVsxMDcycHhdIG14LWF1dG9cIlxyXG4gICAgLy8gb25DbGljaz17KCkgPT4ge1xyXG4gICAgLy8gICBkYXRhdHJpZ2dlcih7IHRlc3Q6IFwicGFyYW0xXCIgfSk7XHJcbiAgICAvLyAgIGRpc3BhdGNoKFxyXG4gICAgLy8gICAgIHNob3dDb25zb2xlKFwiZGF0YSBmcm9tIGNvbXAgYXMgcGF5bG9kIHRvIHNsaWNlIFwiICsgdGVzdC5jdXJyZW50KyspXHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9fVxyXG4gICAgPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaGFuZGxlU3VibWl0KClcclxuICAgICAgfX0gY2xhc3NOYW1lPVwiZ2FwLTQgZ3JpZCBncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgIHtwb3N0cz8ucHJvZHVjdHMubWFwKChpdCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBpZD17aXQuaWR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+VGl0bGU6IHtpdC5icmFuZH08L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInAtMyBib3JkZXItbmV1dHJhbC00MDAgYm9yZGVyIHJvdW5kZWQtbWRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgZGVmYXVsdFZhbHVlPXtpdC50aXRsZX0gLz5cclxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjXCIgaWQ9XCJkZXNjXCIgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTQwMCAgcmVzaXplLW5vbmVcIiByb3dzPXs0fSBkZWZhdWx0VmFsdWU9e2l0LmRlc2NyaXB0aW9ufT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyc3RDb21wO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwidXNlR2V0RGF0YVF1ZXJ5IiwidXNlTGF6eUdldERhdGFieXBhcmFtc1F1ZXJ5Iiwic2hvd0NvbnNvbGUiLCJGaXJzdENvbXAiLCJwb3N0cyIsImRpc3BhdGNoIiwic2xpY2VEYXRhIiwic3RhdGUiLCJUZXN0U2xpY2UiLCJ0ZW1wIiwidGVzdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhdHJpZ2dlciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVN1Ym1pdCIsInByb2R1Y3RzIiwibWFwIiwiaXQiLCJpZCIsImJyYW5kIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImRlZmF1bHRWYWx1ZSIsInRpdGxlIiwidGV4dGFyZWEiLCJyb3dzIiwiZGVzY3JpcHRpb24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FirstComp.js\n"));

/***/ })

});