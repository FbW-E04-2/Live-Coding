
import React,{ useEffect, useState} from 'react';

function App() {

const [users,setUsers]=useState([])
const [loading,setLoading]=useState(true)

  useEffect(()=>{
   
    fetch("https://reqres.in/api/users?delay=3")
    .then(res=>res.json())
    .then(result=> {
      setUsers(result.data)
      setLoading(false)
    })

  },[])


  return (
    <div className="App">
      <h1>My React App</h1>
      <div>
        {loading ? <h2>Loading ..........</h2> : users.map(user=>{
          return(
            <div>
              <img src={user.avatar} alt="" width="100" />
              <h2>{user.first_name}</h2>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;