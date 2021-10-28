import React from 'react'

export default function UserSingle(props) {
    console.log(props)
    return (
        <div>
            <h1>Hi , {props.match.params.name}</h1>
        </div>
    )
}
