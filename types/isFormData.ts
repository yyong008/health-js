import _toString from '../utils/toString';

const isFormData = (val: any) => {
    return (typeof FormData !== 'undefined') && _toString.call(val) === '[object FormData]';
}

export default isFormData;
