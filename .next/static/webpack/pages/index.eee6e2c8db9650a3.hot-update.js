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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_setup_apiSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux-setup/apiSlice */ \"./redux-setup/apiSlice.js\");\n/* harmony import */ var _redux_setup_TestSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux-setup/TestSlice */ \"./redux-setup/TestSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst FirstComp = (param)=>{\n    let { posts  } = param;\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = ()=>{\n        fetch({\n            url: \"\",\n            method: \"POST\",\n            body: post\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-2xl select-none cursor-pointer container my-8 max-w-[1072px] mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: (e)=>{\n                e.preventDefault();\n                handleSubmit();\n            },\n            className: \"gap-4 grid grid-cols-2\",\n            children: [\n                posts === null || posts === void 0 ? void 0 : posts.products.map((it)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: it.id,\n                        className: \"flex flex-col gap-3 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    \"Title: \",\n                                    it.brand\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: ()=>setPost({\n                                        ...it\n                                    }),\n                                className: \"p-3 border-neutral-400 border rounded-md\",\n                                type: \"text\",\n                                name: \"name\",\n                                id: \"name\",\n                                defaultValue: it.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                name: \"desc\",\n                                id: \"desc\",\n                                className: \"p-3 rounded-md border border-neutral-400 resize-none\",\n                                rows: 4,\n                                defaultValue: it.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"cancel\",\n                    children: \"Cancel\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FirstComp, \"D0KSZf5/4HRYDhcMuZKAyoj6BAY=\");\n_c = FirstComp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FirstComp);\nvar _c;\n$RefreshReg$(_c, \"FirstComp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpcnN0Q29tcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdEO0FBQ087QUFJdEI7QUFDc0I7QUFFdkQsTUFBTVEsWUFBWSxTQUFlO1FBQWQsRUFBRUMsTUFBSyxFQUFFOztJQUMxQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUN0QyxNQUFNVSxlQUFlLElBQU07UUFDekJDLE1BQU07WUFBRUMsS0FBSztZQUFJQyxRQUFRO1lBQVFDLE1BQU1OO1FBQUs7SUFDOUM7SUFDQSxxQkFDRSw4REFBQ087UUFDQ0MsV0FBVTtrQkFRViw0RUFBQ0M7WUFBS0MsVUFBVSxDQUFDQyxJQUFNO2dCQUNyQkEsRUFBRUMsY0FBYztnQkFDaEJWO1lBQ0Y7WUFBR00sV0FBVTs7Z0JBQ1ZULGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT2MsUUFBUSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsbUJBQ3BCLDhEQUFDUjt3QkFBSVMsSUFBSUQsR0FBR0MsRUFBRTt3QkFBRVIsV0FBVTs7MENBQ3hCLDhEQUFDRDtnQ0FBSUMsV0FBVTs7b0NBQUc7b0NBQVFPLEdBQUdFLEtBQUs7Ozs7Ozs7MENBQ2xDLDhEQUFDQztnQ0FBTUMsVUFBVSxJQUFJbEIsUUFBUTt3Q0FBQyxHQUFHYyxFQUFFO29DQUFDO2dDQUFJUCxXQUFVO2dDQUEyQ1ksTUFBSztnQ0FBT0MsTUFBSztnQ0FBT0wsSUFBRztnQ0FBT00sY0FBY1AsR0FBR1EsS0FBSzs7Ozs7OzBDQUNySiw4REFBQ0M7Z0NBQVNILE1BQUs7Z0NBQU9MLElBQUc7Z0NBQU9SLFdBQVU7Z0NBQXdEaUIsTUFBTTtnQ0FBR0gsY0FBY1AsR0FBR1csV0FBVzs7Ozs7Ozs7Ozs7a0NBRXpJOzhCQUNGLDhEQUFDQztvQkFBT1AsTUFBSzs4QkFBUzs7Ozs7OzhCQUN0Qiw4REFBQ087b0JBQU9QLE1BQUs7OEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzlCO0dBaENNdEI7S0FBQUE7QUFrQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaXJzdENvbXAuanM/OTkxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtcclxuICB1c2VHZXREYXRhUXVlcnksXHJcbiAgdXNlTGF6eUdldERhdGFieXBhcmFtc1F1ZXJ5LFxyXG59IGZyb20gXCIuLi9yZWR1eC1zZXR1cC9hcGlTbGljZVwiO1xyXG5pbXBvcnQgeyBzaG93Q29uc29sZSB9IGZyb20gXCIuLi9yZWR1eC1zZXR1cC9UZXN0U2xpY2VcIjtcclxuXHJcbmNvbnN0IEZpcnN0Q29tcCA9ICh7IHBvc3RzIH0pID0+IHtcclxuICBjb25zdCBbcG9zdCwgc2V0UG9zdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBmZXRjaCh7IHVybDogXCJcIiwgbWV0aG9kOiBcIlBPU1RcIiwgYm9keTogcG9zdCB9KVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBzZWxlY3Qtbm9uZSBjdXJzb3ItcG9pbnRlciBjb250YWluZXIgbXktOCBtYXgtdy1bMTA3MnB4XSBteC1hdXRvXCJcclxuICAgIC8vIG9uQ2xpY2s9eygpID0+IHtcclxuICAgIC8vICAgZGF0YXRyaWdnZXIoeyB0ZXN0OiBcInBhcmFtMVwiIH0pO1xyXG4gICAgLy8gICBkaXNwYXRjaChcclxuICAgIC8vICAgICBzaG93Q29uc29sZShcImRhdGEgZnJvbSBjb21wIGFzIHBheWxvZCB0byBzbGljZSBcIiArIHRlc3QuY3VycmVudCsrKVxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfX1cclxuICAgID5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaGFuZGxlU3VibWl0KClcclxuICAgICAgfX0gY2xhc3NOYW1lPVwiZ2FwLTQgZ3JpZCBncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgIHtwb3N0cz8ucHJvZHVjdHMubWFwKChpdCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBpZD17aXQuaWR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+VGl0bGU6IHtpdC5icmFuZH08L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoKT0+c2V0UG9zdCh7Li4uaXQsfSl9IGNsYXNzTmFtZT1cInAtMyBib3JkZXItbmV1dHJhbC00MDAgYm9yZGVyIHJvdW5kZWQtbWRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgZGVmYXVsdFZhbHVlPXtpdC50aXRsZX0gLz5cclxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjXCIgaWQ9XCJkZXNjXCIgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTQwMCAgcmVzaXplLW5vbmVcIiByb3dzPXs0fSBkZWZhdWx0VmFsdWU9e2l0LmRlc2NyaXB0aW9ufT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyc3RDb21wO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJ1c2VHZXREYXRhUXVlcnkiLCJ1c2VMYXp5R2V0RGF0YWJ5cGFyYW1zUXVlcnkiLCJzaG93Q29uc29sZSIsIkZpcnN0Q29tcCIsInBvc3RzIiwicG9zdCIsInNldFBvc3QiLCJoYW5kbGVTdWJtaXQiLCJmZXRjaCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm9kdWN0cyIsIm1hcCIsIml0IiwiaWQiLCJicmFuZCIsImlucHV0Iiwib25DaGFuZ2UiLCJ0eXBlIiwibmFtZSIsImRlZmF1bHRWYWx1ZSIsInRpdGxlIiwidGV4dGFyZWEiLCJyb3dzIiwiZGVzY3JpcHRpb24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FirstComp.js\n"));

/***/ })

});