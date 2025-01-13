import React from 'react';
import L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.fullscreen';
import 'leaflet-control-geocoder';
import 'leaflet-minimap';

class App extends React.Component {
  componentDidMount() {
    // Initialize the map
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker
    const marker = L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();

    // Add fullscreen control
    L.control.fullscreen().addTo(map);

    // Add geocoder control
    L.Control.geocoder().addTo(map);

    // Add minimap
    const miniMap = new L.Control.MiniMap(L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')).addTo(map);

    // Add marker cluster group
    const markers = L.markerClusterGroup();
    markers.addLayer(marker);
    map.addLayer(markers);
  }

  render() {
    return (
      <div id="map" style={{ height: '100vh' }}></div>
    );
  }
}

export default App;
