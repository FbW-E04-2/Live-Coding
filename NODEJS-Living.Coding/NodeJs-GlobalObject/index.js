//ES6 Module system
/* export function sum (a,b){
    return a+b
}
 */


//COMMOMJS module system
/* exports.sum = (a,b)=>{
    return a+b
}
exports.multiply= (a,b)=> {
    return a*b
}
 */
function sum(a,b){
    return a+b
}
function multiply(a,b) {
    return a*b
}

module.exports = {sum,multiply}