const express = require("express")
const router = express.Router()

let users = [ 
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
        }
]

//endpoint /users
router.get("/",(req,res)=>{
    res.send(users)
})

//endpoint /users/:id
router.get("/:id", (req,res)=>{
    const user = users.find(elem =>elem.id === Number(req.params.id))
    if(user){
        res.status(201).send(user)
    }else{
        res.status(404).send("no such user avaiable in our system")
    }
    
})

module.exports=router