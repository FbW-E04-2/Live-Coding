import React, { useContext, useRef } from 'react'
import { MyContext } from './context/Context'

export default function Tasks() {
    const inpRef=useRef()
    const {state,dispatch} =useContext(MyContext)
    return (
        <>
        <input type="text" name="task" ref={inpRef} />
        <button onClick={()=>dispatch({type:"addtask",payload:inpRef.current.value })}>add new task</button>
        <ul>
            {state.tasks.map(task=>{
                return(
                    <li> {task.text}</li>
                )
            })}
        </ul>

        </>
    )
}
