import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, NavLink } from 'reactstrap';
import '../style/Login.css';
import { NavLink as Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import ModalComponent from '../Modal.js';

export default class Login extends Component {
	render() {
		const {redirect} = this.props;
		if(redirect){
			return <Redirect to='/choice' />
		}
		return (
		<div className="loginContainer">
<<<<<<< HEAD
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
								 
									<Button className="loginButton" onClick={this.props.login}>Login</Button>
									<ModalComponent />

								<div className="signuplinkContainer">
								       <Label className="signupLink">
										<NavLink tag={Link} to="/signup"> Not a member? Sign up here </NavLink>
									   </Label>
								</div>
					</Form>

			</div>
=======
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
				<Button onClick={this.props.handle_login}>Login</Button>
			</Form>
		   </Container>
		</div>
>>>>>>> connecting-socket.io-client
		</div>

		)
	}
}