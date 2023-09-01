"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/features/vehicles/vehiclesSlice.tsx":
/*!*************************************************!*\
  !*** ./app/features/vehicles/vehiclesSlice.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getVehicles: function() { return /* binding */ getVehicles; },\n/* harmony export */   sendVehicles: function() { return /* binding */ sendVehicles; },\n/* harmony export */   vehiclesSlice: function() { return /* binding */ vehiclesSlice; },\n/* harmony export */   vehiclesState: function() { return /* binding */ vehiclesState; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n    vehicles: {},\n    uploads: null,\n    isLoading: false\n};\nconst vehiclesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"vehicles\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(getVehicles.pending, (state)=>{\n            state.isLoading = true;\n        }).addCase(getVehicles.fulfilled, (state, action)=>{\n            state.vehicles = action.payload;\n            state.isLoading = false;\n        }).addCase(getVehicles.rejected, (state)=>{\n            state.isLoading = false;\n        }).addCase(sendVehicles.pending, (state)=>{\n            state.isLoading = true;\n        }).addCase(sendVehicles.fulfilled, (state, action)=>{\n            state.vehicles = action.payload;\n            state.isLoading = false;\n        }).addCase(sendVehicles.rejected, (state)=>{\n            state.isLoading = false;\n        });\n    }\n});\nconst getVehicles = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"vehicles/getVehicles\", async (_, thunkAPI)=>{\n    try {\n        const res = await fetch(\"http://localhost:5000/api/vehicles\");\n        const response = await res.json();\n        return response;\n    } catch (error) {\n        return thunkAPI.rejectWithValue(error);\n    }\n});\nconst sendVehicles = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"vehicles/sendVehicles\", async (data, thunkAPI)=>{\n    try {\n        const res = await fetch(\"http://localhost:5000/api/vehicles\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        const response = await res.json();\n        return response;\n    } catch (error) {\n        return thunkAPI.rejectWithValue(error);\n    }\n});\nconst {} = vehiclesSlice.actions;\nconst vehiclesState = (state)=>state.vehicles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (vehiclesSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9mZWF0dXJlcy92ZWhpY2xlcy92ZWhpY2xlc1NsaWNlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNpRTtBQWtCakUsTUFBTUUsZUFBNkI7SUFDakNDLFVBQVUsQ0FBQztJQUNYQyxTQUFTO0lBQ1RDLFdBQVc7QUFDYjtBQUVPLE1BQU1DLGdCQUFnQkwsNkRBQVdBLENBQUM7SUFDdkNNLE1BQU07SUFDTkw7SUFDQU0sVUFBVSxDQUFDO0lBQ1hDLGVBQWUsQ0FBQ0M7UUFDZEEsUUFDR0MsT0FBTyxDQUFDQyxZQUFZQyxPQUFPLEVBQUUsQ0FBQ0M7WUFDN0JBLE1BQU1ULFNBQVMsR0FBRztRQUNwQixHQUNDTSxPQUFPLENBQUNDLFlBQVlHLFNBQVMsRUFBRSxDQUFDRCxPQUFPRTtZQUN0Q0YsTUFBTVgsUUFBUSxHQUFHYSxPQUFPQyxPQUFPO1lBQy9CSCxNQUFNVCxTQUFTLEdBQUc7UUFDcEIsR0FDQ00sT0FBTyxDQUFDQyxZQUFZTSxRQUFRLEVBQUUsQ0FBQ0o7WUFDOUJBLE1BQU1ULFNBQVMsR0FBRztRQUNwQixHQUVDTSxPQUFPLENBQUNRLGFBQWFOLE9BQU8sRUFBRSxDQUFDQztZQUM5QkEsTUFBTVQsU0FBUyxHQUFHO1FBQ3BCLEdBQ0NNLE9BQU8sQ0FDTlEsYUFBYUosU0FBUyxFQUN0QixDQUFDRCxPQUFPRTtZQUNORixNQUFNWCxRQUFRLEdBQUdhLE9BQU9DLE9BQU87WUFDL0JILE1BQU1ULFNBQVMsR0FBRztRQUNwQixHQUVETSxPQUFPLENBQUNRLGFBQWFELFFBQVEsRUFBRSxDQUFDSjtZQUMvQkEsTUFBTVQsU0FBUyxHQUFHO1FBQ3BCO0lBQ0o7QUFDRixHQUFHO0FBRUksTUFBTU8sY0FBY1osa0VBQWdCQSxDQUN6Qyx3QkFDQSxPQUFPb0IsR0FBR0M7SUFDUixJQUFJO1FBQ0YsTUFBTUMsTUFBTSxNQUFNQyxNQUFNO1FBQ3hCLE1BQU1DLFdBQVcsTUFBTUYsSUFBSUcsSUFBSTtRQUMvQixPQUFPRDtJQUNULEVBQUUsT0FBT0UsT0FBTztRQUNkLE9BQU9MLFNBQVNNLGVBQWUsQ0FBQ0Q7SUFDbEM7QUFDRixHQUNBO0FBRUssTUFBTVAsZUFBZW5CLGtFQUFnQkEsQ0FDMUMseUJBQ0EsT0FBTzRCLE1BQVdQO0lBQ2hCLElBQUk7UUFDRixNQUFNQyxNQUFNLE1BQU1DLE1BQU0sc0NBQXNDO1lBQzVETSxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ0w7UUFDdkI7UUFFQSxNQUFNSixXQUFXLE1BQU1GLElBQUlHLElBQUk7UUFDL0IsT0FBT0Q7SUFDVCxFQUFFLE9BQU9FLE9BQU87UUFDZCxPQUFPTCxTQUFTTSxlQUFlLENBQUNEO0lBQ2xDO0FBQ0YsR0FDQTtBQUVLLE1BQU0sRUFBRSxHQUFHcEIsY0FBYzRCLE9BQU8sQ0FBQztBQUNqQyxNQUFNQyxnQkFBZ0IsQ0FBQ3JCLFFBQXFCQSxNQUFNWCxRQUFRLENBQUM7QUFDbEUsK0RBQWVHLGNBQWM4QixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2ZlYXR1cmVzL3ZlaGljbGVzL3ZlaGljbGVzU2xpY2UudHN4PzQyYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIkAvbGliL3N0b3JlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVwbG9hZCB7XHJcbiAgZGV0YWlsczoge1xyXG4gICAgYnJhbmQ6IHN0cmluZztcclxuICAgIG1vZGVsOiBzdHJpbmc7XHJcbiAgICBiYWRnZTogc3RyaW5nO1xyXG4gIH07XHJcbiAgdXBsb2FkZWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBpbml0aWFsU3RhdGUge1xyXG4gIHZlaGljbGVzOiBhbnk7XHJcbiAgdXBsb2FkczogSVVwbG9hZCB8IG51bGw7XHJcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IGluaXRpYWxTdGF0ZSA9IHtcclxuICB2ZWhpY2xlczoge30sXHJcbiAgdXBsb2FkczogbnVsbCxcclxuICBpc0xvYWRpbmc6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHZlaGljbGVzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJ2ZWhpY2xlc1wiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge30sXHJcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcclxuICAgIGJ1aWxkZXJcclxuICAgICAgLmFkZENhc2UoZ2V0VmVoaWNsZXMucGVuZGluZywgKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgfSlcclxuICAgICAgLmFkZENhc2UoZ2V0VmVoaWNsZXMuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7fT4pID0+IHtcclxuICAgICAgICBzdGF0ZS52ZWhpY2xlcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgICAuYWRkQ2FzZShnZXRWZWhpY2xlcy5yZWplY3RlZCwgKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAuYWRkQ2FzZShzZW5kVmVoaWNsZXMucGVuZGluZywgKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgfSlcclxuICAgICAgLmFkZENhc2UoXHJcbiAgICAgICAgc2VuZFZlaGljbGVzLmZ1bGZpbGxlZCxcclxuICAgICAgICAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxJVXBsb2FkPikgPT4ge1xyXG4gICAgICAgICAgc3RhdGUudmVoaWNsZXMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuYWRkQ2FzZShzZW5kVmVoaWNsZXMucmVqZWN0ZWQsIChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRWZWhpY2xlcyA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgXCJ2ZWhpY2xlcy9nZXRWZWhpY2xlc1wiLFxyXG4gIGFzeW5jIChfLCB0aHVua0FQSSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3ZlaGljbGVzXCIpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB0aHVua0FQSS5yZWplY3RXaXRoVmFsdWUoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZW5kVmVoaWNsZXMgPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gIFwidmVoaWNsZXMvc2VuZFZlaGljbGVzXCIsXHJcbiAgYXN5bmMgKGRhdGE6IGFueSwgdGh1bmtBUEkpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92ZWhpY2xlc1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHRodW5rQVBJLnJlamVjdFdpdGhWYWx1ZShlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHt9ID0gdmVoaWNsZXNTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgY29uc3QgdmVoaWNsZXNTdGF0ZSA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS52ZWhpY2xlcztcclxuZXhwb3J0IGRlZmF1bHQgdmVoaWNsZXNTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidmVoaWNsZXMiLCJ1cGxvYWRzIiwiaXNMb2FkaW5nIiwidmVoaWNsZXNTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsImdldFZlaGljbGVzIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlamVjdGVkIiwic2VuZFZlaGljbGVzIiwiXyIsInRodW5rQVBJIiwicmVzIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJlcnJvciIsInJlamVjdFdpdGhWYWx1ZSIsImRhdGEiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhY3Rpb25zIiwidmVoaWNsZXNTdGF0ZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/features/vehicles/vehiclesSlice.tsx\n"));

/***/ })

});