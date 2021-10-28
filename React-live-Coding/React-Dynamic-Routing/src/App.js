
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import {NavLink, BrowserRouter, Route, Switch} from "react-router-dom"
import "./style.css"
import NotFound from './components/NotFound';
import UserSingle from './components/UserSingle';

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <ul>
        <li><NavLink exact activeClassName="myActiveClass" to="/"> Home </NavLink></li>
        <li><NavLink activeClassName="myActiveClassUsers"  /* activeStyle={{color:"yellow",padding:"5px"}} */ to="/users"> Users </NavLink> </li>
        <li><NavLink  activeClassName="myActiveClass" /* activeStyle={{color:"yellow"}} */ to="/about"> About </NavLink></li>
      </ul>

        <Switch> 
        <Route  exact path="/" component={Home} />
        <Route  exact path="/users" component={Users}/>
        <Route  path="/about" component={About}/>
        <Route path="/users/:name" component={UserSingle}/>
        <Route component={NotFound}/>
         </Switch>

    </div>
    </BrowserRouter>
  );
}


export default App;