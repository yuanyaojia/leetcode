function promiseAll(promises) {
    return new Promise(function(resolve, reject) {
        if (!Array.isArray(promises)) {
            return reject(new TypeError('error'));
        }

        var resolvedCouter = 0;
        var promiseNum = promises.length;
        var resolvedValues = new Array(promiseNum);
    
        for(var i = 0; i < promiseNum; i++) {
            (function(i) {
                Promise.resolve(promises[i].then(function(value) {
                    resolvedCouter++;
                    resolvedValues[i] = value;

                    if (resolvedCouter === promiseNum) {
                        return resolve(resolvedValues);
                    }
                }, 
                    function(reason) {
                        return reject(reason);
                    }
                ))
            })(i)
        }
    });
} 