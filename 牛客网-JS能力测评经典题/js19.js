function count(start, end) {
    console.log(start);

    const timer = setInterval(() => {
        if (start >= end) {                
            clearInterval(timer);
        } else {
            console.log(++start);
        }
    }, 100);

    return {
        cancel() {
            clearInterval(timer);
        }
    }
    
}

count(1, 10);