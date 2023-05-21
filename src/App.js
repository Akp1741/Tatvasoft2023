import { Component } from 'react';

import './App.css';
import Greet from './components/Greet';
import Form from './components/Form';
import About from './components/About';
import Home from './components/Home';

import{BrowserRouter as Router,Route,Link} from 'react-router-dom'

class App extends React.Component{
  render(){
  return (
    <div className="App">
     <Greet/>
     <Welcome/>
  <Router>
  <Link to="">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/form">Form</Link>

  <Route exaxt path="/" Component={Home}/>
  <Route path="/About" Component={About}/>
  <Route path="/Form" Component={Form}/>
  s
      {/*<About/>
      <Home/>
  <Form/>
  */}
  </Router>
  </div>
    
  );
}
}

export default App;
