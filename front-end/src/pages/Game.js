import React, { Component } from "react";
import "../style/Game.css";
import "../style/Board.css";
// import Players from "./components/Players";

import Board from "./Board";

class Game extends Component {
  state = {
    players: this.props.players,
    gameStarted: this.props.gameStarted,
    currentPlayer: 1,
    square: null
  };

  movePlayer = (number, squares) => {
    this.setState(prevState => {
      let currentPlayer = prevState.players.find(
        player => player.number === prevState.currentPlayer
      );
      const location = currentPlayer.location + number;
      const landingSquare = squares[location % squares.length];
      const increaseScore = landingSquare.type === currentPlayer.pawn ? 2 : -1;

      currentPlayer = {
        ...currentPlayer,
        location: currentPlayer.location + number,
        score: Math.max(0, currentPlayer.score + increaseScore)
      };

      const square = {
        player: currentPlayer.number,
        type: landingSquare.type,
        points: (increaseScore > 0 ? "+" : "") + increaseScore
      };

      return {
        square,
        players: prevState.players.map(player => {
          if (player.number === prevState.currentPlayer) {
            return currentPlayer;
          }
          return player;
        }),
        currentPlayer: this.getCurrent(prevState.currentPlayer)
      };
    });
  };

  getCurrent(previousPlayer) {
    // player number, I made it
    switch (previousPlayer) {
      case 1:
        return 2;
      case 2:
        return 3;
      case 3:
        return 4;
      case 4:
        return 1;
    }
  }

  render() {
    return (
      <div className="Game gameContainer">
        {/* <Players players={this.state.players} /> */}
        {this.state.gameStarted ? (
          <Board
            movePlayer={this.movePlayer}
            currentPlayer={this.state.currentPlayer}
            square={this.state.square}
            players={this.state.players}
          />
        ) : (
		//   <PlayerSelect startGame={this.startGame} />
		null
        )}
      </div>
    );
  }
}

export default Game;
