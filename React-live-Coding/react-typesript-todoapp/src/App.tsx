import React, { useState,ChangeEvent } from 'react';
import './App.css';
import {v4 as uuid} from "uuid"
import {TodoItemType} from "./interfaces"
import TodoItem from './TodoItem';

function App() {
  const [todoList,setTodoList]=useState<TodoItemType[]>([])
  const [inpValue,setInpValue]=useState<string>("")

  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
      setInpValue(e.target.value)
  }
  const addTask=()=>{
    if(inpValue.trim()!==""){
      const task = {id:uuid() , text: inpValue, done:false}
          setTodoList([...todoList,task])
          setInpValue("")
    }else{
      alert("please enter text in inputField")
    }
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO APP</h1>
        <input type="text" name="task" onChange={handleChange} value={inpValue} />
        <button onClick={addTask}>Add Task</button>
      </header>
      <ul>
        {todoList.map(task=>{
          return (<TodoItem key={task.id} task={task} setTodoList={setTodoList} todoList={todoList} /> )
        })}
      </ul>
    </div>
  );
}

export default App;
