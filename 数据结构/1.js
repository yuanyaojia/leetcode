function mergeArr(num1, m, num2) {
    let num1Right = num1.length - 1;
    let num2Right = num2.length - 1;
    while(num2Right > 0) {
        if (num2[num2Right] > num1[num1Right]) {
            num1[m - 1] = num2[num2Right];    
            num2Right--;        
        } else {
            num1[m - 1] = num1[num1Right];
            num1Right--;
        }
    }
    return num1;
}