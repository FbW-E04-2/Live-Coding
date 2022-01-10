const OrdersCollection= require("../models/OrdersSchema")


//get all orders
const getOrders= async (req, res,next) => {
    try{
      const orders = await OrdersCollection.find()
      .populate("userid","firstname lastname -_id")
      .populate("records.recordid","title price artist -_id")
  
      res.send({success:true, data: orders}); 
    }
    catch(err){
      next(err)
    }
   
  }

//create new order
  const createOrder= async (req, res,next) => {
    try{
      const order = new OrdersCollection(req.body)
      await order.save()
      res.json({success:true, data:order });
    }
    catch(err){
      next(err)
    } 
  }

const updateOrderPut=async (req, res,next) => {
    try{
      const order = await OrdersCollection.findByIdAndUpdate(req.params.id, req.body,{new:true})
      res.send({success:true,data:order})
    }
    catch(err){
      next(err)
    }
  
  }


const updateOrderPatch=async (req, res,next) => {
    try{
      const order = await OrdersCollection.findByIdAndUpdate(req.params.id, req.body,{new:true})
      res.send({success:true,data:order})
    }
    catch(err){
      next(err)
    }
  }

const deleteOrder=async (req, res,next) => {
    try{
      const order = await OrdersCollection.findByIdAndDelete(req.params.id)
      res.send({success:true,data:order})
    }
    catch(err){
      next(err)
    }
    
   }

   const getSingleOrder=async(req, res,next) => {
    try{
      const order = await OrdersCollection.findOne({_id:req.params.id})
      .populate("userid","-password")
        .populate("records.recordid","title price artist -_id")
    
      res.send({success:true,data:order})
    }
    catch(err){
      next(err)
    }
     
    }

  module.exports={getOrders, createOrder, updateOrderPut,updateOrderPatch,deleteOrder,getSingleOrder}