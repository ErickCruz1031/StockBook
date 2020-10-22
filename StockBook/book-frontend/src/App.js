import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <input type="text" placeholder="Search.."/>
        </div> 
    </div>
  );
}


//The thing that lets you select from a dropdpwn is <select>, and each line in it is <option> 

export default App;
