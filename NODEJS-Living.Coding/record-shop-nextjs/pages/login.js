import React from "react";
import Head from "next/head";
export default function Login() {
  const loginUser = (e) => {
    e.preventDefault();
    let user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
    .then(res=>{
      console.log(res.headers.get("token"))
      let token = res.headers.get("token")
      localStorage.setItem("token",token)
      return res.json()})
    .then(result=>{
      console.log(result)
    })
  };
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="user login page" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Head>
      <form onSubmit={loginUser}>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
            />
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
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success">Login</button>
          </p>
        </div>
      </form>
    </div>
  );
}
