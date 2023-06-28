/**
 *
 * @param {any[]} children
 * @return {*}
 */
function splitChildren(children){
    let newArray = [];
    let index = -1;
    for (let i = 0; i < children.length; i++) {
        if( i % 5 === 0){
            newArray.push([children[i]]);
            index++;
        }else{
            newArray[index].push(children[i])
        }
    }
    return newArray;
}
