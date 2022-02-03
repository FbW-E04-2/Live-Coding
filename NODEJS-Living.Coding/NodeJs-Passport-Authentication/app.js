const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 4000;
require("./passportConfig")
const passport = require("passport")
const mongoose= require("mongoose");
const UserSchema = require("./UserSchema");


mongoose.connect("mongodb://127.0.0.1:27017/passport-users-database",()=>console.log("connected to db"))


//initialize passport
passport.initialize()

//initial passport session
passport.session()


//setting view engine in app
app.set("view engine", "ejs")

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get("/auth/google",passport.authenticate("google",{scope:["profile"]}) )//open google consent screen 


//redirect
app.get("/auth/google/redirect", passport.authenticate("google"),(req,res)=>{
    console.log(req.user);
  /*   res.send({user:req.user}) */
    res.redirect(`/profile/${req.user.id}`)
})

app.get("/profile/:id",async (req,res)=>{
    const user = await UserSchema.findOne({id:req.params.id})

    res.render("profile",{user:user})
})



//github
app.get("/auth/github",passport.authenticate("github",{scope:["user:email"]}) )//open github consent screen 

//redirect github
app.get('/auth/github/redirect', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect(`/profile/${req.user.id}`)
  });

app.listen(PORT, ()=>{console.log("server is running on port 4000");})