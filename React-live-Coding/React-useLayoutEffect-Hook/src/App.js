
import React,{ useLayoutEffect,useRef} from 'react';

function App() {

const header= useRef()


  useLayoutEffect(()=>{
      header.current.style.backgroundColor="blue"
      header.current.style.color="white"
      header.current.style.position="relative"
      header.current.style.top="300px"

  },[])


  return (
    <div className="App">
      <h1 ref={header}>My React App</h1>
    </div>
  );
}

export default App;