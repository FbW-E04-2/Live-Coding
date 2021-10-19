import React, { Component } from 'react'


export default class Fruit extends Component {
    state={
        color:"red",
        colorsArray:["Orange","Green","Yellow","Blue","Purple"]
    }

    changeColor=()=>{
        let randomColor= this.state.colorsArray[Math.floor(Math.random()*this.state.colorsArray.length)]

        this.setState({color:randomColor})
    }
  

    render() {
        return (
            <div>
                <h1>{this.props.name} , Color = {this.state.color} <button onClick={this.changeColor}>Change Color</button> <button onClick={ ()=>this.props.deleteFruit(this.props.name)  }>Delete Fruit</button></h1>
            </div>
        )
    }
}





