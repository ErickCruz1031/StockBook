import React, { Component } from 'react';
import { Button, Div, Icon, Input, Image, Text} from "react-atomize";
import FittedImage from 'react-fitted-image';



export class CompanyPage extends Component{


    render() {
        return(
        
        //Might have to play with the flex direction of this component
        <Div className="Company-Information" w="100%" h="100%" d="flex" flexDir="column">
            <Div w="100%" h="15%" d="flex" flexDir="column">
                <Text textSize="display2" w="100%" h="50%" textAlign="center"> Tesla </Text>
                <Div className="ElementTwo" w="100%" h="50%" align="center" rounded="xl"> 
                    <FittedImage fit="contain" loader={<div> Loading </div>}  src="https://s3.polygon.io/logos/tsla/logo.png" rounded="xl"/>
                </Div>
            </Div>

            <Div className="Page" w="100%" h="85%" d="flex" flexDir="row">


                <Div className="Info-ColOne" w="50%" h="100%">
                    <Div className="data-point" p={{b:"5%"}} h="20%">
                        <Text textSize="display1" textWeight="700" textAlign="center"> Section Title </Text>
                        <Text textSize="display1" textWeight="500" textAlign="center"> Value </Text>
                    </Div>

                    <Div className="data-point" p={{b:"5%"}} h="20%">
                        <Text textSize="display1" textWeight="700" textAlign="center"> Section Title </Text>
                        <Text textSize="display1" textWeight="500" textAlign="center"> Value </Text>
                    </Div>

                    <Div className="data-point" p={{b:"5%"}} h="20%">
                        <Text textSize="display1" textWeight="700" textAlign="center"> Section Title </Text>
                        <Text textSize="display1" textWeight="500" textAlign="center"> Value </Text>
                    </Div>

                    <Div className="data-point" p={{b:"5%"}} h="20%">
                        <Text textSize="display1" textWeight="700" textAlign="center"> Section Title </Text>
                        <Text textSize="display1" textWeight="500" textAlign="center"> Value </Text>
                    </Div>

                </Div>

                <Div className="Info-ColTwo" w="50%" h="100%">
                    <Div className="data-point" p={{b:"5%"}} h="20%">
                        <Text textSize="display1" textWeight="700" textAlign="center"> Section Title </Text>
                        <Text textSize="display1" textWeight="500" textAlign="center"> Value </Text>
                    </Div>

                    <Div className="data-point" p={{b:"5%"}} h="20%">
                        <Text textSize="display1" textWeight="700" textAlign="center"> Section Title </Text>
                        <Text textSize="display1" textWeight="500" textAlign="center"> Value </Text>
                    </Div>

                    <Div className="data-point" p={{b:"5%"}} h="20%">
                        <Text textSize="display1" textWeight="700" textAlign="center"> Section Title </Text>
                        <Text textSize="display1" textWeight="500" textAlign="center"> Value </Text>
                    </Div>

                    <Div className="data-point" p={{b:"5%"}} h="20%">
                        <Text textSize="display1" textWeight="700" textAlign="center"> Section Title </Text>
                        <Text textSize="display1" textWeight="500" textAlign="center"> Value </Text>
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