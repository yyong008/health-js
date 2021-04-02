import _toString from './utils/toString';
import types from './types';

const isError = (val: any) => {
    return _toString.call(val) === types.ERROR_TYPE;
}

export default isError;
