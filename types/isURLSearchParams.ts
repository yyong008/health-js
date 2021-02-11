const isURLSearchParams = (val) => {
    return (
        typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams
    );
};

export default isURLSearchParams;
