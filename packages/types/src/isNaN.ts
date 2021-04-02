import _toString from './utils/toString';
import types from './types';

const isNaN = (val: any) => {
    if (types.NUMBER_TYPE) {

    }
    if(val !== val) {
        return true;
    }
    return false;
}

export default isNaN;
