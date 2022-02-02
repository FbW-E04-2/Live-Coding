//TypeScript

//benefit 

//1. superset of JS
//2. open source
//3. IDE support
//4. static type
//5. it will catch errors in realTime/development


//logical error (your code will execute without any error but you will get expected output)

/* let numbers = [2,3,4,6,8] 
let sum = numbers.reduce((acc,num)=>{
    acc= acc+num
    return acc
},0)
console.log(sum); */



//TypeScript Type

// type string

let userName:string = "William"; 
console.log(userName);

let course : string;
course="Web Dev"

// type number

let age:number = 23;
console.log(age);


// type boolean

let Status:boolean = true ;
 console.log(Status);

// null and undefined
/* let localdata:object= null;
localdata={id:"123",name:"Hanry"} */


// any
let data:any;
data={}
data=[]
data=true
data=34

// array of string type
const Items : string[] = ["item1","item2","item3"]

const Tasks : Array<string> = ["item1","item2","item3"]

// array of number type

const numbers : number[] = [1,2,3,4,5]
const otherNumbers : Array<number> = [1,2,3,4,5]


//array of any type
const mixedArray : any[] = ["string",23,true, {}]
mixedArray[0]=true

// tuple
const TupleArray : [string,boolean,number]=["task1",true, 23]

// unknown
let unKnownType:unknown;
unKnownType="john"
/* unKnownType=true */
//Type Assertion
//Type Casting
console.log((unKnownType as string).toUpperCase());


//Union type
 let unionType : string | number   = "value"

 //from input field
 let numberOne: string | number  = parseInt("23")
 let numberTwo: string | number  = parseInt("11")
 let sum:number = numberOne+ numberTwo
console.log(sum);

//enum Type

enum Color {red,green,blue,black}
let myFavColor:Color = Color.green;
console.log(myFavColor);

//interface //class
/* class EmployeeType {} */
interface EmployeeType {
    name:string,
    age:number,
    salary:number,
    city:string,
    contactNumber:number,
} 
interface EmployeeType {
    anyfield:string
} 

 interface UserType extends EmployeeType{
     course:string,
     duration:number
}
//type 
/* type EmployeeType = {
    name:string,
    age:number,
    salary:number,
    city:string,
    contactNumber:number
}
type UserType = {
    course:string,
    duration:number
}
type MixedType = EmployeeType & UserType  */

// object

let Employee: UserType = {
    name:"Nils",
    age:23,
    salary:2000,
    city:"Berlin",
    contactNumber: 097293334332,
    anyfield:"abc",
    course:"web dev",
    duration:12
}



// function
interface returnedUser {
    name:string,
    age:number
}

function greetUser(name:string,age:number):returnedUser{
    return {name:name,age:age}
}
greetUser("Robert",34)

const printUser:Function = (name:string,age:number):returnedUser =>({name:name,age:age} )

interface StudentType{
    name:string,
    age:number,
    course:string,
    duration:number
}

const createStudent:Function=(name:string, age:number,course:string, duration:number):StudentType=>({name,age,course,duration})

createStudent("Robin",23,"Marketung",12)

//Gereric Type (Dynamic Type)

/* function printValues (array:number[]) : number[] {
    array.forEach((item:number)=>{
        console.log(item);
    })
    return array 
}
 */
function printValues <T>(array:T[]) : T[] {
    array.forEach(item=>{
        console.log(item);
    })
   /*  console.log(array.length); */
    return array 
}

printValues <string> (["task1","task2","task3"])
printValues <number> ([1,3,5,7])

/* function sum(a,b){
    console.log(a+b);
}
sum("h",3)
sum(4,5) */




