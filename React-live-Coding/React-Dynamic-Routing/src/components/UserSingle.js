 import React from 'react'

export default function UserSingle(props) {
    console.log(props)
   let {match , location, history} = props
    return (
        <div>
          {location.state ? <><h1>Hi , {match.params.name}</h1>
            <img src={location.state.avatar}  width="200" alt="" />
            <h2>{location.state.first_name} {location.state.last_name}</h2>
            <p>{location.state.email}</p>
            <button onClick={()=>history.goBack()}>go back</button></> : <h2>You can't access user data directly</h2>}
            
        </div>
    )
}

