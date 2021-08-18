function count(arr, item) {
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            num++;
        }
    }

    return num;
}

const arr = [1, 2, 4, 4, 3, 4, 3];
const item = 4;
console.log(count(arr, item));