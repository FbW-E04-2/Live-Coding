const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const UsersCollection = require("../models/UsersSchema");
const validationMiddlewares = require("../middlewares/ValidationRules");
const { validationResult } = require("express-validator");
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
router.get("/", async (req, res, next) => {
  try {
    const users = await UsersCollection.find();
    res.cookie("testing","special code").send({ success: true, data: users });
  } catch (err) {
    next(err);
  }
});

//Create new User
router.post("/", validationMiddlewares , async (req, res, next) => {
  try {
    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    console.log(hashPassword);
    const user = new UsersCollection({ ...req.body, password: hashPassword });
    await user.save();
    res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
});

//Request method PUT (replacing existing resource) and PATCH (updating existing resource)
//Update user
router.put("/:id", async (req, res, next) => {
  try {
    const user = await UsersCollection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send({ success: true, data: user });
  } catch (err) {
    next(err);
  }
});

//Patch
router.patch("/:id", async (req, res, next) => {
  try {
    const user = await UsersCollection.findById(req.params.id);
    user.firstname = req.body.firstname;
    user.save();
    res.send({ success: true, data: user });
  } catch (err) {
    next(err);
  }
});

//Delete request
//delete user
router.delete("/:id", async (req, res, next) => {
  try {
    const user = await UsersCollection.findByIdAndDelete(req.params.id);
    res.send({ success: true, data: user });
  } catch (err) {
    next(err);
  }
});

//Read User
//endpoint /users/:id
router.get("/:id", async (req, res, next) => {
  try {
    const user = await UsersCollection.findOne({ _id: req.params.id });
    /* console.log(`${user.firstname} ${user.lastname}`) */
    res.send({ success: true, data: user });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
