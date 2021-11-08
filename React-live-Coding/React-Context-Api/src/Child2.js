import React,{useContext} from 'react'
import { MyContext } from './App'
import GrandChild2 from './GrandChild2'

export default function Child2() {
 
    const {student} = useContext(MyContext)
    return (
        <div>
            <h2>This is Child 2 Compponent inside App</h2>
            <h3>Student name is : {student.name} </h3>
            <GrandChild2/>
        </div>
    )
}
