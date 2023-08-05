import React from 'react';
import SinglePlayer from './SinglePlayer';

const AllPlayers = ({ players, deletePlayer }) => (
    <div>
        {players.map(player => (
            <SinglePlayer key={player.id} player={player} deletePlayer={deletePlayer} />
        ))}
    </div>
);

export default AllPlayers;
