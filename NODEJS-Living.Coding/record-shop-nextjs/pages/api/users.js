

export default function handler(req,res){
    if(req.method==="POST"){
        res.send("post request received on next server") 
    }else if(req.method==="GET"){
       res.send("Hello From NextJs server") 
    }
    
}