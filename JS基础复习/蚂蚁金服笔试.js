var data = [
    {userId: 8,  title: 'title1'},
    {userId: 11, title: 'other'},
    {userId: 15, title: null},
    {userId: 19, title: 'title2'}
];

var find = function (origin) {
    // your code are here...

    this.origin = origin;
    this.data = origin;

    if (new.target) {
        return this;
    }
    return new find(origin);
};

find.prototype.where = function (options) {
    this.filterResult = this.data.filter((item) => {
        return Object.keys(options).reduce((prev, curr) => {
            const currOpt = options[curr];
            if (getType(currOpt) === 'RegExp') {
                return currOpt.test(item[curr]);
            }
            return item[curr] === currOpt;
        }, false);
    });

    return this;
};

find.prototype.orderBy = function (key, type) {
    return this.filterResult.sort((a, b) => {
        const va = a[key];
        const vb = b[key];
        return type === "desc" ? vb - va : va - vb;
    });
};

function getType(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
}

// 查找 data 中，符合条件的数据，并进行排序
var result = find(data).where({
    'title': /\d$/
}).orderBy('userId', 'desc');

console.log(result);// [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];
