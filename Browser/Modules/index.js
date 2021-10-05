
//AMD by require.js
//UMD {//CommonJS by node
//ES6 Module }


//script
//module is a single js file.
//Directive keywords
//import and export

//if you want to share something ,you will export

//if you want to use anything ,you will import


//CommonJS
/* const {sum,multiply}=require("./math.js") */



// ES6 syntax
/* import * as main from "./math.js" */
import {sum as sum2Num,multiply} from "./math.js" //named import
/* import * as elements from "./targetElement.js" */
//named import
import {number1,number2,button,span} from "./targetElement.js"


import hW, {sum as sum3Num} from "./defaultExports.js"


console.log(sum2Num(2,3))
console.log(sum3Num(3,4,5))
console.log(hW())

/* console.log(main)
console.log(elements) */

 button.addEventListener("click",()=>{
    let total=sum(Number(number1.value), Number(number2.value))

    span.innerText=total
}) 