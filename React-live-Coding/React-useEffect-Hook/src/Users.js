import React,{useState,useEffect} from "react";

export default function Users() {

    const [users,setUsers]= useState([])
    //componentDidMount and componentWillUnmount
    useEffect(()=>{
        fetch("https://reqres.in/api/users?page=2")
        .then(res=>res.json())
        .then(result=> setUsers(result.data))
        let interval = setInterval(()=>{
            console.log("hello ")
        },1000)
        return ()=>{
            console.log("remove user component from app")
            clearInterval(interval)
        }
    },[])


  return (
    <div>
      {users.map((user) => {
        return <h2>{user.first_name}</h2>;
      })}
    </div>
  );
}
