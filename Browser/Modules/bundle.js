let number1 = document.querySelector("#number1")
let number2 = document.querySelector("#number2")
let button = document.querySelector("button")
let span = document.querySelector("span")


function sum(a,b){
    return a+b
} //named export


function multiply(a,b){
    return a*b
} //named export



button.addEventListener("click",()=>{
    let total=sum(Number(number1.value), Number(number2.value))

    span.innerText=total
}) 

