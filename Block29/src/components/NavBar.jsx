import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ setSearch }) => {
    return (
        <nav>
            <input type="text" onChange={e => setSearch(e.target.value)} placeholder="Search player" />
            <Link to="/">Home</Link>
            {/* Add any other navigation links as needed */}
        </nav>
    );
};

export default NavBar;
