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
let userName = "William";
console.log(userName);
let course;
course = "Web Dev";
// type number
let age = 23;
console.log(age);
// type boolean
let Status = true;
console.log(Status);
// null and undefined
let localdata = null;
localdata = { id: "123", name: "Hanry" };
// any
let data;
data = {};
data = [];
data = true;
data = 34;
// array of string type
const Items = ["item1", "item2", "item3"];
const Tasks = ["item1", "item2", "item3"];
// array of number type
const numbers = [1, 2, 3, 4, 5];
const otherNumbers = [1, 2, 3, 4, 5];
//array of any type
const mixedArray = ["string", 23, true, {}];
mixedArray[0] = true;
// tuple
const TupleArray = ["task1", true, 23];
// unknown
let unKnownType;
unKnownType = "john";
/* unKnownType=true */
//Type Assertion
//Type Casting
console.log(unKnownType.toUpperCase());
//Union type
let unionType = "value";
//from input field
let numberOne = parseInt("23");
let numberTwo = parseInt("11");
let sum = numberOne + numberTwo;
console.log(sum);
//enum Type
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["black"] = 3] = "black";
})(Color || (Color = {}));
let myFavColor = Color.green;
console.log(myFavColor);
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
let Employee = {
    name: "Nils",
    age: 23,
    salary: 2000,
    city: "Berlin",
    contactNumber: 097293334332,
    anyfield: "abc",
    course: "web dev",
    duration: 12
};
function greetUser(name, age) {
    return { name: name, age: age };
}
greetUser("Robert", 34);
const printUser = (name, age) => ({ name: name, age: age });
const createStudent = (name, age, course, duration) => ({ name, age, course, duration });
createStudent("Robin", 23, "Marketung", 12);
//Gereric Type (Dynamic Type)
/* function printValues (array:number[]) : number[] {
    array.forEach((item:number)=>{
        console.log(item);
    })
    return array
}
 */
function printValues(array) {
    array.forEach(item => {
        console.log(item);
    });
    /*  console.log(array.length); */
    return array;
}
printValues(["task1", "task2", "task3"]);
printValues([1, 3, 5, 7]);
/* function sum(a,b){
    console.log(a+b);
}
sum("h",3)
sum(4,5) */
