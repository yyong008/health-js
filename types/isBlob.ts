import _toString from '../utils/toString';

const isBlob = () => {
    return _toString.call(val) === '[object Blob]'
}

export default isBlob;
