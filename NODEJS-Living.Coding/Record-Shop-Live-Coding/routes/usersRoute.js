const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const db = require("../models/db");

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
router.get("/", (req, res) => {
  const users = db.get("users").value();
  res.send(users);
});

//Create new User
router.post("/", (req, res) => {
  db.get("users").push(req.body).write();
  res.send("new user is created");
});

//Request method PUT (replacing existing resource) and PATCH (updating existing resource)
//Update user
router.put("/:id", (req, res) => {
  const user = db
    .get("users")
    .find({ id: Number(req.params.id) })
    .assign({...req.body})
    .write()
    if(user){
       res.send(user) 
    }else{
        res.send("no such user found")
    }
});

//Patch
router.patch("/:id", (req, res) => {
    const user = db
    .get("users")
    .find({ id: Number(req.params.id) })
    .assign({...req.body})
    .write()
    if(user){
       res.send(user) 
    }else{
        res.send("no such user found")
    }
});

//Delete request
//delete user
router.delete("/:id", (req, res) => {
  db.get("users").remove({id:Number(req.params.id)}).write()
  res.send("user deleted successfully");
});

//Read User
//endpoint /users/:id
router.get("/:id", (req, res) => {
  const user = db
    .get("users")
    .find({ id: Number(req.params.id) })
    .value();
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send("no such user avaiable in our system");
  }
});

module.exports = router;
