import isFunction from './isFunction';
import isObject from './isObject';

const isStream = (val:  any): boolean => {
    return isObject(val) && isFunction(val.pipe);
}

export default isStream;
