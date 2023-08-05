import axios from 'axios';

export const fetchPlayers = async () => {
  const response = await axios.get('https://api.example.com/players');
  return response.data;
};

export const fetchPlayer = async (id) => {
  const response = await axios.get(`https://api.example.com/players/${id}`);
  return response.data;
};
