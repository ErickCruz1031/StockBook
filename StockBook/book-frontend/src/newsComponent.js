import React, { Component } from 'react';
import { Button, Div, Icon, Input, Image} from "react-atomize";


export class StockSection extends Component{
    state={
      url : "null"
    }
  
    componentDidMount(){
      console.log("This component was mounted. Calling the API");
      fetch('https://api.polygon.io/v1/meta/symbols/AAPL/news?perpage=5&page=1&apiKey=EwdgXn2W7ptj4vkx9B40T3HiVEvV4v3e')
          .then(response => response.json())
          .then(data => this.setState({ url: data[0].image }));
  
    }
    render() {
  
      return (
  
        <Div className="News-Section"> 
        <Image src = {this.state.url} />
        </Div>
  
      );
    }
}
  