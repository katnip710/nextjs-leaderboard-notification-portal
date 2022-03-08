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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"theme-ui\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ \"./theme.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"@auth0/nextjs-auth0\");\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);\n    const { 0: theData , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchData = async ()=>{\n        const response = await fetch(\"/api/firestore\");\n        const data = await response.json();\n        setData(data.items);\n        setLoading(false);\n    };\n    if (isLoading) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            sx: {\n                position: 'fixed',\n                top: '50%',\n                left: '50%',\n                transform: 'translateX(-50%)',\n                fontFamily: 'sans-serif',\n                fontWeight: '600',\n                fontSize: '1rem'\n            },\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\katar\\\\Documents\\\\LearningStuff\\\\leaderboardPortal\\\\pages\\\\_app.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this));\n    }\n    if (!theData) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"no data\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\katar\\\\Documents\\\\LearningStuff\\\\leaderboardPortal\\\\pages\\\\_app.js\",\n        lineNumber: 35,\n        columnNumber: 26\n    }, this));\n    else {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_5__.UserProvider, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                children: \"Leaderboard Notification Portal\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\katar\\\\Documents\\\\LearningStuff\\\\leaderboardPortal\\\\pages\\\\_app.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                                rel: \"icon\",\n                                href: \"/favicon.ico\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\katar\\\\Documents\\\\LearningStuff\\\\leaderboardPortal\\\\pages\\\\_app.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\katar\\\\Documents\\\\LearningStuff\\\\leaderboardPortal\\\\pages\\\\_app.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n                        theme: _theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps,\n                            users: theData\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\katar\\\\Documents\\\\LearningStuff\\\\leaderboardPortal\\\\pages\\\\_app.js\",\n                            lineNumber: 47,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\katar\\\\Documents\\\\LearningStuff\\\\leaderboardPortal\\\\pages\\\\_app.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\katar\\\\Documents\\\\LearningStuff\\\\leaderboardPortal\\\\pages\\\\_app.js\",\n                lineNumber: 41,\n                columnNumber: 11\n            }, this)\n        }, void 0, false));\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNlO0FBQ2pCO0FBQ0E7QUFDc0I7QUFDUDtTQUVsQ08sS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFFeEMsS0FBSyxNQUFFQyxTQUFTLE1BQUVDLFVBQVUsTUFBSUwsK0NBQVEsQ0FBQyxJQUFJO0lBQzdDLEtBQUssTUFBRU0sT0FBTyxNQUFFQyxPQUFPLE1BQUlQLCtDQUFRLENBQUMsSUFBSTtJQUV4Q0QsZ0RBQVMsS0FBTyxDQUFDUztRQUFBQSxTQUFTO0lBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUM5QixLQUFLLENBQUNBLFNBQVMsYUFBYyxDQUFDO1FBQzVCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLENBQWdCO1FBRTdDLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxJQUFJO1FBQ2hDTCxPQUFPLENBQUVJLElBQUksQ0FBQ0UsS0FBSztRQUNuQlIsVUFBVSxDQUFDLEtBQUs7SUFDbEIsQ0FBQztJQUVELEVBQUUsRUFBQ0QsU0FBUyxFQUFDLENBQUM7UUFBQSxNQUFNLDZFQUNqQlQseUNBQUc7WUFBQ21CLEVBQUUsRUFBRSxDQUFDO2dCQUNSQyxRQUFRLEVBQUUsQ0FBTztnQkFDakJDLEdBQUcsRUFBRSxDQUFLO2dCQUNWQyxJQUFJLEVBQUUsQ0FBSztnQkFDWEMsU0FBUyxFQUFFLENBQWtCO2dCQUM3QkMsVUFBVSxFQUFFLENBQVk7Z0JBQ3hCQyxVQUFVLEVBQUUsQ0FBSztnQkFDakJDLFFBQVEsRUFBRSxDQUFNO1lBQ2xCLENBQUM7c0JBQUUsQ0FFSDs7Ozs7O0lBQ0QsQ0FBQztJQUNGLEVBQUUsR0FBR2YsT0FBTyxFQUFFLE1BQU0sNkVBQUVnQixDQUFDO2tCQUFDLENBQU87Ozs7OztTQUUzQixDQUFDO1FBRUgsTUFBTTtrR0FFRHhCLDZEQUFZOztnR0FDWkQsa0RBQUk7O3dHQUNGMEIsQ0FBSzswQ0FBQyxDQUErQjs7Ozs7O3dHQUNyQ0MsQ0FBSTtnQ0FBQ0MsR0FBRyxFQUFDLENBQU07Z0NBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7Ozs7Z0dBRW5DaEMsbURBQWE7d0JBQUNFLEtBQUssRUFBRUEsOENBQUs7OEdBQ3RCTSxTQUFTOytCQUFLQyxTQUFTOzRCQUFFd0IsS0FBSyxFQUFFckIsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS3RELENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVMLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIEJveCB9IGZyb20gXCJ0aGVtZS11aVwiXHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vdGhlbWVcIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IFVzZXJQcm92aWRlciB9IGZyb20gJ0BhdXRoMC9uZXh0anMtYXV0aDAnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuXHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFt0aGVEYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7ZmV0Y2hEYXRhKCl9LFtdKVxyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT57XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2ZpcmVzdG9yZVwiKVxyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICBzZXREYXRhIChkYXRhLml0ZW1zKVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGlzTG9hZGluZyl7cmV0dXJuKFxyXG4gICAgICA8Qm94IHN4PXt7XHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgdG9wOiAnNTAlJyxcclxuICAgICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyxcclxuICAgICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXHJcbiAgICAgICAgZm9udFdlaWdodDogJzYwMCcsXHJcbiAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgICAgfX0+XHJcbiAgICAgICAgTG9hZGluZy4uLlxyXG4gICAgICA8L0JveD5cclxuICAgICl9XHJcbiAgICBpZiAoIXRoZURhdGEpIHJldHVybiA8cD5ubyBkYXRhPC9wPlxyXG5cclxuICAgIGVsc2V7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8VXNlclByb3ZpZGVyPlxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5MZWFkZXJib2FyZCBOb3RpZmljYXRpb24gUG9ydGFsPC90aXRsZT5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSB1c2Vycz17dGhlRGF0YX0gLz5cclxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgICAgPC9Vc2VyUHJvdmlkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwiQm94IiwidGhlbWUiLCJIZWFkIiwiVXNlclByb3ZpZGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJ0aGVEYXRhIiwic2V0RGF0YSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIml0ZW1zIiwic3giLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwicCIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJ1c2VycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./theme.js":
/*!******************!*\
  !*** ./theme.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    breakpoints: [\n        \"40em\",\n        \"52em\",\n        \"64em\"\n    ],\n    space: [\n        0,\n        4,\n        8,\n        16,\n        32,\n        64,\n        128,\n        256,\n        512\n    ],\n    fonts: {},\n    fontWeights: {\n        body: 400,\n        heading: 600,\n        bold: 700\n    },\n    lineHeights: {\n        body: 1.2,\n        heading: 1.5\n    },\n    text: {\n        heading: {\n            fontFamily: \"heading\",\n            lineHeight: \"heading\",\n            fontWeight: \"heading\",\n            fontSize: [\n                \"2em\",\n                \"3em\",\n                \"3.5em\"\n            ]\n        },\n        paragraph: {\n            fontSize: [\n                '1em',\n                '1.75em'\n            ],\n            color: '#484C4F'\n        }\n    },\n    styles: {\n        root: {\n            body: {\n                margin: 0\n            },\n            h1: {\n                fontSize: \"2.5vh !important\"\n            },\n            h2: {\n                fontSize: \"1.7vh !important\"\n            }\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aGVtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsQ0FBQztJQUNaQSxXQUFXLEVBQUUsQ0FBQztRQUFBLENBQU07UUFBRSxDQUFNO1FBQUUsQ0FBTTtJQUFBLENBQUM7SUFDckNDLEtBQUssRUFBRSxDQUFDO0FBQUEsU0FBQztBQUFFLFNBQUM7QUFBRSxTQUFDO0FBQUUsVUFBRTtBQUFFLFVBQUU7QUFBRSxVQUFFO0FBQUUsV0FBRztBQUFFLFdBQUc7QUFBRSxXQUFHO0lBQUEsQ0FBQztJQUMzQ0MsS0FBSyxFQUFFLENBQUMsQ0FDUDtJQUNEQyxXQUFXLEVBQUUsQ0FBQztRQUNaQyxJQUFJLEVBQUUsR0FBRztRQUNUQyxPQUFPLEVBQUUsR0FBRztRQUNaQyxJQUFJLEVBQUUsR0FBRztJQUNYLENBQUM7SUFDREMsV0FBVyxFQUFFLENBQUM7UUFDWkgsSUFBSSxFQUFFLEdBQUc7UUFDVEMsT0FBTyxFQUFFLEdBQUc7SUFDZCxDQUFDO0lBQ0RHLElBQUksRUFBRSxDQUFDO1FBQ0xILE9BQU8sRUFBRSxDQUFDO1lBQ1JJLFVBQVUsRUFBRSxDQUFTO1lBQ3JCQyxVQUFVLEVBQUUsQ0FBUztZQUNyQkMsVUFBVSxFQUFFLENBQVM7WUFDckJDLFFBQVEsRUFBRSxDQUFDO2dCQUFBLENBQUs7Z0JBQUUsQ0FBSztnQkFBRSxDQUFPO1lBQUEsQ0FBQztRQUNuQyxDQUFDO1FBQ0RDLFNBQVMsRUFBRSxDQUFDO1lBQ1ZELFFBQVEsRUFBRSxDQUFDO2dCQUFBLENBQUs7Z0JBQUUsQ0FBUTtZQUFBLENBQUM7WUFDM0JFLEtBQUssRUFBQyxDQUFTO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBQ0RDLE1BQU0sRUFBRSxDQUFDO1FBQ1BDLElBQUksRUFBRSxDQUFDO1lBQ0xaLElBQUksRUFBRSxDQUFDO2dCQUNMYSxNQUFNLEVBQUUsQ0FBQztZQUNYLENBQUM7WUFDREMsRUFBRSxFQUFDLENBQUM7Z0JBQ0ZOLFFBQVEsRUFBQyxDQUFrQjtZQUM3QixDQUFDO1lBQ0RPLEVBQUUsRUFBQyxDQUFDO2dCQUNGUCxRQUFRLEVBQUMsQ0FBa0I7WUFDN0IsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdGhlbWUuanM/Mjk2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBicmVha3BvaW50czogW1wiNDBlbVwiLCBcIjUyZW1cIiwgXCI2NGVtXCJdLFxyXG4gICAgc3BhY2U6IFswLCA0LCA4LCAxNiwgMzIsIDY0LCAxMjgsIDI1NiwgNTEyXSxcclxuICAgIGZvbnRzOiB7XHJcbiAgICB9LFxyXG4gICAgZm9udFdlaWdodHM6IHtcclxuICAgICAgYm9keTogNDAwLFxyXG4gICAgICBoZWFkaW5nOiA2MDAsXHJcbiAgICAgIGJvbGQ6IDcwMCxcclxuICAgIH0sXHJcbiAgICBsaW5lSGVpZ2h0czoge1xyXG4gICAgICBib2R5OiAxLjIsXHJcbiAgICAgIGhlYWRpbmc6IDEuNSxcclxuICAgIH0sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgIGhlYWRpbmc6IHtcclxuICAgICAgICBmb250RmFtaWx5OiBcImhlYWRpbmdcIixcclxuICAgICAgICBsaW5lSGVpZ2h0OiBcImhlYWRpbmdcIixcclxuICAgICAgICBmb250V2VpZ2h0OiBcImhlYWRpbmdcIixcclxuICAgICAgICBmb250U2l6ZTogW1wiMmVtXCIsIFwiM2VtXCIsIFwiMy41ZW1cIl0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhcmFncmFwaDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBbJzFlbScsICcxLjc1ZW0nXSxcclxuICAgICAgICBjb2xvcjonIzQ4NEM0RidcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN0eWxlczoge1xyXG4gICAgICByb290OiB7XHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaDE6e1xyXG4gICAgICAgICAgZm9udFNpemU6XCIyLjV2aCAhaW1wb3J0YW50XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGgyOntcclxuICAgICAgICAgIGZvbnRTaXplOlwiMS43dmggIWltcG9ydGFudFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuIl0sIm5hbWVzIjpbImJyZWFrcG9pbnRzIiwic3BhY2UiLCJmb250cyIsImZvbnRXZWlnaHRzIiwiYm9keSIsImhlYWRpbmciLCJib2xkIiwibGluZUhlaWdodHMiLCJ0ZXh0IiwiZm9udEZhbWlseSIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJwYXJhZ3JhcGgiLCJjb2xvciIsInN0eWxlcyIsInJvb3QiLCJtYXJnaW4iLCJoMSIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./theme.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "theme-ui":
/*!***************************!*\
  !*** external "theme-ui" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("theme-ui");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();