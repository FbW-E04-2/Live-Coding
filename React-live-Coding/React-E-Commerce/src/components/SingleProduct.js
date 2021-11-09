import React, { useContext } from 'react'
import {useParams} from "react-router-dom"
import { MyContext } from '../App'

export default function SingleProduct() {
    const params = useParams()

    const {products}= useContext(MyContext)

    let Item= products.find(item=>item.id==params.id)


    return (
        <div>
            {Item && <div>
                <img src={Item.image}  width="400" height="400" alt="" />
                <div> 
                    <h1>{Item.title}</h1> 
                    <h2>{Item.description}</h2>
                    <h3>{Item.price}</h3>
                </div>
                   
                  
                
                </div>}
        </div>
    )
}
