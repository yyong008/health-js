import _toString from '../utils/toString';

const isUndefined = (val: any): boolean => {
    return _toString.call(val) === '[object Undefined]'
}

export default isUndefined;
