function prepend(arr, item) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i]);
    }

    res.unshift(item);

    return res;

}

const arr = [1, 2, 3, 4];
const item = 10;
console.log(prepend(arr, item));