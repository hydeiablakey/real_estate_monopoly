import React, { Component } from "react";
import "../style/Lobby.css";
import "../style/Choice.css";
import ModalComponent from "../Modal.js";
import { NavLink } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

export default class Lobby extends Component {
  render() {
    const { redirect } = this.props;
    if (redirect) {
      return <Redirect to="/game" />;
    }

    return (
      <div className="lobbyContainer">
        <div className="lobbyGame">
          <p className="lobbyTitle"> Welcome to the Lobby</p>
          <p className="lobbyToken"> Lobby Token Number: {}</p>
          <p className="userTitle">USERS:</p>
          <Button
            onClick={this.props.startGame}
            variant="secondary"
            size="lg"
            block
          >
            Start Game
          </Button>

          <ModalComponent />
          <div className="choiceLinks">
            <NavLink tag={Link} to="/">
              Log out{" "}
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
