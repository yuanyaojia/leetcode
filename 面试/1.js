function findTarget(arr, target) {
    let res = [];

    let temp = [];

    for (let k = 0; k < arr.length; k++) {
        if (temp.indexOf(arr[k]) == -1) {
            temp.push(arr[k]);
        }
    }


    for (let i = 0; i < temp.length - 1; i++) {
        for (let j = i + 1; j < temp.length; j++) {
            if (temp[i] + temp[j] === target) {
                res.push(temp[i]);
                res.push(temp[j]);
            } 
        }
    }

    return res;

}

const arr = [1,-2,3,5,4,5,-6];
const target = -1;
console.log(findTarget(arr, target));