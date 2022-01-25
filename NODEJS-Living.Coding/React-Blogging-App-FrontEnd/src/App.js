
import React, { useContext } from 'react';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import MainRoutes from './components/MainRoutes';
import { MyContext } from './context/context';

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
    <MainRoutes/>
    </div>
    </BrowserRouter>

  );
}

export default App;