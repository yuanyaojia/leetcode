/**
 *  取HTML中使用频率最高的标签类型
 */

function tag(nodeList) {
    let res = {};
    let num = 0;
    let resNum = 0;

    for(let i = 0; i < nodeList.length; i++) {
        let result = nodeList[i];
        if (result.children === result.children.tagName) {
            res[result.tagName] = num++;
        } else {
            res[result.tagName] = resNum++;
        }
    }
    return res;
}

const nodeList = [{tagName: 1, children: {tagName: 2, children: {tagName: 2, children: null}}}];
console.log(tag(nodeList));