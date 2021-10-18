import React from 'react'
import Image from "./Image"

export default function Article(props) {
    console.log(props,"in article")
    return (
        <div>
            <p>{props.text}</p>
            <Image image={props.image}/>
        </div>
    )
}
