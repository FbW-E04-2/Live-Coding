// javascript runtime environments
// Browser and Node
// Context

//window is a global Object in browser
 console.log(window)
/*window.console.log(window.console) */


//built-in Objects in javascript
/* Math
Array
String
Object
parseInt
JSON
... */


//Methods inside window object
//alert (enter message)
//prompt (use to get input from user)
//confirm (ask yes/no)

/* alert("{name:'john'}") */


/* let name = prompt("please enter your name") //return string value
alert(name) */


/* let check = confirm("do you really want to leave this page") //return boolean value

if(check){
    window.close()
}else{
    console.log("you clicked cancel")
} */



//what is DOM
/* Document Object Model */
// API
//document object


/* let student = {
    name:"micheal",
    age:23,
    printName: function(){ console.log(this.name)}
}
student.height= 180cm
student.name="John"

console.log(student.name)
student.printName() */

/* console.dir(document.all[8])
document.all[8].innenText= "text changed"
document.all[8].className = "header" */




console.dir(document)

//NODES and ELEMENTS

//All tags inside html is called elements
//every thing in html is called node
//all html elements are node as well.

//methods
//document.getElementById() return single element
//document.getElementsByClassName() return HTMLCollection
//document.getElementsByTagName() return HTMLCollection
//document.querySelector() return single/first element comes within DOM tree
//document.querySelectorAll() return NodeList

document.getElementById("head").innerText= "Changed Text"
let allH2= document.getElementsByTagName("h2")
console.dir(allH2[0])

allH2[0].style.backgroundColor= "black"
allH2[0].style.color= "white"

allH2[1].style.textAlign="center"


let allPara= document.getElementsByClassName("para")

console.dir(allPara)
/* for(let i= 0 ; i<allPara.length; i++){
    allPara[i].style.backgroundColor="green"
} */

let convertedArrayElements= /* [...allPara] */  Array.from(allPara)
console.log(convertedArrayElements)

convertedArrayElements.forEach(elem=>{
    elem.style.backgroundColor="purple"
})
//qeurySelector ypou use css selector
let strong = document.querySelector(".paragraph strong") //it will return only first element into DOM tree

strong.style.color="red"

/* let listItems= document.getElementsByTagName("li")
listItems[0].style.backgroundColor="green" */

let listItems= document.querySelector("li:nth-child(1)")
listItems.style.backgroundColor="green"


console.log(document.querySelectorAll(".para")) //NODELIST (only forEach method will work with nodelist)
document.querySelectorAll(".para").forEach(elem=>{
    elem.style.fontSize="30px"
})


/* document.querySelector(".para") => h2 */