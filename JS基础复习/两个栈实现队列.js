var CQueue = function() {

};

let stack1 = [];
let stack2 = [];

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (stack2.length) {
        return stack2.pop();
    } else {
        if (stack1.length) {
            for (let i = 0; i < stack1.length; i++) {
                stack2.push(stack1.pop);
            }
            return stack2.pop();
        }
        else {
            return null;
        }
    }

};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */