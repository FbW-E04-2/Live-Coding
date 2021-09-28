//Event Delegation

//Event delegation is a technique to eficiently handling events

//instead of attaching eventa to each and similar elements we can attach single event listener to parent element


/* let h1 = document.querySelector("h1")

h1.addEventListener("click",()=>{
    h1.style.backgroundColor="green"
})

let p= document.querySelectorAll("p") //nodeList

p.forEach(para=>{
    para.addEventListener("click",()=>{
        para.style.backgroundColor="yellow"
    })
}) */

document.body.addEventListener("click", (e)=>{
    switch(e.target.tagName){
        case "H1": 
                e.target.style.backgroundColor="green"; break;
        case "P":
                e.target.style.backgroundColor="yellow";break;I
        case "LI":
                e.target.style.border="2px solid green";break;
    }
})