/**
 * 分割url以键值对方式输出
 * @param {url} url 
 * @returns res
 */

function urlSplit(url) {
    let res = {};
    const urlArr = url.split('?');
    const urlRes = urlArr[1].split('&');
    for(let i = 0; i < urlRes.length; i++) {
        let urlResult = urlRes[i].split("=");
        res[urlResult[0]] = urlResult[1];
    }
    return res;
}


const url = "https://www.baidu.com/?name=zhangsan&age=11"
console.log(urlSplit(url));