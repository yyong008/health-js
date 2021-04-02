import _toString from './utils/toString';

const isDate = (val: any): boolean => {
    return _toString.call(val) === '[object Date]';
}

export default isDate;
