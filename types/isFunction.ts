import _toString from '../utils/toString';

const isFunction = (val: any) => {
    return _toString.call(val) === '[object Function]';
}

export default isFunction;
