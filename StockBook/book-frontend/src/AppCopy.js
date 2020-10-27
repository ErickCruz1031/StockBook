import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "atomize";


class App extends Component{
  state = {
    showCompanyPage : false,
    showBookPage : false
  }

  render () {
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
                <button type="button" onClick={activateSearch}> Search </button>
              </div> 
            </div>
          </div> 
      </div>
    );
  }



}







async function activateSearch(){
  const baseURL = "https://api.polygon.io/v1/meta/symbols/" //Base URL for the call 
  const apiKey = "EwdgXn2W7ptj4vkx9B40T3HiVEvV4v3e"
  //"https://api.polygon.io/v1/meta/symbols/AAPL/company?apiKey=EwdgXn2W7ptj4vkx9B40T3HiVEvV4v3e"

  console.log("Clicked the search button")
  
  var ticker = document.getElementById("searchInput").value.toUpperCase();
  console.log("The input was " + ticker)

  const req = baseURL + ticker + "/company?apikey=" + apiKey;
  console.log("We are going to call it with this URL:"+ req);

  const response = await fetch(req);
  const data = await response.json();
  console.log(data);
  //Have to implement what to do with the actual data 

}//Function gathers data from input box and calls the API to get company information


//The thing that lets you select from a dropdpwn is <select>, and each line in it is <option> 
//For the API use polygon.io
//<a id = "home" href="#home">Home</a>
export default App;
