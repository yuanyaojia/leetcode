function insert(arr, item, index) {
    let res = arr.slice(0);
    res.splice(index, 0, item);
    return res;
}


const arr = [1, 2, 3, 4];
const item = 'z';
const index = 2;
console.log(insert(arr, item, index));