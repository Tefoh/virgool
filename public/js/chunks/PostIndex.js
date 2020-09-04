(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/chunks/PostIndex"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Admin/Post/PostIndex.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Admin/Post/PostIndex.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BaseDataTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/BaseDataTable */ "./resources/js/components/BaseDataTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PostIndex",
  components: {
    BaseDataTable: _components_BaseDataTable__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  metaInfo: {
    title: 'مدیریت پست ها'
  },
  data: function data() {
    return {
      breadcrumbs: [{
        text: 'داشبورد',
        disabled: false,
        to: {
          name: 'admin-dashboard'
        },
        exact: true
      }, {
        text: 'مدیریت پست ها',
        disabled: true,
        exact: true
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Admin/Post/PostIndex.vue?vue&type=template&id=5a933342&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Admin/Post/PostIndex.vue?vue&type=template&id=5a933342&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-main",
    [
      _c(
        "v-container",
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { staticClass: "mt-10", attrs: { cols: "12" } },
                [
                  _c("v-breadcrumbs", { attrs: { items: _vm.breadcrumbs } }),
                  _vm._v(" "),
                  _c("BaseDataTable", {
                    attrs: {
                      "fetch-url": "/api/admin/posts",
                      "delete-url": "/api/admin/posts/destroy",
                      "show-route": "post-show",
                      "title-text": "مدیریت پست ها",
                      "route-name": "admin-post-index",
                      "item-key": "slug"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/view/Admin/Post/PostIndex.vue":
/*!****************************************************!*\
  !*** ./resources/js/view/Admin/Post/PostIndex.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostIndex_vue_vue_type_template_id_5a933342_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostIndex.vue?vue&type=template&id=5a933342&scoped=true& */ "./resources/js/view/Admin/Post/PostIndex.vue?vue&type=template&id=5a933342&scoped=true&");
/* harmony import */ var _PostIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostIndex.vue?vue&type=script&lang=js& */ "./resources/js/view/Admin/Post/PostIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostIndex_vue_vue_type_template_id_5a933342_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostIndex_vue_vue_type_template_id_5a933342_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5a933342",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/Admin/Post/PostIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/Admin/Post/PostIndex.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/view/Admin/Post/PostIndex.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Admin/Post/PostIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/Admin/Post/PostIndex.vue?vue&type=template&id=5a933342&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/view/Admin/Post/PostIndex.vue?vue&type=template&id=5a933342&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostIndex_vue_vue_type_template_id_5a933342_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PostIndex.vue?vue&type=template&id=5a933342&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Admin/Post/PostIndex.vue?vue&type=template&id=5a933342&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostIndex_vue_vue_type_template_id_5a933342_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostIndex_vue_vue_type_template_id_5a933342_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);