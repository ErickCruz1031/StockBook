import React, { Component } from 'react';
import { Button, Div, Icon, Input, Image, Text} from "react-atomize";


export class NewsItem extends Component{
    
    state={
        url : "https://s3.polygon.io/logos/tsla/logo.png",
        headline : "null" 
      }
    
      componentDidMount(){
        console.log("This component was mounted. Calling the API");
        fetch('https://api.polygon.io/v1/meta/symbols/AAPL/news?perpage=5&page=1&apiKey=EwdgXn2W7ptj4vkx9B40T3HiVEvV4v3e')
            .then(response => response.json())
            .then(data => this.setState({ url: data[0].title}));

        fetch('https://api.polygon.io/v1/meta/symbols/TSLA/company?apiKey=EwdgXn2W7ptj4vkx9B40T3HiVEvV4v3e')
        .then(response => response.json())
        .then(data => this.setState({ url: data.logo}));
    
      }



    render() {
  
      return (

        <Div className="ElementOne" w="100%" h="25%" d="flex"> 
            <Div className="ElementTwo" w="15%" h="100%"> 
                <Image src="https://s3.polygon.io/logos/tsla/logo.png"  w="100%" h="100%" rounded="xl"/>
            </Div>
            <Div className="Item-Desc" w="80%" h="100%" border="1px solid" borderColor="black" rounded="xl"> 
                <Text textWeight="700" fontFamily="secondary" textAlign="center" textSize="display2"> This will be the description of the article </Text>
            </Div>
        </Div>

  
      );
    }
}
  

/*
export class newsItem extends Component{
    
    state={
        url : https://s3.polygon.io/logos/tsla/logo.png",
        headline : "null" 
      }
    
      componentDidMount(){
        console.log("This component was mounted. Calling the API");
        fetch('https://api.polygon.io/v1/meta/symbols/AAPL/news?perpage=5&page=1&apiKey=EwdgXn2W7ptj4vkx9B40T3HiVEvV4v3e')
            .then(response => response.json())
            .then(data => this.setState({ url: data[0].title}));

        fetch('https://api.polygon.io/v1/meta/symbols/TSLA/company?apiKey=EwdgXn2W7ptj4vkx9B40T3HiVEvV4v3e')
        .then(response => response.json())
        .then(data => this.setState({ url: data.logo}));
    
      }


    render () {

     return(  
        <Div className="ElementOne" w="100%" h="100%" d="flex"> 
            <Div className="ElementTwo" w="30%" h="100%" border="1px dashed" borderColor="black" > 
                <Image src="https://s3.polygon.io/logos/tsla/logo.png" />
            </Div>
            <Div className="Item-Desc" w="70%" h="100%" border="1px solid" borderColor="black"> 
                <Text> This is a testing entry </Text>
            </Div>
        </Div>
     );

    }

}//Component should include the image of the news article (Or the headline if we cant format it properly) -> Perhaps Image or symbol and headline instead of the image
*/
