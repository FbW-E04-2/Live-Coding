
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from "./components/Contact";
import Users from './components/Users';

import {BrowserRouter ,Link , Route} from "react-router-dom"
import Projects from './components/Projects';

 
function App(){
  return(
    <BrowserRouter> 
    <div>
     <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/about">About </Link></li>
       <li> <Link to="/users"> Users</Link></li>
       <li><Link to="/projects">Projects </Link></li>
       <li><Link to="/contact">Contact </Link></li>
     </ul>

    <Route exact path="/" component={Home}/>
    {/* <Route exact path="/">
      <Home/>
    </Route> */}


{/*     <Route path="/about" component={About}/> */}
    <Route path="/about">
         <About name="naqvi"/>
    </Route>    {/* without router props but get custom props */}

{/* <Route path="/about" render={(props)=><About {...props} name="Naqvi" />}/> */}


    <Route path="/users" component={Users}/> {/* without component props but get router props */}
    <Route path="/contact" component={Contact}/>
    <Route path="/projects" component={Projects}/>
    </div>
    </BrowserRouter>
  )
}











/* class App extends React.Component {

  state={
    page:"home"
  }
  render(){ 
    console.log("********* render ************ ")
     return (
    <div className="App">
      <ul>
        <li onClick={()=>this.setState({page:"home"})}> <a href="/">Home</a> </li>
        <li onClick={()=>this.setState({page:"about"})}> <a href="/about">About</a> </li>
        <li onClick={()=>this.setState({page:"users"})}> <a href="/user">Users</a> </li>
        <li onClick={()=>this.setState({page:"contact"})}> <a href="/contact">Contact</a> </li>
      </ul>


      {this.state.page==="home" && <Home/> }
      {this.state.page==="about" &&  <About/>}
      {this.state.page==="users" &&  <Users/>}
      {this.state.page==="contact" &&  <Contact/>}
 

    </div>
  );
  }
 
}
*/

export default App; 