import React, { Component } from "react";
import "../style/Lobby.css";
import "../style/Choice.css";
import ModalComponent from "../Modal.js";
import { NavLink } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

export default class Lobby extends Component {
  
  displayUsers = () => {
    const { players } = this.props;
    return  players.map( (player, index) => <div key={index} className={`player-${player.number}-turn`}><p>Player {player.number}</p></div>)
  };


  render() {
    const { redirect } = this.props;
    if (redirect) {
      return <Redirect to="/game" />;
    }

    return (
      <div className="lobbyContainer">
        <div className="lobbyGame">
          <p className="lobbyTitle"> Welcome to the Lobby</p>
          <p className="lobbyToken"> Lobby Token Number: 123456</p>
          <p className="userTitle">USERS:</p>
          <div>
            {this.displayUsers()}
          </div>
          <Button
            onClick={this.props.startGame}
            variant="secondary"
            size="lg"
            block
            className='startGameButton' 
          >
            Start Game
          </Button>
        </div>
      </div>
    );
  }
}
