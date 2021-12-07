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

// CRUD operation
//Create
//Read
//Update
//Delete


//Read Users
//endpoint /users
router.get("/",(req,res)=>{
    res.send(users)
})

//Create new User
router.post("/",(req,res)=>{
    console.log(req.body)
    users.push(req.body)
    res.send("new user is created" )

})

//Request method PUT (replacing existing resource) and PATCH (updating existing resource)
//Update user
router.put("/:id", (req,res)=>{
    const user = users.find((item)=>item.id===Number(req.params.id))
    if(user){
         user.first_name= req.body.first_name
         user.last_name=req.body.last_name 
         user.email= req.body.email 
         user.avatar=req.body.avatar 
        res.send("user updated successfully")
    }else{
        res.send("no such user found")
    }
   
})

//Patch
router.patch("/:id",(req,res)=>{
    const user = users.find((item)=>item.id===Number(req.params.id))
    let updatedUser = {...user, ...req.body}
    const index= users.indexOf(user)
    users.splice(index,1,updatedUser)
    res.send("user updated successfully")
   
})

//Delete request
//delete user
router.delete("/:id",(req,res)=>{
    const user = users.find((item)=>item.id===Number(req.params.id))
    const index= users.indexOf(user)
    users.splice(index,1)
    res.send("user deleted successfully")
})



//Read User
//endpoint /users/:id
router.get("/:id", (req,res)=>{
    const user = users.find(elem =>elem.id === Number(req.params.id))
    if(user){
        res.status(200).send(user)
    }else{
        res.status(404).send("no such user avaiable in our system")
    }
    
})





module.exports=router