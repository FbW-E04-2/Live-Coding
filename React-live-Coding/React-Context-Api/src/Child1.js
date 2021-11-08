import React from 'react'
import GrandChild1 from './GrandChild1'
import { MyContext } from './App'

export default class Child1 extends React.Component {

    render(){
       return (
        <MyContext.Consumer> 
        {
            (context)=>{
                return(
                    <div>
                    <h2>This is Child 1 Compponent inside App</h2>
                    <h2>student age is : {context.student.age}</h2>
                    <GrandChild1/>
                </div>
                )
            }
        }
        </MyContext.Consumer>
    )  
    }
   
}
