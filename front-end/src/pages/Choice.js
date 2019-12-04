import React, { Component } from 'react';
import '../style/Choice.css';
import Button from 'react-bootstrap/Button'
import ModalComponent from '../Modal.js';
import { NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';


export default class Choice extends Component {
	render() {
		return (
            <div className="choiceContainer">
				<div className="choiceGame">
					<p className="choiceTitle">Choose</p>
						<div className="choiceButtons">
							<div className="buttonFunctionality">
								<Button variant="primary" size="lg" block>
								New Game
								</Button>
								<Button variant="secondary" size="lg" block>
								Resume Game
								</Button>
								<Button variant="secondary" size="lg" block>
								Join Game
								</Button>
							</div>
						</div>
							
						<ModalComponent />
						<div className="choiceLinks">
						<NavLink tag={Link} to="/404">Log out </NavLink>
						</div>
				</div>
            </div>
		)
	}
}