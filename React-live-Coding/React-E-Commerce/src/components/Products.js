import React, { useEffect } from 'react'

export default function Products() {



    const fetchProducts = async()=>{
        let res= await fetch("https://fakestoreapi.com/products")
        let data = await res.json()
        console.log(data)
    }

    useEffect( ()=>{
        //componentDidMount
        fetchProducts()  
    },[])

    
    return (
        <div>
            <h1>Products page</h1>
        </div>
    )
}
