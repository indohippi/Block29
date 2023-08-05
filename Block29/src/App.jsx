import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar";
import AllPlayers from "./components/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/players")
      .then((response) => setPlayers(response.data))
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/players" element={<AllPlayers players={players} />} />
  <Route path="/new" element={<NewPlayerForm />} />
  <Route path="/players/:id" element={<SinglePlayer />} />
</Routes>
    </Router>
  );
}

export default App;
