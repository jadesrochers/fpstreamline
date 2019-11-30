function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var arr = require('./src/arrayfcn');

var conv = require('./src/conversions');

var log = require('./src/logging');

var math = require('./src/math');

var pipe = require('./src/pipeAsync');

var string = require('./src/strings');

var combine;
combine = _objectSpread({}, combine, {}, arr);
combine = _objectSpread({}, combine, {}, conv);
combine = _objectSpread({}, combine, {}, log);
combine = _objectSpread({}, combine, {}, math);
combine = _objectSpread({}, combine, {}, pipe);
combine = _objectSpread({}, combine, {}, string);
module.exports = combine;
