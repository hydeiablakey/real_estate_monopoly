/*
Game.js will act as homepage

*/
import React from "react";
import "./App.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import Game from "./pages/Game.js";
import Lobby from "./pages/Lobby.js";
import { Route, Switch } from "react-router-dom";
import openSocket from "socket.io-client";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.socket = null;
  }

  componentDidMount() {
    this.socket = openSocket("http://127.0.0.1:5000");
    this.socket.on("connect", () => console.log("server is connected"));
    this.socket.emit("message", "how are you?");
    this.socket.on("message", msg => console.log(msg));
  }

  render() {
    return (
      <div className="main-container">
        <Header />

        <Switch>
          <Route exact path="/" component={Game} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/lobby" component={Lobby} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
