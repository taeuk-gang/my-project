/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _components_Login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Main =
/*#__PURE__*/
function () {
  function Main() {
    _classCallCheck(this, Main);
  }

  _createClass(Main, null, [{
    key: "init",
    value: function init() {
      this.loadingDOM(); // PJAX 방식
      // this._onPopstate()
      // this._onClickAnchor()
      // this.router(`/`)

      this.router().isRoute().otherwise().pushUrl();
    }
  }, {
    key: "_onPopstate",
    value: function _onPopstate() {
      var _this = this;

      window.addEventListener("popstate", function (event) {
        console.info("[popstate]", event.state);

        _this.router(event.state.path);
      });
    }
  }, {
    key: "_onClickAnchor",
    value: function _onClickAnchor() {
      var _this2 = this;

      document.addEventListener("click", function (event) {
        if (!event.target || event.target.nodeName !== "A") {
          return;
        }

        event.preventDefault();
        var path = event.target.getAttribute("href");
        history.pushState({
          path: path
        }, null, path);

        _this2.router(path);
      });
    } // PJAX 방식
    // static get routes() {
    // 	return {
    // 		'/': function () {
    // 			Main.renderPage(`app-main`, `/`)
    // 		},
    // 		'/login': function () {
    // 			Main.renderPage(`login-main`, `/login`)
    // 		},
    // 		otherwise() {
    // 			Main.exceptDOM()
    // 		},
    // 	}
    // }
    // static router(path) {
    // 	(this.routes[path] || this.routes.otherwise)(path)
    // }

  }, {
    key: "router",
    value: function router() {
      var path = location.pathname;
      var isContinue = true;

      if (path === "/") {
        path = "/app";
      }

      return {
        isRoute: function isRoute() {
          if (isContinue) {
            Main.renderPage("".concat(path.split("/")[1], "-main"), path);
            isContinue = false;
          }

          return this;
        },
        otherwise: function otherwise() {
          if (isContinue) {
            Main._onLoad(function () {
              return history.replaceState({}, null, "login");
            });

            Main.renderPage("login-main", path);
            isContinue = false;
          }

          return this;
        },
        pushUrl: function pushUrl() {
          if (isContinue) {
            Main._onLoad(function () {
              return history.pushState({}, null, path);
            });
          }
        }
      };
    }
  }, {
    key: "_onLoad",
    value: function _onLoad(callback) {
      window.addEventListener("load", function () {
        callback();
      });
    }
  }, {
    key: "loadingDOM",
    value: function loadingDOM() {
      var root = document.querySelector("main");
      var loading = document.createElement("div");
      var FIVE = 5;
      this.emptyDOM();
      loading.classList.add("loading");

      for (var i = 0; i < FIVE; i++) {
        loading.appendChild(document.createElement("span"));
      }

      root.appendChild(loading);
    }
  }, {
    key: "renderPage",
    value: function renderPage(pageName, path) {
      this.emptyDOM();
      var pageElement = document.createElement(pageName);
      document.querySelector("main").appendChild(pageElement);
      history.pushState({}, pageName, path);
    }
  }, {
    key: "emptyDOM",
    value: function emptyDOM() {
      document.querySelector("main").innerHTML = "";
    }
  }, {
    key: "exceptDOM",
    value: function exceptDOM() {
      document.querySelector("main").innerHTML = "No Route";
    }
  }]);

  return Main;
}();


Main.init();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _libs_litRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _libs_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n<style>\n.hero-full-screen {\n  width: 100vw;\n  height: 100vh;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background: url(\"https://images.pexels.com/photos/378273/pexels-photo-378273.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb\") center center no-repeat;\n  background-size: cover;\n}\n\n.hero-full-screen .middle-content-section {\n  text-align: center;\n  color: #fefefe;\n}\n\n.hero-full-screen .top-content-section {\n  width: 100%;\n}\n\n.hero-full-screen .bottom-content-section {\n  padding: 1rem;\n}\n\n.hero-full-screen .bottom-content-section svg {\n  height: 3.75rem;\n  width: 3.75rem;\n  fill: #fefefe;\n}\n\n.hero-full-screen .top-bar {\n  background: transparent;\n}\n\n.hero-full-screen .top-bar .menu {\n  background: transparent;\n}\n\n.hero-full-screen .top-bar .menu-text {\n  color: #fefefe;\n}\n\n.hero-full-screen .top-bar .menu li {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.hero-full-screen .top-bar .menu a {\n  color: #fefefe;\n  font-weight: bold;\n}\n</style>\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral([" \n    <link rel=\"stylesheet\" type=\"text/css\" href=\"/src/css/foundation.min.css\">\n\t\t", "\n\t\t<div class=\"page-main\">\n\t\t\t<div class=\"hero-full-screen\">\n\t\t\t\t<div class=\"top-content-section\">\n\t\t\t\t\t<div class=\"top-bar\">\n\t\t\t\t\t\t<div class=\"top-bar-left\">\n\t\t\t\t\t\t\t<ul class=\"menu\">\n\t\t\t\t\t\t\t\t<li class=\"menu-text\"><img src=\"http://placehold.it/75x30\" alt=\"logo\"></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Menu</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"middle-content-section\">\n\t\t\t\t\t<h1>Main Page</h1>\n\t\t\t\t\t<button class=\"button large logout\">Logout</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"bottom-content-section\" data-magellan data-threshold=\"0\">\n\t\t\t\t\t<a href=\"#main-content-section\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z\"/></svg></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id=\"main-content-section\" data-magellan-target=\"main-content-section\"></div>\n\t\t</div>\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var AppMain =
/*#__PURE__*/
function (_LitRender) {
  _inherits(AppMain, _LitRender);

  function AppMain() {
    var _this;

    _classCallCheck(this, AppMain);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppMain).call(this));
    _this._handlers = {};

    _this.attachShadow({
      mode: "open"
    });

    _this.invalidate();

    return _this;
  }

  _createClass(AppMain, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var root = this.shadowRoot;
      var handlers = this._handlers;
      handlers.onClick = this._onClick.bind(this);
      root.addEventListener("click", handlers.onClick);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var root = this.shadowRoot;
      root.removeEventListener("click", this._handlers.onClick);
    }
  }, {
    key: "_onClick",
    value: function _onClick(event) {
      var loginBtn = event.target.classList.contains("logout");

      if (loginBtn) {
        Object(_libs_actions__WEBPACK_IMPORTED_MODULE_2__["movePage"])("login");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), style);
    }
  }]);

  return AppMain;
}(Object(_libs_litRender__WEBPACK_IMPORTED_MODULE_1__["default"])(HTMLElement));

var style = Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
customElements.define("app-main", AppMain);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["DefaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]; });

/* harmony import */ var _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["removeNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["reparentNodes"]; });

/* harmony import */ var _lib_part_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["nothing"]; });

/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributeCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["BooleanAttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["EventPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isIterable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["NodePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyPart"]; });

/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["parts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["render"]; });

/* harmony import */ var _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateFactory"]; });

/* harmony import */ var _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__["TemplateInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"]; });

/* harmony import */ var _lib_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["createMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["isTemplatePartActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["Template"]; });

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @module lit-html
 * @preferred
 */

/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */



 // TODO(justinfagnani): remove line when we get NodePart moving methods








 // IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time

(window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.0.0');
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */

var html = function html(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"](strings, values, 'html', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
};
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */

var svg = function svg(strings) {
  for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    values[_key2 - 1] = arguments[_key2];
  }

  return new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"](strings, values, 'svg', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return DefaultTemplateProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return defaultTemplateProcessor; });
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */

var DefaultTemplateProcessor =
/*#__PURE__*/
function () {
  function DefaultTemplateProcessor() {
    _classCallCheck(this, DefaultTemplateProcessor);
  }

  _createClass(DefaultTemplateProcessor, [{
    key: "handleAttributeExpressions",

    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    value: function handleAttributeExpressions(element, name, strings, options) {
      var prefix = name[0];

      if (prefix === '.') {
        var _committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["PropertyCommitter"](element, name.slice(1), strings);

        return _committer.parts;
      }

      if (prefix === '@') {
        return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["EventPart"](element, name.slice(1), options.eventContext)];
      }

      if (prefix === '?') {
        return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["BooleanAttributePart"](element, name.slice(1), strings)];
      }

      var committer = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["AttributeCommitter"](element, name, strings);
      return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */

  }, {
    key: "handleTextExpression",
    value: function handleTextExpression(options) {
      return new _parts_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](options);
    }
  }]);

  return DefaultTemplateProcessor;
}();
var defaultTemplateProcessor = new DefaultTemplateProcessor();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return AttributeCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return AttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return NodePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return BooleanAttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return PropertyCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return PropertyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return EventPart; });
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _part_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */






var isPrimitive = function isPrimitive(value) {
  return value === null || !(_typeof(value) === 'object' || typeof value === 'function');
};
var isIterable = function isIterable(value) {
  return Array.isArray(value) || // tslint:disable-next-line:no-any
  !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attibute. The value is only set once even if there are multiple parts
 * for an attribute.
 */

var AttributeCommitter =
/*#__PURE__*/
function () {
  function AttributeCommitter(element, name, strings) {
    _classCallCheck(this, AttributeCommitter);

    this.dirty = true;
    this.element = element;
    this.name = name;
    this.strings = strings;
    this.parts = [];

    for (var i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */


  _createClass(AttributeCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new AttributePart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      var strings = this.strings;
      var l = strings.length - 1;
      var text = '';

      for (var i = 0; i < l; i++) {
        text += strings[i];
        var part = this.parts[i];

        if (part !== undefined) {
          var v = part.value;

          if (isPrimitive(v) || !isIterable(v)) {
            text += typeof v === 'string' ? v : String(v);
          } else {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = v[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var t = _step.value;
                text += typeof t === 'string' ? t : String(t);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
        }
      }

      text += strings[l];
      return text;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false;
        this.element.setAttribute(this.name, this._getValue());
      }
    }
  }]);

  return AttributeCommitter;
}();
/**
 * A Part that controls all or part of an attribute value.
 */

var AttributePart =
/*#__PURE__*/
function () {
  function AttributePart(committer) {
    _classCallCheck(this, AttributePart);

    this.value = undefined;
    this.committer = committer;
  }

  _createClass(AttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      if (value !== _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"] && (!isPrimitive(value) || value !== this.value)) {
        this.value = value; // If the value is a not a directive, dirty the committer so that it'll
        // call setAttribute. If the value is a directive, it'll dirty the
        // committer if it calls setValue().

        if (!Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(value)) {
          this.committer.dirty = true;
        }
      }
    }
  }, {
    key: "commit",
    value: function commit() {
      while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.value)) {
        var directive = this.value;
        this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
        directive(this);
      }

      if (this.value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
        return;
      }

      this.committer.commit();
    }
  }]);

  return AttributePart;
}();
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */

var NodePart =
/*#__PURE__*/
function () {
  function NodePart(options) {
    _classCallCheck(this, NodePart);

    this.value = undefined;
    this.__pendingValue = undefined;
    this.options = options;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  _createClass(NodePart, [{
    key: "appendInto",
    value: function appendInto(container) {
      this.startNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
      this.endNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "insertAfterNode",
    value: function insertAfterNode(ref) {
      this.startNode = ref;
      this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "appendIntoPart",
    value: function appendIntoPart(part) {
      part.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());

      part.__insert(this.endNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "insertAfterPart",
    value: function insertAfterPart(ref) {
      ref.__insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());

      this.endNode = ref.endNode;
      ref.endNode = this.startNode;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
        var directive = this.__pendingValue;
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
        directive(this);
      }

      var value = this.__pendingValue;

      if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
        return;
      }

      if (isPrimitive(value)) {
        if (value !== this.value) {
          this.__commitText(value);
        }
      } else if (value instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_4__["TemplateResult"]) {
        this.__commitTemplateResult(value);
      } else if (value instanceof Node) {
        this.__commitNode(value);
      } else if (isIterable(value)) {
        this.__commitIterable(value);
      } else if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"]) {
        this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"];
        this.clear();
      } else {
        // Fallback, will render the string representation
        this.__commitText(value);
      }
    }
  }, {
    key: "__insert",
    value: function __insert(node) {
      this.endNode.parentNode.insertBefore(node, this.endNode);
    }
  }, {
    key: "__commitNode",
    value: function __commitNode(value) {
      if (this.value === value) {
        return;
      }

      this.clear();

      this.__insert(value);

      this.value = value;
    }
  }, {
    key: "__commitText",
    value: function __commitText(value) {
      var node = this.startNode.nextSibling;
      value = value == null ? '' : value;

      if (node === this.endNode.previousSibling && node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
          // If we only have a single text node between the markers, we can just
          // set its value, rather than replacing it.
          // TODO(justinfagnani): Can we just check if this.value is primitive?
          node.data = value;
        } else {
        this.__commitNode(document.createTextNode(typeof value === 'string' ? value : String(value)));
      }

      this.value = value;
    }
  }, {
    key: "__commitTemplateResult",
    value: function __commitTemplateResult(value) {
      var template = this.options.templateFactory(value);

      if (this.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"] && this.value.template === template) {
        this.value.update(value.values);
      } else {
        // Make sure we propagate the template processor from the TemplateResult
        // so that we use its syntax extension, etc. The template factory comes
        // from the render function options so that it can control template
        // caching and preprocessing.
        var instance = new _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"](template, value.processor, this.options);

        var fragment = instance._clone();

        instance.update(value.values);

        this.__commitNode(fragment);

        this.value = instance;
      }
    }
  }, {
    key: "__commitIterable",
    value: function __commitIterable(value) {
      // For an Iterable, we create a new InstancePart per item, then set its
      // value to the item. This is a little bit of overhead for every item in
      // an Iterable, but it lets us recurse easily and efficiently update Arrays
      // of TemplateResults that will be commonly returned from expressions like:
      // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
      // If _value is an array, then the previous render was of an
      // iterable and _value will contain the NodeParts from the previous
      // render. If _value is not an array, clear this part and make a new
      // array for NodeParts.
      if (!Array.isArray(this.value)) {
        this.value = [];
        this.clear();
      } // Lets us keep track of how many items we stamped so we can clear leftover
      // items from a previous render


      var itemParts = this.value;
      var partIndex = 0;
      var itemPart;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;
          // Try to reuse an existing part
          itemPart = itemParts[partIndex]; // If no existing part, create a new one

          if (itemPart === undefined) {
            itemPart = new NodePart(this.options);
            itemParts.push(itemPart);

            if (partIndex === 0) {
              itemPart.appendIntoPart(this);
            } else {
              itemPart.insertAfterPart(itemParts[partIndex - 1]);
            }
          }

          itemPart.setValue(item);
          itemPart.commit();
          partIndex++;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (partIndex < itemParts.length) {
        // Truncate the parts array so _value reflects the current state
        itemParts.length = partIndex;
        this.clear(itemPart && itemPart.endNode);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
      Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["removeNodes"])(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
  }]);

  return NodePart;
}();
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */

var BooleanAttributePart =
/*#__PURE__*/
function () {
  function BooleanAttributePart(element, name, strings) {
    _classCallCheck(this, BooleanAttributePart);

    this.value = undefined;
    this.__pendingValue = undefined;

    if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
      throw new Error('Boolean attributes can only contain a single expression');
    }

    this.element = element;
    this.name = name;
    this.strings = strings;
  }

  _createClass(BooleanAttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
        var directive = this.__pendingValue;
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
        directive(this);
      }

      if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
        return;
      }

      var value = !!this.__pendingValue;

      if (this.value !== value) {
        if (value) {
          this.element.setAttribute(this.name, '');
        } else {
          this.element.removeAttribute(this.name);
        }

        this.value = value;
      }

      this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
  }]);

  return BooleanAttributePart;
}();
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */

var PropertyCommitter =
/*#__PURE__*/
function (_AttributeCommitter) {
  _inherits(PropertyCommitter, _AttributeCommitter);

  function PropertyCommitter(element, name, strings) {
    var _this;

    _classCallCheck(this, PropertyCommitter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PropertyCommitter).call(this, element, name, strings));
    _this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
    return _this;
  }

  _createClass(PropertyCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new PropertyPart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      if (this.single) {
        return this.parts[0].value;
      }

      return _get(_getPrototypeOf(PropertyCommitter.prototype), "_getValue", this).call(this);
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false; // tslint:disable-next-line:no-any

        this.element[this.name] = this._getValue();
      }
    }
  }]);

  return PropertyCommitter;
}(AttributeCommitter);
var PropertyPart =
/*#__PURE__*/
function (_AttributePart) {
  _inherits(PropertyPart, _AttributePart);

  function PropertyPart() {
    _classCallCheck(this, PropertyPart);

    return _possibleConstructorReturn(this, _getPrototypeOf(PropertyPart).apply(this, arguments));
  }

  return PropertyPart;
}(AttributePart); // Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.

var eventOptionsSupported = false;

try {
  var options = {
    get capture() {
      eventOptionsSupported = true;
      return false;
    }

  }; // tslint:disable-next-line:no-any

  window.addEventListener('test', options, options); // tslint:disable-next-line:no-any

  window.removeEventListener('test', options, options);
} catch (_e) {}

var EventPart =
/*#__PURE__*/
function () {
  function EventPart(element, eventName, eventContext) {
    var _this2 = this;

    _classCallCheck(this, EventPart);

    this.value = undefined;
    this.__pendingValue = undefined;
    this.element = element;
    this.eventName = eventName;
    this.eventContext = eventContext;

    this.__boundHandleEvent = function (e) {
      return _this2.handleEvent(e);
    };
  }

  _createClass(EventPart, [{
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.__pendingValue)) {
        var directive = this.__pendingValue;
        this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
        directive(this);
      }

      if (this.__pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
        return;
      }

      var newListener = this.__pendingValue;
      var oldListener = this.value;
      var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
      var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

      if (shouldRemoveListener) {
        this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }

      if (shouldAddListener) {
        this.__options = getOptions(newListener);
        this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }

      this.value = newListener;
      this.__pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (typeof this.value === 'function') {
        this.value.call(this.eventContext || this.element, event);
      } else {
        this.value.handleEvent(event);
      }
    }
  }]);

  return EventPart;
}(); // We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.

var getOptions = function getOptions(o) {
  return o && (eventOptionsSupported ? {
    capture: o.capture,
    passive: o.passive,
    once: o.once
  } : o.capture);
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */

var directive = function directive(f) {
  return function () {
    var d = f.apply(void 0, arguments);
    directives.set(d, true);
    return d;
  };
};
var isDirective = function isDirective(o) {
  return typeof o === 'function' && directives.has(o);
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCEPolyfill", function() { return isCEPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return reparentNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return removeNodes; });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * True if the custom elements polyfill is in use.
 */
var isCEPolyfill = window.customElements !== undefined && window.customElements.polyfillWrapFlushCallback !== undefined;
/**
 * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
 * into another container (could be the same container), before `before`. If
 * `before` is null, it appends the nodes to the container.
 */

var reparentNodes = function reparentNodes(container, start) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  while (start !== end) {
    var n = start.nextSibling;
    container.insertBefore(start, before);
    start = n;
  }
};
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */

var removeNodes = function removeNodes(container, start) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  while (start !== end) {
    var n = start.nextSibling;
    container.removeChild(start);
    start = n;
  }
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return nothing; });
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
var noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */

var nothing = {};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return TemplateInstance; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */


/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */

var TemplateInstance =
/*#__PURE__*/
function () {
  function TemplateInstance(template, processor, options) {
    _classCallCheck(this, TemplateInstance);

    this.__parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }

  _createClass(TemplateInstance, [{
    key: "update",
    value: function update(values) {
      var i = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.__parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var part = _step.value;

          if (part !== undefined) {
            part.setValue(values[i]);
          }

          i++;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.__parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _part = _step2.value;

          if (_part !== undefined) {
            _part.commit();
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "_clone",
    value: function _clone() {
      // There are a number of steps in the lifecycle of a template instance's
      // DOM fragment:
      //  1. Clone - create the instance fragment
      //  2. Adopt - adopt into the main document
      //  3. Process - find part markers and create parts
      //  4. Upgrade - upgrade custom elements
      //  5. Update - set node, attribute, property, etc., values
      //  6. Connect - connect to the document. Optional and outside of this
      //     method.
      //
      // We have a few constraints on the ordering of these steps:
      //  * We need to upgrade before updating, so that property values will pass
      //    through any property setters.
      //  * We would like to process before upgrading so that we're sure that the
      //    cloned fragment is inert and not disturbed by self-modifying DOM.
      //  * We want custom elements to upgrade even in disconnected fragments.
      //
      // Given these constraints, with full custom elements support we would
      // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
      //
      // But Safari dooes not implement CustomElementRegistry#upgrade, so we
      // can not implement that order and still have upgrade-before-update and
      // upgrade disconnected fragments. So we instead sacrifice the
      // process-before-upgrade constraint, since in Custom Elements v1 elements
      // must not modify their light DOM in the constructor. We still have issues
      // when co-existing with CEv0 elements like Polymer 1, and with polyfills
      // that don't strictly adhere to the no-modification rule because shadow
      // DOM, which may be created in the constructor, is emulated by being placed
      // in the light DOM.
      //
      // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
      // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
      // in one step.
      //
      // The Custom Elements v1 polyfill supports upgrade(), so the order when
      // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
      // Connect.
      var fragment = _dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"] ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
      var stack = [];
      var parts = this.template.parts; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

      var walker = document.createTreeWalker(fragment, 133
      /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
      , null, false);
      var partIndex = 0;
      var nodeIndex = 0;
      var part;
      var node = walker.nextNode(); // Loop through all the nodes and parts of a template

      while (partIndex < parts.length) {
        part = parts[partIndex];

        if (!Object(_template_js__WEBPACK_IMPORTED_MODULE_1__["isTemplatePartActive"])(part)) {
          this.__parts.push(undefined);

          partIndex++;
          continue;
        } // Progress the tree walker until we find our next part's node.
        // Note that multiple parts may share the same node (attribute parts
        // on a single element), so this loop may not run at all.


        while (nodeIndex < part.index) {
          nodeIndex++;

          if (node.nodeName === 'TEMPLATE') {
            stack.push(node);
            walker.currentNode = node.content;
          }

          if ((node = walker.nextNode()) === null) {
            // We've exhausted the content inside a nested template element.
            // Because we still have parts (the outer for-loop), we know:
            // - There is a template in the stack
            // - The walker will find a nextNode outside the template
            walker.currentNode = stack.pop();
            node = walker.nextNode();
          }
        } // We've arrived at our part's node.


        if (part.type === 'node') {
          var _part2 = this.processor.handleTextExpression(this.options);

          _part2.insertAfterNode(node.previousSibling);

          this.__parts.push(_part2);
        } else {
          var _this$__parts;

          (_this$__parts = this.__parts).push.apply(_this$__parts, _toConsumableArray(this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options)));
        }

        partIndex++;
      }

      if (_dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"]) {
        document.adoptNode(fragment);
        customElements.upgrade(fragment);
      }

      return fragment;
    }
  }]);

  return TemplateInstance;
}();

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marker", function() { return marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeMarker", function() { return nodeMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markerRegex", function() { return markerRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAttributeSuffix", function() { return boundAttributeSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return isTemplatePartActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return createMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastAttributeNameRegex", function() { return lastAttributeNameRegex; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */

var nodeMarker = "<!--".concat(marker, "-->");
var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
/**
 * Suffix appended to all bound attribute names.
 */

var boundAttributeSuffix = '$lit$';
/**
 * An updateable Template that tracks the location of dynamic parts.
 */

var Template = function Template(result, element) {
  _classCallCheck(this, Template);

  this.parts = [];
  this.element = element;
  var nodesToRemove = [];
  var stack = []; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

  var walker = document.createTreeWalker(element.content, 133
  /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
  , null, false); // Keeps track of the last index associated with a part. We try to delete
  // unnecessary nodes, but we never want to associate two different parts
  // to the same index. They must have a constant node between.

  var lastPartIndex = 0;
  var index = -1;
  var partIndex = 0;
  var strings = result.strings,
      length = result.values.length;

  while (partIndex < length) {
    var node = walker.nextNode();

    if (node === null) {
      // We've exhausted the content inside a nested template element.
      // Because we still have parts (the outer for-loop), we know:
      // - There is a template in the stack
      // - The walker will find a nextNode outside the template
      walker.currentNode = stack.pop();
      continue;
    }

    index++;

    if (node.nodeType === 1
    /* Node.ELEMENT_NODE */
    ) {
        if (node.hasAttributes()) {
          var attributes = node.attributes;
          var _length = attributes.length; // Per
          // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
          // attributes are not guaranteed to be returned in document order.
          // In particular, Edge/IE can return them out of order, so we cannot
          // assume a correspondence between part index and attribute index.

          var count = 0;

          for (var i = 0; i < _length; i++) {
            if (endsWith(attributes[i].name, boundAttributeSuffix)) {
              count++;
            }
          }

          while (count-- > 0) {
            // Get the template literal section leading up to the first
            // expression in this attribute
            var stringForPart = strings[partIndex]; // Find the attribute name

            var name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
            // All bound attributes have had a suffix added in
            // TemplateResult#getHTML to opt out of special attribute
            // handling. To look up the attribute value we also need to add
            // the suffix.

            var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
            var attributeValue = node.getAttribute(attributeLookupName);
            node.removeAttribute(attributeLookupName);
            var statics = attributeValue.split(markerRegex);
            this.parts.push({
              type: 'attribute',
              index: index,
              name: name,
              strings: statics
            });
            partIndex += statics.length - 1;
          }
        }

        if (node.tagName === 'TEMPLATE') {
          stack.push(node);
          walker.currentNode = node.content;
        }
      } else if (node.nodeType === 3
    /* Node.TEXT_NODE */
    ) {
        var data = node.data;

        if (data.indexOf(marker) >= 0) {
          var parent = node.parentNode;

          var _strings = data.split(markerRegex);

          var lastIndex = _strings.length - 1; // Generate a new text node for each literal section
          // These nodes are also used as the markers for node parts

          for (var _i = 0; _i < lastIndex; _i++) {
            var insert = void 0;
            var s = _strings[_i];

            if (s === '') {
              insert = createMarker();
            } else {
              var match = lastAttributeNameRegex.exec(s);

              if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
              }

              insert = document.createTextNode(s);
            }

            parent.insertBefore(insert, node);
            this.parts.push({
              type: 'node',
              index: ++index
            });
          } // If there's no text, we must insert a comment to mark our place.
          // Else, we can trust it will stick around after cloning.


          if (_strings[lastIndex] === '') {
            parent.insertBefore(createMarker(), node);
            nodesToRemove.push(node);
          } else {
            node.data = _strings[lastIndex];
          } // We have a part for each match found


          partIndex += lastIndex;
        }
      } else if (node.nodeType === 8
    /* Node.COMMENT_NODE */
    ) {
        if (node.data === marker) {
          var _parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
          // the following are true:
          //  * We don't have a previousSibling
          //  * The previousSibling is already the start of a previous part

          if (node.previousSibling === null || index === lastPartIndex) {
            index++;

            _parent.insertBefore(createMarker(), node);
          }

          lastPartIndex = index;
          this.parts.push({
            type: 'node',
            index: index
          }); // If we don't have a nextSibling, keep this node so we have an end.
          // Else, we can remove it to save future costs.

          if (node.nextSibling === null) {
            node.data = '';
          } else {
            nodesToRemove.push(node);
            index--;
          }

          partIndex++;
        } else {
          var _i2 = -1;

          while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
            // Comment node has a binding marker inside, make an inactive part
            // The binding won't work, but subsequent bindings will
            // TODO (justinfagnani): consider whether it's even worth it to
            // make bindings in comments work
            this.parts.push({
              type: 'node',
              index: -1
            });
            partIndex++;
          }
        }
      }
  } // Remove text binding nodes after the walk to not disturb the TreeWalker


  for (var _i3 = 0, _nodesToRemove = nodesToRemove; _i3 < _nodesToRemove.length; _i3++) {
    var n = _nodesToRemove[_i3];
    n.parentNode.removeChild(n);
  }
};

var endsWith = function endsWith(str, suffix) {
  var index = str.length - suffix.length;
  return index >= 0 && str.slice(index) === suffix;
};

var isTemplatePartActive = function isTemplatePartActive(part) {
  return part.index !== -1;
}; // Allows `document.createComment('')` to be renamed for a
// small manual size-savings.

var createMarker = function createMarker() {
  return document.createComment('');
};
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */

var lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return TemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return SVGTemplateResult; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */


/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */

var TemplateResult =
/*#__PURE__*/
function () {
  function TemplateResult(strings, values, type, processor) {
    _classCallCheck(this, TemplateResult);

    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */


  _createClass(TemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      var l = this.strings.length - 1;
      var html = '';
      var isCommentBinding = false;

      for (var i = 0; i < l; i++) {
        var s = this.strings[i]; // For each binding we want to determine the kind of marker to insert
        // into the template source before it's parsed by the browser's HTML
        // parser. The marker type is based on whether the expression is in an
        // attribute, text, or comment poisition.
        //   * For node-position bindings we insert a comment with the marker
        //     sentinel as its text content, like <!--{{lit-guid}}-->.
        //   * For attribute bindings we insert just the marker sentinel for the
        //     first binding, so that we support unquoted attribute bindings.
        //     Subsequent bindings can use a comment marker because multi-binding
        //     attributes must be quoted.
        //   * For comment bindings we insert just the marker sentinel so we don't
        //     close the comment.
        //
        // The following code scans the template source, but is *not* an HTML
        // parser. We don't need to track the tree structure of the HTML, only
        // whether a binding is inside a comment, and if not, if it appears to be
        // the first binding in an attribute.

        var commentOpen = s.lastIndexOf('<!--'); // We're in comment position if we have a comment open with no following
        // comment close. Because <-- can appear in an attribute value there can
        // be false positives.

        isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf('-->', commentOpen + 1) === -1; // Check to see if we have an attribute-like sequence preceeding the
        // expression. This can match "name=value" like structures in text,
        // comments, and attribute values, so there can be false-positives.

        var attributeMatch = _template_js__WEBPACK_IMPORTED_MODULE_1__["lastAttributeNameRegex"].exec(s);

        if (attributeMatch === null) {
          // We're only in this branch if we don't have a attribute-like
          // preceeding sequence. For comments, this guards against unusual
          // attribute values like <div foo="<!--${'bar'}">. Cases like
          // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
          // below.
          html += s + (isCommentBinding ? _template_js__WEBPACK_IMPORTED_MODULE_1__["marker"] : _template_js__WEBPACK_IMPORTED_MODULE_1__["nodeMarker"]);
        } else {
          // For attributes we use just a marker sentinel, and also append a
          // $lit$ suffix to the name to opt-out of attribute-specific parsing
          // that IE and Edge do for style and certain SVG attributes.
          html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + _template_js__WEBPACK_IMPORTED_MODULE_1__["boundAttributeSuffix"] + attributeMatch[3] + _template_js__WEBPACK_IMPORTED_MODULE_1__["marker"];
        }
      }

      html += this.strings[l];
      return html;
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = document.createElement('template');
      template.innerHTML = this.getHTML();
      return template;
    }
  }]);

  return TemplateResult;
}();
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */

var SVGTemplateResult =
/*#__PURE__*/
function (_TemplateResult) {
  _inherits(SVGTemplateResult, _TemplateResult);

  function SVGTemplateResult() {
    _classCallCheck(this, SVGTemplateResult);

    return _possibleConstructorReturn(this, _getPrototypeOf(SVGTemplateResult).apply(this, arguments));
  }

  _createClass(SVGTemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      return "<svg>".concat(_get(_getPrototypeOf(SVGTemplateResult.prototype), "getHTML", this).call(this), "</svg>");
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = _get(_getPrototypeOf(SVGTemplateResult.prototype), "getTemplateElement", this).call(this);

      var content = template.content;
      var svgElement = content.firstChild;
      content.removeChild(svgElement);
      Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(content, svgElement.firstChild);
      return template;
    }
  }]);

  return SVGTemplateResult;
}(TemplateResult);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return parts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */



var parts = new WeakMap();
/**
 * Renders a template to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result a TemplateResult created by evaluating a template tag like
 *     `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */

var render = function render(result, container, options) {
  var part = parts.get(container);

  if (part === undefined) {
    Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
    parts.set(container, part = new _parts_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"](Object.assign({
      templateFactory: _template_factory_js__WEBPACK_IMPORTED_MODULE_2__["templateFactory"]
    }, options)));
    part.appendInto(container);
  }

  part.setValue(result);
  part.commit();
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return templateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return templateCaches; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */

function templateFactory(result) {
  var templateCache = templateCaches.get(result.type);

  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(result.type, templateCache);
  }

  var template = templateCache.stringsArray.get(result.strings);

  if (template !== undefined) {
    return template;
  } // If the TemplateStringsArray is new, generate a key from the strings
  // This key is shared between all templates with identical content


  var key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_0__["marker"]); // Check if we already have a Template for this key

  template = templateCache.keyString.get(key);

  if (template === undefined) {
    // If we have not seen this key before, create a new Template
    template = new _template_js__WEBPACK_IMPORTED_MODULE_0__["Template"](result, result.getTemplateElement()); // Cache the Template for this key

    templateCache.keyString.set(key, template);
  } // Cache all future queries for this TemplateStringsArray


  templateCache.stringsArray.set(result.strings, template);
  return template;
}
var templateCaches = new Map();

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/* harmony default export */ __webpack_exports__["default"] = (function (base) {
  return (
    /*#__PURE__*/
    function (_base) {
      _inherits(_class, _base);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "render",
        value: function render() {}
      }, {
        key: "invalidate",
        value: function () {
          var _invalidate = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(instant) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.needsRender) {
                      _context.next = 7;
                      break;
                    }

                    if (instant) {
                      _context.next = 6;
                      break;
                    }

                    this.needsRender = true;
                    _context.next = 5;
                    return 0;

                  case 5:
                    this.needsRender = false;

                  case 6:
                    Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this.render(), this.shadowRoot);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function invalidate(_x) {
            return _invalidate.apply(this, arguments);
          }

          return invalidate;
        }()
      }]);

      return _class;
    }(base)
  );
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countAdd", function() { return countAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movePage", function() { return movePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderHtml", function() { return renderHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return toggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleAll", function() { return toggleAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCompleted", function() { return clearCompleted; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
 // import { render } from 'lit-html'



function actionCreator(action) {
  return function () {
    var state = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getState();
    state = action.apply(void 0, [state].concat(Array.prototype.slice.call(arguments)));
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].setState(state);
  };
} // ===================================================== Test code


var countAdd = actionCreator(function (state) {
  state.info.count === undefined ? state.info.count = 0 : state.info.count++;
  return state;
});
var getData = actionCreator(function (state) {
  var db = firebase.firestore();
  db.collection("TEST").get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      console.info(doc.id, doc.data());
    });
  });
  return state;
}); // ===================================================== Login

var signup = actionCreator(function (state, _id, _pwd) {
  var xhr = new XMLHttpRequest();

  if (!xhr) {
    throw new Error("XHR \uD638\uCD9C \uBD88\uAC00");
  }

  xhr.open("POST", "https://us-central1-taeuk-project.cloudfunctions.net/isAdmin");
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200 || xhr.status === 201) {
        firebase.auth().signInAnonymously()["catch"](function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.error(errorCode, errorMessage);
        });
        moveMainPage(JSON.parse(xhr.responseText).result);
        state.login = true;
        _store__WEBPACK_IMPORTED_MODULE_0__["default"].setState(state);
      }
    }
  });
  xhr.send("id=".concat(_id, "&password=").concat(_pwd));
  return state;
});

function moveMainPage() {
  var isLogin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (isLogin) {
    _main_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderPage("app-main", "/");
  }
}

var movePage = actionCreator(function (state, page) {
  _main_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderPage("".concat(page, "-main"), page);
  return state;
});
var login = actionCreator(function (state) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      console.info(isAnonymous, uid);
      state.login = true;
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].setState(state);
    } else {
      state.login = false;
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].setState(state);
    }
  });
  return state;
}); // ===================================================== Router

var renderHtml = actionCreator(function (state, html) {
  var app = document.querySelector("app-main").shadowRoot.querySelector("main");
  app.innerHTML = html;
  return state;
});
var get = actionCreator(function (state, url) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.send();

    req.onreadystatechange = function () {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          resolve(req.response);
        } else {
          reject(req.statusText);
        }
      }
    };
  });
}); // ===================================================== Example
// export const route = actionCreator((state, _route) => {
// 	state.route = _route
// 	return state
// })

var add = actionCreator(function (state, todo) {
  state.todoList.push({
    title: todo,
    completed: false,
    id: "item-xxxxxxxxxxxx".replace(/[x]/g, function () {
      var r = Math.random() * 16 | 0;
      return r.toString(16);
    })
  });
  return state;
});
var remove = actionCreator(function (state, id) {
  state.todoList = state.todoList.filter(function (todo) {
    return todo.id !== id;
  });
  return state;
});
var toggle = actionCreator(function (state, id) {
  var todo = state.todoList.find(function (_todo) {
    return _todo.id === id;
  });
  todo.completed = !todo.completed;
  return state;
});
var replace = actionCreator(function (state, id, title) {
  var todo = state.todoList.find(function (_todo) {
    return _todo.id === id;
  });
  todo.title = title;
  return state;
});
var toggleAll = actionCreator(function (state, completed) {
  state.todoList.forEach(function (_todo) {
    _todo.completed = completed;
  });
  return state;
});
var clearCompleted = actionCreator(function (state) {
  state.todoList = state.todoList.filter(function (todo) {
    return !todo.completed;
  });
  return state;
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_zero_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);

var initialState = {
  info: [],
  todoList: [],
  login: false
};
var store = Object(_redux_zero_js__WEBPACK_IMPORTED_MODULE_0__["default"])(initialState);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};

function createStore$1(initialState, middleware) {
  if (initialState === void 0) {
    initialState = {};
  }

  if (middleware === void 0) {
    middleware = null;
  }

  var state = initialState || {};
  var listeners = [];

  function dispatchListeners() {
    listeners.forEach(function (f) {
      return f(state);
    });
  }

  return {
    middleware: middleware,
    setState: function setState(update) {
      state = _assign({}, state, typeof update === "function" ? update(state) : update);
      dispatchListeners();
    },
    subscribe: function subscribe(f) {
      listeners.push(f);
      return function () {
        listeners.splice(listeners.indexOf(f), 1);
      };
    },
    getState: function getState() {
      return state;
    },
    reset: function reset() {
      state = initialState;
      dispatchListeners();
    }
  };
} // module.exports = createStore$1;


/* harmony default export */ __webpack_exports__["default"] = (createStore$1);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _libs_litRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _login_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n<style>\n#pageLogin {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: center;\n\t-ms-flex-pack: center;\n\tjustify-content: center;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\twidth: 95vw;\n\theight: 98vh;\n\tmargin: auto;\n}\n</style>\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral([" \n\t\t", "\n\t\t<div id=\"pageLogin\">\n\t\t\t<login-form />\n        </div>\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var LoginMain =
/*#__PURE__*/
function (_LitRender) {
  _inherits(LoginMain, _LitRender);

  function LoginMain() {
    var _this;

    _classCallCheck(this, LoginMain);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginMain).call(this));

    _this.attachShadow({
      mode: "open"
    });

    _this.invalidate();

    return _this;
  }

  _createClass(LoginMain, [{
    key: "render",
    value: function render() {
      return Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), style);
    }
  }]);

  return LoginMain;
}(Object(_libs_litRender__WEBPACK_IMPORTED_MODULE_1__["default"])(HTMLElement));

var style = Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
customElements.define("login-main", LoginMain);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginForm", function() { return LoginForm; });
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _libs_litRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _libs_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n<style>\n.sign-in-form {\n  padding: 1rem 1.5em;\n  border-radius: .5rem;\n  background-color: #3d454f;\n  max-width: 320px;\n}\n\n.sign-in-form h4 {\n  color: white;\n  margin-bottom: 1rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.sign-in-form label {\n  text-transform: uppercase;\n  color: #adadad;\n  letter-spacing: 1px;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n\n.sign-in-form input {\n  color: #666;\n}\n\n.sign-in-form input:focus {\n  opacity: 0.9;\n}\n\n.sign-in-form-username,\n.sign-in-form-password {\n  border-radius: 30px;\n  border: none;\n  -webkit-transition: all ease .4s;\n  transition: all ease .4s;\n}\n\n.sign-in-form-button {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border-radius: 30px;\n  border: 1px solid #fff;\n  color: #fff;\n  background-color: transparent;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  width: 100%;\n  padding: 1rem;\n  -webkit-transition: all ease .4s;\n  transition: all ease .4s;\n}\n\n.sign-in-form-button:hover {\n  background-color: #44c8ed;\n  border-color: #44c8ed;\n}\n</style>\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"/src/css/foundation.min.css\">\n    ", "\n    <div class=\"sign-in-form\">\n        <h4 class=\"text-center\">Sign In</h4>\n        <label for=\"sign-in-form-username\">Username</label>\n        <input type=\"text\" class=\"sign-in-form-username\" id=\"sign-in-form-username\" placeholder=\"ID\"/>\n        <label for=\"sign-in-form-password\">Password</label>\n        <input type=\"password\" class=\"sign-in-form-password\" id=\"sign-in-form-password\" placeholder=\"PW\"/>\n        <button type=\"submit\" class=\"sign-in-form-button\">Sign In</button>\n    </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var LoginForm =
/*#__PURE__*/
function (_LitRender) {
  _inherits(LoginForm, _LitRender);

  function LoginForm() {
    var _this;

    _classCallCheck(this, LoginForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginForm).call(this));
    _this._handlers = {};

    _this.attachShadow({
      mode: "open"
    });

    _this.invalidate(true);

    return _this;
  }

  _createClass(LoginForm, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var root = this.shadowRoot;
      var handlers = this._handlers;
      handlers.onClick = this._onClick.bind(this);
      root.querySelector(".sign-in-form-button").addEventListener("click", handlers.onClick);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var root = this.shadowRoot;
      root.querySelector(".sign-in-form-button").removeEventListener("click", this._handlers.onClick);
    }
  }, {
    key: "_onClick",
    value: function _onClick() {
      var id = this.shadowRoot.querySelector(".sign-in-form-username").value;
      var pwd = this.shadowRoot.querySelector(".sign-in-form-password").value;
      Object(_libs_actions__WEBPACK_IMPORTED_MODULE_2__["signup"])(id, pwd);
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), style);
    }
  }]);

  return LoginForm;
}(Object(_libs_litRender__WEBPACK_IMPORTED_MODULE_1__["default"])(HTMLElement));
var style = Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
customElements.define("login-form", LoginForm);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy9zcmMvbGl0LWh0bWwudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvZGVmYXVsdC10ZW1wbGF0ZS1wcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvcGFydHMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL2RvbS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9wYXJ0LnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3RlbXBsYXRlLWluc3RhbmNlLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3RlbXBsYXRlLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3RlbXBsYXRlLXJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvdGVtcGxhdGUtZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9saXRSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9yZWR1eC16ZXJvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ2luLWZvcm0uanMiXSwibmFtZXMiOlsiTWFpbiIsImxvYWRpbmdET00iLCJyb3V0ZXIiLCJpc1JvdXRlIiwib3RoZXJ3aXNlIiwicHVzaFVybCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvbnNvbGUiLCJpbmZvIiwic3RhdGUiLCJwYXRoIiwiZG9jdW1lbnQiLCJ0YXJnZXQiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0QXR0cmlidXRlIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJpc0NvbnRpbnVlIiwicmVuZGVyUGFnZSIsInNwbGl0IiwiX29uTG9hZCIsInJlcGxhY2VTdGF0ZSIsImNhbGxiYWNrIiwicm9vdCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2FkaW5nIiwiY3JlYXRlRWxlbWVudCIsIkZJVkUiLCJlbXB0eURPTSIsImNsYXNzTGlzdCIsImFkZCIsImkiLCJhcHBlbmRDaGlsZCIsInBhZ2VOYW1lIiwicGFnZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJpbml0IiwiQXBwTWFpbiIsIl9oYW5kbGVycyIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJpbnZhbGlkYXRlIiwic2hhZG93Um9vdCIsImhhbmRsZXJzIiwib25DbGljayIsIl9vbkNsaWNrIiwiYmluZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsb2dpbkJ0biIsImNvbnRhaW5zIiwibW92ZVBhZ2UiLCJodG1sIiwic3R5bGUiLCJMaXRSZW5kZXIiLCJIVE1MRWxlbWVudCIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiYmFzZSIsImluc3RhbnQiLCJuZWVkc1JlbmRlciIsInJlbmRlciIsImFjdGlvbkNyZWF0b3IiLCJhY3Rpb24iLCJzdG9yZSIsImdldFN0YXRlIiwiYXJndW1lbnRzIiwic2V0U3RhdGUiLCJjb3VudEFkZCIsImNvdW50IiwidW5kZWZpbmVkIiwiZ2V0RGF0YSIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZG9jIiwiaWQiLCJkYXRhIiwic2lnbnVwIiwiX2lkIiwiX3B3ZCIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiRXJyb3IiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInJlYWR5U3RhdGUiLCJET05FIiwic3RhdHVzIiwiYXV0aCIsInNpZ25JbkFub255bW91c2x5IiwiZXJyb3IiLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsIm1vdmVNYWluUGFnZSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsInJlc3VsdCIsImxvZ2luIiwic2VuZCIsImlzTG9naW4iLCJwYWdlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsImlzQW5vbnltb3VzIiwidWlkIiwicmVuZGVySHRtbCIsImFwcCIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVzcG9uc2UiLCJzdGF0dXNUZXh0IiwidG9kbyIsInRvZG9MaXN0IiwicHVzaCIsInRpdGxlIiwiY29tcGxldGVkIiwicmVwbGFjZSIsInIiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJyZW1vdmUiLCJmaWx0ZXIiLCJ0b2dnbGUiLCJmaW5kIiwiX3RvZG8iLCJ0b2dnbGVBbGwiLCJjbGVhckNvbXBsZXRlZCIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0IiwicyIsIm4iLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJjcmVhdGVTdG9yZSQxIiwibWlkZGxld2FyZSIsImxpc3RlbmVycyIsImRpc3BhdGNoTGlzdGVuZXJzIiwiZiIsInVwZGF0ZSIsInN1YnNjcmliZSIsInNwbGljZSIsImluZGV4T2YiLCJyZXNldCIsIkxvZ2luTWFpbiIsIkxvZ2luRm9ybSIsInZhbHVlIiwicHdkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7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QUNSLGFBQU9wSCxxREFBUCxvQkFFSUMsS0FGSjtBQVlBO0FBNUNGOztBQUFBO0FBQUEsRUFBK0JDLCtEQUFTLENBQUNDLFdBQUQsQ0FBeEM7QUErQ0EsSUFBTUYsS0FBSyxHQUFHRCxxREFBSCxvQkFBWDtBQThEQUksY0FBYyxDQUFDQyxNQUFmLGVBQW9DNkcsU0FBcEMsRSIsImZpbGUiOiJtYWluLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAnLi9jb21wb25lbnRzL0FwcC5qcydcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvTG9naW4uanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIHtcclxuXHRzdGF0aWMgaW5pdCgpIHtcclxuXHRcdHRoaXMubG9hZGluZ0RPTSgpXHJcblxyXG5cdFx0Ly8gUEpBWCDrsKnsi51cclxuXHRcdC8vIHRoaXMuX29uUG9wc3RhdGUoKVxyXG5cdFx0Ly8gdGhpcy5fb25DbGlja0FuY2hvcigpXHJcblx0XHQvLyB0aGlzLnJvdXRlcihgL2ApXHJcblxyXG5cdFx0dGhpcy5yb3V0ZXIoKVxyXG5cdFx0XHQuaXNSb3V0ZSgpXHJcblx0XHRcdC5vdGhlcndpc2UoKVxyXG5cdFx0XHQucHVzaFVybCgpXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgX29uUG9wc3RhdGUoKSB7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihgcG9wc3RhdGVgLCBldmVudCA9PiB7XHJcblx0XHRcdGNvbnNvbGUuaW5mbyhgW3BvcHN0YXRlXWAsIGV2ZW50LnN0YXRlKVxyXG5cdFx0XHR0aGlzLnJvdXRlcihldmVudC5zdGF0ZS5wYXRoKVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBfb25DbGlja0FuY2hvcigpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZXZlbnQgPT4ge1xyXG5cdFx0XHRpZiAoIWV2ZW50LnRhcmdldCB8fCBldmVudC50YXJnZXQubm9kZU5hbWUgIT09IGBBYCkge1xyXG5cdFx0XHRcdHJldHVyblxyXG5cdFx0XHR9XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHRcdFxyXG5cdFx0XHRjb25zdCBwYXRoID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShgaHJlZmApXHJcblx0XHRcclxuXHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUoeyBwYXRoIH0sIG51bGwsIHBhdGgpXHJcblx0XHRcclxuXHRcdFx0dGhpcy5yb3V0ZXIocGF0aClcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHQvLyBQSkFYIOuwqeyLnVxyXG5cdC8vIHN0YXRpYyBnZXQgcm91dGVzKCkge1xyXG5cdC8vIFx0cmV0dXJuIHtcclxuXHQvLyBcdFx0Jy8nOiBmdW5jdGlvbiAoKSB7XHJcblx0Ly8gXHRcdFx0TWFpbi5yZW5kZXJQYWdlKGBhcHAtbWFpbmAsIGAvYClcclxuXHQvLyBcdFx0fSxcclxuXHQvLyBcdFx0Jy9sb2dpbic6IGZ1bmN0aW9uICgpIHtcclxuXHQvLyBcdFx0XHRNYWluLnJlbmRlclBhZ2UoYGxvZ2luLW1haW5gLCBgL2xvZ2luYClcclxuXHQvLyBcdFx0fSxcclxuXHQvLyBcdFx0b3RoZXJ3aXNlKCkge1xyXG5cdC8vIFx0XHRcdE1haW4uZXhjZXB0RE9NKClcclxuXHQvLyBcdFx0fSxcclxuXHQvLyBcdH1cclxuXHQvLyB9XHJcblxyXG5cdC8vIHN0YXRpYyByb3V0ZXIocGF0aCkge1xyXG5cdC8vIFx0KHRoaXMucm91dGVzW3BhdGhdIHx8IHRoaXMucm91dGVzLm90aGVyd2lzZSkocGF0aClcclxuXHQvLyB9XHJcblxyXG5cdHN0YXRpYyByb3V0ZXIoKSB7XHJcblx0XHRsZXQgcGF0aCA9IGxvY2F0aW9uLnBhdGhuYW1lXHJcblx0XHRsZXQgaXNDb250aW51ZSA9IHRydWVcclxuXHRcdGlmIChwYXRoID09PSBgL2ApIHtwYXRoID0gYC9hcHBgfVx0XHRcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGlzUm91dGUoKSB7XHJcblx0XHRcdFx0aWYgKGlzQ29udGludWUpIHtcclxuXHRcdFx0XHRcdE1haW4ucmVuZGVyUGFnZShgJHtwYXRoLnNwbGl0KGAvYClbMV19LW1haW5gLCBwYXRoKVxyXG5cdFx0XHRcdFx0aXNDb250aW51ZSA9IGZhbHNlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB0aGlzXHJcblx0XHRcdH0sXHJcblx0XHRcdG90aGVyd2lzZSgpIHtcclxuXHRcdFx0XHRpZiAoaXNDb250aW51ZSkge1xyXG5cdFx0XHRcdFx0TWFpbi5fb25Mb2FkKCgpID0+IGhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBudWxsLCBgbG9naW5gKSlcclxuXHRcdFx0XHRcdE1haW4ucmVuZGVyUGFnZShgbG9naW4tbWFpbmAsIHBhdGgpXHJcblx0XHRcdFx0XHRpc0NvbnRpbnVlID0gZmFsc2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHRoaXNcclxuXHRcdFx0fSxcclxuXHRcdFx0cHVzaFVybCgpIHtcclxuXHRcdFx0XHRpZiAoaXNDb250aW51ZSkge1x0XHJcblx0XHRcdFx0XHRNYWluLl9vbkxvYWQoKCkgPT4gaGlzdG9yeS5wdXNoU3RhdGUoe30sIG51bGwsIHBhdGgpKVx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgX29uTG9hZChjYWxsYmFjaykge1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYGxvYWRgLCAoKSA9PiB7XHRcdFx0XHJcblx0XHRcdGNhbGxiYWNrKClcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbG9hZGluZ0RPTSgpIHtcclxuXHRcdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBtYWluYClcclxuXHRcdGNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKVxyXG5cdFx0Y29uc3QgRklWRSA9IDVcclxuXHRcdFx0XHRcclxuXHRcdHRoaXMuZW1wdHlET00oKVxyXG5cdFx0bG9hZGluZy5jbGFzc0xpc3QuYWRkKGBsb2FkaW5nYClcclxuXHRcdGZvciAobGV0IGk9MDsgaSA8IEZJVkU7IGkrKykge1xyXG5cdFx0XHRsb2FkaW5nLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYHNwYW5gKSlcclxuXHRcdH1cclxuXHRcdHJvb3QuYXBwZW5kQ2hpbGQobG9hZGluZylcclxuXHR9XHJcblxyXG5cdHN0YXRpYyByZW5kZXJQYWdlKHBhZ2VOYW1lLCBwYXRoKSB7XHJcblx0XHR0aGlzLmVtcHR5RE9NKClcclxuXHRcdGNvbnN0IHBhZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChwYWdlTmFtZSlcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYG1haW5gKS5hcHBlbmRDaGlsZChwYWdlRWxlbWVudClcclxuXHRcdGhpc3RvcnkucHVzaFN0YXRlKHt9LCBwYWdlTmFtZSwgcGF0aClcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBlbXB0eURPTSgpIHtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYG1haW5gKS5pbm5lckhUTUwgPSBgYFxyXG5cdH1cclxuXHJcblx0c3RhdGljIGV4Y2VwdERPTSgpIHtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYG1haW5gKS5pbm5lckhUTUwgPSBgTm8gUm91dGVgXHJcblx0fVxyXG59XHJcblxyXG5NYWluLmluaXQoKVxyXG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWh0bWwnXHJcblxyXG5pbXBvcnQgTGl0UmVuZGVyIGZyb20gJy4uL2xpYnMvbGl0UmVuZGVyJ1xyXG5pbXBvcnQgeyBtb3ZlUGFnZSB9IGZyb20gJy4uL2xpYnMvYWN0aW9ucycgXHJcblxyXG5jbGFzcyBBcHBNYWluIGV4dGVuZHMgTGl0UmVuZGVyKEhUTUxFbGVtZW50KSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpXHJcbiAgICBcclxuXHRcdHRoaXMuX2hhbmRsZXJzID0ge31cclxuXHJcblx0XHR0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IGBvcGVuYCB9KVxyXG5cdFx0dGhpcy5pbnZhbGlkYXRlKClcdFxyXG5cdH1cclxuICBcclxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuXHRcdGNvbnN0IHJvb3QgPSB0aGlzLnNoYWRvd1Jvb3RcclxuXHRcdGNvbnN0IGhhbmRsZXJzID0gdGhpcy5faGFuZGxlcnNcclxuXHJcblx0XHRoYW5kbGVycy5vbkNsaWNrID0gdGhpcy5fb25DbGljay5iaW5kKHRoaXMpXHJcbiAgICBcclxuXHRcdHJvb3QuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBoYW5kbGVycy5vbkNsaWNrKVxyXG5cdH1cclxuXHJcblx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcblx0XHRjb25zdCByb290ID0gdGhpcy5zaGFkb3dSb290XHJcblxyXG5cdFx0cm9vdC5yZW1vdmVFdmVudExpc3RlbmVyKGBjbGlja2AsIHRoaXMuX2hhbmRsZXJzLm9uQ2xpY2spXHJcblx0fSAgXHJcbiAgXHJcblx0X29uQ2xpY2soZXZlbnQpIHtcclxuXHRcdGNvbnN0IGxvZ2luQnRuID0gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhgbG9nb3V0YClcclxuICAgIFxyXG5cdFx0aWYobG9naW5CdG4pIHtcclxuXHRcdFx0bW92ZVBhZ2UoYGxvZ2luYClcclxuXHRcdH1cdFx0XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gaHRtbGAgXHJcbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9zcmMvY3NzL2ZvdW5kYXRpb24ubWluLmNzc1wiPlxyXG5cdFx0JHtzdHlsZX1cclxuXHRcdDxkaXYgY2xhc3M9XCJwYWdlLW1haW5cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImhlcm8tZnVsbC1zY3JlZW5cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidG9wLWNvbnRlbnQtc2VjdGlvblwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRvcC1iYXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRvcC1iYXItbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzcz1cIm1lbnVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cIm1lbnUtdGV4dFwiPjxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC83NXgzMFwiIGFsdD1cImxvZ29cIj48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCIjXCI+TWVudTwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtaWRkbGUtY29udGVudC1zZWN0aW9uXCI+XHJcblx0XHRcdFx0XHQ8aDE+TWFpbiBQYWdlPC9oMT5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidXR0b24gbGFyZ2UgbG9nb3V0XCI+TG9nb3V0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJib3R0b20tY29udGVudC1zZWN0aW9uXCIgZGF0YS1tYWdlbGxhbiBkYXRhLXRocmVzaG9sZD1cIjBcIj5cclxuXHRcdFx0XHRcdDxhIGhyZWY9XCIjbWFpbi1jb250ZW50LXNlY3Rpb25cIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0yNCAxMmMwLTYuNjI3LTUuMzczLTEyLTEyLTEycy0xMiA1LjM3My0xMiAxMiA1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMnptLTE4LjAwNS0xLjU2OGwxLjQxNS0xLjQxNCA0LjU5IDQuNTc0IDQuNTc5LTQuNTc0IDEuNDE2IDEuNDE0LTUuOTk1IDUuOTg4LTYuMDA1LTUuOTg4elwiLz48L3N2Zz48L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGlkPVwibWFpbi1jb250ZW50LXNlY3Rpb25cIiBkYXRhLW1hZ2VsbGFuLXRhcmdldD1cIm1haW4tY29udGVudC1zZWN0aW9uXCI+PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuICAgICAgICBgXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdHlsZSA9IGh0bWxgXHJcbjxzdHlsZT5cclxuLmhlcm8tZnVsbC1zY3JlZW4ge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMzc4MjczL3BleGVscy1waG90by0zNzgyNzMuanBlZz93PTEyNjAmaD03NTAmYXV0bz1jb21wcmVzcyZjcz10aW55c3JnYlwiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uaGVyby1mdWxsLXNjcmVlbiAubWlkZGxlLWNvbnRlbnQtc2VjdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmVmZWZlO1xyXG59XHJcblxyXG4uaGVyby1mdWxsLXNjcmVlbiAudG9wLWNvbnRlbnQtc2VjdGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZXJvLWZ1bGwtc2NyZWVuIC5ib3R0b20tY29udGVudC1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uaGVyby1mdWxsLXNjcmVlbiAuYm90dG9tLWNvbnRlbnQtc2VjdGlvbiBzdmcge1xyXG4gIGhlaWdodDogMy43NXJlbTtcclxuICB3aWR0aDogMy43NXJlbTtcclxuICBmaWxsOiAjZmVmZWZlO1xyXG59XHJcblxyXG4uaGVyby1mdWxsLXNjcmVlbiAudG9wLWJhciB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5oZXJvLWZ1bGwtc2NyZWVuIC50b3AtYmFyIC5tZW51IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlcm8tZnVsbC1zY3JlZW4gLnRvcC1iYXIgLm1lbnUtdGV4dCB7XHJcbiAgY29sb3I6ICNmZWZlZmU7XHJcbn1cclxuXHJcbi5oZXJvLWZ1bGwtc2NyZWVuIC50b3AtYmFyIC5tZW51IGxpIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaGVyby1mdWxsLXNjcmVlbiAudG9wLWJhciAubWVudSBhIHtcclxuICBjb2xvcjogI2ZlZmVmZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG48L3N0eWxlPlxyXG5gXHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoYGFwcC1tYWluYCwgQXBwTWFpbilcclxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqXG4gKiBNYWluIGxpdC1odG1sIG1vZHVsZS5cbiAqXG4gKiBNYWluIGV4cG9ydHM6XG4gKlxuICogLSAgW1todG1sXV1cbiAqIC0gIFtbc3ZnXV1cbiAqIC0gIFtbcmVuZGVyXV1cbiAqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqXG4gKiBEbyBub3QgcmVtb3ZlIHRoaXMgY29tbWVudDsgaXQga2VlcHMgdHlwZWRvYyBmcm9tIG1pc3BsYWNpbmcgdGhlIG1vZHVsZVxuICogZG9jcy5cbiAqL1xuaW1wb3J0IHtkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmltcG9ydCB7U1ZHVGVtcGxhdGVSZXN1bHQsIFRlbXBsYXRlUmVzdWx0fSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuXG5leHBvcnQge0RlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciwgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yfSBmcm9tICcuL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5leHBvcnQge2RpcmVjdGl2ZSwgRGlyZWN0aXZlRm4sIGlzRGlyZWN0aXZlfSBmcm9tICcuL2xpYi9kaXJlY3RpdmUuanMnO1xuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogcmVtb3ZlIGxpbmUgd2hlbiB3ZSBnZXQgTm9kZVBhcnQgbW92aW5nIG1ldGhvZHNcbmV4cG9ydCB7cmVtb3ZlTm9kZXMsIHJlcGFyZW50Tm9kZXN9IGZyb20gJy4vbGliL2RvbS5qcyc7XG5leHBvcnQge25vQ2hhbmdlLCBub3RoaW5nLCBQYXJ0fSBmcm9tICcuL2xpYi9wYXJ0LmpzJztcbmV4cG9ydCB7QXR0cmlidXRlQ29tbWl0dGVyLCBBdHRyaWJ1dGVQYXJ0LCBCb29sZWFuQXR0cmlidXRlUGFydCwgRXZlbnRQYXJ0LCBpc0l0ZXJhYmxlLCBpc1ByaW1pdGl2ZSwgTm9kZVBhcnQsIFByb3BlcnR5Q29tbWl0dGVyLCBQcm9wZXJ0eVBhcnR9IGZyb20gJy4vbGliL3BhcnRzLmpzJztcbmV4cG9ydCB7UmVuZGVyT3B0aW9uc30gZnJvbSAnLi9saWIvcmVuZGVyLW9wdGlvbnMuanMnO1xuZXhwb3J0IHtwYXJ0cywgcmVuZGVyfSBmcm9tICcuL2xpYi9yZW5kZXIuanMnO1xuZXhwb3J0IHt0ZW1wbGF0ZUNhY2hlcywgdGVtcGxhdGVGYWN0b3J5fSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1mYWN0b3J5LmpzJztcbmV4cG9ydCB7VGVtcGxhdGVJbnN0YW5jZX0gZnJvbSAnLi9saWIvdGVtcGxhdGUtaW5zdGFuY2UuanMnO1xuZXhwb3J0IHtUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi9saWIvdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmV4cG9ydCB7U1ZHVGVtcGxhdGVSZXN1bHQsIFRlbXBsYXRlUmVzdWx0fSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuZXhwb3J0IHtjcmVhdGVNYXJrZXIsIGlzVGVtcGxhdGVQYXJ0QWN0aXZlLCBUZW1wbGF0ZX0gZnJvbSAnLi9saWIvdGVtcGxhdGUuanMnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGxpdEh0bWxWZXJzaW9uczogc3RyaW5nW107XG4gIH1cbn1cblxuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBsaXQtaHRtbCB1c2FnZS5cbi8vIFRPRE8oanVzdGluZmFnbmFuaSk6IGluamVjdCB2ZXJzaW9uIG51bWJlciBhdCBidWlsZCB0aW1lXG4od2luZG93WydsaXRIdG1sVmVyc2lvbnMnXSB8fCAod2luZG93WydsaXRIdG1sVmVyc2lvbnMnXSA9IFtdKSkucHVzaCgnMS4wLjAnKTtcblxuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBIVE1MIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWwgPSAoc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnZhbHVlczogdW5rbm93bltdKSA9PlxuICAgIG5ldyBUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdodG1sJywgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yKTtcblxuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBTVkcgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3Qgc3ZnID0gKHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi52YWx1ZXM6IHVua25vd25bXSkgPT5cbiAgICBuZXcgU1ZHVGVtcGxhdGVSZXN1bHQoc3RyaW5ncywgdmFsdWVzLCAnc3ZnJywgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtQYXJ0fSBmcm9tICcuL3BhcnQuanMnO1xuaW1wb3J0IHtBdHRyaWJ1dGVDb21taXR0ZXIsIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LCBFdmVudFBhcnQsIE5vZGVQYXJ0LCBQcm9wZXJ0eUNvbW1pdHRlcn0gZnJvbSAnLi9wYXJ0cy5qcyc7XG5pbXBvcnQge1JlbmRlck9wdGlvbnN9IGZyb20gJy4vcmVuZGVyLW9wdGlvbnMuanMnO1xuaW1wb3J0IHtUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi90ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgUGFydHMgd2hlbiBhIHRlbXBsYXRlIGlzIGluc3RhbnRpYXRlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIERlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciBpbXBsZW1lbnRzIFRlbXBsYXRlUHJvY2Vzc29yIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBwYXJ0cyBmb3IgYW4gYXR0cmlidXRlLXBvc2l0aW9uIGJpbmRpbmcsIGdpdmVuIHRoZSBldmVudCwgYXR0cmlidXRlXG4gICAqIG5hbWUsIGFuZCBzdHJpbmcgbGl0ZXJhbHMuXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGJpbmRpbmdcbiAgICogQHBhcmFtIG5hbWUgIFRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgKiBAcGFyYW0gc3RyaW5ncyBUaGUgc3RyaW5nIGxpdGVyYWxzLiBUaGVyZSBhcmUgYWx3YXlzIGF0IGxlYXN0IHR3byBzdHJpbmdzLFxuICAgKiAgIGV2ZW50IGZvciBmdWxseS1jb250cm9sbGVkIGJpbmRpbmdzIHdpdGggYSBzaW5nbGUgZXhwcmVzc2lvbi5cbiAgICovXG4gIGhhbmRsZUF0dHJpYnV0ZUV4cHJlc3Npb25zKFxuICAgICAgZWxlbWVudDogRWxlbWVudCwgbmFtZTogc3RyaW5nLCBzdHJpbmdzOiBzdHJpbmdbXSxcbiAgICAgIG9wdGlvbnM6IFJlbmRlck9wdGlvbnMpOiBSZWFkb25seUFycmF5PFBhcnQ+IHtcbiAgICBjb25zdCBwcmVmaXggPSBuYW1lWzBdO1xuICAgIGlmIChwcmVmaXggPT09ICcuJykge1xuICAgICAgY29uc3QgY29tbWl0dGVyID0gbmV3IFByb3BlcnR5Q29tbWl0dGVyKGVsZW1lbnQsIG5hbWUuc2xpY2UoMSksIHN0cmluZ3MpO1xuICAgICAgcmV0dXJuIGNvbW1pdHRlci5wYXJ0cztcbiAgICB9XG4gICAgaWYgKHByZWZpeCA9PT0gJ0AnKSB7XG4gICAgICByZXR1cm4gW25ldyBFdmVudFBhcnQoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgb3B0aW9ucy5ldmVudENvbnRleHQpXTtcbiAgICB9XG4gICAgaWYgKHByZWZpeCA9PT0gJz8nKSB7XG4gICAgICByZXR1cm4gW25ldyBCb29sZWFuQXR0cmlidXRlUGFydChlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBzdHJpbmdzKV07XG4gICAgfVxuICAgIGNvbnN0IGNvbW1pdHRlciA9IG5ldyBBdHRyaWJ1dGVDb21taXR0ZXIoZWxlbWVudCwgbmFtZSwgc3RyaW5ncyk7XG4gICAgcmV0dXJuIGNvbW1pdHRlci5wYXJ0cztcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIHBhcnRzIGZvciBhIHRleHQtcG9zaXRpb24gYmluZGluZy5cbiAgICogQHBhcmFtIHRlbXBsYXRlRmFjdG9yeVxuICAgKi9cbiAgaGFuZGxlVGV4dEV4cHJlc3Npb24ob3B0aW9uczogUmVuZGVyT3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgTm9kZVBhcnQob3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciA9IG5ldyBEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IoKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtpc0RpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmUuanMnO1xuaW1wb3J0IHtyZW1vdmVOb2Rlc30gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHtub0NoYW5nZSwgbm90aGluZywgUGFydH0gZnJvbSAnLi9wYXJ0LmpzJztcbmltcG9ydCB7UmVuZGVyT3B0aW9uc30gZnJvbSAnLi9yZW5kZXItb3B0aW9ucy5qcyc7XG5pbXBvcnQge1RlbXBsYXRlSW5zdGFuY2V9IGZyb20gJy4vdGVtcGxhdGUtaW5zdGFuY2UuanMnO1xuaW1wb3J0IHtUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuaW1wb3J0IHtjcmVhdGVNYXJrZXJ9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10eXBlb2Ytb3BlcmF0b3JcbmV4cG9ydCB0eXBlIFByaW1pdGl2ZSA9IG51bGx8dW5kZWZpbmVkfGJvb2xlYW58bnVtYmVyfHN0cmluZ3xTeW1ib2x8YmlnaW50O1xuZXhwb3J0IGNvbnN0IGlzUHJpbWl0aXZlID0gKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgUHJpbWl0aXZlID0+IHtcbiAgcmV0dXJuIChcbiAgICAgIHZhbHVlID09PSBudWxsIHx8XG4gICAgICAhKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSk7XG59O1xuZXhwb3J0IGNvbnN0IGlzSXRlcmFibGUgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBJdGVyYWJsZTx1bmtub3duPiA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSB8fFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgISEodmFsdWUgJiYgKHZhbHVlIGFzIGFueSlbU3ltYm9sLml0ZXJhdG9yXSk7XG59O1xuXG4vKipcbiAqIFdyaXRlcyBhdHRyaWJ1dGUgdmFsdWVzIHRvIHRoZSBET00gZm9yIGEgZ3JvdXAgb2YgQXR0cmlidXRlUGFydHMgYm91bmQgdG8gYVxuICogc2luZ2xlIGF0dGlidXRlLiBUaGUgdmFsdWUgaXMgb25seSBzZXQgb25jZSBldmVuIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBwYXJ0c1xuICogZm9yIGFuIGF0dHJpYnV0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZUNvbW1pdHRlciB7XG4gIHJlYWRvbmx5IGVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgcmVhZG9ubHkgc3RyaW5nczogUmVhZG9ubHlBcnJheTxzdHJpbmc+O1xuICByZWFkb25seSBwYXJ0czogUmVhZG9ubHlBcnJheTxBdHRyaWJ1dGVQYXJ0PjtcbiAgZGlydHkgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIG5hbWU6IHN0cmluZywgc3RyaW5nczogUmVhZG9ubHlBcnJheTxzdHJpbmc+KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgdGhpcy5wYXJ0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICh0aGlzLnBhcnRzIGFzIEF0dHJpYnV0ZVBhcnRbXSlbaV0gPSB0aGlzLl9jcmVhdGVQYXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBzaW5nbGUgcGFydC4gT3ZlcnJpZGUgdGhpcyB0byBjcmVhdGUgYSBkaWZmZXJudCB0eXBlIG9mIHBhcnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgX2NyZWF0ZVBhcnQoKTogQXR0cmlidXRlUGFydCB7XG4gICAgcmV0dXJuIG5ldyBBdHRyaWJ1dGVQYXJ0KHRoaXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9nZXRWYWx1ZSgpOiB1bmtub3duIHtcbiAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5zdHJpbmdzO1xuICAgIGNvbnN0IGwgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgbGV0IHRleHQgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0ZXh0ICs9IHN0cmluZ3NbaV07XG4gICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wYXJ0c1tpXTtcbiAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgdiA9IHBhcnQudmFsdWU7XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSh2KSB8fCAhaXNJdGVyYWJsZSh2KSkge1xuICAgICAgICAgIHRleHQgKz0gdHlwZW9mIHYgPT09ICdzdHJpbmcnID8gdiA6IFN0cmluZyh2KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHQgb2Ygdikge1xuICAgICAgICAgICAgdGV4dCArPSB0eXBlb2YgdCA9PT0gJ3N0cmluZycgPyB0IDogU3RyaW5nKHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRleHQgKz0gc3RyaW5nc1tsXTtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIGNvbW1pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXJ0eSkge1xuICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsIHRoaXMuX2dldFZhbHVlKCkgYXMgc3RyaW5nKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBIFBhcnQgdGhhdCBjb250cm9scyBhbGwgb3IgcGFydCBvZiBhbiBhdHRyaWJ1dGUgdmFsdWUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVQYXJ0IGltcGxlbWVudHMgUGFydCB7XG4gIHJlYWRvbmx5IGNvbW1pdHRlcjogQXR0cmlidXRlQ29tbWl0dGVyO1xuICB2YWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3Rvcihjb21taXR0ZXI6IEF0dHJpYnV0ZUNvbW1pdHRlcikge1xuICAgIHRoaXMuY29tbWl0dGVyID0gY29tbWl0dGVyO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IHVua25vd24pOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgIT09IG5vQ2hhbmdlICYmICghaXNQcmltaXRpdmUodmFsdWUpIHx8IHZhbHVlICE9PSB0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGEgbm90IGEgZGlyZWN0aXZlLCBkaXJ0eSB0aGUgY29tbWl0dGVyIHNvIHRoYXQgaXQnbGxcbiAgICAgIC8vIGNhbGwgc2V0QXR0cmlidXRlLiBJZiB0aGUgdmFsdWUgaXMgYSBkaXJlY3RpdmUsIGl0J2xsIGRpcnR5IHRoZVxuICAgICAgLy8gY29tbWl0dGVyIGlmIGl0IGNhbGxzIHNldFZhbHVlKCkuXG4gICAgICBpZiAoIWlzRGlyZWN0aXZlKHZhbHVlKSkge1xuICAgICAgICB0aGlzLmNvbW1pdHRlci5kaXJ0eSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tbWl0KCkge1xuICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLnZhbHVlKSkge1xuICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy52YWx1ZTtcbiAgICAgIHRoaXMudmFsdWUgPSBub0NoYW5nZTtcbiAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY29tbWl0dGVyLmNvbW1pdCgpO1xuICB9XG59XG5cbi8qKlxuICogQSBQYXJ0IHRoYXQgY29udHJvbHMgYSBsb2NhdGlvbiB3aXRoaW4gYSBOb2RlIHRyZWUuIExpa2UgYSBSYW5nZSwgTm9kZVBhcnRcbiAqIGhhcyBzdGFydCBhbmQgZW5kIGxvY2F0aW9ucyBhbmQgY2FuIHNldCBhbmQgdXBkYXRlIHRoZSBOb2RlcyBiZXR3ZWVuIHRob3NlXG4gKiBsb2NhdGlvbnMuXG4gKlxuICogTm9kZVBhcnRzIHN1cHBvcnQgc2V2ZXJhbCB2YWx1ZSB0eXBlczogcHJpbWl0aXZlcywgTm9kZXMsIFRlbXBsYXRlUmVzdWx0cyxcbiAqIGFzIHdlbGwgYXMgYXJyYXlzIGFuZCBpdGVyYWJsZXMgb2YgdGhvc2UgdHlwZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBOb2RlUGFydCBpbXBsZW1lbnRzIFBhcnQge1xuICByZWFkb25seSBvcHRpb25zOiBSZW5kZXJPcHRpb25zO1xuICBzdGFydE5vZGUhOiBOb2RlO1xuICBlbmROb2RlITogTm9kZTtcbiAgdmFsdWU6IHVua25vd24gPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX19wZW5kaW5nVmFsdWU6IHVua25vd24gPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogUmVuZGVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyB0aGlzIHBhcnQgaW50byBhIGNvbnRhaW5lci5cbiAgICpcbiAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAqL1xuICBhcHBlbmRJbnRvKGNvbnRhaW5lcjogTm9kZSkge1xuICAgIHRoaXMuc3RhcnROb2RlID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1hcmtlcigpKTtcbiAgICB0aGlzLmVuZE5vZGUgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFya2VyKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydHMgdGhpcyBwYXJ0IGFmdGVyIHRoZSBgcmVmYCBub2RlIChiZXR3ZWVuIGByZWZgIGFuZCBgcmVmYCdzIG5leHRcbiAgICogc2libGluZykuIEJvdGggYHJlZmAgYW5kIGl0cyBuZXh0IHNpYmxpbmcgbXVzdCBiZSBzdGF0aWMsIHVuY2hhbmdpbmcgbm9kZXNcbiAgICogc3VjaCBhcyB0aG9zZSB0aGF0IGFwcGVhciBpbiBhIGxpdGVyYWwgc2VjdGlvbiBvZiBhIHRlbXBsYXRlLlxuICAgKlxuICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICovXG4gIGluc2VydEFmdGVyTm9kZShyZWY6IE5vZGUpIHtcbiAgICB0aGlzLnN0YXJ0Tm9kZSA9IHJlZjtcbiAgICB0aGlzLmVuZE5vZGUgPSByZWYubmV4dFNpYmxpbmchO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgdGhpcyBwYXJ0IGludG8gYSBwYXJlbnQgcGFydC5cbiAgICpcbiAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAqL1xuICBhcHBlbmRJbnRvUGFydChwYXJ0OiBOb2RlUGFydCkge1xuICAgIHBhcnQuX19pbnNlcnQodGhpcy5zdGFydE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gICAgcGFydC5fX2luc2VydCh0aGlzLmVuZE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0cyB0aGlzIHBhcnQgYWZ0ZXIgdGhlIGByZWZgIHBhcnQuXG4gICAqXG4gICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgKi9cbiAgaW5zZXJ0QWZ0ZXJQYXJ0KHJlZjogTm9kZVBhcnQpIHtcbiAgICByZWYuX19pbnNlcnQodGhpcy5zdGFydE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gICAgdGhpcy5lbmROb2RlID0gcmVmLmVuZE5vZGU7XG4gICAgcmVmLmVuZE5vZGUgPSB0aGlzLnN0YXJ0Tm9kZTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiB1bmtub3duKTogdm9pZCB7XG4gICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgY29tbWl0KCkge1xuICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLl9fcGVuZGluZ1ZhbHVlKSkge1xuICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgIHRoaXMuX19jb21taXRUZXh0KHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZXN1bHQpIHtcbiAgICAgIHRoaXMuX19jb21taXRUZW1wbGF0ZVJlc3VsdCh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIHRoaXMuX19jb21taXROb2RlKHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGlzSXRlcmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLl9fY29tbWl0SXRlcmFibGUodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG5vdGhpbmcpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBub3RoaW5nO1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGYWxsYmFjaywgd2lsbCByZW5kZXIgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgICAgdGhpcy5fX2NvbW1pdFRleHQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX19pbnNlcnQobm9kZTogTm9kZSkge1xuICAgIHRoaXMuZW5kTm9kZS5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcy5lbmROb2RlKTtcbiAgfVxuXG4gIHByaXZhdGUgX19jb21taXROb2RlKHZhbHVlOiBOb2RlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLl9faW5zZXJ0KHZhbHVlKTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9fY29tbWl0VGV4dCh2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZS5uZXh0U2libGluZyE7XG4gICAgdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICBpZiAobm9kZSA9PT0gdGhpcy5lbmROb2RlLnByZXZpb3VzU2libGluZyAmJlxuICAgICAgICBub2RlLm5vZGVUeXBlID09PSAzIC8qIE5vZGUuVEVYVF9OT0RFICovKSB7XG4gICAgICAvLyBJZiB3ZSBvbmx5IGhhdmUgYSBzaW5nbGUgdGV4dCBub2RlIGJldHdlZW4gdGhlIG1hcmtlcnMsIHdlIGNhbiBqdXN0XG4gICAgICAvLyBzZXQgaXRzIHZhbHVlLCByYXRoZXIgdGhhbiByZXBsYWNpbmcgaXQuXG4gICAgICAvLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBDYW4gd2UganVzdCBjaGVjayBpZiB0aGlzLnZhbHVlIGlzIHByaW1pdGl2ZT9cbiAgICAgIChub2RlIGFzIFRleHQpLmRhdGEgPSB2YWx1ZSBhcyBzdHJpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX19jb21taXROb2RlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSkpKTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlOiBUZW1wbGF0ZVJlc3VsdCk6IHZvaWQge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5vcHRpb25zLnRlbXBsYXRlRmFjdG9yeSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMudmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZUluc3RhbmNlICYmXG4gICAgICAgIHRoaXMudmFsdWUudGVtcGxhdGUgPT09IHRlbXBsYXRlKSB7XG4gICAgICB0aGlzLnZhbHVlLnVwZGF0ZSh2YWx1ZS52YWx1ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNYWtlIHN1cmUgd2UgcHJvcGFnYXRlIHRoZSB0ZW1wbGF0ZSBwcm9jZXNzb3IgZnJvbSB0aGUgVGVtcGxhdGVSZXN1bHRcbiAgICAgIC8vIHNvIHRoYXQgd2UgdXNlIGl0cyBzeW50YXggZXh0ZW5zaW9uLCBldGMuIFRoZSB0ZW1wbGF0ZSBmYWN0b3J5IGNvbWVzXG4gICAgICAvLyBmcm9tIHRoZSByZW5kZXIgZnVuY3Rpb24gb3B0aW9ucyBzbyB0aGF0IGl0IGNhbiBjb250cm9sIHRlbXBsYXRlXG4gICAgICAvLyBjYWNoaW5nIGFuZCBwcmVwcm9jZXNzaW5nLlxuICAgICAgY29uc3QgaW5zdGFuY2UgPVxuICAgICAgICAgIG5ldyBUZW1wbGF0ZUluc3RhbmNlKHRlbXBsYXRlLCB2YWx1ZS5wcm9jZXNzb3IsIHRoaXMub3B0aW9ucyk7XG4gICAgICBjb25zdCBmcmFnbWVudCA9IGluc3RhbmNlLl9jbG9uZSgpO1xuICAgICAgaW5zdGFuY2UudXBkYXRlKHZhbHVlLnZhbHVlcyk7XG4gICAgICB0aGlzLl9fY29tbWl0Tm9kZShmcmFnbWVudCk7XG4gICAgICB0aGlzLnZhbHVlID0gaW5zdGFuY2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfX2NvbW1pdEl0ZXJhYmxlKHZhbHVlOiBJdGVyYWJsZTx1bmtub3duPik6IHZvaWQge1xuICAgIC8vIEZvciBhbiBJdGVyYWJsZSwgd2UgY3JlYXRlIGEgbmV3IEluc3RhbmNlUGFydCBwZXIgaXRlbSwgdGhlbiBzZXQgaXRzXG4gICAgLy8gdmFsdWUgdG8gdGhlIGl0ZW0uIFRoaXMgaXMgYSBsaXR0bGUgYml0IG9mIG92ZXJoZWFkIGZvciBldmVyeSBpdGVtIGluXG4gICAgLy8gYW4gSXRlcmFibGUsIGJ1dCBpdCBsZXRzIHVzIHJlY3Vyc2UgZWFzaWx5IGFuZCBlZmZpY2llbnRseSB1cGRhdGUgQXJyYXlzXG4gICAgLy8gb2YgVGVtcGxhdGVSZXN1bHRzIHRoYXQgd2lsbCBiZSBjb21tb25seSByZXR1cm5lZCBmcm9tIGV4cHJlc3Npb25zIGxpa2U6XG4gICAgLy8gYXJyYXkubWFwKChpKSA9PiBodG1sYCR7aX1gKSwgYnkgcmV1c2luZyBleGlzdGluZyBUZW1wbGF0ZUluc3RhbmNlcy5cblxuICAgIC8vIElmIF92YWx1ZSBpcyBhbiBhcnJheSwgdGhlbiB0aGUgcHJldmlvdXMgcmVuZGVyIHdhcyBvZiBhblxuICAgIC8vIGl0ZXJhYmxlIGFuZCBfdmFsdWUgd2lsbCBjb250YWluIHRoZSBOb2RlUGFydHMgZnJvbSB0aGUgcHJldmlvdXNcbiAgICAvLyByZW5kZXIuIElmIF92YWx1ZSBpcyBub3QgYW4gYXJyYXksIGNsZWFyIHRoaXMgcGFydCBhbmQgbWFrZSBhIG5ld1xuICAgIC8vIGFycmF5IGZvciBOb2RlUGFydHMuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlID0gW107XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLy8gTGV0cyB1cyBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IGl0ZW1zIHdlIHN0YW1wZWQgc28gd2UgY2FuIGNsZWFyIGxlZnRvdmVyXG4gICAgLy8gaXRlbXMgZnJvbSBhIHByZXZpb3VzIHJlbmRlclxuICAgIGNvbnN0IGl0ZW1QYXJ0cyA9IHRoaXMudmFsdWUgYXMgTm9kZVBhcnRbXTtcbiAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICBsZXQgaXRlbVBhcnQ6IE5vZGVQYXJ0fHVuZGVmaW5lZDtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xuICAgICAgLy8gVHJ5IHRvIHJldXNlIGFuIGV4aXN0aW5nIHBhcnRcbiAgICAgIGl0ZW1QYXJ0ID0gaXRlbVBhcnRzW3BhcnRJbmRleF07XG5cbiAgICAgIC8vIElmIG5vIGV4aXN0aW5nIHBhcnQsIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICAgIGlmIChpdGVtUGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGl0ZW1QYXJ0ID0gbmV3IE5vZGVQYXJ0KHRoaXMub3B0aW9ucyk7XG4gICAgICAgIGl0ZW1QYXJ0cy5wdXNoKGl0ZW1QYXJ0KTtcbiAgICAgICAgaWYgKHBhcnRJbmRleCA9PT0gMCkge1xuICAgICAgICAgIGl0ZW1QYXJ0LmFwcGVuZEludG9QYXJ0KHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1QYXJ0Lmluc2VydEFmdGVyUGFydChpdGVtUGFydHNbcGFydEluZGV4IC0gMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpdGVtUGFydC5zZXRWYWx1ZShpdGVtKTtcbiAgICAgIGl0ZW1QYXJ0LmNvbW1pdCgpO1xuICAgICAgcGFydEluZGV4Kys7XG4gICAgfVxuXG4gICAgaWYgKHBhcnRJbmRleCA8IGl0ZW1QYXJ0cy5sZW5ndGgpIHtcbiAgICAgIC8vIFRydW5jYXRlIHRoZSBwYXJ0cyBhcnJheSBzbyBfdmFsdWUgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgIGl0ZW1QYXJ0cy5sZW5ndGggPSBwYXJ0SW5kZXg7XG4gICAgICB0aGlzLmNsZWFyKGl0ZW1QYXJ0ICYmIGl0ZW1QYXJ0LmVuZE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKHN0YXJ0Tm9kZTogTm9kZSA9IHRoaXMuc3RhcnROb2RlKSB7XG4gICAgcmVtb3ZlTm9kZXMoXG4gICAgICAgIHRoaXMuc3RhcnROb2RlLnBhcmVudE5vZGUhLCBzdGFydE5vZGUubmV4dFNpYmxpbmchLCB0aGlzLmVuZE5vZGUpO1xuICB9XG59XG5cbi8qKlxuICogSW1wbGVtZW50cyBhIGJvb2xlYW4gYXR0cmlidXRlLCByb3VnaGx5IGFzIGRlZmluZWQgaW4gdGhlIEhUTUxcbiAqIHNwZWNpZmljYXRpb24uXG4gKlxuICogSWYgdGhlIHZhbHVlIGlzIHRydXRoeSwgdGhlbiB0aGUgYXR0cmlidXRlIGlzIHByZXNlbnQgd2l0aCBhIHZhbHVlIG9mXG4gKiAnJy4gSWYgdGhlIHZhbHVlIGlzIGZhbHNleSwgdGhlIGF0dHJpYnV0ZSBpcyByZW1vdmVkLlxuICovXG5leHBvcnQgY2xhc3MgQm9vbGVhbkF0dHJpYnV0ZVBhcnQgaW1wbGVtZW50cyBQYXJ0IHtcbiAgcmVhZG9ubHkgZWxlbWVudDogRWxlbWVudDtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICByZWFkb25seSBzdHJpbmdzOiBSZWFkb25seUFycmF5PHN0cmluZz47XG4gIHZhbHVlOiB1bmtub3duID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIF9fcGVuZGluZ1ZhbHVlOiB1bmtub3duID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIG5hbWU6IHN0cmluZywgc3RyaW5nczogUmVhZG9ubHlBcnJheTxzdHJpbmc+KSB7XG4gICAgaWYgKHN0cmluZ3MubGVuZ3RoICE9PSAyIHx8IHN0cmluZ3NbMF0gIT09ICcnIHx8IHN0cmluZ3NbMV0gIT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0Jvb2xlYW4gYXR0cmlidXRlcyBjYW4gb25seSBjb250YWluIGEgc2luZ2xlIGV4cHJlc3Npb24nKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbW1pdCgpIHtcbiAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy5fX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9fcGVuZGluZ1ZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9ICEhdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgfVxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gIH1cbn1cblxuLyoqXG4gKiBTZXRzIGF0dHJpYnV0ZSB2YWx1ZXMgZm9yIFByb3BlcnR5UGFydHMsIHNvIHRoYXQgdGhlIHZhbHVlIGlzIG9ubHkgc2V0IG9uY2VcbiAqIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzIGZvciBhIHByb3BlcnR5LlxuICpcbiAqIElmIGFuIGV4cHJlc3Npb24gY29udHJvbHMgdGhlIHdob2xlIHByb3BlcnR5IHZhbHVlLCB0aGVuIHRoZSB2YWx1ZSBpcyBzaW1wbHlcbiAqIGFzc2lnbmVkIHRvIHRoZSBwcm9wZXJ0eSB1bmRlciBjb250cm9sLiBJZiB0aGVyZSBhcmUgc3RyaW5nIGxpdGVyYWxzIG9yXG4gKiBtdWx0aXBsZSBleHByZXNzaW9ucywgdGhlbiB0aGUgc3RyaW5ncyBhcmUgZXhwcmVzc2lvbnMgYXJlIGludGVycG9sYXRlZCBpbnRvXG4gKiBhIHN0cmluZyBmaXJzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb3BlcnR5Q29tbWl0dGVyIGV4dGVuZHMgQXR0cmlidXRlQ29tbWl0dGVyIHtcbiAgcmVhZG9ubHkgc2luZ2xlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIG5hbWU6IHN0cmluZywgc3RyaW5nczogUmVhZG9ubHlBcnJheTxzdHJpbmc+KSB7XG4gICAgc3VwZXIoZWxlbWVudCwgbmFtZSwgc3RyaW5ncyk7XG4gICAgdGhpcy5zaW5nbGUgPVxuICAgICAgICAoc3RyaW5ncy5sZW5ndGggPT09IDIgJiYgc3RyaW5nc1swXSA9PT0gJycgJiYgc3RyaW5nc1sxXSA9PT0gJycpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9jcmVhdGVQYXJ0KCk6IFByb3BlcnR5UGFydCB7XG4gICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVBhcnQodGhpcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldFZhbHVlKCkge1xuICAgIGlmICh0aGlzLnNpbmdsZSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFydHNbMF0udmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5fZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIGNvbW1pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXJ0eSkge1xuICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgKHRoaXMuZWxlbWVudCBhcyBhbnkpW3RoaXMubmFtZV0gPSB0aGlzLl9nZXRWYWx1ZSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7fVxuXG4vLyBEZXRlY3QgZXZlbnQgbGlzdGVuZXIgb3B0aW9ucyBzdXBwb3J0LiBJZiB0aGUgYGNhcHR1cmVgIHByb3BlcnR5IGlzIHJlYWRcbi8vIGZyb20gdGhlIG9wdGlvbnMgb2JqZWN0LCB0aGVuIG9wdGlvbnMgYXJlIHN1cHBvcnRlZC4gSWYgbm90LCB0aGVuIHRoZSB0aHJpZFxuLy8gYXJndW1lbnQgdG8gYWRkL3JlbW92ZUV2ZW50TGlzdGVuZXIgaXMgaW50ZXJwcmV0ZWQgYXMgdGhlIGJvb2xlYW4gY2FwdHVyZVxuLy8gdmFsdWUgc28gd2Ugc2hvdWxkIG9ubHkgcGFzcyB0aGUgYGNhcHR1cmVgIHByb3BlcnR5LlxubGV0IGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA9IGZhbHNlO1xuXG50cnkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGdldCBjYXB0dXJlKCkge1xuICAgICAgZXZlbnRPcHRpb25zU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zIGFzIGFueSwgb3B0aW9ucyk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zIGFzIGFueSwgb3B0aW9ucyk7XG59IGNhdGNoIChfZSkge1xufVxuXG5cbnR5cGUgRXZlbnRIYW5kbGVyV2l0aE9wdGlvbnMgPVxuICAgIEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QmUGFydGlhbDxBZGRFdmVudExpc3RlbmVyT3B0aW9ucz47XG5leHBvcnQgY2xhc3MgRXZlbnRQYXJ0IGltcGxlbWVudHMgUGFydCB7XG4gIHJlYWRvbmx5IGVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHJlYWRvbmx5IGV2ZW50TmFtZTogc3RyaW5nO1xuICByZWFkb25seSBldmVudENvbnRleHQ/OiBFdmVudFRhcmdldDtcbiAgdmFsdWU6IHVuZGVmaW5lZHxFdmVudEhhbmRsZXJXaXRoT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfX29wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucztcbiAgcHJpdmF0ZSBfX3BlbmRpbmdWYWx1ZTogdW5kZWZpbmVkfEV2ZW50SGFuZGxlcldpdGhPcHRpb25zID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIHJlYWRvbmx5IF9fYm91bmRIYW5kbGVFdmVudDogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50LCBldmVudE5hbWU6IHN0cmluZywgZXZlbnRDb250ZXh0PzogRXZlbnRUYXJnZXQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgIHRoaXMuZXZlbnRDb250ZXh0ID0gZXZlbnRDb250ZXh0O1xuICAgIHRoaXMuX19ib3VuZEhhbmRsZUV2ZW50ID0gKGUpID0+IHRoaXMuaGFuZGxlRXZlbnQoZSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogdW5kZWZpbmVkfEV2ZW50SGFuZGxlcldpdGhPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgY29tbWl0KCkge1xuICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLl9fcGVuZGluZ1ZhbHVlKSkge1xuICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSBub0NoYW5nZSBhcyBFdmVudEhhbmRsZXJXaXRoT3B0aW9ucztcbiAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19wZW5kaW5nVmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3TGlzdGVuZXIgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgIGNvbnN0IG9sZExpc3RlbmVyID0gdGhpcy52YWx1ZTtcbiAgICBjb25zdCBzaG91bGRSZW1vdmVMaXN0ZW5lciA9IG5ld0xpc3RlbmVyID09IG51bGwgfHxcbiAgICAgICAgb2xkTGlzdGVuZXIgIT0gbnVsbCAmJlxuICAgICAgICAgICAgKG5ld0xpc3RlbmVyLmNhcHR1cmUgIT09IG9sZExpc3RlbmVyLmNhcHR1cmUgfHxcbiAgICAgICAgICAgICBuZXdMaXN0ZW5lci5vbmNlICE9PSBvbGRMaXN0ZW5lci5vbmNlIHx8XG4gICAgICAgICAgICAgbmV3TGlzdGVuZXIucGFzc2l2ZSAhPT0gb2xkTGlzdGVuZXIucGFzc2l2ZSk7XG4gICAgY29uc3Qgc2hvdWxkQWRkTGlzdGVuZXIgPVxuICAgICAgICBuZXdMaXN0ZW5lciAhPSBudWxsICYmIChvbGRMaXN0ZW5lciA9PSBudWxsIHx8IHNob3VsZFJlbW92ZUxpc3RlbmVyKTtcblxuICAgIGlmIChzaG91bGRSZW1vdmVMaXN0ZW5lcikge1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgdGhpcy5ldmVudE5hbWUsIHRoaXMuX19ib3VuZEhhbmRsZUV2ZW50LCB0aGlzLl9fb3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChzaG91bGRBZGRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5fX29wdGlvbnMgPSBnZXRPcHRpb25zKG5ld0xpc3RlbmVyKTtcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIHRoaXMuZXZlbnROYW1lLCB0aGlzLl9fYm91bmRIYW5kbGVFdmVudCwgdGhpcy5fX29wdGlvbnMpO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gbmV3TGlzdGVuZXI7XG4gICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlIGFzIEV2ZW50SGFuZGxlcldpdGhPcHRpb25zO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnZhbHVlLmNhbGwodGhpcy5ldmVudENvbnRleHQgfHwgdGhpcy5lbGVtZW50LCBldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICh0aGlzLnZhbHVlIGFzIEV2ZW50TGlzdGVuZXJPYmplY3QpLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gV2UgY29weSBvcHRpb25zIGJlY2F1c2Ugb2YgdGhlIGluY29uc2lzdGVudCBiZWhhdmlvciBvZiBicm93c2VycyB3aGVuIHJlYWRpbmdcbi8vIHRoZSB0aGlyZCBhcmd1bWVudCBvZiBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lci4gSUUxMSBkb2Vzbid0IHN1cHBvcnQgb3B0aW9uc1xuLy8gYXQgYWxsLiBDaHJvbWUgNDEgb25seSByZWFkcyBgY2FwdHVyZWAgaWYgdGhlIGFyZ3VtZW50IGlzIGFuIG9iamVjdC5cbmNvbnN0IGdldE9wdGlvbnMgPSAobzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnN8dW5kZWZpbmVkKSA9PiBvICYmXG4gICAgKGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA/XG4gICAgICAgICB7Y2FwdHVyZTogby5jYXB0dXJlLCBwYXNzaXZlOiBvLnBhc3NpdmUsIG9uY2U6IG8ub25jZX0gOlxuICAgICAgICAgby5jYXB0dXJlIGFzIEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtQYXJ0fSBmcm9tICcuL3BhcnQuanMnO1xuXG5jb25zdCBkaXJlY3RpdmVzID0gbmV3IFdlYWtNYXA8b2JqZWN0LCB0cnVlPigpO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgdHlwZSBEaXJlY3RpdmVGYWN0b3J5ID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBvYmplY3Q7XG5cbmV4cG9ydCB0eXBlIERpcmVjdGl2ZUZuID0gKHBhcnQ6IFBhcnQpID0+IHZvaWQ7XG5cbi8qKlxuICogQnJhbmRzIGEgZnVuY3Rpb24gYXMgYSBkaXJlY3RpdmUgZmFjdG9yeSBmdW5jdGlvbiBzbyB0aGF0IGxpdC1odG1sIHdpbGwgY2FsbFxuICogdGhlIGZ1bmN0aW9uIGR1cmluZyB0ZW1wbGF0ZSByZW5kZXJpbmcsIHJhdGhlciB0aGFuIHBhc3NpbmcgYXMgYSB2YWx1ZS5cbiAqXG4gKiBBIF9kaXJlY3RpdmVfIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIFBhcnQgYXMgYW4gYXJndW1lbnQuIEl0IGhhcyB0aGVcbiAqIHNpZ25hdHVyZTogYChwYXJ0OiBQYXJ0KSA9PiB2b2lkYC5cbiAqXG4gKiBBIGRpcmVjdGl2ZSBfZmFjdG9yeV8gaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFyZ3VtZW50cyBmb3IgZGF0YSBhbmRcbiAqIGNvbmZpZ3VyYXRpb24gYW5kIHJldHVybnMgYSBkaXJlY3RpdmUuIFVzZXJzIG9mIGRpcmVjdGl2ZSB1c3VhbGx5IHJlZmVyIHRvXG4gKiB0aGUgZGlyZWN0aXZlIGZhY3RvcnkgYXMgdGhlIGRpcmVjdGl2ZS4gRm9yIGV4YW1wbGUsIFwiVGhlIHJlcGVhdCBkaXJlY3RpdmVcIi5cbiAqXG4gKiBVc3VhbGx5IGEgdGVtcGxhdGUgYXV0aG9yIHdpbGwgaW52b2tlIGEgZGlyZWN0aXZlIGZhY3RvcnkgaW4gdGhlaXIgdGVtcGxhdGVcbiAqIHdpdGggcmVsZXZhbnQgYXJndW1lbnRzLCB3aGljaCB3aWxsIHRoZW4gcmV0dXJuIGEgZGlyZWN0aXZlIGZ1bmN0aW9uLlxuICpcbiAqIEhlcmUncyBhbiBleGFtcGxlIG9mIHVzaW5nIHRoZSBgcmVwZWF0KClgIGRpcmVjdGl2ZSBmYWN0b3J5IHRoYXQgdGFrZXMgYW5cbiAqIGFycmF5IGFuZCBhIGZ1bmN0aW9uIHRvIHJlbmRlciBhbiBpdGVtOlxuICpcbiAqIGBgYGpzXG4gKiBodG1sYDx1bD48JHtyZXBlYXQoaXRlbXMsIChpdGVtKSA9PiBodG1sYDxsaT4ke2l0ZW19PC9saT5gKX08L3VsPmBcbiAqIGBgYFxuICpcbiAqIFdoZW4gYHJlcGVhdGAgaXMgaW52b2tlZCwgaXQgcmV0dXJucyBhIGRpcmVjdGl2ZSBmdW5jdGlvbiB0aGF0IGNsb3NlcyBvdmVyXG4gKiBgaXRlbXNgIGFuZCB0aGUgdGVtcGxhdGUgZnVuY3Rpb24uIFdoZW4gdGhlIG91dGVyIHRlbXBsYXRlIGlzIHJlbmRlcmVkLCB0aGVcbiAqIHJldHVybiBkaXJlY3RpdmUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggdGhlIFBhcnQgZm9yIHRoZSBleHByZXNzaW9uLlxuICogYHJlcGVhdGAgdGhlbiBwZXJmb3JtcyBpdCdzIGN1c3RvbSBsb2dpYyB0byByZW5kZXIgbXVsdGlwbGUgaXRlbXMuXG4gKlxuICogQHBhcmFtIGYgVGhlIGRpcmVjdGl2ZSBmYWN0b3J5IGZ1bmN0aW9uLiBNdXN0IGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFcbiAqIGZ1bmN0aW9uIG9mIHRoZSBzaWduYXR1cmUgYChwYXJ0OiBQYXJ0KSA9PiB2b2lkYC4gVGhlIHJldHVybmVkIGZ1bmN0aW9uIHdpbGxcbiAqIGJlIGNhbGxlZCB3aXRoIHRoZSBwYXJ0IG9iamVjdC5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGltcG9ydCB7ZGlyZWN0aXZlLCBodG1sfSBmcm9tICdsaXQtaHRtbCc7XG4gKlxuICogY29uc3QgaW1tdXRhYmxlID0gZGlyZWN0aXZlKCh2KSA9PiAocGFydCkgPT4ge1xuICogICBpZiAocGFydC52YWx1ZSAhPT0gdikge1xuICogICAgIHBhcnQuc2V0VmFsdWUodilcbiAqICAgfVxuICogfSk7XG4gKi9cbmV4cG9ydCBjb25zdCBkaXJlY3RpdmUgPSA8RiBleHRlbmRzIERpcmVjdGl2ZUZhY3Rvcnk+KGY6IEYpOiBGID0+XG4gICAgKCguLi5hcmdzOiB1bmtub3duW10pID0+IHtcbiAgICAgIGNvbnN0IGQgPSBmKC4uLmFyZ3MpO1xuICAgICAgZGlyZWN0aXZlcy5zZXQoZCwgdHJ1ZSk7XG4gICAgICByZXR1cm4gZDtcbiAgICB9KSBhcyBGO1xuXG5leHBvcnQgY29uc3QgaXNEaXJlY3RpdmUgPSAobzogdW5rbm93bik6IG8gaXMgRGlyZWN0aXZlRm4gPT4ge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdmdW5jdGlvbicgJiYgZGlyZWN0aXZlcy5oYXMobyk7XG59O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbnRlcmZhY2UgTWF5YmVQb2x5ZmlsbGVkQ2UgZXh0ZW5kcyBDdXN0b21FbGVtZW50UmVnaXN0cnkge1xuICByZWFkb25seSBwb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrPzogb2JqZWN0O1xufVxuXG4vKipcbiAqIFRydWUgaWYgdGhlIGN1c3RvbSBlbGVtZW50cyBwb2x5ZmlsbCBpcyBpbiB1c2UuXG4gKi9cbmV4cG9ydCBjb25zdCBpc0NFUG9seWZpbGwgPSB3aW5kb3cuY3VzdG9tRWxlbWVudHMgIT09IHVuZGVmaW5lZCAmJlxuICAgICh3aW5kb3cuY3VzdG9tRWxlbWVudHMgYXMgTWF5YmVQb2x5ZmlsbGVkQ2UpLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2sgIT09XG4gICAgICAgIHVuZGVmaW5lZDtcblxuLyoqXG4gKiBSZXBhcmVudHMgbm9kZXMsIHN0YXJ0aW5nIGZyb20gYHN0YXJ0YCAoaW5jbHVzaXZlKSB0byBgZW5kYCAoZXhjbHVzaXZlKSxcbiAqIGludG8gYW5vdGhlciBjb250YWluZXIgKGNvdWxkIGJlIHRoZSBzYW1lIGNvbnRhaW5lciksIGJlZm9yZSBgYmVmb3JlYC4gSWZcbiAqIGBiZWZvcmVgIGlzIG51bGwsIGl0IGFwcGVuZHMgdGhlIG5vZGVzIHRvIHRoZSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCByZXBhcmVudE5vZGVzID1cbiAgICAoY29udGFpbmVyOiBOb2RlLFxuICAgICBzdGFydDogTm9kZXxudWxsLFxuICAgICBlbmQ6IE5vZGV8bnVsbCA9IG51bGwsXG4gICAgIGJlZm9yZTogTm9kZXxudWxsID0gbnVsbCk6IHZvaWQgPT4ge1xuICAgICAgd2hpbGUgKHN0YXJ0ICE9PSBlbmQpIHtcbiAgICAgICAgY29uc3QgbiA9IHN0YXJ0IS5uZXh0U2libGluZztcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShzdGFydCEsIGJlZm9yZSk7XG4gICAgICAgIHN0YXJ0ID0gbjtcbiAgICAgIH1cbiAgICB9O1xuXG4vKipcbiAqIFJlbW92ZXMgbm9kZXMsIHN0YXJ0aW5nIGZyb20gYHN0YXJ0YCAoaW5jbHVzaXZlKSB0byBgZW5kYCAoZXhjbHVzaXZlKSwgZnJvbVxuICogYGNvbnRhaW5lcmAuXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVOb2RlcyA9XG4gICAgKGNvbnRhaW5lcjogTm9kZSwgc3RhcnQ6IE5vZGV8bnVsbCwgZW5kOiBOb2RlfG51bGwgPSBudWxsKTogdm9pZCA9PiB7XG4gICAgICB3aGlsZSAoc3RhcnQgIT09IGVuZCkge1xuICAgICAgICBjb25zdCBuID0gc3RhcnQhLm5leHRTaWJsaW5nO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoc3RhcnQhKTtcbiAgICAgICAgc3RhcnQgPSBuO1xuICAgICAgfVxuICAgIH07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbi8qKlxuICogVGhlIFBhcnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBkeW5hbWljIHBhcnQgb2YgYSB0ZW1wbGF0ZSBpbnN0YW5jZSByZW5kZXJlZFxuICogYnkgbGl0LWh0bWwuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFydCB7XG4gIHJlYWRvbmx5IHZhbHVlOiB1bmtub3duO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJyZW50IHBhcnQgdmFsdWUsIGJ1dCBkb2VzIG5vdCB3cml0ZSBpdCB0byB0aGUgRE9NLlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRoYXQgd2lsbCBiZSBjb21taXR0ZWQuXG4gICAqL1xuICBzZXRWYWx1ZSh2YWx1ZTogdW5rbm93bik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENvbW1pdHMgdGhlIGN1cnJlbnQgcGFydCB2YWx1ZSwgY2F1c2luZyBpdCB0byBhY3R1YWxseSBiZSB3cml0dGVuIHRvIHRoZVxuICAgKiBET00uXG4gICAqXG4gICAqIERpcmVjdGl2ZXMgYXJlIHJ1biBhdCB0aGUgc3RhcnQgb2YgYGNvbW1pdGAsIHNvIHRoYXQgaWYgdGhleSBjYWxsXG4gICAqIGBwYXJ0LnNldFZhbHVlKC4uLilgIHN5bmNocm9ub3VzbHkgdGhhdCB2YWx1ZSB3aWxsIGJlIHVzZWQgaW4gdGhlIGN1cnJlbnRcbiAgICogY29tbWl0LCBhbmQgdGhlcmUncyBubyBuZWVkIHRvIGNhbGwgYHBhcnQuY29tbWl0KClgIHdpdGhpbiB0aGUgZGlyZWN0aXZlLlxuICAgKiBJZiBkaXJlY3RpdmVzIHNldCBhIHBhcnQgdmFsdWUgYXN5bmNocm9ub3VzbHksIHRoZW4gdGhleSBtdXN0IGNhbGxcbiAgICogYHBhcnQuY29tbWl0KClgIG1hbnVhbGx5LlxuICAgKi9cbiAgY29tbWl0KCk6IHZvaWQ7XG59XG5cbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgdGhhdCBhIHZhbHVlIHdhcyBoYW5kbGVkIGJ5IGEgZGlyZWN0aXZlIGFuZFxuICogc2hvdWxkIG5vdCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG4gKi9cbmV4cG9ydCBjb25zdCBub0NoYW5nZSA9IHt9O1xuXG4vKipcbiAqIEEgc2VudGluZWwgdmFsdWUgdGhhdCBzaWduYWxzIGEgTm9kZVBhcnQgdG8gZnVsbHkgY2xlYXIgaXRzIGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBub3RoaW5nID0ge307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmltcG9ydCB7aXNDRVBvbHlmaWxsfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQge1BhcnR9IGZyb20gJy4vcGFydC5qcyc7XG5pbXBvcnQge1JlbmRlck9wdGlvbnN9IGZyb20gJy4vcmVuZGVyLW9wdGlvbnMuanMnO1xuaW1wb3J0IHtUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi90ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuaW1wb3J0IHtpc1RlbXBsYXRlUGFydEFjdGl2ZSwgVGVtcGxhdGUsIFRlbXBsYXRlUGFydH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbi8qKlxuICogQW4gaW5zdGFuY2Ugb2YgYSBgVGVtcGxhdGVgIHRoYXQgY2FuIGJlIGF0dGFjaGVkIHRvIHRoZSBET00gYW5kIHVwZGF0ZWRcbiAqIHdpdGggbmV3IHZhbHVlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlSW5zdGFuY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IF9fcGFydHM6IEFycmF5PFBhcnR8dW5kZWZpbmVkPiA9IFtdO1xuICByZWFkb25seSBwcm9jZXNzb3I6IFRlbXBsYXRlUHJvY2Vzc29yO1xuICByZWFkb25seSBvcHRpb25zOiBSZW5kZXJPcHRpb25zO1xuICByZWFkb25seSB0ZW1wbGF0ZTogVGVtcGxhdGU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICB0ZW1wbGF0ZTogVGVtcGxhdGUsIHByb2Nlc3NvcjogVGVtcGxhdGVQcm9jZXNzb3IsXG4gICAgICBvcHRpb25zOiBSZW5kZXJPcHRpb25zKSB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICB1cGRhdGUodmFsdWVzOiBSZWFkb25seUFycmF5PHVua25vd24+KSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9fcGFydHMpIHtcbiAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZXNbaV0pO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5fX3BhcnRzKSB7XG4gICAgICBpZiAocGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcnQuY29tbWl0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2Nsb25lKCk6IERvY3VtZW50RnJhZ21lbnQge1xuICAgIC8vIFRoZXJlIGFyZSBhIG51bWJlciBvZiBzdGVwcyBpbiB0aGUgbGlmZWN5Y2xlIG9mIGEgdGVtcGxhdGUgaW5zdGFuY2Unc1xuICAgIC8vIERPTSBmcmFnbWVudDpcbiAgICAvLyAgMS4gQ2xvbmUgLSBjcmVhdGUgdGhlIGluc3RhbmNlIGZyYWdtZW50XG4gICAgLy8gIDIuIEFkb3B0IC0gYWRvcHQgaW50byB0aGUgbWFpbiBkb2N1bWVudFxuICAgIC8vICAzLiBQcm9jZXNzIC0gZmluZCBwYXJ0IG1hcmtlcnMgYW5kIGNyZWF0ZSBwYXJ0c1xuICAgIC8vICA0LiBVcGdyYWRlIC0gdXBncmFkZSBjdXN0b20gZWxlbWVudHNcbiAgICAvLyAgNS4gVXBkYXRlIC0gc2V0IG5vZGUsIGF0dHJpYnV0ZSwgcHJvcGVydHksIGV0Yy4sIHZhbHVlc1xuICAgIC8vICA2LiBDb25uZWN0IC0gY29ubmVjdCB0byB0aGUgZG9jdW1lbnQuIE9wdGlvbmFsIGFuZCBvdXRzaWRlIG9mIHRoaXNcbiAgICAvLyAgICAgbWV0aG9kLlxuICAgIC8vXG4gICAgLy8gV2UgaGF2ZSBhIGZldyBjb25zdHJhaW50cyBvbiB0aGUgb3JkZXJpbmcgb2YgdGhlc2Ugc3RlcHM6XG4gICAgLy8gICogV2UgbmVlZCB0byB1cGdyYWRlIGJlZm9yZSB1cGRhdGluZywgc28gdGhhdCBwcm9wZXJ0eSB2YWx1ZXMgd2lsbCBwYXNzXG4gICAgLy8gICAgdGhyb3VnaCBhbnkgcHJvcGVydHkgc2V0dGVycy5cbiAgICAvLyAgKiBXZSB3b3VsZCBsaWtlIHRvIHByb2Nlc3MgYmVmb3JlIHVwZ3JhZGluZyBzbyB0aGF0IHdlJ3JlIHN1cmUgdGhhdCB0aGVcbiAgICAvLyAgICBjbG9uZWQgZnJhZ21lbnQgaXMgaW5lcnQgYW5kIG5vdCBkaXN0dXJiZWQgYnkgc2VsZi1tb2RpZnlpbmcgRE9NLlxuICAgIC8vICAqIFdlIHdhbnQgY3VzdG9tIGVsZW1lbnRzIHRvIHVwZ3JhZGUgZXZlbiBpbiBkaXNjb25uZWN0ZWQgZnJhZ21lbnRzLlxuICAgIC8vXG4gICAgLy8gR2l2ZW4gdGhlc2UgY29uc3RyYWludHMsIHdpdGggZnVsbCBjdXN0b20gZWxlbWVudHMgc3VwcG9ydCB3ZSB3b3VsZFxuICAgIC8vIHByZWZlciB0aGUgb3JkZXI6IENsb25lLCBQcm9jZXNzLCBBZG9wdCwgVXBncmFkZSwgVXBkYXRlLCBDb25uZWN0XG4gICAgLy9cbiAgICAvLyBCdXQgU2FmYXJpIGRvb2VzIG5vdCBpbXBsZW1lbnQgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5I3VwZ3JhZGUsIHNvIHdlXG4gICAgLy8gY2FuIG5vdCBpbXBsZW1lbnQgdGhhdCBvcmRlciBhbmQgc3RpbGwgaGF2ZSB1cGdyYWRlLWJlZm9yZS11cGRhdGUgYW5kXG4gICAgLy8gdXBncmFkZSBkaXNjb25uZWN0ZWQgZnJhZ21lbnRzLiBTbyB3ZSBpbnN0ZWFkIHNhY3JpZmljZSB0aGVcbiAgICAvLyBwcm9jZXNzLWJlZm9yZS11cGdyYWRlIGNvbnN0cmFpbnQsIHNpbmNlIGluIEN1c3RvbSBFbGVtZW50cyB2MSBlbGVtZW50c1xuICAgIC8vIG11c3Qgbm90IG1vZGlmeSB0aGVpciBsaWdodCBET00gaW4gdGhlIGNvbnN0cnVjdG9yLiBXZSBzdGlsbCBoYXZlIGlzc3Vlc1xuICAgIC8vIHdoZW4gY28tZXhpc3Rpbmcgd2l0aCBDRXYwIGVsZW1lbnRzIGxpa2UgUG9seW1lciAxLCBhbmQgd2l0aCBwb2x5ZmlsbHNcbiAgICAvLyB0aGF0IGRvbid0IHN0cmljdGx5IGFkaGVyZSB0byB0aGUgbm8tbW9kaWZpY2F0aW9uIHJ1bGUgYmVjYXVzZSBzaGFkb3dcbiAgICAvLyBET00sIHdoaWNoIG1heSBiZSBjcmVhdGVkIGluIHRoZSBjb25zdHJ1Y3RvciwgaXMgZW11bGF0ZWQgYnkgYmVpbmcgcGxhY2VkXG4gICAgLy8gaW4gdGhlIGxpZ2h0IERPTS5cbiAgICAvL1xuICAgIC8vIFRoZSByZXN1bHRpbmcgb3JkZXIgaXMgb24gbmF0aXZlIGlzOiBDbG9uZSwgQWRvcHQsIFVwZ3JhZGUsIFByb2Nlc3MsXG4gICAgLy8gVXBkYXRlLCBDb25uZWN0LiBkb2N1bWVudC5pbXBvcnROb2RlKCkgcGVyZm9ybXMgQ2xvbmUsIEFkb3B0LCBhbmQgVXBncmFkZVxuICAgIC8vIGluIG9uZSBzdGVwLlxuICAgIC8vXG4gICAgLy8gVGhlIEN1c3RvbSBFbGVtZW50cyB2MSBwb2x5ZmlsbCBzdXBwb3J0cyB1cGdyYWRlKCksIHNvIHRoZSBvcmRlciB3aGVuXG4gICAgLy8gcG9seWZpbGxlZCBpcyB0aGUgbW9yZSBpZGVhbDogQ2xvbmUsIFByb2Nlc3MsIEFkb3B0LCBVcGdyYWRlLCBVcGRhdGUsXG4gICAgLy8gQ29ubmVjdC5cblxuICAgIGNvbnN0IGZyYWdtZW50ID0gaXNDRVBvbHlmaWxsID9cbiAgICAgICAgdGhpcy50ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIERvY3VtZW50RnJhZ21lbnQgOlxuICAgICAgICBkb2N1bWVudC5pbXBvcnROb2RlKHRoaXMudGVtcGxhdGUuZWxlbWVudC5jb250ZW50LCB0cnVlKTtcblxuICAgIGNvbnN0IHN0YWNrOiBOb2RlW10gPSBbXTtcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMudGVtcGxhdGUucGFydHM7XG4gICAgLy8gRWRnZSBuZWVkcyBhbGwgNCBwYXJhbWV0ZXJzIHByZXNlbnQ7IElFMTEgbmVlZHMgM3JkIHBhcmFtZXRlciB0byBiZSBudWxsXG4gICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihcbiAgICAgICAgZnJhZ21lbnQsXG4gICAgICAgIDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVHxURVhUfSAqLyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UpO1xuICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgIGxldCBub2RlSW5kZXggPSAwO1xuICAgIGxldCBwYXJ0OiBUZW1wbGF0ZVBhcnQ7XG4gICAgbGV0IG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAvLyBMb29wIHRocm91Z2ggYWxsIHRoZSBub2RlcyBhbmQgcGFydHMgb2YgYSB0ZW1wbGF0ZVxuICAgIHdoaWxlIChwYXJ0SW5kZXggPCBwYXJ0cy5sZW5ndGgpIHtcbiAgICAgIHBhcnQgPSBwYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgaWYgKCFpc1RlbXBsYXRlUGFydEFjdGl2ZShwYXJ0KSkge1xuICAgICAgICB0aGlzLl9fcGFydHMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIFByb2dyZXNzIHRoZSB0cmVlIHdhbGtlciB1bnRpbCB3ZSBmaW5kIG91ciBuZXh0IHBhcnQncyBub2RlLlxuICAgICAgLy8gTm90ZSB0aGF0IG11bHRpcGxlIHBhcnRzIG1heSBzaGFyZSB0aGUgc2FtZSBub2RlIChhdHRyaWJ1dGUgcGFydHNcbiAgICAgIC8vIG9uIGEgc2luZ2xlIGVsZW1lbnQpLCBzbyB0aGlzIGxvb3AgbWF5IG5vdCBydW4gYXQgYWxsLlxuICAgICAgd2hpbGUgKG5vZGVJbmRleCA8IHBhcnQuaW5kZXgpIHtcbiAgICAgICAgbm9kZUluZGV4Kys7XG4gICAgICAgIGlmIChub2RlIS5ub2RlTmFtZSA9PT0gJ1RFTVBMQVRFJykge1xuICAgICAgICAgIHN0YWNrLnB1c2gobm9kZSEpO1xuICAgICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IChub2RlIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQpLmNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChub2RlID0gd2Fsa2VyLm5leHROb2RlKCkpID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gV2UndmUgZXhoYXVzdGVkIHRoZSBjb250ZW50IGluc2lkZSBhIG5lc3RlZCB0ZW1wbGF0ZSBlbGVtZW50LlxuICAgICAgICAgIC8vIEJlY2F1c2Ugd2Ugc3RpbGwgaGF2ZSBwYXJ0cyAodGhlIG91dGVyIGZvci1sb29wKSwgd2Uga25vdzpcbiAgICAgICAgICAvLyAtIFRoZXJlIGlzIGEgdGVtcGxhdGUgaW4gdGhlIHN0YWNrXG4gICAgICAgICAgLy8gLSBUaGUgd2Fsa2VyIHdpbGwgZmluZCBhIG5leHROb2RlIG91dHNpZGUgdGhlIHRlbXBsYXRlXG4gICAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gc3RhY2sucG9wKCkhO1xuICAgICAgICAgIG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBXZSd2ZSBhcnJpdmVkIGF0IG91ciBwYXJ0J3Mgbm9kZS5cbiAgICAgIGlmIChwYXJ0LnR5cGUgPT09ICdub2RlJykge1xuICAgICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wcm9jZXNzb3IuaGFuZGxlVGV4dEV4cHJlc3Npb24odGhpcy5vcHRpb25zKTtcbiAgICAgICAgcGFydC5pbnNlcnRBZnRlck5vZGUobm9kZSEucHJldmlvdXNTaWJsaW5nISk7XG4gICAgICAgIHRoaXMuX19wYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fX3BhcnRzLnB1c2goLi4udGhpcy5wcm9jZXNzb3IuaGFuZGxlQXR0cmlidXRlRXhwcmVzc2lvbnMoXG4gICAgICAgICAgICBub2RlIGFzIEVsZW1lbnQsIHBhcnQubmFtZSwgcGFydC5zdHJpbmdzLCB0aGlzLm9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICAgIHBhcnRJbmRleCsrO1xuICAgIH1cblxuICAgIGlmIChpc0NFUG9seWZpbGwpIHtcbiAgICAgIGRvY3VtZW50LmFkb3B0Tm9kZShmcmFnbWVudCk7XG4gICAgICBjdXN0b21FbGVtZW50cy51cGdyYWRlKGZyYWdtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmltcG9ydCB7VGVtcGxhdGVSZXN1bHR9IGZyb20gJy4vdGVtcGxhdGUtcmVzdWx0LmpzJztcblxuLyoqXG4gKiBBbiBleHByZXNzaW9uIG1hcmtlciB3aXRoIGVtYmVkZGVkIHVuaXF1ZSBrZXkgdG8gYXZvaWQgY29sbGlzaW9uIHdpdGhcbiAqIHBvc3NpYmxlIHRleHQgaW4gdGVtcGxhdGVzLlxuICovXG5leHBvcnQgY29uc3QgbWFya2VyID0gYHt7bGl0LSR7U3RyaW5nKE1hdGgucmFuZG9tKCkpLnNsaWNlKDIpfX19YDtcblxuLyoqXG4gKiBBbiBleHByZXNzaW9uIG1hcmtlciB1c2VkIHRleHQtcG9zaXRpb25zLCBtdWx0aS1iaW5kaW5nIGF0dHJpYnV0ZXMsIGFuZFxuICogYXR0cmlidXRlcyB3aXRoIG1hcmt1cC1saWtlIHRleHQgdmFsdWVzLlxuICovXG5leHBvcnQgY29uc3Qgbm9kZU1hcmtlciA9IGA8IS0tJHttYXJrZXJ9LS0+YDtcblxuZXhwb3J0IGNvbnN0IG1hcmtlclJlZ2V4ID0gbmV3IFJlZ0V4cChgJHttYXJrZXJ9fCR7bm9kZU1hcmtlcn1gKTtcblxuLyoqXG4gKiBTdWZmaXggYXBwZW5kZWQgdG8gYWxsIGJvdW5kIGF0dHJpYnV0ZSBuYW1lcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGJvdW5kQXR0cmlidXRlU3VmZml4ID0gJyRsaXQkJztcblxuLyoqXG4gKiBBbiB1cGRhdGVhYmxlIFRlbXBsYXRlIHRoYXQgdHJhY2tzIHRoZSBsb2NhdGlvbiBvZiBkeW5hbWljIHBhcnRzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUge1xuICByZWFkb25seSBwYXJ0czogVGVtcGxhdGVQYXJ0W10gPSBbXTtcbiAgcmVhZG9ubHkgZWxlbWVudDogSFRNTFRlbXBsYXRlRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0LCBlbGVtZW50OiBIVE1MVGVtcGxhdGVFbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIGNvbnN0IG5vZGVzVG9SZW1vdmU6IE5vZGVbXSA9IFtdO1xuICAgIGNvbnN0IHN0YWNrOiBOb2RlW10gPSBbXTtcbiAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlIG51bGxcbiAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgICAgICBlbGVtZW50LmNvbnRlbnQsXG4gICAgICAgIDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVHxURVhUfSAqLyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8vIEtlZXBzIHRyYWNrIG9mIHRoZSBsYXN0IGluZGV4IGFzc29jaWF0ZWQgd2l0aCBhIHBhcnQuIFdlIHRyeSB0byBkZWxldGVcbiAgICAvLyB1bm5lY2Vzc2FyeSBub2RlcywgYnV0IHdlIG5ldmVyIHdhbnQgdG8gYXNzb2NpYXRlIHR3byBkaWZmZXJlbnQgcGFydHNcbiAgICAvLyB0byB0aGUgc2FtZSBpbmRleC4gVGhleSBtdXN0IGhhdmUgYSBjb25zdGFudCBub2RlIGJldHdlZW4uXG4gICAgbGV0IGxhc3RQYXJ0SW5kZXggPSAwO1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgIGNvbnN0IHtzdHJpbmdzLCB2YWx1ZXM6IHtsZW5ndGh9fSA9IHJlc3VsdDtcbiAgICB3aGlsZSAocGFydEluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjb25zdCBub2RlID0gd2Fsa2VyLm5leHROb2RlKCkgYXMgRWxlbWVudCB8IENvbW1lbnQgfCBUZXh0IHwgbnVsbDtcbiAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIC8vIFdlJ3ZlIGV4aGF1c3RlZCB0aGUgY29udGVudCBpbnNpZGUgYSBuZXN0ZWQgdGVtcGxhdGUgZWxlbWVudC5cbiAgICAgICAgLy8gQmVjYXVzZSB3ZSBzdGlsbCBoYXZlIHBhcnRzICh0aGUgb3V0ZXIgZm9yLWxvb3ApLCB3ZSBrbm93OlxuICAgICAgICAvLyAtIFRoZXJlIGlzIGEgdGVtcGxhdGUgaW4gdGhlIHN0YWNrXG4gICAgICAgIC8vIC0gVGhlIHdhbGtlciB3aWxsIGZpbmQgYSBuZXh0Tm9kZSBvdXRzaWRlIHRoZSB0ZW1wbGF0ZVxuICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBzdGFjay5wb3AoKSE7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaW5kZXgrKztcblxuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogTm9kZS5FTEVNRU5UX05PREUgKi8pIHtcbiAgICAgICAgaWYgKChub2RlIGFzIEVsZW1lbnQpLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSAobm9kZSBhcyBFbGVtZW50KS5hdHRyaWJ1dGVzO1xuICAgICAgICAgIGNvbnN0IHtsZW5ndGh9ID0gYXR0cmlidXRlcztcbiAgICAgICAgICAvLyBQZXJcbiAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTmFtZWROb2RlTWFwLFxuICAgICAgICAgIC8vIGF0dHJpYnV0ZXMgYXJlIG5vdCBndWFyYW50ZWVkIHRvIGJlIHJldHVybmVkIGluIGRvY3VtZW50IG9yZGVyLlxuICAgICAgICAgIC8vIEluIHBhcnRpY3VsYXIsIEVkZ2UvSUUgY2FuIHJldHVybiB0aGVtIG91dCBvZiBvcmRlciwgc28gd2UgY2Fubm90XG4gICAgICAgICAgLy8gYXNzdW1lIGEgY29ycmVzcG9uZGVuY2UgYmV0d2VlbiBwYXJ0IGluZGV4IGFuZCBhdHRyaWJ1dGUgaW5kZXguXG4gICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZW5kc1dpdGgoYXR0cmlidXRlc1tpXS5uYW1lLCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCkpIHtcbiAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2hpbGUgKGNvdW50LS0gPiAwKSB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIHRlbXBsYXRlIGxpdGVyYWwgc2VjdGlvbiBsZWFkaW5nIHVwIHRvIHRoZSBmaXJzdFxuICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiBpbiB0aGlzIGF0dHJpYnV0ZVxuICAgICAgICAgICAgY29uc3Qgc3RyaW5nRm9yUGFydCA9IHN0cmluZ3NbcGFydEluZGV4XTtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHN0cmluZ0ZvclBhcnQpIVsyXTtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBBbGwgYm91bmQgYXR0cmlidXRlcyBoYXZlIGhhZCBhIHN1ZmZpeCBhZGRlZCBpblxuICAgICAgICAgICAgLy8gVGVtcGxhdGVSZXN1bHQjZ2V0SFRNTCB0byBvcHQgb3V0IG9mIHNwZWNpYWwgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBoYW5kbGluZy4gVG8gbG9vayB1cCB0aGUgYXR0cmlidXRlIHZhbHVlIHdlIGFsc28gbmVlZCB0byBhZGRcbiAgICAgICAgICAgIC8vIHRoZSBzdWZmaXguXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVMb29rdXBOYW1lID1cbiAgICAgICAgICAgICAgICBuYW1lLnRvTG93ZXJDYXNlKCkgKyBib3VuZEF0dHJpYnV0ZVN1ZmZpeDtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID1cbiAgICAgICAgICAgICAgICAobm9kZSBhcyBFbGVtZW50KS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTG9va3VwTmFtZSkhO1xuICAgICAgICAgICAgKG5vZGUgYXMgRWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZUxvb2t1cE5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljcyA9IGF0dHJpYnV0ZVZhbHVlLnNwbGl0KG1hcmtlclJlZ2V4KTtcbiAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7dHlwZTogJ2F0dHJpYnV0ZScsIGluZGV4LCBuYW1lLCBzdHJpbmdzOiBzdGF0aWNzfSk7XG4gICAgICAgICAgICBwYXJ0SW5kZXggKz0gc3RhdGljcy5sZW5ndGggLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKG5vZGUgYXMgRWxlbWVudCkudGFnTmFtZSA9PT0gJ1RFTVBMQVRFJykge1xuICAgICAgICAgIHN0YWNrLnB1c2gobm9kZSk7XG4gICAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gKG5vZGUgYXMgSFRNTFRlbXBsYXRlRWxlbWVudCkuY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSAzIC8qIE5vZGUuVEVYVF9OT0RFICovKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSAobm9kZSBhcyBUZXh0KS5kYXRhO1xuICAgICAgICBpZiAoZGF0YS5pbmRleE9mKG1hcmtlcikgPj0gMCkge1xuICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZSE7XG4gICAgICAgICAgY29uc3Qgc3RyaW5ncyA9IGRhdGEuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyB0ZXh0IG5vZGUgZm9yIGVhY2ggbGl0ZXJhbCBzZWN0aW9uXG4gICAgICAgICAgLy8gVGhlc2Ugbm9kZXMgYXJlIGFsc28gdXNlZCBhcyB0aGUgbWFya2VycyBmb3Igbm9kZSBwYXJ0c1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpbnNlcnQ6IE5vZGU7XG4gICAgICAgICAgICBsZXQgcyA9IHN0cmluZ3NbaV07XG4gICAgICAgICAgICBpZiAocyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgaW5zZXJ0ID0gY3JlYXRlTWFya2VyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXguZXhlYyhzKTtcbiAgICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBudWxsICYmIGVuZHNXaXRoKG1hdGNoWzJdLCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCkpIHtcbiAgICAgICAgICAgICAgICBzID0gcy5zbGljZSgwLCBtYXRjaC5pbmRleCkgKyBtYXRjaFsxXSArXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoWzJdLnNsaWNlKDAsIC1ib3VuZEF0dHJpYnV0ZVN1ZmZpeC5sZW5ndGgpICsgbWF0Y2hbM107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5zZXJ0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGluc2VydCwgbm9kZSk7XG4gICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goe3R5cGU6ICdub2RlJywgaW5kZXg6ICsraW5kZXh9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gSWYgdGhlcmUncyBubyB0ZXh0LCB3ZSBtdXN0IGluc2VydCBhIGNvbW1lbnQgdG8gbWFyayBvdXIgcGxhY2UuXG4gICAgICAgICAgLy8gRWxzZSwgd2UgY2FuIHRydXN0IGl0IHdpbGwgc3RpY2sgYXJvdW5kIGFmdGVyIGNsb25pbmcuXG4gICAgICAgICAgaWYgKHN0cmluZ3NbbGFzdEluZGV4XSA9PT0gJycpIHtcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgICAgbm9kZXNUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAobm9kZSBhcyBUZXh0KS5kYXRhID0gc3RyaW5nc1tsYXN0SW5kZXhdO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBXZSBoYXZlIGEgcGFydCBmb3IgZWFjaCBtYXRjaCBmb3VuZFxuICAgICAgICAgIHBhcnRJbmRleCArPSBsYXN0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBOb2RlLkNPTU1FTlRfTk9ERSAqLykge1xuICAgICAgICBpZiAoKG5vZGUgYXMgQ29tbWVudCkuZGF0YSA9PT0gbWFya2VyKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlITtcbiAgICAgICAgICAvLyBBZGQgYSBuZXcgbWFya2VyIG5vZGUgdG8gYmUgdGhlIHN0YXJ0Tm9kZSBvZiB0aGUgUGFydCBpZiBhbnkgb2ZcbiAgICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGFyZSB0cnVlOlxuICAgICAgICAgIC8vICAqIFdlIGRvbid0IGhhdmUgYSBwcmV2aW91c1NpYmxpbmdcbiAgICAgICAgICAvLyAgKiBUaGUgcHJldmlvdXNTaWJsaW5nIGlzIGFscmVhZHkgdGhlIHN0YXJ0IG9mIGEgcHJldmlvdXMgcGFydFxuICAgICAgICAgIGlmIChub2RlLnByZXZpb3VzU2libGluZyA9PT0gbnVsbCB8fCBpbmRleCA9PT0gbGFzdFBhcnRJbmRleCkge1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsYXN0UGFydEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHt0eXBlOiAnbm9kZScsIGluZGV4fSk7XG4gICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIG5leHRTaWJsaW5nLCBrZWVwIHRoaXMgbm9kZSBzbyB3ZSBoYXZlIGFuIGVuZC5cbiAgICAgICAgICAvLyBFbHNlLCB3ZSBjYW4gcmVtb3ZlIGl0IHRvIHNhdmUgZnV0dXJlIGNvc3RzLlxuICAgICAgICAgIGlmIChub2RlLm5leHRTaWJsaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAobm9kZSBhcyBDb21tZW50KS5kYXRhID0gJyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGVzVG9SZW1vdmUucHVzaChub2RlKTtcbiAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgd2hpbGUgKChpID0gKG5vZGUgYXMgQ29tbWVudCkuZGF0YS5pbmRleE9mKG1hcmtlciwgaSArIDEpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIENvbW1lbnQgbm9kZSBoYXMgYSBiaW5kaW5nIG1hcmtlciBpbnNpZGUsIG1ha2UgYW4gaW5hY3RpdmUgcGFydFxuICAgICAgICAgICAgLy8gVGhlIGJpbmRpbmcgd29uJ3Qgd29yaywgYnV0IHN1YnNlcXVlbnQgYmluZGluZ3Mgd2lsbFxuICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGNvbnNpZGVyIHdoZXRoZXIgaXQncyBldmVuIHdvcnRoIGl0IHRvXG4gICAgICAgICAgICAvLyBtYWtlIGJpbmRpbmdzIGluIGNvbW1lbnRzIHdvcmtcbiAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7dHlwZTogJ25vZGUnLCBpbmRleDogLTF9KTtcbiAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSB0ZXh0IGJpbmRpbmcgbm9kZXMgYWZ0ZXIgdGhlIHdhbGsgdG8gbm90IGRpc3R1cmIgdGhlIFRyZWVXYWxrZXJcbiAgICBmb3IgKGNvbnN0IG4gb2Ygbm9kZXNUb1JlbW92ZSkge1xuICAgICAgbi5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZChuKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZW5kc1dpdGggPSAoc3RyOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RyLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGg7XG4gIHJldHVybiBpbmRleCA+PSAwICYmIHN0ci5zbGljZShpbmRleCkgPT09IHN1ZmZpeDtcbn07XG5cbi8qKlxuICogQSBwbGFjZWhvbGRlciBmb3IgYSBkeW5hbWljIGV4cHJlc3Npb24gaW4gYW4gSFRNTCB0ZW1wbGF0ZS5cbiAqXG4gKiBUaGVyZSBhcmUgdHdvIGJ1aWx0LWluIHBhcnQgdHlwZXM6IEF0dHJpYnV0ZVBhcnQgYW5kIE5vZGVQYXJ0LiBOb2RlUGFydHNcbiAqIGFsd2F5cyByZXByZXNlbnQgYSBzaW5nbGUgZHluYW1pYyBleHByZXNzaW9uLCB3aGlsZSBBdHRyaWJ1dGVQYXJ0cyBtYXlcbiAqIHJlcHJlc2VudCBhcyBtYW55IGV4cHJlc3Npb25zIGFyZSBjb250YWluZWQgaW4gdGhlIGF0dHJpYnV0ZS5cbiAqXG4gKiBBIFRlbXBsYXRlJ3MgcGFydHMgYXJlIG11dGFibGUsIHNvIHBhcnRzIGNhbiBiZSByZXBsYWNlZCBvciBtb2RpZmllZFxuICogKHBvc3NpYmx5IHRvIGltcGxlbWVudCBkaWZmZXJlbnQgdGVtcGxhdGUgc2VtYW50aWNzKS4gVGhlIGNvbnRyYWN0IGlzIHRoYXRcbiAqIHBhcnRzIGNhbiBvbmx5IGJlIHJlcGxhY2VkLCBub3QgcmVtb3ZlZCwgYWRkZWQgb3IgcmVvcmRlcmVkLCBhbmQgcGFydHMgbXVzdFxuICogYWx3YXlzIGNvbnN1bWUgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIHZhbHVlcyBpbiB0aGVpciBgdXBkYXRlKClgIG1ldGhvZC5cbiAqXG4gKiBUT0RPKGp1c3RpbmZhZ25hbmkpOiBUaGF0IHJlcXVpcmVtZW50IGlzIGEgbGl0dGxlIGZyYWdpbGUuIEFcbiAqIFRlbXBsYXRlSW5zdGFuY2UgY291bGQgaW5zdGVhZCBiZSBtb3JlIGNhcmVmdWwgYWJvdXQgd2hpY2ggdmFsdWVzIGl0IGdpdmVzXG4gKiB0byBQYXJ0LnVwZGF0ZSgpLlxuICovXG5leHBvcnQgdHlwZSBUZW1wbGF0ZVBhcnQgPSB7XG4gIHJlYWRvbmx5IHR5cGU6ICdub2RlJyxcbiAgaW5kZXg6IG51bWJlclxufXx7cmVhZG9ubHkgdHlwZTogJ2F0dHJpYnV0ZScsIGluZGV4OiBudW1iZXIsIHJlYWRvbmx5IG5hbWU6IHN0cmluZywgcmVhZG9ubHkgc3RyaW5nczogUmVhZG9ubHlBcnJheTxzdHJpbmc+fTtcblxuZXhwb3J0IGNvbnN0IGlzVGVtcGxhdGVQYXJ0QWN0aXZlID0gKHBhcnQ6IFRlbXBsYXRlUGFydCkgPT4gcGFydC5pbmRleCAhPT0gLTE7XG5cbi8vIEFsbG93cyBgZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJylgIHRvIGJlIHJlbmFtZWQgZm9yIGFcbi8vIHNtYWxsIG1hbnVhbCBzaXplLXNhdmluZ3MuXG5leHBvcnQgY29uc3QgY3JlYXRlTWFya2VyID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG5cbi8qKlxuICogVGhpcyByZWdleCBleHRyYWN0cyB0aGUgYXR0cmlidXRlIG5hbWUgcHJlY2VkaW5nIGFuIGF0dHJpYnV0ZS1wb3NpdGlvblxuICogZXhwcmVzc2lvbi4gSXQgZG9lcyB0aGlzIGJ5IG1hdGNoaW5nIHRoZSBzeW50YXggYWxsb3dlZCBmb3IgYXR0cmlidXRlc1xuICogYWdhaW5zdCB0aGUgc3RyaW5nIGxpdGVyYWwgZGlyZWN0bHkgcHJlY2VkaW5nIHRoZSBleHByZXNzaW9uLCBhc3N1bWluZyB0aGF0XG4gKiB0aGUgZXhwcmVzc2lvbiBpcyBpbiBhbiBhdHRyaWJ1dGUtdmFsdWUgcG9zaXRpb24uXG4gKlxuICogU2VlIGF0dHJpYnV0ZXMgaW4gdGhlIEhUTUwgc3BlYzpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNlbGVtZW50cy1hdHRyaWJ1dGVzXG4gKlxuICogXCIgXFx4MDlcXHgwYVxceDBjXFx4MGRcIiBhcmUgSFRNTCBzcGFjZSBjaGFyYWN0ZXJzOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L2luZnJhc3RydWN0dXJlLmh0bWwjc3BhY2UtY2hhcmFjdGVyc1xuICpcbiAqIFwiXFwwLVxceDFGXFx4N0YtXFx4OUZcIiBhcmUgVW5pY29kZSBjb250cm9sIGNoYXJhY3RlcnMsIHdoaWNoIGluY2x1ZGVzIGV2ZXJ5XG4gKiBzcGFjZSBjaGFyYWN0ZXIgZXhjZXB0IFwiIFwiLlxuICpcbiAqIFNvIGFuIGF0dHJpYnV0ZSBpczpcbiAqICAqIFRoZSBuYW1lOiBhbnkgY2hhcmFjdGVyIGV4Y2VwdCBhIGNvbnRyb2wgY2hhcmFjdGVyLCBzcGFjZSBjaGFyYWN0ZXIsICgnKSxcbiAqICAgIChcIiksIFwiPlwiLCBcIj1cIiwgb3IgXCIvXCJcbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieSBcIj1cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5OlxuICogICAgKiBBbnkgY2hhcmFjdGVyIGV4Y2VwdCBzcGFjZSwgKCcpLCAoXCIpLCBcIjxcIiwgXCI+XCIsIFwiPVwiLCAoYCksIG9yXG4gKiAgICAqIChcIikgdGhlbiBhbnkgbm9uLShcIiksIG9yXG4gKiAgICAqICgnKSB0aGVuIGFueSBub24tKCcpXG4gKi9cbmV4cG9ydCBjb25zdCBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4ID1cbiAgICAvKFsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKShbXlxcMC1cXHgxRlxceDdGLVxceDlGIFwiJz49L10rKShbIFxceDA5XFx4MGFcXHgwY1xceDBkXSo9WyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qKD86W14gXFx4MDlcXHgwYVxceDBjXFx4MGRcIidgPD49XSp8XCJbXlwiXSp8J1teJ10qKSkkLztcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtyZXBhcmVudE5vZGVzfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQge1RlbXBsYXRlUHJvY2Vzc29yfSBmcm9tICcuL3RlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5pbXBvcnQge2JvdW5kQXR0cmlidXRlU3VmZml4LCBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LCBtYXJrZXIsIG5vZGVNYXJrZXJ9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuXG4vKipcbiAqIFRoZSByZXR1cm4gdHlwZSBvZiBgaHRtbGAsIHdoaWNoIGhvbGRzIGEgVGVtcGxhdGUgYW5kIHRoZSB2YWx1ZXMgZnJvbVxuICogaW50ZXJwb2xhdGVkIGV4cHJlc3Npb25zLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVSZXN1bHQge1xuICByZWFkb25seSBzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheTtcbiAgcmVhZG9ubHkgdmFsdWVzOiBSZWFkb25seUFycmF5PHVua25vd24+O1xuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHByb2Nlc3NvcjogVGVtcGxhdGVQcm9jZXNzb3I7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgdmFsdWVzOiBSZWFkb25seUFycmF5PHVua25vd24+LFxuICAgICAgdHlwZTogc3RyaW5nLCBwcm9jZXNzb3I6IFRlbXBsYXRlUHJvY2Vzc29yKSB7XG4gICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgb2YgSFRNTCB1c2VkIHRvIGNyZWF0ZSBhIGA8dGVtcGxhdGU+YCBlbGVtZW50LlxuICAgKi9cbiAgZ2V0SFRNTCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGwgPSB0aGlzLnN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGxldCBpc0NvbW1lbnRCaW5kaW5nID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgcyA9IHRoaXMuc3RyaW5nc1tpXTtcbiAgICAgIC8vIEZvciBlYWNoIGJpbmRpbmcgd2Ugd2FudCB0byBkZXRlcm1pbmUgdGhlIGtpbmQgb2YgbWFya2VyIHRvIGluc2VydFxuICAgICAgLy8gaW50byB0aGUgdGVtcGxhdGUgc291cmNlIGJlZm9yZSBpdCdzIHBhcnNlZCBieSB0aGUgYnJvd3NlcidzIEhUTUxcbiAgICAgIC8vIHBhcnNlci4gVGhlIG1hcmtlciB0eXBlIGlzIGJhc2VkIG9uIHdoZXRoZXIgdGhlIGV4cHJlc3Npb24gaXMgaW4gYW5cbiAgICAgIC8vIGF0dHJpYnV0ZSwgdGV4dCwgb3IgY29tbWVudCBwb2lzaXRpb24uXG4gICAgICAvLyAgICogRm9yIG5vZGUtcG9zaXRpb24gYmluZGluZ3Mgd2UgaW5zZXJ0IGEgY29tbWVudCB3aXRoIHRoZSBtYXJrZXJcbiAgICAgIC8vICAgICBzZW50aW5lbCBhcyBpdHMgdGV4dCBjb250ZW50LCBsaWtlIDwhLS17e2xpdC1ndWlkfX0tLT4uXG4gICAgICAvLyAgICogRm9yIGF0dHJpYnV0ZSBiaW5kaW5ncyB3ZSBpbnNlcnQganVzdCB0aGUgbWFya2VyIHNlbnRpbmVsIGZvciB0aGVcbiAgICAgIC8vICAgICBmaXJzdCBiaW5kaW5nLCBzbyB0aGF0IHdlIHN1cHBvcnQgdW5xdW90ZWQgYXR0cmlidXRlIGJpbmRpbmdzLlxuICAgICAgLy8gICAgIFN1YnNlcXVlbnQgYmluZGluZ3MgY2FuIHVzZSBhIGNvbW1lbnQgbWFya2VyIGJlY2F1c2UgbXVsdGktYmluZGluZ1xuICAgICAgLy8gICAgIGF0dHJpYnV0ZXMgbXVzdCBiZSBxdW90ZWQuXG4gICAgICAvLyAgICogRm9yIGNvbW1lbnQgYmluZGluZ3Mgd2UgaW5zZXJ0IGp1c3QgdGhlIG1hcmtlciBzZW50aW5lbCBzbyB3ZSBkb24ndFxuICAgICAgLy8gICAgIGNsb3NlIHRoZSBjb21tZW50LlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBzY2FucyB0aGUgdGVtcGxhdGUgc291cmNlLCBidXQgaXMgKm5vdCogYW4gSFRNTFxuICAgICAgLy8gcGFyc2VyLiBXZSBkb24ndCBuZWVkIHRvIHRyYWNrIHRoZSB0cmVlIHN0cnVjdHVyZSBvZiB0aGUgSFRNTCwgb25seVxuICAgICAgLy8gd2hldGhlciBhIGJpbmRpbmcgaXMgaW5zaWRlIGEgY29tbWVudCwgYW5kIGlmIG5vdCwgaWYgaXQgYXBwZWFycyB0byBiZVxuICAgICAgLy8gdGhlIGZpcnN0IGJpbmRpbmcgaW4gYW4gYXR0cmlidXRlLlxuICAgICAgY29uc3QgY29tbWVudE9wZW4gPSBzLmxhc3RJbmRleE9mKCc8IS0tJyk7XG4gICAgICAvLyBXZSdyZSBpbiBjb21tZW50IHBvc2l0aW9uIGlmIHdlIGhhdmUgYSBjb21tZW50IG9wZW4gd2l0aCBubyBmb2xsb3dpbmdcbiAgICAgIC8vIGNvbW1lbnQgY2xvc2UuIEJlY2F1c2UgPC0tIGNhbiBhcHBlYXIgaW4gYW4gYXR0cmlidXRlIHZhbHVlIHRoZXJlIGNhblxuICAgICAgLy8gYmUgZmFsc2UgcG9zaXRpdmVzLlxuICAgICAgaXNDb21tZW50QmluZGluZyA9IChjb21tZW50T3BlbiA+IC0xIHx8IGlzQ29tbWVudEJpbmRpbmcpICYmXG4gICAgICAgICAgcy5pbmRleE9mKCctLT4nLCBjb21tZW50T3BlbiArIDEpID09PSAtMTtcbiAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB3ZSBoYXZlIGFuIGF0dHJpYnV0ZS1saWtlIHNlcXVlbmNlIHByZWNlZWRpbmcgdGhlXG4gICAgICAvLyBleHByZXNzaW9uLiBUaGlzIGNhbiBtYXRjaCBcIm5hbWU9dmFsdWVcIiBsaWtlIHN0cnVjdHVyZXMgaW4gdGV4dCxcbiAgICAgIC8vIGNvbW1lbnRzLCBhbmQgYXR0cmlidXRlIHZhbHVlcywgc28gdGhlcmUgY2FuIGJlIGZhbHNlLXBvc2l0aXZlcy5cbiAgICAgIGNvbnN0IGF0dHJpYnV0ZU1hdGNoID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHMpO1xuICAgICAgaWYgKGF0dHJpYnV0ZU1hdGNoID09PSBudWxsKSB7XG4gICAgICAgIC8vIFdlJ3JlIG9ubHkgaW4gdGhpcyBicmFuY2ggaWYgd2UgZG9uJ3QgaGF2ZSBhIGF0dHJpYnV0ZS1saWtlXG4gICAgICAgIC8vIHByZWNlZWRpbmcgc2VxdWVuY2UuIEZvciBjb21tZW50cywgdGhpcyBndWFyZHMgYWdhaW5zdCB1bnVzdWFsXG4gICAgICAgIC8vIGF0dHJpYnV0ZSB2YWx1ZXMgbGlrZSA8ZGl2IGZvbz1cIjwhLS0keydiYXInfVwiPi4gQ2FzZXMgbGlrZVxuICAgICAgICAvLyA8IS0tIGZvbz0keydiYXInfS0tPiBhcmUgaGFuZGxlZCBjb3JyZWN0bHkgaW4gdGhlIGF0dHJpYnV0ZSBicmFuY2hcbiAgICAgICAgLy8gYmVsb3cuXG4gICAgICAgIGh0bWwgKz0gcyArIChpc0NvbW1lbnRCaW5kaW5nID8gbWFya2VyIDogbm9kZU1hcmtlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3IgYXR0cmlidXRlcyB3ZSB1c2UganVzdCBhIG1hcmtlciBzZW50aW5lbCwgYW5kIGFsc28gYXBwZW5kIGFcbiAgICAgICAgLy8gJGxpdCQgc3VmZml4IHRvIHRoZSBuYW1lIHRvIG9wdC1vdXQgb2YgYXR0cmlidXRlLXNwZWNpZmljIHBhcnNpbmdcbiAgICAgICAgLy8gdGhhdCBJRSBhbmQgRWRnZSBkbyBmb3Igc3R5bGUgYW5kIGNlcnRhaW4gU1ZHIGF0dHJpYnV0ZXMuXG4gICAgICAgIGh0bWwgKz0gcy5zdWJzdHIoMCwgYXR0cmlidXRlTWF0Y2guaW5kZXgpICsgYXR0cmlidXRlTWF0Y2hbMV0gK1xuICAgICAgICAgICAgYXR0cmlidXRlTWF0Y2hbMl0gKyBib3VuZEF0dHJpYnV0ZVN1ZmZpeCArIGF0dHJpYnV0ZU1hdGNoWzNdICtcbiAgICAgICAgICAgIG1hcmtlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaHRtbCArPSB0aGlzLnN0cmluZ3NbbF07XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRUZW1wbGF0ZUVsZW1lbnQoKTogSFRNTFRlbXBsYXRlRWxlbWVudCB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IHRoaXMuZ2V0SFRNTCgpO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxufVxuXG4vKipcbiAqIEEgVGVtcGxhdGVSZXN1bHQgZm9yIFNWRyBmcmFnbWVudHMuXG4gKlxuICogVGhpcyBjbGFzcyB3cmFwcyBIVE1MIGluIGFuIGA8c3ZnPmAgdGFnIGluIG9yZGVyIHRvIHBhcnNlIGl0cyBjb250ZW50cyBpbiB0aGVcbiAqIFNWRyBuYW1lc3BhY2UsIHRoZW4gbW9kaWZpZXMgdGhlIHRlbXBsYXRlIHRvIHJlbW92ZSB0aGUgYDxzdmc+YCB0YWcgc28gdGhhdFxuICogY2xvbmVzIG9ubHkgY29udGFpbmVyIHRoZSBvcmlnaW5hbCBmcmFnbWVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNWR1RlbXBsYXRlUmVzdWx0IGV4dGVuZHMgVGVtcGxhdGVSZXN1bHQge1xuICBnZXRIVE1MKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8c3ZnPiR7c3VwZXIuZ2V0SFRNTCgpfTwvc3ZnPmA7XG4gIH1cblxuICBnZXRUZW1wbGF0ZUVsZW1lbnQoKTogSFRNTFRlbXBsYXRlRWxlbWVudCB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBzdXBlci5nZXRUZW1wbGF0ZUVsZW1lbnQoKTtcbiAgICBjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudDtcbiAgICBjb25zdCBzdmdFbGVtZW50ID0gY29udGVudC5maXJzdENoaWxkITtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKHN2Z0VsZW1lbnQpO1xuICAgIHJlcGFyZW50Tm9kZXMoY29udGVudCwgc3ZnRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtyZW1vdmVOb2Rlc30gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHtOb2RlUGFydH0gZnJvbSAnLi9wYXJ0cy5qcyc7XG5pbXBvcnQge1JlbmRlck9wdGlvbnN9IGZyb20gJy4vcmVuZGVyLW9wdGlvbnMuanMnO1xuaW1wb3J0IHt0ZW1wbGF0ZUZhY3Rvcnl9IGZyb20gJy4vdGVtcGxhdGUtZmFjdG9yeS5qcyc7XG5pbXBvcnQge1RlbXBsYXRlUmVzdWx0fSBmcm9tICcuL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5cbmV4cG9ydCBjb25zdCBwYXJ0cyA9IG5ldyBXZWFrTWFwPE5vZGUsIE5vZGVQYXJ0PigpO1xuXG4vKipcbiAqIFJlbmRlcnMgYSB0ZW1wbGF0ZSB0byBhIGNvbnRhaW5lci5cbiAqXG4gKiBUbyB1cGRhdGUgYSBjb250YWluZXIgd2l0aCBuZXcgdmFsdWVzLCByZWV2YWx1YXRlIHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIGFuZFxuICogY2FsbCBgcmVuZGVyYCB3aXRoIHRoZSBuZXcgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSByZXN1bHQgYSBUZW1wbGF0ZVJlc3VsdCBjcmVhdGVkIGJ5IGV2YWx1YXRpbmcgYSB0ZW1wbGF0ZSB0YWcgbGlrZVxuICogICAgIGBodG1sYCBvciBgc3ZnYC5cbiAqIEBwYXJhbSBjb250YWluZXIgQSBET00gcGFyZW50IHRvIHJlbmRlciB0by4gVGhlIGVudGlyZSBjb250ZW50cyBhcmUgZWl0aGVyXG4gKiAgICAgcmVwbGFjZWQsIG9yIGVmZmljaWVudGx5IHVwZGF0ZWQgaWYgdGhlIHNhbWUgcmVzdWx0IHR5cGUgd2FzIHByZXZpb3VzXG4gKiAgICAgcmVuZGVyZWQgdGhlcmUuXG4gKiBAcGFyYW0gb3B0aW9ucyBSZW5kZXJPcHRpb25zIGZvciB0aGUgZW50aXJlIHJlbmRlciB0cmVlIHJlbmRlcmVkIHRvIHRoaXNcbiAqICAgICBjb250YWluZXIuIFJlbmRlciBvcHRpb25zIG11c3QgKm5vdCogY2hhbmdlIGJldHdlZW4gcmVuZGVycyB0byB0aGUgc2FtZVxuICogICAgIGNvbnRhaW5lciwgYXMgdGhvc2UgY2hhbmdlcyB3aWxsIG5vdCBlZmZlY3QgcHJldmlvdXNseSByZW5kZXJlZCBET00uXG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXIgPVxuICAgIChyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0LFxuICAgICBjb250YWluZXI6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudCxcbiAgICAgb3B0aW9ucz86IFBhcnRpYWw8UmVuZGVyT3B0aW9ucz4pID0+IHtcbiAgICAgIGxldCBwYXJ0ID0gcGFydHMuZ2V0KGNvbnRhaW5lcik7XG4gICAgICBpZiAocGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlbW92ZU5vZGVzKGNvbnRhaW5lciwgY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICBwYXJ0cy5zZXQoY29udGFpbmVyLCBwYXJ0ID0gbmV3IE5vZGVQYXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUZhY3RvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICBwYXJ0LmFwcGVuZEludG8oY29udGFpbmVyKTtcbiAgICAgIH1cbiAgICAgIHBhcnQuc2V0VmFsdWUocmVzdWx0KTtcbiAgICAgIHBhcnQuY29tbWl0KCk7XG4gICAgfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuaW1wb3J0IHttYXJrZXIsIFRlbXBsYXRlfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHR5cGUgdGhhdCBjcmVhdGVzIGEgVGVtcGxhdGUgZnJvbSBhIFRlbXBsYXRlUmVzdWx0LlxuICpcbiAqIFRoaXMgaXMgYSBob29rIGludG8gdGhlIHRlbXBsYXRlLWNyZWF0aW9uIHByb2Nlc3MgZm9yIHJlbmRlcmluZyB0aGF0XG4gKiByZXF1aXJlcyBzb21lIG1vZGlmaWNhdGlvbiBvZiB0ZW1wbGF0ZXMgYmVmb3JlIHRoZXkncmUgdXNlZCwgbGlrZSBTaGFkeUNTUyxcbiAqIHdoaWNoIG11c3QgYWRkIGNsYXNzZXMgdG8gZWxlbWVudHMgYW5kIHJlbW92ZSBzdHlsZXMuXG4gKlxuICogVGVtcGxhdGVzIHNob3VsZCBiZSBjYWNoZWQgYXMgYWdncmVzc2l2ZWx5IGFzIHBvc3NpYmxlLCBzbyB0aGF0IG1hbnlcbiAqIFRlbXBsYXRlUmVzdWx0cyBwcm9kdWNlZCBmcm9tIHRoZSBzYW1lIGV4cHJlc3Npb24gb25seSBkbyB0aGUgd29yayBvZlxuICogY3JlYXRpbmcgdGhlIFRlbXBsYXRlIHRoZSBmaXJzdCB0aW1lLlxuICpcbiAqIFRlbXBsYXRlcyBhcmUgdXN1YWxseSBjYWNoZWQgYnkgVGVtcGxhdGVSZXN1bHQuc3RyaW5ncyBhbmRcbiAqIFRlbXBsYXRlUmVzdWx0LnR5cGUsIGJ1dCBtYXkgYmUgY2FjaGVkIGJ5IG90aGVyIGtleXMgaWYgdGhpcyBmdW5jdGlvblxuICogbW9kaWZpZXMgdGhlIHRlbXBsYXRlLlxuICpcbiAqIE5vdGUgdGhhdCBjdXJyZW50bHkgVGVtcGxhdGVGYWN0b3JpZXMgbXVzdCBub3QgYWRkLCByZW1vdmUsIG9yIHJlb3JkZXJcbiAqIGV4cHJlc3Npb25zLCBiZWNhdXNlIHRoZXJlIGlzIG5vIHdheSB0byBkZXNjcmliZSBzdWNoIGEgbW9kaWZpY2F0aW9uXG4gKiB0byByZW5kZXIoKSBzbyB0aGF0IHZhbHVlcyBhcmUgaW50ZXJwb2xhdGVkIHRvIHRoZSBjb3JyZWN0IHBsYWNlIGluIHRoZVxuICogdGVtcGxhdGUgaW5zdGFuY2VzLlxuICovXG5leHBvcnQgdHlwZSBUZW1wbGF0ZUZhY3RvcnkgPSAocmVzdWx0OiBUZW1wbGF0ZVJlc3VsdCkgPT4gVGVtcGxhdGU7XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgVGVtcGxhdGVGYWN0b3J5IHdoaWNoIGNhY2hlcyBUZW1wbGF0ZXMga2V5ZWQgb25cbiAqIHJlc3VsdC50eXBlIGFuZCByZXN1bHQuc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlRmFjdG9yeShyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0KSB7XG4gIGxldCB0ZW1wbGF0ZUNhY2hlID0gdGVtcGxhdGVDYWNoZXMuZ2V0KHJlc3VsdC50eXBlKTtcbiAgaWYgKHRlbXBsYXRlQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHRlbXBsYXRlQ2FjaGUgPSB7XG4gICAgICBzdHJpbmdzQXJyYXk6IG5ldyBXZWFrTWFwPFRlbXBsYXRlU3RyaW5nc0FycmF5LCBUZW1wbGF0ZT4oKSxcbiAgICAgIGtleVN0cmluZzogbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlPigpXG4gICAgfTtcbiAgICB0ZW1wbGF0ZUNhY2hlcy5zZXQocmVzdWx0LnR5cGUsIHRlbXBsYXRlQ2FjaGUpO1xuICB9XG5cbiAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuZ2V0KHJlc3VsdC5zdHJpbmdzKTtcbiAgaWYgKHRlbXBsYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICAvLyBJZiB0aGUgVGVtcGxhdGVTdHJpbmdzQXJyYXkgaXMgbmV3LCBnZW5lcmF0ZSBhIGtleSBmcm9tIHRoZSBzdHJpbmdzXG4gIC8vIFRoaXMga2V5IGlzIHNoYXJlZCBiZXR3ZWVuIGFsbCB0ZW1wbGF0ZXMgd2l0aCBpZGVudGljYWwgY29udGVudFxuICBjb25zdCBrZXkgPSByZXN1bHQuc3RyaW5ncy5qb2luKG1hcmtlcik7XG5cbiAgLy8gQ2hlY2sgaWYgd2UgYWxyZWFkeSBoYXZlIGEgVGVtcGxhdGUgZm9yIHRoaXMga2V5XG4gIHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuZ2V0KGtleSk7XG4gIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBub3Qgc2VlbiB0aGlzIGtleSBiZWZvcmUsIGNyZWF0ZSBhIG5ldyBUZW1wbGF0ZVxuICAgIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCwgcmVzdWx0LmdldFRlbXBsYXRlRWxlbWVudCgpKTtcbiAgICAvLyBDYWNoZSB0aGUgVGVtcGxhdGUgZm9yIHRoaXMga2V5XG4gICAgdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuc2V0KGtleSwgdGVtcGxhdGUpO1xuICB9XG5cbiAgLy8gQ2FjaGUgYWxsIGZ1dHVyZSBxdWVyaWVzIGZvciB0aGlzIFRlbXBsYXRlU3RyaW5nc0FycmF5XG4gIHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LnNldChyZXN1bHQuc3RyaW5ncywgdGVtcGxhdGUpO1xuICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbi8qKlxuICogVGhlIGZpcnN0IGFyZ3VtZW50IHRvIEpTIHRlbXBsYXRlIHRhZ3MgcmV0YWluIGlkZW50aXR5IGFjcm9zcyBtdWx0aXBsZVxuICogY2FsbHMgdG8gYSB0YWcgZm9yIHRoZSBzYW1lIGxpdGVyYWwsIHNvIHdlIGNhbiBjYWNoZSB3b3JrIGRvbmUgcGVyIGxpdGVyYWxcbiAqIGluIGEgTWFwLlxuICpcbiAqIFNhZmFyaSBjdXJyZW50bHkgaGFzIGEgYnVnIHdoaWNoIG9jY2FzaW9uYWxseSBicmVha3MgdGhpcyBiZWhhdmlvdXIsIHNvIHdlXG4gKiBuZWVkIHRvIGNhY2hlIHRoZSBUZW1wbGF0ZSBhdCB0d28gbGV2ZWxzLiBXZSBmaXJzdCBjYWNoZSB0aGVcbiAqIFRlbXBsYXRlU3RyaW5nc0FycmF5LCBhbmQgaWYgdGhhdCBmYWlscywgd2UgY2FjaGUgYSBrZXkgY29uc3RydWN0ZWQgYnlcbiAqIGpvaW5pbmcgdGhlIHN0cmluZ3MgYXJyYXkuXG4gKi9cbmV4cG9ydCB0eXBlIHRlbXBsYXRlQ2FjaGUgPSB7XG4gIHJlYWRvbmx5IHN0cmluZ3NBcnJheTogV2Vha01hcDxUZW1wbGF0ZVN0cmluZ3NBcnJheSwgVGVtcGxhdGU+OyAvL1xuICByZWFkb25seSBrZXlTdHJpbmc6IE1hcDxzdHJpbmcsIFRlbXBsYXRlPjtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZUNhY2hlcyA9IG5ldyBNYXA8c3RyaW5nLCB0ZW1wbGF0ZUNhY2hlPigpO1xuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpdC1odG1sLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFzZSA9PiBjbGFzcyBleHRlbmRzIGJhc2Uge1xyXG5cdHJlbmRlcigpIHt9XHJcblxyXG5cdGFzeW5jIGludmFsaWRhdGUoaW5zdGFudCkge1xyXG5cdFx0aWYgKCF0aGlzLm5lZWRzUmVuZGVyKSB7XHJcblx0XHRcdGlmICghaW5zdGFudCkge1xyXG5cdFx0XHRcdHRoaXMubmVlZHNSZW5kZXIgPSB0cnVlXHJcblx0XHRcdFx0YXdhaXQgMFxyXG5cdFx0XHRcdHRoaXMubmVlZHNSZW5kZXIgPSBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHRcdHJlbmRlcih0aGlzLnJlbmRlcigpLCB0aGlzLnNoYWRvd1Jvb3QpXHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG4vLyBpbXBvcnQgeyByZW5kZXIgfSBmcm9tICdsaXQtaHRtbCdcclxuaW1wb3J0IE1haW4gZnJvbSAnLi4vbWFpbi5qcydcclxuXHJcbmZ1bmN0aW9uIGFjdGlvbkNyZWF0b3IoYWN0aW9uKSB7XHJcblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKVxyXG5cdFx0c3RhdGUgPSBhY3Rpb24oc3RhdGUsIC4uLmFyZ3VtZW50cylcclxuXHRcdHN0b3JlLnNldFN0YXRlKHN0YXRlKVxyXG5cdH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gVGVzdCBjb2RlXHJcblxyXG5leHBvcnQgY29uc3QgY291bnRBZGQgPSBhY3Rpb25DcmVhdG9yKHN0YXRlID0+IHtcclxuXHRzdGF0ZS5pbmZvLmNvdW50ID09PSB1bmRlZmluZWRcclxuXHRcdD8gc3RhdGUuaW5mby5jb3VudCA9IDBcclxuXHRcdDogc3RhdGUuaW5mby5jb3VudCsrXHJcblx0cmV0dXJuIHN0YXRlXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF0YSA9IGFjdGlvbkNyZWF0b3Ioc3RhdGUgPT4ge1xyXG5cdGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKClcclxuXHJcblx0ZGIuY29sbGVjdGlvbihgVEVTVGApLmdldCgpLnRoZW4ocXVlcnlTbmFwc2hvdCA9PiB7XHJcblx0XHRxdWVyeVNuYXBzaG90LmZvckVhY2goZG9jID0+IHtcclxuXHRcdFx0Y29uc29sZS5pbmZvKGRvYy5pZCwgZG9jLmRhdGEoKSlcclxuXHRcdH0pXHJcblx0fSlcclxuXHRcclxuXHRyZXR1cm4gc3RhdGVcclxufSlcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IExvZ2luXHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwID0gYWN0aW9uQ3JlYXRvcigoc3RhdGUsIF9pZCAsX3B3ZCkgPT4ge1xyXG5cdGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXHJcblxyXG5cdGlmKCF4aHIpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihgWEhSIO2YuOy2nCDrtojqsIBgKVxyXG5cdH1cclxuXHJcblx0eGhyLm9wZW4oYFBPU1RgLCBgaHR0cHM6Ly91cy1jZW50cmFsMS10YWV1ay1wcm9qZWN0LmNsb3VkZnVuY3Rpb25zLm5ldC9pc0FkbWluYClcclxuXHR4aHIuc2V0UmVxdWVzdEhlYWRlcihgQ29udGVudC10eXBlYCwgYGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZGApXHJcblx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoYHJlYWR5c3RhdGVjaGFuZ2VgLCAoKSA9PiB7XHJcblx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgPT09IHhoci5ET05FKSB7XHJcblx0XHRcdGlmICh4aHIuc3RhdHVzID09PSAyMDAgfHwgeGhyLnN0YXR1cyA9PT0gMjAxKSB7XHJcblx0XHRcdFx0ZmlyZWJhc2UuYXV0aCgpLnNpZ25JbkFub255bW91c2x5KCkuY2F0Y2goZXJyb3IgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZVxyXG5cdFx0XHRcdFx0Y29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZVxyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdG1vdmVNYWluUGFnZShKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpLnJlc3VsdClcclxuXHRcdFx0XHRzdGF0ZS5sb2dpbiA9IHRydWVcclxuXHRcdFx0XHRzdG9yZS5zZXRTdGF0ZShzdGF0ZSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pXHJcblx0eGhyLnNlbmQoYGlkPSR7X2lkfSZwYXNzd29yZD0ke19wd2R9YClcclxuXHJcblxyXG5cdHJldHVybiBzdGF0ZVxyXG59KVxyXG5cclxuZnVuY3Rpb24gbW92ZU1haW5QYWdlKGlzTG9naW4gPSBmYWxzZSkge1xyXG5cdGlmIChpc0xvZ2luKSB7XHJcblx0XHRNYWluLnJlbmRlclBhZ2UoYGFwcC1tYWluYCwgYC9gKVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1vdmVQYWdlID0gYWN0aW9uQ3JlYXRvcigoc3RhdGUsIHBhZ2UpID0+IHtcclxuXHRNYWluLnJlbmRlclBhZ2UoYCR7cGFnZX0tbWFpbmAsIHBhZ2UpXHJcblx0cmV0dXJuIHN0YXRlXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW4gPSBhY3Rpb25DcmVhdG9yKHN0YXRlID0+IHtcclxuXHRmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKHVzZXIgPT4ge1xyXG5cdFx0aWYgKHVzZXIpIHtcclxuXHRcdFx0Y29uc3QgaXNBbm9ueW1vdXMgPSB1c2VyLmlzQW5vbnltb3VzXHJcblx0XHRcdGNvbnN0IHVpZCA9IHVzZXIudWlkXHJcblxyXG5cdFx0XHRjb25zb2xlLmluZm8oaXNBbm9ueW1vdXMsIHVpZClcclxuXHRcdFx0c3RhdGUubG9naW4gPSB0cnVlXHJcblx0XHRcdHN0b3JlLnNldFN0YXRlKHN0YXRlKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3RhdGUubG9naW4gPSBmYWxzZVxyXG5cdFx0XHRzdG9yZS5zZXRTdGF0ZShzdGF0ZSlcclxuXHRcdH1cclxuXHR9KVxyXG5cclxuXHRyZXR1cm4gc3RhdGVcclxufSlcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFJvdXRlclxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckh0bWwgPSBhY3Rpb25DcmVhdG9yKChzdGF0ZSwgaHRtbCkgPT4ge1xyXG5cdGNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGFwcC1tYWluYCkuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGBtYWluYClcclxuXHJcblx0YXBwLmlubmVySFRNTCA9IGh0bWxcclxuXHJcblx0cmV0dXJuIHN0YXRlXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0ID0gYWN0aW9uQ3JlYXRvcigoc3RhdGUsIHVybCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdGNvbnN0IHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXHJcblx0cmVxLm9wZW4oYEdFVGAsIHVybClcclxuXHRyZXEuc2VuZCgpXHJcbiAgXHJcblx0cmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChyZXEucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xyXG5cdFx0XHRpZiAocmVxLnN0YXR1cyA9PT0gMjAwKSB7XHJcblx0XHRcdFx0cmVzb2x2ZShyZXEucmVzcG9uc2UpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVqZWN0KHJlcS5zdGF0dXNUZXh0KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59KSlcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEV4YW1wbGVcclxuXHJcbi8vIGV4cG9ydCBjb25zdCByb3V0ZSA9IGFjdGlvbkNyZWF0b3IoKHN0YXRlLCBfcm91dGUpID0+IHtcclxuLy8gXHRzdGF0ZS5yb3V0ZSA9IF9yb3V0ZVxyXG5cclxuLy8gXHRyZXR1cm4gc3RhdGVcclxuLy8gfSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGQgPSBhY3Rpb25DcmVhdG9yKChzdGF0ZSwgdG9kbykgPT4ge1xyXG5cdHN0YXRlLnRvZG9MaXN0LnB1c2goe1xyXG5cdFx0dGl0bGU6IHRvZG8sXHJcblx0XHRjb21wbGV0ZWQ6IGZhbHNlLFxyXG5cdFx0aWQ6IGBpdGVtLXh4eHh4eHh4eHh4eGAucmVwbGFjZSgvW3hdL2csICgpID0+IHtcclxuXHRcdFx0Y29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDBcclxuXHJcblx0XHRcdHJldHVybiByLnRvU3RyaW5nKDE2KVxyXG5cdFx0fSksXHJcblx0fSlcclxuXHJcblx0cmV0dXJuIHN0YXRlXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlID0gYWN0aW9uQ3JlYXRvcigoc3RhdGUsIGlkKSA9PiB7XHJcblx0c3RhdGUudG9kb0xpc3QgPSBzdGF0ZS50b2RvTGlzdC5maWx0ZXIodG9kbyA9PiB0b2RvLmlkICE9PSBpZClcclxuXHJcblx0cmV0dXJuIHN0YXRlXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgdG9nZ2xlID0gYWN0aW9uQ3JlYXRvcigoc3RhdGUsIGlkKSA9PiB7XHJcblx0Y29uc3QgdG9kbyA9IHN0YXRlLnRvZG9MaXN0LmZpbmQoX3RvZG8gPT4gX3RvZG8uaWQgPT09IGlkKVxyXG5cdHRvZG8uY29tcGxldGVkID0gIXRvZG8uY29tcGxldGVkXHJcblxyXG5cdHJldHVybiBzdGF0ZVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlcGxhY2UgPSBhY3Rpb25DcmVhdG9yKChzdGF0ZSwgaWQsIHRpdGxlKSA9PiB7XHJcblx0Y29uc3QgdG9kbyA9IHN0YXRlLnRvZG9MaXN0LmZpbmQoX3RvZG8gPT4gX3RvZG8uaWQgPT09IGlkKVxyXG5cdHRvZG8udGl0bGUgPSB0aXRsZVxyXG5cclxuXHRyZXR1cm4gc3RhdGVcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVBbGwgPSBhY3Rpb25DcmVhdG9yKChzdGF0ZSwgY29tcGxldGVkKSA9PiB7XHJcblx0c3RhdGUudG9kb0xpc3QuZm9yRWFjaChfdG9kbyA9PiB7XHJcblx0XHRfdG9kby5jb21wbGV0ZWQgPSBjb21wbGV0ZWRcclxuXHR9KVxyXG5cclxuXHRyZXR1cm4gc3RhdGVcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhckNvbXBsZXRlZCA9IGFjdGlvbkNyZWF0b3Ioc3RhdGUgPT4ge1xyXG5cdHN0YXRlLnRvZG9MaXN0ID0gc3RhdGUudG9kb0xpc3QuZmlsdGVyKHRvZG8gPT4gIXRvZG8uY29tcGxldGVkKVxyXG5cclxuXHRyZXR1cm4gc3RhdGVcclxufSlcclxuIiwiaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4vcmVkdXgtemVyby5qcydcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRpbmZvOiBbXSAsIFxyXG5cdHRvZG9MaXN0OiBbXSxcclxuXHRsb2dpbjogZmFsc2UsXHJcbn1cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShpbml0aWFsU3RhdGUpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxuXHJcblxyXG52YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3RvcmUkMShpbml0aWFsU3RhdGUsIG1pZGRsZXdhcmUpIHtcclxuICAgIGlmIChpbml0aWFsU3RhdGUgPT09IHZvaWQgMCkgeyBpbml0aWFsU3RhdGUgPSB7fTsgfVxyXG4gICAgaWYgKG1pZGRsZXdhcmUgPT09IHZvaWQgMCkgeyBtaWRkbGV3YXJlID0gbnVsbDsgfVxyXG4gICAgdmFyIHN0YXRlID0gaW5pdGlhbFN0YXRlIHx8IHt9O1xyXG4gICAgdmFyIGxpc3RlbmVycyA9IFtdO1xyXG4gICAgZnVuY3Rpb24gZGlzcGF0Y2hMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYoc3RhdGUpOyB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWlkZGxld2FyZTogbWlkZGxld2FyZSxcclxuICAgICAgICBzZXRTdGF0ZTogZnVuY3Rpb24gKHVwZGF0ZSkge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IF9fYXNzaWduKHt9LCBzdGF0ZSwgKHR5cGVvZiB1cGRhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHVwZGF0ZShzdGF0ZSkgOiB1cGRhdGUpKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2hMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2goZik7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVycy5pbmRleE9mKGYpLCAxKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgICAgICBkaXNwYXRjaExpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbi8vIG1vZHVsZS5leHBvcnRzID0gY3JlYXRlU3RvcmUkMTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUkMTtcclxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1odG1sJ1xyXG5cclxuaW1wb3J0IExpdFJlbmRlciBmcm9tICcuLi9saWJzL2xpdFJlbmRlcidcclxuXHJcbmltcG9ydCAnLi9sb2dpbi1mb3JtLmpzJ1xyXG5cclxuY2xhc3MgTG9naW5NYWluIGV4dGVuZHMgTGl0UmVuZGVyKEhUTUxFbGVtZW50KSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpXHJcblxyXG5cdFx0dGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBgb3BlbmAgfSlcclxuXHJcblx0XHR0aGlzLmludmFsaWRhdGUoKVxyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIGh0bWxgIFxyXG5cdFx0JHtzdHlsZX1cclxuXHRcdDxkaXYgaWQ9XCJwYWdlTG9naW5cIj5cclxuXHRcdFx0PGxvZ2luLWZvcm0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdHlsZSA9IGh0bWxgXHJcbjxzdHlsZT5cclxuI3BhZ2VMb2dpbiB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcblx0LW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcblx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHdpZHRoOiA5NXZ3O1xyXG5cdGhlaWdodDogOTh2aDtcclxuXHRtYXJnaW46IGF1dG87XHJcbn1cclxuPC9zdHlsZT5cclxuYFxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKGBsb2dpbi1tYWluYCwgTG9naW5NYWluKVxyXG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSAnbGl0LWh0bWwnXHJcblxyXG5pbXBvcnQgTGl0UmVuZGVyIGZyb20gJy4uL2xpYnMvbGl0UmVuZGVyJ1xyXG5pbXBvcnQgeyBzaWdudXAgfSBmcm9tICcuLi9saWJzL2FjdGlvbnMnXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Gb3JtIGV4dGVuZHMgTGl0UmVuZGVyKEhUTUxFbGVtZW50KSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpXHJcblxyXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7fVxyXG5cclxuXHRcdHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogYG9wZW5gIH0pXHJcblx0XHR0aGlzLmludmFsaWRhdGUodHJ1ZSlcclxuXHR9XHJcbiAgXHJcblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcblx0XHRjb25zdCByb290ID0gdGhpcy5zaGFkb3dSb290XHJcblx0XHRjb25zdCBoYW5kbGVycyA9IHRoaXMuX2hhbmRsZXJzXHJcblxyXG5cdFx0aGFuZGxlcnMub25DbGljayA9IHRoaXMuX29uQ2xpY2suYmluZCh0aGlzKVx0XHRcdFx0XHJcblx0XHRcclxuXHRcdHJvb3QucXVlcnlTZWxlY3RvcihgLnNpZ24taW4tZm9ybS1idXR0b25gKS5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGhhbmRsZXJzLm9uQ2xpY2spXHJcblx0fVxyXG5cclxuXHRkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuXHRcdGNvbnN0IHJvb3QgPSB0aGlzLnNoYWRvd1Jvb3RcclxuXHJcblx0XHRyb290LnF1ZXJ5U2VsZWN0b3IoYC5zaWduLWluLWZvcm0tYnV0dG9uYCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCB0aGlzLl9oYW5kbGVycy5vbkNsaWNrKVxyXG5cdH1cclxuICBcclxuXHRfb25DbGljaygpIHtcclxuXHRcdGNvbnN0IGlkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoYC5zaWduLWluLWZvcm0tdXNlcm5hbWVgKS52YWx1ZVxyXG5cdFx0Y29uc3QgcHdkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoYC5zaWduLWluLWZvcm0tcGFzc3dvcmRgKS52YWx1ZVxyXG5cdFx0c2lnbnVwKGlkLCBwd2QpXHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gaHRtbGBcclxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3NyYy9jc3MvZm91bmRhdGlvbi5taW4uY3NzXCI+XHJcbiAgICAke3N0eWxlfVxyXG4gICAgPGRpdiBjbGFzcz1cInNpZ24taW4tZm9ybVwiPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cInRleHQtY2VudGVyXCI+U2lnbiBJbjwvaDQ+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInNpZ24taW4tZm9ybS11c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInNpZ24taW4tZm9ybS11c2VybmFtZVwiIGlkPVwic2lnbi1pbi1mb3JtLXVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJJRFwiLz5cclxuICAgICAgICA8bGFiZWwgZm9yPVwic2lnbi1pbi1mb3JtLXBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cInNpZ24taW4tZm9ybS1wYXNzd29yZFwiIGlkPVwic2lnbi1pbi1mb3JtLXBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQV1wiLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInNpZ24taW4tZm9ybS1idXR0b25cIj5TaWduIEluPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlID0gaHRtbGBcclxuPHN0eWxlPlxyXG4uc2lnbi1pbi1mb3JtIHtcclxuICBwYWRkaW5nOiAxcmVtIDEuNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDQ1NGY7XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxufVxyXG5cclxuLnNpZ24taW4tZm9ybSBoNCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uc2lnbi1pbi1mb3JtIGxhYmVsIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjYWRhZGFkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uc2lnbi1pbi1mb3JtIGlucHV0IHtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLnNpZ24taW4tZm9ybSBpbnB1dDpmb2N1cyB7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4uc2lnbi1pbi1mb3JtLXVzZXJuYW1lLFxyXG4uc2lnbi1pbi1mb3JtLXBhc3N3b3JkIHtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlIC40cztcclxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNHM7XHJcbn1cclxuXHJcbi5zaWduLWluLWZvcm0tYnV0dG9uIHtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZSAuNHM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjRzO1xyXG59XHJcblxyXG4uc2lnbi1pbi1mb3JtLWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YzhlZDtcclxuICBib3JkZXItY29sb3I6ICM0NGM4ZWQ7XHJcbn1cclxuPC9zdHlsZT5cclxuYFxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKGBsb2dpbi1mb3JtYCwgTG9naW5Gb3JtKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9