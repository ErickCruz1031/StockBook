import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="page">
          <div className="home-sec"> 
            <div className="home-container"> 
              <div id = "home">Home</div>
            </div>
          </div>
          <div id = "searchbox">
            <div id="inputWrapper"> 
              <input id = "searchInput" type="text" placeholder="Stock Ticker.."/>
            </div>
            <div id="buttonWrapper">
              <button type="button"> Search </button>
            </div> 
          </div>
        </div> 
    </div>
  );
}


//The thing that lets you select from a dropdpwn is <select>, and each line in it is <option> 
//For the API use polygon.io
//<a id = "home" href="#home">Home</a>
export default App;
