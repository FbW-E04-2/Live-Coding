import React from 'react'


export default function About(props) {
    console.log(props)
    return (
        <div>
            <h1>This is About Page</h1>
           {/*  <button onClick={()=>props.history.goBack()}>go back</button>
            <button onClick={()=>props.history.push("/contact")}>move to contact page</button>
            <button onClick={()=>props.history.go(-2)}>navigate 2 steps back</button> */}
        </div>
    )
}
