import React, {Component} from 'react'
import Fruit from "./Fruit"

export default class Parent extends Component {

  state={
    fruitsArray:["Apple","Mango","Banana","Pineapple"]
  }

  deleteFruit=(fruitName)=>{                                    //Apple!==Apple
      let updatedFruits = this.state.fruitsArray.filter(fruit=>(fruit!==fruitName) )
      this.setState( {fruitsArray:updatedFruits })
  }

render(){
  return (
    <div>

      {    this.state.fruitsArray.map(fruit=>{
            return (
                 <Fruit key={fruit} name={fruit} deleteFruit={this.deleteFruit} />
                )
      })    }
    </div>
  )
}
  
}