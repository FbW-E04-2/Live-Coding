export  function sum(a,b,c){
    return a+b+c
} //named export  
// import {sum} from "./defaultExports.js"

export default function helloWorld(){
    return "hello world"
}//default export
// import anyname from "./defaultExports.js"

//in a module we can have only one default export but multiple named exports