import React, { useState } from "react";
import Student from "./Student"
function App() {
  /*   console.log(useState("Naqvi")) */
 /*  const [state,setState] = useState({
    count: 0,
    name: "Naqvi",
    todos: [],
    inputValue: "",
    student: {},
  }); */

  const [count, setCount] = useState(0); // returns an array
  const [name, setName] = useState("Naqvi");
  const [todos, setTodos] = useState(["coding", "exercises"]);
  const [inputValue, setInputValue] = useState("");
  const [student, setStudent] = useState({ name: "Robert", age: 34 });

  const incrementCounter=()=>{
    setCount(count+1)
  }


  return (
    <div className="App">
      <h1>Counter : {count}</h1>
      <button onClick={incrementCounter}>increment</button>

      <h2>hi , {name}</h2>
      <button onClick={() => setName("John")}> change name</button>

      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={() => setTodos([...todos, inputValue])}>add task</button>

      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>

    {/*   <h1>student name is {student.name}</h1>
      <h2>student age is {student.age}</h2>
      <button onClick={() => setStudent({ ...student, age: student.age + 1 })}>
        increment student age
      </button> */}


      <Student/>
    </div>
  );
}

export default App;
