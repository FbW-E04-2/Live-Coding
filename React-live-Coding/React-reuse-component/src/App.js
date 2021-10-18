
import React from 'react';
import Comment from "./Comment"
import {comments} from "./data"
import { v4 as uuid } from 'uuid';

console.log(uuid())
function App() {
  return (
    <div className="App">
      <h1>500 Comments</h1>
      <div style={{display:"flex",flexWrap:"wrap"}}> {
        //mapping through our comments array and passing props to Comment compponent
        comments.map(comment=>{
            return (
              <Comment key={uuid()} body={comment.body}   name={comment.name} email={comment.email}  />
            )
        })
      } </div>
     
         {/*  Comment({body:"", name:"" , email:"") */}


    </div>
  );
}


export default App;