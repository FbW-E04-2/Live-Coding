const mongoose= require("mongoose")
const {Schema}=mongoose


const RecordSchema=new Schema({
    title: {type:String, required:true} ,
    artist:{type:String, required:true},
    year:{type:Number, required:true},
    price:{type:Number, required:true},
    image:{type:String, required:true},
    createAt:{type:Date, default:Date.now}
})


const RecordsCollection= mongoose.model("records",RecordSchema)

module.exports=RecordsCollection