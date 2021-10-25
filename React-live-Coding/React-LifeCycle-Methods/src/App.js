
import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
    //initialize your state and props
    //bind your custom methods
    this.state = {
       count:10
    }
    console.log("*********** constructor ************************")
    /* this.increment= this.increment.bind(this) */
    //once in whole life of the component
  }
  
  static getDerivedStateFromProps(props,state){
    console.log("************ get derived state from props *******")
    //filter/change your state or props
    if(state.count===10){
       return {count:50};
    }else{
      return null
    }
  }

  componentDidMount(){
    //just like onload inside DOM
    console.log("*********** componentDidMount ***************+")
    //do side effect
    //use API
    fetch("https://reqres.in/api/users?page=2").then(res=>res.json()).then(result=>{
      console.log(result)
    })
    //once in whole life of component
  }

  render() {
    console.log("*************** render method ******************")
    return (
      <div>
        <h1>React Life Cycle Methods</h1>
        <ul>Mounting
          <li>render()</li>
          <li>componentDidMount()</li>
        </ul>
        <ul>Updating
          <li>shouldComponentUpdate()</li>
          <li>render()</li>
        </ul>
        <ul>Unmounting
          <li>componentWillUnmount()</li>
        </ul>
        <h1>Count value= {this.state.count}</h1>
      </div>
    )
  }
}

export default App
