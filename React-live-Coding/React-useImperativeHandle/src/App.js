import React,{useRef,useEffect} from 'react'
import Child from './Child'


export default function App() {

  const myRef= useRef()

useEffect(()=>{
  console.log(myRef.current)
},[])

  
  return (
    <div>
      <h1>useImperativeHandle</h1>
      <Child ref={myRef}/>
      <button onClick={()=>myRef.current.printName("Naqvi")}>call print function </button>
      <button onClick={()=>myRef.current.focus()}>focus input</button>
      <button onClick={()=>myRef.current.focusSecondInput()}>focus second input field</button>
    </div>
  )
}


















/* import React, { useRef,useState } from "react";

function App() {
  const formRef = useRef();
  const [user, setUser] = useState(null);
  const [skills, setSkills] = useState([]);

  const getFormData = (e) => {
    e.preventDefault();
    console.log(formRef.current.username.value);
    console.log(formRef.current.email.value);
    console.log(formRef.current.password.value);
    let mySkills = [];
    if (formRef.current.html.checked) {
      console.log("user added this html skill");
      mySkills.push(formRef.current.html.value);
    }
    if (formRef.current.react.checked) {
      console.log("user added this react skill");
      mySkills.push(formRef.current.react.value);
    }

    setUser({
      username: formRef.current.username.value,
      email: formRef.current.email.value,
      password: formRef.current.password.value,
      skills: mySkills,
    });
  };

  console.log(user);
  return (
    <div className="App">
      <h1>My React App</h1>
      <form ref={formRef} onSubmit={getFormData}>
        <input type="text" name="username" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="checkbox" name="html" value="html" /> html <br />
        <input type="checkbox" name="react" value="react" /> React <br />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
 */