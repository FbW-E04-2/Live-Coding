const express = require("express")
const router = express.Router()
const path=require("path")
const fs = require("fs")

const data = fs.readFileSync(path.resolve(__dirname, "../models/db.json"),"utf-8")

console.log(JSON.parse(data))
const users = JSON.parse(data).users;

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
    fs.writeFileSync(
        path.resolve(__dirname, "../models/db.json"), 
        JSON.stringify({users},null, 2)
        )
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