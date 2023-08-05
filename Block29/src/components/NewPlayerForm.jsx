import React, { useState } from 'react';

const NewPlayerForm = ({ addPlayer }) => {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [team, setTeam] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        addPlayer({ name, owner, team });
        setName('');
        setOwner('');
        setTeam('');
    };

    return (
        <form onSubmit={submitForm}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
            <input type="text" value={owner} onChange={e => setOwner(e.target.value)} placeholder="Owner" required />
            <input type="text" value={team} onChange={e => setTeam(e.target.value)} placeholder="Team" required />
            <button type="submit">Add Player</button>
        </form>
    );
};

export default NewPlayerForm;
