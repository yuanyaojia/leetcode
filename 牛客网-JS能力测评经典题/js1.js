function indexOf(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return arr[i];
        }
    }
    return -1;
}

const arr = [1, 2, 3, 4];
const item = 3;
console.log(indexOf(arr, item));