function square(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        res.push(Math.pow(arr[i], 2));
    }

    return res;

}

const arr = [1, 2, 3, 4];
console.log(square(arr));