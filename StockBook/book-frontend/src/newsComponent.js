import React, { Component } from 'react';
import { Button, Div, Icon, Input, Image, Text} from "react-atomize";
import { NewsItem } from "./newsItem"



export class ItemSection extends Component{
    render() {
  
      return (
        
        <Div className="board" d="flex" flexDir="column" w="100%" h="100%">
             <NewsItem stock="AAPL"/>
             <NewsItem stock="TSLA"/>
             <NewsItem stock="PYPL"/>
             <NewsItem stock="SNAP"/>
             <NewsItem stock="MSFT"/>
        </Div>
        
  
      );
    }
}
  
