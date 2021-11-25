import React, { useReducer, useState } from 'react'
import { MyContext } from './Context'

//universal function
const Reducer=(state,action)=>{
      

    //action ={type:"", payload:""}

    switch(action.type){
        case "increment":
            return {...state, counter:state.counter+1}
        case "decrement":
            return {...state, counter:state.counter-1}
        case "reset":
            return {...state,counter:0}
        case "addtask":
            return {...state, tasks:[...state.tasks, {id:2,text:action.payload,done:false}]}
        default:
            return state
    }

}
const initialState={
    counter:0,
    tasks: [ {id:1,text:"practice react", done:false} ]
}


export default function Container({children}) {

   /*  const [count,setCount]= useState(0) */

    const [state, dispatch] = useReducer(Reducer,initialState )


    return (
        <MyContext.Provider value={{state,dispatch}}>
                {children}
        </MyContext.Provider>
    )
}
