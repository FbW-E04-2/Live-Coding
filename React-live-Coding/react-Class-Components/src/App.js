
import React from 'react';

class App extends React.Component{

  state={
  count:0,
  name:"Naqvi"
}

increment=()=>{
 /*  this.setState( {}) */

  this.setState(    { count  :   this.state.count+1 }  )
}

  render(){
    console.log("render")
    return(
      <div>
      <h1>{this.state.name}, Counter: {this.state.count}</h1>
      <button onClick={this.increment} >increment</button>
      </div>
    )
  }
}

export default App;

