import React, { useState } from 'react'
import {MyContext} from "./conext"

export default function Container(props) {
    const [state,setState]= useState({name:"Mike"})
    const [task,setTask]=useState([])

    return (
        <MyContext.Provider value={{state,setState,task,setTask}}>
            {props.children}

        </MyContext.Provider>
    )
}
