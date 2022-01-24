import React, { useContext } from 'react';
import { MyContext } from '../context/context';



export default function Blogs() {
  const {blogs}= useContext(MyContext)
  return <div>
    <h1>This is  Blogs Page</h1>
    <div className="blogs">
      {blogs.map(blog=>{
        return( 
          <div key={blog._id}>
              <h2>{blog.title}</h2>
              <h3>{blog.description}</h3>
              <img src={blog.image} alt="" width="250" />
              <p>{blog.content}</p>
                </div>
        )
      })}
    </div>
  </div>;
}
