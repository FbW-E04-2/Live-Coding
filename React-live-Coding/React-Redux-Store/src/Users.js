import React from 'react';
import { useDispatch, useSelector } from 'react-redux';



export default function Users() {
   const {users} = useSelector(state=>state)
   const dispatch = useDispatch()
   
  return <div>
      <h1>Users Component</h1>
      <button onClick={()=>dispatch((dispatch)=>{
        fetch("https://reqres.in/api/users?page=2")
        .then(res=>res.json())
        .then(result=>{
            dispatch( { type:"getusers",payload:result.data } )
        })
   })}>Get Users</button>
      {users.map(user=>{
          return(
              <div><h1>{user.first_name}</h1> 
                    <img src={user.avatar} width="200" alt="" />
              </div>
          )
      })}
  </div>;
}
