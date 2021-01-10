const _toString = Object.prototype.toString;

const isUndefined = (val: any) => {
    return _toString.call(val) === 'object Undefined'
}