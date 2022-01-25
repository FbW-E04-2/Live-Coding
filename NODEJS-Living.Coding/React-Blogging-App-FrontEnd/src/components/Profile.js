import React, { useContext } from 'react';
import { Link ,Outlet } from 'react-router-dom';
import { MyContext } from '../context/context';


export default function Profile() {
  const {user}=useContext(MyContext)
  return <div>
    
    {user && <>
    <h1>Welcome ,{user.fullname}</h1>
    <h3>{user.email}</h3>
    
    <img src={user.image} alt="" width="200" />
    <h3>Account creation date: {user.createAt}</h3>
    <Link to="/profile/editprofile">Edit Profile</Link>
    </> }
   <Outlet/>
    </div>;
}
