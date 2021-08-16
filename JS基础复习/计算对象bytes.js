const objectWeakMap = new WeakSet();

function sizeOfObject(object) {
    const keys = Object.keys(object);

    return keys.reduce((res, cur) => {
        const curValue = object[cur];
        if (typeof curValue === "object" && null) {
            if (objectWeakMap.has(curValue)) {
                return res;
            }
            objectWeakMap.add(curValue);
        }

        res += sizeOf(cur);
        res += sizeOf(curValue);

        return res;
    }, 0);
}
function sizeOf(object) {
    if (object === null) return 0;

    switch (typeof object) {
        case "number":
            return 8;
        case "boolean":
            return 4;
        case "string":
            return object.length * 2;
        case "object":
            if (Array.isArray(object)) {
                return object.reduce((res, cur) => res + sizeOf(cur));
            }
            return sizeOfObject(object);
        default:
            return 0;
    }
}

console.log(
    sizeOf({
        a: 111,
        b: "ccc",
        222: false,
    })
);
