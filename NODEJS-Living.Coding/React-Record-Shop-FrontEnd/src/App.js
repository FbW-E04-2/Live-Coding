import React, { useState } from "react";
import User from "./User";

function App() {
  const [users, setUsers] = useState([]);

  //get request
  const fetchData = () => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err.message));
  };

  //post request
  const addNewUser = (e) => {
    e.preventDefault();
    let user = {
      id: Date.now(),
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      avatar: e.target.avatar.value,
    };
    const jsonData = JSON.stringify(user);
    /* const orifinalUser= JSON.parse(jsonData) */

    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: jsonData,
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err.message));
  };

  //delete request
  const deleteUser = (id) => {
    fetch(`http://localhost:4000/users/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((result) => setUsers(result.data));
  };

  //Put or Patch request
  const editUser=(e, id)=>{
      let updatedUser={
        first_name:e.target.first_name.value,
        avatar:e.target.avatar.value
      }

    fetch(`http://localhost:4000/users/${id}`, { method: "PATCH" ,headers: { "Content-Type": "application/json" } ,body:JSON.stringify(updatedUser)} ).then(res=>res.json())
    .then(result=>{
      console.log(result)
      setUsers(result.data)})
  }

  return (
    <div className="App">
      <h1>My React App</h1>
      <form onSubmit={addNewUser}>
        <label>
          {" "}
          first_name :<input type="text" name="first_name" />
        </label>
        <br />
        <label>
          {" "}
          last_name :<input type="text" name="last_name" />
        </label>
        <br />
        <label>
          {" "}
          email :<input type="email" name="email" />
        </label>
        <br />
        <label>
          {" "}
          avatar :<input type="text" name="avatar" />
        </label>
        <br />
        <input type="submit" value="add user" />
      </form>
      <br />
      <br />

      <button onClick={fetchData}>fetch users</button>
      {users.map((user) => {
        return (
          <User deleleUser={deleteUser} editUser={editUser}  user={user}/>
        );
      })}
    </div>
  );
}

export default App;
