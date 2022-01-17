const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose")
const multer = require("multer")
const fs = require("fs")

//gridfs-stream
//multer-gridfs-stream


const storage= multer.diskStorage(  {
    destination: (req,file,cb)=>{
        if(file.mimetype==="image/jpeg" || file.mimetype==="image/png" || file.mimetype==="video/mp4"){
          cb(null, "./images")  
        }else{
            cb("we dont support any other format")
        }     
    },
    filename: (req,file,cb)=>{
        cb(null,`${new Date().getTime()}_${file.originalname}` )
    }

}   ) 


const upload = multer({storage})

app.use(express.json())
app.use(express.urlencoded({extended:true}))


let ImageBucket;

mongoose.connect("mongodb://127.0.0.1:27017/files-database", ()=>{
    console.log("connected to db")
    //creating mongodb bucket
    ImageBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, 
        {bucketName:"test-images" } )
   
})


app.post("/image",upload.single("image") ,(req,res,next)=>{
    console.log(req.body)
    console.log(req.file)
    //create write stream to store data
    const writeStream = ImageBucket.openUploadStream(req.file.filename)
    fs.createReadStream(`./images/${req.file.filename}`).pipe(writeStream)


    res.send({success:true, message:"file uploaded", url:`http://localhost:4000/image/${req.file.filename}`})
})

app.get("/image/:filename",(req,res,next)=>{
    console.log(req.params.filename)
    //reading data in stream from mongodb 
    ImageBucket.openDownloadStreamByName(req.params.filename).pipe(res)
})





app.listen(PORT, ()=>console.log(`server is running on port :${PORT}`))







