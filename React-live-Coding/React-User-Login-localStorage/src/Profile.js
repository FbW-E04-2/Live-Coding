import React from 'react'

export default function Profile({user,setMyUser}) {

    return (
        <div>
            {user && (<><h2>hi, {user.username}</h2>
            <h3>{user.email}</h3> <button onClick={()=>{localStorage.clear(); setMyUser(null)}}>signout</button>    </>)    }

        
        </div>
    )
}
