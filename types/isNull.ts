const _toString = Object.prototype.toString;

const isNull = (val: any) => {
    return _toString.call(val) === 'object Null'
}