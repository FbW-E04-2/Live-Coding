import React from 'react'

export default function Image(props) {
    console.log(props, "in Image")
    return (
        <div>
        <img width="200" src={props.image} alt="" />
      </div>
    )
}

