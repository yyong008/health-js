import _toString from './utils/toString';

const isNull = (val: any): boolean => {
    return _toString.call(val) === '[object Null]'
}

export default isNull;
