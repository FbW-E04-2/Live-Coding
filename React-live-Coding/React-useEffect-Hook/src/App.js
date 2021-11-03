
import React,{useEffect, useState} from 'react';
import Users from './Users';
function App() {

  const [count,setCount]=useState(0)
  const [status,setStatus]=useState(true)

  //componentDidMount
 /*  useEffect(()=>{}, []) */
/*   useEffect(()=>{
    console.log("working like a componentDidMount")
    fetch("https://reqres.in/api/users?page=2")
    .then(res=>res.json())
    .then(result=> setUsers(result.data))
  },[]) */

  //componentDidUpdate
  /* useEffect(()=>{},[dependency]) */
/*   useEffect(()=>{
    fetch("https://reqres.in/api/users?page=2")
    .then(res=>res.json())
    .then(result=> setUsers(result.data))
  }
  ,[count]) */

  //componentWillUnmpount
 /*  useEffect(()=>{
    return ()=>{}
  }, []) */

  return (
    <div className="App">
      <h1>useEffect Hook</h1>
      <h1>counter :{count} </h1>
      <button onClick={()=>setCount(count+1)}>increment</button>
      {status && <Users/>}
      <button onClick={()=>setStatus(!status)}>show/Hide</button>
    </div>
  );
}


export default App;