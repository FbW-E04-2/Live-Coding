
const prompt = require("prompt-sync")()

/* for (let i = 0; i<10  ; i++){

    if(i==5){
        // continue;  //skip that iteration
        break; //exit the loop
    }
    console.log(i)
}
 */

/* let x=0;

while(x<10){
console.log(x)
x++ 
} */

let randomName= "naqvi"
let name = "";

/* while(name !== randomName){
      name = prompt("please guess a name: ")
} */ //check for condition first and execute your code


/* do {
    name = prompt("please guess a name: ")
} while(name !== randomName) // it will execute atleast once

console.log(name) */


/* let input = prompt("please enter any option a,b,c,d,e,f,g" ) */

/* if(input ==="a"){
    console.log("you selected a")
    let i = 0;
    while(i<3){
        console.log("running while loop")
        i++;
    }
}
else if(input === "b"){
    console.log("you selected b")
}
else if(input === "c"){
    console.log("you selected c")
}
else if(input === "d"){
    console.log("you selected d")
}
else if(input === "e"){
    console.log("you selected e")
}
else if(input === "f"){
    console.log("you selected f")
} else if(input === "g"){
    console.log("you selected g")
} else{
    console.log("you selected ")
} */

/* if(){} 
while(){} */
/* 
function whileloop(){
    let i = 0;
    while( i<3){
        console.log("this is while loop")
        i++;
     }
}

switch(input){
    case "a" : whileloop() ;break
    case "add" : console.log("you selected a") ;break 
    case "b" : console.log("you selected b");break 
    case "c" : console.log("you selected c");break 
    case "d" : console.log("you selected d");break 
    case "e" : console.log("you selected e");break 
    case "f" : console.log("you selected f");break 
    case "g" : console.log("you selected g");break 
    default:  console.log("you selected anything")
} */



// bind , call , apply

let obj1 = {
    name:"naqvi",
    age:32
}
let obj2 = {
    name:"Joseph",
    age: 30
}

function printName(){
    console.log("your name is "+  this.name)
}
function sum(a,b,c){
    console.log(a+b+c)
}

sum.call(obj1,2,3,4 ) //calling sum method 
sum.apply(obj1, [2,3,4])//calling sum method 

/* let newSumMethod= sum.bind(obj1, 2,3,4) 
newSumMethod() */
 let newSumMethod= sum.bind(obj1) //returning new method
    newSumMethod(2,3,4) 

/* printName.call(obj2) //calling printName function to our Object

printName.apply(obj2)


let bindedObject= printName.bind(obj1) // bind printName to our Object
bindedObject() */



