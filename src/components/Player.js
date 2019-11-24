import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

  static propTypes = {
    removePlayer: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    isHighScore: PropTypes.bool
  };

  render() {
    
    const { 
      name,
      id,
      score,
      index,
      removePlayer,
      isHighScore
    } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          
          <Icon isHighScore = {isHighScore} />
          { name }
        </span>
  
        <Counter 
          score={score}
          index={index}
        />
      </div>
    );
  }
}

export default Player;