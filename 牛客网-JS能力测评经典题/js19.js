function count(start, end) {
    console.log(start);

    for (let i = start; i <= end; i++) {
        const timer = setTimeout(() => {
            console.log()
    
        }, 100);
        clearTimeout(timer);
    }
}

console.log(count(1, 10));