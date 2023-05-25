import React from 'react';
import logo from "./logo.svg";
import './App.css';
import Greet from './components/Greet';
import Registration from "./components/Registration";
import LoginForm from "./components/LoginForm";
import CounterHook from "./components/CounterHook";
import LoginHook from "./components/LoginHook";
import { useState } from "react";
import { Button } from "@mui/material";

import About from './components/About';
import Home from './components/Home';

import{BrowserRouter as Router,Route,Link} from 'react-router-dom'


function App() {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Registration></Registration>
      <br></br>
      <br></br>
      <br></br>
    
      </div> 
        );
      }
      {/*
      <CounterHook data={data} count={count}></CounterHook>
      <Button
        variant="contained"
        color="error"
        onClick={() => setData(data + 1)}
      >
        Update Data
      </Button>
      <br></br>
      <Button
        variant="contained"
        color="warning"
        onClick={() => setCount(count + 1)}
      >
        Update Count
      </Button>
  
      <LoginHook></LoginHook>
    </div>
  );
}*/}

/*lass App extends React.Component
{
  render()
  {
   
    return (
    <div className="App">
     <Greet/>
      <Welcome/>
     <LoginForm/>
  <Router>
  <Link to="">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/form">Form</Link>

  <Route exaxt path="/" Component={Home}/>
  <Route path="/About" Component={About}/>
  <Route path="/Form" Component={Form}/>

      {/*<About/>
      <Home/>
  <Form/>
 
  </Router>
  </div>
    
  );
}
}*/

export default App;


