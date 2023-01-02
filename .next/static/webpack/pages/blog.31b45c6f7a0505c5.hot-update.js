"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./public/profile.js":
/*!***************************!*\
  !*** ./public/profile.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"experiences\": function() { return /* binding */ experiences; },\n/* harmony export */   \"posts\": function() { return /* binding */ posts; },\n/* harmony export */   \"projects\": function() { return /* binding */ projects; },\n/* harmony export */   \"skills\": function() { return /* binding */ skills; }\n/* harmony export */ });\nconst skills = [\n    {\n        skill: \"Excel\",\n        percentage: 80\n    },\n    {\n        skill: \"GitHub\",\n        percentage: 80\n    },\n    {\n        skill: \"Git\",\n        percentage: 70\n    },\n    {\n        skill: \"Power BI\",\n        percentage: 60\n    }\n];\nconst experiences = [\n    {\n        title: \"Data Scientist Intern at Banorte\",\n        description: \"\",\n        from: \"January 2023 \",\n        to: \"Present\"\n    },\n    {\n        title: \"Data Scientist Intern at BanCoppel\",\n        description: \"Customer Segmentation with Python and SQL, Measurement Campaign with SQL and SPSS Modeler, Statistical Analysis and Modelling with Python, Hypothesis Test for One Population Proportion with Python.\",\n        from: \"July 2022\",\n        to: \"January 2023\"\n    },\n    {\n        title: \"Microsoft Learn Student Ambassador (Volunteer experience)\",\n        description: \"Learn Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future.\",\n        from: \"July 2021\",\n        to: \"Present\"\n    }\n];\nconst projects = [\n    {\n        name: \"Markov Chain Text Generator\",\n        description: \"The generator analyzes the words and their probability of occurrence of two consecutive words. It then generates chains of words that are probably related.\",\n        image: \"markovv.png\",\n        url: \"https://github.com/Misael-Alvarez/Generar-Texto-Con-Cadenas-De-Markov/blob/main/Generar_Texto_Cadenas_Markov.ipynb\"\n    },\n    {\n        name: \"Facial Recognition Using Deep Learning\",\n        description: \"Facial recognition has progressed to become the most fitting and rational technique in human identification technology.\",\n        image: \"facial.jpg\",\n        url: \"https://github.com/Misael-Alvarez/Reconocimiento-Facial\"\n    },\n    {\n        name: \"Fitting of a Polynomial using Least Squares Method (NIST)\",\n        description: \"Polynomial models are a great tool for determining which input factors drive responses and in what direction.\",\n        image: \"nist.png\",\n        url: \"https://github.com/Misael-Alvarez/Regresiones-NIST\"\n    },\n    {\n        name: \"Genetic Algorithms for Graph Colouring\",\n        description: \"The genetic algorithm is a method for solving both constrained and unconstrained optimization problems that is based on natural selection, the process that drives biological evolution.\",\n        image: \"genetico.png\",\n        url: \"https://github.com/Misael-Alvarez/AlgoritmoGenetico/blob/main/Algoritmo%20Genetico%203.ipynb\"\n    },\n    {\n        name: \"Linear Regression and Multiple Regression\",\n        description: \"In statistical modeling, regression analysis is a set of statistical processes for estimating the relationships between a dependent variable.\",\n        image: \"multiple.png\",\n        url: \"https://github.com/Misael-Alvarez/Regresion-Multilineal/blob/main/Tarea1-Misael-Alvarez.ipynb\"\n    },\n    {\n        name: \"Lotka–Volterra equations\",\n        description: \"The Lotka–Volterra equations, also known as the predator–prey equations, are a pair of first-order nonlinear differential equations, frequently used to describe the dynamics of biological systems in which two species interact, one as a predator and the other as prey.\",\n        image: \"caza-presa.jpg\",\n        url: \"https://github.com/Misael-Alvarez/Modelo-Caza-Depredador/blob/main/Modelo_Caza_Depredador.ipynb\"\n    }\n];\nconst posts = [\n    {\n        title: \"Pandas\",\n        content: \"pandas is a software library written for the Python programming language for data manipulation and analysis. In particular, it offers data structures and operations for manipulating numerical tables and time series. It is free software released under the three-clause BSD license. The name is derived from the term 'panel data', an econometrics term for data sets that include observations over multiple time periods for the same individuals. Its name is a play on the phrase 'Python data analysis' itself. Wes McKinney started building what would become pandas at AQR Capital while he was a researcher there from 2007 to 2010.\",\n        imageURL: \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/300px-Pandas_logo.svg.png\"\n    },\n    {\n        title: \"Angular\",\n        content: \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem\",\n        imageURL: \"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faie.edu.au%2Fwp-content%2Fuploads%2F2018%2F03%2Fgame-programming-03.jpg\"\n    },\n    {\n        title: \"Nextjs\",\n        content: \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem\",\n        imageURL: \"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faie.edu.au%2Fwp-content%2Fuploads%2F2018%2F03%2Fgame-programming-03.jpg\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sTUFBTUEsU0FBUztJQUNsQjtRQUNJQyxPQUFPO1FBQ1BDLFlBQVk7SUFDZDtJQUNGO1FBQ0VELE9BQU87UUFDUEMsWUFBWTtJQUNkO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxZQUFZO0lBQ2Q7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLFlBQVk7SUFDZDtDQUNELENBQUM7QUFFSyxNQUFNQyxjQUFjO0lBQ3pCO1FBQ0VDLE9BQU87UUFDUEMsYUFDRTtRQUNGQyxNQUFNO1FBQ05DLElBQUk7SUFDTjtJQUNBO1FBQ0VILE9BQU87UUFDUEMsYUFDRTtRQUNGQyxNQUFPO1FBQ1BDLElBQUs7SUFDUDtJQUNBO1FBQ0VILE9BQU87UUFDUEMsYUFDQTtRQUNBQyxNQUFPO1FBQ1BDLElBQUs7SUFFUDtDQUNELENBQUM7QUFFSyxNQUFNQyxXQUFXO0lBQ3RCO1FBQ0VDLE1BQU07UUFDTkosYUFDQTtRQUNBSyxPQUFPO1FBQ1BDLEtBQUs7SUFDUDtJQUNBO1FBQ0VGLE1BQU07UUFDTkosYUFDRTtRQUNGSyxPQUFPO1FBQ1BDLEtBQUs7SUFDUDtJQUNBO1FBQ0VGLE1BQU07UUFDTkosYUFDRTtRQUNGSyxPQUFPO1FBQ1BDLEtBQUs7SUFDUDtJQUNBO1FBQ0VGLE1BQU07UUFDTkosYUFDRTtRQUNGSyxPQUFPO1FBQ1BDLEtBQUs7SUFDUDtJQUNBO1FBQ0VGLE1BQU07UUFDTkosYUFDRTtRQUNGSyxPQUFPO1FBQ1BDLEtBQUs7SUFDUDtJQUNBO1FBQ0VGLE1BQU07UUFDTkosYUFDRTtRQUNGSyxPQUFPO1FBQ1BDLEtBQUs7SUFDUDtDQUNELENBQUM7QUFFSyxNQUFNQyxRQUFRO0lBQ25CO1FBQ0VSLE9BQU87UUFDUFMsU0FDQTtRQUNBQyxVQUNFO0lBQ0o7SUFDQTtRQUNFVixPQUFPO1FBQ1BTLFNBQ0U7UUFDRkMsVUFDRTtJQUNKO0lBQ0E7UUFDRVYsT0FBTztRQUNQUyxTQUNFO1FBQ0ZDLFVBQ0U7SUFDSjtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL3Byb2ZpbGUuanM/YjM3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2tpbGxzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiBcIkV4Y2VsXCIsXHJcbiAgICAgICAgcGVyY2VudGFnZTogODAsXHJcbiAgICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNraWxsOiBcIkdpdEh1YlwiLFxyXG4gICAgICBwZXJjZW50YWdlOiA4MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNraWxsOiBcIkdpdFwiLFxyXG4gICAgICBwZXJjZW50YWdlOiA3MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNraWxsOiBcIlBvd2VyIEJJXCIsXHJcbiAgICAgIHBlcmNlbnRhZ2U6IDYwLFxyXG4gICAgfVxyXG4gIF07XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJEYXRhIFNjaWVudGlzdCBJbnRlcm4gYXQgQmFub3J0ZVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIlwiLFxyXG4gICAgICBmcm9tOiBcIkphbnVhcnkgMjAyMyBcIiAsXHJcbiAgICAgIHRvOiBcIlByZXNlbnRcIiAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJEYXRhIFNjaWVudGlzdCBJbnRlcm4gYXQgQmFuQ29wcGVsXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQ3VzdG9tZXIgU2VnbWVudGF0aW9uIHdpdGggUHl0aG9uIGFuZCBTUUwsIE1lYXN1cmVtZW50IENhbXBhaWduIHdpdGggU1FMIGFuZCBTUFNTIE1vZGVsZXIsIFN0YXRpc3RpY2FsIEFuYWx5c2lzIGFuZCBNb2RlbGxpbmcgd2l0aCBQeXRob24sIEh5cG90aGVzaXMgVGVzdCBmb3IgT25lIFBvcHVsYXRpb24gUHJvcG9ydGlvbiB3aXRoIFB5dGhvbi5cIixcclxuICAgICAgZnJvbTogIFwiSnVseSAyMDIyXCIsXHJcbiAgICAgIHRvOiAgXCJKYW51YXJ5IDIwMjNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIk1pY3Jvc29mdCBMZWFybiBTdHVkZW50IEFtYmFzc2Fkb3IgKFZvbHVudGVlciBleHBlcmllbmNlKVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMZWFybiBTdHVkZW50IEFtYmFzc2Fkb3JzIGFyZSBhIGdsb2JhbCBncm91cCBvZiBjYW1wdXMgbGVhZGVycyB3aG8gYXJlIGVhZ2VyIHRvIGhlbHAgZmVsbG93IHN0dWRlbnRzLCBjcmVhdGUgcm9idXN0IHRlY2ggY29tbXVuaXRpZXMgYW5kIGRldmVsb3AgdGVjaG5pY2FsIGFuZCBjYXJlZXIgc2tpbGxzIGZvciB0aGUgZnV0dXJlLlwiLFxyXG4gICAgICBmcm9tOiAgXCJKdWx5IDIwMjFcIixcclxuICAgICAgdG86ICBcIlByZXNlbnRcIixcclxuICAgICAgXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk1hcmtvdiBDaGFpbiBUZXh0IEdlbmVyYXRvclwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJUaGUgZ2VuZXJhdG9yIGFuYWx5emVzIHRoZSB3b3JkcyBhbmQgdGhlaXIgcHJvYmFiaWxpdHkgb2Ygb2NjdXJyZW5jZSBvZiB0d28gY29uc2VjdXRpdmUgd29yZHMuIEl0IHRoZW4gZ2VuZXJhdGVzIGNoYWlucyBvZiB3b3JkcyB0aGF0IGFyZSBwcm9iYWJseSByZWxhdGVkLlwiLFxyXG4gICAgICBpbWFnZTogXCJtYXJrb3Z2LnBuZ1wiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL01pc2FlbC1BbHZhcmV6L0dlbmVyYXItVGV4dG8tQ29uLUNhZGVuYXMtRGUtTWFya292L2Jsb2IvbWFpbi9HZW5lcmFyX1RleHRvX0NhZGVuYXNfTWFya292LmlweW5iXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiRmFjaWFsIFJlY29nbml0aW9uIFVzaW5nIERlZXAgTGVhcm5pbmdcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJGYWNpYWwgcmVjb2duaXRpb24gaGFzIHByb2dyZXNzZWQgdG8gYmVjb21lIHRoZSBtb3N0IGZpdHRpbmcgYW5kIHJhdGlvbmFsIHRlY2huaXF1ZSBpbiBodW1hbiBpZGVudGlmaWNhdGlvbiB0ZWNobm9sb2d5LlwiLFxyXG4gICAgICBpbWFnZTogXCJmYWNpYWwuanBnXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vTWlzYWVsLUFsdmFyZXovUmVjb25vY2ltaWVudG8tRmFjaWFsXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiRml0dGluZyBvZiBhIFBvbHlub21pYWwgdXNpbmcgTGVhc3QgU3F1YXJlcyBNZXRob2QgKE5JU1QpXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiUG9seW5vbWlhbCBtb2RlbHMgYXJlIGEgZ3JlYXQgdG9vbCBmb3IgZGV0ZXJtaW5pbmcgd2hpY2ggaW5wdXQgZmFjdG9ycyBkcml2ZSByZXNwb25zZXMgYW5kIGluIHdoYXQgZGlyZWN0aW9uLlwiLFxyXG4gICAgICBpbWFnZTogXCJuaXN0LnBuZ1wiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL01pc2FlbC1BbHZhcmV6L1JlZ3Jlc2lvbmVzLU5JU1RcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJHZW5ldGljIEFsZ29yaXRobXMgZm9yIEdyYXBoIENvbG91cmluZ1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIlRoZSBnZW5ldGljIGFsZ29yaXRobSBpcyBhIG1ldGhvZCBmb3Igc29sdmluZyBib3RoIGNvbnN0cmFpbmVkIGFuZCB1bmNvbnN0cmFpbmVkIG9wdGltaXphdGlvbiBwcm9ibGVtcyB0aGF0IGlzIGJhc2VkIG9uIG5hdHVyYWwgc2VsZWN0aW9uLCB0aGUgcHJvY2VzcyB0aGF0IGRyaXZlcyBiaW9sb2dpY2FsIGV2b2x1dGlvbi5cIixcclxuICAgICAgaW1hZ2U6IFwiZ2VuZXRpY28ucG5nXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vTWlzYWVsLUFsdmFyZXovQWxnb3JpdG1vR2VuZXRpY28vYmxvYi9tYWluL0FsZ29yaXRtbyUyMEdlbmV0aWNvJTIwMy5pcHluYlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkxpbmVhciBSZWdyZXNzaW9uIGFuZCBNdWx0aXBsZSBSZWdyZXNzaW9uXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiSW4gc3RhdGlzdGljYWwgbW9kZWxpbmcsIHJlZ3Jlc3Npb24gYW5hbHlzaXMgaXMgYSBzZXQgb2Ygc3RhdGlzdGljYWwgcHJvY2Vzc2VzIGZvciBlc3RpbWF0aW5nIHRoZSByZWxhdGlvbnNoaXBzIGJldHdlZW4gYSBkZXBlbmRlbnQgdmFyaWFibGUuXCIsXHJcbiAgICAgIGltYWdlOiBcIm11bHRpcGxlLnBuZ1wiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL01pc2FlbC1BbHZhcmV6L1JlZ3Jlc2lvbi1NdWx0aWxpbmVhbC9ibG9iL21haW4vVGFyZWExLU1pc2FlbC1BbHZhcmV6LmlweW5iXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTG90a2HigJNWb2x0ZXJyYSBlcXVhdGlvbnNcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJUaGUgTG90a2HigJNWb2x0ZXJyYSBlcXVhdGlvbnMsIGFsc28ga25vd24gYXMgdGhlIHByZWRhdG9y4oCTcHJleSBlcXVhdGlvbnMsIGFyZSBhIHBhaXIgb2YgZmlyc3Qtb3JkZXIgbm9ubGluZWFyIGRpZmZlcmVudGlhbCBlcXVhdGlvbnMsIGZyZXF1ZW50bHkgdXNlZCB0byBkZXNjcmliZSB0aGUgZHluYW1pY3Mgb2YgYmlvbG9naWNhbCBzeXN0ZW1zIGluIHdoaWNoIHR3byBzcGVjaWVzIGludGVyYWN0LCBvbmUgYXMgYSBwcmVkYXRvciBhbmQgdGhlIG90aGVyIGFzIHByZXkuXCIsXHJcbiAgICAgIGltYWdlOiBcImNhemEtcHJlc2EuanBnXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vTWlzYWVsLUFsdmFyZXovTW9kZWxvLUNhemEtRGVwcmVkYWRvci9ibG9iL21haW4vTW9kZWxvX0NhemFfRGVwcmVkYWRvci5pcHluYlwiXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IHBvc3RzID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJQYW5kYXNcIixcclxuICAgICAgY29udGVudDpcclxuICAgICAgXCJwYW5kYXMgaXMgYSBzb2Z0d2FyZSBsaWJyYXJ5IHdyaXR0ZW4gZm9yIHRoZSBQeXRob24gcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgZm9yIGRhdGEgbWFuaXB1bGF0aW9uIGFuZCBhbmFseXNpcy4gSW4gcGFydGljdWxhciwgaXQgb2ZmZXJzIGRhdGEgc3RydWN0dXJlcyBhbmQgb3BlcmF0aW9ucyBmb3IgbWFuaXB1bGF0aW5nIG51bWVyaWNhbCB0YWJsZXMgYW5kIHRpbWUgc2VyaWVzLiBJdCBpcyBmcmVlIHNvZnR3YXJlIHJlbGVhc2VkIHVuZGVyIHRoZSB0aHJlZS1jbGF1c2UgQlNEIGxpY2Vuc2UuIFRoZSBuYW1lIGlzIGRlcml2ZWQgZnJvbSB0aGUgdGVybSAncGFuZWwgZGF0YScsIGFuIGVjb25vbWV0cmljcyB0ZXJtIGZvciBkYXRhIHNldHMgdGhhdCBpbmNsdWRlIG9ic2VydmF0aW9ucyBvdmVyIG11bHRpcGxlIHRpbWUgcGVyaW9kcyBmb3IgdGhlIHNhbWUgaW5kaXZpZHVhbHMuIEl0cyBuYW1lIGlzIGEgcGxheSBvbiB0aGUgcGhyYXNlICdQeXRob24gZGF0YSBhbmFseXNpcycgaXRzZWxmLiBXZXMgTWNLaW5uZXkgc3RhcnRlZCBidWlsZGluZyB3aGF0IHdvdWxkIGJlY29tZSBwYW5kYXMgYXQgQVFSIENhcGl0YWwgd2hpbGUgaGUgd2FzIGEgcmVzZWFyY2hlciB0aGVyZSBmcm9tIDIwMDcgdG8gMjAxMC5cIixcclxuICAgICAgaW1hZ2VVUkw6XHJcbiAgICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2UvZWQvUGFuZGFzX2xvZ28uc3ZnLzMwMHB4LVBhbmRhc19sb2dvLnN2Zy5wbmdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkFuZ3VsYXJcIixcclxuICAgICAgY29udGVudDpcclxuICAgICAgICBcIkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTaW50IGV4Y2VwdHVyaSBlYSBleHBsaWNhYm8uIElsbHVtIHN1c2NpcGl0IGlsbG8sIHBvcnJvIHF1aXNxdWFtIHZvbHVwdGF0ZW1cIixcclxuICAgICAgaW1hZ2VVUkw6XHJcbiAgICAgICAgXCJodHRwczovL2V4dGVybmFsLWNvbnRlbnQuZHVja2R1Y2tnby5jb20vaXUvP3U9aHR0cHMlM0ElMkYlMkZhaWUuZWR1LmF1JTJGd3AtY29udGVudCUyRnVwbG9hZHMlMkYyMDE4JTJGMDMlMkZnYW1lLXByb2dyYW1taW5nLTAzLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiTmV4dGpzXCIsXHJcbiAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgXCJMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2ludCBleGNlcHR1cmkgZWEgZXhwbGljYWJvLiBJbGx1bSBzdXNjaXBpdCBpbGxvLCBwb3JybyBxdWlzcXVhbSB2b2x1cHRhdGVtXCIsXHJcbiAgICAgIGltYWdlVVJMOlxyXG4gICAgICAgIFwiaHR0cHM6Ly9leHRlcm5hbC1jb250ZW50LmR1Y2tkdWNrZ28uY29tL2l1Lz91PWh0dHBzJTNBJTJGJTJGYWllLmVkdS5hdSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAxOCUyRjAzJTJGZ2FtZS1wcm9ncmFtbWluZy0wMy5qcGdcIixcclxuICAgIH0sXHJcbiAgXTsiXSwibmFtZXMiOlsic2tpbGxzIiwic2tpbGwiLCJwZXJjZW50YWdlIiwiZXhwZXJpZW5jZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZnJvbSIsInRvIiwicHJvamVjdHMiLCJuYW1lIiwiaW1hZ2UiLCJ1cmwiLCJwb3N0cyIsImNvbnRlbnQiLCJpbWFnZVVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/profile.js\n"));

/***/ })

});