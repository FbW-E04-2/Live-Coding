import React, { useEffect, useState } from 'react';
import { MyContext } from './context';

export default function Container({children}) {

    const [user,setUser]=useState(null)
    const [isRegistered, setIsRegistered]=useState(false)
    const [blogs, setBlogs]=useState([])
    const [comments,setComments]=useState([])


    useEffect(()=>{
      fetch("http://localhost:4000/blogs")
      .then(res=>res.json())
      .then(result=>{
        if(result.success){
          setBlogs(result.data)
        }else{
          console.log(result.message);
        }
      })

      const token = localStorage.getItem("token")
      if(token){
        fetch("http://localhost:4000/verifytoken",{method:"GET", headers:{token:token}})
        .then(res=>res.json())
        .then(result=>{
          if(result.success){
            setUser(result.data)
            setIsRegistered(true)
          }else{
            console.log(result.message);
          }
        })
      }

    },[])


  return <MyContext.Provider value={{user,setUser,blogs, setBlogs,comments,setComments,isRegistered, setIsRegistered }}>
      {children}
  </MyContext.Provider>;
}
