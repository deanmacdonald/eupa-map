import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../client-side/public/styles/HomePage.css'; // Ensure this path is correct

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to New Map</h1>
      </header>
      <main>
        <p>Explore the map and discover new locations!</p>
        <Button variant="contained" color="primary" className="controls">
          <Link to="/map" style={{ color: 'white', textDecoration: 'none' }}>Go to Map</Link>
        </Button>
      </main>
      <footer>
        <p>&copy; New Map 2025</p>
      </footer>
    </div>
  );
};

export default HomePage;
