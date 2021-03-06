import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, NavLink } from 'reactstrap';
import '../style/Login.css';
import { NavLink as Link } from 'react-router-dom';
import ModalComponent from '../Modal.js';

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
									<ModalComponent />

								<div className="signuplinkContainer">
								       <Label className="signupLink">
										<NavLink tag={Link} to="/signup"> Not a member? Sign up here </NavLink>
									   </Label>
								</div>
					</Form>

			</div>
		</div>

		)
	}
}