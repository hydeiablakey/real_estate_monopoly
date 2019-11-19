/*
Game.js will act as homepage

*/
import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Signup from './pages/Signup.js';
import Login from './pages/Login.js';
import Game from './pages/Game.js';
import Lobby from './pages/Lobby.js';
import { Route, Switch } from 'react-router-dom';


function App() {
	return (
		<div>
			<Header />

			<Switch>
				<Route exact path="/" component={Game} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route path="/lobby" component={Lobby} />
			</Switch>

		</div>
	)
}

export default App;

