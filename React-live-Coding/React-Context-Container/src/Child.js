import React, { useContext } from 'react'
import { MyContext } from './Context/conext'

export default function Child() {
    const {state} = useContext(MyContext)
    return (
        <div>
            <h1>Student name is {state.name}</h1>
        </div>
    )
}
