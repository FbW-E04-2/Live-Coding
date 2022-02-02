"use strict";
let userName = "William";
console.log(userName);
let course;
course = "Web Dev";
let age = 23;
console.log(age);
let Status = true;
console.log(Status);
let data;
data = {};
data = [];
data = true;
data = 34;
const Items = ["item1", "item2", "item3"];
const Tasks = ["item1", "item2", "item3"];
const numbers = [1, 2, 3, 4, 5];
const otherNumbers = [1, 2, 3, 4, 5];
const mixedArray = ["string", 23, true, {}];
mixedArray[0] = true;
const TupleArray = ["task1", true, 23];
let unKnownType;
unKnownType = "john";
console.log(unKnownType.toUpperCase());
let unionType = "value";
let numberOne = parseInt("23");
let numberTwo = parseInt("11");
let sum = numberOne + numberTwo;
console.log(sum);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["black"] = 3] = "black";
})(Color || (Color = {}));
let myFavColor = Color.green;
console.log(myFavColor);
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
function printValues(array) {
    array.forEach(item => {
        console.log(item);
    });
    return array;
}
printValues(["task1", "task2", "task3"]);
printValues([1, 3, 5, 7]);
