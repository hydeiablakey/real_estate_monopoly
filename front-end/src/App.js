/*
Game.js will act as homepage

*/
import React from 'react';
import './style/App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Signup from './pages/Signup.js';
import Login from './pages/Login.js';
import Game from './pages/Game.js';
import Lobby from './pages/Lobby.js';
import Choice from './pages/Choice.js';
import { Route, Switch } from 'react-router-dom';


function App() {
	return (
		<div className="main-container">
			<Header />

			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route path="/choice" component={Choice} />
				<Route path="/game" component={Game} />
				<Route path="/lobby" component={Lobby} />
			</Switch>
			<Footer />

		</div>
		
	)
}

export default App;

