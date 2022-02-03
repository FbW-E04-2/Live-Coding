const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000;
require("./passportConfig")
const passport = require("passport")
const mongoose= require("mongoose")


mongoose.connect("mongodb://127.0.0.1:27017/passport-users-database",()=>console.log("connected to db"))


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get("/auth/google",passport.authenticate("google",{scope:["profile"]}) )//open google consent screen 


//redirect
app.get("/auth/google/redirect", passport.authenticate("google"),(req,res)=>{
    res.send("we reached to redirect url")
})

app.listen(PORT, ()=>{console.log("server is running on port 4000");})