import React from 'react'
import ReactClipboard from "react-clipboard-simple"

export default function EmojiItem(props) {
    return (
        <ReactClipboard keyword={props.symbol}>
        <div style={{width:"200px", height:"200px",display:"grid",
        placeItems:"center", boxShadow:"5px 5px 5px gray", border:"1px solid gray", borderRadius:"20px",margin:"20px",fontSize:"25px"}}>
            <h1>{props.symbol}</h1>
        </div>
        </ReactClipboard>
    )
}
