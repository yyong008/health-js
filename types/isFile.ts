import _toString from '../utils/toString';

const isFile = (val: any): boolean => {
    return _toString.call(val) === '[object File]';
}

export default isFile;
