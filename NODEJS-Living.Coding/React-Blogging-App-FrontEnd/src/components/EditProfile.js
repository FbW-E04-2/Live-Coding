import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/context";
export default function EditProfile() {
  const { user ,setUser} = useContext(MyContext);
const navigate = useNavigate()

  const editProfile = (e) => {
    e.preventDefault();
    let formdata = new FormData(e.target);
    fetch(`http://localhost:4000/users/${user._id}`, {
      method: "PATCH",
      headers: { token: localStorage.getItem("token") },
      body: formdata,
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result);
      if(result.success){
        toast.success("User Profile Updated !")
        setUser(result.data)
        setTimeout(()=>{
          navigate("/profile")
        },1000)
      }else{
        toast.error(result.ḿessage)
      }
    })
  };

  return (
    <div>
      <h1>This is EditPage Page</h1>
      <form onSubmit={editProfile} encType="multipart/form-data">
        <label>
          First Name :{" "}
          <input
            type="text"
            defaultValue={user.firstname}
            name="firstname"
            placeholder="FirstName"
          />
        </label>
        <br />
        <label>
          Last Name :{" "}
          <input
            type="text"
            defaultValue={user.lastname}
            name="lastname"
            placeholder="LastName"
          />
        </label>
        <br />
        <img src={user.image} alt="" width="100" />
        <label>
          Profile image : <input type="file" name="image" />
        </label>
        <br />
        <input type="submit" value="save update" />
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
