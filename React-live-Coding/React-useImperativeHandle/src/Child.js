import React,{useImperativeHandle, useRef, useState} from 'react'

function Child(props,ref) {


    const [name,setName]=useState("Robin")

    const childRef= useRef()
    const childRef1= useRef()

useImperativeHandle(ref, ()=>{
    return {
        focus: ()=>childRef.current.focus(),
        printName: printName,
        focusSecondInput:()=>childRef1.current.focus()
    }
})


    const printName=(name)=>{
        console.log("I am Child component",name)
        setName(name)
      }
    return (
        <div>
            <h1>This is child component</h1>
            <input type="text" ref={childRef}/><br />
            <input type="text" ref={childRef1} />
            <h2>inChild , name is {name} </h2>

          
        </div>
    )
}
export default React.forwardRef(Child)