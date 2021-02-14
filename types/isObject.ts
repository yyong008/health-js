import _toString from '../utils/toString';

const isObject = (val: any) => {
    return val !== null && _toString.call(val) === '[object Object]';
}

export default isObject;
