function par(n){
    if(n % 2 == 0){
        return true;
    }
    return false;
}

console.log(par(5))
console.log(par(4))
console.log(par(8))

module.exports = par;