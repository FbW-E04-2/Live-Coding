
import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
    //initialize your state and props
    //bind your custom methods
    this.state = {
       count:10,
       users:[
        {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg"
        },
        {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg"
        },
        {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg"
        },
        {
        id: 10,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg"
        },
        {
        id: 11,
        email: "george.edwards@reqres.in",
        first_name: "George",
        last_name: "Edwards",
        avatar: "https://reqres.in/img/faces/11-image.jpg"
        },
        {
        id: 12,
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar: "https://reqres.in/img/faces/12-image.jpg"
        }
        ]
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
      this.setState({users:result.data,count: 34})
      //you entered into updating phase
    })
    //once in whole life of component
  }

  shouldComponentUpdate(nextProps, updatedState){
    console.log("*********** should component update ************")
    //control your render method
    //let react to call render method or not
    if(updatedState.users[0].first_name===this.state.users[0].first_name){
      return false
    }else{
      return true
    }
    
  }


  render() {
    console.log("*************** render method ******************")
    console.log(this.state)
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

        {this.state.users && this.state.users.map(user=>{
          return(
            <h3>{user.first_name} {user.last_name}</h3>
          )
        })}
      </div>
    )
  }
}

export default App
