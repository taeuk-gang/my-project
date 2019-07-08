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
/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

console.info("main script start!");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _libs_litRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _libs_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _exam_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n<style>\nmain {\n\tdisplay: flex;\n    justify-content: center;\n    align-items: center;\n    width: 95vw;\n\theight: 95vh;\n\tmargin: auto;\n}\n</style>\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral([" \n\t\t<!-- ", "         -->\n\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"./src/css/App.css\">\n\t\t<main>\n\t\t\t<exam-element />\t\t\t\n\t\t</main>\n        "]);

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


 // import store from '../libs/store'




var AppMain =
/*#__PURE__*/
function (_LitRender) {
  _inherits(AppMain, _LitRender);

  function AppMain() {
    var _this;

    _classCallCheck(this, AppMain);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppMain).call(this));

    _this.attachShadow({
      mode: "open"
    });

    _this.invalidate();

    return _this;
  }

  _createClass(AppMain, [{
    key: "add",
    value: function add(title) {
      Object(_libs_actions__WEBPACK_IMPORTED_MODULE_2__["add"])(title);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return toggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleAll", function() { return toggleAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCompleted", function() { return clearCompleted; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);


function actionCreator(action) {
  return function () {
    var state = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getState();
    state = action.apply(void 0, [state].concat(Array.prototype.slice.call(arguments)));
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].setState(state);
  };
} // ===================================================== My Function


var countAdd = actionCreator(function (state) {
  state.info.count === undefined ? state.info.count = 0 : state.info.count++;
  return state;
}); // ===================================================== Example

var route = actionCreator(function (state, _route) {
  state.route = _route;
  return state;
});
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
/* harmony import */ var redux_zero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);

var initialState = {
  route: "",
  info: [],

  /* example */
  todoList: []
};
var store = Object(redux_zero__WEBPACK_IMPORTED_MODULE_0__["default"])(initialState);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamElement", function() { return ExamElement; });
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _libs_litRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _libs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _libs_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  <style>\n    .exam-element {\n\t\tdisplay: grid;\n\t\tgrid-auto-rows: auto auto;\n\t\theight: auto;\n\t\twidth: 300px;\t\n\t\tbackground-color: #EEEEEE;\n\t}\n\t\n\t.test-btn {\n\t\tborder: 1px solid black;\n    \tborder-bottom: 0;\n\t}\n  </style>\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t<!-- ", " -->\n\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"./src/css/exam-element.css\">\n    \t<div class=\"exam-element\">\n\t\t\t<span class=\"test-btn\">TEST: ", "</span>\n\t\t</div>\n    \t"]);

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





var ExamElement =
/*#__PURE__*/
function (_LitRender) {
  _inherits(ExamElement, _LitRender);

  function ExamElement() {
    var _this;

    _classCallCheck(this, ExamElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExamElement).call(this));
    _this._handlers = {};

    _this.attachShadow({
      mode: "open"
    });

    _this.invalidate(true);

    return _this;
  }

  _createClass(ExamElement, [{
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
    value: function _onClick() {
      Object(_libs_actions__WEBPACK_IMPORTED_MODULE_3__["countAdd"])();
      this.invalidate(true);
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), style, _libs_store__WEBPACK_IMPORTED_MODULE_2__["default"].getState().info.count);
    }
  }]);

  return ExamElement;
}(Object(_libs_litRender__WEBPACK_IMPORTED_MODULE_1__["default"])(HTMLElement));
var style = Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
customElements.define("exam-element", ExamElement);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy9zcmMvbGl0LWh0bWwudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvZGVmYXVsdC10ZW1wbGF0ZS1wcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvcGFydHMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL2RvbS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9wYXJ0LnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3RlbXBsYXRlLWluc3RhbmNlLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3RlbXBsYXRlLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3RlbXBsYXRlLXJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvdGVtcGxhdGUtZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9saXRSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtemVyby9kaXN0L3JlZHV4LXplcm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXhhbS1lbGVtZW50LmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJpbmZvIiwiQXBwTWFpbiIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJpbnZhbGlkYXRlIiwidGl0bGUiLCJhZGQiLCJodG1sIiwic3R5bGUiLCJMaXRSZW5kZXIiLCJIVE1MRWxlbWVudCIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiYmFzZSIsImluc3RhbnQiLCJuZWVkc1JlbmRlciIsInJlbmRlciIsInNoYWRvd1Jvb3QiLCJhY3Rpb25DcmVhdG9yIiwiYWN0aW9uIiwic3RhdGUiLCJzdG9yZSIsImdldFN0YXRlIiwiYXJndW1lbnRzIiwic2V0U3RhdGUiLCJjb3VudEFkZCIsImNvdW50IiwidW5kZWZpbmVkIiwicm91dGUiLCJfcm91dGUiLCJ0b2RvIiwidG9kb0xpc3QiLCJwdXNoIiwiY29tcGxldGVkIiwiaWQiLCJyZXBsYWNlIiwiciIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInJlbW92ZSIsImZpbHRlciIsInRvZ2dsZSIsImZpbmQiLCJfdG9kbyIsInRvZ2dsZUFsbCIsImZvckVhY2giLCJjbGVhckNvbXBsZXRlZCIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwiY3JlYXRlU3RvcmUkMSIsIm1pZGRsZXdhcmUiLCJsaXN0ZW5lcnMiLCJkaXNwYXRjaExpc3RlbmVycyIsImYiLCJ1cGRhdGUiLCJzdWJzY3JpYmUiLCJzcGxpY2UiLCJpbmRleE9mIiwicmVzZXQiLCJFeGFtRWxlbWVudCIsIl9oYW5kbGVycyIsInJvb3QiLCJoYW5kbGVycyIsIm9uQ2xpY2siLCJfb25DbGljayIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7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QUFsQjs7QUFDQSxVQUFLQyxVQUFMLENBQWdCLElBQWhCOztBQU5hO0FBT2I7O0FBUkY7QUFBQTtBQUFBLHdDQVVxQjtBQUNuQixVQUFNdUUsSUFBSSxHQUFHLEtBQUsxRCxVQUFsQjtBQUNBLFVBQU0yRCxRQUFRLEdBQUcsS0FBS0YsU0FBdEI7QUFFQUUsY0FBUSxDQUFDQyxPQUFULEdBQW1CLEtBQUtDLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUFuQjtBQUVBSixVQUFJLENBQUNLLGdCQUFMLFVBQStCSixRQUFRLENBQUNDLE9BQXhDO0FBQ0E7QUFqQkY7QUFBQTtBQUFBLDJDQW1Cd0I7QUFDdEIsVUFBTUYsSUFBSSxHQUFHLEtBQUsxRCxVQUFsQjtBQUVBMEQsVUFBSSxDQUFDTSxtQkFBTCxVQUFrQyxLQUFLUCxTQUFMLENBQWVHLE9BQWpEO0FBQ0E7QUF2QkY7QUFBQTtBQUFBLCtCQXlCWTtBQUNWcEQsb0VBQVE7QUFDUixXQUFLckIsVUFBTCxDQUFnQixJQUFoQjtBQUNBO0FBNUJGO0FBQUE7QUFBQSw2QkE4QlU7QUFDUixhQUFPRyxxREFBUCxvQkFDT0MsS0FEUCxFQUlnQ2EsbURBQUssQ0FBQ0MsUUFBTixHQUFpQnRCLElBQWpCLENBQXNCMEIsS0FKdEQ7QUFPQTtBQXRDRjs7QUFBQTtBQUFBLEVBQWlDakIsK0RBQVMsQ0FBQ0MsV0FBRCxDQUExQztBQXlDQSxJQUFNRixLQUFLLEdBQUdELHFEQUFILG9CQUFYO0FBaUJBSSxjQUFjLENBQUNDLE1BQWYsaUJBQXNDNkQsV0FBdEMsRSIsImZpbGUiOiJtYWluLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAnLi9jb21wb25lbnRzL0FwcC5qcydcclxuXHJcbmNvbnNvbGUuaW5mbyhgbWFpbiBzY3JpcHQgc3RhcnQhYClcclxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1odG1sJ1xyXG5cclxuaW1wb3J0IExpdFJlbmRlciBmcm9tICcuLi9saWJzL2xpdFJlbmRlcidcclxuLy8gaW1wb3J0IHN0b3JlIGZyb20gJy4uL2xpYnMvc3RvcmUnXHJcbmltcG9ydCB7XHJcblx0YWRkLFxyXG59IGZyb20gJy4uL2xpYnMvYWN0aW9ucydcclxuXHJcbmltcG9ydCAnLi9leGFtLWVsZW1lbnQuanMnXHJcblxyXG5jbGFzcyBBcHBNYWluIGV4dGVuZHMgTGl0UmVuZGVyKEhUTUxFbGVtZW50KSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpXHJcblxyXG5cdFx0dGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBgb3BlbmAgfSlcclxuXHJcblx0XHR0aGlzLmludmFsaWRhdGUoKVxyXG5cdH1cclxuXHJcblx0YWRkKHRpdGxlKSB7XHJcblx0XHRhZGQodGl0bGUpXHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gaHRtbGAgXHJcblx0XHQ8IS0tICR7c3R5bGV9ICAgICAgICAgLS0+XHJcblx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi4vc3JjL2Nzcy9BcHAuY3NzXCI+XHJcblx0XHQ8bWFpbj5cclxuXHRcdFx0PGV4YW0tZWxlbWVudCAvPlx0XHRcdFxyXG5cdFx0PC9tYWluPlxyXG4gICAgICAgIGBcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlID0gaHRtbGBcclxuPHN0eWxlPlxyXG5tYWluIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDk1dnc7XHJcblx0aGVpZ2h0OiA5NXZoO1xyXG5cdG1hcmdpbjogYXV0bztcclxufVxyXG48L3N0eWxlPlxyXG5gXHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoYGFwcC1tYWluYCwgQXBwTWFpbilcclxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqXG4gKiBNYWluIGxpdC1odG1sIG1vZHVsZS5cbiAqXG4gKiBNYWluIGV4cG9ydHM6XG4gKlxuICogLSAgW1todG1sXV1cbiAqIC0gIFtbc3ZnXV1cbiAqIC0gIFtbcmVuZGVyXV1cbiAqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKiBAcHJlZmVycmVkXG4gKi9cblxuLyoqXG4gKiBEbyBub3QgcmVtb3ZlIHRoaXMgY29tbWVudDsgaXQga2VlcHMgdHlwZWRvYyBmcm9tIG1pc3BsYWNpbmcgdGhlIG1vZHVsZVxuICogZG9jcy5cbiAqL1xuaW1wb3J0IHtkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmltcG9ydCB7U1ZHVGVtcGxhdGVSZXN1bHQsIFRlbXBsYXRlUmVzdWx0fSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuXG5leHBvcnQge0RlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciwgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yfSBmcm9tICcuL2xpYi9kZWZhdWx0LXRlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5leHBvcnQge2RpcmVjdGl2ZSwgRGlyZWN0aXZlRm4sIGlzRGlyZWN0aXZlfSBmcm9tICcuL2xpYi9kaXJlY3RpdmUuanMnO1xuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogcmVtb3ZlIGxpbmUgd2hlbiB3ZSBnZXQgTm9kZVBhcnQgbW92aW5nIG1ldGhvZHNcbmV4cG9ydCB7cmVtb3ZlTm9kZXMsIHJlcGFyZW50Tm9kZXN9IGZyb20gJy4vbGliL2RvbS5qcyc7XG5leHBvcnQge25vQ2hhbmdlLCBub3RoaW5nLCBQYXJ0fSBmcm9tICcuL2xpYi9wYXJ0LmpzJztcbmV4cG9ydCB7QXR0cmlidXRlQ29tbWl0dGVyLCBBdHRyaWJ1dGVQYXJ0LCBCb29sZWFuQXR0cmlidXRlUGFydCwgRXZlbnRQYXJ0LCBpc0l0ZXJhYmxlLCBpc1ByaW1pdGl2ZSwgTm9kZVBhcnQsIFByb3BlcnR5Q29tbWl0dGVyLCBQcm9wZXJ0eVBhcnR9IGZyb20gJy4vbGliL3BhcnRzLmpzJztcbmV4cG9ydCB7UmVuZGVyT3B0aW9uc30gZnJvbSAnLi9saWIvcmVuZGVyLW9wdGlvbnMuanMnO1xuZXhwb3J0IHtwYXJ0cywgcmVuZGVyfSBmcm9tICcuL2xpYi9yZW5kZXIuanMnO1xuZXhwb3J0IHt0ZW1wbGF0ZUNhY2hlcywgdGVtcGxhdGVGYWN0b3J5fSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1mYWN0b3J5LmpzJztcbmV4cG9ydCB7VGVtcGxhdGVJbnN0YW5jZX0gZnJvbSAnLi9saWIvdGVtcGxhdGUtaW5zdGFuY2UuanMnO1xuZXhwb3J0IHtUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi9saWIvdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmV4cG9ydCB7U1ZHVGVtcGxhdGVSZXN1bHQsIFRlbXBsYXRlUmVzdWx0fSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuZXhwb3J0IHtjcmVhdGVNYXJrZXIsIGlzVGVtcGxhdGVQYXJ0QWN0aXZlLCBUZW1wbGF0ZX0gZnJvbSAnLi9saWIvdGVtcGxhdGUuanMnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGxpdEh0bWxWZXJzaW9uczogc3RyaW5nW107XG4gIH1cbn1cblxuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBsaXQtaHRtbCB1c2FnZS5cbi8vIFRPRE8oanVzdGluZmFnbmFuaSk6IGluamVjdCB2ZXJzaW9uIG51bWJlciBhdCBidWlsZCB0aW1lXG4od2luZG93WydsaXRIdG1sVmVyc2lvbnMnXSB8fCAod2luZG93WydsaXRIdG1sVmVyc2lvbnMnXSA9IFtdKSkucHVzaCgnMS4wLjAnKTtcblxuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBIVE1MIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IGh0bWwgPSAoc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnZhbHVlczogdW5rbm93bltdKSA9PlxuICAgIG5ldyBUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdodG1sJywgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yKTtcblxuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBTVkcgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3Qgc3ZnID0gKHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi52YWx1ZXM6IHVua25vd25bXSkgPT5cbiAgICBuZXcgU1ZHVGVtcGxhdGVSZXN1bHQoc3RyaW5ncywgdmFsdWVzLCAnc3ZnJywgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtQYXJ0fSBmcm9tICcuL3BhcnQuanMnO1xuaW1wb3J0IHtBdHRyaWJ1dGVDb21taXR0ZXIsIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LCBFdmVudFBhcnQsIE5vZGVQYXJ0LCBQcm9wZXJ0eUNvbW1pdHRlcn0gZnJvbSAnLi9wYXJ0cy5qcyc7XG5pbXBvcnQge1JlbmRlck9wdGlvbnN9IGZyb20gJy4vcmVuZGVyLW9wdGlvbnMuanMnO1xuaW1wb3J0IHtUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi90ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgUGFydHMgd2hlbiBhIHRlbXBsYXRlIGlzIGluc3RhbnRpYXRlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIERlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciBpbXBsZW1lbnRzIFRlbXBsYXRlUHJvY2Vzc29yIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBwYXJ0cyBmb3IgYW4gYXR0cmlidXRlLXBvc2l0aW9uIGJpbmRpbmcsIGdpdmVuIHRoZSBldmVudCwgYXR0cmlidXRlXG4gICAqIG5hbWUsIGFuZCBzdHJpbmcgbGl0ZXJhbHMuXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGJpbmRpbmdcbiAgICogQHBhcmFtIG5hbWUgIFRoZSBhdHRyaWJ1dGUgbmFtZVxuICAgKiBAcGFyYW0gc3RyaW5ncyBUaGUgc3RyaW5nIGxpdGVyYWxzLiBUaGVyZSBhcmUgYWx3YXlzIGF0IGxlYXN0IHR3byBzdHJpbmdzLFxuICAgKiAgIGV2ZW50IGZvciBmdWxseS1jb250cm9sbGVkIGJpbmRpbmdzIHdpdGggYSBzaW5nbGUgZXhwcmVzc2lvbi5cbiAgICovXG4gIGhhbmRsZUF0dHJpYnV0ZUV4cHJlc3Npb25zKFxuICAgICAgZWxlbWVudDogRWxlbWVudCwgbmFtZTogc3RyaW5nLCBzdHJpbmdzOiBzdHJpbmdbXSxcbiAgICAgIG9wdGlvbnM6IFJlbmRlck9wdGlvbnMpOiBSZWFkb25seUFycmF5PFBhcnQ+IHtcbiAgICBjb25zdCBwcmVmaXggPSBuYW1lWzBdO1xuICAgIGlmIChwcmVmaXggPT09ICcuJykge1xuICAgICAgY29uc3QgY29tbWl0dGVyID0gbmV3IFByb3BlcnR5Q29tbWl0dGVyKGVsZW1lbnQsIG5hbWUuc2xpY2UoMSksIHN0cmluZ3MpO1xuICAgICAgcmV0dXJuIGNvbW1pdHRlci5wYXJ0cztcbiAgICB9XG4gICAgaWYgKHByZWZpeCA9PT0gJ0AnKSB7XG4gICAgICByZXR1cm4gW25ldyBFdmVudFBhcnQoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgb3B0aW9ucy5ldmVudENvbnRleHQpXTtcbiAgICB9XG4gICAgaWYgKHByZWZpeCA9PT0gJz8nKSB7XG4gICAgICByZXR1cm4gW25ldyBCb29sZWFuQXR0cmlidXRlUGFydChlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBzdHJpbmdzKV07XG4gICAgfVxuICAgIGNvbnN0IGNvbW1pdHRlciA9IG5ldyBBdHRyaWJ1dGVDb21taXR0ZXIoZWxlbWVudCwgbmFtZSwgc3RyaW5ncyk7XG4gICAgcmV0dXJuIGNvbW1pdHRlci5wYXJ0cztcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIHBhcnRzIGZvciBhIHRleHQtcG9zaXRpb24gYmluZGluZy5cbiAgICogQHBhcmFtIHRlbXBsYXRlRmFjdG9yeVxuICAgKi9cbiAgaGFuZGxlVGV4dEV4cHJlc3Npb24ob3B0aW9uczogUmVuZGVyT3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgTm9kZVBhcnQob3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvciA9IG5ldyBEZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IoKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtpc0RpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmUuanMnO1xuaW1wb3J0IHtyZW1vdmVOb2Rlc30gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHtub0NoYW5nZSwgbm90aGluZywgUGFydH0gZnJvbSAnLi9wYXJ0LmpzJztcbmltcG9ydCB7UmVuZGVyT3B0aW9uc30gZnJvbSAnLi9yZW5kZXItb3B0aW9ucy5qcyc7XG5pbXBvcnQge1RlbXBsYXRlSW5zdGFuY2V9IGZyb20gJy4vdGVtcGxhdGUtaW5zdGFuY2UuanMnO1xuaW1wb3J0IHtUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuaW1wb3J0IHtjcmVhdGVNYXJrZXJ9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10eXBlb2Ytb3BlcmF0b3JcbmV4cG9ydCB0eXBlIFByaW1pdGl2ZSA9IG51bGx8dW5kZWZpbmVkfGJvb2xlYW58bnVtYmVyfHN0cmluZ3xTeW1ib2x8YmlnaW50O1xuZXhwb3J0IGNvbnN0IGlzUHJpbWl0aXZlID0gKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgUHJpbWl0aXZlID0+IHtcbiAgcmV0dXJuIChcbiAgICAgIHZhbHVlID09PSBudWxsIHx8XG4gICAgICAhKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSk7XG59O1xuZXhwb3J0IGNvbnN0IGlzSXRlcmFibGUgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBJdGVyYWJsZTx1bmtub3duPiA9PiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSB8fFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgISEodmFsdWUgJiYgKHZhbHVlIGFzIGFueSlbU3ltYm9sLml0ZXJhdG9yXSk7XG59O1xuXG4vKipcbiAqIFdyaXRlcyBhdHRyaWJ1dGUgdmFsdWVzIHRvIHRoZSBET00gZm9yIGEgZ3JvdXAgb2YgQXR0cmlidXRlUGFydHMgYm91bmQgdG8gYVxuICogc2luZ2xlIGF0dGlidXRlLiBUaGUgdmFsdWUgaXMgb25seSBzZXQgb25jZSBldmVuIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBwYXJ0c1xuICogZm9yIGFuIGF0dHJpYnV0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZUNvbW1pdHRlciB7XG4gIHJlYWRvbmx5IGVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgcmVhZG9ubHkgc3RyaW5nczogUmVhZG9ubHlBcnJheTxzdHJpbmc+O1xuICByZWFkb25seSBwYXJ0czogUmVhZG9ubHlBcnJheTxBdHRyaWJ1dGVQYXJ0PjtcbiAgZGlydHkgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIG5hbWU6IHN0cmluZywgc3RyaW5nczogUmVhZG9ubHlBcnJheTxzdHJpbmc+KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgdGhpcy5wYXJ0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICh0aGlzLnBhcnRzIGFzIEF0dHJpYnV0ZVBhcnRbXSlbaV0gPSB0aGlzLl9jcmVhdGVQYXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBzaW5nbGUgcGFydC4gT3ZlcnJpZGUgdGhpcyB0byBjcmVhdGUgYSBkaWZmZXJudCB0eXBlIG9mIHBhcnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgX2NyZWF0ZVBhcnQoKTogQXR0cmlidXRlUGFydCB7XG4gICAgcmV0dXJuIG5ldyBBdHRyaWJ1dGVQYXJ0KHRoaXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9nZXRWYWx1ZSgpOiB1bmtub3duIHtcbiAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5zdHJpbmdzO1xuICAgIGNvbnN0IGwgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgbGV0IHRleHQgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0ZXh0ICs9IHN0cmluZ3NbaV07XG4gICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wYXJ0c1tpXTtcbiAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgdiA9IHBhcnQudmFsdWU7XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSh2KSB8fCAhaXNJdGVyYWJsZSh2KSkge1xuICAgICAgICAgIHRleHQgKz0gdHlwZW9mIHYgPT09ICdzdHJpbmcnID8gdiA6IFN0cmluZyh2KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHQgb2Ygdikge1xuICAgICAgICAgICAgdGV4dCArPSB0eXBlb2YgdCA9PT0gJ3N0cmluZycgPyB0IDogU3RyaW5nKHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRleHQgKz0gc3RyaW5nc1tsXTtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIGNvbW1pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXJ0eSkge1xuICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsIHRoaXMuX2dldFZhbHVlKCkgYXMgc3RyaW5nKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBIFBhcnQgdGhhdCBjb250cm9scyBhbGwgb3IgcGFydCBvZiBhbiBhdHRyaWJ1dGUgdmFsdWUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVQYXJ0IGltcGxlbWVudHMgUGFydCB7XG4gIHJlYWRvbmx5IGNvbW1pdHRlcjogQXR0cmlidXRlQ29tbWl0dGVyO1xuICB2YWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3Rvcihjb21taXR0ZXI6IEF0dHJpYnV0ZUNvbW1pdHRlcikge1xuICAgIHRoaXMuY29tbWl0dGVyID0gY29tbWl0dGVyO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IHVua25vd24pOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgIT09IG5vQ2hhbmdlICYmICghaXNQcmltaXRpdmUodmFsdWUpIHx8IHZhbHVlICE9PSB0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGEgbm90IGEgZGlyZWN0aXZlLCBkaXJ0eSB0aGUgY29tbWl0dGVyIHNvIHRoYXQgaXQnbGxcbiAgICAgIC8vIGNhbGwgc2V0QXR0cmlidXRlLiBJZiB0aGUgdmFsdWUgaXMgYSBkaXJlY3RpdmUsIGl0J2xsIGRpcnR5IHRoZVxuICAgICAgLy8gY29tbWl0dGVyIGlmIGl0IGNhbGxzIHNldFZhbHVlKCkuXG4gICAgICBpZiAoIWlzRGlyZWN0aXZlKHZhbHVlKSkge1xuICAgICAgICB0aGlzLmNvbW1pdHRlci5kaXJ0eSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tbWl0KCkge1xuICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLnZhbHVlKSkge1xuICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy52YWx1ZTtcbiAgICAgIHRoaXMudmFsdWUgPSBub0NoYW5nZTtcbiAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY29tbWl0dGVyLmNvbW1pdCgpO1xuICB9XG59XG5cbi8qKlxuICogQSBQYXJ0IHRoYXQgY29udHJvbHMgYSBsb2NhdGlvbiB3aXRoaW4gYSBOb2RlIHRyZWUuIExpa2UgYSBSYW5nZSwgTm9kZVBhcnRcbiAqIGhhcyBzdGFydCBhbmQgZW5kIGxvY2F0aW9ucyBhbmQgY2FuIHNldCBhbmQgdXBkYXRlIHRoZSBOb2RlcyBiZXR3ZWVuIHRob3NlXG4gKiBsb2NhdGlvbnMuXG4gKlxuICogTm9kZVBhcnRzIHN1cHBvcnQgc2V2ZXJhbCB2YWx1ZSB0eXBlczogcHJpbWl0aXZlcywgTm9kZXMsIFRlbXBsYXRlUmVzdWx0cyxcbiAqIGFzIHdlbGwgYXMgYXJyYXlzIGFuZCBpdGVyYWJsZXMgb2YgdGhvc2UgdHlwZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBOb2RlUGFydCBpbXBsZW1lbnRzIFBhcnQge1xuICByZWFkb25seSBvcHRpb25zOiBSZW5kZXJPcHRpb25zO1xuICBzdGFydE5vZGUhOiBOb2RlO1xuICBlbmROb2RlITogTm9kZTtcbiAgdmFsdWU6IHVua25vd24gPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX19wZW5kaW5nVmFsdWU6IHVua25vd24gPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogUmVuZGVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyB0aGlzIHBhcnQgaW50byBhIGNvbnRhaW5lci5cbiAgICpcbiAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAqL1xuICBhcHBlbmRJbnRvKGNvbnRhaW5lcjogTm9kZSkge1xuICAgIHRoaXMuc3RhcnROb2RlID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1hcmtlcigpKTtcbiAgICB0aGlzLmVuZE5vZGUgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFya2VyKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydHMgdGhpcyBwYXJ0IGFmdGVyIHRoZSBgcmVmYCBub2RlIChiZXR3ZWVuIGByZWZgIGFuZCBgcmVmYCdzIG5leHRcbiAgICogc2libGluZykuIEJvdGggYHJlZmAgYW5kIGl0cyBuZXh0IHNpYmxpbmcgbXVzdCBiZSBzdGF0aWMsIHVuY2hhbmdpbmcgbm9kZXNcbiAgICogc3VjaCBhcyB0aG9zZSB0aGF0IGFwcGVhciBpbiBhIGxpdGVyYWwgc2VjdGlvbiBvZiBhIHRlbXBsYXRlLlxuICAgKlxuICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICovXG4gIGluc2VydEFmdGVyTm9kZShyZWY6IE5vZGUpIHtcbiAgICB0aGlzLnN0YXJ0Tm9kZSA9IHJlZjtcbiAgICB0aGlzLmVuZE5vZGUgPSByZWYubmV4dFNpYmxpbmchO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgdGhpcyBwYXJ0IGludG8gYSBwYXJlbnQgcGFydC5cbiAgICpcbiAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAqL1xuICBhcHBlbmRJbnRvUGFydChwYXJ0OiBOb2RlUGFydCkge1xuICAgIHBhcnQuX19pbnNlcnQodGhpcy5zdGFydE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gICAgcGFydC5fX2luc2VydCh0aGlzLmVuZE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0cyB0aGlzIHBhcnQgYWZ0ZXIgdGhlIGByZWZgIHBhcnQuXG4gICAqXG4gICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgKi9cbiAgaW5zZXJ0QWZ0ZXJQYXJ0KHJlZjogTm9kZVBhcnQpIHtcbiAgICByZWYuX19pbnNlcnQodGhpcy5zdGFydE5vZGUgPSBjcmVhdGVNYXJrZXIoKSk7XG4gICAgdGhpcy5lbmROb2RlID0gcmVmLmVuZE5vZGU7XG4gICAgcmVmLmVuZE5vZGUgPSB0aGlzLnN0YXJ0Tm9kZTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiB1bmtub3duKTogdm9pZCB7XG4gICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgY29tbWl0KCkge1xuICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLl9fcGVuZGluZ1ZhbHVlKSkge1xuICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzUHJpbWl0aXZlKHZhbHVlKSkge1xuICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgIHRoaXMuX19jb21taXRUZXh0KHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZXN1bHQpIHtcbiAgICAgIHRoaXMuX19jb21taXRUZW1wbGF0ZVJlc3VsdCh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIHRoaXMuX19jb21taXROb2RlKHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGlzSXRlcmFibGUodmFsdWUpKSB7XG4gICAgICB0aGlzLl9fY29tbWl0SXRlcmFibGUodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG5vdGhpbmcpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBub3RoaW5nO1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGYWxsYmFjaywgd2lsbCByZW5kZXIgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgICAgdGhpcy5fX2NvbW1pdFRleHQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX19pbnNlcnQobm9kZTogTm9kZSkge1xuICAgIHRoaXMuZW5kTm9kZS5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUobm9kZSwgdGhpcy5lbmROb2RlKTtcbiAgfVxuXG4gIHByaXZhdGUgX19jb21taXROb2RlKHZhbHVlOiBOb2RlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLl9faW5zZXJ0KHZhbHVlKTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9fY29tbWl0VGV4dCh2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnN0YXJ0Tm9kZS5uZXh0U2libGluZyE7XG4gICAgdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICBpZiAobm9kZSA9PT0gdGhpcy5lbmROb2RlLnByZXZpb3VzU2libGluZyAmJlxuICAgICAgICBub2RlLm5vZGVUeXBlID09PSAzIC8qIE5vZGUuVEVYVF9OT0RFICovKSB7XG4gICAgICAvLyBJZiB3ZSBvbmx5IGhhdmUgYSBzaW5nbGUgdGV4dCBub2RlIGJldHdlZW4gdGhlIG1hcmtlcnMsIHdlIGNhbiBqdXN0XG4gICAgICAvLyBzZXQgaXRzIHZhbHVlLCByYXRoZXIgdGhhbiByZXBsYWNpbmcgaXQuXG4gICAgICAvLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiBDYW4gd2UganVzdCBjaGVjayBpZiB0aGlzLnZhbHVlIGlzIHByaW1pdGl2ZT9cbiAgICAgIChub2RlIGFzIFRleHQpLmRhdGEgPSB2YWx1ZSBhcyBzdHJpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX19jb21taXROb2RlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSkpKTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlOiBUZW1wbGF0ZVJlc3VsdCk6IHZvaWQge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5vcHRpb25zLnRlbXBsYXRlRmFjdG9yeSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMudmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZUluc3RhbmNlICYmXG4gICAgICAgIHRoaXMudmFsdWUudGVtcGxhdGUgPT09IHRlbXBsYXRlKSB7XG4gICAgICB0aGlzLnZhbHVlLnVwZGF0ZSh2YWx1ZS52YWx1ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNYWtlIHN1cmUgd2UgcHJvcGFnYXRlIHRoZSB0ZW1wbGF0ZSBwcm9jZXNzb3IgZnJvbSB0aGUgVGVtcGxhdGVSZXN1bHRcbiAgICAgIC8vIHNvIHRoYXQgd2UgdXNlIGl0cyBzeW50YXggZXh0ZW5zaW9uLCBldGMuIFRoZSB0ZW1wbGF0ZSBmYWN0b3J5IGNvbWVzXG4gICAgICAvLyBmcm9tIHRoZSByZW5kZXIgZnVuY3Rpb24gb3B0aW9ucyBzbyB0aGF0IGl0IGNhbiBjb250cm9sIHRlbXBsYXRlXG4gICAgICAvLyBjYWNoaW5nIGFuZCBwcmVwcm9jZXNzaW5nLlxuICAgICAgY29uc3QgaW5zdGFuY2UgPVxuICAgICAgICAgIG5ldyBUZW1wbGF0ZUluc3RhbmNlKHRlbXBsYXRlLCB2YWx1ZS5wcm9jZXNzb3IsIHRoaXMub3B0aW9ucyk7XG4gICAgICBjb25zdCBmcmFnbWVudCA9IGluc3RhbmNlLl9jbG9uZSgpO1xuICAgICAgaW5zdGFuY2UudXBkYXRlKHZhbHVlLnZhbHVlcyk7XG4gICAgICB0aGlzLl9fY29tbWl0Tm9kZShmcmFnbWVudCk7XG4gICAgICB0aGlzLnZhbHVlID0gaW5zdGFuY2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfX2NvbW1pdEl0ZXJhYmxlKHZhbHVlOiBJdGVyYWJsZTx1bmtub3duPik6IHZvaWQge1xuICAgIC8vIEZvciBhbiBJdGVyYWJsZSwgd2UgY3JlYXRlIGEgbmV3IEluc3RhbmNlUGFydCBwZXIgaXRlbSwgdGhlbiBzZXQgaXRzXG4gICAgLy8gdmFsdWUgdG8gdGhlIGl0ZW0uIFRoaXMgaXMgYSBsaXR0bGUgYml0IG9mIG92ZXJoZWFkIGZvciBldmVyeSBpdGVtIGluXG4gICAgLy8gYW4gSXRlcmFibGUsIGJ1dCBpdCBsZXRzIHVzIHJlY3Vyc2UgZWFzaWx5IGFuZCBlZmZpY2llbnRseSB1cGRhdGUgQXJyYXlzXG4gICAgLy8gb2YgVGVtcGxhdGVSZXN1bHRzIHRoYXQgd2lsbCBiZSBjb21tb25seSByZXR1cm5lZCBmcm9tIGV4cHJlc3Npb25zIGxpa2U6XG4gICAgLy8gYXJyYXkubWFwKChpKSA9PiBodG1sYCR7aX1gKSwgYnkgcmV1c2luZyBleGlzdGluZyBUZW1wbGF0ZUluc3RhbmNlcy5cblxuICAgIC8vIElmIF92YWx1ZSBpcyBhbiBhcnJheSwgdGhlbiB0aGUgcHJldmlvdXMgcmVuZGVyIHdhcyBvZiBhblxuICAgIC8vIGl0ZXJhYmxlIGFuZCBfdmFsdWUgd2lsbCBjb250YWluIHRoZSBOb2RlUGFydHMgZnJvbSB0aGUgcHJldmlvdXNcbiAgICAvLyByZW5kZXIuIElmIF92YWx1ZSBpcyBub3QgYW4gYXJyYXksIGNsZWFyIHRoaXMgcGFydCBhbmQgbWFrZSBhIG5ld1xuICAgIC8vIGFycmF5IGZvciBOb2RlUGFydHMuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlID0gW107XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLy8gTGV0cyB1cyBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IGl0ZW1zIHdlIHN0YW1wZWQgc28gd2UgY2FuIGNsZWFyIGxlZnRvdmVyXG4gICAgLy8gaXRlbXMgZnJvbSBhIHByZXZpb3VzIHJlbmRlclxuICAgIGNvbnN0IGl0ZW1QYXJ0cyA9IHRoaXMudmFsdWUgYXMgTm9kZVBhcnRbXTtcbiAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICBsZXQgaXRlbVBhcnQ6IE5vZGVQYXJ0fHVuZGVmaW5lZDtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xuICAgICAgLy8gVHJ5IHRvIHJldXNlIGFuIGV4aXN0aW5nIHBhcnRcbiAgICAgIGl0ZW1QYXJ0ID0gaXRlbVBhcnRzW3BhcnRJbmRleF07XG5cbiAgICAgIC8vIElmIG5vIGV4aXN0aW5nIHBhcnQsIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICAgIGlmIChpdGVtUGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGl0ZW1QYXJ0ID0gbmV3IE5vZGVQYXJ0KHRoaXMub3B0aW9ucyk7XG4gICAgICAgIGl0ZW1QYXJ0cy5wdXNoKGl0ZW1QYXJ0KTtcbiAgICAgICAgaWYgKHBhcnRJbmRleCA9PT0gMCkge1xuICAgICAgICAgIGl0ZW1QYXJ0LmFwcGVuZEludG9QYXJ0KHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1QYXJ0Lmluc2VydEFmdGVyUGFydChpdGVtUGFydHNbcGFydEluZGV4IC0gMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpdGVtUGFydC5zZXRWYWx1ZShpdGVtKTtcbiAgICAgIGl0ZW1QYXJ0LmNvbW1pdCgpO1xuICAgICAgcGFydEluZGV4Kys7XG4gICAgfVxuXG4gICAgaWYgKHBhcnRJbmRleCA8IGl0ZW1QYXJ0cy5sZW5ndGgpIHtcbiAgICAgIC8vIFRydW5jYXRlIHRoZSBwYXJ0cyBhcnJheSBzbyBfdmFsdWUgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgIGl0ZW1QYXJ0cy5sZW5ndGggPSBwYXJ0SW5kZXg7XG4gICAgICB0aGlzLmNsZWFyKGl0ZW1QYXJ0ICYmIGl0ZW1QYXJ0LmVuZE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKHN0YXJ0Tm9kZTogTm9kZSA9IHRoaXMuc3RhcnROb2RlKSB7XG4gICAgcmVtb3ZlTm9kZXMoXG4gICAgICAgIHRoaXMuc3RhcnROb2RlLnBhcmVudE5vZGUhLCBzdGFydE5vZGUubmV4dFNpYmxpbmchLCB0aGlzLmVuZE5vZGUpO1xuICB9XG59XG5cbi8qKlxuICogSW1wbGVtZW50cyBhIGJvb2xlYW4gYXR0cmlidXRlLCByb3VnaGx5IGFzIGRlZmluZWQgaW4gdGhlIEhUTUxcbiAqIHNwZWNpZmljYXRpb24uXG4gKlxuICogSWYgdGhlIHZhbHVlIGlzIHRydXRoeSwgdGhlbiB0aGUgYXR0cmlidXRlIGlzIHByZXNlbnQgd2l0aCBhIHZhbHVlIG9mXG4gKiAnJy4gSWYgdGhlIHZhbHVlIGlzIGZhbHNleSwgdGhlIGF0dHJpYnV0ZSBpcyByZW1vdmVkLlxuICovXG5leHBvcnQgY2xhc3MgQm9vbGVhbkF0dHJpYnV0ZVBhcnQgaW1wbGVtZW50cyBQYXJ0IHtcbiAgcmVhZG9ubHkgZWxlbWVudDogRWxlbWVudDtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICByZWFkb25seSBzdHJpbmdzOiBSZWFkb25seUFycmF5PHN0cmluZz47XG4gIHZhbHVlOiB1bmtub3duID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIF9fcGVuZGluZ1ZhbHVlOiB1bmtub3duID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIG5hbWU6IHN0cmluZywgc3RyaW5nczogUmVhZG9ubHlBcnJheTxzdHJpbmc+KSB7XG4gICAgaWYgKHN0cmluZ3MubGVuZ3RoICE9PSAyIHx8IHN0cmluZ3NbMF0gIT09ICcnIHx8IHN0cmluZ3NbMV0gIT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0Jvb2xlYW4gYXR0cmlidXRlcyBjYW4gb25seSBjb250YWluIGEgc2luZ2xlIGV4cHJlc3Npb24nKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbW1pdCgpIHtcbiAgICB3aGlsZSAoaXNEaXJlY3RpdmUodGhpcy5fX3BlbmRpbmdWYWx1ZSkpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZSA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gICAgICBkaXJlY3RpdmUodGhpcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9fcGVuZGluZ1ZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9ICEhdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgfVxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2U7XG4gIH1cbn1cblxuLyoqXG4gKiBTZXRzIGF0dHJpYnV0ZSB2YWx1ZXMgZm9yIFByb3BlcnR5UGFydHMsIHNvIHRoYXQgdGhlIHZhbHVlIGlzIG9ubHkgc2V0IG9uY2VcbiAqIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzIGZvciBhIHByb3BlcnR5LlxuICpcbiAqIElmIGFuIGV4cHJlc3Npb24gY29udHJvbHMgdGhlIHdob2xlIHByb3BlcnR5IHZhbHVlLCB0aGVuIHRoZSB2YWx1ZSBpcyBzaW1wbHlcbiAqIGFzc2lnbmVkIHRvIHRoZSBwcm9wZXJ0eSB1bmRlciBjb250cm9sLiBJZiB0aGVyZSBhcmUgc3RyaW5nIGxpdGVyYWxzIG9yXG4gKiBtdWx0aXBsZSBleHByZXNzaW9ucywgdGhlbiB0aGUgc3RyaW5ncyBhcmUgZXhwcmVzc2lvbnMgYXJlIGludGVycG9sYXRlZCBpbnRvXG4gKiBhIHN0cmluZyBmaXJzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb3BlcnR5Q29tbWl0dGVyIGV4dGVuZHMgQXR0cmlidXRlQ29tbWl0dGVyIHtcbiAgcmVhZG9ubHkgc2luZ2xlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIG5hbWU6IHN0cmluZywgc3RyaW5nczogUmVhZG9ubHlBcnJheTxzdHJpbmc+KSB7XG4gICAgc3VwZXIoZWxlbWVudCwgbmFtZSwgc3RyaW5ncyk7XG4gICAgdGhpcy5zaW5nbGUgPVxuICAgICAgICAoc3RyaW5ncy5sZW5ndGggPT09IDIgJiYgc3RyaW5nc1swXSA9PT0gJycgJiYgc3RyaW5nc1sxXSA9PT0gJycpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9jcmVhdGVQYXJ0KCk6IFByb3BlcnR5UGFydCB7XG4gICAgcmV0dXJuIG5ldyBQcm9wZXJ0eVBhcnQodGhpcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldFZhbHVlKCkge1xuICAgIGlmICh0aGlzLnNpbmdsZSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFydHNbMF0udmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5fZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIGNvbW1pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXJ0eSkge1xuICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgKHRoaXMuZWxlbWVudCBhcyBhbnkpW3RoaXMubmFtZV0gPSB0aGlzLl9nZXRWYWx1ZSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7fVxuXG4vLyBEZXRlY3QgZXZlbnQgbGlzdGVuZXIgb3B0aW9ucyBzdXBwb3J0LiBJZiB0aGUgYGNhcHR1cmVgIHByb3BlcnR5IGlzIHJlYWRcbi8vIGZyb20gdGhlIG9wdGlvbnMgb2JqZWN0LCB0aGVuIG9wdGlvbnMgYXJlIHN1cHBvcnRlZC4gSWYgbm90LCB0aGVuIHRoZSB0aHJpZFxuLy8gYXJndW1lbnQgdG8gYWRkL3JlbW92ZUV2ZW50TGlzdGVuZXIgaXMgaW50ZXJwcmV0ZWQgYXMgdGhlIGJvb2xlYW4gY2FwdHVyZVxuLy8gdmFsdWUgc28gd2Ugc2hvdWxkIG9ubHkgcGFzcyB0aGUgYGNhcHR1cmVgIHByb3BlcnR5LlxubGV0IGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA9IGZhbHNlO1xuXG50cnkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGdldCBjYXB0dXJlKCkge1xuICAgICAgZXZlbnRPcHRpb25zU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zIGFzIGFueSwgb3B0aW9ucyk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zIGFzIGFueSwgb3B0aW9ucyk7XG59IGNhdGNoIChfZSkge1xufVxuXG5cbnR5cGUgRXZlbnRIYW5kbGVyV2l0aE9wdGlvbnMgPVxuICAgIEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QmUGFydGlhbDxBZGRFdmVudExpc3RlbmVyT3B0aW9ucz47XG5leHBvcnQgY2xhc3MgRXZlbnRQYXJ0IGltcGxlbWVudHMgUGFydCB7XG4gIHJlYWRvbmx5IGVsZW1lbnQ6IEVsZW1lbnQ7XG4gIHJlYWRvbmx5IGV2ZW50TmFtZTogc3RyaW5nO1xuICByZWFkb25seSBldmVudENvbnRleHQ/OiBFdmVudFRhcmdldDtcbiAgdmFsdWU6IHVuZGVmaW5lZHxFdmVudEhhbmRsZXJXaXRoT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfX29wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucztcbiAgcHJpdmF0ZSBfX3BlbmRpbmdWYWx1ZTogdW5kZWZpbmVkfEV2ZW50SGFuZGxlcldpdGhPcHRpb25zID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIHJlYWRvbmx5IF9fYm91bmRIYW5kbGVFdmVudDogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50LCBldmVudE5hbWU6IHN0cmluZywgZXZlbnRDb250ZXh0PzogRXZlbnRUYXJnZXQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgIHRoaXMuZXZlbnRDb250ZXh0ID0gZXZlbnRDb250ZXh0O1xuICAgIHRoaXMuX19ib3VuZEhhbmRsZUV2ZW50ID0gKGUpID0+IHRoaXMuaGFuZGxlRXZlbnQoZSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogdW5kZWZpbmVkfEV2ZW50SGFuZGxlcldpdGhPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgY29tbWl0KCkge1xuICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLl9fcGVuZGluZ1ZhbHVlKSkge1xuICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSBub0NoYW5nZSBhcyBFdmVudEhhbmRsZXJXaXRoT3B0aW9ucztcbiAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19wZW5kaW5nVmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3TGlzdGVuZXIgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgIGNvbnN0IG9sZExpc3RlbmVyID0gdGhpcy52YWx1ZTtcbiAgICBjb25zdCBzaG91bGRSZW1vdmVMaXN0ZW5lciA9IG5ld0xpc3RlbmVyID09IG51bGwgfHxcbiAgICAgICAgb2xkTGlzdGVuZXIgIT0gbnVsbCAmJlxuICAgICAgICAgICAgKG5ld0xpc3RlbmVyLmNhcHR1cmUgIT09IG9sZExpc3RlbmVyLmNhcHR1cmUgfHxcbiAgICAgICAgICAgICBuZXdMaXN0ZW5lci5vbmNlICE9PSBvbGRMaXN0ZW5lci5vbmNlIHx8XG4gICAgICAgICAgICAgbmV3TGlzdGVuZXIucGFzc2l2ZSAhPT0gb2xkTGlzdGVuZXIucGFzc2l2ZSk7XG4gICAgY29uc3Qgc2hvdWxkQWRkTGlzdGVuZXIgPVxuICAgICAgICBuZXdMaXN0ZW5lciAhPSBudWxsICYmIChvbGRMaXN0ZW5lciA9PSBudWxsIHx8IHNob3VsZFJlbW92ZUxpc3RlbmVyKTtcblxuICAgIGlmIChzaG91bGRSZW1vdmVMaXN0ZW5lcikge1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgdGhpcy5ldmVudE5hbWUsIHRoaXMuX19ib3VuZEhhbmRsZUV2ZW50LCB0aGlzLl9fb3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChzaG91bGRBZGRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5fX29wdGlvbnMgPSBnZXRPcHRpb25zKG5ld0xpc3RlbmVyKTtcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIHRoaXMuZXZlbnROYW1lLCB0aGlzLl9fYm91bmRIYW5kbGVFdmVudCwgdGhpcy5fX29wdGlvbnMpO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gbmV3TGlzdGVuZXI7XG4gICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlIGFzIEV2ZW50SGFuZGxlcldpdGhPcHRpb25zO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnZhbHVlLmNhbGwodGhpcy5ldmVudENvbnRleHQgfHwgdGhpcy5lbGVtZW50LCBldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICh0aGlzLnZhbHVlIGFzIEV2ZW50TGlzdGVuZXJPYmplY3QpLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gV2UgY29weSBvcHRpb25zIGJlY2F1c2Ugb2YgdGhlIGluY29uc2lzdGVudCBiZWhhdmlvciBvZiBicm93c2VycyB3aGVuIHJlYWRpbmdcbi8vIHRoZSB0aGlyZCBhcmd1bWVudCBvZiBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lci4gSUUxMSBkb2Vzbid0IHN1cHBvcnQgb3B0aW9uc1xuLy8gYXQgYWxsLiBDaHJvbWUgNDEgb25seSByZWFkcyBgY2FwdHVyZWAgaWYgdGhlIGFyZ3VtZW50IGlzIGFuIG9iamVjdC5cbmNvbnN0IGdldE9wdGlvbnMgPSAobzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnN8dW5kZWZpbmVkKSA9PiBvICYmXG4gICAgKGV2ZW50T3B0aW9uc1N1cHBvcnRlZCA/XG4gICAgICAgICB7Y2FwdHVyZTogby5jYXB0dXJlLCBwYXNzaXZlOiBvLnBhc3NpdmUsIG9uY2U6IG8ub25jZX0gOlxuICAgICAgICAgby5jYXB0dXJlIGFzIEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtQYXJ0fSBmcm9tICcuL3BhcnQuanMnO1xuXG5jb25zdCBkaXJlY3RpdmVzID0gbmV3IFdlYWtNYXA8b2JqZWN0LCB0cnVlPigpO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgdHlwZSBEaXJlY3RpdmVGYWN0b3J5ID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBvYmplY3Q7XG5cbmV4cG9ydCB0eXBlIERpcmVjdGl2ZUZuID0gKHBhcnQ6IFBhcnQpID0+IHZvaWQ7XG5cbi8qKlxuICogQnJhbmRzIGEgZnVuY3Rpb24gYXMgYSBkaXJlY3RpdmUgZmFjdG9yeSBmdW5jdGlvbiBzbyB0aGF0IGxpdC1odG1sIHdpbGwgY2FsbFxuICogdGhlIGZ1bmN0aW9uIGR1cmluZyB0ZW1wbGF0ZSByZW5kZXJpbmcsIHJhdGhlciB0aGFuIHBhc3NpbmcgYXMgYSB2YWx1ZS5cbiAqXG4gKiBBIF9kaXJlY3RpdmVfIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIFBhcnQgYXMgYW4gYXJndW1lbnQuIEl0IGhhcyB0aGVcbiAqIHNpZ25hdHVyZTogYChwYXJ0OiBQYXJ0KSA9PiB2b2lkYC5cbiAqXG4gKiBBIGRpcmVjdGl2ZSBfZmFjdG9yeV8gaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFyZ3VtZW50cyBmb3IgZGF0YSBhbmRcbiAqIGNvbmZpZ3VyYXRpb24gYW5kIHJldHVybnMgYSBkaXJlY3RpdmUuIFVzZXJzIG9mIGRpcmVjdGl2ZSB1c3VhbGx5IHJlZmVyIHRvXG4gKiB0aGUgZGlyZWN0aXZlIGZhY3RvcnkgYXMgdGhlIGRpcmVjdGl2ZS4gRm9yIGV4YW1wbGUsIFwiVGhlIHJlcGVhdCBkaXJlY3RpdmVcIi5cbiAqXG4gKiBVc3VhbGx5IGEgdGVtcGxhdGUgYXV0aG9yIHdpbGwgaW52b2tlIGEgZGlyZWN0aXZlIGZhY3RvcnkgaW4gdGhlaXIgdGVtcGxhdGVcbiAqIHdpdGggcmVsZXZhbnQgYXJndW1lbnRzLCB3aGljaCB3aWxsIHRoZW4gcmV0dXJuIGEgZGlyZWN0aXZlIGZ1bmN0aW9uLlxuICpcbiAqIEhlcmUncyBhbiBleGFtcGxlIG9mIHVzaW5nIHRoZSBgcmVwZWF0KClgIGRpcmVjdGl2ZSBmYWN0b3J5IHRoYXQgdGFrZXMgYW5cbiAqIGFycmF5IGFuZCBhIGZ1bmN0aW9uIHRvIHJlbmRlciBhbiBpdGVtOlxuICpcbiAqIGBgYGpzXG4gKiBodG1sYDx1bD48JHtyZXBlYXQoaXRlbXMsIChpdGVtKSA9PiBodG1sYDxsaT4ke2l0ZW19PC9saT5gKX08L3VsPmBcbiAqIGBgYFxuICpcbiAqIFdoZW4gYHJlcGVhdGAgaXMgaW52b2tlZCwgaXQgcmV0dXJucyBhIGRpcmVjdGl2ZSBmdW5jdGlvbiB0aGF0IGNsb3NlcyBvdmVyXG4gKiBgaXRlbXNgIGFuZCB0aGUgdGVtcGxhdGUgZnVuY3Rpb24uIFdoZW4gdGhlIG91dGVyIHRlbXBsYXRlIGlzIHJlbmRlcmVkLCB0aGVcbiAqIHJldHVybiBkaXJlY3RpdmUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggdGhlIFBhcnQgZm9yIHRoZSBleHByZXNzaW9uLlxuICogYHJlcGVhdGAgdGhlbiBwZXJmb3JtcyBpdCdzIGN1c3RvbSBsb2dpYyB0byByZW5kZXIgbXVsdGlwbGUgaXRlbXMuXG4gKlxuICogQHBhcmFtIGYgVGhlIGRpcmVjdGl2ZSBmYWN0b3J5IGZ1bmN0aW9uLiBNdXN0IGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFcbiAqIGZ1bmN0aW9uIG9mIHRoZSBzaWduYXR1cmUgYChwYXJ0OiBQYXJ0KSA9PiB2b2lkYC4gVGhlIHJldHVybmVkIGZ1bmN0aW9uIHdpbGxcbiAqIGJlIGNhbGxlZCB3aXRoIHRoZSBwYXJ0IG9iamVjdC5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGltcG9ydCB7ZGlyZWN0aXZlLCBodG1sfSBmcm9tICdsaXQtaHRtbCc7XG4gKlxuICogY29uc3QgaW1tdXRhYmxlID0gZGlyZWN0aXZlKCh2KSA9PiAocGFydCkgPT4ge1xuICogICBpZiAocGFydC52YWx1ZSAhPT0gdikge1xuICogICAgIHBhcnQuc2V0VmFsdWUodilcbiAqICAgfVxuICogfSk7XG4gKi9cbmV4cG9ydCBjb25zdCBkaXJlY3RpdmUgPSA8RiBleHRlbmRzIERpcmVjdGl2ZUZhY3Rvcnk+KGY6IEYpOiBGID0+XG4gICAgKCguLi5hcmdzOiB1bmtub3duW10pID0+IHtcbiAgICAgIGNvbnN0IGQgPSBmKC4uLmFyZ3MpO1xuICAgICAgZGlyZWN0aXZlcy5zZXQoZCwgdHJ1ZSk7XG4gICAgICByZXR1cm4gZDtcbiAgICB9KSBhcyBGO1xuXG5leHBvcnQgY29uc3QgaXNEaXJlY3RpdmUgPSAobzogdW5rbm93bik6IG8gaXMgRGlyZWN0aXZlRm4gPT4ge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdmdW5jdGlvbicgJiYgZGlyZWN0aXZlcy5oYXMobyk7XG59O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbnRlcmZhY2UgTWF5YmVQb2x5ZmlsbGVkQ2UgZXh0ZW5kcyBDdXN0b21FbGVtZW50UmVnaXN0cnkge1xuICByZWFkb25seSBwb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrPzogb2JqZWN0O1xufVxuXG4vKipcbiAqIFRydWUgaWYgdGhlIGN1c3RvbSBlbGVtZW50cyBwb2x5ZmlsbCBpcyBpbiB1c2UuXG4gKi9cbmV4cG9ydCBjb25zdCBpc0NFUG9seWZpbGwgPSB3aW5kb3cuY3VzdG9tRWxlbWVudHMgIT09IHVuZGVmaW5lZCAmJlxuICAgICh3aW5kb3cuY3VzdG9tRWxlbWVudHMgYXMgTWF5YmVQb2x5ZmlsbGVkQ2UpLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2sgIT09XG4gICAgICAgIHVuZGVmaW5lZDtcblxuLyoqXG4gKiBSZXBhcmVudHMgbm9kZXMsIHN0YXJ0aW5nIGZyb20gYHN0YXJ0YCAoaW5jbHVzaXZlKSB0byBgZW5kYCAoZXhjbHVzaXZlKSxcbiAqIGludG8gYW5vdGhlciBjb250YWluZXIgKGNvdWxkIGJlIHRoZSBzYW1lIGNvbnRhaW5lciksIGJlZm9yZSBgYmVmb3JlYC4gSWZcbiAqIGBiZWZvcmVgIGlzIG51bGwsIGl0IGFwcGVuZHMgdGhlIG5vZGVzIHRvIHRoZSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCByZXBhcmVudE5vZGVzID1cbiAgICAoY29udGFpbmVyOiBOb2RlLFxuICAgICBzdGFydDogTm9kZXxudWxsLFxuICAgICBlbmQ6IE5vZGV8bnVsbCA9IG51bGwsXG4gICAgIGJlZm9yZTogTm9kZXxudWxsID0gbnVsbCk6IHZvaWQgPT4ge1xuICAgICAgd2hpbGUgKHN0YXJ0ICE9PSBlbmQpIHtcbiAgICAgICAgY29uc3QgbiA9IHN0YXJ0IS5uZXh0U2libGluZztcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShzdGFydCEsIGJlZm9yZSk7XG4gICAgICAgIHN0YXJ0ID0gbjtcbiAgICAgIH1cbiAgICB9O1xuXG4vKipcbiAqIFJlbW92ZXMgbm9kZXMsIHN0YXJ0aW5nIGZyb20gYHN0YXJ0YCAoaW5jbHVzaXZlKSB0byBgZW5kYCAoZXhjbHVzaXZlKSwgZnJvbVxuICogYGNvbnRhaW5lcmAuXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVOb2RlcyA9XG4gICAgKGNvbnRhaW5lcjogTm9kZSwgc3RhcnQ6IE5vZGV8bnVsbCwgZW5kOiBOb2RlfG51bGwgPSBudWxsKTogdm9pZCA9PiB7XG4gICAgICB3aGlsZSAoc3RhcnQgIT09IGVuZCkge1xuICAgICAgICBjb25zdCBuID0gc3RhcnQhLm5leHRTaWJsaW5nO1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoc3RhcnQhKTtcbiAgICAgICAgc3RhcnQgPSBuO1xuICAgICAgfVxuICAgIH07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbi8qKlxuICogVGhlIFBhcnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBkeW5hbWljIHBhcnQgb2YgYSB0ZW1wbGF0ZSBpbnN0YW5jZSByZW5kZXJlZFxuICogYnkgbGl0LWh0bWwuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFydCB7XG4gIHJlYWRvbmx5IHZhbHVlOiB1bmtub3duO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJyZW50IHBhcnQgdmFsdWUsIGJ1dCBkb2VzIG5vdCB3cml0ZSBpdCB0byB0aGUgRE9NLlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRoYXQgd2lsbCBiZSBjb21taXR0ZWQuXG4gICAqL1xuICBzZXRWYWx1ZSh2YWx1ZTogdW5rbm93bik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENvbW1pdHMgdGhlIGN1cnJlbnQgcGFydCB2YWx1ZSwgY2F1c2luZyBpdCB0byBhY3R1YWxseSBiZSB3cml0dGVuIHRvIHRoZVxuICAgKiBET00uXG4gICAqXG4gICAqIERpcmVjdGl2ZXMgYXJlIHJ1biBhdCB0aGUgc3RhcnQgb2YgYGNvbW1pdGAsIHNvIHRoYXQgaWYgdGhleSBjYWxsXG4gICAqIGBwYXJ0LnNldFZhbHVlKC4uLilgIHN5bmNocm9ub3VzbHkgdGhhdCB2YWx1ZSB3aWxsIGJlIHVzZWQgaW4gdGhlIGN1cnJlbnRcbiAgICogY29tbWl0LCBhbmQgdGhlcmUncyBubyBuZWVkIHRvIGNhbGwgYHBhcnQuY29tbWl0KClgIHdpdGhpbiB0aGUgZGlyZWN0aXZlLlxuICAgKiBJZiBkaXJlY3RpdmVzIHNldCBhIHBhcnQgdmFsdWUgYXN5bmNocm9ub3VzbHksIHRoZW4gdGhleSBtdXN0IGNhbGxcbiAgICogYHBhcnQuY29tbWl0KClgIG1hbnVhbGx5LlxuICAgKi9cbiAgY29tbWl0KCk6IHZvaWQ7XG59XG5cbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgdGhhdCBhIHZhbHVlIHdhcyBoYW5kbGVkIGJ5IGEgZGlyZWN0aXZlIGFuZFxuICogc2hvdWxkIG5vdCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG4gKi9cbmV4cG9ydCBjb25zdCBub0NoYW5nZSA9IHt9O1xuXG4vKipcbiAqIEEgc2VudGluZWwgdmFsdWUgdGhhdCBzaWduYWxzIGEgTm9kZVBhcnQgdG8gZnVsbHkgY2xlYXIgaXRzIGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBub3RoaW5nID0ge307XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmltcG9ydCB7aXNDRVBvbHlmaWxsfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQge1BhcnR9IGZyb20gJy4vcGFydC5qcyc7XG5pbXBvcnQge1JlbmRlck9wdGlvbnN9IGZyb20gJy4vcmVuZGVyLW9wdGlvbnMuanMnO1xuaW1wb3J0IHtUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi90ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuaW1wb3J0IHtpc1RlbXBsYXRlUGFydEFjdGl2ZSwgVGVtcGxhdGUsIFRlbXBsYXRlUGFydH0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbi8qKlxuICogQW4gaW5zdGFuY2Ugb2YgYSBgVGVtcGxhdGVgIHRoYXQgY2FuIGJlIGF0dGFjaGVkIHRvIHRoZSBET00gYW5kIHVwZGF0ZWRcbiAqIHdpdGggbmV3IHZhbHVlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlSW5zdGFuY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IF9fcGFydHM6IEFycmF5PFBhcnR8dW5kZWZpbmVkPiA9IFtdO1xuICByZWFkb25seSBwcm9jZXNzb3I6IFRlbXBsYXRlUHJvY2Vzc29yO1xuICByZWFkb25seSBvcHRpb25zOiBSZW5kZXJPcHRpb25zO1xuICByZWFkb25seSB0ZW1wbGF0ZTogVGVtcGxhdGU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICB0ZW1wbGF0ZTogVGVtcGxhdGUsIHByb2Nlc3NvcjogVGVtcGxhdGVQcm9jZXNzb3IsXG4gICAgICBvcHRpb25zOiBSZW5kZXJPcHRpb25zKSB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICB1cGRhdGUodmFsdWVzOiBSZWFkb25seUFycmF5PHVua25vd24+KSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9fcGFydHMpIHtcbiAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZXNbaV0pO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5fX3BhcnRzKSB7XG4gICAgICBpZiAocGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcnQuY29tbWl0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2Nsb25lKCk6IERvY3VtZW50RnJhZ21lbnQge1xuICAgIC8vIFRoZXJlIGFyZSBhIG51bWJlciBvZiBzdGVwcyBpbiB0aGUgbGlmZWN5Y2xlIG9mIGEgdGVtcGxhdGUgaW5zdGFuY2Unc1xuICAgIC8vIERPTSBmcmFnbWVudDpcbiAgICAvLyAgMS4gQ2xvbmUgLSBjcmVhdGUgdGhlIGluc3RhbmNlIGZyYWdtZW50XG4gICAgLy8gIDIuIEFkb3B0IC0gYWRvcHQgaW50byB0aGUgbWFpbiBkb2N1bWVudFxuICAgIC8vICAzLiBQcm9jZXNzIC0gZmluZCBwYXJ0IG1hcmtlcnMgYW5kIGNyZWF0ZSBwYXJ0c1xuICAgIC8vICA0LiBVcGdyYWRlIC0gdXBncmFkZSBjdXN0b20gZWxlbWVudHNcbiAgICAvLyAgNS4gVXBkYXRlIC0gc2V0IG5vZGUsIGF0dHJpYnV0ZSwgcHJvcGVydHksIGV0Yy4sIHZhbHVlc1xuICAgIC8vICA2LiBDb25uZWN0IC0gY29ubmVjdCB0byB0aGUgZG9jdW1lbnQuIE9wdGlvbmFsIGFuZCBvdXRzaWRlIG9mIHRoaXNcbiAgICAvLyAgICAgbWV0aG9kLlxuICAgIC8vXG4gICAgLy8gV2UgaGF2ZSBhIGZldyBjb25zdHJhaW50cyBvbiB0aGUgb3JkZXJpbmcgb2YgdGhlc2Ugc3RlcHM6XG4gICAgLy8gICogV2UgbmVlZCB0byB1cGdyYWRlIGJlZm9yZSB1cGRhdGluZywgc28gdGhhdCBwcm9wZXJ0eSB2YWx1ZXMgd2lsbCBwYXNzXG4gICAgLy8gICAgdGhyb3VnaCBhbnkgcHJvcGVydHkgc2V0dGVycy5cbiAgICAvLyAgKiBXZSB3b3VsZCBsaWtlIHRvIHByb2Nlc3MgYmVmb3JlIHVwZ3JhZGluZyBzbyB0aGF0IHdlJ3JlIHN1cmUgdGhhdCB0aGVcbiAgICAvLyAgICBjbG9uZWQgZnJhZ21lbnQgaXMgaW5lcnQgYW5kIG5vdCBkaXN0dXJiZWQgYnkgc2VsZi1tb2RpZnlpbmcgRE9NLlxuICAgIC8vICAqIFdlIHdhbnQgY3VzdG9tIGVsZW1lbnRzIHRvIHVwZ3JhZGUgZXZlbiBpbiBkaXNjb25uZWN0ZWQgZnJhZ21lbnRzLlxuICAgIC8vXG4gICAgLy8gR2l2ZW4gdGhlc2UgY29uc3RyYWludHMsIHdpdGggZnVsbCBjdXN0b20gZWxlbWVudHMgc3VwcG9ydCB3ZSB3b3VsZFxuICAgIC8vIHByZWZlciB0aGUgb3JkZXI6IENsb25lLCBQcm9jZXNzLCBBZG9wdCwgVXBncmFkZSwgVXBkYXRlLCBDb25uZWN0XG4gICAgLy9cbiAgICAvLyBCdXQgU2FmYXJpIGRvb2VzIG5vdCBpbXBsZW1lbnQgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5I3VwZ3JhZGUsIHNvIHdlXG4gICAgLy8gY2FuIG5vdCBpbXBsZW1lbnQgdGhhdCBvcmRlciBhbmQgc3RpbGwgaGF2ZSB1cGdyYWRlLWJlZm9yZS11cGRhdGUgYW5kXG4gICAgLy8gdXBncmFkZSBkaXNjb25uZWN0ZWQgZnJhZ21lbnRzLiBTbyB3ZSBpbnN0ZWFkIHNhY3JpZmljZSB0aGVcbiAgICAvLyBwcm9jZXNzLWJlZm9yZS11cGdyYWRlIGNvbnN0cmFpbnQsIHNpbmNlIGluIEN1c3RvbSBFbGVtZW50cyB2MSBlbGVtZW50c1xuICAgIC8vIG11c3Qgbm90IG1vZGlmeSB0aGVpciBsaWdodCBET00gaW4gdGhlIGNvbnN0cnVjdG9yLiBXZSBzdGlsbCBoYXZlIGlzc3Vlc1xuICAgIC8vIHdoZW4gY28tZXhpc3Rpbmcgd2l0aCBDRXYwIGVsZW1lbnRzIGxpa2UgUG9seW1lciAxLCBhbmQgd2l0aCBwb2x5ZmlsbHNcbiAgICAvLyB0aGF0IGRvbid0IHN0cmljdGx5IGFkaGVyZSB0byB0aGUgbm8tbW9kaWZpY2F0aW9uIHJ1bGUgYmVjYXVzZSBzaGFkb3dcbiAgICAvLyBET00sIHdoaWNoIG1heSBiZSBjcmVhdGVkIGluIHRoZSBjb25zdHJ1Y3RvciwgaXMgZW11bGF0ZWQgYnkgYmVpbmcgcGxhY2VkXG4gICAgLy8gaW4gdGhlIGxpZ2h0IERPTS5cbiAgICAvL1xuICAgIC8vIFRoZSByZXN1bHRpbmcgb3JkZXIgaXMgb24gbmF0aXZlIGlzOiBDbG9uZSwgQWRvcHQsIFVwZ3JhZGUsIFByb2Nlc3MsXG4gICAgLy8gVXBkYXRlLCBDb25uZWN0LiBkb2N1bWVudC5pbXBvcnROb2RlKCkgcGVyZm9ybXMgQ2xvbmUsIEFkb3B0LCBhbmQgVXBncmFkZVxuICAgIC8vIGluIG9uZSBzdGVwLlxuICAgIC8vXG4gICAgLy8gVGhlIEN1c3RvbSBFbGVtZW50cyB2MSBwb2x5ZmlsbCBzdXBwb3J0cyB1cGdyYWRlKCksIHNvIHRoZSBvcmRlciB3aGVuXG4gICAgLy8gcG9seWZpbGxlZCBpcyB0aGUgbW9yZSBpZGVhbDogQ2xvbmUsIFByb2Nlc3MsIEFkb3B0LCBVcGdyYWRlLCBVcGRhdGUsXG4gICAgLy8gQ29ubmVjdC5cblxuICAgIGNvbnN0IGZyYWdtZW50ID0gaXNDRVBvbHlmaWxsID9cbiAgICAgICAgdGhpcy50ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIERvY3VtZW50RnJhZ21lbnQgOlxuICAgICAgICBkb2N1bWVudC5pbXBvcnROb2RlKHRoaXMudGVtcGxhdGUuZWxlbWVudC5jb250ZW50LCB0cnVlKTtcblxuICAgIGNvbnN0IHN0YWNrOiBOb2RlW10gPSBbXTtcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMudGVtcGxhdGUucGFydHM7XG4gICAgLy8gRWRnZSBuZWVkcyBhbGwgNCBwYXJhbWV0ZXJzIHByZXNlbnQ7IElFMTEgbmVlZHMgM3JkIHBhcmFtZXRlciB0byBiZSBudWxsXG4gICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihcbiAgICAgICAgZnJhZ21lbnQsXG4gICAgICAgIDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVHxURVhUfSAqLyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UpO1xuICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgIGxldCBub2RlSW5kZXggPSAwO1xuICAgIGxldCBwYXJ0OiBUZW1wbGF0ZVBhcnQ7XG4gICAgbGV0IG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAvLyBMb29wIHRocm91Z2ggYWxsIHRoZSBub2RlcyBhbmQgcGFydHMgb2YgYSB0ZW1wbGF0ZVxuICAgIHdoaWxlIChwYXJ0SW5kZXggPCBwYXJ0cy5sZW5ndGgpIHtcbiAgICAgIHBhcnQgPSBwYXJ0c1twYXJ0SW5kZXhdO1xuICAgICAgaWYgKCFpc1RlbXBsYXRlUGFydEFjdGl2ZShwYXJ0KSkge1xuICAgICAgICB0aGlzLl9fcGFydHMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIFByb2dyZXNzIHRoZSB0cmVlIHdhbGtlciB1bnRpbCB3ZSBmaW5kIG91ciBuZXh0IHBhcnQncyBub2RlLlxuICAgICAgLy8gTm90ZSB0aGF0IG11bHRpcGxlIHBhcnRzIG1heSBzaGFyZSB0aGUgc2FtZSBub2RlIChhdHRyaWJ1dGUgcGFydHNcbiAgICAgIC8vIG9uIGEgc2luZ2xlIGVsZW1lbnQpLCBzbyB0aGlzIGxvb3AgbWF5IG5vdCBydW4gYXQgYWxsLlxuICAgICAgd2hpbGUgKG5vZGVJbmRleCA8IHBhcnQuaW5kZXgpIHtcbiAgICAgICAgbm9kZUluZGV4Kys7XG4gICAgICAgIGlmIChub2RlIS5ub2RlTmFtZSA9PT0gJ1RFTVBMQVRFJykge1xuICAgICAgICAgIHN0YWNrLnB1c2gobm9kZSEpO1xuICAgICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IChub2RlIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQpLmNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChub2RlID0gd2Fsa2VyLm5leHROb2RlKCkpID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gV2UndmUgZXhoYXVzdGVkIHRoZSBjb250ZW50IGluc2lkZSBhIG5lc3RlZCB0ZW1wbGF0ZSBlbGVtZW50LlxuICAgICAgICAgIC8vIEJlY2F1c2Ugd2Ugc3RpbGwgaGF2ZSBwYXJ0cyAodGhlIG91dGVyIGZvci1sb29wKSwgd2Uga25vdzpcbiAgICAgICAgICAvLyAtIFRoZXJlIGlzIGEgdGVtcGxhdGUgaW4gdGhlIHN0YWNrXG4gICAgICAgICAgLy8gLSBUaGUgd2Fsa2VyIHdpbGwgZmluZCBhIG5leHROb2RlIG91dHNpZGUgdGhlIHRlbXBsYXRlXG4gICAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gc3RhY2sucG9wKCkhO1xuICAgICAgICAgIG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBXZSd2ZSBhcnJpdmVkIGF0IG91ciBwYXJ0J3Mgbm9kZS5cbiAgICAgIGlmIChwYXJ0LnR5cGUgPT09ICdub2RlJykge1xuICAgICAgICBjb25zdCBwYXJ0ID0gdGhpcy5wcm9jZXNzb3IuaGFuZGxlVGV4dEV4cHJlc3Npb24odGhpcy5vcHRpb25zKTtcbiAgICAgICAgcGFydC5pbnNlcnRBZnRlck5vZGUobm9kZSEucHJldmlvdXNTaWJsaW5nISk7XG4gICAgICAgIHRoaXMuX19wYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fX3BhcnRzLnB1c2goLi4udGhpcy5wcm9jZXNzb3IuaGFuZGxlQXR0cmlidXRlRXhwcmVzc2lvbnMoXG4gICAgICAgICAgICBub2RlIGFzIEVsZW1lbnQsIHBhcnQubmFtZSwgcGFydC5zdHJpbmdzLCB0aGlzLm9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICAgIHBhcnRJbmRleCsrO1xuICAgIH1cblxuICAgIGlmIChpc0NFUG9seWZpbGwpIHtcbiAgICAgIGRvY3VtZW50LmFkb3B0Tm9kZShmcmFnbWVudCk7XG4gICAgICBjdXN0b21FbGVtZW50cy51cGdyYWRlKGZyYWdtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmltcG9ydCB7VGVtcGxhdGVSZXN1bHR9IGZyb20gJy4vdGVtcGxhdGUtcmVzdWx0LmpzJztcblxuLyoqXG4gKiBBbiBleHByZXNzaW9uIG1hcmtlciB3aXRoIGVtYmVkZGVkIHVuaXF1ZSBrZXkgdG8gYXZvaWQgY29sbGlzaW9uIHdpdGhcbiAqIHBvc3NpYmxlIHRleHQgaW4gdGVtcGxhdGVzLlxuICovXG5leHBvcnQgY29uc3QgbWFya2VyID0gYHt7bGl0LSR7U3RyaW5nKE1hdGgucmFuZG9tKCkpLnNsaWNlKDIpfX19YDtcblxuLyoqXG4gKiBBbiBleHByZXNzaW9uIG1hcmtlciB1c2VkIHRleHQtcG9zaXRpb25zLCBtdWx0aS1iaW5kaW5nIGF0dHJpYnV0ZXMsIGFuZFxuICogYXR0cmlidXRlcyB3aXRoIG1hcmt1cC1saWtlIHRleHQgdmFsdWVzLlxuICovXG5leHBvcnQgY29uc3Qgbm9kZU1hcmtlciA9IGA8IS0tJHttYXJrZXJ9LS0+YDtcblxuZXhwb3J0IGNvbnN0IG1hcmtlclJlZ2V4ID0gbmV3IFJlZ0V4cChgJHttYXJrZXJ9fCR7bm9kZU1hcmtlcn1gKTtcblxuLyoqXG4gKiBTdWZmaXggYXBwZW5kZWQgdG8gYWxsIGJvdW5kIGF0dHJpYnV0ZSBuYW1lcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGJvdW5kQXR0cmlidXRlU3VmZml4ID0gJyRsaXQkJztcblxuLyoqXG4gKiBBbiB1cGRhdGVhYmxlIFRlbXBsYXRlIHRoYXQgdHJhY2tzIHRoZSBsb2NhdGlvbiBvZiBkeW5hbWljIHBhcnRzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUge1xuICByZWFkb25seSBwYXJ0czogVGVtcGxhdGVQYXJ0W10gPSBbXTtcbiAgcmVhZG9ubHkgZWxlbWVudDogSFRNTFRlbXBsYXRlRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0LCBlbGVtZW50OiBIVE1MVGVtcGxhdGVFbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIGNvbnN0IG5vZGVzVG9SZW1vdmU6IE5vZGVbXSA9IFtdO1xuICAgIGNvbnN0IHN0YWNrOiBOb2RlW10gPSBbXTtcbiAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlIG51bGxcbiAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgICAgICBlbGVtZW50LmNvbnRlbnQsXG4gICAgICAgIDEzMyAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVHxURVhUfSAqLyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8vIEtlZXBzIHRyYWNrIG9mIHRoZSBsYXN0IGluZGV4IGFzc29jaWF0ZWQgd2l0aCBhIHBhcnQuIFdlIHRyeSB0byBkZWxldGVcbiAgICAvLyB1bm5lY2Vzc2FyeSBub2RlcywgYnV0IHdlIG5ldmVyIHdhbnQgdG8gYXNzb2NpYXRlIHR3byBkaWZmZXJlbnQgcGFydHNcbiAgICAvLyB0byB0aGUgc2FtZSBpbmRleC4gVGhleSBtdXN0IGhhdmUgYSBjb25zdGFudCBub2RlIGJldHdlZW4uXG4gICAgbGV0IGxhc3RQYXJ0SW5kZXggPSAwO1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgIGNvbnN0IHtzdHJpbmdzLCB2YWx1ZXM6IHtsZW5ndGh9fSA9IHJlc3VsdDtcbiAgICB3aGlsZSAocGFydEluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjb25zdCBub2RlID0gd2Fsa2VyLm5leHROb2RlKCkgYXMgRWxlbWVudCB8IENvbW1lbnQgfCBUZXh0IHwgbnVsbDtcbiAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIC8vIFdlJ3ZlIGV4aGF1c3RlZCB0aGUgY29udGVudCBpbnNpZGUgYSBuZXN0ZWQgdGVtcGxhdGUgZWxlbWVudC5cbiAgICAgICAgLy8gQmVjYXVzZSB3ZSBzdGlsbCBoYXZlIHBhcnRzICh0aGUgb3V0ZXIgZm9yLWxvb3ApLCB3ZSBrbm93OlxuICAgICAgICAvLyAtIFRoZXJlIGlzIGEgdGVtcGxhdGUgaW4gdGhlIHN0YWNrXG4gICAgICAgIC8vIC0gVGhlIHdhbGtlciB3aWxsIGZpbmQgYSBuZXh0Tm9kZSBvdXRzaWRlIHRoZSB0ZW1wbGF0ZVxuICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBzdGFjay5wb3AoKSE7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaW5kZXgrKztcblxuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogTm9kZS5FTEVNRU5UX05PREUgKi8pIHtcbiAgICAgICAgaWYgKChub2RlIGFzIEVsZW1lbnQpLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSAobm9kZSBhcyBFbGVtZW50KS5hdHRyaWJ1dGVzO1xuICAgICAgICAgIGNvbnN0IHtsZW5ndGh9ID0gYXR0cmlidXRlcztcbiAgICAgICAgICAvLyBQZXJcbiAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTmFtZWROb2RlTWFwLFxuICAgICAgICAgIC8vIGF0dHJpYnV0ZXMgYXJlIG5vdCBndWFyYW50ZWVkIHRvIGJlIHJldHVybmVkIGluIGRvY3VtZW50IG9yZGVyLlxuICAgICAgICAgIC8vIEluIHBhcnRpY3VsYXIsIEVkZ2UvSUUgY2FuIHJldHVybiB0aGVtIG91dCBvZiBvcmRlciwgc28gd2UgY2Fubm90XG4gICAgICAgICAgLy8gYXNzdW1lIGEgY29ycmVzcG9uZGVuY2UgYmV0d2VlbiBwYXJ0IGluZGV4IGFuZCBhdHRyaWJ1dGUgaW5kZXguXG4gICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZW5kc1dpdGgoYXR0cmlidXRlc1tpXS5uYW1lLCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCkpIHtcbiAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2hpbGUgKGNvdW50LS0gPiAwKSB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIHRlbXBsYXRlIGxpdGVyYWwgc2VjdGlvbiBsZWFkaW5nIHVwIHRvIHRoZSBmaXJzdFxuICAgICAgICAgICAgLy8gZXhwcmVzc2lvbiBpbiB0aGlzIGF0dHJpYnV0ZVxuICAgICAgICAgICAgY29uc3Qgc3RyaW5nRm9yUGFydCA9IHN0cmluZ3NbcGFydEluZGV4XTtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHN0cmluZ0ZvclBhcnQpIVsyXTtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGNvcnJlc3BvbmRpbmcgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBBbGwgYm91bmQgYXR0cmlidXRlcyBoYXZlIGhhZCBhIHN1ZmZpeCBhZGRlZCBpblxuICAgICAgICAgICAgLy8gVGVtcGxhdGVSZXN1bHQjZ2V0SFRNTCB0byBvcHQgb3V0IG9mIHNwZWNpYWwgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBoYW5kbGluZy4gVG8gbG9vayB1cCB0aGUgYXR0cmlidXRlIHZhbHVlIHdlIGFsc28gbmVlZCB0byBhZGRcbiAgICAgICAgICAgIC8vIHRoZSBzdWZmaXguXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVMb29rdXBOYW1lID1cbiAgICAgICAgICAgICAgICBuYW1lLnRvTG93ZXJDYXNlKCkgKyBib3VuZEF0dHJpYnV0ZVN1ZmZpeDtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID1cbiAgICAgICAgICAgICAgICAobm9kZSBhcyBFbGVtZW50KS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTG9va3VwTmFtZSkhO1xuICAgICAgICAgICAgKG5vZGUgYXMgRWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZUxvb2t1cE5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljcyA9IGF0dHJpYnV0ZVZhbHVlLnNwbGl0KG1hcmtlclJlZ2V4KTtcbiAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7dHlwZTogJ2F0dHJpYnV0ZScsIGluZGV4LCBuYW1lLCBzdHJpbmdzOiBzdGF0aWNzfSk7XG4gICAgICAgICAgICBwYXJ0SW5kZXggKz0gc3RhdGljcy5sZW5ndGggLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKG5vZGUgYXMgRWxlbWVudCkudGFnTmFtZSA9PT0gJ1RFTVBMQVRFJykge1xuICAgICAgICAgIHN0YWNrLnB1c2gobm9kZSk7XG4gICAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gKG5vZGUgYXMgSFRNTFRlbXBsYXRlRWxlbWVudCkuY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSAzIC8qIE5vZGUuVEVYVF9OT0RFICovKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSAobm9kZSBhcyBUZXh0KS5kYXRhO1xuICAgICAgICBpZiAoZGF0YS5pbmRleE9mKG1hcmtlcikgPj0gMCkge1xuICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZSE7XG4gICAgICAgICAgY29uc3Qgc3RyaW5ncyA9IGRhdGEuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyB0ZXh0IG5vZGUgZm9yIGVhY2ggbGl0ZXJhbCBzZWN0aW9uXG4gICAgICAgICAgLy8gVGhlc2Ugbm9kZXMgYXJlIGFsc28gdXNlZCBhcyB0aGUgbWFya2VycyBmb3Igbm9kZSBwYXJ0c1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpbnNlcnQ6IE5vZGU7XG4gICAgICAgICAgICBsZXQgcyA9IHN0cmluZ3NbaV07XG4gICAgICAgICAgICBpZiAocyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgaW5zZXJ0ID0gY3JlYXRlTWFya2VyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXguZXhlYyhzKTtcbiAgICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBudWxsICYmIGVuZHNXaXRoKG1hdGNoWzJdLCBib3VuZEF0dHJpYnV0ZVN1ZmZpeCkpIHtcbiAgICAgICAgICAgICAgICBzID0gcy5zbGljZSgwLCBtYXRjaC5pbmRleCkgKyBtYXRjaFsxXSArXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoWzJdLnNsaWNlKDAsIC1ib3VuZEF0dHJpYnV0ZVN1ZmZpeC5sZW5ndGgpICsgbWF0Y2hbM107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5zZXJ0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGluc2VydCwgbm9kZSk7XG4gICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goe3R5cGU6ICdub2RlJywgaW5kZXg6ICsraW5kZXh9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gSWYgdGhlcmUncyBubyB0ZXh0LCB3ZSBtdXN0IGluc2VydCBhIGNvbW1lbnQgdG8gbWFyayBvdXIgcGxhY2UuXG4gICAgICAgICAgLy8gRWxzZSwgd2UgY2FuIHRydXN0IGl0IHdpbGwgc3RpY2sgYXJvdW5kIGFmdGVyIGNsb25pbmcuXG4gICAgICAgICAgaWYgKHN0cmluZ3NbbGFzdEluZGV4XSA9PT0gJycpIHtcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgICAgbm9kZXNUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAobm9kZSBhcyBUZXh0KS5kYXRhID0gc3RyaW5nc1tsYXN0SW5kZXhdO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBXZSBoYXZlIGEgcGFydCBmb3IgZWFjaCBtYXRjaCBmb3VuZFxuICAgICAgICAgIHBhcnRJbmRleCArPSBsYXN0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBOb2RlLkNPTU1FTlRfTk9ERSAqLykge1xuICAgICAgICBpZiAoKG5vZGUgYXMgQ29tbWVudCkuZGF0YSA9PT0gbWFya2VyKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlITtcbiAgICAgICAgICAvLyBBZGQgYSBuZXcgbWFya2VyIG5vZGUgdG8gYmUgdGhlIHN0YXJ0Tm9kZSBvZiB0aGUgUGFydCBpZiBhbnkgb2ZcbiAgICAgICAgICAvLyB0aGUgZm9sbG93aW5nIGFyZSB0cnVlOlxuICAgICAgICAgIC8vICAqIFdlIGRvbid0IGhhdmUgYSBwcmV2aW91c1NpYmxpbmdcbiAgICAgICAgICAvLyAgKiBUaGUgcHJldmlvdXNTaWJsaW5nIGlzIGFscmVhZHkgdGhlIHN0YXJ0IG9mIGEgcHJldmlvdXMgcGFydFxuICAgICAgICAgIGlmIChub2RlLnByZXZpb3VzU2libGluZyA9PT0gbnVsbCB8fCBpbmRleCA9PT0gbGFzdFBhcnRJbmRleCkge1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlTWFya2VyKCksIG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsYXN0UGFydEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHt0eXBlOiAnbm9kZScsIGluZGV4fSk7XG4gICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIG5leHRTaWJsaW5nLCBrZWVwIHRoaXMgbm9kZSBzbyB3ZSBoYXZlIGFuIGVuZC5cbiAgICAgICAgICAvLyBFbHNlLCB3ZSBjYW4gcmVtb3ZlIGl0IHRvIHNhdmUgZnV0dXJlIGNvc3RzLlxuICAgICAgICAgIGlmIChub2RlLm5leHRTaWJsaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgICAobm9kZSBhcyBDb21tZW50KS5kYXRhID0gJyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGVzVG9SZW1vdmUucHVzaChub2RlKTtcbiAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgd2hpbGUgKChpID0gKG5vZGUgYXMgQ29tbWVudCkuZGF0YS5pbmRleE9mKG1hcmtlciwgaSArIDEpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIENvbW1lbnQgbm9kZSBoYXMgYSBiaW5kaW5nIG1hcmtlciBpbnNpZGUsIG1ha2UgYW4gaW5hY3RpdmUgcGFydFxuICAgICAgICAgICAgLy8gVGhlIGJpbmRpbmcgd29uJ3Qgd29yaywgYnV0IHN1YnNlcXVlbnQgYmluZGluZ3Mgd2lsbFxuICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGNvbnNpZGVyIHdoZXRoZXIgaXQncyBldmVuIHdvcnRoIGl0IHRvXG4gICAgICAgICAgICAvLyBtYWtlIGJpbmRpbmdzIGluIGNvbW1lbnRzIHdvcmtcbiAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7dHlwZTogJ25vZGUnLCBpbmRleDogLTF9KTtcbiAgICAgICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSB0ZXh0IGJpbmRpbmcgbm9kZXMgYWZ0ZXIgdGhlIHdhbGsgdG8gbm90IGRpc3R1cmIgdGhlIFRyZWVXYWxrZXJcbiAgICBmb3IgKGNvbnN0IG4gb2Ygbm9kZXNUb1JlbW92ZSkge1xuICAgICAgbi5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZChuKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZW5kc1dpdGggPSAoc3RyOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RyLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGg7XG4gIHJldHVybiBpbmRleCA+PSAwICYmIHN0ci5zbGljZShpbmRleCkgPT09IHN1ZmZpeDtcbn07XG5cbi8qKlxuICogQSBwbGFjZWhvbGRlciBmb3IgYSBkeW5hbWljIGV4cHJlc3Npb24gaW4gYW4gSFRNTCB0ZW1wbGF0ZS5cbiAqXG4gKiBUaGVyZSBhcmUgdHdvIGJ1aWx0LWluIHBhcnQgdHlwZXM6IEF0dHJpYnV0ZVBhcnQgYW5kIE5vZGVQYXJ0LiBOb2RlUGFydHNcbiAqIGFsd2F5cyByZXByZXNlbnQgYSBzaW5nbGUgZHluYW1pYyBleHByZXNzaW9uLCB3aGlsZSBBdHRyaWJ1dGVQYXJ0cyBtYXlcbiAqIHJlcHJlc2VudCBhcyBtYW55IGV4cHJlc3Npb25zIGFyZSBjb250YWluZWQgaW4gdGhlIGF0dHJpYnV0ZS5cbiAqXG4gKiBBIFRlbXBsYXRlJ3MgcGFydHMgYXJlIG11dGFibGUsIHNvIHBhcnRzIGNhbiBiZSByZXBsYWNlZCBvciBtb2RpZmllZFxuICogKHBvc3NpYmx5IHRvIGltcGxlbWVudCBkaWZmZXJlbnQgdGVtcGxhdGUgc2VtYW50aWNzKS4gVGhlIGNvbnRyYWN0IGlzIHRoYXRcbiAqIHBhcnRzIGNhbiBvbmx5IGJlIHJlcGxhY2VkLCBub3QgcmVtb3ZlZCwgYWRkZWQgb3IgcmVvcmRlcmVkLCBhbmQgcGFydHMgbXVzdFxuICogYWx3YXlzIGNvbnN1bWUgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIHZhbHVlcyBpbiB0aGVpciBgdXBkYXRlKClgIG1ldGhvZC5cbiAqXG4gKiBUT0RPKGp1c3RpbmZhZ25hbmkpOiBUaGF0IHJlcXVpcmVtZW50IGlzIGEgbGl0dGxlIGZyYWdpbGUuIEFcbiAqIFRlbXBsYXRlSW5zdGFuY2UgY291bGQgaW5zdGVhZCBiZSBtb3JlIGNhcmVmdWwgYWJvdXQgd2hpY2ggdmFsdWVzIGl0IGdpdmVzXG4gKiB0byBQYXJ0LnVwZGF0ZSgpLlxuICovXG5leHBvcnQgdHlwZSBUZW1wbGF0ZVBhcnQgPSB7XG4gIHJlYWRvbmx5IHR5cGU6ICdub2RlJyxcbiAgaW5kZXg6IG51bWJlclxufXx7cmVhZG9ubHkgdHlwZTogJ2F0dHJpYnV0ZScsIGluZGV4OiBudW1iZXIsIHJlYWRvbmx5IG5hbWU6IHN0cmluZywgcmVhZG9ubHkgc3RyaW5nczogUmVhZG9ubHlBcnJheTxzdHJpbmc+fTtcblxuZXhwb3J0IGNvbnN0IGlzVGVtcGxhdGVQYXJ0QWN0aXZlID0gKHBhcnQ6IFRlbXBsYXRlUGFydCkgPT4gcGFydC5pbmRleCAhPT0gLTE7XG5cbi8vIEFsbG93cyBgZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJylgIHRvIGJlIHJlbmFtZWQgZm9yIGFcbi8vIHNtYWxsIG1hbnVhbCBzaXplLXNhdmluZ3MuXG5leHBvcnQgY29uc3QgY3JlYXRlTWFya2VyID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG5cbi8qKlxuICogVGhpcyByZWdleCBleHRyYWN0cyB0aGUgYXR0cmlidXRlIG5hbWUgcHJlY2VkaW5nIGFuIGF0dHJpYnV0ZS1wb3NpdGlvblxuICogZXhwcmVzc2lvbi4gSXQgZG9lcyB0aGlzIGJ5IG1hdGNoaW5nIHRoZSBzeW50YXggYWxsb3dlZCBmb3IgYXR0cmlidXRlc1xuICogYWdhaW5zdCB0aGUgc3RyaW5nIGxpdGVyYWwgZGlyZWN0bHkgcHJlY2VkaW5nIHRoZSBleHByZXNzaW9uLCBhc3N1bWluZyB0aGF0XG4gKiB0aGUgZXhwcmVzc2lvbiBpcyBpbiBhbiBhdHRyaWJ1dGUtdmFsdWUgcG9zaXRpb24uXG4gKlxuICogU2VlIGF0dHJpYnV0ZXMgaW4gdGhlIEhUTUwgc3BlYzpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNlbGVtZW50cy1hdHRyaWJ1dGVzXG4gKlxuICogXCIgXFx4MDlcXHgwYVxceDBjXFx4MGRcIiBhcmUgSFRNTCBzcGFjZSBjaGFyYWN0ZXJzOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L2luZnJhc3RydWN0dXJlLmh0bWwjc3BhY2UtY2hhcmFjdGVyc1xuICpcbiAqIFwiXFwwLVxceDFGXFx4N0YtXFx4OUZcIiBhcmUgVW5pY29kZSBjb250cm9sIGNoYXJhY3RlcnMsIHdoaWNoIGluY2x1ZGVzIGV2ZXJ5XG4gKiBzcGFjZSBjaGFyYWN0ZXIgZXhjZXB0IFwiIFwiLlxuICpcbiAqIFNvIGFuIGF0dHJpYnV0ZSBpczpcbiAqICAqIFRoZSBuYW1lOiBhbnkgY2hhcmFjdGVyIGV4Y2VwdCBhIGNvbnRyb2wgY2hhcmFjdGVyLCBzcGFjZSBjaGFyYWN0ZXIsICgnKSxcbiAqICAgIChcIiksIFwiPlwiLCBcIj1cIiwgb3IgXCIvXCJcbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieSBcIj1cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5OlxuICogICAgKiBBbnkgY2hhcmFjdGVyIGV4Y2VwdCBzcGFjZSwgKCcpLCAoXCIpLCBcIjxcIiwgXCI+XCIsIFwiPVwiLCAoYCksIG9yXG4gKiAgICAqIChcIikgdGhlbiBhbnkgbm9uLShcIiksIG9yXG4gKiAgICAqICgnKSB0aGVuIGFueSBub24tKCcpXG4gKi9cbmV4cG9ydCBjb25zdCBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4ID1cbiAgICAvKFsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKShbXlxcMC1cXHgxRlxceDdGLVxceDlGIFwiJz49L10rKShbIFxceDA5XFx4MGFcXHgwY1xceDBkXSo9WyBcXHgwOVxceDBhXFx4MGNcXHgwZF0qKD86W14gXFx4MDlcXHgwYVxceDBjXFx4MGRcIidgPD49XSp8XCJbXlwiXSp8J1teJ10qKSkkLztcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtyZXBhcmVudE5vZGVzfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQge1RlbXBsYXRlUHJvY2Vzc29yfSBmcm9tICcuL3RlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5pbXBvcnQge2JvdW5kQXR0cmlidXRlU3VmZml4LCBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LCBtYXJrZXIsIG5vZGVNYXJrZXJ9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuXG4vKipcbiAqIFRoZSByZXR1cm4gdHlwZSBvZiBgaHRtbGAsIHdoaWNoIGhvbGRzIGEgVGVtcGxhdGUgYW5kIHRoZSB2YWx1ZXMgZnJvbVxuICogaW50ZXJwb2xhdGVkIGV4cHJlc3Npb25zLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVSZXN1bHQge1xuICByZWFkb25seSBzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheTtcbiAgcmVhZG9ubHkgdmFsdWVzOiBSZWFkb25seUFycmF5PHVua25vd24+O1xuICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHByb2Nlc3NvcjogVGVtcGxhdGVQcm9jZXNzb3I7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgdmFsdWVzOiBSZWFkb25seUFycmF5PHVua25vd24+LFxuICAgICAgdHlwZTogc3RyaW5nLCBwcm9jZXNzb3I6IFRlbXBsYXRlUHJvY2Vzc29yKSB7XG4gICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucHJvY2Vzc29yID0gcHJvY2Vzc29yO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgb2YgSFRNTCB1c2VkIHRvIGNyZWF0ZSBhIGA8dGVtcGxhdGU+YCBlbGVtZW50LlxuICAgKi9cbiAgZ2V0SFRNTCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGwgPSB0aGlzLnN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIGxldCBpc0NvbW1lbnRCaW5kaW5nID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgcyA9IHRoaXMuc3RyaW5nc1tpXTtcbiAgICAgIC8vIEZvciBlYWNoIGJpbmRpbmcgd2Ugd2FudCB0byBkZXRlcm1pbmUgdGhlIGtpbmQgb2YgbWFya2VyIHRvIGluc2VydFxuICAgICAgLy8gaW50byB0aGUgdGVtcGxhdGUgc291cmNlIGJlZm9yZSBpdCdzIHBhcnNlZCBieSB0aGUgYnJvd3NlcidzIEhUTUxcbiAgICAgIC8vIHBhcnNlci4gVGhlIG1hcmtlciB0eXBlIGlzIGJhc2VkIG9uIHdoZXRoZXIgdGhlIGV4cHJlc3Npb24gaXMgaW4gYW5cbiAgICAgIC8vIGF0dHJpYnV0ZSwgdGV4dCwgb3IgY29tbWVudCBwb2lzaXRpb24uXG4gICAgICAvLyAgICogRm9yIG5vZGUtcG9zaXRpb24gYmluZGluZ3Mgd2UgaW5zZXJ0IGEgY29tbWVudCB3aXRoIHRoZSBtYXJrZXJcbiAgICAgIC8vICAgICBzZW50aW5lbCBhcyBpdHMgdGV4dCBjb250ZW50LCBsaWtlIDwhLS17e2xpdC1ndWlkfX0tLT4uXG4gICAgICAvLyAgICogRm9yIGF0dHJpYnV0ZSBiaW5kaW5ncyB3ZSBpbnNlcnQganVzdCB0aGUgbWFya2VyIHNlbnRpbmVsIGZvciB0aGVcbiAgICAgIC8vICAgICBmaXJzdCBiaW5kaW5nLCBzbyB0aGF0IHdlIHN1cHBvcnQgdW5xdW90ZWQgYXR0cmlidXRlIGJpbmRpbmdzLlxuICAgICAgLy8gICAgIFN1YnNlcXVlbnQgYmluZGluZ3MgY2FuIHVzZSBhIGNvbW1lbnQgbWFya2VyIGJlY2F1c2UgbXVsdGktYmluZGluZ1xuICAgICAgLy8gICAgIGF0dHJpYnV0ZXMgbXVzdCBiZSBxdW90ZWQuXG4gICAgICAvLyAgICogRm9yIGNvbW1lbnQgYmluZGluZ3Mgd2UgaW5zZXJ0IGp1c3QgdGhlIG1hcmtlciBzZW50aW5lbCBzbyB3ZSBkb24ndFxuICAgICAgLy8gICAgIGNsb3NlIHRoZSBjb21tZW50LlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBmb2xsb3dpbmcgY29kZSBzY2FucyB0aGUgdGVtcGxhdGUgc291cmNlLCBidXQgaXMgKm5vdCogYW4gSFRNTFxuICAgICAgLy8gcGFyc2VyLiBXZSBkb24ndCBuZWVkIHRvIHRyYWNrIHRoZSB0cmVlIHN0cnVjdHVyZSBvZiB0aGUgSFRNTCwgb25seVxuICAgICAgLy8gd2hldGhlciBhIGJpbmRpbmcgaXMgaW5zaWRlIGEgY29tbWVudCwgYW5kIGlmIG5vdCwgaWYgaXQgYXBwZWFycyB0byBiZVxuICAgICAgLy8gdGhlIGZpcnN0IGJpbmRpbmcgaW4gYW4gYXR0cmlidXRlLlxuICAgICAgY29uc3QgY29tbWVudE9wZW4gPSBzLmxhc3RJbmRleE9mKCc8IS0tJyk7XG4gICAgICAvLyBXZSdyZSBpbiBjb21tZW50IHBvc2l0aW9uIGlmIHdlIGhhdmUgYSBjb21tZW50IG9wZW4gd2l0aCBubyBmb2xsb3dpbmdcbiAgICAgIC8vIGNvbW1lbnQgY2xvc2UuIEJlY2F1c2UgPC0tIGNhbiBhcHBlYXIgaW4gYW4gYXR0cmlidXRlIHZhbHVlIHRoZXJlIGNhblxuICAgICAgLy8gYmUgZmFsc2UgcG9zaXRpdmVzLlxuICAgICAgaXNDb21tZW50QmluZGluZyA9IChjb21tZW50T3BlbiA+IC0xIHx8IGlzQ29tbWVudEJpbmRpbmcpICYmXG4gICAgICAgICAgcy5pbmRleE9mKCctLT4nLCBjb21tZW50T3BlbiArIDEpID09PSAtMTtcbiAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB3ZSBoYXZlIGFuIGF0dHJpYnV0ZS1saWtlIHNlcXVlbmNlIHByZWNlZWRpbmcgdGhlXG4gICAgICAvLyBleHByZXNzaW9uLiBUaGlzIGNhbiBtYXRjaCBcIm5hbWU9dmFsdWVcIiBsaWtlIHN0cnVjdHVyZXMgaW4gdGV4dCxcbiAgICAgIC8vIGNvbW1lbnRzLCBhbmQgYXR0cmlidXRlIHZhbHVlcywgc28gdGhlcmUgY2FuIGJlIGZhbHNlLXBvc2l0aXZlcy5cbiAgICAgIGNvbnN0IGF0dHJpYnV0ZU1hdGNoID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHMpO1xuICAgICAgaWYgKGF0dHJpYnV0ZU1hdGNoID09PSBudWxsKSB7XG4gICAgICAgIC8vIFdlJ3JlIG9ubHkgaW4gdGhpcyBicmFuY2ggaWYgd2UgZG9uJ3QgaGF2ZSBhIGF0dHJpYnV0ZS1saWtlXG4gICAgICAgIC8vIHByZWNlZWRpbmcgc2VxdWVuY2UuIEZvciBjb21tZW50cywgdGhpcyBndWFyZHMgYWdhaW5zdCB1bnVzdWFsXG4gICAgICAgIC8vIGF0dHJpYnV0ZSB2YWx1ZXMgbGlrZSA8ZGl2IGZvbz1cIjwhLS0keydiYXInfVwiPi4gQ2FzZXMgbGlrZVxuICAgICAgICAvLyA8IS0tIGZvbz0keydiYXInfS0tPiBhcmUgaGFuZGxlZCBjb3JyZWN0bHkgaW4gdGhlIGF0dHJpYnV0ZSBicmFuY2hcbiAgICAgICAgLy8gYmVsb3cuXG4gICAgICAgIGh0bWwgKz0gcyArIChpc0NvbW1lbnRCaW5kaW5nID8gbWFya2VyIDogbm9kZU1hcmtlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3IgYXR0cmlidXRlcyB3ZSB1c2UganVzdCBhIG1hcmtlciBzZW50aW5lbCwgYW5kIGFsc28gYXBwZW5kIGFcbiAgICAgICAgLy8gJGxpdCQgc3VmZml4IHRvIHRoZSBuYW1lIHRvIG9wdC1vdXQgb2YgYXR0cmlidXRlLXNwZWNpZmljIHBhcnNpbmdcbiAgICAgICAgLy8gdGhhdCBJRSBhbmQgRWRnZSBkbyBmb3Igc3R5bGUgYW5kIGNlcnRhaW4gU1ZHIGF0dHJpYnV0ZXMuXG4gICAgICAgIGh0bWwgKz0gcy5zdWJzdHIoMCwgYXR0cmlidXRlTWF0Y2guaW5kZXgpICsgYXR0cmlidXRlTWF0Y2hbMV0gK1xuICAgICAgICAgICAgYXR0cmlidXRlTWF0Y2hbMl0gKyBib3VuZEF0dHJpYnV0ZVN1ZmZpeCArIGF0dHJpYnV0ZU1hdGNoWzNdICtcbiAgICAgICAgICAgIG1hcmtlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgaHRtbCArPSB0aGlzLnN0cmluZ3NbbF07XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBnZXRUZW1wbGF0ZUVsZW1lbnQoKTogSFRNTFRlbXBsYXRlRWxlbWVudCB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IHRoaXMuZ2V0SFRNTCgpO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxufVxuXG4vKipcbiAqIEEgVGVtcGxhdGVSZXN1bHQgZm9yIFNWRyBmcmFnbWVudHMuXG4gKlxuICogVGhpcyBjbGFzcyB3cmFwcyBIVE1MIGluIGFuIGA8c3ZnPmAgdGFnIGluIG9yZGVyIHRvIHBhcnNlIGl0cyBjb250ZW50cyBpbiB0aGVcbiAqIFNWRyBuYW1lc3BhY2UsIHRoZW4gbW9kaWZpZXMgdGhlIHRlbXBsYXRlIHRvIHJlbW92ZSB0aGUgYDxzdmc+YCB0YWcgc28gdGhhdFxuICogY2xvbmVzIG9ubHkgY29udGFpbmVyIHRoZSBvcmlnaW5hbCBmcmFnbWVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNWR1RlbXBsYXRlUmVzdWx0IGV4dGVuZHMgVGVtcGxhdGVSZXN1bHQge1xuICBnZXRIVE1MKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8c3ZnPiR7c3VwZXIuZ2V0SFRNTCgpfTwvc3ZnPmA7XG4gIH1cblxuICBnZXRUZW1wbGF0ZUVsZW1lbnQoKTogSFRNTFRlbXBsYXRlRWxlbWVudCB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBzdXBlci5nZXRUZW1wbGF0ZUVsZW1lbnQoKTtcbiAgICBjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudDtcbiAgICBjb25zdCBzdmdFbGVtZW50ID0gY29udGVudC5maXJzdENoaWxkITtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKHN2Z0VsZW1lbnQpO1xuICAgIHJlcGFyZW50Tm9kZXMoY29udGVudCwgc3ZnRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtyZW1vdmVOb2Rlc30gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHtOb2RlUGFydH0gZnJvbSAnLi9wYXJ0cy5qcyc7XG5pbXBvcnQge1JlbmRlck9wdGlvbnN9IGZyb20gJy4vcmVuZGVyLW9wdGlvbnMuanMnO1xuaW1wb3J0IHt0ZW1wbGF0ZUZhY3Rvcnl9IGZyb20gJy4vdGVtcGxhdGUtZmFjdG9yeS5qcyc7XG5pbXBvcnQge1RlbXBsYXRlUmVzdWx0fSBmcm9tICcuL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5cbmV4cG9ydCBjb25zdCBwYXJ0cyA9IG5ldyBXZWFrTWFwPE5vZGUsIE5vZGVQYXJ0PigpO1xuXG4vKipcbiAqIFJlbmRlcnMgYSB0ZW1wbGF0ZSB0byBhIGNvbnRhaW5lci5cbiAqXG4gKiBUbyB1cGRhdGUgYSBjb250YWluZXIgd2l0aCBuZXcgdmFsdWVzLCByZWV2YWx1YXRlIHRoZSB0ZW1wbGF0ZSBsaXRlcmFsIGFuZFxuICogY2FsbCBgcmVuZGVyYCB3aXRoIHRoZSBuZXcgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSByZXN1bHQgYSBUZW1wbGF0ZVJlc3VsdCBjcmVhdGVkIGJ5IGV2YWx1YXRpbmcgYSB0ZW1wbGF0ZSB0YWcgbGlrZVxuICogICAgIGBodG1sYCBvciBgc3ZnYC5cbiAqIEBwYXJhbSBjb250YWluZXIgQSBET00gcGFyZW50IHRvIHJlbmRlciB0by4gVGhlIGVudGlyZSBjb250ZW50cyBhcmUgZWl0aGVyXG4gKiAgICAgcmVwbGFjZWQsIG9yIGVmZmljaWVudGx5IHVwZGF0ZWQgaWYgdGhlIHNhbWUgcmVzdWx0IHR5cGUgd2FzIHByZXZpb3VzXG4gKiAgICAgcmVuZGVyZWQgdGhlcmUuXG4gKiBAcGFyYW0gb3B0aW9ucyBSZW5kZXJPcHRpb25zIGZvciB0aGUgZW50aXJlIHJlbmRlciB0cmVlIHJlbmRlcmVkIHRvIHRoaXNcbiAqICAgICBjb250YWluZXIuIFJlbmRlciBvcHRpb25zIG11c3QgKm5vdCogY2hhbmdlIGJldHdlZW4gcmVuZGVycyB0byB0aGUgc2FtZVxuICogICAgIGNvbnRhaW5lciwgYXMgdGhvc2UgY2hhbmdlcyB3aWxsIG5vdCBlZmZlY3QgcHJldmlvdXNseSByZW5kZXJlZCBET00uXG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXIgPVxuICAgIChyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0LFxuICAgICBjb250YWluZXI6IEVsZW1lbnR8RG9jdW1lbnRGcmFnbWVudCxcbiAgICAgb3B0aW9ucz86IFBhcnRpYWw8UmVuZGVyT3B0aW9ucz4pID0+IHtcbiAgICAgIGxldCBwYXJ0ID0gcGFydHMuZ2V0KGNvbnRhaW5lcik7XG4gICAgICBpZiAocGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlbW92ZU5vZGVzKGNvbnRhaW5lciwgY29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICBwYXJ0cy5zZXQoY29udGFpbmVyLCBwYXJ0ID0gbmV3IE5vZGVQYXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUZhY3RvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICBwYXJ0LmFwcGVuZEludG8oY29udGFpbmVyKTtcbiAgICAgIH1cbiAgICAgIHBhcnQuc2V0VmFsdWUocmVzdWx0KTtcbiAgICAgIHBhcnQuY29tbWl0KCk7XG4gICAgfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuaW1wb3J0IHttYXJrZXIsIFRlbXBsYXRlfSBmcm9tICcuL3RlbXBsYXRlLmpzJztcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHR5cGUgdGhhdCBjcmVhdGVzIGEgVGVtcGxhdGUgZnJvbSBhIFRlbXBsYXRlUmVzdWx0LlxuICpcbiAqIFRoaXMgaXMgYSBob29rIGludG8gdGhlIHRlbXBsYXRlLWNyZWF0aW9uIHByb2Nlc3MgZm9yIHJlbmRlcmluZyB0aGF0XG4gKiByZXF1aXJlcyBzb21lIG1vZGlmaWNhdGlvbiBvZiB0ZW1wbGF0ZXMgYmVmb3JlIHRoZXkncmUgdXNlZCwgbGlrZSBTaGFkeUNTUyxcbiAqIHdoaWNoIG11c3QgYWRkIGNsYXNzZXMgdG8gZWxlbWVudHMgYW5kIHJlbW92ZSBzdHlsZXMuXG4gKlxuICogVGVtcGxhdGVzIHNob3VsZCBiZSBjYWNoZWQgYXMgYWdncmVzc2l2ZWx5IGFzIHBvc3NpYmxlLCBzbyB0aGF0IG1hbnlcbiAqIFRlbXBsYXRlUmVzdWx0cyBwcm9kdWNlZCBmcm9tIHRoZSBzYW1lIGV4cHJlc3Npb24gb25seSBkbyB0aGUgd29yayBvZlxuICogY3JlYXRpbmcgdGhlIFRlbXBsYXRlIHRoZSBmaXJzdCB0aW1lLlxuICpcbiAqIFRlbXBsYXRlcyBhcmUgdXN1YWxseSBjYWNoZWQgYnkgVGVtcGxhdGVSZXN1bHQuc3RyaW5ncyBhbmRcbiAqIFRlbXBsYXRlUmVzdWx0LnR5cGUsIGJ1dCBtYXkgYmUgY2FjaGVkIGJ5IG90aGVyIGtleXMgaWYgdGhpcyBmdW5jdGlvblxuICogbW9kaWZpZXMgdGhlIHRlbXBsYXRlLlxuICpcbiAqIE5vdGUgdGhhdCBjdXJyZW50bHkgVGVtcGxhdGVGYWN0b3JpZXMgbXVzdCBub3QgYWRkLCByZW1vdmUsIG9yIHJlb3JkZXJcbiAqIGV4cHJlc3Npb25zLCBiZWNhdXNlIHRoZXJlIGlzIG5vIHdheSB0byBkZXNjcmliZSBzdWNoIGEgbW9kaWZpY2F0aW9uXG4gKiB0byByZW5kZXIoKSBzbyB0aGF0IHZhbHVlcyBhcmUgaW50ZXJwb2xhdGVkIHRvIHRoZSBjb3JyZWN0IHBsYWNlIGluIHRoZVxuICogdGVtcGxhdGUgaW5zdGFuY2VzLlxuICovXG5leHBvcnQgdHlwZSBUZW1wbGF0ZUZhY3RvcnkgPSAocmVzdWx0OiBUZW1wbGF0ZVJlc3VsdCkgPT4gVGVtcGxhdGU7XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgVGVtcGxhdGVGYWN0b3J5IHdoaWNoIGNhY2hlcyBUZW1wbGF0ZXMga2V5ZWQgb25cbiAqIHJlc3VsdC50eXBlIGFuZCByZXN1bHQuc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlRmFjdG9yeShyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0KSB7XG4gIGxldCB0ZW1wbGF0ZUNhY2hlID0gdGVtcGxhdGVDYWNoZXMuZ2V0KHJlc3VsdC50eXBlKTtcbiAgaWYgKHRlbXBsYXRlQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHRlbXBsYXRlQ2FjaGUgPSB7XG4gICAgICBzdHJpbmdzQXJyYXk6IG5ldyBXZWFrTWFwPFRlbXBsYXRlU3RyaW5nc0FycmF5LCBUZW1wbGF0ZT4oKSxcbiAgICAgIGtleVN0cmluZzogbmV3IE1hcDxzdHJpbmcsIFRlbXBsYXRlPigpXG4gICAgfTtcbiAgICB0ZW1wbGF0ZUNhY2hlcy5zZXQocmVzdWx0LnR5cGUsIHRlbXBsYXRlQ2FjaGUpO1xuICB9XG5cbiAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuZ2V0KHJlc3VsdC5zdHJpbmdzKTtcbiAgaWYgKHRlbXBsYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICAvLyBJZiB0aGUgVGVtcGxhdGVTdHJpbmdzQXJyYXkgaXMgbmV3LCBnZW5lcmF0ZSBhIGtleSBmcm9tIHRoZSBzdHJpbmdzXG4gIC8vIFRoaXMga2V5IGlzIHNoYXJlZCBiZXR3ZWVuIGFsbCB0ZW1wbGF0ZXMgd2l0aCBpZGVudGljYWwgY29udGVudFxuICBjb25zdCBrZXkgPSByZXN1bHQuc3RyaW5ncy5qb2luKG1hcmtlcik7XG5cbiAgLy8gQ2hlY2sgaWYgd2UgYWxyZWFkeSBoYXZlIGEgVGVtcGxhdGUgZm9yIHRoaXMga2V5XG4gIHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuZ2V0KGtleSk7XG4gIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBub3Qgc2VlbiB0aGlzIGtleSBiZWZvcmUsIGNyZWF0ZSBhIG5ldyBUZW1wbGF0ZVxuICAgIHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCwgcmVzdWx0LmdldFRlbXBsYXRlRWxlbWVudCgpKTtcbiAgICAvLyBDYWNoZSB0aGUgVGVtcGxhdGUgZm9yIHRoaXMga2V5XG4gICAgdGVtcGxhdGVDYWNoZS5rZXlTdHJpbmcuc2V0KGtleSwgdGVtcGxhdGUpO1xuICB9XG5cbiAgLy8gQ2FjaGUgYWxsIGZ1dHVyZSBxdWVyaWVzIGZvciB0aGlzIFRlbXBsYXRlU3RyaW5nc0FycmF5XG4gIHRlbXBsYXRlQ2FjaGUuc3RyaW5nc0FycmF5LnNldChyZXN1bHQuc3RyaW5ncywgdGVtcGxhdGUpO1xuICByZXR1cm4gdGVtcGxhdGU7XG59XG5cbi8qKlxuICogVGhlIGZpcnN0IGFyZ3VtZW50IHRvIEpTIHRlbXBsYXRlIHRhZ3MgcmV0YWluIGlkZW50aXR5IGFjcm9zcyBtdWx0aXBsZVxuICogY2FsbHMgdG8gYSB0YWcgZm9yIHRoZSBzYW1lIGxpdGVyYWwsIHNvIHdlIGNhbiBjYWNoZSB3b3JrIGRvbmUgcGVyIGxpdGVyYWxcbiAqIGluIGEgTWFwLlxuICpcbiAqIFNhZmFyaSBjdXJyZW50bHkgaGFzIGEgYnVnIHdoaWNoIG9jY2FzaW9uYWxseSBicmVha3MgdGhpcyBiZWhhdmlvdXIsIHNvIHdlXG4gKiBuZWVkIHRvIGNhY2hlIHRoZSBUZW1wbGF0ZSBhdCB0d28gbGV2ZWxzLiBXZSBmaXJzdCBjYWNoZSB0aGVcbiAqIFRlbXBsYXRlU3RyaW5nc0FycmF5LCBhbmQgaWYgdGhhdCBmYWlscywgd2UgY2FjaGUgYSBrZXkgY29uc3RydWN0ZWQgYnlcbiAqIGpvaW5pbmcgdGhlIHN0cmluZ3MgYXJyYXkuXG4gKi9cbmV4cG9ydCB0eXBlIHRlbXBsYXRlQ2FjaGUgPSB7XG4gIHJlYWRvbmx5IHN0cmluZ3NBcnJheTogV2Vha01hcDxUZW1wbGF0ZVN0cmluZ3NBcnJheSwgVGVtcGxhdGU+OyAvL1xuICByZWFkb25seSBrZXlTdHJpbmc6IE1hcDxzdHJpbmcsIFRlbXBsYXRlPjtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZW1wbGF0ZUNhY2hlcyA9IG5ldyBNYXA8c3RyaW5nLCB0ZW1wbGF0ZUNhY2hlPigpO1xuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2xpdC1odG1sLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFzZSA9PiBjbGFzcyBleHRlbmRzIGJhc2Uge1xyXG5cdHJlbmRlcigpIHt9XHJcblxyXG5cdGFzeW5jIGludmFsaWRhdGUoaW5zdGFudCkge1xyXG5cdFx0aWYgKCF0aGlzLm5lZWRzUmVuZGVyKSB7XHJcblx0XHRcdGlmICghaW5zdGFudCkge1xyXG5cdFx0XHRcdHRoaXMubmVlZHNSZW5kZXIgPSB0cnVlXHJcblx0XHRcdFx0YXdhaXQgMFxyXG5cdFx0XHRcdHRoaXMubmVlZHNSZW5kZXIgPSBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHRcdHJlbmRlcih0aGlzLnJlbmRlcigpLCB0aGlzLnNoYWRvd1Jvb3QpXHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5cclxuZnVuY3Rpb24gYWN0aW9uQ3JlYXRvcihhY3Rpb24pIHtcclxuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpXHJcblx0XHRzdGF0ZSA9IGFjdGlvbihzdGF0ZSwgLi4uYXJndW1lbnRzKVxyXG5cdFx0c3RvcmUuc2V0U3RhdGUoc3RhdGUpXHJcblx0fVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBNeSBGdW5jdGlvblxyXG5cclxuZXhwb3J0IGNvbnN0IGNvdW50QWRkID0gYWN0aW9uQ3JlYXRvcihzdGF0ZSA9PiB7XHJcblx0c3RhdGUuaW5mby5jb3VudCA9PT0gdW5kZWZpbmVkXHJcblx0XHQ/IHN0YXRlLmluZm8uY291bnQgPSAwXHJcblx0XHQ6IHN0YXRlLmluZm8uY291bnQrK1xyXG5cdHJldHVybiBzdGF0ZVxyXG59KVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRXhhbXBsZVxyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlID0gYWN0aW9uQ3JlYXRvcigoc3RhdGUsIF9yb3V0ZSkgPT4ge1xyXG5cdHN0YXRlLnJvdXRlID0gX3JvdXRlXHJcblxyXG5cdHJldHVybiBzdGF0ZVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZCA9IGFjdGlvbkNyZWF0b3IoKHN0YXRlLCB0b2RvKSA9PiB7XHJcblx0c3RhdGUudG9kb0xpc3QucHVzaCh7XHJcblx0XHR0aXRsZTogdG9kbyxcclxuXHRcdGNvbXBsZXRlZDogZmFsc2UsXHJcblx0XHRpZDogYGl0ZW0teHh4eHh4eHh4eHh4YC5yZXBsYWNlKC9beF0vZywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMFxyXG5cclxuXHRcdFx0cmV0dXJuIHIudG9TdHJpbmcoMTYpXHJcblx0XHR9KSxcclxuXHR9KVxyXG5cclxuXHRyZXR1cm4gc3RhdGVcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmUgPSBhY3Rpb25DcmVhdG9yKChzdGF0ZSwgaWQpID0+IHtcclxuXHRzdGF0ZS50b2RvTGlzdCA9IHN0YXRlLnRvZG9MaXN0LmZpbHRlcih0b2RvID0+IHRvZG8uaWQgIT09IGlkKVxyXG5cclxuXHRyZXR1cm4gc3RhdGVcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB0b2dnbGUgPSBhY3Rpb25DcmVhdG9yKChzdGF0ZSwgaWQpID0+IHtcclxuXHRjb25zdCB0b2RvID0gc3RhdGUudG9kb0xpc3QuZmluZChfdG9kbyA9PiBfdG9kby5pZCA9PT0gaWQpXHJcblx0dG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWRcclxuXHJcblx0cmV0dXJuIHN0YXRlXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgcmVwbGFjZSA9IGFjdGlvbkNyZWF0b3IoKHN0YXRlLCBpZCwgdGl0bGUpID0+IHtcclxuXHRjb25zdCB0b2RvID0gc3RhdGUudG9kb0xpc3QuZmluZChfdG9kbyA9PiBfdG9kby5pZCA9PT0gaWQpXHJcblx0dG9kby50aXRsZSA9IHRpdGxlXHJcblxyXG5cdHJldHVybiBzdGF0ZVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZUFsbCA9IGFjdGlvbkNyZWF0b3IoKHN0YXRlLCBjb21wbGV0ZWQpID0+IHtcclxuXHRzdGF0ZS50b2RvTGlzdC5mb3JFYWNoKF90b2RvID0+IHtcclxuXHRcdF90b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZFxyXG5cdH0pXHJcblxyXG5cdHJldHVybiBzdGF0ZVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFyQ29tcGxldGVkID0gYWN0aW9uQ3JlYXRvcihzdGF0ZSA9PiB7XHJcblx0c3RhdGUudG9kb0xpc3QgPSBzdGF0ZS50b2RvTGlzdC5maWx0ZXIodG9kbyA9PiAhdG9kby5jb21wbGV0ZWQpXHJcblxyXG5cdHJldHVybiBzdGF0ZVxyXG59KVxyXG4iLCJpbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAncmVkdXgtemVybydcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgcm91dGU6IGBgLCBpbmZvOiBbXSAsIC8qIGV4YW1wbGUgKi8gdG9kb0xpc3Q6IFtdIH1cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShpbml0aWFsU3RhdGUpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxuXHJcblxyXG52YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3RvcmUkMShpbml0aWFsU3RhdGUsIG1pZGRsZXdhcmUpIHtcclxuICAgIGlmIChpbml0aWFsU3RhdGUgPT09IHZvaWQgMCkgeyBpbml0aWFsU3RhdGUgPSB7fTsgfVxyXG4gICAgaWYgKG1pZGRsZXdhcmUgPT09IHZvaWQgMCkgeyBtaWRkbGV3YXJlID0gbnVsbDsgfVxyXG4gICAgdmFyIHN0YXRlID0gaW5pdGlhbFN0YXRlIHx8IHt9O1xyXG4gICAgdmFyIGxpc3RlbmVycyA9IFtdO1xyXG4gICAgZnVuY3Rpb24gZGlzcGF0Y2hMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYoc3RhdGUpOyB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWlkZGxld2FyZTogbWlkZGxld2FyZSxcclxuICAgICAgICBzZXRTdGF0ZTogZnVuY3Rpb24gKHVwZGF0ZSkge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IF9fYXNzaWduKHt9LCBzdGF0ZSwgKHR5cGVvZiB1cGRhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHVwZGF0ZShzdGF0ZSkgOiB1cGRhdGUpKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2hMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2goZik7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVycy5pbmRleE9mKGYpLCAxKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgICAgICBkaXNwYXRjaExpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbi8vIG1vZHVsZS5leHBvcnRzID0gY3JlYXRlU3RvcmUkMTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUkMTtcclxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1odG1sJ1xyXG5cclxuaW1wb3J0IExpdFJlbmRlciBmcm9tICcuLi9saWJzL2xpdFJlbmRlcidcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL2xpYnMvc3RvcmUnXHJcbmltcG9ydCB7IGNvdW50QWRkIH0gZnJvbSAnLi4vbGlicy9hY3Rpb25zJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4YW1FbGVtZW50IGV4dGVuZHMgTGl0UmVuZGVyKEhUTUxFbGVtZW50KSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpXHJcblxyXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7fVxyXG5cclxuXHRcdHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogYG9wZW5gIH0pXHJcblx0XHR0aGlzLmludmFsaWRhdGUodHJ1ZSlcclxuXHR9XHJcblxyXG5cdGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG5cdFx0Y29uc3Qgcm9vdCA9IHRoaXMuc2hhZG93Um9vdFxyXG5cdFx0Y29uc3QgaGFuZGxlcnMgPSB0aGlzLl9oYW5kbGVyc1xyXG5cclxuXHRcdGhhbmRsZXJzLm9uQ2xpY2sgPSB0aGlzLl9vbkNsaWNrLmJpbmQodGhpcylcdFx0XHRcdFxyXG5cdFx0XHJcblx0XHRyb290LmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgaGFuZGxlcnMub25DbGljaylcdFx0XHJcblx0fVxyXG5cclxuXHRkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuXHRcdGNvbnN0IHJvb3QgPSB0aGlzLnNoYWRvd1Jvb3RcclxuXHJcblx0XHRyb290LnJlbW92ZUV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgdGhpcy5faGFuZGxlcnMub25DbGljaylcclxuXHR9XHJcblxyXG5cdF9vbkNsaWNrKCkge1xyXG5cdFx0Y291bnRBZGQoKVxyXG5cdFx0dGhpcy5pbnZhbGlkYXRlKHRydWUpXHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gaHRtbGBcclxuXHRcdDwhLS0gJHtzdHlsZX0gLS0+XHJcblx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi4vc3JjL2Nzcy9leGFtLWVsZW1lbnQuY3NzXCI+XHJcbiAgICBcdDxkaXYgY2xhc3M9XCJleGFtLWVsZW1lbnRcIj5cclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJ0ZXN0LWJ0blwiPlRFU1Q6ICR7c3RvcmUuZ2V0U3RhdGUoKS5pbmZvLmNvdW50fTwvc3Bhbj5cclxuXHRcdDwvZGl2PlxyXG4gICAgXHRgXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzdHlsZSA9IGh0bWxgXHJcbiAgPHN0eWxlPlxyXG4gICAgLmV4YW0tZWxlbWVudCB7XHJcblx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0Z3JpZC1hdXRvLXJvd3M6IGF1dG8gYXV0bztcclxuXHRcdGhlaWdodDogYXV0bztcclxuXHRcdHdpZHRoOiAzMDBweDtcdFxyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuXHR9XHJcblx0XHJcblx0LnRlc3QtYnRuIHtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgXHRib3JkZXItYm90dG9tOiAwO1xyXG5cdH1cclxuICA8L3N0eWxlPlxyXG5gXHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoYGV4YW0tZWxlbWVudGAsIEV4YW1FbGVtZW50KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9