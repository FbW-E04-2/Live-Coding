import React, { Component } from 'react'
import {Link} from "react-router-dom"

export class Users extends Component {
    state={
        users:[]
    }

    fetchData=async()=>{
        const response = await fetch("https://reqres.in/api/users?page=2")
        const result = await response.json()
        this.setState({users:result.data})
    }

    componentDidMount(){
       this.fetchData()
    }
 
    render() {
        console.log(this.state.users)
        return (
           
                <ul>
                {this.state.users.map(user=>{
                    return (
                            <li key={user.id}><Link to={`/users/${user.first_name}`}>{user.first_name} </Link> </li>
                    )
                })}
            </ul>

        )
    }
}

export default Users
