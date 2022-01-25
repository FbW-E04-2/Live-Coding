import React from 'react';
import { Routes, Route, NavLink} from "react-router-dom"
import Home from "./Home"
import Blogs from "./Blogs"
import Users from "./Users"
import Login from "./Login"
import Signup from "./Signup"
import Profile from "./Profile"
import CreateBlog from './CreateBlog';
import EditProfile from './EditProfile';


export default function MainRoutes() {
  return  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/blogs" element={<Blogs/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/profile" element={<Profile/>}>
        <Route path="/profile/editprofile" element={<EditProfile/>}/> 
  </Route>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/users" element={<Users/>}/>
  <Route path="/createblog" element={<CreateBlog/>}/>
  <Route path="/createblog" element={<CreateBlog/>}/>
  
</Routes>
;
}
