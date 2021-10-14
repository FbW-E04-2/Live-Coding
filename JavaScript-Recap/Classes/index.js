//letaral way

let obj = {
    name:"John",
    age:34
}

//functional way
function createObject(name,age){
    return {
        name,age
    }
}

let obj1= createObject("Naqvi",34)
/* console.log(obj1) */
/* new Date
new Object
new Promise */

//creating constructor
/* function Person(status,name,age){
    this.status= status;
    this.name=name;
    this.age=age
}

Person.prototype.summary=function(){
    console.log(`My name is ${this.name}, I am ${this.status} in DCI,and my age is ${this.age} `)
} */

/* let person = new Person("teacher","Naqvi",34) //=> {}

console.log(person)
person.summary() */


//ES6 => classes

class Person{

    constructor(status,name,age){
        //instance properties/members
        this.status= status;
        this.name=name;
        this.age=age;
        /* this.arguments= [...arguments] */

      
    }
     //prototype members
    getDetail(){
            console.log("hello")
        }
    //prototype members
    summary(){
        console.log(`My name is ${this.name}, I am ${this.status} in DCI,and my age is ${this.age} `)
    }

  /*   .. 
    10 more methods
    ... */
}
let person = new Person("teacher","Naqvi",34) //=> {}
console.log(person)
/* let person = new Person("teacher","Naqvi",34) 
let person = new Person("teacher","Naqvi",34) 
let person = new Person("teacher","Naqvi",34) 
... 
...  */



//sub-class
class Student extends Person{
    constructor(name,age,classname){
        super("student",name, age)
        this.classname=classname
    }

}
//sub-sub-class
 class Teacher extends Person{
    constructor(name,age,classname,salary){
        super("teacher",name, age)
        this.classname=classname
        this.salary=salary
    }
}

let teacher = new Teacher("Naqvi",34,"fbw-e04-2",2000)

 console.log(teacher)
teacher.summary()



let student = new Student("Misbah",23,"fbw32")
console.log(student)
student.summary()




class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
        tasks:["task 1","task 2","task 3"]
    }
    }
 
    

    render(){
        return(
            <h1>Hello World</h1>
        )
    }
}