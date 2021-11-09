import React, { useEffect, useContext } from "react";
import ReactStar from "react-rating-stars-component";
import { MyContext } from "../App";
import { Link } from "react-router-dom";

export default function Products() {
  const { products, setProducts } = useContext(MyContext);

  console.log(products);



  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => {
        return (
          <div key={product.id} style={{ width: "300px" }}>
            <Link 
            to={`/products/${product.id}`} 
         /*    state={product} */
            >
              <img src={product.image} width="250" height="250" alt="" />
              <h3>{product.title}</h3>
            </Link>
            <h2>$ {product.price}</h2>
            <button>Add To Cart</button>
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
