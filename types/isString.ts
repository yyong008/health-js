import _toString from '../utils//toString';

const isString = (val) => {
    return _toString.call(val) === '[object String]';
}

export default isString;
