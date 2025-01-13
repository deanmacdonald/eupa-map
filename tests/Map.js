import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.fullscreen/Control.FullScreen.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-minimap/dist/Control.MiniMap.min.css';
import 'leaflet.fullscreen';
import 'leaflet.markercluster';
import 'leaflet-control-geocoder';
import 'leaflet-minimap';

const Map = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add fullscreen control
    map.addControl(new L.Control.Fullscreen());

    // Add marker clustering
    const markers = L.markerClusterGroup();
    const marker = L.marker([51.505, -0.09]).bindPopup('A pretty CSS3 popup.<br> Easily customizable.');
    markers.addLayer(marker);
    map.addLayer(markers);

    // Add geocoder control
    L.Control.geocoder().addTo(map);

    // Add mini map
    const miniMap = new L.Control.MiniMap(L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'), {
      toggleDisplay: true,
      minimized: false
    }).addTo(map);
  }, []);

  return (
    <div data-testid="map" id="map" style={{ height: 'calc(100vh - 100px)' }}>
      {/* The map will render here */}
    </div>
  );
};

export default Map;
