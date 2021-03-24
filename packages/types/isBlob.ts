import _toString from './utils/toString';

const isBlob = (val: any): boolean => {
    return _toString.call(val) === '[object Blob]'
}

export default isBlob;
