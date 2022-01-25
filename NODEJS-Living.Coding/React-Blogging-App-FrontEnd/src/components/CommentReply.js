import React, { useContext } from 'react';
import { useState } from 'react';
import { MyContext } from '../context/context';

export default function CommentReply({comments}) {
    console.log(comments);
    const [text,setText]=useState("")
const {user} =useContext(MyContext)
    const AddOnComment=(commentId,blogid)=>{
        fetch("http://localhost:4000/comments", {
            method: "POST",
            headers: { "Content-Type":"application/json", token: localStorage.getItem("token") },
            body: JSON.stringify({
              commentText : text, 
              userid: user._id,
              blogid: blogid,
              replyCommentId:commentId
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
    }

  return ( <ul>
        {comments && comments.map(com=>{
           return (
               <li>
            <h4>{com.commentText}</h4>
            <details>
              <summary>reply</summary>
              <textarea cols="30" rows="5" onChange={(e)=>setText(e.target.value)}></textarea>
              <button onClick={()=>AddOnComment(com._id,com.blogid)}>&#x1F680;</button>
              
            </details> 
            <CommentReply comments={com.replyComments}/>
            </li>
           )
        })}
       </ul>);
}



