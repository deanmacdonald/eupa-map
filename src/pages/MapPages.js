import React from 'react';
import MapComponent from '@components/MapComponent';
import '@styles/MapPage.css';

const MapPage = () => {
  return (
    <div>
      <header>
        <h1>New Map</h1>
      </header>
      <main>
        <section id="map-section">
          <MapComponent />
        </section>
      </main>
      <footer>
        <p>&copy; New Map 2024</p>
      </footer>
    </div>
  );
};

export default MapPage;

