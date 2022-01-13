import { useContext } from "react"
import { MyContext } from "../components/context/Context"
import { useRouter } from "next/router"

export default function Cart() {
    const {cart,setCart,user}=useContext(MyContext)
    const router = useRouter()
    const deleteItem=(record)=>{
       const updatedCartItems= cart.filter(item=>item._id!==record._id) 
       setCart(updatedCartItems)
    }

    const placeOrder=()=>{
        const orderItems= cart.map(record=>{
            return {recordid: record._id, quantity:1}
        })

        let order= {
            records:orderItems,
            userid:user._id
        }
        fetch("http://localhost:4000/orders", {
            method:"POST",
            headers:{"Content-Type":"application/json","token":localStorage.getItem("token")},
            body:JSON.stringify(order)
        }).then(res=>res.json())
        .then(result=>{
            if(result.success){
                setCart([])
                router.push("/")
            }
        })
    }
    return (
        <div>
            <h2>Cart Items</h2>
            {cart.map(record=>{
                return(
                    <div key={record._id}>
                        <h2>{record.title}</h2>
                        <h3>$ {record.price}</h3>
                        <button onClick={()=>deleteItem(record)}>remove item</button>
                    </div>
                )
            })}
            <button className="button" onClick={placeOrder}> checkout</button>
        </div>
    )
}
