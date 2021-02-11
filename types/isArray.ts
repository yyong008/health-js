import _toString from '../utils/toString';

const isArray = (val) => {
    return _toString.call(val) === '[object Array]';
}

export default isArray;
