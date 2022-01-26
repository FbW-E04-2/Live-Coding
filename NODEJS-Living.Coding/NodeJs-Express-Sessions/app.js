const express = require("express")
const app = express()
const session = require("express-session")
const jwt = require("jsonwebtoken")
app.use(express.json())

 // mongoose
 // connect-mongodb-session

app.use(session({
    name:"my-express-session",
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
   /*  console.log(req.session.cookie);
    req.session.count++; */
   res.send({count :"hello world" /* req.session.count */})
})


app.post("/login",(req,res)=>{
    const {email,password}= req.body
    let data ={email:"test@gmail.com", password:"123"}
    if(email===data.email && password ===data.password){
        const token = jwt.sign({email:email},"secretvalue")
        req.session.authenticated=true
        req.session.token=token

        res.send("authenticated")
    }else{
        res.send("password or email doesnot match")
    }

})

app.get("/products",(req,res,next)=>{
    if(req.session.authenticated){
        const decode = jwt.verify(token)
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