import _toString from '../utils/toString';

const isPlainObject = (val: any): boolean => {
    if (_toString.call(val) !== '[object Object]') {
        return false;
    }

    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
}

export default isPlainObject;