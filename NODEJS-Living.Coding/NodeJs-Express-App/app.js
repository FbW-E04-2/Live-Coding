const express= require("express")

//create express server
const app = express()

//serve static files
app.use(express.static(__dirname+"/static"))

const PORT = process.env.PORT || 4000;

//routes /endpoints /
app.get("/",(req,res)=>{
  /*   res.write()
    res.end() */
    res.sendFile(__dirname+"/index.html")
})

//routes /endpoints /about
app.get("/about",(req,res)=>{
    res.sendFile("./about.html",{root:__dirname})
    /* res.sendFile(__dirname+"/about.html") */
})

//routes /endpoints /profile
app.get("/profile",(req,res)=>{
    res.sendFile(__dirname+"/profile.html")
})

//routes /endpoints /users
app.get("/users",(req,res)=>{

    const data= {name:"naqvi",age:32}
    /* res.send(data) */
    res.json(data)

   /*  res.sendFile(__dirname+"/data.json") */
})



app.listen(PORT,()=>console.log("server is running on port : ",PORT))