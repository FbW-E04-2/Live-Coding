
import React,{useEffect, useState} from 'react';
import Child from './Child';

function App() {

 /*  console.log("render") */

  const [users,setUsers]=useState([])
  const [page,setPage]=useState(1)

  const FetchUsers=(pagenumber)=>{
    fetch(`https://reqres.in/api/users?page=${pagenumber}`)
    .then(res=>res.json())
    .then(result=>setUsers(result.data))
  }


  // componentDidMount + componentDidUpdate
  useEffect(()=>{
      FetchUsers(page)
  },[page])


  //conponentDidMount and componentWillUnmount
/*   useEffect(()=>{ 
    return ()=>{}
  }, []) */


  return (
    <div className="App">
      <Child/>
        <div>
          {users.map(user=>{
            return(
              <div key={user.id}>
                <h2>{user.first_name} {user.last_name}</h2>
                <img src={user.avatar} alt="" width="200" />
                <p>{user.email}</p>
              </div>
            )
          })}
        </div>
        <button onClick={()=>setPage(1)}>
          previous
        </button>
        <button onClick={()=>setPage(2)}>
          next
        </button>
    </div>
  );
}


export default App;