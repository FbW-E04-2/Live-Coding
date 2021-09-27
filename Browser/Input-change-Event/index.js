/* let secondInput = document.getElementById("inp")
let firstInput= document.querySelector("input") */

/* console.dir(input) */
//click
//focus 
//click and focus same
/* function abc(){
    console.log("object")
}
 */
//input
//keyup   
//input and keyup same



//keydown will execute handler before filling input value inside the input field
//used in games


/* input.addEventListener("click",()=>{
    console.log("clicked in input field")
}) */

/* input.addEventListener("focus",()=>{
    console.log("focused in input field")
}) */


/* secondInput.addEventListener("input",(e)=>{
    console.log("input in input field")
    console.log(firstInput.value)
    console.log(e.target.value)

    console.log(parseInt(firstInput.value) + parseInt(e.target.value))
}) */

/* input.addEventListener("keydown",()=>{
    console.log("keydown in input field")
}) */


//change event 
// select option
// range input 
// checkbox
// radio button

let select = document.querySelector("select")

select.addEventListener("change",(e)=>{
    document.querySelector(".box").style.backgroundColor=e.target.value
})

let range = document.querySelector("input")

range.addEventListener("change",(e)=>{
    document.querySelector("h3").style.fontSize=e.target.value+"px"
    console.log(e.target.value)
})

let skills= Array.from(document.querySelectorAll("input[type=checkbox]"))


skills.forEach(skill=>{
    skill.addEventListener("change",(e)=>{
        let mySkills= skills.map(sk=>{
            if(sk.checked){
                return sk.value
            }else{
                return null
            }
        }).filter(item=>item)
        console.log(mySkills)
        document.querySelector("h2").innerText= mySkills.length!==0 ? `your skills are ${mySkills.join()}`: ``
    })
   
})