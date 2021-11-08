
import React, {useState, createContext} from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

export const MyContext = createContext() // context created
console.log(MyContext)


function App() {
  const [count,setCount]= useState(0)
  const [student,setStudent]=useState({name:"William",age:34})


  return (
    <MyContext.Provider value={{count, setCount ,student,setStudent}}> 
      <div className="App">
        <h1>App is our Parent Component</h1>
        <Child1 />
        <Child2/>
      </div>
    </MyContext.Provider>
  );
}


export default App;


//Context Api
//1. create our Context (import createContext from React)
//2. wrap your whole application inside Context Provider
//3. provide globalState (object) to our context provider as value
//4. useContext Hook (use your context) 