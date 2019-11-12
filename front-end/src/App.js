/*
Game.js will act as homepage

*/

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './Header.js';
import Footer from './Footer.js';
import Signup from './Signup.js';
import Login from './Login.js';
import Game from './Game.js';
import Lobby from './Lobby';
import {Route, Switch } from 'react-router-dom';

export default class App extends Component {
	render() {
		return (
		<Container>
		<Header />
		<Game /> 

		<Switch>
		<Route exact path="/" component={Game} />
		<Route exact path="/Signup" component={Signup} />
		<Route exact path="/Login" component={Login} />
		<Route exact path="/Lobby" component={Lobby} />
		</Switch>

		<Footer />
		</Container>
		)
	}
}

