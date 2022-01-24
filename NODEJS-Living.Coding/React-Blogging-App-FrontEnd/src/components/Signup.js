import React, { useContext } from 'react';
import toast, {Toaster} from 'react-hot-toast';
import {useNavigate} from "react-router-dom"
import { MyContext } from '../context/context';

export default function Signup() {
const navigate = useNavigate()
const {setIsRegistered} = useContext(MyContext)

const signupUser=(e)=>{
  e.preventDefault()
  console.log(e.target);
  let formdata = new FormData(e.target)
  fetch("http://localhost:4000/users", {method:"POST", body:formdata})
  .then(res=>res.json())
  .then(result=>{
    if(result.success){
      console.log(result);
      toast.success("Registered Successfully !")
      setIsRegistered(true)
     setTimeout(()=>{
      navigate("/login")
     },1000)
    }else{
      toast.error(result.message.firstname)
    }
    
  })

}


  return <div>
    
    <h1>This is Signup Page</h1>
    <form onSubmit={signupUser} encType="multipart/form-data">
      <label>First Name : <input type="text" name="firstname" placeholder="First Name" /></label><br />
      <label>Last Name : <input type="text" name="lastname" placeholder="Last Name" /></label><br />
      <label>Email : <input type="email" name="email" placeholder="Email" /></label><br />
      <label>Password : <input type="password" name="password" placeholder="Password" /></label><br />
      <label>Profile image : <input type="file" name="image" /></label><br />
      <input type="submit" value="register"/>
    </form>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
  </div>;
}
