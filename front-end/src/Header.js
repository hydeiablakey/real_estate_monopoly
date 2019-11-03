import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return ( 
    <Navbar fixed="top" bg="light" expand="lg">
    <Nav>
    <Navbar.Text className="logo"> 
        LogsCabin</Navbar.Text>
    <Nav.Item>
        <Nav.Link href="/home">Game</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link href="/home">Lobby</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="link-1">Register</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link href="/home">Login</Nav.Link>
    </Nav.Item>
    </Nav>

    <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">Player Name Here</a>
    </Navbar.Text>
  </Navbar.Collapse>
    </Navbar>

        )
    }

}