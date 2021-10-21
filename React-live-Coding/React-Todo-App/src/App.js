
import React from 'react';
import "./css/App.scss"
import Navigation from "./components/Navigation"
import ToDosContainer from './components/ToDosContainer';
import ToDonesContainer from './components/ToDonesContainer';
import {v4 as uuid} from "uuid"

class App extends React.Component {

  state={
    todoList: [
  /*   {text:"start react project", done:true},
    {text:"walk with dog", done:false},
    {text:"Live coding" ,done:true},
    {text:"Take bath" ,done:true},
    {text:"take breakfast", done:false},
    {text:"Watch movie" ,done:false} */
]
  }

  addTask=(todotext)=>{
    let task= {id:uuid() ,text:todotext,done:false }

    this.setState({ todoList: [...this.state.todoList,task]})
  }
   /*  234-4556-345 */
  updateTask=(id)=>{
    let updatedItems= this.state.todoList.map(item=>{
      if(item.id===id){
        item.done=item.done?false:true;
       /*  item.done = !item.done; */
        return item
      }else{
        return item
      }
    })
    this.setState({todoList:updatedItems})
  }

  deleteTask=(id)=>{
    let updatedItems=this.state.todoList.filter(item=>item.id!==id)
    this.setState({todoList:updatedItems})
  }

render(){
  let todos=this.state.todoList.filter(item=> item.done===false)// []
  let todones=this.state.todoList.filter(item=> item.done===true)// []

   return (
    <div className="app">
      <Navigation/>
      <ToDosContainer todos={todos} addTask={this.addTask} updateTask={this.updateTask}/>
      <ToDonesContainer todones={todones} updateTask={this.updateTask} deleteTask={this.deleteTask} />
    </div>
  );
}
 
}

//TODO 
//lifting up state
// change functional component into class component
// make input a controlled component by using onChange
//store input value into state
//onSubmit ,we add our todo item into our todos list
//on clicking finsih button ,we add our todo item from todolist to todonelist (done:true)

//props drilling

export default App;