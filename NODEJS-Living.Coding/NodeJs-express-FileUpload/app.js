const express = require("express");
const app = express();
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const ImagesCollection = require("./ImageSchema");
const UsersCollection = require("./UerSchema");
const stream = require("stream")
/* const fs = require("fs") */
const PORT = process.env.PORT || 4000;

//mongoose connection
mongoose.connect("mongodb://127.0.0.1:27017/express-file-uploader-app",()=>console.log("db connected ...."))


//middlewares
//parsing json data
/* app.use(express.json())
//parsing form-encoded data
app.use(express.urlencoded({extended:true})) */

//multipart/form-data
app.use(fileUpload());

// endpoint "/"
app.get("/", (req, res) => {
  res.send({ message: "server is ready" });
});

//Endpoint "/image"
app.post("/register", async (req, res) => {
    let image ="http://joeshoe.com/v1/";
  if (req.files) {
    image = new ImagesCollection({
      filename: `${Date.now()}_${req.files.image.name}`,
      file: {
        data: req.files.image.data,
        mimetype: req.files.image.mimetype,
      },
    });
    await image.save()    
  }
  const user = new UsersCollection({
      firstname:req.body.firstname,
      lastname:req.body.lastname,
      email:req.body.email,
      password:req.body.password,
      image:`http://localhost:4000/images/${image.filename}`
  })

  await user.save()
  res.send({success:true,data:user})
  
});

app.get("/images/:filename",async (req,res)=>{
    const image = await ImagesCollection.findOne({filename:req.params.filename})
    const readStream= stream.Readable.from(image.file.data)
    // readstream.pipe(writestream)
   readStream.pipe(res) 
     /*   let writeStream=  fs.createWriteStream(`./${req.params.filename}`)
       readStream.pipe(writeStream) */
})


app.listen(PORT, () => console.log(`server is runnung on port: ${PORT}`));
