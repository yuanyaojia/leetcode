function findAllOccurrences(arr, target) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            res.push(i);
        }
    }

    return res;
}

const arr = ['a','b','c','d','e','f','a','b','c'];
const target = 'a';
console.log(findAllOccurrences(arr, target));