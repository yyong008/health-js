const isURLSearchParams = (val: any): boolean => {
    return (
        typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams
    );
};

export default isURLSearchParams;
