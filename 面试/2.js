function flatten(arr) {
    // 实现 flatten 函数

    // return arr.reduce(function(prev, item) {
    //     return prev.concat(Array.isArray(item) ? flatten(item) : item);
    // }, []);

    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            res = res.concat(flatten(arr[i]));
        } else {
            res.push(arr[i]);
        }
    }

    return res;
  }

const arr = [1, 2, [3, [4, [5, 6]]], [7, [8, [9, 10]]]];
console.log(flatten(arr));
// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]