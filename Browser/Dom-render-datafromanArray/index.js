/*  let li = document.getElementById("listitem") */


//traversing (jumping from one element to another within DOM tree)


/* li.parentElement.style.border="2px solid black"


li.previousElementSibling.style.backgroundColor="red"

li.nextElementSibling.style.backgroundColor="green" */
/* 
li.nextElementSibling.nextElementSibling.style.backgroundColor="yellow" */

let users = [
    {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg"
    },
    {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg"
    },
    {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg"
    },
    {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg"
    },
    {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg"
    },
    {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg"
    }
    ]

{/*                 <div>
                    <h2> micheal </h2>
                    <p>email address</p>
                    <img src="" alt="">
                     </div> */}
let main = document.querySelector(".main")
main.style.display="flex"

    users.forEach(user=>{
        let div = document.createElement("div")
        let h2 = document.createElement("h2")
        let p = document.createElement("p")
     /*    p.style.backgroundColor="gray" */
        let img = document.createElement("img")

        h2.innerText= user.first_name //<h2> Michael </h2>
        p.innerText= user.email // <p>michael.lawson@reqres.in</p>
        img.src=user.avatar  // <img src="https://reqres.in/img/faces/7-image.jpg" />
    
        div.append(img, h2, p)
        main.append(div)
    
    })

    let targetPara = document.querySelector("p")
    targetPara.parentElement.nextSibling.nextSibling.children[2].style.backgroundColor="green"

 /*    let div = document.querySelector("div:nth-child(4)")
    div.style.border="3px solid red"


    let div = document.querySelector("div")
    div.children[3].style.border="3px solid red" */