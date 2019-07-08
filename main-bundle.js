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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

console.info("main script start!");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _libs_litRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _libs_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _exam_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral([" \n\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"./src/css/App.css\">\n\t\t<main>\n\t\t\t<exam-element />\t\t\t\n\t\t</main>\n        "]);

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
      return Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }]);

  return AppMain;
}(Object(_libs_litRender__WEBPACK_IMPORTED_MODULE_1__["default"])(HTMLElement));

customElements.define("app-main", AppMain);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["DefaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]; });

/* harmony import */ var _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["removeNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["reparentNodes"]; });

/* harmony import */ var _lib_part_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["nothing"]; });

/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributeCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["BooleanAttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["EventPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isIterable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["NodePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyPart"]; });

/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["parts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["render"]; });

/* harmony import */ var _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateFactory"]; });

/* harmony import */ var _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__["TemplateInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"]; });

/* harmony import */ var _lib_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18);
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return DefaultTemplateProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return defaultTemplateProcessor; });
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
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
/* 13 */
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
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _part_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return TemplateInstance; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
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
/* 18 */
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return TemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return SVGTemplateResult; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return parts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return templateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return templateCaches; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
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
/* 23 */
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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);


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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_zero_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);

var initialState = {
  route: "",
  info: [],

  /* example */
  todoList: []
};
var store = Object(_redux_zero_js__WEBPACK_IMPORTED_MODULE_0__["default"])(initialState);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamElement", function() { return ExamElement; });
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _libs_litRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _libs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _libs_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"./src/css/exam-element.css\">\n    \t<div class=\"exam-element\">\n\t\t\t<span class=\"test-btn\">TEST: ", "</span>\n\t\t</div>\n    \t"]);

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
      return Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), _libs_store__WEBPACK_IMPORTED_MODULE_2__["default"].getState().info.count);
    }
  }]);

  return ExamElement;
}(Object(_libs_litRender__WEBPACK_IMPORTED_MODULE_1__["default"])(HTMLElement));
customElements.define("exam-element", ExamElement);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy9zcmMvbGl0LWh0bWwudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvZGVmYXVsdC10ZW1wbGF0ZS1wcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvcGFydHMudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL2RvbS50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9wYXJ0LnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3RlbXBsYXRlLWluc3RhbmNlLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3RlbXBsYXRlLnRzIiwid2VicGFjazovLy8uLi9zcmMvbGliL3RlbXBsYXRlLXJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi4vc3JjL2xpYi9yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9saWIvdGVtcGxhdGUtZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9saXRSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYnMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9yZWR1eC16ZXJvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V4YW0tZWxlbWVudC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwiaW5mbyIsIkFwcE1haW4iLCJhdHRhY2hTaGFkb3ciLCJtb2RlIiwiaW52YWxpZGF0ZSIsInRpdGxlIiwiYWRkIiwiaHRtbCIsIkxpdFJlbmRlciIsIkhUTUxFbGVtZW50IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJiYXNlIiwiaW5zdGFudCIsIm5lZWRzUmVuZGVyIiwicmVuZGVyIiwic2hhZG93Um9vdCIsImFjdGlvbkNyZWF0b3IiLCJhY3Rpb24iLCJzdGF0ZSIsInN0b3JlIiwiZ2V0U3RhdGUiLCJhcmd1bWVudHMiLCJzZXRTdGF0ZSIsImNvdW50QWRkIiwiY291bnQiLCJ1bmRlZmluZWQiLCJyb3V0ZSIsIl9yb3V0ZSIsInRvZG8iLCJ0b2RvTGlzdCIsInB1c2giLCJjb21wbGV0ZWQiLCJpZCIsInJlcGxhY2UiLCJyIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwicmVtb3ZlIiwiZmlsdGVyIiwidG9nZ2xlIiwiZmluZCIsIl90b2RvIiwidG9nZ2xlQWxsIiwiZm9yRWFjaCIsImNsZWFyQ29tcGxldGVkIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJjcmVhdGVTdG9yZSQxIiwibWlkZGxld2FyZSIsImxpc3RlbmVycyIsImRpc3BhdGNoTGlzdGVuZXJzIiwiZiIsInVwZGF0ZSIsInN1YnNjcmliZSIsInNwbGljZSIsImluZGV4T2YiLCJyZXNldCIsIkV4YW1FbGVtZW50IiwiX2hhbmRsZXJzIiwicm9vdCIsImhhbmRsZXJzIiwib25DbGljayIsIl9vbkNsaWNrIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMx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R0FBRyxLQUFLMUQsVUFBbEI7QUFDQSxVQUFNMkQsUUFBUSxHQUFHLEtBQUtGLFNBQXRCO0FBRUFFLGNBQVEsQ0FBQ0MsT0FBVCxHQUFtQixLQUFLQyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBbkI7QUFFQUosVUFBSSxDQUFDSyxnQkFBTCxVQUErQkosUUFBUSxDQUFDQyxPQUF4QztBQUNBO0FBakJGO0FBQUE7QUFBQSwyQ0FtQndCO0FBQ3RCLFVBQU1GLElBQUksR0FBRyxLQUFLMUQsVUFBbEI7QUFFQTBELFVBQUksQ0FBQ00sbUJBQUwsVUFBa0MsS0FBS1AsU0FBTCxDQUFlRyxPQUFqRDtBQUNBO0FBdkJGO0FBQUE7QUFBQSwrQkF5Qlk7QUFDVnBELG9FQUFRO0FBQ1IsV0FBS3BCLFVBQUwsQ0FBZ0IsSUFBaEI7QUFDQTtBQTVCRjtBQUFBO0FBQUEsNkJBOEJVO0FBQ1IsYUFBT0cscURBQVAsb0JBR2dDYSxtREFBSyxDQUFDQyxRQUFOLEdBQWlCckIsSUFBakIsQ0FBc0J5QixLQUh0RDtBQU1BO0FBckNGOztBQUFBO0FBQUEsRUFBaUNqQiwrREFBUyxDQUFDQyxXQUFELENBQTFDO0FBd0NBQyxjQUFjLENBQUNDLE1BQWYsaUJBQXNDNkQsV0FBdEMsRSIsImZpbGUiOiJtYWluLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcbiIsImltcG9ydCAnLi9jb21wb25lbnRzL0FwcC5qcydcclxuXHJcbmNvbnNvbGUuaW5mbyhgbWFpbiBzY3JpcHQgc3RhcnQhYClcclxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gJ2xpdC1odG1sJ1xyXG5cclxuaW1wb3J0IExpdFJlbmRlciBmcm9tICcuLi9saWJzL2xpdFJlbmRlcidcclxuLy8gaW1wb3J0IHN0b3JlIGZyb20gJy4uL2xpYnMvc3RvcmUnXHJcbmltcG9ydCB7XHJcblx0YWRkLFxyXG59IGZyb20gJy4uL2xpYnMvYWN0aW9ucydcclxuXHJcbmltcG9ydCAnLi9leGFtLWVsZW1lbnQuanMnXHJcblxyXG5jbGFzcyBBcHBNYWluIGV4dGVuZHMgTGl0UmVuZGVyKEhUTUxFbGVtZW50KSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpXHJcblxyXG5cdFx0dGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBgb3BlbmAgfSlcclxuXHJcblx0XHR0aGlzLmludmFsaWRhdGUoKVxyXG5cdH1cclxuXHJcblx0YWRkKHRpdGxlKSB7XHJcblx0XHRhZGQodGl0bGUpXHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gaHRtbGAgXHJcblx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi4vc3JjL2Nzcy9BcHAuY3NzXCI+XHJcblx0XHQ8bWFpbj5cclxuXHRcdFx0PGV4YW0tZWxlbWVudCAvPlx0XHRcdFxyXG5cdFx0PC9tYWluPlxyXG4gICAgICAgIGBcclxuXHR9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShgYXBwLW1haW5gLCBBcHBNYWluKVxyXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICpcbiAqIE1haW4gbGl0LWh0bWwgbW9kdWxlLlxuICpcbiAqIE1haW4gZXhwb3J0czpcbiAqXG4gKiAtICBbW2h0bWxdXVxuICogLSAgW1tzdmddXVxuICogLSAgW1tyZW5kZXJdXVxuICpcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqIEBwcmVmZXJyZWRcbiAqL1xuXG4vKipcbiAqIERvIG5vdCByZW1vdmUgdGhpcyBjb21tZW50OyBpdCBrZWVwcyB0eXBlZG9jIGZyb20gbWlzcGxhY2luZyB0aGUgbW9kdWxlXG4gKiBkb2NzLlxuICovXG5pbXBvcnQge2RlZmF1bHRUZW1wbGF0ZVByb2Nlc3Nvcn0gZnJvbSAnLi9saWIvZGVmYXVsdC10ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuaW1wb3J0IHtTVkdUZW1wbGF0ZVJlc3VsdCwgVGVtcGxhdGVSZXN1bHR9IGZyb20gJy4vbGliL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5cbmV4cG9ydCB7RGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yLCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vbGliL2RlZmF1bHQtdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmV4cG9ydCB7ZGlyZWN0aXZlLCBEaXJlY3RpdmVGbiwgaXNEaXJlY3RpdmV9IGZyb20gJy4vbGliL2RpcmVjdGl2ZS5qcyc7XG4vLyBUT0RPKGp1c3RpbmZhZ25hbmkpOiByZW1vdmUgbGluZSB3aGVuIHdlIGdldCBOb2RlUGFydCBtb3ZpbmcgbWV0aG9kc1xuZXhwb3J0IHtyZW1vdmVOb2RlcywgcmVwYXJlbnROb2Rlc30gZnJvbSAnLi9saWIvZG9tLmpzJztcbmV4cG9ydCB7bm9DaGFuZ2UsIG5vdGhpbmcsIFBhcnR9IGZyb20gJy4vbGliL3BhcnQuanMnO1xuZXhwb3J0IHtBdHRyaWJ1dGVDb21taXR0ZXIsIEF0dHJpYnV0ZVBhcnQsIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LCBFdmVudFBhcnQsIGlzSXRlcmFibGUsIGlzUHJpbWl0aXZlLCBOb2RlUGFydCwgUHJvcGVydHlDb21taXR0ZXIsIFByb3BlcnR5UGFydH0gZnJvbSAnLi9saWIvcGFydHMuanMnO1xuZXhwb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL2xpYi9yZW5kZXItb3B0aW9ucy5qcyc7XG5leHBvcnQge3BhcnRzLCByZW5kZXJ9IGZyb20gJy4vbGliL3JlbmRlci5qcyc7XG5leHBvcnQge3RlbXBsYXRlQ2FjaGVzLCB0ZW1wbGF0ZUZhY3Rvcnl9IGZyb20gJy4vbGliL3RlbXBsYXRlLWZhY3RvcnkuanMnO1xuZXhwb3J0IHtUZW1wbGF0ZUluc3RhbmNlfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyc7XG5leHBvcnQge1RlbXBsYXRlUHJvY2Vzc29yfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS1wcm9jZXNzb3IuanMnO1xuZXhwb3J0IHtTVkdUZW1wbGF0ZVJlc3VsdCwgVGVtcGxhdGVSZXN1bHR9IGZyb20gJy4vbGliL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5leHBvcnQge2NyZWF0ZU1hcmtlciwgaXNUZW1wbGF0ZVBhcnRBY3RpdmUsIFRlbXBsYXRlfSBmcm9tICcuL2xpYi90ZW1wbGF0ZS5qcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgbGl0SHRtbFZlcnNpb25zOiBzdHJpbmdbXTtcbiAgfVxufVxuXG4vLyBJTVBPUlRBTlQ6IGRvIG5vdCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgb3IgdGhlIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbi8vIFRoaXMgbGluZSB3aWxsIGJlIHVzZWQgaW4gcmVnZXhlcyB0byBzZWFyY2ggZm9yIGxpdC1odG1sIHVzYWdlLlxuLy8gVE9ETyhqdXN0aW5mYWduYW5pKTogaW5qZWN0IHZlcnNpb24gbnVtYmVyIGF0IGJ1aWxkIHRpbWVcbih3aW5kb3dbJ2xpdEh0bWxWZXJzaW9ucyddIHx8ICh3aW5kb3dbJ2xpdEh0bWxWZXJzaW9ucyddID0gW10pKS5wdXNoKCcxLjAuMCcpO1xuXG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIEhUTUwgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IChzdHJpbmdzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4udmFsdWVzOiB1bmtub3duW10pID0+XG4gICAgbmV3IFRlbXBsYXRlUmVzdWx0KHN0cmluZ3MsIHZhbHVlcywgJ2h0bWwnLCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IpO1xuXG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIFNWRyB0ZW1wbGF0ZSB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzdmcgPSAoc3RyaW5nczogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnZhbHVlczogdW5rbm93bltdKSA9PlxuICAgIG5ldyBTVkdUZW1wbGF0ZVJlc3VsdChzdHJpbmdzLCB2YWx1ZXMsICdzdmcnLCBkZWZhdWx0VGVtcGxhdGVQcm9jZXNzb3IpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge1BhcnR9IGZyb20gJy4vcGFydC5qcyc7XG5pbXBvcnQge0F0dHJpYnV0ZUNvbW1pdHRlciwgQm9vbGVhbkF0dHJpYnV0ZVBhcnQsIEV2ZW50UGFydCwgTm9kZVBhcnQsIFByb3BlcnR5Q29tbWl0dGVyfSBmcm9tICcuL3BhcnRzLmpzJztcbmltcG9ydCB7UmVuZGVyT3B0aW9uc30gZnJvbSAnLi9yZW5kZXItb3B0aW9ucy5qcyc7XG5pbXBvcnQge1RlbXBsYXRlUHJvY2Vzc29yfSBmcm9tICcuL3RlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBQYXJ0cyB3aGVuIGEgdGVtcGxhdGUgaXMgaW5zdGFudGlhdGVkLlxuICovXG5leHBvcnQgY2xhc3MgRGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yIGltcGxlbWVudHMgVGVtcGxhdGVQcm9jZXNzb3Ige1xuICAvKipcbiAgICogQ3JlYXRlIHBhcnRzIGZvciBhbiBhdHRyaWJ1dGUtcG9zaXRpb24gYmluZGluZywgZ2l2ZW4gdGhlIGV2ZW50LCBhdHRyaWJ1dGVcbiAgICogbmFtZSwgYW5kIHN0cmluZyBsaXRlcmFscy5cbiAgICpcbiAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgY29udGFpbmluZyB0aGUgYmluZGluZ1xuICAgKiBAcGFyYW0gbmFtZSAgVGhlIGF0dHJpYnV0ZSBuYW1lXG4gICAqIEBwYXJhbSBzdHJpbmdzIFRoZSBzdHJpbmcgbGl0ZXJhbHMuIFRoZXJlIGFyZSBhbHdheXMgYXQgbGVhc3QgdHdvIHN0cmluZ3MsXG4gICAqICAgZXZlbnQgZm9yIGZ1bGx5LWNvbnRyb2xsZWQgYmluZGluZ3Mgd2l0aCBhIHNpbmdsZSBleHByZXNzaW9uLlxuICAgKi9cbiAgaGFuZGxlQXR0cmlidXRlRXhwcmVzc2lvbnMoXG4gICAgICBlbGVtZW50OiBFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHN0cmluZ3M6IHN0cmluZ1tdLFxuICAgICAgb3B0aW9uczogUmVuZGVyT3B0aW9ucyk6IFJlYWRvbmx5QXJyYXk8UGFydD4ge1xuICAgIGNvbnN0IHByZWZpeCA9IG5hbWVbMF07XG4gICAgaWYgKHByZWZpeCA9PT0gJy4nKSB7XG4gICAgICBjb25zdCBjb21taXR0ZXIgPSBuZXcgUHJvcGVydHlDb21taXR0ZXIoZWxlbWVudCwgbmFtZS5zbGljZSgxKSwgc3RyaW5ncyk7XG4gICAgICByZXR1cm4gY29tbWl0dGVyLnBhcnRzO1xuICAgIH1cbiAgICBpZiAocHJlZml4ID09PSAnQCcpIHtcbiAgICAgIHJldHVybiBbbmV3IEV2ZW50UGFydChlbGVtZW50LCBuYW1lLnNsaWNlKDEpLCBvcHRpb25zLmV2ZW50Q29udGV4dCldO1xuICAgIH1cbiAgICBpZiAocHJlZml4ID09PSAnPycpIHtcbiAgICAgIHJldHVybiBbbmV3IEJvb2xlYW5BdHRyaWJ1dGVQYXJ0KGVsZW1lbnQsIG5hbWUuc2xpY2UoMSksIHN0cmluZ3MpXTtcbiAgICB9XG4gICAgY29uc3QgY29tbWl0dGVyID0gbmV3IEF0dHJpYnV0ZUNvbW1pdHRlcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKTtcbiAgICByZXR1cm4gY29tbWl0dGVyLnBhcnRzO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgcGFydHMgZm9yIGEgdGV4dC1wb3NpdGlvbiBiaW5kaW5nLlxuICAgKiBAcGFyYW0gdGVtcGxhdGVGYWN0b3J5XG4gICAqL1xuICBoYW5kbGVUZXh0RXhwcmVzc2lvbihvcHRpb25zOiBSZW5kZXJPcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBOb2RlUGFydChvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFRlbXBsYXRlUHJvY2Vzc29yID0gbmV3IERlZmF1bHRUZW1wbGF0ZVByb2Nlc3NvcigpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge2lzRGlyZWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZS5qcyc7XG5pbXBvcnQge3JlbW92ZU5vZGVzfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQge25vQ2hhbmdlLCBub3RoaW5nLCBQYXJ0fSBmcm9tICcuL3BhcnQuanMnO1xuaW1wb3J0IHtSZW5kZXJPcHRpb25zfSBmcm9tICcuL3JlbmRlci1vcHRpb25zLmpzJztcbmltcG9ydCB7VGVtcGxhdGVJbnN0YW5jZX0gZnJvbSAnLi90ZW1wbGF0ZS1pbnN0YW5jZS5qcyc7XG5pbXBvcnQge1RlbXBsYXRlUmVzdWx0fSBmcm9tICcuL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5pbXBvcnQge2NyZWF0ZU1hcmtlcn0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXR5cGVvZi1vcGVyYXRvclxuZXhwb3J0IHR5cGUgUHJpbWl0aXZlID0gbnVsbHx1bmRlZmluZWR8Ym9vbGVhbnxudW1iZXJ8c3RyaW5nfFN5bWJvbHxiaWdpbnQ7XG5leHBvcnQgY29uc3QgaXNQcmltaXRpdmUgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBQcmltaXRpdmUgPT4ge1xuICByZXR1cm4gKFxuICAgICAgdmFsdWUgPT09IG51bGwgfHxcbiAgICAgICEodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpKTtcbn07XG5leHBvcnQgY29uc3QgaXNJdGVyYWJsZSA9ICh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIEl0ZXJhYmxlPHVua25vd24+ID0+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpIHx8XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAhISh2YWx1ZSAmJiAodmFsdWUgYXMgYW55KVtTeW1ib2wuaXRlcmF0b3JdKTtcbn07XG5cbi8qKlxuICogV3JpdGVzIGF0dHJpYnV0ZSB2YWx1ZXMgdG8gdGhlIERPTSBmb3IgYSBncm91cCBvZiBBdHRyaWJ1dGVQYXJ0cyBib3VuZCB0byBhXG4gKiBzaW5nbGUgYXR0aWJ1dGUuIFRoZSB2YWx1ZSBpcyBvbmx5IHNldCBvbmNlIGV2ZW4gaWYgdGhlcmUgYXJlIG11bHRpcGxlIHBhcnRzXG4gKiBmb3IgYW4gYXR0cmlidXRlLlxuICovXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlQ29tbWl0dGVyIHtcbiAgcmVhZG9ubHkgZWxlbWVudDogRWxlbWVudDtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICByZWFkb25seSBzdHJpbmdzOiBSZWFkb25seUFycmF5PHN0cmluZz47XG4gIHJlYWRvbmx5IHBhcnRzOiBSZWFkb25seUFycmF5PEF0dHJpYnV0ZVBhcnQ+O1xuICBkaXJ0eSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgbmFtZTogc3RyaW5nLCBzdHJpbmdzOiBSZWFkb25seUFycmF5PHN0cmluZz4pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgICB0aGlzLnBhcnRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgKHRoaXMucGFydHMgYXMgQXR0cmlidXRlUGFydFtdKVtpXSA9IHRoaXMuX2NyZWF0ZVBhcnQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHNpbmdsZSBwYXJ0LiBPdmVycmlkZSB0aGlzIHRvIGNyZWF0ZSBhIGRpZmZlcm50IHR5cGUgb2YgcGFydC5cbiAgICovXG4gIHByb3RlY3RlZCBfY3JlYXRlUGFydCgpOiBBdHRyaWJ1dGVQYXJ0IHtcbiAgICByZXR1cm4gbmV3IEF0dHJpYnV0ZVBhcnQodGhpcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldFZhbHVlKCk6IHVua25vd24ge1xuICAgIGNvbnN0IHN0cmluZ3MgPSB0aGlzLnN0cmluZ3M7XG4gICAgY29uc3QgbCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICBsZXQgdGV4dCA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRleHQgKz0gc3RyaW5nc1tpXTtcbiAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnBhcnRzW2ldO1xuICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCB2ID0gcGFydC52YWx1ZTtcbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHYpIHx8ICFpc0l0ZXJhYmxlKHYpKSB7XG4gICAgICAgICAgdGV4dCArPSB0eXBlb2YgdiA9PT0gJ3N0cmluZycgPyB2IDogU3RyaW5nKHYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAoY29uc3QgdCBvZiB2KSB7XG4gICAgICAgICAgICB0ZXh0ICs9IHR5cGVvZiB0ID09PSAnc3RyaW5nJyA/IHQgOiBTdHJpbmcodCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGV4dCArPSBzdHJpbmdzW2xdO1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgY29tbWl0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpcnR5KSB7XG4gICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgdGhpcy5fZ2V0VmFsdWUoKSBhcyBzdHJpbmcpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEEgUGFydCB0aGF0IGNvbnRyb2xzIGFsbCBvciBwYXJ0IG9mIGFuIGF0dHJpYnV0ZSB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZVBhcnQgaW1wbGVtZW50cyBQYXJ0IHtcbiAgcmVhZG9ubHkgY29tbWl0dGVyOiBBdHRyaWJ1dGVDb21taXR0ZXI7XG4gIHZhbHVlOiB1bmtub3duID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGNvbW1pdHRlcjogQXR0cmlidXRlQ29tbWl0dGVyKSB7XG4gICAgdGhpcy5jb21taXR0ZXIgPSBjb21taXR0ZXI7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogdW5rbm93bik6IHZvaWQge1xuICAgIGlmICh2YWx1ZSAhPT0gbm9DaGFuZ2UgJiYgKCFpc1ByaW1pdGl2ZSh2YWx1ZSkgfHwgdmFsdWUgIT09IHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgYSBub3QgYSBkaXJlY3RpdmUsIGRpcnR5IHRoZSBjb21taXR0ZXIgc28gdGhhdCBpdCdsbFxuICAgICAgLy8gY2FsbCBzZXRBdHRyaWJ1dGUuIElmIHRoZSB2YWx1ZSBpcyBhIGRpcmVjdGl2ZSwgaXQnbGwgZGlydHkgdGhlXG4gICAgICAvLyBjb21taXR0ZXIgaWYgaXQgY2FsbHMgc2V0VmFsdWUoKS5cbiAgICAgIGlmICghaXNEaXJlY3RpdmUodmFsdWUpKSB7XG4gICAgICAgIHRoaXMuY29tbWl0dGVyLmRpcnR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21taXQoKSB7XG4gICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMudmFsdWUpKSB7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb21taXR0ZXIuY29tbWl0KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIFBhcnQgdGhhdCBjb250cm9scyBhIGxvY2F0aW9uIHdpdGhpbiBhIE5vZGUgdHJlZS4gTGlrZSBhIFJhbmdlLCBOb2RlUGFydFxuICogaGFzIHN0YXJ0IGFuZCBlbmQgbG9jYXRpb25zIGFuZCBjYW4gc2V0IGFuZCB1cGRhdGUgdGhlIE5vZGVzIGJldHdlZW4gdGhvc2VcbiAqIGxvY2F0aW9ucy5cbiAqXG4gKiBOb2RlUGFydHMgc3VwcG9ydCBzZXZlcmFsIHZhbHVlIHR5cGVzOiBwcmltaXRpdmVzLCBOb2RlcywgVGVtcGxhdGVSZXN1bHRzLFxuICogYXMgd2VsbCBhcyBhcnJheXMgYW5kIGl0ZXJhYmxlcyBvZiB0aG9zZSB0eXBlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIE5vZGVQYXJ0IGltcGxlbWVudHMgUGFydCB7XG4gIHJlYWRvbmx5IG9wdGlvbnM6IFJlbmRlck9wdGlvbnM7XG4gIHN0YXJ0Tm9kZSE6IE5vZGU7XG4gIGVuZE5vZGUhOiBOb2RlO1xuICB2YWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfX3BlbmRpbmdWYWx1ZTogdW5rbm93biA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBSZW5kZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIHRoaXMgcGFydCBpbnRvIGEgY29udGFpbmVyLlxuICAgKlxuICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICovXG4gIGFwcGVuZEludG8oY29udGFpbmVyOiBOb2RlKSB7XG4gICAgdGhpcy5zdGFydE5vZGUgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFya2VyKCkpO1xuICAgIHRoaXMuZW5kTm9kZSA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNYXJrZXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0cyB0aGlzIHBhcnQgYWZ0ZXIgdGhlIGByZWZgIG5vZGUgKGJldHdlZW4gYHJlZmAgYW5kIGByZWZgJ3MgbmV4dFxuICAgKiBzaWJsaW5nKS4gQm90aCBgcmVmYCBhbmQgaXRzIG5leHQgc2libGluZyBtdXN0IGJlIHN0YXRpYywgdW5jaGFuZ2luZyBub2Rlc1xuICAgKiBzdWNoIGFzIHRob3NlIHRoYXQgYXBwZWFyIGluIGEgbGl0ZXJhbCBzZWN0aW9uIG9mIGEgdGVtcGxhdGUuXG4gICAqXG4gICAqIFRoaXMgcGFydCBtdXN0IGJlIGVtcHR5LCBhcyBpdHMgY29udGVudHMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IG1vdmVkLlxuICAgKi9cbiAgaW5zZXJ0QWZ0ZXJOb2RlKHJlZjogTm9kZSkge1xuICAgIHRoaXMuc3RhcnROb2RlID0gcmVmO1xuICAgIHRoaXMuZW5kTm9kZSA9IHJlZi5uZXh0U2libGluZyE7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyB0aGlzIHBhcnQgaW50byBhIHBhcmVudCBwYXJ0LlxuICAgKlxuICAgKiBUaGlzIHBhcnQgbXVzdCBiZSBlbXB0eSwgYXMgaXRzIGNvbnRlbnRzIGFyZSBub3QgYXV0b21hdGljYWxseSBtb3ZlZC5cbiAgICovXG4gIGFwcGVuZEludG9QYXJ0KHBhcnQ6IE5vZGVQYXJ0KSB7XG4gICAgcGFydC5fX2luc2VydCh0aGlzLnN0YXJ0Tm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgICBwYXJ0Ll9faW5zZXJ0KHRoaXMuZW5kTm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnRzIHRoaXMgcGFydCBhZnRlciB0aGUgYHJlZmAgcGFydC5cbiAgICpcbiAgICogVGhpcyBwYXJ0IG11c3QgYmUgZW1wdHksIGFzIGl0cyBjb250ZW50cyBhcmUgbm90IGF1dG9tYXRpY2FsbHkgbW92ZWQuXG4gICAqL1xuICBpbnNlcnRBZnRlclBhcnQocmVmOiBOb2RlUGFydCkge1xuICAgIHJlZi5fX2luc2VydCh0aGlzLnN0YXJ0Tm9kZSA9IGNyZWF0ZU1hcmtlcigpKTtcbiAgICB0aGlzLmVuZE5vZGUgPSByZWYuZW5kTm9kZTtcbiAgICByZWYuZW5kTm9kZSA9IHRoaXMuc3RhcnROb2RlO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IHVua25vd24pOiB2b2lkIHtcbiAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBjb21taXQoKSB7XG4gICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX19wZW5kaW5nVmFsdWUpKSB7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlO1xuICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgaWYgKHZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgdGhpcy5fX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlc3VsdCkge1xuICAgICAgdGhpcy5fX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgdGhpcy5fX2NvbW1pdE5vZGUodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoaXNJdGVyYWJsZSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX19jb21taXRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gbm90aGluZykge1xuICAgICAgdGhpcy52YWx1ZSA9IG5vdGhpbmc7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZhbGxiYWNrLCB3aWxsIHJlbmRlciB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgICB0aGlzLl9fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfX2luc2VydChub2RlOiBOb2RlKSB7XG4gICAgdGhpcy5lbmROb2RlLnBhcmVudE5vZGUhLmluc2VydEJlZm9yZShub2RlLCB0aGlzLmVuZE5vZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfX2NvbW1pdE5vZGUodmFsdWU6IE5vZGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMuX19pbnNlcnQodmFsdWUpO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX19jb21taXRUZXh0KHZhbHVlOiB1bmtub3duKTogdm9pZCB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhcnROb2RlLm5leHRTaWJsaW5nITtcbiAgICB2YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgIGlmIChub2RlID09PSB0aGlzLmVuZE5vZGUucHJldmlvdXNTaWJsaW5nICYmXG4gICAgICAgIG5vZGUubm9kZVR5cGUgPT09IDMgLyogTm9kZS5URVhUX05PREUgKi8pIHtcbiAgICAgIC8vIElmIHdlIG9ubHkgaGF2ZSBhIHNpbmdsZSB0ZXh0IG5vZGUgYmV0d2VlbiB0aGUgbWFya2Vycywgd2UgY2FuIGp1c3RcbiAgICAgIC8vIHNldCBpdHMgdmFsdWUsIHJhdGhlciB0aGFuIHJlcGxhY2luZyBpdC5cbiAgICAgIC8vIFRPRE8oanVzdGluZmFnbmFuaSk6IENhbiB3ZSBqdXN0IGNoZWNrIGlmIHRoaXMudmFsdWUgaXMgcHJpbWl0aXZlP1xuICAgICAgKG5vZGUgYXMgVGV4dCkuZGF0YSA9IHZhbHVlIGFzIHN0cmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fX2NvbW1pdE5vZGUoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogU3RyaW5nKHZhbHVlKSkpO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9fY29tbWl0VGVtcGxhdGVSZXN1bHQodmFsdWU6IFRlbXBsYXRlUmVzdWx0KTogdm9pZCB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLm9wdGlvbnMudGVtcGxhdGVGYWN0b3J5KHZhbHVlKTtcbiAgICBpZiAodGhpcy52YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlSW5zdGFuY2UgJiZcbiAgICAgICAgdGhpcy52YWx1ZS50ZW1wbGF0ZSA9PT0gdGVtcGxhdGUpIHtcbiAgICAgIHRoaXMudmFsdWUudXBkYXRlKHZhbHVlLnZhbHVlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBwcm9wYWdhdGUgdGhlIHRlbXBsYXRlIHByb2Nlc3NvciBmcm9tIHRoZSBUZW1wbGF0ZVJlc3VsdFxuICAgICAgLy8gc28gdGhhdCB3ZSB1c2UgaXRzIHN5bnRheCBleHRlbnNpb24sIGV0Yy4gVGhlIHRlbXBsYXRlIGZhY3RvcnkgY29tZXNcbiAgICAgIC8vIGZyb20gdGhlIHJlbmRlciBmdW5jdGlvbiBvcHRpb25zIHNvIHRoYXQgaXQgY2FuIGNvbnRyb2wgdGVtcGxhdGVcbiAgICAgIC8vIGNhY2hpbmcgYW5kIHByZXByb2Nlc3NpbmcuXG4gICAgICBjb25zdCBpbnN0YW5jZSA9XG4gICAgICAgICAgbmV3IFRlbXBsYXRlSW5zdGFuY2UodGVtcGxhdGUsIHZhbHVlLnByb2Nlc3NvciwgdGhpcy5vcHRpb25zKTtcbiAgICAgIGNvbnN0IGZyYWdtZW50ID0gaW5zdGFuY2UuX2Nsb25lKCk7XG4gICAgICBpbnN0YW5jZS51cGRhdGUodmFsdWUudmFsdWVzKTtcbiAgICAgIHRoaXMuX19jb21taXROb2RlKGZyYWdtZW50KTtcbiAgICAgIHRoaXMudmFsdWUgPSBpbnN0YW5jZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9fY29tbWl0SXRlcmFibGUodmFsdWU6IEl0ZXJhYmxlPHVua25vd24+KTogdm9pZCB7XG4gICAgLy8gRm9yIGFuIEl0ZXJhYmxlLCB3ZSBjcmVhdGUgYSBuZXcgSW5zdGFuY2VQYXJ0IHBlciBpdGVtLCB0aGVuIHNldCBpdHNcbiAgICAvLyB2YWx1ZSB0byB0aGUgaXRlbS4gVGhpcyBpcyBhIGxpdHRsZSBiaXQgb2Ygb3ZlcmhlYWQgZm9yIGV2ZXJ5IGl0ZW0gaW5cbiAgICAvLyBhbiBJdGVyYWJsZSwgYnV0IGl0IGxldHMgdXMgcmVjdXJzZSBlYXNpbHkgYW5kIGVmZmljaWVudGx5IHVwZGF0ZSBBcnJheXNcbiAgICAvLyBvZiBUZW1wbGF0ZVJlc3VsdHMgdGhhdCB3aWxsIGJlIGNvbW1vbmx5IHJldHVybmVkIGZyb20gZXhwcmVzc2lvbnMgbGlrZTpcbiAgICAvLyBhcnJheS5tYXAoKGkpID0+IGh0bWxgJHtpfWApLCBieSByZXVzaW5nIGV4aXN0aW5nIFRlbXBsYXRlSW5zdGFuY2VzLlxuXG4gICAgLy8gSWYgX3ZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIHRoZSBwcmV2aW91cyByZW5kZXIgd2FzIG9mIGFuXG4gICAgLy8gaXRlcmFibGUgYW5kIF92YWx1ZSB3aWxsIGNvbnRhaW4gdGhlIE5vZGVQYXJ0cyBmcm9tIHRoZSBwcmV2aW91c1xuICAgIC8vIHJlbmRlci4gSWYgX3ZhbHVlIGlzIG5vdCBhbiBhcnJheSwgY2xlYXIgdGhpcyBwYXJ0IGFuZCBtYWtlIGEgbmV3XG4gICAgLy8gYXJyYXkgZm9yIE5vZGVQYXJ0cy5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvLyBMZXRzIHVzIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgaXRlbXMgd2Ugc3RhbXBlZCBzbyB3ZSBjYW4gY2xlYXIgbGVmdG92ZXJcbiAgICAvLyBpdGVtcyBmcm9tIGEgcHJldmlvdXMgcmVuZGVyXG4gICAgY29uc3QgaXRlbVBhcnRzID0gdGhpcy52YWx1ZSBhcyBOb2RlUGFydFtdO1xuICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgIGxldCBpdGVtUGFydDogTm9kZVBhcnR8dW5kZWZpbmVkO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICAvLyBUcnkgdG8gcmV1c2UgYW4gZXhpc3RpbmcgcGFydFxuICAgICAgaXRlbVBhcnQgPSBpdGVtUGFydHNbcGFydEluZGV4XTtcblxuICAgICAgLy8gSWYgbm8gZXhpc3RpbmcgcGFydCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgaWYgKGl0ZW1QYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaXRlbVBhcnQgPSBuZXcgTm9kZVBhcnQodGhpcy5vcHRpb25zKTtcbiAgICAgICAgaXRlbVBhcnRzLnB1c2goaXRlbVBhcnQpO1xuICAgICAgICBpZiAocGFydEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgaXRlbVBhcnQuYXBwZW5kSW50b1BhcnQodGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVBhcnQuaW5zZXJ0QWZ0ZXJQYXJ0KGl0ZW1QYXJ0c1twYXJ0SW5kZXggLSAxXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGl0ZW1QYXJ0LnNldFZhbHVlKGl0ZW0pO1xuICAgICAgaXRlbVBhcnQuY29tbWl0KCk7XG4gICAgICBwYXJ0SW5kZXgrKztcbiAgICB9XG5cbiAgICBpZiAocGFydEluZGV4IDwgaXRlbVBhcnRzLmxlbmd0aCkge1xuICAgICAgLy8gVHJ1bmNhdGUgdGhlIHBhcnRzIGFycmF5IHNvIF92YWx1ZSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAgaXRlbVBhcnRzLmxlbmd0aCA9IHBhcnRJbmRleDtcbiAgICAgIHRoaXMuY2xlYXIoaXRlbVBhcnQgJiYgaXRlbVBhcnQuZW5kTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoc3RhcnROb2RlOiBOb2RlID0gdGhpcy5zdGFydE5vZGUpIHtcbiAgICByZW1vdmVOb2RlcyhcbiAgICAgICAgdGhpcy5zdGFydE5vZGUucGFyZW50Tm9kZSEsIHN0YXJ0Tm9kZS5uZXh0U2libGluZyEsIHRoaXMuZW5kTm9kZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBJbXBsZW1lbnRzIGEgYm9vbGVhbiBhdHRyaWJ1dGUsIHJvdWdobHkgYXMgZGVmaW5lZCBpbiB0aGUgSFRNTFxuICogc3BlY2lmaWNhdGlvbi5cbiAqXG4gKiBJZiB0aGUgdmFsdWUgaXMgdHJ1dGh5LCB0aGVuIHRoZSBhdHRyaWJ1dGUgaXMgcHJlc2VudCB3aXRoIGEgdmFsdWUgb2ZcbiAqICcnLiBJZiB0aGUgdmFsdWUgaXMgZmFsc2V5LCB0aGUgYXR0cmlidXRlIGlzIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBCb29sZWFuQXR0cmlidXRlUGFydCBpbXBsZW1lbnRzIFBhcnQge1xuICByZWFkb25seSBlbGVtZW50OiBFbGVtZW50O1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHN0cmluZ3M6IFJlYWRvbmx5QXJyYXk8c3RyaW5nPjtcbiAgdmFsdWU6IHVua25vd24gPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX19wZW5kaW5nVmFsdWU6IHVua25vd24gPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgbmFtZTogc3RyaW5nLCBzdHJpbmdzOiBSZWFkb25seUFycmF5PHN0cmluZz4pIHtcbiAgICBpZiAoc3RyaW5ncy5sZW5ndGggIT09IDIgfHwgc3RyaW5nc1swXSAhPT0gJycgfHwgc3RyaW5nc1sxXSAhPT0gJycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnQm9vbGVhbiBhdHRyaWJ1dGVzIGNhbiBvbmx5IGNvbnRhaW4gYSBzaW5nbGUgZXhwcmVzc2lvbicpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zdHJpbmdzID0gc3RyaW5ncztcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiB1bmtub3duKTogdm9pZCB7XG4gICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgY29tbWl0KCkge1xuICAgIHdoaWxlIChpc0RpcmVjdGl2ZSh0aGlzLl9fcGVuZGluZ1ZhbHVlKSkge1xuICAgICAgY29uc3QgZGlyZWN0aXZlID0gdGhpcy5fX3BlbmRpbmdWYWx1ZTtcbiAgICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgICAgIGRpcmVjdGl2ZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19wZW5kaW5nVmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gISF0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCAnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMubmFtZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMuX19wZW5kaW5nVmFsdWUgPSBub0NoYW5nZTtcbiAgfVxufVxuXG4vKipcbiAqIFNldHMgYXR0cmlidXRlIHZhbHVlcyBmb3IgUHJvcGVydHlQYXJ0cywgc28gdGhhdCB0aGUgdmFsdWUgaXMgb25seSBzZXQgb25jZVxuICogZXZlbiBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgcGFydHMgZm9yIGEgcHJvcGVydHkuXG4gKlxuICogSWYgYW4gZXhwcmVzc2lvbiBjb250cm9scyB0aGUgd2hvbGUgcHJvcGVydHkgdmFsdWUsIHRoZW4gdGhlIHZhbHVlIGlzIHNpbXBseVxuICogYXNzaWduZWQgdG8gdGhlIHByb3BlcnR5IHVuZGVyIGNvbnRyb2wuIElmIHRoZXJlIGFyZSBzdHJpbmcgbGl0ZXJhbHMgb3JcbiAqIG11bHRpcGxlIGV4cHJlc3Npb25zLCB0aGVuIHRoZSBzdHJpbmdzIGFyZSBleHByZXNzaW9ucyBhcmUgaW50ZXJwb2xhdGVkIGludG9cbiAqIGEgc3RyaW5nIGZpcnN0LlxuICovXG5leHBvcnQgY2xhc3MgUHJvcGVydHlDb21taXR0ZXIgZXh0ZW5kcyBBdHRyaWJ1dGVDb21taXR0ZXIge1xuICByZWFkb25seSBzaW5nbGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgbmFtZTogc3RyaW5nLCBzdHJpbmdzOiBSZWFkb25seUFycmF5PHN0cmluZz4pIHtcbiAgICBzdXBlcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzKTtcbiAgICB0aGlzLnNpbmdsZSA9XG4gICAgICAgIChzdHJpbmdzLmxlbmd0aCA9PT0gMiAmJiBzdHJpbmdzWzBdID09PSAnJyAmJiBzdHJpbmdzWzFdID09PSAnJyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NyZWF0ZVBhcnQoKTogUHJvcGVydHlQYXJ0IHtcbiAgICByZXR1cm4gbmV3IFByb3BlcnR5UGFydCh0aGlzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfZ2V0VmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuc2luZ2xlKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJ0c1swXS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLl9nZXRWYWx1ZSgpO1xuICB9XG5cbiAgY29tbWl0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpcnR5KSB7XG4gICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAodGhpcy5lbGVtZW50IGFzIGFueSlbdGhpcy5uYW1lXSA9IHRoaXMuX2dldFZhbHVlKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eVBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHt9XG5cbi8vIERldGVjdCBldmVudCBsaXN0ZW5lciBvcHRpb25zIHN1cHBvcnQuIElmIHRoZSBgY2FwdHVyZWAgcHJvcGVydHkgaXMgcmVhZFxuLy8gZnJvbSB0aGUgb3B0aW9ucyBvYmplY3QsIHRoZW4gb3B0aW9ucyBhcmUgc3VwcG9ydGVkLiBJZiBub3QsIHRoZW4gdGhlIHRocmlkXG4vLyBhcmd1bWVudCB0byBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lciBpcyBpbnRlcnByZXRlZCBhcyB0aGUgYm9vbGVhbiBjYXB0dXJlXG4vLyB2YWx1ZSBzbyB3ZSBzaG91bGQgb25seSBwYXNzIHRoZSBgY2FwdHVyZWAgcHJvcGVydHkuXG5sZXQgZXZlbnRPcHRpb25zU3VwcG9ydGVkID0gZmFsc2U7XG5cbnRyeSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgZ2V0IGNhcHR1cmUoKSB7XG4gICAgICBldmVudE9wdGlvbnNTdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMgYXMgYW55LCBvcHRpb25zKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMgYXMgYW55LCBvcHRpb25zKTtcbn0gY2F0Y2ggKF9lKSB7XG59XG5cblxudHlwZSBFdmVudEhhbmRsZXJXaXRoT3B0aW9ucyA9XG4gICAgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCZQYXJ0aWFsPEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zPjtcbmV4cG9ydCBjbGFzcyBFdmVudFBhcnQgaW1wbGVtZW50cyBQYXJ0IHtcbiAgcmVhZG9ubHkgZWxlbWVudDogRWxlbWVudDtcbiAgcmVhZG9ubHkgZXZlbnROYW1lOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGV2ZW50Q29udGV4dD86IEV2ZW50VGFyZ2V0O1xuICB2YWx1ZTogdW5kZWZpbmVkfEV2ZW50SGFuZGxlcldpdGhPcHRpb25zID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIF9fb3B0aW9ucz86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zO1xuICBwcml2YXRlIF9fcGVuZGluZ1ZhbHVlOiB1bmRlZmluZWR8RXZlbnRIYW5kbGVyV2l0aE9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgX19ib3VuZEhhbmRsZUV2ZW50OiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQsIGV2ZW50TmFtZTogc3RyaW5nLCBldmVudENvbnRleHQ/OiBFdmVudFRhcmdldCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgdGhpcy5ldmVudENvbnRleHQgPSBldmVudENvbnRleHQ7XG4gICAgdGhpcy5fX2JvdW5kSGFuZGxlRXZlbnQgPSAoZSkgPT4gdGhpcy5oYW5kbGVFdmVudChlKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiB1bmRlZmluZWR8RXZlbnRIYW5kbGVyV2l0aE9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBjb21taXQoKSB7XG4gICAgd2hpbGUgKGlzRGlyZWN0aXZlKHRoaXMuX19wZW5kaW5nVmFsdWUpKSB7XG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLl9fcGVuZGluZ1ZhbHVlO1xuICAgICAgdGhpcy5fX3BlbmRpbmdWYWx1ZSA9IG5vQ2hhbmdlIGFzIEV2ZW50SGFuZGxlcldpdGhPcHRpb25zO1xuICAgICAgZGlyZWN0aXZlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX3BlbmRpbmdWYWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdMaXN0ZW5lciA9IHRoaXMuX19wZW5kaW5nVmFsdWU7XG4gICAgY29uc3Qgb2xkTGlzdGVuZXIgPSB0aGlzLnZhbHVlO1xuICAgIGNvbnN0IHNob3VsZFJlbW92ZUxpc3RlbmVyID0gbmV3TGlzdGVuZXIgPT0gbnVsbCB8fFxuICAgICAgICBvbGRMaXN0ZW5lciAhPSBudWxsICYmXG4gICAgICAgICAgICAobmV3TGlzdGVuZXIuY2FwdHVyZSAhPT0gb2xkTGlzdGVuZXIuY2FwdHVyZSB8fFxuICAgICAgICAgICAgIG5ld0xpc3RlbmVyLm9uY2UgIT09IG9sZExpc3RlbmVyLm9uY2UgfHxcbiAgICAgICAgICAgICBuZXdMaXN0ZW5lci5wYXNzaXZlICE9PSBvbGRMaXN0ZW5lci5wYXNzaXZlKTtcbiAgICBjb25zdCBzaG91bGRBZGRMaXN0ZW5lciA9XG4gICAgICAgIG5ld0xpc3RlbmVyICE9IG51bGwgJiYgKG9sZExpc3RlbmVyID09IG51bGwgfHwgc2hvdWxkUmVtb3ZlTGlzdGVuZXIpO1xuXG4gICAgaWYgKHNob3VsZFJlbW92ZUxpc3RlbmVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICB0aGlzLmV2ZW50TmFtZSwgdGhpcy5fX2JvdW5kSGFuZGxlRXZlbnQsIHRoaXMuX19vcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHNob3VsZEFkZExpc3RlbmVyKSB7XG4gICAgICB0aGlzLl9fb3B0aW9ucyA9IGdldE9wdGlvbnMobmV3TGlzdGVuZXIpO1xuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgdGhpcy5ldmVudE5hbWUsIHRoaXMuX19ib3VuZEhhbmRsZUV2ZW50LCB0aGlzLl9fb3B0aW9ucyk7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBuZXdMaXN0ZW5lcjtcbiAgICB0aGlzLl9fcGVuZGluZ1ZhbHVlID0gbm9DaGFuZ2UgYXMgRXZlbnRIYW5kbGVyV2l0aE9wdGlvbnM7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudDogRXZlbnQpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMudmFsdWUuY2FsbCh0aGlzLmV2ZW50Q29udGV4dCB8fCB0aGlzLmVsZW1lbnQsIGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgKHRoaXMudmFsdWUgYXMgRXZlbnRMaXN0ZW5lck9iamVjdCkuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBXZSBjb3B5IG9wdGlvbnMgYmVjYXVzZSBvZiB0aGUgaW5jb25zaXN0ZW50IGJlaGF2aW9yIG9mIGJyb3dzZXJzIHdoZW4gcmVhZGluZ1xuLy8gdGhlIHRoaXJkIGFyZ3VtZW50IG9mIGFkZC9yZW1vdmVFdmVudExpc3RlbmVyLiBJRTExIGRvZXNuJ3Qgc3VwcG9ydCBvcHRpb25zXG4vLyBhdCBhbGwuIENocm9tZSA0MSBvbmx5IHJlYWRzIGBjYXB0dXJlYCBpZiB0aGUgYXJndW1lbnQgaXMgYW4gb2JqZWN0LlxuY29uc3QgZ2V0T3B0aW9ucyA9IChvOiBBZGRFdmVudExpc3RlbmVyT3B0aW9uc3x1bmRlZmluZWQpID0+IG8gJiZcbiAgICAoZXZlbnRPcHRpb25zU3VwcG9ydGVkID9cbiAgICAgICAgIHtjYXB0dXJlOiBvLmNhcHR1cmUsIHBhc3NpdmU6IG8ucGFzc2l2ZSwgb25jZTogby5vbmNlfSA6XG4gICAgICAgICBvLmNhcHR1cmUgYXMgQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnMpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge1BhcnR9IGZyb20gJy4vcGFydC5qcyc7XG5cbmNvbnN0IGRpcmVjdGl2ZXMgPSBuZXcgV2Vha01hcDxvYmplY3QsIHRydWU+KCk7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCB0eXBlIERpcmVjdGl2ZUZhY3RvcnkgPSAoLi4uYXJnczogYW55W10pID0+IG9iamVjdDtcblxuZXhwb3J0IHR5cGUgRGlyZWN0aXZlRm4gPSAocGFydDogUGFydCkgPT4gdm9pZDtcblxuLyoqXG4gKiBCcmFuZHMgYSBmdW5jdGlvbiBhcyBhIGRpcmVjdGl2ZSBmYWN0b3J5IGZ1bmN0aW9uIHNvIHRoYXQgbGl0LWh0bWwgd2lsbCBjYWxsXG4gKiB0aGUgZnVuY3Rpb24gZHVyaW5nIHRlbXBsYXRlIHJlbmRlcmluZywgcmF0aGVyIHRoYW4gcGFzc2luZyBhcyBhIHZhbHVlLlxuICpcbiAqIEEgX2RpcmVjdGl2ZV8gaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgUGFydCBhcyBhbiBhcmd1bWVudC4gSXQgaGFzIHRoZVxuICogc2lnbmF0dXJlOiBgKHBhcnQ6IFBhcnQpID0+IHZvaWRgLlxuICpcbiAqIEEgZGlyZWN0aXZlIF9mYWN0b3J5XyBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYXJndW1lbnRzIGZvciBkYXRhIGFuZFxuICogY29uZmlndXJhdGlvbiBhbmQgcmV0dXJucyBhIGRpcmVjdGl2ZS4gVXNlcnMgb2YgZGlyZWN0aXZlIHVzdWFsbHkgcmVmZXIgdG9cbiAqIHRoZSBkaXJlY3RpdmUgZmFjdG9yeSBhcyB0aGUgZGlyZWN0aXZlLiBGb3IgZXhhbXBsZSwgXCJUaGUgcmVwZWF0IGRpcmVjdGl2ZVwiLlxuICpcbiAqIFVzdWFsbHkgYSB0ZW1wbGF0ZSBhdXRob3Igd2lsbCBpbnZva2UgYSBkaXJlY3RpdmUgZmFjdG9yeSBpbiB0aGVpciB0ZW1wbGF0ZVxuICogd2l0aCByZWxldmFudCBhcmd1bWVudHMsIHdoaWNoIHdpbGwgdGhlbiByZXR1cm4gYSBkaXJlY3RpdmUgZnVuY3Rpb24uXG4gKlxuICogSGVyZSdzIGFuIGV4YW1wbGUgb2YgdXNpbmcgdGhlIGByZXBlYXQoKWAgZGlyZWN0aXZlIGZhY3RvcnkgdGhhdCB0YWtlcyBhblxuICogYXJyYXkgYW5kIGEgZnVuY3Rpb24gdG8gcmVuZGVyIGFuIGl0ZW06XG4gKlxuICogYGBganNcbiAqIGh0bWxgPHVsPjwke3JlcGVhdChpdGVtcywgKGl0ZW0pID0+IGh0bWxgPGxpPiR7aXRlbX08L2xpPmApfTwvdWw+YFxuICogYGBgXG4gKlxuICogV2hlbiBgcmVwZWF0YCBpcyBpbnZva2VkLCBpdCByZXR1cm5zIGEgZGlyZWN0aXZlIGZ1bmN0aW9uIHRoYXQgY2xvc2VzIG92ZXJcbiAqIGBpdGVtc2AgYW5kIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbi4gV2hlbiB0aGUgb3V0ZXIgdGVtcGxhdGUgaXMgcmVuZGVyZWQsIHRoZVxuICogcmV0dXJuIGRpcmVjdGl2ZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCB0aGUgUGFydCBmb3IgdGhlIGV4cHJlc3Npb24uXG4gKiBgcmVwZWF0YCB0aGVuIHBlcmZvcm1zIGl0J3MgY3VzdG9tIGxvZ2ljIHRvIHJlbmRlciBtdWx0aXBsZSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0gZiBUaGUgZGlyZWN0aXZlIGZhY3RvcnkgZnVuY3Rpb24uIE11c3QgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYVxuICogZnVuY3Rpb24gb2YgdGhlIHNpZ25hdHVyZSBgKHBhcnQ6IFBhcnQpID0+IHZvaWRgLiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gd2lsbFxuICogYmUgY2FsbGVkIHdpdGggdGhlIHBhcnQgb2JqZWN0LlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IHtkaXJlY3RpdmUsIGh0bWx9IGZyb20gJ2xpdC1odG1sJztcbiAqXG4gKiBjb25zdCBpbW11dGFibGUgPSBkaXJlY3RpdmUoKHYpID0+IChwYXJ0KSA9PiB7XG4gKiAgIGlmIChwYXJ0LnZhbHVlICE9PSB2KSB7XG4gKiAgICAgcGFydC5zZXRWYWx1ZSh2KVxuICogICB9XG4gKiB9KTtcbiAqL1xuZXhwb3J0IGNvbnN0IGRpcmVjdGl2ZSA9IDxGIGV4dGVuZHMgRGlyZWN0aXZlRmFjdG9yeT4oZjogRik6IEYgPT5cbiAgICAoKC4uLmFyZ3M6IHVua25vd25bXSkgPT4ge1xuICAgICAgY29uc3QgZCA9IGYoLi4uYXJncyk7XG4gICAgICBkaXJlY3RpdmVzLnNldChkLCB0cnVlKTtcbiAgICAgIHJldHVybiBkO1xuICAgIH0pIGFzIEY7XG5cbmV4cG9ydCBjb25zdCBpc0RpcmVjdGl2ZSA9IChvOiB1bmtub3duKTogbyBpcyBEaXJlY3RpdmVGbiA9PiB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ2Z1bmN0aW9uJyAmJiBkaXJlY3RpdmVzLmhhcyhvKTtcbn07XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5cbi8qKlxuICogQG1vZHVsZSBsaXQtaHRtbFxuICovXG5cbmludGVyZmFjZSBNYXliZVBvbHlmaWxsZWRDZSBleHRlbmRzIEN1c3RvbUVsZW1lbnRSZWdpc3RyeSB7XG4gIHJlYWRvbmx5IHBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2s/OiBvYmplY3Q7XG59XG5cbi8qKlxuICogVHJ1ZSBpZiB0aGUgY3VzdG9tIGVsZW1lbnRzIHBvbHlmaWxsIGlzIGluIHVzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzQ0VQb2x5ZmlsbCA9IHdpbmRvdy5jdXN0b21FbGVtZW50cyAhPT0gdW5kZWZpbmVkICYmXG4gICAgKHdpbmRvdy5jdXN0b21FbGVtZW50cyBhcyBNYXliZVBvbHlmaWxsZWRDZSkucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjayAhPT1cbiAgICAgICAgdW5kZWZpbmVkO1xuXG4vKipcbiAqIFJlcGFyZW50cyBub2Rlcywgc3RhcnRpbmcgZnJvbSBgc3RhcnRgIChpbmNsdXNpdmUpIHRvIGBlbmRgIChleGNsdXNpdmUpLFxuICogaW50byBhbm90aGVyIGNvbnRhaW5lciAoY291bGQgYmUgdGhlIHNhbWUgY29udGFpbmVyKSwgYmVmb3JlIGBiZWZvcmVgLiBJZlxuICogYGJlZm9yZWAgaXMgbnVsbCwgaXQgYXBwZW5kcyB0aGUgbm9kZXMgdG8gdGhlIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlcGFyZW50Tm9kZXMgPVxuICAgIChjb250YWluZXI6IE5vZGUsXG4gICAgIHN0YXJ0OiBOb2RlfG51bGwsXG4gICAgIGVuZDogTm9kZXxudWxsID0gbnVsbCxcbiAgICAgYmVmb3JlOiBOb2RlfG51bGwgPSBudWxsKTogdm9pZCA9PiB7XG4gICAgICB3aGlsZSAoc3RhcnQgIT09IGVuZCkge1xuICAgICAgICBjb25zdCBuID0gc3RhcnQhLm5leHRTaWJsaW5nO1xuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKHN0YXJ0ISwgYmVmb3JlKTtcbiAgICAgICAgc3RhcnQgPSBuO1xuICAgICAgfVxuICAgIH07XG5cbi8qKlxuICogUmVtb3ZlcyBub2Rlcywgc3RhcnRpbmcgZnJvbSBgc3RhcnRgIChpbmNsdXNpdmUpIHRvIGBlbmRgIChleGNsdXNpdmUpLCBmcm9tXG4gKiBgY29udGFpbmVyYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZU5vZGVzID1cbiAgICAoY29udGFpbmVyOiBOb2RlLCBzdGFydDogTm9kZXxudWxsLCBlbmQ6IE5vZGV8bnVsbCA9IG51bGwpOiB2b2lkID0+IHtcbiAgICAgIHdoaWxlIChzdGFydCAhPT0gZW5kKSB7XG4gICAgICAgIGNvbnN0IG4gPSBzdGFydCEubmV4dFNpYmxpbmc7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChzdGFydCEpO1xuICAgICAgICBzdGFydCA9IG47XG4gICAgICB9XG4gICAgfTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuLyoqXG4gKiBUaGUgUGFydCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGR5bmFtaWMgcGFydCBvZiBhIHRlbXBsYXRlIGluc3RhbmNlIHJlbmRlcmVkXG4gKiBieSBsaXQtaHRtbC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXJ0IHtcbiAgcmVhZG9ubHkgdmFsdWU6IHVua25vd247XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgcGFydCB2YWx1ZSwgYnV0IGRvZXMgbm90IHdyaXRlIGl0IHRvIHRoZSBET00uXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdGhhdCB3aWxsIGJlIGNvbW1pdHRlZC5cbiAgICovXG4gIHNldFZhbHVlKHZhbHVlOiB1bmtub3duKTogdm9pZDtcblxuICAvKipcbiAgICogQ29tbWl0cyB0aGUgY3VycmVudCBwYXJ0IHZhbHVlLCBjYXVzaW5nIGl0IHRvIGFjdHVhbGx5IGJlIHdyaXR0ZW4gdG8gdGhlXG4gICAqIERPTS5cbiAgICpcbiAgICogRGlyZWN0aXZlcyBhcmUgcnVuIGF0IHRoZSBzdGFydCBvZiBgY29tbWl0YCwgc28gdGhhdCBpZiB0aGV5IGNhbGxcbiAgICogYHBhcnQuc2V0VmFsdWUoLi4uKWAgc3luY2hyb25vdXNseSB0aGF0IHZhbHVlIHdpbGwgYmUgdXNlZCBpbiB0aGUgY3VycmVudFxuICAgKiBjb21taXQsIGFuZCB0aGVyZSdzIG5vIG5lZWQgdG8gY2FsbCBgcGFydC5jb21taXQoKWAgd2l0aGluIHRoZSBkaXJlY3RpdmUuXG4gICAqIElmIGRpcmVjdGl2ZXMgc2V0IGEgcGFydCB2YWx1ZSBhc3luY2hyb25vdXNseSwgdGhlbiB0aGV5IG11c3QgY2FsbFxuICAgKiBgcGFydC5jb21taXQoKWAgbWFudWFsbHkuXG4gICAqL1xuICBjb21taXQoKTogdm9pZDtcbn1cblxuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyB0aGF0IGEgdmFsdWUgd2FzIGhhbmRsZWQgYnkgYSBkaXJlY3RpdmUgYW5kXG4gKiBzaG91bGQgbm90IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vQ2hhbmdlID0ge307XG5cbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgYSBOb2RlUGFydCB0byBmdWxseSBjbGVhciBpdHMgY29udGVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdGhpbmcgPSB7fTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtpc0NFUG9seWZpbGx9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7UGFydH0gZnJvbSAnLi9wYXJ0LmpzJztcbmltcG9ydCB7UmVuZGVyT3B0aW9uc30gZnJvbSAnLi9yZW5kZXItb3B0aW9ucy5qcyc7XG5pbXBvcnQge1RlbXBsYXRlUHJvY2Vzc29yfSBmcm9tICcuL3RlbXBsYXRlLXByb2Nlc3Nvci5qcyc7XG5pbXBvcnQge2lzVGVtcGxhdGVQYXJ0QWN0aXZlLCBUZW1wbGF0ZSwgVGVtcGxhdGVQYXJ0fSBmcm9tICcuL3RlbXBsYXRlLmpzJztcblxuLyoqXG4gKiBBbiBpbnN0YW5jZSBvZiBhIGBUZW1wbGF0ZWAgdGhhdCBjYW4gYmUgYXR0YWNoZWQgdG8gdGhlIERPTSBhbmQgdXBkYXRlZFxuICogd2l0aCBuZXcgdmFsdWVzLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVJbnN0YW5jZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX19wYXJ0czogQXJyYXk8UGFydHx1bmRlZmluZWQ+ID0gW107XG4gIHJlYWRvbmx5IHByb2Nlc3NvcjogVGVtcGxhdGVQcm9jZXNzb3I7XG4gIHJlYWRvbmx5IG9wdGlvbnM6IFJlbmRlck9wdGlvbnM7XG4gIHJlYWRvbmx5IHRlbXBsYXRlOiBUZW1wbGF0ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHRlbXBsYXRlOiBUZW1wbGF0ZSwgcHJvY2Vzc29yOiBUZW1wbGF0ZVByb2Nlc3NvcixcbiAgICAgIG9wdGlvbnM6IFJlbmRlck9wdGlvbnMpIHtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy5wcm9jZXNzb3IgPSBwcm9jZXNzb3I7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHVwZGF0ZSh2YWx1ZXM6IFJlYWRvbmx5QXJyYXk8dW5rbm93bj4pIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yIChjb25zdCBwYXJ0IG9mIHRoaXMuX19wYXJ0cykge1xuICAgICAgaWYgKHBhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJ0LnNldFZhbHVlKHZhbHVlc1tpXSk7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLl9fcGFydHMpIHtcbiAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFydC5jb21taXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY2xvbmUoKTogRG9jdW1lbnRGcmFnbWVudCB7XG4gICAgLy8gVGhlcmUgYXJlIGEgbnVtYmVyIG9mIHN0ZXBzIGluIHRoZSBsaWZlY3ljbGUgb2YgYSB0ZW1wbGF0ZSBpbnN0YW5jZSdzXG4gICAgLy8gRE9NIGZyYWdtZW50OlxuICAgIC8vICAxLiBDbG9uZSAtIGNyZWF0ZSB0aGUgaW5zdGFuY2UgZnJhZ21lbnRcbiAgICAvLyAgMi4gQWRvcHQgLSBhZG9wdCBpbnRvIHRoZSBtYWluIGRvY3VtZW50XG4gICAgLy8gIDMuIFByb2Nlc3MgLSBmaW5kIHBhcnQgbWFya2VycyBhbmQgY3JlYXRlIHBhcnRzXG4gICAgLy8gIDQuIFVwZ3JhZGUgLSB1cGdyYWRlIGN1c3RvbSBlbGVtZW50c1xuICAgIC8vICA1LiBVcGRhdGUgLSBzZXQgbm9kZSwgYXR0cmlidXRlLCBwcm9wZXJ0eSwgZXRjLiwgdmFsdWVzXG4gICAgLy8gIDYuIENvbm5lY3QgLSBjb25uZWN0IHRvIHRoZSBkb2N1bWVudC4gT3B0aW9uYWwgYW5kIG91dHNpZGUgb2YgdGhpc1xuICAgIC8vICAgICBtZXRob2QuXG4gICAgLy9cbiAgICAvLyBXZSBoYXZlIGEgZmV3IGNvbnN0cmFpbnRzIG9uIHRoZSBvcmRlcmluZyBvZiB0aGVzZSBzdGVwczpcbiAgICAvLyAgKiBXZSBuZWVkIHRvIHVwZ3JhZGUgYmVmb3JlIHVwZGF0aW5nLCBzbyB0aGF0IHByb3BlcnR5IHZhbHVlcyB3aWxsIHBhc3NcbiAgICAvLyAgICB0aHJvdWdoIGFueSBwcm9wZXJ0eSBzZXR0ZXJzLlxuICAgIC8vICAqIFdlIHdvdWxkIGxpa2UgdG8gcHJvY2VzcyBiZWZvcmUgdXBncmFkaW5nIHNvIHRoYXQgd2UncmUgc3VyZSB0aGF0IHRoZVxuICAgIC8vICAgIGNsb25lZCBmcmFnbWVudCBpcyBpbmVydCBhbmQgbm90IGRpc3R1cmJlZCBieSBzZWxmLW1vZGlmeWluZyBET00uXG4gICAgLy8gICogV2Ugd2FudCBjdXN0b20gZWxlbWVudHMgdG8gdXBncmFkZSBldmVuIGluIGRpc2Nvbm5lY3RlZCBmcmFnbWVudHMuXG4gICAgLy9cbiAgICAvLyBHaXZlbiB0aGVzZSBjb25zdHJhaW50cywgd2l0aCBmdWxsIGN1c3RvbSBlbGVtZW50cyBzdXBwb3J0IHdlIHdvdWxkXG4gICAgLy8gcHJlZmVyIHRoZSBvcmRlcjogQ2xvbmUsIFByb2Nlc3MsIEFkb3B0LCBVcGdyYWRlLCBVcGRhdGUsIENvbm5lY3RcbiAgICAvL1xuICAgIC8vIEJ1dCBTYWZhcmkgZG9vZXMgbm90IGltcGxlbWVudCBDdXN0b21FbGVtZW50UmVnaXN0cnkjdXBncmFkZSwgc28gd2VcbiAgICAvLyBjYW4gbm90IGltcGxlbWVudCB0aGF0IG9yZGVyIGFuZCBzdGlsbCBoYXZlIHVwZ3JhZGUtYmVmb3JlLXVwZGF0ZSBhbmRcbiAgICAvLyB1cGdyYWRlIGRpc2Nvbm5lY3RlZCBmcmFnbWVudHMuIFNvIHdlIGluc3RlYWQgc2FjcmlmaWNlIHRoZVxuICAgIC8vIHByb2Nlc3MtYmVmb3JlLXVwZ3JhZGUgY29uc3RyYWludCwgc2luY2UgaW4gQ3VzdG9tIEVsZW1lbnRzIHYxIGVsZW1lbnRzXG4gICAgLy8gbXVzdCBub3QgbW9kaWZ5IHRoZWlyIGxpZ2h0IERPTSBpbiB0aGUgY29uc3RydWN0b3IuIFdlIHN0aWxsIGhhdmUgaXNzdWVzXG4gICAgLy8gd2hlbiBjby1leGlzdGluZyB3aXRoIENFdjAgZWxlbWVudHMgbGlrZSBQb2x5bWVyIDEsIGFuZCB3aXRoIHBvbHlmaWxsc1xuICAgIC8vIHRoYXQgZG9uJ3Qgc3RyaWN0bHkgYWRoZXJlIHRvIHRoZSBuby1tb2RpZmljYXRpb24gcnVsZSBiZWNhdXNlIHNoYWRvd1xuICAgIC8vIERPTSwgd2hpY2ggbWF5IGJlIGNyZWF0ZWQgaW4gdGhlIGNvbnN0cnVjdG9yLCBpcyBlbXVsYXRlZCBieSBiZWluZyBwbGFjZWRcbiAgICAvLyBpbiB0aGUgbGlnaHQgRE9NLlxuICAgIC8vXG4gICAgLy8gVGhlIHJlc3VsdGluZyBvcmRlciBpcyBvbiBuYXRpdmUgaXM6IENsb25lLCBBZG9wdCwgVXBncmFkZSwgUHJvY2VzcyxcbiAgICAvLyBVcGRhdGUsIENvbm5lY3QuIGRvY3VtZW50LmltcG9ydE5vZGUoKSBwZXJmb3JtcyBDbG9uZSwgQWRvcHQsIGFuZCBVcGdyYWRlXG4gICAgLy8gaW4gb25lIHN0ZXAuXG4gICAgLy9cbiAgICAvLyBUaGUgQ3VzdG9tIEVsZW1lbnRzIHYxIHBvbHlmaWxsIHN1cHBvcnRzIHVwZ3JhZGUoKSwgc28gdGhlIG9yZGVyIHdoZW5cbiAgICAvLyBwb2x5ZmlsbGVkIGlzIHRoZSBtb3JlIGlkZWFsOiBDbG9uZSwgUHJvY2VzcywgQWRvcHQsIFVwZ3JhZGUsIFVwZGF0ZSxcbiAgICAvLyBDb25uZWN0LlxuXG4gICAgY29uc3QgZnJhZ21lbnQgPSBpc0NFUG9seWZpbGwgP1xuICAgICAgICB0aGlzLnRlbXBsYXRlLmVsZW1lbnQuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgRG9jdW1lbnRGcmFnbWVudCA6XG4gICAgICAgIGRvY3VtZW50LmltcG9ydE5vZGUodGhpcy50ZW1wbGF0ZS5lbGVtZW50LmNvbnRlbnQsIHRydWUpO1xuXG4gICAgY29uc3Qgc3RhY2s6IE5vZGVbXSA9IFtdO1xuICAgIGNvbnN0IHBhcnRzID0gdGhpcy50ZW1wbGF0ZS5wYXJ0cztcbiAgICAvLyBFZGdlIG5lZWRzIGFsbCA0IHBhcmFtZXRlcnMgcHJlc2VudDsgSUUxMSBuZWVkcyAzcmQgcGFyYW1ldGVyIHRvIGJlIG51bGxcbiAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgICAgICBmcmFnbWVudCxcbiAgICAgICAgMTMzIC8qIE5vZGVGaWx0ZXIuU0hPV197RUxFTUVOVHxDT01NRU5UfFRFWFR9ICovLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSk7XG4gICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgbGV0IG5vZGVJbmRleCA9IDA7XG4gICAgbGV0IHBhcnQ6IFRlbXBsYXRlUGFydDtcbiAgICBsZXQgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgdGhlIG5vZGVzIGFuZCBwYXJ0cyBvZiBhIHRlbXBsYXRlXG4gICAgd2hpbGUgKHBhcnRJbmRleCA8IHBhcnRzLmxlbmd0aCkge1xuICAgICAgcGFydCA9IHBhcnRzW3BhcnRJbmRleF07XG4gICAgICBpZiAoIWlzVGVtcGxhdGVQYXJ0QWN0aXZlKHBhcnQpKSB7XG4gICAgICAgIHRoaXMuX19wYXJ0cy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHBhcnRJbmRleCsrO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gUHJvZ3Jlc3MgdGhlIHRyZWUgd2Fsa2VyIHVudGlsIHdlIGZpbmQgb3VyIG5leHQgcGFydCdzIG5vZGUuXG4gICAgICAvLyBOb3RlIHRoYXQgbXVsdGlwbGUgcGFydHMgbWF5IHNoYXJlIHRoZSBzYW1lIG5vZGUgKGF0dHJpYnV0ZSBwYXJ0c1xuICAgICAgLy8gb24gYSBzaW5nbGUgZWxlbWVudCksIHNvIHRoaXMgbG9vcCBtYXkgbm90IHJ1biBhdCBhbGwuXG4gICAgICB3aGlsZSAobm9kZUluZGV4IDwgcGFydC5pbmRleCkge1xuICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgaWYgKG5vZGUhLm5vZGVOYW1lID09PSAnVEVNUExBVEUnKSB7XG4gICAgICAgICAgc3RhY2sucHVzaChub2RlISk7XG4gICAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gKG5vZGUgYXMgSFRNTFRlbXBsYXRlRWxlbWVudCkuY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKSkgPT09IG51bGwpIHtcbiAgICAgICAgICAvLyBXZSd2ZSBleGhhdXN0ZWQgdGhlIGNvbnRlbnQgaW5zaWRlIGEgbmVzdGVkIHRlbXBsYXRlIGVsZW1lbnQuXG4gICAgICAgICAgLy8gQmVjYXVzZSB3ZSBzdGlsbCBoYXZlIHBhcnRzICh0aGUgb3V0ZXIgZm9yLWxvb3ApLCB3ZSBrbm93OlxuICAgICAgICAgIC8vIC0gVGhlcmUgaXMgYSB0ZW1wbGF0ZSBpbiB0aGUgc3RhY2tcbiAgICAgICAgICAvLyAtIFRoZSB3YWxrZXIgd2lsbCBmaW5kIGEgbmV4dE5vZGUgb3V0c2lkZSB0aGUgdGVtcGxhdGVcbiAgICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSBzdGFjay5wb3AoKSE7XG4gICAgICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFdlJ3ZlIGFycml2ZWQgYXQgb3VyIHBhcnQncyBub2RlLlxuICAgICAgaWYgKHBhcnQudHlwZSA9PT0gJ25vZGUnKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnByb2Nlc3Nvci5oYW5kbGVUZXh0RXhwcmVzc2lvbih0aGlzLm9wdGlvbnMpO1xuICAgICAgICBwYXJ0Lmluc2VydEFmdGVyTm9kZShub2RlIS5wcmV2aW91c1NpYmxpbmchKTtcbiAgICAgICAgdGhpcy5fX3BhcnRzLnB1c2gocGFydCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9fcGFydHMucHVzaCguLi50aGlzLnByb2Nlc3Nvci5oYW5kbGVBdHRyaWJ1dGVFeHByZXNzaW9ucyhcbiAgICAgICAgICAgIG5vZGUgYXMgRWxlbWVudCwgcGFydC5uYW1lLCBwYXJ0LnN0cmluZ3MsIHRoaXMub3B0aW9ucykpO1xuICAgICAgfVxuICAgICAgcGFydEluZGV4Kys7XG4gICAgfVxuXG4gICAgaWYgKGlzQ0VQb2x5ZmlsbCkge1xuICAgICAgZG9jdW1lbnQuYWRvcHROb2RlKGZyYWdtZW50KTtcbiAgICAgIGN1c3RvbUVsZW1lbnRzLnVwZ3JhZGUoZnJhZ21lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlIGxpdC1odG1sXG4gKi9cblxuaW1wb3J0IHtUZW1wbGF0ZVJlc3VsdH0gZnJvbSAnLi90ZW1wbGF0ZS1yZXN1bHQuanMnO1xuXG4vKipcbiAqIEFuIGV4cHJlc3Npb24gbWFya2VyIHdpdGggZW1iZWRkZWQgdW5pcXVlIGtleSB0byBhdm9pZCBjb2xsaXNpb24gd2l0aFxuICogcG9zc2libGUgdGV4dCBpbiB0ZW1wbGF0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBtYXJrZXIgPSBge3tsaXQtJHtTdHJpbmcoTWF0aC5yYW5kb20oKSkuc2xpY2UoMil9fX1gO1xuXG4vKipcbiAqIEFuIGV4cHJlc3Npb24gbWFya2VyIHVzZWQgdGV4dC1wb3NpdGlvbnMsIG11bHRpLWJpbmRpbmcgYXR0cmlidXRlcywgYW5kXG4gKiBhdHRyaWJ1dGVzIHdpdGggbWFya3VwLWxpa2UgdGV4dCB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBub2RlTWFya2VyID0gYDwhLS0ke21hcmtlcn0tLT5gO1xuXG5leHBvcnQgY29uc3QgbWFya2VyUmVnZXggPSBuZXcgUmVnRXhwKGAke21hcmtlcn18JHtub2RlTWFya2VyfWApO1xuXG4vKipcbiAqIFN1ZmZpeCBhcHBlbmRlZCB0byBhbGwgYm91bmQgYXR0cmlidXRlIG5hbWVzLlxuICovXG5leHBvcnQgY29uc3QgYm91bmRBdHRyaWJ1dGVTdWZmaXggPSAnJGxpdCQnO1xuXG4vKipcbiAqIEFuIHVwZGF0ZWFibGUgVGVtcGxhdGUgdGhhdCB0cmFja3MgdGhlIGxvY2F0aW9uIG9mIGR5bmFtaWMgcGFydHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZSB7XG4gIHJlYWRvbmx5IHBhcnRzOiBUZW1wbGF0ZVBhcnRbXSA9IFtdO1xuICByZWFkb25seSBlbGVtZW50OiBIVE1MVGVtcGxhdGVFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHJlc3VsdDogVGVtcGxhdGVSZXN1bHQsIGVsZW1lbnQ6IEhUTUxUZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgY29uc3Qgbm9kZXNUb1JlbW92ZTogTm9kZVtdID0gW107XG4gICAgY29uc3Qgc3RhY2s6IE5vZGVbXSA9IFtdO1xuICAgIC8vIEVkZ2UgbmVlZHMgYWxsIDQgcGFyYW1ldGVycyBwcmVzZW50OyBJRTExIG5lZWRzIDNyZCBwYXJhbWV0ZXIgdG8gYmUgbnVsbFxuICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgICAgIGVsZW1lbnQuY29udGVudCxcbiAgICAgICAgMTMzIC8qIE5vZGVGaWx0ZXIuU0hPV197RUxFTUVOVHxDT01NRU5UfFRFWFR9ICovLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSk7XG4gICAgLy8gS2VlcHMgdHJhY2sgb2YgdGhlIGxhc3QgaW5kZXggYXNzb2NpYXRlZCB3aXRoIGEgcGFydC4gV2UgdHJ5IHRvIGRlbGV0ZVxuICAgIC8vIHVubmVjZXNzYXJ5IG5vZGVzLCBidXQgd2UgbmV2ZXIgd2FudCB0byBhc3NvY2lhdGUgdHdvIGRpZmZlcmVudCBwYXJ0c1xuICAgIC8vIHRvIHRoZSBzYW1lIGluZGV4LiBUaGV5IG11c3QgaGF2ZSBhIGNvbnN0YW50IG5vZGUgYmV0d2Vlbi5cbiAgICBsZXQgbGFzdFBhcnRJbmRleCA9IDA7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgY29uc3Qge3N0cmluZ3MsIHZhbHVlczoge2xlbmd0aH19ID0gcmVzdWx0O1xuICAgIHdoaWxlIChwYXJ0SW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKSBhcyBFbGVtZW50IHwgQ29tbWVudCB8IFRleHQgfCBudWxsO1xuICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgLy8gV2UndmUgZXhoYXVzdGVkIHRoZSBjb250ZW50IGluc2lkZSBhIG5lc3RlZCB0ZW1wbGF0ZSBlbGVtZW50LlxuICAgICAgICAvLyBCZWNhdXNlIHdlIHN0aWxsIGhhdmUgcGFydHMgKHRoZSBvdXRlciBmb3ItbG9vcCksIHdlIGtub3c6XG4gICAgICAgIC8vIC0gVGhlcmUgaXMgYSB0ZW1wbGF0ZSBpbiB0aGUgc3RhY2tcbiAgICAgICAgLy8gLSBUaGUgd2Fsa2VyIHdpbGwgZmluZCBhIG5leHROb2RlIG91dHNpZGUgdGhlIHRlbXBsYXRlXG4gICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IHN0YWNrLnBvcCgpITtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpbmRleCsrO1xuXG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBOb2RlLkVMRU1FTlRfTk9ERSAqLykge1xuICAgICAgICBpZiAoKG5vZGUgYXMgRWxlbWVudCkuaGFzQXR0cmlidXRlcygpKSB7XG4gICAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IChub2RlIGFzIEVsZW1lbnQpLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgY29uc3Qge2xlbmd0aH0gPSBhdHRyaWJ1dGVzO1xuICAgICAgICAgIC8vIFBlclxuICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9OYW1lZE5vZGVNYXAsXG4gICAgICAgICAgLy8gYXR0cmlidXRlcyBhcmUgbm90IGd1YXJhbnRlZWQgdG8gYmUgcmV0dXJuZWQgaW4gZG9jdW1lbnQgb3JkZXIuXG4gICAgICAgICAgLy8gSW4gcGFydGljdWxhciwgRWRnZS9JRSBjYW4gcmV0dXJuIHRoZW0gb3V0IG9mIG9yZGVyLCBzbyB3ZSBjYW5ub3RcbiAgICAgICAgICAvLyBhc3N1bWUgYSBjb3JyZXNwb25kZW5jZSBiZXR3ZWVuIHBhcnQgaW5kZXggYW5kIGF0dHJpYnV0ZSBpbmRleC5cbiAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlbmRzV2l0aChhdHRyaWJ1dGVzW2ldLm5hbWUsIGJvdW5kQXR0cmlidXRlU3VmZml4KSkge1xuICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB3aGlsZSAoY291bnQtLSA+IDApIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgdGVtcGxhdGUgbGl0ZXJhbCBzZWN0aW9uIGxlYWRpbmcgdXAgdG8gdGhlIGZpcnN0XG4gICAgICAgICAgICAvLyBleHByZXNzaW9uIGluIHRoaXMgYXR0cmlidXRlXG4gICAgICAgICAgICBjb25zdCBzdHJpbmdGb3JQYXJ0ID0gc3RyaW5nc1twYXJ0SW5kZXhdO1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgYXR0cmlidXRlIG5hbWVcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LmV4ZWMoc3RyaW5nRm9yUGFydCkhWzJdO1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgY29ycmVzcG9uZGluZyBhdHRyaWJ1dGVcbiAgICAgICAgICAgIC8vIEFsbCBib3VuZCBhdHRyaWJ1dGVzIGhhdmUgaGFkIGEgc3VmZml4IGFkZGVkIGluXG4gICAgICAgICAgICAvLyBUZW1wbGF0ZVJlc3VsdCNnZXRIVE1MIHRvIG9wdCBvdXQgb2Ygc3BlY2lhbCBhdHRyaWJ1dGVcbiAgICAgICAgICAgIC8vIGhhbmRsaW5nLiBUbyBsb29rIHVwIHRoZSBhdHRyaWJ1dGUgdmFsdWUgd2UgYWxzbyBuZWVkIHRvIGFkZFxuICAgICAgICAgICAgLy8gdGhlIHN1ZmZpeC5cbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZUxvb2t1cE5hbWUgPVxuICAgICAgICAgICAgICAgIG5hbWUudG9Mb3dlckNhc2UoKSArIGJvdW5kQXR0cmlidXRlU3VmZml4O1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPVxuICAgICAgICAgICAgICAgIChub2RlIGFzIEVsZW1lbnQpLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVMb29rdXBOYW1lKSE7XG4gICAgICAgICAgICAobm9kZSBhcyBFbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTG9va3VwTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNzID0gYXR0cmlidXRlVmFsdWUuc3BsaXQobWFya2VyUmVnZXgpO1xuICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHt0eXBlOiAnYXR0cmlidXRlJywgaW5kZXgsIG5hbWUsIHN0cmluZ3M6IHN0YXRpY3N9KTtcbiAgICAgICAgICAgIHBhcnRJbmRleCArPSBzdGF0aWNzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgobm9kZSBhcyBFbGVtZW50KS50YWdOYW1lID09PSAnVEVNUExBVEUnKSB7XG4gICAgICAgICAgc3RhY2sucHVzaChub2RlKTtcbiAgICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSAobm9kZSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50KS5jb250ZW50O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMgLyogTm9kZS5URVhUX05PREUgKi8pIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IChub2RlIGFzIFRleHQpLmRhdGE7XG4gICAgICAgIGlmIChkYXRhLmluZGV4T2YobWFya2VyKSA+PSAwKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlITtcbiAgICAgICAgICBjb25zdCBzdHJpbmdzID0gZGF0YS5zcGxpdChtYXJrZXJSZWdleCk7XG4gICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRleHQgbm9kZSBmb3IgZWFjaCBsaXRlcmFsIHNlY3Rpb25cbiAgICAgICAgICAvLyBUaGVzZSBub2RlcyBhcmUgYWxzbyB1c2VkIGFzIHRoZSBtYXJrZXJzIGZvciBub2RlIHBhcnRzXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGluc2VydDogTm9kZTtcbiAgICAgICAgICAgIGxldCBzID0gc3RyaW5nc1tpXTtcbiAgICAgICAgICAgIGlmIChzID09PSAnJykge1xuICAgICAgICAgICAgICBpbnNlcnQgPSBjcmVhdGVNYXJrZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gbGFzdEF0dHJpYnV0ZU5hbWVSZWdleC5leGVjKHMpO1xuICAgICAgICAgICAgICBpZiAobWF0Y2ggIT09IG51bGwgJiYgZW5kc1dpdGgobWF0Y2hbMl0sIGJvdW5kQXR0cmlidXRlU3VmZml4KSkge1xuICAgICAgICAgICAgICAgIHMgPSBzLnNsaWNlKDAsIG1hdGNoLmluZGV4KSArIG1hdGNoWzFdICtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hbMl0uc2xpY2UoMCwgLWJvdW5kQXR0cmlidXRlU3VmZml4Lmxlbmd0aCkgKyBtYXRjaFszXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbnNlcnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoaW5zZXJ0LCBub2RlKTtcbiAgICAgICAgICAgIHRoaXMucGFydHMucHVzaCh7dHlwZTogJ25vZGUnLCBpbmRleDogKytpbmRleH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIHRleHQsIHdlIG11c3QgaW5zZXJ0IGEgY29tbWVudCB0byBtYXJrIG91ciBwbGFjZS5cbiAgICAgICAgICAvLyBFbHNlLCB3ZSBjYW4gdHJ1c3QgaXQgd2lsbCBzdGljayBhcm91bmQgYWZ0ZXIgY2xvbmluZy5cbiAgICAgICAgICBpZiAoc3RyaW5nc1tsYXN0SW5kZXhdID09PSAnJykge1xuICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgbm9kZSk7XG4gICAgICAgICAgICBub2Rlc1RvUmVtb3ZlLnB1c2gobm9kZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIChub2RlIGFzIFRleHQpLmRhdGEgPSBzdHJpbmdzW2xhc3RJbmRleF07XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFdlIGhhdmUgYSBwYXJ0IGZvciBlYWNoIG1hdGNoIGZvdW5kXG4gICAgICAgICAgcGFydEluZGV4ICs9IGxhc3RJbmRleDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIE5vZGUuQ09NTUVOVF9OT0RFICovKSB7XG4gICAgICAgIGlmICgobm9kZSBhcyBDb21tZW50KS5kYXRhID09PSBtYXJrZXIpIHtcbiAgICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGUhO1xuICAgICAgICAgIC8vIEFkZCBhIG5ldyBtYXJrZXIgbm9kZSB0byBiZSB0aGUgc3RhcnROb2RlIG9mIHRoZSBQYXJ0IGlmIGFueSBvZlxuICAgICAgICAgIC8vIHRoZSBmb2xsb3dpbmcgYXJlIHRydWU6XG4gICAgICAgICAgLy8gICogV2UgZG9uJ3QgaGF2ZSBhIHByZXZpb3VzU2libGluZ1xuICAgICAgICAgIC8vICAqIFRoZSBwcmV2aW91c1NpYmxpbmcgaXMgYWxyZWFkeSB0aGUgc3RhcnQgb2YgYSBwcmV2aW91cyBwYXJ0XG4gICAgICAgICAgaWYgKG5vZGUucHJldmlvdXNTaWJsaW5nID09PSBudWxsIHx8IGluZGV4ID09PSBsYXN0UGFydEluZGV4KSB7XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgbm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhc3RQYXJ0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICB0aGlzLnBhcnRzLnB1c2goe3R5cGU6ICdub2RlJywgaW5kZXh9KTtcbiAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgbmV4dFNpYmxpbmcsIGtlZXAgdGhpcyBub2RlIHNvIHdlIGhhdmUgYW4gZW5kLlxuICAgICAgICAgIC8vIEVsc2UsIHdlIGNhbiByZW1vdmUgaXQgdG8gc2F2ZSBmdXR1cmUgY29zdHMuXG4gICAgICAgICAgaWYgKG5vZGUubmV4dFNpYmxpbmcgPT09IG51bGwpIHtcbiAgICAgICAgICAgIChub2RlIGFzIENvbW1lbnQpLmRhdGEgPSAnJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZXNUb1JlbW92ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGkgPSAtMTtcbiAgICAgICAgICB3aGlsZSAoKGkgPSAobm9kZSBhcyBDb21tZW50KS5kYXRhLmluZGV4T2YobWFya2VyLCBpICsgMSkpICE9PSAtMSkge1xuICAgICAgICAgICAgLy8gQ29tbWVudCBub2RlIGhhcyBhIGJpbmRpbmcgbWFya2VyIGluc2lkZSwgbWFrZSBhbiBpbmFjdGl2ZSBwYXJ0XG4gICAgICAgICAgICAvLyBUaGUgYmluZGluZyB3b24ndCB3b3JrLCBidXQgc3Vic2VxdWVudCBiaW5kaW5ncyB3aWxsXG4gICAgICAgICAgICAvLyBUT0RPIChqdXN0aW5mYWduYW5pKTogY29uc2lkZXIgd2hldGhlciBpdCdzIGV2ZW4gd29ydGggaXQgdG9cbiAgICAgICAgICAgIC8vIG1ha2UgYmluZGluZ3MgaW4gY29tbWVudHMgd29ya1xuICAgICAgICAgICAgdGhpcy5wYXJ0cy5wdXNoKHt0eXBlOiAnbm9kZScsIGluZGV4OiAtMX0pO1xuICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIHRleHQgYmluZGluZyBub2RlcyBhZnRlciB0aGUgd2FsayB0byBub3QgZGlzdHVyYiB0aGUgVHJlZVdhbGtlclxuICAgIGZvciAoY29uc3QgbiBvZiBub2Rlc1RvUmVtb3ZlKSB7XG4gICAgICBuLnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKG4pO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBlbmRzV2l0aCA9IChzdHI6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdHIubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aDtcbiAgcmV0dXJuIGluZGV4ID49IDAgJiYgc3RyLnNsaWNlKGluZGV4KSA9PT0gc3VmZml4O1xufTtcblxuLyoqXG4gKiBBIHBsYWNlaG9sZGVyIGZvciBhIGR5bmFtaWMgZXhwcmVzc2lvbiBpbiBhbiBIVE1MIHRlbXBsYXRlLlxuICpcbiAqIFRoZXJlIGFyZSB0d28gYnVpbHQtaW4gcGFydCB0eXBlczogQXR0cmlidXRlUGFydCBhbmQgTm9kZVBhcnQuIE5vZGVQYXJ0c1xuICogYWx3YXlzIHJlcHJlc2VudCBhIHNpbmdsZSBkeW5hbWljIGV4cHJlc3Npb24sIHdoaWxlIEF0dHJpYnV0ZVBhcnRzIG1heVxuICogcmVwcmVzZW50IGFzIG1hbnkgZXhwcmVzc2lvbnMgYXJlIGNvbnRhaW5lZCBpbiB0aGUgYXR0cmlidXRlLlxuICpcbiAqIEEgVGVtcGxhdGUncyBwYXJ0cyBhcmUgbXV0YWJsZSwgc28gcGFydHMgY2FuIGJlIHJlcGxhY2VkIG9yIG1vZGlmaWVkXG4gKiAocG9zc2libHkgdG8gaW1wbGVtZW50IGRpZmZlcmVudCB0ZW1wbGF0ZSBzZW1hbnRpY3MpLiBUaGUgY29udHJhY3QgaXMgdGhhdFxuICogcGFydHMgY2FuIG9ubHkgYmUgcmVwbGFjZWQsIG5vdCByZW1vdmVkLCBhZGRlZCBvciByZW9yZGVyZWQsIGFuZCBwYXJ0cyBtdXN0XG4gKiBhbHdheXMgY29uc3VtZSB0aGUgY29ycmVjdCBudW1iZXIgb2YgdmFsdWVzIGluIHRoZWlyIGB1cGRhdGUoKWAgbWV0aG9kLlxuICpcbiAqIFRPRE8oanVzdGluZmFnbmFuaSk6IFRoYXQgcmVxdWlyZW1lbnQgaXMgYSBsaXR0bGUgZnJhZ2lsZS4gQVxuICogVGVtcGxhdGVJbnN0YW5jZSBjb3VsZCBpbnN0ZWFkIGJlIG1vcmUgY2FyZWZ1bCBhYm91dCB3aGljaCB2YWx1ZXMgaXQgZ2l2ZXNcbiAqIHRvIFBhcnQudXBkYXRlKCkuXG4gKi9cbmV4cG9ydCB0eXBlIFRlbXBsYXRlUGFydCA9IHtcbiAgcmVhZG9ubHkgdHlwZTogJ25vZGUnLFxuICBpbmRleDogbnVtYmVyXG59fHtyZWFkb25seSB0eXBlOiAnYXR0cmlidXRlJywgaW5kZXg6IG51bWJlciwgcmVhZG9ubHkgbmFtZTogc3RyaW5nLCByZWFkb25seSBzdHJpbmdzOiBSZWFkb25seUFycmF5PHN0cmluZz59O1xuXG5leHBvcnQgY29uc3QgaXNUZW1wbGF0ZVBhcnRBY3RpdmUgPSAocGFydDogVGVtcGxhdGVQYXJ0KSA9PiBwYXJ0LmluZGV4ICE9PSAtMTtcblxuLy8gQWxsb3dzIGBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKWAgdG8gYmUgcmVuYW1lZCBmb3IgYVxuLy8gc21hbGwgbWFudWFsIHNpemUtc2F2aW5ncy5cbmV4cG9ydCBjb25zdCBjcmVhdGVNYXJrZXIgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblxuLyoqXG4gKiBUaGlzIHJlZ2V4IGV4dHJhY3RzIHRoZSBhdHRyaWJ1dGUgbmFtZSBwcmVjZWRpbmcgYW4gYXR0cmlidXRlLXBvc2l0aW9uXG4gKiBleHByZXNzaW9uLiBJdCBkb2VzIHRoaXMgYnkgbWF0Y2hpbmcgdGhlIHN5bnRheCBhbGxvd2VkIGZvciBhdHRyaWJ1dGVzXG4gKiBhZ2FpbnN0IHRoZSBzdHJpbmcgbGl0ZXJhbCBkaXJlY3RseSBwcmVjZWRpbmcgdGhlIGV4cHJlc3Npb24sIGFzc3VtaW5nIHRoYXRcbiAqIHRoZSBleHByZXNzaW9uIGlzIGluIGFuIGF0dHJpYnV0ZS12YWx1ZSBwb3NpdGlvbi5cbiAqXG4gKiBTZWUgYXR0cmlidXRlcyBpbiB0aGUgSFRNTCBzcGVjOlxuICogaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI2VsZW1lbnRzLWF0dHJpYnV0ZXNcbiAqXG4gKiBcIiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiIGFyZSBIVE1MIHNwYWNlIGNoYXJhY3RlcnM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvaW5mcmFzdHJ1Y3R1cmUuaHRtbCNzcGFjZS1jaGFyYWN0ZXJzXG4gKlxuICogXCJcXDAtXFx4MUZcXHg3Ri1cXHg5RlwiIGFyZSBVbmljb2RlIGNvbnRyb2wgY2hhcmFjdGVycywgd2hpY2ggaW5jbHVkZXMgZXZlcnlcbiAqIHNwYWNlIGNoYXJhY3RlciBleGNlcHQgXCIgXCIuXG4gKlxuICogU28gYW4gYXR0cmlidXRlIGlzOlxuICogICogVGhlIG5hbWU6IGFueSBjaGFyYWN0ZXIgZXhjZXB0IGEgY29udHJvbCBjaGFyYWN0ZXIsIHNwYWNlIGNoYXJhY3RlciwgKCcpLFxuICogICAgKFwiKSwgXCI+XCIsIFwiPVwiLCBvciBcIi9cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5IFwiPVwiXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnk6XG4gKiAgICAqIEFueSBjaGFyYWN0ZXIgZXhjZXB0IHNwYWNlLCAoJyksIChcIiksIFwiPFwiLCBcIj5cIiwgXCI9XCIsIChgKSwgb3JcbiAqICAgICogKFwiKSB0aGVuIGFueSBub24tKFwiKSwgb3JcbiAqICAgICogKCcpIHRoZW4gYW55IG5vbi0oJylcbiAqL1xuZXhwb3J0IGNvbnN0IGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXggPVxuICAgIC8oWyBcXHgwOVxceDBhXFx4MGNcXHgwZF0pKFteXFwwLVxceDFGXFx4N0YtXFx4OUYgXCInPj0vXSspKFsgXFx4MDlcXHgwYVxceDBjXFx4MGRdKj1bIFxceDA5XFx4MGFcXHgwY1xceDBkXSooPzpbXiBcXHgwOVxceDBhXFx4MGNcXHgwZFwiJ2A8Pj1dKnxcIlteXCJdKnwnW14nXSopKSQvO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge3JlcGFyZW50Tm9kZXN9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7VGVtcGxhdGVQcm9jZXNzb3J9IGZyb20gJy4vdGVtcGxhdGUtcHJvY2Vzc29yLmpzJztcbmltcG9ydCB7Ym91bmRBdHRyaWJ1dGVTdWZmaXgsIGxhc3RBdHRyaWJ1dGVOYW1lUmVnZXgsIG1hcmtlciwgbm9kZU1hcmtlcn0gZnJvbSAnLi90ZW1wbGF0ZS5qcyc7XG5cbi8qKlxuICogVGhlIHJldHVybiB0eXBlIG9mIGBodG1sYCwgd2hpY2ggaG9sZHMgYSBUZW1wbGF0ZSBhbmQgdGhlIHZhbHVlcyBmcm9tXG4gKiBpbnRlcnBvbGF0ZWQgZXhwcmVzc2lvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVJlc3VsdCB7XG4gIHJlYWRvbmx5IHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5O1xuICByZWFkb25seSB2YWx1ZXM6IFJlYWRvbmx5QXJyYXk8dW5rbm93bj47XG4gIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgcmVhZG9ubHkgcHJvY2Vzc29yOiBUZW1wbGF0ZVByb2Nlc3NvcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHN0cmluZ3M6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCB2YWx1ZXM6IFJlYWRvbmx5QXJyYXk8dW5rbm93bj4sXG4gICAgICB0eXBlOiBzdHJpbmcsIHByb2Nlc3NvcjogVGVtcGxhdGVQcm9jZXNzb3IpIHtcbiAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5wcm9jZXNzb3IgPSBwcm9jZXNzb3I7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyBvZiBIVE1MIHVzZWQgdG8gY3JlYXRlIGEgYDx0ZW1wbGF0ZT5gIGVsZW1lbnQuXG4gICAqL1xuICBnZXRIVE1MKCk6IHN0cmluZyB7XG4gICAgY29uc3QgbCA9IHRoaXMuc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgIGxldCBodG1sID0gJyc7XG4gICAgbGV0IGlzQ29tbWVudEJpbmRpbmcgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBzID0gdGhpcy5zdHJpbmdzW2ldO1xuICAgICAgLy8gRm9yIGVhY2ggYmluZGluZyB3ZSB3YW50IHRvIGRldGVybWluZSB0aGUga2luZCBvZiBtYXJrZXIgdG8gaW5zZXJ0XG4gICAgICAvLyBpbnRvIHRoZSB0ZW1wbGF0ZSBzb3VyY2UgYmVmb3JlIGl0J3MgcGFyc2VkIGJ5IHRoZSBicm93c2VyJ3MgSFRNTFxuICAgICAgLy8gcGFyc2VyLiBUaGUgbWFya2VyIHR5cGUgaXMgYmFzZWQgb24gd2hldGhlciB0aGUgZXhwcmVzc2lvbiBpcyBpbiBhblxuICAgICAgLy8gYXR0cmlidXRlLCB0ZXh0LCBvciBjb21tZW50IHBvaXNpdGlvbi5cbiAgICAgIC8vICAgKiBGb3Igbm9kZS1wb3NpdGlvbiBiaW5kaW5ncyB3ZSBpbnNlcnQgYSBjb21tZW50IHdpdGggdGhlIG1hcmtlclxuICAgICAgLy8gICAgIHNlbnRpbmVsIGFzIGl0cyB0ZXh0IGNvbnRlbnQsIGxpa2UgPCEtLXt7bGl0LWd1aWR9fS0tPi5cbiAgICAgIC8vICAgKiBGb3IgYXR0cmlidXRlIGJpbmRpbmdzIHdlIGluc2VydCBqdXN0IHRoZSBtYXJrZXIgc2VudGluZWwgZm9yIHRoZVxuICAgICAgLy8gICAgIGZpcnN0IGJpbmRpbmcsIHNvIHRoYXQgd2Ugc3VwcG9ydCB1bnF1b3RlZCBhdHRyaWJ1dGUgYmluZGluZ3MuXG4gICAgICAvLyAgICAgU3Vic2VxdWVudCBiaW5kaW5ncyBjYW4gdXNlIGEgY29tbWVudCBtYXJrZXIgYmVjYXVzZSBtdWx0aS1iaW5kaW5nXG4gICAgICAvLyAgICAgYXR0cmlidXRlcyBtdXN0IGJlIHF1b3RlZC5cbiAgICAgIC8vICAgKiBGb3IgY29tbWVudCBiaW5kaW5ncyB3ZSBpbnNlcnQganVzdCB0aGUgbWFya2VyIHNlbnRpbmVsIHNvIHdlIGRvbid0XG4gICAgICAvLyAgICAgY2xvc2UgdGhlIGNvbW1lbnQuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIGZvbGxvd2luZyBjb2RlIHNjYW5zIHRoZSB0ZW1wbGF0ZSBzb3VyY2UsIGJ1dCBpcyAqbm90KiBhbiBIVE1MXG4gICAgICAvLyBwYXJzZXIuIFdlIGRvbid0IG5lZWQgdG8gdHJhY2sgdGhlIHRyZWUgc3RydWN0dXJlIG9mIHRoZSBIVE1MLCBvbmx5XG4gICAgICAvLyB3aGV0aGVyIGEgYmluZGluZyBpcyBpbnNpZGUgYSBjb21tZW50LCBhbmQgaWYgbm90LCBpZiBpdCBhcHBlYXJzIHRvIGJlXG4gICAgICAvLyB0aGUgZmlyc3QgYmluZGluZyBpbiBhbiBhdHRyaWJ1dGUuXG4gICAgICBjb25zdCBjb21tZW50T3BlbiA9IHMubGFzdEluZGV4T2YoJzwhLS0nKTtcbiAgICAgIC8vIFdlJ3JlIGluIGNvbW1lbnQgcG9zaXRpb24gaWYgd2UgaGF2ZSBhIGNvbW1lbnQgb3BlbiB3aXRoIG5vIGZvbGxvd2luZ1xuICAgICAgLy8gY29tbWVudCBjbG9zZS4gQmVjYXVzZSA8LS0gY2FuIGFwcGVhciBpbiBhbiBhdHRyaWJ1dGUgdmFsdWUgdGhlcmUgY2FuXG4gICAgICAvLyBiZSBmYWxzZSBwb3NpdGl2ZXMuXG4gICAgICBpc0NvbW1lbnRCaW5kaW5nID0gKGNvbW1lbnRPcGVuID4gLTEgfHwgaXNDb21tZW50QmluZGluZykgJiZcbiAgICAgICAgICBzLmluZGV4T2YoJy0tPicsIGNvbW1lbnRPcGVuICsgMSkgPT09IC0xO1xuICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHdlIGhhdmUgYW4gYXR0cmlidXRlLWxpa2Ugc2VxdWVuY2UgcHJlY2VlZGluZyB0aGVcbiAgICAgIC8vIGV4cHJlc3Npb24uIFRoaXMgY2FuIG1hdGNoIFwibmFtZT12YWx1ZVwiIGxpa2Ugc3RydWN0dXJlcyBpbiB0ZXh0LFxuICAgICAgLy8gY29tbWVudHMsIGFuZCBhdHRyaWJ1dGUgdmFsdWVzLCBzbyB0aGVyZSBjYW4gYmUgZmFsc2UtcG9zaXRpdmVzLlxuICAgICAgY29uc3QgYXR0cmlidXRlTWF0Y2ggPSBsYXN0QXR0cmlidXRlTmFtZVJlZ2V4LmV4ZWMocyk7XG4gICAgICBpZiAoYXR0cmlidXRlTWF0Y2ggPT09IG51bGwpIHtcbiAgICAgICAgLy8gV2UncmUgb25seSBpbiB0aGlzIGJyYW5jaCBpZiB3ZSBkb24ndCBoYXZlIGEgYXR0cmlidXRlLWxpa2VcbiAgICAgICAgLy8gcHJlY2VlZGluZyBzZXF1ZW5jZS4gRm9yIGNvbW1lbnRzLCB0aGlzIGd1YXJkcyBhZ2FpbnN0IHVudXN1YWxcbiAgICAgICAgLy8gYXR0cmlidXRlIHZhbHVlcyBsaWtlIDxkaXYgZm9vPVwiPCEtLSR7J2Jhcid9XCI+LiBDYXNlcyBsaWtlXG4gICAgICAgIC8vIDwhLS0gZm9vPSR7J2Jhcid9LS0+IGFyZSBoYW5kbGVkIGNvcnJlY3RseSBpbiB0aGUgYXR0cmlidXRlIGJyYW5jaFxuICAgICAgICAvLyBiZWxvdy5cbiAgICAgICAgaHRtbCArPSBzICsgKGlzQ29tbWVudEJpbmRpbmcgPyBtYXJrZXIgOiBub2RlTWFya2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBhdHRyaWJ1dGVzIHdlIHVzZSBqdXN0IGEgbWFya2VyIHNlbnRpbmVsLCBhbmQgYWxzbyBhcHBlbmQgYVxuICAgICAgICAvLyAkbGl0JCBzdWZmaXggdG8gdGhlIG5hbWUgdG8gb3B0LW91dCBvZiBhdHRyaWJ1dGUtc3BlY2lmaWMgcGFyc2luZ1xuICAgICAgICAvLyB0aGF0IElFIGFuZCBFZGdlIGRvIGZvciBzdHlsZSBhbmQgY2VydGFpbiBTVkcgYXR0cmlidXRlcy5cbiAgICAgICAgaHRtbCArPSBzLnN1YnN0cigwLCBhdHRyaWJ1dGVNYXRjaC5pbmRleCkgKyBhdHRyaWJ1dGVNYXRjaFsxXSArXG4gICAgICAgICAgICBhdHRyaWJ1dGVNYXRjaFsyXSArIGJvdW5kQXR0cmlidXRlU3VmZml4ICsgYXR0cmlidXRlTWF0Y2hbM10gK1xuICAgICAgICAgICAgbWFya2VyO1xuICAgICAgfVxuICAgIH1cbiAgICBodG1sICs9IHRoaXMuc3RyaW5nc1tsXTtcbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGdldFRlbXBsYXRlRWxlbWVudCgpOiBIVE1MVGVtcGxhdGVFbGVtZW50IHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdGhpcy5nZXRIVE1MKCk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG59XG5cbi8qKlxuICogQSBUZW1wbGF0ZVJlc3VsdCBmb3IgU1ZHIGZyYWdtZW50cy5cbiAqXG4gKiBUaGlzIGNsYXNzIHdyYXBzIEhUTUwgaW4gYW4gYDxzdmc+YCB0YWcgaW4gb3JkZXIgdG8gcGFyc2UgaXRzIGNvbnRlbnRzIGluIHRoZVxuICogU1ZHIG5hbWVzcGFjZSwgdGhlbiBtb2RpZmllcyB0aGUgdGVtcGxhdGUgdG8gcmVtb3ZlIHRoZSBgPHN2Zz5gIHRhZyBzbyB0aGF0XG4gKiBjbG9uZXMgb25seSBjb250YWluZXIgdGhlIG9yaWdpbmFsIGZyYWdtZW50LlxuICovXG5leHBvcnQgY2xhc3MgU1ZHVGVtcGxhdGVSZXN1bHQgZXh0ZW5kcyBUZW1wbGF0ZVJlc3VsdCB7XG4gIGdldEhUTUwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDxzdmc+JHtzdXBlci5nZXRIVE1MKCl9PC9zdmc+YDtcbiAgfVxuXG4gIGdldFRlbXBsYXRlRWxlbWVudCgpOiBIVE1MVGVtcGxhdGVFbGVtZW50IHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHN1cGVyLmdldFRlbXBsYXRlRWxlbWVudCgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50O1xuICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBjb250ZW50LmZpcnN0Q2hpbGQhO1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoc3ZnRWxlbWVudCk7XG4gICAgcmVwYXJlbnROb2Rlcyhjb250ZW50LCBzdmdFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge3JlbW92ZU5vZGVzfSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQge05vZGVQYXJ0fSBmcm9tICcuL3BhcnRzLmpzJztcbmltcG9ydCB7UmVuZGVyT3B0aW9uc30gZnJvbSAnLi9yZW5kZXItb3B0aW9ucy5qcyc7XG5pbXBvcnQge3RlbXBsYXRlRmFjdG9yeX0gZnJvbSAnLi90ZW1wbGF0ZS1mYWN0b3J5LmpzJztcbmltcG9ydCB7VGVtcGxhdGVSZXN1bHR9IGZyb20gJy4vdGVtcGxhdGUtcmVzdWx0LmpzJztcblxuZXhwb3J0IGNvbnN0IHBhcnRzID0gbmV3IFdlYWtNYXA8Tm9kZSwgTm9kZVBhcnQ+KCk7XG5cbi8qKlxuICogUmVuZGVycyBhIHRlbXBsYXRlIHRvIGEgY29udGFpbmVyLlxuICpcbiAqIFRvIHVwZGF0ZSBhIGNvbnRhaW5lciB3aXRoIG5ldyB2YWx1ZXMsIHJlZXZhbHVhdGUgdGhlIHRlbXBsYXRlIGxpdGVyYWwgYW5kXG4gKiBjYWxsIGByZW5kZXJgIHdpdGggdGhlIG5ldyByZXN1bHQuXG4gKlxuICogQHBhcmFtIHJlc3VsdCBhIFRlbXBsYXRlUmVzdWx0IGNyZWF0ZWQgYnkgZXZhbHVhdGluZyBhIHRlbXBsYXRlIHRhZyBsaWtlXG4gKiAgICAgYGh0bWxgIG9yIGBzdmdgLlxuICogQHBhcmFtIGNvbnRhaW5lciBBIERPTSBwYXJlbnQgdG8gcmVuZGVyIHRvLiBUaGUgZW50aXJlIGNvbnRlbnRzIGFyZSBlaXRoZXJcbiAqICAgICByZXBsYWNlZCwgb3IgZWZmaWNpZW50bHkgdXBkYXRlZCBpZiB0aGUgc2FtZSByZXN1bHQgdHlwZSB3YXMgcHJldmlvdXNcbiAqICAgICByZW5kZXJlZCB0aGVyZS5cbiAqIEBwYXJhbSBvcHRpb25zIFJlbmRlck9wdGlvbnMgZm9yIHRoZSBlbnRpcmUgcmVuZGVyIHRyZWUgcmVuZGVyZWQgdG8gdGhpc1xuICogICAgIGNvbnRhaW5lci4gUmVuZGVyIG9wdGlvbnMgbXVzdCAqbm90KiBjaGFuZ2UgYmV0d2VlbiByZW5kZXJzIHRvIHRoZSBzYW1lXG4gKiAgICAgY29udGFpbmVyLCBhcyB0aG9zZSBjaGFuZ2VzIHdpbGwgbm90IGVmZmVjdCBwcmV2aW91c2x5IHJlbmRlcmVkIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbmRlciA9XG4gICAgKHJlc3VsdDogVGVtcGxhdGVSZXN1bHQsXG4gICAgIGNvbnRhaW5lcjogRWxlbWVudHxEb2N1bWVudEZyYWdtZW50LFxuICAgICBvcHRpb25zPzogUGFydGlhbDxSZW5kZXJPcHRpb25zPikgPT4ge1xuICAgICAgbGV0IHBhcnQgPSBwYXJ0cy5nZXQoY29udGFpbmVyKTtcbiAgICAgIGlmIChwYXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVtb3ZlTm9kZXMoY29udGFpbmVyLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIHBhcnRzLnNldChjb250YWluZXIsIHBhcnQgPSBuZXcgTm9kZVBhcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlRmFjdG9yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIHBhcnQuYXBwZW5kSW50byhjb250YWluZXIpO1xuICAgICAgfVxuICAgICAgcGFydC5zZXRWYWx1ZShyZXN1bHQpO1xuICAgICAgcGFydC5jb21taXQoKTtcbiAgICB9O1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG4vKipcbiAqIEBtb2R1bGUgbGl0LWh0bWxcbiAqL1xuXG5pbXBvcnQge1RlbXBsYXRlUmVzdWx0fSBmcm9tICcuL3RlbXBsYXRlLXJlc3VsdC5qcyc7XG5pbXBvcnQge21hcmtlciwgVGVtcGxhdGV9IGZyb20gJy4vdGVtcGxhdGUuanMnO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdHlwZSB0aGF0IGNyZWF0ZXMgYSBUZW1wbGF0ZSBmcm9tIGEgVGVtcGxhdGVSZXN1bHQuXG4gKlxuICogVGhpcyBpcyBhIGhvb2sgaW50byB0aGUgdGVtcGxhdGUtY3JlYXRpb24gcHJvY2VzcyBmb3IgcmVuZGVyaW5nIHRoYXRcbiAqIHJlcXVpcmVzIHNvbWUgbW9kaWZpY2F0aW9uIG9mIHRlbXBsYXRlcyBiZWZvcmUgdGhleSdyZSB1c2VkLCBsaWtlIFNoYWR5Q1NTLFxuICogd2hpY2ggbXVzdCBhZGQgY2xhc3NlcyB0byBlbGVtZW50cyBhbmQgcmVtb3ZlIHN0eWxlcy5cbiAqXG4gKiBUZW1wbGF0ZXMgc2hvdWxkIGJlIGNhY2hlZCBhcyBhZ2dyZXNzaXZlbHkgYXMgcG9zc2libGUsIHNvIHRoYXQgbWFueVxuICogVGVtcGxhdGVSZXN1bHRzIHByb2R1Y2VkIGZyb20gdGhlIHNhbWUgZXhwcmVzc2lvbiBvbmx5IGRvIHRoZSB3b3JrIG9mXG4gKiBjcmVhdGluZyB0aGUgVGVtcGxhdGUgdGhlIGZpcnN0IHRpbWUuXG4gKlxuICogVGVtcGxhdGVzIGFyZSB1c3VhbGx5IGNhY2hlZCBieSBUZW1wbGF0ZVJlc3VsdC5zdHJpbmdzIGFuZFxuICogVGVtcGxhdGVSZXN1bHQudHlwZSwgYnV0IG1heSBiZSBjYWNoZWQgYnkgb3RoZXIga2V5cyBpZiB0aGlzIGZ1bmN0aW9uXG4gKiBtb2RpZmllcyB0aGUgdGVtcGxhdGUuXG4gKlxuICogTm90ZSB0aGF0IGN1cnJlbnRseSBUZW1wbGF0ZUZhY3RvcmllcyBtdXN0IG5vdCBhZGQsIHJlbW92ZSwgb3IgcmVvcmRlclxuICogZXhwcmVzc2lvbnMsIGJlY2F1c2UgdGhlcmUgaXMgbm8gd2F5IHRvIGRlc2NyaWJlIHN1Y2ggYSBtb2RpZmljYXRpb25cbiAqIHRvIHJlbmRlcigpIHNvIHRoYXQgdmFsdWVzIGFyZSBpbnRlcnBvbGF0ZWQgdG8gdGhlIGNvcnJlY3QgcGxhY2UgaW4gdGhlXG4gKiB0ZW1wbGF0ZSBpbnN0YW5jZXMuXG4gKi9cbmV4cG9ydCB0eXBlIFRlbXBsYXRlRmFjdG9yeSA9IChyZXN1bHQ6IFRlbXBsYXRlUmVzdWx0KSA9PiBUZW1wbGF0ZTtcblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBUZW1wbGF0ZUZhY3Rvcnkgd2hpY2ggY2FjaGVzIFRlbXBsYXRlcyBrZXllZCBvblxuICogcmVzdWx0LnR5cGUgYW5kIHJlc3VsdC5zdHJpbmdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGVGYWN0b3J5KHJlc3VsdDogVGVtcGxhdGVSZXN1bHQpIHtcbiAgbGV0IHRlbXBsYXRlQ2FjaGUgPSB0ZW1wbGF0ZUNhY2hlcy5nZXQocmVzdWx0LnR5cGUpO1xuICBpZiAodGVtcGxhdGVDYWNoZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGVtcGxhdGVDYWNoZSA9IHtcbiAgICAgIHN0cmluZ3NBcnJheTogbmV3IFdlYWtNYXA8VGVtcGxhdGVTdHJpbmdzQXJyYXksIFRlbXBsYXRlPigpLFxuICAgICAga2V5U3RyaW5nOiBuZXcgTWFwPHN0cmluZywgVGVtcGxhdGU+KClcbiAgICB9O1xuICAgIHRlbXBsYXRlQ2FjaGVzLnNldChyZXN1bHQudHlwZSwgdGVtcGxhdGVDYWNoZSk7XG4gIH1cblxuICBsZXQgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLnN0cmluZ3NBcnJheS5nZXQocmVzdWx0LnN0cmluZ3MpO1xuICBpZiAodGVtcGxhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIC8vIElmIHRoZSBUZW1wbGF0ZVN0cmluZ3NBcnJheSBpcyBuZXcsIGdlbmVyYXRlIGEga2V5IGZyb20gdGhlIHN0cmluZ3NcbiAgLy8gVGhpcyBrZXkgaXMgc2hhcmVkIGJldHdlZW4gYWxsIHRlbXBsYXRlcyB3aXRoIGlkZW50aWNhbCBjb250ZW50XG4gIGNvbnN0IGtleSA9IHJlc3VsdC5zdHJpbmdzLmpvaW4obWFya2VyKTtcblxuICAvLyBDaGVjayBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBUZW1wbGF0ZSBmb3IgdGhpcyBrZXlcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLmtleVN0cmluZy5nZXQoa2V5KTtcbiAgaWYgKHRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBJZiB3ZSBoYXZlIG5vdCBzZWVuIHRoaXMga2V5IGJlZm9yZSwgY3JlYXRlIGEgbmV3IFRlbXBsYXRlXG4gICAgdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUocmVzdWx0LCByZXN1bHQuZ2V0VGVtcGxhdGVFbGVtZW50KCkpO1xuICAgIC8vIENhY2hlIHRoZSBUZW1wbGF0ZSBmb3IgdGhpcyBrZXlcbiAgICB0ZW1wbGF0ZUNhY2hlLmtleVN0cmluZy5zZXQoa2V5LCB0ZW1wbGF0ZSk7XG4gIH1cblxuICAvLyBDYWNoZSBhbGwgZnV0dXJlIHF1ZXJpZXMgZm9yIHRoaXMgVGVtcGxhdGVTdHJpbmdzQXJyYXlcbiAgdGVtcGxhdGVDYWNoZS5zdHJpbmdzQXJyYXkuc2V0KHJlc3VsdC5zdHJpbmdzLCB0ZW1wbGF0ZSk7XG4gIHJldHVybiB0ZW1wbGF0ZTtcbn1cblxuLyoqXG4gKiBUaGUgZmlyc3QgYXJndW1lbnQgdG8gSlMgdGVtcGxhdGUgdGFncyByZXRhaW4gaWRlbnRpdHkgYWNyb3NzIG11bHRpcGxlXG4gKiBjYWxscyB0byBhIHRhZyBmb3IgdGhlIHNhbWUgbGl0ZXJhbCwgc28gd2UgY2FuIGNhY2hlIHdvcmsgZG9uZSBwZXIgbGl0ZXJhbFxuICogaW4gYSBNYXAuXG4gKlxuICogU2FmYXJpIGN1cnJlbnRseSBoYXMgYSBidWcgd2hpY2ggb2NjYXNpb25hbGx5IGJyZWFrcyB0aGlzIGJlaGF2aW91ciwgc28gd2VcbiAqIG5lZWQgdG8gY2FjaGUgdGhlIFRlbXBsYXRlIGF0IHR3byBsZXZlbHMuIFdlIGZpcnN0IGNhY2hlIHRoZVxuICogVGVtcGxhdGVTdHJpbmdzQXJyYXksIGFuZCBpZiB0aGF0IGZhaWxzLCB3ZSBjYWNoZSBhIGtleSBjb25zdHJ1Y3RlZCBieVxuICogam9pbmluZyB0aGUgc3RyaW5ncyBhcnJheS5cbiAqL1xuZXhwb3J0IHR5cGUgdGVtcGxhdGVDYWNoZSA9IHtcbiAgcmVhZG9ubHkgc3RyaW5nc0FycmF5OiBXZWFrTWFwPFRlbXBsYXRlU3RyaW5nc0FycmF5LCBUZW1wbGF0ZT47IC8vXG4gIHJlYWRvbmx5IGtleVN0cmluZzogTWFwPHN0cmluZywgVGVtcGxhdGU+O1xufTtcblxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlQ2FjaGVzID0gbmV3IE1hcDxzdHJpbmcsIHRlbXBsYXRlQ2FjaGU+KCk7XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGl0LWh0bWwuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNlID0+IGNsYXNzIGV4dGVuZHMgYmFzZSB7XHJcblx0cmVuZGVyKCkge31cclxuXHJcblx0YXN5bmMgaW52YWxpZGF0ZShpbnN0YW50KSB7XHJcblx0XHRpZiAoIXRoaXMubmVlZHNSZW5kZXIpIHtcclxuXHRcdFx0aWYgKCFpbnN0YW50KSB7XHJcblx0XHRcdFx0dGhpcy5uZWVkc1JlbmRlciA9IHRydWVcclxuXHRcdFx0XHRhd2FpdCAwXHJcblx0XHRcdFx0dGhpcy5uZWVkc1JlbmRlciA9IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdFx0cmVuZGVyKHRoaXMucmVuZGVyKCksIHRoaXMuc2hhZG93Um9vdClcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXHJcblxyXG5mdW5jdGlvbiBhY3Rpb25DcmVhdG9yKGFjdGlvbikge1xyXG5cdHJldHVybiBmdW5jdGlvbigpIHtcclxuXHRcdGxldCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKClcclxuXHRcdHN0YXRlID0gYWN0aW9uKHN0YXRlLCAuLi5hcmd1bWVudHMpXHJcblx0XHRzdG9yZS5zZXRTdGF0ZShzdGF0ZSlcclxuXHR9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IE15IEZ1bmN0aW9uXHJcblxyXG5leHBvcnQgY29uc3QgY291bnRBZGQgPSBhY3Rpb25DcmVhdG9yKHN0YXRlID0+IHtcclxuXHRzdGF0ZS5pbmZvLmNvdW50ID09PSB1bmRlZmluZWRcclxuXHRcdD8gc3RhdGUuaW5mby5jb3VudCA9IDBcclxuXHRcdDogc3RhdGUuaW5mby5jb3VudCsrXHJcblx0cmV0dXJuIHN0YXRlXHJcbn0pXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBFeGFtcGxlXHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGUgPSBhY3Rpb25DcmVhdG9yKChzdGF0ZSwgX3JvdXRlKSA9PiB7XHJcblx0c3RhdGUucm91dGUgPSBfcm91dGVcclxuXHJcblx0cmV0dXJuIHN0YXRlXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkID0gYWN0aW9uQ3JlYXRvcigoc3RhdGUsIHRvZG8pID0+IHtcclxuXHRzdGF0ZS50b2RvTGlzdC5wdXNoKHtcclxuXHRcdHRpdGxlOiB0b2RvLFxyXG5cdFx0Y29tcGxldGVkOiBmYWxzZSxcclxuXHRcdGlkOiBgaXRlbS14eHh4eHh4eHh4eHhgLnJlcGxhY2UoL1t4XS9nLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwXHJcblxyXG5cdFx0XHRyZXR1cm4gci50b1N0cmluZygxNilcclxuXHRcdH0pLFxyXG5cdH0pXHJcblxyXG5cdHJldHVybiBzdGF0ZVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZSA9IGFjdGlvbkNyZWF0b3IoKHN0YXRlLCBpZCkgPT4ge1xyXG5cdHN0YXRlLnRvZG9MaXN0ID0gc3RhdGUudG9kb0xpc3QuZmlsdGVyKHRvZG8gPT4gdG9kby5pZCAhPT0gaWQpXHJcblxyXG5cdHJldHVybiBzdGF0ZVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZSA9IGFjdGlvbkNyZWF0b3IoKHN0YXRlLCBpZCkgPT4ge1xyXG5cdGNvbnN0IHRvZG8gPSBzdGF0ZS50b2RvTGlzdC5maW5kKF90b2RvID0+IF90b2RvLmlkID09PSBpZClcclxuXHR0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZFxyXG5cclxuXHRyZXR1cm4gc3RhdGVcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCByZXBsYWNlID0gYWN0aW9uQ3JlYXRvcigoc3RhdGUsIGlkLCB0aXRsZSkgPT4ge1xyXG5cdGNvbnN0IHRvZG8gPSBzdGF0ZS50b2RvTGlzdC5maW5kKF90b2RvID0+IF90b2RvLmlkID09PSBpZClcclxuXHR0b2RvLnRpdGxlID0gdGl0bGVcclxuXHJcblx0cmV0dXJuIHN0YXRlXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgdG9nZ2xlQWxsID0gYWN0aW9uQ3JlYXRvcigoc3RhdGUsIGNvbXBsZXRlZCkgPT4ge1xyXG5cdHN0YXRlLnRvZG9MaXN0LmZvckVhY2goX3RvZG8gPT4ge1xyXG5cdFx0X3RvZG8uY29tcGxldGVkID0gY29tcGxldGVkXHJcblx0fSlcclxuXHJcblx0cmV0dXJuIHN0YXRlXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXJDb21wbGV0ZWQgPSBhY3Rpb25DcmVhdG9yKHN0YXRlID0+IHtcclxuXHRzdGF0ZS50b2RvTGlzdCA9IHN0YXRlLnRvZG9MaXN0LmZpbHRlcih0b2RvID0+ICF0b2RvLmNvbXBsZXRlZClcclxuXHJcblx0cmV0dXJuIHN0YXRlXHJcbn0pXHJcbiIsImltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuL3JlZHV4LXplcm8uanMnXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IHJvdXRlOiBgYCwgaW5mbzogW10gLCAvKiBleGFtcGxlICovIHRvZG9MaXN0OiBbXSB9XHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoaW5pdGlhbFN0YXRlKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcblxyXG5cclxudmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlJDEoaW5pdGlhbFN0YXRlLCBtaWRkbGV3YXJlKSB7XHJcbiAgICBpZiAoaW5pdGlhbFN0YXRlID09PSB2b2lkIDApIHsgaW5pdGlhbFN0YXRlID0ge307IH1cclxuICAgIGlmIChtaWRkbGV3YXJlID09PSB2b2lkIDApIHsgbWlkZGxld2FyZSA9IG51bGw7IH1cclxuICAgIHZhciBzdGF0ZSA9IGluaXRpYWxTdGF0ZSB8fCB7fTtcclxuICAgIHZhciBsaXN0ZW5lcnMgPSBbXTtcclxuICAgIGZ1bmN0aW9uIGRpc3BhdGNoTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7IHJldHVybiBmKHN0YXRlKTsgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1pZGRsZXdhcmU6IG1pZGRsZXdhcmUsXHJcbiAgICAgICAgc2V0U3RhdGU6IGZ1bmN0aW9uICh1cGRhdGUpIHtcclxuICAgICAgICAgICAgc3RhdGUgPSBfX2Fzc2lnbih7fSwgc3RhdGUsICh0eXBlb2YgdXBkYXRlID09PSBcImZ1bmN0aW9uXCIgPyB1cGRhdGUoc3RhdGUpIDogdXBkYXRlKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVycy5wdXNoKGYpO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lcnMuaW5kZXhPZihmKSwgMSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcclxuICAgICAgICAgICAgZGlzcGF0Y2hMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVN0b3JlJDE7XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlJDE7XHJcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tICdsaXQtaHRtbCdcclxuXHJcbmltcG9ydCBMaXRSZW5kZXIgZnJvbSAnLi4vbGlicy9saXRSZW5kZXInXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9saWJzL3N0b3JlJ1xyXG5pbXBvcnQgeyBjb3VudEFkZCB9IGZyb20gJy4uL2xpYnMvYWN0aW9ucydcclxuXHJcbmV4cG9ydCBjbGFzcyBFeGFtRWxlbWVudCBleHRlbmRzIExpdFJlbmRlcihIVE1MRWxlbWVudCkge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKVxyXG5cclxuXHRcdHRoaXMuX2hhbmRsZXJzID0ge31cclxuXHJcblx0XHR0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IGBvcGVuYCB9KVxyXG5cdFx0dGhpcy5pbnZhbGlkYXRlKHRydWUpXHJcblx0fVxyXG5cclxuXHRjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuXHRcdGNvbnN0IHJvb3QgPSB0aGlzLnNoYWRvd1Jvb3RcclxuXHRcdGNvbnN0IGhhbmRsZXJzID0gdGhpcy5faGFuZGxlcnNcclxuXHJcblx0XHRoYW5kbGVycy5vbkNsaWNrID0gdGhpcy5fb25DbGljay5iaW5kKHRoaXMpXHRcdFx0XHRcclxuXHRcdFxyXG5cdFx0cm9vdC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGhhbmRsZXJzLm9uQ2xpY2spXHRcdFxyXG5cdH1cclxuXHJcblx0ZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcblx0XHRjb25zdCByb290ID0gdGhpcy5zaGFkb3dSb290XHJcblxyXG5cdFx0cm9vdC5yZW1vdmVFdmVudExpc3RlbmVyKGBjbGlja2AsIHRoaXMuX2hhbmRsZXJzLm9uQ2xpY2spXHJcblx0fVxyXG5cclxuXHRfb25DbGljaygpIHtcclxuXHRcdGNvdW50QWRkKClcclxuXHRcdHRoaXMuaW52YWxpZGF0ZSh0cnVlKVxyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIGh0bWxgXHJcblx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi4vc3JjL2Nzcy9leGFtLWVsZW1lbnQuY3NzXCI+XHJcbiAgICBcdDxkaXYgY2xhc3M9XCJleGFtLWVsZW1lbnRcIj5cclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJ0ZXN0LWJ0blwiPlRFU1Q6ICR7c3RvcmUuZ2V0U3RhdGUoKS5pbmZvLmNvdW50fTwvc3Bhbj5cclxuXHRcdDwvZGl2PlxyXG4gICAgXHRgXHJcblx0fVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoYGV4YW0tZWxlbWVudGAsIEV4YW1FbGVtZW50KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9