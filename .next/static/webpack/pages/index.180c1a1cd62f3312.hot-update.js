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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_setup_apiSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux-setup/apiSlice */ \"./redux-setup/apiSlice.js\");\n/* harmony import */ var _redux_setup_TestSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux-setup/TestSlice */ \"./redux-setup/TestSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst FirstComp = (param)=>{\n    let { posts  } = param;\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = ()=>{\n        const requestOptions = {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: post\n        };\n        fetch({\n            url: \"https://dummyjson.com/products/add\",\n            method: \"POST\",\n            body: post\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-2xl select-none cursor-pointer container my-8 max-w-[1072px] mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: (e)=>{\n                e.preventDefault();\n                handleSubmit();\n            },\n            className: \"gap-4 grid grid-cols-2\",\n            children: [\n                posts === null || posts === void 0 ? void 0 : posts.products.map((it)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: it.id,\n                        className: \"flex flex-col gap-3 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    \"Title: \",\n                                    it.brand\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: (e)=>setPost({\n                                        ...it,\n                                        title: e.target.value\n                                    }),\n                                className: \"p-3 border-neutral-400 border rounded-md\",\n                                type: \"text\",\n                                name: \"name\",\n                                id: \"name\",\n                                defaultValue: it.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                name: \"desc\",\n                                id: \"desc\",\n                                className: \"p-3 rounded-md border border-neutral-400 resize-none\",\n                                rows: 4,\n                                defaultValue: it.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"reset\",\n                    children: \"Cancel\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FirstComp, \"D0KSZf5/4HRYDhcMuZKAyoj6BAY=\");\n_c = FirstComp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FirstComp);\nvar _c;\n$RefreshReg$(_c, \"FirstComp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpcnN0Q29tcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdEO0FBQ087QUFJdEI7QUFDc0I7QUFFdkQsTUFBTVEsWUFBWSxTQUFlO1FBQWQsRUFBRUMsTUFBSyxFQUFFOztJQUMxQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUN0QyxNQUFNVSxlQUFlLElBQU07UUFDekIsTUFBTUMsaUJBQWlCO1lBQ3JCQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1lBQzlDQyxNQUFNTjtRQUNSO1FBRUFPLE1BQU07WUFBRUMsS0FBSztZQUFzQ0osUUFBUTtZQUFRRSxNQUFNTjtRQUFLO0lBQ2hGO0lBQ0EscUJBQ0UsOERBQUNTO1FBQ0NDLFdBQVU7a0JBUVYsNEVBQUNDO1lBQUtDLFVBQVUsQ0FBQ0MsSUFBTTtnQkFDckJBLEVBQUVDLGNBQWM7Z0JBQ2hCWjtZQUNGO1lBQUdRLFdBQVU7O2dCQUNWWCxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU9nQixRQUFRLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxtQkFDcEIsOERBQUNSO3dCQUFJUyxJQUFJRCxHQUFHQyxFQUFFO3dCQUFFUixXQUFVOzswQ0FDeEIsOERBQUNEO2dDQUFJQyxXQUFVOztvQ0FBRztvQ0FBUU8sR0FBR0UsS0FBSzs7Ozs7OzswQ0FDbEMsOERBQUNDO2dDQUFNQyxVQUFVLENBQUNSLElBQU1aLFFBQVE7d0NBQUUsR0FBR2dCLEVBQUU7d0NBQUVLLE9BQU9ULEVBQUVVLE1BQU0sQ0FBQ0MsS0FBSztvQ0FBQztnQ0FBSWQsV0FBVTtnQ0FBMkNlLE1BQUs7Z0NBQU9DLE1BQUs7Z0NBQU9SLElBQUc7Z0NBQU9TLGNBQWNWLEdBQUdLLEtBQUs7Ozs7OzswQ0FDaEwsOERBQUNNO2dDQUFTRixNQUFLO2dDQUFPUixJQUFHO2dDQUFPUixXQUFVO2dDQUF3RG1CLE1BQU07Z0NBQUdGLGNBQWNWLEdBQUdhLFdBQVc7Ozs7Ozs7Ozs7O2tDQUV6STs4QkFDRiw4REFBQ0M7b0JBQU9OLE1BQUs7OEJBQVM7Ozs7Ozs4QkFDdEIsOERBQUNNO29CQUFPTixNQUFLOzhCQUFROzs7Ozs7Ozs7Ozs7Ozs7OztBQUs3QjtHQXRDTTNCO0tBQUFBO0FBd0NOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmlyc3RDb21wLmpzPzk5MWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlR2V0RGF0YVF1ZXJ5LFxyXG4gIHVzZUxhenlHZXREYXRhYnlwYXJhbXNRdWVyeSxcclxufSBmcm9tIFwiLi4vcmVkdXgtc2V0dXAvYXBpU2xpY2VcIjtcclxuaW1wb3J0IHsgc2hvd0NvbnNvbGUgfSBmcm9tIFwiLi4vcmVkdXgtc2V0dXAvVGVzdFNsaWNlXCI7XHJcblxyXG5jb25zdCBGaXJzdENvbXAgPSAoeyBwb3N0cyB9KSA9PiB7XHJcbiAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgYm9keTogcG9zdFxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoKHsgdXJsOiBcImh0dHBzOi8vZHVtbXlqc29uLmNvbS9wcm9kdWN0cy9hZGRcIiwgbWV0aG9kOiBcIlBPU1RcIiwgYm9keTogcG9zdCB9KVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBzZWxlY3Qtbm9uZSBjdXJzb3ItcG9pbnRlciBjb250YWluZXIgbXktOCBtYXgtdy1bMTA3MnB4XSBteC1hdXRvXCJcclxuICAgIC8vIG9uQ2xpY2s9eygpID0+IHtcclxuICAgIC8vICAgZGF0YXRyaWdnZXIoeyB0ZXN0OiBcInBhcmFtMVwiIH0pO1xyXG4gICAgLy8gICBkaXNwYXRjaChcclxuICAgIC8vICAgICBzaG93Q29uc29sZShcImRhdGEgZnJvbSBjb21wIGFzIHBheWxvZCB0byBzbGljZSBcIiArIHRlc3QuY3VycmVudCsrKVxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfX1cclxuICAgID5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaGFuZGxlU3VibWl0KClcclxuICAgICAgfX0gY2xhc3NOYW1lPVwiZ2FwLTQgZ3JpZCBncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgIHtwb3N0cz8ucHJvZHVjdHMubWFwKChpdCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBpZD17aXQuaWR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+VGl0bGU6IHtpdC5icmFuZH08L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UG9zdCh7IC4uLml0LCB0aXRsZTogZS50YXJnZXQudmFsdWUgfSl9IGNsYXNzTmFtZT1cInAtMyBib3JkZXItbmV1dHJhbC00MDAgYm9yZGVyIHJvdW5kZWQtbWRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgZGVmYXVsdFZhbHVlPXtpdC50aXRsZX0gLz5cclxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjXCIgaWQ9XCJkZXNjXCIgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTQwMCAgcmVzaXplLW5vbmVcIiByb3dzPXs0fSBkZWZhdWx0VmFsdWU9e2l0LmRlc2NyaXB0aW9ufT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwicmVzZXRcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaXJzdENvbXA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZUdldERhdGFRdWVyeSIsInVzZUxhenlHZXREYXRhYnlwYXJhbXNRdWVyeSIsInNob3dDb25zb2xlIiwiRmlyc3RDb21wIiwicG9zdHMiLCJwb3N0Iiwic2V0UG9zdCIsImhhbmRsZVN1Ym1pdCIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJmZXRjaCIsInVybCIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb2R1Y3RzIiwibWFwIiwiaXQiLCJpZCIsImJyYW5kIiwiaW5wdXQiLCJvbkNoYW5nZSIsInRpdGxlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwibmFtZSIsImRlZmF1bHRWYWx1ZSIsInRleHRhcmVhIiwicm93cyIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FirstComp.js\n"));

/***/ })

});