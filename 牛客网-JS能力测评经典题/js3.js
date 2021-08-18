function remove(arr, item) {
    let res = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== item) {
            res.push(arr[i]);
        }
    }

    return res;

}

const arr = [1, 2, 3, 4, 2];
const item = 2;
console.log(remove(arr, item));