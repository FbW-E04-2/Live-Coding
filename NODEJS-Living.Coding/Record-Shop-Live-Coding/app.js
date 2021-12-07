const express =require("express")

//create express server
const app = express()
const indexRoute = require("./routes/indexRoute")
const usersRoute = require("./routes/usersRoute")
//set Port
const PORT = process.env.PORT || 4000;

//express middleware to parsing json data 
app.use(express.json())


//index route
app.use("/", indexRoute)
app.use("/users", usersRoute)



//listening for any request coming on port 4000
app.listen(PORT, ()=>console.log(`server is running on : ${PORT}`))






//middleware function
/* app.use((req,res,next)=>{
    if(req.method==="GET" || req.method==="POST"){
         next() 
    }else{
        res.send("we support only get and post requests")
    }
}) */



//MVC architecture design pattern
// M stands for MODEL (database)
// V stands for VIEW (frontend)
// C stands for CONTROLLER (functionality)
/* The Model contains only the pure application data, it contains no logic describing how to present the data to a user.
The View presents the model’s data to the user. The view knows how to access the model’s data, but it does not know what this data means or what the user can do to manipulate it.
The Controller exists between the view and the model. It listens to events triggered by the view (or another external source) and executes the appropriate reaction to these events. In most cases, the reaction is to call a method on the model. Since the view and the model are connected through a notification mechanism, the result of this action is then automatically reflected in the view. */
