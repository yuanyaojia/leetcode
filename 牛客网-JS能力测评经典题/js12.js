function duplicates(arr) {
    let res = [];

    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                res.push(arr[i]);
            }
        }
    }

    for(let i = 0; i < res.length; i++) {
        for (let j = i + 1; j < res.length; j++) {
            if (res[i] === res[j]) {
                res.splice(j, 1);
                j--;
            }
        }
    }

    return res;
}

const arr = [1, 2, 4, 4, 3, 3, 1, 5, 3];
console.log(duplicates(arr));