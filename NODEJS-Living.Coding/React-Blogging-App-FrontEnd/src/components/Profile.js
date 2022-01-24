import React, { useContext } from 'react';
import { MyContext } from '../context/context';

export default function Profile() {
  const {user}=useContext(MyContext)
  return <div>
    {user && <>
    <h1>Welcome ,{user.fullname}</h1>
    <h3>{user.email}</h3>
    
    <img src={user.image} alt="" />
    <h3>Account creation date: {user.createAt}</h3>
    </> }
    
    </div>;
}
