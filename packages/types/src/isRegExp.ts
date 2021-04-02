import _toString from './utils/toString';
import types from './types';

const isRegExp = (val: RegExp) => {
    console.log(types.REGEXP_TYPE)
    return _toString.call(val) === types.REGEXP_TYPE
}

export default isRegExp;
