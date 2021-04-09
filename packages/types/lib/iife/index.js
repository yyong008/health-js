this.index = this.index || {};
this.index.js = (function () {
    'use strict';

    var _toString = Object.prototype.toString;

    var isUndefined = function (val) {
        return _toString.call(val) === '[object Undefined]';
    };

    var isArray = function (val) {
        // es6
        if (Array && Array.isArray) {
            return Array.isArray(val);
        }
        return _toString.call(val) === '[object Array]';
    };

    // 类数组对象，主要根据长度性质来确定
    var isArrayLike = function (o) {
        if (o && // o 非假值
            typeof o === "object" && // o 是一个对象
            isFinite(o.length) && // 长度是无限
            o.length >= 0 && // 长度不是负数
            o.length === Math.floor(o.length) && //长度是整数
            o.length < 4294967296 // 长度是小于 2^32 次方
        )
            // o.length < 2^32
            return true;
        // Then o is array-like
        else
            return false; // Otherwise it is not
    };

    var isBlob = function (val) {
        return _toString.call(val) === '[object Blob]';
    };

    var isDate = function (val) {
        return _toString.call(val) === '[object Date]';
    };

    var isFile = function (val) {
        return _toString.call(val) === '[object File]';
    };

    var isFormData = function (val) {
        return (typeof FormData !== 'undefined') && _toString.call(val) === '[object FormData]';
    };

    var isFunction = function (val) {
        return _toString.call(val) === '[object Function]';
    };

    var isNull = function (val) {
        return _toString.call(val) === '[object Null]';
    };

    var isNumber = function (val) {
        return _toString.call(val) === '[object Number]'; // NaN 是 number 类型
    };

    var isObject = function (val) {
        return val !== null && _toString.call(val) === '[object Object]';
    };

    var isPlainObject = function (val) {
        if (_toString.call(val) !== '[object Object]') {
            return false;
        }
        var prototype = Object.getPrototypeOf(val);
        return prototype === null || prototype === Object.prototype;
    };

    var isStream = function (val) {
        return isObject(val) && isFunction(val.pipe);
    };

    var isString = function (val) {
        return _toString.call(val) === '[object String]';
    };

    var isURLSearchParams = function (val) {
        return (typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams);
    };

    var variables = {
        ARRAY_TYPE: '[object Array]',
        BLOB_TYPE: '[object Blob]',
        DATE_TYPE: '[object Date]',
        FILE_TYPE: '[object File]',
        FORMDATA_TYPE: '[object FormData]',
        FUNCTION_TYPE: '[object Function]',
        NULL_TYPE: '[object Null]',
        NUMBER_TYPE: '[object Number]',
        OBJECT_TYPE: '[object Object]',
        STRING_TYPE: '[object String]',
        UNDEFINED_TYPE: '[object Undefined]',
        SYMBOL_TYPE: "[object Symbol]",
        REGEXP_TYPE: "[object RegExp]",
        ERROR_TYPE: "[object Error]"
    };

    var isError = function (val) {
        return _toString.call(val) === variables.ERROR_TYPE;
    };

    var isRegExp = function (val) {
        console.log(variables.REGEXP_TYPE);
        return _toString.call(val) === variables.REGEXP_TYPE;
    };

    var isSymbol = function (val) {
        return _toString.call(val) === variables.SYMBOL_TYPE;
    };

    var index = {
        isArray: isArray,
        isArrayLike: isArrayLike,
        isBlob: isBlob,
        isDate: isDate,
        isFile: isFile,
        isFormData: isFormData,
        isFunction: isFunction,
        isNull: isNull,
        isNumber: isNumber,
        isObject: isObject,
        isPlainObject: isPlainObject,
        isStream: isStream,
        isString: isString,
        isUndefined: isUndefined,
        isURLSearchParams: isURLSearchParams,
        isRegExp: isRegExp,
        isError: isError,
        isSymbol: isSymbol
    };

    return index;

}());
