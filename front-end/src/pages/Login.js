import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class Login extends Component {
	render() {
		return (
		<div className="formLogin">
		  <Container>
			<Form className="formLoginElement">
				<FormGroup>
					<Label for="userInput">Username</Label>
					<Input type="username" name="username" id="userName" placeholder="Enter Username" />
				</FormGroup>
				<FormGroup>
					<Label for="passwordInput">Password</Label>
					<Input type="password" name="password" id="userPassword" placeholder="Enter Password" />
				</FormGroup>
				<Button>Login</Button>
			</Form>
		   </Container>
		</div>

		)
	}
}