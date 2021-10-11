// we are sending request to server ,from that server we receive a user.
//once we have user ,we send one more request to server to get more details(user images) about that user


function getUser(){
   let FirstPromise= new Promise((resolve,reject)=>{
    setTimeout(() => {
  console.log("sending first request to get our user data");
  let user = {
    name: "John",
    age: 23,
    id:432
  };
  if(user){
     resolve(user)  
  }else{
      reject("we receive error from server")
  }
 
}, 5000);
}) 
return FirstPromise
}


function fetchMoreDetails(user){

let secondPromise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(user){
           console.log("send second request to our server to get more details about that user") 
          resolve("We get all details about that user")
          }else{
          console.log("we dont have any user yet.")
          reject("error occur")
      }
  },2000)  
  })
  return secondPromise
}



/* getUser()
.then(result=>fetchMoreDetails(result) )
.then(data=>console.log(data)) 
.catch(err=>console.log(err)) */

/* .catch(callback) */


//async await 
//returns promise
//await keyword you can't use outside of async function
//try{} catch(){}
/*  async function print(){
     try {
           let user = await getUser() //wait until this promise gets resolved or rejected
           let finalResult = await fetchMoreDetails(user)
        console.log(finalResult) 
     } catch(err){
         console.log(err)
     }
 
}
print() */

/* console.log("start")
console.log(print()) //1
console.log("end")  */



async function fetchData (){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        let result = await response.json()
   
    result.forEach(user=>{
        let h1= document.createElement("h1")
        h1.innerText= user.name;
        document.body.append(h1)
    })
    console.log(result)
      }
    catch(err){
        console.log(err)
    }
    
}


 fetchData()