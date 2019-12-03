import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../style/Login.css';


export default class Login extends Component {
	render() {
		return (
		<div className="loginContainer">
			<div className="formLogin">
					<Form className="formLoginElement">
						<Label className="loginTitle" for="loginTitle">Login</Label>

								<FormGroup>
										<Label for="userInput">Username</Label>
										<Input className="userLogin" type="username" name="username" id="userName" placeholder="Enter Username" />
								</FormGroup>
								<FormGroup>
										<Label for="passwordInput">Password</Label>
										<Input type="password" name="password" id="userPassword" placeholder="Enter Password" />
								</FormGroup>
									<Button className="loginButton">Login</Button>

								<div className="signuplinkContainer">
								       <Label className="signupLink">Not a member? <a href="#">Sign up here</a></Label>
								</div>
					</Form>

			</div>
		</div>

		)
	}
}