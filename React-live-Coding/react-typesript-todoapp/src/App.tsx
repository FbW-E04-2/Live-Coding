import { useState, ChangeEvent } from 'react';
import './App.css';
import { v4 as uuid } from "uuid"
import { TodoItemType } from "./interfaces"
import TodoItem from './TodoItem';

function App() {
  const [todoList, setTodoList] = useState<TodoItemType[]>([])
  const [inpValue, setInpValue] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInpValue(e.target.value)
  }
  //add todo task
  const addTask = () => {
    if (inpValue.trim() !== "") {
      const task = { id: uuid(), text: inpValue, done: false }
      setTodoList([...todoList, task])
      setInpValue("")
    } else {
      alert("please enter text in inputField")
    }
  }

  //delete todo task
  const deleteTask=(id:string)=>{
    setTodoList(todoList.filter(task=>task.id!==id))
  }

  //updating task status
  const updateTask=(id:string)=>{
  /*   setTodoList(todoList.map((task)=>task.id===id?{...task,done:!task.done}:task)) 
     */
    setTodoList(todoList.map(item=>{
      if(item.id==id){
        item.done= !item.done
        return item
      }else{
        return item
      }
    }))
/*     let updatedTasks = todoList.map(item=>{
      if(item.id===id){
        item.done= !item.done
        return item
      }else{
        return item
      }
    })

    setTodoList(updatedTasks)  */
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO APP</h1>
        <input type="text" name="task" onChange={handleChange} value={inpValue} />
        <button onClick={addTask}>Add Task</button>
      </header>
      <ul>
        {todoList.map(task => {
          return (<TodoItem key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />)
        })}
      </ul>
    </div>
  );
}

export default App;
