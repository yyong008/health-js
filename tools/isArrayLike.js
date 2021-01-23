// 类数组对象，主要根据长度性质来确定
function isArrayLike(o) {
    if (
        o && // o 非假值
        typeof o === "object" && // o 是一个对象
        isFinite(o.length) && // 长度是无限
        o.length >= 0 && // 长度不是负数
        o.length === Math.floor(o.length) && //长度是整数
        o.length < 4294967296 // 长度是小于 2^32 次方
    )
        // o.length < 2^32
        return true;
    // Then o is array-like
    else return false; // Otherwise it is not
}
