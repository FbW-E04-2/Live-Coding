const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const axios = require("axios");
const { createClient } = require("redis");

const client = createClient();

client.on("error", (err) => {
  console.log(err.message);
});

client.connect();

app.get("/users", async (req, res) => {
    //check users in cache(Redis)
  const existingUsers = await client.get("users");
    if(existingUsers){
        res.send({users:existingUsers})
    }else{
        const response= await axios.get("https://jsonplaceholder.typicode.com/users")
        await client.set("users",JSON.stringify(response.data))
        res.send({users:response.data})
    }
  
});

app.listen(PORT, () => console.log(`server is running on PORT: ${PORT}`));
