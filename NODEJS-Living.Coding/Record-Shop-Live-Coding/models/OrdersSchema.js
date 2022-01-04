const mongoose=require("mongoose")
const {Schema}=mongoose

const OrderSchema=new Schema({
    record:{type:String},
    quantity:{type:Number}
})


const OrdersCollection= mongoose.model("orders",OrderSchema)


module.exports=OrdersCollection