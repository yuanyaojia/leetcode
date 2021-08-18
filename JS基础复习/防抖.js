function debounce(fn, delay) {
    var timeout = null;
    return function(e) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    }
}