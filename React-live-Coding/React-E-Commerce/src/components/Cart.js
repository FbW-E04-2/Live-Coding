import React, { useContext } from 'react'
import { MyContext } from '../App'

export default function Cart() {
    const {cart} = useContext(MyContext)
    console.log(cart)
    return (
        <div style={{margin:"0 auto", width:"80%",textAlign:"center",background:"linear-gradient(30deg,black,yellow)",color:"white",boxShadow:"5px 5px 20px black"}}>
            <h1 style={{backgroundColor:"black"}}>Your Cart Items</h1>
            {cart.map(item=>{
                return(
                    <div style={{display:"flex",justifyContent:"center",borderBottom:"2px dotted gray",padding:"10px"}}>
                        <div className="image" >
                            <img style={{borderRadius:"50%",boxShadow:"2px 2px 10px gray"}} src={item.image}  width="100" height="100 "alt="" />
                        </div>
                        <div className="desc" style={{width:"60%",padding:"10px"}}>
                            <h3>{item.title}</h3>
                            <p>{item.quantity}</p>
                        </div>
                        <div className="price">
                            <h1>$ {item.price}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
