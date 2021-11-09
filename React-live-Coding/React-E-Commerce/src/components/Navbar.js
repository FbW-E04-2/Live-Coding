import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { MyContext } from '../App'

export default function Navbar() {
    const {user}=useContext(MyContext)
    return (
        <div>
            <div className="logo">
                <img src="https://image.pngaaa.com/554/811554-middle.png" width="50" alt="" />
            </div>
            <nav>
                <ul>
                   {  user ? <li><Link to="/profile">Profile</Link></li> :
                     <li><Link to="/login">Login</Link></li> } 
                 
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li> 
                    <li><Link to="/cart">Cart</Link></li>
                    
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}
