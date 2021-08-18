/**
 * 求两个数组公共部分
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */

function arrRepeat(arr1, arr2) {
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                res.push(arr1[i]);
            }
         }
    }
    return res;
}

function arrRepeat1(arr1, arr2) {
    let res = [];
    arr1.forEach(item => {
        if (arr2[item].indexOf === -1) {
            res.push(arr1[item]);
        }   
    });
    return res;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2]
console.log(arrRepeat1(arr1, arr2));