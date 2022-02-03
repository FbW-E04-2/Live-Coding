const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema= new Schema({
    id:{type:String},
    displayName:{type:String},
    image:{type:String}
})


module.exports= mongoose.model("users",UserSchema)