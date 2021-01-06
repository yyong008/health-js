const _toString = Object.prototype.toString;

const isNumber = (val: any) => {
    return _toString.call(val) === 'object Number'; // NaN 是 number 类型
}