var toString = Object.prototype.toString;

/**
 * 来源： axios: /axios/lib/utils.js
 * 判断 val 是否为数组
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

// es6 Array.isArray
function _isArray(val) {
  return Array.isArray(val)
}

// polyfill
if (!Array.isArray) {
  Array.isArray = isArray
}