import React from 'react'

export default function ToDoneItem(props) {
    return (
        <div className="todones-item">
            <p>{props.todone.text}</p>
            <div className="actions">
                <button className="btn">&#8635;</button>
            </div>
     </div>
    )
}
