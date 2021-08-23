function isValid(str) {
    let map = {
        '{': '}',
        '(': ')',
        '[': ']'
    };

    let stack = [];

    for(let i = 0; i < str.length; i++) {
        if(map[str[i]]) {
            stack.push(str[i])
        } else if(str[i] !== map[stack.pop()]){
            return false
        }
    }
    return stack.length === 0;
};

const s = '[{[}]'
console.log(isValid(s));