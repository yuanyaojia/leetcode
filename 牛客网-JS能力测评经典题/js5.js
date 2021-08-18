function append(arr, item) {
    let res = [];
    
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i]);
    }

    res.push(item);
    
    return res;
}

const arr = [1, 2, 3, 4];
const item = 10;
console.log(append(arr, item));