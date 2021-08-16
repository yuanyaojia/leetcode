function A() {
    const arr = [1, 2, 3, 4, 5];
    let index = 0;

    function B() {
        const timer = setInterval(() => { 
            if (index >= arr.length) {
                clearInterval(timer);
            } 
            else {
                console.log(arr[index]);
            }
            index++;
        }, 1000);
    }

    return B;
}


const C = A();
console.log(C());