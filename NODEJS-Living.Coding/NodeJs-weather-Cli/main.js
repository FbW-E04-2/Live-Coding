import axios from "axios"
//dotenv
import dotenv from "dotenv"
dotenv.config();


let [city] = process.argv.slice(2)

/* if(city){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`)
    .then(res=>{
        console.log(`Today's weather in ${res.data.name} is ${res.data.main.temp}°C`)
    })
} */
//bonus task
if(city){
    let requestOne= axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`)
    let requestTwo= axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.API_KEY}&units=metric`)

  /*   Promise.all([requestOne,requestTwo])
    .then(result=>{
        result.forEach(item=>{
            console.log(item.data)
        })
    })
    .catch(err=>console.log(err.message)) */

  Promise.allSettled([requestOne,requestTwo])
    .then(result=>{
        const [result1,result2] = result
        if(result1.status==="fulfilled"){
            console.log(result1.value.data.main.temp) 
            console.log(result1.value.data.name) 
        }else{
            console.log("sorry,promise 1  is rejected")
        }
       if(result2.status==="fulfilled"){
         console.log(result2.value.data)
       }else{
        console.log("sorry,promise 2 is rejected")
    }
      
    })

}

//Promise.race([promise1,promise2,promise3]).then(winPromise=>console.log(winPromise))

/* function promiseOne(){
    return (new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I am resolved ,promise one")
        },3000)
    }))
}

function promiseTwo(){
    return (new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I am resolved ,promise Two")
        },4000)
    }))
}
function promiseThree(){
    return (new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I am resolved ,promise Three")
        },6000)
    }))
} */

//
/* Promise.race([promiseOne(),promiseTwo(), promiseThree() ])
.then(result=>console.log(result)) */