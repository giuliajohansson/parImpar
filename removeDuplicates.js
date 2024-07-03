function removeDuplicates(arr){
    let ret = []
    for(let i = 0; i < arr.length; i++){
        if(ret.indexOf(arr[i]) == -1){
            ret.push(arr[i])
        }
    }

    return ret;
}
function removeDuplicates2(arr){
    return [...new Set(arr)]
}

module.exports = removeDuplicates;