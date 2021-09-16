//SCOPES

//local (block)
//global
//lexical


let userName = "John" //global Scoped variable


/* function outer(){
    let studentClass="fbw-E04" //local scoped variable

    function printname(){
        let age = 23;
        console.log(userName)// global scoped variable
        console.log(age) //local scoped variable
        console.log(studentClass) //lexical scoped variable
        } 
        printname()

}

outer() */

//closure
/* function outer(){
// lexical scoped area
        let x= 2;
        return function inner(){   
            let y= 3;
                    return function mostInner(){
                        return y
                    }
                    
        }
       
}

let returnedFunc = outer()  ()   ()
console.log(returnedFunc) */
/* let mostInnerOne = returnedFunc()

mostInnerOne() */
//working with spread
//spread operator after = sign
let number = [1,2,3,4,5,6]
let random=[3,5,7,9]

let mergedArray= [...number, ...random, 2324] 
/* console.log(mergedArray) */

let obj1= { name:"mike"}
let obj2 = { age:23, country:"Syria" }

let mergedObj= {...obj1, ...obj2, /* age:24  */ city:"berlin" }
/* console.log(mergedObj)
console.log(obj1)
console.log(obj2) */

//Rest operator
let array= [ 1,2,3,4,5,6,7]   //let obj= { name: "mikeal"}
//destructuring         
let [a,b, ...g] = array             // let {name} = obj

console.log(a,b,g)
