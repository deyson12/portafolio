(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-home-home-module"],{

/***/ "4Ace":
/*!*************************************************!*\
  !*** ./node_modules/@iconify/icons-mdi/home.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "4yq2":
/*!*****************************************************!*\
  !*** ./src/app/feature/home/home-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "D/nc");





const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "8CF1":
/*!*************************************************************!*\
  !*** ./src/app/feature/home/shared/model/emailRespuesta.ts ***!
  \*************************************************************/
/*! exports provided: EmailRespusta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailRespusta", function() { return EmailRespusta; });
class EmailRespusta {
}


/***/ }),

/***/ "A4/C":
/*!*********************************************!*\
  !*** ./src/app/feature/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "4yq2");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "D/nc");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");






class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "D/nc":
/*!****************************************************************!*\
  !*** ./src/app/feature/home/components/home/home.component.ts ***!
  \****************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _shared_model_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/model/email */ "LlgP");
/* harmony import */ var _shared_model_emailRespuesta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/model/emailRespuesta */ "8CF1");
/* harmony import */ var src_app_feature_shared_config_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/feature/shared/config/messages */ "eH0B");
/* harmony import */ var _iconify_icons_mdi_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-mdi/home */ "4Ace");
/* harmony import */ var _iconify_icons_mdi_home__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_home__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_feature_shared_config_skills__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/feature/shared/config/skills */ "bs0r");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_service_home_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/service/home.service */ "q7MZ");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "kt0X");
/* harmony import */ var src_app_feature_post_shared_service_post_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/feature/post/shared/service/post.service */ "zx9h");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
















function HomeComponent_div_42_fa_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 100);
} if (rf & 2) {
    const skill_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", skill_r3.logo);
} }
function HomeComponent_div_42_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 101);
} }
function HomeComponent_div_42_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 102);
} }
function HomeComponent_div_42_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 103);
} }
function HomeComponent_div_42_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 104);
} }
function HomeComponent_div_42_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 105);
} }
function HomeComponent_div_42_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 106);
} }
function HomeComponent_div_42_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 107);
} }
function HomeComponent_div_42_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 108);
} }
function HomeComponent_div_42_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 109);
} }
function HomeComponent_div_42_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 110);
} }
function HomeComponent_div_42_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 111);
} }
function HomeComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_42_fa_icon_1_Template, 1, 1, "fa-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_42_span_2_Template, 1, 0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_42_span_3_Template, 1, 0, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_42_span_4_Template, 1, 0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_42_span_5_Template, 1, 0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_42_span_6_Template, 1, 0, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_42_span_7_Template, 1, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_div_42_span_8_Template, 1, 0, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_div_42_span_9_Template, 1, 0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_42_span_10_Template, 1, 0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_42_span_11_Template, 1, 0, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_42_span_12_Template, 1, 0, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r3.logo != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r3.title === "Spring");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r3.title === "Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r3.title === "Message queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r3.title === "Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r3.title === "FTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r3.title === "API Test Software");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r3.title === "Protocols");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r3.title === "Database Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r3.title === "Laguage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r3.title === "Data Persistence");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r3.title === "Project Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3.desc);
} }
function HomeComponent_span_303_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.emailRespuesta.mensaje);
} }
function HomeComponent_span_304_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Mensaje enviado con ", ctx_r2.emailRespuesta.mensaje, "");
} }
class HomeComponent {
    constructor(route, homeService, store, postService, toastr) {
        this.route = route;
        this.homeService = homeService;
        this.store = store;
        this.postService = postService;
        this.toastr = toastr;
        this.faFacebookSquare = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFacebookMessenger"];
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLinkedin"];
        this.faInstagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInstagram"];
        this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowRight"];
        this.faArrowDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowDown"];
        this.faGripLinesVertical = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGripLinesVertical"];
        this.faWhatsappSquare = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faWhatsappSquare"];
        this.faMobileAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMobileAlt"];
        this.faAt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAt"];
        this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeart"];
        this.homeIcon = _iconify_icons_mdi_home__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.messages = src_app_feature_shared_config_messages__WEBPACK_IMPORTED_MODULE_5__["messagesEng"];
        this.email = new _shared_model_email__WEBPACK_IMPORTED_MODULE_3__["Email"]();
        this.emailRespuesta = new _shared_model_emailRespuesta__WEBPACK_IMPORTED_MODULE_4__["EmailRespusta"]();
        this.skills = src_app_feature_shared_config_skills__WEBPACK_IMPORTED_MODULE_7__["skills"];
        this.posts = [];
        this.postService.getPost().subscribe(posts2 => {
            this.posts = posts2;
            $(document).ready(() => {
                $("#skillsSlider").owlCarousel({
                    items: 3,
                    loop: true,
                    margin: 30,
                    autoplay: true,
                    slideTransition: 'linear',
                    autoplayTimeout: 3000,
                    autoplaySpeed: 5000,
                    autoplayHoverPause: true,
                    rewind: true,
                    responsive: {
                        0: {
                            items: 2
                        },
                        576: {
                            items: 2
                        },
                        768: {
                            items: 3
                        },
                        992: {
                            items: 4
                        }
                    }
                });
                $("#testimonial").owlCarousel({
                    rewind: true,
                    autoplay: true,
                    autoplayTimeout: 7000,
                    autoplayHoverPause: true,
                    items: 3,
                    margin: 30,
                    loop: true,
                    dots: true,
                    responsiveClass: true,
                    autoplaySpeed: 2000,
                    responsive: {
                        0: {
                            items: 1
                        },
                        576: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        }
                    }
                });
                $('#news-slider').owlCarousel({
                    loop: true,
                    rewind: true,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    margin: 10,
                    responsiveClass: true,
                    autoplaySpeed: 2000,
                    responsive: {
                        0: {
                            items: 1
                        },
                        576: {
                            items: 2
                        },
                        768: {
                            items: 3
                        },
                        992: {
                            items: 4
                        }
                    }
                });
            });
        }, error => {
            console.log('Error consultando POST: ', error);
        });
        this.store.select('language').subscribe(languaje => {
            if (languaje === 'ESP') {
                this.messages = src_app_feature_shared_config_messages__WEBPACK_IMPORTED_MODULE_5__["messagesEsp"];
            }
            else {
                this.messages = src_app_feature_shared_config_messages__WEBPACK_IMPORTED_MODULE_5__["messagesEng"];
            }
        });
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const modulo = 'modulo';
            if (params[modulo]) {
                this.scroll(params[modulo]);
            }
        });
    }
    scroll(element) {
        if (element !== 'index') {
            document.getElementById(element).scrollIntoView({ behavior: 'smooth' });
        }
    }
    enviarEmail() {
        this.emailRespuesta = new _shared_model_emailRespuesta__WEBPACK_IMPORTED_MODULE_4__["EmailRespusta"]();
        this.email.nombre = $('#nombre').val();
        this.email.destinatario = $('#destinatario').val();
        this.email.mensaje = $('#mensaje').val();
        this.emailRespuesta.codigo = 99;
        if (!this.email.nombre) {
            this.emailRespuesta.mensaje = 'El campo Nombre es requerido';
        }
        else if (!this.email.destinatario) {
            this.emailRespuesta.mensaje = 'El campo Email es requerido';
        }
        else if (!this.email.mensaje) {
            this.emailRespuesta.mensaje = 'El campo Mensaje es requerido';
        }
        else {
            this.homeService.enviarEmail(this.email).subscribe((response) => {
                this.toastr.info('Pronto me pondré e contacto contigo', 'Gracias!');
            }, error => {
                this.toastr.error('No es posible contactar en este momento, por favor enviar un correo manual a: deyson12@gmail.com', 'Error!');
            });
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_home_service__WEBPACK_IMPORTED_MODULE_9__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_feature_post_shared_service_post_service__WEBPACK_IMPORTED_MODULE_11__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 344, vars: 32, consts: [["alt", "background", 1, "background-image"], ["id", "index"], [1, "container"], ["id", "home", 1, "row", "hero"], [1, "col-sm-12", "col-md-12", "col-lg-8", "col-xl-8", "animatex__animated", "animatex__backInLeft"], [1, "animatex__animated", "animatex__lightSpeedInLeft", "animatex__delay-1s"], [1, "titleHero"], [1, "deyson", "animatex__animated", "animatex__heartBeat", "animatex__delay-1s", 2, "display", "inline-block"], [1, "resume", "text-justify"], [1, "iLoveCode"], [1, "heart"], [1, "scrollDownInfo", 2, "margin", "0px"], [1, "scrollDownInfo", "scrollDownInfoDesc", 2, "margin", "3px"], [1, "scrollDownInfo", "scrollDownInfoDesc", "scrollDown", "animatex__animated", "animatex__shakeY", "animatex__infinite", "animatex__delay-2s", "duration10s"], [3, "icon"], [1, "col-sm-12", "col-md-12", "col-lg-4", "col-xl-4", "centrado", "imagenHero", "d-none", "d-sm-none", "d-md-none", "d-lg-block", "d-xl-block", "animatex__animated", "animatex__zoomIn"], ["src", "../../../../../assets/images/blob.svg", "alt", "", 1, "absolutePos"], ["src", "../../../../../assets/images/developer.svg", "alt", "", 1, "absolutePos", "developerLogo", "animatex__animated", "animatex__backInRight"], ["id", "aboutMe", 1, "row", "module"], [1, "col-12"], [1, "titleModule"], [1, "azul", 3, "icon"], [1, "col-12", "text-justify"], ["id", "skills", 1, "row", "module"], ["id", "skillsSlider", 1, "owl-carousel"], ["class", "skillContainer centrado", 4, "ngFor", "ngForOf"], ["id", "workLine", 1, "row", "module"], [1, "row"], [1, "col-10", "offset-1"], [1, "row", "align-items-center", "how-it-works", "d-flex"], [1, "col-2", "text-center", "bottom", "d-inline-flex", "justify-content-center", "align-items-center"], [1, "circle", "font-weight-bold"], [1, "col-10", "col-sm-10", "col-md-8", "col-lg-8", "col-xl-8", "text-center"], [1, "row", "timeline"], [1, "col-2"], [1, "corner", "top-right"], [1, "col-8"], [1, "corner", "left-bottom"], [1, "row", "align-items-center", "justify-content-end", "how-it-works", "d-flex"], [1, "col-2", "text-center", "full", "d-inline-flex", "justify-content-center", "align-items-center"], [1, "corner", "right-bottom"], [1, "corner", "top-left"], [1, "col-2", "text-center", "full2", "d-inline-flex", "justify-content-center", "align-items-center"], [1, "col-2", "text-center", "top2", "d-inline-flex", "justify-content-center", "align-items-center"], ["id", "projects", 1, "row", "module"], [1, "row", "align-items-cente"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-4", "col-xl-4", "centrado", "projectCard"], [1, "skillTitle"], [1, "skillDesc"], ["href", "#img1"], ["src", "../../../../../assets/images/projects/higia-small.png", "alt", "Higia", 1, "imgProject"], ["href", "#", "id", "img1", 1, "lightbox"], [2, "background-image", "url('../../../../../assets/images/projects/higia-small.png')"], ["href", "#img2"], ["src", "../../../../../assets/images/projects/aurora-small.png", "alt", "Aurora", 1, "imgProject"], ["href", "#", "id", "img2", 1, "lightbox"], [2, "background-image", "url('../../../../../assets/images/projects/aurora-small.png')"], ["href", "#img3"], ["src", "../../../../../assets/images/projects/ifunko-small.png", "alt", "iFunkoShop", 1, "imgProject"], ["href", "#", "id", "img3", 1, "lightbox"], [2, "background-image", "url('../../../../../assets/images/projects/ifunko-small.png')"], ["id", "testimonials", 1, "testimonials"], [1, "col-md-12"], ["id", "testimonial", 1, "owl-carousel", "client-testimonial-carousel"], [1, "single-testimonial-item"], ["id", "contact", 1, "row", "module"], ["class", "mensajeError wow animatex__animated animatex__headShake", 4, "ngIf"], ["class", "mensajeExito wow animatex__animated animatex__headShake", 4, "ngIf"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-6", "col-xl-6", "wow", "animatex__animated", "animatex__backInLeft"], [1, "col-6"], ["id", "nombre", 1, "inputContact", 3, "placeholder"], ["id", "destinatario", 1, "inputContact", 3, "placeholder"], [1, "row", "mt-4"], ["rows", "5", "id", "mensaje", 1, "inputContact", 3, "placeholder"], ["type", "button", 1, "botonEnviar", 3, "click"], [1, "iconoEnviar", 3, "icon"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-6", "col-xl-6", "mt-5", "mt-sm-5", "mt-md-5", "mt-lg-0", "mt-xl-0"], [1, "col-12", "col-sm-6", "col-md-6", "col-lg-6", "col-xl-6"], [1, "col-sm-12", "d-flex", "align-items-center"], [1, "logonetwork", "logonetworkBig", 3, "icon"], [1, "contacCard"], ["src", "../.././../../../assets/images/correo.png", "alt", ""], ["href", "https://m.me/DeysonEstrada", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://www.linkedin.com/in/dfep/", "target", "_blank", "rel", "noopener noreferrer"], [1, "col-12", "col-sm-6", "col-md-6", "col-lg-6", "col-xl-6", "justify-content-center"], ["data-version", "v1", "data-size", "medium", "data-locale", "es_ES", "data-type", "horizontal", "data-theme", "light", "data-vanity", "dfep", 1, "LI-profile-badge", "align-self-center", "mx-auto"], ["href", "https://co.linkedin.com/in/dfep?trk=profile-badge", 1, "LI-simple-link"], [1, "skillContainer", "centrado"], ["class", "skillLogo", 3, "icon", 4, "ngIf"], ["class", "iconify skillLogo skillLogoIconify", "data-icon", "cib:spring", "data-inline", "false", 4, "ngIf"], ["class", "iconify skillLogo skillLogoIconify", "data-icon", "fa-solid:database", "data-inline", "false", 4, "ngIf"], ["class", "iconify skillLogo skillLogoIconify", "data-icon", "simple-icons:rabbitmq", "data-inline", "false", 4, "ngIf"], ["class", "iconify skillLogo skillLogoIconify", "data-icon", "si-glyph:test-tube", "data-inline", "false", 4, "ngIf"], ["class", "iconify skillLogo skillLogoIconify", "data-icon", "whh:ftp", "data-inline", "false", 4, "ngIf"], ["class", "iconify skillLogo skillLogoIconify", "data-icon", "cib:postman", "data-inline", "false", 4, "ngIf"], ["class", "iconify skillLogo skillLogoIconify", "data-icon", "mdi:protocol", "data-inline", "false", 4, "ngIf"], ["class", "iconify skillLogo skillLogoIconify", "data-icon", "mdi:database-search", "data-inline", "false", 4, "ngIf"], ["class", "iconify skillLogo skillLogoIconify", "data-icon", "vs:language", "data-inline", "false", 4, "ngIf"], ["class", "iconify skillLogo skillLogoIconify", "data-icon", "mdi:database-import", "data-inline", "false", 4, "ngIf"], ["class", "iconify skillLogo skillLogoIconify", "data-icon", "mdi:jira", "data-inline", "false", 4, "ngIf"], [1, "skillLogo", 3, "icon"], ["data-icon", "cib:spring", "data-inline", "false", 1, "iconify", "skillLogo", "skillLogoIconify"], ["data-icon", "fa-solid:database", "data-inline", "false", 1, "iconify", "skillLogo", "skillLogoIconify"], ["data-icon", "simple-icons:rabbitmq", "data-inline", "false", 1, "iconify", "skillLogo", "skillLogoIconify"], ["data-icon", "si-glyph:test-tube", "data-inline", "false", 1, "iconify", "skillLogo", "skillLogoIconify"], ["data-icon", "whh:ftp", "data-inline", "false", 1, "iconify", "skillLogo", "skillLogoIconify"], ["data-icon", "cib:postman", "data-inline", "false", 1, "iconify", "skillLogo", "skillLogoIconify"], ["data-icon", "mdi:protocol", "data-inline", "false", 1, "iconify", "skillLogo", "skillLogoIconify"], ["data-icon", "mdi:database-search", "data-inline", "false", 1, "iconify", "skillLogo", "skillLogoIconify"], ["data-icon", "vs:language", "data-inline", "false", 1, "iconify", "skillLogo", "skillLogoIconify"], ["data-icon", "mdi:database-import", "data-inline", "false", 1, "iconify", "skillLogo", "skillLogoIconify"], ["data-icon", "mdi:jira", "data-inline", "false", 1, "iconify", "skillLogo", "skillLogoIconify"], [1, "mensajeError", "wow", "animatex__animated", "animatex__headShake"], [1, "mensajeExito", "wow", "animatex__animated", "animatex__headShake"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "<Deyson/>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "I ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u2764");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "fa-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "fa-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, HomeComponent_div_42_Template, 17, 14, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "fa-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "2021 - Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Gorilla Logic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Working as a Sr Backend Java.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Mercado Libre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Development a pre-scored API to validate user before to offer the insurance in Marketplace to RODA.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "2020 - 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Overactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Development of the app SPB (Single Business Portal) for the Puerto Rico Government, in the help desk module.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "ZABUD Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Migrating from monolithic applications in java 1.6 to new technologies like microservices in SpringBoot and front end with Vue.js.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "2020 - 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "2019 - 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "SURA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Development of the ARL Sura's \"Convenios\" application with technologies such as Angular (Ngrx, Sass), SpringBoot.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "PersonalSoft: SURA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Development and support of the IPSA application, in which all the medical care of SURA patients is recorded, with technologies such as Java, Oracle.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "2016 - 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "PersonalSoft: Votre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Development to update leonisa's customer notification policies by email and SMS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "PersonalSoft: Bancolombia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Development of the Stand Alone application for downloading and converting the OFAC list to then process it on an ISeries server.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "PersonalSoft: Postob\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Development for updating the inventory and dispatch module in the RIME application.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "PersonalSoft: EAFIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Development in the applications of Investigations (Investiga), Admissions and Registrations and Inscriptions, for the students of the educational complex.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "2013 - 2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "fa-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Higia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Aurora Centro de Belleza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "iFunkoShop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "fa-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " Recomendations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Deyson es una persona que asume los retos con gran altura t\u00E9cnica y profesionalismo. La acumulaci\u00F3n de experiencia que tenido hace que la entrega de valor a la compa\u00F1\u00EDa sea incomparable. Su serenidad y compa\u00F1erismo resaltan entre sus tantas habilidades.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Santiago V\u00E1squez Rodr\u00EDguez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Data Scientist Ssr en Mercado Libre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "I worked with Deyson. He is an excelent professional and he has strength in software's development, database, working in a team and lidersheap.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Glendy Zulay Duran Carvajal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Analista de calidad en Seguros SURA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "He is a very curious person and easy to learn, he is a good coworker and contributes a lot to the creation of a highly efficient work group.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Carlos Jose De Fex Montoya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Test automation analyst at Olive Tree Holdings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Deyson es una persona responsable, con capacidades de liderazgo, una muy buena formaci\u00F3n t\u00E9cnica, buena comunicaci\u00F3n y su trabajo es de calidad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Jhon Fredy Mart\u00EDnez Realpe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Arquitecto Desarrollador en Ceiba Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Una persona \u00E9tica, responsable, dedicado al autoaprendizaje continu\u00F3, capacidad de liderazgo, conocimientos t\u00E9cnicos amplios y con gran adaptaci\u00F3n a los cambios. Recomendado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Jes\u00FAs David Villalba Madera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Bachelor of Science in System Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Es una gran persona y profesional, posee muchos talentos y habilidades de admirar, ama lo que hace y siempre busca soluciones a todo, se adapta r\u00E1pido y f\u00E1cil a cualquier ambiente, es muy inteligente le gusta trabajar en equipo pero tambi\u00E9n individual.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Angee Xilena Matoma Urrego");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Ingeniero Industrial Especialista en Formulaci\u00F3n y Evaluaci\u00F3n de Proyectos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "fa-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](303, HomeComponent_span_303_Template, 2, 1, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](304, HomeComponent_span_304_Template, 2, 1, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "textarea", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "button", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_316_listener() { return ctx.enviarEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "fa-icon", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "fa-icon", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, " \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "fa-icon", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, " \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Deyson Estrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "fa-icon", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, " \u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Deyson Estrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Deyson Estrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.messages.homePage.hiThere, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.messages.homePage.im, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.messages.homePage.heroDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.messages.homePage.scrollDown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.messages.homePage.forMoreInformation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArrowDown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGripLinesVertical);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.messages.aboutMe, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.messages.homePage.aboutMe.resume, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGripLinesVertical);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.messages.skills, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGripLinesVertical);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.messages.timeline, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGripLinesVertical);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.messages.projects, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.messages.homePage.projects.higiaDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.messages.homePage.projects.auroraDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.messages.homePage.projects.ifunkoshopDesc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGripLinesVertical);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGripLinesVertical);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.messages.contact, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailRespuesta.mensaje && ctx.emailRespuesta.codigo == 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailRespuesta.mensaje && ctx.emailRespuesta.codigo != 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.messages.homePage.contact.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.messages.homePage.contact.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.messages.homePage.contact.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.messages.homePage.contact.send, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArrowRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faAt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faFacebookSquare);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLinkedin);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"]], styles: [".alert-portfolio[_ngcontent-%COMP%] {\n  color: #0f2a5c;\n  background-color: #bfd1f3;\n  border-color: #adc5f0;\n}\n.alert-portfolio[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top-color: #97b5ed;\n}\n.alert-portfolio[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n  color: #081631;\n}\n.badge-portfolio[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #225bc5;\n}\n.badge-portfolio[href][_ngcontent-%COMP%]:hover, .badge-portfolio[href][_ngcontent-%COMP%]:focus {\n  color: #fff;\n  background-color: #1a4699;\n}\n.bg-portfolio[_ngcontent-%COMP%] {\n  background-color: #225bc5 !important;\n}\na.bg-portfolio[_ngcontent-%COMP%]:hover, a.bg-portfolio[_ngcontent-%COMP%]:focus, button.bg-portfolio[_ngcontent-%COMP%]:hover, button.bg-portfolio[_ngcontent-%COMP%]:focus {\n  background-color: #1a4699 !important;\n}\n.border-portfolio[_ngcontent-%COMP%] {\n  border-color: #225bc5 !important;\n}\n.btn-portfolio[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #225bc5;\n  border-color: #225bc5;\n}\n.btn-portfolio[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #1c4ca6;\n  border-color: #1a4699;\n}\n.btn-portfolio[_ngcontent-%COMP%]:focus, .btn-portfolio.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(34, 91, 197, 0.5);\n}\n.btn-portfolio.disabled[_ngcontent-%COMP%], .btn-portfolio[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #225bc5;\n  border-color: #225bc5;\n}\n.btn-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-portfolio.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #1a4699;\n  border-color: #18408c;\n}\n.btn-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-portfolio.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(34, 91, 197, 0.5);\n}\n.btn-outline-portfolio[_ngcontent-%COMP%] {\n  color: #225bc5;\n  background-color: transparent;\n  border-color: #225bc5;\n}\n.btn-outline-portfolio[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #225bc5;\n  border-color: #225bc5;\n}\n.btn-outline-portfolio[_ngcontent-%COMP%]:focus, .btn-outline-portfolio.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(34, 91, 197, 0.5);\n}\n.btn-outline-portfolio.disabled[_ngcontent-%COMP%], .btn-outline-portfolio[_ngcontent-%COMP%]:disabled {\n  color: #225bc5;\n  background-color: transparent;\n}\n.btn-outline-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-portfolio.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #225bc5;\n  border-color: #225bc5;\n}\n.btn-outline-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-portfolio.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(34, 91, 197, 0.5);\n}\n.list-group-item-portfolio[_ngcontent-%COMP%] {\n  color: #0f2a5c;\n  background-color: #adc5f0;\n}\n.list-group-item-portfolio.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-portfolio.list-group-item-action[_ngcontent-%COMP%]:focus {\n  color: #0f2a5c;\n  background-color: #97b5ed;\n}\n.list-group-item-portfolio.list-group-item-action.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0f2a5c;\n  border-color: #0f2a5c;\n}\n.table-portfolio[_ngcontent-%COMP%], .table-portfolio[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-portfolio[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #adc5f0;\n}\n.table-hover[_ngcontent-%COMP%]   .table-portfolio[_ngcontent-%COMP%]:hover {\n  background-color: #97b5ed;\n}\n.table-hover[_ngcontent-%COMP%]   .table-portfolio[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-portfolio[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n  background-color: #97b5ed;\n}\n.text-portfolio[_ngcontent-%COMP%] {\n  color: #225bc5 !important;\n}\na.text-portfolio[_ngcontent-%COMP%]:hover, a.text-portfolio[_ngcontent-%COMP%]:focus {\n  color: #1a4699 !important;\n}\n.background-image[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n}\n@media screen and (min-width: 1px) {\n  .background-image[_ngcontent-%COMP%] {\n    content: url('background9.svg');\n  }\n}\n@media screen and (min-width: 534px) {\n  .background-image[_ngcontent-%COMP%] {\n    content: url('background8.svg');\n  }\n}\n@media screen and (min-width: 650px) {\n  .background-image[_ngcontent-%COMP%] {\n    content: url('background7.svg');\n  }\n}\n@media screen and (min-width: 768px) {\n  .background-image[_ngcontent-%COMP%] {\n    content: url('background6.svg');\n  }\n}\n@media screen and (min-width: 992px) {\n  .background-image[_ngcontent-%COMP%] {\n    content: url('background5.svg');\n  }\n}\n@media screen and (min-width: 1050px) {\n  .background-image[_ngcontent-%COMP%] {\n    content: url('background4.svg');\n  }\n}\n@media screen and (min-width: 1200px) {\n  .background-image[_ngcontent-%COMP%] {\n    content: url('background3.svg');\n  }\n}\n@media screen and (min-width: 1350px) {\n  .background-image[_ngcontent-%COMP%] {\n    content: url('background2.svg');\n  }\n}\n@media screen and (min-width: 1670px) {\n  .background-image[_ngcontent-%COMP%] {\n    content: url('background.svg');\n  }\n}\n.absolutePos[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.developerLogo[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-top: 25px;\n}\n.logonetwork[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-left: 10px;\n  color: #5d5d5d;\n}\n.logonetworkBig[_ngcontent-%COMP%] {\n  font-size: 40px !important;\n}\n.hero[_ngcontent-%COMP%] {\n  padding: 50px 0px 50px 0px;\n}\n.titleHero[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 64px;\n  line-height: 72px;\n}\n.deyson[_ngcontent-%COMP%] {\n  color: #225bc5;\n}\n.resume[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 25px;\n  padding-left: 10px;\n}\n.scrollDown[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n.scrollDownInfo[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 19px;\n  color: #225bc5;\n}\n.scrollDownInfoDesc[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 12px;\n}\n.module[_ngcontent-%COMP%] {\n  padding: 50px 0px 50px 0px;\n}\n.titleModule[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 33px;\n}\n.postTitulo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.logoHero[_ngcontent-%COMP%] {\n  font-size: 300px;\n}\n.centrado[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.centradoHorizontal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.skillContainer[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.skillLogo[_ngcontent-%COMP%] {\n  font-size: 60px;\n}\n.skillLogoIconify[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.skillTitle[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 25px;\n}\n.skillDesc[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  text-align: center;\n}\n.azul[_ngcontent-%COMP%] {\n  color: #225bc5;\n}\n.projectCard[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n.imgProject[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  margin-top: 20px;\n  width: 100%;\n}\n.contacCard[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #696969;\n}\n.inputContact[_ngcontent-%COMP%] {\n  padding: 15px 15px 15px 20px;\n  border-radius: 5px;\n  width: 100%;\n  border: 1px solid;\n}\n.duration2s[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n.duration10s[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 10s;\n          animation-duration: 10s;\n}\n.botonEnviar[_ngcontent-%COMP%] {\n  border: 1px solid #225bc5;\n  box-sizing: border-box;\n  border-radius: 5px;\n  padding: 10px 30px;\n  font-style: normal;\n  line-height: 18px;\n  color: #fff;\n  background-color: #225bc5;\n}\n.iconoEnviar[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.postTiluloBold[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.swipe[_ngcontent-%COMP%] {\n  font-size: 15px;\n  flex: 1 1 auto;\n  text-align: right;\n  font-weight: normal;\n}\n.mensajeExito[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #225bc5;\n  display: inline-block;\n}\n.mensajeError[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #e42424;\n  display: inline-block;\n}\n.iLoveCode[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.heart[_ngcontent-%COMP%] {\n  color: #e42424;\n}\n.card-body[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.card-title[_ngcontent-%COMP%] {\n  color: #225bc5;\n}\n.card-text[_ngcontent-%COMP%] {\n  color: black;\n}\n.boton[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  box-sizing: border-box;\n  border-radius: 5px;\n  padding: 10px 30px;\n  font-style: normal;\n  line-height: 18px;\n  color: black;\n  background-color: #ffffff;\n  font-size: 11px;\n}\n.skillLogo[_ngcontent-%COMP%] {\n  font-size: 60px;\n}\n.cardPost[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.flexCard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n}\n.card-img-top[_ngcontent-%COMP%] {\n  height: 40%;\n}\n@media screen and (max-width: 576px) {\n  .card-img-top[_ngcontent-%COMP%] {\n    height: 50%;\n  }\n}\n.circle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 13px 10px;\n  border-radius: 10px;\n  background-color: #ffffff;\n  color: black;\n  z-index: 2;\n  border: 2px solid #225bc5;\n}\n.how-it-works.row[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\n  align-self: stretch;\n}\n.how-it-works.row[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  border-left: 3px solid #225bc5;\n  z-index: 1;\n}\n.how-it-works.row[_ngcontent-%COMP%]   .col-2.bottom[_ngcontent-%COMP%]::after {\n  height: 50%;\n  left: 50%;\n  top: 50%;\n}\n.how-it-works.row[_ngcontent-%COMP%]   .col-2.full[_ngcontent-%COMP%]::after {\n  height: 100%;\n  left: calc(50% - 3px);\n}\n.how-it-works.row[_ngcontent-%COMP%]   .col-2.full2[_ngcontent-%COMP%]::after {\n  height: 100%;\n  left: calc(50%);\n}\n.how-it-works.row[_ngcontent-%COMP%]   .col-2.top[_ngcontent-%COMP%]::after {\n  height: 50%;\n  left: 50%;\n  top: 0;\n}\n.how-it-works.row[_ngcontent-%COMP%]   .col-2.top2[_ngcontent-%COMP%]::after {\n  height: 50%;\n  left: calc(50% - 3px);\n  top: 0;\n}\n.timeline[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 0;\n  height: 40px;\n}\n.timeline[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top: 3px solid #225bc5;\n  margin: 0;\n  top: 17px;\n  position: relative;\n}\n.timeline[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: hidden;\n}\n.timeline[_ngcontent-%COMP%]   .corner[_ngcontent-%COMP%] {\n  border: 3px solid #225bc5;\n  width: 100%;\n  position: relative;\n  border-radius: 15px;\n}\n.timeline[_ngcontent-%COMP%]   .top-right[_ngcontent-%COMP%] {\n  left: 50%;\n  top: -50%;\n}\n.timeline[_ngcontent-%COMP%]   .left-bottom[_ngcontent-%COMP%] {\n  left: -50%;\n  top: calc(50% - 3px);\n}\n.timeline[_ngcontent-%COMP%]   .top-left[_ngcontent-%COMP%] {\n  left: -50%;\n  top: -50%;\n}\n.timeline[_ngcontent-%COMP%]   .right-bottom[_ngcontent-%COMP%] {\n  left: 50%;\n  top: calc(50% - 3px);\n}\n.pantalla[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #C4C4C4;\n  width: 100%;\n  height: 100%;\n}\n.pantallaInt[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 10px;\n  margin-left: 10%;\n  margin-top: 10%;\n  width: 80%;\n  height: 80%;\n}\n.imagenHero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.client-testimonial-carousel[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 5px;\n  background: #6aaf08 !important;\n  width: 20px;\n  display: inline-block;\n  margin: 5px;\n  transition: 0.2s;\n  border-radius: 2px;\n}\n.client-testimonial-carousel[_ngcontent-%COMP%]   button.owl-dot.active[_ngcontent-%COMP%] {\n  background: #000 !important;\n  width: 30px;\n}\n.client-testimonial-carousel[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 25px;\n}\n.single-testimonial-item[_ngcontent-%COMP%] {\n  position: relative;\n  box-shadow: 0 0 2px #dadfd3;\n  margin: 2px;\n  padding: 20px;\n  font-style: italic;\n  padding-left: 85px;\n  height: 100%;\n}\n.single-testimonial-item[_ngcontent-%COMP%]:before {\n  content: '\"';\n  font-weight: 900;\n  position: absolute;\n  left: 20px;\n  top: 50%;\n  font-size: 30px;\n  color: #225bc5;\n  line-height: 30px;\n  margin-top: -15px;\n}\n.single-testimonial-item[_ngcontent-%COMP%]:after {\n  background: #ddd;\n  content: \"\";\n  height: 70%;\n  left: 60px;\n  position: absolute;\n  top: 10%;\n  width: 1px;\n}\n.single-testimonial-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-style: normal;\n  margin-bottom: 0;\n}\n.single-testimonial-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: normal;\n  margin-top: 5px;\n}\n\n.lightbox[_ngcontent-%COMP%] {\n  \n  display: none;\n  \n  position: fixed;\n  z-index: 999999;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  \n  padding: 1em;\n  \n  background: rgba(0, 0, 0, 0.8);\n}\n\n.lightbox[_ngcontent-%COMP%]:target {\n  display: block;\n}\n.lightbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  \n  display: block;\n  width: 100%;\n  height: 100%;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTs7cUNBQUE7QUFrQkE7RUFDRSxjQVhhO0VBWWIseUJBUmE7RUFTYixxQkFkYTtBQ1JmO0FEeUJBO0VBQ0UseUJBbkJhO0FDSGY7QUR5QkE7RUFDRSxjQWxCYTtBQ0pmO0FEeUJBO0VBQ0UsV0FsQmlDO0VBbUJqQyx5QkE5QmE7QUNRZjtBRHlCQTtFQUNFLFdBdkJpQztFQXdCakMseUJBbENhO0FDWWY7QUR5QkE7RUFDRSxvQ0FBQTtBQ3RCRjtBRHlCQTs7O0VBR0Usb0NBQUE7QUN0QkY7QUR5QkE7RUFDRSxnQ0FBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBMUNpQztFQTJDakMseUJBdERhO0VBdURiLHFCQXZEYTtBQ2lDZjtBRHlCQTtFQUNFLFdBaERpQztFQWlEakMseUJBdERhO0VBdURiLHFCQTVEYTtBQ3NDZjtBRHlCQTtFQUNFLCtDQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0ExRGlDO0VBMkRqQyx5QkF0RWE7RUF1RWIscUJBdkVhO0FDaURmO0FEeUJBO0VBQ0UsV0FoRWlDO0VBaUVqQyx5QkEzRWE7RUE0RWIscUJBeEVhO0FDa0RmO0FEeUJBO0VBQ0UsK0NBQUE7QUN0QkY7QUR5QkE7RUFDRSxjQXJGYTtFQXNGYiw2QkFBQTtFQUNBLHFCQXZGYTtBQ2lFZjtBRHlCQTtFQUNFLFdBaEZpQztFQWlGakMseUJBNUZhO0VBNkZiLHFCQTdGYTtBQ3VFZjtBRHlCQTtFQUNFLCtDQUFBO0FDdEJGO0FEeUJBO0VBQ0UsY0FyR2E7RUFzR2IsNkJBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQS9GaUM7RUFnR2pDLHlCQTNHYTtFQTRHYixxQkE1R2E7QUNzRmY7QUR5QkE7RUFDRSwrQ0FBQTtBQ3RCRjtBRHlCQTtFQUNFLGNBaEhhO0VBaUhiLHlCQWxIYTtBQzRGZjtBRHlCQTtFQUNFLGNBckhhO0VBc0hiLHlCQXhIYTtBQ2tHZjtBRHlCQTtFQUNFLFdBbkhpQztFQW9IakMseUJBM0hhO0VBNEhiLHFCQTVIYTtBQ3NHZjtBRHlCQTs7O0VBR0UseUJBbklhO0FDNkdmO0FEeUJBO0VBQ0UseUJBeElhO0FDa0hmO0FEeUJBOztFQUVFLHlCQTdJYTtBQ3VIZjtBRHlCQTtFQUNFLHlCQUFBO0FDdEJGO0FEeUJBO0VBQ0UseUJBQUE7QUN0QkY7QUEzSUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7QUE4SUQ7QUEzSUU7RUFDRDtJQUNFLCtCQUFBO0VBOElEO0FBQ0Y7QUEzSUU7RUFDRDtJQUNFLCtCQUFBO0VBNklEO0FBQ0Y7QUExSUU7RUFDRDtJQUNFLCtCQUFBO0VBNElEO0FBQ0Y7QUF6SUU7RUFDRDtJQUNFLCtCQUFBO0VBMklEO0FBQ0Y7QUF4SUU7RUFDRDtJQUNFLCtCQUFBO0VBMElEO0FBQ0Y7QUF2SUU7RUFDRDtJQUNFLCtCQUFBO0VBeUlEO0FBQ0Y7QUF0SUU7RUFDRDtJQUNFLCtCQUFBO0VBd0lEO0FBQ0Y7QUFySUU7RUFDRDtJQUNFLCtCQUFBO0VBdUlEO0FBQ0Y7QUFwSUU7RUFDRDtJQUNFLDhCQUFBO0VBc0lEO0FBQ0Y7QUFuSUE7RUFDQyxrQkFBQTtBQXFJRDtBQWxJQTtFQUNDLGtCQUFBO0VBQ0EsaUJBQUE7QUFxSUQ7QUFsSUE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRHBFWTtBQ3lNYjtBQWxJQTtFQUNDLDBCQUFBO0FBcUlEO0FBbElBO0VBQ0MsMEJBQUE7QUFxSUQ7QUFsSUE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXFJRDtBQWxJQTtFQUNDLGNEekZnQjtBQzhOakI7QUFsSUE7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFxSUQ7QUFsSUE7RUFDQyxnQkFBQTtBQXFJRDtBQWxJQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRDdHZ0I7QUNrUGpCO0FBbElBO0VBQ0MsWURsSGE7RUNtSGIsZUFBQTtBQXFJRDtBQWxJQTtFQUNDLDBCQUFBO0FBcUlEO0FBbElBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXFJRDtBQWxJQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFxSUQ7QUFsSUE7RUFDQyxnQkFBQTtBQXFJRDtBQWxJQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFxSUQ7QUFsSUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXFJRDtBQWxJQTtFQUNDLGFBQUE7QUFxSUQ7QUFsSUE7RUFDQyxlQUFBO0FBcUlEO0FBbElBO0VBQ0MsbUJBQUE7QUFxSUQ7QUFsSUE7RUFDQyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBcUlEO0FBbElBO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBcUlEO0FBbElBO0VBQ0MsY0RuTGdCO0FDd1RqQjtBQWxJQTtFQUNDLGFBQUE7QUFxSUQ7QUFsSUE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQXFJRDtBQWxJQTtFQUNDLGVBQUE7RUFDQSxjQUFBO0FBcUlEO0FBbElBO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNILFdBQUE7RUFDQSxpQkFBQTtBQXFJRDtBQWxJQTtFQUNDLDhCQUFBO1VBQUEsc0JBQUE7QUFxSUQ7QUFsSUE7RUFDQywrQkFBQTtVQUFBLHVCQUFBO0FBcUlEO0FBbElBO0VBQ0MseUJBQUE7RUFDRyxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0gsV0R6TmM7RUMwTmQseUJENU5nQjtBQ2lXakI7QUFsSUE7RUFDQyxXRDlOYztBQ21XZjtBQWxJQTtFQUNDLGNBQUE7QUFxSUQ7QUFsSUE7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFxSUQ7QUFsSUE7RUFDQyxlQUFBO0VBQ0EsY0RoUGdCO0VDaVBoQixxQkFBQTtBQXFJRDtBQWxJQTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFxSUQ7QUFsSUE7RUFDQyxlQUFBO0FBcUlEO0FBbElBO0VBQ0MsY0FBQTtBQXFJRDtBQWxJQTtFQUNDLHlCRHJRYTtBQzBZZDtBQWxJRTtFQUNELGNEdlFnQjtBQzRZakI7QUFsSUU7RUFDRCxZRDVRYTtBQ2laZDtBQWxJRTtFQUNELHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlEdFJhO0VDdVJiLHlCRHhSYTtFQ3lSYixlQUFBO0FBcUlEO0FBbElFO0VBQ0MsZUFBQTtBQXFJSDtBQWxJRTtFQUNELFlBQUE7QUFxSUQ7QUFsSUU7RUFDRCxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFxSUQ7QUFsSUU7RUFDRCxXQUFBO0FBcUlEO0FBbElFO0VBQ0Q7SUFDRSxXQUFBO0VBcUlEO0FBQ0Y7QUFqSUE7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCRDFUYTtFQzJUYixZRDFUYTtFQzJUYixVQUFBO0VBQ0EseUJBQUE7QUFtSUQ7QUFoSUU7RUFDRCxtQkFBQTtBQW1JRDtBQWpJRTtFQUNELFdBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQW9JRDtBQWxJRTtFQUNELFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQXFJRDtBQW5JRTtFQUNELFlBQUE7RUFDQSxxQkFBQTtBQXNJRDtBQXBJRTtFQUNELFlBQUE7RUFDQSxlQUFBO0FBdUlEO0FBcklFO0VBQ0QsV0FBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0FBd0lEO0FBdElFO0VBQ0QsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsTUFBQTtBQXlJRDtBQXJJRTtFQUNELFVBQUE7RUFDQSxZQUFBO0FBd0lEO0FBdElFO0VBQ0QsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBeUlEO0FBdklFO0VBQ0QsYUFBQTtFQUNBLGdCQUFBO0FBMElEO0FBeElFO0VBQ0QseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQTJJRDtBQXpJRTtFQUNELFNBQUE7RUFDQSxTQUFBO0FBNElEO0FBMUlFO0VBQ0QsVUFBQTtFQUNBLG9CQUFBO0FBNklEO0FBM0lFO0VBQ0QsVUFBQTtFQUNBLFNBQUE7QUE4SUQ7QUE1SUU7RUFDRCxTQUFBO0VBQ0Esb0JBQUE7QUErSUQ7QUExSUE7RUFDQyxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUE2SUQ7QUExSUE7RUFDQyx5QkRqWmE7RUNrWmIsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQTZJRDtBQTFJQTtFQUNDLFdBQUE7RUFDRSxZQUFBO0FBNklIO0FBMUlBO0VBQ0ksV0FBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUE2SUo7QUExSUE7RUFDSSwyQkFBQTtFQUNBLFdBQUE7QUE2SUo7QUExSUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBNklKO0FBMUlBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDSCxrQkFBQTtFQUNBLFlBQUE7QUE2SUQ7QUExSUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGNEamNhO0VDa2NiLGlCQUFBO0VBQ0EsaUJBQUE7QUE2SUo7QUExSUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUE2SUo7QUExSUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQTZJSjtBQTFJQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBNklKO0FBeklBLHNCQUFBO0FBRUE7RUFDQyxzQkFBQTtFQUNBLGFBQUE7RUFFQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGtDQUFBO0VBQ0EsWUFBQTtFQUVBLDJCQUFBO0VBQ0EsOEJBQUE7QUF3SUQ7QUFySUUsNkNBQUE7QUFDQTtFQUNELGNBQUE7QUF3SUQ7QUFySUU7RUFDRCwwQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHVDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FBdUlEIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItZm9uZG86ICNmZmZmZmY7XG4kY29sb3ItbGV0cmE6IHJnYigwLCAwLCAwKTtcbiRjb2xvci1wcmltYXJpbzogIzIyNWJjNTtcbiRjb2xvci1zZWN1bmRhcmlvOiAjYjVjZmZmO1xuJGNvbG9yLWJsYW5jbzogI2ZmZjtcbiRjb2xvci1sb2dvOiAjNWQ1ZDVkO1xuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tIENPTE9SIHBvcnRmb2xpb1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuJHBvcnRmb2xpb190MTogIzIyNWJjNTtcbiRwb3J0Zm9saW9fdDI6ICMxYTQ2OTk7XG4kcG9ydGZvbGlvX3QzOiAjOTdiNWVkO1xuJHBvcnRmb2xpb190NDogI2FkYzVmMDtcbiRwb3J0Zm9saW9fdDU6ICMwZjJhNWM7XG4kcG9ydGZvbGlvX3Q2OiAjMTg0MDhjO1xuJHBvcnRmb2xpb190NzogIzFjNGNhNjtcbiRwb3J0Zm9saW9fdDg6ICMwODE2MzE7XG4kcG9ydGZvbGlvX3Q5OiAjYmZkMWYzO1xuXG4kcG9ydGZvbGlvX3NoYWRvdzogcmdiYSgzNCwgOTEsIDE5NywgMC41KTtcbiRwb3J0Zm9saW9fdGV4dF9jb2xvcl9kYXJrX2JyaWdodDogI2ZmZjtcblxuXG4uYWxlcnQtcG9ydGZvbGlvIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdDU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDk7XG4gIGJvcmRlci1jb2xvcjogJHBvcnRmb2xpb190NDtcbn1cblxuLmFsZXJ0LXBvcnRmb2xpbyBociB7XG4gIGJvcmRlci10b3AtY29sb3I6ICRwb3J0Zm9saW9fdDM7XG59XG5cbi5hbGVydC1wb3J0Zm9saW8gLmFsZXJ0LWxpbmsge1xuICBjb2xvcjogJHBvcnRmb2xpb190ODtcbn1cblxuLmJhZGdlLXBvcnRmb2xpbyB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3RleHRfY29sb3JfZGFya19icmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDE7XG59XG5cbi5iYWRnZS1wb3J0Zm9saW9baHJlZl06aG92ZXIsIC5iYWRnZS1wb3J0Zm9saW9baHJlZl06Zm9jdXMge1xuICBjb2xvcjogJHBvcnRmb2xpb190ZXh0X2NvbG9yX2RhcmtfYnJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3QyO1xufVxuXG4uYmctcG9ydGZvbGlvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190MSAhaW1wb3J0YW50O1xufVxuXG5hLmJnLXBvcnRmb2xpbzpob3ZlciwgYS5iZy1wb3J0Zm9saW86Zm9jdXMsXG5idXR0b24uYmctcG9ydGZvbGlvOmhvdmVyLFxuYnV0dG9uLmJnLXBvcnRmb2xpbzpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1wb3J0Zm9saW8ge1xuICBib3JkZXItY29sb3I6ICRwb3J0Zm9saW9fdDEgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1wb3J0Zm9saW8ge1xuICBjb2xvcjogJHBvcnRmb2xpb190ZXh0X2NvbG9yX2RhcmtfYnJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3QxO1xuICBib3JkZXItY29sb3I6ICRwb3J0Zm9saW9fdDE7XG59XG5cbi5idG4tcG9ydGZvbGlvOmhvdmVyIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdGV4dF9jb2xvcl9kYXJrX2JyaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190NztcbiAgYm9yZGVyLWNvbG9yOiAkcG9ydGZvbGlvX3QyO1xufVxuXG4uYnRuLXBvcnRmb2xpbzpmb2N1cywgLmJ0bi1wb3J0Zm9saW8uZm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gJHBvcnRmb2xpb19zaGFkb3c7XG59XG5cbi5idG4tcG9ydGZvbGlvLmRpc2FibGVkLCAuYnRuLXBvcnRmb2xpbzpkaXNhYmxlZCB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3RleHRfY29sb3JfZGFya19icmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDE7XG4gIGJvcmRlci1jb2xvcjogJHBvcnRmb2xpb190MTtcbn1cblxuLmJ0bi1wb3J0Zm9saW86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLXBvcnRmb2xpbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIC5zaG93ID4gLmJ0bi1wb3J0Zm9saW8uZHJvcGRvd24tdG9nZ2xlIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdGV4dF9jb2xvcl9kYXJrX2JyaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190MjtcbiAgYm9yZGVyLWNvbG9yOiAkcG9ydGZvbGlvX3Q2O1xufVxuXG4uYnRuLXBvcnRmb2xpbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tcG9ydGZvbGlvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cywgLnNob3cgPiAuYnRuLXBvcnRmb2xpby5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gJHBvcnRmb2xpb19zaGFkb3c7XG59XG5cbi5idG4tb3V0bGluZS1wb3J0Zm9saW8ge1xuICBjb2xvcjogJHBvcnRmb2xpb190MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogJHBvcnRmb2xpb190MTtcbn1cblxuLmJ0bi1vdXRsaW5lLXBvcnRmb2xpbzpob3ZlciB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3RleHRfY29sb3JfZGFya19icmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDE7XG4gIGJvcmRlci1jb2xvcjogJHBvcnRmb2xpb190MTtcbn1cblxuLmJ0bi1vdXRsaW5lLXBvcnRmb2xpbzpmb2N1cywgLmJ0bi1vdXRsaW5lLXBvcnRmb2xpby5mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAkcG9ydGZvbGlvX3NoYWRvdztcbn1cblxuLmJ0bi1vdXRsaW5lLXBvcnRmb2xpby5kaXNhYmxlZCwgLmJ0bi1vdXRsaW5lLXBvcnRmb2xpbzpkaXNhYmxlZCB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3QxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmJ0bi1vdXRsaW5lLXBvcnRmb2xpbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tb3V0bGluZS1wb3J0Zm9saW86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuc2hvdyA+IC5idG4tb3V0bGluZS1wb3J0Zm9saW8uZHJvcGRvd24tdG9nZ2xlIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdGV4dF9jb2xvcl9kYXJrX2JyaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190MTtcbiAgYm9yZGVyLWNvbG9yOiAkcG9ydGZvbGlvX3QxO1xufVxuXG4uYnRuLW91dGxpbmUtcG9ydGZvbGlvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1vdXRsaW5lLXBvcnRmb2xpbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsIC5zaG93ID4gLmJ0bi1vdXRsaW5lLXBvcnRmb2xpby5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gJHBvcnRmb2xpb19zaGFkb3c7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0tcG9ydGZvbGlvIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdDU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDQ7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0tcG9ydGZvbGlvLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb246aG92ZXIsIC5saXN0LWdyb3VwLWl0ZW0tcG9ydGZvbGlvLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb246Zm9jdXMge1xuICBjb2xvcjogJHBvcnRmb2xpb190NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190Mztcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbS1wb3J0Zm9saW8ubGlzdC1ncm91cC1pdGVtLWFjdGlvbi5hY3RpdmUge1xuICBjb2xvcjogJHBvcnRmb2xpb190ZXh0X2NvbG9yX2RhcmtfYnJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3Q1O1xuICBib3JkZXItY29sb3I6ICRwb3J0Zm9saW9fdDU7XG59XG5cbi50YWJsZS1wb3J0Zm9saW8sXG4udGFibGUtcG9ydGZvbGlvID4gdGgsXG4udGFibGUtcG9ydGZvbGlvID4gdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3Q0O1xufVxuXG4udGFibGUtaG92ZXIgLnRhYmxlLXBvcnRmb2xpbzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDM7XG59XG5cbi50YWJsZS1ob3ZlciAudGFibGUtcG9ydGZvbGlvOmhvdmVyID4gdGQsXG4udGFibGUtaG92ZXIgLnRhYmxlLXBvcnRmb2xpbzpob3ZlciA+IHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190Mztcbn1cblxuLnRleHQtcG9ydGZvbGlvIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdDEgIWltcG9ydGFudDtcbn1cblxuYS50ZXh0LXBvcnRmb2xpbzpob3ZlciwgYS50ZXh0LXBvcnRmb2xpbzpmb2N1cyB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3QyICFpbXBvcnRhbnQ7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMXB4KSB7XG5cdC5iYWNrZ3JvdW5kLWltYWdlIHtcblx0ICBjb250ZW50OnVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQ5LnN2Zyk7XG5cdH1cbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTM0cHgpIHtcblx0LmJhY2tncm91bmQtaW1hZ2Uge1xuXHQgIGNvbnRlbnQ6dXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZDguc3ZnKTtcblx0fVxuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xuXHQuYmFja2dyb3VuZC1pbWFnZSB7XG5cdCAgY29udGVudDp1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kNy5zdmcpO1xuXHR9XG4gIH1cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cdC5iYWNrZ3JvdW5kLWltYWdlIHtcblx0ICBjb250ZW50OnVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQ2LnN2Zyk7XG5cdH1cbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcblx0LmJhY2tncm91bmQtaW1hZ2Uge1xuXHQgIGNvbnRlbnQ6dXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZDUuc3ZnKTtcblx0fVxuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDUwcHgpIHtcblx0LmJhY2tncm91bmQtaW1hZ2Uge1xuXHQgIGNvbnRlbnQ6dXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZDQuc3ZnKTtcblx0fVxuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcblx0LmJhY2tncm91bmQtaW1hZ2Uge1xuXHQgIGNvbnRlbnQ6dXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZDMuc3ZnKTtcblx0fVxuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzUwcHgpIHtcblx0LmJhY2tncm91bmQtaW1hZ2Uge1xuXHQgIGNvbnRlbnQ6dXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZDIuc3ZnKTtcblx0fVxuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjcwcHgpIHtcblx0LmJhY2tncm91bmQtaW1hZ2Uge1xuXHQgIGNvbnRlbnQ6dXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5zdmcpO1xuXHR9XG4gIH1cblxuLmFic29sdXRlUG9zIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZGV2ZWxvcGVyTG9nbyB7XG5cdHBhZGRpbmctbGVmdDogMTVweDtcblx0cGFkZGluZy10b3A6IDI1cHg7XG59XG5cbi5sb2dvbmV0d29yayB7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdGNvbG9yOiAkY29sb3ItbG9nbztcbn1cblxuLmxvZ29uZXR3b3JrQmlnIHtcblx0Zm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZXJvIHtcblx0cGFkZGluZzogNTBweCAwcHggNTBweCAwcHg7XG59XG5cbi50aXRsZUhlcm8ge1xuXHRmb250LXdlaWdodDogODAwO1xuXHRmb250LXNpemU6IDY0cHg7XG5cdGxpbmUtaGVpZ2h0OiA3MnB4O1xufVxuXG4uZGV5c29uIHtcblx0Y29sb3I6ICRjb2xvci1wcmltYXJpbztcbn1cblxuLnJlc3VtZSB7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjVweDtcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uc2Nyb2xsRG93biB7XG5cdHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5zY3JvbGxEb3duSW5mbyB7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRsaW5lLWhlaWdodDogMTlweDtcblx0Y29sb3I6ICRjb2xvci1wcmltYXJpbztcbn1cblxuLnNjcm9sbERvd25JbmZvRGVzYyB7XG5cdGNvbG9yOiAkY29sb3ItbGV0cmE7XG5cdGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1vZHVsZSB7XG5cdHBhZGRpbmc6IDUwcHggMHB4IDUwcHggMHB4O1xufVxuXG4udGl0bGVNb2R1bGUge1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdGZvbnQtd2VpZ2h0OiA4MDA7XG5cdGZvbnQtc2l6ZTogMjRweDtcblx0bGluZS1oZWlnaHQ6IDMzcHg7XG59XG5cbi5wb3N0VGl0dWxvIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0ZmxleC13cmFwOiB3cmFwO1xufVxuXG4ubG9nb0hlcm8ge1xuXHRmb250LXNpemU6IDMwMHB4O1xufVxuXG4uY2VudHJhZG8ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNlbnRyYWRvSG9yaXpvbnRhbCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2tpbGxDb250YWluZXIge1xuXHRwYWRkaW5nOiAxMHB4O1xufVxuXG4uc2tpbGxMb2dvIHtcblx0Zm9udC1zaXplOiA2MHB4O1xufVxuXG4uc2tpbGxMb2dvSWNvbmlmeSB7XG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5za2lsbFRpdGxlIHtcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLnNraWxsRGVzYyB7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRsaW5lLWhlaWdodDogMThweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXp1bCB7XG5cdGNvbG9yOiAkY29sb3ItcHJpbWFyaW87XG59XG5cbi5wcm9qZWN0Q2FyZCB7XG5cdHBhZGRpbmc6IDI1cHg7IFxufVxuXG4uaW1nUHJvamVjdCB7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWNDYXJkIHtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRjb2xvcjogIzY5Njk2OTtcbn1cblxuLmlucHV0Q29udGFjdCB7XG4gICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmR1cmF0aW9uMnMge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDJzO1xufVxuXG4uZHVyYXRpb24xMHMge1xuXHRhbmltYXRpb24tZHVyYXRpb246IDEwcztcbn1cblxuLmJvdG9uRW52aWFyIHtcblx0Ym9yZGVyOiAxcHggc29saWQgJGNvbG9yLXByaW1hcmlvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG5cdGNvbG9yOiAkY29sb3ItYmxhbmNvO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyaW87XG59XG5cbi5pY29ub0VudmlhciB7XG5cdGNvbG9yOiAkY29sb3ItYmxhbmNvO1xufVxuXG4ucG9zdFRpbHVsb0JvbGQge1xuXHRmbGV4OiAxIDEgYXV0bztcbn1cblxuLnN3aXBlIHtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRmbGV4OiAxIDEgYXV0bztcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5tZW5zYWplRXhpdG8ge1xuXHRmb250LXNpemU6IDE1cHg7XG5cdGNvbG9yOiAkY29sb3ItcHJpbWFyaW87XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm1lbnNhamVFcnJvciB7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0Y29sb3I6ICNlNDI0MjQ7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmlMb3ZlQ29kZSB7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmhlYXJ0IHtcblx0Y29sb3I6ICNlNDI0MjQ7XG59XG5cbi5jYXJkLWJvZHkge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZm9uZG87XG4gIH1cbiAgXG4gIC5jYXJkLXRpdGxlIHtcblx0Y29sb3I6ICRjb2xvci1wcmltYXJpbztcbiAgfVxuICBcbiAgLmNhcmQtdGV4dCB7XG5cdGNvbG9yOiAkY29sb3ItbGV0cmE7XG4gIH1cbiAgXG4gIC5ib3RvbiB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1sZXRyYTtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRwYWRkaW5nOiAxMHB4IDMwcHg7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdGNvbG9yOiAkY29sb3ItbGV0cmE7XG5cdGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1mb25kbztcblx0Zm9udC1zaXplOiAxMXB4O1xuICB9XG4gIFxuICAuc2tpbGxMb2dvIHtcblx0ICBmb250LXNpemU6IDYwcHg7XG4gIH1cbiAgXG4gIC5jYXJkUG9zdCB7XG5cdGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLmZsZXhDYXJkIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC5jYXJkLWltZy10b3B7XG5cdGhlaWdodDogNDAlO1xuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuXHQuY2FyZC1pbWctdG9we1xuXHQgIGhlaWdodDogNTAlO1xuXHR9XG4gIH1cblxuLy8gVGltZWxpbmVcbi5jaXJjbGUge1xuXHRmb250LXNpemU6IDEycHg7XG5cdHBhZGRpbmc6IDEzcHggMTBweDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWZvbmRvO1xuXHRjb2xvcjogJGNvbG9yLWxldHJhO1xuXHR6LWluZGV4OiAyO1xuXHRib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItcHJpbWFyaW87XG4gIH1cbiAgXG4gIC5ob3ctaXQtd29ya3Mucm93IC5jb2wtMiB7XG5cdGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIH1cbiAgLmhvdy1pdC13b3Jrcy5yb3cgLmNvbC0yOjphZnRlciB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkY29sb3ItcHJpbWFyaW87XG5cdHotaW5kZXg6IDE7XG4gIH1cbiAgLmhvdy1pdC13b3Jrcy5yb3cgLmNvbC0yLmJvdHRvbTo6YWZ0ZXIge1xuXHRoZWlnaHQ6IDUwJTtcblx0bGVmdDogNTAlO1xuXHR0b3A6IDUwJTtcbiAgfVxuICAuaG93LWl0LXdvcmtzLnJvdyAuY29sLTIuZnVsbDo6YWZ0ZXIge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGxlZnQ6IGNhbGMoNTAlIC0gM3B4KTtcbiAgfVxuICAuaG93LWl0LXdvcmtzLnJvdyAuY29sLTIuZnVsbDI6OmFmdGVyIHtcblx0aGVpZ2h0OiAxMDAlO1xuXHRsZWZ0OiBjYWxjKDUwJSk7XG4gIH1cbiAgLmhvdy1pdC13b3Jrcy5yb3cgLmNvbC0yLnRvcDo6YWZ0ZXIge1xuXHRoZWlnaHQ6IDUwJTtcblx0bGVmdDogNTAlO1xuXHR0b3A6IDA7XG4gIH1cbiAgLmhvdy1pdC13b3Jrcy5yb3cgLmNvbC0yLnRvcDI6OmFmdGVyIHtcblx0aGVpZ2h0OiA1MCU7XG5cdGxlZnQ6IGNhbGMoNTAlIC0gM3B4KTtcblx0dG9wOiAwO1xuICB9XG4gIFxuICBcbiAgLnRpbWVsaW5lIGRpdiB7XG5cdHBhZGRpbmc6IDA7XG5cdGhlaWdodDogNDBweDtcbiAgfVxuICAudGltZWxpbmUgaHIge1xuXHRib3JkZXItdG9wOiAzcHggc29saWQgJGNvbG9yLXByaW1hcmlvO1xuXHRtYXJnaW46IDA7XG5cdHRvcDogMTdweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC50aW1lbGluZSAuY29sLTIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC50aW1lbGluZSAuY29ybmVyIHtcblx0Ym9yZGVyOiAzcHggc29saWQgJGNvbG9yLXByaW1hcmlvO1xuXHR3aWR0aDogMTAwJTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xuICB9XG4gIC50aW1lbGluZSAudG9wLXJpZ2h0IHtcblx0bGVmdDogNTAlO1xuXHR0b3A6IC01MCU7XG4gIH1cbiAgLnRpbWVsaW5lIC5sZWZ0LWJvdHRvbSB7XG5cdGxlZnQ6IC01MCU7XG5cdHRvcDogY2FsYyg1MCUgLSAzcHgpO1xuICB9XG4gIC50aW1lbGluZSAudG9wLWxlZnQge1xuXHRsZWZ0OiAtNTAlO1xuXHR0b3A6IC01MCU7XG4gIH1cbiAgLnRpbWVsaW5lIC5yaWdodC1ib3R0b20ge1xuXHRsZWZ0OiA1MCU7XG5cdHRvcDogY2FsYyg1MCUgLSAzcHgpO1xuICB9XG5cblxuXG4ucGFudGFsbGEge1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjQzRDNEM0O1xuXHR3aWR0aDogMTAwJTsgXG5cdGhlaWdodDogMTAwJTtcbn1cblxuLnBhbnRhbGxhSW50IHtcblx0YmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWZvbmRvO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRtYXJnaW4tbGVmdDogMTAlO1xuXHRtYXJnaW4tdG9wOiAxMCU7XG5cdHdpZHRoOiA4MCU7IFxuXHRoZWlnaHQ6IDgwJTtcbn1cblxuLmltYWdlbkhlcm8gaW1nIHtcblx0d2lkdGg6IDEwMCU7XG4gIFx0aGVpZ2h0OiBhdXRvO1xufVxuXG4uY2xpZW50LXRlc3RpbW9uaWFsLWNhcm91c2VsIC5vd2wtZG90cyBidXR0b24ge1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQ6ICM2YWFmMDggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgdHJhbnNpdGlvbjogLjJzO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmNsaWVudC10ZXN0aW1vbmlhbC1jYXJvdXNlbCBidXR0b24ub3dsLWRvdC5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMzBweDtcbn1cblxuLmNsaWVudC10ZXN0aW1vbmlhbC1jYXJvdXNlbCAub3dsLWRvdHMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyNXB4XG59XG5cbi5zaW5nbGUtdGVzdGltb25pYWwtaXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaGFkb3c6IDAgMCAycHggI2RhZGZkMztcbiAgICBtYXJnaW46IDJweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcblx0cGFkZGluZy1sZWZ0OiA4NXB4O1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaW5nbGUtdGVzdGltb25pYWwtaXRlbTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxcIlwiO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyaW87XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG5cbi5zaW5nbGUtdGVzdGltb25pYWwtaXRlbTphZnRlciB7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogNzAlO1xuICAgIGxlZnQ6IDYwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAlO1xuICAgIHdpZHRoOiAxcHg7XG59XG5cbi5zaW5nbGUtdGVzdGltb25pYWwtaXRlbSBoMyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc2luZ2xlLXRlc3RpbW9uaWFsLWl0ZW0gaDMgc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5cbi8qKiBMSUdIVEJPWCBNQVJLVVAgKiovXG5cbi5saWdodGJveCB7XG5cdC8qIERlZmF1bHQgdG8gaGlkZGVuICovXG5cdGRpc3BsYXk6IG5vbmU7XG4gIFxuXHQvKiBPdmVybGF5IGVudGlyZSBzY3JlZW4gKi9cblx0cG9zaXRpb246IGZpeGVkO1xuXHR6LWluZGV4OiA5OTk5OTk7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdGJvdHRvbTogMDtcblx0XG5cdC8qIEEgYml0IG9mIHBhZGRpbmcgYXJvdW5kIGltYWdlICovXG5cdHBhZGRpbmc6IDFlbTtcbiAgXG5cdC8qIFRyYW5zbHVjZW50IGJhY2tncm91bmQgKi9cblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB9XG4gIFxuICAvKiBVbmhpZGUgdGhlIGxpZ2h0Ym94IHdoZW4gaXQncyB0aGUgdGFyZ2V0ICovXG4gIC5saWdodGJveDp0YXJnZXQge1xuXHRkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLmxpZ2h0Ym94IHNwYW4ge1xuXHQvKiBGdWxsIHdpZHRoIGFuZCBoZWlnaHQgKi9cblx0ZGlzcGxheTogYmxvY2s7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG4gIFxuXHQvKiBTaXplIGFuZCBwb3NpdGlvbiBiYWNrZ3JvdW5kIGltYWdlICovXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _shared_service_home_service__WEBPACK_IMPORTED_MODULE_9__["HomeService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] }, { type: src_app_feature_post_shared_service_post_service__WEBPACK_IMPORTED_MODULE_11__["PostService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "bs0r":
/*!*************************************************!*\
  !*** ./src/app/feature/shared/config/skills.ts ***!
  \*************************************************/
/*! exports provided: skills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skills", function() { return skills; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");


const skills = [
    {
        logo: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGit"],
        title: 'Git',
        desc: 'GitHub, GitLab and Bitbucket',
        delay: 'animatex__delay-0_5s',
        color: 'gitColor'
    },
    {
        logo: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngular"],
        title: 'Angular',
        desc: 'Ngrx, Rxjs and Redux',
        delay: 'animatex__delay-0_7s',
        color: 'angularColor'
    },
    {
        logo: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faJava"],
        title: 'Java',
        desc: 'Java 8, Design Patterns, MVC, Groovy',
        delay: 'animatex__delay-0_9s',
        color: 'javaColor'
    },
    {
        logo: null,
        title: 'Spring',
        desc: 'REST Services, Dependency Injection',
        delay: 'animatex__delay-0_11s',
        color: 'springColor'
    },
    {
        logo: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faJsSquare"],
        title: 'Javascript',
        desc: 'Node.js, Express, Mongoose',
        delay: 'animatex__delay-0_13s',
        color: 'javascriptColor'
    },
    {
        logo: null,
        title: 'Database',
        desc: 'Oracle, Mysql, MongoDB',
        delay: 'animatex__delay-0_15s',
        color: 'baseDatosColor'
    },
    {
        logo: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUsers"],
        title: 'Scrum',
        desc: 'Scrum Developer',
        delay: 'animatex__delay-0_17s',
        color: 'scrumColor'
    },
    {
        logo: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSass"],
        title: 'Style Sheet',
        desc: 'Sass, Scss, Css, Flexbox, Bootstrap',
        delay: 'animatex__delay-0_19s',
        color: 'sassColor'
    },
    {
        logo: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faObjectGroup"],
        title: 'Design',
        desc: 'Figma and Adobe XD',
        delay: 'animatex__delay-0_21s',
        color: 'designColor'
    },
    {
        logo: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faJenkins"],
        title: 'CI / CD',
        desc: 'Jenkins, Gitlab CI/CD',
        delay: 'animatex__delay-0_23s',
        color: 'cicdColor'
    },
    {
        logo: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faMobileAlt"],
        title: 'Mobile Dev',
        desc: 'Ionic',
        delay: 'animatex__delay-0_25s',
        color: 'mobileColor'
    },
    {
        logo: null,
        title: 'Message queue',
        desc: 'RabbitMQ',
        delay: 'animatex__delay-0_27s',
        color: 'queueColor'
    },
    {
        logo: null,
        title: 'Test',
        desc: 'JUnit, Mockito, Spock, Jasmine',
        delay: 'animatex__delay-0_29s',
        color: 'testColor'
    },
    {
        logo: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faFileExcel"],
        title: 'Microsoft Software',
        desc: 'Outlook, Teams, Ofimática',
        delay: 'animatex__delay-0_31s',
        color: 'excelColor'
    },
    {
        logo: null,
        title: 'Project Admin',
        desc: 'Jira, Trello, Confluence, Mantis',
        delay: 'animatex__delay-0_33s',
        color: 'jiraColor'
    },
    {
        logo: null,
        title: 'FTP',
        desc: 'Filezilla, WinSCP, Putty',
        delay: 'animatex__delay-0_35s',
        color: 'ftpColor'
    },
    {
        logo: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCode"],
        title: 'Editors',
        desc: 'VS Code, IntelliJ, Eclipse, NetBeans',
        delay: 'animatex__delay-0_37s',
        color: 'codeColor'
    },
    {
        logo: null,
        title: 'API Test Software',
        desc: 'SOAP UI, Postman, Insomnia',
        delay: 'animatex__delay-0_39s',
        color: 'queueColor'
    },
    {
        logo: null,
        title: 'Protocols',
        desc: 'REST, SOAP, HTTP',
        delay: 'animatex__delay-0_41s',
        color: 'mobileColor'
    },
    {
        logo: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faProjectDiagram"],
        title: 'Project Documentation',
        desc: 'Enterprise Architect, Bizagi Modeler',
        delay: 'animatex__delay-0_43s',
        color: 'queueColor'
    },
    {
        logo: null,
        title: 'Database Client',
        desc: 'PLSQL, SQL Developer, DBeaver, MongoDB Compass',
        delay: 'animatex__delay-0_45s',
        color: 'baseDatosColor'
    },
    {
        logo: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faServer"],
        title: 'Server / Host',
        desc: 'AWS (S3, EC2, Route 53), Heroku, Google App Engine',
        delay: 'animatex__delay-0_47s',
        color: 'color-code'
    },
    {
        logo: null,
        title: 'Data Persistence',
        desc: 'JPA, Hibernate, JDBC',
        delay: 'animatex__delay-0_49s',
        color: 'baseDatosColor'
    },
    {
        logo: null,
        title: 'Laguage',
        desc: 'Ingles B1, Español (Nativo)',
        delay: 'animatex__delay-0_51s',
        color: 'laguageColor'
    }
];


/***/ }),

/***/ "zx9h":
/*!*************************************************************!*\
  !*** ./src/app/feature/post/shared/service/post.service.ts ***!
  \*************************************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class PostService {
    constructor(http) {
        this.http = http;
    }
    getPost() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint}/v1/post`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => response));
    }
    getInstagramPost(url) {
        return this.http.get(`https://graph.facebook.com/v9.0/instagram_oembed?url=${url}&access_token=258fa5c34fe254035e46fea6e53f7870`);
    }
    getInstagramInfo() {
        return this.http.get(`https://www.instagram.com/deysonestrad/?__a=1`);
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=feature-home-home-module-es2015.js.map