import React from 'react';
import { Link } from 'react-router-dom';

const SinglePlayer = ({ player, deletePlayer }) => (
    <div className="player">
        <h2>{player.name}</h2>
        <button onClick={() => deletePlayer(player.id)}>Delete</button>
        <Link to={`/player/${player.id}`}>See Details</Link>
    </div>
);

export default SinglePlayer;
