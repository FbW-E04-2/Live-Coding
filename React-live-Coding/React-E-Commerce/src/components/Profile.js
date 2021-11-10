import React, { useContext } from 'react'
import {getAuth, signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../App'

const auth = getAuth()

export default function Profile() {

    const navigate= useNavigate()
    const {setUser,user} = useContext(MyContext)


    const logOutGoogle=()=>{
        signOut(auth).then(()=>{
            setUser(null)
            navigate("/")
        })
    }    
    return (
        <div>
            <h1>user name</h1>
            {user && <>
                <h2>{user.displayName}</h2>
                <img src={user.photoURL} alt="" />
            </> }
            <button onClick={logOutGoogle}>logout</button>
        </div>
    )
}
