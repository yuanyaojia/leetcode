function curtail(arr) {
    let res = [];
    
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i]);
    }

    res.shift();

    return res;

}


const arr = [1, 2, 3, 4];
console.log(curtail(arr));