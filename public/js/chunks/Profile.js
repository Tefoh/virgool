(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/chunks/Profile"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/User/Profile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/User/Profile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_user_profileModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/module/user/profileModule */ "./resources/js/module/user/profileModule.js");
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/rules */ "./resources/js/rules/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: "Profile",
  metaInfo: {
    title: 'پروفایل من -'
  },
  setup: function setup() {
    return _objectSpread(_objectSpread({}, Object(_module_user_profileModule__WEBPACK_IMPORTED_MODULE_0__["default"])()), {}, {
      required: _rules__WEBPACK_IMPORTED_MODULE_1__["required"],
      verifyEmail: _rules__WEBPACK_IMPORTED_MODULE_1__["verifyEmail"],
      moreThan: _rules__WEBPACK_IMPORTED_MODULE_1__["moreThan"],
      verifyUsername: _rules__WEBPACK_IMPORTED_MODULE_1__["verifyUsername"]
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/User/Profile.vue?vue&type=template&id=6f331c81&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/User/Profile.vue?vue&type=template&id=6f331c81&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _vm.user
    ? _c(
        "v-container",
        [
          _c(
            "v-row",
            {
              staticClass: "d-flex flex-column",
              attrs: { align: "center", justify: "center" }
            },
            [
              _c(
                "v-col",
                { attrs: { col: "12", md: "8" } },
                [
                  _c(
                    "v-form",
                    { ref: "form" },
                    [
                      _c(
                        "div",
                        { staticClass: "d-flex flex-row" },
                        [
                          _c(
                            "v-avatar",
                            { attrs: { size: "80px" } },
                            [
                              _c("v-img", {
                                attrs: {
                                  src:
                                    _vm.user.profile_src || "/images/avatar.png"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.$refs.profile.click()
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("input", {
                                ref: "profile",
                                staticStyle: { display: "none" },
                                attrs: { type: "file" },
                                on: { change: _vm.uploadProfile }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "d-flex flex-column mr-5 w-100" },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  placeholder: "نام",
                                  rules: [_vm.required("فیلد نام الزامیست")]
                                },
                                model: {
                                  value: _vm.user.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "name", $$v)
                                  },
                                  expression: "user.name"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-textarea", {
                                attrs: { placeholder: "بیوگرافی" },
                                model: {
                                  value: _vm.user.bio,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "bio", $$v)
                                  },
                                  expression: "user.bio"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { staticClass: "my-12" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("h2", [_vm._v("تنظیمات حساب کاربری")]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mt-5 d-flex flex-row" },
                            [
                              _c("div", { staticClass: "d-flex flex-column" }, [
                                _c("span", { staticClass: "title" }, [
                                  _vm._v("نام کاربری")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "d-flex flex-row" },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "mt-3 ml-3",
                                        class: {
                                          success: _vm.editing.username
                                        },
                                        attrs: {
                                          text: "",
                                          rounded: "",
                                          outlined: "",
                                          small: ""
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.changeEdit("username")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(
                                              _vm.editing.username
                                                ? "ثبت"
                                                : "ویرایش"
                                            ) +
                                            "\n                                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: _vm.editing.username,
                                            expression: "editing.username"
                                          }
                                        ],
                                        staticClass: "mt-3",
                                        attrs: {
                                          text: "",
                                          rounded: "",
                                          outlined: "",
                                          small: ""
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.cancel("username")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    منصرف شدن\n                                "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              !_vm.editing.username
                                ? [
                                    _c("span", { staticClass: "mt-4" }, [
                                      _vm._v(_vm._s(_vm.fullUsername))
                                    ])
                                  ]
                                : [
                                    _c("v-text-field", {
                                      staticClass: "ltr",
                                      attrs: {
                                        prefix: _vm.url,
                                        rules: [
                                          _vm.required(
                                            "فیلد نام کاربری الزامیست"
                                          ),
                                          _vm.verifyUsername()
                                        ],
                                        "error-messages": _vm.errors.username
                                      },
                                      model: {
                                        value: _vm.user.username,
                                        callback: function($$v) {
                                          _vm.$set(_vm.user, "username", $$v)
                                        },
                                        expression: "user.username"
                                      }
                                    })
                                  ]
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("v-divider", { staticClass: "mt-5" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mt-5 d-flex flex-row" },
                            [
                              _c("div", { staticClass: "d-flex flex-column" }, [
                                _c("span", { staticClass: "title" }, [
                                  _vm._v("ایمیل")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "d-flex flex-row" },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "mt-3 ml-3",
                                        class: { success: _vm.editing.email },
                                        attrs: {
                                          text: "",
                                          rounded: "",
                                          outlined: "",
                                          small: ""
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.changeEdit("email")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(
                                              _vm.editing.email
                                                ? "ثبت"
                                                : "ویرایش"
                                            ) +
                                            "\n                                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: _vm.editing.email,
                                            expression: "editing.email"
                                          }
                                        ],
                                        staticClass: "mt-3",
                                        attrs: {
                                          text: "",
                                          rounded: "",
                                          outlined: "",
                                          small: ""
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.cancel("email")
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    منصرف شدن\n                                "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              !_vm.editing.email
                                ? [
                                    _c("span", { staticClass: "mt-4" }, [
                                      _vm._v(_vm._s(_vm.user.email))
                                    ])
                                  ]
                                : [
                                    _c("v-text-field", {
                                      staticClass: "ltr",
                                      attrs: {
                                        placeholder: "ایمیل",
                                        rules: [
                                          _vm.required("فیلد ایمیل الزامیست"),
                                          _vm.verifyEmail()
                                        ],
                                        "error-messages": _vm.errors.email
                                      },
                                      model: {
                                        value: _vm.user.email,
                                        callback: function($$v) {
                                          _vm.$set(_vm.user, "email", $$v)
                                        },
                                        expression: "user.email"
                                      }
                                    })
                                  ]
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("v-divider", { staticClass: "mt-5" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mt-5 d-flex flex-row" },
                            [
                              _c("div", { staticClass: "d-flex flex-column" }, [
                                _c("span", { staticClass: "title" }, [
                                  _vm._v("تغییر رمز عبور")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "ltr",
                                attrs: {
                                  placeholder: "رمز عبور",
                                  outlined: "",
                                  rules: [_vm.moreThan(8, "رمز عبور", true)]
                                },
                                model: {
                                  value: _vm.user.password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "password", $$v)
                                  },
                                  expression: "user.password"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider", { staticClass: "mt-5" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mt-5 d-flex flex-row" },
                            [
                              _c("span", { staticClass: "title mt-4" }, [
                                _vm._v("ارسال ایمیل هنگام دنبال کردن")
                              ]),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c("v-switch", {
                                attrs: { inset: "" },
                                model: {
                                  value: _vm.user.email_on_follow,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "email_on_follow", $$v)
                                  },
                                  expression: "user.email_on_follow"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider", { staticClass: "mt-5" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mt-5 d-flex flex-row" },
                            [
                              _c("span", { staticClass: "title mt-4" }, [
                                _vm._v("ارسال ایمیل هنگام لایک کردن")
                              ]),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c("v-switch", {
                                attrs: { inset: "" },
                                model: {
                                  value: _vm.user.email_on_like,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "email_on_like", $$v)
                                  },
                                  expression: "user.email_on_like"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider", { staticClass: "mt-5" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mt-5 d-flex flex-row" },
                            [
                              _c("span", { staticClass: "title mt-4" }, [
                                _vm._v("ارسال ایمیل هنگام جواب کردن")
                              ]),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c("v-switch", {
                                attrs: { inset: "" },
                                model: {
                                  value: _vm.user.email_on_reply,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "email_on_reply", $$v)
                                  },
                                  expression: "user.email_on_reply"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "d-flex flex-row" },
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    rounded: "",
                                    text: "",
                                    outlined: ""
                                  },
                                  on: { click: _vm.update }
                                },
                                [
                                  _vm._v(
                                    "\n                            ذخیره پروفایل\n                        "
                                  )
                                ]
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
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/module/file/uploadBase64.js":
/*!**************************************************!*\
  !*** ./resources/js/module/file/uploadBase64.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uploadBase64; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.module.js");

function uploadBase64(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  var data = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);

  reader.onload = function (image) {
    data.value = image.target.result;
  };

  reader.readAsDataURL(file);
  return data;
}

/***/ }),

/***/ "./resources/js/module/user/profileModule.js":
/*!***************************************************!*\
  !*** ./resources/js/module/user/profileModule.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return profile; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.module.js");
/* harmony import */ var _module_file_uploadBase64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/module/file/uploadBase64 */ "./resources/js/module/file/uploadBase64.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ "./resources/js/store/index.js");



function profile() {
  var form = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null); // state

  var user = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var editing = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({
    username: false,
    email: false
  });
  var old = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({
    username: false,
    email: false
  });
  var errors = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({
    email: null,
    username: null
  }); // computed

  var url = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return "http://blog.test" + '/';
  });
  var fullUsername = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return url.value + user.value.username;
  }); // methods

  var getUser = function getUser() {
    axios.get('/api/me').then(function (_ref) {
      var data = _ref.data;
      user.value = data;
      old.value.username = data.username;
      old.value.email = data.email;
    });
  };

  var cancel = function cancel(data) {
    user.value[data] = old.value[data];
    editing.value[data] = false;
  };

  var changeEdit = function changeEdit(data) {
    old.value[data] = user.value[data];
    editing.value[data] = !editing.value[data];
  };

  var uploadProfile = function uploadProfile(event) {
    user.value.profile_name = event.target.files[0].name;
    user.value.profile_src = user.value.profile = Object(_module_file_uploadBase64__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
  };

  var update = function update() {
    if (form.value.validate()) {
      axios.patch('/api/profile', user.value).then(function (_ref2) {
        var data = _ref2.data;
        _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('user/changeName', data.name);
        errors.value = {
          email: null,
          username: null
        };
        editing.value = {
          email: false,
          username: false
        };
      })["catch"](function (_ref3) {
        var response = _ref3.response;

        for (var index in response.data.errors) {
          errors.value[index] = response.data.errors[index][0];
          editing.value[index] = true;
        }
      });
    }
  }; // created hook


  getUser();
  return {
    errors: errors,
    form: form,
    user: user,
    editing: editing,
    old: old,
    url: url,
    fullUsername: fullUsername,
    getUser: getUser,
    cancel: cancel,
    changeEdit: changeEdit,
    uploadProfile: uploadProfile,
    update: update
  };
}

/***/ }),

/***/ "./resources/js/rules/index.js":
/*!*************************************!*\
  !*** ./resources/js/rules/index.js ***!
  \*************************************/
/*! exports provided: required, verifyEmail, verifyUsername, lessThan, moreThan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyEmail", function() { return verifyEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyUsername", function() { return verifyUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessThan", function() { return lessThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreThan", function() { return moreThan; });
/**
 * this function makes sure that value passed in
 * if field has a value then return true otherwise
 * return the custom message
 *
 * این فاکنشن الزامی بودن فیلد را برسی میکند
 * اگر پاس داده شده بود مقدار true را بازگشت میدهد
 * در غیر این صورت متنی که به عنوان پارامتر قبول کرده را نمایش میدهد
 *
 * @param {string} text
 * @returns {function(*): (boolean|string)}
 */
function required(text) {
  return function (value) {
    return !!value || text;
  };
}
/**
 *
 * this function verify value passed in is a valid email or not
 * if the value is valid then return true otherwise
 * return the message accepted as parameter or custom message
 *
 * این فاکشن برسی میکند که مقدار پاس داده شده یک ایمیل درست هست یا ن
 * اگه درست بود مقدار true را بازگشت میدهد
 * در غیر این صورت متنی که به عنوان پارامتر قبول کرده را نمایش میدهد
 *
 * @param {string} text
 * @returns {function(*): (boolean|string)}
 */

function verifyEmail() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'یک ایمیل درست را وارد کنید';
  return function (value) {
    return /^([a-zA-Z0-9]([\.\w]*)@([\w]{2,9}[\.])[a-zA-Z]{2,4})$/.test(value) || text;
  };
}
/**
 *
 * this function verify value passed in is a valid username or not
 * if the value is valid then return true otherwise
 * return the message accepted as parameter or custom message
 *
 * این فاکشن برسی میکند که مقدار پاس داده شده یک نام کاربری درست هست یا ن
 * اگه درست بود مقدار true را بازگشت میدهد
 * در غیر این صورت متنی که به عنوان پارامتر قبول کرده را نمایش میدهد
 *
 * @param {string} text
 * @returns {function(*): (boolean|string)}
 */

function verifyUsername() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'یک نام کاربری درست را وارد کنید';
  return function (value) {
    return /^[a-z0-9_-]{3,15}$/.test(value) || text;
  };
}
/**
 *
 * this function in first place checks is value passed in or not
 * so its is some way do required function job
 * then checks the length of value less than custom number
 *
 * این فانکشن اول برسی میکند که مقداری پاس داده شده یا نه
 * بنابراین کار متد required را هم انجام میدهد
 * بعد چک میکند که مقدار پاس داده شده از یک مقداری خاص که به عنوان پارامتر قبول شده کمتر باشد
 *
 * @param {number} length
 * @param {string} field
 * @param {boolean} nullable
 * @returns {function(*): (boolean|string)}
 */

function lessThan(length, field) {
  var nullable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return function (value) {
    if (!value) {
      if (nullable) {
        return true;
      }

      return field + ' الزامیست ';
    }

    return (value ? value.length <= length : false) || "\u0637\u0648\u0644 ".concat(field, " \u0646\u0628\u0627\u06CC\u062F \u0628\u06CC\u0634\u062A\u0631 \u0627\u0632 ").concat(length, " \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631 \u0628\u0627\u0634\u062F");
  };
}
/**
 *
 * this function in first place checks is value passed in or not
 * so its is some way do required function job
 * then checks the length of value more than custom number
 *
 * این فانکشن اول برسی میکند که مقداری پاس داده شده یا نه
 * بنابراین کار متد required را هم انجام میدهد
 * بعد چک میکند که مقدار پاس داده شده از یک مقداری خاص که به عنوان پارامتر قبول شده بیشتر باشد
 *
 * @param {number} length
 * @param {string} field
 * @param {boolean} nullable
 * @returns {function(*): (boolean|string)}
 */

function moreThan(length, field) {
  var nullable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return function (value) {
    if (!value) {
      if (nullable) {
        return true;
      }

      return field + ' الزامیست ';
    }

    return (value ? value.length >= length : false) || "\u0637\u0648\u0644 ".concat(field, " \u0628\u0627\u06CC\u062F \u0628\u06CC\u0634\u062A\u0631 \u0627\u0632 ").concat(length, " \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631 \u0628\u0627\u0634\u062F");
  };
}

/***/ }),

/***/ "./resources/js/view/User/Profile.vue":
/*!********************************************!*\
  !*** ./resources/js/view/User/Profile.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_6f331c81_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=6f331c81&scoped=true& */ "./resources/js/view/User/Profile.vue?vue&type=template&id=6f331c81&scoped=true&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/view/User/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_6f331c81_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_6f331c81_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6f331c81",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/User/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/User/Profile.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/view/User/Profile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/User/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/User/Profile.vue?vue&type=template&id=6f331c81&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/view/User/Profile.vue?vue&type=template&id=6f331c81&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_6f331c81_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=6f331c81&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/User/Profile.vue?vue&type=template&id=6f331c81&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_6f331c81_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_6f331c81_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);