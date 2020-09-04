(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/chunks/PostShow"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.module.js");
/* harmony import */ var _Service_EventBus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Service/EventBus */ "./resources/js/Service/EventBus.js");
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
  name: "PostComments",
  props: {
    data: {
      type: Object
    }
  },
  setup: function setup(props, _ref) {
    var root = _ref.root;
    // state
    var showReply = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    var showUpdate = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
    var reply = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({
      content: null,
      comment_id: props.data.id
    });
    var comment = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(props.data);
    var canShowDeleteOrUpdate = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
      return root.$store.state.user.isLoggedIn && root.$store.state.user.user.id === comment.value.user_id;
    }); // methods

    var saveComment = function saveComment() {
      return showReply.value ? saveReply() : updateComment();
    };

    var saveReply = function saveReply() {
      axios.post("/api/replies/".concat(root.$route.params.slug), reply.value).then(function (_ref2) {
        var data = _ref2.data;
        cancelReply();
      })["catch"](function (_ref3) {
        var response = _ref3.response;
        _Service_EventBus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('error', response.data.errors.content[0]);
      });
    };

    var updateComment = function updateComment() {
      axios.patch("/api/comments/".concat(comment.value.id), reply.value).then(function (_ref4) {
        var data = _ref4.data;
        cancelReply();
        comment.value.content = data.data.content;
      })["catch"](function (_ref5) {
        var response = _ref5.response;
        _Service_EventBus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('error', response.data.errors.content[0]);
      });
    };

    var cancelReply = function cancelReply() {
      reply.value.content = null;
      showReply.value = false;
      showUpdate.value = false;
    };

    var deleteComment = function deleteComment() {
      axios["delete"]("/api/comments/".concat(comment.value.id));
    };

    var showUpdateTextarea = function showUpdateTextarea() {
      showUpdate.value = true;
      reply.value.content = comment.value.content;
    }; // created hook


    Echo.channel("virgool_reply_".concat(props.data.id)).listen('.reply.created', function (_ref6) {
      var reply = _ref6.reply;
      comment.value.replies.push(reply);
      _Service_EventBus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('comment_created');
    });
    Echo.channel("virgool_reply_".concat(props.data.id)).listen('CommentDeletedEvent', function (event) {
      comment.value.replies = comment.value.replies.filter(function (c) {
        return c.id !== event.comment.id;
      });
      _Service_EventBus__WEBPACK_IMPORTED_MODULE_1__["default"].$emit('comment_deleted');
    });
    return {
      showUpdate: showUpdate,
      showReply: showReply,
      reply: reply,
      comment: comment,
      saveComment: saveComment,
      cancelReply: cancelReply,
      moment: moment,
      canShowDeleteOrUpdate: canShowDeleteOrUpdate,
      deleteComment: deleteComment,
      showUpdateTextarea: showUpdateTextarea
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Post/PostShow.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.module.js");
/* harmony import */ var _components_posts_PostComments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/posts/PostComments */ "./resources/js/components/posts/PostComments.vue");
/* harmony import */ var _Service_EventBus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Service/EventBus */ "./resources/js/Service/EventBus.js");
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



moment.loadPersian({
  usePersianDigits: true
});
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PostShow",
  components: {
    PostComments: _components_posts_PostComments__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: this.post.title,
      meta: [{
        name: 'description',
        content: this.post.description
      }]
    };
  },
  setup: function setup(props, _ref) {
    var $route = _ref.root.$route;
    // state
    var short_link = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('');
    var post = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({});
    var related_posts = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({});
    var comment = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({
      content: '',
      post_id: null
    });
    var error = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({
      show: false,
      message: null
    }); // methods

    var onCopyShortLink = function onCopyShortLink() {
      var link = short_link.value;
      short_link.value = 'کپی شد!!!';
      setTimeout(function () {
        short_link.value = link;
      }, 1500);
    };

    var saveComment = function saveComment() {
      axios.post("/api/comments/".concat(post.value.slug), comment.value).then(function (_ref2) {
        var data = _ref2.data;
        comment.value.content = null;
      })["catch"](function (_ref3) {
        var response = _ref3.response;
        showErrorSnackbar(response.data.errors.content[0]);
      });
    };

    var showErrorSnackbar = function showErrorSnackbar(message) {
      error.value.show = true;
      error.value.message = message;
    };

    var bookmarkPost = function bookmarkPost(postModel) {
      postModel.is_bookmarked = !postModel.is_bookmarked;
      var reqType = postModel.is_bookmarked ? 'post' : 'delete';
      axios[reqType]("/api/bookmarks/".concat(postModel.slug));
    };

    var likePost = function likePost() {
      post.value.is_liked = !post.value.is_liked;
      var reqType = post.value.is_liked ? 'post' : 'delete';
      axios[reqType]("/api/likes/".concat(post.value.slug)).then(function () {
        post.value.is_liked ? post.value.likes_count++ : post.value.likes_count--;
      });
    };

    var followUser = function followUser() {
      axios.post("/api/follows/".concat(post.value.user.username)).then(function () {
        post.value.user.is_follows = !post.value.user.is_follows;
      });
    }; // created hook


    axios.get("/api/posts/".concat($route.params.slug)).then(function (_ref4) {
      var data = _ref4.data;
      post.value = data.post;
      related_posts.value = data.related_posts;
      short_link.value = "http://blog.test/link/".concat(data.post.short_link);
      comment.value.post_id = data.post.id;
      Echo.channel("virgool_comment_".concat(data.post.id)).listen('.comment.created', function (_ref5) {
        var comment = _ref5.comment;
        post.value.parent_comments.push(comment);
        _Service_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].$emit('comment_created');
      });
      Echo.channel("virgool_comment_".concat(data.post.id)).listen('CommentDeletedEvent', function (_ref6) {
        var comment = _ref6.comment;
        post.value.parent_comments = post.value.parent_comments.filter(function (c) {
          return c.id !== comment.id;
        });
        _Service_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].$emit('comment_deleted');
      });
    });
    _Service_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].$on('error', function (message) {
      showErrorSnackbar(message);
    });
    _Service_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].$on('comment_created', function () {
      post.value.comments_count++;
    });
    _Service_EventBus__WEBPACK_IMPORTED_MODULE_2__["default"].$on('comment_deleted', function () {
      post.value.comments_count--;
    });
    return {
      post: post,
      related_posts: related_posts,
      bookmarkPost: bookmarkPost,
      likePost: likePost,
      followUser: followUser,
      moment: moment,
      short_link: short_link,
      onCopyShortLink: onCopyShortLink,
      comment: comment,
      saveComment: saveComment,
      error: error,
      showErrorSnackbar: showErrorSnackbar
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.body-text[data-v-e4eb1740] {\n    text-align: justify;\n    line-height: 2.3rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mt-8" },
    [
      _c(
        "v-card",
        { staticClass: "mx-auto" },
        [
          _c(
            "div",
            { staticClass: "d-flex flex-row" },
            [
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-avatar",
                    [
                      _c("v-img", {
                        attrs: { src: _vm.comment.user.profile_src }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", [
                        _vm._v(_vm._s(_vm.comment.user.name))
                      ]),
                      _vm._v(" "),
                      _c("v-list-item-subtitle", [
                        _vm._v(
                          _vm._s(_vm.moment(_vm.comment.created_at).fromNow())
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _vm.canShowDeleteOrUpdate
                ? _c(
                    "v-icon",
                    { staticClass: "pl-5", on: { click: _vm.deleteComment } },
                    [_vm._v("mdi-delete")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.canShowDeleteOrUpdate
                ? _c(
                    "v-icon",
                    {
                      staticClass: "pl-5",
                      on: { click: _vm.showUpdateTextarea }
                    },
                    [_vm._v("mdi-file-document-edit")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$store.state.user.isLoggedIn
                ? _c(
                    "v-icon",
                    {
                      staticClass: "pl-5",
                      on: {
                        click: function($event) {
                          _vm.showReply = true
                        }
                      }
                    },
                    [_vm._v("mdi-undo")]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-text", [
            _vm._v(
              "\n            " + _vm._s(_vm.comment.content) + "\n        "
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.showReply || _vm.showUpdate
        ? _c(
            "div",
            { staticClass: "mt-12" },
            [
              _c("p", [_vm._v("پاسخ ها")]),
              _vm._v(" "),
              _c("v-textarea", {
                attrs: {
                  label: "پاسخ خود را بنویسید",
                  outlined: "",
                  filled: ""
                },
                model: {
                  value: _vm.reply.content,
                  callback: function($$v) {
                    _vm.$set(_vm.reply, "content", $$v)
                  },
                  expression: "reply.content"
                }
              }),
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
                      staticClass: "ml-3",
                      attrs: { color: "info", large: "", rounded: "" },
                      on: { click: _vm.cancelReply }
                    },
                    [_vm._v("لغو")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "success", large: "", rounded: "" },
                      on: { click: _vm.saveComment }
                    },
                    [_vm._v("ارسال پاسخ")]
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.comment.replies, function(commentData) {
        return _c("post-comments", {
          key: commentData.id,
          staticClass: "mr-3",
          attrs: { data: commentData }
        })
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=template&id=e4eb1740&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/view/Post/PostShow.vue?vue&type=template&id=e4eb1740&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      _vm.post.user
        ? _c(
            "v-container",
            [
              _c(
                "v-row",
                { staticClass: "d-flex justify-center" },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "8" } },
                    [
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-avatar",
                            { attrs: { size: "80" } },
                            [
                              _c(
                                "v-avatar",
                                { attrs: { size: "80" } },
                                [
                                  _c("v-img", {
                                    attrs: { src: _vm.post.user.profile_src }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c(
                                "v-list-item-title",
                                { staticClass: "font-weight-bold" },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.post.user.name) +
                                      "\n                            "
                                  ),
                                  _vm.$store.state.user.isLoggedIn &&
                                  _vm.post.user.id !==
                                    _vm.$store.state.user.user.id
                                    ? _c(
                                        "v-btn",
                                        {
                                          staticClass:
                                            "darken-2 px-5 mr-3 mb-3",
                                          attrs: {
                                            color: _vm.post.user.is_follows
                                              ? "info"
                                              : "grey",
                                            rounded: "",
                                            dark: "",
                                            small: ""
                                          },
                                          on: { click: _vm.followUser }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(
                                                _vm.post.user.is_follows
                                                  ? "دنبال میکنید"
                                                  : "دنبال کنید"
                                              ) +
                                              "\n                            "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item-subtitle",
                                { staticClass: "body-2 grey--text" },
                                [
                                  _vm._v(
                                    "\n                            ‌‌‌‌" +
                                      _vm._s(_vm.post.user.bio) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item-subtitle",
                                { staticClass: "caption grey--text" },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(
                                        _vm
                                          .moment(_vm.post.created_at)
                                          .fromNow()
                                      ) +
                                      " / خواندن " +
                                      _vm._s(_vm.post.min_read) +
                                      " دقیقه\n                        "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "my-5" }, [
                        _c("h1", { staticClass: "title" }, [
                          _vm._v(_vm._s(_vm.post.title))
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-10" },
                        [_c("v-img", { attrs: { src: _vm.post.image } })],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "mt-12",
                        domProps: { innerHTML: _vm._s(_vm.post.content) }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "my-10" },
                        _vm._l(_vm.post.categories, function(category) {
                          return _c(
                            "v-btn",
                            {
                              key: category.slug,
                              staticClass: "mr-3 mt-2",
                              attrs: {
                                depressed: "",
                                to: {
                                  name: "post-category",
                                  params: { slug: category.slug }
                                }
                              }
                            },
                            [_vm._v(_vm._s(category.title))]
                          )
                        }),
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "d-flex flex-row mb-5" },
                        [
                          _vm.$store.state.user.isLoggedIn
                            ? _c(
                                "span",
                                {
                                  staticClass: "ml-5",
                                  on: {
                                    click: function($event) {
                                      return _vm.bookmarkPost(_vm.post)
                                    }
                                  }
                                },
                                [
                                  _c("v-icon", [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(
                                          _vm.post.is_bookmarked
                                            ? "mdi-bookmark"
                                            : "mdi-bookmark-outline"
                                        ) +
                                        "\n                        "
                                    )
                                  ])
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "ml-5" },
                            [
                              _vm.$store.state.user.isLoggedIn
                                ? _c(
                                    "v-icon",
                                    {
                                      class: { "red--text": _vm.post.is_liked },
                                      on: { click: _vm.likePost }
                                    },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(
                                            _vm.post.is_liked
                                              ? "mdi-heart"
                                              : "mdi-heart-outline"
                                          ) +
                                          "\n                        "
                                      )
                                    ]
                                  )
                                : _c("v-icon", [_vm._v("mdi-heart-outline")]),
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.post.likes_count) +
                                  "\n                    "
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "ml-5" },
                            [
                              _c("v-icon", [_vm._v("mdi-comment-outline")]),
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.post.comments_count) +
                                  "\n                    "
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c("v-icon", [_vm._v("mdi-telegram")]),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              directives: [
                                {
                                  name: "clipboard",
                                  rawName: "v-clipboard:copy",
                                  value: _vm.short_link,
                                  expression: "short_link",
                                  arg: "copy"
                                },
                                {
                                  name: "clipboard",
                                  rawName: "v-clipboard:success",
                                  value: _vm.onCopyShortLink,
                                  expression: "onCopyShortLink",
                                  arg: "success"
                                }
                              ],
                              staticClass: "mr-3",
                              attrs: {
                                outlined: "",
                                rounded: "",
                                disabled: _vm.short_link === "کپی شد!!!"
                              }
                            },
                            [_vm._v(_vm._s(_vm.short_link))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-12" },
                        [
                          _c("p", { staticClass: "body-2 font-weight-bold" }, [
                            _vm._v("شاید از این نوشته‌ها هم خوشتان بیاید")
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-container",
                            { attrs: { fluid: "" } },
                            [
                              _c(
                                "v-row",
                                _vm._l(_vm.related_posts, function(
                                  related_post
                                ) {
                                  return _c(
                                    "v-col",
                                    {
                                      key: related_post.slug,
                                      attrs: { cols: "12", md: "4" }
                                    },
                                    [
                                      _c(
                                        "v-card",
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              attrs: {
                                                to: {
                                                  name: "post-show",
                                                  params: {
                                                    slug: related_post.slug
                                                  }
                                                }
                                              }
                                            },
                                            [
                                              _c("v-img", {
                                                attrs: {
                                                  src: related_post.image
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-card-title",
                                            [
                                              _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: {
                                                      name: "post-show",
                                                      params: {
                                                        slug: related_post.slug
                                                      }
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(
                                                        related_post.title
                                                      ) +
                                                      "\n                                        "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-card-actions",
                                            [
                                              _c(
                                                "v-list-item",
                                                {
                                                  attrs: {
                                                    to: {
                                                      name: "user-posts",
                                                      params: {
                                                        username:
                                                          related_post.user
                                                            .username
                                                      }
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-list-item-avatar",
                                                    [
                                                      _c(
                                                        "v-avatar",
                                                        [
                                                          _c("v-img", {
                                                            attrs: {
                                                              src:
                                                                related_post
                                                                  .user
                                                                  .profile_src
                                                            }
                                                          })
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-list-item-content",
                                                    [
                                                      _c(
                                                        "v-list-item-title",
                                                        {
                                                          staticClass:
                                                            "body-2 font-weight-bold d-inline-block text-truncate",
                                                          staticStyle: {
                                                            "max-width": "100px"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(
                                                                related_post
                                                                  .user.name
                                                              ) +
                                                              "\n                                                "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-subtitle",
                                                        {
                                                          staticClass:
                                                            "caption grey--text"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(
                                                                related_post.min_read
                                                              ) +
                                                              "\n                                                    ‌‌‌‌خواندن\n                                                "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("v-spacer"),
                                              _vm._v(" "),
                                              _vm.$store.state.user.isLoggedIn
                                                ? _c(
                                                    "v-icon",
                                                    {
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.bookmarkPost(
                                                            related_post
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                            " +
                                                          _vm._s(
                                                            related_post.is_bookmarked
                                                              ? "mdi-bookmark"
                                                              : "mdi-bookmark-outline"
                                                          ) +
                                                          "\n                                        "
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                }),
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-12" },
                        [
                          _c("p", [_vm._v("دیدگاه ها")]),
                          _vm._v(" "),
                          _vm.$store.state.user.isLoggedIn
                            ? [
                                _c("v-textarea", {
                                  attrs: {
                                    label: "نظر خود را بنویسید",
                                    outlined: "",
                                    filled: ""
                                  },
                                  model: {
                                    value: _vm.comment.content,
                                    callback: function($$v) {
                                      _vm.$set(_vm.comment, "content", $$v)
                                    },
                                    expression: "comment.content"
                                  }
                                }),
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
                                          color: "success",
                                          large: "",
                                          rounded: ""
                                        },
                                        on: { click: _vm.saveComment }
                                      },
                                      [_vm._v("ارسال دیدگاه")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            : [
                                _c("span", [
                                  _vm._v(
                                    "برای ارسال دیدگاه باید وارد سایت شوید."
                                  )
                                ])
                              ]
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.post.parent_comments, function(comment) {
                        return _c("post-comments", {
                          key: comment.id,
                          attrs: { data: comment }
                        })
                      })
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { color: "error" },
          model: {
            value: _vm.error.show,
            callback: function($$v) {
              _vm.$set(_vm.error, "show", $$v)
            },
            expression: "error.show"
          }
        },
        [_vm._v("\n        " + _vm._s(_vm.error.message) + "\n    ")]
      )
    ],
    1
  )
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

/***/ "./resources/js/Service/EventBus.js":
/*!******************************************!*\
  !*** ./resources/js/Service/EventBus.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_dist_vue_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue/dist/vue.common.js */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue_dist_vue_common_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_dist_vue_common_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (new vue_dist_vue_common_js__WEBPACK_IMPORTED_MODULE_0___default.a());

/***/ }),

/***/ "./resources/js/components/posts/PostComments.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/posts/PostComments.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostComments_vue_vue_type_template_id_4443491b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostComments.vue?vue&type=template&id=4443491b&scoped=true& */ "./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&scoped=true&");
/* harmony import */ var _PostComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostComments.vue?vue&type=script&lang=js& */ "./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostComments_vue_vue_type_template_id_4443491b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostComments_vue_vue_type_template_id_4443491b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4443491b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/posts/PostComments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostComments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PostComments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComments_vue_vue_type_template_id_4443491b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostComments.vue?vue&type=template&id=4443491b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/PostComments.vue?vue&type=template&id=4443491b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComments_vue_vue_type_template_id_4443491b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComments_vue_vue_type_template_id_4443491b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/view/Post/PostShow.vue":
/*!*********************************************!*\
  !*** ./resources/js/view/Post/PostShow.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostShow_vue_vue_type_template_id_e4eb1740_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostShow.vue?vue&type=template&id=e4eb1740&scoped=true& */ "./resources/js/view/Post/PostShow.vue?vue&type=template&id=e4eb1740&scoped=true&");
/* harmony import */ var _PostShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostShow.vue?vue&type=script&lang=js& */ "./resources/js/view/Post/PostShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PostShow_vue_vue_type_style_index_0_id_e4eb1740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css& */ "./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PostShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostShow_vue_vue_type_template_id_e4eb1740_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostShow_vue_vue_type_template_id_e4eb1740_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e4eb1740",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/Post/PostShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/view/Post/PostShow.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/view/Post/PostShow.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_id_e4eb1740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=style&index=0&id=e4eb1740&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_id_e4eb1740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_id_e4eb1740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_id_e4eb1740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_id_e4eb1740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_style_index_0_id_e4eb1740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/view/Post/PostShow.vue?vue&type=template&id=e4eb1740&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/view/Post/PostShow.vue?vue&type=template&id=e4eb1740&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_template_id_e4eb1740_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PostShow.vue?vue&type=template&id=e4eb1740&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/view/Post/PostShow.vue?vue&type=template&id=e4eb1740&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_template_id_e4eb1740_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostShow_vue_vue_type_template_id_e4eb1740_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);