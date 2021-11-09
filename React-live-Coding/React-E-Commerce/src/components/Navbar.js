import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <div className="logo">
                <img src="https://image.pngaaa.com/554/811554-middle.png" width="50" alt="" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li> 
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}
