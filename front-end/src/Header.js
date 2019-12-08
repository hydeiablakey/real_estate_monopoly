import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  NavbarBrand
} from "reactstrap";
import "./style/Header.css";

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

  displayLinks = () => {
    const { login } = this.props;

    if (login) {
      return [
        <NavItem>
          <NavLink
            tag={Link}
            to="/choice"
            className="inactive"
            activeClassName="active"
          >
            Game
          </NavLink>
        </NavItem>,
        <NavItem>
          <NavLink
            tag={Link}
            to="/"
            className="inactive"
            activeClassName="active"
            onClick={this.props.logout}
          >
            Logout
          </NavLink>
        </NavItem>
      ];
    } else {
      return [
        <NavItem>
          <NavLink
            tag={Link}
            to="/login"
            className="inactive"
            activeClassName="active"
          >
            Login
          </NavLink>
        </NavItem>,

        <NavItem>
          <NavLink
            tag={Link}
            to="/signup"
            className="inactive"
            activeClassName="active"
          >
            Signup
          </NavLink>
        </NavItem>
      ];
    }
  };

  render() {
    return (
      <div>
        <Navbar className="mx-auto navigation" color="light" light expand="md">
          <NavbarBrand className="website-title" href="/">
            LogsCabin
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink
                  tag={Link}
                  exact
                  to="/"
                  className="inactive"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={Link}
                  exact
                  to="/about"
                  className="inactive"
                  activeClassName="active"
                >
                  Rules
                </NavLink>
              </NavItem>
              {this.displayLinks()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
