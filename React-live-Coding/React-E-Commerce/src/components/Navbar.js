import React, { useContext } from 'react'
import {NavLink} from "react-router-dom"
import { MyContext } from '../App'
import "../css/Navbar.css"

export default function Navbar() {
    const {user}=useContext(MyContext)
    return (
        <div className="navbar">
            <div className="logo">
                <img src="https://image.pngaaa.com/554/811554-middle.png" width="50" alt="" />
            </div>
            <nav>
                <ul>
                   {  user ? <li><NavLink to="/profile" className={(node)=>node.isActive?"active":null}>Profile</NavLink></li> :
                     <li><NavLink to="/login" className={(node)=>node.isActive?"active":null}>Login</NavLink></li> } 
                 
                    <li><NavLink to="/" className={(node)=>node.isActive?"active":null}>Home</NavLink></li>
                    <li><NavLink to="/products" className={(node)=>node.isActive?"active":null}>Products</NavLink></li> 
                    <li><NavLink to="/cart" className={(node)=>node.isActive?"active":null}>Cart</NavLink></li>
                    
                    <li><NavLink to="/contact" className={(node)=>node.isActive?"active":null}>Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
