import React, { Component } from 'react';
import { Button, Div, Icon, Input, Image, Text} from "react-atomize";
import FittedImage from 'react-fitted-image';


export class NewsItem extends Component{
    
      componentDidMount(){
        console.log("This component was mounted. Calling the API");
        var newsURL = 'https://api.polygon.io/v1/meta/symbols/' + this.state.ticker + '/news?perpage=5&page=1&apiKey=EwdgXn2W7ptj4vkx9B40T3HiVEvV4v3e'
        var logoURL = 'https://api.polygon.io/v1/meta/symbols/' + this.state.ticker + '/company?apiKey=EwdgXn2W7ptj4vkx9B40T3HiVEvV4v3e'
        fetch(newsURL)
            .then(response => response.json())
            .then(data => this.setState({ headline: data[0].title, summary: data[0].summary, url:data[0].image}));
      }

      constructor(props){  
        super(props);  
        this.state = {
            url : "null",  
            summary : "null",
            headline : "null", 
            ticker : props.stock
          }  
      }  



    render() {
  
      return (


        //We're going to change the Logo to an actual logo from the atomize library <Icon name="Link" color="black" size="40%"/>
        //Idea for the template of UI: 
        //https://material-ui.com/getting-started/templates/checkout/
        <Div className="ElementOne" w="100%" h="20%" d="flex"> 
            <Div className="ElementTwo" w="10%" h="100%" align="center" border="1px solid" borderColor="gray600" rounded="xl" bg="gray400" hoverBg="gray900"> 
                <FittedImage fit="contain" loader={<div> Loading </div>}  src={this.state.url} rounded="xl"/>
            </Div>
            <Div className="Item-Desc" w="90%" h="100%" border="1px solid" borderColor="gray600" rounded="xl" d="flex" flexDir="column" align="center"> 
                <Text textWeight="700" fontFamily="secondary" textAlign="center" textSize="heading"> {this.state.headline} </Text>
                <Text textWeight="500" fontFamily="secondary" textAlign="center" textSize="title"> {this.state.summary} </Text>
            </Div>

        </Div>

  
      );
    }
}
  