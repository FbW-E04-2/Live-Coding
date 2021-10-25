import React, { Component } from 'react'

export class Timer extends Component {
    state={
        time: new Date().toTimeString()
    }

   interval=null;
  
    componentDidMount(){
      this.interval=  setInterval(()=>{
            console.log("**** Timer running *******")
            this.setState({time:new Date().toTimeString() })
        },1000)

    }

    componentWillUnmount(){
        console.log("****** timer is remove from DOM *******")
        console.log(this.interval)
        clearInterval(this.interval)
       /*  this.controller.abort() */
    
    }

   
    render() {
        return (
            <div>
                <h2>Timer: {this.state.time}  </h2>
                <button onClick={()=>clearInterval(this.interval)}>stop timer</button>
            </div>
        )
    }
}

export default Timer
