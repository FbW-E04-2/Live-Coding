import React, {  useContext } from "react";
import ReactStar from "react-rating-stars-component";
import { MyContext } from "../App";
import { Link } from "react-router-dom";

export default function Products() {
  const { products, cart,setCart } = useContext(MyContext);

/*   console.log(products); */


const AddToCart=(product)=>{
    //if this product already exist inside our cart
   let checkItem = cart.find(elem=>elem.title===product.title)

    if(checkItem){
        let copyItem= {...checkItem}
        copyItem.quantity++;
        let updatedItem=cart.map(prod=> {
            if(prod.title===copyItem.title){
                return copyItem
            }else{
                return prod
            }
        })
        setCart(updatedItem)
    }else{ 
        let copyProduct= {...product}
        copyProduct.quantity=1 ; 
        setCart([...cart, copyProduct])
     } 
   
}

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>

   
      {products.map((product) => {
        return (
          <div key={product.id} style={{ width: "300px",margin:"50px",padding:"10px", boxShadow:"5px 2px 20px gray" ,borderRadius:"10px",textAlign:"center"}}>
            <Link 
            to={`/products/${product.id}`} 
            state={product}
            >
              <img src={product.image} width="250" height="250" alt="" />
              <h3>{product.title}</h3>
            </Link>
            <h2>$ {product.price}</h2>
            <button onClick={()=>AddToCart(product)}>Add To Cart</button>
            <ReactStar
              count={5}
              size={24}
              activeColor="#ffd700"
              value={product.rating.rate}
              isHalf={true}
              edit={false}
            />
          </div>
        );
      })}


    </div>
  );
}
