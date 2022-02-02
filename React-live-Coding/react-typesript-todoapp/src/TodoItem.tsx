import React from 'react';
import {TodoItemType} from "./interfaces"
type Props= {
    task:TodoItemType,
    setTodoList:(list:TodoItemType[])=>void,
    todoList:TodoItemType[]
}


export default function TodoItem({task,setTodoList,todoList} : Props) {
    const deleteTodoItem=(item:TodoItemType)=>{
        setTodoList(todoList.filter(task=>task.id!==item.id))
    }
    

  return <li>{task.text} <button onClick={()=>deleteTodoItem(task)}>X </button> <button>update</button></li>
}




