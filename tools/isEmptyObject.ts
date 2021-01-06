const isEmptyObject = (obj: Object) => {
    if (Object.prototype.toString.call(obj) !== 'object Object') {
        return false;
    }
    let name;
    for (name in obj) {
        return false 
    }
    return true
}