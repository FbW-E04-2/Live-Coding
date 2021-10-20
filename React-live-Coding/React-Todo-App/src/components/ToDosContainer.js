import React from 'react'
import ToDoItem from './ToDoItem'

export default function ToDosContainer() {
    let todos=[
        {text:"start react project", done:false},
        {text:"walk with dog", done:false},
        {text:"take breakfast", done:false}
    ]
    return (
        <div className="todos-container">

            <form className="todo-form">
                <label className="input-item"> 
                <input type="text" name="todo" />
                </label>  
                <input type="submit" className="btn" value="ADD"/>  
            </form>  

            <div className="todos">
                <h3>To Do</h3>
                   {todos.map(todo=>{
                       return(
                         <ToDoItem todo={todo}/>
                       )
                   })} 
            </div>   

        </div>
    )
}
