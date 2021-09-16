//Array High Order methods

//MAP
//FILTER
//REDUCE


//MAP 
//it returns an Array with the same number of items inside


let number = [1,2,3,4,5,6,7]

let mapArray = number.map(num=>{
        return num*10
    
})

console.log(mapArray)

//FILTER
//it returns an Array with less items
/* let number = [1,2,3,4,5,6,7] */

let filteredArray= number.filter(num=> num!==3 )
console.log(filteredArray)

let cities= [  "Frankfurt","Bonn", "Hamburg","Berlin"]
let UpdatedCitiesArray= cities.filter(city=> (city!=="Berlin" ) && (city!=="Bonn"))  //Berlin !== Berlin = False

console.log(UpdatedCitiesArray)


//REDUCE METHOD
/* let number = [1,2,3,4,5,6,7] */
let sum = 0;
for(let i= 0 ; i<number.length;i++){
    sum= sum+number[i]
}
console.log(sum)

let TotalOfAllNumbers= number.reduce(  (acc , number)=>{
   acc= acc+number 
   return acc
}, 0 )

console.log(TotalOfAllNumbers)

let mixedNumbers= [1,1,1,1,2,2,1,1,2,3,4,5,6,7,5,6,4,3,5,6]
// {"1":6, "2":3 , .... }


let countedOccurances= mixedNumbers.reduce( (acc,number)=>{ 
    if(acc[number]){
        acc[number]++ ; 
    }else{
        acc[number]=1
    }
    return acc
} , {})

console.log(countedOccurances)


let employeesData= [
    {name: "Roi", hours: 34, rate: 21},
    {name: "joy", hours: 35, rate: 17},
    {name: "john", hours: 37, rate: 18},
]

 //result  [ { name: Roi, earned:  }, { } ]
 let totalEarnings= employeesData.reduce((acc, employee)=>{
    let obj = { name: employee.name, earned: employee.hours * employee.rate}
 
       acc.push(obj)
        return acc

   /*  return [...acc, obj] */
} , [])

/* let totalEarnings= employeesData.reduce((acc, employee)=>{
    acc= acc +  employee.hours * employee.rate
    return acc
} , 0)
 */
console.log(totalEarnings)