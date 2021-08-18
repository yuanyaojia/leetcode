// 1. 循环
function unique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

// 2. indexOf
function unique1(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        // 如果要检索的字符串值没有出现，则该方法返回-1
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i]);
        }
    }
    return res;
}

// 3. includes
function unique2(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}

// 4. filter
function unique3(arr) {
    // 当前元素，在原始数组中的第一个索引===当前索引值，否则返回当前元素
    return arr.filter((item, index, arr) => {
        return arr.indexOf(item) === index;
    })
}

// 5. Set
function unique4(arr) {
    return [...new Set(arr)];
}

// 6. 对象
function unique5(arr) {

}

// 7. hasOwnProperty: 利用hasOwnProperty判断是否存在对象属性
function unique6(arr) {
    let res = {};
    return arr.filter(function(item, index, arr) {
        return res.hasOwnProperty(typeof item + item) ? false : (res[typeof item + item] = true);
    })
}

// 8. 递归去重: 不能去重字符串
function unique7(arr) {
    let array = arr;
    let arrayLen = array.length;

    array.sort((a, b) => a - b);

    function loop(index) {
        if (index >= 1) {
            if (array[index] === array[index - 1]) {
                array.splice(index,1);
            }
            loop(index - 1);
        }
    }

    loop(arrayLen - 1);
    return array;
}

// 9. reduce + includes
function unique8(arr){
    return arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev,cur],[]);
}

const arr = ['a', 'b', 'c','a'];
const arr1 = [1, 4, 5, 1, 2];
console.log(unique8(arr));