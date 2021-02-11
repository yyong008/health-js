import _toString from '../utils/toString';

const isNumber = (val: any) => {
    return _toString.call(val) === '[object Number]'; // NaN 是 number 类型
}

export default isNumber;
