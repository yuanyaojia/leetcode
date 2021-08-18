function flatten(arr, n) {
    let result = [];
    let m = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            m++;
            if (m < n) {
                result = result.concat(flatten(arr[i]));
            }
            else {
                result = result.concat(arr[i]);
            }
        } else {
            result.push(arr[i]);
        }
    }  
    
    return result;
}

const arr = [1, [2, [3, 4, 5, [6, 7, [8, 9]]]]];
console.log(arr.flatten());