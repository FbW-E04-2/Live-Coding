
import React from "react"
import App from "./App.js"
import reactDOM from "react-dom"
//in Redux ,we will create Store
import {createStore} from "redux"
//we import Provide from react-redux
import {Provider} from "react-redux"

//context API => createContext
// const myContext = createContext(null)

{/* <MyContext.Provider value={{users,setSUer}}></MyContext.Provider> */}

const initialState= {x:8,y:0}

const Reducer =(state=initialState,action)=>{
    console.log(action);
    switch(action.type){
        case "incrementY":
            return {...state,y:state.y+1}
        case "incrementX":
            return {...state,x:state.x+1}
        default:
            return state
    }
    
}



const myStore = createStore(Reducer)

reactDOM.render(<Provider store={myStore}> <App/> </Provider>,document.getElementById("root"))