import React from 'react'

export default function ToDoneItem(props) {
    return (
        <div className="todones-item">
            <p>{props.todone.text}</p>
            <div className="actions">
                <button className="btn" onClick={()=>props.updateTask(props.todone.id)}>&#8635;</button>
                <button className="btn" onClick={()=>props.deleteTask(props.todone.id)} >&#9746;</button>
            </div>
     </div>
    )
}
