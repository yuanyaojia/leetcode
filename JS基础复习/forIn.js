var anotherObject = {
    a: 2,
    b: 1
};

// 创建一个关联到anotherObject的对象
var myObject = Object.create(anotherObject);

for (var k in myObject) {
    console.log("found:" + k);
}

("a" in myObject);