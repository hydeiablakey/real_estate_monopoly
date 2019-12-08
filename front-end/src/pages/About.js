import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../style/About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about-main-container">
        <div className="about-sub-container">
          <div>
            <h2 className="rulesTitle">Rules of the Game</h2>
            <p className="rulesText">
              The game operates as a normal monopoly game would but with a
              Twist! Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse. for more info on how to
              play monopoly click <a href="#">here</a>{" "}
            </p>
          </div>

          <div>
            <h2 className="controlsTitle">Controls of the game</h2>
            <p className="controlsText">
              The game operates as a normal monopoly game would but with a
              Twist! Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
            </p>
          </div>
        </div>
      </div>
    );
  }
}
