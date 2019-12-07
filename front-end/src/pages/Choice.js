import React, { Component } from 'react';
import '../style/Choice.css';
import Button from 'react-bootstrap/Button'
import ModalComponent from '../Modal.js';
import { NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';


export default class Choice extends Component {
	render() {
		const {redirect} = this.props;
		if(redirect){
			return <Redirect to='/lobby' />
		}

		return (
            <div className="choiceContainer">
				<div className="choiceGame">
					<p className="choiceTitle">Choose</p>
						<div className="choiceButtons">
							<div className="buttonFunctionality">
								<Button onClick={this.props.goToLobby} variant="primary" size="lg" block>
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
						<NavLink tag={Link} to="/">Log out </NavLink>
						</div>
				</div>
            </div>
		)
	}
}