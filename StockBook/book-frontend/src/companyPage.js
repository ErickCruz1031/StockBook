import React, { Component } from 'react';
import { Button, Div, Icon, Input, Image, Text} from "react-atomize";
import FittedImage from 'react-fitted-image';



export class CompanyPage extends Component{


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

            <Div w="100%" h="15%" d="flex" flexDir="column">
                <Text textSize="display2" w="100%" h="50%" textAlign="center" textWeight="800"> Tesla </Text>
                <Div className="ElementTwo" w="100%" h="50%" align="center" rounded="xl"> 
                    <FittedImage fit="contain" loader={<div> Loading </div>}  src="https://s3.polygon.io/logos/tsla/logo.png" rounded="xl"/>
                </Div>
            </Div>

            <Div className="Page" w="100%" h="80%" d="flex" flexDir="row">


                <Div className="Info-ColOne" w="50%" h="100%">
                    <Div className="data-point" p={{b:"5%"}} h="20%">
                        <Text fontFamily="secondary" textSize="display1" textWeight="700" textAlign="center"> Section Title </Text>
                        <Text fontFamily="primary" textSize="title" textWeight="500" textAlign="center"> Value </Text>
                    </Div>

                    <Div className="data-point" p={{b:"5%"}} h="20%">
                        <Text fontFamily="secondary" textSize="display1" textWeight="700" textAlign="center"> Section Title </Text>
                        <Text fontFamily="primary" textSize="title" textWeight="500" textAlign="center"> Value </Text>
                    </Div>

                    <Div className="data-point" p={{b:"5%"}} h="20%">
                        <Text fontFamily="secondary" textSize="display1" textWeight="700" textAlign="center"> Section Title </Text>
                        <Text fontFamily="primary" textSize="title" textWeight="500" textAlign="center"> Value </Text>
                    </Div>

                    <Div className="data-point" p={{b:"5%"}} h="20%">
                        <Text fontFamily="secondary" textSize="display1" textWeight="700" textAlign="center"> Section Title </Text>
                        <Text fontFamily="primary" textSize="title" textWeight="500" textAlign="center"> Value </Text>
                    </Div>

                </Div>

                <Div className="Info-ColTwo" w="50%" h="100%">
                    <Div className="data-point" p={{b:"5%"}} h="20%">
                        <Text fontFamily="secondary" textSize="display1" textWeight="700" textAlign="center"> Section Title </Text>
                        <Text fontFamily="primary" textSize="title" textWeight="500" textAlign="center"> Value </Text>
                    </Div>

                    <Div className="data-point" p={{b:"5%"}} h="20%">
                        <Text fontFamily="secondary" textSize="display1" textWeight="700" textAlign="center"> Section Title </Text>
                        <Text fontFamily="primary" textSize="title" textWeight="500" textAlign="center"> Value </Text>
                    </Div>

                    <Div className="data-point" p={{b:"5%"}} h="20%">
                        <Text fontFamily="secondary" textSize="display1" textWeight="700" textAlign="center"> Section Title </Text>
                        <Text fontFamily="primary" textSize="title" textWeight="500" textAlign="center"> Value </Text>
                    </Div>

                    <Div className="data-point" p={{b:"5%"}} h="20%">
                        <Text fontFamily="secondary" textSize="display1" textWeight="700" textAlign="center"> Section Title </Text>
                        <Text fontFamily="primary" textSize="title" textWeight="500" textAlign="center"> Value </Text>
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