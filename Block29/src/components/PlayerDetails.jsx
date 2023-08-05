import React, { useEffect, useState } from 'react';

const PlayerDetails = ({ match, players }) => {
    const [player, setPlayer] = useState({});

    useEffect(() => {
        const playerId = match.params.id;
        const foundPlayer = players.find(player => player.id === playerId);
        setPlayer(foundPlayer);
    }, [players, match.params.id]);

    return player ? (
        <div className="player-details">
            <h2>{player.name}</h2>
            <p>Owner: {player.owner}</p>
            <p>Team: {player.team}</p>
        </div>
    ) : <h2>No player found</h2>;
};

export default PlayerDetails;
