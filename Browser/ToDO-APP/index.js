
let button = document.querySelector("button")
let input = document.querySelector("input")
let ul = document.querySelector("ul")

function addtask(){

        let li = document.createElement("li")
        let span= document.createElement("span")
        span.innerText= "X" //<span>X</span>
        li.innerText= input.value //<li> task 2 </li>
        li.append(span)//<li> task 2  <span>X</span> </li>

        //parentNode.insertBefore( newElement, targetElement)

        ul.insertBefore(li, ul.firstElementChild)
        input.value=""
} //Event Handler

button.addEventListener("click", addtask )

