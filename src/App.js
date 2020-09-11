import React from 'react';
import './App.css';
import {Switch, Route, NavLink} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';


function App() {
  return (
    <div>
     <div className="nav"> 
    <NavLink exact to="/"><span>Home</span></NavLink><br/>
    <NavLink exact to="/about"><span>About</span></NavLink><br/>
    <NavLink exact to="/contact"><span>Contact</span></NavLink>
    </div>

    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    </Switch>
  
    </div>
  );
}

export default App;
