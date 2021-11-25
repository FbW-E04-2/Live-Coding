import React, { useContext } from 'react'
import { MyContext } from './context/Context'

export default function Counter() {
    const {state,dispatch}= useContext(MyContext)
    return (
        <div>
            <h1>Counter : {state.counter}</h1>
            <button onClick={()=>dispatch({type:"increment"})}>increment</button>
            <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
            <button onClick={()=>dispatch({type:"reset"})}>reset</button>
        </div>
    )
}
