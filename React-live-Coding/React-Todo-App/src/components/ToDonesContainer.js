import React from 'react'
import ToDoneItem from './ToDoneItem'
export default function ToDonesContainer() {
    let todones=[
        {text:"Live coding" ,done:true},
        {text:"Watch movie" ,done:true},
        {text:"Take bath" ,done:true}
    ]
    return (
        <div className="todones-container">
            <h3>BACKLOG</h3>
            {todones.map(todone=>{
                return(
                       <ToDoneItem todone={todone}/>
                )
            })}
        </div>
    )
}
