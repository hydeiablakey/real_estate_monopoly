import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, NavbarText, NavbarBrand } from 'reactstrap';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/">LogsCabin</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} exact to="/"> Home </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink tag={Link} to="/login"> Login </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink tag={Link} to="/signup"> Signup </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink tag={Link} to="/lobby"> Lobby </NavLink>
                            </NavItem>


                        </Nav>

                    </Collapse>

                </Navbar>
            </div>
        )
    }
}









