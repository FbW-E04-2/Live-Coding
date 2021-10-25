
import React, { Component } from 'react'
import Counter from './Counter'
import Timer from './Timer'

export class App extends Component {
  state={
    timer:true
  }
  render() {
    return (
      <div>
        <h1>Updating and Unmounting phase</h1>
        {/* <Counter/> */}
         {this.state.timer && (<Timer/> )} 
        <button onClick={()=>this.setState({timer: !this.state.timer})}>Show / Hide Timer</button>
      </div>
    )
  }
}

export default App
