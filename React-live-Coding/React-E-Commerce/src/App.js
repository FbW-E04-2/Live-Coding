import React, {createContext,useState} from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Contact from "./components/Contact"
import SingleProduct from "./components/SingleProduct"
import Cart from "./components/Cart"
import NotFound from "./components/NotFound"
import Products from "./components/Products"

//Context API
export const MyContext = createContext()

function App() {


  const [user,setUser]=useState(null)
  const [products,setProducts]=useState([])
  const [cart,setCart]=useState([])


  return (
    <MyContext.Provider value={{user,setUser,products,setProducts,cart,setCart}}>
    <HashRouter>
      <div className="App">
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/products/:productname" element={<SingleProduct/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </HashRouter>
    </MyContext.Provider>
  );
}

export default App;
