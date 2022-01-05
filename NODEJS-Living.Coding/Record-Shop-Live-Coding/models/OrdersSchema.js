const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  records: [
    {
      recordid: { type: mongoose.Schema.Types.ObjectId, ref: "records" },
      quantity: { type: Number },
    },
  ]
});

const OrdersCollection = mongoose.model("orders", orderSchema);

module.exports = OrdersCollection;
