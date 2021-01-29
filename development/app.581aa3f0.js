// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../src/components/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Header = function Header() {
  var template = "\n    <div class=\"header-bg\"></div>\n    <div class=\"header-inner\">\n      <nav id=\"navbar\" class=\"navbar\">\n        <ul class=\"nav-links\">\n        <li class=\"nav-item\">\n        <a href=\"#\" class=\"navigate\" data-id=\"home\">Home</a>\n      </li>\n          <li class=\"nav-item\">\n            <a href=\"#\" class=\"navigate\" data-id=\"about\">About</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"#\" class=\"navigate\" data-id=\"portfolio\">Portfolio</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"#\" class=\"navigate\" data-id=\"contact\">Contact</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n    <div id=\"side-menu\">\n      <div id=\"side-menu-nav\">\n        <ul class=\"nav-links animate-nav\">\n          <!--top menu nav links are duplicated to be displayed on small screens-->\n          <li class=\"nav-item primary\">\n            <a href=\"#\" class=\"navigate\" data-id=\"home\">Home</a>\n          </li>\n          <li class=\"nav-item primary\">\n            <a href=\"#\" class=\"navigate\" data-id=\"about\">About</a>\n          </li>\n          <li class=\"nav-item primary\">\n            <a href=\"#\" class=\"navigate\" data-id=\"portfolio\">Portfolio</a>\n          </li>\n          <li class=\"nav-item primary\">\n            <a href=\"#\" class=\"navigate\" data-id=\"contact\">Contact</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <!--hamburger button-->\n    <button class=\"hamburger hamburger--collapse\" type=\"button\">\n      <span class=\"hamburger-box\">\n        <span class=\"hamburger-inner\"></span>\n      </span>\n    </button>";
  return template;
};

var _default = Header;
exports.default = _default;
},{}],"../node_modules/core-js-pure/internals/global.js":[function(require,module,exports) {
var global = arguments[3];
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

},{}],"../node_modules/core-js-pure/internals/fails.js":[function(require,module,exports) {
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

},{}],"../node_modules/core-js-pure/internals/descriptors.js":[function(require,module,exports) {
var fails = require('../internals/fails');

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

},{"../internals/fails":"../node_modules/core-js-pure/internals/fails.js"}],"../node_modules/core-js-pure/internals/object-property-is-enumerable.js":[function(require,module,exports) {
'use strict';
var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

},{}],"../node_modules/core-js-pure/internals/create-property-descriptor.js":[function(require,module,exports) {
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],"../node_modules/core-js-pure/internals/classof-raw.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],"../node_modules/core-js-pure/internals/indexed-object.js":[function(require,module,exports) {
var fails = require('../internals/fails');
var classof = require('../internals/classof-raw');

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

},{"../internals/fails":"../node_modules/core-js-pure/internals/fails.js","../internals/classof-raw":"../node_modules/core-js-pure/internals/classof-raw.js"}],"../node_modules/core-js-pure/internals/require-object-coercible.js":[function(require,module,exports) {
// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

},{}],"../node_modules/core-js-pure/internals/to-indexed-object.js":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require('../internals/indexed-object');
var requireObjectCoercible = require('../internals/require-object-coercible');

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

},{"../internals/indexed-object":"../node_modules/core-js-pure/internals/indexed-object.js","../internals/require-object-coercible":"../node_modules/core-js-pure/internals/require-object-coercible.js"}],"../node_modules/core-js-pure/internals/is-object.js":[function(require,module,exports) {
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],"../node_modules/core-js-pure/internals/to-primitive.js":[function(require,module,exports) {
var isObject = require('../internals/is-object');

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"../internals/is-object":"../node_modules/core-js-pure/internals/is-object.js"}],"../node_modules/core-js-pure/internals/has.js":[function(require,module,exports) {
var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],"../node_modules/core-js-pure/internals/document-create-element.js":[function(require,module,exports) {

var global = require('../internals/global');
var isObject = require('../internals/is-object');

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

},{"../internals/global":"../node_modules/core-js-pure/internals/global.js","../internals/is-object":"../node_modules/core-js-pure/internals/is-object.js"}],"../node_modules/core-js-pure/internals/ie8-dom-define.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var createElement = require('../internals/document-create-element');

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

},{"../internals/descriptors":"../node_modules/core-js-pure/internals/descriptors.js","../internals/fails":"../node_modules/core-js-pure/internals/fails.js","../internals/document-create-element":"../node_modules/core-js-pure/internals/document-create-element.js"}],"../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var toIndexedObject = require('../internals/to-indexed-object');
var toPrimitive = require('../internals/to-primitive');
var has = require('../internals/has');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

},{"../internals/descriptors":"../node_modules/core-js-pure/internals/descriptors.js","../internals/object-property-is-enumerable":"../node_modules/core-js-pure/internals/object-property-is-enumerable.js","../internals/create-property-descriptor":"../node_modules/core-js-pure/internals/create-property-descriptor.js","../internals/to-indexed-object":"../node_modules/core-js-pure/internals/to-indexed-object.js","../internals/to-primitive":"../node_modules/core-js-pure/internals/to-primitive.js","../internals/has":"../node_modules/core-js-pure/internals/has.js","../internals/ie8-dom-define":"../node_modules/core-js-pure/internals/ie8-dom-define.js"}],"../node_modules/core-js-pure/internals/is-forced.js":[function(require,module,exports) {
var fails = require('../internals/fails');

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;

},{"../internals/fails":"../node_modules/core-js-pure/internals/fails.js"}],"../node_modules/core-js-pure/internals/path.js":[function(require,module,exports) {
module.exports = {};

},{}],"../node_modules/core-js-pure/internals/a-function.js":[function(require,module,exports) {
module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

},{}],"../node_modules/core-js-pure/internals/function-bind-context.js":[function(require,module,exports) {
var aFunction = require('../internals/a-function');

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"../internals/a-function":"../node_modules/core-js-pure/internals/a-function.js"}],"../node_modules/core-js-pure/internals/an-object.js":[function(require,module,exports) {
var isObject = require('../internals/is-object');

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

},{"../internals/is-object":"../node_modules/core-js-pure/internals/is-object.js"}],"../node_modules/core-js-pure/internals/object-define-property.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
var anObject = require('../internals/an-object');
var toPrimitive = require('../internals/to-primitive');

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"../internals/descriptors":"../node_modules/core-js-pure/internals/descriptors.js","../internals/ie8-dom-define":"../node_modules/core-js-pure/internals/ie8-dom-define.js","../internals/an-object":"../node_modules/core-js-pure/internals/an-object.js","../internals/to-primitive":"../node_modules/core-js-pure/internals/to-primitive.js"}],"../node_modules/core-js-pure/internals/create-non-enumerable-property.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"../internals/descriptors":"../node_modules/core-js-pure/internals/descriptors.js","../internals/object-define-property":"../node_modules/core-js-pure/internals/object-define-property.js","../internals/create-property-descriptor":"../node_modules/core-js-pure/internals/create-property-descriptor.js"}],"../node_modules/core-js-pure/internals/export.js":[function(require,module,exports) {

'use strict';
var global = require('../internals/global');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var isForced = require('../internals/is-forced');
var path = require('../internals/path');
var bind = require('../internals/function-bind-context');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var has = require('../internals/has');

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};

},{"../internals/global":"../node_modules/core-js-pure/internals/global.js","../internals/object-get-own-property-descriptor":"../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js","../internals/is-forced":"../node_modules/core-js-pure/internals/is-forced.js","../internals/path":"../node_modules/core-js-pure/internals/path.js","../internals/function-bind-context":"../node_modules/core-js-pure/internals/function-bind-context.js","../internals/create-non-enumerable-property":"../node_modules/core-js-pure/internals/create-non-enumerable-property.js","../internals/has":"../node_modules/core-js-pure/internals/has.js"}],"../node_modules/core-js-pure/internals/to-object.js":[function(require,module,exports) {
var requireObjectCoercible = require('../internals/require-object-coercible');

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

},{"../internals/require-object-coercible":"../node_modules/core-js-pure/internals/require-object-coercible.js"}],"../node_modules/core-js-pure/internals/to-integer.js":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

},{}],"../node_modules/core-js-pure/internals/to-length.js":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer":"../node_modules/core-js-pure/internals/to-integer.js"}],"../node_modules/core-js-pure/internals/is-array.js":[function(require,module,exports) {
var classof = require('../internals/classof-raw');

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};

},{"../internals/classof-raw":"../node_modules/core-js-pure/internals/classof-raw.js"}],"../node_modules/core-js-pure/internals/is-pure.js":[function(require,module,exports) {
module.exports = true;

},{}],"../node_modules/core-js-pure/internals/set-global.js":[function(require,module,exports) {

var global = require('../internals/global');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};

},{"../internals/global":"../node_modules/core-js-pure/internals/global.js","../internals/create-non-enumerable-property":"../node_modules/core-js-pure/internals/create-non-enumerable-property.js"}],"../node_modules/core-js-pure/internals/shared-store.js":[function(require,module,exports) {

var global = require('../internals/global');
var setGlobal = require('../internals/set-global');

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;

},{"../internals/global":"../node_modules/core-js-pure/internals/global.js","../internals/set-global":"../node_modules/core-js-pure/internals/set-global.js"}],"../node_modules/core-js-pure/internals/shared.js":[function(require,module,exports) {
var IS_PURE = require('../internals/is-pure');
var store = require('../internals/shared-store');

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});

},{"../internals/is-pure":"../node_modules/core-js-pure/internals/is-pure.js","../internals/shared-store":"../node_modules/core-js-pure/internals/shared-store.js"}],"../node_modules/core-js-pure/internals/uid.js":[function(require,module,exports) {
var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

},{}],"../node_modules/core-js-pure/internals/native-symbol.js":[function(require,module,exports) {
var fails = require('../internals/fails');

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});

},{"../internals/fails":"../node_modules/core-js-pure/internals/fails.js"}],"../node_modules/core-js-pure/internals/use-symbol-as-uid.js":[function(require,module,exports) {
var NATIVE_SYMBOL = require('../internals/native-symbol');

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';

},{"../internals/native-symbol":"../node_modules/core-js-pure/internals/native-symbol.js"}],"../node_modules/core-js-pure/internals/well-known-symbol.js":[function(require,module,exports) {

var global = require('../internals/global');
var shared = require('../internals/shared');
var has = require('../internals/has');
var uid = require('../internals/uid');
var NATIVE_SYMBOL = require('../internals/native-symbol');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

},{"../internals/global":"../node_modules/core-js-pure/internals/global.js","../internals/shared":"../node_modules/core-js-pure/internals/shared.js","../internals/has":"../node_modules/core-js-pure/internals/has.js","../internals/uid":"../node_modules/core-js-pure/internals/uid.js","../internals/native-symbol":"../node_modules/core-js-pure/internals/native-symbol.js","../internals/use-symbol-as-uid":"../node_modules/core-js-pure/internals/use-symbol-as-uid.js"}],"../node_modules/core-js-pure/internals/array-species-create.js":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var isArray = require('../internals/is-array');
var wellKnownSymbol = require('../internals/well-known-symbol');

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

},{"../internals/is-object":"../node_modules/core-js-pure/internals/is-object.js","../internals/is-array":"../node_modules/core-js-pure/internals/is-array.js","../internals/well-known-symbol":"../node_modules/core-js-pure/internals/well-known-symbol.js"}],"../node_modules/core-js-pure/internals/array-iteration.js":[function(require,module,exports) {
var bind = require('../internals/function-bind-context');
var IndexedObject = require('../internals/indexed-object');
var toObject = require('../internals/to-object');
var toLength = require('../internals/to-length');
var arraySpeciesCreate = require('../internals/array-species-create');

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};

},{"../internals/function-bind-context":"../node_modules/core-js-pure/internals/function-bind-context.js","../internals/indexed-object":"../node_modules/core-js-pure/internals/indexed-object.js","../internals/to-object":"../node_modules/core-js-pure/internals/to-object.js","../internals/to-length":"../node_modules/core-js-pure/internals/to-length.js","../internals/array-species-create":"../node_modules/core-js-pure/internals/array-species-create.js"}],"../node_modules/core-js-pure/internals/get-built-in.js":[function(require,module,exports) {

var path = require('../internals/path');
var global = require('../internals/global');

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

},{"../internals/path":"../node_modules/core-js-pure/internals/path.js","../internals/global":"../node_modules/core-js-pure/internals/global.js"}],"../node_modules/core-js-pure/internals/engine-user-agent.js":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');

module.exports = getBuiltIn('navigator', 'userAgent') || '';

},{"../internals/get-built-in":"../node_modules/core-js-pure/internals/get-built-in.js"}],"../node_modules/core-js-pure/internals/engine-v8-version.js":[function(require,module,exports) {


var global = require('../internals/global');
var userAgent = require('../internals/engine-user-agent');

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;

},{"../internals/global":"../node_modules/core-js-pure/internals/global.js","../internals/engine-user-agent":"../node_modules/core-js-pure/internals/engine-user-agent.js"}],"../node_modules/core-js-pure/internals/array-method-has-species-support.js":[function(require,module,exports) {
var fails = require('../internals/fails');
var wellKnownSymbol = require('../internals/well-known-symbol');
var V8_VERSION = require('../internals/engine-v8-version');

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

},{"../internals/fails":"../node_modules/core-js-pure/internals/fails.js","../internals/well-known-symbol":"../node_modules/core-js-pure/internals/well-known-symbol.js","../internals/engine-v8-version":"../node_modules/core-js-pure/internals/engine-v8-version.js"}],"../node_modules/core-js-pure/internals/array-method-uses-to-length.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var has = require('../internals/has');

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};

},{"../internals/descriptors":"../node_modules/core-js-pure/internals/descriptors.js","../internals/fails":"../node_modules/core-js-pure/internals/fails.js","../internals/has":"../node_modules/core-js-pure/internals/has.js"}],"../node_modules/core-js-pure/modules/es.array.filter.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $filter = require('../internals/array-iteration').filter;
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var arrayMethodUsesToLength = require('../internals/array-method-uses-to-length');

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/export":"../node_modules/core-js-pure/internals/export.js","../internals/array-iteration":"../node_modules/core-js-pure/internals/array-iteration.js","../internals/array-method-has-species-support":"../node_modules/core-js-pure/internals/array-method-has-species-support.js","../internals/array-method-uses-to-length":"../node_modules/core-js-pure/internals/array-method-uses-to-length.js"}],"../node_modules/core-js-pure/internals/entry-virtual.js":[function(require,module,exports) {
var path = require('../internals/path');

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};

},{"../internals/path":"../node_modules/core-js-pure/internals/path.js"}],"../node_modules/core-js-pure/es/array/virtual/filter.js":[function(require,module,exports) {
require('../../../modules/es.array.filter');
var entryVirtual = require('../../../internals/entry-virtual');

module.exports = entryVirtual('Array').filter;

},{"../../../modules/es.array.filter":"../node_modules/core-js-pure/modules/es.array.filter.js","../../../internals/entry-virtual":"../node_modules/core-js-pure/internals/entry-virtual.js"}],"../node_modules/core-js-pure/es/instance/filter.js":[function(require,module,exports) {
var filter = require('../array/virtual/filter');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.filter;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.filter) ? filter : own;
};

},{"../array/virtual/filter":"../node_modules/core-js-pure/es/array/virtual/filter.js"}],"../node_modules/core-js-pure/stable/instance/filter.js":[function(require,module,exports) {
var parent = require('../../es/instance/filter');

module.exports = parent;

},{"../../es/instance/filter":"../node_modules/core-js-pure/es/instance/filter.js"}],"../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/filter");
},{"core-js-pure/stable/instance/filter":"../node_modules/core-js-pure/stable/instance/filter.js"}],"../node_modules/core-js-pure/internals/add-to-unscopables.js":[function(require,module,exports) {
module.exports = function () { /* empty */ };

},{}],"../node_modules/core-js-pure/internals/iterators.js":[function(require,module,exports) {
module.exports = {};

},{}],"../node_modules/core-js-pure/internals/inspect-source.js":[function(require,module,exports) {
var store = require('../internals/shared-store');

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;

},{"../internals/shared-store":"../node_modules/core-js-pure/internals/shared-store.js"}],"../node_modules/core-js-pure/internals/native-weak-map.js":[function(require,module,exports) {

var global = require('../internals/global');
var inspectSource = require('../internals/inspect-source');

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

},{"../internals/global":"../node_modules/core-js-pure/internals/global.js","../internals/inspect-source":"../node_modules/core-js-pure/internals/inspect-source.js"}],"../node_modules/core-js-pure/internals/shared-key.js":[function(require,module,exports) {
var shared = require('../internals/shared');
var uid = require('../internals/uid');

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

},{"../internals/shared":"../node_modules/core-js-pure/internals/shared.js","../internals/uid":"../node_modules/core-js-pure/internals/uid.js"}],"../node_modules/core-js-pure/internals/hidden-keys.js":[function(require,module,exports) {
module.exports = {};

},{}],"../node_modules/core-js-pure/internals/internal-state.js":[function(require,module,exports) {

var NATIVE_WEAK_MAP = require('../internals/native-weak-map');
var global = require('../internals/global');
var isObject = require('../internals/is-object');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var objectHas = require('../internals/has');
var sharedKey = require('../internals/shared-key');
var hiddenKeys = require('../internals/hidden-keys');

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

},{"../internals/native-weak-map":"../node_modules/core-js-pure/internals/native-weak-map.js","../internals/global":"../node_modules/core-js-pure/internals/global.js","../internals/is-object":"../node_modules/core-js-pure/internals/is-object.js","../internals/create-non-enumerable-property":"../node_modules/core-js-pure/internals/create-non-enumerable-property.js","../internals/has":"../node_modules/core-js-pure/internals/has.js","../internals/shared-key":"../node_modules/core-js-pure/internals/shared-key.js","../internals/hidden-keys":"../node_modules/core-js-pure/internals/hidden-keys.js"}],"../node_modules/core-js-pure/internals/correct-prototype-getter.js":[function(require,module,exports) {
var fails = require('../internals/fails');

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

},{"../internals/fails":"../node_modules/core-js-pure/internals/fails.js"}],"../node_modules/core-js-pure/internals/object-get-prototype-of.js":[function(require,module,exports) {
var has = require('../internals/has');
var toObject = require('../internals/to-object');
var sharedKey = require('../internals/shared-key');
var CORRECT_PROTOTYPE_GETTER = require('../internals/correct-prototype-getter');

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};

},{"../internals/has":"../node_modules/core-js-pure/internals/has.js","../internals/to-object":"../node_modules/core-js-pure/internals/to-object.js","../internals/shared-key":"../node_modules/core-js-pure/internals/shared-key.js","../internals/correct-prototype-getter":"../node_modules/core-js-pure/internals/correct-prototype-getter.js"}],"../node_modules/core-js-pure/internals/iterators-core.js":[function(require,module,exports) {
'use strict';
var getPrototypeOf = require('../internals/object-get-prototype-of');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var has = require('../internals/has');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

},{"../internals/object-get-prototype-of":"../node_modules/core-js-pure/internals/object-get-prototype-of.js","../internals/create-non-enumerable-property":"../node_modules/core-js-pure/internals/create-non-enumerable-property.js","../internals/has":"../node_modules/core-js-pure/internals/has.js","../internals/well-known-symbol":"../node_modules/core-js-pure/internals/well-known-symbol.js","../internals/is-pure":"../node_modules/core-js-pure/internals/is-pure.js"}],"../node_modules/core-js-pure/internals/to-absolute-index.js":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"../internals/to-integer":"../node_modules/core-js-pure/internals/to-integer.js"}],"../node_modules/core-js-pure/internals/array-includes.js":[function(require,module,exports) {
var toIndexedObject = require('../internals/to-indexed-object');
var toLength = require('../internals/to-length');
var toAbsoluteIndex = require('../internals/to-absolute-index');

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

},{"../internals/to-indexed-object":"../node_modules/core-js-pure/internals/to-indexed-object.js","../internals/to-length":"../node_modules/core-js-pure/internals/to-length.js","../internals/to-absolute-index":"../node_modules/core-js-pure/internals/to-absolute-index.js"}],"../node_modules/core-js-pure/internals/object-keys-internal.js":[function(require,module,exports) {
var has = require('../internals/has');
var toIndexedObject = require('../internals/to-indexed-object');
var indexOf = require('../internals/array-includes').indexOf;
var hiddenKeys = require('../internals/hidden-keys');

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};

},{"../internals/has":"../node_modules/core-js-pure/internals/has.js","../internals/to-indexed-object":"../node_modules/core-js-pure/internals/to-indexed-object.js","../internals/array-includes":"../node_modules/core-js-pure/internals/array-includes.js","../internals/hidden-keys":"../node_modules/core-js-pure/internals/hidden-keys.js"}],"../node_modules/core-js-pure/internals/enum-bug-keys.js":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

},{}],"../node_modules/core-js-pure/internals/object-keys.js":[function(require,module,exports) {
var internalObjectKeys = require('../internals/object-keys-internal');
var enumBugKeys = require('../internals/enum-bug-keys');

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

},{"../internals/object-keys-internal":"../node_modules/core-js-pure/internals/object-keys-internal.js","../internals/enum-bug-keys":"../node_modules/core-js-pure/internals/enum-bug-keys.js"}],"../node_modules/core-js-pure/internals/object-define-properties.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var anObject = require('../internals/an-object');
var objectKeys = require('../internals/object-keys');

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};

},{"../internals/descriptors":"../node_modules/core-js-pure/internals/descriptors.js","../internals/object-define-property":"../node_modules/core-js-pure/internals/object-define-property.js","../internals/an-object":"../node_modules/core-js-pure/internals/an-object.js","../internals/object-keys":"../node_modules/core-js-pure/internals/object-keys.js"}],"../node_modules/core-js-pure/internals/html.js":[function(require,module,exports) {
var getBuiltIn = require('../internals/get-built-in');

module.exports = getBuiltIn('document', 'documentElement');

},{"../internals/get-built-in":"../node_modules/core-js-pure/internals/get-built-in.js"}],"../node_modules/core-js-pure/internals/object-create.js":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var defineProperties = require('../internals/object-define-properties');
var enumBugKeys = require('../internals/enum-bug-keys');
var hiddenKeys = require('../internals/hidden-keys');
var html = require('../internals/html');
var documentCreateElement = require('../internals/document-create-element');
var sharedKey = require('../internals/shared-key');

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

},{"../internals/an-object":"../node_modules/core-js-pure/internals/an-object.js","../internals/object-define-properties":"../node_modules/core-js-pure/internals/object-define-properties.js","../internals/enum-bug-keys":"../node_modules/core-js-pure/internals/enum-bug-keys.js","../internals/hidden-keys":"../node_modules/core-js-pure/internals/hidden-keys.js","../internals/html":"../node_modules/core-js-pure/internals/html.js","../internals/document-create-element":"../node_modules/core-js-pure/internals/document-create-element.js","../internals/shared-key":"../node_modules/core-js-pure/internals/shared-key.js"}],"../node_modules/core-js-pure/internals/to-string-tag-support.js":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';

},{"../internals/well-known-symbol":"../node_modules/core-js-pure/internals/well-known-symbol.js"}],"../node_modules/core-js-pure/internals/classof.js":[function(require,module,exports) {
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var classofRaw = require('../internals/classof-raw');
var wellKnownSymbol = require('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

},{"../internals/to-string-tag-support":"../node_modules/core-js-pure/internals/to-string-tag-support.js","../internals/classof-raw":"../node_modules/core-js-pure/internals/classof-raw.js","../internals/well-known-symbol":"../node_modules/core-js-pure/internals/well-known-symbol.js"}],"../node_modules/core-js-pure/internals/object-to-string.js":[function(require,module,exports) {
'use strict';
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var classof = require('../internals/classof');

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

},{"../internals/to-string-tag-support":"../node_modules/core-js-pure/internals/to-string-tag-support.js","../internals/classof":"../node_modules/core-js-pure/internals/classof.js"}],"../node_modules/core-js-pure/internals/set-to-string-tag.js":[function(require,module,exports) {
var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');
var defineProperty = require('../internals/object-define-property').f;
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var has = require('../internals/has');
var toString = require('../internals/object-to-string');
var wellKnownSymbol = require('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!has(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};

},{"../internals/to-string-tag-support":"../node_modules/core-js-pure/internals/to-string-tag-support.js","../internals/object-define-property":"../node_modules/core-js-pure/internals/object-define-property.js","../internals/create-non-enumerable-property":"../node_modules/core-js-pure/internals/create-non-enumerable-property.js","../internals/has":"../node_modules/core-js-pure/internals/has.js","../internals/object-to-string":"../node_modules/core-js-pure/internals/object-to-string.js","../internals/well-known-symbol":"../node_modules/core-js-pure/internals/well-known-symbol.js"}],"../node_modules/core-js-pure/internals/create-iterator-constructor.js":[function(require,module,exports) {
'use strict';
var IteratorPrototype = require('../internals/iterators-core').IteratorPrototype;
var create = require('../internals/object-create');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var setToStringTag = require('../internals/set-to-string-tag');
var Iterators = require('../internals/iterators');

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};

},{"../internals/iterators-core":"../node_modules/core-js-pure/internals/iterators-core.js","../internals/object-create":"../node_modules/core-js-pure/internals/object-create.js","../internals/create-property-descriptor":"../node_modules/core-js-pure/internals/create-property-descriptor.js","../internals/set-to-string-tag":"../node_modules/core-js-pure/internals/set-to-string-tag.js","../internals/iterators":"../node_modules/core-js-pure/internals/iterators.js"}],"../node_modules/core-js-pure/internals/a-possible-prototype.js":[function(require,module,exports) {
var isObject = require('../internals/is-object');

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};

},{"../internals/is-object":"../node_modules/core-js-pure/internals/is-object.js"}],"../node_modules/core-js-pure/internals/object-set-prototype-of.js":[function(require,module,exports) {
var anObject = require('../internals/an-object');
var aPossiblePrototype = require('../internals/a-possible-prototype');

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

},{"../internals/an-object":"../node_modules/core-js-pure/internals/an-object.js","../internals/a-possible-prototype":"../node_modules/core-js-pure/internals/a-possible-prototype.js"}],"../node_modules/core-js-pure/internals/redefine.js":[function(require,module,exports) {
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};

},{"../internals/create-non-enumerable-property":"../node_modules/core-js-pure/internals/create-non-enumerable-property.js"}],"../node_modules/core-js-pure/internals/define-iterator.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var createIteratorConstructor = require('../internals/create-iterator-constructor');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var setPrototypeOf = require('../internals/object-set-prototype-of');
var setToStringTag = require('../internals/set-to-string-tag');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var redefine = require('../internals/redefine');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');
var Iterators = require('../internals/iterators');
var IteratorsCore = require('../internals/iterators-core');

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};

},{"../internals/export":"../node_modules/core-js-pure/internals/export.js","../internals/create-iterator-constructor":"../node_modules/core-js-pure/internals/create-iterator-constructor.js","../internals/object-get-prototype-of":"../node_modules/core-js-pure/internals/object-get-prototype-of.js","../internals/object-set-prototype-of":"../node_modules/core-js-pure/internals/object-set-prototype-of.js","../internals/set-to-string-tag":"../node_modules/core-js-pure/internals/set-to-string-tag.js","../internals/create-non-enumerable-property":"../node_modules/core-js-pure/internals/create-non-enumerable-property.js","../internals/redefine":"../node_modules/core-js-pure/internals/redefine.js","../internals/well-known-symbol":"../node_modules/core-js-pure/internals/well-known-symbol.js","../internals/is-pure":"../node_modules/core-js-pure/internals/is-pure.js","../internals/iterators":"../node_modules/core-js-pure/internals/iterators.js","../internals/iterators-core":"../node_modules/core-js-pure/internals/iterators-core.js"}],"../node_modules/core-js-pure/modules/es.array.iterator.js":[function(require,module,exports) {
'use strict';
var toIndexedObject = require('../internals/to-indexed-object');
var addToUnscopables = require('../internals/add-to-unscopables');
var Iterators = require('../internals/iterators');
var InternalStateModule = require('../internals/internal-state');
var defineIterator = require('../internals/define-iterator');

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"../internals/to-indexed-object":"../node_modules/core-js-pure/internals/to-indexed-object.js","../internals/add-to-unscopables":"../node_modules/core-js-pure/internals/add-to-unscopables.js","../internals/iterators":"../node_modules/core-js-pure/internals/iterators.js","../internals/internal-state":"../node_modules/core-js-pure/internals/internal-state.js","../internals/define-iterator":"../node_modules/core-js-pure/internals/define-iterator.js"}],"../node_modules/core-js-pure/internals/dom-iterables.js":[function(require,module,exports) {
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

},{}],"../node_modules/core-js-pure/modules/web.dom-collections.iterator.js":[function(require,module,exports) {

require('./es.array.iterator');
var DOMIterables = require('../internals/dom-iterables');
var global = require('../internals/global');
var classof = require('../internals/classof');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var Iterators = require('../internals/iterators');
var wellKnownSymbol = require('../internals/well-known-symbol');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}

},{"./es.array.iterator":"../node_modules/core-js-pure/modules/es.array.iterator.js","../internals/dom-iterables":"../node_modules/core-js-pure/internals/dom-iterables.js","../internals/global":"../node_modules/core-js-pure/internals/global.js","../internals/classof":"../node_modules/core-js-pure/internals/classof.js","../internals/create-non-enumerable-property":"../node_modules/core-js-pure/internals/create-non-enumerable-property.js","../internals/iterators":"../node_modules/core-js-pure/internals/iterators.js","../internals/well-known-symbol":"../node_modules/core-js-pure/internals/well-known-symbol.js"}],"../node_modules/core-js-pure/internals/array-method-is-strict.js":[function(require,module,exports) {
'use strict';
var fails = require('../internals/fails');

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};

},{"../internals/fails":"../node_modules/core-js-pure/internals/fails.js"}],"../node_modules/core-js-pure/internals/array-for-each.js":[function(require,module,exports) {
'use strict';
var $forEach = require('../internals/array-iteration').forEach;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var arrayMethodUsesToLength = require('../internals/array-method-uses-to-length');

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;

},{"../internals/array-iteration":"../node_modules/core-js-pure/internals/array-iteration.js","../internals/array-method-is-strict":"../node_modules/core-js-pure/internals/array-method-is-strict.js","../internals/array-method-uses-to-length":"../node_modules/core-js-pure/internals/array-method-uses-to-length.js"}],"../node_modules/core-js-pure/modules/es.array.for-each.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var forEach = require('../internals/array-for-each');

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});

},{"../internals/export":"../node_modules/core-js-pure/internals/export.js","../internals/array-for-each":"../node_modules/core-js-pure/internals/array-for-each.js"}],"../node_modules/core-js-pure/es/array/virtual/for-each.js":[function(require,module,exports) {
require('../../../modules/es.array.for-each');
var entryVirtual = require('../../../internals/entry-virtual');

module.exports = entryVirtual('Array').forEach;

},{"../../../modules/es.array.for-each":"../node_modules/core-js-pure/modules/es.array.for-each.js","../../../internals/entry-virtual":"../node_modules/core-js-pure/internals/entry-virtual.js"}],"../node_modules/core-js-pure/stable/array/virtual/for-each.js":[function(require,module,exports) {
var parent = require('../../../es/array/virtual/for-each');

module.exports = parent;

},{"../../../es/array/virtual/for-each":"../node_modules/core-js-pure/es/array/virtual/for-each.js"}],"../node_modules/core-js-pure/stable/instance/for-each.js":[function(require,module,exports) {
require('../../modules/web.dom-collections.iterator');
var forEach = require('../array/virtual/for-each');
var classof = require('../../internals/classof');
var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.forEach)
    // eslint-disable-next-line no-prototype-builtins
    || DOMIterables.hasOwnProperty(classof(it)) ? forEach : own;
};

},{"../../modules/web.dom-collections.iterator":"../node_modules/core-js-pure/modules/web.dom-collections.iterator.js","../array/virtual/for-each":"../node_modules/core-js-pure/stable/array/virtual/for-each.js","../../internals/classof":"../node_modules/core-js-pure/internals/classof.js"}],"../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/for-each");
},{"core-js-pure/stable/instance/for-each":"../node_modules/core-js-pure/stable/instance/for-each.js"}],"../node_modules/core-js-pure/modules/es.array.includes.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $includes = require('../internals/array-includes').includes;
var addToUnscopables = require('../internals/add-to-unscopables');
var arrayMethodUsesToLength = require('../internals/array-method-uses-to-length');

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

},{"../internals/export":"../node_modules/core-js-pure/internals/export.js","../internals/array-includes":"../node_modules/core-js-pure/internals/array-includes.js","../internals/add-to-unscopables":"../node_modules/core-js-pure/internals/add-to-unscopables.js","../internals/array-method-uses-to-length":"../node_modules/core-js-pure/internals/array-method-uses-to-length.js"}],"../node_modules/core-js-pure/es/array/virtual/includes.js":[function(require,module,exports) {
require('../../../modules/es.array.includes');
var entryVirtual = require('../../../internals/entry-virtual');

module.exports = entryVirtual('Array').includes;

},{"../../../modules/es.array.includes":"../node_modules/core-js-pure/modules/es.array.includes.js","../../../internals/entry-virtual":"../node_modules/core-js-pure/internals/entry-virtual.js"}],"../node_modules/core-js-pure/internals/is-regexp.js":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var classof = require('../internals/classof-raw');
var wellKnownSymbol = require('../internals/well-known-symbol');

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};

},{"../internals/is-object":"../node_modules/core-js-pure/internals/is-object.js","../internals/classof-raw":"../node_modules/core-js-pure/internals/classof-raw.js","../internals/well-known-symbol":"../node_modules/core-js-pure/internals/well-known-symbol.js"}],"../node_modules/core-js-pure/internals/not-a-regexp.js":[function(require,module,exports) {
var isRegExp = require('../internals/is-regexp');

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};

},{"../internals/is-regexp":"../node_modules/core-js-pure/internals/is-regexp.js"}],"../node_modules/core-js-pure/internals/correct-is-regexp-logic.js":[function(require,module,exports) {
var wellKnownSymbol = require('../internals/well-known-symbol');

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};

},{"../internals/well-known-symbol":"../node_modules/core-js-pure/internals/well-known-symbol.js"}],"../node_modules/core-js-pure/modules/es.string.includes.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var notARegExp = require('../internals/not-a-regexp');
var requireObjectCoercible = require('../internals/require-object-coercible');
var correctIsRegExpLogic = require('../internals/correct-is-regexp-logic');

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/export":"../node_modules/core-js-pure/internals/export.js","../internals/not-a-regexp":"../node_modules/core-js-pure/internals/not-a-regexp.js","../internals/require-object-coercible":"../node_modules/core-js-pure/internals/require-object-coercible.js","../internals/correct-is-regexp-logic":"../node_modules/core-js-pure/internals/correct-is-regexp-logic.js"}],"../node_modules/core-js-pure/es/string/virtual/includes.js":[function(require,module,exports) {
require('../../../modules/es.string.includes');
var entryVirtual = require('../../../internals/entry-virtual');

module.exports = entryVirtual('String').includes;

},{"../../../modules/es.string.includes":"../node_modules/core-js-pure/modules/es.string.includes.js","../../../internals/entry-virtual":"../node_modules/core-js-pure/internals/entry-virtual.js"}],"../node_modules/core-js-pure/es/instance/includes.js":[function(require,module,exports) {
var arrayIncludes = require('../array/virtual/includes');
var stringIncludes = require('../string/virtual/includes');

var ArrayPrototype = Array.prototype;
var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.includes;
  if (it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.includes)) return arrayIncludes;
  if (typeof it === 'string' || it === StringPrototype || (it instanceof String && own === StringPrototype.includes)) {
    return stringIncludes;
  } return own;
};

},{"../array/virtual/includes":"../node_modules/core-js-pure/es/array/virtual/includes.js","../string/virtual/includes":"../node_modules/core-js-pure/es/string/virtual/includes.js"}],"../node_modules/core-js-pure/stable/instance/includes.js":[function(require,module,exports) {
var parent = require('../../es/instance/includes');

module.exports = parent;

},{"../../es/instance/includes":"../node_modules/core-js-pure/es/instance/includes.js"}],"../node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/includes");
},{"core-js-pure/stable/instance/includes":"../node_modules/core-js-pure/stable/instance/includes.js"}],"../node_modules/core-js-pure/internals/array-reduce.js":[function(require,module,exports) {
var aFunction = require('../internals/a-function');
var toObject = require('../internals/to-object');
var IndexedObject = require('../internals/indexed-object');
var toLength = require('../internals/to-length');

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};

},{"../internals/a-function":"../node_modules/core-js-pure/internals/a-function.js","../internals/to-object":"../node_modules/core-js-pure/internals/to-object.js","../internals/indexed-object":"../node_modules/core-js-pure/internals/indexed-object.js","../internals/to-length":"../node_modules/core-js-pure/internals/to-length.js"}],"../node_modules/core-js-pure/modules/es.array.reduce.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $reduce = require('../internals/array-reduce').left;
var arrayMethodIsStrict = require('../internals/array-method-is-strict');
var arrayMethodUsesToLength = require('../internals/array-method-uses-to-length');

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/export":"../node_modules/core-js-pure/internals/export.js","../internals/array-reduce":"../node_modules/core-js-pure/internals/array-reduce.js","../internals/array-method-is-strict":"../node_modules/core-js-pure/internals/array-method-is-strict.js","../internals/array-method-uses-to-length":"../node_modules/core-js-pure/internals/array-method-uses-to-length.js"}],"../node_modules/core-js-pure/es/array/virtual/reduce.js":[function(require,module,exports) {
require('../../../modules/es.array.reduce');
var entryVirtual = require('../../../internals/entry-virtual');

module.exports = entryVirtual('Array').reduce;

},{"../../../modules/es.array.reduce":"../node_modules/core-js-pure/modules/es.array.reduce.js","../../../internals/entry-virtual":"../node_modules/core-js-pure/internals/entry-virtual.js"}],"../node_modules/core-js-pure/es/instance/reduce.js":[function(require,module,exports) {
var reduce = require('../array/virtual/reduce');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.reduce;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.reduce) ? reduce : own;
};

},{"../array/virtual/reduce":"../node_modules/core-js-pure/es/array/virtual/reduce.js"}],"../node_modules/core-js-pure/stable/instance/reduce.js":[function(require,module,exports) {
var parent = require('../../es/instance/reduce');

module.exports = parent;

},{"../../es/instance/reduce":"../node_modules/core-js-pure/es/instance/reduce.js"}],"../node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/reduce");
},{"core-js-pure/stable/instance/reduce":"../node_modules/core-js-pure/stable/instance/reduce.js"}],"../node_modules/core-js-pure/internals/create-property.js":[function(require,module,exports) {
'use strict';
var toPrimitive = require('../internals/to-primitive');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

},{"../internals/to-primitive":"../node_modules/core-js-pure/internals/to-primitive.js","../internals/object-define-property":"../node_modules/core-js-pure/internals/object-define-property.js","../internals/create-property-descriptor":"../node_modules/core-js-pure/internals/create-property-descriptor.js"}],"../node_modules/core-js-pure/modules/es.array.concat.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var fails = require('../internals/fails');
var isArray = require('../internals/is-array');
var isObject = require('../internals/is-object');
var toObject = require('../internals/to-object');
var toLength = require('../internals/to-length');
var createProperty = require('../internals/create-property');
var arraySpeciesCreate = require('../internals/array-species-create');
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var wellKnownSymbol = require('../internals/well-known-symbol');
var V8_VERSION = require('../internals/engine-v8-version');

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

},{"../internals/export":"../node_modules/core-js-pure/internals/export.js","../internals/fails":"../node_modules/core-js-pure/internals/fails.js","../internals/is-array":"../node_modules/core-js-pure/internals/is-array.js","../internals/is-object":"../node_modules/core-js-pure/internals/is-object.js","../internals/to-object":"../node_modules/core-js-pure/internals/to-object.js","../internals/to-length":"../node_modules/core-js-pure/internals/to-length.js","../internals/create-property":"../node_modules/core-js-pure/internals/create-property.js","../internals/array-species-create":"../node_modules/core-js-pure/internals/array-species-create.js","../internals/array-method-has-species-support":"../node_modules/core-js-pure/internals/array-method-has-species-support.js","../internals/well-known-symbol":"../node_modules/core-js-pure/internals/well-known-symbol.js","../internals/engine-v8-version":"../node_modules/core-js-pure/internals/engine-v8-version.js"}],"../node_modules/core-js-pure/es/array/virtual/concat.js":[function(require,module,exports) {
require('../../../modules/es.array.concat');
var entryVirtual = require('../../../internals/entry-virtual');

module.exports = entryVirtual('Array').concat;

},{"../../../modules/es.array.concat":"../node_modules/core-js-pure/modules/es.array.concat.js","../../../internals/entry-virtual":"../node_modules/core-js-pure/internals/entry-virtual.js"}],"../node_modules/core-js-pure/es/instance/concat.js":[function(require,module,exports) {
var concat = require('../array/virtual/concat');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.concat;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.concat) ? concat : own;
};

},{"../array/virtual/concat":"../node_modules/core-js-pure/es/array/virtual/concat.js"}],"../node_modules/core-js-pure/stable/instance/concat.js":[function(require,module,exports) {
var parent = require('../../es/instance/concat');

module.exports = parent;

},{"../../es/instance/concat":"../node_modules/core-js-pure/es/instance/concat.js"}],"../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/concat");
},{"core-js-pure/stable/instance/concat":"../node_modules/core-js-pure/stable/instance/concat.js"}],"../node_modules/core-js-pure/modules/es.array.map.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $map = require('../internals/array-iteration').map;
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var arrayMethodUsesToLength = require('../internals/array-method-uses-to-length');

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"../internals/export":"../node_modules/core-js-pure/internals/export.js","../internals/array-iteration":"../node_modules/core-js-pure/internals/array-iteration.js","../internals/array-method-has-species-support":"../node_modules/core-js-pure/internals/array-method-has-species-support.js","../internals/array-method-uses-to-length":"../node_modules/core-js-pure/internals/array-method-uses-to-length.js"}],"../node_modules/core-js-pure/es/array/virtual/map.js":[function(require,module,exports) {
require('../../../modules/es.array.map');
var entryVirtual = require('../../../internals/entry-virtual');

module.exports = entryVirtual('Array').map;

},{"../../../modules/es.array.map":"../node_modules/core-js-pure/modules/es.array.map.js","../../../internals/entry-virtual":"../node_modules/core-js-pure/internals/entry-virtual.js"}],"../node_modules/core-js-pure/es/instance/map.js":[function(require,module,exports) {
var map = require('../array/virtual/map');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.map;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.map) ? map : own;
};

},{"../array/virtual/map":"../node_modules/core-js-pure/es/array/virtual/map.js"}],"../node_modules/core-js-pure/stable/instance/map.js":[function(require,module,exports) {
var parent = require('../../es/instance/map');

module.exports = parent;

},{"../../es/instance/map":"../node_modules/core-js-pure/es/instance/map.js"}],"../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/map");
},{"core-js-pure/stable/instance/map":"../node_modules/core-js-pure/stable/instance/map.js"}],"../src/components/Icons.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Twitter = exports.Facebook = exports.Linkedin = exports.Dribbble = exports.Behance = exports.Github = exports.Wordpress = exports.Webpack = exports.VueJs = exports.Sass = exports.React = exports.NodeJs = exports.Javascript = exports.Html5 = exports.Bootstrap = exports.Angular = exports.AdobePhotoshop = exports.AdobeIllustrator = exports.AdobeXd = void 0;

//Icons
var AdobeXd = function AdobeXd() {
  var template = "<svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    width=\"32\"\n    height=\"31.501\"\n    viewbox=\"0 0 32 31.501\"\n  >\n    <path\n      id=\"Icon_simple-adobexd\"\n      data-name=\"Icon simple-adobexd\"\n      d=\"M26.333.45H5.667A5.689,5.689,0,0,0,0,6.171V26.23a5.689,5.689,0,0,0,5.667,5.721H26.333A5.689,5.689,0,0,0,32,26.23V6.171A5.689,5.689,0,0,0,26.333.45ZM30.653,25.7a4.9,4.9,0,0,1-1.405,3.462A4.808,4.808,0,0,1,25.827,30.6H6.173a4.872,4.872,0,0,1-4.84-4.887V6.683A4.872,4.872,0,0,1,6.173,1.8h19.64a4.864,4.864,0,0,1,4.84,4.887Zm-18-10.514,3.733,7.243c.067.108.027.215-.08.215h-2.32a.261.261,0,0,1-.28-.175c-.853-1.777-1.72-3.554-2.613-5.466h-.027c-.8,1.8-1.68,3.7-2.533,5.479a.256.256,0,0,1-.24.148h-2.2c-.133,0-.147-.108-.08-.188L9.667,15.42,6.133,8.312a.109.109,0,0,1,.08-.188H8.507a.21.21,0,0,1,.24.148c.84,1.777,1.693,3.608,2.493,5.4h.027c.773-1.777,1.627-3.621,2.453-5.385.067-.108.107-.175.24-.175h2.147c.107,0,.147.081.08.188Zm4.387,2.194A5.243,5.243,0,0,1,22.387,11.8a5.856,5.856,0,0,1,.693.027V8.258a.134.134,0,0,1,.133-.135H25.32c.107,0,.133.04.133.108V20.589a9.68,9.68,0,0,0,.067,1.319c0,.081-.027.108-.107.148A7.879,7.879,0,0,1,22,22.837C19.107,22.851,17.04,21.047,17.04,17.385Zm6.04-3.446a2,2,0,0,0-.773-.135c-1.68,0-2.853,1.306-2.853,3.473,0,2.477,1.2,3.473,2.707,3.473a2.494,2.494,0,0,0,.92-.148V13.939Z\"\n      transform=\"translate(0 -0.45)\"\n    />\n  </svg>";
  return template;
};

exports.AdobeXd = AdobeXd;

var AdobeIllustrator = function AdobeIllustrator() {
  var template = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32.309\" height=\"31.502\" viewBox=\"0 0 32.309 31.502\">\n  <path id=\"Icon_simple-adobeillustrator\" data-name=\"Icon simple-adobeillustrator\" d=\"M0,.45v31.5H32.309V.45ZM1.346,1.8H30.963V30.605H1.346Zm9.861,16.491-1.066,4.036c-.023.112-.067.137-.2.137H7.966c-.135,0-.155-.044-.135-.2L11.654,8.873a4.153,4.153,0,0,0,.132-1.121c0-.089.044-.135.112-.135H14.72c.089,0,.135.024.156.135l4.288,14.531c.023.112,0,.178-.112.178H16.831c-.112,0-.178-.027-.2-.116l-1.111-4.059H11.2ZM14.961,16.1c-.377-1.489-1.265-4.749-1.6-6.327h-.023c-.288,1.575-1,4.241-1.555,6.327Zm6.058-7.482a1.377,1.377,0,1,1,2.754,0,1.29,1.29,0,0,1-1.4,1.377,1.266,1.266,0,0,1-1.36-1.377Zm.151,3.061c0-.108.044-.148.156-.148h2.114c.118,0,.162.044.162.156V22.315c0,.112-.022.156-.155.156H21.359c-.135,0-.179-.067-.179-.175V11.678Z\" transform=\"translate(0 -0.45)\"/>\n</svg>";
  return template;
};

exports.AdobeIllustrator = AdobeIllustrator;

var AdobePhotoshop = function AdobePhotoshop() {
  var template = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32.308\" height=\"31.5\" viewBox=\"0 0 32.308 31.5\">\n  <path id=\"Icon_simple-adobephotoshop\" data-name=\"Icon simple-adobephotoshop\" d=\"M0,.45v31.5H32.308V.45ZM1.346,1.8H30.962V30.6H1.346ZM7.808,7.827c0-.09.188-.156.3-.156.867-.044,2.138-.067,3.47-.067,3.732,0,5.183,2.046,5.183,4.666,0,3.419-2.48,4.887-5.522,4.887-.512,0-.687-.023-1.043-.023V22.3c0,.112-.044.156-.155.156H7.964c-.112,0-.155-.04-.155-.152V7.827ZM10.2,14.978c.31.022.555.022,1.09.022,1.575,0,3.056-.555,3.056-2.687,0-1.71-1.058-2.577-2.857-2.577-.533,0-1.043.022-1.288.044v5.2Zm11.586-1.6c-1.066,0-1.422.533-1.422.977,0,.489.242.821,1.665,1.555,2.111,1.023,2.776,2,2.776,3.442,0,2.154-1.642,3.312-3.863,3.312a5.881,5.881,0,0,1-2.76-.579c-.087-.044-.108-.11-.108-.222V19.888c0-.135.065-.179.153-.113a4.959,4.959,0,0,0,2.708.8c1.066,0,1.51-.444,1.51-1.045,0-.489-.31-.911-1.665-1.622-1.912-.915-2.711-1.844-2.711-3.4,0-1.733,1.354-3.177,3.709-3.177a6.274,6.274,0,0,1,2.415.377.293.293,0,0,1,.135.267v1.844c0,.112-.067.179-.2.135a4.821,4.821,0,0,0-2.346-.579Z\" transform=\"translate(0 -0.45)\"/>\n</svg>";
  return template;
};

exports.AdobePhotoshop = AdobePhotoshop;

var Angular = function Angular() {
  var template = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"29.222\" height=\"31.5\" viewBox=\"0 0 29.222 31.5\">\n  <path id=\"Icon_awesome-angular\" data-name=\"Icon awesome-angular\" d=\"M13.057,18.851h5.358L15.736,12.41Zm2.679-16.6L1.125,7.481,3.361,26.866,15.736,33.75l12.375-6.884L30.347,7.481Zm9.155,24.033H21.473l-1.842-4.6H11.855l-1.842,4.6H6.588L15.736,5.73Z\" transform=\"translate(-1.125 -2.25)\"/>\n</svg>";
  return template;
};

exports.Angular = Angular;

var Bootstrap = function Bootstrap() {
  var template = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"31.24\" viewBox=\"0 0 30 31.24\">\n  <path id=\"Icon_awesome-bootstrap\" data-name=\"Icon awesome-bootstrap\" d=\"M19.574,21.77a2.7,2.7,0,0,1-2.941,2.889H11.216v-5.7h5.417a2.613,2.613,0,0,1,2.941,2.807Zm-3.358-5.1a2.433,2.433,0,0,0,2.574-2.532c0-1.082-.235-2.5-2.574-2.5h-5v5.033ZM30,7.457V28.283a5.122,5.122,0,0,1-5,5.207H5a5.122,5.122,0,0,1-5-5.207V7.457A5.122,5.122,0,0,1,5,2.25H25a5.122,5.122,0,0,1,5,5.207ZM22.637,22.184c0-1.5-.445-4.065-3.285-4.7v-.051a4,4,0,0,0,2.5-3.88c0-.488.134-4.517-5.2-4.517h-8.5V27.262c8.587,0,9.366.117,10.955-.4a4.633,4.633,0,0,0,3.53-4.68Z\" transform=\"translate(0 -2.25)\"/>\n</svg>";
  return template;
};

exports.Bootstrap = Bootstrap;

var Html5 = function Html5() {
  var template = "\n      <svg\n        xmlns=\"http://www.w3.org/2000/svg\"\n        width=\"26.99\"\n        height=\"31.701\"\n        viewBox=\"0 0 26.99 31.701\"\n      >\n        <path\n          id=\"Icon_awesome-html5\"\n          data-name=\"Icon awesome-html5\"\n          d=\"M0,2.25,2.453,30.257,13.46,33.951l11.077-3.694L26.99,2.25ZM21.662,11.3H8.744l.288,3.5H21.374l-.956,10.5-6.881,1.911v.021H13.46L6.523,25.3,6.1,19.933H9.454l.246,2.7,3.76,1.026,3.774-1.026.422-4.4H5.925l-.9-10.3H21.972L21.662,11.3Z\"\n          transform=\"translate(0 -2.25)\"\n        />\n      </svg>";
  return template;
};

exports.Html5 = Html5;

var Javascript = function Javascript() {
  var template = "<svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"32\"\n      height=\"31.206\"\n      viewBox=\"0 0 32 31.206\"\n    >\n      <path\n        id=\"Icon_simple-javascript\"\n        data-name=\"Icon simple-javascript\"\n        d=\"M0,0H32V31.206H0ZM29.379,23.764c-.233-1.424-1.184-2.62-4-3.736-.981-.449-2.072-.761-2.4-1.482a1.5,1.5,0,0,1-.061-.917,1.54,1.54,0,0,1,2.02-.858,2.15,2.15,0,0,1,1.3,1.17c1.379-.879,1.379-.879,2.34-1.463a5.383,5.383,0,0,0-.781-1.014,4.54,4.54,0,0,0-3.779-1.344l-.94.116a4.321,4.321,0,0,0-2.28,1.307,4.013,4.013,0,0,0,.759,5.813c1.82,1.326,4.481,1.618,4.821,2.867.32,1.521-1.16,2.009-2.621,1.833a3.5,3.5,0,0,1-2.34-1.737l-2.44,1.367a5.266,5.266,0,0,0,1.08,1.442c2.32,2.283,8.12,2.166,9.161-1.305a4.3,4.3,0,0,0,.1-2.145l.061.087ZM17.4,14.343h-3c0,2.52-.012,5.024-.012,7.548a12.013,12.013,0,0,1-.184,3.525c-.44.9-1.573.781-2.088.624a2.539,2.539,0,0,1-1.107-1.112,1.114,1.114,0,0,0-.169-.255L8.411,26.137a4.637,4.637,0,0,0,1.765,1.973,6,6,0,0,0,4.276.527A3.732,3.732,0,0,0,16.867,26.8c.68-1.209.536-2.692.529-4.351.016-2.671,0-5.343,0-8.034l.005-.073Z\"\n      />\n    </svg>";
  return template;
};

exports.Javascript = Javascript;

var NodeJs = function NodeJs() {
  var template = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"27.157\" height=\"29.24\" viewBox=\"0 0 27.157 29.24\">\n  <path id=\"Icon_awesome-node-js\" data-name=\"Icon awesome-node-js\" d=\"M13.622,29.525a2.469,2.469,0,0,1-1.179-.3l-3.75-2.118c-.559-.3-.286-.406-.1-.464a7.562,7.562,0,0,0,1.7-.737.285.285,0,0,1,.28.023l2.881,1.63a.366.366,0,0,0,.346,0l11.226-6.185a.34.34,0,0,0,.17-.29V8.712a.343.343,0,0,0-.176-.3L13.792,2.237a.367.367,0,0,0-.346,0L2.231,8.422a.336.336,0,0,0-.176.3V21.083a.318.318,0,0,0,.176.284l3.076,1.694C6.978,23.856,8,22.922,8,21.976V9.768a.315.315,0,0,1,.328-.308H9.75a.319.319,0,0,1,.328.308V21.982a3.036,3.036,0,0,1-3.325,3.342,4.954,4.954,0,0,1-2.583-.673L1.228,23.032A2.239,2.239,0,0,1,.049,21.077V8.712A2.246,2.246,0,0,1,1.228,6.757L12.443.572a2.564,2.564,0,0,1,2.358,0L26.027,6.763a2.239,2.239,0,0,1,1.179,1.955V21.083a2.253,2.253,0,0,1-1.179,1.955L14.8,29.223a2.451,2.451,0,0,1-1.179.3Zm9.063-12.19c0-2.315-1.641-2.93-5.087-3.365-3.489-.441-3.841-.667-3.841-1.445,0-.644.3-1.5,2.881-1.5,2.3,0,3.155.476,3.507,1.961a.322.322,0,0,0,.316.244h1.459a.324.324,0,0,0,.237-.1.314.314,0,0,0,.085-.238c-.225-2.559-2.006-3.748-5.6-3.748-3.2,0-5.112,1.288-5.112,3.452,0,2.344,1.9,2.994,4.972,3.284,3.677.342,3.963.859,3.963,1.549,0,1.2-1.009,1.706-3.373,1.706-2.972,0-3.623-.714-3.841-2.124a.318.318,0,0,0-.322-.261H11.47a.313.313,0,0,0-.322.308c0,1.8,1.027,3.957,5.944,3.957,3.55-.006,5.592-1.346,5.592-3.679Z\" transform=\"translate(-0.049 -0.285)\"/>\n</svg>";
  return template;
};

exports.NodeJs = NodeJs;

var React = function React() {
  var template = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"31.206\" viewBox=\"0 0 34 31.206\">\n  <path id=\"Icon_awesome-react\" data-name=\"Icon awesome-react\" d=\"M27.771,12.364q-.538-.188-1.076-.355c.06-.258.113-.515.166-.773.817-4.151.279-7.488-1.534-8.588-1.746-1.052-4.6.042-7.477,2.675-.286.258-.564.529-.83.8-.179-.181-.365-.362-.551-.536-3.021-2.814-6.05-4-7.863-2.891-1.74,1.059-2.258,4.2-1.527,8.129.073.39.153.773.246,1.163-.425.125-.843.265-1.235.411C2.543,13.687,0,15.721,0,17.825,0,20,2.709,22.178,6.395,23.5c.3.1.6.209.9.3-.1.418-.186.829-.266,1.254-.7,3.866-.153,6.931,1.587,7.982,1.793,1.087,4.808-.028,7.743-2.723.232-.216.465-.439.7-.676.292.3.6.585.9.864,2.842,2.563,5.651,3.6,7.384,2.549,1.793-1.087,2.377-4.381,1.62-8.393q-.09-.46-.2-.94c.213-.063.418-.132.624-.2C31.224,22.185,34,20.033,34,17.825c0-2.111-2.616-4.158-6.229-5.461ZM18.786,6.45c2.47-2.257,4.775-3.141,5.824-2.508,1.122.676,1.554,3.406.85,6.993-.046.237-.093.467-.153.7a32.531,32.531,0,0,0-4.469-.738,34.955,34.955,0,0,0-2.829-3.7c.259-.258.511-.5.777-.745ZM11.1,21.44c.339.606.684,1.212,1.049,1.8a28.78,28.78,0,0,1-3.081-.522c.292-1,.657-2.041,1.082-3.1.305.613.618,1.219.95,1.818ZM9.091,13.06c.956-.223,1.972-.4,3.028-.543-.352.578-.7,1.17-1.023,1.769s-.644,1.2-.943,1.811c-.418-1.038-.77-2.055-1.062-3.037Zm1.82,4.8c.438-.961.916-1.9,1.421-2.828s1.049-1.825,1.62-2.71c1-.077,2.012-.118,3.048-.118s2.059.042,3.048.118q.847,1.316,1.614,2.7T23.1,17.832q-.667,1.442-1.434,2.842c-.5.926-1.043,1.825-1.607,2.716-.989.077-2.019.111-3.061.111s-2.052-.035-3.028-.1q-.867-1.327-1.634-2.716c-.511-.926-.983-1.867-1.428-2.828ZM22.9,21.426c.339-.613.657-1.233.97-1.86.425,1.01.8,2.034,1.122,3.086a27.928,27.928,0,0,1-3.121.557C22.233,22.624,22.571,22.025,22.9,21.426ZM23.86,16.1c-.312-.613-.631-1.226-.963-1.825s-.664-1.177-1.016-1.755a29.266,29.266,0,0,1,3.048.557A31.8,31.8,0,0,1,23.86,16.1ZM17.013,8.261a30.319,30.319,0,0,1,1.966,2.494c-1.315-.063-2.636-.063-3.951,0C15.679,9.856,16.349,9.02,17.013,8.261Zm-7.7-4.27c1.116-.683,3.593.293,6.2,2.716.166.153.332.32.5.488a35.133,35.133,0,0,0-2.849,3.7,33.493,33.493,0,0,0-4.462.724c-.086-.355-.159-.717-.232-1.08-.624-3.371-.212-5.914.837-6.547ZM7.683,22.352c-.279-.084-.551-.174-.823-.272a13.3,13.3,0,0,1-4.184-2.173,3.147,3.147,0,0,1-1.248-2.083c0-1.275,2.1-2.9,5.127-4.012.379-.139.764-.265,1.149-.383a38.162,38.162,0,0,0,1.627,4.43,39.233,39.233,0,0,0-1.647,4.493Zm7.743,6.826a12.085,12.085,0,0,1-3.745,2.459,2.814,2.814,0,0,1-2.344.091c-1.056-.641-1.494-3.1-.9-6.408.073-.39.153-.78.246-1.163a31.774,31.774,0,0,0,4.509.683,36.491,36.491,0,0,0,2.869,3.719C15.851,28.774,15.639,28.983,15.426,29.178Zm1.627-1.693c-.677-.766-1.355-1.616-2.012-2.528.637.028,1.295.042,1.959.042.684,0,1.355-.014,2.019-.049a29.809,29.809,0,0,1-1.966,2.535Zm8.679,2.09a3.144,3.144,0,0,1-1.1,2.18c-1.056.641-3.307-.2-5.737-2.382-.279-.251-.558-.522-.843-.8a34.268,34.268,0,0,0,2.8-3.733,31.322,31.322,0,0,0,4.529-.731c.066.286.126.571.179.85a13.306,13.306,0,0,1,.166,4.618Zm1.209-7.488c-.186.063-.372.125-.564.181a36.415,36.415,0,0,0-1.693-4.444,36.263,36.263,0,0,0,1.627-4.381c.345.1.677.216,1,.327,3.095,1.114,5.266,2.772,5.266,4.04,0,1.365-2.318,3.127-5.631,4.277ZM17,21.043a3.194,3.194,0,1,0-3.041-3.19A3.118,3.118,0,0,0,17,21.043Z\" transform=\"translate(0 -2.251)\"/>\n</svg>";
  return template;
};

exports.React = React;

var Sass = function Sass() {
  var template = "          <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"34\"\n      height=\"33.962\"\n      viewBox=\"0 0 34 33.962\"\n    >\n      <path\n        id=\"Icon_simple-sass\"\n        data-name=\"Icon simple-sass\"\n        d=\"M17,0A16.981,16.981,0,1,1,0,16.981,16.991,16.991,0,0,1,17,0ZM13.621,22.638a4.335,4.335,0,0,1-.034,2.536l-.092.255c-.034.086-.074.17-.11.249a4.76,4.76,0,0,1-.786,1.146c-.989,1.074-2.369,1.482-2.961,1.139-.637-.371-.32-1.889.827-3.1a11.566,11.566,0,0,1,3-2.135v0l.153-.086ZM27.662,7.269c-.768-3.018-5.776-4.01-10.514-2.328A23.822,23.822,0,0,0,9.082,9.565C6.471,12,6.056,14.123,6.228,15.01c.6,3.129,4.9,5.175,6.663,6.693v.008c-.52.255-4.329,2.164-5.222,4.139-.956,2.08.149,3.567.871,3.757A5.374,5.374,0,0,0,14.3,27.274a5.864,5.864,0,0,0,.572-5.2,6.617,6.617,0,0,1,2.593-.147c2.976.34,3.571,2.208,3.442,2.972a2.041,2.041,0,0,1-.955,1.336c-.213.129-.276.17-.256.256.021.127.129.127.3.106a2.355,2.355,0,0,0,1.616-2.082c.064-1.825-1.68-3.862-4.781-3.821a7.67,7.67,0,0,0-2.656.362.513.513,0,0,0-.149-.149c-1.912-2.059-5.461-3.5-5.312-6.241.043-1,.4-3.628,6.8-6.812,5.249-2.612,9.436-1.889,10.159-.3,1.038,2.27-2.233,6.5-7.694,7.109a4.1,4.1,0,0,1-3.444-.87c-.3-.318-.339-.34-.445-.275-.17.085-.064.361,0,.531a3.271,3.271,0,0,0,1.978,1.55,10.457,10.457,0,0,0,6.375-.637c3.292-1.272,5.864-4.818,5.12-7.79l.1.095Z\"\n      />\n    </svg>";
  return template;
};

exports.Sass = Sass;

var VueJs = function VueJs() {
  var template = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"31.5\" height=\"26.979\" viewBox=\"0 0 31.5 26.979\">\n  <path id=\"Icon_awesome-vuejs\" data-name=\"Icon awesome-vuejs\" d=\"M25.095,4.521H19.688l-3.937,6.23-3.375-6.23H0L15.75,31.5,31.5,4.521ZM3.916,6.771H7.7L15.75,20.707,23.794,6.771h3.783L15.75,27.035,3.916,6.771Z\" transform=\"translate(0 -4.521)\"/>\n</svg>";
  return template;
};

exports.VueJs = VueJs;

var Webpack = function Webpack() {
  var template = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28.913\" height=\"31.928\" viewBox=\"0 0 28.913 31.928\">\n  <path id=\"Icon_simple-webpack\" data-name=\"Icon simple-webpack\" d=\"M31.524,27.18l-13,7.32V28.8l8.1-4.435,4.9,2.816Zm.889-.8V11.071L27.656,13.8v9.839Zm-28.024.8,13,7.32V28.8l-8.1-4.435-4.9,2.816Zm-.889-.8V11.071L8.256,13.8v9.839L3.5,26.379Zm.556-16.3,13.33-7.508V8.084L8.846,12.76l-.065.037L4.056,10.08Zm27.8,0L18.527,2.572V8.084l8.54,4.677.065.037,4.725-2.717ZM17.386,27.5,9.4,23.129V14.463l7.989,4.593V27.5Zm1.141,0,7.989-4.373V14.463l-7.989,4.593V27.5ZM9.938,13.46l8.02-4.392,8.02,4.392-8.02,4.612Z\" transform=\"translate(-3.5 -2.572)\"/>\n</svg>";
  return template;
};

exports.Webpack = Webpack;

var Wordpress = function Wordpress() {
  var template = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"33.501\" height=\"31.502\" viewBox=\"0 0 33.501 31.502\">\n  <path id=\"Icon_awesome-wordpress-simple\" data-name=\"Icon awesome-wordpress-simple\" d=\"M17.313.563C8.08.563.563,7.625.563,16.313S8.08,32.064,17.313,32.064,34.063,25,34.063,16.313,26.546.563,17.313.563ZM2.251,16.313a13.356,13.356,0,0,1,1.3-5.76L10.741,29.06A14.13,14.13,0,0,1,2.251,16.313ZM17.313,30.476a15.888,15.888,0,0,1-4.255-.578l4.519-12.347L22.2,29.479a1.876,1.876,0,0,0,.108.2A15.944,15.944,0,0,1,17.313,30.476Zm2.074-20.8c.905-.044,1.722-.133,1.722-.133a.587.587,0,1,0-.095-1.169s-2.438.178-4.012.178c-1.479,0-3.965-.178-3.965-.178a.587.587,0,1,0-.095,1.169s.77.089,1.58.133l2.344,6.046-3.3,9.292L8.087,9.676c.905-.044,1.722-.133,1.722-.133a.587.587,0,1,0-.095-1.169s-2.438.178-4.012.178c-.284,0-.615-.006-.973-.019A15.313,15.313,0,0,1,17.313,2.15,15.571,15.571,0,0,1,27.485,5.866c-.068-.006-.128-.013-.2-.013a2.522,2.522,0,0,0-2.526,2.515c0,1.169.716,2.153,1.479,3.322A7.124,7.124,0,0,1,27.485,15.6a16.156,16.156,0,0,1-1.148,4.579l-1.5,4.719L19.386,9.676Zm5.5,18.876,4.6-12.505a12.711,12.711,0,0,0,1.148-5.075,9.812,9.812,0,0,0-.1-1.454,13.447,13.447,0,0,1,1.844,6.8,14.015,14.015,0,0,1-7.49,12.239Z\" transform=\"translate(-0.563 -0.563)\"/>\n</svg>";
  return template;
}; // social media


exports.Wordpress = Wordpress;

var Github = function Github() {
  var template = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"31.5\" height=\"31.5\" viewBox=\"0 0 31.5 31.5\">\n    <path id=\"Icon_awesome-github-square\" data-name=\"Icon awesome-github-square\" d=\"M28.125,2.25H3.375A3.376,3.376,0,0,0,0,5.625v24.75A3.376,3.376,0,0,0,3.375,33.75h24.75A3.376,3.376,0,0,0,31.5,30.375V5.625A3.376,3.376,0,0,0,28.125,2.25ZM19.5,29.229c-.591.105-.809-.26-.809-.562,0-.38.014-2.32.014-3.888a2.74,2.74,0,0,0-.795-2.159c2.6-.288,5.344-.647,5.344-5.14a3.61,3.61,0,0,0-1.2-2.742,4.4,4.4,0,0,0-.12-3.164c-.977-.3-3.213,1.259-3.213,1.259a11.061,11.061,0,0,0-5.85,0s-2.236-1.561-3.213-1.259a4.364,4.364,0,0,0-.12,3.164,3.531,3.531,0,0,0-1.1,2.742c0,4.472,2.623,4.852,5.224,5.14a2.548,2.548,0,0,0-.745,1.568,2.467,2.467,0,0,1-3.4-.977,2.45,2.45,0,0,0-1.793-1.2c-1.139-.014-.077.717-.077.717.759.352,1.294,1.7,1.294,1.7.682,2.088,3.945,1.385,3.945,1.385,0,.977.014,2.566.014,2.855s-.211.668-.809.563A11.665,11.665,0,0,1,4.2,18.1,11.158,11.158,0,0,1,15.6,6.743,11.408,11.408,0,0,1,27.281,18.1,11.558,11.558,0,0,1,19.5,29.229Zm-6.9-4.3c-.134.028-.26-.028-.274-.12s.077-.2.211-.225.26.042.274.134S12.741,24.9,12.6,24.933Zm-.668-.063c0,.091-.105.169-.246.169s-.26-.063-.26-.169.105-.169.246-.169S11.932,24.764,11.932,24.87Zm-.963-.077c-.028.091-.169.134-.288.091s-.225-.134-.2-.225.169-.134.288-.105C10.912,24.6,11,24.7,10.969,24.792Zm-.865-.38c-.063.077-.2.063-.3-.042s-.134-.225-.063-.288.2-.063.3.042S10.167,24.356,10.1,24.412Zm-.64-.64c-.063.042-.183,0-.26-.105s-.077-.225,0-.274.2-.014.26.091a.206.206,0,0,1,0,.288Zm-.457-.682c-.063.063-.169.028-.246-.042-.077-.091-.091-.2-.028-.246s.169-.028.246.042C9.056,22.936,9.07,23.041,9.007,23.091Zm-.471-.52a.132.132,0,0,1-.2.028c-.091-.042-.134-.12-.105-.183a.165.165,0,0,1,.2-.028C8.522,22.437,8.564,22.514,8.536,22.57Z\" transform=\"translate(0 -2.25)\"/>\n  </svg>";
  return template;
};

exports.Github = Github;

var Behance = function Behance() {
  var template = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"31.5\" height=\"31.5\" viewBox=\"0 0 31.5 31.5\">\n  <path id=\"Icon_awesome-behance-square\" data-name=\"Icon awesome-behance-square\" d=\"M13.113,20.6c0,1.357-.984,1.786-2.194,1.786H7.748v-3.72h3.234C12.291,18.675,13.113,19.216,13.113,20.6Zm-.541-5.787c0-1.245-.963-1.54-2.032-1.54H7.755v3.15h3c1.062,0,1.814-.464,1.814-1.61Zm9.3,1.631a2.1,2.1,0,0,0-2.229,2.088h4.373A2,2,0,0,0,21.874,16.446ZM31.5,5.625v24.75a3.376,3.376,0,0,1-3.375,3.375H3.375A3.376,3.376,0,0,1,0,30.375V5.625A3.376,3.376,0,0,1,3.375,2.25h24.75A3.376,3.376,0,0,1,31.5,5.625ZM19.1,13.008h5.47V11.679H19.1ZM16.08,20.763a3.5,3.5,0,0,0-2.461-3.628,2.625,2.625,0,0,0,1.842-2.6c0-2.686-2-3.34-4.317-3.34H4.781v13.5h6.546C13.781,24.68,16.08,23.505,16.08,20.763Zm10.638-1.041c0-2.89-1.695-5.3-4.753-5.3a4.907,4.907,0,0,0-5,5.175,4.764,4.764,0,0,0,5,5.133,4.359,4.359,0,0,0,4.577-3.291h-2.37a2.224,2.224,0,0,1-2.123,1.273,2.206,2.206,0,0,1-2.4-2.482H26.7C26.7,20.067,26.719,19.891,26.719,19.723Z\" transform=\"translate(0 -2.25)\"/>\n</svg>";
  return template;
};

exports.Behance = Behance;

var Dribbble = function Dribbble() {
  var template = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"31.5\" height=\"31.5\" viewBox=\"0 0 31.5 31.5\">\n  <path id=\"Icon_awesome-dribbble-square\" data-name=\"Icon awesome-dribbble-square\" d=\"M6.342,16.045a9.639,9.639,0,0,1,5.323-6.729,62.024,62.024,0,0,1,3.565,5.555,35.819,35.819,0,0,1-8.887,1.174ZM22.12,10.828A9.575,9.575,0,0,0,13.5,8.677,51.72,51.72,0,0,1,17.086,14.3,10.9,10.9,0,0,0,22.12,10.828ZM9.851,25.594A9.591,9.591,0,0,0,19.5,26.859a39.67,39.67,0,0,0-2.053-7.284A13.511,13.511,0,0,0,9.851,25.594ZM16.8,17.986c-.239-.548-.506-1.09-.78-1.631a35.186,35.186,0,0,1-9.872,1.364c0,.1-.007.2-.007.3a9.592,9.592,0,0,0,2.468,6.427A14.9,14.9,0,0,1,16.8,17.986Zm2.454,1.146a41.088,41.088,0,0,1,1.863,6.848,9.619,9.619,0,0,0,4.12-6.441,14.02,14.02,0,0,0-5.984-.408Zm-1.427-3.4c.337.689.584,1.252.844,1.884a22.4,22.4,0,0,1,6.694.309,9.518,9.518,0,0,0-2.173-5.984,12.865,12.865,0,0,1-5.365,3.79ZM31.5,5.625v24.75a3.376,3.376,0,0,1-3.375,3.375H3.375A3.376,3.376,0,0,1,0,30.375V5.625A3.376,3.376,0,0,1,3.375,2.25h24.75A3.376,3.376,0,0,1,31.5,5.625ZM27,18A11.25,11.25,0,1,0,15.75,29.25,11.265,11.265,0,0,0,27,18Z\" transform=\"translate(0 -2.25)\"/>\n</svg>";
  return template;
};

exports.Dribbble = Dribbble;

var Linkedin = function Linkedin() {
  var template = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"31.5\" height=\"31.5\" viewBox=\"0 0 31.5 31.5\">\n  <path id=\"Icon_awesome-linkedin\" data-name=\"Icon awesome-linkedin\" d=\"M29.25,2.25H2.243A2.26,2.26,0,0,0,0,4.521V31.479A2.26,2.26,0,0,0,2.243,33.75H29.25a2.266,2.266,0,0,0,2.25-2.271V4.521A2.266,2.266,0,0,0,29.25,2.25Zm-19.73,27H4.852V14.217H9.527V29.25ZM7.186,12.164A2.707,2.707,0,1,1,9.893,9.457a2.708,2.708,0,0,1-2.707,2.707ZM27.021,29.25H22.352V21.938c0-1.744-.035-3.987-2.426-3.987-2.433,0-2.805,1.9-2.805,3.86V29.25H12.452V14.217h4.479V16.27h.063a4.917,4.917,0,0,1,4.423-2.426c4.725,0,5.6,3.115,5.6,7.165Z\" transform=\"translate(0 -2.25)\"/>\n</svg>";
  return template;
};

exports.Linkedin = Linkedin;

var Facebook = function Facebook() {
  var template = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"31.5\" height=\"31.5\" viewBox=\"0 0 31.5 31.5\">\n  <path id=\"Icon_awesome-facebook-square\" data-name=\"Icon awesome-facebook-square\" d=\"M28.125,2.25H3.375A3.375,3.375,0,0,0,0,5.625v24.75A3.375,3.375,0,0,0,3.375,33.75h9.65V23.041H8.6V18h4.43V14.158c0-4.37,2.6-6.784,6.586-6.784a26.836,26.836,0,0,1,3.9.34V12h-2.2a2.521,2.521,0,0,0-2.842,2.723V18h4.836l-.773,5.041H18.475V33.75h9.65A3.375,3.375,0,0,0,31.5,30.375V5.625A3.375,3.375,0,0,0,28.125,2.25Z\" transform=\"translate(0 -2.25)\"/>\n</svg>";
  return template;
};

exports.Facebook = Facebook;

var Twitter = function Twitter() {
  var template = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"31.5\" height=\"31.5\" viewBox=\"0 0 31.5 31.5\">\n  <path id=\"Icon_awesome-twitter-square\" data-name=\"Icon awesome-twitter-square\" d=\"M28.125,2.25H3.375A3.376,3.376,0,0,0,0,5.625v24.75A3.376,3.376,0,0,0,3.375,33.75h24.75A3.376,3.376,0,0,0,31.5,30.375V5.625A3.376,3.376,0,0,0,28.125,2.25ZM24.687,13.416c.014.2.014.4.014.6a13.031,13.031,0,0,1-13.12,13.12A13.06,13.06,0,0,1,4.5,25.066a9.715,9.715,0,0,0,1.111.056,9.246,9.246,0,0,0,5.723-1.969,4.618,4.618,0,0,1-4.31-3.2,4.97,4.97,0,0,0,2.081-.084,4.612,4.612,0,0,1-3.691-4.528v-.056A4.608,4.608,0,0,0,7.5,15.87,4.6,4.6,0,0,1,5.442,12.03,4.554,4.554,0,0,1,6.068,9.7a13.094,13.094,0,0,0,9.506,4.823,4.621,4.621,0,0,1,7.868-4.212A9.036,9.036,0,0,0,26.367,9.2a4.6,4.6,0,0,1-2.025,2.538A9.177,9.177,0,0,0,27,11.025,9.707,9.707,0,0,1,24.687,13.416Z\" transform=\"translate(0 -2.25)\"/>\n</svg>";
  return template;
};

exports.Twitter = Twitter;
},{}],"../src/components/CardContent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _Icons = require("./Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateContent = function CreateContent() {
  var _context, _context2, _context3, _context4, _context5, _context6, _context7, _context8, _context9;

  var content = [{
    id: 1,
    title: 'Plato Landing Page',
    category: 'landing_page',
    desc: "This project is a landing page for Online English tutoring service. It features an integrated Mailchimp sign-up form and a contact form",
    myWork: 'I created a new design and prototype in Adobe XD, developed the website, and deployed it to Netlify.',
    image: '"https://acdev.imfast.io/portfolio/img/plato_english.jpg"',
    myStack: (0, _concat.default)(_context = (0, _concat.default)(_context2 = (0, _concat.default)(_context3 = "".concat((0, _Icons.AdobeXd)(), "\n      ")).call(_context3, (0, _Icons.Html5)(), "\n      ")).call(_context2, (0, _Icons.Sass)(), "\n      ")).call(_context, (0, _Icons.Javascript)()),
    github: '',
    //`<a href="https://www.google.com" class="project-link" rel="noopener" target="_blank">View code</a>`,
    live: 'https://www.platoenglishacademy.co.uk'
  }, {
    id: 2,
    title: 'Swytch Landing Page',
    category: 'landing_page',
    desc: "This landing page was created for an e-bike startup. It features a product slider, embedded video which starts and stops automatically, dynamically generated reviews, etc.",
    myWork: 'I created a new design and prototype in Adobe XD, and developed the website.',
    image: '"https://acdev.imfast.io/portfolio/img/switch_landing.jpg"',
    myStack: (0, _concat.default)(_context4 = (0, _concat.default)(_context5 = (0, _concat.default)(_context6 = "".concat((0, _Icons.AdobeXd)(), "\n      ")).call(_context6, (0, _Icons.Html5)(), "\n      ")).call(_context5, (0, _Icons.Sass)(), "\n      ")).call(_context4, (0, _Icons.Javascript)()),
    github: "<a href=\"https://github.com/czernous/swytch-landing\" class=\"project-link\" rel=\"noopener\" target=\"_blank\">View code</a>",
    live: 'https://czernous.github.io/swytch-landing'
  }, {
    id: 4,
    title: 'Plumbing Website',
    category: 'design',
    desc: "This project is a service website for a local plumber. It includes a home, about, service and contact pages as well as portfolio. The design is available for sale.",
    myWork: 'I created new design and prototype in Adobe XD.',
    image: '"https://acdev.imfast.io/portfolio/img/plumbing_site.jpg"',
    myStack: "".concat((0, _Icons.AdobeXd)()),
    github: '',
    //`<a href="https://www.google.com" class="project-link" rel="noopener" target="_blank">View code</a>`,
    live: 'https://www.behance.net/gallery/101936711/Plumbing-website-redesign'
  }, {
    id: 5,
    title: 'Copywriter Portfolio',
    category: 'portfolio',
    desc: "This project is a portfolio I did for a copywriter. It includes a home, about, and contact pages as well as portfolio.",
    myWork: 'I created new design in Adobe Photoshop and developed the website.',
    image: '"https://acdev.imfast.io/portfolio/img/cw-portfolio.jpg"',
    myStack: (0, _concat.default)(_context7 = (0, _concat.default)(_context8 = (0, _concat.default)(_context9 = "".concat((0, _Icons.AdobePhotoshop)(), "\n      ")).call(_context9, (0, _Icons.Html5)(), "\n      ")).call(_context8, (0, _Icons.Sass)(), "\n      ")).call(_context7, (0, _Icons.Javascript)()),
    github: '',
    //`<a href="https://www.google.com" class="project-link" rel="noopener" target="_blank">View code</a>`,
    live: 'https://www.rc-copywriting.imfast.io'
  }];
  return content;
};

var _default = CreateContent;
exports.default = _default;
},{"@babel/runtime-corejs3/core-js-stable/instance/concat":"../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js","./Icons":"../src/components/Icons.js"}],"../src/components/Portfolio.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _CardContent = _interopRequireDefault(require("./CardContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Portfolio = function Portfolio() {
  // Generate cards from array
  var projects = document.querySelector('#project-grid');

  var displayProjectInfo = function displayProjectInfo(projectInfo) {
    var displayProject = (0, _map.default)(projectInfo).call(projectInfo, function (item) {
      var _context, _context2, _context3, _context4, _context5, _context6, _context7;

      return (0, _concat.default)(_context = (0, _concat.default)(_context2 = (0, _concat.default)(_context3 = (0, _concat.default)(_context4 = (0, _concat.default)(_context5 = (0, _concat.default)(_context6 = (0, _concat.default)(_context7 = "<div class=\"card\">\n      <img\n        src=".concat(item.image, "\n        alt=\"")).call(_context7, item.title, "\"\n        crossorigin=\"anonymous\"\n      />\n      <div class=\"project-desc\" tabindex=\"0\">\n        <p class=\"project-title\">")).call(_context6, item.title, "</p>\n        <div class=\"desc-wrapper\">\n          <div class=\"desc-content\">\n            <p class=\"desc-heading\">Project Description</p>\n            <p class=\"desc-text\">\n            ")).call(_context5, item.desc, "\n            </p>\n            <p class=\"desc-heading\">What I did</p>\n            <p class=\"desc-text\">\n              ")).call(_context4, item.myWork, "\n            </p>\n            ")).call(_context3, item.github, "\n            <a href=\"")).call(_context2, item.live, "\" class=\"project-link\" rel=\"noopener\" target=\"_blank\">Live</a>\n          </div>\n          <div class=\"stack-icons\">\n          ")).call(_context, item.myStack, "\n          </div>\n        </div>\n      </div>\n    </div>");
    });
    displayProject = displayProject.join('');
    projects.innerHTML = displayProject;
  }; // Create filter buttons


  var container = document.querySelector('.btn-container');

  var displayProjectButtons = function displayProjectButtons() {
    var _context8;

    var categories = (0, _reduce.default)(_context8 = (0, _CardContent.default)()).call(_context8, function (values, item) {
      if (!(0, _includes.default)(values).call(values, item.category)) {
        values.push(item.category);
      }

      return values;
    }, ['all']);
    var categoryBtns = (0, _map.default)(categories).call(categories, function (category) {
      var _context9;

      return (0, _concat.default)(_context9 = "<button class=\"filter-btn btn\" data-id=".concat(category, " \n            type=\"button\">")).call(_context9, category, "</button>");
    }).join('');
    container.innerHTML = categoryBtns;
    var filterBtns = container.querySelectorAll('.filter-btn'); //filter items

    (0, _forEach.default)(filterBtns).call(filterBtns, function (btn) {
      btn.addEventListener('click', function (e) {
        var _context10;

        var category = e.currentTarget.dataset.id;
        var projectCategory = (0, _filter.default)(_context10 = (0, _CardContent.default)()).call(_context10, function (projectItem) {
          if (projectItem.category === category) {
            return projectItem;
          }
        });

        if (category === 'all') {
          displayProjectInfo((0, _CardContent.default)());
        } else {
          displayProjectInfo(projectCategory);
        }
      });
    });
  };

  window.addEventListener('DOMContentLoaded', function () {
    displayProjectInfo((0, _CardContent.default)());
    displayProjectButtons();
  });
};

var _default = Portfolio;
exports.default = _default;
},{"@babel/runtime-corejs3/core-js-stable/instance/filter":"../node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js","@babel/runtime-corejs3/core-js-stable/instance/for-each":"../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js","@babel/runtime-corejs3/core-js-stable/instance/includes":"../node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js","@babel/runtime-corejs3/core-js-stable/instance/reduce":"../node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js","@babel/runtime-corejs3/core-js-stable/instance/concat":"../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js","@babel/runtime-corejs3/core-js-stable/instance/map":"../node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js","./CardContent":"../src/components/CardContent.js"}],"../src/components/Footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _Icons = require("./Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  var _context, _context2, _context3;

  var date = new Date();
  var template = (0, _concat.default)(_context = (0, _concat.default)(_context2 = (0, _concat.default)(_context3 = "\n    <div class=\"footer\">\n    <ul class=\"social\">\n  <li>\n    <a\n      rel=\"noopener\"\n      target=\"_blank\"\n      class=\"icon\"\n      href=\"https://github.com/czernous\"\n    >\n    ".concat((0, _Icons.Github)(), "\n    </a>\n  </li>\n  <li>\n  <a\n    rel=\"noopener\"\n    target=\"_blank\"\n    class=\"icon\"\n    href=\"https://www.behance.net/antonchernous\"\n  >\n  ")).call(_context3, (0, _Icons.Behance)(), "\n  </a>\n</li>\n  <li>\n  <a\n    rel=\"noopener\"\n    target=\"_blank\"\n    class=\"icon\"\n    href=\"https://www.linkedin.com/in/anton-chernous-42309525/\"\n  >\n  ")).call(_context2, (0, _Icons.Linkedin)(), "\n  </a>\n</li>\n    </ul>\n    <span class=\"copyright\">&copy")).call(_context, date.getFullYear(), "</span>\n    </div>\n  ");
  return template;
};

var _default = Footer;
exports.default = _default;
},{"@babel/runtime-corejs3/core-js-stable/instance/concat":"../node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js","./Icons":"../src/components/Icons.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../src/scss/app.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../src/scripts/navbar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var navFunc = function navFunc() {
  var hamburger = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.animate-nav');
  var sideMenu = document.getElementById('side-menu');
  var sideMenuNav = document.getElementById('side-menu-nav');

  var menuControl = function menuAnimate() {
    hamburger.classList.toggle('is-active');
    navLinks.classList.toggle('slide-from-top');
    sideMenu.classList.toggle('side-menu-visible');
    sideMenuNav.style.display = 'block';
  };

  hamburger.addEventListener('click', menuControl);
  sideMenuNav.addEventListener('click', menuControl); //Slide Navbar UP/Down on Scroll

  var scrollPos = 50;
  var nav = document.getElementById('header');
  var navBg = document.querySelector('.header-bg');

  function checkPosition() {
    var windowY = window.scrollY;

    if (windowY < scrollPos && windowY > 20) {
      // Scrolling UP
      nav.style.display = 'flex';
      navBg.classList.add('header-bg-slide-down');
    } else if ((scrollPos = windowY) && windowY > 20) {
      // Scrolling DOWN
      nav.style.display = 'none';
      navBg.classList.remove('header-bg-slide-down');
      navBg.classList.remove('header-bg-slide-up');
    } else {
      navBg.classList.add('header-bg-slide-up'); //hide nav background at the top of the screen
    }

    scrollPos = windowY;
  }

  window.addEventListener('scroll', checkPosition);
};

var _default = navFunc;
exports.default = _default;
},{}],"../src/scripts/showsections.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showSections = function showSections() {
  var navigate = document.querySelectorAll('.navigate');
  var sections = document.querySelectorAll('.main-content');
  window.addEventListener('DOMContentLoaded', function () {
    sections[0].style.display = 'flex';
  }); //filter items

  (0, _forEach.default)(navigate).call(navigate, function (btn) {
    btn.addEventListener('click', function (e) {
      var category = e.currentTarget.dataset.id;

      for (var i = 0; i < sections.length; i++) {
        if (sections[i].dataset.id === category) {
          sections[i].style.display = 'flex';
        } else {
          sections[i].style.display = 'none';
        }
      }
    });
  });
};

var _default = showSections;
exports.default = _default;
},{"@babel/runtime-corejs3/core-js-stable/instance/for-each":"../node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"}],"../src/app.js":[function(require,module,exports) {
"use strict";

var _Header = _interopRequireDefault(require("./components/Header"));

var _Portfolio = _interopRequireDefault(require("./components/Portfolio"));

var _Footer = _interopRequireDefault(require("./components/Footer"));

require("./scss/app.scss");

var _navbar = _interopRequireDefault(require("./scripts/navbar"));

var _showsections = _interopRequireDefault(require("./scripts/showsections"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = function app() {
  document.querySelector('#header').innerHTML = (0, _Header.default)();
  document.querySelector('#project-grid').innerHTML = (0, _Portfolio.default)();
  var footer = document.querySelectorAll('.footer-container');

  for (var i = 0; i < footer.length; i++) {
    footer[i].innerHTML = (0, _Footer.default)();
  }
}; // Init app


app(); // scripts
// navbar animations

(0, _navbar.default)(); // sections

(0, _showsections.default)();
},{"./components/Header":"../src/components/Header.js","./components/Portfolio":"../src/components/Portfolio.js","./components/Footer":"../src/components/Footer.js","./scss/app.scss":"../src/scss/app.scss","./scripts/navbar":"../src/scripts/navbar.js","./scripts/showsections":"../src/scripts/showsections.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60911" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/app.js"], null)
//# sourceMappingURL=/app.581aa3f0.js.map