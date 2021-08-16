function sliceArr(arr, n) {
    let result = [];

    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }

    return result;
}

const arr = [1, 2, 4, 5, 7, 8, 1, 2, 4, 5];
console.log(sliceArr(arr, 3));