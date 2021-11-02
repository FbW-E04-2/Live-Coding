import React,{useState} from 'react'
import {data} from "./data" 

export default function Student() {
    const [students,setStudents] = useState(data)
    const [index,setIndex]= useState(0)

    const nextStudent=()=>{
        if(index===students.length-1){
            setIndex(0)
        }else{
            setIndex(index+1)
        }
    }
    function previousStudent(){
        if(index==0){
            setIndex(students.length-1)
        }else{
            setIndex(index-1)
        }
    }


    
    return (
        <div>
                    <div>
                        <h1>student name is  {students[index].name}</h1>
                        <h2>student age is {students[index].age}</h2>
                        <button onClick={nextStudent}>next student</button>
                        <button onClick={previousStudent}>previous student</button>
                    </div>
         </div>
    )
}
