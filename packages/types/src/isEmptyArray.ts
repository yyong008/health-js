import isArray from './isArray';

const isEmptyArray = (val: any): boolean => {
    if (isArray(val)) {
        return val.length === 0;
    }

    return false;
}

export default isEmptyArray;
