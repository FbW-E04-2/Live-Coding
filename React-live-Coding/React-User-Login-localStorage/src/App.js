
import React,{useEffect, useState} from 'react';
import Login from "./Login"
import Profile from './Profile';

function App() {
const [myUser,setMyUser] = useState(null)

  const loginUser=(e)=>{
    e.preventDefault()
    let user= {
        username:e.target.username.value ,
        email:e.target.email.value,
        password:e.target.password.value
    }
    
    setMyUser(user)
    localStorage.setItem("user",JSON.stringify(user))

}


useEffect(()=>{
  let localUser= localStorage.getItem("user")
  if(localUser){
    let originalUser= JSON.parse(localUser)
    setMyUser(originalUser)
  }
},[])

  return (
    <div className="App">
      {myUser ? <Profile user={myUser} setMyUser={setMyUser}/> :<Login loginUser={loginUser}/>  }
      
     
    </div>
  );
}

export default App;