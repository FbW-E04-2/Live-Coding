import React from 'react';
import {TodoItemType} from "./interfaces"
type Props= {
    task:TodoItemType,
    deleteTask:(id:string)=>void,
    updateTask:(id:string)=>void
}


export default function TodoItem({task,deleteTask,updateTask} : Props) {
   console.log("");

  return <li style={{backgroundColor:task.done?"green":"gray" }}>{task.text} <button onClick={()=>deleteTask(task.id)}>X </button> <button onClick={()=>updateTask(task.id)}>update</button></li>
}




