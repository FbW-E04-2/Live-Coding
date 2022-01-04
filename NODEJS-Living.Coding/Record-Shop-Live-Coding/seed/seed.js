const mongoose = require("mongoose")
const faker = require("faker")
const {Schema} = mongoose

const userSchema = new Schema({
    firstname: {type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true},
})



const UsersCollection = mongoose.model("users",userSchema)


 mongoose.connect("mongodb://127.0.0.1:27017/fbw04-record-shop",()=>console.log("mongo db connected"))


 /* mongoose.connection.useDb("fbw04-record-shop").collection("users").insertOne({name:"hello"}) */
/* mongoose.connection.on("disconnected",()=>console.log("disconnected db"))
mongoose.connection.on("connected",()=>console.log("connected ...."))
mongoose.connection.on("error",(err)=>console.log("error message",err.message)) */

/* for(let i = 0 ;i<20;i++){
    const user = new UsersCollection({
        firstname:faker.name.firstName(),
        lastname:faker.name.lastName(),
        email:faker.internet.email(),
        password:faker.internet.password()
    })
    user.save()
}
 */





/* const user = new UsersCollection({
    firstname:"Naqvi",
    lastname:"Syed",
    email:"test@gmail.com",
    password:123456
}) */
/* console.log(user) */
/* user.save().then((user)=>{
    console.log("user stored in db")
    console.log(user)
}) */

//find all users in db
/*  UsersCollection.find().then((data)=>{
     console.log(data)
 }) */

 //find single user in db
/*  UsersCollection.findOne({email:"Maymie.Koch@gmail.com"}).then(data=>{
     console.log(data)
 })
 */





/* conn.close() */
