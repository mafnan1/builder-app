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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_setup_apiSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux-setup/apiSlice */ \"./redux-setup/apiSlice.js\");\n/* harmony import */ var _redux_setup_TestSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux-setup/TestSlice */ \"./redux-setup/TestSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst FirstComp = (param)=>{\n    let { posts  } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const sliceData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.TestSlice.temp);\n    const test = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    console.log(posts);\n    // const { data, isLoading } = useGetDataQuery();\n    const [datatrigger] = (0,_redux_setup_apiSlice__WEBPACK_IMPORTED_MODULE_3__.useLazyGetDatabyparamsQuery)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-2xl select-none cursor-pointer container my-8 max-w-[1072px] mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: (e)=>{\n                e.preventDefault();\n            },\n            className: \"gap-4 grid grid-cols-2\",\n            children: [\n                posts === null || posts === void 0 ? void 0 : posts.products.map((it)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: it.id,\n                        className: \"flex flex-col gap-3 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    \"Title: \",\n                                    it.brand\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"p-3 border-neutral-400 border rounded-md\",\n                                type: \"text\",\n                                name: \"name\",\n                                id: \"name\",\n                                defaultValue: it.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                name: \"desc\",\n                                id: \"desc\",\n                                className: \"p-3 rounded-md border border-neutral-400 resize-none\",\n                                rows: 4,\n                                defaultValue: it.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"cancel\",\n                    children: \"Cancel\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FirstComp, \"ssoJt9GsLUDQ5FmZ6exoCpsQHuw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        _redux_setup_apiSlice__WEBPACK_IMPORTED_MODULE_3__.useLazyGetDatabyparamsQuery\n    ];\n});\n_c = FirstComp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FirstComp);\nvar _c;\n$RefreshReg$(_c, \"FirstComp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpcnN0Q29tcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNDO0FBQ2lCO0FBSXRCO0FBQ3NCO0FBRXZELE1BQU1PLFlBQVksU0FBZTtRQUFkLEVBQUVDLE1BQUssRUFBRTs7SUFDMUIsTUFBTUMsV0FBV1Asd0RBQVdBO0lBQzVCLE1BQU1RLFlBQVlQLHdEQUFXQSxDQUFDLENBQUNRLFFBQVVBLE1BQU1DLFNBQVMsQ0FBQ0MsSUFBSTtJQUM3RCxNQUFNQyxPQUFPYiw2Q0FBTUEsQ0FBQztJQUNwQmMsUUFBUUMsR0FBRyxDQUFDUjtJQUNaLGlEQUFpRDtJQUNqRCxNQUFNLENBQUNTLFlBQVksR0FBR1osa0ZBQTJCQTtJQUNqRCxxQkFDRSw4REFBQ2E7UUFDQ0MsV0FBVTtrQkFRViw0RUFBQ0M7WUFBS0MsVUFBVSxDQUFDQyxJQUFNO2dCQUVyQkEsRUFBRUMsY0FBYztZQUFFO1lBQUdKLFdBQVU7O2dCQUM5Qlgsa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPZ0IsUUFBUSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsbUJBQ3BCLDhEQUFDUjt3QkFBSVMsSUFBSUQsR0FBR0MsRUFBRTt3QkFBRVIsV0FBVTs7MENBQ3hCLDhEQUFDRDtnQ0FBSUMsV0FBVTs7b0NBQUc7b0NBQVFPLEdBQUdFLEtBQUs7Ozs7Ozs7MENBQ2xDLDhEQUFDQztnQ0FBTVYsV0FBVTtnQ0FBMkNXLE1BQUs7Z0NBQU9DLE1BQUs7Z0NBQU9KLElBQUc7Z0NBQU9LLGNBQWNOLEdBQUdPLEtBQUs7Ozs7OzswQ0FDcEgsOERBQUNDO2dDQUFTSCxNQUFLO2dDQUFPSixJQUFHO2dDQUFPUixXQUFVO2dDQUF3RGdCLE1BQU07Z0NBQUdILGNBQWNOLEdBQUdVLFdBQVc7Ozs7Ozs7Ozs7O2tDQUV6STs4QkFDRiw4REFBQ0M7b0JBQU9QLE1BQUs7OEJBQVM7Ozs7Ozs4QkFDdEIsOERBQUNPO29CQUFPUCxNQUFLOzhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUs5QjtHQWpDTXZCOztRQUNhTCxvREFBV0E7UUFDVkMsb0RBQVdBO1FBSVBFLDhFQUEyQkE7OztLQU43Q0U7QUFtQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaXJzdENvbXAuanM/OTkxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIHVzZUdldERhdGFRdWVyeSxcclxuICB1c2VMYXp5R2V0RGF0YWJ5cGFyYW1zUXVlcnksXHJcbn0gZnJvbSBcIi4uL3JlZHV4LXNldHVwL2FwaVNsaWNlXCI7XHJcbmltcG9ydCB7IHNob3dDb25zb2xlIH0gZnJvbSBcIi4uL3JlZHV4LXNldHVwL1Rlc3RTbGljZVwiO1xyXG5cclxuY29uc3QgRmlyc3RDb21wID0gKHsgcG9zdHMgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBzbGljZURhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLlRlc3RTbGljZS50ZW1wKTtcclxuICBjb25zdCB0ZXN0ID0gdXNlUmVmKDApO1xyXG4gIGNvbnNvbGUubG9nKHBvc3RzKVxyXG4gIC8vIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nIH0gPSB1c2VHZXREYXRhUXVlcnkoKTtcclxuICBjb25zdCBbZGF0YXRyaWdnZXJdID0gdXNlTGF6eUdldERhdGFieXBhcmFtc1F1ZXJ5KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgc2VsZWN0LW5vbmUgY3Vyc29yLXBvaW50ZXIgY29udGFpbmVyIG15LTggbWF4LXctWzEwNzJweF0gbXgtYXV0b1wiXHJcbiAgICAvLyBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAvLyAgIGRhdGF0cmlnZ2VyKHsgdGVzdDogXCJwYXJhbTFcIiB9KTtcclxuICAgIC8vICAgZGlzcGF0Y2goXHJcbiAgICAvLyAgICAgc2hvd0NvbnNvbGUoXCJkYXRhIGZyb20gY29tcCBhcyBwYXlsb2QgdG8gc2xpY2UgXCIgKyB0ZXN0LmN1cnJlbnQrKylcclxuICAgIC8vICAgKTtcclxuICAgIC8vIH19XHJcbiAgICA+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKX19IGNsYXNzTmFtZT1cImdhcC00IGdyaWQgZ3JpZC1jb2xzLTJcIj5cclxuICAgICAgICB7cG9zdHM/LnByb2R1Y3RzLm1hcCgoaXQpID0+IChcclxuICAgICAgICAgIDxkaXYgaWQ9e2l0LmlkfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0zIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlRpdGxlOiB7aXQuYnJhbmR9PC9kaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJwLTMgYm9yZGVyLW5ldXRyYWwtNDAwIGJvcmRlciByb3VuZGVkLW1kXCIgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIGRlZmF1bHRWYWx1ZT17aXQudGl0bGV9IC8+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY1wiIGlkPVwiZGVzY1wiIGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItbmV1dHJhbC00MDAgIHJlc2l6ZS1ub25lXCIgcm93cz17NH0gZGVmYXVsdFZhbHVlPXtpdC5kZXNjcmlwdGlvbn0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcnN0Q29tcDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZUdldERhdGFRdWVyeSIsInVzZUxhenlHZXREYXRhYnlwYXJhbXNRdWVyeSIsInNob3dDb25zb2xlIiwiRmlyc3RDb21wIiwicG9zdHMiLCJkaXNwYXRjaCIsInNsaWNlRGF0YSIsInN0YXRlIiwiVGVzdFNsaWNlIiwidGVtcCIsInRlc3QiLCJjb25zb2xlIiwibG9nIiwiZGF0YXRyaWdnZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm9kdWN0cyIsIm1hcCIsIml0IiwiaWQiLCJicmFuZCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJkZWZhdWx0VmFsdWUiLCJ0aXRsZSIsInRleHRhcmVhIiwicm93cyIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FirstComp.js\n"));

/***/ })

});