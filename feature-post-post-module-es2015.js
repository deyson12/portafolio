(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-post-post-module"],{

/***/ "0st4":
/*!****************************************************************************************!*\
  !*** ./node_modules/ngx-sharebuttons/__ivy_ngcc__/fesm2015/ngx-sharebuttons-button.js ***!
  \****************************************************************************************/
/*! exports provided: ShareButton, ShareButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareButton", function() { return ShareButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareButtonModule", function() { return ShareButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-sharebuttons */ "iQdX");






// Uncomment the following line in development mode
// import { ShareService, ShareDirective } from '../../src/public-api';





function ShareButton_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.icon || _r0.icon)("fixedWidth", true);
} }
function ShareButton_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.text || _r0.text, " ");
} }
function ShareButton_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShareButton_div_2_div_1_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ShareButton_div_2_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showIcon && _r0.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showText);
} }
let ShareButton = class ShareButton {
    constructor(_share) {
        this._share = _share;
        /** Show button icon */
        this.showIcon = true;
        /** Show button text */
        this.showText = false;
        /** Button size */
        this.size = this._share.config.size;
        /** Button theme */
        this.theme = this._share.config.theme;
        /** Stream that emits when share dialog is opened */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Stream that emits when share dialog is closed */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /** Set theme as button class */
    get buttonClass() {
        return `sb-button sb-${this.theme}`;
    }
};
ShareButton.ɵfac = function ShareButton_Factory(t) { return new (t || ShareButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_4__["ShareService"])); };
ShareButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShareButton, selectors: [["share-button"]], hostVars: 2, hostBindings: function ShareButton_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.buttonClass);
    } }, inputs: { showIcon: "showIcon", showText: "showText", size: "size", theme: "theme", button: "button", url: "url", title: "title", description: "description", image: "image", tags: "tags", autoSetMeta: "autoSetMeta", text: "text", icon: "icon", disabled: "disabled" }, outputs: { opened: "opened", closed: "closed" }, decls: 3, vars: 15, consts: [["type", "button", 1, "sb-wrapper", 3, "shareButton", "url", "image", "title", "description", "tags", "autoSetMeta", "disabled", "opened", "closed"], ["btn", "shareButton"], ["class", "sb-content", 4, "ngIf"], [1, "sb-content"], ["class", "sb-icon", 4, "ngIf"], ["class", "sb-text", 4, "ngIf"], [1, "sb-icon"], [3, "icon", "fixedWidth"], [1, "sb-text"]], template: function ShareButton_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("opened", function ShareButton_Template_button_opened_0_listener($event) { return ctx.opened.emit($event); })("closed", function ShareButton_Template_button_closed_0_listener($event) { return ctx.closed.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ShareButton_div_2_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("font-size", (1 + ctx.size / 20) * 14, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sb-show-icon", ctx.showIcon)("sb-show-text", ctx.showText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("shareButton", ctx.button)("url", ctx.url)("image", ctx.image)("title", ctx.title)("description", ctx.description)("tags", ctx.tags)("autoSetMeta", ctx.autoSetMeta)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r0);
    } }, directives: [ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_4__["ShareDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: ["[_nghost-%COMP%]{--sb-margin:0.3125em}"], changeDetection: 0 });
ShareButton.ctorParameters = () => [
    { type: ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_4__["ShareService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButton.prototype, "button", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButton.prototype, "url", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButton.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButton.prototype, "description", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButton.prototype, "image", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButton.prototype, "tags", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButton.prototype, "autoSetMeta", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButton.prototype, "showIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButton.prototype, "showText", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButton.prototype, "text", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButton.prototype, "icon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButton.prototype, "size", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButton.prototype, "theme", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButton.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ShareButton.prototype, "opened", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ShareButton.prototype, "closed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], ShareButton.prototype, "buttonClass", null);

var ShareButtonModule_1;
let ShareButtonModule = ShareButtonModule_1 = class ShareButtonModule {
    static withConfig(config) {
        return {
            ngModule: ShareButtonModule_1,
            providers: [{ provide: ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_4__["SHARE_BUTTONS_CONFIG"], useValue: config }]
        };
    }
};
ShareButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ShareButtonModule });
ShareButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ShareButtonModule_Factory(t) { return new (t || ShareButtonModule)(); }, imports: [[
            ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_4__["ShareModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_4__["ShareModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShareButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'share-button',
                template: "<button type=\"button\"\n        class=\"sb-wrapper\"\n        #btn=\"shareButton\"\n        [shareButton]=\"button\"\n        [url]=\"url\"\n        [image]=\"image\"\n        [title]=\"title\"\n        [description]=\"description\"\n        [tags]=\"tags\"\n        [autoSetMeta]=\"autoSetMeta\"\n        (opened)=\"opened.emit($event)\"\n        (closed)=\"closed.emit($event)\"\n        [class.sb-show-icon]=\"showIcon\"\n        [class.sb-show-text]=\"showText\"\n        [style.fontSize.px]=\"(1 + size/20) * 14\"\n        [disabled]=\"disabled\">\n\n  <div *ngIf=\"btn\" class=\"sb-content\">\n\n    <div *ngIf=\"showIcon && btn.icon\" class=\"sb-icon\">\n      <fa-icon [icon]=\"icon || btn.icon\" [fixedWidth]=\"true\"></fa-icon>\n    </div>\n\n    <div *ngIf=\"showText\" class=\"sb-text\">\n      {{ text || btn.text }}\n    </div>\n\n  </div>\n</button>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [":host{--sb-margin:0.3125em}"]
            }]
    }], function () { return [{ type: ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_4__["ShareService"] }]; }, { showIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], buttonClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }], button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], autoSetMeta: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ShareButtonModule, { declarations: function () { return [ShareButton]; }, imports: function () { return [ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_4__["ShareModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_4__["ShareModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
        ShareButton]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShareButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    ShareButton
                ],
                imports: [
                    ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_4__["ShareModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                exports: [
                    ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_4__["ShareModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                    ShareButton
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-sharebuttons-button.js.map

/***/ }),

/***/ "4dXB":
/*!*****************************************************!*\
  !*** ./src/app/feature/post/post-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PostRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostRoutingModule", function() { return PostRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/post/post.component */ "RWyz");
/* harmony import */ var _components_plantilla_plantilla_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/plantilla/plantilla.component */ "yqBX");






const routes = [
    { path: '', component: _components_post_post_component__WEBPACK_IMPORTED_MODULE_2__["PostComponent"] },
    { path: 'plantilla', component: _components_plantilla_plantilla_component__WEBPACK_IMPORTED_MODULE_3__["PlantillaComponent"] }
];
class PostRoutingModule {
}
PostRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostRoutingModule });
PostRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostRoutingModule_Factory(t) { return new (t || PostRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ASNK":
/*!*********************************************!*\
  !*** ./src/app/feature/post/post.module.ts ***!
  \*********************************************/
/*! exports provided: PostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostModule", function() { return PostModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _post_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-routing.module */ "4dXB");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/post/post.component */ "RWyz");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _components_plantilla_plantilla_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/plantilla/plantilla.component */ "yqBX");
/* harmony import */ var ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-sharebuttons/buttons */ "pj/B");
/* harmony import */ var _components_posts_payu_payu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/posts/payu/payu.component */ "7F3q");
/* harmony import */ var _components_gist_gist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/gist/gist.component */ "SeDD");
/* harmony import */ var _components_posts_modalsub_modalsub_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/posts/modalsub/modalsub.component */ "umN0");
/* harmony import */ var _components_posts_figma_figma_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/posts/figma/figma.component */ "h2qO");












class PostModule {
}
PostModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostModule });
PostModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostModule_Factory(t) { return new (t || PostModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _post_routing_module__WEBPACK_IMPORTED_MODULE_2__["PostRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_6__["ShareButtonsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostModule, { declarations: [_components_post_post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"], _components_plantilla_plantilla_component__WEBPACK_IMPORTED_MODULE_5__["PlantillaComponent"], _components_posts_payu_payu_component__WEBPACK_IMPORTED_MODULE_7__["PayuComponent"], _components_gist_gist_component__WEBPACK_IMPORTED_MODULE_8__["GistComponent"], _components_posts_modalsub_modalsub_component__WEBPACK_IMPORTED_MODULE_9__["ModalsubComponent"], _components_posts_figma_figma_component__WEBPACK_IMPORTED_MODULE_10__["FigmaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _post_routing_module__WEBPACK_IMPORTED_MODULE_2__["PostRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
        ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_6__["ShareButtonsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_post_post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"], _components_plantilla_plantilla_component__WEBPACK_IMPORTED_MODULE_5__["PlantillaComponent"], _components_posts_payu_payu_component__WEBPACK_IMPORTED_MODULE_7__["PayuComponent"], _components_gist_gist_component__WEBPACK_IMPORTED_MODULE_8__["GistComponent"], _components_posts_modalsub_modalsub_component__WEBPACK_IMPORTED_MODULE_9__["ModalsubComponent"], _components_posts_figma_figma_component__WEBPACK_IMPORTED_MODULE_10__["FigmaComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _post_routing_module__WEBPACK_IMPORTED_MODULE_2__["PostRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                    ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_6__["ShareButtonsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "RWyz":
/*!****************************************************************!*\
  !*** ./src/app/feature/post/components/post/post.component.ts ***!
  \****************************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PostComponent_div_2_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", post_r18.date, " ");
} }
function PostComponent_div_2_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge ", post_r18.badge == "Nuevo" ? "badge-success" : "badge-warning", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r18.badge);
} }
function PostComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_div_2_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const post_r18 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.goTo(post_r18.url); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PostComponent_div_2_small_13_Template, 2, 1, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PostComponent_div_2_span_14_Template, 2, 4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card-img ", post_r18.url == "" ? "card-img-gray" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r18.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r18.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r18.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r18.url != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r18.badge != "");
} }
class PostComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.posts = [
            {
                id: 'payu',
                img: 'https://deysonestradaresources.s3.amazonaws.com/posts/PayUCover2.png',
                title: 'Pasarela de Pagos PayU',
                description: 'Como implementar una pasarela de pagos con PayU en nuestro e-commerce o página web',
                date: '11 febrero 2021',
                url: 'payu',
                badge: 'Nuevo'
            },
            {
                id: 'figma',
                img: 'https://deysonestradaresources.s3.amazonaws.com/posts/FigmaCover2.png',
                title: 'Figma',
                description: 'Diseña tu Web, Logo y demás con Figma',
                date: 'Pronto!!!',
                url: '',
                badge: 'Pronto'
            },
            {
                id: 'patrones',
                img: 'https://deysonestradaresources.s3.amazonaws.com/posts/DesignPatternCover2.png',
                title: 'Patrones de Diseño',
                description: 'Conoce los patrones, como se clasifican y cuando utilizarlos',
                date: 'Pronto!!!',
                url: '',
                badge: 'Pronto'
            },
            {
                id: 'flexbox',
                img: 'https://deysonestradaresources.s3.amazonaws.com/posts/FlexboxCover2.png',
                title: 'Flexbox',
                description: 'Diseña tu Web Responsive',
                date: 'Pronto!!!',
                url: '',
                badge: 'Pronto'
            },
            {
                id: 'clean-code',
                img: 'https://deysonestradaresources.s3.amazonaws.com/posts/CleanCodeCover2.png',
                title: 'Clean Code',
                description: 'Aplica técnicas simples que faciliten la escritura y lectura de un código',
                date: 'Pronto!!!',
                url: '',
                badge: 'Pronto'
            },
            {
                id: 'angular-aws',
                img: 'https://deysonestradaresources.s3.amazonaws.com/posts/AngularAwsCover2.png',
                title: 'Angular en AWS (s3)',
                description: 'Despliega tu aplicación Angular en AWS (S3)',
                date: 'Pronto!!!',
                url: '',
                badge: 'Pronto'
            },
            {
                id: 'ngrx',
                img: 'https://deysonestradaresources.s3.amazonaws.com/posts/NgrxCover2.png',
                title: 'Estados en Angular con Ngrx',
                description: 'Manipula los estados de tu aplicación de una forma fácil y rápida con Ngrx',
                date: 'Pronto!!!',
                url: '',
                badge: 'Pronto'
            },
            {
                id: 'scrum',
                img: 'https://deysonestradaresources.s3.amazonaws.com/posts/ScrumCover2.png',
                title: 'Metodología Ágil Scrum',
                description: 'Conoce los Roles, Ceremonias, Roles, Artefactos y el Flujo de Scrum',
                date: 'Pronto!!!',
                url: '',
                badge: 'Pronto'
            }
        ];
        this.loggedIn = false;
    }
    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.loggedIn = (user != null);
        });
    }
    goTo(page) {
        if (!this.loggedIn && page) {
            $('#loginModal').modal('show');
        }
        else {
            if (page) {
                this.router.navigate(['/' + page]);
            }
        }
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialAuthService"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], decls: 3, vars: 1, consts: [[1, "container"], [1, "row"], ["class", "card-container col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6", 4, "ngFor", "ngForOf"], [1, "card-container", "col-12", "col-sm-12", "col-md-12", "col-lg-6", "col-xl-6"], [1, "card", "mb-3", "mt-3"], [1, "row", "no-gutters"], [1, "col-4"], [3, "routerLink", "click"], ["alt", "...", 3, "src"], [1, "col-8"], [1, "card-body"], [1, "card-title"], [1, "card-text", "card-description"], [1, "card-text", "card-footer2"], ["class", "text-muted", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "text-muted"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostComponent_div_2_Template, 15, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".alert-portfolio[_ngcontent-%COMP%] {\n  color: #0f2a5c;\n  background-color: #bfd1f3;\n  border-color: #adc5f0;\n}\n.alert-portfolio[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top-color: #97b5ed;\n}\n.alert-portfolio[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n  color: #081631;\n}\n.badge-portfolio[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #225bc5;\n}\n.badge-portfolio[href][_ngcontent-%COMP%]:hover, .badge-portfolio[href][_ngcontent-%COMP%]:focus {\n  color: #fff;\n  background-color: #1a4699;\n}\n.bg-portfolio[_ngcontent-%COMP%] {\n  background-color: #225bc5 !important;\n}\na.bg-portfolio[_ngcontent-%COMP%]:hover, a.bg-portfolio[_ngcontent-%COMP%]:focus, button.bg-portfolio[_ngcontent-%COMP%]:hover, button.bg-portfolio[_ngcontent-%COMP%]:focus {\n  background-color: #1a4699 !important;\n}\n.border-portfolio[_ngcontent-%COMP%] {\n  border-color: #225bc5 !important;\n}\n.btn-portfolio[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #225bc5;\n  border-color: #225bc5;\n}\n.btn-portfolio[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #1c4ca6;\n  border-color: #1a4699;\n}\n.btn-portfolio[_ngcontent-%COMP%]:focus, .btn-portfolio.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(34, 91, 197, 0.5);\n}\n.btn-portfolio.disabled[_ngcontent-%COMP%], .btn-portfolio[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #225bc5;\n  border-color: #225bc5;\n}\n.btn-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-portfolio.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #1a4699;\n  border-color: #18408c;\n}\n.btn-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-portfolio.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(34, 91, 197, 0.5);\n}\n.btn-outline-portfolio[_ngcontent-%COMP%] {\n  color: #225bc5;\n  background-color: transparent;\n  border-color: #225bc5;\n}\n.btn-outline-portfolio[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #225bc5;\n  border-color: #225bc5;\n}\n.btn-outline-portfolio[_ngcontent-%COMP%]:focus, .btn-outline-portfolio.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(34, 91, 197, 0.5);\n}\n.btn-outline-portfolio.disabled[_ngcontent-%COMP%], .btn-outline-portfolio[_ngcontent-%COMP%]:disabled {\n  color: #225bc5;\n  background-color: transparent;\n}\n.btn-outline-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-portfolio.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #225bc5;\n  border-color: #225bc5;\n}\n.btn-outline-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-portfolio.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(34, 91, 197, 0.5);\n}\n.list-group-item-portfolio[_ngcontent-%COMP%] {\n  color: #0f2a5c;\n  background-color: #adc5f0;\n}\n.list-group-item-portfolio.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-portfolio.list-group-item-action[_ngcontent-%COMP%]:focus {\n  color: #0f2a5c;\n  background-color: #97b5ed;\n}\n.list-group-item-portfolio.list-group-item-action.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0f2a5c;\n  border-color: #0f2a5c;\n}\n.table-portfolio[_ngcontent-%COMP%], .table-portfolio[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-portfolio[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #adc5f0;\n}\n.table-hover[_ngcontent-%COMP%]   .table-portfolio[_ngcontent-%COMP%]:hover {\n  background-color: #97b5ed;\n}\n.table-hover[_ngcontent-%COMP%]   .table-portfolio[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-portfolio[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n  background-color: #97b5ed;\n}\n.text-portfolio[_ngcontent-%COMP%] {\n  color: #225bc5 !important;\n}\na.text-portfolio[_ngcontent-%COMP%]:hover, a.text-portfolio[_ngcontent-%COMP%]:focus {\n  color: #1a4699 !important;\n}\n.card-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  text-decoration: none;\n}\n.card-img-gray[_ngcontent-%COMP%] {\n  \n  filter: grayscale(100%);\n}\n.card-img-gray[_ngcontent-%COMP%]:hover {\n  \n  filter: grayscale(0%);\n}\n.card-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.card-description[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.like-text[_ngcontent-%COMP%] {\n  color: #b9b9b9 !important;\n}\n.badge-new[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTs7cUNBQUE7QUFrQkE7RUFDRSxjQVhhO0VBWWIseUJBUmE7RUFTYixxQkFkYTtBQ1JmO0FEeUJBO0VBQ0UseUJBbkJhO0FDSGY7QUR5QkE7RUFDRSxjQWxCYTtBQ0pmO0FEeUJBO0VBQ0UsV0FsQmlDO0VBbUJqQyx5QkE5QmE7QUNRZjtBRHlCQTtFQUNFLFdBdkJpQztFQXdCakMseUJBbENhO0FDWWY7QUR5QkE7RUFDRSxvQ0FBQTtBQ3RCRjtBRHlCQTs7O0VBR0Usb0NBQUE7QUN0QkY7QUR5QkE7RUFDRSxnQ0FBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBMUNpQztFQTJDakMseUJBdERhO0VBdURiLHFCQXZEYTtBQ2lDZjtBRHlCQTtFQUNFLFdBaERpQztFQWlEakMseUJBdERhO0VBdURiLHFCQTVEYTtBQ3NDZjtBRHlCQTtFQUNFLCtDQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0ExRGlDO0VBMkRqQyx5QkF0RWE7RUF1RWIscUJBdkVhO0FDaURmO0FEeUJBO0VBQ0UsV0FoRWlDO0VBaUVqQyx5QkEzRWE7RUE0RWIscUJBeEVhO0FDa0RmO0FEeUJBO0VBQ0UsK0NBQUE7QUN0QkY7QUR5QkE7RUFDRSxjQXJGYTtFQXNGYiw2QkFBQTtFQUNBLHFCQXZGYTtBQ2lFZjtBRHlCQTtFQUNFLFdBaEZpQztFQWlGakMseUJBNUZhO0VBNkZiLHFCQTdGYTtBQ3VFZjtBRHlCQTtFQUNFLCtDQUFBO0FDdEJGO0FEeUJBO0VBQ0UsY0FyR2E7RUFzR2IsNkJBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQS9GaUM7RUFnR2pDLHlCQTNHYTtFQTRHYixxQkE1R2E7QUNzRmY7QUR5QkE7RUFDRSwrQ0FBQTtBQ3RCRjtBRHlCQTtFQUNFLGNBaEhhO0VBaUhiLHlCQWxIYTtBQzRGZjtBRHlCQTtFQUNFLGNBckhhO0VBc0hiLHlCQXhIYTtBQ2tHZjtBRHlCQTtFQUNFLFdBbkhpQztFQW9IakMseUJBM0hhO0VBNEhiLHFCQTVIYTtBQ3NHZjtBRHlCQTs7O0VBR0UseUJBbklhO0FDNkdmO0FEeUJBO0VBQ0UseUJBeElhO0FDa0hmO0FEeUJBOztFQUVFLHlCQTdJYTtBQ3VIZjtBRHlCQTtFQUNFLHlCQUFBO0FDdEJGO0FEeUJBO0VBQ0UseUJBQUE7QUN0QkY7QUEzSUE7RUFDRSxZREZZO0VDR1oscUJBQUE7QUE4SUY7QUEzSUE7RUFDbUMscUJBQUE7RUFDakMsdUJBQUE7QUErSUY7QUE1SUE7RUFDaUMscUJBQUE7RUFDL0IscUJBQUE7QUFnSkY7QUE3SUE7RUFDRSxpQkFBQTtBQWdKRjtBQTdJQTtFQUNFLGlCQUFBO0FBZ0pGO0FBN0lBO0VBQ0UsYUFBQTtBQWdKRjtBQTdJQTtFQUNFLHlCQUFBO0FBZ0pGO0FBN0lBO0VBQ0UsZUFBQTtBQWdKRiIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWZvbmRvOiAjZmZmZmZmO1xuJGNvbG9yLWxldHJhOiByZ2IoMCwgMCwgMCk7XG4kY29sb3ItcHJpbWFyaW86ICMyMjViYzU7XG4kY29sb3Itc2VjdW5kYXJpbzogI2I1Y2ZmZjtcbiRjb2xvci1ibGFuY286ICNmZmY7XG4kY29sb3ItbG9nbzogIzVkNWQ1ZDtcblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLSBDT0xPUiBwb3J0Zm9saW9cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiRwb3J0Zm9saW9fdDE6ICMyMjViYzU7XG4kcG9ydGZvbGlvX3QyOiAjMWE0Njk5O1xuJHBvcnRmb2xpb190MzogIzk3YjVlZDtcbiRwb3J0Zm9saW9fdDQ6ICNhZGM1ZjA7XG4kcG9ydGZvbGlvX3Q1OiAjMGYyYTVjO1xuJHBvcnRmb2xpb190NjogIzE4NDA4YztcbiRwb3J0Zm9saW9fdDc6ICMxYzRjYTY7XG4kcG9ydGZvbGlvX3Q4OiAjMDgxNjMxO1xuJHBvcnRmb2xpb190OTogI2JmZDFmMztcblxuJHBvcnRmb2xpb19zaGFkb3c6IHJnYmEoMzQsIDkxLCAxOTcsIDAuNSk7XG4kcG9ydGZvbGlvX3RleHRfY29sb3JfZGFya19icmlnaHQ6ICNmZmY7XG5cblxuLmFsZXJ0LXBvcnRmb2xpbyB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3Q1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3Q5O1xuICBib3JkZXItY29sb3I6ICRwb3J0Zm9saW9fdDQ7XG59XG5cbi5hbGVydC1wb3J0Zm9saW8gaHIge1xuICBib3JkZXItdG9wLWNvbG9yOiAkcG9ydGZvbGlvX3QzO1xufVxuXG4uYWxlcnQtcG9ydGZvbGlvIC5hbGVydC1saW5rIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdDg7XG59XG5cbi5iYWRnZS1wb3J0Zm9saW8ge1xuICBjb2xvcjogJHBvcnRmb2xpb190ZXh0X2NvbG9yX2RhcmtfYnJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3QxO1xufVxuXG4uYmFkZ2UtcG9ydGZvbGlvW2hyZWZdOmhvdmVyLCAuYmFkZ2UtcG9ydGZvbGlvW2hyZWZdOmZvY3VzIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdGV4dF9jb2xvcl9kYXJrX2JyaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190Mjtcbn1cblxuLmJnLXBvcnRmb2xpbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDEgIWltcG9ydGFudDtcbn1cblxuYS5iZy1wb3J0Zm9saW86aG92ZXIsIGEuYmctcG9ydGZvbGlvOmZvY3VzLFxuYnV0dG9uLmJnLXBvcnRmb2xpbzpob3ZlcixcbmJ1dHRvbi5iZy1wb3J0Zm9saW86Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3QyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcG9ydGZvbGlvIHtcbiAgYm9yZGVyLWNvbG9yOiAkcG9ydGZvbGlvX3QxICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tcG9ydGZvbGlvIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdGV4dF9jb2xvcl9kYXJrX2JyaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190MTtcbiAgYm9yZGVyLWNvbG9yOiAkcG9ydGZvbGlvX3QxO1xufVxuXG4uYnRuLXBvcnRmb2xpbzpob3ZlciB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3RleHRfY29sb3JfZGFya19icmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDc7XG4gIGJvcmRlci1jb2xvcjogJHBvcnRmb2xpb190Mjtcbn1cblxuLmJ0bi1wb3J0Zm9saW86Zm9jdXMsIC5idG4tcG9ydGZvbGlvLmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICRwb3J0Zm9saW9fc2hhZG93O1xufVxuXG4uYnRuLXBvcnRmb2xpby5kaXNhYmxlZCwgLmJ0bi1wb3J0Zm9saW86ZGlzYWJsZWQge1xuICBjb2xvcjogJHBvcnRmb2xpb190ZXh0X2NvbG9yX2RhcmtfYnJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3QxO1xuICBib3JkZXItY29sb3I6ICRwb3J0Zm9saW9fdDE7XG59XG5cbi5idG4tcG9ydGZvbGlvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1wb3J0Zm9saW86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuc2hvdyA+IC5idG4tcG9ydGZvbGlvLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3RleHRfY29sb3JfZGFya19icmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDI7XG4gIGJvcmRlci1jb2xvcjogJHBvcnRmb2xpb190Njtcbn1cblxuLmJ0bi1wb3J0Zm9saW86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLXBvcnRmb2xpbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsIC5zaG93ID4gLmJ0bi1wb3J0Zm9saW8uZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICRwb3J0Zm9saW9fc2hhZG93O1xufVxuXG4uYnRuLW91dGxpbmUtcG9ydGZvbGlvIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6ICRwb3J0Zm9saW9fdDE7XG59XG5cbi5idG4tb3V0bGluZS1wb3J0Zm9saW86aG92ZXIge1xuICBjb2xvcjogJHBvcnRmb2xpb190ZXh0X2NvbG9yX2RhcmtfYnJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3QxO1xuICBib3JkZXItY29sb3I6ICRwb3J0Zm9saW9fdDE7XG59XG5cbi5idG4tb3V0bGluZS1wb3J0Zm9saW86Zm9jdXMsIC5idG4tb3V0bGluZS1wb3J0Zm9saW8uZm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gJHBvcnRmb2xpb19zaGFkb3c7XG59XG5cbi5idG4tb3V0bGluZS1wb3J0Zm9saW8uZGlzYWJsZWQsIC5idG4tb3V0bGluZS1wb3J0Zm9saW86ZGlzYWJsZWQge1xuICBjb2xvcjogJHBvcnRmb2xpb190MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5idG4tb3V0bGluZS1wb3J0Zm9saW86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLW91dGxpbmUtcG9ydGZvbGlvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLnNob3cgPiAuYnRuLW91dGxpbmUtcG9ydGZvbGlvLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3RleHRfY29sb3JfZGFya19icmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDE7XG4gIGJvcmRlci1jb2xvcjogJHBvcnRmb2xpb190MTtcbn1cblxuLmJ0bi1vdXRsaW5lLXBvcnRmb2xpbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tb3V0bGluZS1wb3J0Zm9saW86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLCAuc2hvdyA+IC5idG4tb3V0bGluZS1wb3J0Zm9saW8uZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICRwb3J0Zm9saW9fc2hhZG93O1xufVxuXG4ubGlzdC1ncm91cC1pdGVtLXBvcnRmb2xpbyB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3Q1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3Q0O1xufVxuXG4ubGlzdC1ncm91cC1pdGVtLXBvcnRmb2xpby5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uOmhvdmVyLCAubGlzdC1ncm91cC1pdGVtLXBvcnRmb2xpby5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uOmZvY3VzIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdDU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDM7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0tcG9ydGZvbGlvLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24uYWN0aXZlIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdGV4dF9jb2xvcl9kYXJrX2JyaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190NTtcbiAgYm9yZGVyLWNvbG9yOiAkcG9ydGZvbGlvX3Q1O1xufVxuXG4udGFibGUtcG9ydGZvbGlvLFxuLnRhYmxlLXBvcnRmb2xpbyA+IHRoLFxuLnRhYmxlLXBvcnRmb2xpbyA+IHRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190NDtcbn1cblxuLnRhYmxlLWhvdmVyIC50YWJsZS1wb3J0Zm9saW86aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3QzO1xufVxuXG4udGFibGUtaG92ZXIgLnRhYmxlLXBvcnRmb2xpbzpob3ZlciA+IHRkLFxuLnRhYmxlLWhvdmVyIC50YWJsZS1wb3J0Zm9saW86aG92ZXIgPiB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDM7XG59XG5cbi50ZXh0LXBvcnRmb2xpbyB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3QxICFpbXBvcnRhbnQ7XG59XG5cbmEudGV4dC1wb3J0Zm9saW86aG92ZXIsIGEudGV4dC1wb3J0Zm9saW86Zm9jdXMge1xuICBjb2xvcjogJHBvcnRmb2xpb190MiAhaW1wb3J0YW50O1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xuXG4uY2FyZC1jb250YWluZXIgYSB7XG4gIGNvbG9yOiAkY29sb3ItbGV0cmE7XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xufVxuXG4uY2FyZC1pbWctZ3JheSB7XG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7IC8qIFNhZmFyaSA2LjAgLSA5LjAgKi9cbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG59XG5cbi5jYXJkLWltZy1ncmF5OmhvdmVyIHtcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgwJSk7IC8qIFNhZmFyaSA2LjAgLSA5LjAgKi9cbiAgZmlsdGVyOiBncmF5c2NhbGUoMCUpO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZC1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmxpa2UtdGV4dCB7XG4gIGNvbG9yOiAjYjliOWI5ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWRnZS1uZXcge1xuICBmb250LXNpemU6IDEzcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialAuthService"] }]; }, null); })();


/***/ }),

/***/ "iQdX":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-sharebuttons/__ivy_ngcc__/fesm2015/ngx-sharebuttons.js ***!
  \*********************************************************************************/
/*! exports provided: IShareButton, SHARE_BUTTONS, SHARE_BUTTONS_CONFIG, ShareDirective, ShareModule, ShareService, SharerMethod, ɵ0, ɵ1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IShareButton", function() { return IShareButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARE_BUTTONS", function() { return SHARE_BUTTONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHARE_BUTTONS_CONFIG", function() { return SHARE_BUTTONS_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareDirective", function() { return ShareDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareService", function() { return ShareService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharerMethod", function() { return SharerMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");











const SHARE_BUTTONS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('shareButtonsConfig');
class IShareButton {
}
var SharerMethod;
(function (SharerMethod) {
    SharerMethod["Anchor"] = "anchor";
    SharerMethod["Window"] = "window";
})(SharerMethod || (SharerMethod = {}));

/**
 * Simple object check.
 */
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
/**
 * Deep merge two objects.
 */
function mergeDeep(target, ...sources) {
    if (!sources.length) {
        return target;
    }
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) {
                    Object.assign(target, { [key]: {} });
                }
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return mergeDeep(target, ...sources);
}
/** Returns a valid URL or falls back to current URL */
function getValidUrl(url, fallbackUrl) {
    if (url) {
        const r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (r.test(url)) {
            return url;
        }
        console.warn(`[ShareButtons]: Sharing link '${url}' is invalid!`);
    }
    return fallbackUrl;
}
function printPage() {
    return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]((sub) => document.defaultView.print());
}
function copyToClipboard({ params, data, platform, updater }) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => {
        const textArea = document.createElement('textarea');
        textArea.value = decodeURIComponent(params.url);
        document.body.appendChild(textArea);
        // highlight TextArea to copy the sharing link
        if (platform.IOS) {
            const range = document.createRange();
            range.selectNodeContents(textArea);
            const selection = document.defaultView.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.readOnly = true;
            textArea.setSelectionRange(0, 999999);
        }
        else {
            textArea.select();
        }
        document.execCommand('copy');
        document.body.removeChild(textArea);
        // Disable copy button
        updater.next({ icon: data.successIcon, text: data.successText, disabled: true });
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["delay"])(data.delay), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => updater.next({ icon: data.icon, text: data.text, disabled: false })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(err => {
        console.warn('Copy link failed!', err.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
    }));
}

const ɵ0 = (p) => {
    return p.description ? `${p.description}\r\n${p.url}` : p.url;
};
// Create message body that includes the sharing link used for Email, SMS and WhatsApp buttons
const linkInDescription = {
    description: ɵ0
};
const ɵ1 = {
    text: 'Copy link',
    icon: ['fas', 'link'],
    successText: 'Copied',
    successIcon: ['fas', 'check'],
    delay: 2000
};
const SHARE_BUTTONS = {
    facebook: {
        type: 'facebook',
        text: 'Facebook',
        ariaLabel: 'Share on Facebook',
        icon: ['fab', 'facebook-f'],
        color: '#4267B2',
        share: {
            desktop: 'https://www.facebook.com/sharer/sharer.php?'
        },
        params: {
            url: 'u'
        }
    },
    twitter: {
        type: 'twitter',
        text: 'Twitter',
        ariaLabel: 'Share on Twitter',
        icon: ['fab', 'twitter'],
        color: '#00acee',
        share: {
            desktop: 'https://twitter.com/intent/tweet?'
        },
        params: {
            url: 'url',
            description: 'text',
            tags: 'hashtags',
            via: 'via'
        }
    },
    linkedin: {
        type: 'linkedin',
        text: 'LinkedIn',
        ariaLabel: 'Share on LinkedIn',
        icon: ['fab', 'linkedin-in'],
        color: '#006fa6',
        share: {
            desktop: 'https://www.linkedin.com/shareArticle?'
        },
        params: {
            url: 'url',
            title: 'title',
            description: 'summary'
        }
    },
    pinterest: {
        type: 'pinterest',
        text: 'Pinterest',
        ariaLabel: 'Share on Pinterest',
        icon: ['fab', 'pinterest-p'],
        color: '#BD091D',
        share: {
            desktop: 'https://in.pinterest.com/pin/create/button/?'
        },
        params: {
            url: 'url',
            description: 'description',
            image: 'media'
        }
    },
    reddit: {
        type: 'reddit',
        text: 'Reddit',
        ariaLabel: 'Share on Reddit',
        icon: ['fab', 'reddit-alien'],
        color: '#FF4006',
        share: {
            desktop: 'https://www.reddit.com/submit?'
        },
        params: {
            url: 'url',
            title: 'title'
        }
    },
    tumblr: {
        type: 'tumblr',
        text: 'Tumblr',
        ariaLabel: 'Share on Tumblr',
        icon: ['fab', 'tumblr'],
        color: '#36465D',
        share: {
            desktop: 'https://tumblr.com/widgets/share/tool?'
        },
        params: {
            url: 'canonicalUrl',
            description: 'caption',
            tags: 'tags'
        }
    },
    mix: {
        type: 'mix',
        text: 'Mix',
        ariaLabel: 'Share on Mix',
        icon: ['fab', 'mix'],
        color: '#eb4924',
        share: {
            desktop: 'https://mix.com/add?'
        },
        params: {
            url: 'url'
        }
    },
    vk: {
        type: 'vk',
        text: 'VKontakte',
        ariaLabel: 'Share on VKontakte',
        icon: ['fab', 'vk'],
        color: '#4C75A3',
        share: {
            desktop: 'https://vk.com/share.php?'
        },
        params: {
            url: 'url'
        }
    },
    telegram: {
        type: 'telegram',
        text: 'Telegram',
        ariaLabel: 'Share on Telegram',
        icon: ['fab', 'telegram-plane'],
        color: '#0088cc',
        share: {
            desktop: 'https://t.me/share/url?'
        },
        params: {
            url: 'url',
            description: 'text'
        }
    },
    messenger: {
        type: 'messenger',
        text: 'Messenger',
        ariaLabel: 'Share on Messenger',
        icon: ['fab', 'facebook-messenger'],
        color: '#0080FF',
        share: {
            android: 'fb-messenger://share/?',
            ios: 'fb-messenger://share/?'
        },
        params: {
            url: 'link'
        }
    },
    whatsapp: {
        type: 'whatsapp',
        text: 'WhatsApp',
        ariaLabel: 'Share on WhatsApp',
        icon: ['fab', 'whatsapp'],
        color: '#25D366',
        share: {
            desktop: 'https://web.whatsapp.com/send?',
            android: 'whatsapp://send?',
            ios: 'https://api.whatsapp.com/send?'
        },
        params: {
            description: 'text'
        },
        paramsFunc: linkInDescription
    },
    xing: {
        type: 'xing',
        text: 'Xing',
        ariaLabel: 'Share on Xing',
        icon: ['fab', 'xing'],
        color: '#006567',
        share: {
            desktop: 'https://www.xing.com/app/user?op=share&'
        },
        params: {
            url: 'url'
        }
    },
    line: {
        type: 'line',
        text: 'Line',
        ariaLabel: 'Share on Line',
        icon: ['fab', 'line'],
        color: '#00b900',
        share: {
            desktop: 'https://social-plugins.line.me/lineit/share?'
        },
        params: {
            url: 'url'
        }
    },
    sms: {
        type: 'sms',
        text: 'SMS',
        ariaLabel: 'Share link via SMS',
        icon: ['fas', 'sms'],
        color: '#20c16c',
        share: {
            desktop: 'sms:?',
            ios: 'sms:&'
        },
        params: {
            description: 'body'
        },
        paramsFunc: linkInDescription
    },
    email: {
        type: 'email',
        text: 'Email',
        ariaLabel: 'Share link via email',
        icon: ['fas', 'envelope'],
        color: '#FF961C',
        share: {
            desktop: 'mailto:?'
        },
        params: {
            title: 'subject',
            description: 'body'
        },
        paramsFunc: linkInDescription
    },
    print: {
        type: 'print',
        text: 'Print',
        ariaLabel: 'Print page',
        icon: ['fas', 'print'],
        color: '#765AA2',
        func: printPage
    },
    copy: {
        type: 'copy',
        text: 'Copy link',
        ariaLabel: 'Copy link',
        icon: ['fas', 'link'],
        color: '#607D8B',
        data: ɵ1,
        func: copyToClipboard
    }
};

let ShareService = class ShareService {
    constructor(config, _document) {
        this._document = _document;
        /** Global config that applies on all share buttons in the app */
        this.config = {
            sharerMethod: SharerMethod.Anchor,
            sharerTarget: '_blank',
            windowObj: this._document.defaultView,
            windowFuncName: 'open',
            prop: SHARE_BUTTONS,
            theme: 'default',
            include: [],
            exclude: [],
            size: 0,
            autoSetMeta: true,
            windowWidth: 800,
            windowHeight: 500,
            moreButtonIcon: 'ellipsis-h',
            lessButtonIcon: 'minus'
        };
        /** Stream that emits when config changes */
        this.config$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.config);
        if (config) {
            this.setConfig(config);
        }
    }
    /**
     * Share buttons properties, used to get the text, color and icon of each button.
     */
    get prop() {
        return this.config.prop;
    }
    get windowSize() {
        return `width=${this.config.windowWidth}, height=${this.config.windowHeight}`;
    }
    setConfig(config) {
        this.config = mergeDeep(this.config, config);
        this.config$.next(this.config);
    }
    addButton(name, props) {
        this.setConfig({
            prop: {
                [name]: props
            }
        });
    }
};
ShareService.ɵfac = function ShareService_Factory(t) { return new (t || ShareService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](SHARE_BUTTONS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])); };
ShareService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [SHARE_BUTTONS_CONFIG,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
ShareService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ShareService_Factory() { return new ShareService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(SHARE_BUTTONS_CONFIG, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])); }, token: ShareService, providedIn: "root" });
ShareService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(SHARE_BUTTONS_CONFIG)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]))
], ShareService);

let ShareDirective = class ShareDirective {
    constructor(_el, _meta, _platform, _share, _cd, _document) {
        this._meta = _meta;
        this._platform = _platform;
        this._share = _share;
        this._cd = _cd;
        this._document = _document;
        /** Stream that emits when button is destroyed */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Stream that emit when share button need to be updated */
        this._updater = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /** Set meta tags from document head, useful when SEO is supported */
        this.autoSetMeta = this._share.config.autoSetMeta;
        /** Sharing link */
        this.url = this._share.config.url;
        /** Sets the title parameter */
        this.title = this._share.config.title;
        /** Sets the description parameter */
        this.description = this._share.config.description;
        /** Sets the image parameter for sharing on Pinterest */
        this.image = this._share.config.image;
        /** Sets the tags parameter for sharing on Twitter and Tumblr */
        this.tags = this._share.config.tags;
        /** Stream that emits when share dialog is opened */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Stream that emits when share dialog is closed */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._el = _el.nativeElement;
    }
    /**
     * Share the link
     */
    share() {
        // Avoid SSR error
        if (this._platform.isBrowser && this.shareButton) {
            // Prepare sharer url params
            const params = this.autoSetMeta ? this.getParamsFromMetaTags() : this.getParamsFromInputs();
            // Prepare share button click
            const click = this.shareButton.share ? this.open(params) : this.shareButton.func({
                params,
                data: this.shareButton.data,
                platform: this._platform,
                updater: this._updater
            });
            click.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe();
        }
        else {
            console.warn(`${this.text} button is not compatible on this Platform`);
        }
    }
    ngOnInit() {
        // This stream is mainly used to update the copy button text and icon when it is being clicked
        this._updater.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((data) => {
            this.icon = data.icon;
            this.text = data.text;
            this._el.style.pointerEvents = data.disabled ? 'none' : 'auto';
            this._cd.markForCheck();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._destroyed)).subscribe();
    }
    ngOnChanges(changes) {
        // Avoid SSR error
        if (this._platform.isBrowser) {
            // Create share button
            if (this._shareButtonChanged(changes.shareButtonName)) {
                this._createShareButton();
            }
            // Prepare share url
            if (this._urlChanged(changes.url)) {
                this.url = getValidUrl(this.autoSetMeta
                    ? this.url || this._getMetaTagContent('og:url')
                    : this.url, this._document.defaultView.location.href);
            }
        }
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    _createShareButton() {
        const button = this._share.config.prop[this.shareButtonName];
        if (button) {
            // Set share button properties
            this.shareButton = button;
            // Remove previous button class
            this._el.classList.remove(`sb-${this._buttonClass}`);
            // Add new button class
            this._el.classList.add(`sb-${this.shareButtonName}`);
            // Set button css color variable
            this._el.style.setProperty('--button-color', this.shareButton.color);
            // Keep a copy of the class for future replacement
            this._buttonClass = this.shareButtonName;
            this.color = this.shareButton.color;
            this.text = this.shareButton.text;
            this.icon = this.shareButton.icon;
            // Set aria-label attribute
            this._el.setAttribute('aria-label', button.ariaLabel);
        }
        else {
            console.error(`[ShareButtons]: The share button '${this.shareButtonName}' does not exist!`);
        }
    }
    /**
     * Get meta tag content
     */
    _getMetaTagContent(key) {
        const metaUsingProperty = this._meta.getTag(`property="${key}"`);
        if (metaUsingProperty) {
            return metaUsingProperty.getAttribute('content');
        }
        const metaUsingName = this._meta.getTag(`name="${key}"`);
        if (metaUsingName) {
            return metaUsingName.getAttribute('content');
        }
    }
    _shareButtonChanged(change) {
        return change && (change.firstChange || change.previousValue !== change.currentValue);
    }
    _urlChanged(change) {
        return !this.url || (change && change.previousValue !== change.currentValue);
    }
    /**
     * Get share params from meta tags first and fallback to user inputs
     */
    getParamsFromMetaTags() {
        return {
            url: this.url,
            title: this.title || this._getMetaTagContent('og:title'),
            description: this.description || this._getMetaTagContent('og:description'),
            image: this.image || this._getMetaTagContent('og:image'),
            via: this._share.config.twitterAccount,
            tags: this.tags
        };
    }
    /**
     * Get share params from user inputs
     */
    getParamsFromInputs() {
        return {
            url: this.url,
            title: this.title,
            description: this.description,
            image: this.image,
            tags: this.tags,
            via: this._share.config.twitterAccount,
        };
    }
    open(params) {
        // Set sharer link based on user's device
        let sharerLink;
        if (this._platform.IOS && this.shareButton.share.ios) {
            sharerLink = this.shareButton.share.ios;
        }
        else if (this._platform.ANDROID && this.shareButton.share.android) {
            sharerLink = this.shareButton.share.android;
        }
        else {
            sharerLink = this.shareButton.share.desktop;
        }
        if (sharerLink) {
            // Set sharer link params
            const finalUrl = sharerLink + this._serializeParams(params);
            // Log the sharer link in debug mode
            if (this._share.config.debug) {
                console.log('[DEBUG SHARE BUTTON]: ', finalUrl);
            }
            // Open the share window
            // There are two methods available for opening the share window:
            // 1. Using a real anchor
            // 2. Using window.open
            const sharerMethod = this.shareButton.method || this._share.config.sharerMethod;
            const sharerTarget = this.shareButton.target || this._share.config.sharerTarget;
            switch (sharerMethod) {
                case SharerMethod.Anchor:
                    const linkElement = this._document.createElement('a');
                    // Make it open in a new tab/window (depends on user's browser configuration)
                    linkElement.setAttribute('target', sharerTarget);
                    // Prevent security vulnerability https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c
                    linkElement.setAttribute('rel', 'noopener noreferrer');
                    linkElement.href = finalUrl;
                    linkElement.click();
                    linkElement.remove();
                    break;
                case SharerMethod.Window:
                    // Open link using Window object
                    const openWindow = this._share.config.windowObj[this._share.config.windowFuncName];
                    const popUpWindow = openWindow(finalUrl, sharerTarget, this._share.windowSize);
                    // Prevent security vulnerability https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c
                    this._share.config.windowObj.opener = null;
                    // Resolve when share dialog is closed
                    if (popUpWindow) {
                        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]((sub) => {
                            const pollTimer = this._document.defaultView.setInterval(() => {
                                if (popUpWindow.closed) {
                                    this._document.defaultView.clearInterval(pollTimer);
                                    // Emit when share windows is closed
                                    this.closed.emit(this.shareButtonName);
                                    sub.next();
                                    sub.complete();
                                }
                            }, 200);
                        });
                    }
                    break;
            }
            // Emit when share window is opened
            this.opened.emit(this.shareButtonName);
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
    }
    _serializeParams(params) {
        return Object.entries(this.shareButton.params)
            .map(([key, value]) => {
            // Check if share button param has a map function
            const paramFunc = this.shareButton.paramsFunc ? this.shareButton.paramsFunc[key] : null;
            if (params[key] || paramFunc) {
                const paramValue = paramFunc ? paramFunc(params) : params[key];
                return `${value}=${encodeURIComponent(paramValue)}`;
            }
            return '';
        })
            .join('&');
    }
};
ShareDirective.ɵfac = function ShareDirective_Factory(t) { return new (t || ShareDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ShareService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])); };
ShareDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ShareDirective, selectors: [["", "shareButton", ""]], hostBindings: function ShareDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShareDirective_click_HostBindingHandler() { return ctx.share(); });
    } }, inputs: { autoSetMeta: "autoSetMeta", url: "url", title: "title", description: "description", image: "image", tags: "tags", shareButtonName: ["shareButton", "shareButtonName"] }, outputs: { opened: "opened", closed: "closed" }, exportAs: ["shareButton"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
ShareDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: ShareService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('shareButton')
], ShareDirective.prototype, "shareButtonName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareDirective.prototype, "autoSetMeta", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareDirective.prototype, "url", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareDirective.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareDirective.prototype, "description", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareDirective.prototype, "image", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareDirective.prototype, "tags", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ShareDirective.prototype, "opened", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ShareDirective.prototype, "closed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')
], ShareDirective.prototype, "share", null);
ShareDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]))
], ShareDirective);

var ShareModule_1;
let ShareModule = ShareModule_1 = class ShareModule {
    static withConfig(config) {
        return {
            ngModule: ShareModule_1,
            providers: [
                { provide: SHARE_BUTTONS_CONFIG, useValue: config }
            ]
        };
    }
};
ShareModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ShareModule });
ShareModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ShareModule_Factory(t) { return new (t || ShareModule)(); }, imports: [[
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"]
        ]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShareService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [SHARE_BUTTONS_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShareDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[shareButton]',
                exportAs: 'shareButton'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"] }, { type: ShareService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }] }]; }, { autoSetMeta: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], share: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click']
        }], shareButtonName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['shareButton']
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ShareModule, { declarations: function () { return [ShareDirective]; }, imports: function () { return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"]]; }, exports: function () { return [ShareDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShareModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"]
                ],
                declarations: [
                    ShareDirective
                ],
                exports: [
                    ShareDirective
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-sharebuttons.js.map

/***/ }),

/***/ "nLfN":
/*!*********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js ***!
  \*********************************************************************/
/*! exports provided: Platform, PlatformModule, _getShadowRoot, _supportsShadowDom, getRtlScrollAxisType, getSupportedInputTypes, normalizePassiveListenerOptions, supportsPassiveEventListeners, supportsScrollBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getShadowRoot", function() { return _getShadowRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_supportsShadowDom", function() { return _supportsShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function() { return getRtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function() { return getSupportedInputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function() { return normalizePassiveListenerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function() { return supportsPassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function() { return supportsScrollBehavior; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/platform/platform.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
/** @type {?} */

let hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    hasV8BreakIterator = (typeof Intl !== 'undefined' && ((/** @type {?} */ (Intl))).v8BreakIterator);
}
catch (_a) {
    hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
class Platform {
    /**
     * \@breaking-change 8.0.0 remove optional decorator
     * @param {?=} _platformId
     */
    constructor(_platformId) {
        this._platformId = _platformId;
        // We want to use the Angular platform check because if the Document is shimmed
        // without the navigator, the following checks will fail. This is preferred because
        // sometimes the Document may be shimmed without the user's knowledge or intention
        /**
         * Whether the Angular application is being rendered in the browser.
         */
        this.isBrowser = this._platformId ?
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
        /**
         * Whether the current browser is Microsoft Edge.
         */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Microsoft Trident.
         */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
        /**
         * Whether the current rendering engine is Blink.
         */
        this.BLINK = this.isBrowser && (!!(((/** @type {?} */ (window))).chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        /**
         * Whether the current rendering engine is WebKit.
         */
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /**
         * Whether the current platform is Apple iOS.
         */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !('MSStream' in window);
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        /**
         * Whether the current browser is Firefox.
         */
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /**
         * Whether the current platform is Android.
         */
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.
        /**
         * Whether the current browser is Safari.
         */
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
}
Platform.ɵfac = function Platform_Factory(t) { return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); };
/** @nocollapse */
Platform.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];
/** @nocollapse */ Platform.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function Platform_Factory() { return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); }, token: Platform, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Platform, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/platform/platform-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PlatformModule {
}
PlatformModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlatformModule });
PlatformModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlatformModule_Factory(t) { return new (t || PlatformModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/platform/features/input-types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Cached result Set of input types support by the current browser.
 * @type {?}
 */
let supportedInputTypes;
/**
 * Types of `<input>` that *might* be supported.
 * @type {?}
 */
const candidateInputTypes = [
    // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/**
 * @return {?} The input types supported by this browser.
 */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    /** @type {?} */
    let featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter((/**
     * @param {?} value
     * @return {?}
     */
    value => {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    })));
    return supportedInputTypes;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/platform/features/passive-listeners.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Cached result of whether the user's browser supports passive event listeners.
 * @type {?}
 */
let supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', (/** @type {?} */ (null)), Object.defineProperty({}, 'passive', {
                get: (/**
                 * @return {?}
                 */
                () => supportsPassiveEvents = true)
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param {?} options Object to be normalized.
 * @return {?}
 */
function normalizePassiveListenerOptions(options) {
    return supportsPassiveEventListeners() ? options : !!options.capture;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/platform/features/scrolling.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @enum {number} */
const RtlScrollAxisType = {
    /**
     * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
     * all the way right.
     */
    NORMAL: 0,
    /**
     * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    NEGATED: 1,
    /**
     * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    INVERTED: 2,
};
/**
 * Cached result of the way the browser handles the horizontal scroll axis in RTL mode.
 * @type {?}
 */
let rtlScrollAxisType;
/**
 * Check whether the browser supports scroll behaviors.
 * @return {?}
 */
function supportsScrollBehavior() {
    return !!(typeof document == 'object' && 'scrollBehavior' in (/** @type {?} */ (document.documentElement)).style);
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 * @return {?}
 */
function getRtlScrollAxisType() {
    // We can't check unless we're on the browser. Just assume 'normal' if we're not.
    if (typeof document !== 'object' || !document) {
        return 0 /* NORMAL */;
    }
    if (rtlScrollAxisType == null) {
        // Create a 1px wide scrolling container and a 2px wide content element.
        /** @type {?} */
        const scrollContainer = document.createElement('div');
        /** @type {?} */
        const containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.height = '1px';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        /** @type {?} */
        const content = document.createElement('div');
        /** @type {?} */
        const contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = 0 /* NORMAL */;
        // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.
        if (scrollContainer.scrollLeft === 0) {
            // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
            // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
            // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
            // return 0 when we read it again.
            scrollContainer.scrollLeft = 1;
            rtlScrollAxisType =
                scrollContainer.scrollLeft === 0 ? 1 /* NEGATED */ : 2 /* INVERTED */;
        }
        (/** @type {?} */ (scrollContainer.parentNode)).removeChild(scrollContainer);
    }
    return rtlScrollAxisType;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/platform/features/shadow-dom.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @type {?} */
let shadowDomIsSupported;
/**
 * Checks whether the user's browser support Shadow DOM.
 * @return {?}
 */
function _supportsShadowDom() {
    if (shadowDomIsSupported == null) {
        /** @type {?} */
        const head = typeof document !== 'undefined' ? document.head : null;
        shadowDomIsSupported = !!(head && (((/** @type {?} */ (head))).createShadowRoot || head.attachShadow));
    }
    return shadowDomIsSupported;
}
/**
 * Gets the shadow root of an element, if supported and the element is inside the Shadow DOM.
 * @param {?} element
 * @return {?}
 */
function _getShadowRoot(element) {
    if (_supportsShadowDom()) {
        /** @type {?} */
        const rootNode = element.getRootNode ? element.getRootNode() : null;
        // Note that this should be caught by `_supportsShadowDom`, but some
        // teams have been able to hit this code path on unsupported browsers.
        if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
            return rootNode;
        }
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/platform/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=platform.js.map

/***/ }),

/***/ "pj/B":
/*!*****************************************************************************************!*\
  !*** ./node_modules/ngx-sharebuttons/__ivy_ngcc__/fesm2015/ngx-sharebuttons-buttons.js ***!
  \*****************************************************************************************/
/*! exports provided: ShareButtons, ShareButtonsModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareButtons", function() { return ShareButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareButtonsModule", function() { return ShareButtonsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ExpandButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-sharebuttons */ "iQdX");
/* harmony import */ var ngx_sharebuttons_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-sharebuttons/button */ "0st4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");














function ShareButtons_div_0_share_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "share-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("opened", function ShareButtons_div_0_share_button_1_Template_share_button_opened_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.opened.emit($event); })("closed", function ShareButtons_div_0_share_button_1_Template_share_button_closed_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.closed.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const button_r8 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("button", button_r8)("theme", ctx_r6.theme)("url", ctx_r6.url)("title", ctx_r6.title)("description", ctx_r6.description)("image", ctx_r6.image)("tags", ctx_r6.tags)("autoSetMeta", ctx_r6.autoSetMeta)("showIcon", ctx_r6.showIcon)("showText", ctx_r6.showText)("size", ctx_r6.size)("disabled", ctx_r6.disabled);
} }
function ShareButtons_div_0_expand_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "expand-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("toggle", function ShareButtons_div_0_expand_button_2_Template_expand_button_toggle_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.updateState({ expanded: $event }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("sb-button sb-", ctx_r7.theme, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("expanded", state_r5.expanded)("moreIcon", state_r5.moreIcon)("lessIcon", state_r5.lessIcon)("size", (1 + ctx_r7.size / 20) * 14);
} }
function ShareButtons_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShareButtons_div_0_share_button_1_Template, 1, 12, "share-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ShareButtons_div_0_expand_button_2_Template, 1, 7, "expand-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("sb-group sb-", ctx_r4.theme, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", state_r5.selectedButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", state_r5.shownCount < state_r5.userButtons.length);
} }
let ShareButtons = class ShareButtons {
    constructor(_share) {
        this._share = _share;
        this._state$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({
            includedButtons: [],
            excludedButtons: [],
            userButtons: [],
            selectedButtons: [],
            expanded: true,
            shownCount: Object.keys(ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_3__["SHARE_BUTTONS"]).length
        });
        this._configSub$ = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        this.theme = this._share.config.theme;
        /** Show buttons icons */
        this.showIcon = true;
        /** Show buttons text */
        this.showText = false;
        /** Buttons size */
        this.size = 0;
        /** Share dialog opened event */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Share dialog closed event */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.state$ = this._state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((state) => {
            // Use component include buttons, otherwise fallback to global include buttons
            const includedButtons = state.includedButtons && state.includedButtons.length ? state.includedButtons : state.userButtons;
            const userButtons = state.excludedButtons ? includedButtons.filter((btn) => state.excludedButtons.indexOf(btn) < 0) : includedButtons;
            const selectedButtons = userButtons.slice(0, state.expanded ? userButtons.length : state.shownCount);
            return {
                userButtons,
                selectedButtons,
                expanded: state.expanded,
                shownCount: state.shownCount,
                moreIcon: state.moreIcon,
                lessIcon: state.lessIcon
            };
        }));
        // Subscribe to share buttons config changes, This updates the component whenever a new button is added
        this._configSub$ = this._share.config$.subscribe((config) => {
            // Use global include buttons, otherwise fallback to all buttons
            const includedButtons = config.include.length ? config.include : Object.keys(ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_3__["SHARE_BUTTONS"]);
            const userButtons = includedButtons.filter((btn) => config.exclude.indexOf(btn) < 0);
            this.updateState({
                userButtons,
                expanded: false,
                moreIcon: config.moreButtonIcon,
                lessIcon: config.lessButtonIcon
            });
        });
    }
    ngOnChanges(changes) {
        const shouldUpdate = (changes['include'] && changes['include'].currentValue !== changes['include'].previousValue) ||
            (changes['exclude'] && changes['exclude'].currentValue !== changes['exclude'].previousValue) ||
            (changes['show'] && changes['show'].currentValue !== changes['show'].previousValue);
        if (shouldUpdate) {
            this.updateState({
                includedButtons: this.include,
                excludedButtons: this.exclude,
                shownCount: this.show
            });
        }
    }
    ngOnDestroy() {
        this._configSub$.unsubscribe();
        this._state$.complete();
    }
    updateState(state) {
        this._state$.next(Object.assign(Object.assign({}, this._state$.value), state));
    }
};
ShareButtons.ɵfac = function ShareButtons_Factory(t) { return new (t || ShareButtons)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_3__["ShareService"])); };
ShareButtons.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShareButtons, selectors: [["share-buttons"]], inputs: { theme: "theme", showIcon: "showIcon", showText: "showText", size: "size", include: "include", exclude: "exclude", show: "show", url: "url", title: "title", description: "description", image: "image", tags: "tags", autoSetMeta: "autoSetMeta", disabled: "disabled" }, outputs: { opened: "opened", closed: "closed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 3, consts: [[3, "class", 4, "ngIf"], [3, "button", "theme", "url", "title", "description", "image", "tags", "autoSetMeta", "showIcon", "showText", "size", "disabled", "opened", "closed", 4, "ngFor", "ngForOf"], [3, "class", "expanded", "moreIcon", "lessIcon", "size", "toggle", 4, "ngIf"], [3, "button", "theme", "url", "title", "description", "image", "tags", "autoSetMeta", "showIcon", "showText", "size", "disabled", "opened", "closed"], [3, "expanded", "moreIcon", "lessIcon", "size", "toggle"]], template: function ShareButtons_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ShareButtons_div_0_Template, 3, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.state$));
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_sharebuttons_button__WEBPACK_IMPORTED_MODULE_4__["ShareButton"], ExpandButton]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]]; }, styles: ["[_nghost-%COMP%]{display:inherit;--sb-margin:0.3125em}"], changeDetection: 0 });
ShareButtons.ctorParameters = () => [
    { type: ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_3__["ShareService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButtons.prototype, "theme", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButtons.prototype, "include", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButtons.prototype, "exclude", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButtons.prototype, "show", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButtons.prototype, "url", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButtons.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButtons.prototype, "description", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButtons.prototype, "image", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButtons.prototype, "tags", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButtons.prototype, "autoSetMeta", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButtons.prototype, "showIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButtons.prototype, "showText", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButtons.prototype, "size", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShareButtons.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ShareButtons.prototype, "opened", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ShareButtons.prototype, "closed", void 0);
/**
 * Explanation of the above code:
 * ------------------------------
 Include buttons: includes only wanted buttons and excludes the rest
 Exclude buttons: excludes only the unwanted buttons
 User buttons = Include buttons - exclude buttons
 Selected Buttons = User buttons [shown number]
 */

let ExpandButton = class ExpandButton {
    constructor(el) {
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        el.nativeElement.style.setProperty('--button-color', '#FF6651');
    }
};
ExpandButton.ɵfac = function ExpandButton_Factory(t) { return new (t || ExpandButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
ExpandButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExpandButton, selectors: [["expand-button"]], inputs: { moreIcon: "moreIcon", lessIcon: "lessIcon", expanded: "expanded", size: "size" }, outputs: { toggle: "toggle" }, decls: 4, vars: 3, consts: [[1, "sb-wrapper", "sb-expand", "sb-show-icon", 3, "click"], [1, "sb-content"], [1, "sb-icon"], [3, "icon"]], template: function ExpandButton_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExpandButton_Template_button_click_0_listener() { return ctx.toggle.emit(!ctx.expanded); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("font-size", ctx.size, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.expanded ? ctx.lessIcon : ctx.moreIcon);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"]], encapsulation: 2, changeDetection: 0 });
ExpandButton.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ExpandButton.prototype, "moreIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ExpandButton.prototype, "lessIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ExpandButton.prototype, "expanded", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ExpandButton.prototype, "size", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ExpandButton.prototype, "toggle", void 0);

var ShareButtonsModule_1;
let ShareButtonsModule = ShareButtonsModule_1 = class ShareButtonsModule {
    static withConfig(config) {
        return {
            ngModule: ShareButtonsModule_1,
            providers: [{ provide: ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_3__["SHARE_BUTTONS_CONFIG"], useValue: config }]
        };
    }
};
ShareButtonsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ShareButtonsModule });
ShareButtonsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ShareButtonsModule_Factory(t) { return new (t || ShareButtonsModule)(); }, imports: [[
            ngx_sharebuttons_button__WEBPACK_IMPORTED_MODULE_4__["ShareButtonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        ngx_sharebuttons_button__WEBPACK_IMPORTED_MODULE_4__["ShareButtonModule"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShareButtons, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'share-buttons',
                template: "<div *ngIf=\"state$ | async; let state\" class=\"sb-group sb-{{theme}}\">\n  <share-button *ngFor=\"let button of state.selectedButtons\"\n                [button]=\"button\"\n                [theme]=\"theme\"\n                [url]=\"url\"\n                [title]=\"title\"\n                [description]=\"description\"\n                [image]=\"image\"\n                [tags]=\"tags\"\n                [autoSetMeta]=\"autoSetMeta\"\n                [showIcon]=\"showIcon\"\n                [showText]=\"showText\"\n                [size]=\"size\"\n                (opened)=\"opened.emit($event)\"\n                (closed)=\"closed.emit($event)\"\n                [disabled]=\"disabled\">\n  </share-button>\n  <expand-button *ngIf=\"state.shownCount < state.userButtons.length\"\n                 class=\"sb-button sb-{{theme}}\"\n                 [expanded]=\"state.expanded\"\n                 [moreIcon]=\"state.moreIcon\"\n                 [lessIcon]=\"state.lessIcon\"\n                 [size]=\"(1 + size/20) * 14\"\n                 (toggle)=\"updateState({expanded: $event})\">\n  </expand-button>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [":host{display:inherit;--sb-margin:0.3125em}"]
            }]
    }], function () { return [{ type: ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_3__["ShareService"] }]; }, { theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], include: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], exclude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], autoSetMeta: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExpandButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'expand-button',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                template: `
    <button class="sb-wrapper sb-expand sb-show-icon"
            [style.fontSize.px]="size"
            (click)="toggle.emit(!expanded)">

      <div class="sb-content">
        <div class="sb-icon">
          <fa-icon [icon]="expanded ? lessIcon : moreIcon"></fa-icon>
        </div>
      </div>
    </button>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], moreIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], lessIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ShareButtonsModule, { declarations: function () { return [ShareButtons,
        ExpandButton]; }, imports: function () { return [ngx_sharebuttons_button__WEBPACK_IMPORTED_MODULE_4__["ShareButtonModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [ngx_sharebuttons_button__WEBPACK_IMPORTED_MODULE_4__["ShareButtonModule"],
        ShareButtons]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShareButtonsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    ShareButtons,
                    ExpandButton
                ],
                imports: [
                    ngx_sharebuttons_button__WEBPACK_IMPORTED_MODULE_4__["ShareButtonModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                exports: [
                    ngx_sharebuttons_button__WEBPACK_IMPORTED_MODULE_4__["ShareButtonModule"],
                    ShareButtons
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-sharebuttons-buttons.js.map

/***/ }),

/***/ "yqBX":
/*!**************************************************************************!*\
  !*** ./src/app/feature/post/components/plantilla/plantilla.component.ts ***!
  \**************************************************************************/
/*! exports provided: PlantillaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantillaComponent", function() { return PlantillaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["iframe"];
class PlantillaComponent {
    constructor() {
        this.gistId = 'deyson12';
        this.file = 'd53f49d2e5f229a2a094e3fe08f49c20.js';
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.iframe.nativeElement.id = 'gist-' + this.gistId;
        const doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
        const content = `
        <html>
        <head>
          <base target="_parent">
        </head>
        <body onload="parent.document.getElementById('${this.iframe.nativeElement.id}')">
        <script type="text/javascript" src="https://gist.github.com/deyson12/d53f49d2e5f229a2a094e3fe08f49c20.js"></script>
        </body>
      </html>
    `;
        doc.open();
        doc.write(content);
        doc.close();
    }
}
PlantillaComponent.ɵfac = function PlantillaComponent_Factory(t) { return new (t || PlantillaComponent)(); };
PlantillaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlantillaComponent, selectors: [["app-plantilla"]], viewQuery: function PlantillaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.iframe = _t.first);
    } }, inputs: { gistId: "gistId", file: "file" }, decls: 13, vars: 0, consts: [[1, "container"], ["src", "https://www.campusmvp.es/catalogo/repository/product/curso-git-online-banner.png", "alt", "banner git", 1, "img-banner"], [1, "title"], [1, "subtitulo"], ["type", "text/javascript", "width", "100%", "height", "750px", "title", "code"], ["iframe", ""]], template: function PlantillaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Comandos Basicos y despliegue en Gitlab, Github o Bitbucket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Introducci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Git es un sistema de control de versiones distribuido gratuito y de c\u00F3digo abierto dise\u00F1ado para manejar todo, desde proyectos peque\u00F1os hasta muy grandes, con rapidez y eficiencia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Git es f\u00E1cil de aprender y tiene una huella peque\u00F1a con un rendimiento incre\u00EDblemente r\u00E1pido. Supera a las herramientas SCM como Subversion, CVS, Perforce y ClearCase con caracter\u00EDsticas como ramificaci\u00F3n local barata, \u00E1reas de preparaci\u00F3n convenientes y m\u00FAltiples flujos de trabajo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "iframe", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".alert-portfolio[_ngcontent-%COMP%] {\n  color: #0f2a5c;\n  background-color: #bfd1f3;\n  border-color: #adc5f0;\n}\n.alert-portfolio[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top-color: #97b5ed;\n}\n.alert-portfolio[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n  color: #081631;\n}\n.badge-portfolio[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #225bc5;\n}\n.badge-portfolio[href][_ngcontent-%COMP%]:hover, .badge-portfolio[href][_ngcontent-%COMP%]:focus {\n  color: #fff;\n  background-color: #1a4699;\n}\n.bg-portfolio[_ngcontent-%COMP%] {\n  background-color: #225bc5 !important;\n}\na.bg-portfolio[_ngcontent-%COMP%]:hover, a.bg-portfolio[_ngcontent-%COMP%]:focus, button.bg-portfolio[_ngcontent-%COMP%]:hover, button.bg-portfolio[_ngcontent-%COMP%]:focus {\n  background-color: #1a4699 !important;\n}\n.border-portfolio[_ngcontent-%COMP%] {\n  border-color: #225bc5 !important;\n}\n.btn-portfolio[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #225bc5;\n  border-color: #225bc5;\n}\n.btn-portfolio[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #1c4ca6;\n  border-color: #1a4699;\n}\n.btn-portfolio[_ngcontent-%COMP%]:focus, .btn-portfolio.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(34, 91, 197, 0.5);\n}\n.btn-portfolio.disabled[_ngcontent-%COMP%], .btn-portfolio[_ngcontent-%COMP%]:disabled {\n  color: #fff;\n  background-color: #225bc5;\n  border-color: #225bc5;\n}\n.btn-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-portfolio.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #1a4699;\n  border-color: #18408c;\n}\n.btn-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-portfolio.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(34, 91, 197, 0.5);\n}\n.btn-outline-portfolio[_ngcontent-%COMP%] {\n  color: #225bc5;\n  background-color: transparent;\n  border-color: #225bc5;\n}\n.btn-outline-portfolio[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #225bc5;\n  border-color: #225bc5;\n}\n.btn-outline-portfolio[_ngcontent-%COMP%]:focus, .btn-outline-portfolio.focus[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(34, 91, 197, 0.5);\n}\n.btn-outline-portfolio.disabled[_ngcontent-%COMP%], .btn-outline-portfolio[_ngcontent-%COMP%]:disabled {\n  color: #225bc5;\n  background-color: transparent;\n}\n.btn-outline-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-portfolio.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #225bc5;\n  border-color: #225bc5;\n}\n.btn-outline-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-portfolio[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-portfolio.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(34, 91, 197, 0.5);\n}\n.list-group-item-portfolio[_ngcontent-%COMP%] {\n  color: #0f2a5c;\n  background-color: #adc5f0;\n}\n.list-group-item-portfolio.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-portfolio.list-group-item-action[_ngcontent-%COMP%]:focus {\n  color: #0f2a5c;\n  background-color: #97b5ed;\n}\n.list-group-item-portfolio.list-group-item-action.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0f2a5c;\n  border-color: #0f2a5c;\n}\n.table-portfolio[_ngcontent-%COMP%], .table-portfolio[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-portfolio[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #adc5f0;\n}\n.table-hover[_ngcontent-%COMP%]   .table-portfolio[_ngcontent-%COMP%]:hover {\n  background-color: #97b5ed;\n}\n.table-hover[_ngcontent-%COMP%]   .table-portfolio[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-portfolio[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n  background-color: #97b5ed;\n}\n.text-portfolio[_ngcontent-%COMP%] {\n  color: #225bc5 !important;\n}\na.text-portfolio[_ngcontent-%COMP%]:hover, a.text-portfolio[_ngcontent-%COMP%]:focus {\n  color: #1a4699 !important;\n}\n.divider[_ngcontent-%COMP%] {\n  background-color: #fff !important;\n}\n.container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding-top: 50px;\n}\n.title[_ngcontent-%COMP%] {\n  color: #225bc5;\n  font-size: 30px;\n  font-weight: bold;\n}\n.subtitulo[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  color: black;\n}\n.img-banner[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  width: 100%;\n}\niframe[_ngcontent-%COMP%] {\n  border: 0px;\n}\npre[_ngcontent-%COMP%] {\n  padding: 20px;\n  color: black;\n  background: #fff;\n}\nbody[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .line-data[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .file-data[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .line-numbers[_ngcontent-%COMP%] {\n  color: black;\n  background: #fff;\n}\nbody[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .gist-meta[_ngcontent-%COMP%] {\n  color: black;\n  background: #fff;\n}\nbody[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .pl-vo[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .pl-v[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .pl-vpf[_ngcontent-%COMP%] {\n  color: black;\n}\nbody[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .pl-en[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .pl-c1[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .pl-s3[_ngcontent-%COMP%] {\n  color: #ECAC29;\n}\nbody[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .pl-k[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .pl-st[_ngcontent-%COMP%] {\n  color: #7373F2;\n}\nbody[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .pl-s1[_ngcontent-%COMP%], body[_ngcontent-%COMP%]   .gist[_ngcontent-%COMP%]   .pl-pds[_ngcontent-%COMP%] {\n  color: #76A22F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcGxhbnRpbGxhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBOztxQ0FBQTtBQWtCQTtFQUNFLGNBWGE7RUFZYix5QkFSYTtFQVNiLHFCQWRhO0FDUmY7QUR5QkE7RUFDRSx5QkFuQmE7QUNIZjtBRHlCQTtFQUNFLGNBbEJhO0FDSmY7QUR5QkE7RUFDRSxXQWxCaUM7RUFtQmpDLHlCQTlCYTtBQ1FmO0FEeUJBO0VBQ0UsV0F2QmlDO0VBd0JqQyx5QkFsQ2E7QUNZZjtBRHlCQTtFQUNFLG9DQUFBO0FDdEJGO0FEeUJBOzs7RUFHRSxvQ0FBQTtBQ3RCRjtBRHlCQTtFQUNFLGdDQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0ExQ2lDO0VBMkNqQyx5QkF0RGE7RUF1RGIscUJBdkRhO0FDaUNmO0FEeUJBO0VBQ0UsV0FoRGlDO0VBaURqQyx5QkF0RGE7RUF1RGIscUJBNURhO0FDc0NmO0FEeUJBO0VBQ0UsK0NBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQTFEaUM7RUEyRGpDLHlCQXRFYTtFQXVFYixxQkF2RWE7QUNpRGY7QUR5QkE7RUFDRSxXQWhFaUM7RUFpRWpDLHlCQTNFYTtFQTRFYixxQkF4RWE7QUNrRGY7QUR5QkE7RUFDRSwrQ0FBQTtBQ3RCRjtBRHlCQTtFQUNFLGNBckZhO0VBc0ZiLDZCQUFBO0VBQ0EscUJBdkZhO0FDaUVmO0FEeUJBO0VBQ0UsV0FoRmlDO0VBaUZqQyx5QkE1RmE7RUE2RmIscUJBN0ZhO0FDdUVmO0FEeUJBO0VBQ0UsK0NBQUE7QUN0QkY7QUR5QkE7RUFDRSxjQXJHYTtFQXNHYiw2QkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBL0ZpQztFQWdHakMseUJBM0dhO0VBNEdiLHFCQTVHYTtBQ3NGZjtBRHlCQTtFQUNFLCtDQUFBO0FDdEJGO0FEeUJBO0VBQ0UsY0FoSGE7RUFpSGIseUJBbEhhO0FDNEZmO0FEeUJBO0VBQ0UsY0FySGE7RUFzSGIseUJBeEhhO0FDa0dmO0FEeUJBO0VBQ0UsV0FuSGlDO0VBb0hqQyx5QkEzSGE7RUE0SGIscUJBNUhhO0FDc0dmO0FEeUJBOzs7RUFHRSx5QkFuSWE7QUM2R2Y7QUR5QkE7RUFDRSx5QkF4SWE7QUNrSGY7QUR5QkE7O0VBRUUseUJBN0lhO0FDdUhmO0FEeUJBO0VBQ0UseUJBQUE7QUN0QkY7QUR5QkE7RUFDRSx5QkFBQTtBQ3RCRjtBQTNJQTtFQUNFLGlDQUFBO0FBOElGO0FBM0lBO0VBQ0Usc0JESGE7RUNJYixpQkFBQTtBQThJRjtBQTNJQTtFQUNFLGNEVmU7RUNXZixlQUFBO0VBQ0EsaUJBQUE7QUE4SUY7QUEzSUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZRG5CWTtBQ2lLZDtBQTNJQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQThJRjtBQTNJQTtFQUNJLFdBQUE7QUE4SUo7QUEzSUE7RUFDRSxhQUFBO0VBQ0EsWURqQ1k7RUNrQ1osZ0JEL0JhO0FDNktmO0FBM0lBO0VBQ0UsWUR0Q1k7RUN1Q1osZ0JEcENhO0FDa0xmO0FBM0lBO0VBQ0UsWUQzQ1k7RUM0Q1osZ0JEekNhO0FDdUxmO0FBM0lBO0VBQ0UsWURoRFk7QUM4TGQ7QUEzSUE7RUFDRSxjQUFBO0FBOElGO0FBM0lBO0VBQ0UsY0FBQTtBQThJRjtBQTNJQTtFQUNFLGNBQUE7QUE4SUYiLCJmaWxlIjoicGxhbnRpbGxhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yLWZvbmRvOiAjZmZmZmZmO1xuJGNvbG9yLWxldHJhOiByZ2IoMCwgMCwgMCk7XG4kY29sb3ItcHJpbWFyaW86ICMyMjViYzU7XG4kY29sb3Itc2VjdW5kYXJpbzogI2I1Y2ZmZjtcbiRjb2xvci1ibGFuY286ICNmZmY7XG4kY29sb3ItbG9nbzogIzVkNWQ1ZDtcblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLSBDT0xPUiBwb3J0Zm9saW9cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiRwb3J0Zm9saW9fdDE6ICMyMjViYzU7XG4kcG9ydGZvbGlvX3QyOiAjMWE0Njk5O1xuJHBvcnRmb2xpb190MzogIzk3YjVlZDtcbiRwb3J0Zm9saW9fdDQ6ICNhZGM1ZjA7XG4kcG9ydGZvbGlvX3Q1OiAjMGYyYTVjO1xuJHBvcnRmb2xpb190NjogIzE4NDA4YztcbiRwb3J0Zm9saW9fdDc6ICMxYzRjYTY7XG4kcG9ydGZvbGlvX3Q4OiAjMDgxNjMxO1xuJHBvcnRmb2xpb190OTogI2JmZDFmMztcblxuJHBvcnRmb2xpb19zaGFkb3c6IHJnYmEoMzQsIDkxLCAxOTcsIDAuNSk7XG4kcG9ydGZvbGlvX3RleHRfY29sb3JfZGFya19icmlnaHQ6ICNmZmY7XG5cblxuLmFsZXJ0LXBvcnRmb2xpbyB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3Q1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3Q5O1xuICBib3JkZXItY29sb3I6ICRwb3J0Zm9saW9fdDQ7XG59XG5cbi5hbGVydC1wb3J0Zm9saW8gaHIge1xuICBib3JkZXItdG9wLWNvbG9yOiAkcG9ydGZvbGlvX3QzO1xufVxuXG4uYWxlcnQtcG9ydGZvbGlvIC5hbGVydC1saW5rIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdDg7XG59XG5cbi5iYWRnZS1wb3J0Zm9saW8ge1xuICBjb2xvcjogJHBvcnRmb2xpb190ZXh0X2NvbG9yX2RhcmtfYnJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3QxO1xufVxuXG4uYmFkZ2UtcG9ydGZvbGlvW2hyZWZdOmhvdmVyLCAuYmFkZ2UtcG9ydGZvbGlvW2hyZWZdOmZvY3VzIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdGV4dF9jb2xvcl9kYXJrX2JyaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190Mjtcbn1cblxuLmJnLXBvcnRmb2xpbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDEgIWltcG9ydGFudDtcbn1cblxuYS5iZy1wb3J0Zm9saW86aG92ZXIsIGEuYmctcG9ydGZvbGlvOmZvY3VzLFxuYnV0dG9uLmJnLXBvcnRmb2xpbzpob3ZlcixcbmJ1dHRvbi5iZy1wb3J0Zm9saW86Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3QyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItcG9ydGZvbGlvIHtcbiAgYm9yZGVyLWNvbG9yOiAkcG9ydGZvbGlvX3QxICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tcG9ydGZvbGlvIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdGV4dF9jb2xvcl9kYXJrX2JyaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190MTtcbiAgYm9yZGVyLWNvbG9yOiAkcG9ydGZvbGlvX3QxO1xufVxuXG4uYnRuLXBvcnRmb2xpbzpob3ZlciB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3RleHRfY29sb3JfZGFya19icmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDc7XG4gIGJvcmRlci1jb2xvcjogJHBvcnRmb2xpb190Mjtcbn1cblxuLmJ0bi1wb3J0Zm9saW86Zm9jdXMsIC5idG4tcG9ydGZvbGlvLmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICRwb3J0Zm9saW9fc2hhZG93O1xufVxuXG4uYnRuLXBvcnRmb2xpby5kaXNhYmxlZCwgLmJ0bi1wb3J0Zm9saW86ZGlzYWJsZWQge1xuICBjb2xvcjogJHBvcnRmb2xpb190ZXh0X2NvbG9yX2RhcmtfYnJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3QxO1xuICBib3JkZXItY29sb3I6ICRwb3J0Zm9saW9fdDE7XG59XG5cbi5idG4tcG9ydGZvbGlvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1wb3J0Zm9saW86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuc2hvdyA+IC5idG4tcG9ydGZvbGlvLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3RleHRfY29sb3JfZGFya19icmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDI7XG4gIGJvcmRlci1jb2xvcjogJHBvcnRmb2xpb190Njtcbn1cblxuLmJ0bi1wb3J0Zm9saW86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLXBvcnRmb2xpbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsIC5zaG93ID4gLmJ0bi1wb3J0Zm9saW8uZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICRwb3J0Zm9saW9fc2hhZG93O1xufVxuXG4uYnRuLW91dGxpbmUtcG9ydGZvbGlvIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6ICRwb3J0Zm9saW9fdDE7XG59XG5cbi5idG4tb3V0bGluZS1wb3J0Zm9saW86aG92ZXIge1xuICBjb2xvcjogJHBvcnRmb2xpb190ZXh0X2NvbG9yX2RhcmtfYnJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3QxO1xuICBib3JkZXItY29sb3I6ICRwb3J0Zm9saW9fdDE7XG59XG5cbi5idG4tb3V0bGluZS1wb3J0Zm9saW86Zm9jdXMsIC5idG4tb3V0bGluZS1wb3J0Zm9saW8uZm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gJHBvcnRmb2xpb19zaGFkb3c7XG59XG5cbi5idG4tb3V0bGluZS1wb3J0Zm9saW8uZGlzYWJsZWQsIC5idG4tb3V0bGluZS1wb3J0Zm9saW86ZGlzYWJsZWQge1xuICBjb2xvcjogJHBvcnRmb2xpb190MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5idG4tb3V0bGluZS1wb3J0Zm9saW86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLW91dGxpbmUtcG9ydGZvbGlvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSwgLnNob3cgPiAuYnRuLW91dGxpbmUtcG9ydGZvbGlvLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3RleHRfY29sb3JfZGFya19icmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDE7XG4gIGJvcmRlci1jb2xvcjogJHBvcnRmb2xpb190MTtcbn1cblxuLmJ0bi1vdXRsaW5lLXBvcnRmb2xpbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tb3V0bGluZS1wb3J0Zm9saW86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLCAuc2hvdyA+IC5idG4tb3V0bGluZS1wb3J0Zm9saW8uZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICRwb3J0Zm9saW9fc2hhZG93O1xufVxuXG4ubGlzdC1ncm91cC1pdGVtLXBvcnRmb2xpbyB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3Q1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3Q0O1xufVxuXG4ubGlzdC1ncm91cC1pdGVtLXBvcnRmb2xpby5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uOmhvdmVyLCAubGlzdC1ncm91cC1pdGVtLXBvcnRmb2xpby5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uOmZvY3VzIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdDU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDM7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0tcG9ydGZvbGlvLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24uYWN0aXZlIHtcbiAgY29sb3I6ICRwb3J0Zm9saW9fdGV4dF9jb2xvcl9kYXJrX2JyaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190NTtcbiAgYm9yZGVyLWNvbG9yOiAkcG9ydGZvbGlvX3Q1O1xufVxuXG4udGFibGUtcG9ydGZvbGlvLFxuLnRhYmxlLXBvcnRmb2xpbyA+IHRoLFxuLnRhYmxlLXBvcnRmb2xpbyA+IHRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBvcnRmb2xpb190NDtcbn1cblxuLnRhYmxlLWhvdmVyIC50YWJsZS1wb3J0Zm9saW86aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcG9ydGZvbGlvX3QzO1xufVxuXG4udGFibGUtaG92ZXIgLnRhYmxlLXBvcnRmb2xpbzpob3ZlciA+IHRkLFxuLnRhYmxlLWhvdmVyIC50YWJsZS1wb3J0Zm9saW86aG92ZXIgPiB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwb3J0Zm9saW9fdDM7XG59XG5cbi50ZXh0LXBvcnRmb2xpbyB7XG4gIGNvbG9yOiAkcG9ydGZvbGlvX3QxICFpbXBvcnRhbnQ7XG59XG5cbmEudGV4dC1wb3J0Zm9saW86aG92ZXIsIGEudGV4dC1wb3J0Zm9saW86Zm9jdXMge1xuICBjb2xvcjogJHBvcnRmb2xpb190MiAhaW1wb3J0YW50O1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xuXG4uZGl2aWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFuY28gIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibGFuY287XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogJGNvbG9yLXByaW1hcmlvO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3VidGl0dWxvIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICRjb2xvci1sZXRyYTtcbn1cblxuLmltZy1iYW5uZXIge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbiAgICBcbmlmcmFtZSB7XG4gICAgYm9yZGVyOiAwcHg7XG59XG5cbnByZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiAkY29sb3ItbGV0cmE7XG4gIGJhY2tncm91bmQ6ICRjb2xvci1ibGFuY287XG59XG5cbmJvZHkgLmdpc3QgLmxpbmUtZGF0YSwgYm9keSAuZ2lzdCAuZmlsZS1kYXRhLCBib2R5IC5naXN0IC5saW5lLW51bWJlcnMge1xuICBjb2xvcjogJGNvbG9yLWxldHJhO1xuICBiYWNrZ3JvdW5kOiAkY29sb3ItYmxhbmNvO1xufVxuXG5ib2R5IC5naXN0IC5naXN0LW1ldGEge1xuICBjb2xvcjogJGNvbG9yLWxldHJhO1xuICBiYWNrZ3JvdW5kOiAkY29sb3ItYmxhbmNvO1xufVxuXG5ib2R5IC5naXN0IC5wbC12bywgYm9keSAuZ2lzdCAucGwtdiwgYm9keSAuZ2lzdCAucGwtdnBmIHtcbiAgY29sb3I6ICRjb2xvci1sZXRyYTtcbn1cblxuYm9keSAuZ2lzdCAucGwtZW4sIGJvZHkgLmdpc3QgLnBsLWMxLCBib2R5IC5naXN0IC5wbC1zMyB7XG4gIGNvbG9yOiAjRUNBQzI5O1xufVxuXG5ib2R5IC5naXN0IC5wbC1rLCBib2R5IC5naXN0IC5wbC1zdCB7XG4gIGNvbG9yOiAjNzM3M0YyO1xufVxuXG5ib2R5IC5naXN0IC5wbC1zMSwgYm9keSAuZ2lzdCAucGwtcGRzIHtcbiAgY29sb3I6ICM3NkEyMkY7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlantillaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-plantilla',
                templateUrl: './plantilla.component.html',
                styleUrls: ['./plantilla.component.scss']
            }]
    }], function () { return []; }, { iframe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['iframe']
        }], gistId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], file: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=feature-post-post-module-es2015.js.map