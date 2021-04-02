const isPlainObject = require('../types/isPlainObject')

function merge(obj?: any, val?: any) {
    var result: any = {};

    function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
          result[key] = merge(result[key], val); // 这里与请类型不符合
        } else if (isPlainObject(val)) {
          result[key] = merge({}, val);
        } else if (Array.isArray(val)) {
          result[key] = val.slice();
        } else {
          result[key] = val;
        }
      }


      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
      }

    return result;
}