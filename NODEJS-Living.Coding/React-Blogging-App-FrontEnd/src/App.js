
import React, { useContext } from 'react';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import Home from "./components/Home"
import Blogs from "./components/Blogs"
import Users from "./components/Users"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Profile from "./components/Profile"
import { MyContext } from './context/context';
import CreateBlog from './components/CreateBlog';
function App() {
  const {isRegistered,user} = useContext(MyContext)
  return (
     
      <BrowserRouter>
    <div className="App">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        
        
        {user ?  <><li><NavLink to="/users">Users</NavLink></li>
        <li><NavLink to="/createblog">Create Blog</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li></> : <><li><NavLink to="/login">Login</NavLink></li>
        {!isRegistered &&<li><NavLink to="/signup">Signup</NavLink></li> }</> }
        
      </ul>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/createblog" element={<CreateBlog/>}/>
    </Routes>

    </div>
    </BrowserRouter>

  );
}

export default App;