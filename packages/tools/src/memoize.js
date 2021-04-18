// 缓存函数

let memoize = (fn, content) => {
    let cache = Object.create(null);

    content = content || this;

    return (...key) => {
        if (!cache[key]) {
            cache[key] = fn.apply(content, key);
        }

        return cache[key];
    }
}

// export default memoize;


const a = (...key) => {
    console.log(key) 
}

a({x: 123}); // [ { x: 123 } ]
a(1) // [1]

// vue cache
function cached(fn) {
    var cache = Object.create(null);
    return (function cachedFn(str) {
        var hit = cache[str];
        return hit = (cache[str] = fn(str))
    })
}