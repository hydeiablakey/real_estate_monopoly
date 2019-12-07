import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../style/Signup.css';
import { NavLink as Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import ModalComponent from '../Modal.js';
import {Redirect} from 'react-router-dom';

export default class Signup extends Component {
	render() {
		const {redirect} = this.props;
		if(redirect){
			return <Redirect to='/login' />
		}

		return (
		<div className="signupContainer">
			<div className="formSignup">
			 <Form>
			 <Label className="signupTitle">Sign up</Label>
				<FormGroup>
					<Label for="userInput">Username</Label>
					<Input type="username" name="username" id="signupUsername" placeholder="JohnDoexxx" />
				</FormGroup>
				<FormGroup>
					<Label for="emailInput">Email</Label>
					<Input type="email" name="email" id="signupEmail" placeholder="johndoexxx@mail.com" />
				</FormGroup>
				<FormGroup>
					<Label for="passwordInput">Password</Label>
					<Input type="password" name="password" id="signupPassword" placeholder="Enter Password" />
				</FormGroup>
				<FormGroup>
					<Label for="passwordInput">Confirm password</Label>
					<Input type="password" name="password" id="signupPassword2" placeholder="Re-enter password" />
				</FormGroup>
				<Button onClick={this.props.signup} className="signupButton">Sign up</Button>
				<ModalComponent />

					<Label className="memberContainer">
					
					<NavLink tag={Link} to="/login"> Already a member? Login here </NavLink>

					 </Label>
				</Form>
			</div>
		</div>
		)
	}
}