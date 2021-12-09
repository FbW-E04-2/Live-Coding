const express = require("express")
const app = express()
const mysql =require("mysql")
const PORT = process.env.PORT || 4000;

app.use(express.json())

const connection = mysql.createConnection({
    host     :'localhost',
   user     : 'root',
   password : 'Naqvi@123',
   database : 'dci' 
})

connection.connect((err)=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log("connection to mysql established !")
    }
})

app.get("/showdatabases", (req,res)=>{
    connection.query(`show databases;`, (err,table, fields)=>{
        if(err){
            console.log(err.message)
        }else{
            res.send(table)
        }
    })
})

app.post("/addnewclass", (req,res)=>{
    const keys= Object.keys(req.body)
    const values= Object.values(req.body)

    connection.query(`
    insert into classes 
    (${keys[0]}, 
    ${keys[1]}, 
    ${keys[2]}) 
    values 
    (
    "${values[0]}", 
    ${values[1]}, 
    ${values[2]});`, 
    (err,table, fields)=>{
        if(err){
            console.log(err.message)
        }else{
            res.send(table)
        }
    })
})



app.get("/getallclasses", (req,res)=>{
    connection.query(`select * from classes;`, (err,table, fields)=>{
        if(err){
            console.log(err.message)
        }else{
            res.send(table)
        }
    })
})



app.listen(PORT, ()=>console.log("server is running on port :",PORT))

