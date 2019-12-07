import React, { Component } from "react";
import ReactDice from "react-dice-complete";
import "react-dice-complete/dist/react-dice-complete.css";

class Board extends Component {
  state = {
    squares: [],
    grid_size: 11
  };

  componentDidMount() {
    const squares = this.createSquares();
    this.setState({
      squares
    });
  }

  createSquares() {
    const {
      players: [player_1, player_2, player_3, player_4]
    } = this.props;
    const { grid_size } = this.state;

    const squares = [
      {
        row: 1,
        col: 1,
        type: "fortune"
      }
    ];

    let i = 1;
    let row = 1;
    let col = 2;
    const total_squares = grid_size * 2 + (grid_size - 2) * 2;
    while (squares.length < total_squares) {
      const square = {
        row,
        col
      };

      switch (i) {
        case 10:
          square.type = "go-to-misfortune";
          break;
        case 20:
          square.type = "start";
          break;
        case 30:
          square.type = "misfortune";
          break;
      }

      squares.push(square);
      i++;

      if (i < grid_size) {
        col++;
      } else if (i < 2 * grid_size - 1) {
        row++;
      } else if (i < 3 * grid_size - 2) {
        col--;
      } else {
        row--;
      }
    }

    return squares;
  }

  handleRolling = diceResult => {
    console.log(diceResult);
    this.props.movePlayer(diceResult, this.state.squares);
  };

  rollDie = () => {
    this.reactDice.rollAll();
  };

  generateSpecialCard(i) {
    switch (i) {
      case 0:
        return "Fortune";
      case 10:
        return "Go To Misfortune";
      case 20:
        return "<-Start";
      case 30:
        return "Misfortune";

      default:
        return null;
    }
  }

  render() {
    const { grid_size } = this.state;
    let playerLocations = [];
    if (this.state.squares.length > 0) {
      playerLocations = this.props.players.map(
        player =>
          this.state.squares[player.location % this.state.squares.length]
      );
    }
    // grid-template-rows 1fr 1fr 1fr 1fr that means there will be 4 rows and all will take the same hieht in the grid
    // or grid-template-rows: repeat(4, 1fr) and rid-template-columns: repeat(4, 1fr)
    // grid-template-columns 1fr 1fr 1fr 1fr that means there will be 4 columns and all will take the same hieht in the grid
    // or grid-template: repeat(4, 1fr) / repeat(4, 1fr)  first are rows second columns
    return (
      <div
        className="game-board"
        style={{
          gridTemplate: `repeat(${grid_size}, 2fr) / repeat(${grid_size}, 1fr)`
        }}
      >
        {this.state.squares.map((square, i) => (
          <div
            // places each square in a row: number column: number in our grid
            style={{
              gridRow: square.row,
              gridColumn: square.col
            }}
            key={i}
            className="game-square"
          >
            {this.generateSpecialCard(i)}
          </div>
        ))}
        {playerLocations.map((location, i) => {
          const player = this.props.players[i];
          return (
            <div
              key={player.number}
              style={{
                gridRow: location.row,
                gridColumn: location.col,
                transition: "1 1 2 1"
              }}
              className="player-avatar"
            >
              <p> </p>
              <img
                alt={player.number}
                className="pawn"
                src={`./pawns/${player.pawn}-pawn.png`}
              />
            </div>
          );
        })}
        <div className="board-middle">
          <h1>LogsCabin</h1>
          <h4>Player {this.props.currentPlayer}, Roll the die!</h4>
          <p className="rolled-die">{this.state.rolledNumber}</p>
          <div>
            <ReactDice
              numDice={2}
              rollDone={this.handleRolling}
              dotColor="#000000"
              faceColor="#6ed6ff"
              ref={dice => (this.reactDice = dice)}
            />
          </div>
          <button onClick={this.rollDie} className="button">
            Roll
          </button>
        </div>
      </div>
    );
  }
}

export default Board;
