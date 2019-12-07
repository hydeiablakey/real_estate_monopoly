import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../style/Footer.css';


export default class About extends Component {

    render() {
        return (
            <div className="footerComponent">
             <div className="footerContainer">
            <Row>
            <Col className="rulesTitle">Rules of the Game</Col>
             <Col className="controlsTitle">Controls of the game</Col>
            </Row>
            <Row>
                <Col><p className="rulesText">The game operates as a  normal monopoly game would but with a Twist! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. for more info on how to play monopoly click <a href="#">here</a> </p> </Col> 

                <Col><p className="controlsText">The game operates as a  normal monopoly game would but with a Twist! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</p></Col>
            </Row>
            </div>
  

   
            </div>
        )
    }
}






