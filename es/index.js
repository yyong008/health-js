const _toString = Object.prototype.toString;

const isUndefined = (val) => {
    return _toString.call(val) === '[object Undefined]';
};

const isArray = (val) => {
    return _toString.call(val) === '[object Array]';
};

const isBlob = () => {
    return _toString.call(val) === '[object Blob]';
};

const isDate = (val) => {
    return _toString.call(val) === '[object Date]';
};

const isFile = (val) => {
    return _toString.call(val) === '[object File]';
};

const isFormData = (val) => {
    return (typeof FormData !== 'undefined') && _toString.call(val) === '[object FormData]';
};

const isFunction = (val) => {
    return _toString.call(val) === '[object Function]';
};

const isNull = (val) => {
    return _toString.call(val) === '[object Null]';
};

const isNumber = (val) => {
    return _toString.call(val) === '[object Number]'; // NaN 是 number 类型
};

const isObject = (val) => {
    return val !== null && _toString.call(val) === '[object Object]';
};

const isPlainObject = (val) => {
    if (_toString.call(val) !== '[object Object]') {
        return false;
    }
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
};

const isStream = (val) => {
    return isObject(val) && isFunction(val.pipe);
};

const isString = (val) => {
    return _toString.call(val) === '[object String]';
};

const isURLSearchParams = (val) => {
    return (typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams);
};

var index = {
    isArray,
    isBlob,
    isDate,
    isFile,
    isFormData,
    isFunction,
    isNull,
    isNumber,
    isObject,
    isPlainObject,
    isStream,
    isString,
    isUndefined,
    isURLSearchParams
};

export default index;
