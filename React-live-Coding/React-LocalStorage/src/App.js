
import React from 'react';

function App() {

  let user = {name:"Naqvi",email:"test@gmail.com"}

const SetLocalStorage=()=>{
  localStorage.setItem("user", JSON.stringify(user))
}
const SetLocalStorage2=()=>{
  localStorage.setItem("data",JSON.stringify(["item1","item2"]))
}
const SetSessionStorage=()=>{
  sessionStorage.setItem("session-user",JSON.stringify(user))
}
const getLocalStorage=()=>{
  const mylocaluser= localStorage.getItem("user")
  let originalUser= JSON.parse(mylocaluser)
  console.log(originalUser)
}
const getSessionStorage=()=>{
  const sessionUser= sessionStorage.getItem("session-user")
  const originalUser= JSON.parse(sessionUser)
  console.log(originalUser)
}
const deleteLocalStorageItem=()=>{
  localStorage.removeItem("data")
}
const deleteSessionStorageItem=()=>{
  sessionStorage.removeItem("session-user")
}
const clearLocalStorage=()=>{
  localStorage.clear()
}
const clearSessionStorage=()=>{
  sessionStorage.clear()

}
const SetMyCookies=()=>{
  document.cookie = `user= ${JSON.stringify(user)};expires=${new Date("01.01.2030")};`
}

const readMyCookies=()=>{
  console.log(document.cookie)
}

  return (
    <div className="App">
      <h1>Set Local and Session Storage</h1>
      <button onClick={SetLocalStorage}>store data in localStorage</button>
      <button onClick={SetLocalStorage2}>store data in localStorage 2</button>
      <button onClick={SetSessionStorage}>store data in sessionStorage</button>
      <h1>get local and session storage</h1>
      <button onClick={getLocalStorage}>get our localStorage</button>
      <button onClick={getSessionStorage}>get our sessionStorage</button>
      <h1>Delete local and session storage</h1>
      <button onClick={deleteLocalStorageItem}>remove localstorage item</button>
      <button onClick={deleteSessionStorageItem}>remove sessionstorage item</button>
      <h1>clear local and session storage</h1>
      <button onClick={clearLocalStorage}>clear localStorage</button>
      <button onClick={clearSessionStorage}>clear sessionStorage</button>


      <h1>Cookies</h1>
      <button onClick={SetMyCookies}>set cookies</button>
      <button onClick={readMyCookies}>Read cookies</button>
    </div>
  );
}

export default App;