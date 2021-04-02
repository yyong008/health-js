import hasOwnProp from './utils/hasOwnProp';
import noop from './noop';
import types from 'types';

const mergePlainObj = (obj: Object, val: Object) => {
    //TODO: 先要判断是否为 plainObject
    if (types.isPlainObject(obj)) {
        console.log('[warn]: ' + obj  + 'is not a plain object');
        return;
    }
    if (types.isPlainObject(val)) {
        console.log('[warn]: ' + val + 'is not a plain object');
        return;
    }
    for (let key in val) {
        hasOwnProp(obj, key) ? obj[key] = val[key] : noop()
    }
}

export default mergePlainObj;
