/**
 * 多次执行变为每隔一段时间执行
 * @param {*} fn 
 * @param {*} delay 
 * @returns 
 */

function throttle(fn, delay = 200) {
    let timeout = null;
    return function() {
        if (timeout) {
            return 
        }
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
            timeout = null;
        }, delay);
    }

}