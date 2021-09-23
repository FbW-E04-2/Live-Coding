
let form = document.querySelector("form")
let input = document.querySelector("input")
let ul = document.querySelector("ul")

/* ul.addEventListener("click",()=>{
    console.log("clicked on ul")
    ul.style.backgroundColor="gray"
})
 */


//whenever there is an event occurs inside a browser ,Event Object is created

function addtask(e){
    console.log(e)
    e.preventDefault() //Stop default behavior of the form

    if(input.value.trim()===""){ 
        alert("please enter something in input field")
    }else{
        let li = document.createElement("li")
        let span= document.createElement("span")
        span.innerText= "X" //<span>X</span>
        span.addEventListener("click", ()=>{
            console.log("clicked on span")
            ul.removeChild(span.parentElement)
        })

        //attaching event listener to my li
        li.addEventListener("click", ()=>{
            console.log("clicked on li")
            li.style.backgroundColor="green"
        })
        li.innerText= input.value //<li> task 2 </li>
        li.append(span)//<li> task 2  <span>X</span> </li>

        //parentNode.insertBefore( newElement, targetElement)

        ul.insertBefore(li, ul.firstElementChild)
       /*  input.value="" */
        form.reset()
    }
       
} //Event Handler

form.addEventListener("submit", addtask ) // work for click and enter as well

//submit => form  