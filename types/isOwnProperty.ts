import _isOwnProperty from '../utils/hasOwnProperty';

const isOwnProperty = (obj, key) => {
    return _isOwnProperty.call(obj, key);
}

export default isOwnProperty;
