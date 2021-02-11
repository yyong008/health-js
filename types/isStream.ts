import isFunction from './isFunction';
import isObject from './isObject';

const isStream = (val) => {
    return isObject(val) && isFunction(val.pipe);
}

export default isStream;
