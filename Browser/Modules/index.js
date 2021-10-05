
//AMD by require.js
//UMD {//CommonJS by node
//ES6 Module }


//script
//module is a single js file.
//Directive keywords
//import and export

//if you want to share something ,you will export

//if you want to use anything ,you will import



//module uses "use strict" by default (top level scope)

//CommonJS
/* const {sum,multiply}=require("./math.js") */

// ES6 syntax
/* import * as main from "./math.js" */
import {sum ,multiply} from "./math.js" //named import
/* import * as elements from "./targetElement.js" */
//named import
import {number1,number2,button,span} from "./targetElement.js"


 button.addEventListener("click",()=>{
    let total=sum(Number(number1.value), Number(number2.value))

    span.innerText=total
}) 



