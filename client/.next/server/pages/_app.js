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

/***/ "./config/default.ts":
/*!***************************!*\
  !*** ./config/default.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SOCKET_URL\": () => (/* binding */ SOCKET_URL)\n/* harmony export */ });\nconst SOCKET_URL = process.env.SOCKET_URL || \"http://localhost:4000\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZGVmYXVsdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsYUFBYUMsUUFBUUMsR0FBRyxDQUFDRixVQUFVLElBQUksd0JBQXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29uZmlnL2RlZmF1bHQudHM/NWMxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU09DS0VUX1VSTCA9IHByb2Nlc3MuZW52LlNPQ0tFVF9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjQwMDBcIjtcbiJdLCJuYW1lcyI6WyJTT0NLRVRfVVJMIiwicHJvY2VzcyIsImVudiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/default.ts\n");

/***/ }),

/***/ "./context/socketContext.tsx":
/*!***********************************!*\
  !*** ./context/socketContext.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useSockets\": () => (/* binding */ useSockets)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var _config_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/default */ \"./config/default.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_2__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_config_default__WEBPACK_IMPORTED_MODULE_3__.SOCKET_URL);\nconst SocketContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    socket,\n    setUsername: ()=>false\n});\nfunction SocketsProvider(props) {\n    const [username, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SocketContext.Provider, {\n        value: {\n            socket,\n            username,\n            setUserName\n        },\n        ...props\n    }, void 0, false, {\n        fileName: \"/Users/bjorn/Documents/Projects/portfolio/client/context/socketContext.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\nconst useSockets = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SocketContext);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocketsProvider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3NvY2tldENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEQ7QUFDZDtBQUNDO0FBUS9DLE1BQU1LLFNBQVNGLDREQUFFQSxDQUFDQyx1REFBVUE7QUFFNUIsTUFBTUUsOEJBQWdCTixvREFBYUEsQ0FBVTtJQUMzQ0s7SUFDQUUsYUFBYSxJQUFNLEtBQUs7QUFDMUI7QUFFQSxTQUFTQyxnQkFBZ0JDLEtBQVUsRUFBRTtJQUNuQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFDekMscUJBQ0UsOERBQUNJLGNBQWNNLFFBQVE7UUFDckJDLE9BQU87WUFBRVI7WUFBUUs7WUFBVUM7UUFBWTtRQUN0QyxHQUFHRixLQUFLOzs7Ozs7QUFHZjtBQUVPLE1BQU1LLGFBQWEsSUFBTWIsaURBQVVBLENBQUNLLGVBQWU7QUFFMUQsaUVBQWVFLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb250ZXh0L3NvY2tldENvbnRleHQudHN4PzdmNzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBpbywgeyBTb2NrZXQgfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IHsgU09DS0VUX1VSTCB9IGZyb20gXCIuLi9jb25maWcvZGVmYXVsdFwiO1xuXG5pbnRlcmZhY2UgQ29udGV4dCB7XG4gIHNvY2tldDogU29ja2V0O1xuICB1c2VybmFtZT86IHN0cmluZztcbiAgc2V0VXNlcm5hbWU6IEZ1bmN0aW9uO1xufVxuXG5jb25zdCBzb2NrZXQgPSBpbyhTT0NLRVRfVVJMKTtcblxuY29uc3QgU29ja2V0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8Q29udGV4dD4oe1xuICBzb2NrZXQsXG4gIHNldFVzZXJuYW1lOiAoKSA9PiBmYWxzZSxcbn0pO1xuXG5mdW5jdGlvbiBTb2NrZXRzUHJvdmlkZXIocHJvcHM6IGFueSkge1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICByZXR1cm4gKFxuICAgIDxTb2NrZXRDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17eyBzb2NrZXQsIHVzZXJuYW1lLCBzZXRVc2VyTmFtZSB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VTb2NrZXRzID0gKCkgPT4gdXNlQ29udGV4dChTb2NrZXRDb250ZXh0KTtcblxuZXhwb3J0IGRlZmF1bHQgU29ja2V0c1Byb3ZpZGVyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJpbyIsIlNPQ0tFVF9VUkwiLCJzb2NrZXQiLCJTb2NrZXRDb250ZXh0Iiwic2V0VXNlcm5hbWUiLCJTb2NrZXRzUHJvdmlkZXIiLCJwcm9wcyIsInVzZXJuYW1lIiwic2V0VXNlck5hbWUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlU29ja2V0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/socketContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_socketContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/socketContext */ \"./context/socketContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_socketContext__WEBPACK_IMPORTED_MODULE_2__]);\n_context_socketContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction App({ Component , pageProps  }) {\n    return(//Enables that you can use socket from anywhere in the app.\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_socketContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/bjorn/Documents/Projects/portfolio/client/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/bjorn/Documents/Projects/portfolio/client/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUV3QjtBQUV4QyxTQUFTQyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDOUQsT0FDRSwyREFBMkQ7a0JBQzNELDhEQUFDSCw4REFBZUE7a0JBQ2QsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgU29ja2V0c1Byb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0L3NvY2tldENvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICAvL0VuYWJsZXMgdGhhdCB5b3UgY2FuIHVzZSBzb2NrZXQgZnJvbSBhbnl3aGVyZSBpbiB0aGUgYXBwLlxuICAgIDxTb2NrZXRzUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Tb2NrZXRzUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU29ja2V0c1Byb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



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

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();