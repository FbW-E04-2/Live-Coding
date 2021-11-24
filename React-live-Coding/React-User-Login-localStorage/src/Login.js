import React from 'react'

export default function Login({loginUser}) {

    return (
        <div>
            <form onSubmit={loginUser}>
                <label>Username: <input type="text" name="username" /></label><br />
                <label>Email: <input type="email" name="email" /></label><br />
                <label>Password: <input type="password" name="password" /></label><br />
                <input type="submit" value="login" />
            
            </form>
        </div>
    )
}
