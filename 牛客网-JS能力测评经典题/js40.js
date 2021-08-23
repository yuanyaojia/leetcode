function containsNumber(str) {
    for(let i = 0; i < 10; i++) {
        if (str.indexOf(i) !== -1) {
            return true;
        }
    }
    return false;
}

const str = 'abc123';
console.log(containsNumber(str));