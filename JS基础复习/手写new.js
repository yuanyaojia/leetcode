function newFuc(constructor, ...args) {
    // 1. 创建（或者说构造）一个新的对象
    let obj = {};
    // 2. 这个新对象会被执行[[Prototype]]链接
    obj.__proto__ = constructor.prototype;
    // 3. 这个新对象会被绑定到函数调用的this
    let result = constructor.apply(obj, args);
    // 4. 如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象
    return typeof result === "object" ? result : obj;
}

// 测试代码
function Bar(_name, _age) {
    this.name = _name;
    this.age = _age;
}

let b = newFuc(Bar, 'name', 20);
console.log(b);