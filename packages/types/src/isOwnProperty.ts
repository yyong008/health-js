import _isOwnProperty from './utils/hasOwnProperty';

const isOwnProperty = (obj: any, key: any) => {
    return _isOwnProperty.call(obj, key);
}

export default isOwnProperty;
