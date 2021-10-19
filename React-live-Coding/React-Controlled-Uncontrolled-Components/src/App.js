
import React from 'react';

class App extends React.Component {

  state={
    inputValue:"",
    username:"",
    email:"",
    password:"",
    address:"",
    country:"",
    skills:[]
  }

  grabInputValue=(e)=>{
    console.log(e.target.value)

    this.setState({inputValue : e.target.value})
  }

  //universal functional for inputfield
  grabValue=(e)=>{
  console.log(e.target.name) //username // address
    this.setState({   [e.target.name]  :    e.target.value    }    )

  }

 /*  grabUsername=(e)=>{
    this.setState({username: e.target.value})
  }
  grabEmail=(e)=>{
    this.setState({email: e.target.value})
  }

  grabPassword=(e)=>{
    this.setState({password: e.target.value})
  } */


  formSubmission=(e)=>{
    e.preventDefault()
    console.log(this.state.username)
    console.log(this.state.password)
    console.log(this.state.email)
  }

  //select sountry
  selectCountry=(e)=>{
      console.log(e.target.value)
      this.setState({country:e.target.value})
  }



  //checking check boxes
  getCheckedValue=(e)=>{
    console.log(e.target.checked)
    if(e.target.checked){
      this.setState({skills: [...this.state.skills,e.target.value ]})
    }else{
      let updatedSkills= this.state.skills.filter(skill=>skill!==e.target.value)
      this.setState({skills:updatedSkills})
    }
  }

  render(){
      //controlled component
  console.log(this.state.skills)
  return (
    <div className="App">
      <h1>My React App</h1>
     {/*  <label >
        Username: <input type="text" onChange={this.grabInputValue} />
      </label>
      <p>{this.state.inputValue}</p> */}


      <form onSubmit={this.formSubmission}>
        <label> Username : <input type="text" name="username" onChange={this.grabValue} /></label><br />
        <label> Address : <input type="text" name="address" onChange={this.grabValue} /></label><br />
        <label> Password : <input type="password" name="password" onChange={this.grabValue} /></label><br />
        <label> Email : <input type="email" name="email" onChange={this.grabValue} /></label><br />
       
        <input type="submit" value="form submit" />
      </form>

      <select onChange={this.selectCountry}>
        <option >Select your country</option>
        <option>Germany</option>
        <option>United kingdom</option>
        <option>USA</option>
      </select>

      <h2>country selected: {this.state.country}</h2>



      <div>
        <label> Skills:  <br />
          <input type="checkbox" value="html" onChange={this.getCheckedValue}/> html <br />
          <input type="checkbox" value="css" onChange={this.getCheckedValue} /> css <br />
          <input type="checkbox"  value="javascript" onChange={this.getCheckedValue}/> javascript <br />
          <input type="checkbox" value="react" onChange={this.getCheckedValue}/> react <br />
        </label>
      </div>

    </div>
  );
  }

}


export default App;



let n = {add: "address"}

let obj={}
obj.name= "Naqvi";
obj.age=23; 
obj[n.add]="hello"
 

/* {name:"Naqvi",age:23, address: "hello"} */