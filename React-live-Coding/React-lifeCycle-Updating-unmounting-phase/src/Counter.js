import React, { Component } from 'react'

export class Counter extends Component {
    state={
        count:0
    }

    static getDerivedStateFromProps(nextprops,nextstate){
        console.log("******* static method *********")
        if(nextstate.count===6){
            return {count:1}
        }
        return null;
    }



    shouldComponentUpdate(nextProps,nextState){
        console.log("******** shouldComponentUodate **********")
          console.log(this.state.count)
        return true
      /*   if(nextState.count>10 &&nextState.count<15){
            return false
        }else{
             return true;  
        } */
     
    }

    render() {
        console.log("******** render in counter **********")
        return (
            <div>
                <h1>Counter: {this.state.count} </h1>
                
                <button onClick={()=>this.setState({count:this.state.count+1})}> increment</button>
            </div>
        )
    }
}

export default Counter
