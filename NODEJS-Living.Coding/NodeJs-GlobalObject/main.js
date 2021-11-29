/* console.log(global)
console.log(module)
console.log(process) 
console.log(__dirname)*/

/* //ES6 Module System
import React from "./index.js"
import {useState,useEffect} from "./index.js"
export default hello; 
export {sum};

//CommonJS module system
const abc = require("./index.js")
const {sum,multiply} = require("./index.js")
module.exports = sum //default export
module.exports= {multiply} //named export */


/* import {sum} from "./index.js"


console.log(sum(3,4)) */


//COMMONJS
/* const {sum,multiply} = require("./index.js")

console.log(sum(3,4))
console.log(multiply(2,3)) */


/* console.log(process.argv) */
/* if(process.argv[2]==="sum"){
    console.log(process.argv[3]+process.argv[4]+process.argv[5]+process.argv[6])
} */

/* let cmdVariables= process.argv.slice(2) */
/* console.log(cmdVariables) */
/* const [operation, ...numbers] = cmdVariables */
/* console.log(operation)
console.log(numbers) */
/* if(operation==="sum"){
    let total= numbers.reduce((acc,num)=>{
        acc+=Number(num)
        return acc
    },0)
    console.log(total)
}else if(operation==="multiply"){
    let product= numbers.reduce((acc,num)=>{
        acc= acc * Number(num)
        return acc
    },1)
    console.log(product)
}else{
    console.log("please provide a valid operation ----")
} */
import axios from "axios"
import chalk from "chalk"
/* console.log(process.argv) */
const cmd = process.argv.slice(2)

const [method, howMany] = cmd;

if(method==="fetch"){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=> {
        let users= res.data.slice(0,howMany)
        users.map(user=>{
            console.log(`hi , ${user.name}`)
        })
    })
}else{
    console.log(chalk.bgRed("please use fetch as your third argument"))
}