//sort method => UTF-15 code /uHQs

let array = ["b","c","h","a","d"]

array.sort()

/* console.log(array) */

let Numbers= [2,1,3,12,23] // [A,B,C, AB, BC]

/* Numbers.sort((a,b)=>{
    if(a>b){
        return 1
    }else{
        return -1
    }
}) */  //Function inside sort is called compare function

         
Numbers.sort((a,b)=>a-b)

console.log(Numbers)

let users = [
    {name:"Ali Raza", age:23}, {name:"Zohaib Rob",age:34},{name:"Misbah Haq",age:21}
]

let newUsersArray= users.map(user=> {
    user.name = user.name.split(" ").reverse().join(" ")
    console.log(user)
    return user
})
/* console.log(newUsersArray) */

newUsersArray.sort((a,b)=>{
    if( a.name > b.name){
        return 1
    }else{
        return -1
    }
})

console.log(newUsersArray)