const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const db = require("../models/db");
const UsersCollection= require("../models/UsersSchema")

/* const data = fs.readFileSync(path.resolve(__dirname, "../models/db.json"),"utf-8")

console.log(JSON.parse(data))
const users = JSON.parse(data).users; */

// CRUD operation
//Create
//Read
//Update
//Delete

//Read Users
//endpoint /users
router.get("/", async (req, res,next) => {
  try{
    const users = await UsersCollection.find()
    res.send({success:true, data: users}); 
  }
  catch(err){
    next(err)
  }
 
});

//Create new User
router.post("/", async (req, res,next) => {
  try{
    const user = new UsersCollection(req.body)
    await user.save()
    res.json({success:true, data:user });
  }
  catch(err){
    next(err)
  }


 
});

//Request method PUT (replacing existing resource) and PATCH (updating existing resource)
//Update user
router.put("/:id", (req, res,next) => {
  const user = db
    .get("users")
    .find({ id: Number(req.params.id) })
    .assign({...req.body})
    .write()
    if(user){
      res.send({success:true, data:db.get("users").value()}) 
    }else{
        next()
    }
});

//Patch
router.patch("/:id", (req, res,next) => {
  console.log(req.body)
    const user = db
    .get("users")
    .find({ id: Number(req.params.id) })
    .assign({...req.body})
    .write()
    if(user){
       res.send({success:true, data:db.get("users").value()}) 
    }else{
      const err= new Error("no such user found")
      err.status=404
        next(err)
    }
});

//Delete request
//delete user
router.delete("/:id", (req, res,next) => {
  const user =db.get("users").find({id:Number(req.params.id)}).value()
  if(user){
     db.get("users").remove({id:Number(req.params.id)}).write()
     
  res.send({success:true, data: db.get("users").value() });
  }else{
    const err= new Error("there is no such user with that id")
    /* err= {message:"there is no such user with that id" } */
    err.status=404
     /* err= {message:"there is no such user with that id",status:404 } */
    next(err)
  }
 
});

//Read User
//endpoint /users/:id
router.get("/:id", (req, res,next) => {
  const user = db
    .get("users")
    .find({ id: Number(req.params.id) })
    .value();
    console.log(user)
  if (user) {
    res.status(200).send(user);
  } else {
    const err = new Error("no such user available")
    next(err)
  }
});

module.exports = router;
