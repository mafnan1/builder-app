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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_setup_apiSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux-setup/apiSlice */ \"./redux-setup/apiSlice.js\");\n/* harmony import */ var _redux_setup_TestSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux-setup/TestSlice */ \"./redux-setup/TestSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst FirstComp = (param)=>{\n    let { posts  } = param;\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = ()=>{\n        fetch({\n            url: \"\",\n            method: \"POST\",\n            body: post\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-2xl select-none cursor-pointer container my-8 max-w-[1072px] mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: (e)=>{\n                e.preventDefault();\n                handleSubmit();\n            },\n            className: \"gap-4 grid grid-cols-2\",\n            children: [\n                posts === null || posts === void 0 ? void 0 : posts.products.map((it)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: it.id,\n                        className: \"flex flex-col gap-3 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    \"Title: \",\n                                    it.brand\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: (e)=>setPost({\n                                        ...it,\n                                        title: e.ta\n                                    }),\n                                className: \"p-3 border-neutral-400 border rounded-md\",\n                                type: \"text\",\n                                name: \"name\",\n                                id: \"name\",\n                                defaultValue: it.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                name: \"desc\",\n                                id: \"desc\",\n                                className: \"p-3 rounded-md border border-neutral-400 resize-none\",\n                                rows: 4,\n                                defaultValue: it.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"cancel\",\n                    children: \"Cancel\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FirstComp, \"D0KSZf5/4HRYDhcMuZKAyoj6BAY=\");\n_c = FirstComp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FirstComp);\nvar _c;\n$RefreshReg$(_c, \"FirstComp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpcnN0Q29tcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdEO0FBQ087QUFJdEI7QUFDc0I7QUFFdkQsTUFBTVEsWUFBWSxTQUFlO1FBQWQsRUFBRUMsTUFBSyxFQUFFOztJQUMxQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUN0QyxNQUFNVSxlQUFlLElBQU07UUFDekJDLE1BQU07WUFBRUMsS0FBSztZQUFJQyxRQUFRO1lBQVFDLE1BQU1OO1FBQUs7SUFDOUM7SUFDQSxxQkFDRSw4REFBQ087UUFDQ0MsV0FBVTtrQkFRViw0RUFBQ0M7WUFBS0MsVUFBVSxDQUFDQyxJQUFNO2dCQUNyQkEsRUFBRUMsY0FBYztnQkFDaEJWO1lBQ0Y7WUFBR00sV0FBVTs7Z0JBQ1ZULGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT2MsUUFBUSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsbUJBQ3BCLDhEQUFDUjt3QkFBSVMsSUFBSUQsR0FBR0MsRUFBRTt3QkFBRVIsV0FBVTs7MENBQ3hCLDhEQUFDRDtnQ0FBSUMsV0FBVTs7b0NBQUc7b0NBQVFPLEdBQUdFLEtBQUs7Ozs7Ozs7MENBQ2xDLDhEQUFDQztnQ0FBTUMsVUFBVSxDQUFDUixJQUFJVixRQUFRO3dDQUFDLEdBQUdjLEVBQUU7d0NBQUNLLE9BQU1ULEVBQUVVLEVBQUU7b0NBQUE7Z0NBQUliLFdBQVU7Z0NBQTJDYyxNQUFLO2dDQUFPQyxNQUFLO2dDQUFPUCxJQUFHO2dDQUFPUSxjQUFjVCxHQUFHSyxLQUFLOzs7Ozs7MENBQ2hLLDhEQUFDSztnQ0FBU0YsTUFBSztnQ0FBT1AsSUFBRztnQ0FBT1IsV0FBVTtnQ0FBd0RrQixNQUFNO2dDQUFHRixjQUFjVCxHQUFHWSxXQUFXOzs7Ozs7Ozs7OztrQ0FFekk7OEJBQ0YsOERBQUNDO29CQUFPTixNQUFLOzhCQUFTOzs7Ozs7OEJBQ3RCLDhEQUFDTTtvQkFBT04sTUFBSzs4QkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUI7R0FoQ014QjtLQUFBQTtBQWtDTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZpcnN0Q29tcC5qcz85OTFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIHVzZUdldERhdGFRdWVyeSxcclxuICB1c2VMYXp5R2V0RGF0YWJ5cGFyYW1zUXVlcnksXHJcbn0gZnJvbSBcIi4uL3JlZHV4LXNldHVwL2FwaVNsaWNlXCI7XHJcbmltcG9ydCB7IHNob3dDb25zb2xlIH0gZnJvbSBcIi4uL3JlZHV4LXNldHVwL1Rlc3RTbGljZVwiO1xyXG5cclxuY29uc3QgRmlyc3RDb21wID0gKHsgcG9zdHMgfSkgPT4ge1xyXG4gIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGZldGNoKHsgdXJsOiBcIlwiLCBtZXRob2Q6IFwiUE9TVFwiLCBib2R5OiBwb3N0IH0pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIHNlbGVjdC1ub25lIGN1cnNvci1wb2ludGVyIGNvbnRhaW5lciBteS04IG1heC13LVsxMDcycHhdIG14LWF1dG9cIlxyXG4gICAgLy8gb25DbGljaz17KCkgPT4ge1xyXG4gICAgLy8gICBkYXRhdHJpZ2dlcih7IHRlc3Q6IFwicGFyYW0xXCIgfSk7XHJcbiAgICAvLyAgIGRpc3BhdGNoKFxyXG4gICAgLy8gICAgIHNob3dDb25zb2xlKFwiZGF0YSBmcm9tIGNvbXAgYXMgcGF5bG9kIHRvIHNsaWNlIFwiICsgdGVzdC5jdXJyZW50KyspXHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9fVxyXG4gICAgPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBoYW5kbGVTdWJtaXQoKVxyXG4gICAgICB9fSBjbGFzc05hbWU9XCJnYXAtNCBncmlkIGdyaWQtY29scy0yXCI+XHJcbiAgICAgICAge3Bvc3RzPy5wcm9kdWN0cy5tYXAoKGl0KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGlkPXtpdC5pZH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMyBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5UaXRsZToge2l0LmJyYW5kfTwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKT0+c2V0UG9zdCh7Li4uaXQsdGl0bGU6ZS50YX0pfSBjbGFzc05hbWU9XCJwLTMgYm9yZGVyLW5ldXRyYWwtNDAwIGJvcmRlciByb3VuZGVkLW1kXCIgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIGRlZmF1bHRWYWx1ZT17aXQudGl0bGV9IC8+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY1wiIGlkPVwiZGVzY1wiIGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItbmV1dHJhbC00MDAgIHJlc2l6ZS1ub25lXCIgcm93cz17NH0gZGVmYXVsdFZhbHVlPXtpdC5kZXNjcmlwdGlvbn0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcnN0Q29tcDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwidXNlR2V0RGF0YVF1ZXJ5IiwidXNlTGF6eUdldERhdGFieXBhcmFtc1F1ZXJ5Iiwic2hvd0NvbnNvbGUiLCJGaXJzdENvbXAiLCJwb3N0cyIsInBvc3QiLCJzZXRQb3N0IiwiaGFuZGxlU3VibWl0IiwiZmV0Y2giLCJ1cmwiLCJtZXRob2QiLCJib2R5IiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJvZHVjdHMiLCJtYXAiLCJpdCIsImlkIiwiYnJhbmQiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidGl0bGUiLCJ0YSIsInR5cGUiLCJuYW1lIiwiZGVmYXVsdFZhbHVlIiwidGV4dGFyZWEiLCJyb3dzIiwiZGVzY3JpcHRpb24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FirstComp.js\n"));

/***/ })

});