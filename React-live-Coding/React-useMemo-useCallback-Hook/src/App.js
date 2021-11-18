
import React, { useState, useCallback ,useMemo} from 'react';
import Child from './Child';





function App() {
console.log("render App")

  const [count,setCount]=useState(0)
  const [name,setName]=useState("Naqvi")

//shouldComponentUpdate

const changeNameInChild=()=>{
  setName("Hanny")
}


const createSecretCode=()=>{
  console.log("here secret code function")
  return ("kjgsjfa9s79sa8698324g31j2kb31j2b41434")
}

const memoSecretValue =useMemo(()=>createSecretCode(), [])


const memorizedCallback = useCallback(()=>changeNameInChild() ,[])


  return (
    <div className="App">
      <h1>Counter : {count}</h1>
      <button onClick={()=>setCount(count+1)}  >increment</button>
      <Child name={name} changeNameInChild={memorizedCallback}/>
      <h2>Secret key: {memoSecretValue}</h2>
    </div>
  );
}

export default App;