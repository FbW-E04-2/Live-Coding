import React, { useContext, useEffect } from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,signInWithPopup, onAuthStateChanged} from "firebase/auth"
import GoogleButton from "react-google-button"
import { MyContext } from '../App';
import { useNavigate } from 'react-router-dom';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:  process.env.REACT_APP_APIKEY  ,
    authDomain:process.env.REACT_APP_AUTHDOMAIN  ,
    projectId: process.env.REACT_APP_PROJECT_ID ,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET ,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID ,
    appId: process.env.REACT_APP_APP_ID  
  };

        
      
        
        
     
     
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const auth = getAuth()
const googleProvider= new GoogleAuthProvider()








export default function Login() {

    const {setUser} = useContext(MyContext)
    const navigate = useNavigate()

    const loginWithGoogle=()=>{
        signInWithPopup(auth ,  googleProvider)
        .then(userInfo=>{
            setUser(userInfo.user)
            navigate("/profile")
        })
        .catch(err=>console.log(err.message))
    }

  /*   useEffect(()=>{
       let unsubscribe =  onAuthStateChanged(auth)
        .then(userInfo=>{
            setUser(userInfo.user)
            navigate("/", {replace:true})
        })
        .catch(err=>console.log(err.message))

        return unsubscribe
    },[]) */

    return (
        <div>
            <h1>Login Page</h1>
            <GoogleButton onClick={loginWithGoogle} />
        </div>
    )
}
