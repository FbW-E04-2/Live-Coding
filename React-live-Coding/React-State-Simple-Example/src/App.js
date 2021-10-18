
import React, {Component} from 'react';
import "./App.css"
class App extends Component {

state={
  headerText:"React State",
  paraText:"first paragraph .....",
  headerColor:"blue",
  paraFontSize:14,
  border:"none",
  numbers:[3,5,7],
  student:{name:"Robin",age:32},
  switchClass:true
}

//function that will change header text
changeText=()=>{
  /* this.state.headerText= "New data I have in header" */
  this.setState({headerText:"text changed",headerColor:"green"})
}

changeParaText=()=>{
  this.setState({paraText:"something else in para", paraFontSize:34})
}

//add random number in our numbers state
addNewNumber=()=>{
 /*  this.state.numbers.push(Math.floor(Math.random()*100))  *///direct mutation
/*  let randomNumber= Math.floor(Math.random()*100)
 let copyNumbers= [...this.state.numbers] //making copy [3,5,7]
copyNumbers.push(randomNumber) // [3,5,7,27]

   this.setState({numbers:copyNumbers})  */

   this.setState({numbers:[...this.state.numbers,Math.floor(Math.random()*100) ]}) 
}
changeUserData=()=>{
  this.setState({ student: {...this.state.student, age: this.state.student.age+1} , switchClass: !this.state.switchClass })
}

//whenever there is any change in  props or state react will call render method again 


  render(){

    console.log("render")
    return (
        <div className="App">
          <h1 style={{backgroundColor:this.state.headerColor ,border:this.state.border}}  onClick={this.changeText} > {this.state.headerText} </h1>
          <p style={{fontSize:this.state.paraFontSize+"px"}} onClick={this.changeParaText}>{this.state.paraText}</p>

          <ul>
              {this.state.numbers.map(num=>{
                return (
                  <li key={num}>{num}</li>
                )
              })}
          </ul>
          <button onClick={this.addNewNumber}>add rendom number</button>

          <div className={this.state.switchClass ?"student":"student1" }>
            <h2>student name is {this.state.student.name}</h2>
            <h3>student age is {this.state.student.age}</h3>
            <button onClick={this.changeUserData}>increment student age</button>
          </div>
        </div>
  );
  }
  
}


export default App;