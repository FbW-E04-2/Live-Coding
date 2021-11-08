import React,{useContext} from 'react'
import {MyContext} from "./App"

export default function GrandChild2() {

    const {count,setStudent} = useContext(MyContext)
    return (
        <div>
            <h3>This is Granchild 2 Component inside Child 2</h3>
            <h4>Count value is :{count} </h4>
            <button onClick={()=>setStudent({name:"John"})}>Change student name</button>
        </div>
    )
}
