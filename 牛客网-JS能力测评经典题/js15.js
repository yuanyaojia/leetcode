/**
 * 避免使用全局变量，用闭包的方式
 * @returns 
 */

function globals() {
    
    function myObject() {
        name: 'Jory'
    }

    return myObject;
}