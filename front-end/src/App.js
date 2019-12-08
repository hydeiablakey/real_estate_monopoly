/*
Game.js will act as homepage

*/
import React from "react";
import "./style/App.css";
import Header from "./Header.js";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import Game from "./pages/Game.js";
import Lobby from "./pages/Lobby.js";
import Choice from "./pages/Choice.js";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import openSocket from "socket.io-client";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      login: false,
      gameStarted: false,
      players: [
        { location: 20, number: 1, pawn: "red", score: 0 },
        { location: 20, number: 2, pawn: "blue", score: 0 },
        { location: 20, number: 3, pawn: "yellow", score: 0 },
        { location: 20, number: 4, pawn: "green", score: 0 }
      ]
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.redirect) {
      this.setState({ redirect: false });
    }
  }

  login = e => {
    e.preventDefault();
    this.setState({ redirect: true });
  };

  signup = e => {
    e.preventDefault();
    this.setState({ redirect: true });
  };

  goToLobby = e => {
    this.setState({ redirect: true });
  };

  startGame = e => {
    this.setState({ redirect: true, gameStarted: true });
  };

  render() {
    const { redirect } = this.state;

    const LoginWrapper = () => <Login login={this.login} redirect={redirect} />;

    const SignupWrapper = () => (
      <Signup signup={this.signup} redirect={redirect} />
    );

    const GameWrapper = () => (
      <Game gameStarted={this.state.gameStarted} players={this.state.players} />
    );

    const ChoiceWrapper = () => (
      <Choice redirect={redirect} goToLobby={this.goToLobby} />
    );

    const LobbyWrapper = () => (
      <Lobby redirect={redirect} startGame={this.startGame} />
    );

    //this.socket = null;
    return (
      <div className="main-container">
        <Header />

        <Switch>
          <Route exact path="/" component={LoginWrapper} />
          <Route exact path="/about" component={About} />
          <Route path="/login" component={LoginWrapper} />
          <Route path="/signup" component={SignupWrapper} />
          <Route path="/choice" component={ChoiceWrapper} />
          <Route path="/game" component={GameWrapper} />
          <Route path="/lobby" component={LobbyWrapper} />
        </Switch>
      </div>
    );
  }

  // componentDidMount() {
  //   this.socket = openSocket("http://127.0.0.1:5000");

  //   this.socket.on("connect", () => console.log("server is connected"));
  //   this.socket.on("message", response => console.log(response));

  //   this.socket.on("loginResponse", response => {
  //        if(response.status < 300){
  //          this.setState({user: response.user})
  //         alert('Success')
  //        }else{
  //          alert('Error Login')
  //        }
  //   });

  //   this.socket.on("registerResponse", response => {

  //   });

  //   //this.socket.emit("message", "how are you?");
  //   //this.socket.emit("login", {user_name:"jose", password:"123"});
  // }
}

export default App;
