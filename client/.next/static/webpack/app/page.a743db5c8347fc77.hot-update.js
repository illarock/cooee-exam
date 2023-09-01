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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getVehicles: function() { return /* binding */ getVehicles; },\n/* harmony export */   sendVehicles: function() { return /* binding */ sendVehicles; },\n/* harmony export */   vehiclesSlice: function() { return /* binding */ vehiclesSlice; },\n/* harmony export */   vehiclesState: function() { return /* binding */ vehiclesState; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n    vehicles: {},\n    uploads: null,\n    isLoading: false\n};\nconst vehiclesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"vehicles\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(getVehicles.pending, (state)=>{\n            state.isLoading = true;\n        }).addCase(getVehicles.fulfilled, (state, action)=>{\n            state.vehicles = action.payload;\n            state.isLoading = false;\n        }).addCase(getVehicles.rejected, (state)=>{\n            state.isLoading = false;\n        }).addCase(sendVehicles.pending, (state)=>{\n            state.isLoading = true;\n        }).addCase(sendVehicles.fulfilled, (state, action)=>{\n            state.vehicles = action.payload;\n            state.isLoading = false;\n        }).addCase(sendVehicles.rejected, (state)=>{\n            state.isLoading = false;\n        });\n    }\n});\nconst getVehicles = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"vehicles/getVehicles\", async (_, thunkAPI)=>{\n    try {\n        const res = await fetch(\"http://localhost:5000/api/vehicles\");\n        const response = await res.json();\n        return response;\n    } catch (error) {\n        return thunkAPI.rejectWithValue(error);\n    }\n});\nconst sendVehicles = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"vehicles/sendVehicles\", async (data, thunkAPI)=>{\n    try {\n        const res = await fetch(\"http://localhost:5000/api/vehicles\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        });\n        const response = await res.json();\n        return response;\n    } catch (error) {\n        return thunkAPI.rejectWithValue(error);\n    }\n});\nconst {} = vehiclesSlice.actions;\nconst vehiclesState = (state)=>state.vehicles;\n/* harmony default export */ __webpack_exports__[\"default\"] = (vehiclesSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9mZWF0dXJlcy92ZWhpY2xlcy92ZWhpY2xlc1NsaWNlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVpRTtBQUdqRSxNQUFNRSxlQUE2QjtJQUNqQ0MsVUFBVSxDQUFDO0lBQ1hDLFNBQVM7SUFDVEMsV0FBVztBQUNiO0FBRU8sTUFBTUMsZ0JBQWdCTCw2REFBV0EsQ0FBQztJQUN2Q00sTUFBTTtJQUNOTDtJQUNBTSxVQUFVLENBQUM7SUFDWEMsZUFBZSxDQUFDQztRQUNkQSxRQUNHQyxPQUFPLENBQUNDLFlBQVlDLE9BQU8sRUFBRSxDQUFDQztZQUM3QkEsTUFBTVQsU0FBUyxHQUFHO1FBQ3BCLEdBQ0NNLE9BQU8sQ0FBQ0MsWUFBWUcsU0FBUyxFQUFFLENBQUNELE9BQU9FO1lBQ3RDRixNQUFNWCxRQUFRLEdBQUdhLE9BQU9DLE9BQU87WUFDL0JILE1BQU1ULFNBQVMsR0FBRztRQUNwQixHQUNDTSxPQUFPLENBQUNDLFlBQVlNLFFBQVEsRUFBRSxDQUFDSjtZQUM5QkEsTUFBTVQsU0FBUyxHQUFHO1FBQ3BCLEdBRUNNLE9BQU8sQ0FBQ1EsYUFBYU4sT0FBTyxFQUFFLENBQUNDO1lBQzlCQSxNQUFNVCxTQUFTLEdBQUc7UUFDcEIsR0FDQ00sT0FBTyxDQUNOUSxhQUFhSixTQUFTLEVBQ3RCLENBQUNELE9BQU9FO1lBQ05GLE1BQU1YLFFBQVEsR0FBR2EsT0FBT0MsT0FBTztZQUMvQkgsTUFBTVQsU0FBUyxHQUFHO1FBQ3BCLEdBRURNLE9BQU8sQ0FBQ1EsYUFBYUQsUUFBUSxFQUFFLENBQUNKO1lBQy9CQSxNQUFNVCxTQUFTLEdBQUc7UUFDcEI7SUFDSjtBQUNGLEdBQUc7QUFFSSxNQUFNTyxjQUFjWixrRUFBZ0JBLENBQ3pDLHdCQUNBLE9BQU9vQixHQUFHQztJQUNSLElBQUk7UUFDRixNQUFNQyxNQUFNLE1BQU1DLE1BQU07UUFDeEIsTUFBTUMsV0FBVyxNQUFNRixJQUFJRyxJQUFJO1FBQy9CLE9BQU9EO0lBQ1QsRUFBRSxPQUFPRSxPQUFPO1FBQ2QsT0FBT0wsU0FBU00sZUFBZSxDQUFDRDtJQUNsQztBQUNGLEdBQ0E7QUFFSyxNQUFNUCxlQUFlbkIsa0VBQWdCQSxDQUMxQyx5QkFDQSxPQUFPNEIsTUFBV1A7SUFDaEIsSUFBSTtRQUNGLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxzQ0FBc0M7WUFDNURNLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDTDtRQUN2QjtRQUVBLE1BQU1KLFdBQVcsTUFBTUYsSUFBSUcsSUFBSTtRQUMvQixPQUFPRDtJQUNULEVBQUUsT0FBT0UsT0FBTztRQUNkLE9BQU9MLFNBQVNNLGVBQWUsQ0FBQ0Q7SUFDbEM7QUFDRixHQUNBO0FBRUssTUFBTSxFQUFFLEdBQUdwQixjQUFjNEIsT0FBTyxDQUFDO0FBQ2pDLE1BQU1DLGdCQUFnQixDQUFDckIsUUFBcUJBLE1BQU1YLFFBQVEsQ0FBQztBQUNsRSwrREFBZUcsY0FBYzhCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZmVhdHVyZXMvdmVoaWNsZXMvdmVoaWNsZXNTbGljZS50c3g/NDJjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiQC9saWIvc3RvcmVcIjtcclxuaW1wb3J0IHsgSVVwbG9hZCwgaW5pdGlhbFN0YXRlIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdmVoaWNsZXM6IHt9LFxyXG4gIHVwbG9hZHM6IG51bGwsXHJcbiAgaXNMb2FkaW5nOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB2ZWhpY2xlc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidmVoaWNsZXNcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHt9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XHJcbiAgICBidWlsZGVyXHJcbiAgICAgIC5hZGRDYXNlKGdldFZlaGljbGVzLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZGRDYXNlKGdldFZlaGljbGVzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248e30+KSA9PiB7XHJcbiAgICAgICAgc3RhdGUudmVoaWNsZXMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSlcclxuICAgICAgLmFkZENhc2UoZ2V0VmVoaWNsZXMucmVqZWN0ZWQsIChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG5cclxuICAgICAgLmFkZENhc2Uoc2VuZFZlaGljbGVzLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZGRDYXNlKFxyXG4gICAgICAgIHNlbmRWZWhpY2xlcy5mdWxmaWxsZWQsXHJcbiAgICAgICAgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248SVVwbG9hZD4pID0+IHtcclxuICAgICAgICAgIHN0YXRlLnZlaGljbGVzID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLmFkZENhc2Uoc2VuZFZlaGljbGVzLnJlamVjdGVkLCAoc3RhdGUpID0+IHtcclxuICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VmVoaWNsZXMgPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gIFwidmVoaWNsZXMvZ2V0VmVoaWNsZXNcIixcclxuICBhc3luYyAoXywgdGh1bmtBUEkpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92ZWhpY2xlc1wiKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gdGh1bmtBUEkucmVqZWN0V2l0aFZhbHVlKGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZFZlaGljbGVzID0gY3JlYXRlQXN5bmNUaHVuayhcclxuICBcInZlaGljbGVzL3NlbmRWZWhpY2xlc1wiLFxyXG4gIGFzeW5jIChkYXRhOiBhbnksIHRodW5rQVBJKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdmVoaWNsZXNcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB0aHVua0FQSS5yZWplY3RXaXRoVmFsdWUoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCB7fSA9IHZlaGljbGVzU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGNvbnN0IHZlaGljbGVzU3RhdGUgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudmVoaWNsZXM7XHJcbmV4cG9ydCBkZWZhdWx0IHZlaGljbGVzU2xpY2UucmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUFzeW5jVGh1bmsiLCJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInZlaGljbGVzIiwidXBsb2FkcyIsImlzTG9hZGluZyIsInZlaGljbGVzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJnZXRWZWhpY2xlcyIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJyZWplY3RlZCIsInNlbmRWZWhpY2xlcyIsIl8iLCJ0aHVua0FQSSIsInJlcyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJyZWplY3RXaXRoVmFsdWUiLCJkYXRhIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYWN0aW9ucyIsInZlaGljbGVzU3RhdGUiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/features/vehicles/vehiclesSlice.tsx\n"));

/***/ })

});