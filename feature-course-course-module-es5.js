(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-course-course-module"], {
    /***/
    "Q2+z":
    /*!**********************************************************************!*\
      !*** ./src/app/feature/course/components/course/course.component.ts ***!
      \**********************************************************************/

    /*! exports provided: CourseComponent */

    /***/
    function Q2Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseComponent", function () {
        return CourseComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var plyr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! plyr */
      "T7iU");
      /* harmony import */


      var plyr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(plyr__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _shared_state_course_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/state/course.actions */
      "TWSe");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons */
      "8tEE");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngrx/store */
      "kt0X");
      /* harmony import */


      var angularx_social_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angularx-social-login */
      "ahC7");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _gist_gist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../gist/gist.component */
      "e4UC"); // https://www.npmjs.com/package/plyr


      function CourseComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CourseComponent_div_44_a_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var sesccion_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", sesccion_r29.title, " ");
        }
      }

      function CourseComponent_div_44_a_1_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var sesccion_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](sesccion_r29.title);
        }
      }

      function CourseComponent_div_44_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, CourseComponent_div_44_a_1_div_3_Template, 3, 1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, CourseComponent_div_44_a_1_div_4_Template, 2, 1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var indexOfelement_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("href", "#collapse" + indexOfelement_r30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r31.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r31.loggedIn);
        }
      }

      function CourseComponent_div_44_a_2_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var sesccion_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", sesccion_r29.title, " ");
        }
      }

      function CourseComponent_div_44_a_2_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var sesccion_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](sesccion_r29.title);
        }
      }

      function CourseComponent_div_44_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CourseComponent_div_44_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r44);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

            return ctx_r43.ejecutarCollapsed();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, CourseComponent_div_44_a_2_div_3_Template, 3, 1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, CourseComponent_div_44_a_2_div_4_Template, 2, 1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r32.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r32.loggedIn);
        }
      }

      function CourseComponent_div_44_div_5_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CourseComponent_div_44_div_5_li_2_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r48);

            var video_r46 = ctx.$implicit;

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

            return ctx_r47.changeVideo(video_r46);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var video_r46 = ctx.$implicit;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMapInterpolate1"]("list-group-item inactive ", ctx_r45.courseComplete.actualVideo.id == video_r46.id ? "selected" : "", " action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", video_r46.title, " ");
        }
      }

      function CourseComponent_div_44_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CourseComponent_div_44_div_5_li_2_Template, 2, 4, "li", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var sesccion_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", sesccion_r29.videos);
        }
      }

      function CourseComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CourseComponent_div_44_a_1_Template, 5, 3, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CourseComponent_div_44_a_2_Template, 5, 2, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, CourseComponent_div_44_div_5_Template, 3, 1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var indexOfelement_r30 = ctx.index;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r28.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r28.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "collapse" + indexOfelement_r30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r28.loggedIn);
        }
      }

      var CourseComponent = /*#__PURE__*/function () {
        function CourseComponent(router, state, authService) {
          var _this = this;

          _classCallCheck(this, CourseComponent);

          this.router = router;
          this.state = state;
          this.authService = authService;
          this.url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host, "/course");
          this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEye"];
          this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLinkedin"];
          this.faInstagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faInstagramSquare"];
          this.pageLoaded = false;
          this.loggedIn = false;
          this.state.select('courseComplete').subscribe(function (courseComplete) {
            _this.courseComplete = courseComplete;
          });

          if (this.courseComplete == null) {
            this.router.navigateByUrl('/not-found');
          }
        }

        _createClass(CourseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            var player = new plyr__WEBPACK_IMPORTED_MODULE_1__('#player'); //player.play();

            this.authService.authState.subscribe(function (user) {
              _this2.loggedIn = user != null;
              _this2.pageLoaded = true;
            });
          }
        }, {
          key: "changeVideo",
          value: function changeVideo(newVideo) {
            var action = new _shared_state_course_actions__WEBPACK_IMPORTED_MODULE_2__["ActualizarVideoActual"](newVideo);
            this.state.dispatch(action);
          }
        }, {
          key: "expandCollanse",
          value: function expandCollanse(videos, id) {
            var videosFilter = videos.filter(function (video) {
              return video.id = id;
            });
            return videosFilter.length > 0;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            (function (d, s, id) {
              var js,
                  fjs = d.getElementsByTagName(s)[0];
              js = d.createElement(s);
              js.id = id;
              js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";

              if (d.getElementById(id)) {
                //if <script id="facebook-jssdk"> exists
                delete window.FB;
                fjs.parentNode.replaceChild(js, fjs);
              } else {
                fjs.parentNode.insertBefore(js, fjs);
              }
            })(document, 'script', 'facebook-jssdk');
          }
        }, {
          key: "ejecutarCollapsed",
          value: function ejecutarCollapsed() {
            if (!this.loggedIn) {
              $('#loginModal').modal('show');
            }
          }
        }]);

        return CourseComponent;
      }();

      CourseComponent.??fac = function CourseComponent_Factory(t) {
        return new (t || CourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_8__["SocialAuthService"]));
      };

      CourseComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CourseComponent,
        selectors: [["app-course"]],
        decls: 45,
        vars: 13,
        consts: [["class", "container-fluid pl-5 pr-5 div-cargando", 4, "ngIf"], [1, "container-fluid", "pl-5", "pr-5"], [1, "courseContainer"], [1, "row"], ["id", "left", 1, "col-12", "col-sm-12", "col-md-12", "col-lg-8", "col-xl-8", "sticky"], [1, ""], [1, "courseTitle", 2, "width", "100%"], ["id", "player", "controls", "", "crossorigin", "", "playsinline", "", 2, "--plyr-color-main", "#225bc5", 3, "poster", "src"], [1, "row", "header-post"], [1, "col-7"], [1, "panel-body"], [1, "media"], [1, "media-left"], ["href", "#", 1, "timeline-avatar", "kit-avatar", "kit-avatar-36"], ["src", "foto-pequena.ico", "alt", "", 1, "media-object"], [1, "media-body"], [1, "media-heading"], [1, "text-muted"], [1, "col-5", "text-right"], ["href", "https://www.linkedin.com/in/dfep/", "target", "_blank", 1, "skillLogo"], [3, "icon"], ["href", "https://www.instagram.com/deysonestrad/", "target", "_blank", 1, "skillLogo"], [1, "videoTitleBox"], [1, "videoTitle", 2, "width", "100%"], [1, "videoDescription"], ["file", "d53f49d2e5f229a2a094e3fe08f49c20.js", "height", "372px"], ["id", "fb-root"], ["data-width", "100%", "data-numposts", "5", 1, "fb-comments"], ["id", "right", 1, "col-12", "col-sm-12", "col-md-12", "col-lg-4", "col-xl-4"], ["id", "accordion", "role", "tablist", "aria-multiselectable", "true", 1, "panel-group", "sticky"], ["class", "panel panel-default", 4, "ngFor", "ngForOf"], [1, "container-fluid", "pl-5", "pr-5", "div-cargando"], [1, "loader"], [1, "panel", "panel-default"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "aria-expanded", "true", "aria-controls", "'collapse'+indexOfelement", "class", "collapsed menu-seccion", 3, "href", 4, "ngIf"], [3, "routerLink", "click", 4, "ngIf"], [1, "acordionItems"], ["role", "tabpanel", "aria-labelledby", "headingOne", 1, "panel-collapse", "collapse", "in", 3, "id"], ["class", "panel-body", 4, "ngIf"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "aria-expanded", "true", "aria-controls", "'collapse'+indexOfelement", 1, "collapsed", "menu-seccion", 3, "href"], ["role", "tab", "id", "heading", 1, "panel-heading"], [4, "ngIf"], ["data-icon", "bx:bxs-lock", "data-inline", "false", 1, "iconify"], [3, "routerLink", "click"], [1, "collapseItems"], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"]],
        template: function CourseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, CourseComponent_div_0_Template, 2, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "video", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Deyson Estrada");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "small", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "11 Febrero 2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "fa-icon", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "fa-icon", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "app-gist", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, CourseComponent_div_44_Template, 6, 4, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.pageLoaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????styleMapInterpolate1"]("display: ", ctx.pageLoaded ? "block" : "none", ";");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.courseComplete.course.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("poster", ctx.loggedIn ? ctx.courseComplete.course.poster : null, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"])("src", ctx.loggedIn ? ctx.courseComplete.actualVideo.src : null, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.faLinkedin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("icon", ctx.faInstagram);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.courseComplete.actualVideo.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.courseComplete.actualVideo.description, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("data-href", ctx.url);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.courseComplete.course.secciones);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FaIconComponent"], _gist_gist_component__WEBPACK_IMPORTED_MODULE_11__["GistComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
        styles: ["@charset \"UTF-8\";\n\n.alert-portfolio[_ngcontent-%COMP%] {\n  color: #0f2a5c;\n  background-color: #bfd1f3;\n  border-color: #adc5f0;\n}\n.alert-portfolio[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top-color: #97b5ed;\n}\n.alert-portfolio[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n  color: #081631;\n}\n.badge-portfolio[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #225bc5;\n}\n.badge-portfolio[href][_ngcontent-%COMP%]:hover, .badge-portfolio[href][_ngcontent-%COMP%]:focus {\n  color: #fff;\n  background-color: #1a4699;\n}\n.bg-portfolio[_ngcontent-%COMP%] {\n  background-color: #225bc5 !important;\n}\na.bg-portfolio[_ngcontent-%COMP%]:hover, a.bg-portfolio[_ngcontent-%COMP%]:focus, button.bg-portfolio[_ngcontent-%COMP%]:hover, button.bg-portfolio[_ngcontent-%COMP%]:focus {\n  background-color: #1a4699 !important;\n}\n.border-portfolio[_ngcontent-%COMP%] {\n  border-color: #225bc5 !important;\n}\n.btn-portfolio[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #225bc5;\n  border-color: #225bc5;\n}\n.btn-portfolio[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #1c4ca6;\n  border-color: #1a4699;\n}\n.btn-portfolio[_ngcontent-%COMP%]:focus, .btn-portfolio.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(34, 91, 197, 0.5);\n}\n.btn-portfolio.disabled[_ngcontent-%COMP%], .btn-portfolio[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #225bc5;\n  border-color: #225bc5;\n}\n.btn-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-portfolio.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #1a4699;\n  border-color: #18408c;\n}\n.btn-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-portfolio.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(34, 91, 197, 0.5);\n}\n.btn-outline-portfolio[_ngcontent-%COMP%] {\n  color: #225bc5;\n  background-color: transparent;\n  border-color: #225bc5;\n}\n.btn-outline-portfolio[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #225bc5;\n  border-color: #225bc5;\n}\n.btn-outline-portfolio[_ngcontent-%COMP%]:focus, .btn-outline-portfolio.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(34, 91, 197, 0.5);\n}\n.btn-outline-portfolio.disabled[_ngcontent-%COMP%], .btn-outline-portfolio[_ngcontent-%COMP%]:disabled {\n  color: #225bc5;\n  background-color: transparent;\n}\n.btn-outline-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-portfolio.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #225bc5;\n  border-color: #225bc5;\n}\n.btn-outline-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-portfolio.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(34, 91, 197, 0.5);\n}\n.list-group-item-portfolio[_ngcontent-%COMP%] {\n  color: #0f2a5c;\n  background-color: #adc5f0;\n}\n.list-group-item-portfolio.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-portfolio.list-group-item-action[_ngcontent-%COMP%]:focus {\n  color: #0f2a5c;\n  background-color: #97b5ed;\n}\n.list-group-item-portfolio.list-group-item-action.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0f2a5c;\n  border-color: #0f2a5c;\n}\n.table-portfolio[_ngcontent-%COMP%], .table-portfolio[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-portfolio[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #adc5f0;\n}\n.table-hover[_ngcontent-%COMP%]   .table-portfolio[_ngcontent-%COMP%]:hover {\n  background-color: #97b5ed;\n}\n.table-hover[_ngcontent-%COMP%]   .table-portfolio[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-portfolio[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n  background-color: #97b5ed;\n}\n.text-portfolio[_ngcontent-%COMP%] {\n  color: #225bc5 !important;\n}\na.text-portfolio[_ngcontent-%COMP%]:hover, a.text-portfolio[_ngcontent-%COMP%]:focus {\n  color: #1a4699 !important;\n}\n\n.alert-portfolio[_ngcontent-%COMP%] {\n  color: #0f2a5c;\n  background-color: #bfd1f3;\n  border-color: #adc5f0;\n}\n.alert-portfolio[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top-color: #97b5ed;\n}\n.alert-portfolio[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n  color: #081631;\n}\n.badge-portfolio[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #225bc5;\n}\n.badge-portfolio[href][_ngcontent-%COMP%]:hover, .badge-portfolio[href][_ngcontent-%COMP%]:focus {\n  color: #fff;\n  background-color: #1a4699;\n}\n.bg-portfolio[_ngcontent-%COMP%] {\n  background-color: #225bc5 !important;\n}\na.bg-portfolio[_ngcontent-%COMP%]:hover, a.bg-portfolio[_ngcontent-%COMP%]:focus, button.bg-portfolio[_ngcontent-%COMP%]:hover, button.bg-portfolio[_ngcontent-%COMP%]:focus {\n  background-color: #1a4699 !important;\n}\n.border-portfolio[_ngcontent-%COMP%] {\n  border-color: #225bc5 !important;\n}\n.btn-portfolio[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #225bc5;\n  border-color: #225bc5;\n}\n.btn-portfolio[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #1c4ca6;\n  border-color: #1a4699;\n}\n.btn-portfolio[_ngcontent-%COMP%]:focus, .btn-portfolio.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(34, 91, 197, 0.5);\n}\n.btn-portfolio.disabled[_ngcontent-%COMP%], .btn-portfolio[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #225bc5;\n  border-color: #225bc5;\n}\n.btn-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-portfolio.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #1a4699;\n  border-color: #18408c;\n}\n.btn-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-portfolio.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(34, 91, 197, 0.5);\n}\n.btn-outline-portfolio[_ngcontent-%COMP%] {\n  color: #225bc5;\n  background-color: transparent;\n  border-color: #225bc5;\n}\n.btn-outline-portfolio[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #225bc5;\n  border-color: #225bc5;\n}\n.btn-outline-portfolio[_ngcontent-%COMP%]:focus, .btn-outline-portfolio.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(34, 91, 197, 0.5);\n}\n.btn-outline-portfolio.disabled[_ngcontent-%COMP%], .btn-outline-portfolio[_ngcontent-%COMP%]:disabled {\n  color: #225bc5;\n  background-color: transparent;\n}\n.btn-outline-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-portfolio.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #225bc5;\n  border-color: #225bc5;\n}\n.btn-outline-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-portfolio.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(34, 91, 197, 0.5);\n}\n.list-group-item-portfolio[_ngcontent-%COMP%] {\n  color: #0f2a5c;\n  background-color: #adc5f0;\n}\n.list-group-item-portfolio.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-portfolio.list-group-item-action[_ngcontent-%COMP%]:focus {\n  color: #0f2a5c;\n  background-color: #97b5ed;\n}\n.list-group-item-portfolio.list-group-item-action.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0f2a5c;\n  border-color: #0f2a5c;\n}\n.table-portfolio[_ngcontent-%COMP%], .table-portfolio[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-portfolio[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #adc5f0;\n}\n.table-hover[_ngcontent-%COMP%]   .table-portfolio[_ngcontent-%COMP%]:hover {\n  background-color: #97b5ed;\n}\n.table-hover[_ngcontent-%COMP%]   .table-portfolio[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-portfolio[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n  background-color: #97b5ed;\n}\n.text-portfolio[_ngcontent-%COMP%] {\n  color: #225bc5 !important;\n}\na.text-portfolio[_ngcontent-%COMP%]:hover, a.text-portfolio[_ngcontent-%COMP%]:focus {\n  color: #1a4699 !important;\n}\n.submenu[_ngcontent-%COMP%] {\n  background: #f3f3f3;\n  position: sticky;\n  top: 100px;\n  z-index: 99;\n  display: none;\n  justify-content: space-around;\n  padding: 20px 0;\n  justify-items: center;\n  align-items: center;\n}\n.submenu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  font-size: 0.8em;\n}\nsection[_ngcontent-%COMP%] {\n  border: 1px solid #efefef;\n  border-radius: 0.3rem;\n  padding: 1rem;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 3px;\n  margin-bottom: 30px;\n}\n.divider[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n}\n.container[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: bold;\n}\n.subtitulo[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: bold;\n  color: black;\n}\n.subtitulo2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  color: black;\n}\n.img-banner[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  width: 100%;\n  border-radius: 5px;\n  margin-top: 50px;\n}\niframe[_ngcontent-%COMP%] {\n  border: 0px;\n}\npre[_ngcontent-%COMP%] {\n  padding: 20px;\n  color: black;\n  background: #fff;\n}\nbody[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .line-data[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .file-data[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .line-numbers[_ngcontent-%COMP%] {\n  color: black;\n  background: #fff;\n}\nbody[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .gist-meta[_ngcontent-%COMP%] {\n  color: black;\n  background: #fff;\n}\nbody[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .pl-vo[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .pl-v[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .pl-vpf[_ngcontent-%COMP%] {\n  color: black;\n}\nbody[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .pl-en[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .pl-c1[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .pl-s3[_ngcontent-%COMP%] {\n  color: #ECAC29;\n}\nbody[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .pl-k[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .pl-st[_ngcontent-%COMP%] {\n  color: #7373F2;\n}\nbody[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .pl-s1[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .pl-pds[_ngcontent-%COMP%] {\n  color: #76A22F;\n}\n.importante[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n  font-size: 20px;\n}\n.texto[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.avatar[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n.align-center[_ngcontent-%COMP%] {\n  margin: auto;\n  color: #d6d6d6;\n}\n.align-right[_ngcontent-%COMP%] {\n  text-align: right;\n  margin: auto;\n  color: #d6d6d6;\n}\n.align-center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #BAD000;\n  font-size: 20px;\n}\n.media[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.media[_ngcontent-%COMP%], .media-body[_ngcontent-%COMP%] {\n  overflow: initial;\n}\n.media[_ngcontent-%COMP%], .media-body[_ngcontent-%COMP%] {\n  zoom: 1;\n}\n.kit-avatar.kit-avatar-64[_ngcontent-%COMP%] {\n  border: 2px solid rgba(22, 24, 27, 0.12);\n  border-radius: 64px;\n}\na.kit-avatar[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.no-padding[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.border-white[_ngcontent-%COMP%] {\n  border-color: #fff !important;\n}\n.kit-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  padding: 2px;\n  text-align: center;\n  transition: border-color ease 0.3s;\n}\n.kit-avatar.kit-avatar-36[_ngcontent-%COMP%] {\n  border: 1px solid rgba(22, 24, 27, 0.12);\n  border-radius: 36px;\n}\n.kit-avatar.kit-avatar-36[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 36px;\n  height: auto;\n  border-radius: 18px;\n}\n.media[_ngcontent-%COMP%], .media-body[_ngcontent-%COMP%] {\n  overflow: initial;\n}\n.media[_ngcontent-%COMP%], .media-body[_ngcontent-%COMP%] {\n  zoom: 1;\n}\n.media-left[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.media-heading[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #b8b8b8 !important;\n}\n.header-post[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.skillLogo[_ngcontent-%COMP%] {\n  color: #5d5d5d !important;\n  font-size: 30px;\n}\nfa-icon[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n.div-cargando[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.loader[_ngcontent-%COMP%] {\n  border: 16px solid #f3f3f3;\n  \n  border-top: 16px solid #225bc5;\n  \n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation: spin 2s linear infinite;\n          animation: spin 2s linear infinite;\n}\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.courseContainer[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n}\n.containerVideo[_ngcontent-%COMP%] {\n  padding: 0px 3em 0px 3em;\n}\n.action[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.titleForm[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.videoAction[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 25px;\n}\n.videoTitleBox[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.videoTitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n}\n.courseTitle[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.videoDescription[_ngcontent-%COMP%] {\n  text-align: justify;\n  text-justify: inter-word;\n  line-height: 28px;\n}\n.panel-heading[_ngcontent-%COMP%], .panel-heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #2c3e50;\n}\n.menu-seccion[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 15px;\n  font-weight: bold;\n}\n.acordionItems[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.inactive[_ngcontent-%COMP%] {\n  background-color: initial;\n}\n.collapseItems[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.selected[_ngcontent-%COMP%] {\n  background-color: #b5cfff;\n}\n.cover[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#heading[_ngcontent-%COMP%] {\n  padding: 1em;\n  color: #fff;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.4em 0.6em;\n  outline: none;\n  font-weight: bold;\n  text-decoration: none;\n}\n.panel-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.collapsed[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%]::after {\n  transform: rotate(0deg);\n}\n.panel-heading[_ngcontent-%COMP%]::after {\n  content: \"\u276F\";\n  transform: rotate(90deg);\n  transition: all 0.35s;\n}\n@media (min-width: 992px) {\n  .sticky[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvdXJzZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcG9zdC9zaGFyZWQvY3NzL3Bvc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNRaEI7O3FDQUFBO0FBa0JBO0VBQ0UsY0FYYTtFQVliLHlCQVJhO0VBU2IscUJBZGE7QURQZjtBQ3dCQTtFQUNFLHlCQW5CYTtBREZmO0FDd0JBO0VBQ0UsY0FsQmE7QURIZjtBQ3dCQTtFQUNFLFdBbEJpQztFQW1CakMseUJBOUJhO0FEU2Y7QUN3QkE7RUFDRSxXQXZCaUM7RUF3QmpDLHlCQWxDYTtBRGFmO0FDd0JBO0VBQ0Usb0NBQUE7QURyQkY7QUN3QkE7OztFQUdFLG9DQUFBO0FEckJGO0FDd0JBO0VBQ0UsZ0NBQUE7QURyQkY7QUN3QkE7RUFDRSxXQTFDaUM7RUEyQ2pDLHlCQXREYTtFQXVEYixxQkF2RGE7QURrQ2Y7QUN3QkE7RUFDRSxXQWhEaUM7RUFpRGpDLHlCQXREYTtFQXVEYixxQkE1RGE7QUR1Q2Y7QUN3QkE7RUFDRSwrQ0FBQTtBRHJCRjtBQ3dCQTtFQUNFLFdBMURpQztFQTJEakMseUJBdEVhO0VBdUViLHFCQXZFYTtBRGtEZjtBQ3dCQTtFQUNFLFdBaEVpQztFQWlFakMseUJBM0VhO0VBNEViLHFCQXhFYTtBRG1EZjtBQ3dCQTtFQUNFLCtDQUFBO0FEckJGO0FDd0JBO0VBQ0UsY0FyRmE7RUFzRmIsNkJBQUE7RUFDQSxxQkF2RmE7QURrRWY7QUN3QkE7RUFDRSxXQWhGaUM7RUFpRmpDLHlCQTVGYTtFQTZGYixxQkE3RmE7QUR3RWY7QUN3QkE7RUFDRSwrQ0FBQTtBRHJCRjtBQ3dCQTtFQUNFLGNBckdhO0VBc0diLDZCQUFBO0FEckJGO0FDd0JBO0VBQ0UsV0EvRmlDO0VBZ0dqQyx5QkEzR2E7RUE0R2IscUJBNUdhO0FEdUZmO0FDd0JBO0VBQ0UsK0NBQUE7QURyQkY7QUN3QkE7RUFDRSxjQWhIYTtFQWlIYix5QkFsSGE7QUQ2RmY7QUN3QkE7RUFDRSxjQXJIYTtFQXNIYix5QkF4SGE7QURtR2Y7QUN3QkE7RUFDRSxXQW5IaUM7RUFvSGpDLHlCQTNIYTtFQTRIYixxQkE1SGE7QUR1R2Y7QUN3QkE7OztFQUdFLHlCQW5JYTtBRDhHZjtBQ3dCQTtFQUNFLHlCQXhJYTtBRG1IZjtBQ3dCQTs7RUFFRSx5QkE3SWE7QUR3SGY7QUN3QkE7RUFDRSx5QkFBQTtBRHJCRjtBQ3dCQTtFQUNFLHlCQUFBO0FEckJGO0FDdElBOztxQ0FBQTtBQWtCQTtFQUNFLGNBWGE7RUFZYix5QkFSYTtFQVNiLHFCQWRhO0FEd0lmO0FDdkhBO0VBQ0UseUJBbkJhO0FENklmO0FDdkhBO0VBQ0UsY0FsQmE7QUQ0SWY7QUN2SEE7RUFDRSxXQWxCaUM7RUFtQmpDLHlCQTlCYTtBRHdKZjtBQ3ZIQTtFQUNFLFdBdkJpQztFQXdCakMseUJBbENhO0FENEpmO0FDdkhBO0VBQ0Usb0NBQUE7QUQwSEY7QUN2SEE7OztFQUdFLG9DQUFBO0FEMEhGO0FDdkhBO0VBQ0UsZ0NBQUE7QUQwSEY7QUN2SEE7RUFDRSxXQTFDaUM7RUEyQ2pDLHlCQXREYTtFQXVEYixxQkF2RGE7QURpTGY7QUN2SEE7RUFDRSxXQWhEaUM7RUFpRGpDLHlCQXREYTtFQXVEYixxQkE1RGE7QURzTGY7QUN2SEE7RUFDRSwrQ0FBQTtBRDBIRjtBQ3ZIQTtFQUNFLFdBMURpQztFQTJEakMseUJBdEVhO0VBdUViLHFCQXZFYTtBRGlNZjtBQ3ZIQTtFQUNFLFdBaEVpQztFQWlFakMseUJBM0VhO0VBNEViLHFCQXhFYTtBRGtNZjtBQ3ZIQTtFQUNFLCtDQUFBO0FEMEhGO0FDdkhBO0VBQ0UsY0FyRmE7RUFzRmIsNkJBQUE7RUFDQSxxQkF2RmE7QURpTmY7QUN2SEE7RUFDRSxXQWhGaUM7RUFpRmpDLHlCQTVGYTtFQTZGYixxQkE3RmE7QUR1TmY7QUN2SEE7RUFDRSwrQ0FBQTtBRDBIRjtBQ3ZIQTtFQUNFLGNBckdhO0VBc0diLDZCQUFBO0FEMEhGO0FDdkhBO0VBQ0UsV0EvRmlDO0VBZ0dqQyx5QkEzR2E7RUE0R2IscUJBNUdhO0FEc09mO0FDdkhBO0VBQ0UsK0NBQUE7QUQwSEY7QUN2SEE7RUFDRSxjQWhIYTtFQWlIYix5QkFsSGE7QUQ0T2Y7QUN2SEE7RUFDRSxjQXJIYTtFQXNIYix5QkF4SGE7QURrUGY7QUN2SEE7RUFDRSxXQW5IaUM7RUFvSGpDLHlCQTNIYTtFQTRIYixxQkE1SGE7QURzUGY7QUN2SEE7OztFQUdFLHlCQW5JYTtBRDZQZjtBQ3ZIQTtFQUNFLHlCQXhJYTtBRGtRZjtBQ3ZIQTs7RUFFRSx5QkE3SWE7QUR1UWY7QUN2SEE7RUFDRSx5QkFBQTtBRDBIRjtBQ3ZIQTtFQUNFLHlCQUFBO0FEMEhGO0FFM1JBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUY4UkY7QUUzUkE7RUFDRSxpQkFBQTtFQUVBLGdCQUFBO0FGNlJGO0FFMVJBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FGNlJGO0FFMVJBO0VBQ0UsaUNBQUE7QUY2UkY7QUUxUkE7RUFDRSxzQkQ3QmE7QUQwVGY7QUUxUkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUY2UkY7QUUxUkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZRDNDWTtBRHdVZDtBRTFSQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlEakRZO0FEOFVkO0FFMVJBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRjZSRjtBRTFSQTtFQUNJLFdBQUE7QUY2Uko7QUUxUkE7RUFDRSxhQUFBO0VBQ0EsWURqRVk7RUNrRVosZ0JEL0RhO0FENFZmO0FFMVJBO0VBQ0UsWUR0RVk7RUN1RVosZ0JEcEVhO0FEaVdmO0FFMVJBO0VBQ0UsWUQzRVk7RUM0RVosZ0JEekVhO0FEc1dmO0FFMVJBO0VBQ0UsWURoRlk7QUQ2V2Q7QUUxUkE7RUFDRSxjQUFBO0FGNlJGO0FFMVJBO0VBQ0UsY0FBQTtBRjZSRjtBRTFSQTtFQUNFLGNBQUE7QUY2UkY7QUUxUkE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FGNlJGO0FFMVJBO0VBQ0Usa0JBQUE7QUY2UkY7QUUxUkE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUY2UkY7QUUxUkE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBRjZSRjtBRTFSQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUY2UkY7QUUxUkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBRjZSRjtBRXpSQTtFQUNFLGFBQUE7QUY0UkY7QUUxUkE7RUFDRSxpQkFBQTtBRjZSRjtBRTNSQTtFQUNFLE9BQUE7QUY4UkY7QUUzUkE7RUFDRSx3Q0FBQTtFQUNBLG1CQUFBO0FGOFJGO0FFNVJBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FGK1JGO0FFN1JBO0VBQ0UsVUFBQTtBRmdTRjtBRTlSQTtFQUNFLDZCQUFBO0FGaVNGO0FFL1JBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FGa1NGO0FFaFNBO0VBQ0Usd0NBQUE7RUFDQSxtQkFBQTtBRm1TRjtBRWpTQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUZvU0Y7QUVsU0E7RUFDRSxpQkFBQTtBRnFTRjtBRW5TQTtFQUNFLE9BQUE7QUZzU0Y7QUVwU0E7RUFDRSxrQkFBQTtBRnVTRjtBRXJTQTtFQUNFLGtCQUFBO0FGd1NGO0FFdFNBO0VBQ0UseUJBQUE7QUZ5U0Y7QUV0U0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FGeVNGO0FFdFNBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FGeVNGO0FFdFNBO0VBQ0UsaUJBQUE7QUZ5U0Y7QUEzZUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUE4ZUo7QUEzZUE7RUFDSSwwQkFBQTtFQUE0QixlQUFBO0VBQzVCLDhCQUFBO0VBQXdDLFNBQUE7RUFDeEMsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUFnZko7QUE3ZUU7RUFDRTtJQUFLLHVCQUFBO0VBaWZQO0VBaGZFO0lBQU8seUJBQUE7RUFtZlQ7QUFDRjtBQXRmRTtFQUNFO0lBQUssdUJBQUE7RUFpZlA7RUFoZkU7SUFBTyx5QkFBQTtFQW1mVDtBQUNGO0FBL2VBO0VBQ0ksaUJBQUE7QUFpZko7QUE5ZUE7RUFDSSx3QkFBQTtBQWlmSjtBQTllQTtFQUNJLGVBQUE7QUFpZko7QUE5ZUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFpZko7QUE5ZUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQWlmSjtBQTllQTtFQUNJLGdCQUFBO0FBaWZKO0FBOWVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBaWZKO0FBOWVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQWlmSjtBQTllQTtFQUNJLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQWlmSjtBQTllQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQWlmSjtBQTdlQTtFQUNJLHFCQUFBO0FBZ2ZKO0FBN2VBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWdmSjtBQTdlQTtFQUNJLGVBQUE7QUFnZko7QUE3ZUE7RUFDSSx5QkFBQTtBQWdmSjtBQTdlQTtFQUNJLFNBQUE7QUFnZko7QUE3ZUE7RUFDSSx5QkM5RmU7QUQ4a0JuQjtBQTdlQTtFQUNJLFdBQUE7QUFnZko7QUE3ZUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQWdmSjtBQTdlQTtFQUNDLGNBQUE7RUFDQSxvQkFBQTtFQUNHLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBZ2ZKO0FBN2VBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBZ2ZKO0FBN2VBO0VBQ0ksdUJBQUE7QUFnZko7QUE3ZUE7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQWdmSjtBQTdlQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxVQUFBO0VBZ2ZOO0FBQ0YiLCJmaWxlIjoiY291cnNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vcG9zdC9zaGFyZWQvY3NzL3Bvc3Quc2Nzcyc7XG5cbi5kaXYtY2FyZ2FuZG97XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4vLyBsb2FkaW5nXG4ubG9hZGVyIHtcbiAgICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xuICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgJGNvbG9yLXByaW1hcmlvOyAvKiBCbHVlICovXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gIH1cblxuXG4vLyBDb3Vyc2Vcbi5jb3Vyc2VDb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xufVxuXG4uY29udGFpbmVyVmlkZW8ge1xuICAgIHBhZGRpbmc6IDBweCAzZW0gMHB4IDNlbTtcbn1cblxuLmFjdGlvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGl0bGVGb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi52aWRlb0FjdGlvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnZpZGVvVGl0bGVCb3gge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi52aWRlb1RpdGxlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb3Vyc2VUaXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi52aWRlb0Rlc2NyaXB0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbn1cblxuLnBhbmVsLWhlYWRpbmcsIC5wYW5lbC1oZWFkaW5nIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XG4gICAgLy9tYXJnaW46IDVweCAwcHggMHB4IDBweDtcbn1cblxuLm1lbnUtc2VjY2lvbiB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hIC5wYW5lbC1oZWFkaW5ne1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFjb3JkaW9uSXRlbXMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmluYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xufVxuXG4uY29sbGFwc2VJdGVtcyB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWN1bmRhcmlvO1xufVxuXG4uY292ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jaGVhZGluZyB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4jYWNjb3JkaW9uIC5wYW5lbC10aXRsZSA+IGEge1xuXHRkaXNwbGF5OiBibG9jaztcblx0cGFkZGluZzogMC40ZW0gMC42ZW07XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnBhbmVsLWhlYWRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY29sbGFwc2VkIC5wYW5lbC1oZWFkaW5nOjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG5cbi5wYW5lbC1oZWFkaW5nOjphZnRlciB7XG4gICAgY29udGVudDogXCJcXDI3NkZcIjtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMzVzO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpe1xuICAgIC5zdGlja3kge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDEwMHB4O1xuICAgIH1cbiAgfSIsIiRjb2xvci1mb25kbzogI2ZmZmZmZjtcbiRjb2xvci1sZXRyYTogcmdiKDAsIDAsIDApO1xuJGNvbG9yLXByaW1hcmlvOiAjMjI1YmM1O1xuJGNvbG9yLXNlY3VuZGFyaW86ICNiNWNmZmY7XG4kY29sb3ItYmxhbmNvOiAjZmZmO1xuJGNvbG9yLWxvZ286ICM1ZDVkNWQ7XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi0gQ09MT1IgcG9ydGZvbGlvXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4kcG9ydGZvbGlvX3QxOiAjMjI1YmM1O1xuJHBvcnRmb2xpb190MjogIzFhNDY5OTtcbiRwb3J0Zm9saW9fdDM6ICM5N2I1ZWQ7XG4kcG9ydGZvbGlvX3Q0OiAjYWRjNWYwO1xuJHBvcnRmb2xpb190NTogIzBmMmE1YztcbiRwb3J0Zm9saW9fdDY6ICMxODQwOGM7XG4kcG9ydGZvbGlvX3Q3OiAjMWM0Y2E2O1xuJHBvcnRmb2xpb190ODogIzA4MTYzMTtcbiRwb3J0Zm9saW9fdDk6ICNiZmQxZjM7XG5cbiRwb3J0Zm9saW9fc2hhZG93OiByZ2JhKDM0LCA5MSwgMTk3LCAwLjUpO1xuJHBvcnRmb2xpb190ZXh0X2NvbG9yX2RhcmtfYnJpZ2h0OiAjZmZmO1xuXG5cbi5hbGVydC1wb3J0Zm9saW8ge1xuICBjb2xvcjogJHBvcnRmb2xpb190NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190OTtcbiAgYm9yZGVyLWNvbG9yOiAkcG9ydGZvbGlvX3Q0O1xufVxuXG4uYWxlcnQtcG9ydGZvbGlvIGhyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogJHBvcnRmb2xpb190Mztcbn1cblxuLmFsZXJ0LXBvcnRmb2xpbyAuYWxlcnQtbGluayB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3Q4O1xufVxuXG4uYmFkZ2UtcG9ydGZvbGlvIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdGV4dF9jb2xvcl9kYXJrX2JyaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190MTtcbn1cblxuLmJhZGdlLXBvcnRmb2xpb1tocmVmXTpob3ZlciwgLmJhZGdlLXBvcnRmb2xpb1tocmVmXTpmb2N1cyB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3RleHRfY29sb3JfZGFya19icmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDI7XG59XG5cbi5iZy1wb3J0Zm9saW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3QxICFpbXBvcnRhbnQ7XG59XG5cbmEuYmctcG9ydGZvbGlvOmhvdmVyLCBhLmJnLXBvcnRmb2xpbzpmb2N1cyxcbmJ1dHRvbi5iZy1wb3J0Zm9saW86aG92ZXIsXG5idXR0b24uYmctcG9ydGZvbGlvOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190MiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLXBvcnRmb2xpbyB7XG4gIGJvcmRlci1jb2xvcjogJHBvcnRmb2xpb190MSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXBvcnRmb2xpbyB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3RleHRfY29sb3JfZGFya19icmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDE7XG4gIGJvcmRlci1jb2xvcjogJHBvcnRmb2xpb190MTtcbn1cblxuLmJ0bi1wb3J0Zm9saW86aG92ZXIge1xuICBjb2xvcjogJHBvcnRmb2xpb190ZXh0X2NvbG9yX2RhcmtfYnJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3Q3O1xuICBib3JkZXItY29sb3I6ICRwb3J0Zm9saW9fdDI7XG59XG5cbi5idG4tcG9ydGZvbGlvOmZvY3VzLCAuYnRuLXBvcnRmb2xpby5mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAkcG9ydGZvbGlvX3NoYWRvdztcbn1cblxuLmJ0bi1wb3J0Zm9saW8uZGlzYWJsZWQsIC5idG4tcG9ydGZvbGlvOmRpc2FibGVkIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdGV4dF9jb2xvcl9kYXJrX2JyaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190MTtcbiAgYm9yZGVyLWNvbG9yOiAkcG9ydGZvbGlvX3QxO1xufVxuXG4uYnRuLXBvcnRmb2xpbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tcG9ydGZvbGlvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLnNob3cgPiAuYnRuLXBvcnRmb2xpby5kcm9wZG93bi10b2dnbGUge1xuICBjb2xvcjogJHBvcnRmb2xpb190ZXh0X2NvbG9yX2RhcmtfYnJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3QyO1xuICBib3JkZXItY29sb3I6ICRwb3J0Zm9saW9fdDY7XG59XG5cbi5idG4tcG9ydGZvbGlvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1wb3J0Zm9saW86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLCAuc2hvdyA+IC5idG4tcG9ydGZvbGlvLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAkcG9ydGZvbGlvX3NoYWRvdztcbn1cblxuLmJ0bi1vdXRsaW5lLXBvcnRmb2xpbyB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3QxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiAkcG9ydGZvbGlvX3QxO1xufVxuXG4uYnRuLW91dGxpbmUtcG9ydGZvbGlvOmhvdmVyIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdGV4dF9jb2xvcl9kYXJrX2JyaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190MTtcbiAgYm9yZGVyLWNvbG9yOiAkcG9ydGZvbGlvX3QxO1xufVxuXG4uYnRuLW91dGxpbmUtcG9ydGZvbGlvOmZvY3VzLCAuYnRuLW91dGxpbmUtcG9ydGZvbGlvLmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICRwb3J0Zm9saW9fc2hhZG93O1xufVxuXG4uYnRuLW91dGxpbmUtcG9ydGZvbGlvLmRpc2FibGVkLCAuYnRuLW91dGxpbmUtcG9ydGZvbGlvOmRpc2FibGVkIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYnRuLW91dGxpbmUtcG9ydGZvbGlvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLXBvcnRmb2xpbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIC5zaG93ID4gLmJ0bi1vdXRsaW5lLXBvcnRmb2xpby5kcm9wZG93bi10b2dnbGUge1xuICBjb2xvcjogJHBvcnRmb2xpb190ZXh0X2NvbG9yX2RhcmtfYnJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3QxO1xuICBib3JkZXItY29sb3I6ICRwb3J0Zm9saW9fdDE7XG59XG5cbi5idG4tb3V0bGluZS1wb3J0Zm9saW86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLW91dGxpbmUtcG9ydGZvbGlvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cywgLnNob3cgPiAuYnRuLW91dGxpbmUtcG9ydGZvbGlvLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAkcG9ydGZvbGlvX3NoYWRvdztcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbS1wb3J0Zm9saW8ge1xuICBjb2xvcjogJHBvcnRmb2xpb190NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190NDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbS1wb3J0Zm9saW8ubGlzdC1ncm91cC1pdGVtLWFjdGlvbjpob3ZlciwgLmxpc3QtZ3JvdXAtaXRlbS1wb3J0Zm9saW8ubGlzdC1ncm91cC1pdGVtLWFjdGlvbjpmb2N1cyB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3Q1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3QzO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtLXBvcnRmb2xpby5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uLmFjdGl2ZSB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3RleHRfY29sb3JfZGFya19icmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDU7XG4gIGJvcmRlci1jb2xvcjogJHBvcnRmb2xpb190NTtcbn1cblxuLnRhYmxlLXBvcnRmb2xpbyxcbi50YWJsZS1wb3J0Zm9saW8gPiB0aCxcbi50YWJsZS1wb3J0Zm9saW8gPiB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDQ7XG59XG5cbi50YWJsZS1ob3ZlciAudGFibGUtcG9ydGZvbGlvOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190Mztcbn1cblxuLnRhYmxlLWhvdmVyIC50YWJsZS1wb3J0Zm9saW86aG92ZXIgPiB0ZCxcbi50YWJsZS1ob3ZlciAudGFibGUtcG9ydGZvbGlvOmhvdmVyID4gdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3QzO1xufVxuXG4udGV4dC1wb3J0Zm9saW8ge1xuICBjb2xvcjogJHBvcnRmb2xpb190MSAhaW1wb3J0YW50O1xufVxuXG5hLnRleHQtcG9ydGZvbGlvOmhvdmVyLCBhLnRleHQtcG9ydGZvbGlvOmZvY3VzIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdDIgIWltcG9ydGFudDtcbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcblxuLnN1Ym1lbnUge1xuICBiYWNrZ3JvdW5kOiByZ2IoMjQzLCAyNDMsIDI0Myk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMTAwcHg7XG4gIHotaW5kZXg6IDk5O1xuICBkaXNwbGF5OiBub25lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogMjBweCAwO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdWJtZW51IGRpdiB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICAvL2JvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG5zZWN0aW9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyNSUpIDBweCAxcHggM3B4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZGl2aWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFuY28gIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFuY287XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zdWJ0aXR1bG8ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogJGNvbG9yLWxldHJhO1xufVxuXG4uc3VidGl0dWxvMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAkY29sb3ItbGV0cmE7XG59XG5cbi5pbWctYmFubmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbiAgICBcbmlmcmFtZSB7XG4gICAgYm9yZGVyOiAwcHg7XG59XG5cbnByZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiAkY29sb3ItbGV0cmE7XG4gIGJhY2tncm91bmQ6ICRjb2xvci1ibGFuY287XG59XG5cbmJvZHkgLmdpc3QgLmxpbmUtZGF0YSwgYm9keSAuZ2lzdCAuZmlsZS1kYXRhLCBib2R5IC5naXN0IC5saW5lLW51bWJlcnMge1xuICBjb2xvcjogJGNvbG9yLWxldHJhO1xuICBiYWNrZ3JvdW5kOiAkY29sb3ItYmxhbmNvO1xufVxuXG5ib2R5IC5naXN0IC5naXN0LW1ldGEge1xuICBjb2xvcjogJGNvbG9yLWxldHJhO1xuICBiYWNrZ3JvdW5kOiAkY29sb3ItYmxhbmNvO1xufVxuXG5ib2R5IC5naXN0IC5wbC12bywgYm9keSAuZ2lzdCAucGwtdiwgYm9keSAuZ2lzdCAucGwtdnBmIHtcbiAgY29sb3I6ICRjb2xvci1sZXRyYTtcbn1cblxuYm9keSAuZ2lzdCAucGwtZW4sIGJvZHkgLmdpc3QgLnBsLWMxLCBib2R5IC5naXN0IC5wbC1zMyB7XG4gIGNvbG9yOiAjRUNBQzI5O1xufVxuXG5ib2R5IC5naXN0IC5wbC1rLCBib2R5IC5naXN0IC5wbC1zdCB7XG4gIGNvbG9yOiAjNzM3M0YyO1xufVxuXG5ib2R5IC5naXN0IC5wbC1zMSwgYm9keSAuZ2lzdCAucGwtcGRzIHtcbiAgY29sb3I6ICM3NkEyMkY7XG59XG5cbi5pbXBvcnRhbnRlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRleHRvIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uYXZhdGFyIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYWxpZ24tY2VudGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogcmdiKDIxNCwgMjE0LCAyMTQpO1xufVxuXG4uYWxpZ24tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogcmdiKDIxNCwgMjE0LCAyMTQpO1xufVxuXG4uYWxpZ24tY2VudGVyIHNwYW4ge1xuICBjb2xvcjogI0JBRDAwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4vLyBBcXVpXG4ubWVkaWE6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLm1lZGlhLCAubWVkaWEtYm9keSB7XG4gIG92ZXJmbG93OiBpbml0aWFsO1xufVxuLm1lZGlhLCAubWVkaWEtYm9keSB7XG4gIHpvb206IDE7XG59XG5cbi5raXQtYXZhdGFyLmtpdC1hdmF0YXItNjQge1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIyLDI0LDI3LC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDY0cHg7XG59XG5hLmtpdC1hdmF0YXIge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwO1xufVxuLmJvcmRlci13aGl0ZSB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XG59XG4ua2l0LWF2YXRhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UgLjNzO1xufVxuLmtpdC1hdmF0YXIua2l0LWF2YXRhci0zNiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjIsMjQsMjcsLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcbn1cbi5raXQtYXZhdGFyLmtpdC1hdmF0YXItMzY+aW1nIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbn1cbi5tZWRpYSwgLm1lZGlhLWJvZHkge1xuICBvdmVyZmxvdzogaW5pdGlhbDtcbn1cbi5tZWRpYSwgLm1lZGlhLWJvZHkge1xuICB6b29tOiAxO1xufVxuLm1lZGlhLWxlZnQge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubWVkaWEtaGVhZGluZ3tcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnRleHQtbXV0ZWQge1xuICBjb2xvcjogcmdiKDE4NCwgMTg0LCAxODQpICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItcG9zdCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5za2lsbExvZ28ge1xuICBjb2xvcjogJGNvbG9yLWxvZ28gIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5mYS1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CourseComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-course',
            templateUrl: './course.component.html',
            styleUrls: ['./course.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]
          }, {
            type: angularx_social_login__WEBPACK_IMPORTED_MODULE_8__["SocialAuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "S3vR":
    /*!*************************************************!*\
      !*** ./src/app/feature/course/course.module.ts ***!
      \*************************************************/

    /*! exports provided: CourseModule */

    /***/
    function S3vR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseModule", function () {
        return CourseModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _course_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./course-routing.module */
      "WXJF");
      /* harmony import */


      var _components_course_course_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/course/course.component */
      "Q2+z");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _components_gist_gist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/gist/gist.component */
      "e4UC");

      var CourseModule = function CourseModule() {
        _classCallCheck(this, CourseModule);
      };

      CourseModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: CourseModule
      });
      CourseModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function CourseModule_Factory(t) {
          return new (t || CourseModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _course_routing_module__WEBPACK_IMPORTED_MODULE_2__["CourseRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CourseModule, {
          declarations: [_components_course_course_component__WEBPACK_IMPORTED_MODULE_3__["CourseComponent"], _components_gist_gist_component__WEBPACK_IMPORTED_MODULE_5__["GistComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _course_routing_module__WEBPACK_IMPORTED_MODULE_2__["CourseRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CourseModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_components_course_course_component__WEBPACK_IMPORTED_MODULE_3__["CourseComponent"], _components_gist_gist_component__WEBPACK_IMPORTED_MODULE_5__["GistComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _course_routing_module__WEBPACK_IMPORTED_MODULE_2__["CourseRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "T7iU":
    /*!********************************************!*\
      !*** ./node_modules/plyr/dist/plyr.min.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function T7iU(module, exports, __webpack_require__) {
      "object" == typeof navigator && function (e, t) {
        true ? module.exports = t() : undefined;
      }(this, function () {
        "use strict";

        function e(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }

        function t(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }

        function i(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        }

        function n(e, t, i) {
          return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = i, e;
        }

        function a(e, t) {
          var i = Object.keys(e);

          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }

          return i;
        }

        function s(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? a(Object(i), !0).forEach(function (t) {
              n(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }

          return e;
        }

        function r(e, t) {
          if (null == e) return {};

          var i,
              n,
              a = function (e, t) {
            if (null == e) return {};
            var i,
                n,
                a = {},
                s = Object.keys(e);

            for (n = 0; n < s.length; n++) {
              i = s[n], t.indexOf(i) >= 0 || (a[i] = e[i]);
            }

            return a;
          }(e, t);

          if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);

            for (n = 0; n < s.length; n++) {
              i = s[n], t.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(e, i) && (a[i] = e[i]);
            }
          }

          return a;
        }

        function o(e, t) {
          return function (e) {
            if (Array.isArray(e)) return e;
          }(e) || function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var i = [],
                n = !0,
                a = !1,
                s = void 0;

            try {
              for (var r, o = e[Symbol.iterator](); !(n = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); n = !0) {
                ;
              }
            } catch (e) {
              a = !0, s = e;
            } finally {
              try {
                n || null == o["return"] || o["return"]();
              } finally {
                if (a) throw s;
              }
            }

            return i;
          }(e, t) || c(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }

        function l(e) {
          return function (e) {
            if (Array.isArray(e)) return u(e);
          }(e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
          }(e) || c(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }

        function c(e, t) {
          if (e) {
            if ("string" == typeof e) return u(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? u(e, t) : void 0;
          }
        }

        function u(e, t) {
          (null == t || t > e.length) && (t = e.length);

          for (var i = 0, n = new Array(t); i < t; i++) {
            n[i] = e[i];
          }

          return n;
        }

        function d(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }

        function h(e, t, i) {
          return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = i, e;
        }

        function p(e, t) {
          var i = Object.keys(e);

          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), i.push.apply(i, n);
          }

          return i;
        }

        function m(e) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? p(Object(i), !0).forEach(function (t) {
              h(e, t, i[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : p(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
          }

          return e;
        }

        var f = {
          addCSS: !0,
          thumbWidth: 15,
          watch: !0
        };

        function g(e, t) {
          return function () {
            return Array.from(document.querySelectorAll(t)).includes(this);
          }.call(e, t);
        }

        var y = function y(e) {
          return null != e ? e.constructor : null;
        },
            v = function v(e, t) {
          return !!(e && t && e instanceof t);
        },
            b = function b(e) {
          return null == e;
        },
            w = function w(e) {
          return y(e) === Object;
        },
            k = function k(e) {
          return y(e) === String;
        },
            T = function T(e) {
          return Array.isArray(e);
        },
            C = function C(e) {
          return v(e, NodeList);
        },
            A = k,
            S = T,
            P = C,
            E = function E(e) {
          return v(e, Element);
        },
            N = function N(e) {
          return v(e, Event);
        },
            M = function M(e) {
          return b(e) || (k(e) || T(e) || C(e)) && !e.length || w(e) && !Object.keys(e).length;
        };

        function x(e, t) {
          if (1 > t) {
            var i = function (e) {
              var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
              return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
            }(t);

            return parseFloat(e.toFixed(i));
          }

          return Math.round(e / t) * t;
        }

        var I,
            L,
            O,
            _ = function () {
          function e(t, i) {
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, e), E(t) ? this.element = t : A(t) && (this.element = document.querySelector(t)), E(this.element) && M(this.element.rangeTouch) && (this.config = m({}, f, {}, i), this.init());
          }

          return function (e, t, i) {
            t && d(e.prototype, t), i && d(e, i);
          }(e, [{
            key: "init",
            value: function value() {
              e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this);
            }
          }, {
            key: "destroy",
            value: function value() {
              e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null);
            }
          }, {
            key: "listeners",
            value: function value(e) {
              var t = this,
                  i = e ? "addEventListener" : "removeEventListener";
              ["touchstart", "touchmove", "touchend"].forEach(function (e) {
                t.element[i](e, function (e) {
                  return t.set(e);
                }, !1);
              });
            }
          }, {
            key: "get",
            value: function value(t) {
              if (!e.enabled || !N(t)) return null;
              var i,
                  n = t.target,
                  a = t.changedTouches[0],
                  s = parseFloat(n.getAttribute("min")) || 0,
                  r = parseFloat(n.getAttribute("max")) || 100,
                  o = parseFloat(n.getAttribute("step")) || 1,
                  l = n.getBoundingClientRect(),
                  c = 100 / l.width * (this.config.thumbWidth / 2) / 100;
              return 0 > (i = 100 / l.width * (a.clientX - l.left)) ? i = 0 : 100 < i && (i = 100), 50 > i ? i -= (100 - 2 * i) * c : 50 < i && (i += 2 * (i - 50) * c), s + x(i / 100 * (r - s), o);
            }
          }, {
            key: "set",
            value: function value(t) {
              e.enabled && N(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function (e, t) {
                if (e && t) {
                  var i = new Event(t, {
                    bubbles: !0
                  });
                  e.dispatchEvent(i);
                }
              }(t.target, "touchend" === t.type ? "change" : "input"));
            }
          }], [{
            key: "setup",
            value: function value(t) {
              var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                  n = null;
              if (M(t) || A(t) ? n = Array.from(document.querySelectorAll(A(t) ? t : 'input[type="range"]')) : E(t) ? n = [t] : P(t) ? n = Array.from(t) : S(t) && (n = t.filter(E)), M(n)) return null;
              var a = m({}, f, {}, i);

              if (A(t) && a.watch) {
                var s = new MutationObserver(function (i) {
                  Array.from(i).forEach(function (i) {
                    Array.from(i.addedNodes).forEach(function (i) {
                      E(i) && g(i, t) && new e(i, a);
                    });
                  });
                });
                s.observe(document.body, {
                  childList: !0,
                  subtree: !0
                });
              }

              return n.map(function (t) {
                return new e(t, i);
              });
            }
          }, {
            key: "enabled",
            get: function get() {
              return "ontouchstart" in document.documentElement;
            }
          }]), e;
        }(),
            j = function j(e) {
          return null != e ? e.constructor : null;
        },
            q = function q(e, t) {
          return Boolean(e && t && e instanceof t);
        },
            D = function D(e) {
          return null == e;
        },
            H = function H(e) {
          return j(e) === Object;
        },
            F = function F(e) {
          return j(e) === String;
        },
            R = function R(e) {
          return j(e) === Function;
        },
            V = function V(e) {
          return Array.isArray(e);
        },
            B = function B(e) {
          return q(e, NodeList);
        },
            U = function U(e) {
          return D(e) || (F(e) || V(e) || B(e)) && !e.length || H(e) && !Object.keys(e).length;
        },
            W = D,
            z = H,
            K = function K(e) {
          return j(e) === Number && !Number.isNaN(e);
        },
            Y = F,
            Q = function Q(e) {
          return j(e) === Boolean;
        },
            X = R,
            $ = V,
            J = B,
            G = function G(e) {
          return q(e, Element);
        },
            Z = function Z(e) {
          return q(e, Event);
        },
            ee = function ee(e) {
          return q(e, KeyboardEvent);
        },
            te = function te(e) {
          return q(e, TextTrack) || !D(e) && F(e.kind);
        },
            ie = function ie(e) {
          return q(e, Promise) && R(e.then);
        },
            ne = function ne(e) {
          if (q(e, window.URL)) return !0;
          if (!F(e)) return !1;
          var t = e;
          e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));

          try {
            return !U(new URL(t).hostname);
          } catch (e) {
            return !1;
          }
        },
            ae = U,
            se = (I = document.createElement("span"), L = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        }, O = Object.keys(L).find(function (e) {
          return void 0 !== I.style[e];
        }), !!Y(O) && L[O]);

        function re(e, t) {
          setTimeout(function () {
            try {
              e.hidden = !0, e.offsetHeight, e.hidden = !1;
            } catch (e) {}
          }, t);
        }

        var oe = {
          isIE:
          /* @cc_on!@ */
          !!document.documentMode,
          isEdge: window.navigator.userAgent.includes("Edge"),
          isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
          isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
          isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
        };

        function le(e, t) {
          return t.split(".").reduce(function (e, t) {
            return e && e[t];
          }, e);
        }

        function ce() {
          for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) {
            i[a - 1] = arguments[a];
          }

          if (!i.length) return e;
          var s = i.shift();
          return z(s) ? (Object.keys(s).forEach(function (t) {
            z(s[t]) ? (Object.keys(e).includes(t) || Object.assign(e, n({}, t, {})), ce(e[t], s[t])) : Object.assign(e, n({}, t, s[t]));
          }), ce.apply(void 0, [e].concat(i))) : e;
        }

        function ue(e, t) {
          var i = e.length ? e : [e];
          Array.from(i).reverse().forEach(function (e, i) {
            var n = i > 0 ? t.cloneNode(!0) : t,
                a = e.parentNode,
                s = e.nextSibling;
            n.appendChild(e), s ? a.insertBefore(n, s) : a.appendChild(n);
          });
        }

        function de(e, t) {
          G(e) && !ae(t) && Object.entries(t).filter(function (e) {
            var t = o(e, 2)[1];
            return !W(t);
          }).forEach(function (t) {
            var i = o(t, 2),
                n = i[0],
                a = i[1];
            return e.setAttribute(n, a);
          });
        }

        function he(e, t, i) {
          var n = document.createElement(e);
          return z(t) && de(n, t), Y(i) && (n.innerText = i), n;
        }

        function pe(e, t, i, n) {
          G(t) && t.appendChild(he(e, i, n));
        }

        function me(e) {
          J(e) || $(e) ? Array.from(e).forEach(me) : G(e) && G(e.parentNode) && e.parentNode.removeChild(e);
        }

        function fe(e) {
          if (G(e)) for (var t = e.childNodes.length; t > 0;) {
            e.removeChild(e.lastChild), t -= 1;
          }
        }

        function ge(e, t) {
          return G(t) && G(t.parentNode) && G(e) ? (t.parentNode.replaceChild(e, t), e) : null;
        }

        function ye(e, t) {
          if (!Y(e) || ae(e)) return {};
          var i = {},
              n = ce({}, t);
          return e.split(",").forEach(function (e) {
            var t = e.trim(),
                a = t.replace(".", ""),
                s = t.replace(/[[\]]/g, "").split("="),
                r = o(s, 1)[0],
                l = s.length > 1 ? s[1].replace(/["']/g, "") : "";

            switch (t.charAt(0)) {
              case ".":
                Y(n["class"]) ? i["class"] = "".concat(n["class"], " ").concat(a) : i["class"] = a;
                break;

              case "#":
                i.id = t.replace("#", "");
                break;

              case "[":
                i[r] = l;
            }
          }), ce(n, i);
        }

        function ve(e, t) {
          if (G(e)) {
            var i = t;
            Q(i) || (i = !e.hidden), e.hidden = i;
          }
        }

        function be(e, t, i) {
          if (J(e)) return Array.from(e).map(function (e) {
            return be(e, t, i);
          });

          if (G(e)) {
            var n = "toggle";
            return void 0 !== i && (n = i ? "add" : "remove"), e.classList[n](t), e.classList.contains(t);
          }

          return !1;
        }

        function we(e, t) {
          return G(e) && e.classList.contains(t);
        }

        function ke(e, t) {
          var i = Element.prototype;
          return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function () {
            return Array.from(document.querySelectorAll(t)).includes(this);
          }).call(e, t);
        }

        function Te(e) {
          return this.elements.container.querySelectorAll(e);
        }

        function Ce(e) {
          return this.elements.container.querySelector(e);
        }

        function Ae() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          G(e) && (e.focus({
            preventScroll: !0
          }), t && be(e, this.config.classNames.tabFocus));
        }

        var Se,
            Pe = {
          "audio/ogg": "vorbis",
          "audio/wav": "1",
          "video/webm": "vp8, vorbis",
          "video/mp4": "avc1.42E01E, mp4a.40.2",
          "video/ogg": "theora"
        },
            Ee = {
          audio: "canPlayType" in document.createElement("audio"),
          video: "canPlayType" in document.createElement("video"),
          check: function check(e, t, i) {
            var n = oe.isIPhone && i && Ee.playsinline,
                a = Ee[e] || "html5" !== t;
            return {
              api: a,
              ui: a && Ee.rangeInput && ("video" !== e || !oe.isIPhone || n)
            };
          },
          pip: !(oe.isIPhone || !X(he("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || he("video").disablePictureInPicture)),
          airplay: X(window.WebKitPlaybackTargetAvailabilityEvent),
          playsinline: "playsInline" in document.createElement("video"),
          mime: function mime(e) {
            if (ae(e)) return !1;
            var t = o(e.split("/"), 1)[0],
                i = e;
            if (!this.isHTML5 || t !== this.type) return !1;
            Object.keys(Pe).includes(i) && (i += '; codecs="'.concat(Pe[e], '"'));

            try {
              return Boolean(i && this.media.canPlayType(i).replace(/no/, ""));
            } catch (e) {
              return !1;
            }
          },
          textTracks: "textTracks" in document.createElement("video"),
          rangeInput: (Se = document.createElement("input"), Se.type = "range", "range" === Se.type),
          touch: "ontouchstart" in document.documentElement,
          transitions: !1 !== se,
          reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
        },
            Ne = function () {
          var e = !1;

          try {
            var t = Object.defineProperty({}, "passive", {
              get: function get() {
                return e = !0, null;
              }
            });
            window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
          } catch (e) {}

          return e;
        }();

        function Me(e, t, i) {
          var n = this,
              a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];

          if (e && "addEventListener" in e && !ae(t) && X(i)) {
            var o = t.split(" "),
                l = r;
            Ne && (l = {
              passive: s,
              capture: r
            }), o.forEach(function (t) {
              n && n.eventListeners && a && n.eventListeners.push({
                element: e,
                type: t,
                callback: i,
                options: l
              }), e[a ? "addEventListener" : "removeEventListener"](t, i, l);
            });
          }
        }

        function xe(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              i = arguments.length > 2 ? arguments[2] : void 0,
              n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
              a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          Me.call(this, e, t, i, !0, n, a);
        }

        function Ie(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              i = arguments.length > 2 ? arguments[2] : void 0,
              n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
              a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          Me.call(this, e, t, i, !1, n, a);
        }

        function Le(e) {
          var t = this,
              i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              n = arguments.length > 2 ? arguments[2] : void 0,
              a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
              s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              r = function r() {
            Ie(e, i, r, a, s);

            for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++) {
              l[c] = arguments[c];
            }

            n.apply(t, l);
          };

          Me.call(this, e, i, r, !0, a, s);
        }

        function Oe(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};

          if (G(e) && !ae(t)) {
            var a = new CustomEvent(t, {
              bubbles: i,
              detail: s(s({}, n), {}, {
                plyr: this
              })
            });
            e.dispatchEvent(a);
          }
        }

        function _e() {
          this && this.eventListeners && (this.eventListeners.forEach(function (e) {
            var t = e.element,
                i = e.type,
                n = e.callback,
                a = e.options;
            t.removeEventListener(i, n, a);
          }), this.eventListeners = []);
        }

        function je() {
          var e = this;
          return new Promise(function (t) {
            return e.ready ? setTimeout(t, 0) : xe.call(e, e.elements.container, "ready", t);
          }).then(function () {});
        }

        function qe(e) {
          ie(e) && e.then(null, function () {});
        }

        function De(e) {
          return !!($(e) || Y(e) && e.includes(":")) && ($(e) ? e : e.split(":")).map(Number).every(K);
        }

        function He(e) {
          if (!$(e) || !e.every(K)) return null;

          var t = o(e, 2),
              i = t[0],
              n = t[1],
              a = function e(t, i) {
            return 0 === i ? t : e(i, t % i);
          }(i, n);

          return [i / a, n / a];
        }

        function Fe(e) {
          var t = function t(e) {
            return De(e) ? e.split(":").map(Number) : null;
          },
              i = t(e);

          if (null === i && (i = t(this.config.ratio)), null === i && !ae(this.embed) && $(this.embed.ratio) && (i = this.embed.ratio), null === i && this.isHTML5) {
            var n = this.media;
            i = He([n.videoWidth, n.videoHeight]);
          }

          return i;
        }

        function Re(e) {
          if (!this.isVideo) return {};
          var t = this.elements.wrapper,
              i = Fe.call(this, e),
              n = o($(i) ? i : [0, 0], 2),
              a = 100 / n[0] * n[1];

          if (t.style.paddingBottom = "".concat(a, "%"), this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
            var s = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
                r = (s - a) / (s / 50);
            this.media.style.transform = "translateY(-".concat(r, "%)");
          } else this.isHTML5 && t.classList.toggle(this.config.classNames.videoFixedRatio, null !== i);

          return {
            padding: a,
            ratio: i
          };
        }

        var Ve = {
          getSources: function getSources() {
            var e = this;
            return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(function (t) {
              var i = t.getAttribute("type");
              return !!ae(i) || Ee.mime.call(e, i);
            }) : [];
          },
          getQualityOptions: function getQualityOptions() {
            return this.config.quality.forced ? this.config.quality.options : Ve.getSources.call(this).map(function (e) {
              return Number(e.getAttribute("size"));
            }).filter(Boolean);
          },
          setup: function setup() {
            if (this.isHTML5) {
              var e = this;
              e.options.speed = e.config.speed.options, ae(this.config.ratio) || Re.call(e), Object.defineProperty(e.media, "quality", {
                get: function get() {
                  var t = Ve.getSources.call(e).find(function (t) {
                    return t.getAttribute("src") === e.source;
                  });
                  return t && Number(t.getAttribute("size"));
                },
                set: function set(t) {
                  if (e.quality !== t) {
                    if (e.config.quality.forced && X(e.config.quality.onChange)) e.config.quality.onChange(t);else {
                      var i = Ve.getSources.call(e).find(function (e) {
                        return Number(e.getAttribute("size")) === t;
                      });
                      if (!i) return;
                      var n = e.media,
                          a = n.currentTime,
                          s = n.paused,
                          r = n.preload,
                          o = n.readyState,
                          l = n.playbackRate;
                      e.media.src = i.getAttribute("src"), ("none" !== r || o) && (e.once("loadedmetadata", function () {
                        e.speed = l, e.currentTime = a, s || qe(e.play());
                      }), e.media.load());
                    }
                    Oe.call(e, e.media, "qualitychange", !1, {
                      quality: t
                    });
                  }
                }
              });
            }
          },
          cancelRequests: function cancelRequests() {
            this.isHTML5 && (me(Ve.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
          }
        };

        function Be(e) {
          return $(e) ? e.filter(function (t, i) {
            return e.indexOf(t) === i;
          }) : e;
        }

        function Ue(e) {
          for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
            i[n - 1] = arguments[n];
          }

          return ae(e) ? e : e.toString().replace(/{(\d+)}/g, function (e, t) {
            return i[t].toString();
          });
        }

        var We = function We() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString());
        },
            ze = function ze() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return e.toString().replace(/\w\S*/g, function (e) {
            return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
          });
        };

        function Ke() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              t = e.toString();
          return t = We(t, "-", " "), t = We(t, "_", " "), t = ze(t), We(t, " ", "");
        }

        function Ye(e) {
          var t = document.createElement("div");
          return t.appendChild(e), t.innerHTML;
        }

        var Qe = {
          pip: "PIP",
          airplay: "AirPlay",
          html5: "HTML5",
          vimeo: "Vimeo",
          youtube: "YouTube"
        },
            Xe = function Xe() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (ae(e) || ae(t)) return "";
          var i = le(t.i18n, e);
          if (ae(i)) return Object.keys(Qe).includes(e) ? Qe[e] : "";
          var n = {
            "{seektime}": t.seekTime,
            "{title}": t.title
          };
          return Object.entries(n).forEach(function (e) {
            var t = o(e, 2),
                n = t[0],
                a = t[1];
            i = We(i, n, a);
          }), i;
        },
            $e = function () {
          function t(i) {
            e(this, t), this.enabled = i.config.storage.enabled, this.key = i.config.storage.key;
          }

          return i(t, [{
            key: "get",
            value: function value(e) {
              if (!t.supported || !this.enabled) return null;
              var i = window.localStorage.getItem(this.key);
              if (ae(i)) return null;
              var n = JSON.parse(i);
              return Y(e) && e.length ? n[e] : n;
            }
          }, {
            key: "set",
            value: function value(e) {
              if (t.supported && this.enabled && z(e)) {
                var i = this.get();
                ae(i) && (i = {}), ce(i, e), window.localStorage.setItem(this.key, JSON.stringify(i));
              }
            }
          }], [{
            key: "supported",
            get: function get() {
              try {
                if (!("localStorage" in window)) return !1;
                return window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0;
              } catch (e) {
                return !1;
              }
            }
          }]), t;
        }();

        function Je(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
          return new Promise(function (i, n) {
            try {
              var a = new XMLHttpRequest();
              if (!("withCredentials" in a)) return;
              a.addEventListener("load", function () {
                if ("text" === t) try {
                  i(JSON.parse(a.responseText));
                } catch (e) {
                  i(a.responseText);
                } else i(a.response);
              }), a.addEventListener("error", function () {
                throw new Error(a.status);
              }), a.open("GET", e, !0), a.responseType = t, a.send();
            } catch (e) {
              n(e);
            }
          });
        }

        function Ge(e, t) {
          if (Y(e)) {
            var i = Y(t),
                n = function n() {
              return null !== document.getElementById(t);
            },
                a = function a(e, t) {
              e.innerHTML = t, i && n() || document.body.insertAdjacentElement("afterbegin", e);
            };

            if (!i || !n()) {
              var s = $e.supported,
                  r = document.createElement("div");

              if (r.setAttribute("hidden", ""), i && r.setAttribute("id", t), s) {
                var o = window.localStorage.getItem("".concat("cache", "-").concat(t));

                if (null !== o) {
                  var l = JSON.parse(o);
                  a(r, l.content);
                }
              }

              Je(e).then(function (e) {
                ae(e) || (s && window.localStorage.setItem("".concat("cache", "-").concat(t), JSON.stringify({
                  content: e
                })), a(r, e));
              })["catch"](function () {});
            }
          }
        }

        var Ze = function Ze(e) {
          return Math.trunc(e / 60 / 60 % 60, 10);
        },
            et = function et(e) {
          return Math.trunc(e / 60 % 60, 10);
        },
            tt = function tt(e) {
          return Math.trunc(e % 60, 10);
        };

        function it() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!K(e)) return it(void 0, t, i);

          var n = function n(e) {
            return "0".concat(e).slice(-2);
          },
              a = Ze(e),
              s = et(e),
              r = tt(e);

          return a = t || a > 0 ? "".concat(a, ":") : "", "".concat(i && e > 0 ? "-" : "").concat(a).concat(n(s), ":").concat(n(r));
        }

        var nt = {
          getIconUrl: function getIconUrl() {
            var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || oe.isIE && !window.svg4everybody;
            return {
              url: this.config.iconUrl,
              cors: e
            };
          },
          findElements: function findElements() {
            try {
              return this.elements.controls = Ce.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                play: Te.call(this, this.config.selectors.buttons.play),
                pause: Ce.call(this, this.config.selectors.buttons.pause),
                restart: Ce.call(this, this.config.selectors.buttons.restart),
                rewind: Ce.call(this, this.config.selectors.buttons.rewind),
                fastForward: Ce.call(this, this.config.selectors.buttons.fastForward),
                mute: Ce.call(this, this.config.selectors.buttons.mute),
                pip: Ce.call(this, this.config.selectors.buttons.pip),
                airplay: Ce.call(this, this.config.selectors.buttons.airplay),
                settings: Ce.call(this, this.config.selectors.buttons.settings),
                captions: Ce.call(this, this.config.selectors.buttons.captions),
                fullscreen: Ce.call(this, this.config.selectors.buttons.fullscreen)
              }, this.elements.progress = Ce.call(this, this.config.selectors.progress), this.elements.inputs = {
                seek: Ce.call(this, this.config.selectors.inputs.seek),
                volume: Ce.call(this, this.config.selectors.inputs.volume)
              }, this.elements.display = {
                buffer: Ce.call(this, this.config.selectors.display.buffer),
                currentTime: Ce.call(this, this.config.selectors.display.currentTime),
                duration: Ce.call(this, this.config.selectors.display.duration)
              }, G(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0;
            } catch (e) {
              return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1;
            }
          },
          createIcon: function createIcon(e, t) {
            var i = nt.getIconUrl.call(this),
                n = "".concat(i.cors ? "" : i.url, "#").concat(this.config.iconPrefix),
                a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            de(a, ce(t, {
              "aria-hidden": "true",
              focusable: "false"
            }));
            var s = document.createElementNS("http://www.w3.org/2000/svg", "use"),
                r = "".concat(n, "-").concat(e);
            return "href" in s && s.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), s.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r), a.appendChild(s), a;
          },
          createLabel: function createLabel(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = Xe(e, this.config),
                n = s(s({}, t), {}, {
              "class": [t["class"], this.config.classNames.hidden].filter(Boolean).join(" ")
            });
            return he("span", n, i);
          },
          createBadge: function createBadge(e) {
            if (ae(e)) return null;
            var t = he("span", {
              "class": this.config.classNames.menu.value
            });
            return t.appendChild(he("span", {
              "class": this.config.classNames.menu.badge
            }, e)), t;
          },
          createButton: function createButton(e, t) {
            var i = this,
                n = ce({}, t),
                a = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                  t = e.toString();
              return (t = Ke(t)).charAt(0).toLowerCase() + t.slice(1);
            }(e),
                s = {
              element: "button",
              toggle: !1,
              label: null,
              icon: null,
              labelPressed: null,
              iconPressed: null
            };

            switch (["element", "icon", "label"].forEach(function (e) {
              Object.keys(n).includes(e) && (s[e] = n[e], delete n[e]);
            }), "button" !== s.element || Object.keys(n).includes("type") || (n.type = "button"), Object.keys(n).includes("class") ? n["class"].split(" ").some(function (e) {
              return e === i.config.classNames.control;
            }) || ce(n, {
              "class": "".concat(n["class"], " ").concat(this.config.classNames.control)
            }) : n["class"] = this.config.classNames.control, e) {
              case "play":
                s.toggle = !0, s.label = "play", s.labelPressed = "pause", s.icon = "play", s.iconPressed = "pause";
                break;

              case "mute":
                s.toggle = !0, s.label = "mute", s.labelPressed = "unmute", s.icon = "volume", s.iconPressed = "muted";
                break;

              case "captions":
                s.toggle = !0, s.label = "enableCaptions", s.labelPressed = "disableCaptions", s.icon = "captions-off", s.iconPressed = "captions-on";
                break;

              case "fullscreen":
                s.toggle = !0, s.label = "enterFullscreen", s.labelPressed = "exitFullscreen", s.icon = "enter-fullscreen", s.iconPressed = "exit-fullscreen";
                break;

              case "play-large":
                n["class"] += " ".concat(this.config.classNames.control, "--overlaid"), a = "play", s.label = "play", s.icon = "play";
                break;

              default:
                ae(s.label) && (s.label = a), ae(s.icon) && (s.icon = e);
            }

            var r = he(s.element);
            return s.toggle ? (r.appendChild(nt.createIcon.call(this, s.iconPressed, {
              "class": "icon--pressed"
            })), r.appendChild(nt.createIcon.call(this, s.icon, {
              "class": "icon--not-pressed"
            })), r.appendChild(nt.createLabel.call(this, s.labelPressed, {
              "class": "label--pressed"
            })), r.appendChild(nt.createLabel.call(this, s.label, {
              "class": "label--not-pressed"
            }))) : (r.appendChild(nt.createIcon.call(this, s.icon)), r.appendChild(nt.createLabel.call(this, s.label))), ce(n, ye(this.config.selectors.buttons[a], n)), de(r, n), "play" === a ? ($(this.elements.buttons[a]) || (this.elements.buttons[a] = []), this.elements.buttons[a].push(r)) : this.elements.buttons[a] = r, r;
          },
          createRange: function createRange(e, t) {
            var i = he("input", ce(ye(this.config.selectors.inputs[e]), {
              type: "range",
              min: 0,
              max: 100,
              step: .01,
              value: 0,
              autocomplete: "off",
              role: "slider",
              "aria-label": Xe(e, this.config),
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": 0
            }, t));
            return this.elements.inputs[e] = i, nt.updateRangeFill.call(this, i), _.setup(i), i;
          },
          createProgress: function createProgress(e, t) {
            var i = he("progress", ce(ye(this.config.selectors.display[e]), {
              min: 0,
              max: 100,
              value: 0,
              role: "progressbar",
              "aria-hidden": !0
            }, t));

            if ("volume" !== e) {
              i.appendChild(he("span", null, "0"));
              var n = {
                played: "played",
                buffer: "buffered"
              }[e],
                  a = n ? Xe(n, this.config) : "";
              i.innerText = "% ".concat(a.toLowerCase());
            }

            return this.elements.display[e] = i, i;
          },
          createTime: function createTime(e, t) {
            var i = ye(this.config.selectors.display[e], t),
                n = he("div", ce(i, {
              "class": "".concat(i["class"] ? i["class"] : "", " ").concat(this.config.classNames.display.time, " ").trim(),
              "aria-label": Xe(e, this.config)
            }), "00:00");
            return this.elements.display[e] = n, n;
          },
          bindMenuItemShortcuts: function bindMenuItemShortcuts(e, t) {
            var i = this;
            xe.call(this, e, "keydown keyup", function (n) {
              if ([32, 38, 39, 40].includes(n.which) && (n.preventDefault(), n.stopPropagation(), "keydown" !== n.type)) {
                var a,
                    s = ke(e, '[role="menuitemradio"]');
                if (!s && [32, 39].includes(n.which)) nt.showMenuPanel.call(i, t, !0);else 32 !== n.which && (40 === n.which || s && 39 === n.which ? (a = e.nextElementSibling, G(a) || (a = e.parentNode.firstElementChild)) : (a = e.previousElementSibling, G(a) || (a = e.parentNode.lastElementChild)), Ae.call(i, a, !0));
              }
            }, !1), xe.call(this, e, "keyup", function (e) {
              13 === e.which && nt.focusFirstMenuItem.call(i, null, !0);
            });
          },
          createMenuItem: function createMenuItem(e) {
            var t = this,
                i = e.value,
                n = e.list,
                a = e.type,
                s = e.title,
                r = e.badge,
                o = void 0 === r ? null : r,
                l = e.checked,
                c = void 0 !== l && l,
                u = ye(this.config.selectors.inputs[a]),
                d = he("button", ce(u, {
              type: "button",
              role: "menuitemradio",
              "class": "".concat(this.config.classNames.control, " ").concat(u["class"] ? u["class"] : "").trim(),
              "aria-checked": c,
              value: i
            })),
                h = he("span");
            h.innerHTML = s, G(o) && h.appendChild(o), d.appendChild(h), Object.defineProperty(d, "checked", {
              enumerable: !0,
              get: function get() {
                return "true" === d.getAttribute("aria-checked");
              },
              set: function set(e) {
                e && Array.from(d.parentNode.children).filter(function (e) {
                  return ke(e, '[role="menuitemradio"]');
                }).forEach(function (e) {
                  return e.setAttribute("aria-checked", "false");
                }), d.setAttribute("aria-checked", e ? "true" : "false");
              }
            }), this.listeners.bind(d, "click keyup", function (e) {
              if (!ee(e) || 32 === e.which) {
                switch (e.preventDefault(), e.stopPropagation(), d.checked = !0, a) {
                  case "language":
                    t.currentTrack = Number(i);
                    break;

                  case "quality":
                    t.quality = i;
                    break;

                  case "speed":
                    t.speed = parseFloat(i);
                }

                nt.showMenuPanel.call(t, "home", ee(e));
              }
            }, a, !1), nt.bindMenuItemShortcuts.call(this, d, a), n.appendChild(d);
          },
          formatTime: function formatTime() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!K(e)) return e;
            var i = Ze(this.duration) > 0;
            return it(e, i, t);
          },
          updateTimeDisplay: function updateTimeDisplay() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            G(e) && K(t) && (e.innerText = nt.formatTime(t, i));
          },
          updateVolume: function updateVolume() {
            this.supported.ui && (G(this.elements.inputs.volume) && nt.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), G(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
          },
          setRange: function setRange(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            G(e) && (e.value = t, nt.updateRangeFill.call(this, e));
          },
          updateProgress: function updateProgress(e) {
            var t = this;

            if (this.supported.ui && Z(e)) {
              var i,
                  n,
                  a = 0;
              if (e) switch (e.type) {
                case "timeupdate":
                case "seeking":
                case "seeked":
                  i = this.currentTime, n = this.duration, a = 0 === i || 0 === n || Number.isNaN(i) || Number.isNaN(n) ? 0 : (i / n * 100).toFixed(2), "timeupdate" === e.type && nt.setRange.call(this, this.elements.inputs.seek, a);
                  break;

                case "playing":
                case "progress":
                  !function (e, i) {
                    var n = K(i) ? i : 0,
                        a = G(e) ? e : t.elements.display.buffer;

                    if (G(a)) {
                      a.value = n;
                      var s = a.getElementsByTagName("span")[0];
                      G(s) && (s.childNodes[0].nodeValue = n);
                    }
                  }(this.elements.display.buffer, 100 * this.buffered);
              }
            }
          },
          updateRangeFill: function updateRangeFill(e) {
            var t = Z(e) ? e.target : e;

            if (G(t) && "range" === t.getAttribute("type")) {
              if (ke(t, this.config.selectors.inputs.seek)) {
                t.setAttribute("aria-valuenow", this.currentTime);
                var i = nt.formatTime(this.currentTime),
                    n = nt.formatTime(this.duration),
                    a = Xe("seekLabel", this.config);
                t.setAttribute("aria-valuetext", a.replace("{currentTime}", i).replace("{duration}", n));
              } else if (ke(t, this.config.selectors.inputs.volume)) {
                var s = 100 * t.value;
                t.setAttribute("aria-valuenow", s), t.setAttribute("aria-valuetext", "".concat(s.toFixed(1), "%"));
              } else t.setAttribute("aria-valuenow", t.value);

              oe.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"));
            }
          },
          updateSeekTooltip: function updateSeekTooltip(e) {
            var t = this;

            if (this.config.tooltips.seek && G(this.elements.inputs.seek) && G(this.elements.display.seekTooltip) && 0 !== this.duration) {
              var i = "".concat(this.config.classNames.tooltip, "--visible"),
                  n = function n(e) {
                return be(t.elements.display.seekTooltip, i, e);
              };

              if (this.touch) n(!1);else {
                var a = 0,
                    s = this.elements.progress.getBoundingClientRect();
                if (Z(e)) a = 100 / s.width * (e.pageX - s.left);else {
                  if (!we(this.elements.display.seekTooltip, i)) return;
                  a = parseFloat(this.elements.display.seekTooltip.style.left, 10);
                }
                a < 0 ? a = 0 : a > 100 && (a = 100), nt.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * a), this.elements.display.seekTooltip.style.left = "".concat(a, "%"), Z(e) && ["mouseenter", "mouseleave"].includes(e.type) && n("mouseenter" === e.type);
              }
            }
          },
          timeUpdate: function timeUpdate(e) {
            var t = !G(this.elements.display.duration) && this.config.invertTime;
            nt.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || nt.updateProgress.call(this, e);
          },
          durationUpdate: function durationUpdate() {
            if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
              if (this.duration >= Math.pow(2, 32)) return ve(this.elements.display.currentTime, !0), void ve(this.elements.progress, !0);
              G(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
              var e = G(this.elements.display.duration);
              !e && this.config.displayDuration && this.paused && nt.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && nt.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), nt.updateSeekTooltip.call(this);
            }
          },
          toggleMenuButton: function toggleMenuButton(e, t) {
            ve(this.elements.settings.buttons[e], !t);
          },
          updateSetting: function updateSetting(e, t, i) {
            var n = this.elements.settings.panels[e],
                a = null,
                s = t;
            if ("captions" === e) a = this.currentTrack;else {
              if (a = ae(i) ? this[e] : i, ae(a) && (a = this.config[e]["default"]), !ae(this.options[e]) && !this.options[e].includes(a)) return void this.debug.warn("Unsupported value of '".concat(a, "' for ").concat(e));
              if (!this.config[e].options.includes(a)) return void this.debug.warn("Disabled value of '".concat(a, "' for ").concat(e));
            }

            if (G(s) || (s = n && n.querySelector('[role="menu"]')), G(s)) {
              this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = nt.getLabel.call(this, e, a);
              var r = s && s.querySelector('[value="'.concat(a, '"]'));
              G(r) && (r.checked = !0);
            }
          },
          getLabel: function getLabel(e, t) {
            switch (e) {
              case "speed":
                return 1 === t ? Xe("normal", this.config) : "".concat(t, "&times;");

              case "quality":
                if (K(t)) {
                  var i = Xe("qualityLabel.".concat(t), this.config);
                  return i.length ? i : "".concat(t, "p");
                }

                return ze(t);

              case "captions":
                return rt.getLabel.call(this);

              default:
                return null;
            }
          },
          setQualityMenu: function setQualityMenu(e) {
            var t = this;

            if (G(this.elements.settings.panels.quality)) {
              var i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
              $(e) && (this.options.quality = Be(e).filter(function (e) {
                return t.config.quality.options.includes(e);
              }));
              var n = !ae(this.options.quality) && this.options.quality.length > 1;

              if (nt.toggleMenuButton.call(this, "quality", n), fe(i), nt.checkMenu.call(this), n) {
                var a = function a(e) {
                  var i = Xe("qualityBadge.".concat(e), t.config);
                  return i.length ? nt.createBadge.call(t, i) : null;
                };

                this.options.quality.sort(function (e, i) {
                  var n = t.config.quality.options;
                  return n.indexOf(e) > n.indexOf(i) ? 1 : -1;
                }).forEach(function (e) {
                  nt.createMenuItem.call(t, {
                    value: e,
                    list: i,
                    type: "quality",
                    title: nt.getLabel.call(t, "quality", e),
                    badge: a(e)
                  });
                }), nt.updateSetting.call(this, "quality", i);
              }
            }
          },
          setCaptionsMenu: function setCaptionsMenu() {
            var e = this;

            if (G(this.elements.settings.panels.captions)) {
              var t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                  i = rt.getTracks.call(this),
                  n = Boolean(i.length);

              if (nt.toggleMenuButton.call(this, "captions", n), fe(t), nt.checkMenu.call(this), n) {
                var a = i.map(function (i, n) {
                  return {
                    value: n,
                    checked: e.captions.toggled && e.currentTrack === n,
                    title: rt.getLabel.call(e, i),
                    badge: i.language && nt.createBadge.call(e, i.language.toUpperCase()),
                    list: t,
                    type: "language"
                  };
                });
                a.unshift({
                  value: -1,
                  checked: !this.captions.toggled,
                  title: Xe("disabled", this.config),
                  list: t,
                  type: "language"
                }), a.forEach(nt.createMenuItem.bind(this)), nt.updateSetting.call(this, "captions", t);
              }
            }
          },
          setSpeedMenu: function setSpeedMenu() {
            var e = this;

            if (G(this.elements.settings.panels.speed)) {
              var t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
              this.options.speed = this.options.speed.filter(function (t) {
                return t >= e.minimumSpeed && t <= e.maximumSpeed;
              });
              var i = !ae(this.options.speed) && this.options.speed.length > 1;
              nt.toggleMenuButton.call(this, "speed", i), fe(t), nt.checkMenu.call(this), i && (this.options.speed.forEach(function (i) {
                nt.createMenuItem.call(e, {
                  value: i,
                  list: t,
                  type: "speed",
                  title: nt.getLabel.call(e, "speed", i)
                });
              }), nt.updateSetting.call(this, "speed", t));
            }
          },
          checkMenu: function checkMenu() {
            var e = this.elements.settings.buttons,
                t = !ae(e) && Object.values(e).some(function (e) {
              return !e.hidden;
            });
            ve(this.elements.settings.menu, !t);
          },
          focusFirstMenuItem: function focusFirstMenuItem(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

            if (!this.elements.settings.popup.hidden) {
              var i = e;
              G(i) || (i = Object.values(this.elements.settings.panels).find(function (e) {
                return !e.hidden;
              }));
              var n = i.querySelector('[role^="menuitem"]');
              Ae.call(this, n, t);
            }
          },
          toggleMenu: function toggleMenu(e) {
            var t = this.elements.settings.popup,
                i = this.elements.buttons.settings;

            if (G(t) && G(i)) {
              var n = t.hidden,
                  a = n;
              if (Q(e)) a = e;else if (ee(e) && 27 === e.which) a = !1;else if (Z(e)) {
                var s = X(e.composedPath) ? e.composedPath()[0] : e.target,
                    r = t.contains(s);
                if (r || !r && e.target !== i && a) return;
              }
              i.setAttribute("aria-expanded", a), ve(t, !a), be(this.elements.container, this.config.classNames.menu.open, a), a && ee(e) ? nt.focusFirstMenuItem.call(this, null, !0) : a || n || Ae.call(this, i, ee(e));
            }
          },
          getMenuSize: function getMenuSize(e) {
            var t = e.cloneNode(!0);
            t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
            var i = t.scrollWidth,
                n = t.scrollHeight;
            return me(t), {
              width: i,
              height: n
            };
          },
          showMenuPanel: function showMenuPanel() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(t));

            if (G(n)) {
              var a = n.parentNode,
                  s = Array.from(a.children).find(function (e) {
                return !e.hidden;
              });

              if (Ee.transitions && !Ee.reducedMotion) {
                a.style.width = "".concat(s.scrollWidth, "px"), a.style.height = "".concat(s.scrollHeight, "px");

                var r = nt.getMenuSize.call(this, n),
                    o = function t(i) {
                  i.target === a && ["width", "height"].includes(i.propertyName) && (a.style.width = "", a.style.height = "", Ie.call(e, a, se, t));
                };

                xe.call(this, a, se, o), a.style.width = "".concat(r.width, "px"), a.style.height = "".concat(r.height, "px");
              }

              ve(s, !0), ve(n, !1), nt.focusFirstMenuItem.call(this, n, i);
            }
          },
          setDownloadUrl: function setDownloadUrl() {
            var e = this.elements.buttons.download;
            G(e) && e.setAttribute("href", this.download);
          },
          create: function create(e) {
            var t = this,
                i = nt.bindMenuItemShortcuts,
                n = nt.createButton,
                a = nt.createProgress,
                s = nt.createRange,
                r = nt.createTime,
                o = nt.setQualityMenu,
                l = nt.setSpeedMenu,
                c = nt.showMenuPanel;
            this.elements.controls = null, $(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(n.call(this, "play-large"));
            var u = he("div", ye(this.config.selectors.controls.wrapper));
            this.elements.controls = u;
            var d = {
              "class": "plyr__controls__item"
            };
            return Be($(this.config.controls) ? this.config.controls : []).forEach(function (o) {
              if ("restart" === o && u.appendChild(n.call(t, "restart", d)), "rewind" === o && u.appendChild(n.call(t, "rewind", d)), "play" === o && u.appendChild(n.call(t, "play", d)), "fast-forward" === o && u.appendChild(n.call(t, "fast-forward", d)), "progress" === o) {
                var l = he("div", {
                  "class": "".concat(d["class"], " plyr__progress__container")
                }),
                    h = he("div", ye(t.config.selectors.progress));

                if (h.appendChild(s.call(t, "seek", {
                  id: "plyr-seek-".concat(e.id)
                })), h.appendChild(a.call(t, "buffer")), t.config.tooltips.seek) {
                  var p = he("span", {
                    "class": t.config.classNames.tooltip
                  }, "00:00");
                  h.appendChild(p), t.elements.display.seekTooltip = p;
                }

                t.elements.progress = h, l.appendChild(t.elements.progress), u.appendChild(l);
              }

              if ("current-time" === o && u.appendChild(r.call(t, "currentTime", d)), "duration" === o && u.appendChild(r.call(t, "duration", d)), "mute" === o || "volume" === o) {
                var m = t.elements.volume;

                if (G(m) && u.contains(m) || (m = he("div", ce({}, d, {
                  "class": "".concat(d["class"], " plyr__volume").trim()
                })), t.elements.volume = m, u.appendChild(m)), "mute" === o && m.appendChild(n.call(t, "mute")), "volume" === o && !oe.isIos) {
                  var f = {
                    max: 1,
                    step: .05,
                    value: t.config.volume
                  };
                  m.appendChild(s.call(t, "volume", ce(f, {
                    id: "plyr-volume-".concat(e.id)
                  })));
                }
              }

              if ("captions" === o && u.appendChild(n.call(t, "captions", d)), "settings" === o && !ae(t.config.settings)) {
                var g = he("div", ce({}, d, {
                  "class": "".concat(d["class"], " plyr__menu").trim(),
                  hidden: ""
                }));
                g.appendChild(n.call(t, "settings", {
                  "aria-haspopup": !0,
                  "aria-controls": "plyr-settings-".concat(e.id),
                  "aria-expanded": !1
                }));
                var y = he("div", {
                  "class": "plyr__menu__container",
                  id: "plyr-settings-".concat(e.id),
                  hidden: ""
                }),
                    v = he("div"),
                    b = he("div", {
                  id: "plyr-settings-".concat(e.id, "-home")
                }),
                    w = he("div", {
                  role: "menu"
                });
                b.appendChild(w), v.appendChild(b), t.elements.settings.panels.home = b, t.config.settings.forEach(function (n) {
                  var a = he("button", ce(ye(t.config.selectors.buttons.settings), {
                    type: "button",
                    "class": "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"),
                    role: "menuitem",
                    "aria-haspopup": !0,
                    hidden: ""
                  }));
                  i.call(t, a, n), xe.call(t, a, "click", function () {
                    c.call(t, n, !1);
                  });
                  var s = he("span", null, Xe(n, t.config)),
                      r = he("span", {
                    "class": t.config.classNames.menu.value
                  });
                  r.innerHTML = e[n], s.appendChild(r), a.appendChild(s), w.appendChild(a);
                  var o = he("div", {
                    id: "plyr-settings-".concat(e.id, "-").concat(n),
                    hidden: ""
                  }),
                      l = he("button", {
                    type: "button",
                    "class": "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back")
                  });
                  l.appendChild(he("span", {
                    "aria-hidden": !0
                  }, Xe(n, t.config))), l.appendChild(he("span", {
                    "class": t.config.classNames.hidden
                  }, Xe("menuBack", t.config))), xe.call(t, o, "keydown", function (e) {
                    37 === e.which && (e.preventDefault(), e.stopPropagation(), c.call(t, "home", !0));
                  }, !1), xe.call(t, l, "click", function () {
                    c.call(t, "home", !1);
                  }), o.appendChild(l), o.appendChild(he("div", {
                    role: "menu"
                  })), v.appendChild(o), t.elements.settings.buttons[n] = a, t.elements.settings.panels[n] = o;
                }), y.appendChild(v), g.appendChild(y), u.appendChild(g), t.elements.settings.popup = y, t.elements.settings.menu = g;
              }

              if ("pip" === o && Ee.pip && u.appendChild(n.call(t, "pip", d)), "airplay" === o && Ee.airplay && u.appendChild(n.call(t, "airplay", d)), "download" === o) {
                var k = ce({}, d, {
                  element: "a",
                  href: t.download,
                  target: "_blank"
                });
                t.isHTML5 && (k.download = "");
                var T = t.config.urls.download;
                !ne(T) && t.isEmbed && ce(k, {
                  icon: "logo-".concat(t.provider),
                  label: t.provider
                }), u.appendChild(n.call(t, "download", k));
              }

              "fullscreen" === o && u.appendChild(n.call(t, "fullscreen", d));
            }), this.isHTML5 && o.call(this, Ve.getQualityOptions.call(this)), l.call(this), u;
          },
          inject: function inject() {
            var e = this;

            if (this.config.loadSprite) {
              var t = nt.getIconUrl.call(this);
              t.cors && Ge(t.url, "sprite-plyr");
            }

            this.id = Math.floor(1e4 * Math.random());
            var i = null;
            this.elements.controls = null;
            var n = {
              id: this.id,
              seektime: this.config.seekTime,
              title: this.config.title
            },
                a = !0;
            X(this.config.controls) && (this.config.controls = this.config.controls.call(this, n)), this.config.controls || (this.config.controls = []), G(this.config.controls) || Y(this.config.controls) ? i = this.config.controls : (i = nt.create.call(this, {
              id: this.id,
              seektime: this.config.seekTime,
              speed: this.speed,
              quality: this.quality,
              captions: rt.getLabel.call(this)
            }), a = !1);
            var s, r;

            if (a && Y(this.config.controls) && (s = i, Object.entries(n).forEach(function (e) {
              var t = o(e, 2),
                  i = t[0],
                  n = t[1];
              s = We(s, "{".concat(i, "}"), n);
            }), i = s), Y(this.config.selectors.controls.container) && (r = document.querySelector(this.config.selectors.controls.container)), G(r) || (r = this.elements.container), r[G(i) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", i), G(this.elements.controls) || nt.findElements.call(this), !ae(this.elements.buttons)) {
              var l = function l(t) {
                var i = e.config.classNames.controlPressed;
                Object.defineProperty(t, "pressed", {
                  enumerable: !0,
                  get: function get() {
                    return we(t, i);
                  },
                  set: function set() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    be(t, i, e);
                  }
                });
              };

              Object.values(this.elements.buttons).filter(Boolean).forEach(function (e) {
                $(e) || J(e) ? Array.from(e).filter(Boolean).forEach(l) : l(e);
              });
            }

            if (oe.isEdge && re(r), this.config.tooltips.controls) {
              var c = this.config,
                  u = c.classNames,
                  d = c.selectors,
                  h = "".concat(d.controls.wrapper, " ").concat(d.labels, " .").concat(u.hidden),
                  p = Te.call(this, h);
              Array.from(p).forEach(function (t) {
                be(t, e.config.classNames.hidden, !1), be(t, e.config.classNames.tooltip, !0);
              });
            }
          }
        };

        function at(e) {
          var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              i = e;

          if (t) {
            var n = document.createElement("a");
            n.href = i, i = n.href;
          }

          try {
            return new URL(i);
          } catch (e) {
            return null;
          }
        }

        function st(e) {
          var t = new URLSearchParams();
          return z(e) && Object.entries(e).forEach(function (e) {
            var i = o(e, 2),
                n = i[0],
                a = i[1];
            t.set(n, a);
          }), t;
        }

        var rt = {
          setup: function setup() {
            if (this.supported.ui) if (!this.isVideo || this.isYouTube || this.isHTML5 && !Ee.textTracks) $(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && nt.setCaptionsMenu.call(this);else {
              if (G(this.elements.captions) || (this.elements.captions = he("div", ye(this.config.selectors.captions)), function (e, t) {
                G(e) && G(t) && t.parentNode.insertBefore(e, t.nextSibling);
              }(this.elements.captions, this.elements.wrapper)), oe.isIE && window.URL) {
                var e = this.media.querySelectorAll("track");
                Array.from(e).forEach(function (e) {
                  var t = e.getAttribute("src"),
                      i = at(t);
                  null !== i && i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && Je(t, "blob").then(function (t) {
                    e.setAttribute("src", window.URL.createObjectURL(t));
                  })["catch"](function () {
                    me(e);
                  });
                });
              }

              var t = Be((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(function (e) {
                return e.split("-")[0];
              })),
                  i = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
              if ("auto" === i) i = o(t, 1)[0];
              var n = this.storage.get("captions");

              if (Q(n) || (n = this.config.captions.active), Object.assign(this.captions, {
                toggled: !1,
                active: n,
                language: i,
                languages: t
              }), this.isHTML5) {
                var a = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                xe.call(this, this.media.textTracks, a, rt.update.bind(this));
              }

              setTimeout(rt.update.bind(this), 0);
            }
          },
          update: function update() {
            var e = this,
                t = rt.getTracks.call(this, !0),
                i = this.captions,
                n = i.active,
                a = i.language,
                s = i.meta,
                r = i.currentTrackNode,
                o = Boolean(t.find(function (e) {
              return e.language === a;
            }));
            this.isHTML5 && this.isVideo && t.filter(function (e) {
              return !s.get(e);
            }).forEach(function (t) {
              e.debug.log("Track added", t), s.set(t, {
                "default": "showing" === t.mode
              }), "showing" === t.mode && (t.mode = "hidden"), xe.call(e, t, "cuechange", function () {
                return rt.updateCues.call(e);
              });
            }), (o && this.language !== a || !t.includes(r)) && (rt.setLanguage.call(this, a), rt.toggle.call(this, n && o)), be(this.elements.container, this.config.classNames.captions.enabled, !ae(t)), $(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && nt.setCaptionsMenu.call(this);
          },
          toggle: function toggle(e) {
            var t = this,
                i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];

            if (this.supported.ui) {
              var n = this.captions.toggled,
                  a = this.config.classNames.captions.active,
                  s = W(e) ? !n : e;

              if (s !== n) {
                if (i || (this.captions.active = s, this.storage.set({
                  captions: s
                })), !this.language && s && !i) {
                  var r = rt.getTracks.call(this),
                      o = rt.findTrack.call(this, [this.captions.language].concat(l(this.captions.languages)), !0);
                  return this.captions.language = o.language, void rt.set.call(this, r.indexOf(o));
                }

                this.elements.buttons.captions && (this.elements.buttons.captions.pressed = s), be(this.elements.container, a, s), this.captions.toggled = s, nt.updateSetting.call(this, "captions"), Oe.call(this, this.media, s ? "captionsenabled" : "captionsdisabled");
              }

              setTimeout(function () {
                s && t.captions.toggled && (t.captions.currentTrackNode.mode = "hidden");
              });
            }
          },
          set: function set(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                i = rt.getTracks.call(this);
            if (-1 !== e) {
              if (K(e)) {
                if (e in i) {
                  if (this.captions.currentTrack !== e) {
                    this.captions.currentTrack = e;
                    var n = i[e],
                        a = n || {},
                        s = a.language;
                    this.captions.currentTrackNode = n, nt.updateSetting.call(this, "captions"), t || (this.captions.language = s, this.storage.set({
                      language: s
                    })), this.isVimeo && this.embed.enableTextTrack(s), Oe.call(this, this.media, "languagechange");
                  }

                  rt.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && rt.updateCues.call(this);
                } else this.debug.warn("Track not found", e);
              } else this.debug.warn("Invalid caption argument", e);
            } else rt.toggle.call(this, !1, t);
          },
          setLanguage: function setLanguage(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];

            if (Y(e)) {
              var i = e.toLowerCase();
              this.captions.language = i;
              var n = rt.getTracks.call(this),
                  a = rt.findTrack.call(this, [i]);
              rt.set.call(this, n.indexOf(a), t);
            } else this.debug.warn("Invalid language argument", e);
          },
          getTracks: function getTracks() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                i = Array.from((this.media || {}).textTracks || []);
            return i.filter(function (i) {
              return !e.isHTML5 || t || e.captions.meta.has(i);
            }).filter(function (e) {
              return ["captions", "subtitles"].includes(e.kind);
            });
          },
          findTrack: function findTrack(e) {
            var t,
                i = this,
                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                a = rt.getTracks.call(this),
                s = function s(e) {
              return Number((i.captions.meta.get(e) || {})["default"]);
            },
                r = Array.from(a).sort(function (e, t) {
              return s(t) - s(e);
            });

            return e.every(function (e) {
              return !(t = r.find(function (t) {
                return t.language === e;
              }));
            }), t || (n ? r[0] : void 0);
          },
          getCurrentTrack: function getCurrentTrack() {
            return rt.getTracks.call(this)[this.currentTrack];
          },
          getLabel: function getLabel(e) {
            var t = e;
            return !te(t) && Ee.textTracks && this.captions.toggled && (t = rt.getCurrentTrack.call(this)), te(t) ? ae(t.label) ? ae(t.language) ? Xe("enabled", this.config) : e.language.toUpperCase() : t.label : Xe("disabled", this.config);
          },
          updateCues: function updateCues(e) {
            if (this.supported.ui) if (G(this.elements.captions)) {
              if (W(e) || Array.isArray(e)) {
                var t = e;

                if (!t) {
                  var i = rt.getCurrentTrack.call(this);
                  t = Array.from((i || {}).activeCues || []).map(function (e) {
                    return e.getCueAsHTML();
                  }).map(Ye);
                }

                var n = t.map(function (e) {
                  return e.trim();
                }).join("\n");

                if (n !== this.elements.captions.innerHTML) {
                  fe(this.elements.captions);
                  var a = he("span", ye(this.config.selectors.caption));
                  a.innerHTML = n, this.elements.captions.appendChild(a), Oe.call(this, this.media, "cuechange");
                }
              } else this.debug.warn("updateCues: Invalid input", e);
            } else this.debug.warn("No captions element to render to");
          }
        },
            ot = {
          enabled: !0,
          title: "",
          debug: !1,
          autoplay: !1,
          autopause: !0,
          playsinline: !0,
          seekTime: 10,
          volume: 1,
          muted: !1,
          duration: null,
          displayDuration: !0,
          invertTime: !0,
          toggleInvert: !0,
          ratio: null,
          clickToPlay: !0,
          hideControls: !0,
          resetOnEnd: !1,
          disableContextMenu: !0,
          loadSprite: !0,
          iconPrefix: "plyr",
          iconUrl: "https://cdn.plyr.io/3.6.2/plyr.svg",
          blankVideo: "https://cdn.plyr.io/static/blank.mp4",
          quality: {
            "default": 576,
            options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
            forced: !1,
            onChange: null
          },
          loop: {
            active: !1
          },
          speed: {
            selected: 1,
            options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
          },
          keyboard: {
            focused: !0,
            global: !1
          },
          tooltips: {
            controls: !1,
            seek: !0
          },
          captions: {
            active: !1,
            language: "auto",
            update: !1
          },
          fullscreen: {
            enabled: !0,
            fallback: !0,
            iosNative: !1
          },
          storage: {
            enabled: !0,
            key: "plyr"
          },
          controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
          settings: ["captions", "quality", "speed"],
          i18n: {
            restart: "Restart",
            rewind: "Rewind {seektime}s",
            play: "Play",
            pause: "Pause",
            fastForward: "Forward {seektime}s",
            seek: "Seek",
            seekLabel: "{currentTime} of {duration}",
            played: "Played",
            buffered: "Buffered",
            currentTime: "Current time",
            duration: "Duration",
            volume: "Volume",
            mute: "Mute",
            unmute: "Unmute",
            enableCaptions: "Enable captions",
            disableCaptions: "Disable captions",
            download: "Download",
            enterFullscreen: "Enter fullscreen",
            exitFullscreen: "Exit fullscreen",
            frameTitle: "Player for {title}",
            captions: "Captions",
            settings: "Settings",
            pip: "PIP",
            menuBack: "Go back to previous menu",
            speed: "Speed",
            normal: "Normal",
            quality: "Quality",
            loop: "Loop",
            start: "Start",
            end: "End",
            all: "All",
            reset: "Reset",
            disabled: "Disabled",
            enabled: "Enabled",
            advertisement: "Ad",
            qualityBadge: {
              2160: "4K",
              1440: "HD",
              1080: "HD",
              720: "HD",
              576: "SD",
              480: "SD"
            }
          },
          urls: {
            download: null,
            vimeo: {
              sdk: "https://player.vimeo.com/api/player.js",
              iframe: "https://player.vimeo.com/video/{0}?{1}",
              api: "https://vimeo.com/api/v2/video/{0}.json"
            },
            youtube: {
              sdk: "https://www.youtube.com/iframe_api",
              api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
            },
            googleIMA: {
              sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
            }
          },
          listeners: {
            seek: null,
            play: null,
            pause: null,
            restart: null,
            rewind: null,
            fastForward: null,
            mute: null,
            volume: null,
            captions: null,
            download: null,
            fullscreen: null,
            pip: null,
            airplay: null,
            speed: null,
            quality: null,
            loop: null,
            language: null
          },
          events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
          selectors: {
            editable: "input, textarea, select, [contenteditable]",
            container: ".plyr",
            controls: {
              container: null,
              wrapper: ".plyr__controls"
            },
            labels: "[data-plyr]",
            buttons: {
              play: '[data-plyr="play"]',
              pause: '[data-plyr="pause"]',
              restart: '[data-plyr="restart"]',
              rewind: '[data-plyr="rewind"]',
              fastForward: '[data-plyr="fast-forward"]',
              mute: '[data-plyr="mute"]',
              captions: '[data-plyr="captions"]',
              download: '[data-plyr="download"]',
              fullscreen: '[data-plyr="fullscreen"]',
              pip: '[data-plyr="pip"]',
              airplay: '[data-plyr="airplay"]',
              settings: '[data-plyr="settings"]',
              loop: '[data-plyr="loop"]'
            },
            inputs: {
              seek: '[data-plyr="seek"]',
              volume: '[data-plyr="volume"]',
              speed: '[data-plyr="speed"]',
              language: '[data-plyr="language"]',
              quality: '[data-plyr="quality"]'
            },
            display: {
              currentTime: ".plyr__time--current",
              duration: ".plyr__time--duration",
              buffer: ".plyr__progress__buffer",
              loop: ".plyr__progress__loop",
              volume: ".plyr__volume--display"
            },
            progress: ".plyr__progress",
            captions: ".plyr__captions",
            caption: ".plyr__caption"
          },
          classNames: {
            type: "plyr--{0}",
            provider: "plyr--{0}",
            video: "plyr__video-wrapper",
            embed: "plyr__video-embed",
            videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
            embedContainer: "plyr__video-embed__container",
            poster: "plyr__poster",
            posterEnabled: "plyr__poster-enabled",
            ads: "plyr__ads",
            control: "plyr__control",
            controlPressed: "plyr__control--pressed",
            playing: "plyr--playing",
            paused: "plyr--paused",
            stopped: "plyr--stopped",
            loading: "plyr--loading",
            hover: "plyr--hover",
            tooltip: "plyr__tooltip",
            cues: "plyr__cues",
            hidden: "plyr__sr-only",
            hideControls: "plyr--hide-controls",
            isIos: "plyr--is-ios",
            isTouch: "plyr--is-touch",
            uiSupported: "plyr--full-ui",
            noTransition: "plyr--no-transition",
            display: {
              time: "plyr__time"
            },
            menu: {
              value: "plyr__menu__value",
              badge: "plyr__badge",
              open: "plyr--menu-open"
            },
            captions: {
              enabled: "plyr--captions-enabled",
              active: "plyr--captions-active"
            },
            fullscreen: {
              enabled: "plyr--fullscreen-enabled",
              fallback: "plyr--fullscreen-fallback"
            },
            pip: {
              supported: "plyr--pip-supported",
              active: "plyr--pip-active"
            },
            airplay: {
              supported: "plyr--airplay-supported",
              active: "plyr--airplay-active"
            },
            tabFocus: "plyr__tab-focus",
            previewThumbnails: {
              thumbContainer: "plyr__preview-thumb",
              thumbContainerShown: "plyr__preview-thumb--is-shown",
              imageContainer: "plyr__preview-thumb__image-container",
              timeContainer: "plyr__preview-thumb__time-container",
              scrubbingContainer: "plyr__preview-scrubbing",
              scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
            }
          },
          attributes: {
            embed: {
              provider: "data-plyr-provider",
              id: "data-plyr-embed-id"
            }
          },
          ads: {
            enabled: !1,
            publisherId: "",
            tagUrl: ""
          },
          previewThumbnails: {
            enabled: !1,
            src: ""
          },
          vimeo: {
            byline: !1,
            portrait: !1,
            title: !1,
            speed: !0,
            transparent: !1,
            premium: !1,
            referrerPolicy: null
          },
          youtube: {
            noCookie: !0,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            modestbranding: 1
          }
        },
            lt = "picture-in-picture",
            ct = "inline",
            ut = {
          html5: "html5",
          youtube: "youtube",
          vimeo: "vimeo"
        },
            dt = "audio",
            ht = "video";

        var pt = function pt() {},
            mt = function () {
          function t() {
            var i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e(this, t), this.enabled = window.console && i, this.enabled && this.log("Debugging enabled");
          }

          return i(t, [{
            key: "log",
            get: function get() {
              return this.enabled ? Function.prototype.bind.call(console.log, console) : pt;
            }
          }, {
            key: "warn",
            get: function get() {
              return this.enabled ? Function.prototype.bind.call(console.warn, console) : pt;
            }
          }, {
            key: "error",
            get: function get() {
              return this.enabled ? Function.prototype.bind.call(console.error, console) : pt;
            }
          }]), t;
        }(),
            ft = function () {
          function t(i) {
            var n = this;
            e(this, t), this.player = i, this.prefix = t.prefix, this.property = t.property, this.scrollPosition = {
              x: 0,
              y: 0
            }, this.forceFallback = "force" === i.config.fullscreen.fallback, this.player.elements.fullscreen = i.config.fullscreen.container && function (e, t) {
              return (Element.prototype.closest || function () {
                var e = this;

                do {
                  if (ke.matches(e, t)) return e;
                  e = e.parentElement || e.parentNode;
                } while (null !== e && 1 === e.nodeType);

                return null;
              }).call(e, t);
            }(this.player.elements.container, i.config.fullscreen.container), xe.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), function () {
              n.onChange();
            }), xe.call(this.player, this.player.elements.container, "dblclick", function (e) {
              G(n.player.elements.controls) && n.player.elements.controls.contains(e.target) || n.toggle();
            }), xe.call(this, this.player.elements.container, "keydown", function (e) {
              return n.trapFocus(e);
            }), this.update();
          }

          return i(t, [{
            key: "onChange",
            value: function value() {
              if (this.enabled) {
                var e = this.player.elements.buttons.fullscreen;
                G(e) && (e.pressed = this.active), Oe.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0);
              }
            }
          }, {
            key: "toggleFallback",
            value: function value() {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

              if (e ? this.scrollPosition = {
                x: window.scrollX || 0,
                y: window.scrollY || 0
              } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", be(this.target, this.player.config.classNames.fullscreen.fallback, e), oe.isIos) {
                var t = document.head.querySelector('meta[name="viewport"]'),
                    i = "viewport-fit=cover";
                t || (t = document.createElement("meta")).setAttribute("name", "viewport");
                var n = Y(t.content) && t.content.includes(i);
                e ? (this.cleanupViewport = !n, n || (t.content += ",".concat(i))) : this.cleanupViewport && (t.content = t.content.split(",").filter(function (e) {
                  return e.trim() !== i;
                }).join(","));
              }

              this.onChange();
            }
          }, {
            key: "trapFocus",
            value: function value(e) {
              if (!oe.isIos && this.active && "Tab" === e.key && 9 === e.keyCode) {
                var t = document.activeElement,
                    i = Te.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                    n = o(i, 1)[0],
                    a = i[i.length - 1];
                t !== a || e.shiftKey ? t === n && e.shiftKey && (a.focus(), e.preventDefault()) : (n.focus(), e.preventDefault());
              }
            }
          }, {
            key: "update",
            value: function value() {
              var e;
              this.enabled ? (e = this.forceFallback ? "Fallback (forced)" : t["native"] ? "Native" : "Fallback", this.player.debug.log("".concat(e, " fullscreen enabled"))) : this.player.debug.log("Fullscreen not supported and fallback disabled");
              be(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled);
            }
          }, {
            key: "enter",
            value: function value() {
              this.enabled && (oe.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : !t["native"] || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? ae(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen({
                navigationUI: "hide"
              }));
            }
          }, {
            key: "exit",
            value: function value() {
              if (this.enabled) if (oe.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), qe(this.player.play());else if (!t["native"] || this.forceFallback) this.toggleFallback(!1);else if (this.prefix) {
                if (!ae(this.prefix)) {
                  var e = "moz" === this.prefix ? "Cancel" : "Exit";
                  document["".concat(this.prefix).concat(e).concat(this.property)]();
                }
              } else (document.cancelFullScreen || document.exitFullscreen).call(document);
            }
          }, {
            key: "toggle",
            value: function value() {
              this.active ? this.exit() : this.enter();
            }
          }, {
            key: "usingNative",
            get: function get() {
              return t["native"] && !this.forceFallback;
            }
          }, {
            key: "enabled",
            get: function get() {
              return (t["native"] || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
            }
          }, {
            key: "active",
            get: function get() {
              if (!this.enabled) return !1;
              if (!t["native"] || this.forceFallback) return we(this.target, this.player.config.classNames.fullscreen.fallback);
              var e = this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement;
              return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target;
            }
          }, {
            key: "target",
            get: function get() {
              return oe.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container;
            }
          }], [{
            key: "native",
            get: function get() {
              return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
            }
          }, {
            key: "prefix",
            get: function get() {
              if (X(document.exitFullscreen)) return "";
              var e = "";
              return ["webkit", "moz", "ms"].some(function (t) {
                return !(!X(document["".concat(t, "ExitFullscreen")]) && !X(document["".concat(t, "CancelFullScreen")])) && (e = t, !0);
              }), e;
            }
          }, {
            key: "property",
            get: function get() {
              return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
            }
          }]), t;
        }();

        function gt(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          return new Promise(function (i, n) {
            var a = new Image(),
                s = function s() {
              delete a.onload, delete a.onerror, (a.naturalWidth >= t ? i : n)(a);
            };

            Object.assign(a, {
              onload: s,
              onerror: s,
              src: e
            });
          });
        }

        var yt = {
          addStyleHook: function addStyleHook() {
            be(this.elements.container, this.config.selectors.container.replace(".", ""), !0), be(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
          },
          toggleNativeControls: function toggleNativeControls() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
          },
          build: function build() {
            var e = this;
            if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void yt.toggleNativeControls.call(this, !0);
            G(this.elements.controls) || (nt.inject.call(this), this.listeners.controls()), yt.toggleNativeControls.call(this), this.isHTML5 && rt.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, nt.updateVolume.call(this), nt.timeUpdate.call(this), yt.checkPlaying.call(this), be(this.elements.container, this.config.classNames.pip.supported, Ee.pip && this.isHTML5 && this.isVideo), be(this.elements.container, this.config.classNames.airplay.supported, Ee.airplay && this.isHTML5), be(this.elements.container, this.config.classNames.isIos, oe.isIos), be(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function () {
              Oe.call(e, e.media, "ready");
            }, 0), yt.setTitle.call(this), this.poster && yt.setPoster.call(this, this.poster, !1)["catch"](function () {}), this.config.duration && nt.durationUpdate.call(this);
          },
          setTitle: function setTitle() {
            var e = Xe("play", this.config);

            if (Y(this.config.title) && !ae(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach(function (t) {
              t.setAttribute("aria-label", e);
            }), this.isEmbed) {
              var t = Ce.call(this, "iframe");
              if (!G(t)) return;
              var i = ae(this.config.title) ? "video" : this.config.title,
                  n = Xe("frameTitle", this.config);
              t.setAttribute("title", n.replace("{title}", i));
            }
          },
          togglePoster: function togglePoster(e) {
            be(this.elements.container, this.config.classNames.posterEnabled, e);
          },
          setPoster: function setPoster(e) {
            var t = this,
                i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return i && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), je.call(this).then(function () {
              return gt(e);
            })["catch"](function (i) {
              throw e === t.poster && yt.togglePoster.call(t, !1), i;
            }).then(function () {
              if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster");
            }).then(function () {
              return Object.assign(t.elements.poster.style, {
                backgroundImage: "url('".concat(e, "')"),
                backgroundSize: ""
              }), yt.togglePoster.call(t, !0), e;
            }));
          },
          checkPlaying: function checkPlaying(e) {
            var t = this;
            be(this.elements.container, this.config.classNames.playing, this.playing), be(this.elements.container, this.config.classNames.paused, this.paused), be(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function (e) {
              Object.assign(e, {
                pressed: t.playing
              }), e.setAttribute("aria-label", Xe(t.playing ? "pause" : "play", t.config));
            }), Z(e) && "timeupdate" === e.type || yt.toggleControls.call(this);
          },
          checkLoading: function checkLoading(e) {
            var t = this;
            this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function () {
              be(t.elements.container, t.config.classNames.loading, t.loading), yt.toggleControls.call(t);
            }, this.loading ? 250 : 0);
          },
          toggleControls: function toggleControls(e) {
            var t = this.elements.controls;

            if (t && this.config.hideControls) {
              var i = this.touch && this.lastSeekTime + 2e3 > Date.now();
              this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || i));
            }
          },
          migrateStyles: function migrateStyles() {
            var e = this;
            Object.values(s({}, this.media.style)).filter(function (e) {
              return !ae(e) && e.startsWith("--plyr");
            }).forEach(function (t) {
              e.elements.container.style.setProperty(t, e.media.style.getPropertyValue(t)), e.media.style.removeProperty(t);
            }), ae(this.media.style) && this.media.removeAttribute("style");
          }
        },
            vt = function () {
          function t(i) {
            e(this, t), this.player = i, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this);
          }

          return i(t, [{
            key: "handleKey",
            value: function value(e) {
              var t = this.player,
                  i = t.elements,
                  n = e.keyCode ? e.keyCode : e.which,
                  a = "keydown" === e.type,
                  s = a && n === this.lastKey;

              if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && K(n)) {
                if (a) {
                  var r = document.activeElement;

                  if (G(r)) {
                    var o = t.config.selectors.editable;
                    if (r !== i.inputs.seek && ke(r, o)) return;
                    if (32 === e.which && ke(r, 'button, [role^="menuitem"]')) return;
                  }

                  switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(n) && (e.preventDefault(), e.stopPropagation()), n) {
                    case 48:
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                      s || (t.currentTime = t.duration / 10 * (n - 48));
                      break;

                    case 32:
                    case 75:
                      s || qe(t.togglePlay());
                      break;

                    case 38:
                      t.increaseVolume(.1);
                      break;

                    case 40:
                      t.decreaseVolume(.1);
                      break;

                    case 77:
                      s || (t.muted = !t.muted);
                      break;

                    case 39:
                      t.forward();
                      break;

                    case 37:
                      t.rewind();
                      break;

                    case 70:
                      t.fullscreen.toggle();
                      break;

                    case 67:
                      s || t.toggleCaptions();
                      break;

                    case 76:
                      t.loop = !t.loop;
                  }

                  27 === n && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = n;
                } else this.lastKey = null;
              }
            }
          }, {
            key: "toggleMenu",
            value: function value(e) {
              nt.toggleMenu.call(this.player, e);
            }
          }, {
            key: "firstTouch",
            value: function value() {
              var e = this.player,
                  t = e.elements;
              e.touch = !0, be(t.container, e.config.classNames.isTouch, !0);
            }
          }, {
            key: "setTabFocus",
            value: function value(e) {
              var t = this.player,
                  i = t.elements;

              if (clearTimeout(this.focusTimer), "keydown" !== e.type || 9 === e.which) {
                "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
                var n,
                    a = e.timeStamp - this.lastKeyDown <= 20;
                if ("focus" !== e.type || a) n = t.config.classNames.tabFocus, be(Te.call(t, ".".concat(n)), n, !1), "focusout" !== e.type && (this.focusTimer = setTimeout(function () {
                  var e = document.activeElement;
                  i.container.contains(e) && be(document.activeElement, t.config.classNames.tabFocus, !0);
                }, 10));
              }
            }
          }, {
            key: "global",
            value: function value() {
              var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                  t = this.player;
              t.config.keyboard.global && Me.call(t, window, "keydown keyup", this.handleKey, e, !1), Me.call(t, document.body, "click", this.toggleMenu, e), Le.call(t, document.body, "touchstart", this.firstTouch), Me.call(t, document.body, "keydown focus blur focusout", this.setTabFocus, e, !1, !0);
            }
          }, {
            key: "container",
            value: function value() {
              var e = this.player,
                  t = e.config,
                  i = e.elements,
                  n = e.timers;
              !t.keyboard.global && t.keyboard.focused && xe.call(e, i.container, "keydown keyup", this.handleKey, !1), xe.call(e, i.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function (t) {
                var a = i.controls;
                a && "enterfullscreen" === t.type && (a.pressed = !1, a.hover = !1);
                var s = 0;
                ["touchstart", "touchmove", "mousemove"].includes(t.type) && (yt.toggleControls.call(e, !0), s = e.touch ? 3e3 : 2e3), clearTimeout(n.controls), n.controls = setTimeout(function () {
                  return yt.toggleControls.call(e, !1);
                }, s);
              });

              var a = function a(t) {
                if (!t) return Re.call(e);
                var n = i.container.getBoundingClientRect(),
                    a = n.width,
                    s = n.height;
                return Re.call(e, "".concat(a, ":").concat(s));
              },
                  s = function s() {
                clearTimeout(n.resized), n.resized = setTimeout(a, 50);
              };

              xe.call(e, i.container, "enterfullscreen exitfullscreen", function (t) {
                var n = e.fullscreen,
                    r = n.target,
                    l = n.usingNative;

                if (r === i.container && (e.isEmbed || !ae(e.config.ratio))) {
                  var c = "enterfullscreen" === t.type,
                      u = a(c);
                  u.padding;
                  !function (t, i, n) {
                    if (e.isVimeo && !e.config.vimeo.premium) {
                      var a = e.elements.wrapper.firstChild,
                          s = o(t, 2)[1],
                          r = o(Fe.call(e), 2),
                          l = r[0],
                          c = r[1];
                      a.style.maxWidth = n ? "".concat(s / c * l, "px") : null, a.style.margin = n ? "0 auto" : null;
                    }
                  }(u.ratio, 0, c), l || (c ? xe.call(e, window, "resize", s) : Ie.call(e, window, "resize", s));
                }
              });
            }
          }, {
            key: "media",
            value: function value() {
              var e = this,
                  t = this.player,
                  i = t.elements;

              if (xe.call(t, t.media, "timeupdate seeking seeked", function (e) {
                return nt.timeUpdate.call(t, e);
              }), xe.call(t, t.media, "durationchange loadeddata loadedmetadata", function (e) {
                return nt.durationUpdate.call(t, e);
              }), xe.call(t, t.media, "ended", function () {
                t.isHTML5 && t.isVideo && t.config.resetOnEnd && (t.restart(), t.pause());
              }), xe.call(t, t.media, "progress playing seeking seeked", function (e) {
                return nt.updateProgress.call(t, e);
              }), xe.call(t, t.media, "volumechange", function (e) {
                return nt.updateVolume.call(t, e);
              }), xe.call(t, t.media, "playing play pause ended emptied timeupdate", function (e) {
                return yt.checkPlaying.call(t, e);
              }), xe.call(t, t.media, "waiting canplay seeked playing", function (e) {
                return yt.checkLoading.call(t, e);
              }), t.supported.ui && t.config.clickToPlay && !t.isAudio) {
                var n = Ce.call(t, ".".concat(t.config.classNames.video));
                if (!G(n)) return;
                xe.call(t, i.container, "click", function (a) {
                  ([i.container, n].includes(a.target) || n.contains(a.target)) && (t.touch && t.config.hideControls || (t.ended ? (e.proxy(a, t.restart, "restart"), e.proxy(a, function () {
                    qe(t.play());
                  }, "play")) : e.proxy(a, function () {
                    qe(t.togglePlay());
                  }, "play")));
                });
              }

              t.supported.ui && t.config.disableContextMenu && xe.call(t, i.wrapper, "contextmenu", function (e) {
                e.preventDefault();
              }, !1), xe.call(t, t.media, "volumechange", function () {
                t.storage.set({
                  volume: t.volume,
                  muted: t.muted
                });
              }), xe.call(t, t.media, "ratechange", function () {
                nt.updateSetting.call(t, "speed"), t.storage.set({
                  speed: t.speed
                });
              }), xe.call(t, t.media, "qualitychange", function (e) {
                nt.updateSetting.call(t, "quality", null, e.detail.quality);
              }), xe.call(t, t.media, "ready qualitychange", function () {
                nt.setDownloadUrl.call(t);
              });
              var a = t.config.events.concat(["keyup", "keydown"]).join(" ");
              xe.call(t, t.media, a, function (e) {
                var n = e.detail,
                    a = void 0 === n ? {} : n;
                "error" === e.type && (a = t.media.error), Oe.call(t, i.container, e.type, !0, a);
              });
            }
          }, {
            key: "proxy",
            value: function value(e, t, i) {
              var n = this.player,
                  a = n.config.listeners[i],
                  s = !0;
              X(a) && (s = a.call(n, e)), !1 !== s && X(t) && t.call(n, e);
            }
          }, {
            key: "bind",
            value: function value(e, t, i, n) {
              var a = this,
                  s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                  r = this.player,
                  o = r.config.listeners[n],
                  l = X(o);
              xe.call(r, e, t, function (e) {
                return a.proxy(e, i, n);
              }, s && !l);
            }
          }, {
            key: "controls",
            value: function value() {
              var e = this,
                  t = this.player,
                  i = t.elements,
                  n = oe.isIE ? "change" : "input";

              if (i.buttons.play && Array.from(i.buttons.play).forEach(function (i) {
                e.bind(i, "click", function () {
                  qe(t.togglePlay());
                }, "play");
              }), this.bind(i.buttons.restart, "click", t.restart, "restart"), this.bind(i.buttons.rewind, "click", t.rewind, "rewind"), this.bind(i.buttons.fastForward, "click", t.forward, "fastForward"), this.bind(i.buttons.mute, "click", function () {
                t.muted = !t.muted;
              }, "mute"), this.bind(i.buttons.captions, "click", function () {
                return t.toggleCaptions();
              }), this.bind(i.buttons.download, "click", function () {
                Oe.call(t, t.media, "download");
              }, "download"), this.bind(i.buttons.fullscreen, "click", function () {
                t.fullscreen.toggle();
              }, "fullscreen"), this.bind(i.buttons.pip, "click", function () {
                t.pip = "toggle";
              }, "pip"), this.bind(i.buttons.airplay, "click", t.airplay, "airplay"), this.bind(i.buttons.settings, "click", function (e) {
                e.stopPropagation(), e.preventDefault(), nt.toggleMenu.call(t, e);
              }, null, !1), this.bind(i.buttons.settings, "keyup", function (e) {
                var i = e.which;
                [13, 32].includes(i) && (13 !== i ? (e.preventDefault(), e.stopPropagation(), nt.toggleMenu.call(t, e)) : nt.focusFirstMenuItem.call(t, null, !0));
              }, null, !1), this.bind(i.settings.menu, "keydown", function (e) {
                27 === e.which && nt.toggleMenu.call(t, e);
              }), this.bind(i.inputs.seek, "mousedown mousemove", function (e) {
                var t = i.progress.getBoundingClientRect(),
                    n = 100 / t.width * (e.pageX - t.left);
                e.currentTarget.setAttribute("seek-value", n);
              }), this.bind(i.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function (e) {
                var i = e.currentTarget,
                    n = e.keyCode ? e.keyCode : e.which;

                if (!ee(e) || 39 === n || 37 === n) {
                  t.lastSeekTime = Date.now();
                  var a = i.hasAttribute("play-on-seeked"),
                      s = ["mouseup", "touchend", "keyup"].includes(e.type);
                  a && s ? (i.removeAttribute("play-on-seeked"), qe(t.play())) : !s && t.playing && (i.setAttribute("play-on-seeked", ""), t.pause());
                }
              }), oe.isIos) {
                var a = Te.call(t, 'input[type="range"]');
                Array.from(a).forEach(function (t) {
                  return e.bind(t, n, function (e) {
                    return re(e.target);
                  });
                });
              }

              this.bind(i.inputs.seek, n, function (e) {
                var i = e.currentTarget,
                    n = i.getAttribute("seek-value");
                ae(n) && (n = i.value), i.removeAttribute("seek-value"), t.currentTime = n / i.max * t.duration;
              }, "seek"), this.bind(i.progress, "mouseenter mouseleave mousemove", function (e) {
                return nt.updateSeekTooltip.call(t, e);
              }), this.bind(i.progress, "mousemove touchmove", function (e) {
                var i = t.previewThumbnails;
                i && i.loaded && i.startMove(e);
              }), this.bind(i.progress, "mouseleave touchend click", function () {
                var e = t.previewThumbnails;
                e && e.loaded && e.endMove(!1, !0);
              }), this.bind(i.progress, "mousedown touchstart", function (e) {
                var i = t.previewThumbnails;
                i && i.loaded && i.startScrubbing(e);
              }), this.bind(i.progress, "mouseup touchend", function (e) {
                var i = t.previewThumbnails;
                i && i.loaded && i.endScrubbing(e);
              }), oe.isWebkit && Array.from(Te.call(t, 'input[type="range"]')).forEach(function (i) {
                e.bind(i, "input", function (e) {
                  return nt.updateRangeFill.call(t, e.target);
                });
              }), t.config.toggleInvert && !G(i.display.duration) && this.bind(i.display.currentTime, "click", function () {
                0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime, nt.timeUpdate.call(t));
              }), this.bind(i.inputs.volume, n, function (e) {
                t.volume = e.target.value;
              }, "volume"), this.bind(i.controls, "mouseenter mouseleave", function (e) {
                i.controls.hover = !t.touch && "mouseenter" === e.type;
              }), i.fullscreen && Array.from(i.fullscreen.children).filter(function (e) {
                return !e.contains(i.container);
              }).forEach(function (n) {
                e.bind(n, "mouseenter mouseleave", function (e) {
                  i.controls.hover = !t.touch && "mouseenter" === e.type;
                });
              }), this.bind(i.controls, "mousedown mouseup touchstart touchend touchcancel", function (e) {
                i.controls.pressed = ["mousedown", "touchstart"].includes(e.type);
              }), this.bind(i.controls, "focusin", function () {
                var n = t.config,
                    a = t.timers;
                be(i.controls, n.classNames.noTransition, !0), yt.toggleControls.call(t, !0), setTimeout(function () {
                  be(i.controls, n.classNames.noTransition, !1);
                }, 0);
                var s = e.touch ? 3e3 : 4e3;
                clearTimeout(a.controls), a.controls = setTimeout(function () {
                  return yt.toggleControls.call(t, !1);
                }, s);
              }), this.bind(i.inputs.volume, "wheel", function (e) {
                var i = e.webkitDirectionInvertedFromDevice,
                    n = o([e.deltaX, -e.deltaY].map(function (e) {
                  return i ? -e : e;
                }), 2),
                    a = n[0],
                    s = n[1],
                    r = Math.sign(Math.abs(a) > Math.abs(s) ? a : s);
                t.increaseVolume(r / 50);
                var l = t.media.volume;
                (1 === r && l < 1 || -1 === r && l > 0) && e.preventDefault();
              }, "volume", !1);
            }
          }]), t;
        }();

        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

        var bt = function (e, t) {
          return e(t = {
            exports: {}
          }, t.exports), t.exports;
        }(function (e, t) {
          e.exports = function () {
            var e = function e() {},
                t = {},
                i = {},
                n = {};

            function a(e, t) {
              if (e) {
                var a = n[e];
                if (i[e] = t, a) for (; a.length;) {
                  a[0](e, t), a.splice(0, 1);
                }
              }
            }

            function s(t, i) {
              t.call && (t = {
                success: t
              }), i.length ? (t.error || e)(i) : (t.success || e)(t);
            }

            function r(t, i, n, a) {
              var s,
                  o,
                  l = document,
                  c = n.async,
                  u = (n.numRetries || 0) + 1,
                  d = n.before || e,
                  h = t.replace(/[\?|#].*$/, ""),
                  p = t.replace(/^(css|img)!/, "");
              a = a || 0, /(^css!|\.css$)/.test(h) ? ((o = l.createElement("link")).rel = "stylesheet", o.href = p, (s = "hideFocus" in o) && o.relList && (s = 0, o.rel = "preload", o.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h) ? (o = l.createElement("img")).src = p : ((o = l.createElement("script")).src = t, o.async = void 0 === c || c), o.onload = o.onerror = o.onbeforeload = function (e) {
                var l = e.type[0];
                if (s) try {
                  o.sheet.cssText.length || (l = "e");
                } catch (e) {
                  18 != e.code && (l = "e");
                }

                if ("e" == l) {
                  if ((a += 1) < u) return r(t, i, n, a);
                } else if ("preload" == o.rel && "style" == o.as) return o.rel = "stylesheet";

                i(t, l, e.defaultPrevented);
              }, !1 !== d(t, o) && l.head.appendChild(o);
            }

            function o(e, i, n) {
              var o, l;

              if (i && i.trim && (o = i), l = (o ? n : i) || {}, o) {
                if (o in t) throw "LoadJS";
                t[o] = !0;
              }

              function c(t, i) {
                !function (e, t, i) {
                  var n,
                      a,
                      s = (e = e.push ? e : [e]).length,
                      o = s,
                      l = [];

                  for (n = function n(e, i, _n) {
                    if ("e" == i && l.push(e), "b" == i) {
                      if (!_n) return;
                      l.push(e);
                    }

                    --s || t(l);
                  }, a = 0; a < o; a++) {
                    r(e[a], n, i);
                  }
                }(e, function (e) {
                  s(l, e), t && s({
                    success: t,
                    error: i
                  }, e), a(o, e);
                }, l);
              }

              if (l.returnPromise) return new Promise(c);
              c();
            }

            return o.ready = function (e, t) {
              return function (e, t) {
                e = e.push ? e : [e];
                var a,
                    s,
                    r,
                    o = [],
                    l = e.length,
                    c = l;

                for (a = function a(e, i) {
                  i.length && o.push(e), --c || t(o);
                }; l--;) {
                  s = e[l], (r = i[s]) ? a(s, r) : (n[s] = n[s] || []).push(a);
                }
              }(e, function (e) {
                s(t, e);
              }), o;
            }, o.done = function (e) {
              a(e, []);
            }, o.reset = function () {
              t = {}, i = {}, n = {};
            }, o.isDefined = function (e) {
              return e in t;
            }, o;
          }();
        });

        function wt(e) {
          return new Promise(function (t, i) {
            bt(e, {
              success: t,
              error: i
            });
          });
        }

        function kt(e) {
          e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Oe.call(this, this.media, e ? "play" : "pause"));
        }

        var Tt = {
          setup: function setup() {
            var e = this;
            be(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, Re.call(e), z(window.Vimeo) ? Tt.ready.call(e) : wt(e.config.urls.vimeo.sdk).then(function () {
              Tt.ready.call(e);
            })["catch"](function (t) {
              e.debug.warn("Vimeo SDK (player.js) failed to load", t);
            });
          },
          ready: function ready() {
            var e = this,
                t = this,
                i = t.config.vimeo,
                n = i.premium,
                a = i.referrerPolicy,
                l = r(i, ["premium", "referrerPolicy"]);
            n && Object.assign(l, {
              controls: !1,
              sidedock: !1
            });
            var c = st(s({
              loop: t.config.loop.active,
              autoplay: t.autoplay,
              muted: t.muted,
              gesture: "media",
              playsinline: !this.config.fullscreen.iosNative
            }, l)),
                u = t.media.getAttribute("src");
            ae(u) && (u = t.media.getAttribute(t.config.attributes.embed.id));
            var d,
                h = ae(d = u) ? null : K(Number(d)) ? d : d.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : d,
                p = he("iframe"),
                m = Ue(t.config.urls.vimeo.iframe, h, c);
            p.setAttribute("src", m), p.setAttribute("allowfullscreen", ""), p.setAttribute("allow", "autoplay,fullscreen,picture-in-picture"), ae(a) || p.setAttribute("referrerPolicy", a);
            var f = t.poster;
            if (n) p.setAttribute("data-poster", f), t.media = ge(p, t.media);else {
              var g = he("div", {
                "class": t.config.classNames.embedContainer,
                "data-poster": f
              });
              g.appendChild(p), t.media = ge(g, t.media);
            }
            Je(Ue(t.config.urls.vimeo.api, h), "json").then(function (e) {
              if (!ae(e)) {
                var i = new URL(e[0].thumbnail_large);
                i.pathname = "".concat(i.pathname.split("_")[0], ".jpg"), yt.setPoster.call(t, i.href)["catch"](function () {});
              }
            }), t.embed = new window.Vimeo.Player(p, {
              autopause: t.config.autopause,
              muted: t.muted
            }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function () {
              return kt.call(t, !0), t.embed.play();
            }, t.media.pause = function () {
              return kt.call(t, !1), t.embed.pause();
            }, t.media.stop = function () {
              t.pause(), t.currentTime = 0;
            };
            var y = t.media.currentTime;
            Object.defineProperty(t.media, "currentTime", {
              get: function get() {
                return y;
              },
              set: function set(e) {
                var i = t.embed,
                    n = t.media,
                    a = t.paused,
                    s = t.volume,
                    r = a && !i.hasPlayed;
                n.seeking = !0, Oe.call(t, n, "seeking"), Promise.resolve(r && i.setVolume(0)).then(function () {
                  return i.setCurrentTime(e);
                }).then(function () {
                  return r && i.pause();
                }).then(function () {
                  return r && i.setVolume(s);
                })["catch"](function () {});
              }
            });
            var v = t.config.speed.selected;
            Object.defineProperty(t.media, "playbackRate", {
              get: function get() {
                return v;
              },
              set: function set(e) {
                t.embed.setPlaybackRate(e).then(function () {
                  v = e, Oe.call(t, t.media, "ratechange");
                })["catch"](function () {
                  t.options.speed = [1];
                });
              }
            });
            var b = t.config.volume;
            Object.defineProperty(t.media, "volume", {
              get: function get() {
                return b;
              },
              set: function set(e) {
                t.embed.setVolume(e).then(function () {
                  b = e, Oe.call(t, t.media, "volumechange");
                });
              }
            });
            var w = t.config.muted;
            Object.defineProperty(t.media, "muted", {
              get: function get() {
                return w;
              },
              set: function set(e) {
                var i = !!Q(e) && e;
                t.embed.setVolume(i ? 0 : t.config.volume).then(function () {
                  w = i, Oe.call(t, t.media, "volumechange");
                });
              }
            });
            var k,
                T = t.config.loop;
            Object.defineProperty(t.media, "loop", {
              get: function get() {
                return T;
              },
              set: function set(e) {
                var i = Q(e) ? e : t.config.loop.active;
                t.embed.setLoop(i).then(function () {
                  T = i;
                });
              }
            }), t.embed.getVideoUrl().then(function (e) {
              k = e, nt.setDownloadUrl.call(t);
            })["catch"](function (t) {
              e.debug.warn(t);
            }), Object.defineProperty(t.media, "currentSrc", {
              get: function get() {
                return k;
              }
            }), Object.defineProperty(t.media, "ended", {
              get: function get() {
                return t.currentTime === t.duration;
              }
            }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(function (i) {
              var n = o(i, 2),
                  a = n[0],
                  s = n[1];
              t.embed.ratio = [a, s], Re.call(e);
            }), t.embed.setAutopause(t.config.autopause).then(function (e) {
              t.config.autopause = e;
            }), t.embed.getVideoTitle().then(function (i) {
              t.config.title = i, yt.setTitle.call(e);
            }), t.embed.getCurrentTime().then(function (e) {
              y = e, Oe.call(t, t.media, "timeupdate");
            }), t.embed.getDuration().then(function (e) {
              t.media.duration = e, Oe.call(t, t.media, "durationchange");
            }), t.embed.getTextTracks().then(function (e) {
              t.media.textTracks = e, rt.setup.call(t);
            }), t.embed.on("cuechange", function (e) {
              var i = e.cues,
                  n = (void 0 === i ? [] : i).map(function (e) {
                return function (e) {
                  var t = document.createDocumentFragment(),
                      i = document.createElement("div");
                  return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText;
                }(e.text);
              });
              rt.updateCues.call(t, n);
            }), t.embed.on("loaded", function () {
              (t.embed.getPaused().then(function (e) {
                kt.call(t, !e), e || Oe.call(t, t.media, "playing");
              }), G(t.embed.element) && t.supported.ui) && t.embed.element.setAttribute("tabindex", -1);
            }), t.embed.on("bufferstart", function () {
              Oe.call(t, t.media, "waiting");
            }), t.embed.on("bufferend", function () {
              Oe.call(t, t.media, "playing");
            }), t.embed.on("play", function () {
              kt.call(t, !0), Oe.call(t, t.media, "playing");
            }), t.embed.on("pause", function () {
              kt.call(t, !1);
            }), t.embed.on("timeupdate", function (e) {
              t.media.seeking = !1, y = e.seconds, Oe.call(t, t.media, "timeupdate");
            }), t.embed.on("progress", function (e) {
              t.media.buffered = e.percent, Oe.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && Oe.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(function (e) {
                e !== t.media.duration && (t.media.duration = e, Oe.call(t, t.media, "durationchange"));
              });
            }), t.embed.on("seeked", function () {
              t.media.seeking = !1, Oe.call(t, t.media, "seeked");
            }), t.embed.on("ended", function () {
              t.media.paused = !0, Oe.call(t, t.media, "ended");
            }), t.embed.on("error", function (e) {
              t.media.error = e, Oe.call(t, t.media, "error");
            }), setTimeout(function () {
              return yt.build.call(t);
            }, 0);
          }
        };

        function Ct(e) {
          e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Oe.call(this, this.media, e ? "play" : "pause"));
        }

        function At(e) {
          return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0;
        }

        var St = {
          setup: function setup() {
            var e = this;
            if (be(this.elements.wrapper, this.config.classNames.embed, !0), z(window.YT) && X(window.YT.Player)) St.ready.call(this);else {
              var t = window.onYouTubeIframeAPIReady;
              window.onYouTubeIframeAPIReady = function () {
                X(t) && t(), St.ready.call(e);
              }, wt(this.config.urls.youtube.sdk)["catch"](function (t) {
                e.debug.warn("YouTube API failed to load", t);
              });
            }
          },
          getTitle: function getTitle(e) {
            var t = this;
            Je(Ue(this.config.urls.youtube.api, e)).then(function (e) {
              if (z(e)) {
                var i = e.title,
                    n = e.height,
                    a = e.width;
                t.config.title = i, yt.setTitle.call(t), t.embed.ratio = [a, n];
              }

              Re.call(t);
            })["catch"](function () {
              Re.call(t);
            });
          },
          ready: function ready() {
            var e = this,
                t = e.media && e.media.getAttribute("id");

            if (ae(t) || !t.startsWith("youtube-")) {
              var i = e.media.getAttribute("src");
              ae(i) && (i = e.media.getAttribute(this.config.attributes.embed.id));
              var n,
                  a,
                  s = ae(n = i) ? null : n.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : n,
                  r = (a = e.provider, "".concat(a, "-").concat(Math.floor(1e4 * Math.random()))),
                  o = he("div", {
                id: r,
                "data-poster": e.poster
              });
              e.media = ge(o, e.media);

              var l = function l(e) {
                return "https://i.ytimg.com/vi/".concat(s, "/").concat(e, "default.jpg");
              };

              gt(l("maxres"), 121)["catch"](function () {
                return gt(l("sd"), 121);
              })["catch"](function () {
                return gt(l("hq"));
              }).then(function (t) {
                return yt.setPoster.call(e, t.src);
              }).then(function (t) {
                t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover");
              })["catch"](function () {});
              var c = e.config.youtube;
              e.embed = new window.YT.Player(r, {
                videoId: s,
                host: At(c),
                playerVars: ce({}, {
                  autoplay: e.config.autoplay ? 1 : 0,
                  hl: e.config.hl,
                  controls: e.supported.ui ? 0 : 1,
                  disablekb: 1,
                  playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                  cc_load_policy: e.captions.active ? 1 : 0,
                  cc_lang_pref: e.config.captions.language,
                  widget_referrer: window ? window.location.href : null
                }, c),
                events: {
                  onError: function onError(t) {
                    if (!e.media.error) {
                      var i = t.data,
                          n = {
                        2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                        5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                        100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                        101: "The owner of the requested video does not allow it to be played in embedded players.",
                        150: "The owner of the requested video does not allow it to be played in embedded players."
                      }[i] || "An unknown error occured";
                      e.media.error = {
                        code: i,
                        message: n
                      }, Oe.call(e, e.media, "error");
                    }
                  },
                  onPlaybackRateChange: function onPlaybackRateChange(t) {
                    var i = t.target;
                    e.media.playbackRate = i.getPlaybackRate(), Oe.call(e, e.media, "ratechange");
                  },
                  onReady: function onReady(t) {
                    if (!X(e.media.play)) {
                      var i = t.target;
                      St.getTitle.call(e, s), e.media.play = function () {
                        Ct.call(e, !0), i.playVideo();
                      }, e.media.pause = function () {
                        Ct.call(e, !1), i.pauseVideo();
                      }, e.media.stop = function () {
                        i.stopVideo();
                      }, e.media.duration = i.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                        get: function get() {
                          return Number(i.getCurrentTime());
                        },
                        set: function set(t) {
                          e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, Oe.call(e, e.media, "seeking"), i.seekTo(t);
                        }
                      }), Object.defineProperty(e.media, "playbackRate", {
                        get: function get() {
                          return i.getPlaybackRate();
                        },
                        set: function set(e) {
                          i.setPlaybackRate(e);
                        }
                      });
                      var n = e.config.volume;
                      Object.defineProperty(e.media, "volume", {
                        get: function get() {
                          return n;
                        },
                        set: function set(t) {
                          n = t, i.setVolume(100 * n), Oe.call(e, e.media, "volumechange");
                        }
                      });
                      var a = e.config.muted;
                      Object.defineProperty(e.media, "muted", {
                        get: function get() {
                          return a;
                        },
                        set: function set(t) {
                          var n = Q(t) ? t : a;
                          a = n, i[n ? "mute" : "unMute"](), Oe.call(e, e.media, "volumechange");
                        }
                      }), Object.defineProperty(e.media, "currentSrc", {
                        get: function get() {
                          return i.getVideoUrl();
                        }
                      }), Object.defineProperty(e.media, "ended", {
                        get: function get() {
                          return e.currentTime === e.duration;
                        }
                      });
                      var r = i.getAvailablePlaybackRates();
                      e.options.speed = r.filter(function (t) {
                        return e.config.speed.options.includes(t);
                      }), e.supported.ui && e.media.setAttribute("tabindex", -1), Oe.call(e, e.media, "timeupdate"), Oe.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function () {
                        e.media.buffered = i.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && Oe.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), Oe.call(e, e.media, "canplaythrough"));
                      }, 200), setTimeout(function () {
                        return yt.build.call(e);
                      }, 50);
                    }
                  },
                  onStateChange: function onStateChange(t) {
                    var i = t.target;

                    switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, Oe.call(e, e.media, "seeked")), t.data) {
                      case -1:
                        Oe.call(e, e.media, "timeupdate"), e.media.buffered = i.getVideoLoadedFraction(), Oe.call(e, e.media, "progress");
                        break;

                      case 0:
                        Ct.call(e, !1), e.media.loop ? (i.stopVideo(), i.playVideo()) : Oe.call(e, e.media, "ended");
                        break;

                      case 1:
                        e.config.autoplay || !e.media.paused || e.embed.hasPlayed ? (Ct.call(e, !0), Oe.call(e, e.media, "playing"), e.timers.playing = setInterval(function () {
                          Oe.call(e, e.media, "timeupdate");
                        }, 50), e.media.duration !== i.getDuration() && (e.media.duration = i.getDuration(), Oe.call(e, e.media, "durationchange"))) : e.media.pause();
                        break;

                      case 2:
                        e.muted || e.embed.unMute(), Ct.call(e, !1);
                        break;

                      case 3:
                        Oe.call(e, e.media, "waiting");
                    }

                    Oe.call(e, e.elements.container, "statechange", !1, {
                      code: t.data
                    });
                  }
                }
              });
            }
          }
        },
            Pt = {
          setup: function setup() {
            this.media ? (be(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), be(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && be(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = he("div", {
              "class": this.config.classNames.video
            }), ue(this.media, this.elements.wrapper), this.elements.poster = he("div", {
              "class": this.config.classNames.poster
            }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? Ve.setup.call(this) : this.isYouTube ? St.setup.call(this) : this.isVimeo && Tt.setup.call(this)) : this.debug.warn("No media element found!");
          }
        },
            Et = function () {
          function t(i) {
            var n = this;
            e(this, t), this.player = i, this.config = i.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
              container: null,
              displayContainer: null
            }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function (e, t) {
              n.on("loaded", e), n.on("error", t);
            }), this.load();
          }

          return i(t, [{
            key: "load",
            value: function value() {
              var e = this;
              this.enabled && (z(window.google) && z(window.google.ima) ? this.ready() : wt(this.player.config.urls.googleIMA.sdk).then(function () {
                e.ready();
              })["catch"](function () {
                e.trigger("error", new Error("Google IMA SDK failed to load"));
              }));
            }
          }, {
            key: "ready",
            value: function value() {
              var e,
                  t = this;
              this.enabled || ((e = this).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(function () {
                t.clearSafetyTimer("onAdsManagerLoaded()");
              }), this.listeners(), this.setupIMA();
            }
          }, {
            key: "setupIMA",
            value: function value() {
              var e = this;
              this.elements.container = he("div", {
                "class": this.player.config.classNames.ads
              }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (t) {
                return e.onAdsManagerLoaded(t);
              }, !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (t) {
                return e.onAdError(t);
              }, !1), this.requestAds();
            }
          }, {
            key: "requestAds",
            value: function value() {
              var e = this.player.elements.container;

              try {
                var t = new google.ima.AdsRequest();
                t.adTagUrl = this.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t);
              } catch (e) {
                this.onAdError(e);
              }
            }
          }, {
            key: "pollCountdown",
            value: function value() {
              var e = this,
                  t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (!t) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");

              var i = function i() {
                var t = it(Math.max(e.manager.getRemainingTime(), 0)),
                    i = "".concat(Xe("advertisement", e.player.config), " - ").concat(t);
                e.elements.container.setAttribute("data-badge-text", i);
              };

              this.countdownTimer = setInterval(i, 100);
            }
          }, {
            key: "onAdsManagerLoaded",
            value: function value(e) {
              var t = this;

              if (this.enabled) {
                var i = new google.ima.AdsRenderingSettings();
                i.restoreCustomPlaybackStateOnAdBreakComplete = !0, i.enablePreloading = !0, this.manager = e.getAdsManager(this.player, i), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
                  return t.onAdError(e);
                }), Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
                  t.manager.addEventListener(google.ima.AdEvent.Type[e], function (e) {
                    return t.onAdEvent(e);
                  });
                }), this.trigger("loaded");
              }
            }
          }, {
            key: "addCuePoints",
            value: function value() {
              var e = this;
              ae(this.cuePoints) || this.cuePoints.forEach(function (t) {
                if (0 !== t && -1 !== t && t < e.player.duration) {
                  var i = e.player.elements.progress;

                  if (G(i)) {
                    var n = 100 / e.player.duration * t,
                        a = he("span", {
                      "class": e.player.config.classNames.cues
                    });
                    a.style.left = "".concat(n.toString(), "%"), i.appendChild(a);
                  }
                }
              });
            }
          }, {
            key: "onAdEvent",
            value: function value(e) {
              var t = this,
                  i = this.player.elements.container,
                  n = e.getAd(),
                  a = e.getAdData();

              switch (function (e) {
                Oe.call(t.player, t.player.media, "ads".concat(e.replace(/_/g, "").toLowerCase()));
              }(e.type), e.type) {
                case google.ima.AdEvent.Type.LOADED:
                  this.trigger("loaded"), this.pollCountdown(!0), n.isLinear() || (n.width = i.offsetWidth, n.height = i.offsetHeight);
                  break;

                case google.ima.AdEvent.Type.STARTED:
                  this.manager.setVolume(this.player.volume);
                  break;

                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                  this.player.ended ? this.loadAds() : this.loader.contentComplete();
                  break;

                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                  this.pauseContent();
                  break;

                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                  this.pollCountdown(), this.resumeContent();
                  break;

                case google.ima.AdEvent.Type.LOG:
                  a.adError && this.player.debug.warn("Non-fatal ad error: ".concat(a.adError.getMessage()));
              }
            }
          }, {
            key: "onAdError",
            value: function value(e) {
              this.cancel(), this.player.debug.warn("Ads error", e);
            }
          }, {
            key: "listeners",
            value: function value() {
              var e,
                  t = this,
                  i = this.player.elements.container;
              this.player.on("canplay", function () {
                t.addCuePoints();
              }), this.player.on("ended", function () {
                t.loader.contentComplete();
              }), this.player.on("timeupdate", function () {
                e = t.player.currentTime;
              }), this.player.on("seeked", function () {
                var i = t.player.currentTime;
                ae(t.cuePoints) || t.cuePoints.forEach(function (n, a) {
                  e < n && n < i && (t.manager.discardAdBreak(), t.cuePoints.splice(a, 1));
                });
              }), window.addEventListener("resize", function () {
                t.manager && t.manager.resize(i.offsetWidth, i.offsetHeight, google.ima.ViewMode.NORMAL);
              });
            }
          }, {
            key: "play",
            value: function value() {
              var e = this,
                  t = this.player.elements.container;
              this.managerPromise || this.resumeContent(), this.managerPromise.then(function () {
                e.manager.setVolume(e.player.volume), e.elements.displayContainer.initialize();

                try {
                  e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0;
                } catch (t) {
                  e.onAdError(t);
                }
              })["catch"](function () {});
            }
          }, {
            key: "resumeContent",
            value: function value() {
              this.elements.container.style.zIndex = "", this.playing = !1, qe(this.player.media.play());
            }
          }, {
            key: "pauseContent",
            value: function value() {
              this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause();
            }
          }, {
            key: "cancel",
            value: function value() {
              this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
            }
          }, {
            key: "loadAds",
            value: function value() {
              var e = this;
              this.managerPromise.then(function () {
                e.manager && e.manager.destroy(), e.managerPromise = new Promise(function (t) {
                  e.on("loaded", t), e.player.debug.log(e.manager);
                }), e.initialized = !1, e.requestAds();
              })["catch"](function () {});
            }
          }, {
            key: "trigger",
            value: function value(e) {
              for (var t = this, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) {
                n[a - 1] = arguments[a];
              }

              var s = this.events[e];
              $(s) && s.forEach(function (e) {
                X(e) && e.apply(t, n);
              });
            }
          }, {
            key: "on",
            value: function value(e, t) {
              return $(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this;
            }
          }, {
            key: "startSafetyTimer",
            value: function value(e, t) {
              var i = this;
              this.player.debug.log("Safety timer invoked from: ".concat(t)), this.safetyTimer = setTimeout(function () {
                i.cancel(), i.clearSafetyTimer("startSafetyTimer()");
              }, e);
            }
          }, {
            key: "clearSafetyTimer",
            value: function value(e) {
              W(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(this.safetyTimer), this.safetyTimer = null);
            }
          }, {
            key: "enabled",
            get: function get() {
              var e = this.config;
              return this.player.isHTML5 && this.player.isVideo && e.enabled && (!ae(e.publisherId) || ne(e.tagUrl));
            }
          }, {
            key: "tagUrl",
            get: function get() {
              var e = this.config;
              if (ne(e.tagUrl)) return e.tagUrl;
              var t = {
                AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                AV_CHANNELID: "5a0458dc28a06145e4519d21",
                AV_URL: window.location.hostname,
                cb: Date.now(),
                AV_WIDTH: 640,
                AV_HEIGHT: 480,
                AV_CDIM2: e.publisherId
              };
              return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(st(t));
            }
          }]), t;
        }(),
            Nt = function Nt(e, t) {
          var i = {};
          return e > t.width / t.height ? (i.width = t.width, i.height = 1 / e * t.width) : (i.height = t.height, i.width = e * t.height), i;
        },
            Mt = function () {
          function t(i) {
            e(this, t), this.player = i, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
              thumb: {},
              scrubbing: {}
            }, this.load();
          }

          return i(t, [{
            key: "load",
            value: function value() {
              var e = this;
              this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(function () {
                e.enabled && (e.render(), e.determineContainerAutoSizing(), e.loaded = !0);
              });
            }
          }, {
            key: "getThumbnails",
            value: function value() {
              var e = this;
              return new Promise(function (t) {
                var i = e.player.config.previewThumbnails.src;
                if (ae(i)) throw new Error("Missing previewThumbnails.src config attribute");

                var n = function n() {
                  e.thumbnails.sort(function (e, t) {
                    return e.height - t.height;
                  }), e.player.debug.log("Preview thumbnails", e.thumbnails), t();
                };

                if (X(i)) i(function (t) {
                  e.thumbnails = t, n();
                });else {
                  var a = (Y(i) ? [i] : i).map(function (t) {
                    return e.getThumbnail(t);
                  });
                  Promise.all(a).then(n);
                }
              });
            }
          }, {
            key: "getThumbnail",
            value: function value(e) {
              var t = this;
              return new Promise(function (i) {
                Je(e).then(function (n) {
                  var a,
                      s,
                      r = {
                    frames: (a = n, s = [], a.split(/\r\n\r\n|\n\n|\r\r/).forEach(function (e) {
                      var t = {};
                      e.split(/\r\n|\n|\r/).forEach(function (e) {
                        if (K(t.startTime)) {
                          if (!ae(e.trim()) && ae(t.text)) {
                            var i = e.trim().split("#xywh="),
                                n = o(i, 1);

                            if (t.text = n[0], i[1]) {
                              var a = o(i[1].split(","), 4);
                              t.x = a[0], t.y = a[1], t.w = a[2], t.h = a[3];
                            }
                          }
                        } else {
                          var s = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                          s && (t.startTime = 60 * Number(s[1] || 0) * 60 + 60 * Number(s[2]) + Number(s[3]) + Number("0.".concat(s[4])), t.endTime = 60 * Number(s[6] || 0) * 60 + 60 * Number(s[7]) + Number(s[8]) + Number("0.".concat(s[9])));
                        }
                      }), t.text && s.push(t);
                    }), s),
                    height: null,
                    urlPrefix: ""
                  };
                  r.frames[0].text.startsWith("/") || r.frames[0].text.startsWith("http://") || r.frames[0].text.startsWith("https://") || (r.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                  var l = new Image();
                  l.onload = function () {
                    r.height = l.naturalHeight, r.width = l.naturalWidth, t.thumbnails.push(r), i();
                  }, l.src = r.urlPrefix + r.frames[0].text;
                });
              });
            }
          }, {
            key: "startMove",
            value: function value(e) {
              if (this.loaded && Z(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration) {
                if ("touchmove" === e.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);else {
                  var t = this.player.elements.progress.getBoundingClientRect(),
                      i = 100 / t.width * (e.pageX - t.left);
                  this.seekTime = this.player.media.duration * (i / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e.pageX, this.elements.thumb.time.innerText = it(this.seekTime);
                }
                this.showImageAtCurrentTime();
              }
            }
          }, {
            key: "endMove",
            value: function value() {
              this.toggleThumbContainer(!1, !0);
            }
          }, {
            key: "startScrubbing",
            value: function value(e) {
              (W(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()));
            }
          }, {
            key: "endScrubbing",
            value: function value() {
              var e = this;
              this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : Le.call(this.player, this.player.media, "timeupdate", function () {
                e.mouseDown || e.toggleScrubbingContainer(!1);
              });
            }
          }, {
            key: "listeners",
            value: function value() {
              var e = this;
              this.player.on("play", function () {
                e.toggleThumbContainer(!1, !0);
              }), this.player.on("seeked", function () {
                e.toggleThumbContainer(!1);
              }), this.player.on("timeupdate", function () {
                e.lastTime = e.player.media.currentTime;
              });
            }
          }, {
            key: "render",
            value: function value() {
              this.elements.thumb.container = he("div", {
                "class": this.player.config.classNames.previewThumbnails.thumbContainer
              }), this.elements.thumb.imageContainer = he("div", {
                "class": this.player.config.classNames.previewThumbnails.imageContainer
              }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
              var e = he("div", {
                "class": this.player.config.classNames.previewThumbnails.timeContainer
              });
              this.elements.thumb.time = he("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), this.elements.thumb.container.appendChild(e), G(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = he("div", {
                "class": this.player.config.classNames.previewThumbnails.scrubbingContainer
              }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
            }
          }, {
            key: "destroy",
            value: function value() {
              this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove();
            }
          }, {
            key: "showImageAtCurrentTime",
            value: function value() {
              var e = this;
              this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
              var t = this.thumbnails[0].frames.findIndex(function (t) {
                return e.seekTime >= t.startTime && e.seekTime <= t.endTime;
              }),
                  i = t >= 0,
                  n = 0;
              this.mouseDown || this.toggleThumbContainer(i), i && (this.thumbnails.forEach(function (i, a) {
                e.loadedImages.includes(i.frames[t].text) && (n = a);
              }), t !== this.showingThumb && (this.showingThumb = t, this.loadImage(n)));
            }
          }, {
            key: "loadImage",
            value: function value() {
              var e = this,
                  t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                  i = this.showingThumb,
                  n = this.thumbnails[t],
                  a = n.urlPrefix,
                  s = n.frames[i],
                  r = n.frames[i].text,
                  o = a + r;
              if (this.currentImageElement && this.currentImageElement.dataset.filename === r) this.showImage(this.currentImageElement, s, t, i, r, !1), this.currentImageElement.dataset.index = i, this.removeOldImages(this.currentImageElement);else {
                this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                var l = new Image();
                l.src = o, l.dataset.index = i, l.dataset.filename = r, this.showingThumbFilename = r, this.player.debug.log("Loading image: ".concat(o)), l.onload = function () {
                  return e.showImage(l, s, t, i, r, !0);
                }, this.loadingImage = l, this.removeOldImages(l);
              }
            }
          }, {
            key: "showImage",
            value: function value(e, t, i, n, a) {
              var s = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
              this.player.debug.log("Showing thumb: ".concat(a, ". num: ").concat(n, ". qual: ").concat(i, ". newimg: ").concat(s)), this.setImageSizeAndOffset(e, t), s && (this.currentImageContainer.appendChild(e), this.currentImageElement = e, this.loadedImages.includes(a) || this.loadedImages.push(a)), this.preloadNearby(n, !0).then(this.preloadNearby(n, !1)).then(this.getHigherQuality(i, e, t, a));
            }
          }, {
            key: "removeOldImages",
            value: function value(e) {
              var t = this;
              Array.from(this.currentImageContainer.children).forEach(function (i) {
                if ("img" === i.tagName.toLowerCase()) {
                  var n = t.usingSprites ? 500 : 1e3;

                  if (i.dataset.index !== e.dataset.index && !i.dataset.deleting) {
                    i.dataset.deleting = !0;
                    var a = t.currentImageContainer;
                    setTimeout(function () {
                      a.removeChild(i), t.player.debug.log("Removing thumb: ".concat(i.dataset.filename));
                    }, n);
                  }
                }
              });
            }
          }, {
            key: "preloadNearby",
            value: function value(e) {
              var t = this,
                  i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              return new Promise(function (n) {
                setTimeout(function () {
                  var a = t.thumbnails[0].frames[e].text;

                  if (t.showingThumbFilename === a) {
                    var s;
                    s = i ? t.thumbnails[0].frames.slice(e) : t.thumbnails[0].frames.slice(0, e).reverse();
                    var r = !1;
                    s.forEach(function (e) {
                      var i = e.text;

                      if (i !== a && !t.loadedImages.includes(i)) {
                        r = !0, t.player.debug.log("Preloading thumb filename: ".concat(i));
                        var s = t.thumbnails[0].urlPrefix + i,
                            o = new Image();
                        o.src = s, o.onload = function () {
                          t.player.debug.log("Preloaded thumb filename: ".concat(i)), t.loadedImages.includes(i) || t.loadedImages.push(i), n();
                        };
                      }
                    }), r || n();
                  }
                }, 300);
              });
            }
          }, {
            key: "getHigherQuality",
            value: function value(e, t, i, n) {
              var a = this;

              if (e < this.thumbnails.length - 1) {
                var s = t.naturalHeight;
                this.usingSprites && (s = i.h), s < this.thumbContainerHeight && setTimeout(function () {
                  a.showingThumbFilename === n && (a.player.debug.log("Showing higher quality thumb for: ".concat(n)), a.loadImage(e + 1));
                }, 300);
              }
            }
          }, {
            key: "toggleThumbContainer",
            value: function value() {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                  t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  i = this.player.config.classNames.previewThumbnails.thumbContainerShown;
              this.elements.thumb.container.classList.toggle(i, e), !e && t && (this.showingThumb = null, this.showingThumbFilename = null);
            }
          }, {
            key: "toggleScrubbingContainer",
            value: function value() {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                  t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
              this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, this.showingThumbFilename = null);
            }
          }, {
            key: "determineContainerAutoSizing",
            value: function value() {
              (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0);
            }
          }, {
            key: "setThumbContainerSizeAndPos",
            value: function value() {
              if (this.sizeSpecifiedInCSS) {
                if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
                  var e = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
                  this.elements.thumb.imageContainer.style.width = "".concat(e, "px");
                } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
                  var t = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
                  this.elements.thumb.imageContainer.style.height = "".concat(t, "px");
                }
              } else {
                var i = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                this.elements.thumb.imageContainer.style.height = "".concat(this.thumbContainerHeight, "px"), this.elements.thumb.imageContainer.style.width = "".concat(i, "px");
              }

              this.setThumbContainerPos();
            }
          }, {
            key: "setThumbContainerPos",
            value: function value() {
              var e = this.player.elements.progress.getBoundingClientRect(),
                  t = this.player.elements.container.getBoundingClientRect(),
                  i = this.elements.thumb.container,
                  n = t.left - e.left + 10,
                  a = t.right - e.left - i.clientWidth - 10,
                  s = this.mousePosX - e.left - i.clientWidth / 2;
              s < n && (s = n), s > a && (s = a), i.style.left = "".concat(s, "px");
            }
          }, {
            key: "setScrubbingContainerSize",
            value: function value() {
              var e = Nt(this.thumbAspectRatio, {
                width: this.player.media.clientWidth,
                height: this.player.media.clientHeight
              }),
                  t = e.width,
                  i = e.height;
              this.elements.scrubbing.container.style.width = "".concat(t, "px"), this.elements.scrubbing.container.style.height = "".concat(i, "px");
            }
          }, {
            key: "setImageSizeAndOffset",
            value: function value(e, t) {
              if (this.usingSprites) {
                var i = this.thumbContainerHeight / t.h;
                e.style.height = "".concat(e.naturalHeight * i, "px"), e.style.width = "".concat(e.naturalWidth * i, "px"), e.style.left = "-".concat(t.x * i, "px"), e.style.top = "-".concat(t.y * i, "px");
              }
            }
          }, {
            key: "enabled",
            get: function get() {
              return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
            }
          }, {
            key: "currentImageContainer",
            get: function get() {
              return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
            }
          }, {
            key: "usingSprites",
            get: function get() {
              return Object.keys(this.thumbnails[0].frames[0]).includes("w");
            }
          }, {
            key: "thumbAspectRatio",
            get: function get() {
              return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
            }
          }, {
            key: "thumbContainerHeight",
            get: function get() {
              return this.mouseDown ? Nt(this.thumbAspectRatio, {
                width: this.player.media.clientWidth,
                height: this.player.media.clientHeight
              }).height : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
            }
          }, {
            key: "currentImageElement",
            get: function get() {
              return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
            },
            set: function set(e) {
              this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e;
            }
          }]), t;
        }(),
            xt = {
          insertElements: function insertElements(e, t) {
            var i = this;
            Y(t) ? pe(e, this.media, {
              src: t
            }) : $(t) && t.forEach(function (t) {
              pe(e, i.media, t);
            });
          },
          change: function change(e) {
            var t = this;
            le(e, "sources.length") ? (Ve.cancelRequests.call(this), this.destroy.call(this, function () {
              t.options.quality = [], me(t.media), t.media = null, G(t.elements.container) && t.elements.container.removeAttribute("class");
              var i = e.sources,
                  n = e.type,
                  a = o(i, 1)[0],
                  s = a.provider,
                  r = void 0 === s ? ut.html5 : s,
                  l = a.src,
                  c = "html5" === r ? n : "div",
                  u = "html5" === r ? {} : {
                src: l
              };
              Object.assign(t, {
                provider: r,
                type: n,
                supported: Ee.check(n, r, t.config.playsinline),
                media: he(c, u)
              }), t.elements.container.appendChild(t.media), Q(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), ae(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), yt.addStyleHook.call(t), t.isHTML5 && xt.insertElements.call(t, "source", i), t.config.title = e.title, Pt.setup.call(t), t.isHTML5 && Object.keys(e).includes("tracks") && xt.insertElements.call(t, "track", e.tracks), (t.isHTML5 || t.isEmbed && !t.supported.ui) && yt.build.call(t), t.isHTML5 && t.media.load(), ae(e.previewThumbnails) || (Object.assign(t.config.previewThumbnails, e.previewThumbnails), t.previewThumbnails && t.previewThumbnails.loaded && (t.previewThumbnails.destroy(), t.previewThumbnails = null), t.config.previewThumbnails.enabled && (t.previewThumbnails = new Mt(t))), t.fullscreen.update();
            }, !0)) : this.debug.warn("Invalid source format");
          }
        };

        var It,
            Lt = function () {
          function t(i, n) {
            var a = this;
            if (e(this, t), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = Ee.touch, this.media = i, Y(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || J(this.media) || $(this.media)) && (this.media = this.media[0]), this.config = ce({}, ot, t.defaults, n || {}, function () {
              try {
                return JSON.parse(a.media.getAttribute("data-plyr-config"));
              } catch (e) {
                return {};
              }
            }()), this.elements = {
              container: null,
              fullscreen: null,
              captions: null,
              buttons: {},
              display: {},
              progress: {},
              inputs: {},
              settings: {
                popup: null,
                menu: null,
                panels: {},
                buttons: {}
              }
            }, this.captions = {
              active: null,
              currentTrack: -1,
              meta: new WeakMap()
            }, this.fullscreen = {
              active: !1
            }, this.options = {
              speed: [],
              quality: []
            }, this.debug = new mt(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", Ee), !W(this.media) && G(this.media)) {
              if (this.media.plyr) this.debug.warn("Target already setup");else if (this.config.enabled) {
                if (Ee.check().api) {
                  var s = this.media.cloneNode(!0);
                  s.autoplay = !1, this.elements.original = s;
                  var r = this.media.tagName.toLowerCase(),
                      o = null,
                      l = null;

                  switch (r) {
                    case "div":
                      if (o = this.media.querySelector("iframe"), G(o)) {
                        if (l = at(o.getAttribute("src")), this.provider = function (e) {
                          return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? ut.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? ut.vimeo : null;
                        }(l.toString()), this.elements.container = this.media, this.media = o, this.elements.container.className = "", l.search.length) {
                          var c = ["1", "true"];
                          c.includes(l.searchParams.get("autoplay")) && (this.config.autoplay = !0), c.includes(l.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = c.includes(l.searchParams.get("playsinline")), this.config.youtube.hl = l.searchParams.get("hl")) : this.config.playsinline = !0;
                        }
                      } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);

                      if (ae(this.provider) || !Object.keys(ut).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                      this.type = ht;
                      break;

                    case "video":
                    case "audio":
                      this.type = r, this.provider = ut.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                      break;

                    default:
                      return void this.debug.error("Setup failed: unsupported type");
                  }

                  this.supported = Ee.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new vt(this), this.storage = new $e(this), this.media.plyr = this, G(this.elements.container) || (this.elements.container = he("div", {
                    tabindex: 0
                  }), ue(this.media, this.elements.container)), yt.migrateStyles.call(this), yt.addStyleHook.call(this), Pt.setup.call(this), this.config.debug && xe.call(this, this.elements.container, this.config.events.join(" "), function (e) {
                    a.debug.log("event: ".concat(e.type));
                  }), this.fullscreen = new ft(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && yt.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Et(this)), this.isHTML5 && this.config.autoplay && setTimeout(function () {
                    return qe(a.play());
                  }, 10), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new Mt(this))) : this.debug.error("Setup failed: no support");
                } else this.debug.error("Setup failed: no support");
              } else this.debug.error("Setup failed: disabled by config");
            } else this.debug.error("Setup failed: no suitable element passed");
          }

          return i(t, [{
            key: "play",
            value: function value() {
              var e = this;
              return X(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(function () {
                return e.ads.play();
              })["catch"](function () {
                return qe(e.media.play());
              }), this.media.play()) : null;
            }
          }, {
            key: "pause",
            value: function value() {
              return this.playing && X(this.media.pause) ? this.media.pause() : null;
            }
          }, {
            key: "togglePlay",
            value: function value(e) {
              return (Q(e) ? e : !this.playing) ? this.play() : this.pause();
            }
          }, {
            key: "stop",
            value: function value() {
              this.isHTML5 ? (this.pause(), this.restart()) : X(this.media.stop) && this.media.stop();
            }
          }, {
            key: "restart",
            value: function value() {
              this.currentTime = 0;
            }
          }, {
            key: "rewind",
            value: function value(e) {
              this.currentTime -= K(e) ? e : this.config.seekTime;
            }
          }, {
            key: "forward",
            value: function value(e) {
              this.currentTime += K(e) ? e : this.config.seekTime;
            }
          }, {
            key: "increaseVolume",
            value: function value(e) {
              var t = this.media.muted ? 0 : this.volume;
              this.volume = t + (K(e) ? e : 0);
            }
          }, {
            key: "decreaseVolume",
            value: function value(e) {
              this.increaseVolume(-e);
            }
          }, {
            key: "toggleCaptions",
            value: function value(e) {
              rt.toggle.call(this, e, !1);
            }
          }, {
            key: "airplay",
            value: function value() {
              Ee.airplay && this.media.webkitShowPlaybackTargetPicker();
            }
          }, {
            key: "toggleControls",
            value: function value(e) {
              if (this.supported.ui && !this.isAudio) {
                var t = we(this.elements.container, this.config.classNames.hideControls),
                    i = void 0 === e ? void 0 : !e,
                    n = be(this.elements.container, this.config.classNames.hideControls, i);

                if (n && $(this.config.controls) && this.config.controls.includes("settings") && !ae(this.config.settings) && nt.toggleMenu.call(this, !1), n !== t) {
                  var a = n ? "controlshidden" : "controlsshown";
                  Oe.call(this, this.media, a);
                }

                return !n;
              }

              return !1;
            }
          }, {
            key: "on",
            value: function value(e, t) {
              xe.call(this, this.elements.container, e, t);
            }
          }, {
            key: "once",
            value: function value(e, t) {
              Le.call(this, this.elements.container, e, t);
            }
          }, {
            key: "off",
            value: function value(e, t) {
              Ie(this.elements.container, e, t);
            }
          }, {
            key: "destroy",
            value: function value(e) {
              var t = this,
                  i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

              if (this.ready) {
                var n = function n() {
                  document.body.style.overflow = "", t.embed = null, i ? (Object.keys(t.elements).length && (me(t.elements.buttons.play), me(t.elements.captions), me(t.elements.controls), me(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), X(e) && e()) : (_e.call(t), ge(t.elements.original, t.elements.container), Oe.call(t, t.elements.original, "destroyed", !0), X(e) && e.call(t.elements.original), t.ready = !1, setTimeout(function () {
                    t.elements = null, t.media = null;
                  }, 200));
                };

                this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (yt.toggleNativeControls.call(this, !0), n()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && X(this.embed.destroy) && this.embed.destroy(), n()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(n), setTimeout(n, 200));
              }
            }
          }, {
            key: "supports",
            value: function value(e) {
              return Ee.mime.call(this, e);
            }
          }, {
            key: "isHTML5",
            get: function get() {
              return this.provider === ut.html5;
            }
          }, {
            key: "isEmbed",
            get: function get() {
              return this.isYouTube || this.isVimeo;
            }
          }, {
            key: "isYouTube",
            get: function get() {
              return this.provider === ut.youtube;
            }
          }, {
            key: "isVimeo",
            get: function get() {
              return this.provider === ut.vimeo;
            }
          }, {
            key: "isVideo",
            get: function get() {
              return this.type === ht;
            }
          }, {
            key: "isAudio",
            get: function get() {
              return this.type === dt;
            }
          }, {
            key: "playing",
            get: function get() {
              return Boolean(this.ready && !this.paused && !this.ended);
            }
          }, {
            key: "paused",
            get: function get() {
              return Boolean(this.media.paused);
            }
          }, {
            key: "stopped",
            get: function get() {
              return Boolean(this.paused && 0 === this.currentTime);
            }
          }, {
            key: "ended",
            get: function get() {
              return Boolean(this.media.ended);
            }
          }, {
            key: "currentTime",
            set: function set(e) {
              if (this.duration) {
                var t = K(e) && e > 0;
                this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"));
              }
            },
            get: function get() {
              return Number(this.media.currentTime);
            }
          }, {
            key: "buffered",
            get: function get() {
              var e = this.media.buffered;
              return K(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0;
            }
          }, {
            key: "seeking",
            get: function get() {
              return Boolean(this.media.seeking);
            }
          }, {
            key: "duration",
            get: function get() {
              var e = parseFloat(this.config.duration),
                  t = (this.media || {}).duration,
                  i = K(t) && t !== 1 / 0 ? t : 0;
              return e || i;
            }
          }, {
            key: "volume",
            set: function set(e) {
              var t = e;
              Y(t) && (t = Number(t)), K(t) || (t = this.storage.get("volume")), K(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !ae(e) && this.muted && t > 0 && (this.muted = !1);
            },
            get: function get() {
              return Number(this.media.volume);
            }
          }, {
            key: "muted",
            set: function set(e) {
              var t = e;
              Q(t) || (t = this.storage.get("muted")), Q(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t;
            },
            get: function get() {
              return Boolean(this.media.muted);
            }
          }, {
            key: "hasAudio",
            get: function get() {
              return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
            }
          }, {
            key: "speed",
            set: function set(e) {
              var t = this,
                  i = null;
              K(e) && (i = e), K(i) || (i = this.storage.get("speed")), K(i) || (i = this.config.speed.selected);
              var n = this.minimumSpeed,
                  a = this.maximumSpeed;
              i = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
                return Math.min(Math.max(e, t), i);
              }(i, n, a), this.config.speed.selected = i, setTimeout(function () {
                t.media.playbackRate = i;
              }, 0);
            },
            get: function get() {
              return Number(this.media.playbackRate);
            }
          }, {
            key: "minimumSpeed",
            get: function get() {
              return this.isYouTube ? Math.min.apply(Math, l(this.options.speed)) : this.isVimeo ? .5 : .0625;
            }
          }, {
            key: "maximumSpeed",
            get: function get() {
              return this.isYouTube ? Math.max.apply(Math, l(this.options.speed)) : this.isVimeo ? 2 : 16;
            }
          }, {
            key: "quality",
            set: function set(e) {
              var t = this.config.quality,
                  i = this.options.quality;

              if (i.length) {
                var n = [!ae(e) && Number(e), this.storage.get("quality"), t.selected, t["default"]].find(K),
                    a = !0;

                if (!i.includes(n)) {
                  var s = function (e, t) {
                    return $(e) && e.length ? e.reduce(function (e, i) {
                      return Math.abs(i - t) < Math.abs(e - t) ? i : e;
                    }) : null;
                  }(i, n);

                  this.debug.warn("Unsupported quality option: ".concat(n, ", using ").concat(s, " instead")), n = s, a = !1;
                }

                t.selected = n, this.media.quality = n, a && this.storage.set({
                  quality: n
                });
              }
            },
            get: function get() {
              return this.media.quality;
            }
          }, {
            key: "loop",
            set: function set(e) {
              var t = Q(e) ? e : this.config.loop.active;
              this.config.loop.active = t, this.media.loop = t;
            },
            get: function get() {
              return Boolean(this.media.loop);
            }
          }, {
            key: "source",
            set: function set(e) {
              xt.change.call(this, e);
            },
            get: function get() {
              return this.media.currentSrc;
            }
          }, {
            key: "download",
            get: function get() {
              var e = this.config.urls.download;
              return ne(e) ? e : this.source;
            },
            set: function set(e) {
              ne(e) && (this.config.urls.download = e, nt.setDownloadUrl.call(this));
            }
          }, {
            key: "poster",
            set: function set(e) {
              this.isVideo ? yt.setPoster.call(this, e, !1)["catch"](function () {}) : this.debug.warn("Poster can only be set for video");
            },
            get: function get() {
              return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
            }
          }, {
            key: "ratio",
            get: function get() {
              if (!this.isVideo) return null;
              var e = He(Fe.call(this));
              return $(e) ? e.join(":") : e;
            },
            set: function set(e) {
              this.isVideo ? Y(e) && De(e) ? (this.config.ratio = e, Re.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video");
            }
          }, {
            key: "autoplay",
            set: function set(e) {
              var t = Q(e) ? e : this.config.autoplay;
              this.config.autoplay = t;
            },
            get: function get() {
              return Boolean(this.config.autoplay);
            }
          }, {
            key: "currentTrack",
            set: function set(e) {
              rt.set.call(this, e, !1);
            },
            get: function get() {
              var e = this.captions,
                  t = e.toggled,
                  i = e.currentTrack;
              return t ? i : -1;
            }
          }, {
            key: "language",
            set: function set(e) {
              rt.setLanguage.call(this, e, !1);
            },
            get: function get() {
              return (rt.getCurrentTrack.call(this) || {}).language;
            }
          }, {
            key: "pip",
            set: function set(e) {
              if (Ee.pip) {
                var t = Q(e) ? e : !this.pip;
                X(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? lt : ct), X(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture());
              }
            },
            get: function get() {
              return Ee.pip ? ae(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === lt : null;
            }
          }], [{
            key: "supported",
            value: function value(e, t, i) {
              return Ee.check(e, t, i);
            }
          }, {
            key: "loadSprite",
            value: function value(e, t) {
              return Ge(e, t);
            }
          }, {
            key: "setup",
            value: function value(e) {
              var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = null;
              return Y(e) ? n = Array.from(document.querySelectorAll(e)) : J(e) ? n = Array.from(e) : $(e) && (n = e.filter(G)), ae(n) ? null : n.map(function (e) {
                return new t(e, i);
              });
            }
          }]), t;
        }();

        return Lt.defaults = (It = ot, JSON.parse(JSON.stringify(It))), Lt;
      }); //# sourceMappingURL=plyr.min.js.map

      /***/
    },

    /***/
    "WXJF":
    /*!*********************************************************!*\
      !*** ./src/app/feature/course/course-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: CourseRoutingModule */

    /***/
    function WXJF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseRoutingModule", function () {
        return CourseRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_course_course_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/course/course.component */
      "Q2+z");

      var routes = [{
        path: '',
        component: _components_course_course_component__WEBPACK_IMPORTED_MODULE_2__["CourseComponent"]
      }];

      var CourseRoutingModule = function CourseRoutingModule() {
        _classCallCheck(this, CourseRoutingModule);
      };

      CourseRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: CourseRoutingModule
      });
      CourseRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function CourseRoutingModule_Factory(t) {
          return new (t || CourseRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CourseRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CourseRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "e4UC":
    /*!******************************************************************!*\
      !*** ./src/app/feature/course/components/gist/gist.component.ts ***!
      \******************************************************************/

    /*! exports provided: GistComponent */

    /***/
    function e4UC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GistComponent", function () {
        return GistComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["iframe"];
      var _c1 = ["script"];

      var GistComponent = /*#__PURE__*/function () {
        function GistComponent() {
          _classCallCheck(this, GistComponent);

          this.gistId = 'deyson12';
          this.file = '';
          this.height = '';
          this.type = 'text/javascript';
          this.path = 'https://gist.github.com/deyson12/';
        }

        _createClass(GistComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.iframe.nativeElement.id = 'gist-' + this.gistId;
            var doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
            var content = "\n        <html>\n        <head>\n          <base target=\"_parent\">\n        </head>\n        <body onload=\"parent.document.getElementById('".concat(this.iframe.nativeElement.id, "')\">\n        <script src=\"https://gist.github.com/deyson12/").concat(this.file, "\"></script>\n        </body>\n      </html>\n    ");
            doc.open();
            doc.write(content);
            doc.close(); // const docu = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
            // let test = document.createElement("div");
            // this.renderer.appendChild(test, docu.documentElement);
            // console.log(test);
            // this.renderer.appendChild(this.script.nativeElement, test);

            this.mostrarAlertaSuscribcion();
          }
        }, {
          key: "mostrarAlertaSuscribcion",
          value: function mostrarAlertaSuscribcion() {
            var allowSub = localStorage.getItem('allowSub');

            if (!allowSub) {//alert('Hola');
            }
          }
        }]);

        return GistComponent;
      }();

      GistComponent.??fac = function GistComponent_Factory(t) {
        return new (t || GistComponent)();
      };

      GistComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: GistComponent,
        selectors: [["app-gist"]],
        viewQuery: function GistComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.iframe = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.script = _t.first);
          }
        },
        inputs: {
          gistId: "gistId",
          file: "file",
          height: "height"
        },
        decls: 2,
        vars: 1,
        consts: [["width", "100%", 2, "margin-bottom", "1rem", 3, "height"], ["iframe", ""]],
        template: function GistComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "iframe", 0, 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("height", ctx.height);
          }
        },
        styles: ["iframe[_ngcontent-%COMP%] {\n  border: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2dpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoiZ2lzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlmcmFtZSB7XG4gICAgYm9yZGVyOiAwcHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GistComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-gist',
            templateUrl: './gist.component.html',
            styleUrls: ['./gist.component.scss']
          }]
        }], function () {
          return [];
        }, {
          iframe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['iframe']
          }],
          gistId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          file: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          script: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['script']
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=feature-course-course-module-es5.js.map