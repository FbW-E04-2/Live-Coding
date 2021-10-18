import React from 'react'

export default function Comment(props) {
/*     let body = props.body
    let convertedData= body.split(" ").map(word=>word.slice(0,1).toUpperCase() + word.slice(1))
    let finalResult= convertedData.join(" ") */


    return (
        <div style={{width:"200px",padding:"10px",border:"2px solid black"}}>
            <p>{props.body}</p>
            <p>{props.email}</p>
            <h3>{props.name.toUpperCase()}</h3>
        </div>
    )
}





















/* function printName(name){
    console.log(name)
}

finalResult("Naqvi")
finalResult("Ibrahim")
finalResult("Robert") */