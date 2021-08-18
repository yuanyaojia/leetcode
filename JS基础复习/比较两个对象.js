function compare(obj1, obj2) {
    // 判断obj1是否是对象
    if (typeof obj1 === 'object') {
        // 判断obj2是否是对象
        if (typeof obj2 !== 'object') {
            return false;
        }

        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }

        // 遍历obj2的所有键
            for (let key in obj2) {
                // 判断obj2的键值是否和obj1的键值是否一致
                if (!compare(obj1[key], obj2[key])) {
                    return false;
                }

                return true;
            }
    }
    else {
        return obj1 === obj2;
    }
}

const temp1 = {
    a: 0,
    b: 1,
    c: 0
}

const temp2 = {
    a: 0,
    b: 1,
    c: 0
}

console.log(compare(temp1, temp2));