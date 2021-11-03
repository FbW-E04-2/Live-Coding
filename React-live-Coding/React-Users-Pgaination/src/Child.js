import React, { useState } from 'react'

export function Child() {

        const [name,setName]=useState("Naqvi")

        console.log("render ... from component")
        return (
            <div>
                <h1>Welcome : {name}</h1>
                <button onClick={()=>setName("Robert")}>change Name</button>
            </div>
        )
    }


export default Child
