import React from 'react'

function Child({name,changeNameInChild}) {
    console.log("render Child")
    return (
        <div>
            <h2>Child component</h2>
            <h3>My name is {name}</h3>
            <button onClick={changeNameInChild}>change name</button>
            
        </div>
    )
}
export default React.memo(Child)

