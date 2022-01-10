const express = require("express");
const router = express.Router();
const {getOrders,createOrder,updateOrderPut,updateOrderPatch,deleteOrder,getSingleOrder} = require("../controllers/ordersControllers")
/* const data = fs.readFileSync(path.resolve(__dirname, "../models/db.json"),"utf-8")

console.log(JSON.parse(data))
const users = JSON.parse(data).users; */

// CRUD operation
//Create
//Read
//Update
//Delete

router.route("/").get(getOrders).post(createOrder)
router.route("/:id").put(updateOrderPut).patch(updateOrderPatch).delete(deleteOrder).get(getSingleOrder)

/* //Read orders
//endpoint /orders
router.get("/", getOrders );

//Create new order
router.post("/", createOrder );

//Request method PUT (replacing existing resource) and PATCH (updating existing resource)
//Update order
router.put("/:id", updateOrderPut);

//Patch
router.patch("/:id", updateOrderPatch);

//Delete request
//delete order
router.delete("/:id", deleteOrder);

//Read order
//endpoint /orders/:id
router.get("/:id", getSingleOrder); */

module.exports = router;
