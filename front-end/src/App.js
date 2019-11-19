/*
Game.js will act as homepage

*/

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './Header.js';
import Footer from './Footer.js';
import Signup from './pages/Signup.js';
import Login from './pages/Login.js';
import Game from './pages/Game.js';
import Lobby from './pages/Lobby.js';
import {Router, Route, Switch, browserHistory } from 'react-router';


export default class App extends Component {
	render() {
		return (

		<Router>
			<Route path={"/"} component={Header} />
				<Route path= {"game"} component={Game} />
				<Route path= {"signup"} component={Signup} />
				<Route path= {"login"} component={Login} />
				<Route path= {"lobby"} component={Lobby} />
		</Router>

		)
	}
}

