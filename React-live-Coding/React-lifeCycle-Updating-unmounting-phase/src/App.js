
import React, { Component } from 'react'
import Counter from './Counter'

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Updating and Unmounting phase</h1>
        <Counter/>
      </div>
    )
  }
}

export default App
