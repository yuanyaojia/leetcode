/**
 * 判断是否是回文链表
 */
function isPalindrome(head) {
    var arr = [];
    var start = head;

    while(start) {
        arr.push(start.val);
        start = start.next;
    }

    if (arr.length === 1) {
        return true;
    }

    for (var i = 0, j = arr.length - 1; i < j; i++, j--) {
        if (arr[i] !== arr[j]) {
            return false;
        }
    }

    return true;
}