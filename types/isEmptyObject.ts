import _toString from '../utils/toString';

const isEmptyObject = (obj: Object) => {
    if (_toString.call(obj) !== '[object Object]') {
        return false;
    }

    let name;
    
    for (name in obj) {
        return false 
    };

    return true;
}

export default isEmptyObject;
