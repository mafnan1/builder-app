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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_setup_apiSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux-setup/apiSlice */ \"./redux-setup/apiSlice.js\");\n/* harmony import */ var _redux_setup_TestSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux-setup/TestSlice */ \"./redux-setup/TestSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst FirstComp = (param)=>{\n    let { posts  } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const sliceData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.TestSlice.temp);\n    const test = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    console.log(posts);\n    // const { data, isLoading } = useGetDataQuery();\n    const [datatrigger] = (0,_redux_setup_apiSlice__WEBPACK_IMPORTED_MODULE_3__.useLazyGetDatabyparamsQuery)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-2xl select-none cursor-pointer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: (e)=>e.preventDefault(),\n            children: posts === null || posts === void 0 ? void 0 : posts.products.map((it)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: it.id,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"name\",\n                            id: \"name\",\n                            defaultValue: it.ti\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                            lineNumber: 30,\n                            columnNumber: 1\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: it.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Junaid\\\\Desktop\\\\Redux-and-Tailwind-setup-with-Nextjs\\\\components\\\\FirstComp.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FirstComp, \"ssoJt9GsLUDQ5FmZ6exoCpsQHuw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        _redux_setup_apiSlice__WEBPACK_IMPORTED_MODULE_3__.useLazyGetDatabyparamsQuery\n    ];\n});\n_c = FirstComp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FirstComp);\nvar _c;\n$RefreshReg$(_c, \"FirstComp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpcnN0Q29tcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNDO0FBQ2lCO0FBSXRCO0FBQ3NCO0FBRXZELE1BQU1PLFlBQVksU0FBZTtRQUFkLEVBQUVDLE1BQUssRUFBRTs7SUFDMUIsTUFBTUMsV0FBV1Asd0RBQVdBO0lBQzVCLE1BQU1RLFlBQVlQLHdEQUFXQSxDQUFDLENBQUNRLFFBQVVBLE1BQU1DLFNBQVMsQ0FBQ0MsSUFBSTtJQUM3RCxNQUFNQyxPQUFPYiw2Q0FBTUEsQ0FBQztJQUNwQmMsUUFBUUMsR0FBRyxDQUFDUjtJQUNaLGlEQUFpRDtJQUNqRCxNQUFNLENBQUNTLFlBQVksR0FBR1osa0ZBQTJCQTtJQUNqRCxxQkFDRSw4REFBQ2E7UUFDQ0MsV0FBVTtrQkFRViw0RUFBQ0M7WUFBS0MsVUFBVSxDQUFDQyxJQUFNQSxFQUFFQyxjQUFjO3NCQUNwQ2Ysa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPZ0IsUUFBUSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsbUJBRXBCLDhEQUFDUjtvQkFBSVMsSUFBSUQsR0FBR0MsRUFBRTs7c0NBQ3hCLDhEQUFDQzs0QkFBTUMsTUFBSzs0QkFBT0MsTUFBSzs0QkFBT0gsSUFBRzs0QkFBT0ksY0FBY0wsR0FBR00sRUFBRTs7Ozs7O3NDQUNoRCw4REFBQ2Q7c0NBQUtRLEdBQUdPLEtBQUs7Ozs7Ozs7Ozs7OzhCQUVoQjs7Ozs7Ozs7Ozs7QUFLVjtHQTdCTTFCOztRQUNhTCxvREFBV0E7UUFDVkMsb0RBQVdBO1FBSVBFLDhFQUEyQkE7OztLQU43Q0U7QUErQk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaXJzdENvbXAuanM/OTkxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIHVzZUdldERhdGFRdWVyeSxcclxuICB1c2VMYXp5R2V0RGF0YWJ5cGFyYW1zUXVlcnksXHJcbn0gZnJvbSBcIi4uL3JlZHV4LXNldHVwL2FwaVNsaWNlXCI7XHJcbmltcG9ydCB7IHNob3dDb25zb2xlIH0gZnJvbSBcIi4uL3JlZHV4LXNldHVwL1Rlc3RTbGljZVwiO1xyXG5cclxuY29uc3QgRmlyc3RDb21wID0gKHsgcG9zdHMgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBzbGljZURhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLlRlc3RTbGljZS50ZW1wKTtcclxuICBjb25zdCB0ZXN0ID0gdXNlUmVmKDApO1xyXG4gIGNvbnNvbGUubG9nKHBvc3RzKVxyXG4gIC8vIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nIH0gPSB1c2VHZXREYXRhUXVlcnkoKTtcclxuICBjb25zdCBbZGF0YXRyaWdnZXJdID0gdXNlTGF6eUdldERhdGFieXBhcmFtc1F1ZXJ5KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgc2VsZWN0LW5vbmUgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgLy8gb25DbGljaz17KCkgPT4ge1xyXG4gICAgLy8gICBkYXRhdHJpZ2dlcih7IHRlc3Q6IFwicGFyYW0xXCIgfSk7XHJcbiAgICAvLyAgIGRpc3BhdGNoKFxyXG4gICAgLy8gICAgIHNob3dDb25zb2xlKFwiZGF0YSBmcm9tIGNvbXAgYXMgcGF5bG9kIHRvIHNsaWNlIFwiICsgdGVzdC5jdXJyZW50KyspXHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9fVxyXG4gICAgPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAge3Bvc3RzPy5wcm9kdWN0cy5tYXAoKGl0KSA9PiAoXHJcblxyXG4gICAgICAgICAgPGRpdiBpZD17aXQuaWR9PlxyXG48aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIGRlZmF1bHRWYWx1ZT17aXQudGl9IC8+XHJcbiAgICAgICAgICAgIDxkaXY+e2l0LnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyc3RDb21wO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwidXNlR2V0RGF0YVF1ZXJ5IiwidXNlTGF6eUdldERhdGFieXBhcmFtc1F1ZXJ5Iiwic2hvd0NvbnNvbGUiLCJGaXJzdENvbXAiLCJwb3N0cyIsImRpc3BhdGNoIiwic2xpY2VEYXRhIiwic3RhdGUiLCJUZXN0U2xpY2UiLCJ0ZW1wIiwidGVzdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhdHJpZ2dlciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb2R1Y3RzIiwibWFwIiwiaXQiLCJpZCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJkZWZhdWx0VmFsdWUiLCJ0aSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FirstComp.js\n"));

/***/ })

});