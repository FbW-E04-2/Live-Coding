//callback is function you pass as an argument to another function


//Where and Why

/* function createRandomNumber(){
    return Math.floor(Math.random()*10)
}

function printRandomNumber(number){
    console.log(number)
}

let number = createRandomNumber()


printRandomNumber(number) */

/* function createRandomNumber(){
    return Math.floor(Math.random()*10)
}

function printRandomNumber(cb){
    console.log(cb())
}

printRandomNumber(createRandomNumber) */



//lets make a coffee

/* function boiledWater(AC, AS, AM){
    setTimeout(()=>{
         console.log("water boiled") 
         AC(AS, AM)
    },5000)
}
function addCoffee(AS, AM){
    setTimeout(()=>{
          console.log("added coffee into hot water")
          AS(AM)
    },1000)
  
}
function addSugar(AM){
    setTimeout(()=>{
        console.log("adding sugar in coffee")
        AM()
    },2000)
   
}
function addMilk(){
    setTimeout(()=>{
         console.log("adding milk")
    console.log("your coffe is ready!")
    },1000)
   
}
boiledWater(addCoffee, addSugar,addMilk) */


//Promise Constructor
//help you to create chaining process
//placeholder for code/data in asynchronous coding

/* new Promise((resolve, reject)=>{}) */

//3 states for promise
//fulfilled - resolved
// Rejected - rejected
// Pending- 
/* let MyPromise= new Promise((resolve,reject)=>{
    //resolve and reject they both are function
    let status= true;
    if(status){
        resolve("take this data outside of the promise")
    }else{
        reject("it is rejected because status is false")
    }
}) */

/* let MyPromise= new Promise((resolve,reject)=>{
    //resolve and reject they both are function
    setTimeout(()=>{
            resolve(["item1","item2"])
    },3000)

}) */


/* MyPromise.then(result=> result.forEach(item=>console.log(item))) */
/* .then(()=>console.log("hello "))
.then(()=>console.log("world ")) */
/* .catch(err=>console.log(err)) */



/* btn.addEventListener("click",   ()=>{}   ) */

/* Array.map((number)=>{}) */ /* depending on each iteration */

/* setTimeout(()=>{}, 2000) */



//this function depending on user
/* function createUserProfile(user){
    console.log(user.first_name)
    console.log(user.email)
    console.log(user.id)
}

function fetchingData(cb){
    fetch("https://reqres.in/api/users?page=2")
    .then(res=>res.json())
    .then(result=> cb(result.data[2]) )
}

fetchingData(createUserProfile) */



//lets make a coffee
/*  function MakeCoffee(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("water boiled") 
            resolve()
       },5000)
   })
}
 function addCoffee(){
    console.log("addcoffee")
  return new Promise((resolve,reject)=>{setTimeout(()=>{
          console.log("added coffee into hot water")
          resolve()
    },1000) })  
} 
 function addSugar(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        console.log("adding sugar in coffee")
        resolve()
    },2000) 
    }) 
} 
 function addMilk(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("adding milk")
       console.log("your coffe is ready!")
       },1000)
    })
   
} 

   
MakeCoffee().then(()=>addCoffee()).then(()=>addSugar()).then(()=>addMilk()) */

