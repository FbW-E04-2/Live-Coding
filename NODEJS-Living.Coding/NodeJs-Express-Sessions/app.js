const express = require("express")
const app = express()
const session = require("express-session")
const jwt = require("jsonwebtoken")
const MongoSessionStorage= require("connect-mongodb-session")(session)
const mongoose = require("mongoose")


mongoose.connect("mongodb://127.0.0.1:27017/express-session-storage-data")

let store = new MongoSessionStorage({
    uri:"mongodb://127.0.0.1:27017/express-session-storage-data",
    collection:"session-data"
})

app.use(express.json())

 // mongoose
 // connect-mongodb-session

app.use(session({
    name:"my-express-session",
    store: store , 
    secret:"secret-key",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:(1000*60*60*24), //expiy time for cookies
        httpOnly:true ,//only server can read cookies
    }
}))


//counting how many times user visited that page 

app.get("/",(req,res)=>{
    console.log(req.session.cookie);
    if(req.session.count){
       req.session.count++; 
    }else{
        req.session.count=1
    }
    
   res.send({count : req.session.count, id :req.session.id})
})


app.post("/login",(req,res)=>{
    const {email,password}= req.body
    let data ={email:"test@gmail.com", password:"123"}
    if(email===data.email && password ===data.password){
        const token = jwt.sign({email:email},"secretvalue")
        req.session.authenticated=true
        req.session.token=token

        res.cookie("token",token).send("authenticated")
    }else{
        res.send("password or email doesnot match")
    }

})

app.get("/logout",(req,res)=>{
    req.session.destroy(()=>{
        console.log("session destroyed : session ended");
    })
})

app.get("/products",(req,res,next)=>{
    if(req.session.authenticated){
        const decode = jwt.verify(req.session.token,"secretvalue")
        if(decode){
           next()  
        }
       
    }else{
        res.send("you are not authenticated")
    }
 },  (req,res)=>{
    res.send({products:"all products"})
})


app.listen(4000, ()=>console.log("server is running on port 4000"))