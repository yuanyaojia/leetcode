function ArrayToObject(arr,i,j) {
    if(arr.length <= 1){
        return;
    }
    if(i > arr.length - 1){
        return;
    }
    if(j > arr.length - 1){
        return;
    }
    console.log(arr);
    console.log(arr[j]);
    for(let k=0;k<arr[i].children.length;k++){
        if(arr[j].node === arr[i].children[k]){
            arr[i].children = arr[j];
            arr.splice(j, 1);
        }
    }
    ArrayToObject(arr, 0,j+1);
}

const arr = [
    { node: 'a', children: ['b', 'c'] },
    { node: 'd', children: ['a'] },
    { node: 'b', children: ['e', 'i'] },
    { node: 'c', children: ['f'] },
    { node: 'f', children: ['g'] },
    { node: 'e', children: ['h'] }
]
ArrayToObject(arr,0,1)
console.log(arr);