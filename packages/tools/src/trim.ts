const trim = (str: string)  => {
    if (str.trim) {
        str.trim()
    } else {
        str.replace(/^\s+|\s+$/gm, '')
    }
}

export default trim;
