import React, { useContext, useState } from "react";
import { MyContext } from "../context/context";
import CommentReply from "./CommentReply";

export default function Blogs() {
  const { blogs, setBlogs, user, comments } = useContext(MyContext);
  const [text,setText]=useState("")

  const deleteBlog = (blog_id) => {
    fetch(`http://localhost:4000/blogs/${blog_id}`, {
      method: "DELETE",
      headers: { token: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setBlogs(blogs.filter((blog) => blog._id !== blog_id));
        }
      });
  };

  const addCommentToBlog = (blogid) => {
    /* commentText:{type:String,required:true},
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  blogid: { type: mongoose.Schema.Types.ObjectId, ref: "blogs" },
  replyComments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comments" }],
  replyCommentId:{ type: mongoose.Schema.Types.ObjectId, ref: "comments" } */
    console.log(text);
    fetch("http://localhost:4000/comments", {
      method: "POST",
      headers: { "Content-Type":"application/json", token: localStorage.getItem("token") },
      body: JSON.stringify({
        commentText : text, 
        userid: user._id,
        blogid: blogid
      })
    })
    .then(res=>res.json())
    .then(result=>{
      if(result.success){
        console.log(result.data);
        setText("")
      }else{
        console.log(result.message);
      }
    })
  };

  const getTextareaData=(e)=>{
    setText(e.target.value)
  }
  return (
    <div>
      <h1>This is Blogs Page</h1>
      <div className="blogs">
        {blogs.map((blog) => {
          console.log(blog.userid === user._id);
          return (
            <div key={blog._id}>
              <h2>{blog.title}</h2>
              <h3>{blog.description}</h3>
              <img src={blog.image} alt="" width="250" />
              <p>{blog.content}</p>
              {blog.userid === user._id && (
                <button onClick={() => deleteBlog(blog._id)}>Delete</button>
              )}
              <div>
                <h3>Comments</h3>
                <textarea cols="30" rows="5" onChange={getTextareaData}></textarea>
                <button onClick={() => addCommentToBlog(blog._id)}>
                  &#x1F680;
                </button>
              </div>
              <CommentReply
                comments={comments}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
