import _toString from '../utils/toString';

const isString = (val: any): boolean => {
    return _toString.call(val) === '[object String]';
}

export default isString;
