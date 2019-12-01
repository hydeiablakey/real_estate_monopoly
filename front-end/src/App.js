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
    this.socket.on("message", response => console.log(response));

    this.socket.on("loginResponse", response => {
         if(response.status < 300){
           this.setState({user: response.user})
          alert('Success')
         }else{
           alert('Error Login')
         }
    });
    
    this.socket.on("registerResponse", response => {

    });
    
    //this.socket.emit("message", "how are you?");
    //this.socket.emit("login", {user_name:"jose", password:"123"});
  }

  handle_login = (e)=>{
    e.preventDefault()
    const userName = document.getElementById('userName').value.trim();
    const password = document.getElementById('userPassword').value.trim();
    
    this.socket.emit("login", {user_name: userName, password});
  }

  render() {

    const LogInComponent = () => (
      <Login
        handle_login={this.handle_login}
      />
    );

    return (
      <div className="main-container">
        <Header />

        <Switch>
          <Route exact path="/" component={Game} />
          <Route path="/login" component={LogInComponent} />
          <Route path="/signup" component={Signup} />
          <Route path="/lobby" component={Lobby} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
