import React from 'react';
import {Consumer} from './context';
import Player from './Player';

const PlayerList = () => {
    return (
        <Consumer>
            {context => (
                <React.Fragment>
                {context.players.map((player, index) =>
                    <Player
                        {...player}
                        key={player.id.toString()}
                        index={index}
                        isHighScore={context.actions.highScore()}
                    />
                )}
            </React.Fragment>
            )}
        </Consumer>       
    );
}

export default PlayerList;