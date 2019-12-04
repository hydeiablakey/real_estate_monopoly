import React, { Component, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './style/Modal.css';


export default class ModalComponent extends Component {
	render() {
		return (
            <div className="modalContainer">
                <Button className="ruleButton" >
                   Rules
                </Button>
            </div>
		)
	}
}