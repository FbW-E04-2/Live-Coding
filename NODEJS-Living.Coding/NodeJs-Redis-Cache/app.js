const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const axios = require("axios");
const mongoose = require("mongoose")
const { createClient } = require("redis");

mongoose.connect("mongodb://127.0.0.1:27017/new-record-shop",()=>{
    console.log("connected to database");
})
const client = createClient();

client.on("error", (err) => {
  console.log(err.message);
});

client.connect();

app.get("/records", async (req, res) => {
    //check users in cache(Redis)
  const existingRecords = await client.get("records");
    if(existingRecords){
        res.send({records:JSON.parse(existingRecords)})
    }else{
        /* const response= await axios.get("https://jsonplaceholder.typicode.com/users")
        await client.set("users",JSON.stringify(response.data)) */

       let records = await mongoose.connection.useDb("new-record-shop").collection("records").find().toArray()
       await client.set("records",JSON.stringify(records))

        res.send({records:records})
    }
  
});

app.listen(PORT, () => console.log(`server is running on PORT: ${PORT}`));
