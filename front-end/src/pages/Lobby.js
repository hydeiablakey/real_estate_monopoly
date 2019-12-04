import React, { Component } from 'react';
import '../style/Lobby.css';
import '../style/Choice.css';
import ModalComponent from '../Modal.js';
import { NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

export default class Lobby extends Component {
	render() {
		return (
            <div className="lobbyContainer">
			  <div className="lobbyGame">
			  <p className="lobbyTitle"> Welcome to the Lobby</p>
			  <p className="lobbyToken"> Lobby Token Number: {}</p>
			  <p className="userTitle">USERS:</p>

			  <ModalComponent />
						<div className="choiceLinks">
						<NavLink tag={Link} to="/404">Log out </NavLink>
						</div>
			  
			  
			  </div>
            </div>
		)
	}
}