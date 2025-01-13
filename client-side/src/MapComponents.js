import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet.fullscreen';
import 'leaflet.markercluster';
import 'leaflet-control-geocoder';
import 'leaflet.heat';
import 'leaflet-routing-machine';
import 'leaflet-easybutton';
import 'leaflet/dist/leaflet.css';
import 'leaflet.fullscreen/Control.FullScreen.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-easybutton/src/easy-button.css';
import './MapPage.css'; // Import the new CSS file
import { EditControl } from 'react-leaflet-draw';

const MapComponent = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);

    const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const satelliteLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.opentopomap.org/copyright">OpenTopoMap</a> contributors'
    });

    const baseLayers = {
      "OpenStreetMap": osmLayer,
      "Satellite": satelliteLayer
    };

    L.control.layers(baseLayers).addTo(map);
    map.addControl(new L.Control.Fullscreen());

    map.locate({ setView: true, maxZoom: 16 });

    const customIcon = L.icon({
      iconUrl: 'custom-marker-icon.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    const locations = [
      { lat: 51.505, lon: -0.09, name: "Location 1" },
      { lat: 51.515, lon: -0.1, name: "Location 2" },
      { lat: 51.525, lon: -0.12, name: "Location 3" }
    ];

    const markers = L.markerClusterGroup();

    locations.forEach(location => {
      const marker = L.marker([location.lat, location.lon], { icon: customIcon }).addTo(map);
      marker.bindPopup(`<b>${location.name}</b>`);
      marker.bindTooltip(`${location.name}`, { permanent: true, direction: "right" });
      markers.addLayer(marker);
    });

    map.addLayer(markers);
    L.Control.geocoder().addTo(map);

    map.on('locationfound', e => {
      L.marker(e.latlng).addTo(map).bindPopup("You are here!").openPopup();
    });

    map.on('locationerror', e => {
      alert(e.message);
    });

    L.control.scale().addTo(map);

    const miniMap = new L.Control.MiniMap(osmLayer, {
      toggleDisplay: true,
      minimized: false
    }).addTo(map);

    const customControl = L.Control.extend({
      options: { position: 'topright' },
      onAdd: () => {
        const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
        container.innerHTML = 'Toggle Markers';
        container.style.backgroundColor = 'white';
        container.style.padding = '5px';
        container.style.cursor = 'pointer';
        container.onclick = () => {
          if (map.hasLayer(markers)) {
            map.removeLayer(markers);
          } else {
            map.addLayer(markers);
          }
        };
        return container;
      }
    });
    map.addControl(new customControl());

    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);
    const drawControl = new L.Control.Draw({
      edit: { featureGroup: drawnItems }
    });
    map.addControl(drawControl);

    map.on('draw:created', e => {
      const layer = e.layer;
      drawnItems.addLayer(layer);
    });

    const heat = L.heatLayer([
      [51.505, -0.09, 0.5],
      [51.515, -0.1, 0.4],
      [51.525, -0.12, 0.3]
    ], { radius: 25 }).addTo(map);

    L.Routing.control({
      waypoints: [
        L.latLng(51.505, -0.09),
        L.latLng(51.515, -0.1)
      ]
    }).addTo(map);

    L.easyButton('fa-globe', function(btn, map) {
      alert('Custom button clicked!');
    }).addTo(map);
  }, []);

  return (
    <div id="map-container">
      <div id="map" style={{ height: '100vh', width: '100%' }}></div>
    </div>
  );
};

export default MapComponent;
