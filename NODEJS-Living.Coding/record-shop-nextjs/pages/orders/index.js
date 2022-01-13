import { useContext, useEffect } from "react"
import { MyContext } from "../../components/context/Context"

export default function Orders() {
    const {orders,setOrders}=useContext(MyContext)
    useEffect(()=>{
        fetch("http://localhost:4000/orders",{method:"GET", 
        headers:{"token":localStorage.getItem("token")}
    })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                console.log(result)
                setOrders(result.data)
            }
            })
    },[])

    return (
        <div>
            <h1>Order Page</h1>
            {orders.map(order=>{
                return(
                    <div key={order._id}>
                       {/*  <h3>{order.userid.fullname}</h3>  */}
                        <h1>{order.records.map(product=>{
                            return( <div>{product.recordid.title}</div>)
                        })}</h1>
                        </div>
                )
            })}
        </div>
    )
}
