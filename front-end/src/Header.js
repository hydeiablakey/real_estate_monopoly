import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { NavLink} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return ( 
    <Navbar fixed="top" bg="light" expand="lg">
    <Nav>
        <Navbar.Text className="logo"> 
        LogsCabin
         </Navbar.Text>
        
                       
        <NavItem>
            <NavLink exact to="/" className="inactive" activeClassName="active">
            <h3>Game</h3>
            </NavLink>
         </NavItem>

        <NavItem>
            <NavLink  to="/Login" className="inactive" activeClassName="active">
            <h3>Login </h3>
            </NavLink>
        </NavItem>
                        
                        
        <NavItem>
            <NavLink  to="/Signup" className="inactive" activeClassName="active">
            <h3>Signup</h3>
            </NavLink>
        </NavItem>
                        
        <NavItem>
            <NavLink  to="/Lobby" className="inactive" activeClassName="active">
            <h3>Lobby</h3>
            </NavLink>
        </NavItem>
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