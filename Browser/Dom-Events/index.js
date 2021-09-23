//Events

// any action taken by the user inside the browser is called event.
//click
//mouseover
//mouseenter
//mouseleave

let h1 = document.querySelector("h1")
let p = document.querySelector("p")


/* h1.onclick= null */ // by default
h1.onclick = function(e){
    console.log(e)
    console.log("user clicked")
    p.style.border="10px solid gray"
    let img = document.createElement("img")
    img.width="300"
    img.src= "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg"
    p.append(img)

} //event handler





/* p.onmouseenter =  function(e){
    console.log(e)
    p.style.backgroundColor="yellow"
} //event handler
 */

//SEcond way to attach event with elements


function paraClicked(){
    p.style.backgroundColor="yellow"
}

//Third way to attach event to an element
/* Element.addEventListener(eventname, eventhandler) */
p.addEventListener("mouseover", function(){ 
    p.classList.toggle("para")
} )

// every time event occurs event object is created



document.addEventListener("click", ()=>{
    document.body.style.backgroundColor="red"
})

/* 
window.addEventListener("resize", ()=>{
   if(window.innerWidth< 760){
       document.body.style.backgroundColor="green"
   }
}) */

