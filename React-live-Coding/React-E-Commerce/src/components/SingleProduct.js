import React, { useContext } from 'react'
import {useLocation} from "react-router-dom"

export default function SingleProduct() {

    const {state} = useLocation()

    return (
        <div>
          
             {state && <div>
                <img src={state.image}  width="400" height="400" alt="" />
                <div> 
                    <h1>{state.title}</h1> 
                    <h2>{state.description}</h2>
                    <h3>{state.price}</h3>
                </div>
                   
                  
                
                </div>}
        </div>
    )
}
