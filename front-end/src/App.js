/*
Game.js will act as homepage

*/
import React from "react";
import "./style/App.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Signup from "./pages/Signup.js";
import Login from "./pages/Login.js";
import Game from "./pages/Game.js";
import Lobby from "./pages/Lobby.js";
import Choice from "./pages/Choice.js";
import { Route, Switch } from "react-router-dom";
import openSocket from "socket.io-client";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      login: false
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

  startGame = (e) => {
    this.setState({ redirect: true });
  };

  render() {
    const { redirect } = this.state;

    const LoginWrapper = () => <Login login={this.login} redirect={redirect} />;

    const SignupWrapper = () => (
      <Signup signup={this.signup} redirect={redirect} />
    );

    const GameWrapper = () => <Game />;

    const ChoiceWrapper = () => (
      <Choice redirect={redirect} goToLobby={this.goToLobby} />
    );

    const LobbyWrapper = () => <Lobby redirect={redirect} startGame={this.startGame} />;

    //this.socket = null;
    return (
      <div className="main-container">
        <Header />

        <Switch>
          <Route exact path="/" component={LoginWrapper} />
          <Route path="/login" component={LoginWrapper} />
          <Route path="/signup" component={SignupWrapper} />
          <Route path="/choice" component={ChoiceWrapper} />
          <Route path="/game" component={GameWrapper} />
          <Route path="/lobby" component={LobbyWrapper} />
        </Switch>
        <Footer />
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
