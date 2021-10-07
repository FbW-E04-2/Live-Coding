// asychronous coding  non-blocking code

fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data=>console.log(data))


//Synchronous code  // blocking code
console.log("line 1")
console.log("line 2")
console.log("line 3")


// asychronous coding  non-blocking code
setTimeout(()=>{
    console.log("console from setTimeout1 taking 5s")
    console.log(new Date().getTime())
},5000)
setTimeout(()=>{
    console.log("console from setTimeout2 taking 5s")
    console.log(new Date().getTime())
},5000)

/* function printname(){
    console.log("print name")
}

printname()
*/
//blocking code
/* for(let i=0; i<10000000000;i++){

} */
 
console.log("end")


/* Btn.addEventListener("click",()=>{
    console.log("user clicked")
}) */



//All synchronous code will execute before asynchronous code