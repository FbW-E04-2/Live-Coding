import React,{useContext} from 'react'
import { MyContext } from './App'

export default function GrandChild1() {

    const {setCount,count} = useContext(MyContext)
    return (
        <div>
            <h3>This is Granchild 1 Component inside Child 1</h3>
            <button /* onClick={()=>setCount(count+1)} */ onClick={()=>setCount(previousValue=>previousValue+1)}   >increment counter</button>
        </div>
    )
}
