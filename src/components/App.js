import React, { Component } from 'react';
import { Provider } from './context';
import Header from './Header';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Paul",
        score: 0,
        id: 1
      },
      {
        name: "Jess",
        score: 0,
        id: 2
      },
      {
        name: "Thomas",
        score: 0,
        id: 3
      },
      {
        name: "Bikram",
        score: 0,
        id: 4
      }
    ]
  };

  // player id counter
  prevPlayerId = 4;

  handleHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  }

  handleScoreChange = (index, delta) => {
    this.setState(prevState => {
      // New 'players' array – a copy of the previous `players` state
      const updatedPlayers = [...prevState.players];
      // A copy of the player object we're targeting
      const updatedPlayer = { ...updatedPlayers[index] };

      // Update the target player's score
      updatedPlayer.score += delta;
      // Update the 'players' array with the target player's latest score
      updatedPlayers[index] = updatedPlayer;

      // Update the `players` state without mutating the original state
      return {
        players: updatedPlayers
      };
    });
  }

  handleAddPlayer = (name) => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      };
    });
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <Provider value={{
        players: this.state.players,
        actions: {
          changeScore: this.handleScoreChange,
          highScore: this.handleHighScore,
          removePlayer: this.handleAddPlayer,
          addPlayer: this.handleAddPlayer
        }
      }}>
        <div className="scoreboard">
          <Header />
          <PlayerList />
          <AddPlayerForm />
        </div>
      </Provider>
    );
  }
}

export default App;
