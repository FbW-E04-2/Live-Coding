import React, { Component } from 'react'

export default class Counter extends Component {

  /*   constructor(props){
        super(props)
         this.state={
             count:0
                }
                console.log(this)
       this.bindedIncrement= this.increment.bind(this) //returns binded function
       this.bindedDecrement= this.decrement.bind(this)
    } */

   state={
       count:0,
       tasks:[],
       name:"userName"
   }

    increment=()=>{
            this.setState( {count:this.state.count+1 } ) //asynchronous      
              
    }

    decrement=()=>{
            console.log("decrement")
           this.setState({count:this.state.count-1})
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <h2>Counter : {this.state.count} </h2>
                <button onClick={this.increment} >increment</button>
                <button onClick={this.decrement} >decrement</button>
            </div>
        )
    }
}
