let box1= document.querySelector(".box1")
let box2= document.querySelector(".box2")
let box3= document.querySelector(".box3")

document.body.addEventListener("click",(e)=>{
    console.log(e.target, "e.target")
    //e.target element you clicked on
    console.log(e.currentTarget, "e.currentTarget")
    //e.currentTarget element producing that event
    //element on which you attach eventlistener
})


/* box1.addEventListener("click",(e)=>{
    console.log(e)
    console.log("clicked on box 1")
    e.stopPropagation()
})


box2.addEventListener("click",(e)=>{
    console.log("clicked on box 2")
    e.stopImmediatePropagation()
    //stop bubbling and stop next event attached to same element
})

box2.addEventListener("click",(e)=>{
    console.log("clicked box 2")
    box2.style.width="230px"
})

box3.addEventListener("click",(e)=>{
    console.log("clicked on box 3")
    //stop propogation
    e.stopPropagation()
}) */



//process of executing events is called propogation