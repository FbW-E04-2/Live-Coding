import React,{useContext} from 'react';
import toast, {Toaster} from 'react-hot-toast';
import {useNavigate} from "react-router-dom"
import {MyContext} from "../context/context"

export default function Login() {
  const navigate = useNavigate()
  const {setUser}= useContext(MyContext)

  const loginUser=(e)=>{
    e.preventDefault()

    let formdata = new FormData(e.target)

  
    fetch("http://localhost:4000/users/login", {method:"POST", body:formdata})
    .then(res=>   {
      const token = res.headers.get("token")
      localStorage.setItem("token",token)
      return res.json()})
    .then(result=>{
      if(result.success){
        console.log(result);
        toast.success("Login Successfully !")
        setUser(result.data)
       setTimeout(()=>{
        navigate("/blogs")
       },1000)
      }else{
        toast.error(result.message.email, result.message.password)
      }
      
    })
  
  }
  
  
    return <div>
      
      <h1>This is Login Page</h1>
      <form onSubmit={loginUser}>
        
        <label>Email : <input type="email" name="email" placeholder="Email" /></label><br />
        <label>Password : <input type="password" name="password" placeholder="Password" /></label><br />
       
        <input type="submit" value="register"/>
      </form>
      <Toaster
    position="top-center"
    reverseOrder={false}
  />
    </div>;
}
