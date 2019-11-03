import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';
export default class App extends Component {
	render() {
		return (
		<Container>
		<Header />
		<div id="content">
		Gameplay
		  </div>
		<Footer />
		</Container>
		)
	}
}

