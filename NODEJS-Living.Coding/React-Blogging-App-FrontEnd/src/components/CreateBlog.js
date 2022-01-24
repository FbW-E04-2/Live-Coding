import React, { useContext } from "react";
import toast, {Toaster} from "react-hot-toast";
import { MyContext } from "../context/context";
import {useNavigate} from "react-router-dom"

export default function CreateBlog() {
  const { user } = useContext(MyContext);
  const navigate =useNavigate()

  const addBlog = (e) => {
    e.preventDefault();
    let formdata = new FormData(e.target);

    formdata.append("userid", user._id);

    fetch("http://localhost:4000/blogs", {
      method: "POST",
      headers: { token: localStorage.getItem("token") },
      body: formdata,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          console.log(result);
          toast.success("Published Successfully !")
          setTimeout(()=>{
              navigate("/blogs")
          },1000)
        }else{
            toast.error(result.message)
        }
      });
  };

  return (
    <div>
           <Toaster
    position="top-center"
    reverseOrder={false}
  />
      <form onSubmit={addBlog} encType="multipart/form-data">
        <label>
          Title : <input type="text" name="title" placeholder="Title" />
        </label>
        <br />
        <label>
          Description :{" "}
          <input type="text" name="description" placeholder="Description" />
        </label>
        <br />
        <label>
          Content :{" "}
          <textarea
            name="content"
            placeholder="Content"
            cols="30"
            rows="10"
          ></textarea>{" "}
        </label>
        <br />
        <label>
          Blog image : <input type="file" name="image" />
        </label>
        <br />
        <input type="submit" value="Add Blog" />
      </form>
    </div>
  );
}
