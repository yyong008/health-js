const isURLSearchParams = (val: any) => {
    return (
        typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams
    );
};

export default isURLSearchParams;
