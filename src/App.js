import './App.css';
import React from 'react'
import Routing from './Routing'
import { BrowserRouter } from "react-router-dom";
import Navbars from './Component/Navbars';
import Footer from './Component/Footer'
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter className="App">
    <div className='header'>
    <NavLink to="/" ><h1 className='headerText'>Wedding Site</h1></NavLink>
        </div>
        <Navbars/>
  
      <Routing />
      <Footer/> 
    </BrowserRouter>
  );
}

export default App;
