import React,{useContext, useState} from 'react'
import {MyContext} from "./App"

export default function GrandChild2() {

    const {count,setStudent,getWeather} = useContext(MyContext)
    const [inputValue,setInputValue]=useState("")

    return (
        <div>
            <input type="text" onChange={(e)=>setInputValue(e.target.value)}/>
            <button onClick={()=> getWeather(inputValue)}>get weather data</button>
            <h3>This is Granchild 2 Component inside Child 2</h3>
            <h4>Count value is :{count} </h4>
            <button onClick={()=>setStudent({name:"John"})}>Change student name</button>
        </div>
    )
}
