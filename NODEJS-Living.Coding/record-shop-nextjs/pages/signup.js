import React from 'react'
import Head from "next/head"
export default function Signup() {


    const registerUser=(e)=>{
        e.preventDefault()
        let user = {
            firstname: e.target.firstname.value,
            lastname:e.target.lastname.value,
            email:e.target.email.value,
            password:e.target.password.value
        }
        
        fetch("http://localhost:4000/users", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                localStorage.setItem("isRegistered","true")
                console.log(result.data)
            }else{
                console.log(result.message)
            }
        })

    }

    return (
        <div>
      <Head>
        <title>Signup Page</title>
        <meta name="description" content="user registeration page" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Head>
      <form onSubmit={registerUser}>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="text" name="firstname" placeholder="Firstname" />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="text" name="lastname" placeholder="Lastname" />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" name="email" placeholder="Email" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="password" name="password" placeholder="Password" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button className="button is-success">Signup</button>
        </p>
      </div>
      </form>
    </div>

    )
}
