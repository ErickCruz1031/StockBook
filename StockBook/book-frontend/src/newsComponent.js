import React, { Component } from 'react';
import { Button, Div, Icon, Input, Image} from "react-atomize";


export class ItemSection extends Component{
    state={
      url1 : "null", 
      url2 : "null"
    }
  
    componentDidMount(){
      console.log("This component was mounted. Calling the API");
      fetch('https://api.polygon.io/v1/meta/symbols/AAPL/news?perpage=5&page=1&apiKey=EwdgXn2W7ptj4vkx9B40T3HiVEvV4v3e')
          .then(response => response.json())
          .then(data => this.setState({ url1: data[0].image, url2: data[1].image }));
  
    }
    render() {
  
      return (
        <Div className="board" d="flex" flexDir="column" w="100%" h="100%">
            <Div className="Item-Section" w="100%" h="20%" d="flex" flexDir="row"> 
                <Div className="Item-Name" w="30%" h="100%" border="1px dashed" borderColor="black" > 
                    This will be the name of the bug/Priority/Due Date
                </Div>
                <Div className="Item-Desc" w="70%" h="100%" border="1px solid" borderColor="black"> 
                    This will be the description of the bug/task
                </Div>

            </Div>
            <Div className="Item-Section" w="100%" h="20%" d="flex" flexDir="row"> 
                <Div className="Item-Name" w="30%" h="100%" border="1px dashed" borderColor="black" > 
                    This will be the name of the bug/Priority/Due Date
                </Div>
                <Div className="Item-Desc" w="70%" h="100%" border="1px solid" borderColor="black"> 
                    This will be the description of the bug/task
                </Div>

            </Div>
            <Div className="Item-Section" w="100%" h="20%" d="flex" flexDir="row"> 
                <Div className="Item-Name" w="30%" h="100%" border="1px dashed" borderColor="black" > 
                    This will be the name of the bug/Priority/Due Date
                </Div>
                <Div className="Item-Desc" w="70%" h="100%" border="1px solid" borderColor="black"> 
                    This will be the description of the bug/task
                </Div>

            </Div>
            <Div className="Item-Section" w="100%" h="20%" d="flex" flexDir="row"> 
                <Div className="Item-Name" w="30%" h="100%" border="1px dashed" borderColor="black" > 
                    This will be the name of the bug/Priority/Due Date
                </Div>
                <Div className="Item-Desc" w="70%" h="100%" border="1px solid" borderColor="black"> 
                    This will be the description of the bug/task
                </Div>

            </Div>
            <Div className="Item-Section" w="100%" h="20%" d="flex" flexDir="row"> 
                <Div className="Item-Name" w="30%" h="100%" border="1px dashed" borderColor="black" > 
                    This will be the name of the bug/Priority/Due Date
                </Div>
                <Div className="Item-Desc" w="70%" h="100%" border="1px solid" borderColor="black"> 
                    This will be the description of the bug/task
                </Div>

            </Div>

        </Div>
  
      );
    }
}
  
/*

/*
            <Div className="item-Section" w="100%" h="50%" align="center" flexDir="row" border="1px dashed" borderColor="black" p={{l:"5%", t:"5%", r:"5%",b:"5%"}}> 

            </Div>
*/
