import React from 'react'

export default function Greet(props) {
    console.log(props)
    return (
        <div>
             <h1>Hi, {props.propsName} ,my age is {props.age}</h1>
        </div>
    )
}
