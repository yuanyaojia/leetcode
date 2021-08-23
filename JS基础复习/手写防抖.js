/**
 * 实现一个按钮防二次点击操作，将多次执行变为最后一次执行
 * @param {*} fn 
 * @param {*} delay 
 * @returns 
 */

function debounce(fn, delay = 500) {
    var timeout = null;
    return function() {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
            timeout = null;
        }, delay);
    }
} 