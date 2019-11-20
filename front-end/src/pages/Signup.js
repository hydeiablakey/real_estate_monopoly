import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Signup extends Component {
	render() {
		return (
			<div className="formSignup">
					<Form>
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
				<Button>Sign up</Button>
				<FormGroup>				<Label for="passwordInput">forgot password? click <a href="#">here</a> to reset</Label></FormGroup>
				</Form>

	
		</div>
		)
	}
}