const throttle = (fn, waitTimeStamp) => {
    let previewTimeStamp = 0;

    let cloFn = function () {
        let nowTimeStamp = Date.now()
        , context = this
        , args = arguments;

        if (nowTimeStamp - previewTimeStamp > waitTimeStamp) {
            fn.apply(context, args);
            previewTimeStamp = nowTimeStamp;
        }
    }

    return cloFn;
}