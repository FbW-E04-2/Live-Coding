
import React from 'react';
import "./css/App.scss"
import Navigation from "./components/Navigation"
import ToDosContainer from './components/ToDosContainer';
import ToDonesContainer from './components/ToDonesContainer';

function App() {
  return (
    <div className="app">
      <Navigation/>
      <ToDosContainer/>
      <ToDonesContainer />
    </div>
  );
}

//TODO 
// change functional component into class component
// make input a controlled component by using onChange
//store input value into state
//onSubmit ,we add our todo item into our todos list
//on clicking finsih button ,we add our todo item from todolist to todonelist (done:true)
//liftup state
export default App;