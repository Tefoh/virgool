(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/chunks/Create~js/chunks/Edit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DropzoneModal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DropzoneModal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.module.js");
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
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DropzoneModal",
  components: {
    VueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    // state
    var dropzone = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(null);
    var imageModal = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(false);
    var imageCommand = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(false);
    var dropzoneOptions = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])({
      url: '/api/upload-post-image',
      maxFiles: 1,
      headers: {
        'X-CSRF-TOKEN': window.csrf_token
      }
    }); // methods

    var showModal = function showModal(command) {
      imageModal.value = true;
      imageCommand.value = command;
    };

    var upload = function upload(file, response) {
      var data = {
        imageCommand: imageCommand.value,
        attrs: {
          src: response.data
        }
      };
      emit('image', data);
      imageModal.value = false;
      imageCommand.value = null;
      dropzone.value.removeFile(file);
    };

    return {
      imageCommand: imageCommand,
      imageModal: imageModal,
      dropzoneOptions: dropzoneOptions,
      showModal: showModal,
      upload: upload,
      dropzone: dropzone
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TiptapEditor.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TiptapEditor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap */ "./node_modules/tiptap/dist/tiptap.esm.js");
/* harmony import */ var tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiptap-extensions */ "./node_modules/tiptap-extensions/dist/extensions.esm.js");
/* harmony import */ var _DropzoneModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropzoneModal */ "./resources/js/components/DropzoneModal.vue");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.module.js");
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
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TiptapEditor",
  components: {
    DropzoneModal: _DropzoneModal__WEBPACK_IMPORTED_MODULE_2__["default"],
    EditorFloatingMenu: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorFloatingMenu"],
    EditorContent: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorContent"],
    EditorMenuBubble: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorMenuBubble"]
  },
  props: {
    value: {
      type: String,
      "default": ''
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    // state
    var dropzone = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(null);
    var bubbleMenuButtons = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])([{
      active: 'italic',
      command: 'italic',
      icon: 'format-italic',
      tooltip: 'ایتالیک',
      context: {}
    }, {
      active: 'bold',
      command: 'bold',
      icon: 'format-bold',
      tooltip: 'درشت',
      context: {}
    }]);
    var floatingMenuButtons = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])([{
      active: 'heading',
      command: 'heading',
      icon: 'format-header-1',
      tooltip: 'هدر 1',
      context: {
        level: 1
      }
    }, {
      active: 'heading',
      command: 'heading',
      icon: 'format-header-2',
      tooltip: 'هدر 2',
      context: {
        level: 2
      }
    }, {
      active: 'heading',
      command: 'heading',
      icon: 'format-header-3',
      tooltip: 'هدر 3',
      context: {
        level: 3
      }
    }]);
    var editor = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(new tiptap__WEBPACK_IMPORTED_MODULE_0__["Editor"]({
      extensions: [new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Blockquote"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["CodeBlock"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["HardBreak"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["HorizontalRule"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["OrderedList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["BulletList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["ListItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["TodoItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["TodoList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Bold"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Code"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Image"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Italic"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Link"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Strike"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Underline"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["History"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Heading"]({
        level: [1, 2, 3]
      }), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Placeholder"]({
        emptyEditorClass: 'is-editor-empty',
        emptyNodeClass: 'is-empty',
        emptyNodeText: 'هرچیزی که میخای بنویس ...',
        showOnlyWhenEditable: true,
        showOnlyCurrent: true
      })],
      content: props.value,
      onUpdate: function onUpdate(_ref2) {
        var getHTML = _ref2.getHTML;
        emit('input', getHTML());
      }
    })); // methods

    var openModal = function openModal(imageCommand) {
      dropzone.value.showModal(imageCommand);
    };

    var uploadImage = function uploadImage(data) {
      data.imageCommand(data.attrs);
    }; // before destroy


    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["onUnmounted"])(function () {
      editor.value.destroy();
    });
    return {
      editor: editor,
      bubbleMenuButtons: bubbleMenuButtons,
      floatingMenuButtons: floatingMenuButtons,
      dropzone: dropzone,
      uploadImage: uploadImage,
      openModal: openModal
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DropzoneModal.vue?vue&type=template&id=01a222f7&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DropzoneModal.vue?vue&type=template&id=01a222f7&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { "max-width": "360px" },
      model: {
        value: _vm.imageModal,
        callback: function($$v) {
          _vm.imageModal = $$v
        },
        expression: "imageModal"
      }
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [_vm._v("عکس خود را اپلود کنین")]),
          _vm._v(" "),
          _c("vue-dropzone", {
            ref: "dropzone",
            attrs: { id: "dropzone", options: _vm.dropzoneOptions },
            on: { "vdropzone-success": _vm.upload }
          }),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  on: {
                    click: function($event) {
                      _vm.imageModal = false
                    }
                  }
                },
                [_vm._v("\n                بستن\n            ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TiptapEditor.vue?vue&type=template&id=ee95d3c0&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TiptapEditor.vue?vue&type=template&id=ee95d3c0&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c("editor-floating-menu", {
        attrs: { editor: _vm.editor },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var commands = ref.commands
              var menu = ref.menu
              var isActive = ref.isActive
              return [
                _c(
                  "div",
                  {
                    staticClass: "editor__floating-menu",
                    class: { "is-active": menu.isActive },
                    style: "top: " + menu.top + "px"
                  },
                  [
                    _vm._l(_vm.floatingMenuButtons, function(button) {
                      return _c(
                        "v-tooltip",
                        {
                          key: button.icon,
                          attrs: { top: "" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "activator",
                                fn: function(ref) {
                                  var on = ref.on
                                  return [
                                    _c(
                                      "v-btn",
                                      _vm._g(
                                        {
                                          staticClass: "menubar__button",
                                          class: {
                                            "is-active": isActive[
                                              button.active
                                            ](button.context)
                                          },
                                          attrs: { small: "", text: "" },
                                          on: {
                                            click: function($event) {
                                              commands[button.command](
                                                button.context
                                              )
                                            }
                                          }
                                        },
                                        on
                                      ),
                                      [
                                        _c("v-icon", [
                                          _vm._v("mdi-" + _vm._s(button.icon))
                                        ])
                                      ],
                                      1
                                    )
                                  ]
                                }
                              }
                            ],
                            null,
                            true
                          )
                        },
                        [
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(button.tooltip))])
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c(
                      "v-tooltip",
                      {
                        attrs: { top: "" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                return [
                                  _c(
                                    "v-btn",
                                    _vm._g(
                                      {
                                        staticClass: "menubar__button",
                                        class: {
                                          "is-active": isActive.image()
                                        },
                                        attrs: { small: "", text: "" },
                                        on: {
                                          click: function($event) {
                                            $event.stopPropagation()
                                            return _vm.openModal(commands.image)
                                          }
                                        }
                                      },
                                      on
                                    ),
                                    [_c("v-icon", [_vm._v("mdi-image")])],
                                    1
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      },
                      [_vm._v(" "), _c("span", [_vm._v("اپلود عکس")])]
                    )
                  ],
                  2
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("editor-menu-bubble", {
        attrs: { editor: _vm.editor, "keep-in-bounds": true },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var commands = ref.commands
              var menu = ref.menu
              var isActive = ref.isActive
              return [
                _c(
                  "div",
                  {
                    staticClass: "menububble",
                    class: { "is-active": menu.isActive },
                    style:
                      "left: " +
                      menu.left +
                      "px; bottom: " +
                      menu.bottom +
                      "px;"
                  },
                  _vm._l(_vm.bubbleMenuButtons, function(button) {
                    return _c(
                      "v-btn",
                      {
                        key: button.icon,
                        staticClass: "menububble__button",
                        class: {
                          "is-active": isActive[button.active](button.context)
                        },
                        attrs: { small: "", text: "", dark: "" },
                        on: {
                          click: function($event) {
                            commands[button.command](button.context)
                          }
                        }
                      },
                      [_c("v-icon", [_vm._v("mdi-" + _vm._s(button.icon))])],
                      1
                    )
                  }),
                  1
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("editor-content", { attrs: { editor: _vm.editor } }),
      _vm._v(" "),
      _c("dropzone-modal", { ref: "dropzone", on: { image: _vm.uploadImage } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/DropzoneModal.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/DropzoneModal.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DropzoneModal_vue_vue_type_template_id_01a222f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropzoneModal.vue?vue&type=template&id=01a222f7&scoped=true& */ "./resources/js/components/DropzoneModal.vue?vue&type=template&id=01a222f7&scoped=true&");
/* harmony import */ var _DropzoneModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropzoneModal.vue?vue&type=script&lang=js& */ "./resources/js/components/DropzoneModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DropzoneModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DropzoneModal_vue_vue_type_template_id_01a222f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DropzoneModal_vue_vue_type_template_id_01a222f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "01a222f7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DropzoneModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DropzoneModal.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/DropzoneModal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropzoneModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DropzoneModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DropzoneModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropzoneModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DropzoneModal.vue?vue&type=template&id=01a222f7&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/DropzoneModal.vue?vue&type=template&id=01a222f7&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropzoneModal_vue_vue_type_template_id_01a222f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DropzoneModal.vue?vue&type=template&id=01a222f7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DropzoneModal.vue?vue&type=template&id=01a222f7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropzoneModal_vue_vue_type_template_id_01a222f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropzoneModal_vue_vue_type_template_id_01a222f7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/TiptapEditor.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/TiptapEditor.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TiptapEditor_vue_vue_type_template_id_ee95d3c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TiptapEditor.vue?vue&type=template&id=ee95d3c0&scoped=true& */ "./resources/js/components/TiptapEditor.vue?vue&type=template&id=ee95d3c0&scoped=true&");
/* harmony import */ var _TiptapEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TiptapEditor.vue?vue&type=script&lang=js& */ "./resources/js/components/TiptapEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TiptapEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TiptapEditor_vue_vue_type_template_id_ee95d3c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TiptapEditor_vue_vue_type_template_id_ee95d3c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ee95d3c0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TiptapEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TiptapEditor.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/TiptapEditor.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TiptapEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TiptapEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TiptapEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TiptapEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TiptapEditor.vue?vue&type=template&id=ee95d3c0&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/TiptapEditor.vue?vue&type=template&id=ee95d3c0&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TiptapEditor_vue_vue_type_template_id_ee95d3c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TiptapEditor.vue?vue&type=template&id=ee95d3c0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TiptapEditor.vue?vue&type=template&id=ee95d3c0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TiptapEditor_vue_vue_type_template_id_ee95d3c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TiptapEditor_vue_vue_type_template_id_ee95d3c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);