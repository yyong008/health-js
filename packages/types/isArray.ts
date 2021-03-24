import _toString from './utils/toString';

const isArray = (val: any): boolean => {
    // es6
    if (Array && Array.isArray) {
        return Array.isArray(val);
    }
    return _toString.call(val) === '[object Array]';
}

export default isArray;
