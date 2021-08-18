function concat(arr1, arr2) {
    let res = [];

    for (let i = 0; i < arr1.length; i++) {
        res.push(arr1[i]);
    }

    for (let j = 0; j < arr2.length; j++) {
        res.push(arr2[j]);
    }

    return res;

}

const arr1 = [1, 2, 3, 4];
const arr2 = ['a', 'b', 'c', 1];
console.log(concat(arr1, arr2));