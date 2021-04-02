import _toString from './utils/toString';
import types from './types';

const isSymbol = (val: any) => {
    return _toString.call(val) === types.SYMBOL_TYPE
}

export default isSymbol;
