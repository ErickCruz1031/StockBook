import React, { Component } from 'react';
import { Button, Div, Icon, Input, Image, Text} from "react-atomize";
import FittedImage from 'react-fitted-image';



export class CompanyPage extends Component{






    componentDidMount(){
        console.log("This component was mounted. Calling the API");

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
    
        today = yyyy + '-' + mm + '-' + dd;
        
        var infoURL = 'https://api.polygon.io/v1/meta/symbols/' + this.state.ticker + '/company?apiKey=EwdgXn2W7ptj4vkx9B40T3HiVEvV4v3e'
        var priceURL = 'https://api.polygon.io/v1/open-close/' + this.state.ticker + '/2021-01-07?apiKey=EwdgXn2W7ptj4vkx9B40T3HiVEvV4v3e'
        console.log(infoURL)
        console.log(priceURL)
        fetch(infoURL)
            .then(response => response.json())
            .then(data => this.setState({ photo_url : data.logo, company_url: data.url, ceo : data.ceo, desc : data.description, exchange : data.exchange, marketcap : data.marketcap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), sector : data.sector, similar : data.similar }));
        fetch(priceURL)
            .then(response => response.json())
            .then(data => this.setState({ today_close : data.close}));

            //var foo = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
      }

      constructor(props){  
        super(props);  
        this.state = {
            photo_url : "null", //Change so this is set in the call to the API
            ticker : props.stock,  


            company_url : "null",
            ceo : "null",
            desc : "null",
            exchange: "null",
            marketcap : 0,
            today_close : 0,
            sector : "null",
            similar : "null" //This is from the company call


            
          }  
      }  


    render() {
        return(
        
        //Might have to play with the flex direction of this component
        <Div className="Company-Information" w="100%" h="100%" d="flex" flexDir="column">

            <Div className="addButton" w="100%" h="5%">
                 <Button
                    h="3rem"
                    w="3rem"
                    bg="warning700"
                    hoverBg="warning600"
                    rounded="lg"
                    m={{ r: "1rem" }}  align="center">
                    <Icon name="Add" size="20px" color="white" />
                </Button>

            </Div>
            
            <Div w="100%" h="35%" d="flex" flexDir="column">
                <Text textSize="display2" w="100%" h="20%" textAlign="center" textWeight="800"> Tesla </Text>
                <Div className="ElementTwo" w="100%" h="50%" align="center" rounded="xl"> 
                    <FittedImage fit="contain" loader={<div> Loading </div>}  src={this.state.photo_url} rounded="xl"/>
                </Div>
                <Div className="data-point" align="center" w="100%" h="30%">
                        <Text fontFamily="primary" textSize="subheader" textWeight="500" textAlign="center"> {this.state.desc} </Text>
                </Div>
            </Div>

            <Div className="Page" w="100%" h="65%" d="flex" flexDir="row">


                <Div className="Info-ColOne" w="50%" h="100%">
                    <Div className="data-point" p={{t:"5%", l: "10%"}} h="20%">
                        <Text fontFamily="secondary" textSize="title" textWeight="700" textAlign="center"> CEO </Text>
                        <Text fontFamily="primary" textSize="subheader" textWeight="500" textAlign="center"> {this.state.ceo} </Text>
                    </Div>

                    <Div className="data-point" p={{t:"5%", l: "10%"}} h="20%">
                        <Text fontFamily="secondary" textSize="title" textWeight="700" textAlign="center"> Exchange </Text>
                        <Text fontFamily="primary" textSize="subheader" textWeight="500" textAlign="center"> {this.state.exchange} </Text>
                    </Div>

                    <Div className="data-point" p={{t:"5%", l: "10%"}} h="20%">
                        <Text fontFamily="secondary" textSize="title" textWeight="700" textAlign="center"> Sector </Text>
                        <Text fontFamily="primary" textSize="subheader" textWeight="500" textAlign="center"> {this.state.sector} </Text>
                    </Div>

                </Div>

                <Div className="Info-ColTwo" w="50%" h="100%">
                    <Div className="data-point" p={{t:"5%", r:"10%"}} h="20%">
                        <Text fontFamily="secondary" textSize="title" textWeight="700" textAlign="center"> Market Cap </Text>
                        <Text fontFamily="primary" textSize="subheader" textWeight="500" textAlign="center"> {this.state.marketcap} USD</Text>
                    </Div>

                    <Div className="data-point" p={{t:"5%", r:"10%"}} h="20%">
                        <Text fontFamily="secondary" textSize="title" textWeight="700" textAlign="center"> Company URL </Text>
                        <Text fontFamily="primary" textSize="subheader" textWeight="500" textAlign="center"> {this.state.company_url} </Text>
                    </Div>

                    <Div className="data-point" p={{t:"5%", r:"10%"}} h="20%">
                        <Text fontFamily="secondary" textSize="title" textWeight="700" textAlign="center"> Today's Closing Price </Text>
                        <Text fontFamily="primary" textSize="subheader" textWeight="500" textAlign="center"> {this.state.today_close} </Text>
                    </Div>


                </Div>


            </Div>
        </Div>



        );


    }



}//Component that represents the company page 
/*
                <Div className="Info-ColOne" w="50%" h="100%">
                    <Text textSize="heading" w="100%" h="10%" textAlign="center"> Column One</Text>

                </Div>
                */