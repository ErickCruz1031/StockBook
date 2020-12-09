import React, { Component } from 'react';
import { Button, Div, Icon, Input, Image, Text} from "react-atomize";


export class NewsItem extends Component{
    
    state={
        url : "null",
        headline : "null" 
      }
    
      componentDidMount(){
        console.log("This component was mounted. Calling the API");
        fetch('https://api.polygon.io/v1/meta/symbols/AAPL/news?perpage=5&page=1&apiKey=EwdgXn2W7ptj4vkx9B40T3HiVEvV4v3e')
            .then(response => response.json())
            .then(data => this.setState({ headline: data[0].title}));

        fetch('https://api.polygon.io/v1/meta/symbols/AAPL/company?apiKey=EwdgXn2W7ptj4vkx9B40T3HiVEvV4v3e')
        .then(response => response.json())
        .then(data => this.setState({ url: data.logo}));
    
      }



    render() {
  
      return (

        <Div className="ElementOne" w="100%" h="20%" d="flex"> 
            <Div className="ElementTwo" w="25%" h="100%"> 
                <Image src={this.state.url} w="35%" h="100%" rounded="xl"/>
            </Div>
            <Div className="Item-Desc" w="80%" h="100%" border="1px solid" borderColor="gray600" rounded="xl" d="flex" flexDir="column" align="center"> 
                <Text textWeight="700" fontFamily="secondary" textAlign="center" textSize="display2"> {this.state.headline} </Text>
            </Div>
        </Div>

  
      );
    }
}
  